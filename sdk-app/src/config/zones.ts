/**
 * Zone classifications — Agentic Constitution Art. III
 *
 * Every skill and command is classified into Green/Yellow/Red zones.
 * This is the static lookup table compiled from the constitution.
 *
 * Green  = Autonomous (agent executes independently)
 * Yellow = Collaborative (agent recommends, human approves)
 * Red    = Human-only (human executes, agent assists)
 */

export type Zone = "green" | "yellow" | "red";

export type TrustLevel = "HITL" | "HOTL" | "HOOTL";

/** Initial trust level per zone (Art. V) */
export const ZONE_INITIAL_TRUST: Record<Zone, TrustLevel> = {
  green: "HOTL",
  yellow: "HITL",
  red: "HITL",
};

/** Whether a zone can graduate trust levels (Art. V) */
export const ZONE_MAX_TRUST: Record<Zone, TrustLevel> = {
  green: "HOOTL",
  yellow: "HOTL",
  red: "HITL", // Permanently HITL — cannot graduate without zone reclassification
};

// ─── Skill zone classifications (31 skills) ───────────────────────────

const SKILL_ZONES: Record<string, Zone> = {
  // growth-foundations (6)
  "icp-analysis": "green",
  "positioning": "yellow",
  "competitive-analysis": "green",
  "content-strategy": "yellow",
  "quiz-funnel": "yellow",
  "clarq-diagnostic": "green",

  // sales-blueprint (5)
  "discovery-mastery": "yellow",
  "pipeline-management": "green",
  "proposal-generation": "yellow",
  "coaching-cadence": "yellow",
  "sdr-sequences": "yellow",

  // copywriting-engine (4)
  "headline-mastery": "green",
  "email-sequences": "yellow",
  "landing-pages": "yellow",
  "psychological-triggers": "green",

  // motor-de-ofertas (4)
  "escala": "yellow",
  "flujo": "yellow",
  "alma": "red",
  "funnel-optimization": "green",

  // play-to-win (11)
  "sales-transformation": "yellow",
  "customer-success-ops": "yellow",
  "pre-discovery-research": "green",
  "deal-strategy": "yellow",
  "relationship-mapping": "green",
  "renewal-expansion": "yellow",
  "product-marketing": "yellow",
  "icp-tal": "green",
  "customer-journey": "yellow",
  "discovery-demo": "yellow",
  "advanced-techniques": "yellow",

  // conversational-pm (1)
  "project-management": "yellow",
};

// ─── Command zone classifications (18 commands) ──────────────────────

const COMMAND_ZONES: Record<string, Zone> = {
  "diagnostico": "green",
  "icp": "green",
  "quiz": "yellow",
  "discovery": "yellow",
  "pipeline": "green",
  "propuesta": "red",
  "coaching": "yellow",
  "copy": "yellow",
  "headline": "green",
  "email-sequence": "yellow",
  "escala": "yellow",
  "funnel-diagnosis": "green",
  "playbook": "yellow",
  "deal-analysis": "yellow",
  "kickoff": "red",
  "os": "green",
  "roadmap": "yellow",
  "estado": "green",
};

export function getSkillZone(skillId: string): Zone {
  const zone = SKILL_ZONES[skillId];
  if (!zone) {
    // Unknown skills default to yellow (collaborative) — safe fallback
    return "yellow";
  }
  return zone;
}

export function getCommandZone(commandName: string): Zone {
  // Strip leading slash if present
  const name = commandName.startsWith("/") ? commandName.slice(1) : commandName;
  const zone = COMMAND_ZONES[name];
  if (!zone) {
    return "yellow";
  }
  return zone;
}

export function getInitialTrustLevel(zone: Zone): TrustLevel {
  return ZONE_INITIAL_TRUST[zone];
}

export function canGraduate(currentTrust: TrustLevel, zone: Zone): boolean {
  const maxTrust = ZONE_MAX_TRUST[zone];
  if (currentTrust === "HITL" && (maxTrust === "HOTL" || maxTrust === "HOOTL")) return true;
  if (currentTrust === "HOTL" && maxTrust === "HOOTL") return true;
  return false;
}

export function requiresHumanApproval(zone: Zone, trustLevel: TrustLevel): boolean {
  if (zone === "red") return true;
  if (zone === "yellow" && trustLevel === "HITL") return true;
  if (zone === "green" && trustLevel === "HITL") return true;
  return false;
}

/** Summary stats for the zone table */
export const ZONE_STATS = {
  skills: {
    green: Object.values(SKILL_ZONES).filter((z) => z === "green").length,
    yellow: Object.values(SKILL_ZONES).filter((z) => z === "yellow").length,
    red: Object.values(SKILL_ZONES).filter((z) => z === "red").length,
  },
  commands: {
    green: Object.values(COMMAND_ZONES).filter((z) => z === "green").length,
    yellow: Object.values(COMMAND_ZONES).filter((z) => z === "yellow").length,
    red: Object.values(COMMAND_ZONES).filter((z) => z === "red").length,
  },
} as const;
