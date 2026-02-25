/**
 * Model selection per agent role.
 *
 * Maps agent roles to Claude model identifiers.
 * Rationale from plan:
 *   - Opus: Highest reasoning — orchestrator, playbook-coach (routing, diagnosis, framework synthesis)
 *   - Sonnet: Strong creative/analytical — copy pipeline, funnel-architect, deal-strategist
 *   - Haiku: High volume, formulaic — SDR agent, /estado, /diagnostico
 */

export type ModelId = "opus" | "sonnet" | "haiku";

export type AgentRole =
  | "orchestrator"
  | "playbook-coach"
  | "research-agent"
  | "insight-agent"
  | "ideation-agent"
  | "output-agent"
  | "funnel-architect"
  | "deal-strategist"
  | "sdr-agent";

/** Default model assignment per agent role */
const MODEL_DEFAULTS: Record<AgentRole, ModelId> = {
  // Opus tier — complex reasoning
  "orchestrator": "opus",
  "playbook-coach": "opus",

  // Sonnet tier — creative + analytical
  "research-agent": "sonnet",
  "insight-agent": "sonnet",
  "ideation-agent": "sonnet",
  "output-agent": "sonnet",
  "funnel-architect": "sonnet",
  "deal-strategist": "sonnet",

  // Haiku tier — high volume, formulaic
  "sdr-agent": "haiku",
};

/**
 * Command complexity determines which model handles self-contained commands.
 * Green zone formulaic commands use haiku; Yellow/Red use sonnet or opus.
 */
export type CommandComplexity = "formulaic" | "analytical" | "strategic";

const COMMAND_MODEL_MAP: Record<CommandComplexity, ModelId> = {
  formulaic: "haiku",
  analytical: "sonnet",
  strategic: "opus",
};

export function getModelForAgent(role: AgentRole, override?: ModelId): ModelId {
  return override ?? MODEL_DEFAULTS[role];
}

export function getModelForCommand(complexity: CommandComplexity, override?: ModelId): ModelId {
  return override ?? COMMAND_MODEL_MAP[complexity];
}
