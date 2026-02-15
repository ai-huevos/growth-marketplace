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
growth-marketplace/
├── README.md                        ← Docs del marketplace
├── CLAUDE.md                        ← Instrucciones para Claude Code
├── .claude-plugin/
│   └── marketplace.json             ← Manifiesto del marketplace
├── plugins/
│   ├── growth-foundations/
│   │   ├── .claude-plugin/
│   │   │   └── plugin.json          ← Manifiesto del plugin
│   │   ├── README.md                ← Docs del plugin
│   │   ├── skills/
│   │   │   ├── icp-analysis/
│   │   │   │   ├── SKILL.md         ← Definición del skill
│   │   │   │   ├── frameworks/      ← Metodologías referenciadas
│   │   │   │   └── templates/       ← Templates de output
│   │   │   ├── positioning/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── frameworks/
│   │   │   └── competitive-analysis/
│   │   │       ├── SKILL.md
│   │   │       └── frameworks/
│   │   └── commands/
│   │       ├── icp.md               ← Definición del command /icp
│   │       └── diagnostico.md       ← Definición del command /diagnostico
│   ├── sales-blueprint/
│   │   ├── .claude-plugin/
│   │   │   └── plugin.json
│   │   ├── README.md
│   │   ├── skills/
│   │   │   ├── discovery-mastery/
│   │   │   │   ├── SKILL.md
│   │   │   │   ├── frameworks/
│   │   │   │   ├── templates/
│   │   │   │   └── examples/
│   │   │   ├── pipeline-management/
│   │   │   │   ├── SKILL.md
│   │   │   │   ├── frameworks/
│   │   │   │   └── templates/
│   │   │   ├── proposal-generation/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── templates/
│   │   │   └── coaching-cadence/
│   │   │       ├── SKILL.md
│   │   │       ├── frameworks/
│   │   │       └── templates/
│   │   ├── agents/
│   │   │   ├── sdr-agent.md
│   │   │   └── deal-strategist.md
│   │   └── commands/
│   │       ├── discovery.md
│   │       ├── propuesta.md
│   │       ├── pipeline.md
│   │       └── coaching.md
│   └── copywriting-engine/
│       ├── .claude-plugin/
│       │   └── plugin.json
│       ├── README.md
│       ├── skills/
│       │   ├── headline-mastery/
│       │   │   ├── SKILL.md
│       │   │   └── patterns/
│       │   ├── email-sequences/
│       │   │   ├── SKILL.md
│       │   │   └── templates/
│       │   ├── landing-pages/
│       │   │   ├── SKILL.md
│       │   │   └── frameworks/
│       │   └── psychological-triggers/
│       │       ├── SKILL.md
│       │       └── patterns/
│       ├── agents/
│       │   ├── research-agent.md
│       │   ├── insight-agent.md
│       │   ├── ideation-agent.md
│       │   └── copy-output-agent.md
│       └── commands/
│           ├── copy.md
│           ├── headline.md
│           └── email-sequence.md
└── docs/
    └── second-brain/                ← Documentación para NotebookLM
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

### Scoring Models
- ICP: 0-100 con tiers (80-100, 60-79, 40-59, 0-39)
- ClarQ: 0-40 con niveles (Fragile Giant, Growth Constrained, Growth Ready, Scaling)
- SPICED: 5-30 por oportunidad (No calificado, Nurture, Oportunidad activa)
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
- Deal Strategist: Intake → SPICED Crítico → Risk → Recommendations → MAP
