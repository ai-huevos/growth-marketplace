/**
 * Budget guards — Agentic Constitution Art. VI
 *
 * Token circuit breaker: per-session and per-day limits.
 * Lean validation warning for cumulative investment.
 */

export interface BudgetLimits {
  /** Hard stop per session (default: $2.00 USD) */
  readonly sessionLimitUsd: number;
  /** Hard stop per day per client (default: $10.00 USD) */
  readonly dailyLimitUsd: number;
  /** Warning threshold for cumulative validation spend (default: $500 USD) */
  readonly validationWarnUsd: number;
}

export interface BudgetState {
  /** Cost accumulated in the current session */
  sessionCostUsd: number;
  /** Cost accumulated today for this client */
  dailyCostUsd: number;
  /** Cumulative validation investment */
  cumulativeValidationUsd: number;
  /** ISO date string for the current day (resets daily cost) */
  currentDay: string;
}

export type BudgetCheckResult =
  | { status: "ok" }
  | { status: "session_limit"; costUsd: number; limitUsd: number }
  | { status: "daily_limit"; costUsd: number; limitUsd: number }
  | { status: "validation_warning"; costUsd: number; thresholdUsd: number };

export function createBudgetState(): BudgetState {
  return {
    sessionCostUsd: 0,
    dailyCostUsd: 0,
    cumulativeValidationUsd: 0,
    currentDay: new Date().toISOString().slice(0, 10),
  };
}

export function checkBudget(state: BudgetState, limits: BudgetLimits): BudgetCheckResult {
  if (state.sessionCostUsd >= limits.sessionLimitUsd) {
    return {
      status: "session_limit",
      costUsd: state.sessionCostUsd,
      limitUsd: limits.sessionLimitUsd,
    };
  }

  if (state.dailyCostUsd >= limits.dailyLimitUsd) {
    return {
      status: "daily_limit",
      costUsd: state.dailyCostUsd,
      limitUsd: limits.dailyLimitUsd,
    };
  }

  if (state.cumulativeValidationUsd >= limits.validationWarnUsd) {
    return {
      status: "validation_warning",
      costUsd: state.cumulativeValidationUsd,
      thresholdUsd: limits.validationWarnUsd,
    };
  }

  return { status: "ok" };
}

export function recordCost(
  state: BudgetState,
  costUsd: number,
  isValidationSpend: boolean,
): void {
  // Reset daily cost if day has changed
  const today = new Date().toISOString().slice(0, 10);
  if (state.currentDay !== today) {
    state.dailyCostUsd = 0;
    state.currentDay = today;
  }

  state.sessionCostUsd += costUsd;
  state.dailyCostUsd += costUsd;

  if (isValidationSpend) {
    state.cumulativeValidationUsd += costUsd;
  }
}
