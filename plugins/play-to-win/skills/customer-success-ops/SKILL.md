---
name: customer-success-ops
description: Use when building a customer success operating model, planning customer onboarding, creating joint impact plans, measuring first impact (TTFI), conducting EBRs, building health scoring, planning kickoff calls, or managing the post-sale lifecycle. Activates for "customer success", "onboarding cliente", "plan de impacto", "health score", "adopcion", "kickoff", "customer success model", "onboarding", "impact plan", "health scoring", "adoption", "kickoff call", "first impact", "EBR", "trigger plays".
version: 1.0.0
---

# Customer Success Operating Model

Sistema operativo completo para Customer Success basado en la metodologia Winning by Design. Cubre el ciclo de vida post-venta completo: desde el handoff de ventas hasta la expansion y terminacion de cuentas. Construido sobre SPICED como lenguaje comun y el Impacto Recurrente como principio fundamental.

> **Primer Principio**: El Revenue Recurrente es el RESULTADO del Impacto Recurrente. Si no entregas impacto, no retienes ni creces.

## Cuando usar este skill

- El usuario necesita construir un modelo operativo de Customer Success
- Quiere disenar el proceso de onboarding de clientes
- Necesita crear un Joint Impact Plan (JIP) con un cliente
- Quiere medir y acelerar el Time To First Impact (TTFI)
- Necesita preparar o conducir un kickoff call
- Quiere implementar Executive Business Reviews (EBRs)
- Necesita construir un sistema de Health Scoring
- Quiere disenar Trigger Plays (If This Then That)
- Necesita planificar la expansion de cuentas existentes
- Quiere mejorar la retencion y reducir churn

## Arquitectura del Modelo Operativo

El CS Operating Model tiene tres fases independientes que cubren el lado derecho del bowtie:

```
CUSTOMER ACQUISITION          │         CUSTOMER SUCCESS
                               │
LeadGen → LeadDev → Sales → Commit → Onboard → Adopt → Expand
                               │
                               │  ┌─────────────────────────────┐
                               │  │  CS OPERATING MODEL         │
                               │  │                             │
                               │  │  O: Onboard (O1-O4)        │
                               │  │  A: Adopt   (A1-A5)        │
                               │  │  E: Expand  (E1-E5)        │
                               │  │  S: Skills  (S1-S6)        │
                               │  └─────────────────────────────┘
```

### Cuatro Elementos Core que atraviesan todo el journey

| Elemento | Codigo | Descripcion |
|----------|--------|-------------|
| **El Journey (Bowtie)** | C1 | El journey end-to-end del cliente, desde lead generation hasta expansion |
| **SPICED Framework** | C2 | Lenguaje diagnostico comun que conecta todas las interacciones con el cliente |
| **Impacto** | C3 | La realizacion de la promesa de valor — racional (cuantitativo) y emocional (cualitativo) |
| **Critical Event** | C4 | Un evento que, si se pierde, tiene consecuencias negativas — impulsa decisiones y urgencia |

### Dos Tipos de Impacto

| Tipo | Beneficia primero a... | Ejemplos |
|------|----------------------|----------|
| **Impacto Racional** | La empresa, luego al individuo | Reducir costos operativos 30%, aumentar revenue, acelerar time-to-market |
| **Impacto Emocional** | El individuo, luego a la empresa | Ganar una promocion, reducir estres, sentirse exitoso, ser reconocido |

> **Insight clave**: La mayoria de los humanos toman decisiones emocionales y luego las racionalizan con datos. Identifica AMBOS tipos de impacto para cada stakeholder.

Se necesitan entre 3 y 7 preguntas para recopilar todos los tipos de impacto que un cliente busca. Se paciente.

---

## FASE 1: ONBOARD (O1-O4)

La fase de onboarding es la mas critica del journey — establece la base de la relacion. Evita la mentalidad de "check-the-box" donde ambos equipos se enfocan en completar un checklist sin entender el impacto a entregar.

