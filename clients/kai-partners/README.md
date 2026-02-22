# KAI Partners — Client Configuration

> Rebrand from AI Huevos. Branch: `feat/kai-partners-rebrand`

## Status

| Phase | Status | Deliverables |
|-------|--------|-------------|
| Part 1: Panel Validation | DONE | 6/6 agents, convergence report |
| Phase 1: DEFINIR | DONE | ICP, competitive, positioning, product-marketing |
| **Phase 2: ALMA** | **DONE** | ACF profile, creation myth, brand voice |
| Phase 3: ESCALA | PENDING | Value ladder, offer architecture |
| Phase 4: Launch | PENDING | Domains, Notion, channels, Finkargo case study |

## Brand Config Files

| File | Purpose | Status |
|------|---------|--------|
| `brand-config/acf-profile.md` | 10-step Attractive Character Framework | DRAFT |
| `brand-config/creation-myth.md` | 45-second origin story (panel non-negotiable #4) | DRAFT |
| `brand-config/brand-voice.md` | Voice rules migrated from AI Huevos | IN-REBRAND |

## Panel Non-Negotiables

1. [x] ~~Trademark + domain before public use~~ → Tracked separately
2. [x] Energy metaphor as primary brand narrative → ACF Step 3, Creation Myth
3. [x] K as proprietary visual mark → ACF Step 9
4. [x] 45-second creation myth → `creation-myth.md`
5. [ ] Finkargo case study under new brand, day one → Phase 4

## Skills Dog-Fooded

| Skill | Plugin | Score | Notes |
|-------|--------|-------|-------|
| ICP Analysis | growth-foundations | 5/5 | Phase 1 |
| Competitive Analysis | growth-foundations | 4/5 | Phase 1 |
| Positioning | growth-foundations | 5/5 | Phase 1 |
| Product Marketing | play-to-win | 4/5 | Phase 1 |
| **ALMA (ACF)** | **motor-de-ofertas** | **5/5** | **Phase 2** — framework fit excellent for rebrand |

## Architecture Note

This directory follows the monorepo client pattern: `clients/<client>/brand-config/`. Engine plugins in `plugins/` stay generic. KAI Partners-specific brand content lives here.

Legacy AI Huevos config preserved at `clients/ai-huevos/` for reference.
