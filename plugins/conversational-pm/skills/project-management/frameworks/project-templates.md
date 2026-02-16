# Project Templates — Templates de proyectos para la PM

Templates pre-definidos para los tipos de proyecto mas comunes. La PM selecciona el template basado en la clasificacion del Fase 2.

---

## Template 1: Data Pipeline Simple

**Cuando usar**: 1-2 fuentes, datos tabulares, necesidad de report/dashboard basico.

### Estructura del proyecto

```
project-name/
├── README.md                    ← Overview, setup, usage
├── .env.example                 ← Variables de entorno (sin secrets)
├── config/
│   └── sources.yaml             ← Configuracion de fuentes de datos
├── extractors/
│   ├── __init__.py
│   └── [source_name].py         ← Un extractor por fuente
├── transformers/
│   ├── __init__.py
│   └── [transform_name].py      ← Transformaciones de negocio
├── loaders/
│   ├── __init__.py
│   └── [destination].py         ← Loaders a DB
├── models/
│   └── schema.sql               ← DDL de la base de datos
├── queries/
│   └── dashboard_queries.sql    ← Queries para el dashboard
├── pipeline.py                  ← Orchestrador del pipeline
├── requirements.txt             ← Dependencies
└── tests/
    └── test_transforms.py       ← Tests de transformaciones
```

### Checklist de entrega

- [ ] Pipeline extrae datos de todas las fuentes
- [ ] Transformaciones aplican reglas de negocio correctamente
- [ ] Datos cargados en DB con schema correcto
- [ ] Queries del dashboard probados con datos reales
- [ ] .env.example documentado (sin secrets)
- [ ] README con instrucciones de setup y ejecucion
- [ ] Tests de transformaciones pasando

---

## Template 2: Growth Intelligence System (Full Stack)

**Cuando usar**: Multiples fuentes, hybrid DB, dashboards 3 niveles, posible agent layer.

### Estructura del proyecto

```
growth-intelligence/
├── README.md
├── .env.example
├── docker-compose.yml           ← Stack local: PG + Neo4j + API
├── docs/
│   ├── architecture.md          ← Diagrama + ADRs
│   ├── data-model.md            ← Entidades + relaciones
│   └── runbook.md               ← Operaciones, troubleshooting
├── infrastructure/
│   ├── postgres/
│   │   ├── init.sql             ← Schema inicial
│   │   └── migrations/          ← Migraciones incrementales
│   └── neo4j/
│       └── constraints.cypher   ← Constraints + indices
├── pipeline/
│   ├── config/
│   │   └── sources.yaml
│   ├── extractors/
│   ├── transformers/
│   ├── loaders/
│   │   ├── postgres_loader.py
│   │   └── neo4j_loader.py
│   ├── sync/
│   │   └── pg_to_neo4j.py       ← Sync relacional → grafo
│   └── orchestrator.py
├── api/
│   ├── app.py                   ← API server (FastAPI)
│   ├── routes/
│   │   ├── metrics.py           ← Endpoints de metricas (PG)
│   │   ├── relationships.py     ← Endpoints de relaciones (Neo4j)
│   │   └── health.py            ← Health check
│   ├── auth/
│   │   └── middleware.py        ← Authentication
│   └── schemas/
│       └── responses.py         ← Response models
├── dashboards/
│   ├── gm/                      ← Dashboard ejecutivo
│   ├── manager/                 ← Dashboard operativo
│   └── implementor/             ← Dashboard tactico
├── agents/                      ← Conversational agent layer (si aplica)
│   ├── query_agent.py
│   └── backlog_agent.py
├── tests/
│   ├── test_pipeline.py
│   ├── test_api.py
│   └── test_queries.py
└── requirements.txt
```

### Checklist de entrega

- [ ] Docker-compose levanta todo el stack local
- [ ] Pipeline completo: extract → transform → load (PG + Neo4j)
- [ ] API funcional con auth, documentacion OpenAPI
- [ ] Dashboard GM: health score + KPIs en una pantalla
- [ ] Dashboard Manager: filtrable por equipo/periodo
- [ ] Dashboard Implementor: backlog priorizado
- [ ] Architecture doc con diagramas y ADRs
- [ ] Runbook con troubleshooting comun
- [ ] Tests pasando (pipeline + API + queries)
- [ ] No secrets en codigo, .env.example completo
- [ ] README con quick start guide

---

## Template 3: Framework Plugin (via Plugin Factory)

**Cuando usar**: El proyecto produce frameworks reutilizables que se pueden empaquetar como plugin del marketplace.

### Estructura del plugin

```
plugins/[plugin-name]/
├── .claude-plugin/
│   └── plugin.json
├── README.md
├── skills/
│   └── [skill-name]/
│       ├── SKILL.md
│       ├── frameworks/
│       │   └── [framework].md
│       ├── templates/
│       │   └── [template].md
│       └── patterns/
│           └── [patterns].md
├── commands/
│   └── [command].md
└── agents/
    └── [agent].md
```

### Checklist de entrega

- [ ] Plugin.json con todos los campos requeridos
- [ ] SKILL.md con YAML frontmatter y triggers
- [ ] Commands con $ARGUMENTS y fases interactivas
- [ ] Agents con Proposito, Inputs, Protocolo, Outputs, Quality Gate
- [ ] README con skills, commands, triggers, instalacion
- [ ] Todo en espanol (excepto YAML descriptions)
- [ ] Cross-references con paths relativos correctos

---

## Template 4: Custom Agent

**Cuando usar**: El usuario necesita un agente especializado para un proceso especifico.

### Estructura del skill

```
~/.claude/skills/[agent-name]/
├── SKILL.md                     ← Definicion del agente con YAML frontmatter
└── references/
    ├── [context-1].md           ← Conocimiento de dominio
    ├── [context-2].md           ← Patrones y heuristicas
    └── [templates].md           ← Templates de output
```

### Checklist de entrega

- [ ] SKILL.md con YAML frontmatter (name, description con triggers)
- [ ] Workflow interactivo con checkpoints de usuario
- [ ] Referencias con el conocimiento de dominio necesario
- [ ] Templates de output bien definidos
- [ ] Probado con al menos 1 caso real

---

## Estimation Guide

La PM usa esta guia para estimar esfuerzo de cada tipo de proyecto:

| Template | Agentes involucrados | Archivos a generar | Esfuerzo relativo |
|----------|---------------------|-------------------|-------------------|
| Data Pipeline Simple | Data Specialist + Implementation | ~10-15 | Bajo |
| Growth Intelligence Full | Todos los 5 agentes | ~30-50 | Alto |
| Framework Plugin | Plugin Factory | ~5-15 | Medio |
| Custom Agent | PM directamente | ~3-5 | Bajo |

**Nota**: La PM nunca da estimaciones de tiempo al usuario. Solo comunica complejidad relativa y fases.
