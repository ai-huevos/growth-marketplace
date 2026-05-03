# Practitioner Workflows & Multi-Tool Chains

## Overview
Documented end-to-end workflows that successful builders use to ship products. Which tools at each stage, how they handle context handoff, and the role of specs as connective tissue. The hardest recurring problem: context continuity across tools and sessions. Updated March 2026.

## Context Handoff Patterns That Work

**Artifact-first handoff (docs as memory).** Durable markdown docs committed to the repo act as the shared brain: specs, architecture notes, implementation plans, progress logs. Sessions clear, restart by re-reading the doc set. Works because repos survive tool switches; chat transcripts don't.

**Branch-based handoff (repo is context).** Each chat maps to a Git branch; code changes become commits; merging PRs is the explicit boundary between iterations. The handoff is a branch + diff + PR description.

**Spec-to-execution pipelines.** Structured spec, generated implementation blueprint, execute with validation gates. Agents correct themselves until tests pass. The spec is the persistent anchor.

**Screenshot-and-guidelines handoff (UI intent).** When moving from prototype tool to IDE agent, pass screenshots + brand guidelines + tool decisions. Prevents the second tool from re-inventing the UI.

**Subagent handoff contracts.** In Claude Code subagent workflows, results must be the final action/message in the subchain to reliably surface back. In Codex multi-agent, delegations use explicit handoff tools and are inspectable via traces.

**Downloadable context files (portable knowledge).** Export context documents from one tool and mount them into a different IDE/tool. Transfer artifacts, not chats.

## Multi-Agent Patterns (2026)

**Claude Code Agent Teams:** One session acts as team lead. Teammates work independently in their own context windows and can message each other. Use for complex multi-file projects requiring coordination. Different from subagents: teammates are peers, not workers reporting to a parent.

**Claude Code Subagents + Worktrees:** Subagents for isolated research/parallel work. Worktrees for parallel file edits without branch conflicts. Combine: delegate different features to separate worktrees, each with its own subagent context.

**Codex Multi-Agent (planner/coder/reviewer):** Three built-in roles. Planner generates the plan, coder implements, reviewer validates. Custom agents with different model configs. Codex can run as MCP server for Agents SDK orchestration. Use for auditable pipelines with trace-based debugging.

**Antigravity Manager Surface:** Visual mission control for spawning and watching multiple agents in parallel. Requires strong file-based context (architecture docs, data models) to prevent chaos. Use when you want multiple agent threads working simultaneously in an IDE.

**Cursor Cloud Agents:** 20 isolated VMs running simultaneously. Video demos of work. Merge-ready PRs with artifacts. Accessible from web, mobile, Slack, GitHub. Use for scaling development across many features in parallel.

**Cursor Automations:** Always-on agents triggered by codebase changes, Slack, timers, Linear, GitHub, PagerDuty, webhooks. Memory tool learns from past runs. Use for continuous integration-style AI workflows.

**OpenCode Cross-Model:** Assign different models per agent role (Claude for planning, GPT for coding, Gemini for review). All run as parallel subagents. Use when you want maximum model flexibility and aren't locked into one provider.

## Workflow A: v0 GitHub PR Flow (Beginner-Friendly)

**Tools:** v0 + GitHub + Vercel
**Steps:**
1. Write a production-minded feature request in v0 (include constraints like rate limiting, auth).
2. Build the feature inside v0 sandbox (prompt, preview, iterate).
3. v0 creates a branch and opens a PR directly in GitHub.
4. Validate via Vercel preview deployments attached to PRs.
5. Merge to ship. Start new chat/branch for next feature.

**Context handoff:** Branch + PR + preview URL. v0 now supports importing any GitHub repo, pulling env vars from Vercel, and generating production-ready code in a real environment. Custom MCP server support added.
**Best for:** The smoothest prototype-to-production bridge. Best choice for developers who can already code.

## Workflow B: Lovable Full-Stack Prototype (Fastest MVP)

**Tools:** Lovable + Supabase (built-in) + optional export
**Steps:**
1. Describe the app in natural language with visual specifics.
2. Lovable generates React/TypeScript frontend + Supabase backend with auth, Stripe, file uploads.
3. Iterate on the prototype within Lovable.
4. When complexity exceeds Lovable's capabilities: export to GitHub, continue in Claude Code or Cursor.
5. Security hardening: verify RLS policies are correct (Lovable checks if RLS exists but not whether policies are right).

**Context handoff:** GitHub export + spec document extracted from Lovable chat.
**Security warning:** Escape.tech scanned 5,600+ Lovable apps and found 2,000+ vulnerabilities, 400+ exposed secrets, 175 PII leaks. Always verify auth and access control after export.
**Best for:** Non-technical founders validating an idea fast. Export to professional tools for production.

