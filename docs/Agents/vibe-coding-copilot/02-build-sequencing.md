# Build Sequencing & Spec-Driven Development

## Overview
How to decompose a product idea into buildable components and sequence the build correctly when using AI coding tools. The core 2026 insight: pure vibe coding hits a wall around 3 months when codebases exceed the context window. Spec-driven development (SDD) is the successor pattern. AI collapses coding time but amplifies bad assumptions, so sequencing shifts toward spec quality, review throughput, and smaller mergeable chunks. Updated March 2026.

## The AI-Native Build Sequence

The correct order: (1) spec, (2) context pack, (3) plan, (4) vertical slice, (5) harden, (6) polish.

**Phase 1, Spec (before any code):** Write a structured spec document. This is the single highest-leverage activity. A detailed spec turns the model from guesser into executor. Include: business context, user stories, functional requirements with edge cases, technical constraints, acceptance criteria, and non-functional requirements. The format winning in 2026 per The New Stack and multiple shipped projects: PRD.md or SPEC.md committed to the repo.

**Phase 2, Context Pack:** Create config files from the spec. CLAUDE.md / AGENTS.md / .cursor/rules/ / GEMINI.md / opencode.json. Keep minimal and test-oriented. Define data model, API contracts, UI states, third-party integrations, and explicit out-of-scope. This prevents "Frankenstein software" where AI-generated parts don't match.

**Phase 3, Plan:** Use the tool's planning mode to generate an implementation plan from the spec. Review the plan. Catch misunderstandings before code exists. This is cheaper than fixing bad code.

**Phase 4, Vertical Slice:** Build a thin end-to-end slice of the core loop (UI, API, data, UI) before expanding breadth. AI makes breadth cheap (many screens fast), which increases the temptation to spread horizontally. Vertical slicing forces integration early, making AI output testable.

**Phase 5, Harden:** Auth, payments, permissions, data access. Security baseline from commit one, not "later." Deny-by-default access rules, secret scanning, minimal authorization tests, threat model stub per feature. Treat OWASP categories as a checklist.

**Phase 6, Polish + Distribution:** UI refinement, onboarding, deployment, store submissions. These have real lead time. Schedule them.

## Spec-Driven Development (SDD)

The biggest methodology shift of 2026. Three major platforms shipped SDD tooling: GitHub Spec Kit, AWS Kiro, and Tessl Framework. The thesis per multiple independent sources: pure vibe coding works for throwaway MVPs, but production code requires structured specs as the bridge between vibes and reliability.

### What Goes in the Spec
Business context: who is this for, what problem does it solve.
User stories: as [role], I want [action], so that [outcome].
Functional requirements: specific behaviors, including edge cases and error states.
Technical constraints: stack choices, performance targets, integration requirements.
Acceptance criteria: testable statements. "User can log in with email/password and see dashboard within 2 seconds."
Non-functional requirements: security, accessibility, performance, scalability.
Explicit non-goals: what this does NOT do. Critical for preventing AI overgeneration.

### SDD vs Pure Vibe Coding
Pure vibe coding: describe, generate, iterate. Works for: prototypes, throwaway demos, learning, personal tools.
SDD: specify, generate from spec, verify against criteria. Works for: anything that needs to survive past the prototype stage.
The split is real. Both have a place. The failure mode is using vibe coding for production without knowing the line.

## Decomposing Ideas Into Buildable Chunks

When a user says "build me an app for X":

**Step 1, Identify the core loop.** The minimum cycle that delivers value: trigger, action, result, return. For "Uber for dog walking": owner requests walk, walker accepts, walk happens, both rate. Build this loop end-to-end first.

**Step 2, Map feature dependencies.** Which features must exist before others? Data model + permissions precede user-specific features. Payment paths require earlier integration than expected. Create a dependency tree.

**Step 3, Define promptable chunks.** Break work into units sized for a single AI tool session, each with: inputs (files/contracts), constraints (style/security), actions, and verifiable done criteria (tests pass, manual flow check, commit).

