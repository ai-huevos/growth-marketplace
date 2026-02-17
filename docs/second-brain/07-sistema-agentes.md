# Sistema de Agentes — Arquitectura y Workflows

El marketplace incluye 7 agentes especializados distribuidos en 3 plugins. Cada agente tiene un rol definido, workflow por fases, herramientas disponibles, y outputs estructurados.

---

## Visión General

| Agente | Plugin | Rol | Patrón |
|--------|--------|-----|--------|
| SDR Agent | sales-blueprint | Prospecting + qualification + outreach | Diagnóstico → Acción |
| Deal Strategist | sales-blueprint | Análisis crítico de deals + estrategia | Diagnóstico → Acción |
| Research Agent | copywriting-engine | Inteligencia de mercado | Pipeline secuencial (Fase 1) |
| Insight Agent | copywriting-engine | Análisis estratégico | Pipeline secuencial (Fase 2) |
| Ideation Agent | copywriting-engine | Conceptos creativos | Pipeline secuencial (Fase 3) |
| Copy Output Agent | copywriting-engine | Copy final optimizado | Pipeline secuencial (Fase 4) |
| Funnel Architect | motor-de-ofertas | Diseño de blueprints de funnel end-to-end | Workshop guiado (6 fases) |

---

## Patrón 1: Diagnóstico → Acción (sales-blueprint)

Estos agentes analizan una situación y producen recomendaciones accionables.

### SDR Agent

**Trigger**: Se invoca directamente o como parte de workflows de prospecting.

**Flujo**:
```
Input: Nombre de empresa/contacto
    │
    ▼
Fase 1: Research ──► Datos de empresa, contacto, stack, compelling events
    │
    ▼
Fase 2: Hipótesis PULSO ──► Score pre-contacto con nivel de confianza por dimensión
    │                          S=Alta, P=Media, I=Media-Baja, CE=Variable, D=Baja
    │
    ▼
Fase 3: Calificación ──► Tier 1 (20+) / Tier 2 (12-19) / Tier 3 (<12)
    │
    ▼
Fase 4: Outreach ──► Email (max 100 palabras) + LinkedIn (max 50) + Call script
    │
    ▼
Fase 5: Secuencia ──► Plan 14 días multi-touch
    │
    ▼
Output: Prospect Brief + Hipótesis PULSO + Tier + Outreach Package + Secuencia
```

**Reglas de outreach**:
- Subject line: Referencia a compelling event o pain (NO "quiero presentarme")
- Opening: Dato específico del research (demuestra que investigaste)
- CTA: Pregunta que invite a conversación, no a reunión
- Cold call opener: "Hola [nombre], soy [tu nombre] de [empresa]. Vi que [dato]. Llamo porque [razón]. ¿Tienes 30 segundos?"

**Secuencia tipo (14 días)**:
| Día | Canal | Acción |
|-----|-------|--------|
| 1 | Email | Email personalizado |
| 2 | LinkedIn | Conectar + mensaje |
| 4 | Teléfono | Cold call |
| 5 | Email | Follow-up con valor |
| 8 | LinkedIn | Comentar/compartir contenido |
| 10 | Teléfono | Segunda llamada, ángulo diferente |
| 12 | Email | Break-up email |
| 14 | LinkedIn | Último touch con caso de éxito |

### Deal Strategist

**Trigger**: Se invoca para analizar deals activos que necesitan dirección estratégica.

**Flujo**:
```
Input: Info del deal (básicos + PULSO + historia + competencia)
    │
    ▼
Fase 1: Intake ──► Si no hay PULSO, guiar a construirlo con discovery-mastery
    │
    ▼
Fase 2: Análisis PULSO Crítico ──► Escepticismo profesional por dimensión
    │     - "¿Dato de primera mano o inferido?"
    │     - "¿Es happy ears?"
    │     - "¿Múltiples personas confirman?"
    │
    ▼
Fase 3: Risk Assessment ──► Matriz de riesgos
    │     Categorías: Champion, Competencia, Timeline, Budget, Scope, Internal
    │     Severidad: Crítica / Alta / Media
    │
    ▼
Fase 4: Recommendations ──► 3 categorías:
    │     1. Dimensiones PULSO a reforzar + preguntas específicas
    │     2. Acciones tácticas (próximos 7 días)
    │     3. Decisión go/no-go con probabilidad realista
    │
    ▼
Fase 5: MAP (si PULSO >= 20) ──► Mutual Action Plan con pasos, owners, fechas
    │
    ▼
Output: Assessment + Risk Matrix + Recommendations + Go/No-Go + MAP + Buying Center Map
```

**Buying Center Strategy 3x3**:
Mínimo 3 contactos en 3 niveles. Si estamos single-threaded, ESE es el riesgo #1.

| Nivel | Contacto 1 | Contacto 2 | Contacto 3 |
|-------|-----------|-----------|-----------|
| Executive (C-level/VP) | Nombre + Rol + Sentimiento | TBD | TBD |
| Management (Director/Manager) | Nombre + Rol + Sentimiento | TBD | TBD |
| User (End user/Team lead) | Nombre + Rol + Sentimiento | TBD | TBD |

---

## Patrón 2: Pipeline Secuencial (copywriting-engine)

4 agentes donde el output de uno es el input del siguiente. El comando `/copy` los orquesta automáticamente.

### Flujo del Pipeline

