# Inventario Completo de Contenido

Mapa de cada archivo del repositorio con su propósito y relaciones.

> **Actualizado**: 2026-02-16. El skill `content-strategy` fue implementado en `growth-foundations` (no en copywriting-engine como se planeó originalmente). Incluye Ski Slope, Topic Triangle, 3 workflows LATAM.

---

## Estadísticas Generales

| Métrica | Valor |
|---------|-------|
| Total de archivos (plugins/) | 122 |
| Archivos Markdown | 117 |
| Archivos JSON | 5 |
| Plugins | 5 |
| Skills | 18 |
| Commands | 12 |
| Agents | 7 |
| Frameworks | 32 |
| Templates | 25 |
| Pattern libraries | 17 |
| Examples | 6 |

### Desglose por Plugin

| Plugin | Skills | Commands | Agents | Frameworks | Templates | Patterns | Examples | Total archivos |
|--------|--------|----------|--------|------------|-----------|----------|----------|----------------|
| growth-foundations | 6 | 3 | 0 | 11 | 6 | 3 | 5 | 36 |
| sales-blueprint | 4 | 4 | 2 | 5 | 5 | 0 | 1 | 23 |
| copywriting-engine | 4 | 3 | 4 | 1 | 4 | 7 | 0 | 25 |
| dotcom-secrets | 4 | 2 | 1 | 12 | 10 | 7 | 1 | 39 |
| conversational-pm | 1 | 0 | 0 | 3 | 0 | 0 | 0 | 6 |
| **Total** | **18** | **12** | **7** | **32** | **25** | **17** | **6** | **122** |

---

## Nivel Raíz

| Archivo | Tipo | Propósito |
|---------|------|-----------|
| `README.md` | Docs | Overview del marketplace, instalación, lista de plugins |
| `CLAUDE.md` | Config | Instrucciones para Claude Code (arquitectura, convenciones) |
| `.claude-plugin/marketplace.json` | JSON | Manifiesto del marketplace (5 plugins registrados) |
| `.claude/settings.local.json` | JSON | Permisos locales |

---

## Plugin: growth-foundations (36 archivos)

### Configuración y Docs
| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto: name, version 1.0.0, description, author |
| `README.md` | 6 skills, 3 commands, triggers, instalación |

### Skill: icp-analysis
| Archivo | Propósito |
|---------|-----------|
| `skills/icp-analysis/SKILL.md` | Proceso de 5 pasos para análisis de ICP |
| `skills/icp-analysis/frameworks/interview-guide.md` | Guía de entrevistas para descubrimiento |
| `skills/icp-analysis/frameworks/scoring-model.md` | Modelo 0-100 con 5 categorías, ejemplo ACME |
| `skills/icp-analysis/templates/icp-worksheet.md` | Template interactivo para workshop |

### Skill: positioning
| Archivo | Propósito |
|---------|-----------|
| `skills/positioning/SKILL.md` | Proceso de 5 pasos para posicionamiento |
| `skills/positioning/frameworks/value-prop-canvas.md` | Value Proposition Canvas template |

### Skill: competitive-analysis
| Archivo | Propósito |
|---------|-----------|
| `skills/competitive-analysis/SKILL.md` | Proceso de 6 pasos (Five Forces + mapa) |
| `skills/competitive-analysis/frameworks/competitive-report-template.md` | Template de reporte competitivo |

