---
description: Generate or update 90-day roadmap based on current GrowthOS phase and completed skills
argument-hint: (optional — "update" to refresh existing roadmap, or leave empty for new)
allowed-tools: all
---

# Command: /roadmap

Genera o actualiza el roadmap de 90 días basado en la fase actual de GrowthOS, skills completados, y outputs generados.

## Uso

```
/roadmap
/roadmap update
```

Sin argumentos: genera roadmap nuevo basado en GCO actual.
Con "update": refresca roadmap existente con nuevos outputs.

## Flujo

1. **Carga GCO**: Lee el GrowthOS Context Object del usuario
   - Fase actual
   - Skills completados
   - Outputs generados
   - Bottleneck identificado

2. **Identifica gaps**: Compara fase actual con criterios de salida
   - ¿Qué falta para completar la fase?
   - ¿Qué skills deberían activarse?

3. **Genera roadmap**: Crea plan de 90 días estructurado
   - Mes 1: Cimientos (completar fase actual)
   - Mes 2: Ejecución (siguiente fase o profundización)
   - Mes 3: Optimización (refinamiento y escalamiento)

4. **Presenta roadmap**: Muestra roadmap con:
   - Objetivos por mes
   - Skills a activar
   - Entregables esperados
   - KPIs de éxito
   - Checkpoints (días 30, 60, 90)

## Template de Roadmap

```
## Roadmap 90 Días — [Nombre del Cliente]
Fecha: [YYYY-MM-DD]
Growth Stage: [Pre-Product | First Revenue | Growth | Scale]
Fase Actual: [DEFINIR | ATRAER | CONVERTIR | ESCALAR]
Team Size: [N personas]

### MES 1: CIMIENTOS (Días 1-30)
Objetivo: [Completar fase actual]
Skills activos: [Lista de skills]
Entregables: [Qué produce]
KPI: [Cómo se mide éxito]
Checkpoint: Día 30 — ¿Se logró [métrica]?

### MES 2: EJECUCIÓN (Días 31-60)
Objetivo: [Siguiente fase o profundización]
Skills activos: [Lista de skills]
Entregables: [Qué produce]
KPI: [Cómo se mide éxito]
Checkpoint: Día 60 — ¿Se logró [métrica]?

### MES 3: OPTIMIZACIÓN (Días 61-90)
Objetivo: [Refinamiento y escalamiento]
Skills activos: [Lista de skills]
Entregables: [Qué produce]
KPI: [Cómo se mide éxito]
Checkpoint: Día 90 — Retrospectiva completa

### DEPENDENCIAS
- [Qué necesita el usuario aportar]
- [Qué necesita el marketplace entregar]
- [Qué bloquea si no se resuelve]

### RIESGOS
- [Riesgo 1]: Mitigation → [acción]
- [Riesgo 2]: Mitigation → [acción]
```

## Reglas para Equipos Pequeños (≤3 personas)

- Máximo 1 nuevo skill por semana
- Cada mes tiene 1 plugin dominante
- Outputs deben ser copy-pasteable
- Checkpoint = conversación con PM
- Si algo no funciona en 2 semanas, pivot

## Ejemplo

```
Usuario: /roadmap

PM: "Basándome en tu GCO actual:
- Fase: ATRAER (40% completado)
- Skills completados: icp-analysis, positioning
- Outputs: ICP profile, positioning statement
- Bottleneck: Necesitas contenido y funnel

## Roadmap 90 Días — DataFlow
Fecha: 2026-02-17
Growth Stage: First Revenue
Fase Actual: ATRAER
Team Size: 2 personas

### MES 1: CIMIENTOS (Días 1-30)
Objetivo: Completar fase ATRAER — tener plan de contenido y funnel arquitecturado
Skills activos: content-strategy, escala, flujo
Entregables: Content plan (20 temas), ESCALA ladder, Funnel blueprint
KPI: Plan de contenido publicado, funnel arquitecturado
Checkpoint: Día 30 — ¿Tienes plan de contenido y funnel diseñado?

[... continúa ...]
```

## Referencias

- Master orchestrator: `os/growthOS.md`
- Fases: `os/phases/definir.md`, `os/phases/atraer.md`, `os/phases/convertir.md`, `os/phases/escalar.md`
- GCO schema: `os/intake/context-object.md`
