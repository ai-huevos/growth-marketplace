---
description: Run a multi-lens Business Panel diagnostic on any marketplace artifact (positioning, offer, copy, funnel, sales-deck, discovery, email-sequence). Loads expert lenses from os/lenses/, runs a 3-round protocol (independent → debate → consensus), produces a debiased report.
argument-hint: <stage> <artifact-path> [--companions <path1,path2>]
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, Agent
---

# /panel — Business Panel multi-lens diagnostic

Invocation: `/panel <stage> <artifact-path> [--companions <path1,path2>]`

Examples:
- `/panel positioning clients/ai-huevos/positioning-master.md`
- `/panel offer clients/ai-huevos/offer-architecture/escala-value-ladder.md`
- `/panel copy clients/ai-huevos/website/landing-hero.md`
- `/panel sales-deck clients/ai-huevos/sales-decks/v1-deck.md`
- `/panel discovery clients/ai-huevos/sales-engine/discovery-script.md`
- `/panel email-sequence clients/ai-huevos/sequences/secuencia-origen.md`
- `/panel funnel clients/ai-huevos/funnel-architecture/escala-flow.md`

Args: $ARGUMENTS

## What this command does

This command activates the `tools/business-panel/` skill. The skill:

1. **Resolves the stage** — loads `tools/business-panel/stages/<stage>.md` to get the lens roster, Round-1 questions, debate pairs, and output format
2. **Spawns Round 1 lens agents in parallel** — one per lens in the roster. Each runs the `tools/lens-loader.md` protocol (limitation gate → key_questions → decision rules → bias disclosure)
3. **Runs Round 2 cross-lens debate** — single agent reads all Round-1 outputs and surfaces convergence / correction / dissent for each declared debate pair
4. **Produces Round 3 synthesis** — consensus prescriptions + groupthink check + dissent log + fresh findings + (where applicable) polish candidates with a panel verdict
5. **Saves the report** — to `clients/<client>/diagnostics/<stage>-panel-<date>.md` per the canonical output schema in `tools/business-panel/templates/output-format.md`
6. **Updates bookkeeping** — appends to `docs/execution-log.md` and `os/lenses/registry.md`

## Available stages (v1.0)

| Stage | Lens roster | Best for |
|---|---|---|
| `positioning` | dunford, schwartz, christensen, hormozi | positioning masters, ICP, category design |
| `offer` | hormozi, schwartz, cialdini, christensen | offer architecture, value ladders, pricing |
| `copy` | schwartz, wiebe, cialdini, laja | landing pages, hero sections, ad copy |
| `funnel` | hormozi, schwartz, laja, christensen | end-to-end funnel design |
| `sales-deck` | dunford, cialdini, hormozi, shepard | investor decks, sales presentations |
| `discovery` | cialdini, shepard, schwartz, christensen | discovery scripts, qualification |
| `email-sequence` | schwartz, wiebe, cialdini, hormozi | ORIGEN sequences, nurture flows |

For full details on each stage, read `tools/business-panel/stages/<stage>.md`.

## Prerequisites

- The lenses required by the stage must be converted and registered: `os/lenses/registry.md`
- If a lens is missing, run `node scripts/convert-lens.mjs` first to convert from JSON.
- The artifact path must exist; companions are optional but recommended for stages that benefit from VOC/brand context.

## Time & cost

A typical panel run takes 8-15 minutes wall-clock with parallel Round 1. Spawns 5-7 agent calls. Reserve for high-stakes documents (positioning master, offer architecture, sales deck) — not for tactical edits.

## Reference run

The first marketplace panel was the AI Huevos `positioning-master.md` v1.0 → v1.1 polish (2026-05-02). Output:
- `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md` (Round 1 output)
- `clients/ai-huevos/diagnostics/business-panel-2026-05-02.md` (Round 2 + 3 consensus)
- `clients/ai-huevos/positioning-master-v1.1-draft.md` (resulting polished artifact)

## See also

- `tools/business-panel/SKILL.md` — full skill specification
- `tools/business-panel/README.md` — user-facing docs with examples
- `tools/lens-loader.md` — per-lens application contract
- `os/lenses/registry.md` — authoritative lens-id → path mapping
