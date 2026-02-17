---
description: Workshop interactivo para definir y scorear el Ideal Customer Profile (ICP). Guía paso a paso con scoring model.
argument-hint: [industria, contexto, o nombre de empresa]
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Workshop de ICP

El usuario quiere construir o refinar su Ideal Customer Profile para: $ARGUMENTS

## Instrucciones

Este es un workshop **interactivo**. No generes todo de una vez — guía al usuario paso a paso, haciéndole preguntas y construyendo el ICP juntos.

### Fase 1: Contexto (2-3 preguntas al usuario)

Antes de empezar, necesitas entender el negocio:

1. "¿Qué vendes y a quién?" (producto/servicio, B2B/B2C, modelo de revenue)
2. "¿Cuántos clientes tienes actualmente? ¿Cuál es tu ACV (average contract value) aproximado?"
3. "¿Quiénes son tus 3 mejores clientes y por qué?" (los que más pagan, más retienen, más refieren)

**Espera las respuestas antes de continuar.**

### Fase 2: Diagnóstico PULSO (5 preguntas al usuario)

Usa el framework PULSO para entender al cliente ideal:

4. **Panorama**: "¿Qué tienen en común tus mejores clientes? (industria, tamaño, etapa, tecnología)"
5. **Urgencia**: "¿Cuál es el dolor principal que resuelves? ¿Cuánto les cuesta no resolverlo?"
6. **Logro**: "¿Qué resultados logran tus clientes contigo? ¿Hay un número concreto?"
7. **Situación Crítica**: "¿Qué evento los empuja a comprar? (funding, crisis, crecimiento, regulación)"
8. **Organización**: "¿Quién toma la decisión de compra? ¿Cuánto tarda el proceso típicamente?"

**Espera las respuestas. Sintetiza lo que escuchas antes de continuar.**

### Fase 3: Análisis firmográfico

Con las respuestas de Fase 1 y 2, propón criterios firmográficos:

Presenta una tabla con los criterios sugeridos y pide confirmación/ajuste:

| Criterio | Rango sugerido | Peso sugerido |
|----------|---------------|---------------|
| Industria | [basado en respuestas] | 20% |
| Revenue | $[X]-$[Y] | 20% |
| Empleados | [X]-[Y] | 15% |
| Crecimiento | [X]%+ anual | 15% |
| Tecnología | [basado en respuestas] | 10% |
| Geografía | [basado en respuestas] | 10% |
| Estructura | [basado en respuestas] | 10% |

"¿Estos rangos son correctos? ¿Quieres ajustar algo?"

### Fase 4: Anti-ICP

Preguntar: "¿Qué tipo de cliente o deal fue desastroso? ¿Hay señales tempranas de que un prospect será mal fit?"

Documentar los criterios de exclusión.

### Fase 5: Scoring y segmentación

Usar el scoring model del skill `icp-analysis` (leer `skills/icp-analysis/frameworks/scoring-model.md` si necesitas los detalles del cálculo).

Generar la clasificación:

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 — Target Account | Perseguir activamente |
| 60-79 | Tier 2 — Qualified | Discovery call para calificar |
| 40-59 | Tier 3 — Nurture | Solo inbound |
| 0-39 | No ICP | No invertir tiempo |

### Fase 6: Output final

Generar un documento de ICP completo usando el template en `skills/icp-analysis/templates/icp-worksheet.md`.

El documento debe incluir:
1. Positioning statement del ICP (1 párrafo)
2. Criterios firmográficos con pesos
3. PULSO del cliente ideal
4. Anti-ICP (criterios de exclusión)
5. Segmentos tier 1-3 con scoring
6. Persona del decision maker
7. Próximos pasos

### Tono y estilo

- Sé conversacional — esto es un workshop, no un examen
- Sintetiza las respuestas del usuario antes de pasar al siguiente paso
- Ofrece ejemplos cuando el usuario dude
- Si el usuario no tiene datos, ayúdalo a estimar basándose en su experiencia
- Al final, resume todo en un documento limpio y accionable
