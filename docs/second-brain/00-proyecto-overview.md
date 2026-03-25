# AI Huevos Growth Marketplace — Visión General del Proyecto

## Qué es

Un marketplace de plugins para Claude Code que empaqueta frameworks de B2B growth, marketing, ventas y operaciones como skills, agentes, comandos y hooks instalables. Es un **repositorio solo de contenido** — sin build system, sin tests, sin dependencias. Todos los archivos son Markdown o JSON de configuración.

## Visión

Democratizar el acceso a metodologías de ventas B2B de clase mundial (Metodología GrowthOS, Porter, Value Proposition Canvas, Winning by Design) empaquetándolas como herramientas interactivas dentro de Claude Code. Un consultor o equipo de ventas puede instalar un plugin y tener acceso inmediato a frameworks que típicamente requieren training costoso.

## Para Quién

- **Equipos de ventas B2B** que necesitan frameworks de discovery, qualification y pipeline
- **Equipos de marketing** que buscan positioning, competitive analysis y content strategy
- **Consultores** que usan Claude Code para servir clientes empresariales
- **Empresas LATAM ($50M+)** buscando institucionalizar operaciones comerciales

## GrowthOS: El Sistema Operativo

GrowthOS transforma el marketplace de una colección de herramientas a un **sistema need-driven** que diagnostica la necesidad del usuario y activa los skills correctos automáticamente. Opera en 4 fases:

```
DEFINIR → ATRAER → CONVERTIR → ESCALAR
```

- **DEFINIR**: ICP, positioning, competitive analysis, product marketing
- **ATRAER**: Content strategy, funnels, lead magnets, brand character
- **CONVERTIR**: Discovery, pipeline, proposals, deal strategy
- **ESCALAR**: Customer success, renewals, coaching, expansion

Comandos del orquestador: `/os` (iniciar intake), `/roadmap` (plan 90 días), `/estado` (progreso actual).

## Los Seis Plugins

### 1. growth-foundations (Gratis)
Frameworks fundamentales de B2B growth para cualquier equipo. El punto de entrada al marketplace.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `icp-analysis` | Skill | Análisis de Ideal Customer Profile con scoring PULSO (0-100) |
| `positioning` | Skill | Propuesta de valor, diferenciación, messaging framework |
| `competitive-analysis` | Skill | Five Forces de Porter + mapa competitivo visual |
| `quiz-funnel` | Skill | Quiz funnels Metodología SONDA: PREGUNTA RAÍZ, buckets, stress test <$500 |
| `content-strategy` | Skill | Estrategia PENDIENTE + TRIÁNGULO DE INGRESOS + 3 workflows LATAM |
| `/diagnostico` | Command | Assessment PlainIQ: GTM, Revenue, Q2C, Capabilities (0-40) |
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

### 5. play-to-win
Sistema de transformación de ventas basado en 31 blueprints de Winning by Design. Cubre el ciclo completo: desde product marketing hasta renewal/expansion.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `sales-transformation` | Skill | Transformación de ventas en 90 días: diagnóstico, playbooks, métricas |
| `customer-success-ops` | Skill | CS Operating Model: health scoring, QBRs, renewal playbooks |
| `pre-discovery-research` | Skill | Research pre-call: 3×3, stakeholder mapping, hipótesis |
| `deal-strategy` | Skill | Win/loss analysis, deal qualification, MAP (Mutual Action Plan) |
| `relationship-mapping` | Skill | Org mapping, champion building, multi-threading |
| `renewal-expansion` | Skill | Renewal conversations, expansion triggers, churn prevention |
| `product-marketing` | Skill | Impact messaging, hero's journey, competitive positioning |
| `icp-tal` | Skill | ICP segmentation + TAL tiering (Tier 1/2/3) |
| `customer-journey` | Skill | Journey mapping, 7 critical moments, trigger plays |
| `discovery-demo` | Skill | Discovery call execution + demo prescription framework |
| `advanced-techniques` | Skill | Trading framework, objection handling, multi-stakeholder deals |
| `playbook-coach` | Agent | AI Sales Coach: selecciona frameworks, genera hipótesis, sintetiza playbooks |
| `/playbook` | Command | Sintetizador de playbooks GTM |
| `/deal-analysis` | Command | Sesión de análisis win/loss con PULSO |
| `/kickoff` | Command | Orquestador de kickoff call para clientes |

### 6. conversational-pm
Growth Diagnostic Orchestrator + Project Manager conversacional. Puerta de entrada al marketplace: diagnostica contexto de negocio, identifica fase de crecimiento, rutea a plugins correctos.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `project-management` | Skill | PM conversacional: PULSO discovery, despacho de 5 agentes especialistas, 5 fases |
| Architecture Plumber | Agent (interno) | Diseña infraestructura y plataforma |
| Data Specialist | Agent (interno) | Diseña pipelines ETL y flujo de datos |
| Database Architect | Agent (interno) | Diseña almacenamiento (SQL, Graph, Hybrid) |
| Implementation Agent | Agent (interno) | Construye, despliega, testea |
| Dashboard Builder | Agent (interno) | Dashboards 3 niveles: Ejecutivo, Gerencial, Operacional |
| `/os` | Command | Iniciar intake GrowthOS (diagnosticar fase, rutear a skills) |
| `/roadmap` | Command | Generar/actualizar roadmap de 90 días |
| `/estado` | Command | Mostrar estado actual (fase, skills, outputs, próximos pasos) |

