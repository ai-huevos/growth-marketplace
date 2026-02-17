---
description: Workshop interactivo para diseñar un quiz funnel que segmenta tu mercado en buckets accionables usando la Metodología SONDA.
argument-hint: [industria, producto, o mercado target]
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Workshop de Quiz Funnel

El usuario quiere diseñar un quiz funnel para segmentar su mercado: $ARGUMENTS

## Instrucciones

Este es un workshop **interactivo**. No generes todo de una vez — guía al usuario paso a paso, haciéndole preguntas y construyendo el quiz juntos. Lee los frameworks del skill quiz-funnel cuando necesites profundidad en un tema.

### Fase 1: Contexto (3-4 preguntas al usuario)

Antes de empezar, necesitas entender el negocio y el objetivo:

1. "¿Qué vendes y a quién?" (producto/servicio, ICP actual, tamaño de mercado)
2. "¿Cuál es el dolor principal que resuelves para tus clientes?"
3. "¿Qué quieres lograr con este quiz?" (generar leads, segmentar mercado, pre-calificar prospects, validar hipótesis)
4. "¿Cuál es tu presupuesto para validar este quiz?" ($0-100, $100-300, $300-500, $500+)

**Espera las respuestas antes de continuar.**

### Fase 2: Hipótesis de buckets (proponer y validar)

Basándote en las respuestas de Fase 1, propón 3-5 buckets:

Presenta una tabla con tus sugerencias:

| # | Bucket propuesto | Descripción | % estimado del mercado |
|---|-----------------|-------------|------------------------|
| 1 | [nombre en lenguaje del mercado] | [descripción] | [X]% |
| 2 | [nombre en lenguaje del mercado] | [descripción] | [X]% |
| 3 | [nombre en lenguaje del mercado] | [descripción] | [X]% |

"¿Estos buckets resuenan? ¿Reconoces estos tipos de clientes? ¿Quieres ajustar, fusionar, o agregar alguno?"

Para la metodología de identificación de buckets, leer `skills/quiz-funnel/frameworks/bucket-identification.md`.

**Espera las respuestas. Ajusta los buckets antes de continuar.**

### Fase 3: PREGUNTA RAÍZ (Pregunta Más Importante)

Diseñar la PREGUNTA RAÍZ junto con el usuario:

5. "Si pudieras hacerle UNA pregunta a todo tu mercado para entender qué necesitan, ¿cuál sería?"

Si el usuario no sabe, proponer 2-3 opciones basándose en el dolor identificado:

"Aquí van algunas opciones de PREGUNTA RAÍZ para tu caso:
- A) '¿Cuál es tu mayor desafío con [área]?'
- B) '¿Qué es lo que más te frustra de [proceso actual]?'
- C) 'Si pudieras resolver UN problema en [área], ¿cuál sería?'

¿Cuál resuena más? ¿O tienes una mejor?"

Para la metodología de PREGUNTA RAÍZ, leer `skills/quiz-funnel/frameworks/sonda-methodology.md`.

**Espera la respuesta. La PREGUNTA RAÍZ debe quedar definida antes de continuar.**

### Fase 4: Diseño del quiz (6 preguntas + hook + outcomes)

Diseñar las 6 preguntas del quiz siguiendo esta estructura:

| # | Tipo | Propósito |
|---|------|-----------|
| 1 | Grease-the-wheels | Calentar, primer micro-compromiso |
| 2 | Grease-the-wheels | Contexto firmográfico |
| 3 | Segmentación | Asignar bucket (la pregunta clave) |
| 4 | PREGUNTA RAÍZ | Descubrir dolor profundo (campo abierto) |
| 5 | Blind-spot | Revelar gap, generar urgencia |
| 6 | Urgencia/Timing | Proxy de Critical Event |

Para cada pregunta, presentar:
- La pregunta exacta
- Las opciones de respuesta (o indicar que es campo abierto)
- Por qué esta pregunta

Luego diseñar:
- **Hook page**: Headline + subheadline + CTA
- **Outcome pages**: Una por bucket con headline, diagnóstico, insight, y CTA

Para la biblioteca de preguntas, leer `skills/quiz-funnel/patterns/quiz-question-library.md`.
Para las mecánicas de funnel, leer `skills/quiz-funnel/patterns/funnel-mechanics.md`.

"¿Este quiz te convence? ¿Quieres cambiar alguna pregunta o ajustar el copy?"

**Espera las respuestas. Ajusta antes de continuar.**

### Fase 5: Deep Dive Survey (opcional)

Si los buckets aún no están validados con datos:

"Antes de construir el quiz, recomiendo validar tus buckets con un Deep Dive Survey a tu base existente. ¿Tienes acceso a una lista de email, clientes, o comunidad que puedas encuestar?"

Si sí: generar el survey usando el template en `skills/quiz-funnel/templates/deep-dive-survey-template.md`.

Si no: "Está bien — podemos validar directamente con el quiz en Fase 6. El riesgo es menor precisión en los buckets."

### Fase 6: Plan de Stress Test

Generar el plan de validación con timeline y presupuesto:

| Fase | Actividad | Inversión | Timeline |
|------|-----------|-----------|----------|
| 1. Desk Research | [personalizado] | $0 | [X] días |
| 2. Deep Dive Survey | [personalizado] | $[X] | [X] días |
| 3. Build & Soft Launch | [personalizado] | $[X] | [X] días |
| 4. Paid Validation | [personalizado] | $[X] | [X] días |

Para el plan detallado, leer `skills/quiz-funnel/frameworks/lean-stress-test.md`.

"¿Este timeline y presupuesto funcionan para ti? ¿Necesitas ajustar algo?"

### Fase 7: Métricas de éxito

Definir las métricas de éxito del quiz:

| Métrica | Target mínimo | Target ideal |
|---------|--------------|-------------|
| Quiz completion rate | >40% | >55% |
| Email capture rate | >30% | >45% |
| Bucket distribution | Ningún bucket >50% | 20-35% cada uno |
| Cost per lead | <$5 | <$3 |
| CTA click rate | >15% | >25% |

"¿Estos targets son realistas para tu mercado? ¿Quieres ajustar alguno?"

### Fase 8: Output final

Generar el quiz blueprint completo usando el template en `skills/quiz-funnel/templates/quiz-blueprint-worksheet.md`.

El documento final debe incluir:
1. Contexto del negocio y objetivo
2. PREGUNTA RAÍZ seleccionada con justificación
3. Definición de 3-5 buckets con scoring
4. Quiz completo (hook + 6 preguntas + email gate + outcome pages)
5. Plan de stress test con timeline y presupuesto
6. Stack tecnológico recomendado
7. Métricas de éxito
8. Integración PULSO por bucket
9. Próximos pasos

Para el scorecard de buckets, usar el modelo en `skills/quiz-funnel/templates/bucket-scorecard.md`.

### Tono y estilo

- Sé conversacional — esto es un workshop, no un examen
- Sintetiza las respuestas del usuario antes de pasar al siguiente paso
- Ofrece ejemplos cuando el usuario dude (referenciar `skills/quiz-funnel/examples/b2b-saas-quiz-example.md`)
- Si el usuario no tiene datos, ayúdalo a estimar basándose en su experiencia
- Usa lenguaje del mercado, no jerga de marketing
- Al final, resume todo en un documento limpio y accionable
