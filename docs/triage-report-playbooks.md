# Reporte de Triage — 10 Playbooks de Marketing B2B

> **Fecha**: 2026-02-16
> **Método**: Ingestion Orchestrator (6-action triage)
> **Fuente**: 11 Google Docs playbooks (00-10) en NLM + AI Megaprompts + B2B Playbook (Word)
> **Auditor**: Claude Opus 4.6 con datos cruzados NLM × codebase

---

## Resumen Ejecutivo

| Acción | Cantidad | % |
|--------|----------|---|
| ENRICH | 7 | 54% |
| SKIP | 3 | 23% |
| TEMPLATIZE | 2 | 15% |
| CREATE | 0 | 0% |
| MERGE | 0 | 0% |
| REVERSE-ENGINEER | 1 | 8% |
| **TOTAL** | **13** | 100% |

**Conclusión**: Ningún playbook justifica un plugin nuevo. Los 5 plugins existentes absorben todo el contenido valioso. La acción dominante es ENRICH — los playbooks hacen más profundos los skills existentes.

---

## Triage Detallado

| # | Playbook | Acción | Destino | Elemento Extraíble | Justificación |
|---|----------|--------|---------|---------------------|---------------|
| 1 | 00. Skills de Marketing (competency matrix) | **ENRICH** | `growth-foundations/skills/icp-analysis/` | Matriz de 5 niveles × 23 competencias + sistema de evaluación basado en evidencia | ClarQ evalúa la organización; esto enriquece la dimensión "Capabilities" con evaluación individual de competencias. Agrega profundidad al diagnóstico sin duplicar. |
| 2 | 01. Objetivos de Marketing (revenue alignment) | **ENRICH** | `sales-blueprint/skills/pipeline-management/` | Pirámide de Objetivos (Revenue → Marketing Contribution → Team → Individual) + Balanced Dashboard (Volume/Quality/Value/Cost) + SLA Marketing-Ventas | Pipeline ya cubre health indicators y forecasting. Esto agrega el eslabón faltante: cómo se definen los objetivos que alimentan el pipeline. Complemento natural. |
| 3 | 02. Estrategia Contextual (resource audit, 3-2-1) | **ENRICH** | `growth-foundations/skills/competitive-analysis/` | Auditoría de Recursos Real + Sistema 3-2-1 (3 objetivos, 2 tácticas, 1 métrica) + Matriz Factibilidad vs Impacto | Competitive analysis ya tiene Five Forces y gap analysis. La Auditoría de Recursos y 3-2-1 agregan la capa de "¿qué puedo ejecutar HOY?" que falta. Complemento pragmático. |
| 4 | 03. Equipos de Marketing (team structure) | **ENRICH** | `conversational-pm/skills/project-management/` | Framework 3 Pilares Estratégicos (Demand/Brand/PMM) + Revenue Plan First + Sistema Anti-Silos + Agency vs Internal Framework | Conversational-PM ya tiene agent roster. Esto enriquece con la estructura de equipos humanos que los agentes soportan. El "Revenue Plan First" conecta con pipeline-management via SPICED. |
| 5 | 04a. Content Marketing B2B (single-channel mastery) | **SKIP** | — | — | `content-strategy` skill ya implementa Ski Slope + Topic Triangle + 3 workflows LATAM. El playbook 04a cubre el mismo territorio (single channel mastery, balanced portfolio 25/25/25/25) pero con menos profundidad que lo que ya existe. El Channel Selection Hierarchy (5-Level Filter) es interesante pero el Topic Triangle ya lo subsume. |
| 6 | 04b. Revenue-First Marketing (demand gen system) | **ENRICH** | `dotcom-secrets/skills/funnel-optimization/` | Lead Scoring Model (ICP Match 0-10 + Intent Score 0-10) + Revenue Infrastructure Setup (5 weeks) + Channel Audit Matrix (Effort × Impact) + Technical Funnel con SLAs (Contact→MQL→SQL→Customer) | Funnel-optimization tiene diagnóstico y scaling pero NO tiene el setup de infraestructura de medición. Esto agrega la "Fase 0" que falta: cómo construir la base de medición antes de optimizar. |
| 7 | 05. Product Marketing (IPEH cycle) | **ENRICH** | `growth-foundations/skills/positioning/` | IPEH Framework (Intelligence→Positioning→Enablement→Launch) + 3-Layer Messaging Hierarchy (Story→Positioning→Messaging) + Calendar of 12 Marketable Moments + Internal Positioning Rollout (6 weeks) + Launch Tier Classification (Level 1/2/3) | Positioning ya tiene Value Prop Canvas y Messaging Framework. IPEH agrega el ciclo completo de Product Marketing que conecta intelligence → positioning → enablement → launch. La Messaging Hierarchy es más granular que lo existente. |
| 8 | 07. Marketing Interno (internal comms) | **TEMPLATIZE** | `sales-blueprint/skills/coaching-cadence/templates/` | Internal Marketing Cycle (Transparency→Communication→Show Work→Collaboration) + Weekly Presentation (5 min Friday) + Weekly Email (200 words) + Monthly Report template | No justifica un skill completo. Son 3 templates de comunicación interna que encajan en coaching-cadence (ya cubre cultura de feedback). Template: `internal-comms-rhythm.md` |
| 9 | 08. Comunidad Rentable (community as product) | **ENRICH** | `dotcom-secrets/skills/alma/` | Community Growth Pipeline (Audience→Hooks→Community-as-Product→Engagement) + Strategic Hooks System (4 steps) + Idea Validation Process + 3 Growth Loops (Content-Audience-Community, Product-Community Feedback, Member-to-Member Value) | Alma ya tiene Attractive Character + IMAN email system. Community building es la extensión natural: una vez que tienes voz de marca (Alma), necesitas convertir audiencia en comunidad. Encaja como `alma/frameworks/community-growth-pipeline.md`. |
| 10 | 09. Futuro AI B2B (AI artisans) | **SKIP** | — | — | El marketplace ES la implementación de este playbook. El Framework del Artesano Técnico describe exactamente lo que el Growth Marketplace hace: combinar creatividad humana + AI execution. Documentar esto sería recursivo. El Sistema de Notoriedad y Captura (ToFu opinión + BoFu IA) ya está implementado en content-strategy (Ski Slope) + copywriting-engine. |
| 11 | 10. Solo Marketer (one-person team) | **SKIP** | — | — | `content-strategy` ya incluye un workflow "Solo Creator" específico para equipos de 1 persona. El playbook agrega el "Sistema de Foco Secuencial" y "Marca Personal Como Amplificador" pero content-strategy ya cubre la priorización secuencial (Topic Triangle) y la distribución (Red Packet Partnerships). Overlap > 70%. |
| 12 | AI Megaprompts - Marketing | **TEMPLATIZE** | `copywriting-engine/skills/psychological-triggers/templates/` | JTBD interview prompts + Hooks framework (story/data-shock/contrarian) + CRO scientific method prompts + Enemy-driven messaging framework | No son frameworks nuevos — son prompt patterns que implementan frameworks existentes. El Hooks framework y CRO method se templatizarían como `ai-prompt-patterns.md` en psychological-triggers. |
| 13 | B2B Marketing Playbook (Word) | **SKIP** | — | — | Es el contenedor meta de los 10 playbooks. No agrega contenido incremental. Ya triaged via los docs individuales. |

