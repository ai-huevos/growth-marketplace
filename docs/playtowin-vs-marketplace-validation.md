# Validación: Play to Win (/development) vs Growth Marketplace (este repo)

> **Fecha**: 2026-02-16  
> **Objetivo**: Verificar si en el path `Play to win` en `/development` está conceptualizado todo lo que este repo (growth-marketplace) cubre respecto a esa estrategia, o si quedan partes por fuera.

---

## 1. Qué contiene cada lado

### 1.1 Play to Win (`/Volumes/deathstar/Development/Play to win/`)

| Componente | Contenido |
|------------|-----------|
| **extracted_text/** | 31 blueprints Metodología GrowthOS (~45K palabras): PULSO, REKS, Discovery, ICP, TAL, Coaching Cadence, Candid Conversations, Demo, Trading, Critical Event, Decision Process, Hero's Journey, SaaS Sales Method, Renewal, Stakeholder Mapping, etc. |
| **SALES_SYSTEM_TRANSFORMATION_FRAMEWORK.md** | Framework integrado en 8 partes: Product Marketing → ICP → TAL → Customer Journey (PULSO) → Goals/Playbook (REKS) → Discovery → Demo → Advanced (Storytelling, Trading, Decision Criteria, CE) + roadmap 90 días. |
| **GTM_STRATEGY_THINKING_PROCESS.md** | Estrategia GTM: pain points → JTBD → value props → **pivot** a quiz funnel + paid webinar + audience rental; 4 buckets (ASK); offer stack; secuencias por bucket; proyecciones 6 meses. |
| **ai_sales_coach_system/** | Sistema de ejecución: context extraction (HubSpot + entrevista) → playbook selector (problema → 2–4 blueprints) → playbook execution workflow → hypothesis testing. Usa los 31 blueprints como corpus. |
| **client_acquisition_system.md** | Cómo adquirir clientes para el consulting (content, speaking, referrals, outreach, etapas de venta del servicio). |

### 1.2 Growth Marketplace (este repo)

| Plugin | Enfoque | Elementos clave |
|--------|---------|-----------------|
| **growth-foundations** | ICP, positioning, competitive, ClarQ, quiz, content strategy | ICP scoring 0–100, ClarQ 0–40, ASK quiz funnel, Ski Slope, Topic Triangle, content workflows |
| **sales-blueprint** | Discovery, pipeline, propuesta, coaching | PULSO, ACE, discovery, pipeline Bowtie, proposal, REKS, coaching plays, SDR agent, deal-strategist |
| **copywriting-engine** | Copy end-to-end | 4-agent pipeline, headlines, email sequences, landing pages, psychological triggers |
| **motor-de-ofertas** | Funnels, value ladder, alma de marca | ESCALA, FLUJO (7 fases), Alma (ACF, IMAN, SOAP), funnel optimization |
| **conversational-pm** | Orquestación proyectos B2B | Agent roster, project templates, architecture patterns |

Más: ingestion-orchestrator (triage), template-catalog, execution-log, second-brain, triage-report-playbooks.

---

## 2. Qué SÍ está alineado (conceptualizado en ambos)

| Tema | Play to Win | Marketplace |
|------|-------------|-------------|
| **PULSO** | Blueprints 10, 25, 26, 30; SALES_SYSTEM Partes 3–5–6 | sales-blueprint: discovery-mastery, pipeline, proposal |
| **REKS / coaching** | Blueprints 02, 03, 04, 07, 11; SALES_SYSTEM Part 4 | sales-blueprint: coaching-cadence |
| **Discovery (ACE, Perfect Discovery)** | Blueprints 25, 26; SALES_SYSTEM Part 5 | sales-blueprint: discovery-mastery, /discovery |
| **ICP** | Blueprints 14, 15, 16; SALES_SYSTEM Part 1 | growth-foundations: icp-analysis, /icp |
| **TAL + stakeholder mapping** | Blueprints 13, 14, 15; SALES_SYSTEM Part 2 | Implícito en ICP + pipeline; no TAL dedicado como skill |
| **Demo (pain→solution→impact)** | Blueprints 24, 27; SALES_SYSTEM Part 6 | Referenciado en discovery/proposal; no skill “demo” propio |
| **Trading (no negociar)** | Blueprint 21; SALES_SYSTEM Part 7 | sales-blueprint: proposal-generation (Trading Checklist) |
| **Critical Event / Decision Process** | Blueprints 08, 18, 23; SALES_SYSTEM Part 7 | discovery + pipeline (PULSO incluye CE y D) |
| **Storytelling (Hero's Journey)** | Blueprint 22; SALES_SYSTEM Part 0 y 7 | copywriting-engine (story) + discovery (stories) |
| **Quiz + buckets** | GTM_STRATEGY (ASK, 4 buckets, conditional logic) | growth-foundations: quiz-funnel, ASK, /quiz |
| **Product marketing / positioning** | SALES_SYSTEM Part 0 (Hero, Value Prop, Messaging) | growth-foundations: positioning |
| **Customer journey / handoffs** | SALES_SYSTEM Part 3 (PULSO por etapa, handoff template) | pipeline-management (Bowtie, etapas) |

Conclusión: el núcleo “sales system” (PULSO, REKS, discovery, ICP, pipeline, proposal, coaching) y el quiz funnel están conceptualizados en ambos. Play to Win es la fuente detallada (blueprints + framework único); el repo es la versión “empaquetada” en skills/commands/agents.

---

## 3. Qué está en el MARKETPLACE pero NO (o poco) en Play to Win

| Elemento | Dónde en el repo | Gap en Play to Win |
|----------|------------------|---------------------|
| **ClarQ** | growth-foundations: /diagnostico, 4 dimensiones (GTM, Revenue, Q2C, Capabilities), heatmap 0–40 | No existe “ClarQ” como diagnóstico operacional; Blueprint 26 es “How to Diagnose” (deal/opportunity), no org-wide. |
| **Content strategy** (Ski Slope, Topic Triangle, Content Difficulty Matrix, workflows solo creator / agency / B2B SaaS) | growth-foundations: content-strategy | Solo “thought leadership” y “content-to-revenue” en GTM_STRATEGY; no frameworks con nombre ni workflows por tipo de equipo. |
| **Copywriting-engine** completo | copywriting-engine: 4-agent pipeline, headline mastery, email sequences, landing pages, psychological triggers | Secuencias por bucket en GTM_STRATEGY; no engine de copy (headlines, landings, triggers, pipeline de 4 agentes). |
| **motor-de-ofertas**: ESCALA, FLUJO, Alma | motor-de-ofertas: skills escala, flujo, alma; commands /escala, /funnel-diagnosis | No hay ESCALA (value ladder), FLUJO (7 fases, funnel type selector), ni Alma (ACF, IMAN, SOAP opera) como frameworks; el “funnel” en Play to Win es quiz → webinar → ofertas. |
| **Funnel optimization** (ciclo, health dashboard, AB test, 90-day plan) | motor-de-ofertas: funnel-optimization | No hay skill de “funnel optimization” ni diagnóstico de funnel más allá del quiz funnel. |
| **Competitive analysis** (Five Forces, battle cards, gap analysis) | growth-foundations: competitive-analysis | No hay bloque dedicado en Play to Win. |
| **Conversational-PM** (agent roster, project templates) | conversational-pm | No aplica; Play to Win es sales/GTM, no orquestación de proyectos con agentes. |
| **Ingestion / triage / template catalog / execution log** | docs y tools (ingestion-orchestrator, template-catalog, execution-log) | Son artefactos del propio marketplace; no son parte de la “estrategia Play to Win” como tal. |

Resumen: **sí os quedáis por fuera en Play to Win** en: ClarQ, content strategy (Ski Slope, Topic Triangle, workflows), copywriting-engine completo, motor-de-ofertas (ESCALA, FLUJO, Alma, funnel optimization), competitive analysis y todo lo que es “marketplace como producto” (ingestion, catalog, log).

---

## 4. Qué está en PLAY TO WIN pero NO (o poco) en el repo

| Elemento | Dónde en Play to Win | Gap en el repo |
|----------|----------------------|----------------|
| **SALES_SYSTEM como doc único** | Un solo documento de 900+ líneas con 8 partes y roadmap 90 días | Repartido en skills/commands; no hay un “master doc” de transformación de ventas 90 días. |
| **ai_sales_coach_system** | Flujo: context extraction → playbook selector → playbook execution → hypothesis testing | No existe ese flujo: hay ingestion-orchestrator (triage de contenido) y commands (/discovery, etc.), pero no “seleccionar blueprints por problema → generar playbook custom → validar hipótesis”. |
| **90-day implementation roadmap** día a día | SALES_SYSTEM Part 8 (semanas 1–13, gates, milestones) | No hay un roadmap único 90 días por fases en el repo. |
| **Audience rental + partner tracking** | GTM_STRATEGY: partner profiles, UTM, dashboard, revenue share | Repo tiene quiz y funnel; no modelo de audience rental ni partner tracking. |
| **Paid webinar (3 acts, offer stack, garantías)** | GTM_STRATEGY: webinar 90 min, 3 value bombs, tiers $497 / $2,997 / $9,997 | No está modelado como “webinar playbook” en el repo. |
| **Client acquisition system** | Cómo vender el consulting (content, speaking, referrals, stages) | Meta-nivel; no es un plugin del marketplace. |
| **31 blueprints en bruto** | extracted_text (markdown + raw) | El repo usa la metodología derivada (PULSO, REKS, etc.), no los PDFs/extracciones como artefactos. |

Resumen: Play to Win tiene **un marco de ejecución y GTM** (framework único, roadmap 90 días, ai_sales_coach_system, webinar + audience rental) que en el repo **no está concentrado** en un solo lugar ni como “estrategia Play to Win” nombrada.

---

## 5. Conclusión y recomendaciones

### Pregunta original
> ¿En el path de Play to Win en /development está conceptualizado todo lo de este repo respecto a esa estrategia, o nos quedamos por fuera en muchas partes?

**Respuesta corta**:  
- **Desde Play to Win → repo**: El núcleo de la estrategia (sales system + quiz funnel) **sí** está conceptualizado; es la base de sales-blueprint y parte de growth-foundations.  
- **Desde repo → Play to Win**: **No** está todo el repo conceptualizado en Play to Win. Faltan: ClarQ, content strategy (Ski Slope, Topic Triangle, workflows), copywriting-engine completo, motor-de-ofertas (ESCALA, FLUJO, Alma, funnel optimization), competitive analysis y los artefactos de gobierno del marketplace (triage, catalog, execution log).

**Recomendaciones**

1. **En Play to Win** (si quieres que refleje “todo el marketplace”):  
   - Añadir una capa que referencie: ClarQ (/diagnostico), content-strategy (Ski Slope, Topic Triangle), copywriting-engine (4-agent, headlines, emails, landings), motor-de-ofertas (ESCALA, FLUJO, Alma, funnel optimization), competitive-analysis.  
   - Puede ser un **“Marketplace alignment index”** (un doc o sección en `master_index` / README) que mapee: Blueprint X / SALES_SYSTEM Part Y ↔ plugin/skill/command en growth-marketplace.

2. **En el repo** (si quieres que la “estrategia Play to Win” sea explícita):  
   - Crear un doc (p. ej. en `docs/second-brain/` o `docs/`) que describa la estrategia Play to Win y enlace: SALES_SYSTEM, GTM_STRATEGY, ai_sales_coach_system, y cómo se implementa vía plugins (sales-blueprint, growth-foundations, quiz, etc.).  
   - Opcional: un “roadmap 90 días” derivado de SALES_SYSTEM Part 8 que indique qué commands/skills usar por fase.

3. **Bidireccional**:  
   - Un solo **“Play to Win ↔ Growth Marketplace map”** (en este repo o en Play to Win) con dos tablas: “Play to Win → Marketplace” y “Marketplace → Play to Win”, para no quedarse por fuera en ninguna dirección.

Si quieres, el siguiente paso puede ser redactar el “Marketplace alignment index” o el “Play to Win ↔ Marketplace map” en el formato que prefieras (doc en repo, doc en Play to Win, o ambos).
