# Playbook Synthesis

Template para generar un sales playbook personalizado basado en el contexto del negocio y los frameworks seleccionados. El playbook es el documento operativo que el equipo de ventas usa diariamente.

## Output Contract

| Campo | Requisito |
|-------|-----------|
| **Formato** | Documento Markdown operativo, usable en el dia a dia |
| **Secciones obligatorias** | Metodologia, Proceso Stage-by-Stage, Scripts, Objection Handling, Demo Framework, Metricas, Coaching |
| **Customizacion** | Ejemplos, timelines, herramientas adaptadas al contexto del cliente |
| **Longitud** | 15-20 paginas (suficiente para ser completo, no tanto para ser ignorado) |
| **Frameworks integrados** | Minimo 2, maximo 4 frameworks sintetizados |

## Benchmark

Un playbook de calidad debe:
- Ser ejecutable sin entrenamiento adicional (el rep puede leer y actuar)
- Tener scripts que suenan naturales (no roboticos)
- Incluir entry/exit criteria claros para cada etapa
- Mapear assets disponibles por etapa
- Tener metricas trackeables que el manager puede auditar
- Incluir plan de coaching con REKS

---

## Metadata del Playbook

| Campo | Valor |
|-------|-------|
| **Cliente** | [Nombre de la empresa] |
| **Fecha de creacion** | [Fecha] |
| **Version** | [v1.0] |
| **Frameworks integrados** | [Lista de framework #s y nombres] |
| **Contexto de negocio** | [Resumen en 2-3 oraciones] |
| **Problema principal** | [El desafio GTM que este playbook resuelve] |
| **Hipotesis** | [IF/THEN/BECAUSE — referencia a hypothesis card] |

---

## 1. Nuestra Metodologia de Ventas

### Principios Fundamentales
- Venta consultiva: diagnosticar antes de prescribir
- Value-based selling: impacto racional + emocional
- PULSO como lenguaje comun de diagnostico
- Proceso de decision del comprador (consensus-driven)
- Optimizacion de lifetime value (no solo first deal)

### Framework PULSO — Nuestro Lenguaje Comun

| Dimension | Que Descubrimos | Preguntas Tipo |
|-----------|----------------|----------------|
| **P — Panorama** | Hechos, contexto, circunstancias | Industria, tamano, herramientas, estructura |
| **U — Urgencia** | Desafios que traen al prospect | Cuantificable + cualitativo |
| **L — Logro** | Como impactamos su negocio | Revenue up / Cost down / CX up + beneficio personal |
| **S — Situación Crítica** | Deadline para lograr el logro | Que pasa si no lo logran a tiempo? |
| **O — Organización** | Proceso, comite, criterios | Quien firma, quien influye, que criterios |

### Nuestro ICP (Ideal Customer Profile)

| Atributo | Tier 1 (Mejor Fit) | Tier 2 (Buen Fit) | Tier 3 (Posible Fit) |
|----------|--------------------|--------------------|---------------------|
| **Industria** | [___] | [___] | [___] |
| **Tamano** | [___] empleados | [___] empleados | [___] empleados |
| **Revenue** | $[___] - $[___] | $[___] - $[___] | $[___] - $[___] |
| **Tech Stack** | [___] | [___] | [___] |
| **Intensidad de Urgencia** | [___]/10 | [___]/10 | [___]/10 |
| **Potencial de Logro** | [___] | [___] | [___] |
| **Situación Crítica** | [___] | [___] | [___] |

**Red Flags (Descalificar)**:
- [ ] [Red flag 1]
- [ ] [Red flag 2]
- [ ] [Red flag 3]

---

## 2. Proceso Stage-by-Stage

### Etapa 1: Awareness — Generar Leads Calificados

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Identificar fit y generar interes |
| **Duracion** | 1-3 dias |
| **Owner** | SDR |
| **Entry Criteria** | Lead recibido (inbound o outbound) |
| **Exit Criteria** | Dolor reconocido, discovery agendada |

**Actividades Clave**:
1. Research de la cuenta (ICP scoring, LinkedIn, noticias)
2. Scoring contra ICP (Tier 1/2/3)
3. Outreach personalizado (email + LinkedIn + call)
4. Qualification inicial (pain acknowledged?)

**Assets Disponibles**:
- [ ] ICP scoring checklist
- [ ] Email templates por industria
- [ ] LinkedIn message templates
- [ ] Cold call scripts

**Metricas**:
- Lead response time: < 2 horas
- ICP match rate: > 70%
- Response rate: > 15%

### Etapa 2: Education — Discovery + Diagnostico

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Entender necesidades y diagnosticar con PULSO |
| **Duracion** | 3-7 dias |
| **Owner** | SDR -> AE handoff |
| **Entry Criteria** | Discovery agendada, decision maker engaged |
| **Exit Criteria** | P + U + L descubiertos, logro articulado por prospect |

**Actividades Clave**:
1. Pre-call prep (research, PULSO hypothesis, stories preparadas)
2. ACE opening
3. PULSO diagnosis (P -> U -> summarize -> Story -> L -> S -> O)
4. Schedule next meeting + identify who else to invite

**Assets Disponibles**:
- [ ] Discovery call script (ver seccion 3)
- [ ] PULSO question bank personalizado
- [ ] Customer story library (10+ stories)
- [ ] Pre-call prep checklist

**Metricas**:
- PULSO completion: > 90%
- Talk-to-listen ratio: 30/70
- Discovery-to-Demo conversion: > 60%

### Etapa 3: Selection — Demo + Proof of Value

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Demostrar valor y diferenciarse |
| **Duracion** | 7-14 dias |
| **Owner** | AE + SE |
| **Entry Criteria** | Impact cuantificado, demo solicitado |
| **Exit Criteria** | Situación Crítica establecida, Organización mapeada, stakeholders alineados |

**Actividades Clave**:
1. Demo prep (customizar por PULSO, max 3 urgencia points)
2. Demo execution (pain -> solution -> impact por cada punto)
3. Impact validation ("Si resolvemos esto, cual es el impacto total?")
4. Decision criteria discussion + influence
5. Multi-threading (invitar stakeholders adicionales)

**Assets Disponibles**:
- [ ] Demo structure template (ver seccion 5)
- [ ] Pain-to-solution mapping
- [ ] ROI calculator
- [ ] Case studies por industria

**Metricas**:
- Demo customization rate: > 80%
- Impact quantified during demo: > 80%
- Demo-to-Proposal conversion: > 70%

### Etapa 4: Commit — Trading + Cierre

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Llegar a acuerdo win-win |
| **Duracion** | 7-21 dias |
| **Owner** | AE |
| **Entry Criteria** | Todos los stakeholders identificados, propuesta presentada |
| **Exit Criteria** | Legal/procurement completo, contrato firmado |

**Actividades Clave**:
1. Trading (9 pasos, no negociacion — ver seccion 6)
2. Decision criteria influence (deprioritize/insert/improve)
3. Email de Situación Crítica con timeline (backward-mapping)
4. Contract review + signature

**Assets Disponibles**:
- [ ] Trading menu (que tradear por que)
- [ ] Email template de Situación Crítica con timeline
- [ ] Proposal template
- [ ] Contract checklist

**Metricas**:
- Average discount: < 10%
- Trading adoption: 90% (no descuentos sin trades)
- Close rate: > 25%

### Etapa 5: Onboard — Primer Valor

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Entregar primer valor rapidamente |
| **Duracion** | 14-30 dias |
| **Owner** | AE -> CSM handoff |
| **Entry Criteria** | Contrato firmado, kickoff agendado |
| **Exit Criteria** | Primer milestone de valor alcanzado |

**Handoff PULSO** (AE -> CSM):

| Elemento | Detalles Transferidos |
|----------|----------------------|
| **P** | [Panorama completo del cliente] |
| **U** | [Urgencias primarias y secundarias en palabras del cliente] |
| **L** | [Logro racional + emocional + cuantificado] |
| **S** | [Situación Crítica, fecha, consecuencia] |
| **O** | [Proceso de organización, comite, criterios] |
| **Champion** | [Nombre, por que estan bought-in] |
| **Concerns** | [Preocupaciones pendientes] |

### Etapa 6: Use + Expand

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Demostrar resultados y expandir |
| **Duracion** | Continuo |
| **Owner** | CSM -> AM |
| **Entry Criteria** | Producto en uso, metricas baseline establecidas |
| **Exit Criteria** | Resultados probados, expansion identificada |

---

## 3. Discovery Call Script

### Opening — ACE (2 min)
```
"Agradezco que hayas tomado el tiempo para esta llamada. [A]
Tenemos 30 minutos agendados. Sigue funcionando para ti? [C]
El objetivo es entender tus requerimientos y ver si hay fit.
Si lo hay, discutiremos proximos pasos. Si no, te lo digo directo. [E]

Aqui lo que me gustaria cubrir: [agenda].
Que mas quieres TU sacar de la reunion?"
```

### Panorama — Preguntas Cerradas (5 min)
```
"Estan en [industria], aproximadamente [X] empleados, correcto?"
"Vi en LinkedIn que usan [herramienta]. Como les funciona?"
"Tu equipo es [distribuido/centralizado]?"
"Note que estan contratando para [rol]. Cuenten..."
```

### Urgencia — Preguntas Abiertas (7 min)
```
"Directores como tu mencionan desafios con [X], [Y], [Z].
Que tan importante es [X] para ti?"
"Cuentame que pasa cuando [escenario de dolor]..."
"Que has intentado para resolverlo? Que funciono y que no?"
```

### Summarize (1 min)
```
"Entonces tienes [Panorama] causando [Urgencia], lo que resulta en [consecuencia].
Lo capture bien?"
```

### Story — Hero's Journey (3 min)
```
"Eso me recuerda a [Nombre], [titulo similar] en [empresa similar].
Tenian [dolor similar]. Si no lo resolvian, [consecuencia].
Despues de [tipo de solucion], lograron [impacto cuantificado].
Te seria util algo asi?"
```

### Logro (4 min)
```
"Como impacta [dolor] tu negocio? Revenue, costos, experiencia?"
"Si resolvieras esto, que significaria para ti personalmente?"
"Puedes cuantificar ese impacto? Cuanto vale?"
```

### Situación Crítica (2 min)
```
"Cuando necesitas una solucion funcionando?"
"Que pasa si pierdes esa fecha?"
"Si necesitas [resultado] para [fecha] o enfrentas [consecuencia],
como podemos ayudarte a evitar eso?"
```

### Organización (3 min)
```
"Has comprado algo similar antes? Como fue el proceso?"
"Quien mas necesita opinar en esta decision?"
"Que criterios usaran para evaluar opciones?"
```

### Close (2 min)
```
"Cubrimos los goals que mencionaste al inicio?"
"Listo para ver como resolvemos [dolor 1, 2, 3]?"
"Quien mas deberia unirse a la proxima reunion?"
"Agendemos ahora — que dia funciona?"
```

---

## 4. Objection Handling

### "No tenemos presupuesto ahora"
```
"Entiendo que el presupuesto siempre es una consideracion.
Pregunto — cual es el costo de NO resolver [dolor]?
Hemos visto que empresas tipicamente ven ROI en [timeframe]
por [beneficio especifico]. Te seria util ver los numeros?"
```

### "Necesitamos pensarlo"
```
"Por supuesto, es una decision importante.
Que aspectos especificos quieres pensar?
Quiero asegurarme de darte la informacion que necesitas."
```

### "Ya trabajamos con otro proveedor"
```
"Agradezco que me lo digas.
Que funciona bien con tu solucion actual?
Que desafios sigues teniendo?
Me gustaria entender como podriamos complementar o mejorar."
```

### "Todos los vendors se ven iguales"
```
"Entiendo la perspectiva.
Te comparto algo que nuestros clientes valoran:
[criterio unico con impacto cuantificado].
Que tan importante seria eso para tu equipo?"
```

---

## 5. Demo Framework

### Estructura (30 min max)

| Fase | Tiempo | Accion |
|------|--------|--------|
| ACE Opening | 0-2 min | Misma apertura que discovery |
| Agenda (Mirror Pains) | 2-3 min | "Compartiste [P1, P2, P3]. Hoy muestro como los resolvemos" |
| Recap S+P | 4-6 min | "Quick reminder: estas en [S] experimentando [P]..." |
| Demo Point 1 | 6-12 min | Pain -> Solution -> Impact + Story + "Te ves usandolo?" |
| Demo Point 2 | 12-18 min | Pain -> Solution -> Impact + Story + "Te ves usandolo?" |
| Demo Point 3 | 18-24 min | Pain -> Solution -> Impact + Story + "Te ves usandolo?" |
| Impact Check | 24-26 min | "Si resolvemos [P1, P2, P3], cual es el impacto total?" |
| Decision | 27-29 min | "Que criterios importan ahora? Como nos comparamos?" |
| Close | 29-30 min | "Listos para avanzar? Siguiente paso es [X]" |

### Pain-to-Solution Mapping

| Discovery Pain | Feature/Capability | Impact | Proof Point | Story |
|---------------|-------------------|--------|-------------|-------|
| [Pain 1] | [Feature 1] | [Impact 1] | [Evidence] | [Name + similar situation] |
| [Pain 2] | [Feature 2] | [Impact 2] | [Evidence] | [Name + similar situation] |
| [Pain 3] | [Feature 3] | [Impact 3] | [Evidence] | [Name + similar situation] |

---

## 6. Trading Framework (No Negociacion)

### Mindset
- Negociacion = argumentar desde lados opuestos de la mesa
- Trading = colaboracion win-win

### 9 Pasos

1. **Get All Out**: Sacar todas las peticiones a la mesa primero
2. **Ask Questions**: "Ayudame a entender por que [peticion] importa"
3. **Prioritize**: "Cual es la MAS importante?"
4. **Qualify DM**: "Si acordamos aqui, es final o se necesitan mas aprobaciones?"
5. **Trade Easy First**: "Puedo hacer [item facil] si tu puedes [tu peticion]"
6. **Listen + Repeat**: "Estas pidiendo [X] a cambio de [Y]. Correcto?"
7. **Ask for Deal**: "Listos para avanzar juntos?"
8. **Add Expiration**: "Esta oferta es valida hasta [fecha]"
9. **Confirm in Writing**: Email en 30 min documentando acuerdo

### Trading Menu

| Ellos Quieren | Nosotros Obtenemos | Fair Trade? |
|--------------|-------------------|-------------|
| [___]% descuento | Case study + video testimonial | Si |
| Terminos de pago extendidos | Contrato de 2 anos | Si |
| Features adicionales | Upgrade a tier superior | Si |
| Implementacion rapida | Cliente provee recursos | Si |
| [___]% descuento | Nada a cambio | NO |

---

## 7. Metricas + Coaching

### Scorecard del Rep

| Metrica | Actual | Target | Gap | Root Cause (REKS) | Coaching Action |
|---------|--------|--------|-----|-------------------|-----------------|
| Revenue | $[___] | $[___] | $[___] | [R/E/K/S]: [Detalle] | [Accion] |
| Win Rate | [___]% | [___]% | [___]% | [R/E/K/S]: [Detalle] | [Accion] |
| Sales Cycle | [___] dias | [___] dias | [___] dias | [R/E/K/S]: [Detalle] | [Accion] |
| Avg Deal Size | $[___] | $[___] | $[___] | [R/E/K/S]: [Detalle] | [Accion] |
| PULSO Completion | [___]% | 90% | [___]% | [R/E/K/S]: [Detalle] | [Accion] |

### Cadencia de Coaching

| Frecuencia | Actividad | Foco |
|-----------|-----------|------|
| **Diaria** | Activity tracking, PULSO completion | Leading indicators |
| **Semanal** | 1-on-1 con REKS, pipeline review | Gap identification + coaching |
| **Mensual** | Playbook updates, training gaps | Process improvement |
| **Trimestral** | ICP refresh, strategy review | Strategic alignment |

---

*Este playbook fue generado con el Sales System Transformation Framework. Version: [v1.0]. Revision: [Trimestral].*