```
/copy [brief del proyecto]
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│ FASE 1: RESEARCH AGENT                                   │
│                                                          │
│ Input: target_audience, industry, product, objectives    │
│ Proceso:                                                 │
│   1. Definir alcance (headline=ligero, sales page=max)  │
│   2. Investigar audiencia (demo + psico + lenguaje)     │
│   3. Investigar competencia (3-5 principales)           │
│   4. Recopilar social proof                             │
│   5. Identificar pains y desires                        │
│ Quality Gate: Completeness, Accuracy, Relevance,        │
│               Timeliness, Depth                          │
│ Output: market_insights, competitor_analysis,            │
│         audience_profile, social_proof_data              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ FASE 2: INSIGHT AGENT                                    │
│                                                          │
│ Input: Outputs del Research Agent                        │
│ Proceso:                                                 │
│   1. Detectar patrones en datos                         │
│   2. Identificar gaps de mercado                        │
│   3. Priorizar pains por impacto                        │
│   4. Desarrollar messaging strategy                     │
│   5. Seleccionar triggers óptimos                       │
│   6. Formular recomendaciones                           │
│ Output: strategic_insights, opportunity_analysis         │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ FASE 3: IDEATION AGENT                                   │
│                                                          │
│ Input: Outputs del Insight Agent                         │
│ Proceso:                                                 │
│   1. Definir constraints creativos                      │
│   2. Generar ángulos de comunicación                    │
│   3. Aplicar frameworks de messaging                    │
│   4. Crear variaciones de conceptos                     │
│   5. Evaluar conceptos                                  │
│   6. Seleccionar 2-3 ganadores                          │
│ Output: creative_concepts, messaging_frameworks          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ FASE 4: COPY OUTPUT AGENT                                │
│                                                          │
│ Input: creative_concepts + audience_profile +            │
│        copy_requirements + brand_guidelines              │
│ Proceso:                                                 │
│   1. Seleccionar patrones (fórmulas, triggers)          │
│   2. Generar copy (draft → fórmulas → triggers →        │
│      optimizar → variaciones → review)                  │
│   3. Aplicar triggers por sección                       │
│   4. Optimizar para medio (email/landing/ads/social)    │
│   5. Crear variaciones A/B con hipótesis                │
│   6. Scorear y rankear (target >7.5/10)                 │
│ Output: final_copy, copy_variations,                     │
│         optimization_suggestions, quality_metrics        │
└─────────────────────────────────────────────────────────┘
```

### Referencia de Archivos por Agente

| Agente | Archivos que consulta |
|--------|----------------------|
| Research Agent | WebSearch, WebFetch, assets del cliente |
| Insight Agent | Outputs del Research Agent |
| Ideation Agent | Outputs del Insight Agent |
| Copy Output Agent | `patterns/power-headlines.md`, `templates/`, `frameworks/conversion-architecture.md`, `patterns/trigger-library.md` |

---

## Patrón 3: Workshop Guiado (motor-de-ofertas)

Un agente que guía al usuario por un proceso de diseño multi-fase, integrando 3 metodologías (ESCALA, FLUJO, Alma) en un blueprint cohesivo.

### Funnel Architect

**Trigger**: Se invoca para diseñar sistemas de conversión end-to-end.

**Flujo**:
```
Input: Contexto del negocio (qué vende, a quién, estado actual)
    │
    ▼
Fase 1: Discovery ──► Info del negocio, estado del funnel, objetivo 90 días
    │
    ▼
Fase 2: Diseño ESCALA ──► 4 tiers (BAIT, FRONTEND, MIDDLE, BACKEND)
    │                       Ofertas, precios, entregables, triggers de ascensión
    │
    ▼
Fase 3: Arquitectura FLUJO ──► 7 fases de conversión
    │     Temperatura → Pre-frame → Squeeze → Frontend → OTOs → Nurture → High-ticket
    │
    ▼
Fase 4: Estrategia Alma ──► ALMA + Secuencia ORIGEN + Calendario PULSAR
    │
    ▼
Fase 5: Blueprint Integrado ──► Diagrama visual + ESCALA + FLUJO + Alma + tráfico + métricas
    │
    ▼
Fase 6: Quality Gate ──► Checklist de completitud (ESCALA, FLUJO, Alma, LTV:CAC, plan 90 días)
    │
    ▼
Output: ESCALA Blueprint + FLUJO Architecture + Alma Profile + Funnel Diagram +
        Traffic Plan + 90-Day Action Plan + Metrics Dashboard
```

**Tipo de funnel seleccionado según tier**:
- Lead Magnet Funnel (BAIT→FRONTEND)
- Tripwire Funnel (FRONTEND con OTOs)
- Webinar Funnel (MIDDLE)
- Application Funnel (BACKEND)
- Product Launch Funnel (lanzamientos)

---

## Herramientas Disponibles para Agentes

### Sales-blueprint agents
- **WebSearch**: Research de empresas y contactos
- **WebFetch**: Información de websites
- **Read/Glob/Grep**: Acceso a frameworks y templates del plugin

### Copywriting-engine agents
- **WebSearch**: Research de mercado y audiencia
- **WebFetch**: Información de websites y competencia
- **Read/Glob/Grep**: Acceso a patrones, fórmulas y templates

### Motor de ofertas agents
- **Read/Glob/Grep**: Acceso a frameworks ESCALA, FLUJO, Alma y templates del plugin
- **WebSearch**: Research de industrias, competidores, benchmarks de conversión
- **WebFetch**: Análisis de websites y funnels existentes

---

## Diferencia Clave entre Tipos de Agente

| Aspecto | Sales Agents | Copy Agents | Funnel Architect |
|---------|-------------|-------------|-----------------|
| Patrón | Independientes | Pipeline secuencial | Workshop guiado |
| Invocación | Directa o via command | Orquestados por /copy | Directa o via triggers |
| Metodología base | PULSO | Trigger psychology | ESCALA + FLUJO + Alma |
| Output principal | Análisis + acciones | Copy final + scoring | Blueprint de funnel + plan 90 días |
| Interacción con usuario | Solicitan info del deal | Reciben brief inicial | Guía por 6 fases iterativas |
