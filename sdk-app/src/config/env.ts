/**
 * Environment configuration — typed config from .env
 *
 * Single source of truth for all runtime configuration.
 * Validates required vars at startup; fails fast on missing values.
 */

import { resolve } from "node:path";
import { homedir } from "node:os";

export interface EnvConfig {
  /** Anthropic API key */
  readonly anthropicApiKey: string;

  /** Directory for GCO YAML persistence */
  readonly gcoDir: string;

  /** Root path to growth-marketplace content */
  readonly contentRoot: string;

  /** Budget guards (Agentic Constitution Art. VI) */
  readonly budget: {
    readonly sessionLimitUsd: number;
    readonly dailyLimitUsd: number;
    readonly validationWarnUsd: number;
  };

  /** Model selection per role */
  readonly models: {
    readonly orchestrator: string;
    readonly subagentDefault: string;
    readonly batch: string;
  };

  /** Optional MCP bridge keys */
  readonly bridges: {
    readonly firefliesApiKey?: string;
    readonly notionApiKey?: string;
    readonly slackWebhookUrl?: string;
  };

  /** Logging */
  readonly logLevel: string;
  readonly auditEnabled: boolean;
}

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function optional(name: string, fallback: string): string {
  return process.env[name] || fallback;
}

function numericOr(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const parsed = parseFloat(raw);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${name} must be numeric, got: ${raw}`);
  }
  return parsed;
}

function resolvePath(raw: string): string {
  if (raw.startsWith("~")) {
    return resolve(homedir(), raw.slice(2));
  }
  return resolve(raw);
}

export function loadEnvConfig(): EnvConfig {
  return {
    anthropicApiKey: required("ANTHROPIC_API_KEY"),
    gcoDir: resolvePath(optional("GCO_DIR", "~/.growthos/contexts")),
    contentRoot: resolvePath(optional("CONTENT_ROOT", "..")),
    budget: {
      sessionLimitUsd: numericOr("BUDGET_SESSION_LIMIT_USD", 2.0),
      dailyLimitUsd: numericOr("BUDGET_DAILY_LIMIT_USD", 10.0),
      validationWarnUsd: numericOr("BUDGET_VALIDATION_WARN_USD", 500.0),
    },
    models: {
      orchestrator: optional("MODEL_ORCHESTRATOR", "opus"),
      subagentDefault: optional("MODEL_SUBAGENT_DEFAULT", "sonnet"),
      batch: optional("MODEL_BATCH", "haiku"),
    },
    bridges: {
      firefliesApiKey: process.env["FIREFLIES_API_KEY"],
      notionApiKey: process.env["NOTION_API_KEY"],
      slackWebhookUrl: process.env["SLACK_WEBHOOK_URL"],
    },
    logLevel: optional("LOG_LEVEL", "info"),
    auditEnabled: optional("AUDIT_ENABLED", "true") === "true",
  };
}
