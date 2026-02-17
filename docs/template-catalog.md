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

### Plugin: growth-foundations (content-strategy — NEW)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-20 | topic-priority-worksheet | content-strategy | Tabla de 20+ topics priorizados por CPC × Revenue × Traffic | Top 5 topics con score > 50 |
| T-21 | aida-blog-post-template | content-strategy | Blog post completo estructura AIDA con 3 Jabs | Headline pasa test 5 seg |
| T-22 | red-packet-partnership-sop | content-strategy | Partner list 50+ + outreach + assets + tracking | >20% response rate, >100 leads |

### Plugin: dotcom-secrets (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-23 | micro-budget-ads-sop | flujo | Campaign setup $5/day + weekly optimization log | CPC < $1, 3-10 leads/day |
| T-24 | operation-nowhere-to-hide-sop | funnel-optimization | Asset audit 10-50+ con UTMs + tracking dashboard | Links en 10+ assets, +20% traffic |

### Plugin: copywriting-engine (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-25 | 900-word-sales-email | email-sequences | Email ~900 palabras Present Pain + Three Brains | Venta sin llamada, CR > 2% |

### Playbook Triage — Sprint 1 (2026-02-16)

#### growth-foundations (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-26 | team-competency-assessment | icp-analysis | Mapa de calor 23 competencias × equipo + gaps + plan 30-60-90 | >90% precisión en evaluaciones |
| T-28 | resource-audit | competitive-analysis | Score de recursos (4 dims) + channels filtrados + sistema 3-2-1 | Plan ejecutable en < 7 días |
| T-31 | launch-playbook | positioning | Plan de lanzamiento con tier classification + 6-week rollout | PMM puede ejecutar sin otro doc |

#### sales-blueprint (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-27 | marketing-sales-sla | pipeline-management | SLA bilateral mktg↔ventas con métricas + cadence | Ambos equipos firmaron |
| T-33 | internal-comms-rhythm | coaching-cadence | Sistema de comms interna (weekly 5min + email + monthly) | Cualquier empleado explica qué hace mktg |

#### dotcom-secrets (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-30 | lead-scoring-model | funnel-optimization | Modelo ICP Match (0-10) + Intent (0-10) con routing | SDR califica lead en < 2 min |
| T-32 | community-launch-plan | alma | Plan de launch de comunidad (hooks, trial, engagement) | 100 miembros pagos en 90 días |

#### conversational-pm (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-29 | team-design-canvas | project-management | Canvas equipo alineado a revenue con 3 pilares + funnel model | CEO aprueba estructura |

#### copywriting-engine (nuevos)

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-34 | ai-prompt-patterns | psychological-triggers | 5 mega-prompts (JTBD, Hooks, CRO, Enemy, Multiplication) | Output usable en < 3 iteraciones |

### Plugin: play-to-win

#### sales-transformation

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-35 | sales-health-audit | sales-transformation | Diagnóstico completo de salud del sistema de ventas (7 dominios) | 105 preguntas evaluadas, gaps priorizados |
| T-36 | playbook-synthesis | sales-transformation | Playbook personalizado de 7 secciones basado en blueprints seleccionados | Playbook ejecutable sin consulta adicional |
| T-37 | hypothesis-card | sales-transformation | Tarjeta IF/THEN/BECAUSE para testing de hipótesis de ventas | Hipótesis medible en < 2 semanas |
| T-38 | messaging-architecture | sales-transformation | Matriz de arquitectura de mensajes (7 secciones, por persona) | Mensajes consistentes across equipo |

#### customer-success-ops

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-39 | joint-impact-plan-worksheet | customer-success-ops | Plan de impacto conjunto 12 meses (WHAT/WHO/WHEN/HOW) | Cliente firma JIP en kickoff |
| T-40 | health-scoring-dashboard | customer-success-ops | Dashboard 4 pilares (Producto, Servicio, Resultado, Sentimiento) | Health score calculado para 100% cuentas |
| T-41 | trigger-play-cards | customer-success-ops | 10 tarjetas IFTTT (5 riesgo + 5 oportunidad) con acciones específicas | CSM ejecuta play en < 24h del trigger |

#### pre-discovery-research

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-42 | pre-call-brief | pre-discovery-research | Brief de inteligencia pre-llamada (5 capas: Company/Human/Industry/Geo/Timing) | SDR completa brief en < 15 min |

#### deal-strategy

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-43 | win-loss-analysis-template | deal-strategy | Análisis SPICED de win/loss con patrones de concentración y recomendaciones CRM | 12 secciones completas por deal |

#### relationship-mapping

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-44 | org-mapping-worksheet | relationship-mapping | Mapa organizacional 6 pasos con 7 roles del buying center | Todos los stakeholders identificados y clasificados |
| T-45 | three-by-three-canvas | relationship-mapping | Canvas 3×3 de planificación de relaciones (acciones × stakeholders × timeline) | Plan de multi-threading ejecutable |

#### renewal-expansion

| ID | Template | Skill | Output Contract | Benchmark |
|----|----------|-------|-----------------|-----------|
| T-46 | renewal-conversation-script | renewal-expansion | Script de conversación de renovación (ACE → SPI → demo → trade) | Renewal rate > 90% |

---

## Estadísticas

- **Total templates**: 46
- **Por plugin**: growth-foundations (10), sales-blueprint (7), copywriting-engine (5), dotcom-secrets (11), conversational-pm (1), play-to-win (12)
- **Última actualización**: 2026-02-16
- **Sprint**: Play to Win — 12 nuevos templates de 31 Winning by Design blueprints
