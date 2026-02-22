# KAI Partners — Client Configuration

> Rebrand from AI Huevos. Branch: `feat/kai-partners-rebrand`

## Status

| Phase | Status | Deliverables |
|-------|--------|-------------|
| Part 1: Panel Validation | DONE | 6/6 agents, convergence report |
| Phase 1: DEFINIR | DONE | ICP, competitive, positioning, product-marketing |
| **Phase 2: ALMA** | **DONE** | ACF profile, creation myth, brand voice |
| **Phase 3: ESCALA + IMAN + Case Study** | **DONE** | Value ladder, ORIGEN sequence, PULSAR calendar, Finkargo case study |
| **Phase 3B: Funnel + Website + Quiz** | **DONE** | Landing page (10-section), quiz diagnostic, funnel blueprint |
| Phase 4: Launch | PENDING | Domains, Notion, channels, implementation |

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

## Architecture Note

This directory follows the monorepo client pattern: `clients/<client>/brand-config/`. Engine plugins in `plugins/` stay generic. KAI Partners-specific brand content lives here.

Legacy AI Huevos config preserved at `clients/ai-huevos/` for reference.
