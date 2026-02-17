# 11 — GTM Skills Landscape & Marketplace Blueprint

> Documento de referencia: Paisaje completo del ecosistema de skills Claude Code para GTM, competidores, gaps, y blueprint del marketplace.
> Fecha: 2026-02-15
> Fuentes: anthropics/skills, SkillsMP, gtmagents, marketingskills, agentkits-marketing, 35+ fuentes de investigación GTM/RevOps.
>
> **Relacionados**: Este doc es parte de una trilogía de research:
> - **doc-11** (este): Landscape interno — categorías, gaps, MCP integrations
> - **doc-12**: Validación externa — Reddit, comunidades, stress test de tesis, 90-day plan
> - **doc-19**: Research técnico — plugin architecture, marketplace patterns, framework-to-plugin

---

## Resumen Ejecutivo

1. **Nicho no contendido**: Ningún marketplace de Claude Code empaqueta metodología B2B GTM como skills ejecutables. La coherencia PULSO es un moat real.
2. **Spanish-first es diferenciador**: Todos los competidores (gtmagents: 92 agentes, marketingskills: 25 skills, agentkits: 93 comandos) son solo en inglés. Multi-language en roadmap Phase 2.
3. **Persona target = "GTM Engineer"**: Rol B2B de mayor crecimiento 2025-2026. Combinan comodidad técnica (Claude Code) con necesidad estratégica.
4. **Mercado masivo**: RevOps software → $21.7B para 2032 (CAGR 15.4%). Mercado serviceable: $250M-$2.5B.
5. **3 gaps críticos**: No MEDDPICC, no ABM orchestrator, no PLG/PQL scoring.
6. **Pipeline de 4 agentes funciona**: 85% de AI SDRs autónomos fallaron. El modelo human-in-the-loop es el que funciona.
7. **Distribución necesita atención**: Registrar marketplace.json, SkillsMP, awesome-claude-code lists.
8. **Agent Teams experimentales pero relevantes**: TeammateTool permite ejecución paralela de agentes.
9. **Pencil es complementario**: Pencil.dev convierte diseños a código vía MCP — bridge para landing-pages skill.
10. **Próximos 3 plugins**: enterprise-sales-engine (MEDDPICC), abm-orchestrator, revenue-diagnostics.
11. **MCP integrations investigadas**: HubSpot, Apollo y Notion son "no-brainers" (Phase 1). Gong es game-changer para sales-blueprint (Phase 2). Ver sección 8.

---

## 1. Ecosistema de Skills & Marketplaces

### Marketplace Oficial de Claude Code

| Fuente | Escala | Contenido |
|--------|--------|-----------|
| claude-plugins-official | ~30 plugins | LSP (11 lenguajes), integraciones (GitHub, Slack, Notion), output styles, doc skills |
| anthropics/skills (GitHub) | Estándar abierto | Especificación SKILL.md — cross-platform (Claude Code + Codex CLI + ChatGPT) |

**Dato clave**: Anthropic liberó Agent Skills como estándar abierto (Dic 2025). OpenAI adoptó el mismo formato SKILL.md.

### Agregadores Comunitarios

| Marketplace | Escala | Relevancia GTM |
|-------------|--------|---------------|
| SkillsMP.com | 96,751+ skills | Agregador. Bajo contenido GTM-específico. |
| awesome-claude-code | Lista curada | Skills, hooks, agent orchestrators. |
| quemsah/awesome-claude-plugins | 4,961 repos | Colección automatizada con métricas. |
| OpenSkills (npm) | Cross-platform | Loader universal — Claude, Cursor, Windsurf, Codex. |

### Competidores Directos GTM

#### gtmagents/gtm-agents — AMENAZA ALTA
- 92 agentes, 52 skills, 67 plugins, 24 categorías
- Sales (8), Marketing (13), Growth/Revenue (9), Verticales (6), Multi-agent (20)
- **Debilidad**: Sin metodología unificada, sin PULSO/MEDDPICC, solo inglés, volumen sobre profundidad

#### coreyhaines31/marketingskills — AMENAZA MEDIA
- 25 skills en 7 categorías (CRO: 6, Content: 4, SEO: 4, Growth: 2, Strategy: 4)
- **Debilidad**: Solo marketing — sin sales, sin RevOps, sin agentes

#### aitytech/agentkits-marketing — AMENAZA MEDIA-ALTA
- 18 agentes, 28 skills, 93 comandos. Cross-platform. MIT license, gratis.
- **Debilidad**: Marketing-focused, sin scoring models, sin metodología sales