### Skill: quiz-funnel
| Archivo | Propósito |
|---------|-----------|
| `skills/quiz-funnel/SKILL.md` | ASK Method + SPICED, 5 pasos, bucket scoring |
| `skills/quiz-funnel/frameworks/ask-method-fundamentals.md` | Core ASK Method: SMIQ, buckets, micro-compromisos, mapeo ASK↔SPICED |
| `skills/quiz-funnel/frameworks/bucket-identification.md` | 4 tipos de buckets, regla del 80%, checklist de validación |
| `skills/quiz-funnel/frameworks/question-design-framework.md` | 4 tipos de preguntas, reglas de diseño, 7 errores comunes |
| `skills/quiz-funnel/frameworks/lean-stress-test.md` | Plan de 4 fases por <$500: research → survey → build → paid |
| `skills/quiz-funnel/templates/quiz-blueprint-worksheet.md` | Template interactivo para workshop de quiz funnel |
| `skills/quiz-funnel/templates/deep-dive-survey-template.md` | Encuesta de 12 preguntas para identificar buckets |
| `skills/quiz-funnel/templates/bucket-scorecard.md` | Scorecard 0-100 con 5 criterios ponderados |
| `skills/quiz-funnel/patterns/quiz-question-library.md` | **ARCHIVO CLAVE**: 53 preguntas reutilizables por tipo |
| `skills/quiz-funnel/patterns/funnel-mechanics.md` | Flujos, email gates, outcome pages, métricas |
| `skills/quiz-funnel/examples/b2b-saas-quiz-example.md` | Caso SalesPro completo con métricas de stress test |

### Skill: content-strategy
| Archivo | Propósito |
|---------|-----------|
| `skills/content-strategy/SKILL.md` | Ski Slope + Topic Triangle, 4 pasos, workflows LATAM |
| `skills/content-strategy/frameworks/ski-slope-model.md` | Modelo Green Circle → Blue Square → Black Diamond |
| `skills/content-strategy/frameworks/topic-triangle.md` | Selección de temas por CPC × tráfico × revenue |
| `skills/content-strategy/frameworks/content-scaling-model.md` | Modelo de escalamiento de contenido |
| `skills/content-strategy/templates/topic-priority-worksheet.md` | Worksheet para priorizar temas |
| `skills/content-strategy/templates/aida-blog-post-template.md` | Template AIDA para blog posts |
| `skills/content-strategy/templates/red-packet-partnership-sop.md` | SOP para partnerships de distribución |
| `skills/content-strategy/patterns/content-difficulty-matrix.md` | Matriz de dificultad de contenido |
| `skills/content-strategy/examples/workflow-b2b-saas-latam.md` | Workflow B2B SaaS pagos/cobranza LATAM |
| `skills/content-strategy/examples/workflow-consulting-agency.md` | Workflow agencia de consultoría |
| `skills/content-strategy/examples/workflow-solo-creator-spanish.md` | Workflow creator individual en español |

### Commands
| Archivo | Propósito |
|---------|-----------|
| `commands/diagnostico.md` | Assessment ClarQ 4 dimensiones, heatmap, 0-40 |
| `commands/icp.md` | Workshop interactivo ICP, 6 fases |
| `commands/quiz.md` | Workshop interactivo Quiz Funnel, 8 fases |

---

## Plugin: sales-blueprint (23 archivos)

### Configuración y Docs
| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto: version 1.0.0 |
| `README.md` | 4 skills, 2 agents, 4 commands, metodología SPICED |

### Skill: discovery-mastery
| Archivo | Propósito |
|---------|-----------|
| `skills/discovery-mastery/SKILL.md` | ACE opening + SPICED diagnóstico + 7 Momentos |
| `skills/discovery-mastery/frameworks/spiced-framework.md` | **ARCHIVO CLAVE**: Guía completa SPICED scoring (5 dimensiones, 1-5 cada una, errores comunes) |
| `skills/discovery-mastery/frameworks/question-bank.md` | Banco de preguntas por industria/stakeholder |
| `skills/discovery-mastery/templates/call-prep.md` | Template de preparación pre-call |
| `skills/discovery-mastery/examples/discovery-example.md` | Ejemplo real: ACME Cybersecurity |

