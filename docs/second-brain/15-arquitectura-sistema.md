# Arquitectura del Sistema

> Documento de referencia: arquitectura técnica completa del Growth Marketplace — cómo funciona internamente, cómo se conectan los componentes, y cómo Claude Code interpreta y ejecuta el contenido.

## Índice

1. [Visión General de la Arquitectura](#1-visión-general)
2. [Capa de Distribución](#2-capa-de-distribución)
3. [Capa de Plugins](#3-capa-de-plugins)
4. [Capa de Skills](#4-capa-de-skills)
5. [Capa de Comandos](#5-capa-de-comandos)
6. [Capa de Agentes](#6-capa-de-agentes)
7. [Sistema de Scoring](#7-sistema-de-scoring)
8. [Modelo de Datos](#8-modelo-de-datos)
9. [Patrones de Diseño](#9-patrones-de-diseño)
10. [Diagrama de Dependencias](#10-diagrama-de-dependencias)

---

## 1. Visión General

### Principio fundamental: Content-as-Code

El Growth Marketplace NO es software ejecutable. Es un **repositorio de contenido estructurado** que Claude Code interpreta como instrucciones. La "ejecución" sucede cuando Claude Code lee los archivos Markdown y sigue las instrucciones contenidas.

```
┌─────────────────────────────────────────────────────────────────────┐
│                        GROWTH MARKETPLACE                            │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐   │
│  │                    CAPA DE DISTRIBUCIÓN                        │   │
│  │  marketplace.json → Plugin Discovery → Install → Auto-update  │   │
│  └───────────────────────────────────────┬───────────────────────┘   │
│                                          │                           │
│  ┌───────────────────────────────────────▼───────────────────────┐   │
│  │                    CAPA DE PLUGINS                             │   │
│  │  plugin.json × 3 → Manifiesto + Metadata + Keywords          │   │
│  │  ┌──────────────┐ ┌──────────────┐ ┌───────────────────┐     │   │
│  │  │   growth-    │ │    sales-    │ │   copywriting-    │     │   │
│  │  │ foundations  │ │  blueprint   │ │     engine        │     │   │
│  │  └──────┬───────┘ └──────┬───────┘ └───────┬───────────┘     │   │
│  └─────────┼────────────────┼─────────────────┼─────────────────┘   │
│            │                │                 │                      │
│  ┌─────────▼────────────────▼─────────────────▼─────────────────┐   │
│  │                    CAPA DE SKILLS (11 total)                   │   │
│  │  SKILL.md → YAML Frontmatter → Triggers → Carga Progresiva  │   │
│  │  + frameworks/ + templates/ + patterns/ + examples/           │   │
│  └───────────────────────────────┬───────────────────────────────┘   │
│                                  │                                   │
│  ┌───────────────────────────────▼───────────────────────────────┐   │
│  │                    CAPA DE COMANDOS (9 total)                  │   │
│  │  command.md → YAML Frontmatter → $ARGUMENTS → Fases          │   │
│  │  Interactive workflows con quality gates                      │   │
│  └───────────────────────────────┬───────────────────────────────┘   │
│                                  │                                   │
│  ┌───────────────────────────────▼───────────────────────────────┐   │
│  │                    CAPA DE AGENTES (6 total)                   │   │
│  │  agent.md → Rol + Workflow + Tools + Outputs                  │   │
│  │  Patrón Diagnóstico→Acción  |  Patrón Pipeline Secuencial   │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐   │
│  │                    CAPA TRANSVERSAL: SPICED                    │   │
│  │  Situation · Pain · Impact · Critical Event · Decision        │   │
│  │  Conecta: Diagnóstico → Evaluación → Comunicación            │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Stack tecnológico

| Capa | Tecnología | Propósito |
|------|-----------|-----------|
| Runtime | Claude Code CLI | Interpreta Markdown como instrucciones |
| Contenido | Markdown + YAML frontmatter | Definición de skills, commands, agents |
| Configuración | JSON | plugin.json, marketplace.json |
| Distribución | GitHub + Plugin System | Discovery, install, auto-update |
| Formato | Open Standard (Agent Skills) | Compatibilidad cross-platform (12+ plataformas) |

---

## 2. Capa de Distribución

### marketplace.json (raíz del repo)

El archivo que Claude Code lee para descubrir qué plugins están disponibles.

```
.claude-plugin/marketplace.json
│
├── name: "growth-marketplace"
├── owner: { name, email }
├── metadata: { description, version, pluginRoot }
└── plugins: [
      {
        name: "growth-foundations",
        source: "./plugins/growth-foundations",
        version: "1.0.0",
        description: "...",
        keywords: [...],
        pricing: { model: "free" }
      },
      { name: "sales-blueprint", ... },
      { name: "copywriting-engine", ... }
    ]
```

### Flujo de distribución

```
GitHub Repo
    │
    ▼
/plugin marketplace add ai-huevos/growth-marketplace
    │
    ▼
Claude Code clona repo ──▶ Lee marketplace.json ──▶ Indexa plugins
    │
    ▼
/plugin discover ──▶ Lista plugins disponibles con metadata
    │
    ▼
/plugin install <plugin>@growth-marketplace
    │
    ▼
Lee plugin.json ──▶ Descubre skills/ y commands/ ──▶ Carga progresiva
    │
    ▼
Plugin activo: skills por trigger, commands por /
```

### Canales de distribución

```
┌─────────────────────────────────────────────────────────┐
│                  CANALES DE DISTRIBUCIÓN                  │
│                                                          │
│  ┌──────────────────┐  Primario                         │
│  │  GitHub Repos    │◀═══════════ growth-marketplace    │
│  │  (dominante)     │             vive aquí              │
│  └──────────────────┘                                   │
│                                                          │
│  ┌──────────────────┐  Agregador                        │
│  │  SkillsMP.com   │  200K+ skills, cross-platform     │
│  │  (agentskills)  │  Open standard compatible          │
│  └──────────────────┘                                   │
│                                                          │
│  ┌──────────────────┐  Comunidad                        │
│  │  claude-plugins  │  Registry comunitario              │
│  │  .dev            │                                    │
│  └──────────────────┘                                   │
│                                                          │
│  ┌──────────────────┐  Curado                           │
│  │  Official Dir.   │  29 plugins curados               │
│  │  (Anthropic)     │  Submission: clau.de/...          │
│  └──────────────────┘                                   │
│                                                          │
│  ┌──────────────────┐  Discovery                        │
│  │  Awesome Lists   │  awesome-claude-code               │
│  │  (GitHub)        │  awesome-claude-plugins            │
│  └──────────────────┘                                   │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Capa de Plugins

### Anatomía de un plugin

```
plugins/<nombre>/
├── .claude-plugin/
│   └── plugin.json          ← Identidad del plugin
├── README.md                ← Documentación pública (triggers, uso)
├── skills/                  ← Skills activados por keywords
│   └── <skill-name>/
│       ├── SKILL.md         ← Definición + YAML frontmatter
│       ├── frameworks/      ← Metodologías de referencia
│       ├── templates/       ← Plantillas de output
│       ├── patterns/        ← Bibliotecas de patrones
│       └── examples/        ← Ejemplos reales
├── commands/                ← Comandos invocados con /
│   └── <command>.md         ← Workflow interactivo
└── agents/                  ← Agentes autónomos
    └── <agent>.md           ← Rol + workflow + tools
```

### plugin.json (manifiesto)

Campos mínimos por diseño:

```json
{
  "name": "nombre-plugin",
  "version": "1.0.0",
  "description": "Descripción corta para discovery",
  "author": "AI Huevos <hola@huevos.ai>",
  "keywords": ["b2b", "sales", "spiced"]
}
```

Decisión de diseño: mantener manifiestos minimalistas. Keywords facilitan discovery. No hay campos de pricing, license, o dependencies porque es content-only.

### Inventario de plugins

| Plugin | Skills | Commands | Agents | Archivos totales |
|--------|--------|----------|--------|-----------------|
| growth-foundations | 3 | 2 | 0 | ~15 |
| sales-blueprint | 4 | 4 | 2 | ~25 |
| copywriting-engine | 4 | 3 | 4 | ~19 |
| **Total** | **11** | **9** | **6** | **~59** |

---

## 4. Capa de Skills

### Anatomía de un SKILL.md

```yaml
---
name: nombre-del-skill
description: >
  Descripción que contiene trigger keywords para activación automática.
  Ejemplo: "Análisis de Ideal Customer Profile con scoring SPICED"
version: 1.0.0
---

## Propósito
Qué hace este skill y cuándo se activa.

## Triggers
- keyword1, keyword2, keyword3

## Proceso
### Fase 1: ...
### Fase 2: ...

## Recursos
- `frameworks/archivo.md` — Para qué se usa
- `templates/archivo.md` — Cuándo se carga

## Output Esperado
Formato y estructura del resultado.
```

### Mecanismo de carga progresiva

```
Nivel 1: Plugin instalado
  → Solo name + description del YAML frontmatter
  → Mínimo consumo de contexto

Nivel 2: Keyword detectado
  → Carga completa del SKILL.md
  → Claude tiene instrucciones completas

Nivel 3: Ejecución activa
  → Carga recursos bajo demanda
  → frameworks/ cuando necesita metodología
  → templates/ cuando genera output
  → patterns/ cuando selecciona fórmulas
  → examples/ cuando necesita referencia
```

Este diseño es intencional: un plugin con 11 skills no consume contexto por los 11 — solo por el que se activa.

### Mapa de skills por plugin

```
growth-foundations/skills/
├── icp-analysis/          ← "ICP", "ideal customer profile"
│   ├── SKILL.md
│   ├── frameworks/
│   │   ├── interview-guide.md
│   │   └── scoring-model.md
│   └── templates/
│       └── icp-worksheet.md
├── positioning/           ← "posicionamiento", "propuesta de valor"
│   ├── SKILL.md
│   └── frameworks/
│       └── value-prop-canvas.md
└── competitive-analysis/  ← "análisis competitivo", "competidores"
    ├── SKILL.md
    └── frameworks/
        └── competitive-report-template.md

sales-blueprint/skills/
├── discovery-mastery/     ← "discovery call", "SPICED"
│   ├── SKILL.md
│   ├── frameworks/
│   │   ├── spiced-framework.md
│   │   └── question-bank.md
│   ├── templates/
│   │   └── call-prep.md
│   └── examples/
│       └── discovery-example.md
├── pipeline-management/   ← "pipeline review", "deal health"
│   ├── SKILL.md
│   ├── frameworks/
│   │   └── health-indicators.md
│   └── templates/
│       └── pipeline-review.md
├── proposal-generation/   ← "propuesta", "SOW"
│   ├── SKILL.md
│   └── templates/
│       ├── enterprise-proposal.md
│       └── mid-market-proposal.md
└── coaching-cadence/      ← "coaching", "1:1", "REKS"
    ├── SKILL.md
    ├── frameworks/
    │   └── coaching-plays.md
    └── templates/
        └── one-on-one-prep.md

copywriting-engine/skills/
├── headline-mastery/      ← "headline", "título", "subject line"
│   ├── SKILL.md
│   └── patterns/
│       ├── power-headlines.md
│       └── formulas.md
├── email-sequences/       ← "email sequence", "drip campaign"
│   ├── SKILL.md
│   └── templates/
│       ├── cold-outreach.md
│       ├── nurture.md
│       └── reactivation.md
├── landing-pages/         ← "landing page", "página de ventas"
│   ├── SKILL.md
│   └── frameworks/
│       └── conversion-architecture.md
└── psychological-triggers/ ← "trigger psicológico", "persuasion"
    ├── SKILL.md
    └── patterns/
        └── trigger-library.md
```

---

## 5. Capa de Comandos

### Anatomía de un command.md

```yaml
---
description: Qué hace el comando (aparece en /help)
argument-hint: "[empresa|deal|tipo]"
allowed-tools:
  - WebSearch
  - WebFetch
  - Read
---

Instrucciones completas del workflow interactivo.
Usa $ARGUMENTS como placeholder para input del usuario.
```

### Diferencia skill vs command

| Aspecto | Skill | Command |
|---------|-------|---------|
| Activación | Automática (keywords) | Manual (/) |
| Interactividad | Claude decide cuánto preguntar | Multi-fase con Q&A obligatorio |
| Scope | Responde a la conversación | Ejecuta workflow completo |
| Output | Variable según contexto | Estructurado y predefinido |
| Tools | Solo Read | WebSearch, WebFetch, Read |

### Mapa de comandos

```
growth-foundations/commands/
├── diagnostico.md     ← /diagnostico → ClarQ assessment (0-40)
└── icp.md             ← /icp → Workshop interactivo ICP

sales-blueprint/commands/
├── discovery.md       ← /discovery [empresa] → Pre-call brief
├── propuesta.md       ← /propuesta → Propuesta (gate: SPICED ≥ 23)
├── pipeline.md        ← /pipeline → Pipeline review + forecast
└── coaching.md        ← /coaching → REKS diagnostic + agenda

copywriting-engine/commands/
├── copy.md            ← /copy [brief] → Pipeline de 4 agentes
├── headline.md        ← /headline [contexto] → 12-15 titulares scoreados
└── email-sequence.md  ← /email-sequence [params] → Secuencia 5-7 emails
```

### Interacción entre commands y skills

Los commands referencian skills internamente:

```
/discovery → usa discovery-mastery/frameworks/question-bank.md
/propuesta → usa proposal-generation/templates/enterprise-proposal.md
/pipeline  → usa pipeline-management/frameworks/health-indicators.md
/copy      → orquesta los 4 agentes del copywriting-engine
/headline  → usa headline-mastery/patterns/formulas.md
```

---

## 6. Capa de Agentes

### Anatomía de un agent.md

```markdown
# Nombre del Agente

## Rol
Descripción del agente y su responsabilidad.

## Inputs
- input_1: descripción
- input_2: descripción

## Workflow
### Fase 1: Nombre
Instrucciones detalladas...

### Fase 2: Nombre
...

## Tools Disponibles
- WebSearch, WebFetch, Read, etc.

## Quality Gate
Criterios para validar el output antes de continuar.

## Output Esperado
Estructura del resultado.
```

### Los 2 patrones de agentes

#### Patrón A: Diagnóstico → Acción

Usado en **sales-blueprint**. El agente diagnostica una situación y genera acciones específicas.

```
INPUT (contexto)
    │
    ▼
DIAGNÓSTICO (SPICED, REKS, etc.)
    │
    ▼
CLASIFICACIÓN (Tier, Go/No-Go, etc.)
    │
    ▼
ACCIÓN (outreach, MAP, coaching plan)
```

Agentes:
- **SDR Agent**: Research → SPICED → Tier → Outreach package
- **Deal Strategist**: Intake → SPICED crítico → Risk → Go/No-Go → MAP

#### Patrón B: Pipeline Secuencial

Usado en **copywriting-engine**. 4 agentes encadenados donde cada uno consume el output del anterior.

```
Research Agent ──▶ Insight Agent ──▶ Ideation Agent ──▶ Copy Output Agent
(datos crudos)    (patrones)       (conceptos)        (copy final)
```

Cada transición tiene un **quality gate** que valida:
- Completitud del output
- Relevancia para el brief original
- Calidad mínima (scoring)

### Mapa de agentes

| Plugin | Agente | Patrón | Input | Output |
|--------|--------|--------|-------|--------|
| sales-blueprint | SDR Agent | Diagnóstico→Acción | Empresa target | Outreach 14 días |
| sales-blueprint | Deal Strategist | Diagnóstico→Acción | Deal en pipeline | Go/No-Go + MAP |
| copywriting-engine | Research Agent | Pipeline (1/4) | Brief + target | Market data |
| copywriting-engine | Insight Agent | Pipeline (2/4) | Market data | Strategic insights |
| copywriting-engine | Ideation Agent | Pipeline (3/4) | Insights | Top 2-3 conceptos |
| copywriting-engine | Copy Output Agent | Pipeline (4/4) | Conceptos | Copy final + A/B |

---

## 7. Sistema de Scoring

El marketplace usa scoring en múltiples niveles. Todos los modelos están documentados en `06-modelos-scoring.md`.

### Tabla unificada de scoring

```
┌─────────────────────────────────────────────────────────────────┐
│  MODELO          │ RANGO  │ TIERS / NIVELES                     │
│─────────────────────────────────────────────────────────────────│
│  ClarQ           │ 0-40   │ 0-15  Fragile Giant                │
│  (diagnóstico)   │        │ 16-25 Growth Constrained            │
│                  │        │ 26-32 Growth Ready                  │
│                  │        │ 33-40 Scaling                       │
│─────────────────────────────────────────────────────────────────│
│  ICP Score       │ 0-100  │ 0-39   No ICP (descalificado)      │
│  (segmentación)  │        │ 40-59  Tier 3 (bajo potencial)     │
│                  │        │ 60-79  Tier 2 (medio potencial)    │
│                  │        │ 80-100 Tier 1 (ideal)              │
│─────────────────────────────────────────────────────────────────│
│  SPICED          │ 5-30   │ 5-14   Rojo (no calificado)       │
│  (oportunidad)   │        │ 15-22  Amarillo (nurture)          │
│                  │        │ 23-30  Verde (oportunidad activa)  │
│─────────────────────────────────────────────────────────────────│
│  REKS            │ Árbol  │ Results → Effort → Knowledge →     │
│  (coaching)      │ decisión│ Skills (cualitativo)               │
│─────────────────────────────────────────────────────────────────│
│  Headlines       │ 0-10   │ <7.5 rechazar, ≥7.5 aceptar       │
│  (copy quality)  │        │ Pesos: Clarity 25%, Specificity    │
│                  │        │ 25%, Emotion 20%, Relevance 20%,   │
│                  │        │ Actionability 10%                   │
│─────────────────────────────────────────────────────────────────│
│  Triggers        │ 0-10   │ Leverage score por trigger          │
│  (persuasión)    │        │ 1-3 Sutil, 4-6 Moderado,           │
│                  │        │ 7-9 Intenso, 10 Extremo             │
│─────────────────────────────────────────────────────────────────│
│  Copy Quality    │ 0-10   │ Effectiveness 25%, Clarity 20%,    │
│  (output agent)  │        │ Persuasion 25%, Brand 15%,         │
│                  │        │ Technical 15%. Target: >7.5         │
└─────────────────────────────────────────────────────────────────┘
```

### Scoring como sistema de gates

Los scores no son solo métricas — funcionan como **gates** que controlan el flujo:

```
ClarQ < 16  →  "Fragile Giant" alert, recomienda acciones inmediatas
ICP < 40    →  No califica como target, descartado
SPICED < 23 →  /propuesta bloqueado ("completa discovery primero")
SPICED < 20 →  Deal Strategist: No-Go, no genera MAP
Headline < 7.5 → Rechazado, genera variaciones nuevas
```

---

## 8. Modelo de Datos

### Flujo de datos entre componentes

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│  marketplace │────▶│  plugin.json │────▶│   SKILL.md   │
│     .json    │     │  (identidad) │     │  (instrucción)│
│              │     │              │     │              │
│  Qué plugins │     │  Nombre,     │     │  Triggers,   │
│  existen     │     │  version,    │     │  proceso,    │
│              │     │  keywords    │     │  output      │
└─────────────┘     └──────────────┘     └──────┬───────┘
                                                │
                    ┌───────────────────────────┼───────────────┐
                    │                           │               │
                    ▼                           ▼               ▼
             ┌──────────┐              ┌──────────┐     ┌──────────┐
             │frameworks│              │templates │     │patterns  │
             │          │              │          │     │          │
             │Metodología│              │Estructura│     │Fórmulas  │
             │de referenc│              │de output │     │y datos   │
             └──────────┘              └──────────┘     └──────────┘
```

### Tipos de archivos y su rol

| Tipo | Ubicación | Formato | Rol en el sistema |
|------|-----------|---------|-------------------|
| Marketplace manifest | `.claude-plugin/marketplace.json` | JSON | Discovery y catálogo de plugins |
| Plugin manifest | `plugins/*/. claude-plugin/plugin.json` | JSON | Identidad y metadata del plugin |
| Skill definition | `skills/*/SKILL.md` | Markdown + YAML | Instrucciones de ejecución + triggers |
| Command definition | `commands/*.md` | Markdown + YAML | Workflow interactivo multi-fase |
| Agent definition | `agents/*.md` | Markdown | Rol + workflow + tools + output |
| Framework | `frameworks/*.md` | Markdown | Metodología de referencia (Porter, SPICED, etc.) |
| Template | `templates/*.md` | Markdown | Estructura de output (propuestas, reviews) |
| Pattern | `patterns/*.md` | Markdown | Datos y fórmulas (headlines, triggers) |
| Example | `examples/*.md` | Markdown | Casos reales para referencia |
| README | `README.md` | Markdown | Documentación pública del plugin |

### Referencias entre archivos

Las referencias son siempre **rutas relativas** dentro del skill:

```
skills/icp-analysis/SKILL.md
  → Lee: frameworks/scoring-model.md       (mismo directorio)
  → Lee: templates/icp-worksheet.md        (mismo directorio)

commands/discovery.md
  → Referencia: skills/discovery-mastery/   (dentro del plugin)
  → Lee: frameworks/question-bank.md       (del skill)

commands/copy.md
  → Orquesta: agents/research-agent.md     (dentro del plugin)
  → Orquesta: agents/insight-agent.md
  → Orquesta: agents/ideation-agent.md
  → Orquesta: agents/copy-output-agent.md
```

---

## 9. Patrones de Diseño

### Patrón 1: Skill + Framework + Template

El patrón más común. Un skill define QUÉ hacer, un framework define CÓMO hacerlo, un template define el formato del OUTPUT.

```
SKILL.md (instrucciones)
    │
    ├──▶ frameworks/*.md (metodología)
    │    "Usa el scoring model SPICED con 5 dimensiones..."
    │
    └──▶ templates/*.md (estructura de output)
         "Genera el documento con esta estructura..."
```

**Ejemplo**: `icp-analysis`
- SKILL.md: "Ejecuta 5 fases de análisis ICP"
- `frameworks/scoring-model.md`: Pesos y criterios de scoring
- `templates/icp-worksheet.md`: Estructura del documento final

### Patrón 2: Command → Interactive Workflow

Los comandos son workflows multi-fase con interacción obligatoria.

```
COMMAND.md
    │
    ├── Fase 1: Intake (preguntas al usuario)
    │     └── Espera respuesta
    │
    ├── Fase 2: Procesamiento (usa frameworks/tools)
    │     └── Puede usar WebSearch, WebFetch
    │
    ├── Fase 3: Validación (muestra al usuario)
    │     └── Espera confirmación/ajustes
    │
    └── Fase N: Output (formato estructurado)
          └── Entrega resultado final
```

**Principio clave**: Los comandos NUNCA son batch. Siempre hay interacción humana.

### Patrón 3: Agent Pipeline

Pipeline secuencial con quality gates.

```
Agent 1 ──[quality gate]──▶ Agent 2 ──[quality gate]──▶ Agent N
  │                           │                           │
  └── inputs definidos        └── inputs = outputs A1     └── output final
  └── proceso multi-paso      └── proceso multi-paso      └── scoring
  └── outputs estructurados   └── outputs estructurados   └── variaciones
```

**Implementación**: Solo `copywriting-engine` usa este patrón actualmente.

### Patrón 4: Diagnóstico → Acción

Agente que diagnostica con un framework y genera acciones basadas en el resultado.

```
INPUT ──▶ DIAGNÓSTICO ──▶ CLASIFICACIÓN ──▶ ACCIÓN
          (SPICED,         (Tier, Score,     (Outreach,
           REKS,            Go/No-Go)         MAP,
           ClarQ)                             Coaching)
```

**Implementación**: SDR Agent y Deal Strategist en `sales-blueprint`.

### Patrón 5: Score-as-Gate

Los scores no son solo métricas — controlan el flujo de ejecución.

```
if score < threshold:
    BLOQUEAR y redirigir al paso anterior
else:
    CONTINUAR al siguiente paso
```

**Implementaciones**:
- SPICED < 23 → `/propuesta` bloqueado
- SPICED < 20 → Deal Strategist: No-Go
- Headline < 7.5 → Rechazado, iterar
- SDR Tier assignment → Nivel de esfuerzo en outreach

### Patrón 6: SPICED como Lingua Franca

SPICED no es solo un framework de un plugin — es el **lenguaje compartido** entre los 3 plugins.

```
growth-foundations:  SPICED para DIAGNOSTICAR (ICP, ClarQ)
sales-blueprint:    SPICED para EVALUAR (discovery, pipeline, proposals)
copywriting-engine: SPICED para COMUNICAR (pains → copy, impact → urgency)
```

---

## 10. Diagrama de Dependencias

### Dependencias entre plugins

```
                    ┌─────────────────────┐
                    │  growth-foundations  │
                    │  (DIAGNÓSTICO)       │
                    │                     │
                    │  ClarQ → gaps       │
                    │  ICP → targets      │
                    │  Positioning → msg  │
                    └────────┬────────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              │              ▼
┌─────────────────────┐     │  ┌──────────────────────┐
│  sales-blueprint    │     │  │  copywriting-engine   │
│  (EVALUACIÓN)       │     │  │  (COMUNICACIÓN)       │
│                     │     │  │                       │
│  Discovery → SPICED │     │  │  Research → Insights  │
│  Pipeline → Health  │     │  │  → Ideation → Copy   │
│  Proposal → Close   │     │  │                       │
│  Coaching → Grow    │     │  │  Usa pains del ICP/   │
└─────────────────────┘     │  │  SPICED para persuadir│
              │              │  └──────────────────────┘
              │              │              ▲
              └──────────────┼──────────────┘
                             │
                    ┌────────▼────────────┐
                    │      SPICED         │
                    │  (Hilo conductor)    │
                    │                     │
                    │  S: Situación       │
                    │  P: Pain            │
                    │  I: Impacto         │
                    │  C: Critical Event  │
                    │  D: Decisión        │
                    └─────────────────────┘
```

### Dependencia funcional (no técnica)

Los plugins son **independientes técnicamente** — se instalan por separado y funcionan solos. Pero son **complementarios funcionalmente**:

- `growth-foundations` funciona solo (diagnóstico básico)
- `sales-blueprint` funciona solo, pero es MÁS POTENTE con ICP de `growth-foundations`
- `copywriting-engine` funciona solo, pero es MÁS PERSUASIVO con pains del SPICED

### Dependencia de recursos (intra-plugin)

```
commands/ ──referencia──▶ skills/frameworks/
commands/ ──referencia──▶ skills/templates/
commands/ ──orquesta───▶ agents/
agents/   ──referencia──▶ skills/patterns/
skills/   ──referencia──▶ frameworks/, templates/, patterns/
```

Nunca hay referencias CROSS-PLUGIN a nivel de archivos. La conexión cross-plugin es conceptual (SPICED como lenguaje compartido), no técnica.

---

## Documentos relacionados

- `01-arquitectura-convenciones.md` — Convenciones de archivos y estructura
- `02-metodologia-spiced.md` — SPICED framework en detalle
- `06-modelos-scoring.md` — Todos los modelos de scoring
- `07-sistema-agentes.md` — Workflows de agentes con diagramas ASCII
- `13-distribucion-plugins-claude-code.md` — Distribución y marketplace
- `14-flujos-usuario.md` — User flows completos
