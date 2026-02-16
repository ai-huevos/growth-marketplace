# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos Growth Marketplace — a marketplace of Claude Code plugins that package B2B growth, marketing, sales, and operations frameworks as installable skills, agents, commands, and hooks. All content is Spanish-first.

**Quick stats**: 5 plugins, 18 skills, 7 agents, 12 commands, 25 templates, ~127 content files.

> **Note**: The root `README.md` only documents `growth-foundations` (1 of 5 plugins). For full plugin coverage, refer to each plugin's own `README.md` or the tables below.

## Architecture

This is a **content-only repository** — no build system, no tests, no dependencies. All files are Markdown.

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

### Marketplace Manifest

`.claude-plugin/marketplace.json` at the repo root is the **authoritative plugin registry** — the single source of truth for published plugins, sources, categories, and keywords. Individual plugins have their own `.claude-plugin/plugin.json` manifests with per-plugin metadata.

### Plugins

| Plugin | Focus | Key Methodology |
|--------|-------|-----------------|
| `growth-foundations` | ICP, positioning, competitive analysis, ClarQ diagnostic, quiz funnels, content strategy | SPICED segmentation, ASK Method, Ski Slope Strategy |
| `sales-blueprint` | Discovery, pipeline, proposals, coaching | Winning by Design / SPICED |
| `copywriting-engine` | Headlines, emails, landing pages, psychological triggers | 4-phase agent pipeline |
| `conversational-pm` | B2B growth intelligence project orchestration | Agent roster (Architecture Plumber → Data Specialist → DB Architect → Implementation → Dashboard) |
| `dotcom-secrets` | Funnels, value ladders, brand character, funnel optimization | ESCALA → FLUJO → Alma (Russell Brunson adapted to B2B LATAM) |

### Tools (non-plugin)

`tools/plugin-factory/` — Meta-tool for analyzing repos and generating new marketplace plugins. Symlinked to `~/.claude/skills/plugin-factory/` for use as a user-level skill. Not a marketplace plugin itself.

`tools/ingestion-orchestrator/` — Triage skill that analyzes incoming content against existing marketplace coverage. Symlinked to `~/.claude/skills/ingestion-orchestrator/`. Triggers: "ingest content", "triage research", "content triage", "ingerir contenido".

**Active user-level skill symlinks** (`~/.claude/skills/`):
- `plugin-factory/` → `tools/plugin-factory/`
- `ingestion-orchestrator/` → `tools/ingestion-orchestrator/`
- `conversational-pm/` → `plugins/conversational-pm/skills/project-management/`
- `forensic-codebase-skill/` — standalone (not in this repo)

### Key Patterns

- **SPICED** is the common diagnostic language across all sales-oriented plugins (Situation, Pain, Impact, Critical Event, Decision). It connects discovery → pipeline → proposals → coaching.
- **YAML frontmatter** in SKILL.md files defines trigger keywords that activate the skill automatically. Commands use frontmatter for `description`, `argument-hint`, and `allowed-tools`.
- **Cross-references**: Skills reference their own `frameworks/`, `templates/`, and `patterns/` subdirectories via relative paths. Commands reference agent files (e.g., `/copy` orchestrates 4 agents).
- **Scoring models**: ICP uses 0-100 scoring with tiers. ClarQ uses 0-40 with color heatmap. Pipeline uses SPICED-based health indicators.

### Commands

| Command | Plugin | Purpose |
|---------|--------|---------|
| `/diagnostico` | growth-foundations | ClarQ assessment (GTM, Revenue, Q2C, Capabilities) |
| `/icp` | growth-foundations | Interactive ICP definition + scoring workshop |
| `/quiz` | growth-foundations | ASK Method quiz funnel builder |
| `/discovery` | sales-blueprint | SPICED discovery session orchestrator |
| `/pipeline` | sales-blueprint | Pipeline health analysis |
| `/propuesta` | sales-blueprint | Proposal generation |
| `/coaching` | sales-blueprint | Sales coaching session |
| `/copy` | copywriting-engine | 4-agent copywriting pipeline |
| `/headline` | copywriting-engine | Headline generation |
| `/email-sequence` | copywriting-engine | Email sequence builder |
| `/escala` | dotcom-secrets | ESCALA value ladder builder |
| `/funnel-diagnosis` | dotcom-secrets | Funnel optimization diagnosis |

## Conventions

- All content is **Spanish-first**. Base content created in Spanish. Multi-language expansion planned for Phase 2.
- Plugin manifests use minimal fields: `name`, `version`, `description`, `author`.
- Skills use `**Triggers**:` lists in README.md to document activation keywords.
- Commands use `$ARGUMENTS` placeholder for user input in command .md files.
- Agent files define: Rol, Workflow (phased), Tools Disponibles, Output sections.

## Second Brain

All project knowledge — architecture decisions, error patterns, dependency choices, discussions, and context — lives in the **NotebookLM notebook**. This file does NOT store knowledge. The notebook is the single source of truth.

Source documents are maintained in `docs/second-brain/` using the `NN-slug.md` naming convention (24 docs numbered 00–23, plus `GUIA-NOTEBOOKLM.md`). Filenames are self-descriptive — use `ls docs/second-brain/` to browse.

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
- **Evolution trigger**: 3+ executions missing benchmark → flag template for review in `docs/template-catalog.md`
- **Template catalog**: `docs/template-catalog.md` indexes all executable templates across all plugins

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

## Git Workflow

- Main branch: `main`
- Development branch: `development`
- Work on feature branches, merge to `development`, then to `main`.