### Skill: pipeline-management
| Archivo | Propósito |
|---------|-----------|
| `skills/pipeline-management/SKILL.md` | Bowtie, 4 métricas core, health scoring |
| `skills/pipeline-management/frameworks/health-indicators.md` | Indicadores rojo/amarillo/verde por deal |
| `skills/pipeline-management/templates/pipeline-review.md` | Template de review |

### Skill: proposal-generation
| Archivo | Propósito |
|---------|-----------|
| `skills/proposal-generation/SKILL.md` | 8 secciones de propuesta, Trading Checklist 9 pasos, prerequisito SPICED >= 23 |
| `skills/proposal-generation/templates/enterprise-proposal.md` | Template enterprise |
| `skills/proposal-generation/templates/mid-market-proposal.md` | Template mid-market |

### Skill: coaching-cadence
| Archivo | Propósito |
|---------|-----------|
| `skills/coaching-cadence/SKILL.md` | REKS, 8 modelos, cadencia, feedback TOAST |
| `skills/coaching-cadence/frameworks/reks-framework.md` | **ARCHIVO CLAVE**: Guía completa REKS (árbol de decisión, scorecards, errores comunes) |
| `skills/coaching-cadence/frameworks/coaching-plays.md` | 8 modelos de coaching |
| `skills/coaching-cadence/templates/one-on-one-prep.md` | Template de prep 1:1 |

### Agents
| Archivo | Propósito |
|---------|-----------|
| `agents/sdr-agent.md` | 5 fases: Research → SPICED → Qualification → Outreach → Sequence |
| `agents/deal-strategist.md` | 5 fases: Intake → SPICED Crítico → Risk → Recommendations → MAP |

### Commands
| Archivo | Propósito |
|---------|-----------|
| `commands/discovery.md` | 6 fases interactivas para prep de discovery call |
| `commands/propuesta.md` | 6 fases para generación de propuesta B2B |
| `commands/pipeline.md` | 7 fases para review de pipeline |
| `commands/coaching.md` | 6 fases para prep de 1:1 coaching |

---

## Plugin: copywriting-engine (25 archivos)

### Configuración y Docs
| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto: version 1.0.0, datos de análisis |
| `README.md` | 4 skills, 3 commands, 4-agent architecture |

### Skill: headline-mastery
| Archivo | Propósito |
|---------|-----------|
| `skills/headline-mastery/SKILL.md` | Proceso de 6 pasos, target >7.5/10 |
| `skills/headline-mastery/patterns/power-headlines.md` | **ARCHIVO CLAVE**: 50 fórmulas en 10 categorías con ejemplos |
| `skills/headline-mastery/patterns/formulas.md` | Fórmulas adicionales |
| `skills/headline-mastery/patterns/intro-hook-formulas.md` | Fórmulas de intro hooks para artículos |

### Skill: email-sequences
| Archivo | Propósito |
|---------|-----------|
| `skills/email-sequences/SKILL.md` | Persuasion ladder de 7 emails, anatomía del email |
| `skills/email-sequences/templates/cold-outreach.md` | Template para primer contacto |
| `skills/email-sequences/templates/nurture.md` | Template para educación progresiva |
| `skills/email-sequences/templates/reactivation.md` | Template para reactivación |
| `skills/email-sequences/templates/900-word-sales-email.md` | Template de email de ventas largo (900 palabras) |

### Skill: landing-pages
| Archivo | Propósito |
|---------|-----------|
| `skills/landing-pages/SKILL.md` | Conversion ladder, 6 pasos de diseño |
| `skills/landing-pages/frameworks/conversion-architecture.md` | **ARCHIVO CLAVE**: Estructura 10 secciones con trigger mapping |

