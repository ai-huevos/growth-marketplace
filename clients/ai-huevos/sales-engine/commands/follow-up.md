---
description: Generate follow-up email sequence, create Gmail drafts, update prospect language bank, and log persona insights. Reads business-context.md and desk-work outputs. Final phase of the KAI sales pipeline.
argument-hint: <company-slug>
allowed-tools: [Read, Write, Glob, Grep]
---

# KAI Follow-Up — Closing Loop

El usuario quiere generar follow-up para: $ARGUMENTS

## Pre-requisitos

Verificar que existen:
- `clients/ai-huevos/deals/{{COMPANY_SLUG}}/business-context.md` (status: POPULATED)
- `clients/ai-huevos/deals/{{COMPANY_SLUG}}/coaching-report.md`
- `clients/ai-huevos/deals/{{COMPANY_SLUG}}/discovery-report.html` (optional but recommended)

Si business-context.md no existe, informar al usuario que debe ejecutar `/kai-discovery` primero.

## Instrucciones

### Paso 0: Cargar Contexto

Leer los siguientes archivos en paralelo:

1. `clients/ai-huevos/deals/{{COMPANY_SLUG}}/business-context.md` — datos del deal
2. `clients/ai-huevos/deals/{{COMPANY_SLUG}}/coaching-report.md` — insights de coaching
3. `clients/ai-huevos/pricing/pricing-grid.md` — pricing source of truth
4. `clients/ai-huevos/brand-config/brand-reference.md` — brand rules
5. `clients/ai-huevos/sales-engine/templates/follow-up-sequence.md` — email sequence template
6. `clients/ai-huevos/sales-engine/templates/persona-update.md` — persona template
7. `clients/ai-huevos/voc/prospect-language-bank.md` — existing VoC data

### Paso 1: Populate Follow-Up Email Sequence

Usar `sales-engine/templates/follow-up-sequence.md` como guia.

Para cada email (3 total):

1. **Email 1 (Day 0)**: Summary + Next Steps
   - Reemplazar todos los `{{PLACEHOLDER}}` con datos de business-context.md
   - `{{CUSTOM_OPENING}}`: Referencia algo especifico de la call (no generico)
   - `{{PAIN_N_VERBATIM}}`: Citas EXACTAS de business-context section 4
   - `{{INSIGHT_REFRAME}}`: El insight mas potente del coaching-report (seccion TOP 3 WINS)
   - `{{NEXT_STEPS_LIST}}`: Action items de business-context section 8

2. **Email 2 (Day 3)**: Case Study + Insight
   - Identificar el dolor del prospect mas similar al caso Finkargo
   - Generar narrativa Finkargo adaptada al contexto
   - `{{SINGLE_INSIGHT}}`: 1 insight actionable que el prospect puede usar sin KAI

3. **Email 3 (Day 7)**: Soft Close with Sprint
   - Determinar tier recomendado de business-context section 7
   - Si FRONTEND: Sprint framing ($500-$1,500)
   - Si MIDDLE: Build framing ($5K-$15K) con Sprint como alternativa baja
   - Pricing desde pricing-grid.md segun region del prospect

Guardar en: `clients/ai-huevos/deals/{{COMPANY_SLUG}}/follow-up-emails.md`

Formato del archivo:

```markdown
---
template: follow-up-sequence
deal: {{COMPANY_SLUG}}
date: {{TODAY}}
emails: 3
status: DRAFT
---

# Follow-Up Emails — {{COMPANY_NAME}}

## Email 1 — Day 0: Summary + Next Steps
**To:** {{EMAIL}}
**Subject:** {{SUBJECT}}
**Send by:** {{DATE_DAY_0}} (within 2 hours of call)

[email body]

---

## Email 2 — Day 3: Case Study + Insight
**To:** {{EMAIL}}
**Subject:** {{SUBJECT}}
**Send by:** {{DATE_DAY_3}}

[email body]

---

## Email 3 — Day 7: Soft Close
**To:** {{EMAIL}}
**Subject:** {{SUBJECT}}
**Send by:** {{DATE_DAY_7}}

[email body]
```

