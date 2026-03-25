/**
 * Skills Registry — in-memory store for parsed skill definitions.
 *
 * Provides O(1) lookup by skill ID and efficient trigger matching.
 * Built at startup by the loader, consumed by the orchestrator.
 */

import type { ParsedSkill } from "./parser.js";
import { matchTriggers, bestMatch, type MatchResult } from "./matcher.js";

export class SkillRegistry {
  private readonly skills = new Map<string, ParsedSkill>();

  /**
   * Register a parsed skill. Overwrites if ID already exists.
   */
  register(skill: ParsedSkill): void {
    this.skills.set(skill.id, skill);
  }

  /**
   * Register multiple skills at once.
   */
  registerAll(skills: ParsedSkill[]): void {
    for (const skill of skills) {
      this.register(skill);
    }
  }

  /**
   * Get a skill by ID. Returns undefined if not found.
   */
  get(skillId: string): ParsedSkill | undefined {
    return this.skills.get(skillId);
  }

  /**
   * Check if a skill ID is registered.
   */
  has(skillId: string): boolean {
    return this.skills.has(skillId);
  }

  /**
   * Get all registered skills.
   */
  all(): ParsedSkill[] {
    return Array.from(this.skills.values());
  }

  /**
   * Get all skill IDs.
   */
  ids(): string[] {
    return Array.from(this.skills.keys());
  }

  /**
   * Number of registered skills.
   */
  get size(): number {
    return this.skills.size;
  }

  /**
   * Match user input against all registered skills.
   * Returns ranked results by confidence.
   */
  match(input: string): MatchResult[] {
    return matchTriggers(input, this.all());
  }

  /**
   * Find the single best skill match for user input.
   */
  bestMatch(input: string, minConfidence?: number): MatchResult | null {
    return bestMatch(input, this.all(), minConfidence);
  }

  /**
   * Filter skills by a predicate (e.g., phase filtering).
   */
  filter(predicate: (skill: ParsedSkill) => boolean): ParsedSkill[] {
    return this.all().filter(predicate);
  }

  /**
   * Get a subset of skills by ID list (e.g., phase-specific skills).
   */
  subset(skillIds: string[]): ParsedSkill[] {
    return skillIds
      .map((id) => this.skills.get(id))
      .filter((s): s is ParsedSkill => s !== undefined);
  }

  /**
   * Clear the registry (for testing).
   */
  clear(): void {
    this.skills.clear();
  }
}
