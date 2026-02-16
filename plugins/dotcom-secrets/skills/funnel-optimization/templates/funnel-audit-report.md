# Reporte de Auditoria de Funnel

Plantilla para auditar el rendimiento de tu funnel de forma estructurada. Completa cada seccion con datos reales para obtener un diagnostico accionable.

---

## Seccion 1: Resumen Ejecutivo

| Campo | Valor |
|-------|-------|
| **Nombre del funnel** | ___ |
| **Periodo auditado** | Del ___ al ___ |
| **Score general de salud** | ___/100 |
| **Cuello de botella #1** | ___ |
| **Recomendacion principal** | ___ |
| **Impacto estimado de la recomendacion** | +___% en [metrica] = +$___ revenue mensual |

### Criterio de Score de Salud

| Rango | Interpretacion |
|-------|---------------|
| 80-100 | Funnel saludable — listo para escalar |
| 60-79 | Funnel funcional — optimizar antes de escalar |
| 40-59 | Funnel con problemas — requiere atencion urgente |
| 0-39 | Funnel roto — reconstruir antes de invertir mas |

### Calculo del Score

Cada nivel contribuye al score total con peso diferente:

- Trafico (25 puntos): Cada metrica de trafico en benchmark = puntos completos, por debajo = proporcional
- Conversion (40 puntos): Cada metrica de conversion en benchmark = puntos completos, por debajo = proporcional
- Revenue (35 puntos): LTV:CPA ratio como driver principal del score

---

## Seccion 2: Metricas de Trafico

### Resumen de Fuentes de Trafico

| Fuente | Tipo (Own/Control/DC) | Volumen semanal | CPC | Bounce rate | Quality score (1-10) | Tendencia |
|--------|----------------------|-----------------|-----|------------|---------------------|-----------|
| ___ | ___ | ___ | $___ | ___% | ___/10 | ___ |
| ___ | ___ | ___ | $___ | ___% | ___/10 | ___ |
| ___ | ___ | ___ | $___ | ___% | ___/10 | ___ |
| ___ | ___ | ___ | $___ | ___% | ___/10 | ___ |
| ___ | ___ | ___ | $___ | ___% | ___/10 | ___ |
| **TOTAL** | | ___ | $___ prom | ___% prom | ___/10 prom | |

### Distribucion de Trafico

| Tipo | % actual | % objetivo | Gap |
|------|---------|-----------|-----|
| Own (propio) | ___% | 30% | ___% |
| Control (pagado) | ___% | 50% | ___% |
| Don't Control (organico) | ___% | 20% | ___% |

### Diagnostico de Trafico

- **Volumen suficiente para testear?** (min 200 visitantes/dia): ___
- **CPC dentro de benchmark?**: ___
- **Dependencia excesiva de una fuente?** (>70% de una sola): ___
- **Calidad consistente?** (bounce rate estable semana a semana): ___

---

## Seccion 3: Metricas de Conversion

### Conversion por Etapa del Funnel

| Etapa del funnel | Tasa actual | Benchmark | Gap | Prioridad (1-5) |
|-----------------|------------|-----------|-----|-----------------|
| Visitante → Lead (opt-in) | ___% | 30-60% | ___% | ___ |
| Lead → MQL (engagement) | ___% | 20-40% | ___% | ___ |
| MQL → Frontend buyer | ___% | 10-30% | ___% | ___ |
| Frontend → Middle buyer | ___% | 5-15% | ___% | ___ |
| Middle → Backend buyer | ___% | 3-10% | ___% | ___ |

### Metricas de Email

| Metrica | Valor actual | Benchmark | Gap |
|---------|-------------|-----------|-----|
| Open rate (Soap Opera Seq) | ___% | 30-50% | ___% |
| Open rate (Seinfeld Seq) | ___% | 20-35% | ___% |
| Click rate promedio | ___% | 3-10% | ___% |
| Unsubscribe rate | ___% | <0.5% | ___% |
| Deliverability rate | ___% | >95% | ___% |

### Diagnostico de Conversion

- **Cual es la etapa con mayor caida?**: ___
- **Esa caida es reciente o historica?**: ___
- **Se han hecho tests en esa etapa?**: ___
- **Hay datos cualitativos (encuestas, feedback)?**: ___

