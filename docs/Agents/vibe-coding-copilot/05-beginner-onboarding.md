# Beginner Onboarding & Skill-Level Adaptation

## Overview
What absolute beginners need to know, how to detect skill level, how to route users to the right tools, and how to adapt plan complexity. The 2026 landscape: beginner tools are more powerful than ever (Lovable hit $6.6B, v0 became full-stack), but security is now the critical gap. Updated March 2026.

## Must-Know Concepts for Absolute Beginners

**Your app is a folder of files.** AI coding agents operate on that folder. They read, edit, and run files. The only terminal knowledge needed: (a) getting into the right folder, (b) running a single start/build/test command, (c) copying the error output back to the AI.

**Secrets live outside normal code.** Environment variables (usually in a .env file) contain API keys, database URLs, and auth tokens. Never paste these into chat. Never commit them publicly. Always tell beginners where secrets go.

**Git is your safety net, not ceremony.** Make small checkpoints (commits) before and after the agent makes changes. This lets you revert when things break. Explain Git as "save button and time machine." Require checkpoints whenever an agent touches auth, data access, or runs terminal commands.

**Security is your responsibility, not the AI's.** This is the biggest 2026 lesson. AI tools generate code that works but may not be secure. 24.7% of AI-generated code has a security flaw. Lovable apps have been found with exposed passwords, API keys, and user data. The minimum: never hardcode API keys in your code, always verify that only logged-in users can access their own data, and ask the AI to add security checks when building auth or payments.

**Understand system boundaries at a conceptual level.** What runs in the browser (frontend), what runs "behind the curtain" (backend), and where persistent data lives (database). Most catastrophic failures come from conflicting sources of truth, like an AI adding a second auth system on top of an existing one. Rule: one auth provider at a time, one source of truth for user identity.

**Learn lightweight code reading for intent.** Beginners don't need to write code, but they need to spot problems: "Did the AI create a duplicate auth system?" "Are there two files doing the same thing?" Minimum review ritual: "What changed? What files were touched? Is there only one auth/data path?"

## Skip-This Concepts for Beginners

**Skip: memorizing syntax and framework APIs.** The working pattern is describing desired behavior in natural language and iterating.

**Skip: project scaffolding and boilerplate.** Modern builders bundle generate, run, deploy into guided flows.

**Skip: deployment configuration (initially).** Use tool-managed paths (in-browser run, one-click deploy). Surface deeper config only at blockers.

**Skip: dependency management.** AI tools handle package installation and version resolution.

**Skip: CI/CD setup (initially).** For prototypes, manual deploy is fine. CI/CD becomes relevant when the product proves value.

## How to Detect User Skill Level

**One-question routing:** Ask "If something breaks in your app, what would you do first?"
- "Ask the AI" / "restart" = BEGINNER. Guided step-by-step plans with explanations.
- "Check error message" / "console" = INTERMEDIATE. Structured plans with tool recommendations.
- "Check logs, inspect DB, review diff" = ADVANCED. Architecture + prompts + verification. Skip basics.
- Uses "CLAUDE.md", "plan mode", "subagents", "worktrees" = EXPERT. Skip all onboarding.

**Language pattern detection:**
- Outcome-first framing ("I want an app like...", "make it look nice") = beginner.
- Constraint-first framing ("OAuth", "RLS", "schema", "CI") = advanced.
- Tool-specific vocabulary ("Agent Teams", "multi-agent", "SDD") = expert.

## Tool Routing by Skill Level (March 2026)

### Absolute Beginners (no repo, no terminal)

**Lovable** ($25/mo Pro, unlimited team members): Fastest full-stack prototype. React/TypeScript + Supabase backend with auth, Stripe, file uploads built-in. Uses Gemini 3 Flash or GPT-5.2. Best for: validating an idea quickly. Warning: security scanner checks if RLS exists but not whether policies are correct. Always verify auth manually.

