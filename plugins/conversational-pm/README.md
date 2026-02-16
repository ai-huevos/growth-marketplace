# conversational-pm

Project Manager conversacional para disenar y construir sistemas de inteligencia de crecimiento B2B. Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### project-management
Agente PM que orquesta el diseno, arquitectura, e implementacion de sistemas de datos B2B a traves de conversacion natural. Usa SPICED para descubrimiento de requisitos y despacha 5 agentes especialistas (Architecture Plumber, Data Specialist, Database Architect, Implementation Agent, Dashboard Builder).

**Triggers**: "project manager", "PM agent", "conversational pm", "ai huevos project", "design system for", "build me a", "necesito un sistema", "disenar arquitectura", "orquestar agentes"

## Agentes especialistas

| Agente | Rol | Analogia |
|--------|-----|----------|
| Architecture Plumber | Disena infraestructura y plataforma | Las tuberias |
| Data Specialist | Disena pipelines ETL y flujo de datos | La presion del agua |
| Database Architect | Disena almacenamiento (SQL, Graph, Hybrid) | El reservorio |
| Implementation Agent | Construye, despliega, testea | Las manos |
| Dashboard Builder | Dashboards 3 niveles (GM, Manager, Implementor) | Los medidores |

## Patrones de arquitectura incluidos

- **Modelo de irrigacion**: cada framework/fuente de datos es un canal que irriga el sistema
- **Hybrid DB**: PostgreSQL (metricas) + Neo4j (relaciones) cuando aplica
- **Dashboards 3 niveles**: Ejecutivo, Gerencial, Operacional
- **Interfaz conversacional**: compatible con Google ADK / MCP patterns

## Instalacion

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install conversational-pm@growth-marketplace
```
