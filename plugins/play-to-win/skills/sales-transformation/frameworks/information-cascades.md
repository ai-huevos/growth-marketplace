# Information Cascades: Como Fluye la Informacion en un Sistema de Ventas

Framework que define como cada componente del sistema de ventas produce outputs explicitos que se convierten en inputs directos del siguiente componente. La cascada elimina adivinanzas y habilita exito repetible.

## Principio Central

> "Reemplaza actos aleatorios de ventas con un sistema basado en blueprints donde los insights de discovery personalizan demos, la priorizacion del TAL dirige la estrategia de outreach, y las etapas del customer journey definen protocolos exactos de handoff."

Cada componente tiene:
- **Inputs**: Que necesita para funcionar (viene del componente anterior)
- **Proceso**: Que transforma
- **Outputs**: Que produce (alimenta al componente siguiente)
- **Validation**: Como saber que el output es de calidad

---

## Diagrama de Cascada Completo

```
PRODUCT MARKETING
  Inputs: Customer interviews, competitor analysis
  Outputs: Hero stories, positioning, messaging, taglines
     |
     +---> Hero Stories ---------> DISCOVERY (preguntas basadas en stories)
     +---> Positioning ----------> ICP (criterios basados en valor unico)
     +---> Messaging Architecture -> TAL OUTREACH (mensajes personalizados)
     |
     v
ICP (Ideal Customer Profile)
  Inputs: CRM data, positioning, rep interviews
  Outputs: Scoring criteria, segment profiles, red flags
     |
     +---> Scoring Criteria -----> TAL TIERING (priorizar cuentas)
     +---> Segment Profiles -----> CONTENT STRATEGY (contenido por ICP)
     +---> Red Flags ------------> QUALIFICATION (disqualify rapido)
     |
     v
TAL (Target Account List)
  Inputs: ICP criteria, data enrichment, intent signals
  Outputs: Named accounts, 3x3 maps, tier assignments
     |
     +---> Named Accounts -------> DISCOVERY PREP (research pre-call)
     +---> 3x3 Maps ------------> MULTI-THREADING (relationship plays)
     +---> Tier Assignment ------> RESOURCE ALLOCATION (esfuerzo por tier)
     |
     v
CUSTOMER JOURNEY
  Inputs: TAL data, SPICED framework, team structure
  Outputs: Stage definitions, handoff protocols, entry/exit criteria
     |
     +---> Stage Definitions ----> CRM PIPELINE (configuracion de stages)
     +---> Handoff Protocols ----> SPICED TRANSFER (sin perdida de info)
     +---> Entry/Exit Criteria --> DEAL PROGRESSION (cuanto avanzar)
     |
     v
DISCOVERY
  Inputs: Account research, ICP profile, hero stories
  Outputs: SPICED complete, impact quantified, critical event
     |
     +---> SPICED S+P -----------> DEMO CUSTOMIZATION (foco en dolor)
     +---> Impact (I) -----------> PROPOSAL/ROI (business case)
     +---> Critical Event (CE) --> DEAL URGENCY (timeline de cierre)
     +---> Decision (D) ---------> STAKEHOLDER STRATEGY (buying center)
     |
     v
DEMO + PRESCRIPTION
  Inputs: SPICED notes, pain-solution mapping, proof points
  Outputs: Pain-solution-impact validated, criteria influenced, commitment
     |
     +---> Pain-Solution-Impact -> DECISION CRITERIA (influenciar evaluacion)
     +---> Criteria Influence ----> COMPETITIVE STRATEGY (diferenciacion)
     +---> Commitment -----------> TRADING/CLOSE (negociacion win-win)
     |
     v
ADVANCED TECHNIQUES
  Inputs: Deal context, situation assessment
  Outputs: Technique execution, deal advancement
     |
     +---> Storytelling ---------> CREDIBILIDAD (tercera persona)
     +---> Trading --------------> WIN-WIN AGREEMENTS (sin descuentos)
     +---> Criteria Influence ---> COMPETITIVE WINS (insertar criterios)
     +---> CE Acceleration ------> DEAL VELOCITY (crear urgencia)
     |
     v
GOALS + METRICS + COACHING
  Inputs: Activity data, performance metrics, REKS analysis
  Outputs: Coaching plans, optimized playbook, improved performance
     |
     +---> REKS Coaching --------> SKILL DEVELOPMENT (mejorar habilidades)
     +---> Performance Data -----> PLAYBOOK UPDATES (iterar proceso)
     +---> Metric Tracking ------> CONTINUOUS IMPROVEMENT (optimizar)
```

---

## 7 Reglas de Integracion

### Regla 1: Product Marketing alimenta TODO
- Hero stories alimentan preguntas de discovery
- Positioning define criterios de ICP
- Messaging puebla outreach de TAL

**Validacion**: Si un vendedor no puede recitar el positioning statement, la cascada esta rota desde el inicio.

### Regla 2: ICP alimenta TAL alimenta Discovery
- ICP scoring crea tiers de TAL
- TAL research informa prep de discovery
- Discovery valida/actualiza ICP (loop de feedback)

**Validacion**: Si >30% del pipeline es Tier 3 o unscored, la cascada ICP->TAL esta rota.

### Regla 3: Discovery alimenta Demo
- SPICED S+P determina el foco del demo
- Impact (I) moldea la discusion de ROI
- Critical Event (CE) impulsa la urgencia del demo

**Validacion**: Si demos son genericos (misma presentacion para todos), la cascada Discovery->Demo esta rota.

