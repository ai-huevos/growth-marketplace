/**
 * Audit Trail — Agentic Constitution Art. VIII
 *
 * Every skill/agent execution generates a structured audit entry.
 * Stored in GCO for observability and trust graduation tracking.
 */

import type { Zone, TrustLevel } from "../../config/zones.js";
import type { GateCheck } from "./quality-gates.js";

export interface AuditEntry {
  timestamp: string;
  skill: string;
  command?: string;
  zone: Zone;
  trust_level: TrustLevel;

  input_summary: {
    context: string;
    pulso_available: boolean;
    icp_loaded: boolean;
  };

  execution: {
    confidence: number;
    gates_passed: string[];
    gates_failed: string[];
    escalations: string[];
    token_cost_usd: number;
  };

  output_summary: {
    type: string;
    quality_score?: number;
    pulso_dimensions_covered: string[];
  };

  human_review?: {
    reviewed: boolean;
    edits_made: boolean;
    satisfaction?: "approved" | "rejected" | "modified";
  };
}

/**
 * Create an audit entry from execution context.
 */
export function createAuditEntry(params: {
  skill: string;
  command?: string;
  zone: Zone;
  trustLevel: TrustLevel;
  context: string;
  pulsoAvailable: boolean;
  icpLoaded: boolean;
  confidence: number;
  gateResults: GateCheck[];
  escalations: string[];
  tokenCostUsd: number;
  outputType: string;
  qualityScore?: number;
  pulsoDimensions: string[];
}): AuditEntry {
  return {
    timestamp: new Date().toISOString(),
    skill: params.skill,
    command: params.command,
    zone: params.zone,
    trust_level: params.trustLevel,
    input_summary: {
      context: params.context,
      pulso_available: params.pulsoAvailable,
      icp_loaded: params.icpLoaded,
    },
    execution: {
      confidence: params.confidence,
      gates_passed: params.gateResults
        .filter((g) => g.result === "pass")
        .map((g) => g.gate),
      gates_failed: params.gateResults
        .filter((g) => g.result === "fail")
        .map((g) => g.gate),
      escalations: params.escalations,
      token_cost_usd: params.tokenCostUsd,
    },
    output_summary: {
      type: params.outputType,
      quality_score: params.qualityScore,
      pulso_dimensions_covered: params.pulsoDimensions,
    },
  };
}
