# IMPULSO — Indice de Promotores

> **[DESIGN D8, nombre pendiente de registro]**: "IMPULSO" (Indice de Promotores) es un nombre propuesto para este framework. Debe pasar por `os/naming/framework-registry.md` antes de shippear a produccion — ver regla H4 en `_revenue-os/03-architecture.md`. Mientras tanto, este archivo documenta la capacidad; el nombre puede cambiar sin que cambie la logica.

## Prerequisito: Gate NPS≥9

IMPULSO **solo se calcula** para clientes que ya pasaron el gate binario de `SKILL.md`: NPS 9 o 10. Un cliente con NPS<9 nunca recibe un score IMPULSO — es "NO ELEGIBLE" y punto. [research: zonkafeedback]

## Estructura del Score (0-100)

A diferencia del ICP Scoring Model (que decide SI perseguir una cuenta), IMPULSO decide **CUANDO** pedir la referencia a un cliente que ya calificó. Reusa el patron de scoring ponderado 0-100 → tiers de `growth-foundations/icp-analysis/frameworks/scoring-model.md`, aplicado a timing en vez de fit.

### Componente 1: Frescura del Momento (0-40 puntos, peso 40%) [DESIGN]

| Señal | Puntos |
|---|---|
| Milestone/hito entregado en los ultimos 14 dias | 40 |
| Milestone entregado hace 15-45 dias | 25 |
| Renovacion firmada en los ultimos 30 dias | 35 |
| NPS≥9 capturado hace mas de 45 dias, sin otro evento reciente | 10 |
| Sin evento reciente identificable | 0 |

### Componente 2: Profundidad de Relacion (0-30 puntos, peso 30%) [DESIGN]

| Señal | Puntos |
|---|---|
| Cliente backend/multi-engagement (ESCALA tier 3-4) | 30 |
| Cliente con expansion previa (upsell exitoso) | 20 |
| Cliente de un solo engagement, sin expansion aun | 10 |
| Cliente muy reciente (<90 dias), sin historial de renovacion | 0 |

### Componente 3: Señal Explicita de Disposicion (0-30 puntos, peso 30%) [DESIGN]

| Señal | Puntos |
|---|---|
| El cliente menciono espontaneamente que recomendaria / ya referio informalmente | 30 |
| Comentario cualitativo positivo especifico en la encuesta NPS (no solo el numero) | 20 |
| NPS 9-10 sin comentario cualitativo | 10 |
| Sin dato cualitativo disponible | 0 |

```
IMPULSO = Frescura del Momento + Profundidad de Relacion + Señal Explicita
        = (0-40) + (0-30) + (0-30)
        = 0-100
```

**Nota de honestidad epistemica**: los pesos y umbrales exactos de estos 3 componentes son `[DESIGN]` — ningun research fetcheado especifica una formula de scoring para timing de advocacy B2B. Lo que SI esta evidenciado (research-backed) es la lista de que cuenta como "momento alto" (milestone, NPS reciente, renovacion) — ver tabla de Momentos de Ask en `SKILL.md`. La formula combina esas señales en un numero ordenable; validar y recalibrar pesos con datos reales de dog-fooding, igual que el health-monitor de RETENTION (D2).

## Tiers y Accion

| IMPULSO | Tier | Accion |
|---|---|---|
| 80-100 | **Listo — ask inmediato** | Pasar a `referral-ladder` para definir peldano e incentivo; draft de ask en Red/HITL |
| 60-79 | **Preparar — proximo milestone** | Monitorear, no pedir aun; reevaluar en el siguiente hito o ciclo de NPS |
| 0-59 | **Monitorear** | Cliente elegible (NPS≥9) pero sin momento claro; no forzar un ask, seguir nutriendo la relacion |

## Ejemplo

**Cliente: Forte Global** (NPS 9, milestone "Sprint de discovery" entregado hace 5 dias, sin expansion previa, comento "esto cambio como vemos el pipeline" en la encuesta):

| Componente | Puntos | Nota |
|---|---|---|
| Frescura del Momento | 40/40 | Milestone entregado hace 5 dias |
| Profundidad de Relacion | 10/30 | Un solo engagement, sin expansion aun |
| Señal Explicita | 20/30 | Comentario cualitativo positivo, sin mencion espontanea de referir |
| **Total** | **70/100** | **Tier "Preparar"** — buen momento se acerca pero no es el pico maximo; recomendar esperar a la primera renovacion o expansion antes del ask de mayor peso, o hacer un ask de bajo compromiso (feature en case study) ahora |
