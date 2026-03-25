/**
 * Skills Loader — discovers and parses all SKILL.md files at startup.
 *
 * Glob pattern: plugins/* /skills/* /SKILL.md + tools/* /SKILL.md
 * Parses each file → registers in SkillRegistry.
 *
 * Lazy content loading: SKILL.md body and subdirectories are NOT read
 * until the skill is actually activated. This keeps token costs low
 * (Agentic Constitution Art. VI — budget guards).
 */

import { glob } from "glob";
import { join } from "node:path";
import { parseSkillFile, type ParsedSkill } from "./parser.js";
import { SkillRegistry } from "./registry.js";

export interface LoaderStats {
  /** Total SKILL.md files discovered */
  discovered: number;
  /** Successfully parsed and registered */
  registered: number;
  /** Failed to parse (with error details) */
  errors: Array<{ filePath: string; error: string }>;
}

/**
 * Discover all SKILL.md files in the content root.
 * Searches both plugins/ and tools/ directories.
 */
async function discoverSkillFiles(contentRoot: string): Promise<string[]> {
  const patterns = [
    join(contentRoot, "plugins/*/skills/*/SKILL.md"),
    join(contentRoot, "tools/*/SKILL.md"),
  ];

  const results = await Promise.all(
    patterns.map((pattern) => glob(pattern, { absolute: true })),
  );

  return results.flat();
}

/**
 * Load all skills from the content root into a registry.
 *
 * This is the main entry point — called once at startup.
 * Returns the populated registry and loading statistics.
 */
export async function loadAllSkills(
  contentRoot: string,
): Promise<{ registry: SkillRegistry; stats: LoaderStats }> {
  const registry = new SkillRegistry();
  const stats: LoaderStats = {
    discovered: 0,
    registered: 0,
    errors: [],
  };

  const files = await discoverSkillFiles(contentRoot);
  stats.discovered = files.length;

  // Parse all skill files in parallel
  const results = await Promise.allSettled(
    files.map(async (filePath): Promise<ParsedSkill> => {
      return parseSkillFile(filePath);
    }),
  );

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!;
    if (result.status === "fulfilled") {
      registry.register(result.value);
      stats.registered++;
    } else {
      stats.errors.push({
        filePath: files[i]!,
        error: result.reason instanceof Error ? result.reason.message : String(result.reason),
      });
    }
  }

  return { registry, stats };
}

/**
 * Reload a single skill (for hot-reload scenarios).
 */
export async function reloadSkill(
  registry: SkillRegistry,
  filePath: string,
): Promise<void> {
  const skill = await parseSkillFile(filePath);
  registry.register(skill);
}
