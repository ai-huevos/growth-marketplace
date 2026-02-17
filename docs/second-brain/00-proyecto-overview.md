# AI Huevos Growth Marketplace — Visión General del Proyecto

## Qué es

Un marketplace de plugins para Claude Code que empaqueta frameworks de B2B growth, marketing, ventas y operaciones como skills, agentes, comandos y hooks instalables. Es un **repositorio solo de contenido** — sin build system, sin tests, sin dependencias. Todos los archivos son Markdown o JSON de configuración.

## Visión

Democratizar el acceso a metodologías de ventas B2B de clase mundial (Metodología GrowthOS, Porter, Value Proposition Canvas) empaquetándolas como herramientas interactivas dentro de Claude Code. Un consultor o equipo de ventas puede instalar un plugin y tener acceso inmediato a frameworks que típicamente requieren training costoso.

## Para Quién

- **Equipos de ventas B2B** que necesitan frameworks de discovery, qualification y pipeline
- **Equipos de marketing** que buscan positioning y competitive analysis
- **Consultores** que usan Claude Code para servir clientes empresariales
- **Empresas LATAM ($50M+)** buscando institucionalizar operaciones comerciales

## Los Cinco Plugins

### 1. growth-foundations (Gratis)
Frameworks fundamentales de B2B growth para cualquier equipo. El punto de entrada al marketplace.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `icp-analysis` | Skill | Análisis de Ideal Customer Profile con scoring PULSO (0-100) |
| `positioning` | Skill | Propuesta de valor, diferenciación, messaging framework |
| `competitive-analysis` | Skill | Five Forces de Porter + mapa competitivo visual |
| `quiz-funnel` | Skill | Quiz funnels Metodología SONDA: PREGUNTA RAÍZ, buckets, stress test <$500 |
| `/diagnostico` | Command | Assessment ClarQ: GTM, Revenue, Q2C, Capabilities (0-40) |
| `/icp` | Command | Workshop interactivo para definir y scorear ICP |
| `/quiz` | Command | Workshop interactivo para diseñar quiz funnel con buckets |

### 2. sales-blueprint
Sistema completo de ejecución de ventas B2B basado en Metodología GrowthOS.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `discovery-mastery` | Skill | Preparación y ejecución de discovery calls con PULSO + AVE |
| `pipeline-management` | Skill | Gestión de pipeline con PULSO scoring y modelo CICLO |
| `proposal-generation` | Skill | Generación de propuestas con business case y Trading Checklist |
| `coaching-cadence` | Skill | Coaching ROCA, 8 modelos, cadencia semanal/mensual |
| `sdr-agent` | Agent | Workflow de SDR: research → PULSO → outreach |
| `deal-strategist` | Agent | Análisis crítico de deals: gaps PULSO → riesgos → MAP |
| `/discovery` | Command | Prep de discovery call interactiva |
| `/propuesta` | Command | Generador de propuestas B2B |
| `/pipeline` | Command | Review de salud del pipeline |
| `/coaching` | Command | Prep de 1:1 con diagnóstico ROCA |

### 3. copywriting-engine
Motor de copywriting basado en datos reales: 38,737 headlines, 4,129 triggers psicológicos, 2,245 CTAs analizados.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `headline-mastery` | Skill | 50 fórmulas en 10 categorías con scoring automático |
| `email-sequences` | Skill | Secuencias de email con persuasion ladder progresiva |
| `landing-pages` | Skill | Arquitectura de conversión de 10 secciones |
| `psychological-triggers` | Skill | 10 triggers rankeados por leverage de 4,129 instancias |
| Research Agent | Agent | Fase 1: inteligencia de mercado |
| Insight Agent | Agent | Fase 2: análisis estratégico |
| Ideation Agent | Agent | Fase 3: conceptos creativos |
| Copy Output Agent | Agent | Fase 4: copy final optimizado |
| `/copy` | Command | Pipeline completo de 4 fases |
| `/headline` | Command | Generación rápida de 10+ titulares |
| `/email-sequence` | Command | Constructor de secuencias 5-7 emails |