---

## Detalle de Ejecución por Acción

### ENRICH (7 acciones)

#### E1: Playbook 00 → growth-foundations/icp-analysis
**Archivos a crear:**
- `plugins/growth-foundations/skills/icp-analysis/frameworks/competency-matrix.md`
  - Matriz 5 niveles × 23 competencias
  - Sistema de evaluación basado en evidencia (portfolios, no opiniones)
  - Código de colores (🔴 Crítico → 🌟 Excepcional)
  - Plan 30-60-90 días de implementación
  - 3 Growth Loops de desarrollo de competencias
- `plugins/growth-foundations/skills/icp-analysis/templates/team-competency-assessment.md` → **T-26**
  - Template de evaluación individual + mapa de calor organizacional

**Conexión SPICED**: La evaluación de competencias alimenta la dimensión "Situation" del SPICED — define qué capacidades tiene el equipo del cliente HOY.

#### E2: Playbook 01 → sales-blueprint/pipeline-management
**Archivos a crear:**
- `plugins/sales-blueprint/skills/pipeline-management/frameworks/revenue-alignment.md`
  - Pirámide de Objetivos (Revenue Goal → Marketing % → Team Goals → Individual Goals)
  - Balanced Dashboard (Volume/Quality/Value/Cost)
  - SLA Marketing-Ventas (bilateral, con accountability mutua)
  - Review cadence (weekly operational + monthly strategic)
