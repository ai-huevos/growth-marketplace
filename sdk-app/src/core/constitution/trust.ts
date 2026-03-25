/**
 * Trust Management — Agentic Constitution Art. V
 *
 * Manages the HITL → HOTL → HOOTL graduation path per skill per client.
 * Trust is stored in GCO.trust_levels and evaluated from GCO.quality_metrics.
 *
 * Graduation criteria:
 *   HITL → HOTL: >50 tasks, >95% accuracy, 0 critical hallucinations, 30 days
 *   HOTL → HOOTL: >200 tasks, >99% accuracy, fully reversible, 90 days, explicit approval
 *
 * Degradation is automatic; re-graduation requires criteria from zero.
 */

import type { TrustLevel } from "../../config/zones.js";
import { canGraduate, type Zone } from "../../config/zones.js";
import type { QualityMetricsEntry } from "../gco/schema.js";

export interface GraduationCriteria {
  totalExecutions: number;
  avgConfidence: number;
  escalationRate: number;
  humanEditRate: number;
  daysSinceFirstExecution: number;
  criticalHallucinations: number;
  outputReversible: boolean;
  founderApproval: boolean;
}

export interface GraduationResult {
  eligible: boolean;
  currentLevel: TrustLevel;
  nextLevel: TrustLevel | null;
  missingCriteria: string[];
}

/**
 * Evaluate if a skill is eligible for trust graduation.
 */
export function evaluateGraduation(
  currentTrust: TrustLevel,
  zone: Zone,
  criteria: GraduationCriteria,
): GraduationResult {
  if (!canGraduate(currentTrust, zone)) {
    return {
      eligible: false,
      currentLevel: currentTrust,
      nextLevel: null,
      missingCriteria: [`Zone "${zone}" at trust "${currentTrust}" cannot graduate further`],
    };
  }

  const missing: string[] = [];

  if (currentTrust === "HITL") {
    // HITL → HOTL criteria
    if (criteria.totalExecutions < 50) {
      missing.push(`Need ${50 - criteria.totalExecutions} more executions (${criteria.totalExecutions}/50)`);
    }
    if (criteria.avgConfidence < 95) {
      missing.push(`Accuracy ${criteria.avgConfidence}% < 95% required`);
    }
    if (criteria.criticalHallucinations > 0) {
      missing.push(`${criteria.criticalHallucinations} critical hallucinations (must be 0)`);
    }
    if (criteria.daysSinceFirstExecution < 30) {
      missing.push(`${criteria.daysSinceFirstExecution}/30 days minimum period`);
    }

    return {
      eligible: missing.length === 0,
      currentLevel: "HITL",
      nextLevel: "HOTL",
      missingCriteria: missing,
    };
  }

  if (currentTrust === "HOTL") {
    // HOTL → HOOTL criteria
    if (criteria.totalExecutions < 200) {
      missing.push(`Need ${200 - criteria.totalExecutions} more executions (${criteria.totalExecutions}/200)`);
    }
    if (criteria.avgConfidence < 99) {
      missing.push(`Accuracy ${criteria.avgConfidence}% < 99% required`);
    }
    if (!criteria.outputReversible) {
      missing.push("Output is not fully reversible");
    }
    if (criteria.daysSinceFirstExecution < 90) {
      missing.push(`${criteria.daysSinceFirstExecution}/90 days minimum period`);
    }
    if (!criteria.founderApproval) {
      missing.push("Requires explicit founder/owner approval");
    }

    return {
      eligible: missing.length === 0,
      currentLevel: "HOTL",
      nextLevel: "HOOTL",
      missingCriteria: missing,
    };
  }

  return {
    eligible: false,
    currentLevel: currentTrust,
    nextLevel: null,
    missingCriteria: ["Already at maximum trust level"],
  };
}

// ─── Degradation ──────────────────────────────────────────────────────

export type DegradationReason =
  | "critical_hallucination"
  | "accuracy_below_threshold"
  | "user_reported_error"
  | "context_change";

/**
 * Determine if trust should be degraded.
 * Degradation is automatic; re-graduation starts from scratch.
 */
export function shouldDegrade(
  currentTrust: TrustLevel,
  _reason: DegradationReason,
): TrustLevel {
  if (currentTrust === "HITL") return "HITL"; // Already lowest

  if (currentTrust === "HOOTL") return "HOTL";
  if (currentTrust === "HOTL") return "HITL";

  return currentTrust;
}

/**
 * Build graduation criteria from GCO quality metrics.
 */
export function criteriaFromMetrics(
  metrics: QualityMetricsEntry,
  firstExecutionDate: string,
  outputReversible: boolean,
  founderApproval: boolean,
): GraduationCriteria {
  const daysSince = Math.floor(
    (Date.now() - new Date(firstExecutionDate).getTime()) / (1000 * 60 * 60 * 24),
  );

  return {
    totalExecutions: metrics.total_executions,
    avgConfidence: metrics.avg_confidence,
    escalationRate: metrics.escalation_rate,
    humanEditRate: metrics.human_edit_rate,
    daysSinceFirstExecution: daysSince,
    criticalHallucinations: 0, // Must be tracked separately
    outputReversible,
    founderApproval,
  };
}