### Ventaja Competitiva del Growth Marketplace

| Dimensión | Plataformas SaaS GTM | Nuestro Marketplace |
|-----------|---------------------|---------------------|
| Distribución | SaaS standalone | Plugin Claude Code |
| Costo | $500-$50K+/mes | Plugin install |
| Persona | RevOps/Marketing teams | Technical founders, GTM engineers |
| Idioma | Solo inglés | Spanish-first |
| Metodología | Varios/propietarios | PULSO-unified |
| Personalización | Configuración | Markdown, forkeable |

---

## 2. Categorías de Skills GTM

### A: ICP & Research
- **icp-analysis** (nuestro) — Scoring 0-100, 5 dimensiones ponderadas
- **competitive-analysis** (nuestro) — Five Forces + matriz + battle cards
- **positioning** (nuestro) — Value Proposition Canvas
- **ClarQ /diagnostico** (nuestro) — Madurez operativa 0-40
- **GAP**: JTBD skill, signal-based prospecting

### B: Sales Methodology & Pipeline
- **discovery-mastery** (nuestro) — PULSO + ACE + question bank
- **pipeline-management** (nuestro) — Bowtie + health indicators
- **proposal-generation** (nuestro) — 8 secciones, PULSO ≥23
- **coaching-cadence** (nuestro) — REKS + 8 modelos coaching
- **sdr-agent + deal-strategist** (nuestro) — Agentes especializados
- **GAP CRÍTICO**: MEDDPICC qualification skill

### C: Content & Copy
- **headline-mastery** (nuestro) — 50 fórmulas, scoring >7.5
- **email-sequences** (nuestro) — 7-email persuasion ladder
- **landing-pages** (nuestro) — 10 secciones, trigger mapping
- **psychological-triggers** (nuestro) — 10 triggers, 4,129 instancias
- **4-agent pipeline** (nuestro) — Research → Insight → Ideation → Output

### D: Funnel & CRO
- ClarQ (parcial) — Solo diagnóstico operativo
- **GAP CRÍTICO**: Funnel diagnostics, PLG/PQL scoring, CRO analysis

### E: RevOps & Data
- Pipeline PULSO scoring (nuestro)
- **GAP CRÍTICO**: Unit economics calculator, ABM scoring, GTM motion selector

### F: Design & UX (Pencil)
- Pencil.dev — Diseño visual → código vía MCP en IDE
- landing-pages skill puede integrarse con archivos .pen

---

## 3. Agent Teams & Operating Model

### Inventario Actual (6 agentes)

| Agente | Plugin | Rol |
|--------|--------|-----|
| sdr-agent | sales-blueprint | Prospecting → PULSO → outreach |
| deal-strategist | sales-blueprint | Deal review con risk matrix |
| research-agent | copywriting-engine | Market intelligence |
| insight-agent | copywriting-engine | Strategic analysis |
| ideation-agent | copywriting-engine | Creative concepts |
| copy-output-agent | copywriting-engine | Final optimization |

### Pods Propuestos

**GTM Research Pod**: ICP Analyst + Competitive Scout + Positioning Architect + Signal Scanner
- Trigger: `/research-gtm [contexto]`
- Output: GTM Brief completo

**Revenue Ops Pod**: Deal Strategist + ClarQ + Revenue Architect + MEDDPICC Qualifier
- Trigger: `/revenue-check [datos]`
- Output: Revenue Health Report

**Experimentation Pod**: Copy Engine + SDR Agent + CRO Analyst + Experiment Designer
- Trigger: `/experiment [hipótesis]`
- Output: Experiment Brief con assets

**Pencil Design-to-Code Pod**: Copy Engine + Landing Page Architect + Pencil + Conversion Scorer
- Trigger: `/build-page [brief]`
- Output: Landing page production-ready

---

## 4. Gaps Críticos (Próximos Plugins)

| Prioridad | Plugin | Skills Clave | Justificación |
|-----------|--------|-------------|---------------|
| P1 | enterprise-sales-engine | MEDDPICC, win/loss, buying committee | Framework enterprise #1, sin equivalente en Claude Code |
| P2 | abm-orchestrator | Account scoring, buying groups, intent signals | 81.5% adopción, 137% ROI, 49.7% aumentando budget |
| P3 | revenue-diagnostics | Funnel health, unit economics, GTM motion | $2 S&M por $1 ARR, eficiencia es prioridad #1 |
| P4 | product-led-engine | PQL scoring, activation, expansion triggers | PQLs convierten 25-30% (2-3x MQLs) |
| P5 | pricing-architect | Pricing models, value metrics, sensitivity | 92% usan pricing mixto, primer ciclo renewal 2026 |

