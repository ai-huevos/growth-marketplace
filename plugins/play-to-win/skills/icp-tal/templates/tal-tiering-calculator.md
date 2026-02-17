# Template: TAL Tiering Calculator

Template para calcular el tamano del Target Account List, asignar tiers basados en fit score y señales de intent, definir la composicion de account pods, y establecer el plan de operacionalizacion en sistemas y review trimestral.

**Output Contract**: TAL calculado con tiers asignados, account pod composition definida, plan de engagement por tier, operacionalizacion en sistemas, y proceso de review trimestral documentado.

**Benchmark**: Calculo basado en modelo GTM actual con formula validada, 3 tiers con volumenes definidos y justificados, roles de pod asignados con ratios, plan de review trimestral con criterios de entrada/salida.

---

## Seccion 1: Parametros GTM

### 1.1 Modelo de Ventas Actual

| Parametro | Valor |
|---|---|
| **Modelo GTM** | ___ (Named Global / Named Large / Field Sales / Two-Stage) |
| **ACV promedio** | $___ |
| **Rango de ACV** | $___ - $___ |
| **Ciclo de venta promedio** | ___ meses |
| **Total de AEs / Reps de cierre** | ___ |
| **Total de SDRs / ADRs** | ___ |
| **Total de SEs** | ___ |
| **Total de ABMs** | ___ |
| **Total de CSMs** | ___ |

### 1.2 Universo de Cuentas ICP

| Parametro | Valor |
|---|---|
| **Total de cuentas que matchean ICP** | ___ |
| **Fuente del dato** | ___ (CRM / enrichment / manual) |
| **Fecha de ultima actualizacion** | ___ |
| **Criterios de inclusion** | ___ |
| **Criterios de exclusion** | ___ (clientes actuales, competidores, anti-ICP) |

### 1.3 Cuentas por Rep (referencia)

Seleccionar la fila que corresponde al modelo GTM:

| Modelo GTM | ACV Tipico | Cuentas por Rep Recomendadas | Tu Valor |
|---|---|---|---|
| Named Global | >$500K | 2-6 | ___ |
| Named Large | $100K-$500K | 6-20 | ___ |
| Field Sales | $25K-$100K | 20-50 | ___ |
| Two-Stage | $5K-$25K | 50-150 | ___ |

**Cuentas por rep seleccionadas**: ___

**Justificacion si difiere del rango recomendado**: ___

---

## Seccion 2: Calculo por Tier

### 2.1 Formula

```
T1 = cuentas_por_rep × total_reps
T2 = total_ICP × 20%
T3 = total_ICP - (T1 + T2)
```

### 2.2 Calculo

| Variable | Valor | Fuente |
|---|---|---|
| `cuentas_por_rep` | ___ | Seccion 1.3 |
| `total_reps` | ___ | Seccion 1.1 (AEs) |
| `total_ICP` | ___ | Seccion 1.2 |

**Resultado**:

| Tier | Formula | Calculo | Total Cuentas |
|---|---|---|---|
| **T1** | cuentas/rep x reps | ___ x ___ | **___** |
| **T2** | total ICP x 20% | ___ x 20% | **___** |
| **T3** | total ICP - T1 - T2 | ___ - ___ - ___ | **___** |
| **Total** | | | **___** |

### 2.3 Validacion del Calculo

| Check | Esperado | Actual | OK? |
|---|---|---|---|
| T1 <= total reps x max cuentas/rep | ___ | ___ | Si / No |
| T2 ~= 20% del total ICP | ___ | ___ | Si / No |
| T1 + T2 + T3 = Total ICP | ___ | ___ | Si / No |
| T1 no excede capacidad de pod | ___ | ___ | Si / No |

---

## Seccion 3: Asignacion de Tiers

### 3.1 Criterios de Tiering

| Criterio | T1 | T2 | T3 |
|---|---|---|---|
| **Fit Score** | >= ___/100 | ___-___/100 | ___-___/100 |
| **Intent Signal** | ___ | ___ | ___ |
| **Relacion existente** | ___ | ___ | ___ |
| **Revenue potencial** | >= $___ | $___ - $___ | < $___ |
| **PULSO completeness** | P+U+L+S | P+U+L | P+U |

### 3.2 Lista de Cuentas T1

| # | Empresa | Fit Score | Intent | Relacion | Revenue Est. | PULSO | Rep Asignado |
|---|---|---|---|---|---|---|---|
| 1 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 2 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 3 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 4 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 5 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 6 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 7 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 8 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 9 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |
| 10 | ___ | ___/100 | Alto/Medio/Bajo | Si/No | $___ | T1 | ___ |

*(Agregar filas segun el calculo de T1. Recomendado: listar todas las cuentas T1.)*

### 3.3 Resumen T2 y T3

