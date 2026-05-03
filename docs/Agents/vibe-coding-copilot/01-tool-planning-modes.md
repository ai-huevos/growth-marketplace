# AI Coding Tool Planning Modes & Config Systems

## Overview
How six agentic coding tools implement planning, what config files they read, and how prompts flow through each system. This is the primary reference for generating tool-specific prompts. Updated March 2026.

## Claude Code

### Planning
Plan Mode restricts the agent to read-only tools (no edits, no commands). It explores the codebase, asks clarifying questions, and outputs a plan before any execution. Activate with Shift+Tab twice in CLI, or toggle in VS Code extension. The recommended workflow: Explore (Plan Mode) then Plan (Plan Mode) then Implement (Normal Mode) then Verify.

### Config Files
- `CLAUDE.md` at project root: persistent rules and context loaded at every session startup. Keep under 100 lines. Supports multiple scopes (org-managed, user, project, project-local).
- `.claude/rules/*.md`: modular project rules, optionally path-scoped via frontmatter. Use for domain-specific rules that don't belong in root CLAUDE.md.
- `.claude/agents/`: subagent definitions with YAML-frontmatter metadata, tool/permission scoping.
- `~/.claude/settings.json` and `.claude/settings.json`: machine-readable settings (can set default permission mode to "plan").
- `~/.claude/projects/<project>/memory/MEMORY.md`: auto-generated memory index loaded at session start.

