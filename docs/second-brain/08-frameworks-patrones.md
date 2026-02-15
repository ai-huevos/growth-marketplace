# Frameworks y Patrones — Referencia Consolidada

Inventario completo de todos los frameworks, templates, patrones y bibliotecas del marketplace.

---

## Frameworks Metodológicos

### 1. SPICED (Winning by Design)
**Ubicación**: `sales-blueprint/skills/discovery-mastery/frameworks/spiced-framework.md`
**Usado por**: discovery-mastery, pipeline-management, proposal-generation, coaching-cadence, sdr-agent, deal-strategist
**Tipo**: Framework de diagnóstico de oportunidades de venta
**Componentes**: Situation, Pain, Impact, Critical Event, Decision
**Scoring**: 1-5 por dimensión, total 5-30

### 2. ICP Scoring Model
**Ubicación**: `growth-foundations/skills/icp-analysis/frameworks/scoring-model.md`
**Usado por**: icp-analysis, /icp command
**Tipo**: Modelo cuantitativo de calificación de cuentas
**Componentes**: Firmográfico (30%) + Pain Match (25%) + Impact (20%) + Decision (15%) + Critical Event (10%)
**Scoring**: 0-100 con 4 tiers

### 3. ClarQ
**Ubicación**: `growth-foundations/commands/diagnostico.md`
**Usado por**: /diagnostico command
**Tipo**: Assessment de madurez operacional
**Componentes**: GTM Strategy, Revenue Streams, Q2C, Capabilities
**Scoring**: 0-40 con heatmap de colores

### 4. REKS (Winning by Design)
**Ubicación**: `sales-blueprint/skills/coaching-cadence/frameworks/reks-framework.md`
**Usado por**: coaching-cadence, /coaching command
**Tipo**: Framework de diagnóstico de performance
**Componentes**: Results → Effort → Knowledge → Skills (árbol de decisión)
**Scoring**: Cualitativo (diagnóstico + prescripción)

### 5. Value Proposition Canvas
**Ubicación**: `growth-foundations/skills/positioning/frameworks/value-prop-canvas.md`
**Usado por**: positioning skill
**Tipo**: Framework de propuesta de valor
**Componentes**: Jobs/Pains/Gains del cliente → Features/Pain Relievers/Gain Creators del producto

### 6. Five Forces de Porter
**Ubicación**: Referenciado en `growth-foundations/skills/competitive-analysis/SKILL.md`
**Usado por**: competitive-analysis skill
**Tipo**: Análisis de fuerzas competitivas del mercado
**Componentes**: Poder de proveedores, Poder de compradores, Amenaza de sustitutos, Amenaza de nuevos entrantes, Rivalidad existente

### 7. Bowtie Model
**Ubicación**: Referenciado en `sales-blueprint/skills/pipeline-management/SKILL.md`
**Usado por**: pipeline-management skill
**Tipo**: Modelo de ciclo de vida completo del cliente
**Componentes**: Awareness → Education → Selection → Onboarding → Impact → Growth

### 8. ACE Opening
**Ubicación**: Referenciado en `sales-blueprint/skills/discovery-mastery/SKILL.md`
**Usado por**: discovery-mastery, /discovery command
**Tipo**: Framework de apertura de calls de venta
**Componentes**: Appreciate → Check → End (outcome esperado)

### 9. Conversion Ladder
**Ubicación**: `copywriting-engine/skills/landing-pages/frameworks/conversion-architecture.md`
**Usado por**: landing-pages skill
**Tipo**: Flujo psicológico de landing pages
**Componentes**: Atención → Interés → Deseo → Confianza → Acción (10 secciones)

### 10. Persuasion Ladder
**Ubicación**: `copywriting-engine/skills/email-sequences/SKILL.md`
**Usado por**: email-sequences skill
**Tipo**: Escalación progresiva de persuasión en emails
**Componentes**: Valor → Insight → Proof → Pain → Offer → Urgency → Last Call (7 emails)

---

## Bibliotecas de Patrones

### 1. Power Headlines (50 fórmulas)
**Ubicación**: `copywriting-engine/skills/headline-mastery/patterns/power-headlines.md`
**Base de datos**: 38,737 headlines analizados
**Organización**: 10 categorías × 5 fórmulas cada una

| Categoría | Mecanismo | Ejemplo emblemático |
|-----------|-----------|-------------------|
| Curiosity Gap | Vacío de conocimiento | "El email de 3 líneas que cerró un deal de $250K" |
| Power Promise | Resultado + timeframe | "Duplica tus demos en 30 días sin cold calling" |
| Social Proof | Números reales | "2,300 CMOs ya automatizaron su reporting" |
| Fear/Loss | Aversión a la pérdida | "Tu pipeline tiene una fuga de 40%" |
| Contrarian | Desafiar creencias | "El embudo de ventas está muerto" |
| How-To | Habilidad + objeción | "Cómo cerrar deals de $100K+ sin case studies" |
| Secret/Insider | Info exclusiva | "El framework que usan los top closers" |
| Warning | Alertar peligro | "No contrates otro vendedor hasta que leas esto" |
| Direct Command | Orden + beneficio | "Triplica tu pipeline en 90 días" |
| Comparison | Enfrentar opciones | "Outbound vs Inbound: lo que 500 equipos revelaron" |

