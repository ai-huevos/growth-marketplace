/**
 * GrowthOS Context Object (GCO) — TypeScript Schema
 *
 * Derived from: os/intake/context-object.md
 * Validated with Zod at load/save boundaries.
 *
 * The GCO is the persistent state per client. It travels between sessions,
 * feeds every skill/agent with context, and stores trust + quality metrics.
 */

import { z } from "zod";

// ─── Enums ────────────────────────────────────────────────────────────

export const OfferType = z.enum(["Producto", "Servicio", "Híbrido"]);
export type OfferType = z.infer<typeof OfferType>;

export const PricingModel = z.enum(["One-time", "Recurring", "Usage-based", "Project-based"]);
export type PricingModel = z.infer<typeof PricingModel>;

export const Bottleneck = z.enum(["identidad", "atracción", "conversión", "retención"]);
export type Bottleneck = z.infer<typeof Bottleneck>;

export const Phase = z.enum(["definir", "atraer", "convertir", "escalar"]);
export type Phase = z.infer<typeof Phase>;

export const PulsoStatus = z.enum(["low", "moderate", "high"]);
export type PulsoStatus = z.infer<typeof PulsoStatus>;

export const TrustLevel = z.enum(["HITL", "HOTL", "HOOTL"]);
export type TrustLevel = z.infer<typeof TrustLevel>;

export const GrowthStage = z.enum(["early", "growth", "scale"]);
export type GrowthStage = z.infer<typeof GrowthStage>;

// ─── Sub-schemas ──────────────────────────────────────────────────────

export const CompanySchema = z.object({
  name: z.string(),
  industry: z.string(),
  size: z.string(),
  location: z.string().optional(),
  years_in_market: z.number().optional(),
});

export const OfferSchema = z.object({
  type: OfferType,
  description: z.string(),
  price_range: z.string().optional(),
  model: PricingModel.optional(),
});

export const PainSchema = z.object({
  bottleneck: Bottleneck,
  specific: z.string(),
  quantified: z.string().optional(),
  impact: z.string().optional(),
});

export const AssetsSchema = z.object({
  content: z.array(z.string()).default([]),
  tools: z.array(z.string()).default([]),
  team: z.array(z.string()).default([]),
  clients: z.array(z.string()).default([]),
});

export const PulsoDimensionSchema = z.object({
  score: z.number().min(0).max(100),
  status: PulsoStatus,
  notes: z.string().optional(),
});

export const PulsoSchema = z.object({
  panorama: PulsoDimensionSchema,
  urgencia: PulsoDimensionSchema,
  logro: PulsoDimensionSchema,
  situacion_critica: PulsoDimensionSchema,
  organizacion: PulsoDimensionSchema,
});

export const PhaseStateSchema = z.object({
  current: Phase,
  started_at: z.string(),
  progress: z.number().min(0).max(1),
});

export const CompletedSkillSchema = z.object({
  skill: z.string(),
  completed_at: z.string(),
  output: z.string().optional(),
});

export const OutputArtifactSchema = z.record(
  z.string(),
  z.object({
    file: z.string(),
    created_at: z.string(),
    score: z.number().optional(),
    validated: z.boolean().optional(),
  }).passthrough(),
);

export const MeetingDataSchema = z.object({
  last_meeting: z.string().optional(),
  total_meetings: z.number().default(0),
  transcripts: z.array(z.string()).default([]),
  insights: z.array(z.string()).default([]),
});

export const EscalationEntrySchema = z.object({
  timestamp: z.string(),
  trigger: z.enum([
    "low_confidence",
    "critical_score",
    "sentiment_risk",
    "quality_failure",
    "fragile_giant",
  ]),
  skill: z.string(),
  confidence: z.number().optional(),
  resolution: z.string().optional(),
  resolved_by: z.enum(["human", "agent", "auto"]).optional(),
  impact: z.string().optional(),
});

export const QualityMetricsEntrySchema = z.object({
  total_executions: z.number().default(0),
  avg_confidence: z.number().min(0).max(100).default(0),
  avg_quality_score: z.number().default(0),
  escalation_rate: z.number().min(0).max(1).default(0),
  human_edit_rate: z.number().min(0).max(1).default(0),
  last_execution: z.string().optional(),
  cost_total_usd: z.number().default(0),
});

export const MetadataSchema = z.object({
  growth_stage: GrowthStage.optional(),
  icp_draft: z.string().optional(),
  team_constraints: z.string().optional(),
  asset_inventory: z.string().optional(),
});

// ─── Root GCO Schema ──────────────────────────────────────────────────

export const GCOSchema = z.object({
  version: z.string().default("1.0"),
  created_at: z.string(),
  updated_at: z.string(),

  company: CompanySchema,
  offer: OfferSchema,
  pain: PainSchema,
  assets: AssetsSchema.optional(),

  pulso: PulsoSchema.optional(),
  phase: PhaseStateSchema,
  completed_skills: z.array(CompletedSkillSchema).default([]),
  outputs: OutputArtifactSchema.default({}),

  meeting_data: MeetingDataSchema.optional(),
  trust_levels: z.record(z.string(), TrustLevel).default({}),
  escalation_log: z.array(EscalationEntrySchema).default([]),
  quality_metrics: z.record(z.string(), QualityMetricsEntrySchema).default({}),

  metadata: MetadataSchema.optional(),
});

// ─── Derived TypeScript types ─────────────────────────────────────────

export type GCO = z.infer<typeof GCOSchema>;
export type Company = z.infer<typeof CompanySchema>;
export type Offer = z.infer<typeof OfferSchema>;
export type Pain = z.infer<typeof PainSchema>;
export type Assets = z.infer<typeof AssetsSchema>;
export type PulsoDimension = z.infer<typeof PulsoDimensionSchema>;
export type Pulso = z.infer<typeof PulsoSchema>;
export type PhaseState = z.infer<typeof PhaseStateSchema>;
export type CompletedSkill = z.infer<typeof CompletedSkillSchema>;
export type EscalationEntry = z.infer<typeof EscalationEntrySchema>;
export type QualityMetricsEntry = z.infer<typeof QualityMetricsEntrySchema>;

/**
 * PULSO aggregate score (sum of all 5 dimensions, 0-500 range).
 * Used by escalation triggers — e.g., PULSO < 20 per dimension = "No-Go"
 */
export function pulsoTotal(pulso: Pulso): number {
  return (
    pulso.panorama.score +
    pulso.urgencia.score +
    pulso.logro.score +
    pulso.situacion_critica.score +
    pulso.organizacion.score
  );
}

/**
 * Map bottleneck → initial phase (from seed-questionnaire.md)
 */
export const BOTTLENECK_TO_PHASE: Record<Bottleneck, Phase> = {
  identidad: "definir",
  atracción: "atraer",
  conversión: "convertir",
  retención: "escalar",
};
