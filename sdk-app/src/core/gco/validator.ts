/**
 * GCO Validator — Zod-based schema validation with friendly error messages.
 *
 * Runs at load/save boundaries to catch malformed YAML before it enters the system.
 */

import { GCOSchema, type GCO } from "./schema.js";
import type { ZodError } from "zod";

export interface ValidationSuccess {
  success: true;
  data: GCO;
}

export interface ValidationFailure {
  success: false;
  errors: string[];
  raw: unknown;
}

export type ValidationResult = ValidationSuccess | ValidationFailure;

/**
 * Validate raw parsed YAML against the GCO schema.
 * Returns typed GCO on success, friendly error messages on failure.
 */
export function validateGCO(raw: unknown): ValidationResult {
  const result = GCOSchema.safeParse(raw);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    errors: formatZodErrors(result.error),
    raw,
  };
}

/**
 * Validate a partial GCO update (for incremental saves).
 * Uses Zod's partial() to allow missing fields.
 */
export function validatePartialGCO(raw: unknown): ValidationResult {
  const result = GCOSchema.partial().safeParse(raw);

  if (result.success) {
    // Cast through partial — caller is responsible for merging with full GCO
    return { success: true, data: result.data as GCO };
  }

  return {
    success: false,
    errors: formatZodErrors(result.error),
    raw,
  };
}

/**
 * Format Zod errors into human-readable strings.
 * Example: "company.name: Required" or "pulso.panorama.score: Number must be <= 100"
 */
function formatZodErrors(error: ZodError): string[] {
  return error.issues.map((issue) => {
    const path = issue.path.join(".");
    return path ? `${path}: ${issue.message}` : issue.message;
  });
}
