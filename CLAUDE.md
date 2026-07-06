# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos Growth Marketplace — a marketplace of Claude Code plugins that package B2B growth, marketing, sales, and operations frameworks as installable skills, agents, commands, and hooks. All content is Spanish-first.

**Quick stats**: 7 plugins, 34 skills (33 in plugins/ + 1 in os/skills/), 12 agents, 26 commands (21 plugin commands + 5 sales-orchestrator), 62 templates, ~216+ content files.

> **Note**: The root `README.md` only documents `growth-foundations` (1 of 7 plugins). For full plugin coverage, refer to each plugin's own `README.md` or the tables below.

## Architecture

This system is transforming into a **Visual Conversational Interface** for marketers and growth founders. While the core frameworks and diagnostics are defined in Markdown, they power an orchestrating front-end (web/mobile UI). The system uses autonomous agents to ingest business context through a natural-language chat and dynamically generates growth strategies, 90-day roadmaps, and visual playbooks on an interactive canvas.

```
plugins/
  <plugin-name>/
    .claude-plugin/plugin.json   ← Plugin manifest (name, version, description, author)
    README.md                    ← Plugin docs with skills, commands, triggers, install instructions
    skills/
      <skill-name>/
        SKILL.md                 ← Skill definition with YAML frontmatter (name, description, version)
        frameworks/              ← Methodology references used by the skill
        templates/               ← Structured output templates
        patterns/                ← Pattern libraries (formulas, triggers, etc.)
        examples/                ← Real-world examples
    commands/
      <command-name>.md          ← Command definition with YAML frontmatter (description, argument-hint, allowed-tools)
    agents/
      <agent-name>.md            ← Agent definition with role, workflow phases, tools, and expected outputs
```

### Visual Conversational App Structure

The future product maps these plugins to a dynamic user interface:
- **Conversational PM (Chat Interface):** The primary engagement layer where founders describe their business context.
- **Strategic Visual Canvas:** The dynamic view (pane or mobile bottom sheet) that visually renders the PULSO diagnostics, competitive analysis, and Funnel architectures.

### GrowthOS Orchestrator Layer

```
os/
  growthOS.md              ← Master orchestrator protocol
  intake/
    seed-questionnaire.md  ← 4-question intake for new users
    context-object.md      ← GCO (GrowthOS Context Object) schema
  phases/
    definir.md             ← Phase 1: ICP, positioning, competitive
    atraer.md              ← Phase 2: Content, funnels, lead magnets
    convertir.md           ← Phase 3: Discovery, pipeline, proposals
    escalar.md             ← Phase 4: CS ops, renewals, coaching
    referir.md             ← Phase 5: Advocacy, referral ladder, case studies
  governance/
    agentic-constitution.md  ← Agentic Constitution: NEVER/ALWAYS rules, zones, quality gates
  naming/
    framework-registry.md  ← Authoritative name map for all methodologies
  bridges/
    meeting-intelligence.md  ← MCP bridge for meeting data
```

GrowthOS transforms the marketplace from tools into a **need-driven system** that diagnoses user context and activates the right skills automatically through 4 phases: DEFINIR → ATRAER → CONVERTIR → ESCALAR.

### Client Architecture

```
clients/
  <client-name>/
    brand-config/
      brand-voice.md       ← Voice, tone, style guide
      nlm-prompts.md       ← NotebookLM artifact prompts
      brand-qa-checklist.md  ← QA validation rules
    README.md              ← Client-specific docs
```

Monorepo pattern: engine (plugins/, tools/, docs/) stays generic — client-specific brand content lives in `clients/<client>/`.

### Marketplace Manifest

`.claude-plugin/marketplace.json` at the repo root is the **authoritative plugin registry** — the single source of truth for published plugins, sources, categories, and keywords. Individual plugins have their own `.claude-plugin/plugin.json` manifests with per-plugin metadata.

### Plugins

| Plugin | Focus | Key Methodology |
|--------|-------|-----------------|
| `growth-foundations` | ICP, positioning, competitive analysis, PlainIQ diagnostic, quiz funnels, content strategy | PULSO segmentation, Metodología SONDA, Estrategia PENDIENTE |
| `sales-blueprint` | Discovery, pipeline, proposals, coaching | Metodología GrowthOS / PULSO |
| `copywriting-engine` | Headlines, emails, landing pages, psychological triggers | 4-phase agent pipeline |
| `conversational-pm` | Growth diagnostic orchestrator + project management. PM is the marketplace's front door: ingests business context, diagnoses growth stage, routes to plugins, creates 90-day roadmaps. Two modes: Diagnostic (router) and Technical Build (agent roster). | PULSO project discovery, Growth Diagnostic Router, Agent roster |
| `motor-de-ofertas` | Funnels, value ladders, brand character, funnel optimization | ESCALA → FLUJO → Alma |
| `play-to-win` | 12 skills: sales transformation, customer success, deal strategy, relationship mapping, renewal/expansion, pre-discovery research, product marketing, ICP/TAL, customer journey, discovery/demo, advanced techniques, client onboarding | Metodología GrowthOS full lifecycle (90-day transformation, CS Operating Model, Playbook Coach) |
| `motor-de-referidos` | Advocacy scoring, referral ladder, case study capture — 5ta fase GrowthOS (REFERIR) | IMPULSO, ESCALERA DE REFERIDOS |

