# CS Operating Model — Referencia Maestra

Framework completo del Customer Success Operating Model de Metodología GrowthOS. Este documento es la referencia condensada de todas las fases, sub-pasos, metricas y habilidades core del modelo.

## Principio Fundamental

> **El Revenue Recurrente es el RESULTADO del Impacto Recurrente.**

Un negocio de revenue recurrente no puede depender solo de adquirir clientes. Debe asegurar que el valor prometido durante el proceso de ventas se entregue de forma sostenible a lo largo de toda la vida del cliente.

## El Problema: Falta de Interoperabilidad

Sin un modelo operativo uniforme, las organizaciones sufren:

- **Falta de lenguaje comun**: Cada departamento usa su propio approach, definiciones y terminos
- **Falta de modelo de datos estandarizado**: Los datos recolectados no encajan en un modelo uniforme, haciendo dificil tomar decisiones basadas en datos
- **Falta de interoperabilidad**: Las actividades de Marketing, Sales y CS no estan disenadas para trabajar juntas, creando bloqueos al crecimiento y escalabilidad

## El CICLO: Journey Completo del Cliente

```
        CUSTOMER ACQUISITION              │           CUSTOMER SUCCESS
                                          │
    LeadGen → LeadDev → Sales → Commit → │ → Onboard → Adopt → Expand
                                          │
    CR1      CR2      CR3     CR4        │    CR5       CR6     CR7
    M1       M2       M3      M4    M5   │    M6        M7      M8    M9
```

### Metricas estandarizadas:
- **M (Volume)**: MQL, SQL, SAL, WIN, ACTIVE, LIVE, ARR, LTV
- **CR (Conversion)**: Indicativos de eficiencia (retention rate, usage, etc.)
- **PM (Performance)**: Comparan metricas entre si (LTV:CAC, NRR, etc.)

## Cuatro Elementos Core (C1-C4)

### C1. El Journey (CICLO)
El journey end-to-end del cliente reemplaza el funnel convencional de marketing/ventas. El funnel no cubre adopcion ni expansion, que son los motores de crecimiento de cualquier negocio de revenue recurrente.

**Journey del Impacto**:
```
Discover    →  Identify   →  Prioritize  →  Buy on   →  Commit to  →  First    →  Recurring  →  Max
Unknown        Impact on      on Impact      Impact      Impact        Impact      Impact        Impact
Impact         Impact
```

### C2. PULSO Framework
El lenguaje diagnostico comun que conecta TODAS las interacciones con el cliente a lo largo de todo el journey.

| Dimension | Que captura | Ejemplo |
|-----------|------------|---------|
| **P — Panorama** | Hechos y circunstancias relevantes | Tamano de empresa, ubicacion, empleados, software, necesidades de seguridad, nivel de madurez, metas de revenue |
| **U — Urgencia** | Problema u oportunidad que necesita solucion | A menudo expresado superficialmente — requiere diagnostico mas profundo |
| **L — Logro** | Resultados de resolver el dolor | Emocional (beneficia al individuo primero) + Racional (beneficia a la empresa primero) |
| **S — Situación Crítica** | Deadline con consecuencias negativas si se pierde | Impulsa comportamiento: completar implementacion, expandir uso, renovar |
| **O — Organización** | Personas involucradas, proceso, criterios | Quien firma, quien influye, que criterios usan para evaluar |

**Propiedades clave de PULSO**:
- Es **secuencial**: necesitas entender el Panorama antes de comprender Urgencia y Logro
- Refleja **relevancia contextual**: contactar basado en panorama tiene menos relevancia que basado en logro
- La **Organización** resulta de la necesidad de Logro del cliente — no la impulsa

### C3. Impacto
La realizacion de la promesa de valor. Dos tipos:

- **Racional (cuantitativo)**: Beneficia a la empresa primero. Metas medibles como aumentar revenue o reducir costos
- **Emocional (cualitativo)**: Beneficia al individuo primero. Como una promocion ganada, reduccion de estres, reconocimiento

