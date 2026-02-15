---
description: Genera 10+ headlines con scoring y variaciones A/B. Aplica formulas probadas del analisis de 38K headlines.
argument-hint: <tema, producto o audiencia>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# /headline — Generacion rapida de titulares

El usuario quiere generar headlines para: $ARGUMENTS

## Instrucciones

### Paso 1: Clarificar contexto

Si $ARGUMENTS no incluye suficiente contexto, preguntar:
- Para que es? (email subject, landing hero, ad, blog, social)
- A quien va dirigido? (audiencia, cargo, nivel)
- Que dolor resuelve o que resultado promete?
- Tono deseado? (formal, conversacional, urgente, aspiracional)

### Paso 2: Cargar formulas

Leer `skills/headline-mastery/patterns/power-headlines.md` para las 50 formulas top.
Leer `skills/headline-mastery/patterns/formulas.md` para variaciones y combinaciones.

### Paso 3: Seleccionar categorias

Basado en el contexto, seleccionar 4-5 categorias relevantes de:
1. Curiosity Gap
2. Power Promise
3. Social Proof
4. Fear/Loss
5. Contrarian
6. How-To
7. Secret/Insider
8. Warning
9. Direct Command
10. Comparison

### Paso 4: Generar 12-15 headlines

Para cada categoria seleccionada, generar 2-3 headlines:
- Aplicar la formula con datos especificos del tema
- Variar la longitud (corto: 5-8 palabras, medio: 8-12, largo: 12-18)
- Integrar numeros, timeframes y especificidad donde sea posible

### Paso 5: Aplicar potenciadores

Revisar cada headline y considerar agregar:
- Numero especifico (no redondo)
- Timeframe concreto
- Exclusion de obstaculo ("sin...")
- Dato de social proof
- Especificidad extrema

### Paso 6: Scorear cada headline

Evaluar en 5 dimensiones:

| Criterio | Peso |
|----------|------|
| Claridad | 25% |
| Especificidad | 25% |
| Emocion | 20% |
| Relevancia | 20% |
| Accionabilidad | 10% |

Score target: >7.5/10

### Paso 7: Entregar resultados

```
## Headlines para: [TEMA/CONTEXTO]
### Audiencia: [quien] | Medio: [donde] | Tono: [cual]

---

### Top 3 recomendados

| # | Headline | Score | Categoria |
|---|----------|-------|-----------|
| 1 | [headline] | X/10 | [categoria] |
| 2 | [headline] | X/10 | [categoria] |
| 3 | [headline] | X/10 | [categoria] |

### Todos los headlines generados

| # | Headline | Score | Categoria | Largo |
|---|----------|-------|-----------|-------|
| 1 | ... | ... | ... | [corto/medio/largo] |
[... 12-15 headlines total ...]

### Variaciones A/B recomendadas

Testear estas parejas:
- **Test 1**: [Headline A] vs [Headline B] — Hipotesis: [X]
- **Test 2**: [Headline C] vs [Headline D] — Hipotesis: [X]

### Recomendacion de testing
- Metrica principal: [CTR / Open Rate / Engagement]
- Volumen minimo para significancia: [X impresiones]
- Prioridad de test: [cual probar primero y por que]
```