---

## 5. Datos de Mercado

- RevOps Software: $3.7B (2023) → $21.7B (2032), CAGR 15.4%
- Sales Tech: $49.5B → $57.6B (2026)
- 70% de firmas con adopción AI moderada/completa en GTM
- 65% líderes B2B unificarán sales/marketing/CS bajo RevOps para 2026
- 85% de AI SDRs autónomos fallaron en 6 meses
- GTM Engineers: Rol de mayor crecimiento, evolucionando a "AI orchestrators"

---

## 6. Pencil Design Best Practices

- Pencil.dev: Diseño en IDE, archivos .pen en git, código vía MCP
- Workflow: landing-pages skill genera arquitectura → Pencil diseña → Claude Code genera código → triggers skill valida
- Mapear triggers psicológicos a énfasis visual (Scarcity 9.4/10, Urgency 9.1/10 = tratamiento visual más fuerte)
- Pre-score con Copy Quality Score (>7.5 headline, >8.0 CTA) antes de deploy

---

## 7. Decisiones Estratégicas Resueltas

Las 5 preguntas abiertas se resolvieron en febrero 2026. Cada decisión incluye rationale y fase de ejecución.

### 7.1 Modelo de Pricing
- **Decisión**: Test interno primero en AI Huevos, luego escalar vendiendo a clientes si se prueba el valor
- **Rationale**: Dogfooding valida el producto antes de monetizar. Reduce riesgo de lanzar pricing sin product-market fit
- **Fase 1**: Uso interno en AI Huevos (validación) → **Fase 2**: Venta a clientes con modelo probado

### 7.2 Distribución Cross-Platform
- **Decisión**: Claude Code only (Phase 1), expandir a otras plataformas después (Phase 2)
- **Rationale**: Foco en una plataforma permite iterar rápido. SKILL.md es cross-platform por diseño, así que la migración futura es de bajo costo
- **Fase 1**: Solo Claude Code → **Fase 2**: OpenSkills, Cursor, Codex CLI

### 7.3 MCP Integrations
- **Decisión**: Investigar qué MCPs agregan más valor y dónde. No agregar por agregar
- **Rationale**: Los MCPs son un multiplicador de valor (sync PULSO scores a CRM, data enrichment para prospecting), pero requieren research antes de implementar
- **Acción**: Ver sección 8 (Investigación MCP) para hallazgos detallados

### 7.4 Arquitectura de Agentes
- **Decisión**: Diseñar para workflows agentic paralelos/futuros desde ahora
- **Rationale**: TeammateTool y agent teams son experimentales pero la dirección es clara. Diseñar ahora evita reescritura futura
- **Implicación**: Los nuevos agentes deben ser composables (input/output estandarizado) para funcionar tanto en modo secuencial como paralelo

### 7.5 Localización
- **Decisión**: Multi-language. Spanish-first en Phase 1, expansión en Phase 2
- **Rationale**: La restricción "nunca traducir" bloqueaba crecimiento futuro. Spanish-first mantiene el diferenciador LATAM mientras permite expansión
- **Fase 1**: Todo contenido nuevo en español (default) → **Fase 2**: Localización a inglés y portugués cuando el mercado esté validado

---

## 8. Investigación MCP: Integraciones de Alto Valor

> Investigación: Feb 2026. Fuentes: Salesforce Developers Blog, HubSpot Developers, Gong Press, Notion Docs, Linear Docs, Slack Developer Docs, GitHub (modelcontextprotocol/servers, 40+ repos comunitarios), PulseMCP, Glama, Composio, Apify, LobeHub, Intuz, GetGuru, LeadIQ, Generect, BlackBearMedia, DemandGenReport.

### Contexto

El protocolo MCP (Model Context Protocol) alcanza madurez operativa en 2025-2026: 97 millones de descargas mensuales del SDK, 10,000+ servidores activos, y adopción por parte de HubSpot, Salesforce, Gong, Notion, Slack, y Linear como servidores oficiales o certificados. Para el Growth Marketplace, los MCPs son multiplicadores de valor que transforman skills estáticos (Markdown) en workflows conectados a datos reales del usuario.

**Principio de evaluación**: No agregar MCPs por agregar. Cada integración debe amplificar directamente las capacidades de al menos un plugin existente (growth-foundations, sales-blueprint, copywriting-engine) y conectar con el lenguaje PULSO.

### Resumen de Hallazgos

