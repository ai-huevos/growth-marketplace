# AI Huevos — Client Configuration

> Rebrand from AI Huevos. Branch: `feat/ai-huevos-rebrand`

## Status

| Phase | Status | Deliverables |
|-------|--------|-------------|
| Part 1: Panel Validation | DONE | 6/6 agents, convergence report |
| Phase 1: DEFINIR | DONE | ICP, competitive, positioning, product-marketing |
| **Phase 2: ALMA** | **DONE** | ACF profile, creation myth, brand voice |
| **Phase 3: ESCALA + IMAN + Case Study** | **DONE** | Value ladder, ORIGEN sequence, PULSAR calendar, Finkargo case study |
| **Phase 3B: Funnel + Website + Quiz** | **DONE** | Landing page (10-section), quiz diagnostic, funnel blueprint |
| **Phase 4: Launch** | **IN PROGRESS** | MCP config, validation gates, missing assets, platform specs, content bank, n8n workflow, G3 sales deck |

## Brand Config Files

| File | Purpose | Status |
|------|---------|--------|
| `brand-config/acf-profile.md` | 10-step Attractive Character Framework | DRAFT |
| `brand-config/creation-myth.md` | 45-second origin story (panel non-negotiable #4) | DRAFT |
| `brand-config/brand-voice.md` | Voice rules migrated from AI Huevos | IN-REBRAND |
| `sequences/secuencia-origen.md` | 5-email onboarding (ORIGEN) | DRAFT |
| `sequences/secuencia-pulsar.md` | Weekly engagement calendar (PULSAR) | DRAFT |
| `offer-architecture/escala-value-ladder.md` | 4-tier premium B2B value ladder (ESCALA) | DRAFT |
| `case-studies/finkargo.md` | Finkargo case study — day-one launch asset | LAUNCH-READY |
| `quiz-funnel/diagnostico-energia-ai.md` | Diagnóstico de Energía AI — hybrid Energy+PULSO scoring | DRAFT |
| `website/landing-page.md` | Full 10-section landing page copywriting | DRAFT |
| `funnel-architecture/funnel-blueprint.md` | Master funnel blueprint — FLUJO 7-phase system | DRAFT |
| `sequences/secuencia-reengagement.md` | 3-email win-back arc (A6) | DRAFT |
| `delivery/sprint-sop.md` | Sprint de Descubrimiento SOP — 10-day runbook (A14) | DRAFT |
| `delivery/mapa-energia-template.md` | Mapa de Energía deliverable template (A15) | DRAFT |
| `delivery/propuesta-aios-build.md` | AI-OS Build proposal template (A16) | DRAFT |
| `content-bank/carousel-3-razones.md` | LinkedIn carousel — "3 razones" (A11) | DRAFT |
| `content-bank/blog-metafora-sol.md` | Blog — "La Metáfora del Sol" (A12) | DRAFT |
| `content-bank/linkedin-posts-semana-1-2.md` | 10 LinkedIn posts, 2-week content bank | DRAFT |
| `launch/validation-gates.md` | 5 founder validation gates + VoC strategy | ACTIVE |
| `launch/launch-dashboard.md` | Go/no-go gates, 8-week timeline, platform status | ACTIVE |
| `voc/prospect-language-bank.md` | VoC prospect language bank (empty, awaiting data) | COLLECTING |
| `integrations/n8n-scoring-workflow.md` | n8n workflow: quiz → score → Kit → Notion → Slack | DRAFT |
| `integrations/notion-leads-database.md` | Notion lead database spec (lightweight CRM) | DRAFT |
| `integrations/tally-quiz-build-spec.md` | Tally.so quiz build spec (10 questions + gate) | DRAFT |
| `integrations/kit-sequences-build-spec.md` | Kit email sequences build spec (3 sequences) | DRAFT |
| `integrations/webflow-landing-build-spec.md` | Webflow landing page build spec (10 sections) | DRAFT |
| `sales-decks/g3-logistica-board-deck.md` | G3 Logística board deck — Andy Raskin 5 Moves, 15 slides + video script | DRAFT |

## Panel Non-Negotiables

1. [x] ~~Trademark + domain before public use~~ → Tracked separately
2. [x] Energy metaphor as primary brand narrative → ACF Step 3, Creation Myth
3. [x] K as proprietary visual mark → ACF Step 9
4. [x] 45-second creation myth → `creation-myth.md`
5. [x] Finkargo case study under new brand, day one → `case-studies/finkargo.md`

## Skills Dog-Fooded

| Skill | Plugin | Score | Notes |
|-------|--------|-------|-------|
| ICP Analysis | growth-foundations | 5/5 | Phase 1 |
| Competitive Analysis | growth-foundations | 4/5 | Phase 1 |
| Positioning | growth-foundations | 5/5 | Phase 1 |
| Product Marketing | play-to-win | 4/5 | Phase 1 |
| **ALMA (ACF)** | **motor-de-ofertas** | **5/5** | **Phase 2** — framework fit excellent for rebrand |
| **ESCALA** | **motor-de-ofertas** | **5/5** | **Phase 3** — premium B2B ladder, LTV:CAC modeled |
| **IMAN (ORIGEN)** | **motor-de-ofertas** | **5/5** | **Phase 3** — 5 emails mapped to ACF parables |
| **IMAN (PULSAR)** | **motor-de-ofertas** | **4/5** | **Phase 3** — weekly calendar, needs real send data |
| **Brand Voice** | **copywriting-engine** | **5/5** | **Phase 3** — Finkargo case study, GOLPE arc applied |
| **Quiz Funnel (SONDA)** | **growth-foundations** | **5/5** | **Phase 3B** — hybrid Energy+PULSO, 10 questions, 4 segments |
| **Landing Pages** | **copywriting-engine** | **5/5** | **Phase 3B** — full 10-section conversion architecture |
| **FLUJO** | **motor-de-ofertas** | **5/5** | **Phase 3B** — 7-phase funnel, asset dependency graph, launch plan |
| **discovery-demo** | **play-to-win** | ⬜/5 | **Phase 4** — Sprint SOP (A14) |
| **customer-journey** | **play-to-win** | ⬜/5 | **Phase 4** — Mapa de Energía template (A15) |
| **propuesta** | **sales-blueprint** | ⬜/5 | **Phase 4** — AI-OS Build proposal (A16) |
| **alma (IMAN reeng.)** | **motor-de-ofertas** | ⬜/5 | **Phase 4** — Re-engagement sequence (A6) |
| **copywriting-engine** | **copywriting-engine** | ⬜/5 | **Phase 4** — Carousel + blog (A11, A12) |
| **product-marketing** | **play-to-win** | ⬜/5 | **Phase 4** — LinkedIn content bank |

## Architecture Note

This directory follows the monorepo client pattern: `clients/<client>/brand-config/`. Engine plugins in `plugins/` stay generic. AI Huevos-specific brand content lives here.

Legacy AI Huevos config preserved at `clients/ai-huevos/` for reference.