### Regla 4: TAL alimenta Stakeholders alimenta Multi-Threading
- TAL identifica cuentas
- Power/Interest mapea stakeholders
- 3x3 crea estrategia de relaciones

**Validacion**: Si <60% de oportunidades tienen 3+ stakeholders, la cascada TAL->Multi-threading esta rota.

### Regla 5: Discovery alimenta Journey alimenta Handoff
- Discovery captura SPICED
- Journey define momentos de handoff
- SPICED template asegura transferencia de informacion

**Validacion**: Si clientes se quejan de repetir informacion, la cascada de handoff esta rota.

### Regla 6: Advanced Techniques = Situacionales
- Storytelling: Cuando se necesita credibilidad
- Trading: Cuando ocurre discusion de valor
- Decision Criteria: Cuando es competitivo
- Critical Event: Cuando el deal esta atorado

**Validacion**: Si reps usan la misma tecnica en todas las situaciones, no estan leyendo la situacion.

### Regla 7: TODO alimenta Goals/Metrics/Coaching
- Cada actividad se trackea via REKS
- Metricas identifican necesidades de coaching
- Playbook define estandares

**Validacion**: Si 1-on-1s no usan datos de metricas, el coaching es anecdotico, no sistematico.

---

## Que Bloquea las Cascadas

### Bloqueadores Comunes

| Bloqueador | Sintoma | Fase Afectada | Solucion |
|------------|---------|---------------|----------|
| Sin messaging documentado | Cada rep dice algo diferente | 0 -> Todo | Workshop de positioning + messaging playbook |
| Sin ICP scoring | Pipeline lleno de bad-fits | 1 -> 2 | Analisis de CRM + scoring methodology |
| Sin data enrichment | Cuentas sin datos de intent | 2 -> 5 | Integrar 6Sense/ZoomInfo/Clearbit |
| Sin CRM discipline | SPICED no se documenta | 5 -> 6 | Campos obligatorios + audit semanal |
| Sin handoff protocol | Contexto se pierde | 3 -> All | SPICED handoff template + pre-meetings |
| Sin coaching cadence | Reps no mejoran | All -> Performance | REKS framework + weekly 1-on-1s |

### Como Diagnosticar una Cascada Rota

1. **Mira el output**: Si el output de una fase es vacio o incompleto, la cascada esta rota ahi
2. **Pregunta al siguiente**: Si el equipo de la siguiente fase dice "no tengo informacion", la transferencia fallo
3. **Mide la consistencia**: Si los outputs varian wildly entre reps, el proceso no esta estandarizado
4. **Trackea el dropout**: Si deals mueren en una etapa especifica, revisa el input de esa etapa

---

## Ejemplo End-to-End: Cuenta Acme Corp

### 1. Product Marketing provee:
- **Story**: Sarah en fintech similar, VP Product, equipo desperdicio 3 meses construyendo producto equivocado
- **Positioning**: "AI-powered pipeline intelligence"
- **Key Message**: "Forecast accuracy without manual data entry"

### 2. ICP indica:
- Score: 95/100 = Tier 1 (fintech, 500+ empleados, usuario de Salesforce)
- Primary pain: "No pipeline visibility"
- Typical impact: "Forecast accuracy +30%"

### 3. TAL muestra:
- Tier 1 priority account
- Stakeholders: CFO (power), VP Sales (champion), Ops Dir (user)
- 3x3 plan: CEO->CFO, AE->VP Sales, SE->Ops Dir

### 4. Discovery descubre:
- **S**: 600 empleados, Salesforce, forecasting manual
- **P**: "Adivinamos el forecast, equivocados 40% del tiempo, CFO frustrado"
- **I**: "Si es preciso, podemos planear contrataciones. Vale $500K anuales"
- **CE**: "Board meeting Agosto 15, necesitamos mostrar que arreglamos esto"
- **D**: CFO firma, VP Sales recomienda, IT revisa

### 5. Demo entrega:
- Point 1: Story de Sarah -> AI dashboards -> "Te ves usandolo?"
- Point 2: Auto data capture -> 10 hrs/semana ahorradas -> "Vale $500K para ti?"
- Point 3: Forecast accuracy -> Board-ready reports -> "Resuelve deadline del 15 de Agosto?"

### 6. Trading negocia:
- Ellos quieren: 15% descuento, pago mensual
- Nosotros obtenemos: Case study, 2-year commit, referral a 2 peers
- Trade: 10% descuento + pago trimestral por case study + 2 anos + referrals

### 7. Resultados:
- Deal cerrado $200K ARR (vs $180K con 15% descuento)
- 2-year commit = $400K total
- Case study + referrals = 3 nuevas cuentas Tier 1

---

## Metricas de Salud de la Cascada

| Punto de la Cascada | Metrica | Target | Red Flag |
|---------------------|---------|--------|----------|
| Marketing -> Sales | Story usage rate | >80% | <50% = messaging no llega |
| ICP -> TAL | Pipeline alignment | >70% Tier 1-2 | >40% Tier 3 = ICP roto |
| TAL -> Discovery | Research completion | >90% | <60% = discovery sin prep |
| Discovery -> Demo | SPICED completion | >90% | <70% = demos genericos |
| Demo -> Close | Impact quantified | >70% | <50% = ROI no articulado |
| Handoff points | Info retention | >90% | <80% = clientes repiten info |
| Coaching loop | Metrics improve | >80% | <60% = coaching no funciona |