---

## Seccion 4: Metricas de Revenue

### Metricas Principales

| Metrica | Valor actual | Mes anterior | Benchmark | Tendencia |
|---------|-------------|-------------|-----------|-----------|
| AOV (Average Order Value) | $___ | $___ | $___ | ___ |
| LTV (Customer Lifetime Value) | $___ | $___ | $___ | ___ |
| CPA (Cost Per Acquisition) | $___ | $___ | $___ | ___ |
| LTV:CPA ratio | ___:1 | ___:1 | >3:1 | ___ |
| Revenue mensual | $___ | $___ | $___ | ___ |
| Margen bruto | ___% | ___% | >60% | ___ |

### Desglose de AOV

| Componente | Revenue promedio | Take rate | Contribucion al AOV |
|-----------|-----------------|-----------|---------------------|
| Producto frontend | $___ | N/A | $___ |
| Order bump | $___ | ___% | $___ |
| OTO #1 (upsell) | $___ | ___% | $___ |
| OTO #2 (downsell) | $___ | ___% | $___ |
| **AOV total** | | | **$___** |

### Calculo de LTV

```
LTV = AOV frontend ($___)
    + (Revenue middle x % conversion a middle) ($___)
    + (Revenue backend x % conversion a backend) ($___)
    + (Expansion revenue anual) ($___)
    = $___ LTV total
```

---

## Seccion 5: Analisis de Cuello de Botella

### Identificacion del Cuello de Botella Principal

El cuello de botella es la etapa que, si se mejora, genera el mayor impacto en revenue total.

**Metodo de identificacion**:

1. Revisar cada etapa del funnel de arriba a abajo
2. Identificar la primera etapa donde la metrica esta significativamente por debajo del benchmark
3. Calcular el impacto en revenue de mejorar esa etapa un 20%

### Analisis de Causa Raiz

| Pregunta diagnostica | Respuesta |
|---------------------|-----------|
| **Que etapa es el cuello de botella?** | ___ |
| **Hace cuanto esta por debajo del benchmark?** | ___ |
| **Que cambio cuando empeoro?** (si aplica) | ___ |
| **Se ha testeado algo en esta etapa antes?** | ___ |
| **Que datos cualitativos tenemos?** (feedback, encuestas, heatmaps) | ___ |
| **Cual es la hipotesis de causa raiz?** | ___ |

### Impacto Calculado

```
Metrica actual del cuello de botella: ___
Benchmark objetivo: ___
Si mejoramos al benchmark:
  - Leads adicionales por mes: ___
  - Clientes adicionales por mes: ___
  - Revenue adicional por mes: $___
  - Revenue adicional por ano: $___
```

---

## Seccion 6: Plan de Accion

### Acciones Priorizadas

| # | Accion | Impacto esperado | Esfuerzo (1-5) | Owner | Deadline | Estado |
|---|--------|-----------------|----------------|-------|----------|--------|
| 1 | ___ | ___ | ___ | ___ | ___ | ___ |
| 2 | ___ | ___ | ___ | ___ | ___ | ___ |
| 3 | ___ | ___ | ___ | ___ | ___ | ___ |
| 4 | ___ | ___ | ___ | ___ | ___ | ___ |
| 5 | ___ | ___ | ___ | ___ | ___ | ___ |

### Criterio de Priorizacion

Las acciones se ordenan por **impacto / esfuerzo**:

- **Impacto**: Estimado en revenue adicional mensual o % de mejora en metrica clave
- **Esfuerzo**: 1 = se hace en 1 hora, 2 = se hace en 1 dia, 3 = se hace en 1 semana, 4 = se hace en 2 semanas, 5 = requiere >2 semanas

### Proximos Pasos Inmediatos (esta semana)

1. ___ (responsable: ___, deadline: ___)
2. ___ (responsable: ___, deadline: ___)
3. ___ (responsable: ___, deadline: ___)

### Revision de Resultados

- **Fecha de proxima auditoria**: ___
- **Metricas a monitorear semanalmente**: ___
- **Criterio de exito para el plan de accion**: ___
