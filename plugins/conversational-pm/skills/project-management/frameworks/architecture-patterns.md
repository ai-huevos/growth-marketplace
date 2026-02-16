# Architecture Patterns — Patrones para sistemas de Growth Intelligence

Patrones de arquitectura comunes para sistemas B2B de inteligencia de crecimiento. Referencia para el Architecture Plumber y la PM.

---

## Patron 1: Pipeline de datos (Irrigation Model)

El modelo de irrigacion: cada fuente de datos es un canal que alimenta un reservorio central. A mas canales, mas irrigacion de insights.

```
                    ┌─────────────────────────────────────┐
                    │         FUENTES DE DATOS             │
                    │                                       │
                    │  CRM ──┐                              │
                    │  Email ─┤    ┌──────────┐            │
                    │  Ads ───┤    │  ETL     │  ┌──────┐  │
                    │  Web ───┼───→│  Pipeline │─→│  DB  │  │
                    │  Social ┤    │          │  │      │  │
                    │  CS ────┤    └──────────┘  └──┬───┘  │
                    │  Custom ┘                      │      │
                    │                                │      │
                    │                    ┌───────────┘      │
                    │                    ↓                   │
                    │             ┌──────────┐              │
                    │             │ Dashboard │              │
                    │             │ 3 niveles │              │
                    │             └──────────┘              │
                    └─────────────────────────────────────┘
```

### Componentes del pipeline

| Componente | Funcion | Tecnologia tipica |
|------------|---------|-------------------|
| **Extractor** | Obtiene datos de fuentes | APIs, webhooks, scrapers, file readers |
| **Transformer** | Limpia, normaliza, enriquece | Python/dbt, SQL transforms, business rules |
| **Loader** | Deposita en la DB destino | Bulk inserts, upserts, CDC |
| **Scheduler** | Ejecuta el pipeline a intervalos | Cron, Airflow, Prefect, event-driven |
| **Monitor** | Alerta si algo falla | Logging, health checks, alertas |

### Estrategias de actualizacion

| Estrategia | Cuando usar | Complejidad |
|-----------|-------------|-------------|
| **Batch (scheduled)** | Datos que cambian poco, reports diarios/semanales | Baja |
| **Micro-batch** | Necesitas datos frescos pero no real-time (cada 5-15 min) | Media |
| **Streaming** | Necesitas datos en tiempo real (alerts, live dashboards) | Alta |
| **Event-driven** | Cada cambio en la fuente dispara una actualizacion | Media-Alta |

**Recomendacion PM**: Empezar con batch, migrar a micro-batch/event-driven solo cuando el usuario necesite real-time.

---

## Patron 2: Hybrid Database (PostgreSQL + Neo4j)

Para sistemas de growth intelligence que necesitan AMBOS: metricas tabulares Y relaciones entre entidades.

### Que va en PostgreSQL

- Metricas de pipeline (deals, revenue, conversion rates)
- Time-series data (KPIs por periodo)
- Transacciones (pagos, suscripciones, contratos)
- User/account data (firmographics, settings)
- Aggregations pre-computadas (materialized views)

### Que va en Neo4j

- Relaciones entre stakeholders (quien conoce a quien, cadena de decision)
- Influence maps (quien influye en la decision de compra)
- Customer journeys (touchpoints como nodos, transiciones como edges)
- Content relationships (que contenido influyo en que deal)
- Cross-sell / expansion paths (que clientes compraron que productos)

### Sync entre ambas

```
PostgreSQL (source of truth para metricas)
    │
    ├── CDC (Change Data Capture) ──→ Neo4j (relaciones)
    │                                    │
    │   Queries tabular ←────────────────┤
    │                                    │
    │                    Queries graph ←──┘
    │
    ↓
API Layer (unifica queries de ambas DBs)
    │
    ↓
Dashboard (muestra metricas + relaciones)
```

### Cuando NO usar Neo4j

- Si solo necesitas metricas y reports → PostgreSQL basta
- Si los datos no tienen relaciones significativas → no forzar grafos
- Si el equipo no tiene experiencia con graph DBs → complejidad operacional
- Si el volumen de nodos es <10,000 → PostgreSQL con JOINs funciona bien

**Rule of thumb**: Si la pregunta empieza con "quien se relaciona con..." o "cual es el camino de...", necesitas graph. Si empieza con "cuanto/cuantos...", necesitas relational.

---

## Patron 3: Dashboard por niveles

### Nivel GM (Ejecutivo)

**Principio de diseno**: One-screen overview. Si el GM necesita scroll, esta mal disenado.

```
┌─────────────────────────────────────────────┐
│  GROWTH HEALTH SCORE: 73/100   [▲ +5]       │
├─────────────┬───────────────┬───────────────┤
│  Revenue    │  Pipeline     │  Conversion   │
│  $1.2M MTD  │  $4.5M open  │  12.3% win    │
│  ▲ +8%      │  ▼ -3%       │  ▲ +1.2pp     │
├─────────────┴───────────────┴───────────────┤
│  TREND (12 meses)                           │
│  ████████████████████████████████▓▓▓▓       │
├─────────────────────────────────────────────┤
│  TOP RISKS              │  TOP OPPORTUNITIES │
│  • Pipeline declining   │  • Expansion 23%   │
│  • Churn ↑ segment B    │  • New vertical Q2 │
└─────────────────────────┴────────────────────┘
```

**Metricas tipicas**: Revenue, Pipeline value, Win rate, CAC, LTV, NRR, Health score

### Nivel Manager (Operativo)

