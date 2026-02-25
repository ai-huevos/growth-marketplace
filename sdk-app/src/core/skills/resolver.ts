/**
 * Path Resolver — resolves relative paths within skill directories.
 *
 * Skills reference their own frameworks/, templates/, patterns/, examples/
 * via relative paths. This module resolves them to absolute paths
 * based on the SKILL.md file location.
 */

import { dirname, join, resolve } from "node:path";
import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";

export interface SkillContext {
  /** Absolute path to the skill directory (parent of SKILL.md) */
  skillDir: string;
  /** Paths to framework .md files */
  frameworks: string[];
  /** Paths to template .md files */
  templates: string[];
  /** Paths to pattern .md files */
  patterns: string[];
  /** Paths to example .md files */
  examples: string[];
}

/**
 * Resolve all context file paths for a skill based on its SKILL.md location.
 */
export function resolveSkillDir(skillFilePath: string): string {
  return dirname(resolve(skillFilePath));
}

/**
 * Read a file relative to the skill directory.
 * Returns null if the file doesn't exist.
 */
export async function readSkillFile(
  skillDir: string,
  relativePath: string,
): Promise<string | null> {
  const fullPath = join(skillDir, relativePath);
  try {
    await access(fullPath, constants.R_OK);
    return await readFile(fullPath, "utf-8");
  } catch {
    return null;
  }
}

/**
 * Read all .md files from a subdirectory within the skill directory.
 * Returns an array of { name, content } objects.
 */
export async function readSkillSubdir(
  skillDir: string,
  subdir: string,
): Promise<Array<{ name: string; content: string }>> {
  const { readdir } = await import("node:fs/promises");
  const dirPath = join(skillDir, subdir);

  try {
    const files = await readdir(dirPath);
    const mdFiles = files.filter((f) => f.endsWith(".md"));

    const results = await Promise.all(
      mdFiles.map(async (name) => {
        const content = await readFile(join(dirPath, name), "utf-8");
        return { name, content };
      }),
    );

    return results;
  } catch {
    return [];
  }
}

/**
 * Load the full context for a skill (lazy — only when skill is activated).
 * Reads all frameworks/, templates/, patterns/, examples/ subdirectories.
 */
export async function loadSkillContext(skillFilePath: string): Promise<SkillContext> {
  const skillDir = resolveSkillDir(skillFilePath);

  const [frameworks, templates, patterns, examples] = await Promise.all([
    readSkillSubdir(skillDir, "frameworks"),
    readSkillSubdir(skillDir, "templates"),
    readSkillSubdir(skillDir, "patterns"),
    readSkillSubdir(skillDir, "examples"),
  ]);

  return {
    skillDir,
    frameworks: frameworks.map((f) => join(skillDir, "frameworks", f.name)),
    templates: templates.map((f) => join(skillDir, "templates", f.name)),
    patterns: patterns.map((f) => join(skillDir, "patterns", f.name)),
    examples: examples.map((f) => join(skillDir, "examples", f.name)),
  };
}
