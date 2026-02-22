# Launch Dashboard — KAI Partners Phase 4

```yaml
client: KAI Partners
document: launch-dashboard
version: 1.0
status: ACTIVE
date: 2026-02-22
timeline: 8 weeks
budget-monthly: $65-$150 (platforms) + $500-$1K (ads test Week 3)
```

> **Panel de control del lanzamiento.** Rastrea gates, builds, integraciones y métricas.
> Actualizar semanalmente.

---

## Platform Status

| Platform | Purpose | Status | Account | Notes |
|----------|---------|--------|---------|-------|
| **Tally.so** | Quiz funnel | ⬜ API key needed | — | Free tier, 10 questions |
| **Kit** (ConvertKit) | Email sequences | ⬜ API key needed | — | Creator plan $29/mo |
| **Webflow** | Landing page | ⬜ OAuth pending | — | $29/mo, Relume template |
| **Notion** | Lead database (CRM) | ✅ MCP active | — | Free/Team plan |
| **Cal.com** | Sprint booking | ⬜ Setup needed | — | Free tier |
| **n8n** | Integration engine | ⬜ Deploy needed | — | Self-hosted, Railway $5/mo |
| **Slack** | Lead alerts | ✅ MCP active | — | #leads-entrantes channel |
| **Mixpanel** | Analytics | ⬜ Setup needed | — | Free tier |
| **Figma** | Visual tokens | ✅ MCP active | — | KAI design system |

---

## MCP Status

| MCP | Config | Status | First use |
|-----|--------|--------|-----------|
| Perplexity | `.mcp.json` | ✅ Active | Research |
| Kit | `.mcp.json` | ⬜ Needs `KIT_API_KEY` | Sequences |
| Tally | `.mcp.json` | ⬜ Needs `TALLY_API_KEY` | Quiz build |
| Webflow | `.mcp.json` | ⬜ Needs OAuth | Landing page |
| Notion | Global Claude plugin | ✅ Active | Lead database |
| Slack | Global Claude plugin | ✅ Active | Lead alerts |
| Figma | Global Claude plugin | ✅ Active | Visual tokens |
| Fireflies | Global (disabled) | ⬜ Re-enable needed | VoC mining |

---

## Validation Gates Status

| Gate | Description | Status | Blocks |
|------|-------------|--------|--------|
| **1A** | Brand Voice validated | ⬜ | ALL public content |
| **1B** | Finkargo numbers verified | ⬜ | Quiz Q8, ORIGEN E4, Landing S6/S9 |
| **1C** | Sprint pricing finalized | ⬜ | Cal.com, ORIGEN E5, Landing CTA |
| **1D** | Domain registered + DNS | ⬜ | Webflow publish, email domain |
| **1E** | Roberto VoC interview | ⬜ | Landing hero v2, case study upgrade |

**Full tracker:** `clients/kai-partners/launch/validation-gates.md`

---

## Asset Build Status

### Existing (Phase 1-3)

| # | Asset | File | Status |
|---|-------|------|--------|
| A1 | Landing page spec | `website/landing-page.md` | ✅ SPEC READY |
| A2 | Quiz spec | `quiz-funnel/diagnostico-energia-ai.md` | ✅ SPEC READY |
| A3 | Finkargo case study | `case-studies/finkargo.md` | ✅ LAUNCH-READY |
| A4 | Secuencia ORIGEN | `sequences/secuencia-origen.md` | ✅ DRAFT |
| A5 | Secuencia PULSAR | `sequences/secuencia-pulsar.md` | ✅ DRAFT |
| A7 | ESCALA Value Ladder | `offer-architecture/escala-value-ladder.md` | ✅ DRAFT |
| A8 | Brand Voice | `brand-config/brand-voice.md` | 🔄 IN-REBRAND |
| A9 | ACF Profile | `brand-config/acf-profile.md` | ✅ DRAFT |
| A10 | Creation Myth | `brand-config/creation-myth.md` | ✅ DRAFT |
| A18 | Funnel Blueprint | `funnel-architecture/funnel-blueprint.md` | ✅ DRAFT |

### Phase 4 Builds

| # | Asset | File | Status | Skill Dog-fooded |
|---|-------|------|--------|-----------------|
| A6 | Re-engagement sequence | `sequences/secuencia-reengagement.md` | ⬜ BUILDING | motor-de-ofertas/alma |
| A11 | LinkedIn carousel | `content-bank/carousel-3-razones.md` | ⬜ BUILDING | copywriting-engine |
| A12 | Blog: Metáfora del Sol | `content-bank/blog-metafora-sol.md` | ⬜ BUILDING | copywriting-engine |
| A14 | Sprint SOP | `delivery/sprint-sop.md` | ⬜ BUILDING | play-to-win/discovery-demo |
| A15 | Mapa de Energía template | `delivery/mapa-energia-template.md` | ⬜ BUILDING | play-to-win/customer-journey |
| A16 | AI-OS Build proposal | `delivery/propuesta-aios-build.md` | ⬜ BUILDING | sales-blueprint/propuesta |
| A17 | Cal.com booking page | — | ⬜ HUMAN ACTION | — |

### Platform Builds

