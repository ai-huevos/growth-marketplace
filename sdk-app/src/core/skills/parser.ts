/**
 * SKILL.md Parser — extracts skill definitions from YAML frontmatter.
 *
 * Handles two trigger patterns:
 *   Pattern A (28/29 skills): Triggers embedded in description as quoted strings
 *     description: Use when "ICP", "ideal customer profile", "target market"
 *   Pattern B (1 skill): Explicit triggers: YAML array
 *     triggers:
 *       - ingest content
 *       - triage research
 *
 * Pattern B takes priority when present.
 */

import { readFile } from "node:fs/promises";
import { parse as parseYaml } from "yaml";

export interface SkillFrontmatter {
  name: string;
  description: string;
  version?: string;
  triggers?: string[];
}

export interface ParsedSkill {
  /** Skill identifier from frontmatter name field */
  id: string;
  /** Full description from frontmatter */
  description: string;
  /** Semantic version (may be absent — e.g., conversational-pm) */
  version: string | undefined;
  /** Extracted trigger phrases for activation matching */
  triggers: string[];
  /** Full Markdown body (everything after frontmatter) */
  body: string;
  /** Absolute path to the SKILL.md file */
  filePath: string;
}

/**
 * Parse a SKILL.md file into a structured skill definition.
 */
export async function parseSkillFile(filePath: string): Promise<ParsedSkill> {
  const raw = await readFile(filePath, "utf-8");
  return parseSkillContent(raw, filePath);
}

/**
 * Parse SKILL.md content (for testing without filesystem).
 */
export function parseSkillContent(content: string, filePath: string): ParsedSkill {
  const { frontmatter, body } = extractFrontmatter(content);

  const parsed = parseYaml(frontmatter) as SkillFrontmatter;

  if (!parsed.name) {
    throw new Error(`SKILL.md missing required 'name' field: ${filePath}`);
  }

  // Pattern B: explicit triggers array takes priority
  let triggers: string[];
  if (Array.isArray(parsed.triggers) && parsed.triggers.length > 0) {
    triggers = parsed.triggers.map((t) => t.toLowerCase().trim());
  } else {
    // Pattern A: extract quoted strings from description
    triggers = extractTriggersFromDescription(parsed.description ?? "");
  }

  return {
    id: parsed.name,
    description: parsed.description ?? "",
    version: parsed.version?.toString(),
    triggers,
    body,
    filePath,
  };
}

/**
 * Extract YAML frontmatter delimited by --- markers.
 */
function extractFrontmatter(content: string): { frontmatter: string; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: "", body: content };
  }
  return {
    frontmatter: match[1] ?? "",
    body: match[2] ?? "",
  };
}

/**
 * Pattern A: Extract trigger phrases from description field.
 *
 * Looks for quoted strings: "ICP", "ideal customer profile", etc.
 * These are the activation keywords embedded in natural language descriptions.
 */
function extractTriggersFromDescription(description: string): string[] {
  // Match strings inside double quotes
  const matches = description.match(/"([^"]+)"/g);
  if (!matches) return [];

  return matches
    .map((m) => m.slice(1, -1).toLowerCase().trim())
    .filter((t) => t.length > 0);
}