### Tools (non-plugin)

`tools/plugin-factory/` — Meta-tool for analyzing repos and generating new marketplace plugins. Symlinked to `~/.claude/skills/plugin-factory/` for use as a user-level skill. Not a marketplace plugin itself.

`tools/ingestion-orchestrator/` — Triage skill that analyzes incoming content against existing marketplace coverage. Symlinked to `~/.claude/skills/ingestion-orchestrator/`. Triggers: "ingest content", "triage research", "content triage", "ingerir contenido".

**Active user-level skill symlinks** (`~/.claude/skills/`):
- `plugin-factory/` → `tools/plugin-factory/`
- `ingestion-orchestrator/` → `tools/ingestion-orchestrator/`
- `conversational-pm/` → `plugins/conversational-pm/skills/project-management/`
- `forensic-codebase-skill/` — standalone (not in this repo)

### Key Patterns

- **PULSO** is the common diagnostic language across all sales-oriented plugins (Panorama, Urgencia, Logro, Situación Crítica, Organización). It connects discovery → pipeline → proposals → coaching.
- **GrowthOS 5-phase model**: DEFINIR (ICP/positioning) → ATRAER (content/funnels) → CONVERTIR (discovery/pipeline) → ESCALAR (CS/renewals) → REFERIR (advocacy/referral ladder/case studies). `/os` diagnoses which phase, `/estado` shows progress, `/roadmap` generates 90-day plan.
- **GCO (GrowthOS Context Object)**: Persistent state per client containing company info, PULSO diagnosis, current phase, completed skills, and generated outputs. See `os/intake/context-object.md`.
- **YAML frontmatter** in SKILL.md files defines trigger keywords that activate the skill automatically. Commands use frontmatter for `description`, `argument-hint`, and `allowed-tools`.
- **Cross-references**: Skills reference their own `frameworks/`, `templates/`, and `patterns/` subdirectories via relative paths. Commands reference agent files (e.g., `/copy` orchestrates 4 agents).
- **Scoring models**: ICP uses 0-100 scoring with tiers. PlainIQ uses 0-40 with color heatmap. Pipeline uses PULSO-based health indicators.
- **Agentic Constitution**: `os/governance/agentic-constitution.md` is the binding governance document for all plugins. Defines NEVER/ALWAYS rules, Green/Yellow/Red zone classifications for all 35 skills and 21 commands, escalation triggers, trust graduation (HITL → HOTL → HOOTL), budget guards, and unified quality gates. All agents must comply.

### Commands

| Command | Plugin | Purpose |
|---------|--------|---------|
| `/diagnostico` | growth-foundations | PlainIQ assessment (GTM, Revenue, Q2C, Capabilities) |
| `/icp` | growth-foundations | Interactive ICP definition + scoring workshop |
| `/quiz` | growth-foundations | Metodología SONDA quiz funnel builder |
| `/distribuir` | growth-foundations | Weekly content-distribution loop (calendar gate, two-wave production, review queue) |
| `/discovery` | sales-blueprint | PULSO discovery session orchestrator |
| `/pipeline` | sales-blueprint | Pipeline health analysis |
| `/propuesta` | sales-blueprint | Proposal generation |
| `/coaching` | sales-blueprint | Sales coaching session |
| `/copy` | copywriting-engine | 4-agent copywriting pipeline |
| `/headline` | copywriting-engine | Headline generation |
| `/email-sequence` | copywriting-engine | Email sequence builder |
| `/escala` | motor-de-ofertas | ESCALA value ladder builder |
| `/funnel-diagnosis` | motor-de-ofertas | Funnel optimization diagnosis |
| `/playbook` | play-to-win | GTM playbook synthesizer (AI Sales Coach) |
| `/deal-analysis` | play-to-win | Win/loss PULSO analysis session |
| `/kickoff` | play-to-win | Customer kickoff call orchestrator |
| `/salud` | play-to-win | Client health scoring + churn-risk alerts across GCO clients |
| `/referir` | motor-de-referidos | REFERIR phase run: advocacy detection, IMPULSO scoring, referral-ladder rung, case-study + handoff drafts |
| `/os` | conversational-pm | Start GrowthOS intake (diagnose growth stage, route to phase) |
| `/roadmap` | conversational-pm | Generate/update 90-day roadmap based on current phase |
| `/estado` | conversational-pm | Show current GrowthOS state (phase, skills, outputs, next steps) |

