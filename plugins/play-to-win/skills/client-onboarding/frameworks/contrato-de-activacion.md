# Framework: Contrato de Activacion

El Contrato de Activacion es la definicion operativa de "cliente activado" — reemplaza la sensacion subjetiva ("parece que va bien") con 4 condiciones verificables tipo AND. Un cliente esta activado cuando las 4 tienen evidencia documentada, ni un dia antes. Este framework existe porque "activado" sin definicion es el tipo de metrica que se infla bajo presion de reportar buenas noticias — y la constitucion agentica prohibe exactamente eso (Art. I.3, anti-alucinacion).

**Fuente**: `_revenue-os/03-architecture.md` §2.2 (definicion de las 4 condiciones), §3.2 (F-ACT loop), §9 D3 (gates sin evidencia externa directa).

## Principio: AND, no promedio

Un cliente con 3 de 4 condiciones cumplidas al 100% **no** esta 75% activado — esta **no activado**. El contrato es binario por condicion, y binario en conjunto. Esto evita el patron comun de CS de reportar "activacion parcial" como si fuera progreso equivalente, cuando en realidad una sola condicion faltante (tipicamente la cadencia recurrente o los KPIs alineados) predice el mismo riesgo de churn temprano que si ninguna se hubiera cumplido.

---

## Condicion 1: Scope firmado

**Que verifica**: el alcance del engagement (que se entrega, que explicitamente NO se entrega, cronograma de alto nivel) esta documentado por escrito y confirmado por el stakeholder decisor del lado del cliente — no solo enviado, sino confirmado.

| Campo | Definicion |
|---|---|
| **Evidencia valida** | Email/mensaje de confirmacion del decisor, documento firmado, o transcripcion de la kickoff call donde el decisor confirma explicitamente el scope leido en voz alta |
| **Evidencia invalida** | "Se lo enviamos y no respondio" — silencio no es confirmacion; "Lo aprobo el champion" cuando el champion no es el decisor economico |
| **Cuando se verifica** | En o inmediatamente despues de la kickoff call (`/kickoff` Fase 3, verificacion PULSO + PIC) |
| **Gate temporal** | `[DESIGN D3]` — objetivo: confirmado dentro de las primeras 48h post-kickoff. Ajustar con datos reales de cuantos deals confirman scope tarde y por que. |
| **Riesgo si falla** | El engagement arranca sin acuerdo real sobre expectativas — la causa mas comun de "scope creep" percibido y de conflictos en el gate 30 |

---

## Condicion 2: Primer quick win entregado

**Que verifica**: un resultado tangible, especifico, y visible para el cliente (no para el equipo interno) fue entregado en la ventana temprana del engagement.

| Campo | Definicion |
|---|---|
| **Evidencia valida** | Artefacto entregado + confirmacion de recepcion del cliente (screenshot, email de agradecimiento, mencion en el CSAT del dia 7, dato mostrado en un checkpoint) |
| **Evidencia invalida** | "Configuramos el ambiente" (trabajo interno, no valor visible para el cliente); "Enviamos el primer draft" sin confirmacion de que el cliente lo reviso |
| **Cuando se verifica** | Ventana de dia 3 a dia 5 desde la kickoff call |
| **Gate temporal** | `[DESIGN D3]` — dia 3-5 es el patron encontrado en investigacion de onboarding B2B [R:G2/G3 unkoa], no un numero arbitrario, pero tampoco calibrado a este catalogo de servicios especifico. Ajustar el rango una vez que `phase_metrics.ACTIVATION` acumule suficientes ciclos. |
| **Riesgo si falla** | Cada dia que pasa sin un primer valor visible incrementa la probabilidad de que el cliente dude de la decision de compra — la ventana de "buyer's remorse" que `customer-journey` ya identifica como friccion post-cierre |

**Que cuenta como "quick win" por tipo de engagement** (guia, no regla rigida):

| Tipo de engagement | Ejemplo de quick win valido |
|---|---|
| Consultoria / servicios | Primer entregable parcial revisable (draft de diagnostico, primera sesion de trabajo con output documentado) |
| Producto / SaaS | Primera automatizacion o flujo configurado y corriendo con datos reales del cliente |
| Implementacion tecnica | Primer ambiente funcional con un caso de uso real probado |