### Three-Tier Memory Architecture
Tier 1: CLAUDE.md for universal rules (under 100 lines, pointers not copies).
Tier 2: .claude/rules/*.md for domain rules (path-scoped, loaded conditionally).
Tier 3: MCP retrieval server for large knowledge bases (documentation, API specs).
This prevents context bloat while keeping important instructions accessible.

### Context Model
200K token window, but performance degrades at ~150K tokens. Auto-compaction triggers at 64-75% capacity. System prompts + tool definitions + MCP schemas consume 30-40K tokens before you type anything. CLAUDE.md survives every compaction cycle, making it the only reliable place for persistent instructions.

Best practices: /clear between unrelated tasks, /compact with a focus phrase, delegate research to subagents (keeps main context clean), scope each task narrowly.

### Multi-Agent Capabilities
Subagents: isolated context windows for research, parallel work, or assembly-line flows. Results must be the final action/message to reliably surface back. Use `isolation: "worktree"` for parallel file edits without branch conflicts.

Agent Teams (Opus 4.6): one session acts as team lead, coordinating work. Teammates work independently in their own context windows and can message each other directly (unlike subagents which only report to parent). For complex multi-file projects.

Worktrees: native git worktree support. Agents run in parallel on isolated copies of the repo. Project configs and auto memory shared across worktrees.

### Key Features (March 2026)
- VS Code extension with full parity: plan mode review, real-time diffs, subagents, MCP support.
- /simplify: runs three parallel review agents (reuse, quality, efficiency) on recent changes.
- /batch: handles large-scale operations (framework migrations) with research, decomposition, execution, PR creation.
- Cron: native scheduled tasks within sessions (up to 50 tasks, auto-delete after 3 days).
- Skills v2: testable skills with evals, parallel A/B testing, blind benchmarking.
- Hooks: custom shell commands on tool events (InstructionsLoaded, before/after actions). HTTP hooks supported.
- Tool Search: dynamically loads MCP tool definitions per task, cutting context from ~72K to ~8.7K tokens.

### What Makes a Good CLAUDE.md
Keep minimal and test-oriented: repo commands (exact build/test/lint commands), architecture anchors (entrypoints, critical paths), sharp edges (strict TypeScript, token lifecycle, forbidden patterns), and forbidden actions. A bad CLAUDE.md says "follow best practices." A good one pins the entrypoint, names exact commands, and calls out things that commonly derail changes.

### What Makes a Good Plan-Mode Prompt
Hard-bind the shape of the plan output (fixed contract format, numbered bullets). Force mapping from acceptance criteria to tests to rollback steps. Enforce "blocking questions only" to prevent speculative questioning while stopping when requirements are undefined. Always say "Do not write code yet."

## OpenAI Codex CLI

### Planning
Agent loop: alternating between model calls and executing declared actions until completion. Planning achieved by prompting Codex to propose a plan within the thread, or by constraining permissions. Multi-agent mode (experimental): three built-in roles (planner, coder, reviewer), /agent command for direct invocation.

### Config Files
- `AGENTS.md` / `AGENTS.override.md`: instruction chain read before any work. Layered from global (`~/.codex/AGENTS.md`) plus per-repo/per-directory. Discovery chain is size-capped (default 32KB).
- `~/.codex/config.toml`: runtime configuration. Enable multi-agent with `multi_agent=true`.
- `.agents/skills/<skill>/SKILL.md`: skills with progressive disclosure.

### Context Model
Thread tracks prompts + outputs + tool calls. Compacts by summarizing when context pressure builds. Skills use progressive disclosure (metadata first, full load on use).

### Sandbox
OS-native on all platforms: Windows restricted tokens, Linux bubblewrap, macOS Seatbelt. Approval modes: auto-approve, on-request, never. Sandbox modes: read-only, workspace-write, full access.

### Multi-Agent
Three built-in agent roles: planner (generates plan), coder (implements), reviewer (validates). Custom agents with different model configs. Codex can run as MCP server for Agents SDK orchestration in larger pipelines.

### Models (March 2026)
GPT-5.3-Codex, GPT-5.3-Codex-Spark (ultra-fast), GPT-5.4 (latest, March 5 release).

### What Makes a Good AGENTS.md
Encode operational invariants (sandbox networking, seatbelt mode), runbook-level steps (exact formatting/test commands), and explicit approval boundaries ("run formatting automatically; ask before full test suite"). Name exact commands, when to run them, and what requires approval.

## Google Antigravity

### Planning
Two surfaces: Editor View (hands-on IDE) and Manager Surface (multi-agent orchestration). Planning mode creates task groups and Artifacts before executing. Fast mode executes directly. Review policies: review-driven (recommended), agent-driven, secure, custom.

### Config Files
- `~/.gemini/GEMINI.md`: global rules (system-like instructions).
- `<workspace>/.agent/rules/`: per-project rules.
- `<workspace>/.agent/workflows/`: workspace-scoped workflows (invoked via `/` commands).
- Skills: `~/.gemini/antigravity/skills/<skill>/SKILL.md` (global) or workspace-level.
- `~/.gemini/antigravity/browserAllowlist.txt`: browser access whitelist.

### Multi-Model
Gemini 3.1 Pro (default, 80.6% SWE-Bench), Claude Sonnet/Opus 4.5, GPT-OSS. Switch models per task.

### Agent Skills (launched March 1, 2026)
Directory-based skill packages with SKILL.md + assets. Progressive disclosure like Codex/Claude Code.

### Key Features
Manager Surface: visual mission control for spawning and watching multiple agents in parallel. Requires strong file-based context (architecture docs, data models) to prevent chaos.
Three-tier terminal permissions. macOS sandbox (February 2026).
Free during preview.

### What Makes a Good Antigravity Mission
Specify concrete pages/components, required UI frameworks, and testable behaviors. "Build a Next.js Personal Finance Dashboard showing risk profiles for Savings, Bonds, Index Funds, and Crypto on separate pages with risk level, volatility, projected returns, and a time-horizon slider." The more structured and verifiable, the better the Artifacts.

## Cursor

### Planning
Agent mode: plan mode (CMD+N) researches the codebase, asks clarifying questions, generates a detailed plan with file paths and code references as Markdown, then waits for approval. Supports frontier models from all providers.

### Config Files
- `.cursor/rules/*.md`: static project rules, always-on context at conversation start.
- `.cursor/hooks.json` + `.cursor/hooks/`: governance layer (before/after agent loop stages). 10-20x faster than at launch.
- `.cursor/scratchpad.md`: agent/hook coordination file.

### Multi-Agent and Automation (March 2026)
Cloud Agents (February 24): isolated VMs with full dev environments. Video demos of work. Merge-ready PRs with artifacts. Accessible from web, mobile, Slack, GitHub. Run 20 cloud agents on isolated VMs simultaneously.

BugBot Autofix (February 26): auto-fix bugs in PRs with 35%+ merge rate.

Automations (March 5): always-on agents triggered by codebase changes, Slack, timers, Linear, GitHub, PagerDuty, webhooks. Memory tool for learning from past runs.

### What Makes Good .cursor/rules/
Function like style linters in English. Ban specific escape hatches (no `any`, no `@ts-ignore`, no disabled exhaustive-deps). Target recurring failure modes: missing error/empty states, hook dependency bugs, overgrown components. Hard constraints, not suggestions.

## OpenCode

### Overview
Open-source CLI agent (100K+ GitHub stars). Cross-model multi-agent: run different models per agent role simultaneously. 75+ providers via Models.dev, local models via Ollama. Zero analytics, local SQLite storage.

### Config Files
- `opencode.json`: global (~/.config/opencode/) + project root. JSON format.
- `tui.json`: TUI configuration.
- `.opencode/agent/`: Markdown agent definitions.
- `instructions` option: glob patterns to instruction files.

### Agents
Two defaults: Plan (read-only analysis) and Build (makes changes). Custom subagents via @ mention or auto-invocation. Cross-model strategy: assign Claude for planning, GPT for coding, Gemini for review, all running as parallel subagents via Promise.allSettled().

### Key Features
Desktop app, TUI (Bubble Tea, vim bindings), IDE extension. No native sandbox. True background agents not yet shipped (open feature request).

### When to Use
Expert users who want maximum model flexibility, open-source transparency, and cross-model orchestration. Not for beginners (no sandbox, requires manual security hygiene).

## Tool Comparison Matrix

| Factor | Claude Code | Codex CLI | Antigravity | Cursor | OpenCode |
|--------|------------|-----------|-------------|--------|----------|
| Best for | Complex backend, multi-file refactors, plan-first | Parallel tasks, auditable pipelines, CI-like rigor | Multi-agent orchestration, visual verification | Frontend iteration, cloud agents at scale | Cross-model orchestration, open-source teams |
| Plan mode | Built-in (Shift+Tab x2), read-only | Prompt-driven; multi-agent planner/coder/reviewer | Planning mode with Artifact generation; Manager Surface | Toggle in agent; Markdown plan with file refs | Plan agent (read-only analysis) |
| Config system | CLAUDE.md + .claude/rules/ + agents/ | AGENTS.md chain + Skills + config.toml | GEMINI.md + rules/ + workflows/ + skills/ | .cursor/rules/ + hooks + automations | opencode.json + .opencode/agent/ |
| Multi-agent | Subagents, Agent Teams, worktrees | Three roles (planner/coder/reviewer), MCP server | Manager Surface, parallel agent threads | Cloud Agents (20 VMs), Automations | Cross-model subagents, parallel execution |
| Autonomy control | Permission modes (plan/normal/auto-accept) | Approval policies + sandbox modes | Review policies + allow/deny lists | Plan mode + hooks + automations | Manual (no native sandbox) |
| Beginner fit | Low (CLI-only) | Low (CLI + Git required) | Medium (IDE, but agent autonomy risky) | Medium-High (familiar IDE) | Low (CLI, no sandbox) |