### Skill: psychological-triggers
| Archivo | Propósito |
|---------|-----------|
| `skills/psychological-triggers/SKILL.md` | Proceso de 6 pasos para aplicar triggers |
| `skills/psychological-triggers/patterns/trigger-library.md` | **ARCHIVO CLAVE**: 10 triggers con leverage, implementación, ética, combinaciones |
| `skills/psychological-triggers/patterns/present-pain-framework.md` | Framework de dolor presente como gatillo |
| `skills/psychological-triggers/patterns/three-brains-model.md` | Modelo de tres cerebros (reptiliano, límbico, neocortex) |
| `skills/landing-pages/patterns/isl-page-archetype.md` | Arquetipo de página ISL (Invisible Sales Letter) |

### Agents
| Archivo | Propósito |
|---------|-----------|
| `agents/research-agent.md` | Fase 1: inteligencia de mercado, quality gate |
| `agents/insight-agent.md` | Fase 2: análisis estratégico, patrones, gaps |
| `agents/ideation-agent.md` | Fase 3: conceptos creativos, evaluación, selección |
| `agents/copy-output-agent.md` | Fase 4: copy final, A/B, scoring, optimización |

### Commands
| Archivo | Propósito |
|---------|-----------|
| `commands/copy.md` | Orquesta pipeline completo de 4 agentes |
| `commands/headline.md` | Generación rápida de 10+ headlines, 7 pasos |
| `commands/email-sequence.md` | Constructor de secuencia 5-7 emails, 6 pasos |

---

## Plugin: dotcom-secrets (39 archivos)

### Configuración y Docs
| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto: version 1.0.0, DotCom Secrets B2B |
| `README.md` | 4 skills, 2 commands, 1 agent, frameworks branded ESCALA/FLUJO/Alma |

### Skill: escala
| Archivo | Propósito |
|---------|-----------|
| `skills/escala/SKILL.md` | Value ladder ESCALA de 4 niveles + RADAR discovery |
| `skills/escala/frameworks/escala-framework.md` | **ARCHIVO CLAVE**: Framework ESCALA completo con niveles, pricing, transiciones |
| `skills/escala/frameworks/product-funnel-fit.md` | Mapeo producto → funnel → tier ESCALA |
| `skills/escala/templates/escala-canvas.md` | Canvas interactivo para diseñar value ladder |
| `skills/escala/patterns/ltv-cac-calculator.md` | Calculadora LTV:CAC por tier |
| `skills/escala/examples/b2b-agency-escala.md` | Caso real: agencia B2B con 4 tiers |

### Skill: flujo
| Archivo | Propósito |
|---------|-----------|
| `skills/flujo/SKILL.md` | Funnel architecture FLUJO, 7 fases operativas |
| `skills/flujo/frameworks/seven-phases.md` | **ARCHIVO CLAVE**: Las 7 fases del funnel operativo |
| `skills/flujo/frameworks/traffic-types.md` | Tráfico frío, tibio, caliente — estrategias por tipo |
| `skills/flujo/frameworks/funnel-type-selector.md` | Selector de tipo de funnel según objetivo y audiencia |
| `skills/flujo/templates/funnel-architecture-canvas.md` | Canvas para diseñar arquitectura de funnel |
| `skills/flujo/patterns/latam-adaptations.md` | Adaptaciones específicas para mercado LATAM |
| `skills/flujo/patterns/conversion-benchmarks.md` | Benchmarks de conversión por tipo de funnel y fase |
| `skills/flujo/patterns/three-jabs-content-upgrades.md` | Content upgrades con estrategia Three Jabs |
| `skills/flujo/patterns/tofu-bofu-campaign-structure.md` | Estructura de campañas TOFU/BOFU |
| `skills/flujo/templates/micro-budget-ads-sop.md` | SOP de ads con micro-presupuesto |
| `skills/flujo/frameworks/isl-methodology.md` | Metodología ISL (Invisible Sales Letter) |