| # | Categoría | MCPs Evaluados | Disponibles Hoy | Impacto Estimado |
|---|-----------|---------------|-----------------|-----------------|
| 1 | CRM | HubSpot, Salesforce | 2 oficiales + 5+ comunitarios | CRITICO |
| 2 | Revenue Intelligence | Gong, 6sense, Clari | 1 oficial (Gong) + parciales | ALTO |
| 3 | Comunicaciones | Slack, Gmail, LinkedIn | 3 (oficial Slack + comunitarios) | ALTO |
| 4 | Data Enrichment | Apollo, Clay, Clearbit/Breeze | 3+ comunitarios | ALTO |
| 5 | Project/Task Management | Notion, Linear, Asana | 3 oficiales | MEDIO |
| 6 | Datos/Spreadsheets | Google Sheets | Comunitarios | MEDIO |

---

### 8.1 CRM: HubSpot y Salesforce

#### HubSpot MCP Server — PRIORIDAD 1

| Atributo | Detalle |
|----------|---------|
| **Estado** | Oficial, Public Beta (developers.hubspot.com/mcp) |
| **Tipo** | Remote MCP Server (hosted por HubSpot) |
| **Auth** | OAuth 2.0 (migración a OAuth 2.1 con PKCE planificada) |
| **Herramientas** | Contacts CRUD, Companies CRUD, Deals CRUD, Engagements, Search, Analytics |
| **Madurez** | Alta — primer CRM con MCP en producción (Jun 2025) |

**Valor para el Marketplace:**

- **growth-foundations**: El skill `icp-analysis` puede leer contactos/companies de HubSpot para scoring ICP automatizado contra datos reales. La segmentación PULSO se alimenta de datos de deals existentes en vez de inputs manuales.
- **sales-blueprint**: Los PULSO scores generados por `discovery` y `pipeline-management` pueden escribirse como propiedades custom en deals de HubSpot. El skill `coaching` puede leer historiales de interacción para contexto pre-call.
- **copywriting-engine**: Puede leer segmentos de contactos para personalizar emails con datos de CRM reales (industry, company size, deal stage).

**Esfuerzo de implementación**: BAJO — OAuth flow estándar, servidor hosted, no requiere infra propia.

#### Salesforce MCP Server

| Atributo | Detalle |
|----------|---------|
| **Estado** | DX MCP Server oficial en Developer Preview (NPM + GitHub: salesforcecli/mcp). Hosted MCP Server en Pilot (pricing TBD) |
| **Tipo** | Local (DX) + Remote (hosted, futuro) |
| **Auth** | OAuth (sf CLI auth flow) |
| **Herramientas** | SOQL queries, CRUD universal sobre cualquier Salesforce object, metadata operations |
| **Comunidad** | 4+ repos activos (AiondaDotCom, tsmztech, SurajAdsul, kablewy) con CRUD completo |
| **Madurez** | Media — DX server funcional, hosted en pilot |

**Valor para el Marketplace:**

- **sales-blueprint**: SOQL permite queries directos sobre Opportunities para alimentar `pipeline-management` con datos reales. Los PULSO scores pueden mapearse a campos custom en Opportunity records.
- **growth-foundations**: `competitive-analysis` puede leer datos de competidores desde objetos custom o notas en accounts.

**Esfuerzo de implementación**: MEDIO — requiere Salesforce org, sf CLI auth, más complejo que HubSpot para usuarios no-enterprise.

#### Recomendación CRM

> **HubSpot primero**. El 70% del target del marketplace (technical founders, SMBs LATAM) usa HubSpot Free/Starter. Salesforce como Phase 2 para segmento enterprise.

---

### 8.2 Revenue Intelligence: Gong, 6sense, Clari

#### Gong MCP Server — PRIORIDAD 2

| Atributo | Detalle |
|----------|---------|
| **Estado** | Oficial, MCP Server + MCP Gateway (Oct 2025) |
| **Tipo** | Remote — two-way intelligence flow |
| **Auth** | API Keys (GONG_ACCESS_KEY + GONG_ACCESS_KEY_SECRET) |
| **Herramientas** | Call transcripts, Deal intelligence, AI Briefer queries, Ask Anything queries |
| **Madurez** | Alta — integraciones con Salesforce, Microsoft, HubSpot |

**Valor para el Marketplace:**

