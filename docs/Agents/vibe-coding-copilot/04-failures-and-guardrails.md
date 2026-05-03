# Common Failures, Anti-Patterns & Guardrails

## Overview
The most common and damaging failure modes when vibe coding, along with specific prevention strategies that must be embedded in every plan. The 2026 landscape: security is a crisis (24.7% of AI-generated code has flaws), community backlash against low-quality output is growing, and the "three-month wall" is real. Updated March 2026.

## Failure 1: The Three-Month Wall

**What happens:** Pure vibe coding works well for 1-3 months. Then the codebase exceeds what the AI can hold in context. Small changes break unrelated features. "Fixes" trigger more regressions. Debugging becomes scrolling chat history instead of reasoning about architecture. Nobody knew why it worked, so nobody knew why it broke.
**Root cause:** Intent isn't persisted. Code is the only "truth" but never captures the why. Context windows mean agents see fragments, patch symptoms, drift architecture.
**Prevention:** Spec-driven development from the boundary of complexity. Every feature needs a short spec + acceptance tests + design notes in-repo. Vibe coding only at unit-sized scopes verified in isolation before merging.
**Recovery:** Stop "prompting through the mess." Extract a clean spec. Rebuild subsystem behind tests (often faster than incremental AI patching). Treat rewrite-as-recovery as a planned maneuver.

## Failure 2: Security-Last MVP (Crisis-Level in 2026)

**What happens:** Deployed apps compromise real users through basic failures: no auth on sensitive endpoints, broken access control, exposed secrets, unsafe defaults. Real incidents: Huntarr exposed passwords and API keys to anyone on the network. Moltbook exposed 1.5M API tokens and 35K email addresses. Escape.tech found 2,000+ vulnerabilities in 5,600 Lovable apps. CodeRabbit analysis of 470 GitHub PRs found AI-authored code has 1.7x more major issues and 2.74x higher security vulnerability rates.
**Root cause:** Speed shifts discipline. Models optimize for "it runs," not for who can access what. Beginner tools (Lovable, Bolt) check if security features exist but not whether policies are correct. 24.7% of AI-generated code has a security flaw.
**Prevention:** Security baseline from commit one: deny-by-default access rules, secret scanning in CI, minimal authorization tests, threat model stub per feature. Never hardcode API keys in frontend. Always verify RLS policies manually. Include OWASP checklist in every plan.
**Recovery:** Pull app behind maintenance mode. Rotate all keys. Add authorization at data layer. Re-audit endpoints with tests that fail if sensitive data is accessible without correct role/session.

## Failure 3: Context Bloat (Overloaded Config Files)

**What happens:** Teams keep "fixing" misbehavior by adding more instructions to CLAUDE.md / AGENTS.md / .cursor/rules/. Performance degrades, token costs rise, agent still fabricates details.
**Root cause:** Research shows developer context files only marginally help (~+4%), while LLM-generated context files can slightly hurt (~-3%) and raise costs (>20%). Agents follow instructions but pay a large reasoning tax parsing low-signal context. Flat rules files don't scale.
**Prevention:** Keep CLAUDE.md under 100 lines. Use three-tier memory: Tier 1 root config (universal rules), Tier 2 modular scoped rules, Tier 3 MCP/retrieval for large knowledge. Mandate a "context budget" and pruning step each milestone. Prefer structured specs over conversational accretion.
**Recovery:** Freeze changes. Extract current spec into a short versioned document. Delete redundant rules. Restart fresh session with only spec + file pointers.

## Failure 4: Context Window Blowout (Session Dies Mid-Task)

**What happens:** Multi-step change gets most of the way done, then context fills. Compaction kicks in, instructions get lost. Agent restarts work, produces lower-quality patches, or "finishes" without preserving earlier intent.
**Root cause:** 200K token window, but performance degrades at ~150K. System prompts + tool definitions consume 30-40K before you type. Auto-compaction at 64-75% capacity drops conversational instructions first.
**Prevention:** Checkpoint before large edits. Write decisions into persistent files early. Session-sized tasks. /clear between unrelated tasks. Big tasks = sequence of fresh contexts linked by artifacts.
**Recovery:** Stop when agent begins rehashing. Summarize state into compact handoff. New session. Make the failing test list shrink step by step.

