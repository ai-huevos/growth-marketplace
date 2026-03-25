/**
 * Tool: read-skill — Read a SKILL.md file and its context
 *
 * Called by the orchestrator to inject skill content into agent context.
 * Supports lazy loading: reads skill body + optional subdirectories.
 */

import type { SkillRegistry } from "../core/skills/registry.js";
import { loadSkillContext, readSkillSubdir } from "../core/skills/resolver.js";

export interface ReadSkillArgs {
  skillId: string;
  includeFrameworks?: boolean;
  includeTemplates?: boolean;
}

export interface ReadSkillResult {
  found: boolean;
  skillId: string;
  body?: string;
  frameworks?: Array<{ name: string; content: string }>;
  templates?: Array<{ name: string; content: string }>;
}

export async function readSkill(
  args: ReadSkillArgs,
  registry: SkillRegistry,
): Promise<ReadSkillResult> {
  const skill = registry.get(args.skillId);
  if (!skill) {
    return { found: false, skillId: args.skillId };
  }

  const result: ReadSkillResult = {
    found: true,
    skillId: args.skillId,
    body: skill.body,
  };

  const ctx = await loadSkillContext(skill.filePath);

  if (args.includeFrameworks) {
    result.frameworks = await readSkillSubdir(ctx.skillDir, "frameworks");
  }

  if (args.includeTemplates) {
    result.templates = await readSkillSubdir(ctx.skillDir, "templates");
  }

  return result;
}
