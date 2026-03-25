/**
 * GCO Loader — reads GCO YAML from ~/.growthos/contexts/{company}.yaml
 *
 * Handles:
 * - File discovery by company name
 * - YAML parsing → Zod validation → typed GCO
 * - Listing all available GCOs
 * - Graceful handling of missing/corrupt files
 */

import { readFile, readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse as parseYaml } from "yaml";
import type { GCO } from "./schema.js";
import { validateGCO } from "./validator.js";

export interface LoadResult {
  success: true;
  gco: GCO;
  filePath: string;
}

export interface LoadError {
  success: false;
  error: string;
  filePath?: string;
}

export type GCOLoadResult = LoadResult | LoadError;

/**
 * Normalize company name to filename: lowercase, replace spaces with hyphens
 */
function companyToFilename(companyName: string): string {
  return companyName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Load a GCO by company name from the GCO directory.
 */
export async function loadGCO(companyName: string, gcoDir: string): Promise<GCOLoadResult> {
  const filename = `${companyToFilename(companyName)}.yaml`;
  const filePath = join(gcoDir, filename);

  try {
    const raw = await readFile(filePath, "utf-8");
    const parsed = parseYaml(raw);

    const validation = validateGCO(parsed);
    if (!validation.success) {
      return {
        success: false,
        error: `GCO validation failed for ${filename}: ${validation.errors.join("; ")}`,
        filePath,
      };
    }

    return { success: true, gco: validation.data, filePath };
  } catch (err) {
    if (err instanceof Error && "code" in err && (err as NodeJS.ErrnoException).code === "ENOENT") {
      return {
        success: false,
        error: `No GCO found for company "${companyName}" at ${filePath}`,
        filePath,
      };
    }
    return {
      success: false,
      error: `Failed to load GCO: ${err instanceof Error ? err.message : String(err)}`,
      filePath,
    };
  }
}

/**
 * Load a GCO directly from a file path.
 */
export async function loadGCOFromPath(filePath: string): Promise<GCOLoadResult> {
  try {
    const raw = await readFile(filePath, "utf-8");
    const parsed = parseYaml(raw);

    const validation = validateGCO(parsed);
    if (!validation.success) {
      return {
        success: false,
        error: `GCO validation failed: ${validation.errors.join("; ")}`,
        filePath,
      };
    }

    return { success: true, gco: validation.data, filePath };
  } catch (err) {
    return {
      success: false,
      error: `Failed to load GCO from ${filePath}: ${err instanceof Error ? err.message : String(err)}`,
      filePath,
    };
  }
}

/**
 * List all available GCO files in the directory.
 * Returns company names extracted from filenames.
 */
export async function listGCOs(gcoDir: string): Promise<string[]> {
  try {
    const files = await readdir(gcoDir);
    return files
      .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
      .map((f) => basename(f, f.endsWith(".yaml") ? ".yaml" : ".yml"));
  } catch {
    return [];
  }
}