- `plugins/sales-blueprint/skills/pipeline-management/templates/marketing-sales-sla.md` → **T-27**
  - Template de SLA con métricas compartidas

**Conexión SPICED**: Los objetivos de revenue alimentan la "Impact" dimension — sin claridad en objetivos, no hay forma de cuantificar el impacto del deal.

#### E3: Playbook 02 → growth-foundations/competitive-analysis
**Archivos a crear:**
- `plugins/growth-foundations/skills/competitive-analysis/frameworks/contextual-strategy.md`
  - Auditoría de Recursos Real (budget, skills, time, market position)
  - Sistema de Objetivos 3-2-1 (3 objetivos, 2 tácticas/objetivo, 1 métrica/táctica)
  - Matriz Factibilidad vs Impacto (4 quadrants: Do Now, Future, Maybe, Never)
  - Stop-Start-Continue monthly review
  - Resource Allocation Matrix por stage (Startup 80/20, Growth 70/30, Scale 60/40)
- `plugins/growth-foundations/skills/competitive-analysis/templates/resource-audit.md` → **T-28**
  - Template de auditoría de recursos con 50+ canales para filtrar

**Conexión SPICED**: La auditoría de recursos alimenta "Situation" — define constraints reales antes de proponer soluciones.

#### E4: Playbook 03 → conversational-pm/project-management
**Archivos a crear:**
- `plugins/conversational-pm/skills/project-management/frameworks/team-structure.md`
  - Framework 3 Pilares Estratégicos (Demand/Brand/PMM)
  - Revenue Plan First methodology (model → levers → resource allocation)
  - Sistema Anti-Silos (ownership funcional, no por canal)
  - Agency vs Internal decision matrix
  - 12-Week Implementation Process (Discovery → Modeling → Design → Integration)
- `plugins/conversational-pm/skills/project-management/templates/team-design-canvas.md` → **T-29**
  - Template para diseñar equipo de marketing alineado a revenue

**Conexión SPICED**: La estructura de equipo alimenta "Decision" — quién decide qué, con qué recursos.

#### E5: Playbook 04b → dotcom-secrets/funnel-optimization
**Archivos a crear:**
- `plugins/dotcom-secrets/skills/funnel-optimization/frameworks/revenue-infrastructure.md`
  - Revenue-Oriented Infrastructure (5-week setup: Audit → Tracking → Attribution → Dashboards → SLAs)
  - Lead Scoring Model (ICP Match 0-10 + Intent Score 0-10 = MQL threshold)
  - Channel Audit Matrix (Effort × Impact 2×2)
  - Technical Funnel with SLAs (Contact→MQL→SQL→Customer)
  - Weekly review protocol
- `plugins/dotcom-secrets/skills/funnel-optimization/templates/lead-scoring-model.md` → **T-30**
  - Template de lead scoring con criterios ICP + Intent

