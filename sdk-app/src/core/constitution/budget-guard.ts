/**
 * Budget Guard — Agentic Constitution Art. VI wrapper
 *
 * Wraps the config/budgets.ts primitives with session state
 * and provides the circuit-breaker pattern for agent execution.
 */

import {
  checkBudget,
  recordCost,
  createBudgetState,
  type BudgetLimits,
  type BudgetState,
  type BudgetCheckResult,
} from "../../config/budgets.js";

export class BudgetGuard {
  private state: BudgetState;
  private readonly limits: BudgetLimits;

  constructor(limits: BudgetLimits) {
    this.limits = limits;
    this.state = createBudgetState();
  }

  /**
   * Check if execution can proceed within budget.
   */
  check(): BudgetCheckResult {
    return checkBudget(this.state, this.limits);
  }

  /**
   * Record a cost after execution.
   * Returns the updated budget check result.
   */
  record(costUsd: number, isValidationSpend = false): BudgetCheckResult {
    recordCost(this.state, costUsd, isValidationSpend);
    return this.check();
  }

  /**
   * Check if a planned execution fits within remaining budget.
   */
  canAfford(estimatedCostUsd: number): boolean {
    const remainingSession = this.limits.sessionLimitUsd - this.state.sessionCostUsd;
    const remainingDaily = this.limits.dailyLimitUsd - this.state.dailyCostUsd;
    return estimatedCostUsd <= Math.min(remainingSession, remainingDaily);
  }

  /**
   * Get current spending summary.
   */
  summary(): {
    sessionCostUsd: number;
    dailyCostUsd: number;
    sessionRemainingUsd: number;
    dailyRemainingUsd: number;
  } {
    return {
      sessionCostUsd: this.state.sessionCostUsd,
      dailyCostUsd: this.state.dailyCostUsd,
      sessionRemainingUsd: this.limits.sessionLimitUsd - this.state.sessionCostUsd,
      dailyRemainingUsd: this.limits.dailyLimitUsd - this.state.dailyCostUsd,
    };
  }

  /**
   * Reset session state (for new session).
   */
  resetSession(): void {
    this.state.sessionCostUsd = 0;
  }
}