| Platform | Build | Status | Depends on |
|----------|-------|--------|------------|
| Tally | Quiz form (10 questions) | ⬜ | Tally API key |
| Tally | Result pages (4 segments) | ⬜ | Quiz form |
| Tally | Webhook config | ⬜ | n8n deploy |
| Kit | ORIGEN sequence (5 emails) | ⬜ | Kit API key |
| Kit | Custom fields (energy_score, etc.) | ⬜ | Kit API key |
| Kit | PULSAR first 2 weeks (10 drafts) | ⬜ | ORIGEN sequence |
| Webflow | Template selection + KAI aesthetic | ⬜ HUMAN | Gate 1D |
| Webflow | Content population (10 sections) | ⬜ | Template ready |
| Webflow | Tracking pixels (LinkedIn, Meta, Mixpanel) | ⬜ | Site live |
| Notion | KAI Leads database | ⬜ | — |
| n8n | Scoring workflow | ⬜ | n8n deploy |
| n8n | Tally → Kit → Notion → Slack pipeline | ⬜ | All APIs |
| Cal.com | Sprint booking event | ⬜ HUMAN | Gate 1C |
| Slack | #leads-entrantes channel | ⬜ | — |

---

## Go/No-Go Gates

### Week 1 Gate — Before organic push

- [ ] Quiz functional end-to-end (Tally → score → Kit → Notion)
- [ ] ORIGEN Email 1 fires within 2 hours of quiz completion
- [ ] Landing page live with both CTAs working (quiz + Sprint)
- [ ] Notion CRM receiving leads with Energy Score
- [ ] At least 1 founder reviewed and approved everything

### Week 3 Gate — Before paid traffic

- [ ] 20+ organic quiz completions
- [ ] Landing page → email conversion > 25%
- [ ] ORIGEN Email 1 open rate > 30%
- [ ] Sprint SOP documented and first Sprint in progress
- [ ] LinkedIn Ads creative approved

### Week 8 Decision Point — Scale / Adjust / Pivot

- [ ] 5+ Sprints completed
- [ ] Sprint → Build conversion > 20%
- [ ] CPL < $20 (if running ads)
- [ ] Preliminary LTV:CAC calculated
- [ ] NPS Sprint > 40

---

## 8-Week Timeline

| Week | Focus | Key milestone | Status |
|------|-------|---------------|--------|
| **0** | MCP setup + founder validation gates | APIs configured, brand voice approved | 🔄 IN PROGRESS |
| **1** | Platform build: Tally quiz, Kit ORIGEN, Webflow content, Cal.com | Quiz + landing + email = live pipeline | ⬜ |
| **2** | PULSAR begins, LinkedIn organic starts (3-5 posts/week) | First organic leads through quiz | ⬜ |
| **3** | LinkedIn Ads test ($500-$1K) if Week 1 gate passed | Paid traffic flowing | ⬜ |
| **4** | First Sprint completed, Mapa de Energía delivered | First revenue from Sprint tier | ⬜ |
| **5-7** | Optimize: A/B tests, score calibration, PULSAR editorial | Data-driven iteration | ⬜ |
| **8** | Decision point: scale / adjust / pivot | LTV:CAC confirmed | ⬜ |

---

## Monthly Platform Cost

| Platform | Cost | Tier |
|----------|------|------|
| Tally.so | $0 | Free |
| Webflow | $29/mo | CMS plan |
| Kit (ConvertKit) | $29/mo | Creator |
| Cal.com | $0 | Free |
| n8n | $0-$5/mo | Self-hosted (Railway) |
| Mixpanel | $0 | Free tier |
| **Total** | **$58-$63/mo** | — |

---

## Dog-Fooding Scorecard

| Skill | Plugin | Usage | Score (1-5) | Notes |
|-------|--------|-------|-------------|-------|
| discovery-demo | play-to-win | A14 Sprint SOP | ⬜ /5 | — |
| customer-journey | play-to-win | A15 Mapa de Energía | ⬜ /5 | — |
| propuesta | sales-blueprint | A16 AI-OS Build proposal | ⬜ /5 | — |
| alma (IMAN) | motor-de-ofertas | A6 Re-engagement | ⬜ /5 | — |
| copywriting-engine | copywriting-engine | A11 carousel + A12 blog | ⬜ /5 | — |
| headline | copywriting-engine | LinkedIn Ads copy | ⬜ /5 | — |
| product-marketing | play-to-win | Content bank | ⬜ /5 | — |

---

## Integration Architecture

```
                    ┌─────────────┐
                    │   TALLY.SO  │
                    │  (Quiz)     │
                    └──────┬──────┘
                           │ webhook
                           ▼
                    ┌─────────────┐
                    │    n8n      │
                    │  (Engine)   │
                    └──┬──┬──┬───┘
                       │  │  │
              ┌────────┘  │  └────────┐
              ▼           ▼           ▼
       ┌──────────┐ ┌──────────┐ ┌──────────┐
       │   KIT    │ │  NOTION  │ │  SLACK   │
       │ (Email)  │ │  (CRM)   │ │ (Alerts) │
       └────┬─────┘ └──────────┘ └──────────┘
            │
            ▼
       ┌──────────┐
       │ CAL.COM  │
       │(Booking) │
       └──────────┘
```

**Priority integration:** HOT lead Slack alert
- Score < 40 AND Q2 = CEO/COO AND Q8 = A/B
- Immediate post to #leads-entrantes with Sales Brief

---

*Updated: 2026-02-22 | Next review: Week 1*
