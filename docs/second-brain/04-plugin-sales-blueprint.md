# Plugin: sales-blueprint — Referencia Completa

## Identidad

- **Nombre**: sales-blueprint
- **Versión**: 1.0.0
- **Propósito**: Sistema de ejecución de ventas B2B basado en Metodología GrowthOS
- **Autor**: AI Huevos
- **Metodología base**: Metodología GrowthOS / PULSO

## Componentes

- 4 Skills: discovery-mastery, pipeline-management, proposal-generation, coaching-cadence
- 4 Commands: /discovery, /propuesta, /pipeline, /coaching
- 2 Agents: sdr-agent, deal-strategist

## Principio Rector

PULSO conecta discovery (diagnosticar) → pipeline (evaluar) → proposals (presentar) → coaching (mejorar). Es el hilo conductor de todo el sistema.

---

## Skill 1: discovery-mastery

**Triggers**: "discovery call", "PULSO", "qualifying opportunity", "sales discovery", "ACE opening", "call prep"

### Qué hace
Preparación y ejecución de discovery calls con apertura ACE, diagnóstico PULSO, y framework de 7 Momentos.

### ACE Opening
- **A**ppreciate: Agradece el tiempo
- **C**heck: Confirma la agenda y el tiempo disponible
- **E**nd: Define el outcome esperado de la llamada

### Proceso
1. Research del prospect (empresa + contacto)
2. Hipótesis PULSO pre-call
3. Preguntas priorizadas por dimensión PULSO
4. Agenda ACE personalizada
5. Preparación de objeciones comunes
6. Checklist pre-call

### Archivos
- `SKILL.md`: Proceso completo
- `frameworks/spiced-framework.md`: Guía completa de PULSO con scoring
- `frameworks/question-bank.md`: Banco de preguntas por industria/stakeholder
- `templates/call-prep.md`: Template de preparación
- `examples/discovery-example.md`: Ejemplo real (ACME Cybersecurity)

---

## Skill 2: pipeline-management

**Triggers**: "pipeline review", "deal health", "pipeline health", "deal scoring", "forecast", "stuck deals"

### Qué hace
Gestión de pipeline con PULSO scoring, indicadores de salud, modelo Bowtie, y métricas core.

### Modelo Bowtie
Visualización de todo el ciclo de vida del cliente: Awareness → Education → Selection → Onboarding → Impact → Growth

### 4 Métricas Core
1. **LTV:CAC** — Ratio de valor de vida vs costo de adquisición
2. **NRR** (Net Revenue Retention) — Retención neta de revenue
3. **Growth Rate** — Tasa de crecimiento
4. **Rule of 40** — Growth Rate + Profit Margin >= 40%

### Indicadores de Salud
Sistema rojo/amarillo/verde basado en PULSO score por deal.

### Archivos
- `SKILL.md`: Proceso completo
- `frameworks/health-indicators.md`: Indicadores de salud del pipeline
- `templates/pipeline-review.md`: Template de review

---

## Skill 3: proposal-generation

**Triggers**: "proposal", "propuesta", "SOW", "business case", "cotización"

### Qué hace
Generación de propuestas comerciales basadas en el diagnóstico PULSO. Prerrequisito: PULSO >= 23.

### Estructura de la Propuesta (8 secciones)
1. Executive Summary (conectado con CE)
2. Diagnóstico (Pain + Situation)
3. Solución propuesta (conectada con Impact)
4. Business Case / ROI
5. Approach / Metodología
6. Timeline
7. Inversión
8. Próximos pasos

### Trading Checklist (9 pasos)
Framework de negociación para no "regalar" descuentos. Cada concesión tiene un trade:
- Si el cliente pide descuento → pedir compromiso de timeline
- Si pide más scope → pedir más presupuesto o referencia
- Si pide trial extendido → pedir acceso a decision maker

### Archivos
- `SKILL.md`: Proceso completo con 9-step trading checklist
- `templates/enterprise-proposal.md`: Template para enterprise
- `templates/mid-market-proposal.md`: Template para mid-market

---

## Skill 4: coaching-cadence

**Triggers**: "coaching", "1:1", "REKS", "sales coaching", "rep performance", "candid conversation"

### Qué hace
Coaching de ventas con framework REKS (Results, Effort, Knowledge, Skills). Cadencia semanal/mensual, 8 modelos de coaching, conversaciones cándidas.

### Framework REKS
Antes de coachear, diagnostica. El 80% de los problemas de performance se diagnostican mal.