**Conexión SPICED**: El lead scoring conecta directamente con ICP scoring de growth-foundations. Intent Score agrega la dimensión "Critical Event" — señales de timing.

#### E6: Playbook 05 → growth-foundations/positioning
**Archivos a crear:**
- `plugins/growth-foundations/skills/positioning/frameworks/product-marketing.md`
  - IPEH Framework (Intelligence→Positioning→Enablement→Launch)
  - 3-Layer Messaging Hierarchy (Company Story→Positioning→Messaging)
  - Calendar of 12 Marketable Moments (product roadmap + marketing-generated moments)
  - Internal Positioning Rollout (6-week cycle: Research→Validation→Approval→Internal Tour→Company-wide→Launch)
  - Launch Tier Classification (Level 1/2/3 by impact → resource allocation)
- `plugins/growth-foundations/skills/positioning/templates/launch-playbook.md` → **T-31**
  - Template de launch plan con tier classification + 6-week rollout

**Conexión SPICED**: IPEH Intelligence phase alimenta "Situation" y "Pain". El Launch Tier connects to "Critical Event" — timing del go-to-market.

#### E7: Playbook 08 → dotcom-secrets/alma
**Archivos a crear:**
- `plugins/dotcom-secrets/skills/alma/frameworks/community-growth-pipeline.md`
  - Community Growth Pipeline (Audience→Hooks→Community-as-Product→Engagement)
  - Strategic Hooks System (Newsletter CTA→Organic promo 20%→Risk-free trial→Lead magnets)
  - Community-as-Product methodology (interviews, trend analysis, signals, launches)
  - Systematic Engagement (member-led events, expert tagging, monthly connections)
  - Idea Validation Process (Feedback→Hypothesis→Pilot→Measure→Build→Launch)
  - 3 Growth Loops (Content-Audience-Community, Product-Community Feedback, Member-to-Member Value)
- `plugins/dotcom-secrets/skills/alma/templates/community-launch-plan.md` → **T-32**
  - Template de launch plan de comunidad (Point of View → Hooks → Trial → Engagement)

**Conexión SPICED**: La comunidad alimenta "Critical Event" — la activación de una comunidad crea urgencia de adopción en prospects que ven participación activa.

### TEMPLATIZE (2 acciones)

#### T1: Playbook 07 → sales-blueprint/coaching-cadence
**Archivo a crear:**
- `plugins/sales-blueprint/skills/coaching-cadence/templates/internal-comms-rhythm.md` → **T-33**
  - Template de ritmo de comunicación interna:
    - Weekly Presentation (5 min Friday): 3 logros, 1 aprendizaje, 1 prioridad
    - Weekly Email (200 words max): números clave + siguiente paso
    - Monthly Report: progreso vs objetivos + plan siguiente mes
  - Internal Marketing Cycle (loop visual)
  - Show-the-Work protocol (daily sharing, draft sharing, behind-the-scenes)

#### T2: AI Megaprompts → copywriting-engine/psychological-triggers
**Archivo a crear:**
- `plugins/copywriting-engine/skills/psychological-triggers/templates/ai-prompt-patterns.md` → **T-34**
  - JTBD interview mega-prompt (WHO-WHAT-HOW lens)
  - Hooks framework prompts (story/data-shock/contrarian)
  - CRO scientific method prompt chain
  - Enemy-driven messaging prompt
  - Content multiplication prompt (1-to-10 derivation)

### REVERSE-ENGINEER (1 acción) — RECLASIFICADA como ENRICH

Al revisar con más detalle, el contenido del playbook 05 (IPEH) ya está suficientemente formalizado como framework. No requiere "reverse-engineering" — ya tiene pasos claros. Reclasificado como ENRICH (E6 arriba).

### SKIP (3 + 1 = 4 acciones)

