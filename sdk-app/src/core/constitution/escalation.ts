/**
 * Escalation Engine — Agentic Constitution Art. IV
 *
 * 5 automatic escalation triggers with resolution protocol.
 * Escalations pause execution and require human resolution.
 */

import type { EscalationEntry } from "../gco/schema.js";

export type EscalationTrigger =
  | "low_confidence"
  | "critical_score"
  | "sentiment_risk"
  | "quality_failure"
  | "fragile_giant";

export interface EscalationCheck {
  trigger: EscalationTrigger;
  fired: boolean;
  details: string;
  skill: string;
  value?: number;
  threshold?: number;
}

// ─── Trigger 1: Low Confidence ───────────────────────────────────────

export function checkLowConfidence(
  confidence: number,
  skill: string,
  threshold = 70,
): EscalationCheck {
  return {
    trigger: "low_confidence",
    fired: confidence < threshold,
    details: `Confidence ${confidence}% < ${threshold}% threshold`,
    skill,
    value: confidence,
    threshold,
  };
}

// ─── Trigger 2: Critical PULSO Score ─────────────────────────────────

export function checkCriticalScore(
  pulsoScore: number,
  skill: string,
  threshold = 20,
): EscalationCheck {
  return {
    trigger: "critical_score",
    fired: pulsoScore < threshold,
    details: `PULSO score ${pulsoScore} < ${threshold}: No-Go — blocks MAP and proposal generation`,
    skill,
    value: pulsoScore,
    threshold,
  };
}

// ─── Trigger 3: Sentiment Risk ───────────────────────────────────────

export function checkSentimentRisk(
  sentimentDetected: boolean,
  skill: string,
): EscalationCheck {
  return {
    trigger: "sentiment_risk",
    fired: sentimentDetected,
    details: "Frustration or anger detected in communication — sequence stopped",
    skill,
  };
}

// ─── Trigger 4: Quality Failure ──────────────────────────────────────

export function checkQualityFailure(
  consecutiveFailures: number,
  skill: string,
  maxRetries = 3,
): EscalationCheck {
  return {
    trigger: "quality_failure",
    fired: consecutiveFailures >= maxRetries,
    details: `Quality score below threshold after ${consecutiveFailures} consecutive attempts`,
    skill,
    value: consecutiveFailures,
    threshold: maxRetries,
  };
}

// ─── Trigger 5: Fragile Giant ────────────────────────────────────────

export function checkFragileGiant(
  clarqScore: number,
  skill: string,
  threshold = 16,
): EscalationCheck {
  return {
    trigger: "fragile_giant",
    fired: clarqScore < threshold,
    details: `ClarQ Score ${clarqScore} < ${threshold}: Business needs to stabilize before growing`,
    skill,
    value: clarqScore,
    threshold,
  };
}

// ─── Resolution Protocol ─────────────────────────────────────────────

export interface EscalationResolution {
  /** How it was resolved */
  action: "human_override" | "additional_context" | "abort" | "retry";
  /** Human-provided direction */
  direction?: string;
  /** Updated confidence after resolution */
  newConfidence?: number;
}

/**
 * Create an escalation log entry for GCO persistence.
 */
export function createEscalationEntry(
  check: EscalationCheck,
  resolution?: EscalationResolution,
): EscalationEntry {
  return {
    timestamp: new Date().toISOString(),
    trigger: check.trigger,
    skill: check.skill,
    confidence: check.value,
    resolution: resolution?.direction,
    resolved_by: resolution?.action === "human_override" ? "human" : "agent",
    impact: resolution ? `Resolved via ${resolution.action}` : undefined,
  };
}

/**
 * Run all escalation checks and return any that fired.
 */
export function runEscalationChecks(checks: EscalationCheck[]): EscalationCheck[] {
  return checks.filter((c) => c.fired);
}