### Paso 2: Create Gmail Drafts (if MCP available)

Si Gmail MCP esta disponible:

1. Para cada email, crear un DRAFT (nunca enviar automaticamente)
2. Informar al usuario: "3 drafts creados en Gmail — revisar antes de enviar"
3. Si Gmail MCP no esta disponible, informar: "Emails guardados en follow-up-emails.md — copiar manualmente a Gmail"

**Regla critica**: NUNCA enviar emails automaticamente. Solo crear drafts.

### Paso 3: Populate Persona Update

Usar `sales-engine/templates/persona-update.md` como guia.

Extraer de business-context.md:
- Section 9 (Prospect Vocabulary) → New Vocabulary
- Section 6 (Buying Signals, negativas) → Objections
- Section 6 (Buying Signals, positivas) → Buying Criteria
- Section 5 (Systems Landscape) → Competitive Intel (alternatives in use)
- Section 1 (Company Profile) → Industry Insights

Guardar en: `clients/ai-huevos/deals/{{COMPANY_SLUG}}/persona-update.md`

### Paso 4: Update Prospect Language Bank

Leer `clients/ai-huevos/voc/prospect-language-bank.md` y agregar las frases nuevas del prospect.

Proceso:
1. Leer las frases de persona-update.md seccion 1
2. Para cada frase, identificar el cluster tematico existente mas relevante
3. Si no hay cluster relevante, crear uno nuevo
4. Append al final de la seccion del cluster correspondiente:

```markdown
### Batch: {{CALL_DATE}} — {{COMPANY_NAME}} ({{PROSPECT_NAME}})

- "{{FRASE_1}}" — {{PROSPECT_NAME}}, {{TITLE}}, {{COMPANY}}
- "{{FRASE_2}}" — {{PROSPECT_NAME}}, {{TITLE}}, {{COMPANY}}
```

5. No duplicar frases que ya existen en el language bank

### Paso 5: Update GCO (if exists)

Si existe un GCO (GrowthOS Context Object) en `~/.growthos/contexts/`:
- Buscar GCO del cliente: `~/.growthos/contexts/{{COMPANY_SLUG}}.yaml`
- Si existe, actualizar con nuevos datos del deal
- Si no existe, no crear uno (GCO se crea via /os)

### Paso 6: Summary Output

Presentar al usuario:

```
FOLLOW-UP COMPLETE — {{COMPANY_NAME}}
============================================

EMAILS:
  Email 1 (Day 0): "{{SUBJECT_1}}" — {{DRAFT_STATUS_1}}
  Email 2 (Day 3): "{{SUBJECT_2}}" — {{DRAFT_STATUS_2}}
  Email 3 (Day 7): "{{SUBJECT_3}}" — {{DRAFT_STATUS_3}}

PERSONA UPDATE:
  New vocabulary: {{NUM_NEW_PHRASES}} phrases added to language bank
  Objections: {{NUM_OBJECTIONS}} captured
  Buying criteria: {{NUM_CRITERIA}} identified
  Competitive intel: {{NUM_COMPETITORS}} alternatives noted

FILES GENERATED:
  - deals/{{SLUG}}/follow-up-emails.md
  - deals/{{SLUG}}/persona-update.md
  - voc/prospect-language-bank.md (updated)

DEAL STATUS: Follow-up sequence ready
NEXT: Monitor responses. If no reply by Day 14, send manual check-in.

FULL PIPELINE COMPLETE:
  /kai-prospect   -> Pre-call research
  /kai-discovery   -> Transcript extraction + coaching
  /kai-desk        -> 4 deliverables generated
  /kai-follow      -> Email sequence + VoC captured
```

### Quality Gates

1. All 3 emails have 0 unresolved `{{PLACEHOLDER}}` tags
2. All prospect quotes are verbatim
3. No anti-words in any email (check brand-reference.md)
4. At least 1 Finkargo reference in the sequence
5. Pricing matches pricing-grid.md
6. Each email < 300 words
7. Gmail drafts created, NEVER sent
8. Language bank updated without duplicates
