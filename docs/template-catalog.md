# Template Catalog — Growth Marketplace

## Cómo Funcionan los Templates

- Los templates definen **contratos de output** (qué debe entregarse)
- Los agentes llenan la **forma** (variables específicas del cliente) pero preservan la **esencia** (metodología)
- Cada ejecución se registra en `docs/execution-log.md`
- Los templates evolucionan cuando los outputs consistentemente no alcanzan los benchmarks
- **Regla de evolución**: 3+ ejecuciones que no alcanzan el benchmark → flag para revisión

## Ciclo de Vida

```
Template (ADN) → Agente ejecuta → Output (fenotipo) → Resultado (selección natural)
                                                              ↓
                                                   Benchmark alcanzado? → Sí → Mantener
                                                              ↓ No
                                                   3+ fallas → Evolucionar template
```

---

## Índice de Templates

### Plugin: growth-foundations

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-01 | icp-worksheet | icp-analysis | Perfil ICP completo con scoring 0-100, 3 tiers | Score > 70 para top tier |
| T-02 | bucket-scorecard | quiz-funnel | Scorecard de buckets identificados con priorización | 3-5 buckets definidos |
| T-03 | deep-dive-survey-template | quiz-funnel | Encuesta de profundización por bucket | 5+ preguntas por bucket |
| T-04 | quiz-blueprint-worksheet | quiz-funnel | Blueprint completo del quiz funnel | Todas las secciones completas |

### Plugin: sales-blueprint

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-05 | call-prep | discovery-mastery | Prep sheet para llamada de discovery | 5 preguntas SPICED preparadas |
| T-06 | pipeline-review | pipeline-management | Revisión de pipeline con health indicators | Todos los deals scored |
| T-07 | enterprise-proposal | proposal-generation | Propuesta enterprise completa | 7+ secciones, ROI cuantificado |
| T-08 | mid-market-proposal | proposal-generation | Propuesta mid-market | 5+ secciones, caso de negocio |
| T-09 | one-on-one-prep | coaching-cadence | Prep de sesión 1:1 de coaching | Métricas + plan de acción |

### Plugin: copywriting-engine

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-10 | cold-outreach | email-sequences | Secuencia de cold outreach (3-5 emails) | Open rate > 25% |
| T-11 | nurture | email-sequences | Secuencia de nurture (5-7 emails) | Click rate > 5% |
| T-12 | reactivation | email-sequences | Secuencia de reactivación (3 emails) | Re-engagement > 10% |

### Plugin: dotcom-secrets

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-13 | escala-canvas | escala | Value ladder de 4 tiers con LTV:CAC | LTV:CAC > 3:1 |
| T-14 | funnel-architecture-canvas | flujo | Blueprint de funnel completo (7 fases) | 7 fases definidas |
| T-15 | acf-worksheet | alma | Perfil de Attractive Character completo | 10/10 pasos completados |
| T-16 | soap-opera-sequence | alma | Secuencia de 5 emails tipo soap opera | Open rate > 30% |
| T-17 | seinfeld-sequence | alma | Framework de email diario | Consistencia > 5/semana |
| T-18 | funnel-audit-report | funnel-optimization | Diagnóstico de salud del funnel | 6 secciones scored |
| T-19 | 90-day-action-plan | funnel-optimization | Plan de ejecución por fases | 3 fases, tareas semanales |

---

## Estadísticas

- **Total templates**: 19
- **Por plugin**: growth-foundations (4), sales-blueprint (5), copywriting-engine (3), dotcom-secrets (7)
- **Última actualización**: 2026-02-16
