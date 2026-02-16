# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos Growth Marketplace — a marketplace of Claude Code plugins that package B2B growth, marketing, sales, and operations frameworks as installable skills, agents, commands, and hooks. All content is Spanish-first.

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

`.claude-plugin/marketplace.json` at the repo root defines the plugin registry — published plugins, sources, categories, and keywords. Individual plugins have their own `.claude-plugin/plugin.json` manifests.

### Plugins

| Plugin | Focus | Key Methodology |
|--------|-------|-----------------|
| `growth-foundations` | ICP, positioning, competitive analysis, ClarQ diagnostic, quiz funnels | SPICED segmentation, ASK Method |
| `sales-blueprint` | Discovery, pipeline, proposals, coaching | Winning by Design / SPICED |
| `copywriting-engine` | Headlines, emails, landing pages, psychological triggers | 4-phase agent pipeline |
| `conversational-pm` | B2B growth intelligence project orchestration | Agent roster (Architecture Plumber → Data Specialist → DB Architect → Implementation → Dashboard) |
| `dotcom-secrets` | Funnels, value ladders, brand character, funnel optimization | ESCALA → FLUJO → Alma (Russell Brunson adapted to B2B LATAM) |

### Tools (non-plugin)

`tools/plugin-factory/` — Meta-tool for analyzing repos and generating new marketplace plugins. Symlinked to `~/.claude/skills/plugin-factory/` for use as a user-level skill. Not a marketplace plugin itself.

`tools/ingestion-orchestrator/` — Triage skill that analyzes incoming content against existing marketplace coverage. Symlinked to `~/.claude/skills/ingestion-orchestrator/`. Triggers: "ingest content", "triage research", "content triage", "ingerir contenido".

### Key Patterns

- **SPICED** is the common diagnostic language across all sales-oriented plugins (Situation, Pain, Impact, Critical Event, Decision). It connects discovery → pipeline → proposals → coaching.
- **YAML frontmatter** in SKILL.md files defines trigger keywords that activate the skill automatically. Commands use frontmatter for `description`, `argument-hint`, and `allowed-tools`.
- **Cross-references**: Skills reference their own `frameworks/`, `templates/`, and `patterns/` subdirectories via relative paths. Commands reference agent files (e.g., `/copy` orchestrates 4 agents).
- **Scoring models**: ICP uses 0-100 scoring with tiers. ClarQ uses 0-40 with color heatmap. Pipeline uses SPICED-based health indicators.

## Conventions

- All content is **Spanish-first**. Base content created in Spanish. Multi-language expansion planned for Phase 2.
- Plugin manifests use minimal fields: `name`, `version`, `description`, `author`.
- Skills use `**Triggers**:` lists in README.md to document activation keywords.
- Commands use `$ARGUMENTS` placeholder for user input in command .md files.
- Agent files define: Rol, Workflow (phased), Tools Disponibles, Output sections.

## Second Brain

All project knowledge — architecture decisions, error patterns, dependency choices, discussions, and context — lives in the **NotebookLM notebook**. This file does NOT store knowledge. The notebook is the single source of truth.

Source documents for the notebook are maintained in `docs/second-brain/`:

| Document | Content |
|----------|---------|
| `00-proyecto-overview.md` | Vision, plugins, audience, key metrics |
| `01-arquitectura-convenciones.md` | File structure, plugin anatomy, design patterns |
| `02-metodologia-spiced.md` | SPICED framework: dimensions, scoring, cross-plugin connections |
| `03-plugin-growth-foundations.md` | ICP, positioning, competitive analysis, ClarQ |
| `04-plugin-sales-blueprint.md` | Discovery, pipeline, proposals, coaching, agents |
| `05-plugin-copywriting-engine.md` | Headlines, emails, landing pages, triggers, agent pipeline |
| `06-modelos-scoring.md` | All scoring models unified reference |
| `07-sistema-agentes.md` | All 6 agents with workflow diagrams |
| `08-frameworks-patrones.md` | Frameworks, templates, pattern libraries |
| `09-inventario-contenido.md` | Complete 59-file inventory |
| `10-decisiones-diseno.md` | 10 architectural decisions with rationale |
| `11-gtm-skills-landscape.md` | GTM skills ecosystem, competitors, gaps, marketplace blueprint |
| `12-validacion-mercado-deep-research.md` | Market validation: Reddit/community signals, thesis stress test, 90-day execution plan |
| `13-distribucion-plugins-claude-code.md` | Plugin distribution channels, marketplace mechanics, Agent Skills open standard |
| `14-flujos-usuario.md` | Complete user flows: discovery, install, activation, commands, agent pipelines, cross-plugin journeys |
| `15-arquitectura-sistema.md` | System architecture: layers, data model, scoring system, design patterns, dependency diagrams |
| `16-quiz-funnel-ask-method.md` | Quiz funnel skill: ASK Method adapted to B2B, bucket identification, lean stress test |
| `17-research-plataforma-inteligencia-b2b.md` | Growth Intelligence Platform vision: semantic layer, knowledge graph roadmap, data flywheel |
| `18-plugin-dotcom-secrets.md` | DotCom Secrets plugin: ESCALA, FLUJO, Alma branded stack, funnel optimization |
| `19-deep-research-b2b-plugin-marketplace.md` | Deep research: plugin architecture, marketplace patterns, B2B AI landscape, LATAM opportunity |
| `20-content-mavericks-ecosystem.md` | Content Mavericks: 7 frameworks (Ski Slope, Greatest Hits, AIDA, Three Jabs, ISL), 35+ modules, triage guide |
| `GUIA-NOTEBOOKLM.md` | Step-by-step notebook setup guide |

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
