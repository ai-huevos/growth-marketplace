# AI Huevos Growth Marketplace

Un **sistema operativo de crecimiento B2B** que diagnostica tu situación, activa los frameworks correctos automáticamente, y te guía a través de las 4 fases del crecimiento empresarial.

> No preguntes qué plugin necesitas. Pregunta qué problema quieres resolver.

## El Tablero de Crecimiento

```
                              ┌─────────────────────────────────────┐
                              │           GrowthOS                   │
                              │    "Tu bottleneck define tu fase"    │
                              │         /os → /estado → /roadmap     │
                              └──────────────────┬──────────────────┘
                                                 │
                    ┌────────────────────────────┼────────────────────────────┐
                    │                            │                            │
                    ▼                            ▼                            ▼
    ┌───────────────────────┐    ┌───────────────────────┐    ┌───────────────────────┐
    │     GCO (Estado)      │    │   PULSO (Diagnóstico) │    │  Framework Registry   │
    │  ─────────────────    │    │  ─────────────────    │    │  ─────────────────    │
    │  • Fase actual        │    │  P - Panorama         │    │  ESCALA, FLUJO, ROCA  │
    │  • Skills completados │    │  U - Urgencia         │    │  SONDA, ClarQ, etc.   │
    │  • Outputs generados  │    │  L - Logro            │    │                       │
    │  • PULSO scores       │    │  S - Situación Crítica│    │  56 templates         │
    │                       │    │  O - Organización     │    │  29 skills            │
    └───────────────────────┘    └───────────────────────┘    └───────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════
                              LAS 4 FASES DEL CRECIMIENTO
═══════════════════════════════════════════════════════════════════════════════════════

┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    DEFINIR      │────▶│     ATRAER      │────▶│   CONVERTIR     │────▶│    ESCALAR      │
│   (Identidad)   │     │   (Atracción)   │     │    (Ventas)     │     │   (Retención)   │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│                 │     │                 │     │                 │     │                 │
│ "¿Quién soy?"   │     │ "¿Cómo llego?"  │     │ "¿Cómo cierro?" │     │ "¿Cómo retengo?"│
│                 │     │                 │     │                 │     │                 │
│ • ICP scoring   │     │ • Content plan  │     │ • Discovery     │     │ • CS ops        │
│ • Positioning   │     │ • Quiz funnels  │     │ • Pipeline mgmt │     │ • Renewals      │
│ • Competitive   │     │ • ESCALA ladder │     │ • Proposals     │     │ • Coaching      │
│ • Product mktg  │     │ • Headlines     │     │ • Deal strategy │     │ • Transformation│
│                 │     │ • Landing pages │     │ • Email seqs    │     │                 │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ PLUGINS:        │     │ PLUGINS:        │     │ PLUGINS:        │     │ PLUGINS:        │
│ growth-found.   │     │ growth-found.   │     │ sales-blueprint │     │ play-to-win     │
│ play-to-win     │     │ motor-ofertas   │     │ copywriting-eng │     │ sales-blueprint │
│                 │     │ copywriting-eng │     │ play-to-win     │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘

═══════════════════════════════════════════════════════════════════════════════════════
```

## Quick Start

```bash
# 1. Añadir el marketplace
/plugin marketplace add ai-huevos/growth-marketplace

# 2. Instalar todos los plugins (o solo los que necesites)
/plugin install growth-foundations@growth-marketplace
/plugin install sales-blueprint@growth-marketplace
/plugin install copywriting-engine@growth-marketplace
/plugin install motor-de-ofertas@growth-marketplace
/plugin install play-to-win@growth-marketplace
/plugin install conversational-pm@growth-marketplace

# 3. Iniciar GrowthOS — te diagnostica y te rutea
/os
```

## Los 6 Plugins

| Plugin | Enfoque | Skills | Commands |
|--------|---------|--------|----------|
| **growth-foundations** | ICP, positioning, competitive, quiz funnels, content strategy | 6 | `/diagnostico` `/icp` `/quiz` |
| **sales-blueprint** | Discovery PULSO, pipeline, proposals, coaching | 4 | `/discovery` `/pipeline` `/propuesta` `/coaching` |
| **copywriting-engine** | Headlines, emails, landing pages, triggers psicológicos | 4 | `/copy` `/headline` `/email-sequence` |
| **motor-de-ofertas** | Value ladders (ESCALA), funnels (FLUJO), brand character (Alma) | 4 | `/escala` `/funnel-diagnosis` |
| **play-to-win** | Sales transformation 90 días, CS ops, deal strategy, renewals | 11 | `/playbook` `/deal-analysis` `/kickoff` |
| **conversational-pm** | Orquestador GrowthOS, roadmaps, estado del sistema | 1 | `/os` `/roadmap` `/estado` |

**Total**: 29 skills, 8 agents, 18 commands, 56 templates

## Comandos GrowthOS (El Tablero)

| Comando | Propósito |
|---------|-----------|
| `/os` | **Iniciar partida** — intake conversacional, diagnóstico, ruteo a fase correcta |
| `/estado` | **Ver tablero** — fase actual, skills completados, outputs, próximos pasos |
| `/roadmap` | **Plan de batalla** — roadmap de 90 días basado en tu fase y progreso |

## Ejemplo de Uso

```
Usuario: /os

GrowthOS: "Voy a hacerte algunas preguntas para entender tu situación...
          ¿Cuál es tu empresa y en qué industria operas?"

[... 4 preguntas de intake ...]

GrowthOS: "Basándome en lo que me contaste:
          - Tu bottleneck principal es ATRAER leads
          - Tienes buen producto (clientes existentes satisfechos)
          - Necesitas contenido y funnel

          Te sugiero empezar con la fase ATRAER.
          ¿Quieres que te ayude a crear un plan de contenido?"

Usuario: Sí

GrowthOS: [Activa content-strategy, escala, flujo]
          [Genera Content Plan con 20 topics priorizados]
          [Crea ESCALA ladder con 4 tiers]
          [Diseña arquitectura de funnel]
```

## Para Quién

- **Equipos de ventas B2B** que necesitan frameworks de discovery, qualification y pipeline
- **Equipos de marketing** que buscan positioning y competitive analysis
- **Consultores** que usan Claude Code para servir clientes empresariales
- **Empresas LATAM ($50M+)** buscando institucionalizar operaciones comerciales
- **Founders** que quieren un sistema de crecimiento en lugar de tácticas sueltas

## La Filosofía

> Este no es un marketplace de herramientas. Es un **sistema operativo de crecimiento**.

1. **Need-driven, no plugin-driven**: GrowthOS diagnostica tu situación y activa los frameworks correctos
2. **Spanish-first**: Todo el contenido está en español, pensado para LATAM
3. **PULSO como lingua franca**: Un modelo de diagnóstico consistente que conecta discovery → pipeline → proposals → coaching
4. **Templates como DNA**: 56 templates definen contratos de output — qué debe entregarse, no cómo

## Documentación

- `CLAUDE.md` — Guía completa de arquitectura y convenciones
- `os/growthOS.md` — Protocolo del orquestador maestro
- `docs/template-catalog.md` — Catálogo de los 56 templates
- `docs/second-brain/` — 28 documentos de conocimiento del proyecto

## Contribuir

Este marketplace es mantenido por [AI Huevos](https://huevos.ai). Para reportar issues o sugerir mejoras, abre un issue en este repositorio.

## Licencia

MIT