**Step 4, Sequence by dependency order.** Build prerequisites first. Add explicit gates: spec approved, plan approved, implement, review, merge.

## Context Engineering (The New Meta)

Context engineering is replacing prompt engineering as the core skill in 2026. The concept: designing what context an AI agent receives, when, and in what structure.

### Three Memory Types
Semantic memory: facts, rules, project knowledge (CLAUDE.md, AGENTS.md, .cursor/rules/).
Episodic memory: past patterns, session history, what worked before (MEMORY.md, learning primitives).
Procedural memory: runbook execution, step-by-step processes (skills, workflows, automations).

### Three-Stage Evolution
Stage 1: inline prompts (tell the AI everything in chat).
Stage 2: rules files (CLAUDE.md, AGENTS.md, persistent instructions).
Stage 3: prompts as external objects (skills, MCP servers, dynamic context loading).

Most teams are between Stage 2 and Stage 3. The key insight: flat rules files don't scale for large codebases. Modular, scoped, and dynamically loaded context performs better.

### Practical Rules
Keep root config files under 100 lines. Modularize domain rules. Prefer pointers over copies (file:line references instead of code snippets). Use /clear between unrelated tasks. Delegate research to subagents. Session-sized tasks linked by artifacts, not one giant session.

## Common Build Sequencing Mistakes

**Mistake: One giant "build my app" prompt.** Models overgenerate, introduce inconsistent patterns, and you lose incremental validation. Prevention: one feature per session, test before moving on.

**Mistake: Building auth before MVP.** Auth is important but not the first thing to validate. Build core value loop with mock auth first.

**Mistake: Premature optimization.** AI generates "improvement lists" that become a procrastination engine. Prevention: define a kill list (explicitly out of scope this week).

**Mistake: Front and back from separate specs.** They won't agree on contracts (API shapes, field names, error formats). Prevention: single spec defining contracts both sides implement against.

**Mistake: Treating payments as "later polish."** Payment edge cases derail launch when discovered late. Integrate as soon as core flow works.

**Mistake: Wide UI prototype without data path.** Many pages but no API/auth/data connection. Wiring becomes a rewrite later.

**Mistake: Ignoring the three-month wall.** Pure vibe coding stops working when the codebase exceeds what the AI can hold in context. Prevention: specs, tests, and architecture docs from the start.

## Real Build Sequences From Shipped Projects

**12-Hour SaaS MVP (PromptPal):** PRD finalization + project setup, backend foundation (DB, models, auth, API), frontend built vertically (generate component, integrate, test, next), AI layer integration, polish + deployment. The PRD compressed context so the AI could execute without repeated clarification.

**2-Week Web Business (Unrule):** Brand foundation, minimal design system, site build with AI (preceded by guideline markdown + Claude context file defining purpose, architecture, phases, DB tables), payments (Stripe Checkout + webhooks + security + extensive testing), email automation, launch-day testing. Payments required more time than expected.

**iOS App (Little Explorer):** Shift from feature commands to multi-session planning. Prioritized refactoring plan markdown, execute sequentially across sessions. CLAUDE.md for persistent conventions. Per-initiative PLAN.md (Planned, Running, Delivered with lessons). Daily loop: 1-3 tasks, discuss approach, AI implements, test on device.

## How AI Changes Build Sequencing

1. **Spec quality is the bottleneck.** AI's bottleneck is missing context. A detailed spec turns the model from guesser into executor.
2. **Review throughput matters more.** Fast generation means more code to review. Plans must include explicit review gates.
3. **Smaller chunks are better.** Session-sized chunks with done criteria are the unit of work.
4. **Planning documents are connective tissue.** PRD.md, PLAN.md, ARCHITECTURE.md survive context resets and tool switches.
5. **Security must be sequenced early.** 24.7% of AI-generated code has security flaws. Deny-by-default access from commit one.