> **Riesgo**: Si no sabes que impacto estas trabajando para lograr, sera muy dificil entregarlo.

### O1. Handoff a Customer Success

**Objetivo**: Transferir efectivamente la informacion critica de la cuenta usando SPICED.

El handoff de Sales a CS es el momento mas vulnerable del journey. Un mal handoff = cliente empieza de cero = frustracion = churn temprano.

**Mejores practicas para un buen handoff**:

1. **Completar el handoff lo mas cerca posible del commit** — mientras la informacion esta fresca
2. **Transferir info critica usando SPICED**, incluyendo:
   - Estructura organizacional
   - Personas clave y sus roles
   - Red flags identificadas durante el proceso de ventas
3. **Usar guias claras de handoff** para que todos sepan:
   - Quien nos compro?
   - Por que compraron?
   - Que estaban haciendo antes?
   - Por que eso no les funcionaba?
   - Cual era el problema a resolver o evitar?

**Secuencia del handoff**:
1. PREPARE → Debrief call con el rep de ventas (o revisar CRM)
2. SETUP → ACE la llamada, preparar agenda, presentaciones mutuas
3. SPICED → Verificar si la informacion es correcta, calcular el impacto real juntos, confirmar la fecha critica
4. STRATEGIZE → Determinar un plan para lograr el impacto
5. CLOSE → Cerrar a tiempo, setup para la proxima reunion (WAGONS)
6. FOLLOW-UP → No perder momentum, moverse rapido de una accion a otra

**Inmediatamente despues del handoff**: Redactar un borrador del Joint Impact Plan para completar con el cliente durante el kickoff.

### O2. Kickoff Call

**Objetivo**: Iniciar la relacion con fuerza a traves de un kickoff call efectivo.

Ver framework completo en `frameworks/kickoff-orchestration.md`.

**Tips para un kickoff call exitoso**:

1. **Investigar los asistentes** antes de la llamada — conocer titulos y contexto
2. **Abrir alineando metas** — confirmar si los asistentes tienen otros planes o expectativas
3. **Ser curioso y escuchar** — esto NO es sobre ti hablando; es sobre hacer preguntas y escuchar detalles criticos
4. **Establecer expectativas** — roles y responsabilidades de ambos lados, claves del exito y errores comunes
5. **Cerrar no mas tarde de 5 minutos antes** del fin — asegurar next steps claros y action items asignados

**Estructura del kickoff**:
1. PREPARE → Internal (revisar notas de Sales, preparar deck) + External (agendar, confirmar stakeholders)
2. SETUP → ACE la llamada, agenda, presentaciones
3. SPICED → Verificar y profundizar la informacion del handoff
4. TEACHING MOMENTS → Compartir best practices, educar sobre valor adicional
5. ONBOARDING REVIEW → Mapa visual de las etapas de onboarding
6. JOINT IMPACT PLAN → Alinear en metas y crear el plan conjunto
7. NEXT STEPS → Action items asignados con fechas
8. CONNECT THE WAGONS → Acordar cadencia de reuniones de progreso
9. POST CALL ACTION → Follow up inmediato con recap y plan de proyecto

### O3. Joint Impact Plan (JIP)

**Objetivo**: Crear una estrella norte compartida que guie la relacion con el cliente.

Ver framework completo en `frameworks/joint-impact-plan.md` y template en `templates/joint-impact-plan-worksheet.md`.

El JIP es un documento orientado al cliente que guia todo el engagement. Es el artefacto mas importante del CS Operating Model.

**Que incluir en el JIP**:

1. **Metas de corto y largo plazo** — incluyendo el First Impact goal durante onboarding, metas de adopcion, metas internas de gestion organizacional
2. **Desafios** — discutir abiertamente con tu champion: como convertir detractores, reconocer desafios de change management
3. **Oportunidades** — metas que tienen para su organizacion, chance de desplazar productos competidores