## Conventions

- All content is **Spanish-first**. Base content created in Spanish. Multi-language expansion planned for Phase 2.
- Plugin manifests use minimal fields: `name`, `version`, `description`, `author`.
- Skills use `**Triggers**:` lists in README.md to document activation keywords.
- Commands use `$ARGUMENTS` placeholder for user input in command .md files.
- Agent files define: Rol, Workflow (phased), Tools Disponibles, Output sections.
- **Framework naming**: Use `os/naming/framework-registry.md` as the authoritative name map (PULSO, ROCA, ESCALA, etc.). When referencing methodologies, use exact names from the registry.

## Second Brain

All project knowledge — architecture decisions, error patterns, dependency choices, discussions, and context — lives in the **NotebookLM notebook**. This file does NOT store knowledge. The notebook is the single source of truth.

Source documents are maintained in `docs/second-brain/` using the `NN-slug.md` naming convention (27 docs numbered 00–26, plus `GUIA-NOTEBOOKLM.md`). Filenames are self-descriptive — use `ls docs/second-brain/` to browse.

**Key documents**:
- `00-proyecto-overview.md` — Project vision, plugins, audience, key metrics
- `22-sistema-realidad-source-of-truth.md` — **System source-of-truth**: codebase vs NLM reconciliation, E2E test plan
- `GUIA-NOTEBOOKLM.md` — Step-by-step notebook setup guide

### Artifacts

`docs/artifacts/` stores NotebookLM-generated outputs (PNG infographics, CSV inventories, JSON mindmaps, TXT slide decks). These are generated via `nlm studio` commands and downloaded for reference.

### NotebookLM CLI (`nlm`)

The `nlm` CLI tool provides direct access to the NotebookLM notebook. Use it to persist research outputs and knowledge.

**Notebook alias**: `second-brain` (ID: `943410cf-1885-4802-a1e8-fe45cdfe6e26`)

**Key commands**:
```bash
# List sources in notebook
nlm source list second-brain

# Add a local file as source (preferred for docs/second-brain/ files)
nlm source add second-brain --file docs/second-brain/<filename>.md --title "<filename>.md" --wait

# Add text content directly (for ad-hoc research outputs)
nlm source add second-brain --text "content here" --title "Title" --wait

# Add a URL as source
nlm source add second-brain --url https://example.com --wait

# Query the notebook
nlm notebook query second-brain "question here"

# List all notebooks
nlm list notebooks
```

**Workflow for persisting research**:
1. Write content to `docs/second-brain/` following the `NN-slug.md` naming convention
2. Push to NotebookLM: `nlm source add second-brain --file docs/second-brain/<file>.md --title "<file>.md" --wait`
3. Git commit the new doc

**CLI gotchas**: `source add` has no `-y` flag (non-interactive by default). `source delete` requires `-y` to confirm. Studio create commands need `echo y |` to bypass prompts.

When adding new content to the marketplace, always:
1. Update or create the corresponding second-brain doc
2. Push it to NotebookLM via `nlm source add`

## Content Ingestion Protocol

When new content arrives (frameworks, courses, guides, research), use the **ingestion-orchestrator** skill to triage it before any integration:

