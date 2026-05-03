# Expert Lens Registry

> Authoritative join table: which lens lives where, which skills/agents use it.
> One row per lens. Rebuilt from actuals via `node scripts/rebuild-lens-registry.mjs`.

**Status**: 43 lenses converted across 15/15 domains.

## How to read this

- **lens_id** — the slug used in `lenses:` frontmatter declarations
- **expert** — full name from the source JSON
- **domain (JSON)** — the original `expert.domain` string from the JSON source
- **path** — relative to repo root
- **skills_using** — every SKILL.md that declares this lens
- **agents_using** — every agent .md that declares this lens
- **status** — `active` (consumed by ≥1 skill/agent) or `draft` (converted but not yet wired)
- **slug note** — appears when the YAML `domain_slug` field differs from the file's parent folder (intentional override)

## Offer Engineering & Value Architecture

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| hormozi | Alex Hormozi | 1A - Offer Engineering & Value Architecture | `os/lenses/offer-engineering/hormozi.md` | copywriting-engine/headline-mastery | — | active |

## Persuasion, Copy & Influence

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| cialdini | Robert Cialdini | 8 - Trust & Ethics | `os/lenses/persuasion/cialdini.md` | — | — | draft |
| georgi | Stefan Georgi | 1A - Copy Architecture & Persuasion Engineering | `os/lenses/persuasion/georgi.md` | — | — | draft |
| laja | Peep Laja | 1B - Conversion Execution | `os/lenses/persuasion/laja.md` | — | — | draft |
| schwartz | Eugene M. Schwartz | 1A - Persuasion Architecture | `os/lenses/persuasion/schwartz.md` | copywriting-engine/headline-mastery | — | active |
| wiebe | Joanna Wiebe | 1B - Copy Execution Quality | `os/lenses/persuasion/wiebe.md` | — | — | draft |

## Strategic Positioning & Branding

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| dunford | April Dunford | 3 - Strategic Positioning | `os/lenses/positioning/dunford.md` | — | — | draft |
| neumeier | Marty Neumeier | 3 - Strategic Positioning | `os/lenses/positioning/neumeier.md` | — | — | draft |
| ries-trout | Al Ries & Jack Trout | 3 - Strategic Positioning | `os/lenses/positioning/ries-trout.md` | — | — | draft |

## UX Research & Information Clarity

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| krug | Steve Krug | 4 - Clarity & Information Design | `os/lenses/ux-research/krug.md` | — | — | draft |
| nielsen | Jakob Nielsen | 4 - Clarity & Information Design | `os/lenses/ux-research/nielsen.md` | — | — | draft |
| redish | Dr. Ginny Redish | 4 - Clarity & Information Design | `os/lenses/ux-research/redish.md` | — | — | draft |

## Thinking Models & Epistemology

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| galef | Julia Galef | 5 - Empirical Grounding | `os/lenses/thinking-models/galef.md` | — | — | draft |
| nosek | Brian Nosek | 5 - Empirical Grounding | `os/lenses/thinking-models/nosek.md` | — | — | draft |
| sagan | Carl Sagan | 5 - Empirical Grounding | `os/lenses/thinking-models/sagan.md` | — | — | draft |

## Product Design & Audience Calibration

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| cooper | Alan Cooper | 6 - Audience Calibration | `os/lenses/product-design/cooper.md` | — | — | draft |
| norman | Don Norman | 6 - Audience Calibration | `os/lenses/product-design/norman-product.md` | — | — | draft |
| young | Indi Young | 6 - Audience Calibration | `os/lenses/product-design/young.md` | — | — | draft |

## SEO & Search Discovery

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| roof | Kyle Roof | 7 - Search & Discovery | `os/lenses/seo-search/roof.md` | — | — | draft |
| shepard | Cyrus Shepard | 7 - Search & Discovery | `os/lenses/seo-search/shepard.md` | — | — | draft |
| slawski | Bill Slawski | 7 - Search & Discovery | `os/lenses/seo-search/slawski.md` | — | — | draft |

## Trust & Ethics

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| cofone | Ignacio Cofone | 8 - Trust & Ethics | `os/lenses/trust-ethics/cofone.md` | — | — | draft |
| oneill | Onora O''Neill | 8 - Trust & Ethics | `os/lenses/trust-ethics/oneill.md` | — | — | draft |