---

## Condicion 3: Cadencia recurrente establecida

**Que verifica**: existe un ritmo de checkpoints confirmado por ambas partes, con al menos una instancia ya EJECUTADA — no solo una invitacion de calendario aceptada.

| Campo | Definicion |
|---|---|
| **Evidencia valida** | Registro (notas, transcript, resumen post-call) de al menos un checkpoint ya realizado con asistencia de ambas partes |
| **Evidencia invalida** | "Tenemos una recurrencia agendada para los martes" sin que ninguna instancia haya ocurrido todavia |
| **Cuando se verifica** | Se puede cumplir tan pronto como se ejecute el primer checkpoint semanal/quincenal del PIC |
| **Gate temporal** | `[DESIGN D3]` — objetivo: primera instancia ejecutada dentro de los primeros 14 dias. Sujeto a ajuste. |
| **Riesgo si falla** | Sin cadencia real, el engagement se vuelve reactivo — el equipo solo habla con el cliente cuando hay un problema, lo cual erosiona la percepcion de proactividad que `customer-success-ops` requiere para health scores altos |

---

## Condicion 4: KPIs alineados

**Que verifica**: cliente y equipo comparten explicitamente la(s) metrica(s) que definen exito para este engagement, con un baseline capturado y un target acordado (no solo mencionado de pasada en la venta).

| Campo | Definicion |
|---|---|
| **Evidencia valida** | Documento o seccion del PIC con metrica nombrada, valor baseline (numero real, no estimado) y target con fecha |
| **Evidencia invalida** | "El cliente quiere mejorar sus ventas" (metrica no nombrada); "Dijeron que querian +20% pero no sabemos de que baseline" (falta baseline real → Art. I.3, no se puede reportar una mejora sin punto de partida verificado) |
| **Cuando se verifica** | Idealmente en la kickoff call (seccion "Metricas de Impacto" del template de `/kickoff`); a mas tardar en el gate 30 |
| **Gate temporal** | `[DESIGN D3]` — objetivo: baseline capturado antes del gate 30. Sujeto a ajuste con datos de cuantos deals llegan al gate 60 sin baseline real. |
| **Riesgo si falla** | Sin KPI compartido, la conversacion de renovacion/expansion (RETENTION, REVENUE) no tiene con que argumentar impacto — el engagement puede ser tecnicamente exitoso y comercialmente invisible |

---

## Tabla resumen — checklist de verificacion

| # | Condicion | Evidencia requerida | Ventana objetivo `[DESIGN D3]` | Status |
|---|-----------|---------------------|-------------------------------|--------|
| 1 | Scope firmado | Confirmacion escrita del decisor | 48h post-kickoff | [ ] Cumplida / [ ] En progreso / [ ] Sin evidencia |
| 2 | Primer quick win entregado | Artefacto + confirmacion de recepcion del cliente | Dia 3-5 | [ ] Cumplida / [ ] En progreso / [ ] Sin evidencia |
| 3 | Cadencia recurrente establecida | Al menos 1 checkpoint ya ejecutado | Dia 14 | [ ] Cumplida / [ ] En progreso / [ ] Sin evidencia |
| 4 | KPIs alineados | Metrica nombrada + baseline real + target con fecha | Gate 30 | [ ] Cumplida / [ ] En progreso / [ ] Sin evidencia |

**Regla de cierre**: `activation_confirmed = true` solo si las 4 filas dicen `Cumplida`. Cualquier otra combinacion → el cliente sigue "en activacion" y el TTFV clock sigue corriendo.

## Como se recalibra `[DESIGN D3]`

Cada gate temporal marcado `[DESIGN D3]` en este documento es una hipotesis, no un hecho medido — ninguna fuente externa de investigacion define umbrales de activacion especificos para este catalogo de servicios [R:G2/G3 GAP, arquitectura §9]. La recalibracion sigue esta regla: una vez que `phase_metrics` (columna `ACTIVATION`, `headline_metric_key = 'ttfv_days'`) acumule suficientes filas de `stage_transitions` con `to_stage = 'ESCALAR'`, comparar el TTFV real observado contra estos objetivos y ajustar las ventanas — nunca al reves (nunca ajustar el dato observado para que calce con el objetivo).
