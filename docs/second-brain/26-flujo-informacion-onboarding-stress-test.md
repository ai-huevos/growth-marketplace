# 26 — Flujo de Información, Onboarding de Marca y Stress Test

> **Propósito**: Documentar cómo fluye la información en el marketplace, cómo la PM orquesta todo el sistema, el proceso de onboarding para una nueva marca, y protocolos de stress test para validar el sistema end-to-end.

---

## 1. Flujo de Información del Marketplace (Flowchart)

### Vista General: La PM como Centro Neurálgico

```
                    ┌───────────────────────────────────┐
                    │         NUEVA MARCA LLEGA          │
                    │    (Conversación / Input bruto)     │
                    └──────────────┬────────────────────┘
                                   ▼
                    ┌───────────────────────────────────┐
                    │      PM — PUERTA DE ENTRADA        │
                    │  Modo 1: Diagnostic (negocio)      │
                    │  Modo 2: Technical Build (sistema)  │
                    └──────────────┬────────────────────┘
                                   ▼
                    ┌───────────────────────────────────┐
                    │     FASE 0: INGESTA + PULSO        │
                    │  P = Panorama (estado actual)       │
                    │  U = Urgencia (dolor principal)     │
                    │  L = Logro (qué cambia)             │
                    │  S = Situación Crítica (timeline)   │
                    │  O = Organización (quién decide)    │
                    └──────────────┬────────────────────┘
                                   ▼
                    ┌───────────────────────────────────┐
                    │   CLASIFICACIÓN: GROWTH STAGE       │
                    │  Pre-Product │ First Revenue        │
                    │  Growth      │ Scale                │
                    └──────────────┬────────────────────┘
                                   ▼
          ┌────────────────────────┼────────────────────────┐
          ▼                        ▼                        ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  FASE DEFINIR     │  │  FASE ATRAER      │  │  FASE CONVERTIR   │
│                    │  │                    │  │                    │
│ growth-foundations │  │ motor-de-ofertas   │  │ sales-blueprint    │
│ • /diagnostico     │  │ • /escala          │  │ • /discovery       │
│ • /icp             │  │ • flujo            │  │ • /pipeline        │
│ • positioning      │  │ • alma             │  │ • /propuesta       │
│ • competitive      │  │ • funnel-optim     │  │ • /coaching        │
│ • content-strategy │  │                    │  │                    │
│ • /quiz            │  │ play-to-win        │  │ play-to-win        │
│ • product-mktg     │  │ • customer-journey │  │ • deal-strategy    │
│ • icp-tal          │  │ • discovery-demo   │  │ • relationship-map │
│                    │  │ • advanced-tech    │  │ • renewal-expand   │
└────────┬───────────┘  └────────┬───────────┘  └────────┬───────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌───────────────────────────────────┐
                    │     FASE COMUNICAR                  │
                    │  copywriting-engine                 │
                    │  • /copy (4 agentes encadenados)    │
                    │  • /headline                        │
                    │  • /email-sequence                  │
                    │  • psychological-triggers           │
                    │  • landing-pages                    │
                    └──────────────┬────────────────────┘
                                   ▼
                    ┌───────────────────────────────────┐
                    │     FASE ESCALAR                    │
                    │  play-to-win                        │
                    │  • sales-transformation             │
                    │  • customer-success-ops             │
                    │  • /playbook (AI Sales Coach)       │
                    │  • /kickoff                         │
                    └──────────────┬────────────────────┘
                                   ▼
                    ┌───────────────────────────────────┐
                    │      PM SINTETIZA                   │
                    │  → Roadmap 90 días                  │
                    │  → KPIs por fase                    │
                    │  → Checkpoints mensuales            │
                    └──────────────┬────────────────────┘
                                   ▼
                    ┌───────────────────────────────────┐
                    │      BRAND LAYER (opcional)         │
                    │  ai-huevos-brand skill              │
                    │  • brand-voice.md                   │
                    │  • QA checklist (90/100 mínimo)     │
                    │  • document-builder / web-builder   │
                    └───────────────────────────────────┘
```

### Flujo de Datos entre Plugins (Output → Input Chaining)

