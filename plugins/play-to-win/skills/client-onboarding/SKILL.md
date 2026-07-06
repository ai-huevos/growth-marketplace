---
name: client-onboarding
description: Use when ejecutando el onboarding de un cliente recien cerrado, midiendo Time To First Value (TTFV), definiendo el quick win temprano, o confirmando que un cliente esta "activado". Activa con "onboarding cliente", "time to first value", "TTFV", "activacion cliente", "quick win", "plan 30-60-90", "primeros 90 dias post-cierre".
version: 1.0.0
---

# Client Onboarding — Capa de Ejecucion de la Activacion

Sistema que ejecuta, dia a dia, el Plan de Impacto Conjunto (PIC) que `/kickoff` deja firmado. Donde `customer-journey` **disena** el viaje del cliente (etapas, criterios de entrada/salida, los 7 Momentos Clave), `client-onboarding` **corre el reloj**: convierte el roadmap de 90 dias en gates fechados, dispara el quick win temprano, y declara — con evidencia, no con optimismo — el momento exacto en que un cliente esta activado.

> Este skill NO redisena el journey. Consume el mapa de etapas de `customer-journey` (Awareness→Education→Selection→**Onboard→Use**) y le agrega el mecanismo de ejecucion que faltaba: fechas, gates, y un contrato de activacion verificable. [MAP §2 ACT×Skills PARTIAL, G3 — `_revenue-os/03-architecture.md` §2.2]

## Cuando usar este skill

- El usuario acaba de cerrar un cliente y necesita instanciar el plan de 90 dias con fechas concretas (no solo semanas relativas)
- Necesita saber si un cliente esta "activado" o sigue en riesgo de nunca activarse
- Quiere medir Time To First Value (TTFV) desde la kickoff call hasta el primer valor entregado
- Necesita disenar o revisar el quick win que se debe entregar en los primeros 3-5 dias
- Requiere el checkpoint de dependencias del dia 3-4 o el CSAT del dia 7
- Necesita alimentar el health score de RETENTION con la baseline que deja una activacion exitosa

## Relacion con `customer-journey` (no duplicar)

| | `customer-journey` | `client-onboarding` |
|---|---|---|
| Pregunta que responde | "Como debe verse el viaje del cliente?" | "Donde esta ESTE cliente en su plan, hoy?" |
| Output | Mapa de 6 etapas, protocolo de handoff PULSO, 7 Momentos Clave | Plan 30-60-90 fechado, contrato de activacion, TTFV medido |
| Cuando corre | Una vez, al disenar/auditar el journey completo | Continuamente, desde el dia 0 (kickoff) hasta el dia 90 |
| Zona | Yellow — validacion de touchpoints reales | Yellow — decisiones de activacion revisadas por humano |

Si el usuario pide disenar el journey completo, redirigir a `customer-journey`. Si pide ejecutar/trackear el plan de un cliente especifico, este es el skill correcto.

## El TTFV Clock — Cuando empieza a correr

**El reloj de Time-To-First-Value arranca en la fecha de la kickoff call**, no en la fecha de firma del contrato ni en la fecha de primer login [R:G2/G3 rocketlane — arquitectura §3.2]. Esto es deliberado: la kickoff call es el primer momento donde el cliente y el equipo alinean expectativas sobre QUE es "valor" para este cliente especifico; medir desde ahi evita inflar el TTFV con tiempo administrativo (legal, procurement) que el cliente no percibe como parte de la relacion activa.

```
Dia 0 = fecha de /kickoff (kickoff-call date)
  │
  ├─ Dia 3-5  → Quick win entregado (gate obligatorio)
  ├─ Dia 3-4  → Dependency check (bloqueadores externos identificados)
  ├─ Dia 7    → CSAT check-in (primera lectura de satisfaccion)
  ├─ Dia 30   → Gate 30: primer hito del PIC + cadencia establecida
  ├─ Dia 60   → Gate 60: adopcion del equipo + KPIs alineados
  └─ Dia 90   → Gate 90: activacion confirmada o escalada como riesgo
```

