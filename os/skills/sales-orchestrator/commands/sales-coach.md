---
description: Analyze a discovery call transcript and generate a coaching report with scoring, wins, and specific improvement recommendations. Uses the conversation quality scorecard framework.
argument-hint: <fireflies-transcript-id or "use current deal context">
allowed-tools: [Read, Write, Glob, Grep]
---

# KAI Sales Coach — Conversation Quality Analysis

El usuario quiere un analisis de coaching de una discovery call: $ARGUMENTS

## Instrucciones

### Paso 1: Obtener el Transcript

Si no se tiene el transcript en contexto:
1. Buscar en `clients/kai-partners/deals/<company-slug>/business-context.md` para contexto
2. Obtener el transcript via Fireflies MCP o pedir que lo peguen

### Paso 2: Analisis por Dimension

Leer el scorecard framework:
`clients/kai-partners/sales-engine/frameworks/conversation-quality-scorecard.md`

Evaluar cada dimension con evidencia especifica del transcript:

**2.1 AVE Execution (0-10)**
- Buscar: agradecimiento, verificacion de tiempo, expectativas, pregunta post-AVE
- Citar el momento exacto de la apertura

**2.2 PULSO Coverage (0-25)**
- Para cada dimension P/U/L/S/O: citar las preguntas hechas y las respuestas obtenidas
- Identificar dimensiones no exploradas con recomendaciones de preguntas especificas

**2.3 Talk Ratio (0-10)**
- Estimar porcentaje por speaker basado en volumen de texto del transcript
- Identificar los segmentos mas largos de monologos (KAI vs. prospect)

**2.4 Question Quality (0-10)**
- Listar las 5 mejores preguntas hechas y por que fueron efectivas
- Listar las 3 oportunidades perdidas (preguntas que debieron hacerse)
- Evaluar layering (profundizacion progresiva)

**2.5 Storytelling (0-10)**
- Identificar historias contadas (o ausencia de ellas)
- Evaluar relevancia, duracion y si el prospect se vio reflejado

**2.6 Summarization (0-10)**
- Buscar momentos de resumen o parafraseo
- Evaluar si el prospect confirmo/corrigio/agrego

**2.7 Next Steps (0-10)**
- Identificar como termino la call
- Evaluar: fecha, agenda, responsables, stakeholders

### Paso 3: Detectar Anti-Patterns

Buscar en el transcript instancias de:
- Feature dumping (-5)
- Premature solutioning (-5)
- Price dropping (-3)
- Competitor bashing (-3)
- Interrupting (-2 c/u, max -6)
- Jargon bombing (-2)
- Anti-word usage (-1 c/u, max -5)

Citar la evidencia textual de cada anti-pattern detectado.

### Paso 4: Generar Coaching Report

Seguir el output format del scorecard framework. Incluir:

1. **Score total con desglose por dimension**
2. **Top 3 Wins** — que hizo bien con citas del transcript
3. **Top 3 Improvements** — que mejorar con:
   - Que paso (cita del transcript)
   - Que debio pasar (alternativa concreta)
   - Script sugerido (ejemplo de como decirlo mejor)
4. **Recomendaciones especificas** para:
   - La proxima call con ESTE prospect
   - Calls futuras en general

### Paso 5: Guardar Report

Guardar en: `clients/kai-partners/deals/<company-slug>/coaching-report.md`

### Paso 6: Coaching Conversation (interactivo)

Despues de presentar el report, preguntar al usuario:

1. "Hay alguna dimension donde quieras profundizar?"
2. "Quieres que hagamos role-play de la proxima call con [prospect]?"
3. "Quieres que genere las preguntas especificas que faltaron para la proxima reunion?"

El coaching es una conversacion, no un reporte unidireccional.
