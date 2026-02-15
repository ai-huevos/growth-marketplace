# 11 — GTM Skills Landscape & Marketplace Blueprint

> Documento de referencia: Paisaje completo del ecosistema de skills Claude Code para GTM, competidores, gaps, y blueprint del marketplace.
> Fecha: 2026-02-15
> Fuentes: anthropics/skills, SkillsMP, gtmagents, marketingskills, agentkits-marketing, 35+ fuentes de investigación GTM/RevOps.

---

## Resumen Ejecutivo

1. **Nicho no contendido**: Ningún marketplace de Claude Code empaqueta metodología B2B GTM como skills ejecutables. La coherencia SPICED es un moat real.
2. **Spanish-first es diferenciador**: Todos los competidores (gtmagents: 92 agentes, marketingskills: 25 skills, agentkits: 93 comandos) son solo en inglés.
3. **Persona target = "GTM Engineer"**: Rol B2B de mayor crecimiento 2025-2026. Combinan comodidad técnica (Claude Code) con necesidad estratégica.
4. **Mercado masivo**: RevOps software → $21.7B para 2032 (CAGR 15.4%). Mercado serviceable: $250M-$2.5B.
5. **3 gaps críticos**: No MEDDPICC, no ABM orchestrator, no PLG/PQL scoring.
6. **Pipeline de 4 agentes funciona**: 85% de AI SDRs autónomos fallaron. El modelo human-in-the-loop es el que funciona.
7. **Distribución necesita atención**: Registrar marketplace.json, SkillsMP, awesome-claude-code lists.
8. **Agent Teams experimentales pero relevantes**: TeammateTool permite ejecución paralela de agentes.
9. **Pencil es complementario**: Pencil.dev convierte diseños a código vía MCP — bridge para landing-pages skill.
10. **Próximos 3 plugins**: enterprise-sales-engine (MEDDPICC), abm-orchestrator, revenue-diagnostics.

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
- **Debilidad**: Sin metodología unificada, sin SPICED/MEDDPICC, solo inglés, volumen sobre profundidad

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
| Metodología | Varios/propietarios | SPICED-unified |
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
- **discovery-mastery** (nuestro) — SPICED + ACE + question bank
- **pipeline-management** (nuestro) — Bowtie + health indicators
- **proposal-generation** (nuestro) — 8 secciones, SPICED ≥23
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
- Pipeline SPICED scoring (nuestro)
- **GAP CRÍTICO**: Unit economics calculator, ABM scoring, GTM motion selector

### F: Design & UX (Pencil)
- Pencil.dev — Diseño visual → código vía MCP en IDE
- landing-pages skill puede integrarse con archivos .pen

---

## 3. Agent Teams & Operating Model

### Inventario Actual (6 agentes)

| Agente | Plugin | Rol |
|--------|--------|-----|
| sdr-agent | sales-blueprint | Prospecting → SPICED → outreach |
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

## 7. Preguntas Abiertas

1. **Modelo de pricing**: Competidores MIT/gratis. ¿Freemium, depth premium, enterprise, consulting?
2. **Distribución cross-platform**: SKILL.md es estándar cross-platform. ¿Solo Claude Code o también OpenSkills?
3. **MCP integrations**: ¿Mantener content-only o agregar integraciones CRM/analytics?
4. **Agent Teams**: ¿Diseñar para arquitectura actual (secuencial) o futura (TeammateTool paralelo)?
5. **Localización**: ¿Spanish-only, agregar English, o multi-language?
