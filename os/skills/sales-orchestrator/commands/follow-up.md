---
description: Generate follow-up email sequence, create Gmail drafts, update prospect language bank, and log persona insights. Reads business-context.md and desk-work outputs. Final phase of the sales-orchestrator pipeline.
argument-hint: <company-slug>
allowed-tools: [Read, Write, Glob, Grep]
---

# Follow-Up — Closing Loop

El usuario quiere generar follow-up para: $ARGUMENTS

## Pre-requisitos

Verificar que existen:
- `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/business-context.md` (status: POPULATED)
- `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/coaching-report.md`
- `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/discovery-report.html` (optional but recommended)

Si business-context.md no existe, informar al usuario que debe ejecutar `/post-discovery` primero.

**Modo de falla (config de cliente)**: si `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` o `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` no existen, detente y pide al operador que configure `clients/{{CLIENT_SLUG}}/` antes de continuar.

## Instrucciones

### Paso 0: Cargar Contexto

Leer los siguientes archivos en paralelo:

1. `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/business-context.md` — datos del deal
2. `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/coaching-report.md` — insights de coaching
3. `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` — pricing source of truth
4. `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` — brand rules
5. `os/skills/sales-orchestrator/templates/follow-up-sequence.md` — email sequence template
6. `os/skills/sales-orchestrator/templates/persona-update.md` — persona template
7. `clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md` — existing VoC data

### Paso 1: Populate Follow-Up Email Sequence

Usar `os/skills/sales-orchestrator/templates/follow-up-sequence.md` como guia.

Para cada email (3 total):

1. **Email 1 (Day 0)**: Summary + Next Steps
   - Reemplazar todos los `{{PLACEHOLDER}}` con datos de business-context.md
   - `{{CUSTOM_OPENING}}`: Referencia algo especifico de la call (no generico)
   - `{{PAIN_N_VERBATIM}}`: Citas EXACTAS de business-context section 4
   - `{{INSIGHT_REFRAME}}`: El insight mas potente del coaching-report (seccion TOP 3 WINS)
   - `{{NEXT_STEPS_LIST}}`: Action items de business-context section 8

2. **Email 2 (Day 3)**: Case Study + Insight
   - Identificar el dolor del prospect mas similar al caso de exito principal del cliente instalado (`brand-voice.md`)
   - Generar narrativa de caso de exito adaptada al contexto (ver `{{CASE_STUDY_COMPANY}}` en el template — default ilustrativo, reemplazar por el proof point real del cliente instalado)
   - `{{SINGLE_INSIGHT}}`: 1 insight actionable que el prospect puede usar sin el cliente instalado

3. **Email 3 (Day 7)**: Soft Close with Sprint
   - Determinar tier recomendado de business-context section 7
   - Si FRONTEND: Sprint framing (ver tier FRONTEND en pricing-grid.md)
   - Si MIDDLE: Build framing (ver tier MIDDLE en pricing-grid.md) con Sprint como alternativa baja
   - Pricing desde `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` segun region del prospect

Guardar en: `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/follow-up-emails.md`

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

Usar `os/skills/sales-orchestrator/templates/persona-update.md` como guia.

Extraer de business-context.md:
- Section 9 (Prospect Vocabulary) → New Vocabulary
- Section 6 (Buying Signals, negativas) → Objections
- Section 6 (Buying Signals, positivas) → Buying Criteria
- Section 5 (Systems Landscape) → Competitive Intel (alternatives in use)
- Section 1 (Company Profile) → Industry Insights

Guardar en: `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/persona-update.md`

### Paso 4: Update Prospect Language Bank

Leer `clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md` y agregar las frases nuevas del prospect.

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
- Buscar GCO del prospect (deal): `~/.growthos/contexts/{{COMPANY_SLUG}}.yaml` — distinto del GCO de instalacion `~/.growthos/contexts/{{CLIENT_SLUG}}.yaml`
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
  - clients/{{CLIENT_SLUG}}/deals/{{SLUG}}/follow-up-emails.md
  - clients/{{CLIENT_SLUG}}/deals/{{SLUG}}/persona-update.md
  - clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md (updated)

DEAL STATUS: Follow-up sequence ready
NEXT: Monitor responses. If no reply by Day 14, send manual check-in.

FULL PIPELINE COMPLETE:
  /prospect        -> Pre-call research
  /post-discovery  -> Transcript extraction + coaching
  /desk-work       -> 4 deliverables generated
  /follow-up       -> Email sequence + VoC captured
```

### Quality Gates

1. All 3 emails have 0 unresolved `{{PLACEHOLDER}}` tags
2. All prospect quotes are verbatim
3. No anti-words in any email (check `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`)
4. At least 1 case-study reference in the sequence (from `brand-voice.md`)
5. Pricing matches `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md`
6. Each email < 300 words
7. Gmail drafts created, NEVER sent
8. Language bank updated without duplicates

### Paso 7: Instrumentación (Revenue OS) — Resolución del Deal

**No se dispara en cada corrida** — solo cuando el operador informa que el deal se gano o se perdio (esta es la ultima etapa del pipeline, el "closing loop"). Registrar la transicion y recalcular el win rate acumulado del stage REVENUE.

**Mecanismo**: `execute_sql` (Supabase MCP) si esta disponible; si no, fallback `psql "$DATABASE_URL" -c "..."` (local, puerto 54332); si ninguno esta disponible, anexar los statements a `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/pending-metrics.sql`. `org_id` se resuelve de `organizations` para el cliente instalado.

```sql
-- 1. Registrar la resolucion (ejecutar SOLO una de las dos, segun resultado)
-- Ganado — avanza a ESCALAR:
insert into public.stage_transitions
  (org_id, from_stage, to_stage, headline_metric_key, metric_value, scale)
values (
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'CONVERTIR', 'ESCALAR', 'win_rate', 1, 'binary'
);

-- Perdido — no avanza de fase:
insert into public.stage_transitions
  (org_id, from_stage, to_stage, headline_metric_key, metric_value, scale)
values (
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'CONVERTIR', 'CONVERTIR', 'win_rate', 0, 'binary'
);

-- 2. Recalcular phase_metrics.current_value (REVENUE) desde el historial completo
update public.phase_metrics
set current_value = sub.win_rate, updated_at = timezone('utc'::text, now())
from (
  select org_id,
    count(*) filter (where metric_value = 1)::numeric / nullif(count(*), 0) as win_rate
  from public.stage_transitions
  where headline_metric_key = 'win_rate'
    and org_id = (select id from public.organizations where name = '{{CLIENT_SLUG}}')
  group by org_id
) sub
where phase_metrics.org_id = sub.org_id and phase_metrics.stage = 'REVENUE';
```

Nota: `plugins/sales-blueprint/agents/proposal-pricing-agent.md` (Fase 7) ya describe esta misma escritura al cerrarse el deal; si ambos se ejecutan para el mismo cierre, verificar que no se duplique la fila en `stage_transitions`.