> Se necesitan 3-7 preguntas para recopilar todos los tipos de impacto. Se paciente.

**Secuencia de preguntas para descubrir logro**:
1. Panorama (cerrada): "Cuantos usuarios hay en la herramienta actual?"
2. Urgencia (abierta): "Con que siguen luchando los usuarios? Como se manifiesta?"
3. Logro (abierta): "Cuanto tiempo o dinero se podria ahorrar al hacer mas rapido X?"

### C4. Situación Crítica
Un evento que, si se pierde, tiene consecuencias negativas asociadas.

- **Compelling Event**: Tiene fecha pero NO urgencia. "Tu renovacion es el 15 de septiembre."
- **Situación Crítica**: Tiene fecha Y consecuencia negativa. "Tu renovacion es el 15 de septiembre, y si no se procesa, tu equipo volvera a gestionar gastos en spreadsheets."

Las Situaciones Críticas causan priorizacion, impulsando decisiones en negocios de revenue recurrente.

## Cuatro Metricas Core de Performance

### PM1. LTV:CAC Ratio
Relacion entre el Customer Lifetime Value y el Customer Acquisition Cost.
- **Inputs**: Annual Revenue (M5), Onboarding Churn (CR5), Retention/Churn (CR6), Expansion/Contraction (CR7), Length of contract (t7)

### PM2. Net Revenue Retention (NRR)
Cuanto ha crecido o decrecido tu ARR/MRR en el tiempo.
- Factores: expansion del cliente + churn de revenue por perdida de clientes + downgrades
- **Inputs**: Annual Revenue (M5), Onboarding Churn (CR5), Retention/Churn (CR6), Expansion/Contraction (CR7), Length of contract (t7)

### PM3. Growth Rate
Cambio porcentual de revenue recurrente en un periodo:
- Rapid Growth: 10-20%
- Hypergrowth: 20-40%
- Double/Triple: 100-200%
- Blitz Scaling: >1000%

### PM4. Rule of 40
Growth Rate + Profit Margin >= 40%
- Si estas arriba de 40%, generas profit de forma sostenible
- Si estas debajo de 40%, puedes enfrentar problemas de cash flow
- **Inputs**: Growth Rate, Profit (CAC, Cost to Serve, Cost of Raw Goods)

---

## FASE 1: ONBOARD (O1-O4)

La fase de onboarding establece la base de la relacion. Es la mas critica y la mas facil de hacer mal.

### O1. Handoff a Customer Success
**Meta**: Transferir efectivamente informacion critica de la cuenta.

**Acciones clave**:
1. Completar handoff lo mas cerca del commit posible
2. Transferir info usando PULSO (estructura org, personas, red flags)
3. Guias claras: Quien compro? Por que? Que hacian antes? Por que no funcionaba? Que problema resolver?

**Flujo**: PREPARE → SETUP (ACE) → PULSO verify → STRATEGIZE → CLOSE (WAGONS) → FOLLOW-UP

**Inmediatamente despues**: Redactar borrador del Joint Impact Plan.

### O2. Kickoff Call
**Meta**: Iniciar la relacion con un kickoff call efectivo que establezca tono y expectativas.

**Flujo**: PREPARE (internal + external) → SETUP (ACE) → PULSO verify/deepen → TEACHING MOMENTS → ONBOARDING REVIEW → JIP alignment → NEXT STEPS → WAGONS → POST CALL ACTION

**Tips criticos**:
- Investigar asistentes con anticipacion
- Empezar alineando metas
- Ser curioso y escuchar (no es sobre ti)
- Establecer expectativas de roles y responsabilidades
- Cerrar 5 min antes del fin con next steps claros

### O3. Joint Impact Plan (JIP)
**Meta**: Crear una estrella norte compartida que guie el engagement.