## El Hilo Conductor: PULSO

PULSO (Panorama, Urgencia, Logro, Situación Crítica, Organización) es el lenguaje común que conecta los seis plugins:

- **growth-foundations** usa PULSO para **diagnosticar** el ICP y **segmentar** el mercado en buckets vía quiz funnels
- **sales-blueprint** usa PULSO para **evaluar** oportunidades, gestionar pipeline, generar propuestas y coachear
- **copywriting-engine** usa los insights de PULSO para **comunicar** con copy efectivo
- **motor-de-ofertas** usa PULSO vía RADAR para **posicionar** al prospect en el tier correcto del value ladder ESCALA
- **play-to-win** usa PULSO para **transformar** el equipo de ventas: diagnóstico → playbooks → métricas → coaching
- **conversational-pm** usa PULSO para **descubrir** requisitos de proyecto y clasificar complejidad antes de despachar agentes

## Los 18 Comandos

| Comando | Plugin | Propósito |
|---------|--------|-----------|
| `/diagnostico` | growth-foundations | Assessment PlainIQ (GTM, Revenue, Q2C, Capabilities) |
| `/icp` | growth-foundations | Workshop interactivo de ICP + scoring |
| `/quiz` | growth-foundations | Quiz funnel builder (Metodología SONDA) |
| `/discovery` | sales-blueprint | Prep de discovery call con PULSO |
| `/propuesta` | sales-blueprint | Generador de propuestas B2B |
| `/pipeline` | sales-blueprint | Análisis de salud del pipeline |
| `/coaching` | sales-blueprint | Sesión de coaching con ROCA |
| `/copy` | copywriting-engine | Pipeline de copywriting (4 fases) |
| `/headline` | copywriting-engine | Generación de titulares |
| `/email-sequence` | copywriting-engine | Constructor de secuencias de email |
| `/escala` | motor-de-ofertas | Value ladder ESCALA builder |
| `/funnel-diagnosis` | motor-de-ofertas | Diagnóstico de funnel |
| `/playbook` | play-to-win | Sintetizador de playbooks GTM |
| `/deal-analysis` | play-to-win | Análisis win/loss con PULSO |
| `/kickoff` | play-to-win | Orquestador de kickoff call |
| `/os` | conversational-pm | Iniciar GrowthOS intake |
| `/roadmap` | conversational-pm | Roadmap de 90 días |
| `/estado` | conversational-pm | Estado actual de GrowthOS |

## Datos Clave del Proyecto

- **Idioma**: Spanish-first. Contenido base en español. Roadmap multi-language en Phase 2.
- **Archivos totales (plugins/)**: ~216 (Markdown + JSON)
- **Skills**: 29 en total (5 + 4 + 4 + 4 + 11 + 1)
- **Commands**: 18 en total (3 + 4 + 3 + 2 + 3 + 3)
- **Agents**: 8 en total (0 + 2 + 4 + 1 + 1 + 0)
- **Templates**: 56 en total (10 + 7 + 5 + 11 + 22 + 1)
- **Frameworks**: PULSO, ICP Scoring, PlainIQ, ROCA, CICLO, AVE, Metodología SONDA, ESCALA, FLUJO, ALMA, IMAN, RADAR, PENDIENTE, TRIÁNGULO DE INGRESOS, Value Proposition Canvas, Five Forces
- **Datos analizados**: 38,737 headlines, 4,129 triggers, 2,245 CTAs, 1,570 propuestas de valor, 31 blueprints WbD
- **Licencia**: MIT
- **Autor**: AI Huevos (huevos.ai)
- **Última actualización**: Febrero 2026

## Cómo se Instala

```bash
# Añadir el marketplace
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar un plugin específico
/plugin install growth-foundations@growth-marketplace
/plugin install sales-blueprint@growth-marketplace
/plugin install copywriting-engine@growth-marketplace
/plugin install motor-de-ofertas@growth-marketplace
/plugin install play-to-win@growth-marketplace
/plugin install conversational-pm@growth-marketplace
```

## Cómo se Usa

Los **skills** se activan automáticamente cuando Claude detecta tareas relevantes (via trigger keywords en frontmatter).

Los **commands** se invocan manualmente con `/`:
```
/os Mi Empresa SaaS
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
/escala Mi producto SaaS
/playbook Equipo de ventas enterprise
/deal-analysis Win/loss Q4
/kickoff Cliente nuevo Acme Corp
/roadmap
/estado
```

Los **agents** se activan dentro de commands o como workflows autónomos.
