# 21. Plugin: conversational-pm — Referencia Completa

## Identidad

- **Nombre**: conversational-pm
- **Version**: 1.0.0
- **Proposito**: Project Manager conversacional para diseñar y construir sistemas de inteligencia de crecimiento B2B
- **Autor**: AI Huevos
- **Metodologia base**: PULSO (discovery de requisitos) + Modelo de irrigación de datos + Agent Roster pattern

## Componentes

- 1 Skill: project-management
- 0 Commands (interacción 100% conversacional)
- 0 Agents como archivos independientes (5 agentes definidos inline en el skill)
- 6 archivos totales

---

## Concepto Central: PM Conversacional

A diferencia de los otros plugins que empaquetan frameworks de dominio (ventas, copy, funnels), conversational-pm es un **meta-plugin de orquestación**. Su skill no ejecuta un framework de negocio — gestiona proyectos completos despachando agentes especialistas a través de conversación natural.

La PM opera como punto de entrada único: escucha requisitos, traduce a arquitectura, despacha especialistas, y entrega resultados integrados.

### Identidad de la PM

- **Estilo**: Directa, organizada, pragmática
- **Principio**: "Entiendo tu problema antes de diseñar la solución"
- **Idioma**: Español por default, inglés técnico cuando es necesario
- **Modos**: Interactivo (default), autónomo, coaching

---

## Skill: project-management

**Triggers**: "project manager", "PM agent", "conversational pm", "ai huevos project", "design system for", "build me a", "necesito un sistema", "diseñar arquitectura", "orquestar agentes", "project kickoff", "plan the build", "coordinate agents"

### Protocolo de 5 Fases

| Fase | Nombre | Actividad |
|------|--------|-----------|
| 0 | Reconocimiento del contexto | Evaluar qué existe, qué se pide, qué falta |
| 1 | Descubrimiento conversacional | PULSO adaptado a proyectos (5 dimensiones) |
| 2 | Clasificación del proyecto | Tipo de sistema + nivel de complejidad |
| 3 | Despacho de especialistas | Activar agentes según plan aprobado |
| 4 | Revisión y control de calidad | Completitud, consistencia, seguridad, usabilidad, performance |
| 5 | Entrega e integración | Consolidar, documentar, handoff |

### PULSO Adaptado a Proyectos

La PM reutiliza PULSO como framework de discovery pero adaptado al contexto de proyectos de datos:

| Dimensión | Pregunta PM | Qué revela |
|-----------|-------------|------------|
| **S — Situation** | "Describeme tu operación actual. Qué herramientas usas, dónde viven tus datos?" | Estado actual, complejidad, stack existente |
| **P — Pain** | "Qué es lo que más te duele hoy? Qué información no tienes y necesitas?" | Dolor principal, prioridad de solución |
| **I — Impact** | "Si resolvemos esto, qué cambia? Qué decisión podrías tomar que hoy no puedes?" | Valor del proyecto, ROI potencial |
| **CE — Critical Event** | "Hay algo que lo hace urgente? Board meeting, fin de quarter, lanzamiento?" | Timeline, presión, prioridades reales |
| **D — Decision** | "Quién más necesita aprobar esto? Quién va a usar el sistema diariamente?" | Stakeholders, niveles de dashboard |

---

## Agent Roster Pattern

El plugin define 5 agentes especialistas que la PM despacha según el tipo de proyecto. No son archivos independientes en `agents/` — están definidos como un roster dentro del framework `agent-roster.md`.

| Agente | Rol | Analogía (modelo irrigación) |
|--------|-----|------------------------------|
| Architecture Plumber | Diseña infraestructura y plataforma | Las tuberías |
| Data Specialist | Diseña pipelines ETL y flujo de datos | La presión del agua |
| Database Architect | Diseña almacenamiento (SQL, Graph, Hybrid) | El reservorio |
| Implementation Agent | Construye, despliega, testea | Las manos |
| Dashboard Builder | Dashboards 3 niveles (GM, Manager, Implementor) | Los medidores |

### Orden de despacho típico

```
Architecture Plumber → Data Specialist → Database Architect → Implementation Agent → Dashboard Builder
```

