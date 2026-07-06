---
description: Process a discovery call transcript. Extracts structured data (PULSO, pain points, stakeholders, systems, buying signals) and generates business context + coaching report. Accepts Fireflies transcript ID, Fireflies URL, or pasted transcript.
argument-hint: <fireflies-transcript-id or URL or "paste">
allowed-tools: [Read, Write, Glob, Grep]
---

# Post-Discovery — Transcript Processing

El usuario quiere procesar un transcript de discovery call: $ARGUMENTS

**Modo de falla (config de cliente)**: si `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` no existe, detente y pide al operador que configure `clients/{{CLIENT_SLUG}}/` antes de completar el opportunity sizing.

## Instrucciones

### Paso 0: Obtener el Transcript

Determinar la fuente del transcript:

**Si es un Fireflies transcript ID o URL:**
1. Extraer el ID del URL si es necesario (formato: `https://app.fireflies.ai/view/<title>::<ID>`)
2. Llamar `fireflies_get_transcript(transcriptId)` para obtener el transcript completo
3. Llamar `fireflies_get_summary(transcriptId)` para obtener el summary con action items
4. Combinar ambos para el analisis

**Si el usuario pega el transcript:**
1. Parsear por speaker turns
2. Identificar speakers y roles

### Paso 1: Transcript Extraction

Ejecutar el protocolo completo de extraccion:
`os/skills/sales-orchestrator/frameworks/transcript-extraction.md`

Esto produce los 10 pasos de extraccion:
1. Speaker identification
2. Company profile
3. Stakeholder mapping
4. PULSO scoring
5. Pain point extraction
6. Systems landscape
7. Buying signals
8. Action items
9. Prospect vocabulary (VoC)
10. Opportunity sizing

### Paso 2: Populate Business Context

Usar el template en `os/skills/sales-orchestrator/templates/business-context.md` y reemplazar todos los `{{PLACEHOLDER}}` con datos extraidos del transcript.

Guardar en: `clients/{{CLIENT_SLUG}}/deals/<company-slug>/business-context.md`

**Reglas de poblacion:**
- Si un dato no esta en el transcript, poner "No mencionado" (no inventar)
- Las citas textuales deben ser EXACTAS del transcript
- El PULSO scoring debe ser conservador (no inflar scores)
- El opportunity sizing debe referenciar `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md`

### Paso 3: Auto-trigger Coaching

Despues de la extraccion, ejecutar automaticamente el analisis de coaching:
`os/skills/sales-orchestrator/commands/sales-coach.md`

Pasar el transcript y el business-context generado como input.

### Paso 4: Summary Output

Presentar al usuario un resumen ejecutivo con:

```
DEAL: [Company Name]
DATE: [Call Date]
DURATION: [Minutes]
SPEAKERS: [Names + Roles]

PULSO: P[score] U[score] L[score] S[score] O[score] = [total]/25
CLASSIFICATION: [No calificado / Nurture / Oportunidad activa]

TOP 3 PAIN POINTS:
1. [dolor + cita]
2. [dolor + cita]
3. [dolor + cita]

FIT SCORE: [total]/35 — [High Priority / Qualified / Nurture]
RECOMMENDED TIER: [Bait / Frontend / Middle / Backend]
NEXT STEP: [accion concreta]

COACHING SCORE: [total]/85
TOP 3 IMPROVEMENT AREAS:
1. [area + recomendacion]
2. [area + recomendacion]
3. [area + recomendacion]

FILES GENERATED:
- clients/{{CLIENT_SLUG}}/deals/<slug>/business-context.md
- clients/{{CLIENT_SLUG}}/deals/<slug>/coaching-report.md
```

### Paso 5: VoC Update

Agregar las entradas de vocabulario del prospect al language bank:
`clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md`

### Paso 6: Instrumentación (Revenue OS)

Al guardar business-context.md (Paso 2), registrar el checkpoint PULSO dentro de CONVERTIR (from_stage = to_stage, no hay avance de fase todavia) y un score de calidad de extraccion (regla: proporcion de las 10 secciones del framework con datos reales vs. "No mencionado").

**Mecanismo**: `execute_sql` (Supabase MCP) si esta disponible; si no, fallback `psql "$DATABASE_URL" -c "..."` (local, puerto 54332); si ninguno esta disponible, anexar los INSERT a `clients/{{CLIENT_SLUG}}/deals/<company-slug>/pending-metrics.sql`. `org_id` se resuelve de `organizations` para el cliente instalado.

```sql
insert into public.stage_transitions
  (org_id, from_stage, to_stage, headline_metric_key, metric_value, scale)
values (
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'CONVERTIR', 'CONVERTIR', 'pulso_discovery', {{PULSO_SCORE_TOTAL}}, '0-25'
);

with log as (
  insert into public.ai_execution_logs (org_id, profile_id, skill_slug, model_id)
  values (
    (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
    '{{PROFILE_ID}}', 'post-discovery', '{{MODEL_ID}}'
  ) returning id
)
insert into public.execution_scores (execution_id, org_id, score_key, score_value, source)
select log.id,
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'discovery_quality', {{EXTRACTION_COMPLETENESS_SCORE}}, 'rule'
from log;
```

No bloquea el flujo: si la escritura falla, continuar y avisar en el summary output (Paso 4).