- **sales-blueprint**: IMPACTO TRANSFORMADOR. El skill `discovery` puede pre-cargar transcripciones de calls anteriores para preparar la siguiente conversacion con contexto PULSO completo. El skill `coaching` puede analizar calls reales y generar feedback basado en adherencia a PULSO (Situation, Pain, Impact cubiertos vs. no cubiertos). El skill `proposal-generator` puede extraer verbatims del prospect para redactar propuestas con su propio lenguaje.
- **copywriting-engine**: Los insights de conversaciones reales alimentan a los agentes de copy con lenguaje real del buyer (no genérico).

**Esfuerzo de implementación**: MEDIO — requiere cuenta Gong (enterprise pricing), API keys, configuración de permisos.

#### 6sense

| Atributo | Detalle |
|----------|---------|
| **Estado** | Parcial — MCP disponible via Apify (Tech insights, Pixel Checker). No hay servidor oficial 6sense MCP |
| **Herramientas** | Intent data por account, topic surge detection |
| **Madurez** | Baja como MCP, alta como plataforma |

**Valor potencial**: Intent data de 6sense podria alimentar `icp-analysis` para priorizar accounts con buying signals activos. Pero sin MCP oficial, requiere wrapper custom.

**Esfuerzo de implementación**: ALTO — sin servidor oficial, requeriría construir wrapper sobre API REST.

#### Clari

| Atributo | Detalle |
|----------|---------|
| **Estado** | No existe MCP server. Integraciones via API REST tradicional |
| **Madurez** | N/A como MCP |

**Valor potencial**: Forecast data para `pipeline-management`. Pero Clari es enterprise-only y no tiene MCP.

**Esfuerzo de implementación**: ALTO — requeriría construir MCP server desde cero.

#### Recomendación Revenue Intelligence

> **Gong es la unica integración viable hoy** y con impacto transformador para sales-blueprint. 6sense y Clari son Phase 3+ (cuando tengan MCPs oficiales o cuando el marketplace justifique construir wrappers custom).

---

### 8.3 Comunicaciones: Slack, Gmail, LinkedIn

#### Slack MCP Server — PRIORIDAD 2

| Atributo | Detalle |
|----------|---------|
| **Estado** | Oficial (docs.slack.dev/ai/mcp-server/), rollout a partners seleccionados |
| **Tipo** | Remote hosted |
| **Auth** | OAuth (Slack App) |
| **Herramientas** | Search channels, Send messages, Read channels/threads, User profiles |
| **Comunidad** | korotovsky/slack-mcp-server (sin permisos especiales, DMs, Group DMs) |
| **Madurez** | Alta — servidor oficial, API estable |

**Valor para el Marketplace:**

- **sales-blueprint**: El skill `coaching` puede postear resúmenes de deal health en canales de equipo. `pipeline-management` puede enviar alertas cuando un deal cambia de stage o su PULSO score baja.
- **growth-foundations**: Resultados de `icp-analysis` y `competitive-analysis` pueden compartirse directamente en canales de estrategia.
- **Todos los plugins**: Canal de notificaciones para outputs de cualquier skill.

**Esfuerzo de implementación**: BAJO — servidor oficial, OAuth estándar.

#### Gmail MCP Servers

| Atributo | Detalle |
|----------|---------|
| **Estado** | Comunitario — 6+ implementaciones activas en GitHub |
| **Repos destacados** | GongRzhe/Gmail-MCP-Server, Shravan1610/Gmail-mcp-server, theposch/gmail-mcp |
| **Auth** | OAuth 2.0 (Google Cloud credentials) |
| **Herramientas** | Send, Read, Search, Labels, Attachments, Batch processing (hasta 50 emails) |
| **Madurez** | Media — funcional pero sin servidor oficial de Google |

**Valor para el Marketplace:**

- **copywriting-engine**: IMPACTO DIRECTO. Los emails generados por el skill `emails` y el agente `email-specialist` pueden enviarse directamente desde Claude Code via MCP, eliminando copy-paste. Workflow completo: generar email PULSO → revisar → enviar.
- **sales-blueprint**: `discovery` puede leer email threads previos con un prospect para contexto pre-call. `proposal-generator` puede enviar propuestas directamente.

**Esfuerzo de implementación**: BAJO-MEDIO — OAuth setup con Google Cloud, ejecución local, sin hosting externo.

#### LinkedIn MCP Servers

| Atributo | Detalle |
|----------|---------|
| **Estado** | Comunitario — 5+ implementaciones (Apify, felipfr, adhikasp, stickerdaniel) |
| **Herramientas** | Profile scraping, Company data, Job listings, Post scheduling, Content engagement analysis |
| **Madurez** | Baja-Media — depende de scraping (riesgo de rate limits y ToS de LinkedIn) |

