# Arquitectura del Sistema y Convenciones

## Naturaleza del Repositorio

Este es un **repositorio solo de contenido**. No hay:
- Build system
- Tests
- Dependencias de Node/Python
- Código ejecutable

Todo el contenido son archivos Markdown con YAML frontmatter y archivos JSON de configuración. La "ejecución" la hace Claude Code al interpretar estos archivos como instrucciones.

## Estructura de Directorios

```
growth-marketplace/                          ← 5 plugins, 18 skills, 7 agentes, 127+ archivos
├── README.md                        ← Docs del marketplace
├── CLAUDE.md                        ← Instrucciones para Claude Code
├── .claude-plugin/
│   └── marketplace.json             ← Manifiesto del marketplace
├── plugins/
│   ├── growth-foundations/          ← Diagnóstico + estrategia (gratuito, punto de entrada)
│   │   ├── .claude-plugin/plugin.json
│   │   ├── README.md
│   │   ├── skills/
│   │   │   ├── icp-analysis/        ← ICP scoring basado en PULSO
│   │   │   ├── positioning/         ← Value Proposition Canvas
│   │   │   ├── competitive-analysis/ ← Five Forces + mapa competitivo
│   │   │   ├── quiz-funnel/         ← Metodología SONDA adaptada a B2B
│   │   │   └── content-strategy/    ← Ski Slope + Topic Triangle
│   │   └── commands/
│   │       ├── diagnostico.md       ← /diagnostico (ClarQ assessment)
│   │       ├── icp.md               ← /icp (workshop interactivo)
│   │       └── quiz.md              ← /quiz (diseño de quiz funnel)
│   ├── sales-blueprint/             ← Ejecución de ventas B2B
│   │   ├── .claude-plugin/plugin.json
│   │   ├── README.md
│   │   ├── skills/
│   │   │   ├── discovery-mastery/   ← PULSO discovery framework
│   │   │   ├── pipeline-management/ ← Gestión de pipeline por PULSO score
│   │   │   ├── proposal-generation/ ← Propuestas (requiere PULSO >= 23)
│   │   │   └── coaching-cadence/    ← REKS → PULSO coaching
│   │   ├── agents/
│   │   │   ├── sdr-agent.md         ← Prospecting + qualification
│   │   │   └── deal-strategist.md   ← Análisis crítico de deals
│   │   └── commands/
│   │       ├── discovery.md
│   │       ├── propuesta.md
│   │       ├── pipeline.md
│   │       └── coaching.md
│   ├── copywriting-engine/          ← Copy de conversión basado en datos
│   │   ├── .claude-plugin/plugin.json
│   │   ├── README.md
│   │   ├── skills/
│   │   │   ├── headline-mastery/    ← 50 fórmulas validadas por datos
│   │   │   ├── email-sequences/     ← Templates de email
│   │   │   ├── landing-pages/       ← Arquitectura de conversión
│   │   │   └── psychological-triggers/ ← 4,129 triggers analizados
│   │   ├── agents/                  ← Pipeline secuencial de 4 agentes
│   │   │   ├── research-agent.md
│   │   │   ├── insight-agent.md
│   │   │   ├── ideation-agent.md
│   │   │   └── copy-output-agent.md
│   │   └── commands/
│   │       ├── copy.md              ← Orquesta el pipeline de 4 agentes
│   │       ├── headline.md
│   │       └── email-sequence.md
│   ├── motor-de-ofertas/              ← Funnels + value ladders (ESCALA/FLUJO/Alma)
│   │   ├── .claude-plugin/plugin.json
│   │   ├── README.md
│   │   ├── skills/
│   │   │   ├── escala/              ← Value ladder de 4 tiers
│   │   │   ├── flujo/               ← 7 fases de conversión
│   │   │   ├── alma/                ← Attractive Character + email strategy
│   │   │   └── funnel-optimization/ ← Diagnóstico + optimización de funnels
│   │   ├── agents/
│   │   │   └── funnel-architect.md  ← Workshop guiado de diseño de funnel
│   │   └── commands/
│   │       ├── escala.md
│   │       └── funnel-diagnosis.md
│   └── conversational-pm/          ← Orquestación de proyectos B2B
│       ├── .claude-plugin/plugin.json
│       ├── README.md
│       └── skills/
│           └── project-management/  ← PM agent con roster de 5 especialistas
├── tools/                           ← Meta-herramientas (no son plugins)
│   ├── plugin-factory/              ← Genera plugins desde repos existentes
│   └── ingestion-orchestrator/      ← Triage de contenido entrante
└── docs/
    ├── second-brain/                ← 22 docs para NotebookLM
    ├── artifacts/                   ← Outputs de NotebookLM (PNG, CSV, JSON)
    ├── template-catalog.md          ← Índice de 25 templates
    └── execution-log.md             ← Trace log de ejecuciones
```