Paralelización posible:
- Architecture Plumber + Data Specialist (si el scope es claro)
- Implementation Agent + Dashboard Builder (si la DB está lista)

---

## Frameworks

### 1. agent-roster.md
Catálogo completo de los 5 agentes especialistas con capacidades, inputs esperados, outputs, y criterios de activación.

### 2. architecture-patterns.md
Patrones de arquitectura para proyectos de datos B2B:
- **Data Pipeline**: conectar fuentes → transformar → almacenar
- **Intelligence Dashboard**: datos existentes → métricas → visualización
- **Full Stack Growth**: pipeline + DB + dashboard + automations
- **Hybrid DB**: PostgreSQL (métricas) + Neo4j (relaciones)
- Criterios para decidir Graph vs Relational vs Hybrid

### 3. project-templates.md
Templates para diferentes tipos de proyectos según clasificación de complejidad:

| Nivel | Criterio | Approach |
|-------|----------|----------|
| Simple | 1 fuente, 1 destino, <1 semana | PM ejecuta directamente |
| Medio | 2-3 fuentes, transformaciones | PM + 1-2 especialistas |
| Complejo | 4+ fuentes, graph DB, integraciones | PM + equipo completo |
| Enterprise | Multi-sistema, seguridad, compliance | PM + equipo + fases |

---

## Modelo de Irrigación

Concepto arquitectónico central: cada framework instalado, cada fuente de datos conectada, y cada plugin activado es un **canal de irrigación**. A medida que se agregan más canales:

```
Plugin 1 (ICP)          → Canal → Datos de segmentación      ↘
Plugin 2 (Pipeline)     → Canal → Datos de oportunidades     → Lake/Graph → Dashboards
Plugin 3 (Copy)         → Canal → Datos de conversión        ↗
Plugin N (nuevo)        → Canal → Datos de [dominio]         ↗
```

Más plugins = más irrigación = más insights cruzados.

---

## Dashboards 3 Niveles

La PM siempre diseña dashboards para 3 audiencias:

| Nivel | Audiencia | Frecuencia | Pregunta clave |
|-------|-----------|------------|----------------|
| 1 | GM / Ejecutivo | Semanal/mensual | "¿Estamos creciendo o no?" |
| 2 | Manager / Operativo | Diaria/semanal | "¿Qué necesito ajustar esta semana?" |
| 3 | Implementor / Táctico | Tiempo real/diaria | "¿Qué hago primero hoy?" |

---

## Conexión PULSO Cross-Plugin

conversational-pm es el **orquestador** que conecta todos los demás plugins:

| Plugin origen | Datos que irriga | Cómo los usa la PM |
|---------------|------------------|---------------------|
| growth-foundations | ICP scores, segmentos, PlainIQ heatmap | Para definir a quién sirve el sistema |
| sales-blueprint | Pipeline health, PULSO scores por deal | Para priorizar qué datos necesitan dashboards |
| copywriting-engine | Métricas de conversión, A/B results | Para alimentar dashboards de marketing |
| motor-de-ofertas | Funnel metrics, ESCALA tiers, email performance | Para conectar el embudo completo al sistema |

---

## Integración con Ecosistema

- **Google ADK**: Compatible como interfaz conversacional via MCP patterns
- **A2A (Agent-to-Agent)**: Diseñado para despachar agentes como sub-tareas
- **Plugin Factory**: Si los frameworks creados en un proyecto son reutilizables, la PM puede proponer empaquetarlos como plugin via Plugin Factory
- **Second Brain**: La PM genera documentación second-brain cuando el proyecto lo amerita

---

## Inventario de Archivos

| Archivo | Propósito |
|---------|-----------|
| `.claude-plugin/plugin.json` | Manifiesto del plugin |
| `README.md` | Documentación del plugin, skills, agentes, instalación |
| `skills/project-management/SKILL.md` | Definición completa del skill PM con protocolo de 5 fases |
| `skills/project-management/frameworks/agent-roster.md` | Catálogo de 5 agentes especialistas |
| `skills/project-management/frameworks/architecture-patterns.md` | Patrones de arquitectura: pipelines, DBs, dashboards |
| `skills/project-management/frameworks/project-templates.md` | Templates por tipo y complejidad de proyecto |