### 4. motor-de-ofertas
Motor de Ofertas: funnels y escaleras de valor B2B para LATAM (ESCALA, FLUJO, Alma) con frameworks branded propios.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `escala` | Skill | Value ladder ESCALA de 4 niveles + RADAR discovery |
| `flujo` | Skill | Funnel architecture FLUJO, 7 fases operativas |
| `alma` | Skill | Brand character (ALMA 10 pasos) + sistema email IMAN |
| `funnel-optimization` | Skill | Optimización de funnels: health dashboard, ciclo, scaling |
| `funnel-architect` | Agent | Agente especialista en diseño y optimización de funnels |
| `/escala` | Command | Workshop interactivo para diseñar value ladder ESCALA |
| `/funnel-diagnosis` | Command | Diagnóstico de funnel existente con recomendaciones |

### 5. conversational-pm
Project Manager conversacional para diseñar y construir sistemas de inteligencia de crecimiento B2B.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `project-management` | Skill | PM conversacional: PULSO discovery, despacho de 5 agentes especialistas, 5 fases |
| Architecture Plumber | Agent (interno) | Diseña infraestructura y plataforma |
| Data Specialist | Agent (interno) | Diseña pipelines ETL y flujo de datos |
| Database Architect | Agent (interno) | Diseña almacenamiento (SQL, Graph, Hybrid) |
| Implementation Agent | Agent (interno) | Construye, despliega, testea |
| Dashboard Builder | Agent (interno) | Dashboards 3 niveles: Ejecutivo, Gerencial, Operacional |

## El Hilo Conductor: PULSO

PULSO (Panorama, Urgencia, Logro, Situación Crítica, Organización) es el lenguaje común que conecta los cinco plugins:

- **growth-foundations** usa PULSO para **diagnosticar** el ICP y **segmentar** el mercado en buckets vía quiz funnels
- **sales-blueprint** usa PULSO para **evaluar** oportunidades, gestionar pipeline, generar propuestas y coachear
- **copywriting-engine** usa los insights de PULSO para **comunicar** con copy efectivo
- **motor-de-ofertas** usa PULSO vía RADAR para **posicionar** al prospect en el tier correcto del value ladder ESCALA
- **conversational-pm** usa PULSO para **descubrir** requisitos de proyecto y clasificar complejidad antes de despachar agentes

## Datos Clave del Proyecto

- **Idioma**: Spanish-first. Contenido base en español. Roadmap multi-language en Phase 2.
- **Archivos totales (plugins/)**: 105 (100 Markdown + 5 JSON)
- **Skills**: 17 en total (4 + 4 + 4 + 4 + 1)
- **Commands**: 12 en total (3 + 4 + 3 + 2 + 0)
- **Agents**: 7 en total (0 + 2 + 4 + 1 + 0)
- **Frameworks**: PULSO, ICP Scoring, ClarQ, ROCA, Value Proposition Canvas, Five Forces, CICLO, AVE, Metodología SONDA, Bucket Scorecard
- **Datos analizados**: 38,737 headlines, 4,129 triggers, 2,245 CTAs, 1,570 propuestas de valor
- **Licencia**: MIT
- **Autor**: AI Huevos (huevos.ai)

## Cómo se Instala

```bash
# Añadir el marketplace
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar un plugin específico
/plugin install growth-foundations@growth-marketplace
/plugin install sales-blueprint@growth-marketplace
/plugin install copywriting-engine@growth-marketplace
/plugin install motor-de-ofertas@growth-marketplace
/plugin install conversational-pm@growth-marketplace
```

## Cómo se Usa

Los **skills** se activan automáticamente cuando Claude detecta tareas relevantes (via trigger keywords en frontmatter).

Los **commands** se invocan manualmente con `/`:
```
/diagnostico Empresa XYZ
/icp SaaS B2B en LATAM
/quiz Herramienta de analytics para equipos de ventas
/discovery Acme Corp
/propuesta Deal con Cliente ABC
/pipeline Q4 2025
/coaching Rep Juan
/copy Landing page para producto SaaS
/headline Herramienta de analytics
/email-sequence Reactivación de clientes inactivos
```

Los **agents** se activan dentro de commands o como workflows autónomos.
