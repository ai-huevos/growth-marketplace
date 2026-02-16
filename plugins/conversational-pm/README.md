# conversational-pm

Growth Diagnostic Orchestrator + Project Manager conversacional. La PM es la **puerta de entrada al marketplace**: ingiere contexto de negocio, diagnostica el estado de crecimiento, rutea a los plugins correctos, y crea roadmaps de 90 días. Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### project-management
La PM opera en **dos modos**:

**Modo 1 — Diagnostic (Orquestadora del Marketplace)**
Ingiere contexto del negocio via conversación SPICED → diagnostica growth stage → rutea a los plugins correctos (/diagnostico, /icp, /escala, content-strategy, /copy, /pipeline) → sintetiza outputs en un roadmap de 90 días. Optimizado para equipos pequeños (2-3 personas).

**Modo 2 — Technical Build (Agent Roster)**
Orquesta 5 agentes especialistas para diseñar y construir sistemas de datos B2B.

**Triggers**: "project manager", "PM agent", "conversational pm", "diagnosticar negocio", "roadmap 90 dias", "que plugin necesito", "growth stage", "por donde empiezo", "ai huevos project", "design system for", "build me a", "necesito un sistema"

## Modos de operación

| Señal del usuario | Modo | Acción |
|-------------------|------|--------|
| "No sé por dónde empezar" | Diagnostic | Discovery SPICED → growth stage → plugin routing |
| "Necesito un plan de 90 días" | Diagnostic | Full diagnostic → roadmap |
| "Qué plugin necesito?" | Diagnostic | Routing table → recommendation |
| "Construir un dashboard/sistema" | Technical | Agent roster → architecture → build |
| "Necesito un sistema completo" | Both | Diagnostic primero → Technical después |

## Agentes especialistas (Modo Technical)

| Agente | Rol | Analogía |
|--------|-----|----------|
| Architecture Plumber | Diseña infraestructura y plataforma | Las tuberías |
| Data Specialist | Diseña pipelines ETL y flujo de datos | La presión del agua |
| Database Architect | Diseña almacenamiento (SQL, Graph, Hybrid) | El reservorio |
| Implementation Agent | Construye, despliega, testea | Las manos |
| Dashboard Builder | Dashboards 3 niveles (GM, Manager, Implementor) | Los medidores |

## Frameworks

| Framework | Modo | Descripción |
|-----------|------|-------------|
| growth-diagnostic-router.md | Diagnostic | Ingesta → Diagnóstico → Routing → Roadmap 90 días |
| team-structure (en router) | Diagnostic | 3 Pilares Estratégicos (Demand/Brand/PMM) + Revenue Plan First |
| agent-roster.md | Technical | 5 agentes especialistas con protocolos |
| architecture-patterns.md | Technical | Patrones de arquitectura: pipelines, DBs, dashboards |
| project-templates.md | Technical | Templates para diferentes tipos de proyectos |

## Templates

| ID | Template | Descripción |
|----|----------|-------------|
| T-29 | team-design-canvas.md | Canvas de equipo alineado a revenue con 3 pilares + funnel model |

## Patrones de arquitectura incluidos

- **Growth Diagnostic Router**: PM como ingestor y router del marketplace completo
- **Modelo de irrigación**: cada framework/fuente de datos es un canal que irriga el sistema
- **Hybrid DB**: PostgreSQL (métricas) + Neo4j (relaciones) cuando aplica
- **Dashboards 3 niveles**: Ejecutivo, Gerencial, Operacional
- **Interfaz conversacional**: compatible con Google ADK / MCP patterns

## Instalación

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install conversational-pm@growth-marketplace
```
