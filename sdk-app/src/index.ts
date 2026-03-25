/**
 * @aihuevos/growthos-sdk — Public API
 *
 * GrowthOS Agent SDK: programmatic runtime for the AI Huevos Growth Marketplace.
 * Transforms the content-only plugin system into API-callable, autonomous agents.
 */

// ─── Config ───────────────────────────────────────────────────────────
export { loadEnvConfig, type EnvConfig } from "./config/env.js";
export {
  getModelForAgent,
  getModelForCommand,
  type ModelId,
  type AgentRole,
  type CommandComplexity,
} from "./config/models.js";
export {
  checkBudget,
  recordCost,
  createBudgetState,
  type BudgetLimits,
  type BudgetState,
  type BudgetCheckResult,
} from "./config/budgets.js";
export {
  getSkillZone,
  getCommandZone,
  getInitialTrustLevel,
  canGraduate,
  requiresHumanApproval,
  type Zone,
  type TrustLevel,
  ZONE_STATS,
} from "./config/zones.js";

// ─── GCO Core ─────────────────────────────────────────────────────────
export {
  GCOSchema,
  type GCO,
  type Company,
  type Offer,
  type Pain,
  type Assets,
  type Pulso,
  type PulsoDimension,
  type PhaseState,
  type CompletedSkill,
  type EscalationEntry,
  type QualityMetricsEntry,
  Phase,
  Bottleneck,
  OfferType,
  PricingModel,
  PulsoStatus,
  GrowthStage,
  pulsoTotal,
  BOTTLENECK_TO_PHASE,
} from "./core/gco/schema.js";
export {
  loadGCO,
  loadGCOFromPath,
  listGCOs,
  type GCOLoadResult,
} from "./core/gco/loader.js";
export { saveGCO, saveGCOToPath } from "./core/gco/writer.js";
export { validateGCO, validatePartialGCO, type ValidationResult } from "./core/gco/validator.js";
export { migrateGCO, needsMigration, CURRENT_VERSION } from "./core/gco/migrations.js";

// ─── Skills ───────────────────────────────────────────────────────────
export { parseSkillFile, parseSkillContent, type ParsedSkill } from "./core/skills/parser.js";
export { matchTriggers, bestMatch, type MatchResult } from "./core/skills/matcher.js";
export { loadSkillContext, resolveSkillDir, readSkillFile, type SkillContext } from "./core/skills/resolver.js";
export { SkillRegistry } from "./core/skills/registry.js";
export { loadAllSkills, reloadSkill, type LoaderStats } from "./core/skills/loader.js";

// ─── Constitution Engine ──────────────────────────────────────────────
export {
  checkAllNeverRules,
  checkExternalCommunication,
  checkDataIntegrity,
  checkDiagnosticIntegrity,
  checkBrandSafety,
  type NeverRuleViolation,
  type NeverRuleId,
} from "./core/constitution/never-rules.js";
export {
  evaluateGraduation,
  shouldDegrade,
  criteriaFromMetrics,
  type GraduationCriteria,
  type GraduationResult,
  type DegradationReason,
} from "./core/constitution/trust.js";
export {
  checkLowConfidence,
  checkCriticalScore,
  checkSentimentRisk,
  checkQualityFailure,
  checkFragileGiant,
  createEscalationEntry,
  runEscalationChecks,
  type EscalationTrigger,
  type EscalationCheck,
  type EscalationResolution,
} from "./core/constitution/escalation.js";
export {
  checkSchemaInput,
  checkContextSufficiency,
  checkConfidenceThreshold,
  checkQualityScore,
  checkPulsoViability,
  runGates,
  type GatePhase,
  type GateResult,
  type GateCheck,
} from "./core/constitution/quality-gates.js";
export { createAuditEntry, type AuditEntry } from "./core/constitution/audit.js";
export { BudgetGuard } from "./core/constitution/budget-guard.js";