| Tier | Total Cuentas | Industrias Principales | Revenue Promedio | Fuente de Lista |
|---|---|---|---|---|
| T2 | ___ | ___ | $___ | ___ |
| T3 | ___ | ___ | $___ | ___ |

*(Para T2 y T3 no se requiere listar cada cuenta individual — se gestionan por segmento.)*

---

## Seccion 4: Account Pod Composition

### 4.1 Recursos Disponibles

| Rol | Total Disponible | Ratio Recomendado | Ratio Actual |
|---|---|---|---|
| **AE** | ___ | 1 AE : [cuentas/rep] cuentas T1 | 1 : ___ |
| **ABM** | ___ | 1 ABM : 5-10 cuentas T1 | 1 : ___ |
| **ADR** | ___ | 1 ADR : 10-20 cuentas T1 | 1 : ___ |
| **SE** | ___ | 1 SE : 3-5 AEs | 1 : ___ |
| **CSM** | ___ | 1 CSM : 15-30 cuentas (post-venta) | 1 : ___ |

### 4.2 Asignacion de Pods

| Pod # | AE | ABM | ADR | SE | Cuentas T1 Asignadas |
|---|---|---|---|---|---|
| Pod 1 | ___ | ___ | ___ | ___ | ___ |
| Pod 2 | ___ | ___ | ___ | ___ | ___ |
| Pod 3 | ___ | ___ | ___ | ___ | ___ |
| Pod 4 | ___ | ___ | ___ | ___ | ___ |

### 4.3 Gaps de Recursos

| Gap Identificado | Impacto | Mitigacion |
|---|---|---|
| ___ | ___ | ___ |
| ___ | ___ | ___ |

---

## Seccion 5: Plan de Engagement por Tier

### 5.1 Engagement T1: Personalizado (1:1)

| Actividad | Frecuencia | Owner | Canal | KPI |
|---|---|---|---|---|
| Research de cuenta | Semanal | ADR | LinkedIn, CRM, noticias | Insights documentados |
| Outreach personalizado | 2-3x/semana | ADR + AE | Email, LinkedIn, telefono | Response rate >15% |
| Contenido personalizado | Mensual | ABM | Email, landing page | Engagement rate |
| Demo/Meeting | Segun pipeline | AE + SE | Video, presencial | Demo-to-close rate |
| Executive alignment | Trimestral | VP Sales | Email, evento | Executive meetings |

### 5.2 Engagement T2: Segmentado (1:Few)

| Actividad | Frecuencia | Owner | Canal | KPI |
|---|---|---|---|---|
| Campana por industria | Mensual | Marketing | Email, ads, webinar | MQL rate |
| Outreach semi-personalizado | 1x/semana | ADR | Email sequences | Response rate >8% |
| Contenido segmentado | Quincenal | Marketing | Blog, social, email | Engagement |
| Eventos por vertical | Trimestral | Marketing + Sales | Webinar, mesa redonda | Attendance + pipeline |

### 5.3 Engagement T3: Automatizado (1:Many)

| Actividad | Frecuencia | Owner | Canal | KPI |
|---|---|---|---|---|
| Nurture automatizado | Continuo | Marketing | Email automation | Open rate, clicks |
| Contenido educativo | Semanal | Marketing | Blog, social, newsletter | Traffic, suscripciones |
| Retargeting ads | Continuo | Marketing | LinkedIn, Google Ads | Impressions, CTR |
| Monitoreo de intent | Mensual | Rev Ops | Intent platform | Cuentas que suben a T2 |

---

## Seccion 6: Operacionalizacion

### 6.1 CRM — Campos y Configuracion

| Campo | Objeto | Tipo | Valores | Estado |
|---|---|---|---|---|
| `ICP_Tier` | Account | Picklist | T1 / T2 / T3 | Pendiente / Configurado |
| `Fit_Score` | Account | Number (0-100) | Calculado | Pendiente / Configurado |
| `TAL_Status` | Account | Picklist | Active / Inactive / Review | Pendiente / Configurado |
| `Pod_Assignment` | Account | Lookup | Pod 1-N | Pendiente / Configurado |
| `Last_Engagement` | Account | Date | Auto-populated | Pendiente / Configurado |
| `Intent_Score` | Account | Number | API integration | Pendiente / Configurado |

### 6.2 Marketing Automation — Workflows

| Workflow | Trigger | Accion | Tier |
|---|---|---|---|
| T1 Welcome | Cuenta asignada a T1 | Notificar pod + crear tarea de research | T1 |
| T2 Nurture | Cuenta asignada a T2 | Agregar a secuencia segmentada | T2 |
| T3 Air Cover | Cuenta asignada a T3 | Agregar a nurture automatizado | T3 |
| Tier Upgrade | Fit score sube o intent detectado | Notificar ADR + reclasificar | T2→T1, T3→T2 |
| Tier Downgrade | Sin engagement 2 trimestres | Reclasificar + notificar | T1→T2, T2→T3 |

