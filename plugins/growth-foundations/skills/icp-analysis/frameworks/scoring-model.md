# ICP Scoring Model

## Estructura del scoring

El ICP Score es un número de 0-100 que califica qué tan bien una cuenta encaja con el perfil de cliente ideal. Se compone de 5 categorías con pesos ponderados.

## Categoría 1: Fit Firmográfico (0-30 puntos, peso 30%)

| Criterio | 0 puntos | 5 puntos | 10 puntos |
|----------|----------|----------|-----------|
| Industria | Fuera de target | Adyacente | Core target |
| Revenue | <$1M o >$500M | $1M-$10M o $200M-$500M | $10M-$200M (sweet spot) |
| Empleados | <10 o >5000 | 10-50 o 1000-5000 | 50-1000 |

**Ajustar los rangos según la empresa del usuario.** Los rangos arriba son ejemplo para mid-market B2B SaaS.

### Preguntas para scorear
- "¿En qué industria están?" → Match con industrias target
- "¿Cuántos empleados tienen?" → Match con rango ideal
- "¿Cuál es su revenue aproximado?" → Match con rango ideal

## Categoría 2: Pain Match (0-25 puntos, peso 25%)

| Criterio | 0 puntos | 8 puntos | 12 puntos | 25 puntos |
|----------|----------|----------|-----------|-----------|
| Pain reconocido | No reconocen pain | Reconocen pero no priorizan | Pain priorizado, explorando opciones | Pain urgente, buscando solución activamente |

### Preguntas para scorear
- "¿Cuál es su mayor desafío en [área]?"
- "¿Cuánto les cuesta este problema?" (si pueden cuantificar = mayor score)
- "¿Han intentado resolverlo antes?" (intentos previos = más motivación)

## Categoría 3: Impact Potential (0-20 puntos, peso 20%)

| Criterio | 0 puntos | 10 puntos | 20 puntos |
|----------|----------|-----------|-----------|
| ROI estimado | <2x | 2x-5x | >5x |
| Expansión | Cuenta small, sin potencial | Potencial moderado | Multi-department, enterprise-wide |

### Cómo calcular
- **Impact racional**: ¿Cuánto revenue/ahorro genera la solución?
- **Impact emocional**: ¿El buyer se beneficia personalmente? (promoción, menos estrés, reconocimiento)
- **Expansión**: ¿Cuántos departamentos/equipos podrían usar la solución?

## Categoría 4: Decision Readiness (0-15 puntos, peso 15%)

| Criterio | 0 puntos | 5 puntos | 10 puntos | 15 puntos |
|----------|----------|----------|-----------|-----------|
| Budget | Sin presupuesto | Presupuesto pendiente de aprobación | Presupuesto aprobado | Presupuesto asignado para este proyecto |
| Decision maker | No identificado | Identificado pero no engaged | Engaged en el proceso | Champion interno activo |

### Preguntas para scorear
- "¿Tienen presupuesto asignado para esto?"
- "¿Quién toma la decisión final?"
- "¿Han comprado soluciones similares antes? ¿Cómo fue el proceso?"

## Categoría 5: Critical Event (0-10 puntos, peso 10%)

| Criterio | 0 puntos | 5 puntos | 10 puntos |
|----------|----------|----------|-----------|
| Urgencia | Sin deadline | Compelling event (fecha sin consecuencia) | Critical event (fecha + consecuencia negativa si no se cumple) |

### Diferencia clave
- **Compelling Event**: "Nuestra renovación es en septiembre" (fecha, pero sin consecuencia real)
- **Critical Event**: "Si no implementamos antes de septiembre, perdemos el contrato con nuestro cliente más grande" (fecha + consecuencia)

## Cálculo del Score Total

```
Score = Firmográfico + Pain Match + Impact + Decision + Critical Event
      = (0-30) + (0-25) + (0-20) + (0-15) + (0-10)
      = 0-100
```

## Clasificación y acción

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 — Target Account | Perseguir activamente. Asignar AE senior. Outreach personalizado. |
| 60-79 | Tier 2 — Qualified | Calificar más. Discovery call. Evaluar si el timing es correcto. |
| 40-59 | Tier 3 — Nurture | Solo si llegan inbound. Contenido educativo. Revisitar en 6 meses. |
| 0-39 | No ICP | No invertir tiempo de ventas. Puede recibir marketing automatizado. |

## Ejemplo de scoring

**ACME Corp** (Cybersecurity SaaS targeting mid-market):

| Categoría | Score | Nota |
|-----------|-------|------|
| Firmográfico | 25/30 | SaaS, $15M ARR, 200 empleados — sweet spot |
| Pain Match | 20/25 | Reconocen problemas de ramp time, han intentado soluciones |
| Impact | 15/20 | ROI ~4x, potencial de expansión a 3 departamentos |
| Decision | 10/15 | Budget aprobado, VP Sales es champion |
| Critical Event | 8/10 | Hiring 20% más reps Q1, necesitan solución antes |
| **Total** | **78/100** | **Tier 2 — Calificar con discovery call** |