**Contenido del JIP**:
- Metas de corto y largo plazo
- First Impact goal durante onboarding
- Metas de adopcion
- Desafios con planes de mitigacion
- Oportunidades de expansion

**Ciclo de vida**: DRAFT V1 (post-handoff) → FINALIZE V1 (kickoff) → REVIEW (cada 3-12 meses) → SWING-THROUGH (cada 6 meses)

**Formato de documentacion**: WHAT / WHO / WHEN / HOW

**En cada revision usar PULSO para validar**:
- Metas de impacto medibles
- Desafios con mitigacion clara
- Oportunidades y plan de avance

### O4. First Impact
**Meta**: Entregar primer impacto tangible rapidamente para construir confianza.

**TTFI (Time To First Impact)**: Tiempo desde kickoff hasta que el cliente logra su primer impacto, medido en dias.

**Reglas**:
- Definir claramente al inicio del engagement
- Ir mas alla de un simple login
- Lograr First Impact = fin de fase de Onboarding (no fin de implementacion)
- Confirmar al cliente cuando se logra
- Actualizar el JIP con nuevas metas

**Evidencia**: Clientes con TTFI mas corto son generalmente mas exitosos y tienen menor probabilidad de churn.

---

## FASE 2: ADOPT (A1-A5)

Donde los clientes pasan la mayor parte de su tiempo. Enfocada en entregar impacto recurrente de forma eficiente y efectiva.

### A1. Drive Impact Process
**Meta**: Crear un motor de impacto recurrente.

**Tres loops**:
1. **Impact Loop**: Impacto recurrente via programas probados
2. **Activity Loop**: Actividades que generan impacto
3. **Trigger Loop**: Surfea riesgos y oportunidades

El JIP orquesta todas las acciones. Entrenar a todos los roles customer-facing a usar PULSO para impulsar logro.

> El impacto que provees NO es obvio. Se requiere esfuerzo persistente para comunicarlo.

### A2. Executive Business Review (EBR)
**Meta**: Reunion estrategica para alinear impacto con intereses corporativos de los proximos 12 meses.

**NO es**: Un resumen de reuniones operacionales pasadas.
**SI es**: Una conversacion estrategica con stakeholders ejecutivos.

**Flujo**: PREPARE (stories) → SETUP (ACE) → PULSO validate → STORY (cliente que cambio estrategia) → IMPACT REVIEW → STORY + DEMO → CLOSE (nuevas Situaciones Críticas para 12 meses) → FOLLOW-UP (resumen 5 min)

**3 formas de entregar mas impacto**: Remediacion, Upgrade, Expansion.

### A3. Trigger Plays
**Meta**: Reaccionar rapidamente a escenarios comunes.

**Formato IFTTT**: SI [senal] ENTONCES [accion] PORQUE [racional]

**Triggers de Oportunidad (+)**: Sobre-uso, crecimiento equipo, oportunidad mercado, M&A
**Triggers de Riesgo (-)**: Cambio champion, cuenta dark, caida uso, M&A

**Para cada trigger ejecutado**: Accion probada → Medir logro → Registrar como pocket story con PULSO.

### A4. Health Scoring
**Meta**: Indicadores lider para guiar acciones proactivas.

**4 Pilares**:
1. **Impacto**: Cliente obtiene impacto? Es 10x el precio? Se identifica nuevo impacto?
2. **Satisfaccion**: CSAT? Tiempo respuesta criticos? Momentos que importaron?
3. **Engagement**: KPIs influenciados? Penetracion? Tickets soporte?
4. **Adopcion**: Equipos core usando producto? Ejecutivos en EBR? CE proximamente? Cambios equipo?

**Niveles**: Healthy (verde) → Symptoms (amarillo) → At Risk (rojo)

**TIP**: Empezar con 1 metrica por pilar.

### A5. Renewal Execution
**Meta**: Renovacion como momento estrategico.

**Empezar ~6 meses antes** de la fecha de renovacion.

