# Agent Roster — Especialistas de la PM

Catalogo de agentes especialistas que la PM puede despachar. Cada agente tiene un rol definido, inputs requeridos, outputs esperados, y herramientas que usa.

---

## 1. Architecture Plumber

**Rol**: Disena la infraestructura del sistema. Define que plataforma, que servicios, como se conectan.

**Analogia**: El fontanero que traza las tuberias antes de que fluya el agua.

**Cuando despacharlo**:
- Proyecto nuevo que necesita infraestructura
- Migracion de un sistema a otro
- Integracion de multiples servicios
- Evaluacion de plataforma (cloud, on-prem, hybrid)

**Inputs requeridos**:

| Input | Descripcion | Fuente |
|-------|-------------|--------|
| `project_brief` | Resumen del proyecto (del descubrimiento SPICED) | PM |
| `data_sources` | Lista de fuentes de datos a conectar | PM / Usuario |
| `scale_requirements` | Volumen de datos, usuarios concurrentes, SLAs | PM |
| `budget_constraints` | Limites de costo (infra, herramientas, licencias) | Usuario |
| `existing_stack` | Herramientas y servicios que ya se usan | Usuario |

**Protocolo de ejecucion**:

1. **Evaluar opciones de plataforma**:
   - Cloud providers (AWS, GCP, Azure) vs self-hosted
   - Managed services vs custom deployment
   - Serverless vs containers vs VMs
   - Considerar: costo, complejidad operacional, escalabilidad, vendor lock-in

2. **Disenar diagrama de arquitectura**:
   - Componentes del sistema y sus conexiones
   - Flujo de datos entre componentes
   - Puntos de fallo y redundancia
   - Seguridad en cada capa (auth, encryption, network)

3. **Definir stack tecnologico**:
   - Lenguaje(s) de programacion
   - Frameworks y librerias
   - Bases de datos (ver decision matrix en architecture_patterns.md)
   - Message queues, caches, CDNs si aplica

4. **Producir Architecture Decision Records (ADRs)**:
   - Para cada decision significativa: contexto, opciones, decision, consecuencias

**Outputs**:

| Output | Formato | Destino |
|--------|---------|---------|
| `architecture_diagram` | Diagrama Mermaid o ASCII | PM → Usuario |
| `tech_stack_spec` | Tabla de componentes con justificacion | Data Specialist, Implementation Agent |
| `adrs` | Architecture Decision Records | PM → Second Brain |
| `security_plan` | Requisitos de seguridad por capa | Implementation Agent |

**Herramientas que usa**: Read, Glob, Grep, WebSearch, WebFetch, Mermaid (si disponible)

**Quality Gate**: Arquitectura revisada por PM. No avanzar si hay gaps de seguridad o vendor lock-in excesivo.

---

## 2. Data Specialist

**Rol**: Disena el flujo de datos. Define como se extraen, transforman, y cargan los datos (ETL/ELT).

**Analogia**: El ingeniero hidraulico que define el caudal, la presion, y los filtros del agua.

**Cuando despacharlo**:
- Hay multiples fuentes de datos que conectar
- Se necesitan transformaciones (limpiar, enrichir, agregar)
- Se requiere un pipeline de datos automatizado
- Los datos raw necesitan estructura antes de ser utiles

**Inputs requeridos**:

| Input | Descripcion | Fuente |
|-------|-------------|--------|
| `architecture_spec` | Diagrama y stack tecnologico | Architecture Plumber |
| `data_sources` | Detalle de cada fuente (API, CSV, DB, scraping) | PM / Usuario |
| `data_schema` | Estructura esperada de los datos (si existe) | Usuario |
| `transformation_rules` | Reglas de negocio para transformar datos | PM / Usuario |
| `refresh_frequency` | Cada cuanto se actualizan los datos | PM |

**Protocolo de ejecucion**:

1. **Inventariar fuentes de datos**:
   - Tipo (API REST, GraphQL, CSV, database, webhook, scraping)
   - Formato (JSON, XML, CSV, Parquet)
   - Autenticacion (API key, OAuth, credentials)
   - Frecuencia de actualizacion
   - Volumen estimado

2. **Disenar pipeline ETL/ELT**:
   - Extract: como obtener datos de cada fuente
   - Transform: limpieza, normalizacion, enrichment, agregaciones
   - Load: donde depositar los datos procesados
   - Scheduling: frecuencia de ejecucion, triggers, retries

3. **Definir data quality rules**:
   - Validaciones de esquema
   - Null handling
   - Deduplicacion
   - Anomaly detection (valores fuera de rango)

4. **Disenar data model**:
   - Entidades principales y relaciones
   - Granularidad de los datos
   - Dimensiones vs metricas (si es para analytics)
   - Partitioning strategy

