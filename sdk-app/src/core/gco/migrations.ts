/**
 * GCO Migrations — version upgrades for the GCO schema.
 *
 * When the GCO schema evolves, existing YAML files need migration.
 * Each migration is a pure function: (oldGCO) → newGCO.
 *
 * Migration is applied at load time, before Zod validation.
 */

export type Migration = {
  fromVersion: string;
  toVersion: string;
  migrate: (data: Record<string, unknown>) => Record<string, unknown>;
};

/**
 * Registry of all migrations, ordered by version.
 * Add new migrations here as the schema evolves.
 */
const MIGRATIONS: Migration[] = [
  // Example: v1.0 → v1.1 (add metadata.growth_stage default)
  // {
  //   fromVersion: "1.0",
  //   toVersion: "1.1",
  //   migrate: (data) => ({
  //     ...data,
  //     version: "1.1",
  //     metadata: {
  //       ...(data.metadata as Record<string, unknown> ?? {}),
  //       growth_stage: (data.metadata as Record<string, unknown>)?.growth_stage ?? "early",
  //     },
  //   }),
  // },
];

export const CURRENT_VERSION = "1.0";

/**
 * Apply all necessary migrations to bring a GCO from its version to current.
 * Returns the migrated data (still unvalidated — caller should validate with Zod).
 */
export function migrateGCO(data: Record<string, unknown>): Record<string, unknown> {
  let current = { ...data };
  let version = (current.version as string) ?? "1.0";

  for (const migration of MIGRATIONS) {
    if (version === migration.fromVersion) {
      current = migration.migrate(current);
      version = migration.toVersion;
    }
  }

  return current;
}

/**
 * Check if a GCO needs migration.
 */
export function needsMigration(version: string): boolean {
  return version !== CURRENT_VERSION;
}
