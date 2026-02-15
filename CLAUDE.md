# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos Growth Marketplace — a marketplace of Claude Code plugins that package B2B growth, marketing, sales, and operations frameworks as installable skills, agents, commands, and hooks. All content is in Spanish (do not translate).

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

### Three Plugin Types

| Plugin | Focus | Key Methodology |
|--------|-------|-----------------|
| `growth-foundations` | ICP, positioning, competitive analysis, ClarQ diagnostic | SPICED segmentation |
| `sales-blueprint` | Discovery, pipeline, proposals, coaching | Winning by Design / SPICED |
| `copywriting-engine` | Headlines, emails, landing pages, psychological triggers | 4-phase agent pipeline |

### Key Patterns

- **SPICED** is the common diagnostic language across all sales-oriented plugins (Situation, Pain, Impact, Critical Event, Decision). It connects discovery → pipeline → proposals → coaching.
- **YAML frontmatter** in SKILL.md files defines trigger keywords that activate the skill automatically. Commands use frontmatter for `description`, `argument-hint`, and `allowed-tools`.
- **Cross-references**: Skills reference their own `frameworks/`, `templates/`, and `patterns/` subdirectories via relative paths. Commands reference agent files (e.g., `/copy` orchestrates 4 agents).
- **Scoring models**: ICP uses 0-100 scoring with tiers. ClarQ uses 0-40 with color heatmap. Pipeline uses SPICED-based health indicators.

## Conventions

- All content in **Spanish**. Never translate to English.
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
| `GUIA-NOTEBOOKLM.md` | Step-by-step notebook setup guide |

When adding new content to the marketplace, update the corresponding second-brain doc and re-upload to NotebookLM.

## Git Workflow

- Main branch: `main`
- Development branch: `development`
- Work on feature branches, merge to `development`, then to `main`.
