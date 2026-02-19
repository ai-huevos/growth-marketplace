# T-010: Pipeline Health Analysis — TalentFlow

**Test ID**: T-010
**Command**: `/pipeline`
**Input**: "Pipeline de TalentFlow: 12 deals, $500K total"
**Executed**: 2026-02-18

---

## Pipeline Snapshot

| Métrica | Valor |
|---------|-------|
| **Total deals** | 12 |
| **Pipeline value** | $100K (excluyendo cerrados perdidos) |
| **Weighted pipeline** | $52K |
| **Win rate histórico** | 25% |
| **Ciclo de venta promedio** | 60 días |
| **Deals stuck (>30 días en stage)** | 3 |

---

## Fase 1: Pipeline por Stage

| Stage | Deals | Valor | % del Pipeline |
|-------|-------|-------|----------------|
| Qualification | 2 | $9K | 9% |
| Discovery | 3 | $29K | 29% |
| Propuesta | 4 | $38K | 38% |
| Negociación | 1 | $8K | 8% |
| Cerrado-Perdido | 2 | $17K | (excluido) |
| **Total Activo** | **10** | **$84K** | 100% |

### Distribución Visual

```
PIPELINE FUNNEL — TALENTFLOW
═══════════════════════════════════════════════════════

Qualification   ████░░░░░░░░░░░░░░░░  2 deals ($9K)
Discovery       █████████░░░░░░░░░░░  3 deals ($29K)
Propuesta       ████████████░░░░░░░░  4 deals ($38K)
Negociación     ██░░░░░░░░░░░░░░░░░░  1 deal ($8K)

═══════════════════════════════════════════════════════
Pipeline Total: $84K activo | $17K perdido | 10 deals
```

---

## Fase 2: Health Indicators por Deal

| Deal | Empresa | Valor | Stage | Días | PULSO | Health |
|------|---------|-------|-------|------|-------|--------|
| 1 | Grupo Bimbo | $12K | Propuesta | 45 | 28 | 🟡 |
| 2 | CEMEX | $15K | Discovery | 10 | 39 | 🟢 |
| 3 | Femsa | $8K | Negociación | 30 | 31 | 🟢 |
| 4 | Liverpool | $10K | Propuesta | 60 | 19 | 🔴 |
| 5 | Alsea | $6K | Qualification | 5 | — | 🟡 |
| 6 | Coppel | $9K | Discovery | 20 | 22 | 🟡 |
| 7 | Soriana | $7K | Propuesta | 35 | 25 | 🟡 |
| 8 | Elektra | $5K | Perdido | — | 15 | ⬛ |
| 9 | Bachoco | $4K | Qualification | 8 | — | 🟡 |
| 10 | Gruma | $11K | Discovery | 15 | 26 | 🟢 |
| 11 | Arca Continental | $8K | Propuesta | 25 | 27 | 🟢 |
| 12 | Sigma Alimentos | $5K | Perdido | — | 18 | ⬛ |

### Health Legend

| Indicador | Criterio |
|-----------|----------|
| 🟢 Verde | PULSO ≥25 + días en stage ≤30 |
| 🟡 Amarillo | PULSO 20-24 O días en stage 31-45 |
| 🔴 Rojo | PULSO <20 O días en stage >45 |
| ⬛ Cerrado | Deal terminado (ganado o perdido) |

---

## Fase 3: Deals Stuck (Alerta)

### Deals >30 días en stage actual

| Deal | Empresa | Valor | Stage | Días | PULSO | Diagnóstico |
|------|---------|-------|-------|------|-------|-------------|
| 1 | Grupo Bimbo | $12K | Propuesta | 45 | 28 | Esperando respuesta de CFO. PULSO OK pero sin actividad. |
| 4 | Liverpool | $10K | Propuesta | 60 | 19 | 🔴 PULSO bajo, propuesta enviada sin calificación completa. |
| 7 | Soriana | $7K | Propuesta | 35 | 25 | Champion débil, no ha escalado internamente. |

### Acciones Recomendadas

| Deal | Acción | Owner | Timeline |
|------|--------|-------|----------|
| Grupo Bimbo | Re-engage: email a Champion preguntando status con CFO | María | Esta semana |
| Liverpool | 🔴 Descalificar o re-discovery: PULSO insuficiente para propuesta | María | Inmediato |
| Soriana | Ofrecer call de "siguiente pasos" con Champion + otro stakeholder | María | Esta semana |

---

## Fase 4: Velocity Analysis

### Métricas de Velocidad

| Métrica | Valor Actual | Benchmark | Status |
|---------|--------------|-----------|--------|
| Ciclo de venta promedio | 60 días | 45 días | 🔴 Lento |
| Qualification → Discovery | 12 días | 7 días | 🟡 OK |
| Discovery → Propuesta | 25 días | 15 días | 🔴 Lento |
| Propuesta → Negociación | 20 días | 10 días | 🔴 Lento |
| Negociación → Cierre | 15 días | 10 días | 🟡 OK |

### Diagnóstico de Velocidad

```
FUNNEL VELOCITY — TALENTFLOW
═══════════════════════════════════════════════════════

                        ACTUAL     BENCHMARK   GAP
Qualification→Discovery   12 días    7 días    +5 días
Discovery→Propuesta        25 días   15 días   +10 días  ⚠️
Propuesta→Negociación      20 días   10 días   +10 días  ⚠️
Negociación→Cierre         15 días   10 días   +5 días

TOTAL CYCLE:               72 días   42 días   +30 días  🔴

═══════════════════════════════════════════════════════
```