**Valor para el Marketplace:**

- **growth-foundations**: `icp-analysis` puede enrichir perfiles de decision-makers con datos de LinkedIn (job title, company, industry). `competitive-analysis` puede monitorear actividad de competidores.
- **sales-blueprint**: `discovery` puede pre-investigar prospects antes de calls. Outreach personalization basada en actividad reciente de LinkedIn.
- **copywriting-engine**: Personalización de emails con datos de perfil LinkedIn.

**Esfuerzo de implementación**: MEDIO — funcional pero con riesgos de estabilidad por dependencia en scraping vs. API oficial.

#### Recomendación Comunicaciones

> **Slack primero** (oficial, estable, notificaciones cross-plugin). **Gmail segundo** (habilita el workflow completo de copywriting-engine). **LinkedIn tercero** como enrichment complementario (aceptar riesgos de scraping).

---

### 8.4 Data Enrichment: Apollo, Clay, Clearbit/Breeze

#### Apollo.io MCP Server — PRIORIDAD 1

| Atributo | Detalle |
|----------|---------|
| **Estado** | Comunitario robusto — 34+ herramientas (BlockchainRev/apollo-mcp-server, lkm1developer/apollo-io-mcp-server) |
| **Auth** | API Key (Apollo.io) |
| **Herramientas** | Contact enrichment, Company enrichment, People search (job title, seniority), Organization search (domain, location), Job listings, Outreach automation |
| **Madurez** | Media-Alta — multiples implementaciones, API estable de Apollo |

**Valor para el Marketplace:**

- **growth-foundations**: IMPACTO TRANSFORMADOR. `icp-analysis` puede buscar y enriquecer prospects automaticamente contra criterios ICP definidos. En vez de input manual, el skill busca en Apollo contacts que matchean el ICP score > 70. `competitive-analysis` puede enriquecer datos de empresas competidoras (employee count, tech stack, funding).
- **sales-blueprint**: `discovery` puede pre-cargar contexto completo del prospect (role, seniority, company data) para preparar reuniones. `pipeline-management` puede enriquecer deals con datos frescos de Apollo.

**Esfuerzo de implementación**: BAJO — API key simple, servidores comunitarios funcionales, Apollo tiene tier gratuito.

#### Clay MCP Server

| Atributo | Detalle |
|----------|---------|
| **Estado** | Oficial (clay.earth, anuncio 2025) |
| **Tipo** | Bridge a plataforma Clay |
| **Herramientas** | Network search, Contact details, Communication history, Outreach assistance |
| **Diferenciador** | Waterfall enrichment — consulta 50+ proveedores en cascada para maximizar coverage al menor costo |
| **Madurez** | Media — nuevo, pero respaldado por plataforma establecida |

**Valor para el Marketplace:**

- **growth-foundations**: Clay como "meta-enricher" para ICP — una sola query enriquece desde Apollo, Clearbit, ZoomInfo, Hunter simultaneamente.
- **sales-blueprint**: Historial de comunicaciones de Clay alimenta contexto para `discovery` y `coaching`.

**Esfuerzo de implementación**: MEDIO — requiere cuenta Clay (paid), MCP relativamente nuevo.

#### Clearbit / Breeze Intelligence

| Atributo | Detalle |
|----------|---------|
| **Estado** | No existe MCP server oficial. Clearbit fue adquirido por HubSpot y evolucionó a Breeze Intelligence. Accesible indirectamente via HubSpot MCP |
| **Comunidad** | Incluido en lead enrichment MCP servers multi-provider (Apify) |
| **Madurez** | Baja como MCP independiente |

**Valor potencial**: Datos de Clearbit/Breeze son accesibles via HubSpot MCP (la adquisición convierte a HubSpot MCP en un 2x1).

**Esfuerzo de implementación**: BAJO (via HubSpot MCP) o ALTO (standalone).

#### Lead Enrichment MCP Server (Multi-Provider)

| Atributo | Detalle |
|----------|---------|
| **Estado** | Comunitario (Apify: lead-enrichment-mcp-server) |
| **Proveedores integrados** | Apollo, Clearbit, ZoomInfo, Hunter, IPinfo, FullContact, Lusha, Snov, RocketReach, People Data Labs |
| **Madurez** | Media — funcional, 10 proveedores en una sola interfaz |

**Valor**: Alternativa a Clay para enrichment multi-provider sin el costo de una suscripción Clay.

#### Recomendación Data Enrichment