### 6.3 Reporting — Dashboards

| Dashboard | Audiencia | Metricas Principales | Frecuencia |
|---|---|---|---|
| TAL Coverage | VP Sales + Rev Ops | % T1 con actividad, pipeline por tier, conversion | Semanal |
| Pod Performance | Sales Manager | Meetings por pod, pipeline por AE, multi-thread % | Semanal |
| TAL Health | Rev Ops | Cuentas activas vs inactivas, tier distribution, data quality | Mensual |
| Quarterly Review | Leadership | TAL refresh %, win rates por tier, ROI de pod investment | Trimestral |

### 6.4 Checklist de Implementacion

- [ ] Campos creados en CRM (ICP_Tier, Fit_Score, TAL_Status, Pod_Assignment)
- [ ] Vistas personalizadas por tier creadas para cada rep
- [ ] Workflows de marketing automation configurados
- [ ] Listas de T1 cargadas con cuentas y reps asignados
- [ ] Listas de T2 cargadas y segmentadas por industria
- [ ] T3 incluidas en nurture automatizado
- [ ] Dashboards de reporting creados y compartidos
- [ ] Equipo capacitado en proceso de tiering y actualizacion
- [ ] Calendario de review trimestral agendado

---

## Seccion 7: Review Trimestral

### 7.1 Datos para el Review

| Metrica | Q Actual | Q Anterior | Tendencia |
|---|---|---|---|
| Total cuentas T1 | ___ | ___ | ↑ / → / ↓ |
| Total cuentas T2 | ___ | ___ | ↑ / → / ↓ |
| Total cuentas T3 | ___ | ___ | ↑ / → / ↓ |
| T1 con engagement ultimo mes | ___% | ___% | ↑ / → / ↓ |
| T1 win rate | ___% | ___% | ↑ / → / ↓ |
| T2 conversion a pipeline | ___% | ___% | ↑ / → / ↓ |
| Pipeline total por tier | $___ | $___ | ↑ / → / ↓ |
| Cuentas sin actividad (2Q) | ___ | ___ | ↑ / → / ↓ |

### 7.2 Cuentas que Salen (~20% del TAL)

| # | Empresa | Tier Actual | Razon de Salida | Destino |
|---|---|---|---|---|
| 1 | ___ | ___ | ___ (sin engagement / competidor ganado / no fit) | Remover / Bajar tier |
| 2 | ___ | ___ | ___ | ___ |
| 3 | ___ | ___ | ___ | ___ |
| 4 | ___ | ___ | ___ | ___ |
| 5 | ___ | ___ | ___ | ___ |

### 7.3 Cuentas que Entran

| # | Empresa | Tier Propuesto | Razon de Entrada | Fit Score | Intent |
|---|---|---|---|---|---|
| 1 | ___ | ___ | ___ (nuevo ICP match / intent signal / referral) | ___/100 | Alto/Medio |
| 2 | ___ | ___ | ___ | ___/100 | ___ |
| 3 | ___ | ___ | ___ | ___/100 | ___ |
| 4 | ___ | ___ | ___ | ___/100 | ___ |
| 5 | ___ | ___ | ___ | ___/100 | ___ |

### 7.4 Ajustes de Tier

| # | Empresa | Tier Anterior | Tier Nuevo | Razon del Cambio |
|---|---|---|---|---|
| 1 | ___ | ___ | ___ | ___ (CE detectado / engagement bajo / expansion signal) |
| 2 | ___ | ___ | ___ | ___ |
| 3 | ___ | ___ | ___ | ___ |

### 7.5 Decisiones del Review

| Decision | Detalle | Responsable | Deadline |
|---|---|---|---|
| Ajustar cuentas/rep | ___ | ___ | ___ |
| Reasignar pods | ___ | ___ | ___ |
| Cambiar criterios de tiering | ___ | ___ | ___ |
| Actualizar ICP (si patrones cambiaron) | ___ | ___ | ___ |
| Proximo review | Fecha: ___ | ___ | ___ |

---

## Metadata

| Campo | Valor |
|---|---|
| **Template ID** | T-50 |
| **Skill** | `play-to-win/icp-tal` |
| **Framework** | `frameworks/tal-creation-calculation.md` |
| **Version** | 1.0.0 |
| **Tiempo estimado** | 1-2 semanas (calculo + asignacion + operacionalizacion) |
| **Prerequisitos** | ICP definido (ver `templates/icp-segment-worksheet.md`), datos de CRM, equipo GTM dimensionado |
| **Output** | TAL calculado + Tiers asignados + Pod composition + Plan de engagement + Operacionalizacion + Review trimestral |
| **Siguiente paso** | Ejecutar Plan de Engagement (Seccion 5) y programar primer review trimestral (Seccion 7) |
