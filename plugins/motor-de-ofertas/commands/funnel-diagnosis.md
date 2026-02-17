---
description: Assessment diagnóstico para evaluar la salud de un funnel existente, identificar cuellos de botella, y prescribir acciones prioritarias de optimización.
argument-hint: [URL del funnel, industria, o descripción del negocio]
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Diagnóstico de Funnel

El usuario quiere diagnosticar y optimizar su funnel para: $ARGUMENTS

## Instrucciones

Este es un assessment **diagnóstico**. No prescribas soluciones antes de entender los síntomas — evalúa primero, diagnostica después, y prescribe al final.

### Fase 1: Contexto del Funnel (3 preguntas al usuario)

Antes de diagnosticar, necesitas entender el funnel actual:

1. "Describe tu funnel actual: ¿qué pasos recorre un visitante desde que llega hasta que compra?"
2. "¿Cuánto tráfico recibes al mes y de qué fuentes? (paid, organic, referral, email)"
3. "¿Cuáles son tus métricas actuales?" (opt-in rate, conversion rate, AOV, LTV, CAC)

**Espera las respuestas antes de continuar.**

### Fase 2: Diagnóstico por Nivel

Evaluar cada nivel del funnel con las métricas proporcionadas vs benchmarks:

**Tráfico**

| Métrica | Valor Actual | Benchmark | Status |
|---------|-------------|-----------|--------|
| Volumen mensual | [dato] | [benchmark industria] | VERDE / AMARILLO / ROJO |
| Costo por click | [dato] | [benchmark] | VERDE / AMARILLO / ROJO |
| Distribución por fuente | [dato] | 60% paid / 30% organic / 10% referral | VERDE / AMARILLO / ROJO |
| Calidad (bounce rate) | [dato] | <40% | VERDE / AMARILLO / ROJO |

**Conversión**

| Métrica | Valor Actual | Benchmark | Status |
|---------|-------------|-----------|--------|
| Opt-in rate | [dato] | 20-35% | VERDE / AMARILLO / ROJO |
| Frontend conversion | [dato] | 1-3% | VERDE / AMARILLO / ROJO |
| Email open rate | [dato] | 20-30% | VERDE / AMARILLO / ROJO |
| Email click rate | [dato] | 2-5% | VERDE / AMARILLO / ROJO |

**Monetización**

| Métrica | Valor Actual | Benchmark | Status |
|---------|-------------|-----------|--------|
| AOV (average order value) | [dato] | [benchmark industria] | VERDE / AMARILLO / ROJO |
| LTV (12 meses) | [dato] | [benchmark] | VERDE / AMARILLO / ROJO |
| CAC | [dato] | LTV/3 | VERDE / AMARILLO / ROJO |
| LTV:CAC ratio | [dato] | >3:1 | VERDE / AMARILLO / ROJO |

Si el usuario no tiene todas las métricas, indicar cuáles son críticas de obtener y por qué.

### Fase 3: Identificación de Cuello de Botella

Basado en los datos del Fase 2, identificar el cuello de botella principal:

"Basado en tus números, el cuello de botella principal está en **[nivel]**. Esto significa que..."

Explicar:
- Qué está pasando (el síntoma)
- Por qué está pasando (la causa probable)
- Cuál es el impacto en revenue (cuantificado si es posible)
- Por qué es la prioridad sobre los otros niveles

### Fase 4: Preguntas de Profundización (2-3 preguntas al usuario)

Dependiendo del cuello de botella identificado, hacer preguntas específicas:

**Si el cuello de botella es tráfico:**
- "¿Has probado otros canales además de [canal actual]? ¿Cuál es tu budget mensual de ads?"
- "¿Tienes un lead magnet o el tráfico va directo a una página de venta?"
- "¿Cómo segmentas tu tráfico? ¿Diferencias mensajes por temperatura (frío/tibio/caliente)?"

**Si el cuello de botella es conversión:**
- "¿Cuándo fue la última vez que testeaste un cambio en tu landing page o squeeze page?"
- "¿Tienes secuencia de email automatizada? ¿Cuántos emails y qué tipo?"
- "¿Tu oferta frontend está alineada con el dolor que promete resolver tu lead magnet?"

**Si el cuello de botella es monetización:**
- "¿Tienes ofertas en múltiples niveles de precio o solo una?"
- "¿Usas order bumps, upsells, o downsells en tu proceso de compra?"
- "¿Cuál es tu estrategia de retención/recompra? ¿Hay un backend offer?"

**Espera las respuestas antes de continuar.**

### Fase 5: Prescripción de Acciones

Generar 3-5 acciones priorizadas por impacto y esfuerzo:

| Prioridad | Acción | Impacto Esperado | Esfuerzo | Timeline |
|-----------|--------|-----------------|----------|----------|
| P1 | [acción más impactante] | [métrica + % mejora] | Bajo/Medio/Alto | [días/semanas] |
| P2 | [segunda acción] | [métrica + % mejora] | Bajo/Medio/Alto | [días/semanas] |
| P3 | [tercera acción] | [métrica + % mejora] | Bajo/Medio/Alto | [días/semanas] |
| P4 | [cuarta acción] | [métrica + % mejora] | Bajo/Medio/Alto | [días/semanas] |
| P5 | [quinta acción] | [métrica + % mejora] | Bajo/Medio/Alto | [días/semanas] |

Para cada acción, explicar:
- Qué hacer específicamente
- Por qué funcionará (evidencia o lógica)
- Cómo medir el resultado
- Primer paso concreto para empezar

### Fase 6: Output Final

Generar reporte de auditoría usando el template en `skills/funnel-optimization/templates/funnel-audit-report.md`.

El documento debe incluir:
1. **Resumen ejecutivo** — Score de salud del funnel (0-100) con justificación
2. **Métricas vs benchmarks** — Tabla semáforo completa de los 3 niveles
3. **Cuello de botella #1** — Análisis detallado con causa raíz
4. **Plan de acción priorizado** — 3-5 acciones con timeline y métricas objetivo
5. **Siguiente test A/B recomendado** — Hipótesis estructurada: "Si cambiamos [X], esperamos [Y] porque [Z]"

### Tono y estilo

- Diagnóstico objetivo — como un doctor evaluando síntomas
- Usa datos, no opiniones
- Sé directo sobre los problemas pero constructivo sobre las soluciones
- Si faltan datos, di cuáles son necesarios y por qué antes de seguir
- No asumas métricas — pregunta o indica que sin ese dato el diagnóstico es parcial