### 2. Trigger Library (10 triggers)
**Ubicación**: `copywriting-engine/skills/psychological-triggers/patterns/trigger-library.md`
**Base de datos**: 4,129 instancias analizadas
**Contenido**: Cada trigger incluye tipos, implementación por canal (headlines, CTAs, emails, landing pages), reglas éticas, y combinaciones efectivas.

Top 3 por leverage:
1. Scarcity (9.4) — Cantidad, tiempo, acceso, edición
2. Urgency (9.1) — Deadline externo, oferta, evento, costo incremental
3. Greed (9.0) — Value stacking, ROI explícito, comparación, exclusividad, bonus

### 3. Fórmulas de Copy
**Ubicación**: `copywriting-engine/skills/headline-mastery/patterns/formulas.md`
**Contenido**: Fórmulas adicionales más allá de los 50 power headlines.

### 4. Health Indicators
**Ubicación**: `sales-blueprint/skills/pipeline-management/frameworks/health-indicators.md`
**Contenido**: Indicadores rojo/amarillo/verde para evaluar deals en pipeline basado en SPICED scoring.

### 5. Question Bank
**Ubicación**: `sales-blueprint/skills/discovery-mastery/frameworks/question-bank.md`
**Contenido**: Banco de preguntas para discovery calls organizadas por industria y stakeholder/rol.

### 6. Coaching Plays
**Ubicación**: `sales-blueprint/skills/coaching-cadence/frameworks/coaching-plays.md`
**Contenido**: Los 8 modelos de coaching para diferentes situaciones diagnosticadas con REKS.

---

## Templates de Output

### growth-foundations

| Template | Ubicación | Propósito |
|----------|-----------|-----------|
| ICP Worksheet | `icp-analysis/templates/icp-worksheet.md` | Workshop interactivo de ICP |
| Competitive Report | `competitive-analysis/frameworks/competitive-report-template.md` | Reporte de análisis competitivo |

### sales-blueprint

| Template | Ubicación | Propósito |
|----------|-----------|-----------|
| Call Prep | `discovery-mastery/templates/call-prep.md` | Preparación de discovery call |
| Pipeline Review | `pipeline-management/templates/pipeline-review.md` | Review de salud del pipeline |
| Enterprise Proposal | `proposal-generation/templates/enterprise-proposal.md` | Propuesta para enterprise |
| Mid-Market Proposal | `proposal-generation/templates/mid-market-proposal.md` | Propuesta para mid-market |
| One-on-One Prep | `coaching-cadence/templates/one-on-one-prep.md` | Prep para 1:1 de coaching |

### copywriting-engine

| Template | Ubicación | Propósito |
|----------|-----------|-----------|
| Cold Outreach | `email-sequences/templates/cold-outreach.md` | Template de primer contacto |
| Nurture | `email-sequences/templates/nurture.md` | Template de educación progresiva |
| Reactivation | `email-sequences/templates/reactivation.md` | Template de reactivación |

---

## Ejemplos (Real-World Cases)

| Ejemplo | Ubicación | Qué demuestra |
|---------|-----------|---------------|
| Discovery ACME Cybersecurity | `discovery-mastery/examples/discovery-example.md` | Ejemplo completo de discovery call con SPICED aplicado |

---

## Reglas de Combinación de Frameworks

### Headline + Triggers
Las fórmulas de headlines más poderosas combinan 2 categorías + 2-3 triggers psicológicos. Ejemplo:
- Fórmula: Curiosity Gap + Number
- Triggers: Curiosity + Social Proof
- Resultado: "7 razones por las que tu mejor vendedor está por renunciar"

### SPICED → Proposal
El diagnóstico SPICED se traduce directamente a secciones de la propuesta:
- Situation → Contexto del executive summary
- Pain → Sección de diagnóstico
- Impact → Business case / ROI
- Critical Event → Timeline y urgencia
- Decision → Próximos pasos y buying center

### Checklist de Aplicación de Triggers
Antes de publicar cualquier pieza de copy:
- [ ] ¿Al menos 2 triggers están activos?
- [ ] ¿Los triggers son coherentes entre sí?
- [ ] ¿La intensidad es apropiada para la audiencia?
- [ ] ¿Todos los claims son verificables?
- [ ] ¿La escasez/urgencia es real?
- [ ] ¿El copy cumple lo que promete?