```
/diagnostico ──→ ClarQ Heatmap (GTM/Revenue/Q2C/Capabilities)
     │                                    │
     │ gap: "No tengo ICP definido"       │ gap: "Mi funnel no convierte"
     ▼                                    ▼
/icp ──→ ICP Scoring (0-100, 3 tiers) ──→ /escala ──→ Value Ladder
     │                                         │
     │ ICP + Positioning                       │ Oferta estructurada
     ▼                                         ▼
content-strategy ──→ Ski Slope Plan       flujo ──→ Funnel Blueprint (7 fases)
     │                                         │
     │ Plan de contenido                       │ Funnel diseñado
     ▼                                         ▼
/copy ──→ Landing + Emails             /discovery ──→ PULSO Prep
     │    (4 agentes)                        │
     │ Copy listo                            │ Discovery data
     ▼                                      ▼
/email-sequence ──→ Nurture      /propuesta ──→ Business Case
                                      │
                                      │ Pipeline activo
                                      ▼
                                /pipeline ──→ Health + Forecast
                                      │
                                      ▼
                                /coaching ──→ ROCA + Plan de mejora
```

### PM como Orquestadora: Dos Modos de Operación

```
┌─────────────────────────────────────────────────────────────────┐
│                        PM AGENT                                  │
│                                                                  │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐  │
│  │  MODO 1: DIAGNOSTIC     │  │  MODO 2: TECHNICAL BUILD      │  │
│  │                         │  │                                │  │
│  │  Trigger:               │  │  Trigger:                      │  │
│  │  "diagnosticar negocio" │  │  "construir sistema"           │  │
│  │  "roadmap 90 días"      │  │  "diseñar dashboard"           │  │
│  │  "por dónde empiezo"    │  │  "conectar mis datos"          │  │
│  │                         │  │                                │  │
│  │  Herramientas:          │  │  Agentes:                      │  │
│  │  → 6 plugins            │  │  → Architecture Plumber        │  │
│  │  → 29 skills            │  │  → Data Specialist             │  │
│  │  → 15 commands          │  │  → Database Architect          │  │
│  │                         │  │  → Implementation Agent        │  │
│  │  Output:                │  │  → Dashboard Builder           │  │
│  │  Roadmap 90 días        │  │                                │  │
│  │  + outputs encadenados  │  │  Output:                       │  │
│  │                         │  │  Sistema técnico implementado  │  │
│  └─────────────────────────┘  └──────────────────────────────┘  │
│                                                                  │
│  Principios PM:                                                  │
│  • Escucha antes de actuar (PULSO discovery)                     │
│  • Confirma antes de ejecutar (checkpoints)                      │
│  • Conecta outputs (chaining entre plugins)                      │
│  • Nunca asume — pregunta                                        │
│  • Equipo ≤3 personas = foco secuencial, max 2 plugins activos   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Proceso de Onboarding para una Nueva Marca

### Pre-requisitos del Sistema

Antes de recibir una nueva marca, verificar:

| Componente | Estado Requerido | Cómo Verificar |
|------------|------------------|----------------|
| Marketplace plugins | 6 instalados | `ls plugins/` |
| Client directory | Existe patrón | `ls clients/` |
| Brand skill | Template disponible | `ls ~/.claude/skills/ai-huevos-brand/` como referencia |
| NLM notebook | Activo + limpio | `nlm source list second-brain` |
| PM skill | Symlinked | `ls ~/.claude/skills/conversational-pm/` |

### Fase 1: Setup Técnico (30 min)

```
┌─────────────────────────────────────────────────┐
│  1.1 Crear directorio del cliente                │
│                                                   │
│  clients/                                         │
│    <nueva-marca>/                                 │
│      brand-config/                                │
│        brand-voice.md        ← DRAFT              │
│        nlm-prompts.md        ← Prompts custom     │
│        brand-qa-checklist.md ← QA criteria         │
│      outputs/                ← Generados por PM    │
│      notes/                  ← Notas de sesión     │
│                                                   │
│  1.2 Clonar templates desde ai-huevos             │
│  cp clients/ai-huevos/brand-config/*.md →         │
│     clients/<nueva-marca>/brand-config/            │
│  (Adaptar contenido, mantener estructura)          │
│                                                   │
│  1.3 Crear brand skill (opcional, si ya hay        │
│      identidad visual)                             │
│  ~/.claude/skills/<nueva-marca>-brand/             │
│    SKILL.md, references/, tokens/                  │
└─────────────────────────────────────────────────┘
```

#### Checklist de Setup

- [ ] Directorio `clients/<marca>/` creado con 3 subdirectorios
- [ ] `brand-voice.md` inicializado como DRAFT (completar después de Fase 2)
- [ ] `nlm-prompts.md` con prompts base adaptados
- [ ] `brand-qa-checklist.md` con scoring mínimo definido (90/100 recomendado)
- [ ] Brand skill symlink creado (si aplica)

### Fase 2: Discovery Conversacional con PM (60-90 min)

Esta es la fase más importante. La PM conduce la sesión.

```
Trigger: "conversational pm" o "diagnosticar negocio"

PM ejecuta PULSO Discovery:
│
├── P (Panorama): ¿Qué vendes? ¿A quién? ¿Equipo?
│   → Extrae: icp_draft, team_size, producto
│
├── U (Urgencia): ¿Qué te duele hoy? ¿Qué no funciona?
│   → Extrae: bottleneck, failed_experiments
│
├── L (Logro): ¿Qué cambia si resolvemos esto?
│   → Extrae: kpi_target, success_definition
│
├── S (Situación Crítica): ¿Timeline? ¿Presión externa?
│   → Extrae: timeline, urgency_level
│
└── O (Organización): ¿Quién decide? ¿Quién ejecuta?
    → Extrae: stakeholders, decision_maker
```

**Output de Fase 2:**
1. Growth Stage clasificado (Pre-Product / First Revenue / Growth / Scale)
2. Variables PULSO documentadas
3. Plugin routing plan (qué plugins, en qué orden)
4. Roadmap draft (90 días)

### Fase 3: Ejecución de Plugins (2-4 horas, según stage)

La PM rutea según el growth stage detectado:

#### Pre-Product (sin revenue, sin ICP)
```
Semana 1-2: /icp → positioning → competitive-analysis
Semana 3-4: /escala → content-strategy → /quiz
Semana 5-8: /copy → /headline → /email-sequence
Semana 9-12: /discovery → /pipeline (mock) → roadmap final
```

#### First Revenue (<$10K MRR)
```
Semana 1-2: /diagnostico → /icp → positioning
Semana 3-4: /escala → funnel-optimization → flujo
Semana 5-8: /discovery → /pipeline → /propuesta
Semana 9-12: /coaching → /copy → roadmap final
```

#### Growth ($10K-$100K MRR)
```
Semana 1-2: /diagnostico → /pipeline → deal-strategy
Semana 3-4: customer-success-ops → renewal-expansion
Semana 5-8: sales-transformation → /playbook
Semana 9-12: content-strategy → /copy → roadmap final
```

#### Scale (>$100K MRR)
```
Full marketplace deployment — PM orquesta todo
+ Technical Build mode para dashboards y data pipelines
```

### Fase 4: Brand Voice Discovery (si aplica, 20 min)

```
Usar: docs/prompts/brand-voice-discovery.md
Herramienta: Gemini (Google AI Studio)
Sesión: 10 min por fundador (entrevista guiada)
│
├── Input: Fundador responde 15 preguntas de voz de marca
├── Output: brand-voice-raw.md (transcripción)
└── PM consolida → clients/<marca>/brand-config/brand-voice.md
    (Estado: DRAFT → VALIDATED después de revisión)
```

### Fase 5: QA y Entrega

| Check | Criterio | Score |
|-------|----------|-------|
| Visual | Colores, tipografía, logo placement | /40 |
| Voz | Bold Pattern, vocabulario, CTA | /35 |
| Estructura | 1 idea por sección, títulos ≤ 6 palabras, métricas destacadas | /25 |
| **Total** | **Mínimo 90/100 para aprobar** | **/100** |

