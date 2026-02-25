/**
 * Quality Gates — Agentic Constitution Art. VII
 *
 * Three-phase validation framework:
 *   Phase 1: Pre-Execution (input validation)
 *   Phase 2: In-Execution (process monitoring)
 *   Phase 3: Post-Execution (output validation)
 */

export type GatePhase = "pre" | "in" | "post";
export type GateResult = "pass" | "fail" | "warn";

export interface GateCheck {
  gate: string;
  phase: GatePhase;
  result: GateResult;
  message: string;
  /** The metric value that was evaluated */
  value?: number;
  /** The threshold that was checked against */
  threshold?: number;
}

// ─── Phase 1: Pre-Execution Gates ────────────────────────────────────

export function checkSchemaInput(inputValid: boolean): GateCheck {
  return {
    gate: "schema_input",
    phase: "pre",
    result: inputValid ? "pass" : "fail",
    message: inputValid ? "Input schema valid" : "Input does not match expected schema",
  };
}

export function checkContextSufficiency(
  pulsoCompleteness: number,
  threshold = 0.6,
): GateCheck {
  return {
    gate: "contexto_suficiente",
    phase: "pre",
    result: pulsoCompleteness >= threshold ? "pass" : "fail",
    message: pulsoCompleteness >= threshold
      ? `PULSO ${(pulsoCompleteness * 100).toFixed(0)}% complete`
      : `PULSO only ${(pulsoCompleteness * 100).toFixed(0)}% complete (need ${(threshold * 100).toFixed(0)}%)`,
    value: pulsoCompleteness,
    threshold,
  };
}

export function checkICPFields(
  hasIndustry: boolean,
  hasSize: boolean,
  hasPain: boolean,
  hasGeo: boolean,
): GateCheck {
  const missing: string[] = [];
  if (!hasIndustry) missing.push("industry");
  if (!hasSize) missing.push("size");
  if (!hasPain) missing.push("pain");
  if (!hasGeo) missing.push("geo");

  return {
    gate: "icp_fields",
    phase: "pre",
    result: missing.length === 0 ? "pass" : "fail",
    message: missing.length === 0
      ? "All ICP fields present"
      : `Missing ICP fields: ${missing.join(", ")} — redirect to /icp`,
  };
}

export function checkBrandVoiceLoaded(loaded: boolean): GateCheck {
  return {
    gate: "brand_voice",
    phase: "pre",
    result: loaded ? "pass" : "fail",
    message: loaded ? "Brand voice loaded" : "Brand voice not configured",
  };
}

export function checkBudgetAvailable(
  estimatedCostUsd: number,
  remainingBudgetUsd: number,
): GateCheck {
  return {
    gate: "budget_available",
    phase: "pre",
    result: estimatedCostUsd <= remainingBudgetUsd ? "pass" : "warn",
    message: estimatedCostUsd <= remainingBudgetUsd
      ? `Budget OK ($${estimatedCostUsd} <= $${remainingBudgetUsd} remaining)`
      : `Budget warning: $${estimatedCostUsd} estimated > $${remainingBudgetUsd} remaining`,
    value: estimatedCostUsd,
    threshold: remainingBudgetUsd,
  };
}

// ─── Phase 2: In-Execution Gates ─────────────────────────────────────

export function checkConfidenceThreshold(
  confidence: number,
  threshold = 70,
): GateCheck {
  return {
    gate: "confidence_threshold",
    phase: "in",
    result: confidence >= threshold ? "pass" : "fail",
    message: confidence >= threshold
      ? `Confidence ${confidence}% OK`
      : `Confidence ${confidence}% < ${threshold}% — escalate`,
    value: confidence,
    threshold,
  };
}

export function checkPulsoMapping(
  dimensionsCovered: number,
  minDimensions = 2,
): GateCheck {
  return {
    gate: "pulso_mapping",
    phase: "in",
    result: dimensionsCovered >= minDimensions ? "pass" : "fail",
    message: dimensionsCovered >= minDimensions
      ? `Output covers ${dimensionsCovered} PULSO dimensions`
      : `Only ${dimensionsCovered} PULSO dimensions covered (need ${minDimensions})`,
    value: dimensionsCovered,
    threshold: minDimensions,
  };
}

// ─── Phase 3: Post-Execution Gates ───────────────────────────────────

export function checkQualityScore(
  score: number,
  threshold = 7.0,
): GateCheck {
  return {
    gate: "quality_score",
    phase: "post",
    result: score >= threshold ? "pass" : "fail",
    message: score >= threshold
      ? `Quality score ${score} >= ${threshold}`
      : `Quality score ${score} < ${threshold} — regenerate or escalate`,
    value: score,
    threshold,
  };
}

export function checkHeadlineScore(
  score: number,
  psychTriggerCount: number,
  scoreThreshold = 7.5,
  minTriggers = 2,
): GateCheck {
  const scoreOk = score >= scoreThreshold;
  const triggersOk = psychTriggerCount >= minTriggers;

  return {
    gate: "headline_score",
    phase: "post",
    result: scoreOk && triggersOk ? "pass" : "fail",
    message: scoreOk && triggersOk
      ? `Headline score ${score}, ${psychTriggerCount} triggers`
      : `Headline: score ${score} (need ${scoreThreshold}), triggers ${psychTriggerCount} (need ${minTriggers})`,
    value: score,
    threshold: scoreThreshold,
  };
}

export function checkPulsoViability(
  pulsoScore: number,
  threshold = 23,
): GateCheck {
  return {
    gate: "pulso_viability",
    phase: "post",
    result: pulsoScore >= threshold ? "pass" : "fail",
    message: pulsoScore >= threshold
      ? `PULSO ${pulsoScore} >= ${threshold} — proposal generation allowed`
      : `PULSO ${pulsoScore} < ${threshold} — DENIED: proposal generation blocked`,
    value: pulsoScore,
    threshold,
  };
}

// ─── Composite ───────────────────────────────────────────────────────

/**
 * Run a batch of gate checks and determine if execution should proceed.
 * Returns all results + an overall pass/fail.
 */
export function runGates(checks: GateCheck[]): {
  passed: boolean;
  results: GateCheck[];
  failures: GateCheck[];
  warnings: GateCheck[];
} {
  const failures = checks.filter((c) => c.result === "fail");
  const warnings = checks.filter((c) => c.result === "warn");

  return {
    passed: failures.length === 0,
    results: checks,
    failures,
    warnings,
  };
}
