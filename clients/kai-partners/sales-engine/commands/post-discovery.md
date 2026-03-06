---
description: Process a discovery call transcript. Extracts structured data (PULSO, pain points, stakeholders, systems, buying signals) and generates business context + coaching report. Accepts Fireflies transcript ID, Fireflies URL, or pasted transcript.
argument-hint: <fireflies-transcript-id or URL or "paste">
allowed-tools: [Read, Write, Glob, Grep]
---

# KAI Post-Discovery — Transcript Processing

El usuario quiere procesar un transcript de discovery call: $ARGUMENTS

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
`clients/kai-partners/sales-engine/frameworks/transcript-extraction.md`

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

Usar el template en `clients/kai-partners/sales-engine/templates/business-context.md` y reemplazar todos los `{{PLACEHOLDER}}` con datos extraidos del transcript.

Guardar en: `clients/kai-partners/deals/<company-slug>/business-context.md`

**Reglas de poblacion:**
- Si un dato no esta en el transcript, poner "No mencionado" (no inventar)
- Las citas textuales deben ser EXACTAS del transcript
- El PULSO scoring debe ser conservador (no inflar scores)
- El opportunity sizing debe referenciar `clients/kai-partners/pricing/pricing-grid.md`

### Paso 3: Auto-trigger Coaching

Despues de la extraccion, ejecutar automaticamente el analisis de coaching:
`clients/kai-partners/sales-engine/commands/sales-coach.md`

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
- deals/<slug>/business-context.md
- deals/<slug>/coaching-report.md
```

### Paso 5: VoC Update

Agregar las entradas de vocabulario del prospect al language bank:
`clients/kai-partners/voc/prospect-language-bank.md`