### Timeline Completo de Onboarding

```
Día 0      │ Setup técnico (30 min)
           │ Crear directorio, copiar templates
           │
Día 1      │ Discovery con PM (60-90 min)
           │ PULSO completo, growth stage, routing plan
           │
Día 1-3    │ Ejecución Fase DEFINIR
           │ /diagnostico → /icp → positioning
           │
Día 4-7    │ Ejecución Fase ATRAER
           │ /escala → content-strategy → funnel
           │
Día 8-14   │ Ejecución Fase CONVERTIR
           │ /discovery → /pipeline → /propuesta
           │
Día 15-21  │ Ejecución Fase COMUNICAR
           │ /copy → /headline → /email-sequence
           │
Día 22-30  │ Síntesis + Brand Layer
           │ Roadmap 90 días + QA brand + entrega
           │
Checkpoint │ Día 30, 60, 90 con PM
```

---

## 3. Protocolo de Stress Test

### Objetivo

Validar que el marketplace funciona end-to-end con datos reales, bajo condiciones exigentes, identificando puntos de quiebre y gaps.

### 3.1 Stress Test — Escenarios de Carga

#### Test A: Sequential Full Pipeline (1 marca, todas las fases)

**Simular**: Una marca nueva pasa por TODAS las fases en una sola sesión.

