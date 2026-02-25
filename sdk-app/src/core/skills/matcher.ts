/**
 * Trigger Matching Algorithm — maps user input to skill activation.
 *
 * Matching strategy (ordered by specificity):
 * 1. Exact match: user input === trigger phrase
 * 2. Contains match: trigger phrase found within user input
 * 3. Fuzzy match: word overlap above threshold (for natural language variation)
 *
 * Returns ranked results sorted by confidence.
 */

import type { ParsedSkill } from "./parser.js";

export interface MatchResult {
  skill: ParsedSkill;
  trigger: string;
  confidence: number;
  matchType: "exact" | "contains" | "fuzzy";
}

/**
 * Match user input against all registered skills.
 * Returns all matches sorted by confidence (highest first).
 */
export function matchTriggers(
  input: string,
  skills: ParsedSkill[],
): MatchResult[] {
  const normalized = input.toLowerCase().trim();
  const results: MatchResult[] = [];

  for (const skill of skills) {
    for (const trigger of skill.triggers) {
      const match = scoreTriggerMatch(normalized, trigger);
      if (match) {
        results.push({
          skill,
          trigger,
          confidence: match.confidence,
          matchType: match.type,
        });
      }
    }
  }

  // Sort by confidence descending, then by match type specificity
  return results.sort((a, b) => {
    if (b.confidence !== a.confidence) return b.confidence - a.confidence;
    return matchTypePriority(b.matchType) - matchTypePriority(a.matchType);
  });
}

/**
 * Find the single best matching skill for an input.
 * Returns null if no match exceeds the minimum confidence threshold.
 */
export function bestMatch(
  input: string,
  skills: ParsedSkill[],
  minConfidence = 0.5,
): MatchResult | null {
  const matches = matchTriggers(input, skills);
  const best = matches[0];
  if (!best || best.confidence < minConfidence) return null;
  return best;
}

// ─── Internal scoring ─────────────────────────────────────────────────

interface ScoreResult {
  confidence: number;
  type: "exact" | "contains" | "fuzzy";
}

function scoreTriggerMatch(input: string, trigger: string): ScoreResult | null {
  // Exact match
  if (input === trigger) {
    return { confidence: 1.0, type: "exact" };
  }

  // Contains match: trigger phrase appears in user input
  if (input.includes(trigger)) {
    // Confidence based on how much of the input the trigger covers
    const coverage = trigger.length / input.length;
    return { confidence: 0.7 + coverage * 0.25, type: "contains" };
  }

  // Fuzzy: word overlap
  const inputWords = new Set(input.split(/\s+/));
  const triggerWords = trigger.split(/\s+/);

  if (triggerWords.length === 0) return null;

  const overlap = triggerWords.filter((w) => inputWords.has(w)).length;
  const overlapRatio = overlap / triggerWords.length;

  if (overlapRatio >= 0.5) {
    return { confidence: overlapRatio * 0.6, type: "fuzzy" };
  }

  return null;
}

function matchTypePriority(type: "exact" | "contains" | "fuzzy"): number {
  switch (type) {
    case "exact": return 3;
    case "contains": return 2;
    case "fuzzy": return 1;
  }
}