**Ciclo de vida del JIP**:
- **DRAFT V1** → Durante o inmediatamente despues del handoff de Sales a CS
- **FINALIZE V1** → Durante el kickoff, completar con el cliente (la participacion del cliente crea compromiso)
- **REVIEW** → Cada 3-12 meses segun necesidad, usando SPICED para validar y actualizar
- **SWING-THROUGH** → Cada 6 meses, rehacer el JIP completo para tener un plan fresco al momento de la renovacion

**En cada revision del JIP usar SPICED para validar**:
- Metas de impacto que son medibles
- Desafios con planes de mitigacion claros
- Oportunidades y plan para avanzar

### O4. First Impact (Primer Impacto)

**Objetivo**: Entregar el primer impacto tangible lo mas rapido posible para construir confianza.

Ver framework completo en `frameworks/first-impact.md`.

**First Impact** = el momento en que el cliente logra impacto tangible a traves del uso y adopcion de tu producto/servicio.

**Reglas fundamentales**:
- El First Impact DEBE estar claramente definido al inicio del engagement
- Idealmente va mas alla de un simple login
- Lograr el First Impact senala el FIN de la fase de Onboarding (no significa que la implementacion esta completa)
- Es un hito inicial hacia una meta mayor

**Metrica clave**: **TTFI (Time To First Impact)** — el tiempo que toma para que un cliente logre su First Impact, medido en dias desde el kickoff.

> **Evidencia**: Clientes con TTFI mas corto son generalmente mas exitosos, y su probabilidad de churn es mucho menor que clientes con TTFI largo.

**Secuencia para lograr First Impact**:
1. **Definir** → Que quieren lograr con tu producto y para que fecha?
2. **Alinear implementacion** → Tareas de implementacion alineadas con el impacto deseado
3. **Mantener engagement** → Notificaciones cortas, notificar cualquier retraso sin importar quien lo causo
4. **Confirmar** → Verificar que se logro el First Impact
5. **Actualizar JIP** → Alinear con nuevas metas
6. **Comunicar** → Confirmar via email que el onboarding se completo
7. **Transicion** → Asegurar que el cliente conoce nuevos puntos de contacto

---

## FASE 2: ADOPT (A1-A5)

La fase de adopcion es donde los clientes pasan la mayor parte de su tiempo. Es critico establecer una cadencia de reuniones proactiva apropiada al tamano del cliente y establecer formas de surfear riesgos y oportunidades lo antes posible.

### A1. Drive Impact Process (Motor de Impacto)

**Objetivo**: Crear un motor de impacto recurrente con tres loops integrados.