```
Input: Marca ficticia "TechBridge LATAM"
  - B2B SaaS, $15K MRR, equipo de 4, LATAM
  - Pain: pipeline impredecible, sin ICP formal

Secuencia:
1. PM → PULSO discovery (5 variables)
2. /diagnostico → ClarQ heatmap
3. /icp → ICP scoring + 3 tiers
4. positioning → Value Prop Canvas
5. /escala → Value Ladder
6. content-strategy → Ski Slope plan
7. /quiz → SONDA quiz funnel
8. /copy → Landing + emails (4 agentes)
9. /discovery → PULSO prep
10. /pipeline → Health analysis
11. /propuesta → Business case
12. /coaching → ROCA + plan

Métricas:
- [ ] Tiempo total de ejecución
- [ ] # de errores / outputs incompletos
- [ ] Calidad de encadenamiento (output N → input N+1)
- [ ] PULSO score consistency across plugins
- [ ] Templates usados vs templates exitosos
```

#### Test B: Parallel Multi-Brand (3 marcas simultáneas)

**Simular**: 3 marcas en diferentes growth stages procesadas en paralelo.

```
Marca 1: "NovaTech" — Pre-Product (idea stage, sin revenue)
Marca 2: "DataPulse" — First Revenue ($8K MRR, 3 personas)
Marca 3: "ScaleForce" — Growth ($75K MRR, 12 personas)

Para cada marca:
1. PM discovery (PULSO completo)
2. Growth stage classification
3. Plugin routing (diferente para cada stage)
4. Ejecución del primer plugin
5. Output chaining al segundo plugin

Métricas:
- [ ] ¿El routing cambia correctamente por growth stage?
- [ ] ¿Los plugins se adaptan al team_size?
- [ ] ¿Los outputs son suficientemente diferentes entre marcas?
- [ ] ¿La PM mantiene contexto separado por marca?
```

#### Test C: Edge Cases

| Caso | Input | Esperado | Riesgo |
|------|-------|----------|--------|
| Marca sin producto | "Tengo una idea pero nada más" | PM clasifica Pre-Product, /icp primero | ¿Qué pasa si no hay datos para scoring? |
| Solo 1 persona | team_size=1 | Solo Creator workflow, foco secuencial | ¿El roadmap se adapta? |
| Enterprise grande | 50+ personas, $500K MRR | Scale stage, full marketplace | ¿Se manejan múltiples stakeholders? |
| Non-LATAM | Marca USA, inglés | Content sigue siendo español-first? | Gap de idioma |
| Sin brand identity | No tiene logo, colores, ni voz | Skip brand layer, focus en estrategia | ¿QA checklist funciona sin visual? |
| Revenue cero + urgencia alta | "Necesito revenue en 30 días" | Fast-track: /icp → /escala → /copy → /discovery | ¿El roadmap se comprime? |

### 3.2 Stress Test — Calidad de Outputs

#### Framework CERO (Calidad, Encadenamiento, Relevancia, Operabilidad)

| Dimensión | Criterio | Score (1-5) | Cómo medir |
|-----------|----------|-------------|------------|
| **C — Calidad** | ¿El output es completo según el template? | | Comparar con benchmark del template |
| **E — Encadenamiento** | ¿El output sirve como input del siguiente plugin? | | Intentar usar output como input |
| **R — Relevancia** | ¿El output refleja el contexto real de la marca? | | Revisar con fundador/experto |
| **O — Operabilidad** | ¿Un consultor podría usar esto con un cliente real? | | Test con consultor externo |