**Outputs**:

| Output | Formato | Destino |
|--------|---------|---------|
| `data_inventory` | Tabla de fuentes con metadata | PM |
| `pipeline_design` | Diagrama de flujo ETL + specs | Implementation Agent |
| `data_model` | Schema de entidades + relaciones | Database Architect |
| `quality_rules` | Lista de validaciones | Implementation Agent |

**Herramientas que usa**: Read, Glob, Grep, WebSearch, WebFetch, Bash (para probar APIs)

**Quality Gate**: Pipeline design revisado por PM. Cada fuente tiene un plan de extraccion concreto. Data model aprobado por usuario.

---

## 3. Database Architect

**Rol**: Disena e implementa el almacenamiento de datos. Decide SQL vs Graph vs Hybrid.

**Analogia**: El ingeniero que construye el reservorio donde se almacena el agua filtrada.

**Cuando despacharlo**:
- Se necesita una base de datos nueva
- Los datos requieren un modelo relacional o de grafos
- Se necesita optimizar queries existentes
- El volumen de datos requiere partitioning o sharding

**Inputs requeridos**:

| Input | Descripcion | Fuente |
|-------|-------------|--------|
| `data_model` | Entidades, relaciones, atributos | Data Specialist |
| `query_patterns` | Tipos de consultas mas frecuentes | PM / Usuario |
| `scale_requirements` | Volumen, concurrencia, latencia requerida | Architecture Plumber |
| `existing_databases` | DBs que ya existen en el stack | Usuario |

**Protocolo de ejecucion**:

1. **Seleccionar tipo de base de datos**:

   | Si las queries son... | Entonces usar... | Porque... |
   |----------------------|-------------------|-----------|
   | Agregaciones, reports, metricas | PostgreSQL | ACID, SQL maduro, excelente para analytics |
   | Relaciones complejas, traversals | Neo4j | Traversals O(1) por relacion, schema flexible |
   | Busqueda full-text, logs | Elasticsearch | Inverted index, aggregations rapidas |
   | Key-value, cache, sessions | Redis | In-memory, sub-ms latency |
   | Documentos semi-estructurados | MongoDB | Schema flexible, horizontal scaling |
   | **Hybrid (recomendado para growth intelligence)** | PostgreSQL + Neo4j | Metricas en PG, relaciones en Neo4j |

2. **Disenar schema**:
   - **PostgreSQL**: tablas, indices, constraints, views, materialized views
   - **Neo4j**: node labels, relationship types, properties, indices, constraints
   - **Hybrid**: que va en cada DB, sync strategy entre ellas

3. **Optimizar para queries del dashboard**:
   - Pre-computar metricas pesadas (materialized views, aggregation pipelines)
   - Indices para las queries mas frecuentes
   - Caching strategy para queries costosos
   - Partitioning por fecha si los datos son time-series

4. **Definir seguridad de datos**:
   - Encryption at rest y in transit
   - Row-level security (quien ve que datos)
   - Audit logging
   - Backup strategy y disaster recovery

**Outputs**:

| Output | Formato | Destino |
|--------|---------|---------|
| `db_selection` | Decision con justificacion | PM → ADR |
| `schema_design` | DDL / Cypher CREATE statements | Implementation Agent |
| `index_strategy` | Lista de indices con justificacion | Implementation Agent |
| `security_config` | Requisitos de seguridad de datos | Implementation Agent |
| `query_patterns` | Queries pre-optimizadas para dashboards | Dashboard Builder |

**Herramientas que usa**: Read, Grep, WebSearch, Bash (para probar queries)

**Quality Gate**: Schema revisado por PM. Decision SQL vs Graph justificada. Queries del dashboard testeados con datos de ejemplo.

---

## 4. Implementation Agent

**Rol**: Construye todo. Escribe codigo, configura servicios, despliega infraestructura.

**Analogia**: La cuadrilla de construccion que instala las tuberias, los filtros, y los grifos.

**Cuando despacharlo**:
- La arquitectura esta aprobada y el schema listo
- Se necesita escribir codigo de pipeline, API, o integracion
- Se necesita configurar y desplegar servicios
- Se necesita testing y validacion

**Inputs requeridos**:

| Input | Descripcion | Fuente |
|-------|-------------|--------|
| `architecture_spec` | Stack y diagrama aprobados | Architecture Plumber |
| `pipeline_design` | ETL specs | Data Specialist |
| `schema_design` | DDL/Cypher statements | Database Architect |
| `security_config` | Requisitos de seguridad | DB Architect + Plumber |
| `coding_standards` | Convenciones del proyecto | PM / Usuario |

**Protocolo de ejecucion**:

