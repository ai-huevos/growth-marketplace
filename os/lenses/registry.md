# Expert Lens Registry

> Authoritative join table: which lens lives where, which skills/agents use it.
> One row per lens. Update this every time a lens is added, retired, or wired into a new consumer.

## How to read this

- **lens_id** — the slug used in `lenses:` frontmatter declarations
- **expert** — full name from the source JSON
- **domain** — the 15-domain taxonomy slug
- **path** — relative to repo root
- **skills_using** — every SKILL.md that declares this lens
- **agents_using** — every agent .md that declares this lens
- **status** — `active` (live), `draft` (converted but not wired), `parked` (intentionally unused)

## Domain 1 — Offer Engineering & Value Architecture

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| hormozi | Alex Hormozi | offer-engineering | `os/lenses/offer-engineering/hormozi.md` | `copywriting-engine/headline-mastery` | — | active |
| schwartz | Eugene M. Schwartz | offer-engineering | `os/lenses/offer-engineering/schwartz.md` | `copywriting-engine/headline-mastery` | — | active |

## Domain 2 — Persuasion Copy & Conversion Execution

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | Joanna Wiebe | persuasion | `os/lenses/persuasion/wiebe.md` | — | — | planned (Phase 2) |
| _planned_ | Peep Laja | persuasion | `os/lenses/persuasion/laja.md` | — | — | planned (Phase 2) |

## Domain 3 — Strategic Positioning & Branding

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| dunford | April Dunford | positioning | `os/lenses/positioning/dunford.md` | — (ad-hoc diagnostic 2026-05-02 on `clients/ai-huevos/positioning-master.md`) | — | active (draft, no skill consumer yet) |
| _planned_ | Marty Neumeier | positioning | `os/lenses/positioning/neumeier.md` | — | — | planned (Phase 2) |
| _planned_ | Al Ries / Jack Trout | positioning | `os/lenses/positioning/ries-trout.md` | — | — | planned (Phase 2) |

## Domain 4 — User Research & Testing

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | Steve Krug | ux-research | `os/lenses/ux-research/krug.md` | — | — | planned (Phase 3) |
| _planned_ | Jakob Nielsen | ux-research | `os/lenses/ux-research/nielsen.md` | — | — | planned (Phase 3) |

## Domain 5 — Thinking Models & Epistemology

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | Julia Galef | thinking-models | `os/lenses/thinking-models/galef.md` | — | — | planned (Phase 3) |
| _planned_ | Brian Nosek | thinking-models | `os/lenses/thinking-models/nosek.md` | — | — | planned (Phase 3) |
| _planned_ | Carl Sagan | thinking-models | `os/lenses/thinking-models/sagan.md` | — | — | planned (Phase 3) |

## Domain 7 — Sales & Influence Psychology

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | Dale Shepard | sales-influence | `os/lenses/sales-influence/shepard.md` | — | — | planned (Phase 2) |

## Domain 8 — Trust & Ethics

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| cialdini | Robert Cialdini | trust-ethics | `os/lenses/trust-ethics/cialdini.md` | — | — | active (draft, no skill consumer yet) |

## Domain 9 — Strategy & Innovation

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| christensen | Clayton Christensen | strategy-innovation | `os/lenses/strategy-innovation/christensen.md` | — (ad-hoc diagnostic 2026-05-02 on `clients/ai-huevos/positioning-master.md`) | — | active (draft, no skill consumer yet) |
| _planned_ | Kim & Mauborgne | strategy-innovation | `os/lenses/strategy-innovation/kim-mauborgne.md` | — | — | planned (Phase 3) |

## Domain 10 — Data Visualization & Information Design

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | Edward Tufte | data-viz | `os/lenses/data-viz/tufte.md` | — | — | planned (Phase 2) |

## Domain 11 — Forecasting & Decision-Making

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | Philip Tetlock | forecasting | `os/lenses/forecasting/tetlock.md` | — | — | planned (Phase 2) |

## Domain 12 — Systems & Operations

| lens_id | expert | domain | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| _planned_ | W. Edwards Deming | systems-ops | `os/lenses/systems-ops/deming.md` | — | — | planned (Phase 2) |
| _planned_ | David Skok | systems-ops | `os/lenses/systems-ops/skok.md` | — | — | planned (Phase 2) |

## Domains 6, 13, 14, 15 — backlog (Phase 3)

Domain 6 (Product Design — Cooper, Norman, Young), Domain 13 (Quality — Feathers, Vernon), Domain 14 (AI & Future — Amodei, Microsoft/Azure), Domain 15 (Visual Design — Vignelli, Lupton, Norman) sit in the backlog. Convert and wire only when a concrete consumer skill emerges.

---

## Skill → Lens index (reverse lookup)

| Skill | Lenses applied |
|---|---|
| `copywriting-engine/skills/headline-mastery` | hormozi, schwartz |

(Will populate as Phase 2 wires more skills.)

## Ad-hoc diagnostic runs (lens-as-tool, not lens-as-skill-input)

Lenses can be invoked directly on any artifact for diagnostic purposes via the `tools/lens-loader.md` protocol — either standalone or through `tools/business-panel/` which orchestrates multi-lens 3-round panels.

| Date | Artifact | Lenses applied | Output | Notes |
|---|---|---|---|---|
| 2026-05-02 | `clients/ai-huevos/positioning-master.md` v1.0 | dunford, hormozi, schwartz, christensen | `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md` | MVP validation (Round 1 only). 4 parallel agents. 8 convergent findings + 3 cross-lens conflicts surfaced. |
| 2026-05-02 | `clients/ai-huevos/positioning-master.md` v1.0 → v1.1 polish | dunford, hormozi, schwartz, christensen | `clients/ai-huevos/diagnostics/business-panel-2026-05-02.md` | First `tools/business-panel/` production run. Stage: `positioning`. 3-round protocol (independent → debate → consensus). 7 consensus, 2 dissents, 2 groupthink-checks, 5 fresh findings. Verdict: Candidate C ("Reality-based OS"). Successor: `clients/ai-huevos/positioning-master-v1.1-draft.md`. |

## Plan-2-skill mapping (Phase 2 targets, not yet active)

| Skill | Planned lenses |
|---|---|
| `copywriting-engine/skills/psychological-triggers` | cialdini, wiebe |
| `motor-de-ofertas/skills/alma` | hormozi, schwartz |
| `growth-foundations/skills/positioning` | dunford, neumeier |
| `sales-blueprint/skills/discovery-mastery` | cialdini, shepard |
| `play-to-win/skills/customer-success-ops` | skok, deming |
| `copywriting-engine/skills/hook-mastery` (post-promotion) | schwartz, cialdini |
| `conversational-pm/skills/meeting-to-prd` (post-promotion) | christensen, tetlock |
| `business-architect/skills/business-blueprint` (post-promotion, new plugin) | hormozi, dunford, schwartz, christensen |