## Anatomía de un Plugin

### Plugin Manifest (`.claude-plugin/plugin.json`)

Campos mínimos:
```json
{
  "name": "nombre-del-plugin",
  "version": "1.0.0",
  "description": "Descripción corta en español",
  "author": "AI Huevos"
}
```

### SKILL.md — Definición de Skill

Estructura con YAML frontmatter:
```yaml
---
name: nombre-del-skill
description: Descripción del skill
version: 1.0.0
---
```

El body contiene:
- Proceso paso a paso (fases numeradas)
- Referencias a `frameworks/`, `templates/`, `patterns/` via rutas relativas
- Criterios de calidad/scoring
- Outputs esperados

### Commands (.md) — Definición de Comando

YAML frontmatter:
```yaml
---
description: Qué hace el comando
argument-hint: <placeholder para argumentos>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---
```

El body usa `$ARGUMENTS` como placeholder para el input del usuario.

### Agent Files (.md) — Definición de Agente

Estructura fija:
1. **Rol**: Quién es el agente
2. **Workflow**: Fases del proceso
3. **Tools Disponibles**: Qué herramientas puede usar
4. **Output**: Qué produce

## Convenciones del Contenido

### Idioma
- **Spanish-first**. Todo contenido nuevo se crea en español.
- Multi-language en roadmap (Phase 2: inglés, portugués).

### Triggers
- Los skills documentan sus triggers en el README.md del plugin
- Formato: `**Triggers**: "keyword1", "keyword2", "keyword3"`
- Claude usa estos keywords para activar skills automáticamente

### Cross-References
- Skills referencian sus propios subdirectorios via rutas relativas
- Commands referencian agents y skills del mismo plugin
- El plugin `sales-blueprint` es especialmente interconnectado: discovery → pipeline → proposals → coaching
- `motor-de-ofertas` tiene cross-references internas fuertes: escala ↔ flujo ↔ alma, orquestados por funnel-architect
- `conversational-pm` usa PULSO para project discovery, conectándose con sales-blueprint

### Scoring Models
- ICP: 0-100 con tiers (80-100, 60-79, 40-59, 0-39)
- ClarQ: 0-40 con niveles (Fragile Giant, Growth Constrained, Growth Ready, Scaling)
- PULSO: 5-30 por oportunidad (No calificado, Nurture, Oportunidad activa)
- REKS: Diagnóstico cualitativo (Results → Effort → Knowledge → Skills)

### Formatos de Output
- Tablas Markdown para scoring y comparaciones
- ASCII art para heatmaps (ClarQ)
- Templates estructurados con placeholders
- Checklists con [ ] para validación

## Git Workflow

- **Branch principal**: `main`
- **Branch de desarrollo**: `development`
- Feature branches → merge a `development` → merge a `main`
- Todo el contenido del marketplace se versiona en git

## Patrones de Diseño

### Patrón: Skill + Framework + Template
Cada skill combina:
1. **SKILL.md**: El "cómo" (proceso)
2. **frameworks/**: El "qué" (metodología de referencia)
3. **templates/**: El "output" (estructura del entregable)
4. **patterns/**: El "con qué" (bibliotecas de fórmulas/triggers)
5. **examples/**: El "así se ve" (casos reales)

### Patrón: Command → Interactive Workflow
Los commands no son simples instrucciones — son workflows interactivos multi-fase que:
1. Reciben input del usuario via `$ARGUMENTS`
2. Investigan si es necesario (WebSearch, WebFetch)
3. Guían al usuario por un proceso paso a paso
4. Producen un output estructurado

### Patrón: Agent Pipeline (copywriting-engine)
4 agentes secuenciales donde el output de uno es input del siguiente:
```
Research Agent → Insight Agent → Ideation Agent → Copy Output Agent
```
Cada agente tiene un Quality Gate que debe pasar antes de avanzar.

### Patrón: Diagnostic → Action (sales-blueprint)
Los agentes de sales no solo analizan — recomiendan acciones:
- SDR Agent: Research → Score → Outreach Package
- Deal Strategist: Intake → PULSO Crítico → Risk → Recommendations → MAP