El impacto no sucede solo. Tres loops forman el Motor de Impacto:

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   LOOP 3: TRIGGER (surfea riesgos/opps)         │
│   ┌──────────────────────────────────────┐      │
│   │                                      │      │
│   │   LOOP 2: ACTIVITY (actividades)    │      │
│   │   ┌──────────────────────────┐      │      │
│   │   │                          │      │      │
│   │   │   LOOP 1: IMPACT        │      │      │
│   │   │   (impacto recurrente)   │      │      │
│   │   │                          │      │      │
│   │   └──────────────────────────┘      │      │
│   │                                      │      │
│   └──────────────────────────────────────┘      │
│                                                  │
└──────────────────────────────────────────────────┘
```

1. **Impact Loop** → Impulsa impacto recurrente basado en programas de impacto probados
2. **Activity Loop** → Donde las actividades se traducen en impacto
3. **Trigger Loop** → Permite surfear riesgos y oportunidades en una cuenta

**El JIP orquesta** las diversas acciones que impulsan el impacto. Usa SPICED en todas las acciones para guiar la conversacion correcta.

> **Error comun**: Asumir que el impacto que provees es obvio. NO es obvio. Se requiere esfuerzo persistente para compartir el impacto en todos los niveles del cliente y de tu propia organizacion.

**Acciones clave**:
- Actualizar metas de impacto del JIP y agregar nuevas con el tiempo
- Ejecutar campanas de impacto recurrentes
- Implementar Business Reviews periodicas
- Activar Trigger Plays cuando se detecten senales
- Aplicar Health Scoring para monitoreo continuo

### A2. Executive Business Review (EBR)

**Objetivo**: Reunion estrategica con stakeholders para validar metas, revisar impacto logrado y discutir riesgos/oportunidades.

Un EBR es MUCHO MAS que un resumen de reuniones operacionales pasadas. Debe usarse para alinear el impacto con los intereses estrategicos de la empresa para los proximos 12 meses.

**Cuando pides tiempo de un ejecutivo, DEBES proveer valor.**

**Estructura del EBR**:

1. **PREPARE** → Preparar historias de impacto relevantes a la experiencia actual del cliente
2. **SETUP** → ACE la llamada con agenda y meta clara
3. **SPICED** → Validar info critica de la cuenta, capturar actualizaciones
4. **STORY** → Usar historia de un cliente que no logro resultados pero cambio de estrategia y entrego impacto de negocio
5. **IMPACT REVIEW** → Analizar si el impacto deseado fue logrado, establecer expectativas para futuro impacto
6. **STORY + DEMO** → Usar historia relevante para inspirar, obtener quotes de impacto real de los ultimos meses
7. **CLOSE** → Identificar nuevos critical events para los proximos 12 meses, actualizar JIP
8. **FOLLOW-UP** → Crear resumen de 5 minutos para audiencia mas amplia, mantener momentum

**3 formas de entregar mas impacto**:
- **Remediacion**: Mejor utilizar capacidades ya pagadas
- **Upgrade**: Entregar nuevas capacidades a usuarios actuales
- **Expansion**: Encontrar nuevos usuarios para entregar capacidades similares

**Pregunta clave en cada EBR**: "Si tuvieras que renovar hoy, lo harias?"

### A3. Trigger Plays

**Objetivo**: Reaccionar rapidamente a escenarios comunes mediante jugadas predefinidas.

Ver template en `templates/trigger-play-cards.md`.

Los Trigger Plays siguen el formato **If This Then That (IFTTT)**:

**SI** [senal detectada] **ENTONCES** [accion a tomar] **PORQUE** [racional]

**Tipos de triggers**:

| Categoria | Ejemplos de Triggers |
|-----------|---------------------|
| **Surfear Oportunidad (+)** | Sobre-uso, crecimiento del equipo, oportunidad de mercado, evento M&A |
| **Identificar Riesgo (-)** | Cambio de champion, cuenta en silencio, caida en uso, evento M&A |

**Para cada trigger**:
1. Ejecutar la accion probada contra el trigger
2. Medir el impacto de las acciones tomadas
3. Registrar el Trigger Play completado como una pocket story usando SPICED (referencia para otros miembros del equipo)

**Ejemplo**:
- **Trigger**: Si el Champion se va...
  - **Accion 1**: Enviar introduccion y agendar discovery call con la persona que lo reemplaza. Proveer insights del impacto ofrecido en los ultimos y proximos 12 meses.
  - **Accion 2**: Seguir al Champion a su nuevo destino — puede convertirse en nueva oportunidad para el equipo de ventas.

### A4. Health Scoring

**Objetivo**: Usar indicadores lider para guiar acciones proactivas.

Ver template en `templates/health-scoring-dashboard.md`.

Health Scoring usa patrones para resaltar riesgos o oportunidades potenciales. NO es una herramienta de diagnostico — resalta sintomas y ayuda a saber que cuentas necesitan atencion.

**Cuatro Pilares del Health Score**:

| Pilar | Pregunta Central | Indicadores |
|-------|-----------------|-------------|
| **I. Impacto** | Esta el cliente obteniendo impacto? | Impacto 10x del precio? Nuevo impacto siendo identificado? Impacto es importante? Servicio siendo usado? |
| **II. Satisfaccion** | Estan los clientes satisfechos con el soporte? | Score CSAT? Tiempo de respuesta a issues criticos? Momentos que importaron? |
| **III. Engagement** | Que tan comprometidos estan con tu producto? | KPIs que influenciamos? Penetracion? Tickets de soporte/tiempo de respuesta? |
| **IV. Adopcion** | Todos los equipos core utilizan el producto? | Ejecutivos involucrados en EBR? Critical events proximamente? Cambios en el equipo/champion? |

**Niveles de salud**:
- **Healthy** (Verde) → KPIs se espera que mejoren con el tiempo
- **Symptoms** (Amarillo) → Se detectan sintomas que requieren atencion
- **At Risk** (Rojo) → Alto riesgo de churn

**TIP**: Empieza con una sola metrica por pilar. No sobre-ingenierices el sistema inicial.

### A5. Renewal Execution

**Objetivo**: La renovacion es un momento estrategico que presenta muchas oportunidades.

La renovacion NO es solo un momento operacional — es estrategico. Si has estado entregando impacto de forma consistente, la renovacion deberia ser un evento positivo.

**Iniciar el proceso de renovacion ~6 meses antes** de la fecha de renovacion para tener tiempo de desarrollar oportunidades o mitigar riesgos.

**Estructura de la conversacion de renovacion**:

1. **PREPARE** → Entender necesidades originales y si han cambiado
2. **SETUP** → ACE con agenda y meta
3. **SPICED** → Confirmar situacion, validar por que vinieron originalmente
4. **IMPACT** → Lograste el impacto? Siguen planeando usar el mismo impacto?
5. **STORY** → Historia relevante de un cliente que cambio para lograr impacto
6. **DEMO** → Demostrar nuevo impacto en contexto de su situacion/dolor
7. **DECISION** → Identificar proceso, criterios de decision, y decision maker
8. **CRITICAL EVENT** → Conectar el impacto con un KPI corporativo del cliente
9. **CLOSE/NEXT STEPS** → Acordar fecha de expiracion, confirmar que suena justo
10. **FOLLOW-UP** → Mantener momentum, dar seguimiento inmediato

**Tacticas de renovacion**:
- Si el impacto no fue logrado, retroceder y determinar el impacto deseado para el proximo ano
- Considerar: aumento de precio anual, true-up de usuarios, nuevas features, expansion de red de contactos
- Agregar solo 3% anualmente al contrato causa que el LTV se componga ano tras ano

> **Regla de oro**: Pitching lleva a desengagement. Diagnosticar siempre, nunca hacer pitch.

---

## FASE 3: EXPAND (E1-E5)

El crecimiento sostenible y rentable viene de la expansion de cuentas existentes. Ya sea que la expansion la maneje CS, Sales, o un equipo dedicado de Account Management, la mocion depende de si el cliente esta obteniendo impacto recurrente.

### E1. Expansion Process

**Objetivo**: Vender a clientes existentes acelera el crecimiento.

En un negocio de Revenue Recurrente, es vital crecer mas alla de lo que un cliente compro inicialmente. La expansion no tiene que ser reactiva.

**Dos actividades clave**:
- **Whitespace Planning** → Identifica necesidades adicionales fuera del alcance original basado en el impacto que necesita el cliente
- **Account Planning** → Detalla el approach para ir tras ese whitespace

**Secuencia de expansion**:
1. RESEARCH/DIAGNOSE → Escanear al cliente por impacto racional y emocional
2. USE-CASES → Identificar casos de uso existentes
3. WHITESPACE PLANNING → Cuantificar potencial de revenue
4. ACCOUNT PLANNING → Detallar el approach
5. STAKEHOLDERS → Identificar stakeholders, cada uno tiene su propio impacto emocional
6. WORKSHOP → Tener impacto + critical event identificados antes de hacer un workshop
7. EXPANSION EXECUTION → Cerrar la expansion

### E2. Whitespace Planning

**Objetivo**: Usar Impacto y Critical Event para evaluar oportunidades de expansion.

La mayoria del whitespace planning se basa en Situacion (S) y Pain (P) — como ranking F500 o numero de empleados. En cambio, priorizar basado en:

- **Impacto**: Cuanto dinero ahorramos o revenue podemos crecer para el cliente?
- **Critical Event**: Cual es la urgencia que impulsa el timeline de decision?

**Matriz de priorizacion**:

| Producto | Impacto | Critical Event | Prioridad |
|----------|---------|---------------|-----------|
| Producto A | Bajo — falta ROI | Algo de urgencia | Baja |
| Producto B | Alto — claro beneficio | Tiene critical event | **ALTA** |
| Producto C | Alto — gran impacto | Sin urgencia | Media |

> El input de todas las personas que trabajan con el cliente mejora la precision de tu informacion.

### E3. Account Planning

**Objetivo**: Coordinar todas las actividades de la cuenta alrededor de las metas del cliente.

El Account Planning se simplifica a tres elementos:
1. **Impacto** → Identificar el impacto racional que ganara el cliente
2. **Critical Event** → Priorizar proyectos basados en critical events
3. **Decision Process** → Quien esta involucrado y que les importa (impacto emocional)

**Diferencia clave**: Mientras el JIP se construye con el cliente, el Account Plan es una herramienta INTERNA enfocada en las metas que tu empresa tiene para la cuenta.

**Componentes del Account Plan**:
- **Whitespace**: Potencial de gasto, gasto actual, otros proyectos, critical events, cuando contactar
- **Stakeholder Map**: A quien conocemos, que les importa, como estamos conectados, a quien debemos conocer
- **Active Projects**: Proyecto, impacto, critical events, proceso de decision
- **GTM Alignment**: Alinear equipos de Sales, CS, AMs, y Execs

**Approach 3x3**: Identificar 3 oportunidades y 3 stakeholders para cada cuenta prioritaria.

> **Importante**: A medida que las cuentas crecen, los recursos internos crecen tambien (feature requests, soporte dedicado). Esto hace que el Account Plan y su proceso de planeacion sean mas importantes.

> **No expandir DISMINUYE el engagement e INCREMENTA el chance de churn.**

### E4. Expansion Execution

**Objetivo**: En revenue recurrente no hay negociacion — hay TRADE (intercambio de valor).

**No necesitas negociar con clientes de revenue recurrente.** Son TUS clientes. Si no entregas, se van o hacen downgrade. El approach correcto es intercambiar items de valor igual.

**12 pasos de Expansion Execution**:
1. Obtener todos los items de negociacion sobre la mesa
2. Escuchar cuidadosamente y tomar notas
3. Repetir lo que escuchaste: "Entonces, si entendi bien..."
4. Preguntar: "Hay algo mas?"
5. Priorizar los issues con ellos
6. Resumir: "Ok, entonces quieres ___ y ___"
7. **TRADE**: Empezar con items faciles, dar para recibir
8. Hacer la oferta — clara y concisa
9. Si contraofrecen, escuchar y entender
10. Antes de responder, repetir la contraoferta
11. Hacer ajustes pequenos
12. Cuando hay acuerdo, repetirlo de vuelta

**Si piden mas**: "Eso cambia el deal."

**Post-acuerdo**: Enviar email con los terminos acordados INMEDIATAMENTE despues de la reunion. El contrato puede tardar dias — asegurar el acuerdo rapido.

### E5. Account Termination

**Objetivo**: Tener un proceso claro y profesional para cuando una cuenta termina.

Perder cuentas nunca es deseable, pero ocurre. Es critico tener un plan detallado.

**Nivel estrategico**:
- Capturar en detalle POR QUE se van
- Si tiene que ver con tu producto o falta de impacto, obtener el mayor detalle posible
- Compartir esa informacion con los equipos relevantes

**Checklist de Account Termination**:
- [ ] Conectar con Finance/Legal para fecha de corte de acceso
- [ ] Coordinar con Support/Dev para desactivar acceso en la fecha
- [ ] Actualizar todos los sistemas (CRM, CS Tool, etc.)
- [ ] Remover de email lists si aplica
- [ ] Capturar detalles del POR QUE se van en el sistema correcto
- [ ] Si es apropiado, pedir "exit interview" de unos minutos
- [ ] Agradecer por la relacion y terminar en nota positiva
- [ ] Circular razones de churn a equipos relevantes (producto, dev, sales, CS)
- [ ] Agregar contactos a lista de ex-clientes para updates futuros

---

## CORE SKILLS (S1-S6)

Desarrollar y mejorar continuamente las habilidades del equipo es esencial para dar vida al CS Operating Model.

### S1. Managing Meetings (Gestion de Reuniones)

Estructura para manejar cualquier reunion de forma efectiva:

1. **SETUP** → Abrir con la meta de la reunion y la hora de cierre
2. **AGENDA** → Acordar agenda corta para lograr la meta
3. **CLOSE** → Cerrar a tiempo — primero mirar atras para ver si se lograron las metas
4. **GOAL** → Confirmar si todos estan listos para avanzar — discutir la meta del proximo meeting
5. **OUTCOME** → Que es el resultado de esta reunion?
6. **STAKEHOLDERS** → "Quien estuvo involucrado y deberiamos incluirlos?"
7. **FOLLOW-UP** → Seguimiento diligente

**Timing**: Empezar ACE/Agenda no mas de 5 minutos despues de la hora. Empezar el cierre 5-10 minutos antes de la hora de fin.

### S2. Diagnose Sequence (Secuencia de Diagnostico)

Guia paso a paso para diagnosticar consistentemente usando SPICED:

1. **OPEN** → ACE la llamada
2. **SITUATION** → 2-3 preguntas puntuales en contexto del cliente
3. **PAIN** → Escuchar, tomar notas, empatizar si el cliente ventea (pedir priorizar)
4. **STORY** → Compartir historia de otra persona logrando impacto en la vida real
5. **IMPACT** → Preguntar si resuena, como se compara este impacto con su negocio
6. **CRITICAL EVENT** → "Cuando necesitas esto?" "Que pasa si pierdes esa fecha?"
7. **DECISION** → Determinar los factores de decision
8. **CLOSE** → Cerrar a tiempo, WAGONS

### S3. Critical Event Blueprint

**Un Critical Event tiene fecha Y consecuencias negativas si se pierde.** La diferencia con un Compelling Event es que este ultimo tiene fecha pero no urgencia.

- **Compelling Event**: "Tu fecha de renovacion es el 15 de septiembre." (evento sin urgencia)
- **Critical Event**: "Tu fecha de renovacion es el 15 de septiembre, y si no se procesa, tu equipo tendra que volver a gestionar gastos en spreadsheets, perdiendo tiempo y creando riesgo de errores." (evento + consecuencia negativa)

### S4. Critical Event Timeline

Secuencia cronologica inversa de acciones necesarias para lograr el impacto:

1. Identificar el Critical Event
2. Establecer que pasa si se pierde el evento
3. Listar los pasos que llevan al critical event (en orden cronologico inverso)
4. El mensaje de critical event es un email corto y standalone — no puede ser parte de un email largo

### S5. Navigating an Organization

Framework para entender como se toman decisiones dentro de una organizacion:

| Rol | Funcion | Engagement |
|-----|---------|-----------|
| **Initiator** | Reconoce situacion y dolor | Empieza la conversacion basado en el dolor que experimenta |
| **User** | Provee insights practicos | Puede provocar la necesidad con el decision maker, insights de impacto medible |
| **Champion** | Reconoce el impacto | Tiene una necesidad cuantificable, ayuda a identificar un proyecto con critical event |
| **Gatekeeper** | Opone decisiones | Usa impacto y falta de prioridad para priorizar alternativas |
| **Influencer** | Neutraliza al gatekeeper | Provee insights educativos, ensena como superar al bloqueador |
| **Decision Maker** | Toma la decision real | Prioriza el proyecto basado en impacto y critical event |
| **Executive Buyer** | Grupo pequeno de ejecutivos | Grupo de 3-5 individuos que ayudan a determinar la prioridad |

> **Regla**: El Decision Maker no puede solo imponer — causa resentimiento. El Influencer le ensena como superar al bloqueador.

### S6. Share a Customer Story (Contar Historias de Clientes)

Framework de 3 partes para contar historias en lugar de hacer pitch:

1. **Situacion** → Describir una situacion similar de otro cliente (usar primer nombre, hacerlo personal). Correlacion: preparar la conexion antes de describir la solucion.
2. **Pain** → Que paso cuando el problema quedo sin resolver? Consecuencias negativas de la inaccion. Causacion: el cliente experimento esto PORQUE no se tomo accion.
3. **Impacto** → El impacto positivo de tu solucion. Los bajos hacen que los altos se sientan mas altos, haciendo la historia mas memorable.

---

## Metricas del Modelo Operativo

### Metricas de Volumen (M)
- M5: Annual Revenue (ARR)
- M6-M9: Metricas de progreso por fase

### Metricas de Conversion (CR)
- CR5: Onboarding Churn
- CR6: Retention/Churn Rate
- CR7: Expansion/Contraction

### Metricas de Performance (PM)

| Metrica | Que mide | Formula clave |
|---------|----------|--------------|
| **LTV:CAC Ratio** | Relacion entre lifetime value y costo de adquisicion | LTV / CAC |
| **Net Revenue Retention (NRR)** | Cuanto crecio o decrecio tu ARR/MRR | Incluye expansion - churn - downgrades |
| **Growth Rate** | Cambio porcentual de revenue recurrente | Rapid (10-20%), Hyper (20-40%), Double/Triple (100-200%) |
| **Rule of 40** | Growth rate + profit margin >= 40% | Si estas arriba de 40%, generas profit de forma sostenible |

---

## Cinco Fundamentos Customer-Centric

| Fundamento | Descripcion |
|-----------|-------------|
| **Conoce a tu cliente** | Investigar, hacer buenas preguntas, escuchar. Discutir productos en el marco de como apoyan al cliente |
| **Crea valor en cada interaccion** | No pidas "check-in" solo porque tu calendario lo dice. Cada reunion debe tener una meta clara que profundice el impacto |
| **Educa y ayuda a mantener la curiosidad** | Si educas a tu cliente y lo haces mas inteligente, valorara la relacion. No asumas que ya tienes todas las respuestas |
| **Ayuda al cliente a lograr impacto** | Todos los roles deben enfocarse en ayudar al cliente a identificar y lograr impacto. La meta nunca es llegar a una decision — eso es el resultado de perseguir impacto |
| **Impacto emocional y racional** | Identifica ambos tipos para cada stakeholder. Impacto racional beneficia a la empresa primero; emocional al individuo primero |

---

## Referencias

- Framework del CS Operating Model completo: `frameworks/cs-operating-model.md`
- Framework de First Impact y TTFI: `frameworks/first-impact.md`
- Framework del Joint Impact Plan: `frameworks/joint-impact-plan.md`
- Framework de Kickoff Call Orchestration: `frameworks/kickoff-orchestration.md`
- Template de Joint Impact Plan Worksheet: `templates/joint-impact-plan-worksheet.md`
- Template de Health Scoring Dashboard: `templates/health-scoring-dashboard.md`
- Template de Trigger Play Cards: `templates/trigger-play-cards.md`
