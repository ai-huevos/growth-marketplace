# Flujos de Usuario Completos

> Documento de referencia: todos los journeys de usuario del Growth Marketplace, desde descubrimiento hasta output final.

## Índice

1. [Flujo de Descubrimiento e Instalación](#1-flujo-de-descubrimiento-e-instalación)
2. [Flujo de Activación Automática (Skills)](#2-flujo-de-activación-automática-skills)
3. [Flujo de Comandos Interactivos](#3-flujo-de-comandos-interactivos)
4. [Flujo de Pipeline de Agentes](#4-flujo-de-pipeline-de-agentes)
5. [Flujos Cross-Plugin (PULSO como hilo conductor)](#5-flujos-cross-plugin)
6. [Flujo Completo: De Cero a Propuesta](#6-flujo-completo-de-cero-a-propuesta)

---

## 1. Flujo de Descubrimiento e Instalación

### Journey del usuario nuevo

```
┌─────────────────────────────────────────────────────────────────┐
│  DESCUBRIMIENTO                                                  │
│                                                                  │
│  GitHub / SkillsMP / Awesome List / Recomendación                │
│         │                                                        │
│         ▼                                                        │
│  Lee README del marketplace                                      │
│  (3 plugins, qué hace cada uno, instalación)                     │
│         │                                                        │
│         ▼                                                        │
│  INSTALACIÓN                                                     │
│                                                                  │
│  /plugin marketplace add ai-huevos/growth-marketplace            │
│         │                                                        │
│         ▼                                                        │
│  Claude Code clona repo → lee marketplace.json                   │
│  → indexa 3 plugins disponibles                                  │
│         │                                                        │
│         ▼                                                        │
│  /plugin discover                                                │
│  → Ve: growth-foundations (gratis)                                │
│       sales-blueprint                                            │
│       copywriting-engine                                         │
│         │                                                        │
│         ▼                                                        │
│  /plugin install growth-foundations@growth-marketplace            │
│         │                                                        │
│         ▼                                                        │
│  Claude Code lee plugin.json → descubre skills, commands         │
│  → Carga progresiva: solo nombre + descripción                   │
│  → SKILL.md completo se carga cuando se activa                   │
│         │                                                        │
│         ▼                                                        │
│  ✅ Plugin listo. Skills se activan por keywords,                │
│     Commands disponibles con /                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Scopes de instalación

| Scope | Comando | Efecto |
|-------|---------|--------|
| `user` (default) | `/plugin install growth-foundations` | Disponible en todos los proyectos del usuario |
| `project` | `/plugin install --scope project growth-foundations` | Compartido con equipo (en git) |
| `local` | `/plugin install --scope local growth-foundations` | Solo esta máquina (.gitignore) |
| `managed` | Configuración enterprise | Toda la organización |

### Auto-update

Marketplaces oficiales auto-actualizan por defecto. El usuario recibe la última versión del plugin cada vez que Claude Code inicia sesión.

---

## 2. Flujo de Activación Automática (Skills)

Los skills NO se invocan manualmente — se activan cuando Claude detecta **trigger keywords** en la conversación del usuario.

### Mecanismo de activación

```
┌──────────────────────────────────────────────────────┐
│  USUARIO ESCRIBE:                                     │
│  "Necesito definir nuestro ideal customer profile      │
│   para un SaaS B2B mid-market"                        │
│         │                                             │
│         ▼                                             │
│  CLAUDE CODE: Pattern Matching                        │
│  Detecta: "ideal customer profile" ← trigger keyword  │
│  Match: icp-analysis/SKILL.md                         │
│         │                                             │
│         ▼                                             │
│  CARGA PROGRESIVA:                                    │
│  1. Lee YAML frontmatter (ya cargado)                 │
│  2. Carga cuerpo completo de SKILL.md                 │
│  3. Carga recursos bajo demanda:                      │
│     - frameworks/scoring-model.md (cuando scorea)     │
│     - templates/icp-worksheet.md (cuando genera)      │
│         │                                             │
│         ▼                                             │
│  EJECUCIÓN: Claude sigue instrucciones del SKILL.md   │
│  (fases, preguntas, frameworks, output format)        │
│         │                                             │
│         ▼                                             │
│  OUTPUT: Documento ICP completo con scoring            │
└──────────────────────────────────────────────────────┘
```

### Tabla de triggers por skill

| Plugin | Skill | Triggers principales |
|--------|-------|---------------------|
| growth-foundations | icp-analysis | "ICP", "ideal customer profile", "perfil de cliente ideal", "segmentación" |
| growth-foundations | positioning | "posicionamiento", "propuesta de valor", "diferenciación", "messaging" |
| growth-foundations | competitive-analysis | "análisis competitivo", "competidores", "mapa de mercado", "Five Forces" |
| sales-blueprint | discovery-mastery | "discovery call", "PULSO", "qualifying opportunity", "AVE" |
| sales-blueprint | pipeline-management | "pipeline review", "deal health", "pipeline health", "forecast" |
| sales-blueprint | proposal-generation | "propuesta", "proposal", "SOW", "business case", "cotización" |
| sales-blueprint | coaching-cadence | "coaching", "1:1", "ROCA", "rep performance" |
| copywriting-engine | headline-mastery | "headline", "título", "subject line", "genera titulares" |
| copywriting-engine | email-sequences | "email sequence", "secuencia de emails", "drip campaign", "cold email" |
| copywriting-engine | landing-pages | "landing page", "página de ventas", "conversion copy", "above the fold" |
| copywriting-engine | psychological-triggers | "trigger psicológico", "persuasion", "scarcity", "social proof" |

### Ejemplo detallado: activación de positioning

```
Usuario: "Necesito trabajar el posicionamiento de nuestro producto de analytics"

  Claude detecta → "posicionamiento" → positioning/SKILL.md

  Fase 1: Contexto
  Claude pregunta: "¿Cuál es el producto específico?"
  Claude pregunta: "¿Quién es el público objetivo?"
  Claude pregunta: "¿Cuáles son las alternativas actuales?"
  (espera respuesta del usuario en cada pregunta)

  Fase 2: Positioning Statement
  Genera: "Para [audiencia] que [necesidad], [producto] es la [categoría]
           que [beneficio clave] a diferencia de [alternativas] porque [razón]."

  Fase 3: Value Proposition Canvas
  Lee: frameworks/value-prop-canvas.md
  Genera canvas con: Jobs-to-be-done, Pains, Gains → Products, Pain Relievers, Gain Creators

  Fase 4: Messaging Framework
  Genera: Tagline + Elevator Pitch + Value Story + 3 Proof Points
```

---

## 3. Flujo de Comandos Interactivos

Los comandos se invocan manualmente con `/` y ejecutan workflows multi-fase con interacción usuario.

### Patrón general de un comando

```
┌──────────────────────────────────────────────────────┐
│  /comando [argumentos]                                │
│         │                                             │
│         ▼                                             │
│  FASE 1: Intake / Research                            │
│  → Claude recopila contexto (pregunta o investiga)    │
│  → Espera input del usuario si es necesario           │
│         │                                             │
│         ▼                                             │
│  FASE 2-N: Ejecución por fases                        │
│  → Cada fase tiene instrucciones específicas           │
│  → Lee frameworks/templates según necesidad           │
│  → Interactúa con usuario entre fases                 │
│         │                                             │
│         ▼                                             │
│  FASE FINAL: Output estructurado                      │
│  → Formato definido en el comando                     │
│  → Incluye scoring, recomendaciones, next steps       │
└──────────────────────────────────────────────────────┘
```

### Flujo: `/diagnostico`

```
/diagnostico

Fase 1: Recopilación
  Claude: "Vamos a evaluar tu madurez comercial con ClarQ."
  Claude: "¿Cuál es tu modelo de negocio?" (espera)
  Claude: "¿Cuántos clientes activos tienes?" (espera)
  Claude: "¿Cómo generas revenue actualmente?" (espera)
  ... (10 preguntas por las 4 dimensiones)

Fase 2: Scoring ClarQ (0-40)
  Dimensión             Score    Color
  ─────────────────────────────────────
  GTM Strategy          7/10     🟢
  Revenue Streams       4/10     🟡
  Quota-to-Cash         3/10     🔴
  Capabilities          5/10     🟡
  ─────────────────────────────────────
  TOTAL                19/40     Growth Constrained

Fase 3: Diagnóstico
  Identifica "Fragile Giant" patterns:
  - Juan Guillermo Problem (dependencia de 1-2 vendedores)
  - Barbacha (pipeline inflado sin calificación)
  - Caja Negra (no hay visibilidad de métricas)

Fase 4: Recomendaciones
  → Top 3 acciones inmediatas
  → Qué plugin/skill usar para cada una
  → Next steps priorizados
```

### Flujo: `/discovery [empresa]`

```
/discovery Acme Corp

Fase 1: Research (automática)
  Claude usa WebSearch para:
  - Website de Acme Corp
  - LinkedIn de la empresa
  - Noticias recientes
  - Funding, tech stack, tamaño
  → Genera resumen de investigación

Fase 2: Hipótesis PULSO
  Construye hipótesis pre-call:
  S (Situation):    "SaaS B2B, 200 empleados, Serie B..."     Confianza: Media
  P (Pain):         "Crecimiento estancado post-Serie B..."    Confianza: Baja
  I (Impact):       "Perdiendo $2M/año en churn..."            Confianza: Baja
  C (Critical):     "Board review en Q3..."                    Confianza: Media
  D (Decision):     "VP Sales + CRO..."                        Confianza: Baja

Fase 3: Validación
  Claude: "He construido esta hipótesis. ¿Puedes confirmar o ajustar?"
  (usuario corrige/confirma cada dimensión)

Fase 4: Preguntas priorizadas
  Lee: discovery-mastery/frameworks/question-bank.md
  Selecciona 5-7 preguntas relevantes al contexto
  Prioriza por: dimensión PULSO con menor confianza

Fase 5: Agenda AVE
  A (Appreciate): "Gracias por el tiempo, [nombre]..."
  C (Check):      "Tenemos 30 minutos, ¿correcto?"
  E (End Goal):   "Mi objetivo es entender si podemos ayudarles con [hipótesis]"
  + Agenda de 30 min (5 min intro, 20 min discovery, 5 min next steps)

Fase 6: Objeciones anticipadas
  3-4 objeciones probables + respuesta sugerida
  Basadas en el perfil de la empresa

OUTPUT FINAL:
  📋 Pre-Call Brief completo
  ├── Research Summary
  ├── Hipótesis PULSO (con confianza)
  ├── 5-7 Preguntas priorizadas
  ├── Agenda AVE (30 min)
  ├── Objeciones anticipadas
  └── Checklist pre-call
```

### Flujo: `/propuesta`

```
/propuesta

⚠️ Gate: ¿Hay PULSO completado con score >= 23?
  → SI: Continúa
  → NO: "Primero completa un discovery. Usa /discovery [empresa]"

Fase 1: Intake PULSO
  Claude: "¿Cuál es el PULSO de este deal?"
  (recopila las 5 dimensiones + score)

Fase 2: Segmentación
  ACV >= $100K → Enterprise (template: enterprise-proposal.md)
  ACV $20K-$100K → Mid-Market (template: mid-market-proposal.md)

Fase 3: Información adicional
  Claude: "¿Cuál es tu solución específica?"
  Claude: "¿Tienes casos de éxito relevantes?"
  Claude: "¿Cuál es el timeline del cliente?"

Fase 4: Generación
  Estructura de 8 secciones:
  1. Contexto del Negocio (from PULSO-S)
  2. Impacto del Problema (from PULSO-P+I)
  3. Solución Propuesta
  4. Resultados Esperados (ROI cuantificado)
  5. Plan de Implementación
  6. Inversión (pricing + opciones)
  7. Marco de Decisión (from PULSO-C+D)
  8. Mutual Action Plan (MAP)

Fase 5: Trading Prep
  9-Step Trading Checklist:
  "Nunca des sin recibir" → Para cada concesión, define qué pides a cambio

Fase 6: Review
  Claude presenta propuesta completa
  Usuario revisa y ajusta
```

### Flujo: `/copy [tipo] [brief]`

```
/copy Landing page para SaaS de automatización de ventas B2B

Fase 1: Research Agent
  → WebSearch: competitors, forums, reviews
  → Genera: audience profile + market insights + competitor analysis
  → Quality Gate: ¿Completo? ¿Relevante? ¿Actualizado?

Fase 2: Insight Agent
  → Analiza patrones del research
  → Identifica pain #1, messaging strategy, triggers
  → Core message: "[Audience] puede [result] sin [obstacle] usando [solution]"
  → Quality Gate: ¿Insights accionables? ¿Estrategia clara?

Fase 3: Ideation Agent
  → Genera 5 ángulos creativos
  → Evalúa: Creativity 15%, Relevance 25%, Feasibility 15%, Variety 15%, Quality 30%
  → Selecciona top 2-3 conceptos
  → Quality Gate: ¿Conceptos diferenciados? ¿Alineados con insights?

Fase 4: Copy Output Agent
  → Escribe copy completo (10 secciones para landing page)
  → Aplica triggers psicológicos por sección
  → Genera variaciones A/B
  → Score: Effectiveness 25%, Clarity 20%, Persuasion 25%, Brand 15%, Technical 15%
  → Target: >7.5/10 headlines, >8.0/10 CTAs

OUTPUT:
  📦 Paquete completo de copy
  ├── Brief original
  ├── Research summary
  ├── Strategic insights
  ├── Copy final (10 secciones)
  ├── 2-3 variaciones A/B
  ├── Scoring por pieza
  └── Recomendaciones de optimización
```

---

## 4. Flujo de Pipeline de Agentes

El marketplace tiene **2 patrones de agentes** distintos.

### Patrón 1: Diagnóstico → Acción (sales-blueprint)

Agentes autónomos que diagnostican y recomiendan.

```
┌─────────────────────────────────────────────┐
│  SDR Agent                                   │
│                                              │
│  Input: Empresa target + contexto            │
│         │                                    │
│         ▼                                    │
│  Research → PULSO hypothesis → Tier         │
│         │                                    │
│         ├── Tier 1 (20+): Outreach premium   │
│         ├── Tier 2 (12-19): Semi-personal    │
│         └── Tier 3 (<12): Automatización     │
│         │                                    │
│         ▼                                    │
│  Output: Paquete de outreach                 │
│  (email + LinkedIn + call script             │
│   + secuencia de 14 días, 8 touches)         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Deal Strategist Agent                       │
│                                              │
│  Input: Deal en pipeline                     │
│         │                                    │
│         ▼                                    │
│  Intake → PULSO crítico → Risk assessment   │
│  (escepticismo profesional por dimensión)    │
│         │                                    │
│         ▼                                    │
│  Risk Matrix (6 categorías)                  │
│  Buying Center 3×3 (3 contactos × 3 niveles)│
│         │                                    │
│         ▼                                    │
│  Go/No-Go + Probabilidad                    │
│         │                                    │
│         ├── Go (PULSO >= 20): Genera MAP    │
│         └── No-Go: Recomendaciones de salida │
└─────────────────────────────────────────────┘
```

### Patrón 2: Pipeline Secuencial (copywriting-engine)

4 agentes donde el output de uno alimenta al siguiente.

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Research  │───▶│ Insight  │───▶│ Ideation │───▶│  Copy    │
│  Agent   │    │  Agent   │    │  Agent   │    │ Output   │
│          │    │          │    │          │    │  Agent   │
│ Market   │    │ Patterns │    │ Creative │    │ Final    │
│ data     │    │ Strategy │    │ angles   │    │ copy     │
│ Audience │    │ Triggers │    │ Top 2-3  │    │ A/B vars │
│ Compet.  │    │ Core msg │    │ concepts │    │ Scoring  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
     │               │               │               │
     ▼               ▼               ▼               ▼
  Quality         Quality         Quality         Quality
   Gate            Gate            Gate            Gate
```

Orquestado por el comando `/copy`. Cada agente tiene:
- **Inputs** definidos (del agente anterior)
- **Proceso** multi-paso
- **Quality Gate** antes de pasar al siguiente
- **Outputs** estructurados

---

## 5. Flujos Cross-Plugin

### PULSO como hilo conductor

PULSO conecta los 3 plugins en un flujo lógico:

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  GROWTH-FOUNDATIONS              SALES-BLUEPRINT             │
│  ┌─────────────────┐           ┌──────────────────┐         │
│  │ /diagnostico    │           │ /discovery       │         │
│  │ ClarQ (0-40)    │──────────▶│ PULSO (5-30)    │         │
│  │                 │ "Necesitas│ Diagnóstico de   │         │
│  │ Identifica gaps │  pipeline"│ oportunidad      │         │
│  └────────┬────────┘           └────────┬─────────┘         │
│           │                             │                    │
│           ▼                             ▼                    │
│  ┌─────────────────┐           ┌──────────────────┐         │
│  │ icp-analysis    │           │ /pipeline        │         │
│  │ ICP Score(0-100)│           │ Health scoring   │         │
│  │                 │──────────▶│ PULSO por deal  │         │
│  │ Define a quién  │ "Califica │ Verde/Amarillo/  │         │
│  │ perseguir       │  deals"   │ Rojo             │         │
│  └────────┬────────┘           └────────┬─────────┘         │
│           │                             │                    │
│           │                             ▼                    │
│           │                    ┌──────────────────┐         │
│           │                    │ /propuesta       │         │
│           │                    │ Gate: PULSO ≥ 23│         │
│           │                    │                  │         │
│           │                    │ Propuesta basada │         │
│           │                    │ en diagnóstico   │         │
│           │                    └────────┬─────────┘         │
│           │                             │                    │
│           │                             ▼                    │
│           │                    ┌──────────────────┐         │
│           │                    │ /coaching        │         │
│           │                    │ ROCA framework   │         │
│           │                    │                  │         │
│           │                    │ Desarrolla skills│         │
│           │                    │ del equipo       │         │
│           │                    └──────────────────┘         │
│           │                                                  │
│           │           COPYWRITING-ENGINE                     │
│           │           ┌──────────────────┐                  │
│           └──────────▶│ /copy            │                  │
│             "Comunica │ Pipeline de 4    │                  │
│              el ICP"  │ agentes          │                  │
│                       │                  │                  │
│                       │ Usa pains/impact │                  │
│                       │ del PULSO para  │                  │
│                       │ copy persuasivo  │                  │
│                       └──────────────────┘                  │
│                                                              │
│  PULSO = Situation · Pain · Impact · Critical Event ·       │
│           Decision                                           │
│                                                              │
│  DIAGNÓSTICAR → EVALUAR → COMUNICAR                         │
│  (foundations)   (sales)   (copywriting)                     │
└─────────────────────────────────────────────────────────────┘
```

### Ejemplo: Journey completo de un consultor

```
Día 1: Diagnóstico inicial
  /diagnostico → ClarQ score 18/40 (Growth Constrained)
  → Descubre: no hay ICP definido, pipeline sin calificar

Día 2: Definir ICP
  "Ayúdame a definir el ICP" → icp-analysis se activa
  → ICP Score: Tier 1 = Enterprise SaaS $5M-$50M ARR
  → Genera criterios de calificación

Día 3: Positioning
  "Necesito posicionar nuestro producto" → positioning se activa
  → Positioning statement + VPC + messaging framework

Día 5: Pipeline existente
  /pipeline → Sube deals actuales → Health scoring
  → 3 deals verdes, 5 amarillos, 2 rojos
  → Acciones inmediatas por deal

Día 6: Prep discovery para nuevo deal
  /discovery Acme Corp → Pre-call brief completo
  → PULSO hypothesis + agenda AVE

Día 8: Post-discovery, deal calificado
  PULSO score: 25 (verde) → Listo para propuesta
  /propuesta → Genera propuesta enterprise

Día 10: Copy para outreach
  /copy Email sequence para SDR targeting CTO de empresas SaaS
  → 7 emails con cadencia + triggers psicológicos

Día 12: Coaching del equipo
  /coaching → ROCA assessment del SDR junior
  → Skills gap: discovery questions → 30 min agenda coaching
```

---

## 6. Flujo Completo: De Cero a Propuesta

El journey más largo y completo del sistema:

```
ETAPA 1: SETUP
══════════════════════════════════════════════════
/plugin marketplace add ai-huevos/growth-marketplace
/plugin install growth-foundations@growth-marketplace
/plugin install sales-blueprint@growth-marketplace

ETAPA 2: DIAGNÓSTICO (growth-foundations)
══════════════════════════════════════════════════
/diagnostico
→ ClarQ assessment (10 preguntas, 4 dimensiones)
→ Score: 22/40 "Growth Constrained"
→ Gap principal: No hay ICP definido

ETAPA 3: DEFINIR ICP (growth-foundations)
══════════════════════════════════════════════════
"Quiero definir nuestro ICP"
→ icp-analysis skill se activa automáticamente
→ 5 fases de workshop interactivo
→ ICP Score: Tier 1 = Empresas SaaS B2B, 200-2000 emp, $5-50M ARR
→ Scoring model: 0-100 con pesos por criterio

ETAPA 4: POSITIONING (growth-foundations)
══════════════════════════════════════════════════
"Ahora necesito posicionar el producto"
→ positioning skill se activa
→ Positioning Statement + VPC + Messaging Framework

ETAPA 5: DISCOVERY (sales-blueprint)
══════════════════════════════════════════════════
/discovery Acme Corp
→ Research automático → Hipótesis PULSO → Preguntas → Agenda AVE
→ Se ejecuta la call real
→ Post-call: PULSO score 26 (verde, calificado)

ETAPA 6: PIPELINE (sales-blueprint)
══════════════════════════════════════════════════
/pipeline
→ Acme Corp entra al pipeline con PULSO 26
→ Health: Verde
→ Coverage: 3.2x (aceptable)
→ Forecast: Commit

ETAPA 7: PROPUESTA (sales-blueprint)
══════════════════════════════════════════════════
/propuesta
→ Gate: PULSO 26 >= 23 ✅
→ Segment: Enterprise (ACV $150K)
→ 8 secciones basadas en PULSO del discovery
→ Trading prep: 9-step checklist
→ MAP con timeline del Critical Event

ETAPA 8: COPY DE SOPORTE (copywriting-engine)
══════════════════════════════════════════════════
/copy Email de follow-up post-propuesta para CTO de Acme Corp
→ 4 agentes generan:
   Research → contexto específico de Acme
   Insight → pain #1 del discovery
   Ideation → 3 ángulos (ROI, urgencia, social proof)
   Copy → Email final + 2 variaciones A/B

RESULTADO FINAL:
════════════════
✅ ICP definido y scoreado
✅ Producto posicionado
✅ Deal diagnosticado con PULSO
✅ Propuesta enterprise personalizada
✅ Copy de follow-up optimizado
Todo conectado por PULSO como lenguaje común.
```

---

## Documentos relacionados

- `01-arquitectura-convenciones.md` — Estructura técnica del repositorio
- `02-metodologia-pulso.md` — PULSO en detalle
- `07-sistema-agentes.md` — Workflows de los 6 agentes
- `15-arquitectura-sistema.md` — Arquitectura técnica del sistema