**Score mínimo**: 16/20 (80%) para aprobar

#### Checklist de Encadenamiento

```
¿ClarQ heatmap → identifica gap para /icp?          [ ] Sí [ ] No
¿ICP scoring → informa positioning?                  [ ] Sí [ ] No
¿Positioning → alimenta content-strategy?            [ ] Sí [ ] No
¿Content-strategy → genera brief para /copy?         [ ] Sí [ ] No
¿Value Ladder → informa funnel blueprint?            [ ] Sí [ ] No
¿PULSO discovery → genera PULSO score para pipeline? [ ] Sí [ ] No
¿Pipeline health → informa coaching plan?            [ ] Sí [ ] No
¿Propuesta → usa ICP + PULSO + Value Ladder?         [ ] Sí [ ] No
```

### 3.3 Stress Test — Protocolo de Ejecución

```
PASO 1: Preparar (15 min)
├── Crear marca ficticia con datos completos
├── Documentar inputs en clients/<marca>/notes/test-input.md
└── Limpiar sesión Claude Code (contexto fresco)

PASO 2: Ejecutar (2-4 horas)
├── Activar PM: "conversational pm"
├── Alimentar inputs PULSO
├── Dejar que PM rutee automáticamente
├── Documentar cada output en clients/<marca>/outputs/
└── Medir tiempo por fase

PASO 3: Evaluar (30 min)
├── Aplicar framework CERO a cada output
├── Verificar encadenamiento (output → input)
├── Identificar gaps y errores
└── Documentar en docs/execution-log.md

PASO 4: Reportar (15 min)
├── Gap report: qué falló y por qué
├── Performance: tiempo, tokens, errores
├── Recomendaciones: qué mejorar
└── Actualizar template si <3 outputs logran benchmark
```

### 3.4 Métricas de Éxito del Stress Test

| Métrica | Target | Cómo medir |
|---------|--------|------------|
| Completion rate | 100% (todos los plugins generan output) | Contar outputs vs plugins activados |
| Chain success | ≥80% (outputs se encadenan sin intervención manual) | Checklist de encadenamiento |
| CERO score promedio | ≥16/20 | Framework CERO por output |
| Time per plugin | ≤15 min por plugin individual | Timestamp por fase |
| Total onboarding | ≤4 horas para Fase 1-3 completa | Timer end-to-end |
| Brand QA pass | ≥90/100 | Brand QA checklist |
| PM context retention | PM recuerda variables PULSO al final | Verificar en roadmap |

---

## 4. Mapa de Dependencias del Sistema

```
                    NLM (Second Brain)
                    43 sources, notebook queries
                           │
                           ▼
                    ┌──────────────────┐
                    │    PM AGENT       │ ◄── PUERTA DE ENTRADA
                    │   (orchestrator)  │
                    └──────┬───────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ┌───────────┐   ┌───────────┐   ┌───────────┐
   │  PLUGINS   │   │  AGENTS   │   │  TOOLS    │
   │  6 active  │   │  8 total  │   │  2 active │
   │  29 skills │   │  (7 auto  │   │  plugin-  │
   │  15 cmds   │   │  + 5 PM   │   │  factory  │
   │  56 tmpl   │   │  roster)  │   │  ingestion│
   └─────┬─────┘   └─────┬─────┘   └─────┬─────┘
         │               │               │
         └───────────────┼───────────────┘
                         ▼
                  ┌──────────────────┐
                  │  CLIENT LAYER     │
                  │  clients/<marca>/ │
                  │  brand-config/    │
                  │  outputs/         │
                  └──────┬───────────┘
                         ▼
                  ┌──────────────────┐
                  │  BRAND LAYER      │
                  │  QA (90/100)      │
                  │  Export pipeline   │
                  └──────────────────┘
```

---

*Generado: 2026-02-17 | Método: Análisis de SKILL.md (PM), growth-diagnostic-router, brand-qa-checklist, doc-22 (source of truth) | Principio: El marketplace es un sistema — la PM es el sistema nervioso central.*