**Árbol de decisión**:
1. **Results** — ¿Están en target? Si no → revisar Effort
2. **Effort** — ¿Hay suficiente actividad? Si no → es time management/motivación/capacidad. Si sí → revisar Knowledge
3. **Knowledge** — ¿Sabe qué hacer? Si no → training/shadowing. Si sí → revisar Skills
4. **Skills** — ¿Puede ejecutar bajo presión? Si no → roleplay/coaching 1:1

> "No entrenes a alguien en skills si el problema es de esfuerzo. No le des un playbook si el problema es que no sabe hacer la llamada."

### 8 Modelos de Coaching
Diferentes técnicas según el diagnóstico REKS y la situación del rep.

### Cadencia
- **Semanal**: 1:1 de 30 min con agenda estructurada según semana del mes
- **Mensual**: Review más profunda con REKS scorecard

### Feedback TOAST
Framework para dar feedback estructurado y efectivo.

### Archivos
- `SKILL.md`: Proceso completo
- `frameworks/reks-framework.md`: Guía completa de REKS
- `frameworks/coaching-plays.md`: Los 8 modelos de coaching
- `templates/one-on-one-prep.md`: Template de prep para 1:1

---

## Agent: sdr-agent

### Rol
SDR senior que investiga prospectos, califica usando PULSO, y prepara outreach personalizado.

### Workflow (5 fases)
1. **Research del Prospect**: Empresa, contacto, stack tecnológico, compelling events
2. **Hipótesis PULSO**: Score pre-contacto por dimensión con nivel de confianza
3. **Calificación Inicial**: Tier 1 (20+), Tier 2 (12-19), Tier 3 (<12)
4. **Preparación de Outreach**: Email personalizado (max 100 palabras) + LinkedIn message (max 50 palabras) + cold call script
5. **Secuencia Multi-touch**: Plan de 14 días (Day 1 email → Day 2 LinkedIn → Day 4 call → ... → Day 14 último touch)

### Output
- Prospect Brief con datos clave
- Hipótesis PULSO con confianza por dimensión
- Tier Assignment con justificación
- Outreach Package (email + LinkedIn + call script)
- Secuencia de 14 días multi-touch

---

## Agent: deal-strategist

### Rol
VP de Ventas experimentado que revisa deals con ojo crítico. Identifica lo que el AE no está viendo.

### Workflow (5 fases)
1. **Intake**: Básicos del deal + PULSO actual + historia + competencia
2. **Análisis PULSO Crítico**: Evalúa cada dimensión con escepticismo profesional (¿es dato de primera mano o inferido? ¿es "happy ears"?)
3. **Risk Assessment**: Matriz de riesgos por categoría (Champion, Competencia, Timeline, Budget, Scope, Internal)
4. **Strategic Recommendations**: Dimensiones a reforzar + acciones tácticas (7 días) + decisión go/no-go
5. **Mutual Action Plan**: Si PULSO >= 20, plan con pasos, owners y fechas

### Buying Center Strategy (3x3)
Para deals enterprise: mínimo 3 contactos en 3 niveles (Executive, Management, User). Si estamos single-threaded, ESE es el riesgo #1.

### Output
- Deal Assessment con PULSO score crítico
- Risk Matrix con severidad y mitigación
- Strategic Recommendations priorizadas
- Go/No-Go con justificación
- Mutual Action Plan con timeline
- Buying Center Map con acciones

---

## Commands

### /discovery
Prepara una discovery call interactiva en 6 fases: Research → PULSO hypothesis → Questions → ACE agenda → Objections → Checklist.

### /propuesta
Genera una propuesta B2B completa en 6 fases: PULSO intake → Segment → Info gathering → Generate → Trading prep → Review.

### /pipeline
Review de pipeline en 7 fases: Data → Snapshot → PULSO por deal → Health scoring → Risks → Forecast → Actions.

### /coaching
Prep de 1:1 en 6 fases: Context → REKS diagnosis → Generate → Agenda → Feedback → Questions.

---

## Conexiones Internas

```
discovery-mastery ──(PULSO score)──► pipeline-management
                                      │
pipeline-management ──(deals calificados)──► proposal-generation
                                              │
coaching-cadence ──(REKS de skills)──► mejora de discovery
                                       │
sdr-agent ──(hipótesis PULSO)──► discovery-mastery
                                   │
deal-strategist ──(risk matrix)──► pipeline-management
```

Todo conecta via PULSO como lenguaje común.
