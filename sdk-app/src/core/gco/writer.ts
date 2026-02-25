/**
 * GCO Writer — persists GCO back to YAML with atomic writes.
 *
 * Uses temp-file → rename pattern to prevent corruption from
 * concurrent writes or crashes mid-write.
 */

import { writeFile, rename, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { stringify as stringifyYaml } from "yaml";
import type { GCO } from "./schema.js";

/**
 * Normalize company name to filename (same logic as loader)
 */
function companyToFilename(companyName: string): string {
  return companyName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Save GCO to disk atomically.
 *
 * 1. Write to temp file (same directory)
 * 2. Rename temp → target (atomic on POSIX)
 * 3. This prevents partial writes on crash
 */
export async function saveGCO(gco: GCO, gcoDir: string): Promise<string> {
  // Update timestamp
  const updated: GCO = {
    ...gco,
    updated_at: new Date().toISOString(),
  };

  const filename = `${companyToFilename(gco.company.name)}.yaml`;
  const filePath = join(gcoDir, filename);
  const tempPath = join(gcoDir, `.${filename}.tmp`);

  // Ensure directory exists
  await mkdir(dirname(filePath), { recursive: true });

  // YAML with comments preserved where possible
  const yaml = stringifyYaml(updated, {
    lineWidth: 120,
    defaultStringType: "QUOTE_DOUBLE",
    defaultKeyType: "PLAIN",
  });

  // Atomic write: temp → rename
  await writeFile(tempPath, yaml, "utf-8");
  await rename(tempPath, filePath);

  return filePath;
}

/**
 * Save GCO to a specific file path (for non-standard locations).
 */
export async function saveGCOToPath(gco: GCO, filePath: string): Promise<void> {
  const updated: GCO = {
    ...gco,
    updated_at: new Date().toISOString(),
  };

  const tempPath = `${filePath}.tmp`;

  await mkdir(dirname(filePath), { recursive: true });

  const yaml = stringifyYaml(updated, {
    lineWidth: 120,
    defaultStringType: "QUOTE_DOUBLE",
    defaultKeyType: "PLAIN",
  });

  await writeFile(tempPath, yaml, "utf-8");
  await rename(tempPath, filePath);
}