## Failure 5: Token Cost Spirals (Beginner Tools)

**What happens:** Users report spending $1,000+ on single Bolt projects. Auth bugs alone consume 3-8M tokens as the AI loops on fixes. Lovable and Bolt use token-based pricing where complex features burn through credits unpredictably.
**Root cause:** Token-based pricing creates unpredictable costs. Complex features (auth, payments, real-time) require many iterations. The AI loops on fixes, consuming tokens without converging.
**Prevention:** Keep beginner-tool scope narrow: UI and simple CRUD only. Export to professional tools (Claude Code, Cursor) when complexity rises. Set budget alerts. Prefer per-workspace pricing (Lovable) over pure token-based (Bolt) for team projects.
**Recovery:** Stop iterating in the expensive tool. Export. Continue in a tool with flat pricing or better iteration efficiency.

## Failure 6: Unconstrained Prompting Triggers Over-Engineering

**What happens:** Ask for a fix or feature and the agent returns sprawling designs, new abstractions, or novel algorithms. The patch is harder to verify than the original problem.
**Root cause:** Under-specified goals push the model toward "impressive completeness." No innate cost model for complexity unless you supply one.
**Prevention:** Require "minimum viable patch" (smallest diff, no new deps unless justified). Name exactly which files/functions will change. Cap surface area per step. Include explicit non-goals.
**Recovery:** Roll back to checkpoint. Restate as bounded change (file list + constraints + tests).

## Failure 7: Sandbox Reality Gap (Silent Partial Builds)

**What happens:** Agent tries to fetch dependencies, verify endpoints, or run diagnostics; intermittently fails due to sandbox constraints. Loops, stops early, or shifts to "best guesses."
**Root cause:** Codex exec is read-only by default; network may be disabled. Beginner tools have their own constraints.
**Prevention:** Start with a capability probe (network on/off, filesystem access, required MCP availability). Include "no silent failures" rule: if a required action fails, surface the error and stop.
**Recovery:** Re-run in correctly permissioned environment. Replay minimal steps to green tests.

## Failure 8: Unsafe Autonomy (Destructive Commands)

**What happens:** "Clear cache" misinterpreted as "delete the drive." Large automated edits silently corrupt files (duplicating thousands of lines).
**Root cause:** Speed-oriented modes skip confirmations. Ambiguous targets + aggressive execution.
**Prevention:** Enforce least privilege. Require dry-run for irreversible commands. Mandate isolated workspaces for parallel agents. Post-step integrity gate (build/test/typecheck) before continuing. Never recommend auto-accept/YOLO to beginners.
**Recovery:** Halt. Restore from checkpoints. Disable high-permission mode. Redo via atomic edits with verification.

## Failure 9: AI Slop (Community Backlash)

**What happens:** Low-quality AI-generated projects flood platforms. r/selfhosted revolt (2,976 upvotes demanding removal of AI-coded app posts). r/webdev asking "does anyone have anything to share that WASN'T vibe coded?" Professional developers frustrated by code that looks plausible but was never properly tested.
**Root cause:** Vibe coding makes "it compiles" easy and "it's correct" no easier. The gap between functioning demo and production software is invisible to beginners.
**Prevention:** Include test and review steps in every plan. "It runs" is not "it works." Spec-driven development with acceptance criteria. Review gates before merging. Don't ship without testing edge cases.
**Recovery:** Establish a quality bar: tests, security audit, code review. Rebuild credibility with disciplined iteration.

## Guardrails Every Plan Must Include

1. **Structured spec as single source of truth** (SPEC.md or PRD.md committed to repo). Chat intent decays; specs persist.
2. **Security baseline from commit one**: deny-by-default access, secret scanning, auth on every sensitive endpoint, OWASP checklist.
3. **Context budget and pruning ritual**: config files under 100 lines, modular rules, prune each milestone.
4. **Least-privilege execution by default** with explicit approval gates for destructive actions.
5. **Sequencing rubric** that blocks premature optimization and forces vertical slices.
6. **One feature per session** with git checkpoint before and after.
7. **Stop conditions**: repeated regressions, file corruption, hallucinated paths = checkpoint, summarize, restart with smaller scope.
8. **Test before moving on**: every feature has at least one test proving it works. "It compiles" is not done.