| # | Playbook | Razón |
|---|----------|-------|
| 5 | 04a. Content Marketing B2B | `content-strategy` ya cubre con mayor profundidad (Ski Slope > Single Channel Mastery) |
| 10 | 09. Futuro AI B2B | El marketplace ES este playbook. Documentarlo sería recursivo. |
| 11 | 10. Solo Marketer | `content-strategy` Solo Creator workflow ya cubre esto. Overlap >70%. |
| 13 | B2B Marketing Playbook (Word) | Meta-contenedor de los 10 playbooks. Sin contenido incremental. |

---

## Impacto en el Sistema

### Antes → Después

| Métrica | Antes | Después |
|---------|-------|---------|
| Templates | 25 | 34 (+9) |
| Frameworks | 32 | 39 (+7) |
| Skills | 18 | 18 (sin cambio) |
| Plugins | 5 | 5 (sin cambio) |
| Agents | 7 | 7 (sin cambio) |
| Archivos en plugins/ | 127 | ~143 (+16 archivos nuevos) |

### Distribución de Enriquecimientos por Plugin

| Plugin | Frameworks | Templates | Total Archivos |
|--------|-----------|-----------|----------------|
| growth-foundations | +3 | +3 | +6 |
| sales-blueprint | +1 | +2 | +3 |
| dotcom-secrets | +2 | +2 | +4 |
| conversational-pm | +1 | +1 | +2 |
| copywriting-engine | +0 | +1 | +1 |
| **TOTAL** | **+7** | **+9** | **+16** |

### Template IDs Nuevos

| ID | Nombre | Plugin/Skill |
|----|--------|--------------|
| T-26 | team-competency-assessment.md | growth-foundations/icp-analysis |
| T-27 | marketing-sales-sla.md | sales-blueprint/pipeline-management |
| T-28 | resource-audit.md | growth-foundations/competitive-analysis |
| T-29 | team-design-canvas.md | conversational-pm/project-management |
| T-30 | lead-scoring-model.md | dotcom-secrets/funnel-optimization |
| T-31 | launch-playbook.md | growth-foundations/positioning |
| T-32 | community-launch-plan.md | dotcom-secrets/alma |
| T-33 | internal-comms-rhythm.md | sales-blueprint/coaching-cadence |
| T-34 | ai-prompt-patterns.md | copywriting-engine/psychological-triggers |

---

## Validación Arquitectónica

### ✅ Decision 12 Cumplida: Ingestion Before Integration
Todo contenido pasó por el orchestrator antes de integración.

### ✅ Score-as-Gate Respetado
- T-26 usa scoring de competencias (0-4 niveles) que alimenta ClarQ
- T-30 usa lead scoring (0-20) que alimenta pipeline SPICED
- Ningún template nuevo introduce scoring fuera del sistema existente

### ✅ SPICED Threading Documentado
Cada ENRICH documenta su conexión SPICED (ver columna "Conexión SPICED" arriba).

### ✅ 3 Agent Patterns Respetados
Ningún enriquecimiento crea agentes nuevos. Los 7 agentes existentes son suficientes.

### ✅ Plugin Modularity Mantenida
Cada plugin sigue siendo instalable independientemente. Los cross-references son opcionales.

---

## Próximos Pasos (Post-Confirmación)

1. **Crear 16 archivos** (7 frameworks + 9 templates) en los plugins destino
2. **Actualizar `docs/template-catalog.md`** con T-26 a T-34
3. **Actualizar `CLAUDE.md`** con nuevos conteos
4. **Actualizar READMEs** de plugins afectados (5 READMEs)
5. **Log en `docs/execution-log.md`** la ejecución del triage
6. **Re-sync docs afectados** a NLM (09-inventario + doc afectados)
7. **Git commit** todo el sprint

---

*Generado por Ingestion Orchestrator v1.0 | Filtro esencialista aplicado | Steve Jobs rule: "Ship 5 insanely great, not 13 mediocre"*