1. **Setup del proyecto**:
   - Crear estructura de directorios
   - Configurar package manager, dependencies
   - Setup de environment (dev, staging, prod)
   - CI/CD pipeline basico

2. **Implementar pipeline de datos**:
   - Extractors para cada fuente de datos
   - Transformaciones segun reglas definidas
   - Loaders para cada base de datos
   - Error handling y retry logic
   - Logging y monitoring

3. **Implementar API/query layer**:
   - Endpoints para cada tipo de consulta
   - Authentication y authorization
   - Rate limiting si es publico
   - Documentation (OpenAPI/Swagger)

4. **Testing**:
   - Unit tests para transformaciones criticas
   - Integration tests para pipeline end-to-end
   - Load tests si hay requisitos de scale
   - Security tests (injection, auth bypass)

5. **Deploy**:
   - Infrastructure as code (si aplica)
   - Container builds
   - Environment configuration
   - Health checks y monitoring

**Outputs**:

| Output | Formato | Destino |
|--------|---------|---------|
| `codebase` | Repositorio funcional | PM → Usuario |
| `api_docs` | OpenAPI spec | Dashboard Builder |
| `deploy_guide` | Runbook de deployment | PM → Usuario |
| `test_results` | Test coverage report | PM |

**Herramientas que usa**: Read, Write, Edit, Bash, Glob, Grep, WebSearch

**Quality Gate**: Tests pasando. Pipeline funcional con datos reales. API documentada. No secrets en codigo.

---

## 5. Dashboard Builder

**Rol**: Construye la capa de visualizacion y los 3 niveles de dashboard.

**Analogia**: El que instala los medidores, las pantallas, y los controles para que todos vean el estado del agua.

**Cuando despacharlo**:
- La data esta en la base de datos y hay queries listos
- Se necesitan dashboards para diferentes audiencias
- Se necesita una interfaz de usuario para interactuar con los datos

**Inputs requeridos**:

| Input | Descripcion | Fuente |
|-------|-------------|--------|
| `query_patterns` | Queries optimizadas para metricas | Database Architect |
| `api_docs` | Endpoints disponibles | Implementation Agent |
| `stakeholder_map` | Quien ve que (GM, Manager, Implementor) | PM |
| `kpi_definitions` | Metricas y como calcularlas | PM / Usuario |
| `brand_guidelines` | Colores, fonts, estilo visual (si aplica) | Usuario |

**Protocolo de ejecucion**:

1. **Definir metricas por nivel**:
   - GM: 5-7 KPIs estrategicos maximos
   - Manager: 10-15 metricas operativas con drill-down
   - Implementor: backlog, action items, SLAs

2. **Seleccionar herramienta de visualizacion**:
   - Si el usuario ya tiene una (Metabase, Grafana, Looker) → usar esa
   - Si no → recomendar segun complejidad y presupuesto
   - Si es custom → disenar con React/Next.js + charting library

3. **Disenar layouts por nivel**:
   - GM: single screen, scorecards, traffic lights, trends
   - Manager: tabbed, filtrable, exportable, drill-down capable
   - Implementor: kanban/list view, real-time updates, action buttons

4. **Implementar dashboards**:
   - Conectar a data source (API o query directo)
   - Implementar filtros, date ranges, segmentacion
   - Mobile-responsive si aplica
   - Auto-refresh / real-time si aplica

**Outputs**:

| Output | Formato | Destino |
|--------|---------|---------|
| `dashboard_designs` | Wireframes o mockups | PM → Usuario para aprobacion |
| `dashboard_impl` | Dashboard funcional | Usuario |
| `user_guide` | Guia de uso por nivel | PM → Usuario |

**Herramientas que usa**: Read, Write, Edit, Bash, WebSearch, WebFetch

**Quality Gate**: Cada nivel de dashboard muestra datos reales. GM puede ver health score en <5 segundos. Manager puede filtrar por equipo/periodo. Implementor puede ver su backlog priorizado.

---

## Matriz de dependencias entre agentes

```
Architecture Plumber ──┐
                       ├──→ Data Specialist ──→ Database Architect ──→ Implementation Agent ──→ Dashboard Builder
PM (brief) ───────────┘                                                       ↑
                                                                               │
                                                    PM (review cada entrega) ──┘
```

**Paralelizacion posible**:
- Architecture Plumber + Data Specialist (si el usuario ya sabe que plataforma quiere)
- Implementation Agent + Dashboard Builder (si la DB y API estan listas, build en paralelo)

**Nunca paralelizar**:
- Database Architect antes de tener el data model del Data Specialist
- Implementation Agent antes de tener el schema del Database Architect
- Dashboard Builder antes de tener la API del Implementation Agent
