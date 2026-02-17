---
description: Review de salud del pipeline. Evalua deals con PULSO scoring, identifica riesgos, y genera forecast con acciones priorizadas.
argument-hint: [datos del pipeline o contexto]
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Pipeline Health Review

El usuario quiere revisar la salud de su pipeline. Contexto adicional: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo**. El review se construye con datos del usuario.

### Fase 1: Recopilar datos del pipeline

Preguntar al usuario:

1. "Cuantos deals activos tienes en tu pipeline?"
2. "Cual es tu target de revenue para este periodo?"
3. "Puedes darme un listado de tus deals activos? Para cada uno necesito: nombre de empresa, valor estimado, etapa actual, y desde cuando esta en esa etapa."

Si el usuario tiene muchos deals, enfocarse en:
- Los top 5-10 por valor
- Todos los que estan en etapas avanzadas (Proposal, Negotiation, Commit)
- Los que llevan mas tiempo estancados

**Esperar las respuestas.**

### Fase 2: Pipeline Snapshot

Con los datos, generar el snapshot:

```
PIPELINE SNAPSHOT
═══════════════════════════════
Pipeline Total:    $___
Target:            $___
Coverage:          ___x
# Deals activos:   ___

Pipeline por Etapa:
├── Discovery:     $___  (__ deals)
├── Evaluation:    $___  (__ deals)
├── Proposal:      $___  (__ deals)
├── Negotiation:   $___  (__ deals)
└── Commit:        $___  (__ deals)
```

Evaluar coverage:
- **>4x**: Pipeline saludable. Enfocarse en conversion.
- **3-4x**: Aceptable pero fragil. Incrementar sourcing.
- **<3x**: Pipeline insuficiente. Modo alerta.

### Fase 3: PULSO Assessment por deal

Para cada deal en etapa avanzada, hacer un mini-diagnostico PULSO:

"Para [empresa], cubramos rapidamente las 5 dimensiones PULSO:
1. Cual es el Panorama? (hechos, contexto)
2. Cual es la Urgencia que los trajo? (numeros + frustracion)
3. Cual es el Logro que conseguirian contigo? (ROI + personal)
4. Hay una Situación Crítica con fecha? (que pasa si no actuan)
5. Como es la Organización para decidir? (quien firma, criterios, timeline)"

**Esperar las respuestas para cada deal. No asumir.**

### Fase 4: Health Scoring

Leer `skills/pipeline-management/frameworks/health-indicators.md` para los criterios detallados.

Para cada deal, generar:

```
DEAL: [Empresa]
Valor: $___  |  Etapa: ___  |  Dias en etapa: ___

PULSO Score:
  S: _/5  P: _/5  I: _/5  CE: _/5  D: _/5  = __/30

Health: [VERDE/AMARILLO/ROJO]
Dimension mas debil: ___
Riesgo principal: ___
Accion recomendada: ___
```

### Fase 5: Deals en riesgo

Identificar y agrupar:

**Rojo (Critico — requiere decision inmediata)**:
- [Deal]: [Razon]. Recomendacion: [Descartar / Reclasificar / Accion de rescate]

**Amarillo (En riesgo — requiere intervencion esta semana)**:
- [Deal]: [Razon]. Recomendacion: [Accion especifica]

**Estancados (sin actividad >14 dias en etapa avanzada)**:
- [Deal]: Ultima actividad [fecha]. Recomendacion: [Reactivar / Mover a nurture]

### Fase 6: Forecast

Generar forecast en 3 niveles:

| Categoria | Deals | Valor | Criterio |
|-----------|-------|-------|----------|
| **Commit** | [lista] | $___ | PULSO >= 25, proximo paso es firma, fecha confirmada |
| **Best Case** | [lista] | $___ | Commit + deals verdes en Negotiation |
| **Pipeline** | [lista] | $___ | Todo pipeline activo ponderado por probabilidad |

### Fase 7: Acciones priorizadas

Generar las top 5 acciones ordenadas por impacto:

1. **[Accion + Deal]**: Impacto estimado $___ — Hacer antes de [fecha]
2. **[Accion + Deal]**: ...
3. ...

**Clasificar acciones por tipo**:
- Avanzar deal (proximo paso claro)
- Rescatar deal (intervenir en deal en riesgo)
- Limpiar pipeline (descartar deals fantasma)
- Generar pipeline (aumentar top of funnel si coverage < 3x)

### Output Final

1. Pipeline snapshot con metricas
2. PULSO assessment deal por deal
3. Health map (verde/amarillo/rojo)
4. Deals en riesgo con recomendaciones
5. Forecast (commit / best case / pipeline)
6. Top 5 acciones priorizadas