TTFV se registra en dias corridos (no habiles) desde el dia 0, y se cierra en el momento exacto en que las 4 condiciones del contrato de activacion se cumplen — no al final de los 90 dias por default.

## El Contrato de Activacion (4 condiciones)

Un cliente esta **"activado"** cuando, y solo cuando, se cumplen las 4 condiciones siguientes. No son un promedio ni un score — son un contrato tipo AND: las 4 deben tener evidencia, o el cliente sigue "en activacion".

1. **Scope firmado** — El alcance del engagement (que se entrega, que no, cronograma) esta documentado y confirmado por escrito por el stakeholder decisor del lado del cliente.
2. **Primer quick win entregado** — Un resultado tangible, especifico y visible para el cliente fue entregado, idealmente entre el dia 3 y el dia 5 [R:G2/G3 unkoa — patron respaldado por investigacion, no arbitrario].
3. **Cadencia recurrente establecida** — Existe un ritmo de checkpoints (semanal/quincenal) confirmado por ambas partes y con al menos una instancia ya ejecutada (no solo agendada).
4. **KPIs alineados** — Cliente y equipo comparten la(s) metrica(s) que definen exito para este engagement, con baseline capturado y target acordado.

> Ver `frameworks/contrato-de-activacion.md` para los criterios verificables y las definiciones de evidencia de cada condicion, incluyendo los valores de gate marcados `[DESIGN D3]` pendientes de calibracion con datos reales.

**Regla anti-alucinacion (Art. I.3 constitucion)**: si una condicion no tiene evidencia documentada, se marca `[SIN EVIDENCIA]` — nunca se asume cumplida por "parece que si" o por el paso del tiempo. Activacion inventada es un dato financiero/operativo inventado.

## Los gates fechados (dia 3-4, dia 7, 30-60-90)

| Gate | Dia | Que verifica | Accion si falla |
|------|-----|---------------|------------------|
| **Dependency check** | 3-4 | Bloqueadores externos (accesos, integraciones, aprobaciones internas del cliente) identificados antes de que frenen el quick win | Escalar al CSM/AE; ajustar fecha de quick win con causa documentada |
| **Quick win due** | 3-5 | Condicion #2 del contrato cumplida | Si dia 5 pasa sin quick win: flag de riesgo de activacion, no se oculta ni se retrasa el registro |
| **CSAT check-in** | 7 | Primera lectura de satisfaccion post-kickoff (1 pregunta, formato ligero) | CSAT bajo → intervencion temprana antes del gate 30 |
| **Gate 30** | 30 | Condiciones #1 y #3 con evidencia; primer hito del PIC completado | No cumple → replantear plan con el cliente, no extender en silencio |
| **Gate 60** | 60 | Condicion #4 con evidencia; adopcion visible del equipo del cliente | No cumple → intervencion de CS, activar band de riesgo temprano en RETENTION |
| **Gate 90** | 90 | Las 4 condiciones cumplidas → activacion confirmada; TTFV cerrado y escrito a `phase_metrics` | No cumple a los 90 dias → el cliente entra a RETENTION como "en riesgo", no como "activado" |

Los valores especificos de estos gates (dia exacto del quick win, umbral de CSAT, que cuenta como "primer hito") son decisiones de diseno sin evidencia externa directa — ver D3 en `_revenue-os/03-architecture.md` §9. Se ajustan con datos reales de `phase_metrics` (columna ACTIVATION, `ttfv_days`) una vez que hay suficiente volumen.

## Zona y gobernanza (Art. III / V constitucion)

**Zona: Yellow.** Las decisiones de activacion (declarar un gate cumplido, decidir que un cliente esta "activado", generar el borrador de una comunicacion de check-in) requieren revision humana — no son formulaicas como un scoring PULSO, son juicio sobre evidencia real de un cliente real.

