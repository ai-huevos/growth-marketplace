---
name: kai-sales-engine
description: Full-cycle sales orchestration for KAI Partners. Chains marketplace skills + MCPs into a repeatable pipeline from prospecting through closing. Use when preparing prospect research, processing discovery transcripts, generating post-call deliverables, coaching on sales performance, or creating follow-up sequences. Activates for "kai prospect", "kai discovery", "kai coach", "kai desk", "kai follow", "post-discovery", "sales pipeline", "transcript analysis", "deal processing", or "coaching report".
version: 1.0.0
client: kai-partners
---

# KAI Sales Engine

Sistema de orquestacion de ventas full-cycle para KAI Partners. Encadena skills del marketplace + MCPs en un pipeline repetible con entregables de marca.

## Pipeline de 4 Fases

```
/kai-prospect <company>       FASE 1: PROSPECTING
      |                       Perplexity deep research
      |                       Populated discovery scorecard
      |                       Pre-call brief + hypotheses
      v
  DISCOVERY CALL (human)
      v
/kai-discovery <transcript>   FASE 2: POST-DISCOVERY
      |                       Fireflies MCP o transcript pegado
      |                       Extract: systems, pains, stakeholders, PULSO, quotes
      |                       Populate business-context.md
      |                       Auto-trigger coaching
      v
/kai-desk <company>           FASE 3: DESK WORK
      |                       HTML Discovery Report (Mermaid diagrams)
      |                       Mapa de Energia (populated template)
      |                       Growth Proposal (with pricing-grid)
      |                       Personalized Sales Deck
      v
/kai-follow <company>         FASE 4: FOLLOW-UP & CLOSING
      |                       3-email sequence (populated)
      |                       Gmail MCP -> draft creation
      |                       Update prospect-language-bank
      |                       Log persona insights
      v
  DEAL LOGGED
```

## Cross-References (reuse, NOT duplicate)

| Phase | Marketplace Skill | What it provides |
|-------|-------------------|------------------|
| Prospecting | `plugins/play-to-win/skills/pre-discovery-research/` | 5-layer research methodology |
| Prospecting | `plugins/sales-blueprint/skills/discovery-mastery/` | PULSO framework, AVE, question bank |
| Discovery | `plugins/play-to-win/skills/discovery-demo/` | 54-point checklist, VAGONES |
| Discovery | `plugins/play-to-win/skills/deal-strategy/` | Stakeholder facilitation |
| Desk Work | `plugins/sales-blueprint/skills/proposal-generation/` | Proposal methodology |
| Desk Work | `plugins/play-to-win/skills/relationship-mapping/` | Buying center mapping |
| Follow-up | `plugins/copywriting-engine/skills/email-sequences/` | Email cadence structure |
| Coaching | `plugins/sales-blueprint/skills/coaching-cadence/` | ROCA framework |

## MCP Integration

| Phase | MCP | Usage |
|-------|-----|-------|
| Prospecting | Perplexity (project) | Deep research on company + stakeholders + industry |
| Post-Discovery | Fireflies (claude.ai) | Retrieve transcript by ID (also supports paste fallback) |
| Desk Work | Netlify (claude.ai) | Deploy HTML report as static page |
| Follow-up | Gmail (claude.ai) | Create email drafts (NEVER auto-send) |
| Follow-up | Kit (project) | Add contact to ORIGEN sequence |

## Brand Rules (Quick Reference)

- Voice: Bold-First (BOLD > SMART > WARM > RELIABLE)
- Narrative arc: GOLPE (Gancho > Observacion > Leccion > Prueba > Empujon)
- Vocabulary: "energia", "rieles", "fluir", "capturar", "partner", "AI-OS"
- Anti-words: "solucion end-to-end", "leverage", "synergy", "disruptivo", "robusto", "seamless"
- Proof point: Finkargo 428x ROI ($35K -> $15M ahorros, 110+ procesos, 3+ anos)
- Full brand reference: `clients/kai-partners/brand-config/brand-reference.md`

## Deal Storage Convention

```
clients/kai-partners/deals/<company-slug>/
  business-context.md     <- Structured extraction from transcript
  coaching-report.md      <- Sales performance analysis
  discovery-report.html   <- HTML report with Mermaid diagrams
  mapa-energia.md         <- Populated Energy Map
  proposal.md             <- Growth proposal with pricing
  follow-up-emails.md     <- 3-email sequence
```

## Output Quality Gates

1. Every business-context.md must have all 5 PULSO dimensions scored
2. Every coaching report must score on the 0-85 scale
3. Every proposal must reference pricing-grid.md for pricing
4. Every follow-up email must include at least 1 Finkargo proof point
5. Every deliverable must pass brand-voice anti-word check