> **Apollo primero** (tier gratuito, 34+ tools, impacto directo en ICP). **Clay segundo** si el usuario ya tiene cuenta Clay. **Clearbit via HubSpot MCP** como bonus automatico. El Lead Enrichment MCP multi-provider es una alternativa interesante para usuarios price-sensitive.

---

### 8.5 Project & Task Management: Notion, Linear, Asana

#### Notion MCP Server — PRIORIDAD 2

| Atributo | Detalle |
|----------|---------|
| **Estado** | Oficial hosted (developers.notion.com/docs/mcp), v2.0.0 |
| **Auth** | OAuth (one-click install) |
| **Herramientas** | Pages CRUD, Databases CRUD, Search semántico, Comments, Block management, Notion-flavored Markdown |
| **Madurez** | Alta — servidor oficial hosted, API v2025-09-03 |

**Valor para el Marketplace:**

- **Todos los plugins**: Notion como "output repository" para todos los skills. ICP scores, competitive battle cards, PULSO deal summaries, email drafts — todo puede escribirse a bases de datos Notion automaticamente.
- **sales-blueprint**: Base de datos Notion como pipeline tracker alternativo a CRM. Cada deal como page con propiedades PULSO (S, P, I, C, D scores).
- **growth-foundations**: Base de datos de ICPs evaluados con scores y notas de enrichment.

**Esfuerzo de implementación**: BAJO — OAuth one-click, servidor hosted, excelente documentación.

#### Linear MCP Server

| Atributo | Detalle |
|----------|---------|
| **Estado** | Oficial (linear.app/docs/mcp), 21 herramientas |
| **Auth** | API Key |
| **Herramientas** | Issues CRUD, Projects CRUD, Comments, Labels, Assignments, Priority management |
| **Madurez** | Alta — servidor oficial, GraphQL API completo |

**Valor para el Marketplace:**

- **Ejecución GTM**: Convertir outputs de skills en issues ejecutables. Ejemplo: `competitive-analysis` genera 5 acciones → se crean como issues en Linear con labels "gtm", prioridad, y assignee.
- **sales-blueprint**: Pipeline actions como issues trackeables. "Follow up con prospecto X" → issue con due date.

**Esfuerzo de implementación**: BAJO — API key simple, servidor oficial.

#### Asana MCP Server

| Atributo | Detalle |
|----------|---------|
| **Estado** | Comunitario (roychri/mcp-server-asana) |
| **Herramientas** | Tasks CRUD, Projects, Team collaboration |
| **Madurez** | Media |

**Valor**: Similar a Linear pero para equipos que usan Asana. Menor prioridad que Notion/Linear.

**Esfuerzo de implementación**: BAJO-MEDIO.

#### Recomendación Project Management

> **Notion primero** (output repository universal, ya lo usa el proyecto como second brain). **Linear segundo** (ejecución GTM trackeada). Asana solo si el usuario lo requiere explícitamente.

---

### 8.6 Google Sheets MCP — Bonus

| Atributo | Detalle |
|----------|---------|
| **Estado** | Comunitario — 4+ implementaciones (xing5, ringo380, nrkirby) |
| **Herramientas** | Create spreadsheets, Read/Write ranges, Bulk operations |
| **Madurez** | Media |

**Valor**: Muchos equipos SMB LATAM gestionan pipelines y reportes en Google Sheets. Un MCP de Sheets permite que `pipeline-management` lea deals desde Sheets y que outputs de scoring se escriban en hojas existentes.

**Esfuerzo de implementación**: BAJO-MEDIO.

---

### 8.7 Integraciones No Disponibles (Watch List)

Plataformas relevantes para GTM que NO tienen MCP server hoy pero que deben monitorearse:

| Plataforma | Categoría | Estado MCP | Valor Potencial | Monitorear |
|------------|-----------|-----------|----------------|------------|
| Outreach.io | Sales Engagement | No existe | Secuencias de outreach automatizadas con copy PULSO | API REST disponible |
| Salesloft | Sales Engagement | No existe | Cadencias de ventas integradas | API REST disponible |
| Clari | Revenue Intelligence | No existe | Forecast data para pipeline | Enterprise only |
| 6sense | Intent Data | Parcial (Apify) | Buyer intent signals para ICP | API REST disponible |
| Bombora | Intent Data | No existe | Topic surge data para prospecting | Cooperative data model |
| ZoomInfo | Data Enrichment | Via multi-provider MCPs | Enrichment directo | Incluido en Lead Enrichment MCP |

---

### 8.8 Arquitectura de Integración Recomendada

#### Fase 1: Quick Wins (0-30 días)
Integraciones que amplifican plugins existentes con esfuerzo bajo.