**v0 by Vercel** ($20/mo Premium): Evolved from UI generator to full-stack platform. Imports GitHub repos, pulls Vercel env vars, generates production code in real sandbox. Git panel creates branches and PRs directly. Custom MCP server support. Best for: developers who can code and want the smoothest deployment path.

**Bolt.new** (token-based pricing): Multi-framework support (React, Vue, Svelte, Next.js, Remix). Claude Agent (Opus 4.6) as default LLM. Figma import. Warning: token costs can spiral (users report $1,000+ on single projects). AI-only support with no human escalation.

**Replit** ($20/mo Core, $100/mo Pro): Most feature-rich all-in-one platform. Agent reads production deployment logs to find and fix errors. Skills Search for installing capabilities without prompting. 40M users. Best for: people with minimal experience who want everything in one place.

**Firebase Studio** (Google, free): Agentic cloud dev environment. Generates full-stack apps with Flutter, Angular, React, Next.js. Auto-integrates Firebase services. Best for: Google ecosystem projects.

### Intermediate (some technical comfort, can use an IDE)

**Cursor** ($20/mo Pro): IDE-based with familiar interface. Agent mode, Cloud Agents (20 VMs simultaneously), BugBot Autofix (35%+ merge rate), Automations for event-triggered workflows. Best for: frontend iteration, teams wanting IDE-familiar AI.

**Antigravity** (free during preview): Multi-model (Gemini 3.1 Pro, Claude, GPT-OSS). Manager Surface for multi-agent orchestration. Review-driven mode recommended. Best for: exploration, visual verification, teams wanting to try multi-agent without cost.

### Advanced (terminal-comfortable, Git fluent)

**Claude Code** ($20/mo via Max plan): Maximum power for plan-first workflows. Agent Teams, subagents, worktrees, skills, hooks, cron. VS Code extension with full parity. Best for: complex backend, multi-file refactors, production applications.

**Codex CLI** (included with ChatGPT Pro): Multi-agent (planner/coder/reviewer), OS-native sandbox, MCP server mode for Agents SDK. GPT-5.4. Best for: auditable pipelines, CI-like rigor, enterprise.

**OpenCode** (free, open-source): Cross-model multi-agent (75+ providers, local models via Ollama). Zero analytics. Best for: expert users wanting model flexibility and open-source transparency.

## Adapting Plan Complexity

### For Beginners (thin plan)
- Maximum 5 steps.
- One command per step.
- One observable output per step.
- Every technical term explained in one sentence.
- Tool recommendation included (usually Lovable or v0).
- Security reminder: "After building auth, test that users can only see their own data."
- "Expand" mode available if they want more detail.

### For Intermediates (structured plan)
- 8-12 steps organized in phases.
- Tool recommendations with reasoning.
- Config file templates provided (pre-filled, not blank).
- Key decisions explained (why this tech stack, why this order).
- Test/validation steps included.
- Security checklist included.

### For Advanced Users (full plan)
- Architecture description.
- Phase-by-phase with tool-specific prompts ready to paste.
- Config file content (CLAUDE.md, AGENTS.md, .cursor/rules/) pre-written.
- Dependency map between features.
- Test strategy included.
- Context management strategy (when to /clear, how to structure memory, three-tier architecture).
- Security threat model stub.
- Skip all explanations of basics.

## Teaching Through Progressive Disclosure

**Level 1 (first interaction):** "Here's your app idea broken into 3 steps. Let's start with step 1. Open [tool], paste this prompt, and see what happens."

**Level 2 (after first win):** "Now let's think about what your app really needs. Here's a simple spec: [5-item checklist]. Let's build item 1."

**Level 3 (when complexity demands it):** "Your app now needs [auth/payments/database]. Here's what that means and which tool handles it best. Important: we need to verify the security is correct. Here's the plan."

**Level 4 (when they're ready):** "You're ready for a more powerful tool. Here's how Claude Code works. Here's your CLAUDE.md. Here's the plan-mode prompt for your next feature."