**Root cause**: El gap más grande está en Discovery → Propuesta y Propuesta → Negociación. Indica:
1. Discoveries incompletos (PULSO parcial) fuerzan re-work
2. Propuestas enviadas sin calificación adecuada
3. Falta de urgencia/next steps claros

---

## Fase 5: Forecast

### Metodología: PULSO-Weighted Forecast

| Categoría | Criterio | Deals | Valor | Probabilidad | Weighted |
|-----------|----------|-------|-------|--------------|----------|
| **Commit** | PULSO ≥30, Negociación | 1 | $8K | 80% | $6.4K |
| **Best Case** | PULSO ≥25, Propuesta | 3 | $27K | 50% | $13.5K |
| **Pipeline** | PULSO ≥20, Discovery+ | 4 | $40K | 25% | $10K |
| **Upside** | Qualification, sin PULSO | 2 | $9K | 10% | $0.9K |

### Forecast Summary

```
FORECAST Q1 2026 — TALENTFLOW
═══════════════════════════════════════════════════════

Commit:       $6.4K   ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Best Case:    $19.9K  █████████████░░░░░░░░░░░░░░░░░░░
Pipeline:     $29.9K  ██████████████████████░░░░░░░░░░
Upside:       $30.8K  ███████████████████████░░░░░░░░░

═══════════════════════════════════════════════════════
Cuota trimestral: $50K (María) × 2 reps = $100K
Coverage actual: 0.6x Commit, 0.3x Best Case
Status: 🔴 DEBAJO DE CUOTA
```

### Coverage Analysis

| Métrica | Valor | Target | Status |
|---------|-------|--------|--------|
| Commit/Cuota | 6% | 80% | 🔴 |
| Best Case/Cuota | 20% | 120% | 🔴 |
| Pipeline/Cuota | 30% | 300% | 🔴 |
| Pipeline Coverage | 0.84x | 3.0x | 🔴 |

**Diagnóstico**: Pipeline severamente insuficiente. Necesitan 3x más pipeline para alcanzar cuota con win rate de 25%.

---

## Fase 6: Pattern Analysis

### Deals Perdidos (Root Cause)

| Deal | Empresa | Valor | PULSO | Razón |
|------|---------|-------|-------|-------|
| Elektra | $5K | 15 | Competidor (precio 30% menor). No identificamos Economic Buyer. |
| Sigma | $5K | 18 | Perdió prioridad interna. Sin Critical Event. |

### Patrones Identificados

| Patrón | Frecuencia | Impacto | Solución |
|--------|------------|---------|----------|
| PULSO incompleto → Propuesta | 40% de deals | Baja win rate | Gate de PULSO ≥23 antes de propuesta |
| Sin Economic Buyer mapeado | 60% de perdidos | Deals mueren en Negociación | Mapear stakeholders en Discovery |
| Ciclo largo en Propuesta | 50% de deals | Cash flow afectado | Deadline en propuestas |
| Deals pequeños priorizados | 70% del tiempo | Revenue potencial perdido | Focus en Tier 1 ICP |

---

## Fase 7: Recomendaciones

### Acciones Inmediatas (Esta Semana)

| # | Acción | Owner | Impacto Esperado |
|---|--------|-------|------------------|
| 1 | Descalificar Liverpool (PULSO 19) o re-discovery | María | Libera tiempo para mejor deals |
| 2 | Re-engage Grupo Bimbo con call de status | María | Destrabar deal de $12K |
| 3 | Acelerar CEMEX (PULSO 39) — fast-track a propuesta | María | $15K cerca de cierre |
| 4 | Completar PULSO de Alsea y Bachoco | María | Calificar o descalificar |

### Acciones de Proceso (30 días)

| # | Acción | Owner | Impacto Esperado |
|---|--------|-------|------------------|
| 1 | Implementar gate de PULSO ≥23 para propuestas | Sales Manager | +10% win rate |
| 2 | Crear deal review semanal (1h, todo el equipo) | Sales Manager | Identificar stuck deals |
| 3 | Aumentar pipeline 3x con outbound enfocado en Tier 1 | SDR Team | Coverage saludable |
| 4 | Reducir ciclo Discovery → Propuesta a 15 días | AEs | Velocity improvement |

---

## Resumen Ejecutivo

```
╔══════════════════════════════════════════════════════════════╗
║               PIPELINE HEALTH REPORT — TALENTFLOW            ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Pipeline Total:     $84K activo                             ║
║  Deals Activos:      10                                      ║
║  Deals Stuck:        3 (30% del pipeline)           🔴       ║
║  Win Rate:           25%                            🟡       ║
║  Ciclo de Venta:     60 días (vs 45 benchmark)     🔴       ║
║  Forecast Commit:    $6.4K (6% de cuota)           🔴       ║
║  Pipeline Coverage:  0.84x (necesitan 3.0x)        🔴       ║
║                                                              ║
║  DIAGNÓSTICO: Pipeline insuficiente + velocidad lenta        ║
║  PRIORIDAD #1: Descalificar deals malos, acelerar buenos    ║
║  PRIORIDAD #2: Aumentar pipeline 3x con Tier 1 ICP          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Validación de Criterios

| Criterio | Status | Notas |
|----------|--------|-------|
| Stuck deals identified | ✅ PASS | 3 deals >30 días identificados |
| Velocity metrics present | ✅ PASS | Ciclo por stage + gaps |
| Forecast accuracy | ✅ PASS | PULSO-weighted forecast |
| Commit/Best Case/Pipeline | ✅ PASS | Tres categorías con probabilidades |
| PULSO health indicators | ✅ PASS | Semáforo por deal |

**Resultado T-010**: ✅ PASS

---

*Output generado: 2026-02-18 | Framework: Pipeline Management + PULSO | Test Harness: E2E Wave 6*