### Skill: alma
| Archivo | Propósito |
|---------|-----------|
| `skills/alma/SKILL.md` | Brand character + sistema de email IMAN |
| `skills/alma/frameworks/acf-10-steps.md` | **ARCHIVO CLAVE**: Attractive Character Framework en 10 pasos |
| `skills/alma/frameworks/iman-email-system.md` | Sistema IMAN: Soap Opera + Seinfeld sequences |
| `skills/alma/templates/acf-worksheet.md` | Worksheet para desarrollar Attractive Character |
| `skills/alma/templates/soap-opera-sequence.md` | Template de secuencia Soap Opera (5 emails narrativos) |
| `skills/alma/templates/seinfeld-sequence.md` | Template de secuencia Seinfeld (entretenimiento + valor) |
| `skills/alma/patterns/story-arc-library.md` | Biblioteca de arcos narrativos para storytelling |

### Skill: funnel-optimization
| Archivo | Propósito |
|---------|-----------|
| `skills/funnel-optimization/SKILL.md` | Optimización de funnels existentes |
| `skills/funnel-optimization/frameworks/funnel-health-dashboard.md` | Dashboard de salud del funnel |
| `skills/funnel-optimization/frameworks/optimization-cycle.md` | Ciclo de optimización continua |
| `skills/funnel-optimization/frameworks/scaling-strategy.md` | Estrategia de escalamiento post-optimización |
| `skills/funnel-optimization/templates/funnel-audit-report.md` | Template de auditoría de funnel |
| `skills/funnel-optimization/templates/90-day-action-plan.md` | Plan de acción a 90 días |
| `skills/funnel-optimization/patterns/ab-test-playbook.md` | Playbook de A/B testing para funnels |
| `skills/funnel-optimization/templates/operation-nowhere-to-hide-sop.md` | SOP Operation Nowhere to Hide |

### Agent
| Archivo | Propósito |
|---------|-----------|
| `agents/funnel-architect.md` | Agente especialista en diseño y optimización de funnels |

### Commands
| Archivo | Propósito |
|---------|-----------|
| `commands/escala.md` | Workshop interactivo para diseñar value ladder ESCALA |
| `commands/funnel-diagnosis.md` | Diagnóstico de funnel existente con recomendaciones |

---

## Plugin: conversational-pm (6 archivos)

### Configuración y Docs
| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto: version 1.0.0, PM conversacional |
| `README.md` | 1 skill, 5 agentes especialistas, modelo de irrigación |

### Skill: project-management
| Archivo | Propósito |
|---------|-----------|
| `skills/project-management/SKILL.md` | PM conversacional: SPICED discovery, despacho de 5 agentes, 5 fases |
| `skills/project-management/frameworks/agent-roster.md` | Catálogo de agentes: Architecture Plumber, Data Specialist, DB Architect, Implementation, Dashboard Builder |
| `skills/project-management/frameworks/architecture-patterns.md` | Patrones de arquitectura: pipelines, DBs (SQL vs Graph vs Hybrid), dashboards |
| `skills/project-management/frameworks/project-templates.md` | Templates para diferentes tipos de proyectos |

---

## Archivos Clave (Top 8)

Estos son los archivos más importantes del repositorio — los que concentran la mayor cantidad de conocimiento:

1. **`spiced-framework.md`** — La biblia de SPICED: scoring completo, errores comunes, tabla consolidada
2. **`trigger-library.md`** — Los 10 triggers psicológicos: leverage, implementación por canal, combinaciones, ética
3. **`power-headlines.md`** — 50 fórmulas de headlines en 10 categorías con ejemplos accionables
4. **`scoring-model.md`** — ICP scoring 0-100: 5 categorías, ejemplo real ACME
5. **`reks-framework.md`** — REKS completo: árbol de decisión, scorecards, soluciones por nivel
6. **`conversion-architecture.md`** — Estructura de 10 secciones para landing pages con trigger mapping
7. **`escala-framework.md`** — Value ladder ESCALA de 4 niveles, RADAR discovery, pricing B2B LATAM
8. **`agent-roster.md`** — Catálogo de 5 agentes especialistas del PM conversacional con inputs/outputs
