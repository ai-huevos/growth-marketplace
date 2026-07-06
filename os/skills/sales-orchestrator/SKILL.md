---
name: sales-orchestrator
description: Full-cycle sales orchestration engine, generic and installable per client. Chains marketplace skills + MCPs into a repeatable pipeline from prospecting through closing. Use when preparing prospect research, processing discovery transcripts, generating post-call deliverables, coaching on sales performance, or creating follow-up sequences. Activates for "prospect research", "post-discovery", "sales coach", "desk work", "follow-up sequence", "sales pipeline", "transcript analysis", "deal processing", or "coaching report".
version: 1.0.0
client: "{{CLIENT_SLUG}}"
---

# Sales Orchestrator

Sistema de orquestacion de ventas full-cycle, generico e instalable por cliente. Encadena skills del marketplace + MCPs en un pipeline repetible con entregables de marca. Toda referencia de marca, pricing o almacenamiento de deals se resuelve desde `clients/{{CLIENT_SLUG}}/` en tiempo de instalacion — ver seccion **Instalacion** abajo.

## Pipeline de 4 Fases

```
/prospect <company>           FASE 1: PROSPECTING
      |                       Perplexity deep research
      |                       Populated discovery scorecard
      |                       Pre-call brief + hypotheses
      v
  DISCOVERY CALL (human)
      v
/post-discovery <transcript>  FASE 2: POST-DISCOVERY
      |                       Fireflies MCP o transcript pegado
      |                       Extract: systems, pains, stakeholders, PULSO, quotes
      |                       Populate business-context.md
      |                       Auto-trigger coaching
      v
/desk-work <company>          FASE 3: DESK WORK
      |                       HTML Discovery Report (Mermaid diagrams)
      |                       Entregable de descubrimiento (populated template)
      |                       Growth Proposal (with pricing-grid)
      |                       Personalized Sales Deck
      v
/follow-up <company>          FASE 4: FOLLOW-UP & CLOSING
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

## Brand Rules (se resuelven desde el install)

Este motor no asume ninguna marca especifica. Voice, narrative arc, vocabulario, anti-palabras y proof points del cliente instalado viven en el archivo de configuracion — nunca se hardcodean aqui:

- Full brand reference: `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`

Antes de generar cualquier copy de cara al prospect (email, propuesta, deck, reporte), leer siempre ese archivo para resolver voz, vocabulario, anti-palabras y proof points reales del cliente instalado.

## Deal Storage Convention

```
clients/{{CLIENT_SLUG}}/deals/<deal-slug>/
  business-context.md     <- Structured extraction from transcript
  coaching-report.md      <- Sales performance analysis
  discovery-report.html   <- HTML report with Mermaid diagrams
  mapa-energia.md         <- Populated Energy Map (o el entregable equivalente del cliente)
  proposal.md             <- Growth proposal with pricing
  follow-up-emails.md     <- 3-email sequence
```

## Output Quality Gates

1. Every business-context.md must have all 5 PULSO dimensions scored
2. Every coaching report must score on the 0-85 scale
3. Every proposal must reference `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` for pricing
4. Every follow-up email must include at least 1 case-study proof point sourced from `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`
5. Every deliverable must pass the brand-voice anti-word check (`clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`)

## Instalacion

Este skill es un motor generico. Para instalarlo en un cliente especifico, define la variable `{{CLIENT_SLUG}}` (slug del cliente que instala el motor, ej. `kai-partners`, `forte-global`) y provee los siguientes archivos en `clients/{{CLIENT_SLUG}}/`:

| Variable / Archivo | Ruta derivada | Contenido |
|---|---|---|
| `{{CLIENT_SLUG}}` | — | Slug del cliente instalado; se sustituye en todas las rutas de abajo |
| Pricing grid | `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` | Tabla de tiers y precios por region |
| Brand voice | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Voz, narrative arc, vocabulario, anti-palabras, proof points |
| Deals | `clients/{{CLIENT_SLUG}}/deals/<deal-slug>/` | Carpeta por deal con los 6 entregables de la Deal Storage Convention |
| VoC language bank | `clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md` | Banco de vocabulario de prospects, actualizado por `/follow-up` |
| Delivery templates | `clients/{{CLIENT_SLUG}}/delivery/*.md` | Plantillas de entregables propios del cliente (ej. Mapa de Energia, propuesta de Build, scorecard de discovery) |
| GCO de instalacion (opcional) | `~/.growthos/contexts/{{CLIENT_SLUG}}.yaml` | Growth Context Object del cliente instalado, si corre GrowthOS sobre si mismo |

**Nota**: el GCO de instalacion (`{{CLIENT_SLUG}}.yaml`) es distinto del GCO por deal (`<deal-slug>.yaml`) que `/follow-up` consulta opcionalmente cuando el prospect ya es cliente de GrowthOS por su cuenta.

**Modo de falla**: si `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` o `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` no existen, detente y pide al operador que configure el cliente (`clients/{{CLIENT_SLUG}}/`) antes de generar cualquier entregable.