**Principio de diseno**: Filtrable y drillable. El manager necesita poder cortar datos por equipo, periodo, segmento.

```
┌─────────────────────────────────────────────┐
│  Filtros: [Equipo ▼] [Periodo ▼] [Seg ▼]   │
├─────────────────────────────────────────────┤
│  Pipeline por etapa                         │
│  Discovery: $800K (23 deals)                │
│  Proposal:  $1.2M (12 deals) ← bottleneck  │
│  Closing:   $500K (5 deals)                 │
├─────────────────────────────────────────────┤
│  Team Performance                           │
│  Rep A: 120% quota │ Rep B: 85% │ Rep C: 95%│
├─────────────────────────────────────────────┤
│  Alerts                                      │
│  ⚠ 3 deals stalled >14 days                 │
│  ⚠ Forecast accuracy dropped to 65%         │
└─────────────────────────────────────────────┘
```

**Metricas tipicas**: Conversion by stage, Velocity, Forecast accuracy, Rep performance, Stale deals

### Nivel Implementor (Tactico)

**Principio de diseno**: Action-oriented. Cada item en la pantalla es algo que se puede hacer HOY.

```
┌─────────────────────────────────────────────┐
│  MI BACKLOG (priorizado)                     │
├─────────────────────────────────────────────┤
│  🔴 URGENTE                                  │
│  □ Follow-up Acme Corp (deal $120K, 3 dias) │
│  □ Enviar proposal TechCo (vence manana)    │
├─────────────────────────────────────────────┤
│  🟡 HOY                                      │
│  □ Discovery call Initech (14:00)           │
│  □ Actualizar forecast Q2                    │
│  □ Revisar email sequence results           │
├─────────────────────────────────────────────┤
│  🟢 ESTA SEMANA                              │
│  □ Preparar coaching session viernes        │
│  □ Limpiar pipeline (5 deals sin actividad) │
└─────────────────────────────────────────────┘
```

**Metricas tipicas**: Tasks pending, Overdue items, Today's calls/meetings, SLA compliance

---

## Patron 4: Interfaz conversacional (Agent Layer)

Para sistemas que necesitan una interfaz conversacional sobre los datos (estilo Google ADK).

### Arquitectura

```
Usuario (natural language)
    │
    ↓
Conversational Agent (NLU + intent routing)
    │
    ├── Intent: "como va el pipeline?" → Query Agent → DB → Response
    ├── Intent: "quien es el decision maker de X?" → Graph Query → Neo4j → Response
    ├── Intent: "crea un report de Q1" → Report Agent → Build → Deliver
    ├── Intent: "que deberia hacer hoy?" → Backlog Agent → Prioritize → Response
    └── Intent: fallback → PM Agent → Clarify → Route
```

### Componentes del agent layer

| Componente | Funcion | Implementacion |
|------------|---------|----------------|
| **NLU / Intent Router** | Entiende que quiere el usuario | LLM (Claude) con contexto del skill |
| **Query Agent** | Traduce preguntas a queries SQL/Cypher | LLM + schema knowledge |
| **Report Agent** | Genera reports formateados | Templates + data |
| **Backlog Agent** | Prioriza tareas del usuario | Rules engine + data |
| **PM Agent** | Fallback y orquestacion | Conversational PM skill |

### Google ADK como referencia

Google ADK propone un patron de agentes multi-tool donde:
- Cada agente tiene herramientas (tools) definidas
- Los agentes se pueden componer (agent A puede llamar a agent B)
- El routing es basado en intent

**Mapping a nuestro sistema**:
- Google ADK Agent → Claude Code Skill/Agent
- Google ADK Tool → Claude Code Tool (Read, Write, Bash, etc.)
- Google ADK Orchestrator → Conversational PM
- Google ADK Session → Conversation context

**Ventaja de nuestro approach**: No dependemos de un SDK especifico. Los skills son Markdown puro — portables, versionables, y auditables. La inteligencia esta en el contenido, no en el runtime.

---

## Patron 5: Seguridad por capas

Todo sistema de growth intelligence maneja datos sensibles. Seguridad no es opcional.

| Capa | Proteccion | Implementacion |
|------|-----------|----------------|
| **Network** | Aislamiento, firewall, VPN | VPC, security groups, allowlists |
| **Transport** | Encryption in transit | TLS 1.3 everywhere |
| **Application** | Auth + Authorization | OAuth2 / API keys + RBAC |
| **Data** | Encryption at rest | AES-256, column-level si es PII |
| **Access** | Audit trail | Logging de toda query, quien y cuando |
| **Backup** | Disaster recovery | Automated backups, tested restore |

### Datos que NUNCA se guardan en plaintext

- API keys y credentials → secret manager (Vault, AWS Secrets Manager)
- PII (email, telefono, nombre completo) → encrypted o hashed
- Passwords → bcrypt/argon2, nunca almacenar
- Payment info → nunca manejar directamente (usar Stripe/processor)

---

## Decision Matrix: Que patron usar

| Proyecto | Patrones recomendados |
|----------|----------------------|
| "Quiero un dashboard de ventas" | Pipeline (batch) + PostgreSQL + Dashboard 3-level |
| "Quiero entender las relaciones entre stakeholders" | Pipeline + Neo4j + Graph visualization |
| "Quiero un sistema completo de growth intelligence" | Pipeline + Hybrid DB + Dashboard + Agent Layer |
| "Quiero automatizar mi proceso de ventas" | Pipeline + PostgreSQL + Agent Layer (backlog) |
| "Quiero un chatbot sobre mis datos" | Pipeline + PostgreSQL + Conversational Agent |