- **Trust inicial**: HITL. Cada gate propuesto por el skill se presenta al humano (CSM/AE) para aprobar, editar, o rechazar antes de registrarse como cumplido.
- **Graduacion a HOTL**: solo tras cumplir Art. V (>50 activaciones exitosas sin edicion sustancial, >95% coincidencia con el juicio humano, cero alucinaciones en TTFV, superar un "replay-on-historical" — re-correr el skill sobre activaciones pasadas y verificar que las decisiones coinciden con lo que realmente paso) [R:G2/G3 eesel — arquitectura §3.2, §4].
- **Gate mode**: `required` mientras esta en HITL (bloquea el registro del gate hasta aprobacion humana); pasa a `audit` (se registra, se revisa post-hoc) solo despues de la graduacion.
- **NEVER**: enviar la comunicacion de check-in, recordatorio, o confirmacion de gate directamente al cliente sin aprobacion humana (Art. I.1 — comunicacion externa no supervisada).

## Output esperado

1. **Plan 30-60-90 instanciado**: fechas reales (no "semana 3"), calculadas desde la fecha de kickoff — ver `templates/plan-30-60-90.md`
2. **Estado del contrato de activacion**: las 4 condiciones con status (`Cumplida` / `En progreso` / `Sin evidencia`) y evidencia citada
3. **TTFV corriente**: dias transcurridos desde kickoff hasta hoy (o hasta activacion, si ya ocurrio)
4. **Registro de gates**: que gates pasaron, cuales fallaron, y la accion tomada en cada caso
5. **Senal a RETENTION**: si la activacion se confirma, la baseline de salud (adopcion, cadencia, primer resultado) que alimenta el `health-monitor agent` (G4)

## Templates disponibles

- `templates/plan-30-60-90.md` — Plan de 30-60-90 dias con fechas calculadas, gates de salud, y campos de tracking de TTFV

## Frameworks de referencia

- `frameworks/contrato-de-activacion.md` — Las 4 condiciones del contrato con criterios verificables, definiciones de evidencia, y gates `[DESIGN D3]`

## Conexion con otros skills y agentes

| Skill/Agente | Relacion |
|---|---|
| `customer-journey` | Diseña las etapas Onboard→Use que este skill ejecuta con fechas. No se duplica el mapa de journey aqui. |
| `activation-agent` (`plugins/play-to-win/agents/activation-agent.md`) | Agente que orquesta este skill end-to-end: carga el GCO + roadmap, instancia el plan, hace seguimiento de gates, y escribe TTFV a `stage_transitions`/`phase_metrics` |
| `/kickoff` | Punto de entrada — el PIC (Plan de Impacto Conjunto) que `/kickoff` deja firmado es el insumo que este skill fecha y convierte en gates |
| `customer-success-ops` | Recibe al cliente una vez activado; la baseline de salud de este skill alimenta su modelo operativo |
| `renewal-expansion` | Los KPIs alineados en la condicion #4 son el punto de partida de las conversaciones de expansion futuras |

## Quality Gate

Antes de declarar un gate o la activacion completa como cumplida:

| Criterio | Check |
|----------|-------|
| **Evidencia citada** | Cada condicion marcada `Cumplida` tiene una cita, fecha, o artefacto concreto — no una impresion |
| **TTFV clock correcto** | La fecha de inicio es la fecha de la kickoff call, confirmada, no una fecha estimada |
| **Revision humana** | El CSM/AE aprobo el gate antes de registrarlo (zona Yellow, `required` en HITL) |
| **Anti-alucinacion** | Ninguna condicion se marca cumplida sin evidencia — `[SIN EVIDENCIA]` explicito si falta |
| **Escritura a instrumentacion** | Si se confirma activacion, se intento el registro en `stage_transitions`/`phase_metrics` (ver `activation-agent.md` Fase 4); si fallo, se anexo a `pending-metrics.sql` y se avisa en el resumen |