## Strategy & Innovation

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| christensen | Clayton Christensen | 9 - Differentiation | `os/lenses/strategy-innovation/christensen.md` | — | — | draft |
| kim-mauborgne | W. Chan Kim & Renee Mauborgne | 9 - Differentiation | `os/lenses/strategy-innovation/kim-mauborgne.md` | — | — | draft |

## Data Visualization & Information Design

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| tufte | Edward Tufte | 10 - Technical Execution | `os/lenses/data-viz/tufte.md` | — | — | draft |

## Forecasting & Decision-Making

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| marks | Howard Marks | 11 - Strategic Reasoning | `os/lenses/forecasting/marks.md` | — | — | draft |
| popper | Karl Popper | 11 - Strategic Reasoning | `os/lenses/forecasting/popper.md` | — | — | draft |
| tetlock | Philip Tetlock | 11 - Strategic Reasoning | `os/lenses/forecasting/tetlock.md` | — | — | draft |

## Business Model & SaaS Economics

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| campbell | Patrick Campbell | 12 - Business Model Viability | `os/lenses/business-model/campbell.md` | — | — | draft |
| skok | David Skok | 12 - Business Model Viability | `os/lenses/business-model/skok.md` | — | — | draft |
| weinberg | Gabriel Weinberg | 12 - Business Model Viability | `os/lenses/business-model/weinberg.md` | — | — | draft |

## Software Quality & Operational Discipline

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| deming | W. Edwards Deming | 13 - Systems & Automation Design | `os/lenses/quality/deming.md` | — | — | draft |
| feathers | Michael Feathers | 13 - Systems & Automation Design | `os/lenses/quality/feathers.md` | — | — | draft |
| martin | Robert C. Martin | 10 - Technical Execution | `os/lenses/quality/martin.md` | — | — | draft |
| mcconnell | Steve McConnell | 10 - Technical Execution | `os/lenses/quality/mcconnell.md` | — | — | draft |
| vernon | Vaughn Vernon | 13 - Systems & Automation Design | `os/lenses/quality/vernon.md` | — | — | draft |

## AI Architecture & Agents

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| amodei | Dario Amodei & Anthropic | 14 - Agent & AI Design | `os/lenses/ai-future/amodei.md` | — | — | draft |
| commey | Daniel Commey | 14 - Agent & AI Design | `os/lenses/ai-future/commey.md` | — | — | draft |
| microsoft-azure | Microsoft Azure Architecture Center | 14 - Agent & AI Design | `os/lenses/ai-future/microsoft-azure.md` | — | — | draft |

## Visual & Interaction Design

| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |
|---|---|---|---|---|---|---|
| lupton | Ellen Lupton | 15 - Visual & Interaction Design | `os/lenses/visual-design/lupton.md` | — | — | draft |
| norman | Don Norman | 15 - Visual & Interaction Design | `os/lenses/visual-design/norman-visual.md` | — | — | draft |
| vignelli | Massimo Vignelli | 15 - Visual & Interaction Design | `os/lenses/visual-design/vignelli.md` | — | — | draft |

---

## Skill → Lens index (reverse lookup)

| Skill | Lenses applied |
|---|---|
| `copywriting-engine/headline-mastery` | hormozi, schwartz |

## Ad-hoc diagnostic runs (lens-as-tool, not lens-as-skill-input)

Lenses can be invoked directly on any artifact for diagnostic purposes via the `tools/lens-loader.md` protocol — either standalone or through `tools/business-panel/` which orchestrates multi-lens 3-round panels.

| Date | Artifact | Lenses applied | Output | Notes |
|---|---|---|---|---|
| 2026-05-02 | `clients/ai-huevos/positioning-master.md` v1.0 | dunford, hormozi, schwartz, christensen | `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md` | MVP validation (Round 1 only). 4 parallel agents. 8 convergent findings + 3 cross-lens conflicts surfaced. |
| 2026-05-02 | `clients/ai-huevos/positioning-master.md` v1.0 → v1.1 polish | dunford, hormozi, schwartz, christensen | `clients/ai-huevos/diagnostics/business-panel-2026-05-02.md` | First `tools/business-panel/` production run. Stage: `positioning`. 3-round protocol. 7 consensus, 2 dissents, 2 groupthink-checks, 5 fresh findings. Verdict: Candidate C ("Reality-based OS"). Successor: `clients/ai-huevos/positioning-master-v1.1-draft.md`. |

---

*Rebuilt: 2026-05-03 via `scripts/rebuild-lens-registry.mjs`. To update skill/agent bindings, edit `SKILL_BINDINGS` / `AGENT_BINDINGS` in the rebuild script and re-run.*
