---
name: pipeline-management
description: Use when reviewing pipeline health, scoring deals, analyzing deal risks, running pipeline reviews, or assessing forecast accuracy. Activates for "pipeline review", "deal health", "pipeline health", "deal scoring", "forecast", "pipeline analysis", "stuck deals", "deal risk", "pipeline hygiene", or "why is my pipeline stuck".
version: 1.0.0
---

# Pipeline Management

Sistema de gestion de pipeline basado en PULSO scoring, indicadores de salud y el modelo CICLO de Metodología GrowthOS. Cada deal se evalua con datos, no con esperanza.

## Cuando usar este skill

- El usuario necesita revisar la salud de su pipeline
- Quiere evaluar si un deal esta sano o en riesgo
- Necesita preparar una pipeline review con su equipo
- Quiere mejorar la predictibilidad del forecast
- Necesita identificar deals estancados y desbloquerarlos

## Filosofia: Pipeline es un Sistema, No una Lista

El pipeline no es un inventario de oportunidades — es un sistema con inputs, throughput y outputs. Si no lo gestionas como sistema, obtienes:
- Deals fantasma que inflan el forecast
- Ciclos de venta infinitos
- "Happy ears" — escuchar lo que quieres escuchar
- Fin de trimestre heroico en vez de cierre predecible

## Deal Health Scoring con PULSO

Cada deal en pipeline debe tener un PULSO score actualizado. El score no es estatico — debe actualizarse despues de cada interaccion.

| Score PULSO | Estado | Indicador | Accion |
|-------------|--------|-----------|--------|
| 23-30 | Sano | Verde | Avanzar. Siguiente paso claro. |
| 15-22 | En riesgo | Amarillo | Intervenir. Identificar que dimension falta. |
| 5-14 | Critico | Rojo | Descartar o reclasificar como nurture. |

Para los indicadores detallados de salud (senales rojo/amarillo/verde por dimension), leer `frameworks/health-indicators.md`.

## El Modelo CICLO

El pipeline no termina en "Closed Won". El modelo completo es:

```
LeadGen → LeadDev → Sales → Commit → Onboard → Adopt → Expand
```

**Pre-venta** (lado izquierdo del ciclo):
- LeadGen: Generacion de leads (MQLs)
- LeadDev: Calificacion y desarrollo (SQLs)
- Sales: Discovery + propuesta + cierre

**Post-venta** (lado derecho del ciclo):
- Commit: Firma + handoff a CS
- Onboard: Implementacion + activacion
- Adopt: Uso real + resultados
- Expand: Upsell + cross-sell + renovacion

## 4 Metricas Core de Performance

| Metrica | Formula | Target saludable | Por que importa |
|---------|---------|-------------------|-----------------|
| LTV:CAC | Lifetime Value / Customer Acquisition Cost | >3x | Rentabilidad del modelo |
| NRR | Net Revenue Retention (expansion - churn) | >110% | Crecimiento desde base instalada |
| Growth Rate | MRR/ARR growth rate | Depende de stage | Velocidad de crecimiento |
| Rule of 40 | Growth Rate + Profit Margin | >40% | Salud general SaaS |

## Proceso de Pipeline Review

### Frecuencia
- **Semanal**: Review de deals en Commit stage (top of funnel NO se revisa semanal)
- **Mensual**: Review completo de pipeline con todas las etapas
- **Trimestral**: Analisis de metricas, conversion rates, y pipeline health trends

### Estructura de Pipeline Review Semanal (30 min)

Para el template completo de pipeline review, leer `templates/pipeline-review.md`.

**Minutos 0-5**: Snapshot del pipeline
- Total pipeline value vs target
- # deals por etapa
- Deals que cambiaron de etapa esta semana
- Deals que no se han tocado en >14 dias

**Minutos 5-20**: Deep dive en deals criticos
- Solo deals en etapas avanzadas (Proposal/Negotiation/Commit)
- Para cada deal: PULSO score actualizado, proximo paso, blocker
- Usar la regla: "Si no puedes decirme el proximo paso con fecha, el deal no esta activo"

**Minutos 20-25**: Deals en riesgo
- Deals amarillos que necesitan intervencion
- Deals que bajaron de score esta semana
- Deals sin actividad en >7 dias (etapa avanzada) o >21 dias (etapa temprana)

**Minutos 25-30**: Forecast update
- Commit deals: >80% probabilidad = forecast
- Best case: Commit + deals verdes en negotiation
- Pipeline coverage: 3x target minimo, 4x ideal

## Senales de Pipeline Enfermo

| Senal | Diagnostico | Remedio |
|-------|------------|---------|
| Pipeline coverage <3x | No hay suficientes deals entrando | Aumentar actividad top of funnel |
| Conversion rate cayendo | Deals entrando sin calificar | Mejorar calificacion PULSO en discovery |
| Ciclo de venta aumentando | Deals sin Situación Crítica o Organización mapeada | Mejor diagnostico PULSO (S + O) |
| Deals "stuck" >2x ciclo promedio | Falta urgencia o champion interno | Re-calificar con PULSO, descartar si <15 |
| Win rate cayendo | Competencia, pricing, o mal fit | Analizar lost deals por razon, ajustar ICP |
| Forecast miss >20% | "Happy ears" o pipeline inflado | Pipeline hygiene: limpiar deals fantasma |

## Pipeline Hygiene

Cada deal activo debe cumplir estos minimos:

- [ ] PULSO score documentado y actualizado (ultima actualizacion <14 dias)
- [ ] Proximo paso concreto con fecha
- [ ] Contacto con actividad reciente (<7 dias para deals avanzados)
- [ ] Al menos 2 contactos mapeados en la cuenta (no single-threaded)
- [ ] Monto estimado basado en datos (no inventado)
- [ ] Close date realista (no "fin de trimestre" por default)

**Regla de limpieza**: Si un deal no cumple 3+ de estos criterios, debe ser reclasificado o removido del pipeline activo.

## Trigger Plays

Eventos que requieren accion inmediata:

| Trigger | Play | Urgencia |
|---------|------|----------|
| Champion deja la empresa | Mapear nuevo champion en <48h. Si no hay, deal en riesgo. | Critica |
| Cuenta se queda en silencio | Secuencia de re-engagement: valor → pregunta → deadline | Alta |
| Caida en uso del producto (post-venta) | Llamada de CS + analisis de adoption. Riesgo de churn. | Alta |
| M&A de la cuenta | Investigar: beneficia o perjudica? Nuevos stakeholders? | Media |
| Cambio de prioridades del prospect | Revisitar PULSO completo. La Situación Crítica cambio? | Alta |

## Output esperado

Al hacer una pipeline review, generar:

1. **Pipeline snapshot** con metricas clave (coverage, conversion, velocity)
2. **Deal-by-deal assessment** con PULSO score y health color
3. **Top 3 deals en riesgo** con plan de intervencion
4. **Forecast update** (commit / best case / pipeline)
5. **Acciones** priorizadas para la semana
