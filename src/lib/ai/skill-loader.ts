// Server-only module: reads SKILL.md files from the marketplace content tree.
// Do NOT import this from client components (uses node:fs).

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

// slug -> methodology body, or null when no SKILL.md was found for that slug.
// Cached for the lifetime of the server process (per Next.js worker).
const methodologyCache = new Map<string, string | null>();

// The app's SKILLS_REGISTRY slugs predate the marketplace folder names.
// Maps each app slug to the plugin skill directory that owns its methodology.
const SLUG_ALIASES: Record<string, string> = {
  'icp-definition': 'icp-analysis',
  'value-proposition': 'positioning',
  'cold-email-sequence': 'email-sequences',
  'linkedin-content-plan': 'content-strategy',
  'sales-deck-structure': 'proposal-generation',
  'objection-handling': 'advanced-techniques',
  'customer-success-playbook': 'customer-success-ops',
};

function getContentRoot(): string {
  return process.env.CONTENT_ROOT ?? process.cwd();
}

// Strips the leading YAML frontmatter (--- ... ---) from a SKILL.md file
// and returns the remaining Markdown body.
function stripFrontmatter(raw: string): string {
  const match = raw.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  return (match ? match[1] : raw).trim();
}

// Scans plugins/*/skills/<slug>/SKILL.md for a matching skill folder.
// Returns the absolute file path, or null if no plugin ships that slug.
function findSkillMarkdownPath(slug: string): string | null {
  const pluginsDir = path.join(getContentRoot(), 'plugins');
  if (!existsSync(pluginsDir)) return null;

  let pluginDirs: string[];
  try {
    pluginDirs = readdirSync(pluginsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch {
    return null;
  }

  for (const plugin of pluginDirs) {
    const candidate = path.join(pluginsDir, plugin, 'skills', slug, 'SKILL.md');
    if (existsSync(candidate)) return candidate;
  }

  return null;
}

/**
 * Resolves the methodology context (SKILL.md body, frontmatter stripped) for a
 * skill slug from the marketplace content tree. Returns undefined when no
 * SKILL.md matches the slug — callers should fall back to existing behavior.
 */
export function loadSkillMethodology(skillSlug: string): string | undefined {
  if (methodologyCache.has(skillSlug)) {
    return methodologyCache.get(skillSlug) ?? undefined;
  }

  try {
    const resolvedSlug = SLUG_ALIASES[skillSlug] ?? skillSlug;
    const filePath = findSkillMarkdownPath(resolvedSlug);
    if (!filePath) {
      methodologyCache.set(skillSlug, null);
      return undefined;
    }

    const body = stripFrontmatter(readFileSync(filePath, 'utf-8'));
    methodologyCache.set(skillSlug, body);
    return body;
  } catch {
    // Any fs error (missing dir in a deployed bundle, permissions, etc.) —
    // silently fall back rather than breaking the chat flow.
    methodologyCache.set(skillSlug, null);
    return undefined;
  }
}