**Flujo**: PREPARE → SETUP (ACE) → PULSO validate → IMPACT review → STORY → DEMO → ORGANIZACIÓN → SITUACIÓN CRÍTICA → CLOSE → FOLLOW-UP

**Si el impacto no se logro**: Retroceder y redefinir impacto deseado para el proximo ano.

---

## FASE 3: EXPAND (E1-E5)

Crecimiento sostenible viene de expansion de cuentas existentes.

### E1. Expansion Process
**Meta**: Definir el proceso de expansion diferenciando whitespace planning y account planning.

**Flujo**: RESEARCH → USE-CASES → WHITESPACE → ACCOUNT PLANNING → STAKEHOLDERS → WORKSHOP → EXECUTION

### E2. Whitespace Planning
**Meta**: Priorizar expansion basada en Logro + Situación Crítica (no solo Panorama/Urgencia).

**Matriz**: Para cada producto/servicio, evaluar nivel de Logro y presencia de Situación Crítica. Priorizar donde ambos son altos.

### E3. Account Planning
**Meta**: Coordinar actividades de cuenta alrededor de metas del cliente.

**3 elementos**: Logro + Situación Crítica + Organización

**Diferencia con JIP**: El JIP se construye CON el cliente. El Account Plan es INTERNO.

**Componentes**: Whitespace, Stakeholder Map, Active Projects, GTM Alignment

### E4. Expansion Execution
**Meta**: Intercambiar valor (TRADE), no negociar.

**12 pasos**: Get items on table → Listen → Repeat → "Anything else?" → Prioritize → Summarize → TRADE → Offer → If counter, listen → Repeat counter → Small adjustments → Confirm agreement

**"Si piden mas, eso cambia el deal."**

### E5. Account Termination
**Meta**: Proceso claro cuando una cuenta termina.

Capturar por que se van. Exit interview si es apropiado. Actualizar sistemas. Circular razones a equipos relevantes. Agregar a lista de ex-clientes.

---

## CORE SKILLS (S1-S6)

| Skill | Nombre | Descripcion |
|-------|--------|-------------|
| S1 | Managing Meetings | SETUP → AGENDA → CLOSE → GOAL → OUTCOME → STAKEHOLDERS → FOLLOW-UP |
| S2 | Diagnose Sequence | OPEN (ACE) → PANORAMA → URGENCIA → STORY → LOGRO → SITUACIÓN CRÍTICA → ORGANIZACIÓN → CLOSE |
| S3 | Situación Crítica Blueprint | Diferenciar Compelling Event (fecha sin urgencia) de Situación Crítica (fecha + consecuencia negativa) |
| S4 | Timeline de Situación Crítica | Identificar Situación Crítica → Consecuencias → Pasos en orden cronologico inverso |
| S5 | Navigating an Organization | Initiator → User → Champion → Gatekeeper → Influencer → Decision Maker → Executive Buyer |
| S6 | Customer Story | 3 partes: Panorama similar → Urgencia (consecuencias negativas) → Logro positivo de la solucion |

---

## Cinco Fundamentos Customer-Centric

1. **Conoce a tu cliente** — Investigar, preguntar, escuchar
2. **Crea valor en cada interaccion** — Cada reunion con meta clara
3. **Educa y mantén la curiosidad** — Hacerlos mas inteligentes
4. **Ayuda a lograr impacto** — Nunca la meta es "llegar a la decision"
5. **Impacto emocional y racional** — Identifica ambos para cada stakeholder

---

## 7 Pasos para Implementar el Modelo Operativo

1. Usar el ciclo para modelar el journey completo del cliente
2. Dividir el journey en fases
3. Establecer metricas clave por fase [M, CR, PM]
4. Identificar un punado de Momentos que Importan por fase
5. Crear un Blueprint para cada momento
6. Codificar PULSO en cada Framework para que sea entrenable y mejorable
7. Medir metricas [M, CR, PM] y mejorar con el tiempo

---

*Fuente: CS Operating Model — Metodología GrowthOS*