## Workflow C: Bolt Export to IDE Agent (SaaS MVPs)

**Tools:** Bolt.new + Claude Code/Cursor
**Steps:**
1. Use Bolt for screens + mocked data to validate UX quickly.
2. Stay UI-only to avoid token-cost spirals (auth bugs alone can consume 3-8M tokens in Bolt).
3. Ask Bolt to generate a step-by-step development plan for backend.
4. Export project files (ZIP), create local repo, set up version control.
5. Bring in CLI/IDE agents to implement backend from the plan.

**Context handoff:** Exported ZIP + development plan. The plan becomes instruction set for backend phase.
**Cost warning:** Users report spending $1,000+ in tokens on single Bolt projects. Keep scope narrow.
**Best for:** SaaS MVPs where speed to coherent UI matters, but you need a capable coding environment for backend.

## Workflow D: Spec-First with Claude Code (Production)

**Tools:** Claude Code (primary) + Cursor (optional for frontend)
**Steps:**
1. Write SPEC.md: business context, user stories, functional requirements, acceptance criteria, non-goals.
2. Generate CLAUDE.md from spec: repo commands, architecture anchors, sharp edges, forbidden actions. Under 100 lines.
3. Plan mode: "Read SPEC.md. Generate an implementation plan. Map each requirement to tests. Do not write code yet."
4. Review plan. Iterate until solid.
5. Implement per plan, one feature per session. Git checkpoint before each feature.
6. Use subagents for parallel research. Worktrees for parallel feature branches.
7. For complex projects: Agent Teams with lead coordinating frontend, backend, and test agents.

**Context handoff:** SPEC.md + CLAUDE.md + PLAN.md committed to repo. /clear between features. /compact with focus phrase within long sessions.
**Best for:** Production applications where reliability matters. Advanced to expert users.

## Workflow E: Codex Multi-Agent Pipeline (Auditable)

**Tools:** Codex CLI + Agents SDK
**Steps:**
1. Write AGENTS.md with operational invariants, exact commands, approval boundaries.
2. Enable multi-agent mode in config.toml.
3. Planner agent generates plan from spec. Coder agent implements. Reviewer agent validates.
4. For enterprise: run Codex as MCP server, connect to Agents SDK orchestrator with explicit handoff tools.
5. Debug and audit via traces (prompts, tool calls, file writes, handoffs).

**Context handoff:** Files + handoff tools. Delegations are inspectable. REQUIREMENTS.md is mandatory single source of truth.
**Best for:** CLI-first teams needing reliability, audit trails, and repeatable pipelines.

## Workflow F: Antigravity Multi-Agent (Visual Verification)

**Tools:** Antigravity
**Steps:**
1. Create GEMINI.md with persistent conventions (prevents Antigravity from vibe-coding over your patterns).
2. In Manager Surface: define mission with concrete deliverables.
3. Spawn multiple agent threads in parallel (explore, implement, test, document).
4. Use review-driven mode: review Artifacts at each checkpoint.
5. Provide "boring, clear docs" (architecture, data models, failure modes) as shared anchor.

**Context handoff:** Artifacts (task lists, implementation plans, diffs, screenshots) are durable. Comment directly on artifacts like a Google Doc.
**Best for:** Teams wanting IDE-based multi-agent with visual feedback. Free during preview.

## Workflow G: Cross-Model with OpenCode (Expert)

**Tools:** OpenCode
**Steps:**
1. Create opencode.json with model assignments per agent role.
2. Plan agent (Claude): analyzes codebase, generates implementation plan.
3. Build agent (GPT): implements features from plan.
4. Custom review agent (Gemini): validates output.
5. All run as parallel subagents.

**Context handoff:** Agent definitions in .opencode/agent/ with instruction file glob patterns.
**Best for:** Expert users wanting maximum model flexibility and open-source transparency.

## The Multi-Tool Transition Pattern

The 2026 consensus: prototype in beginner tools, harden in professional tools.

**Phase 1, Validate:** Lovable, v0, or Bolt. Get a working prototype fast. Validate the idea with real users.
**Phase 2, Export:** GitHub export or v0 PR workflow. Bring the codebase into a proper repo.
**Phase 3, Harden:** Claude Code, Codex, or Cursor. Add auth, security, tests, proper architecture.
**Phase 4, Scale:** Multi-agent workflows, CI/CD, monitoring.

The smoothest transition: v0 (GitHub PR creates a branch with preview), review in Cursor or Claude Code, merge when ready. No ZIP export, no manual file copying.
