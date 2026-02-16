# Inventario Completo de Contenido

Mapa de cada archivo del repositorio con su propósito y relaciones.

---

## Estadísticas Generales

| Métrica | Valor |
|---------|-------|
| Total de archivos | 72 |
| Archivos Markdown | 70 |
| Archivos JSON | 2 |
| Plugins | 3 |
| Skills | 12 |
| Commands | 10 |
| Agents | 6 |
| Frameworks | 13 |
| Templates | 11 |
| Pattern libraries | 6 |
| Examples | 2 |

---

## Nivel Raíz

| Archivo | Tipo | Propósito |
|---------|------|-----------|
| `README.md` | Docs | Overview del marketplace, instalación, lista de plugins |
| `CLAUDE.md` | Config | Instrucciones para Claude Code (arquitectura, convenciones) |
| `.claude-plugin/marketplace.json` | JSON | Manifiesto del marketplace (3 plugins registrados) |
| `.claude/settings.local.json` | JSON | Permisos locales |

---

## Plugin: growth-foundations

### Configuración y Docs
| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto: name, version 1.0.0, description, author |
| `README.md` | 3 skills, 2 commands, triggers, instalación |

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

### Commands
| Archivo | Propósito |
|---------|-----------|
| `commands/diagnostico.md` | Assessment ClarQ 4 dimensiones, heatmap, 0-40 |
| `commands/icp.md` | Workshop interactivo ICP, 6 fases |
| `commands/quiz.md` | Workshop interactivo Quiz Funnel, 8 fases |

---

## Plugin: sales-blueprint

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

## Plugin: copywriting-engine

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

### Skill: email-sequences
| Archivo | Propósito |
|---------|-----------|
| `skills/email-sequences/SKILL.md` | Persuasion ladder de 7 emails, anatomía del email |
| `skills/email-sequences/templates/cold-outreach.md` | Template para primer contacto |
| `skills/email-sequences/templates/nurture.md` | Template para educación progresiva |
| `skills/email-sequences/templates/reactivation.md` | Template para reactivación |

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

## Archivos Clave (Top 6)

Estos son los archivos más importantes del repositorio — los que concentran la mayor cantidad de conocimiento:

1. **`spiced-framework.md`** — La biblia de SPICED: scoring completo, errores comunes, tabla consolidada
2. **`trigger-library.md`** — Los 10 triggers psicológicos: leverage, implementación por canal, combinaciones, ética
3. **`power-headlines.md`** — 50 fórmulas de headlines en 10 categorías con ejemplos accionables
4. **`scoring-model.md`** — ICP scoring 0-100: 5 categorías, ejemplo real ACME
5. **`reks-framework.md`** — REKS completo: árbol de decisión, scorecards, soluciones por nivel
6. **`conversion-architecture.md`** — Estructura de 10 secciones para landing pages con trigger mapping