1. **Invoke**: "ingest content" or "triage research" to activate the orchestrator
2. **6-action triage**: Each piece of content gets classified as:
   - **SKIP** — Already covered or not methodology
   - **ENRICH** — Adds depth to existing skill
   - **MERGE** — Combines into stronger framework
   - **CREATE** — Fills a real gap (only if ENRICH can't cover it)
   - **TEMPLATIZE** — Tactic → executable SOP template
   - **REVERSE-ENGINEER** — Course/program → formalized methodology
3. **Essentialism filter**: Always ask "Would removing this make the system worse?"
4. **Confirm before executing**: Never auto-integrate — present triage report first
5. **Slug recommendation**: Orchestrator recommends a clean slug (max 4 words, concept > title) for any second-brain doc
6. **Registry sync**: After execution, update ALL registries — CLAUDE.md table, template-catalog, README files, execution-log
7. **Self-audit mode**: Trigger "audit second-brain" to run the orchestrator against existing content — detects redundancies, gaps, stale data, and disconnections

## Template Execution Protocol

Templates are the **DNA** of the marketplace — they define output contracts (what must be delivered).

- **Output is sacred**: The template's benchmark defines success, not subjective opinion
- **Form varies, essence stays**: Agents fill client-specific variables but never alter the methodology core
- **Every execution logs**: After running a template, append to `docs/execution-log.md` with: date, template ID, agent, context, adaptations, result, notes
- **Evolution trigger**: 3+ executions missing benchmark → flag template for review in the template catalog
- **Template catalog**: `docs/template-catalog.md` was removed in a Feb 2026 cleanup and is PENDING REBUILD (62 templates to re-index) — until then, each plugin README is the per-plugin template reference

## Second-Brain Sync

Use `scripts/second-brain-sync.sh` to automate adding files to the second-brain:

```bash
# Dry run — see what would happen
./scripts/second-brain-sync.sh "My Research.md" --dry-run

# Copy (keep original) + auto-upload to NLM
./scripts/second-brain-sync.sh "My Research.md" --copy

# Move + upload + git commit
./scripts/second-brain-sync.sh "My Research.md" --git

# Custom slug
./scripts/second-brain-sync.sh notes.md --title "custom-slug-name"
```

The script auto-detects the next `NN-` number, generates a slug, moves/copies the file to `docs/second-brain/`, and uploads to NotebookLM.

## Development

### Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS 3, shadcn/ui (radix-nova style, RSC enabled), Framer Motion
- **AI**: Vercel AI SDK (`ai` + `@ai-sdk/anthropic`), Anthropic SDK (`@anthropic-ai/sdk`), Claude Agent SDK
- **Database**: Supabase (PostgreSQL 17, local port 54332, API port 54331)
- **SDK**: `sdk-app/` — `@aihuevos/growthos-sdk` (TypeScript, Vitest, Node >=22)
- **Config**: TypeScript strict mode, path alias `@/*` → `./src/*`

### Commands

```bash
# Next.js app (root)
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint (next/core-web-vitals + next/typescript)

# SDK app (sdk-app/)
cd sdk-app
npm run build        # tsc compile
npm run dev          # tsx watch mode
npm test             # vitest run (all tests)
npm run test:unit    # Unit tests only
npm run test:integration  # Integration tests
npm run test:e2e     # E2E tests
npm run test:constitutional  # Constitutional compliance tests
npm run typecheck    # tsc --noEmit
npm run lint         # eslint src/

# Supabase (local)
npx supabase start   # Start local Supabase
npx supabase db reset # Reset local DB with migrations
```

### Environment Setup

Copy `sdk-app/.env.example` to `sdk-app/.env`. Required keys:
- `ANTHROPIC_API_KEY` — Claude API access
- `GCO_DIR` — GrowthOS Context Object storage path (default: `~/.growthos/contexts`)
- `CONTENT_ROOT` — Path to marketplace content (default: `..` from sdk-app)

Budget guards: `BUDGET_SESSION_LIMIT_USD`, `BUDGET_DAILY_LIMIT_USD` (see `.env.example` for defaults).

Optional integrations: `FIREFLIES_API_KEY`, `NOTION_API_KEY`, `SLACK_WEBHOOK_URL`.

### Next.js App Structure (`src/`)

```
src/
  app/
    (authenticated)/        ← Protected routes (dashboard, roadmap, skill execution)
      dashboard/            ← Main dashboard
      ejecutar/[skill]/     ← Skill execution
      entregables/[id]/     ← Deliverables view
      evaluacion/           ← Assessment
      fase/[phase]/         ← Phase view
      roadmap/              ← 90-day roadmap
    (public)/               ← Public routes (diagnostico, login, test)
    api/
      chat/route.ts         ← Chat endpoint (Vercel AI SDK streaming)
      diagnostic/route.ts   ← Diagnostic API
      deliverables/route.ts ← Deliverables API
    auth/callback/          ← Supabase OAuth callback
  components/
    growthOS/               ← GrowthOS-specific components (12 files)
    ui/                     ← shadcn/ui components (13 files)
    diagnostic/             ← Diagnostic UI
    deliverables/           ← Deliverables UI
    chat/                   ← Chat interface
  lib/
    ai/                     ← AI/Claude integration
    diagnostic/             ← Diagnostic logic
    supabase/               ← Supabase client (SSR + browser)
    constants/              ← App constants
    utils.ts                ← Shared utilities (cn() for class merging)
```

### SDK App Structure (`sdk-app/`)

```
sdk-app/src/
  core/
    constitution/           ← Agentic Constitution runtime (trust, budget, quality gates, escalation, audit)
    skills/                 ← Skill resolver, loader, YAML parser
  tools/
    read-skill.ts           ← Reads and parses SKILL.md files
  config/                   ← SDK configuration
  index.ts                  ← Entry point
```

### Supabase

3 migrations in `supabase/migrations/`. Config in `supabase/config.toml`. Local dev uses default ports (API: 54331, DB: 54332).

## Git Workflow

- Main branch: `main`
- Development branch: `development`
- Work on feature branches, merge to `development`, then to `main`.
