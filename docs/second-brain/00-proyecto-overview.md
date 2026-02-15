# AI Huevos Growth Marketplace — Visión General del Proyecto

## Qué es

Un marketplace de plugins para Claude Code que empaqueta frameworks de B2B growth, marketing, ventas y operaciones como skills, agentes, comandos y hooks instalables. Es un **repositorio solo de contenido** — sin build system, sin tests, sin dependencias. Todos los archivos son Markdown o JSON de configuración.

## Visión

Democratizar el acceso a metodologías de ventas B2B de clase mundial (Winning by Design, Porter, Value Proposition Canvas) empaquetándolas como herramientas interactivas dentro de Claude Code. Un consultor o equipo de ventas puede instalar un plugin y tener acceso inmediato a frameworks que típicamente requieren training costoso.

## Para Quién

- **Equipos de ventas B2B** que necesitan frameworks de discovery, qualification y pipeline
- **Equipos de marketing** que buscan positioning y competitive analysis
- **Consultores** que usan Claude Code para servir clientes empresariales
- **Empresas LATAM ($50M+)** buscando institucionalizar operaciones comerciales

## Los Tres Plugins

### 1. growth-foundations (Gratis)
Frameworks fundamentales de B2B growth para cualquier equipo. El punto de entrada al marketplace.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `icp-analysis` | Skill | Análisis de Ideal Customer Profile con scoring SPICED (0-100) |
| `positioning` | Skill | Propuesta de valor, diferenciación, messaging framework |
| `competitive-analysis` | Skill | Five Forces de Porter + mapa competitivo visual |
| `/diagnostico` | Command | Assessment ClarQ: GTM, Revenue, Q2C, Capabilities (0-40) |
| `/icp` | Command | Workshop interactivo para definir y scorear ICP |

### 2. sales-blueprint
Sistema completo de ejecución de ventas B2B basado en Winning by Design.

| Componente | Tipo | Propósito |
|-----------|------|-----------|
| `discovery-mastery` | Skill | Preparación y ejecución de discovery calls con SPICED + ACE |
| `pipeline-management` | Skill | Gestión de pipeline con SPICED scoring y modelo Bowtie |
| `proposal-generation` | Skill | Generación de propuestas con business case y Trading Checklist |
| `coaching-cadence` | Skill | Coaching REKS, 8 modelos, cadencia semanal/mensual |
| `sdr-agent` | Agent | Workflow de SDR: research → SPICED → outreach |
| `deal-strategist` | Agent | Análisis crítico de deals: gaps SPICED → riesgos → MAP |
| `/discovery` | Command | Prep de discovery call interactiva |
| `/propuesta` | Command | Generador de propuestas B2B |
| `/pipeline` | Command | Review de salud del pipeline |
| `/coaching` | Command | Prep de 1:1 con diagnóstico REKS |

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

## El Hilo Conductor: SPICED

SPICED (Situation, Pain, Impact, Critical Event, Decision) es el lenguaje común que conecta los tres plugins:

- **growth-foundations** usa SPICED para **diagnosticar** el ICP
- **sales-blueprint** usa SPICED para **evaluar** oportunidades, gestionar pipeline, generar propuestas y coachear
- **copywriting-engine** usa los insights de SPICED para **comunicar** con copy efectivo

## Datos Clave del Proyecto

- **Idioma**: Todo el contenido en español. Nunca traducir a inglés.
- **Archivos totales**: 59 (57 Markdown + 2 JSON)
- **Skills**: 11 en total (3 + 4 + 4)
- **Commands**: 9 en total (2 + 4 + 3)
- **Agents**: 6 en total (0 + 2 + 4)
- **Frameworks**: SPICED, ICP Scoring, ClarQ, REKS, Value Proposition Canvas, Five Forces, Bowtie, ACE
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
```

## Cómo se Usa

Los **skills** se activan automáticamente cuando Claude detecta tareas relevantes (via trigger keywords en frontmatter).

Los **commands** se invocan manualmente con `/`:
```
/diagnostico Empresa XYZ
/icp SaaS B2B en LATAM
/discovery Acme Corp
/propuesta Deal con Cliente ABC
/pipeline Q4 2025
/coaching Rep Juan
/copy Landing page para producto SaaS
/headline Herramienta de analytics
/email-sequence Reactivación de clientes inactivos
```

Los **agents** se activan dentro de commands o como workflows autónomos.