```
[HubSpot MCP] ←→ growth-foundations (ICP read), sales-blueprint (PULSO write)
[Apollo MCP]  ←→ growth-foundations (enrichment), sales-blueprint (pre-call research)
[Notion MCP]  ←→ ALL plugins (output repository)
```

**Por qué estos 3**: Cubren el ciclo completo — enrichment de datos (Apollo) → análisis y scoring (plugins) → persistencia de outputs (Notion) + sincronización con CRM (HubSpot).

#### Fase 2: Workflow Completos (30-60 días)
Integraciones que habilitan workflows end-to-end.

```
[Gong MCP]    ←→ sales-blueprint (call analysis, coaching, verbatims)
[Slack MCP]   ←→ ALL plugins (notifications, team sharing)
[Gmail MCP]   ←→ copywriting-engine (send emails), sales-blueprint (proposals)
[Linear MCP]  ←→ ALL plugins (action items → trackeable issues)
```

**Por qué estos 4**: Completan la loop — conversaciones reales (Gong) → análisis y creación de contenido (plugins) → distribución (Gmail, Slack) → seguimiento (Linear).

#### Fase 3: Avanzado (60-90 días)
Integraciones para usuarios power-user o enterprise.

```
[Salesforce MCP] ←→ sales-blueprint (enterprise CRM sync)
[Clay MCP]       ←→ growth-foundations (waterfall enrichment)
[LinkedIn MCP]   ←→ growth-foundations + sales-blueprint (prospect research)
[Google Sheets]  ←→ sales-blueprint (SMB pipeline en Sheets)
```

#### Flujo de Datos Integrado (Vision)

```
Apollo/Clay ──enrich──→ growth-foundations ──ICP score──→ HubSpot
                              │
Gong calls ──transcripts──→ sales-blueprint ──PULSO──→ HubSpot
                              │                    │
                              │              ──proposal──→ Gmail
                              │
                        copywriting-engine ──email──→ Gmail
                              │
                    ALL outputs ──persist──→ Notion
                              │
                    ALL alerts ──notify──→ Slack
                              │
                    ALL actions ──track──→ Linear
```

---

### 8.9 Matriz de Impacto por Plugin

| MCP Server | growth-foundations | sales-blueprint | copywriting-engine | Prioridad |
|------------|-------------------|-----------------|-------------------|-----------|
| **HubSpot** | ICP data read | PULSO scores write, deal context | Segment data | P1 |
| **Apollo** | ICP enrichment, company data | Pre-call research | Personalization data | P1 |
| **Notion** | ICP database | Pipeline tracker | Email drafts archive | P1 |
| **Gong** | - | Call analysis, coaching, verbatims | Buyer language | P2 |
| **Slack** | Share analysis | Deal alerts, team coaching | - | P2 |
| **Gmail** | - | Send proposals | Send emails | P2 |
| **Linear** | Action tracking | Follow-up issues | - | P2 |
| **Salesforce** | ICP data read | Enterprise pipeline | - | P3 |
| **Clay** | Waterfall enrichment | - | - | P3 |
| **LinkedIn** | Prospect research | Pre-call intel | Profile personalization | P3 |
| **Google Sheets** | - | SMB pipeline read | - | P3 |

---

### 8.10 Conclusiones

1. **3 MCPs son "no-brainers"**: HubSpot, Apollo, y Notion. Bajo esfuerzo, alto impacto, tier gratuito o económico, y cubren el ciclo data → analysis → persistence.

2. **Gong es el game-changer para sales-blueprint**: La capacidad de analizar calls reales con PULSO framework es el diferenciador que ningún competidor (gtmagents, marketingskills, agentkits) puede replicar facilmente.

3. **El ecosistema MCP favorece al marketplace**: La estandarización MCP significa que cada nueva integración de un vendor es automaticamente accesible para los plugins. El marketplace no necesita construir integraciones — solo documentar cómo usarlas.

4. **MCPs enterprise (Salesforce, 6sense, Clari) pueden esperar**: El target inicial es technical founders y SMBs. Enterprise vendrá cuando haya tracción.

5. **La ausencia de MCPs para Outreach/Salesloft es una oportunidad**: Si el marketplace construye un wrapper MCP para estas plataformas, se convierte en el bridge entre metodología PULSO y ejecución de secuencias.

6. **Documentación > código**: El mayor valor no es construir MCPs sino documentar en cada skill cómo configurar y usar los MCPs relevantes. Un `## Integraciones MCP` section en cada SKILL.md con ejemplos concretos.
