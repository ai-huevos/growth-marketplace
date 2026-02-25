/**
 * NEVER Rules — Agentic Constitution Art. I
 *
 * Inviolable limits that cannot be overridden by configuration,
 * user preference, or trust level. These are hard stops.
 *
 * 4 categories:
 * 1. No unsupervised external communication
 * 2. PII and data integrity
 * 3. Anti-hallucination (PULSO diagnostics)
 * 4. Brand safety
 */

import type { TrustLevel } from "../../config/zones.js";

export type NeverRuleViolation = {
  rule: NeverRuleId;
  description: string;
  severity: "block" | "alert";
};

export type NeverRuleId =
  | "external_communication"
  | "pii_exposure"
  | "pulso_hallucination"
  | "brand_violation";

// ─── Rule 1: External Communication ──────────────────────────────────

export interface CommunicationCheck {
  /** Is this action sending something externally? */
  isExternalSend: boolean;
  /** Channel: email, linkedin, whatsapp, social, blog, other */
  channel?: string;
  /** Trust level of the executing skill */
  trustLevel: TrustLevel;
  /** Is the recipient a C-level or Tier 1? */
  isHighValueRecipient?: boolean;
}

export function checkExternalCommunication(
  check: CommunicationCheck,
): NeverRuleViolation | null {
  if (!check.isExternalSend) return null;

  // HITL always requires approval — block
  if (check.trustLevel === "HITL") {
    return {
      rule: "external_communication",
      description: `External ${check.channel ?? "communication"} blocked: requires human approval (HITL)`,
      severity: "block",
    };
  }

  // Even HOTL blocks Tier 1 / C-level communication
  if (check.isHighValueRecipient) {
    return {
      rule: "external_communication",
      description: `External communication to high-value recipient blocked: NEVER send to Tier 1/C-level without explicit HITL approval`,
      severity: "block",
    };
  }

  // HOOTL can only send to Tier 3 / Nurture
  return null;
}

// ─── Rule 2: PII & Data Integrity ────────────────────────────────────

export interface DataIntegrityCheck {
  /** Does the output contain PII? */
  containsPII: boolean;
  /** Is this a financial transaction? */
  isFinancialTransaction: boolean;
  /** Transaction amount in USD */
  transactionAmountUsd?: number;
  /** Is this deleting client data? */
  isDeletion: boolean;
  /** Is this mixing data between clients? */
  isCrossClientData: boolean;
}

export function checkDataIntegrity(
  check: DataIntegrityCheck,
): NeverRuleViolation | null {
  if (check.isCrossClientData) {
    return {
      rule: "pii_exposure",
      description: "Cross-client data access blocked: strict GCO isolation required",
      severity: "block",
    };
  }

  if (check.isFinancialTransaction && (check.transactionAmountUsd ?? 0) > 50) {
    return {
      rule: "pii_exposure",
      description: `Financial transaction >$50 blocked: requires human authorization ($${check.transactionAmountUsd})`,
      severity: "block",
    };
  }

  if (check.isDeletion) {
    return {
      rule: "pii_exposure",
      description: "Data deletion blocked: requires explicit human confirmation + double verification",
      severity: "block",
    };
  }

  if (check.containsPII) {
    return {
      rule: "pii_exposure",
      description: "PII detected in output: must not be stored in unencrypted logs",
      severity: "alert",
    };
  }

  return null;
}

// ─── Rule 3: Anti-Hallucination (PULSO) ──────────────────────────────

export interface DiagnosticCheck {
  /** Does the output contain PULSO scores? */
  hasPulsoScores: boolean;
  /** Are all scores evidence-backed? */
  allScoresEvidenced: boolean;
  /** Does the output contain financial metrics? */
  hasFinancialMetrics: boolean;
  /** Are financial metrics from real client data? */
  financialMetricsVerified: boolean;
  /** Does the output present recommendations as verified facts? */
  hasUnqualifiedRecommendations: boolean;
}

export function checkDiagnosticIntegrity(
  check: DiagnosticCheck,
): NeverRuleViolation | null {
  if (check.hasPulsoScores && !check.allScoresEvidenced) {
    return {
      rule: "pulso_hallucination",
      description: "PULSO scores without evidence: score must be 1 (Desconocido) if no evidence exists",
      severity: "block",
    };
  }

  if (check.hasFinancialMetrics && !check.financialMetricsVerified) {
    return {
      rule: "pulso_hallucination",
      description: "Financial metrics without real data: must use [ESTIMADO] ranges, not fabricated numbers",
      severity: "block",
    };
  }

  if (check.hasUnqualifiedRecommendations) {
    return {
      rule: "pulso_hallucination",
      description: "Recommendations presented as facts: must include confidence level",
      severity: "alert",
    };
  }

  return null;
}

// ─── Rule 4: Brand Safety ────────────────────────────────────────────

export interface BrandCheck {
  /** Quality score of the copy output */
  qualityScore?: number;
  /** Does the output match the client's brand voice? */
  brandVoiceAligned: boolean;
  /** Could the content be interpreted as a legal/financial promise? */
  containsPromises: boolean;
}

export function checkBrandSafety(check: BrandCheck): NeverRuleViolation | null {
  if (check.qualityScore !== undefined && check.qualityScore < 7.0) {
    return {
      rule: "brand_violation",
      description: `Copy quality score ${check.qualityScore} < 7.0 minimum: NEVER deliver sub-threshold copy`,
      severity: "block",
    };
  }

  if (!check.brandVoiceAligned) {
    return {
      rule: "brand_violation",
      description: "Brand voice misalignment: output does not match client brand-voice.md",
      severity: "block",
    };
  }

  if (check.containsPromises) {
    return {
      rule: "brand_violation",
      description: "Content contains legal/financial/contractual promises: NEVER generate binding language",
      severity: "block",
    };
  }

  return null;
}

// ─── Composite check ─────────────────────────────────────────────────

/**
 * Run all applicable NEVER rule checks and return all violations.
 * Empty array = all checks passed.
 */
export function checkAllNeverRules(checks: {
  communication?: CommunicationCheck;
  dataIntegrity?: DataIntegrityCheck;
  diagnostic?: DiagnosticCheck;
  brand?: BrandCheck;
}): NeverRuleViolation[] {
  const violations: NeverRuleViolation[] = [];

  if (checks.communication) {
    const v = checkExternalCommunication(checks.communication);
    if (v) violations.push(v);
  }
  if (checks.dataIntegrity) {
    const v = checkDataIntegrity(checks.dataIntegrity);
    if (v) violations.push(v);
  }
  if (checks.diagnostic) {
    const v = checkDiagnosticIntegrity(checks.diagnostic);
    if (v) violations.push(v);
  }
  if (checks.brand) {
    const v = checkBrandSafety(checks.brand);
    if (v) violations.push(v);
  }

  return violations;
}
