# Fase REFERIR — Advocacy, Escalera de Referidos y Prueba Social

Quinta fase del modelo GrowthOS, siguiendo a ESCALAR. Responde: "¿Como convierto clientes satisfechos en nuevo pipeline?"

> **Nota de arquitectura**: REFERIR es una fase nueva (no un sub-modo de ESCALAR) — decision documentada en `_revenue-os/03-architecture.md` §1.3 y §2.5 (D7). Antes de esta fase, GrowthOS era un modelo de 4 fases; este es el cambio de documentacion mas grande del sistema y queda marcado `[DESIGN]`, reversible si genera friccion (la fila `REFERRAL` de `phase_metrics` hace la llamada con datos).

## Señales de Usuario

GrowthOS activa esta fase cuando detecta:

- "Quiero que mis clientes me refieran"
- "Como consigo referidos de clientes felices"
- "Tengo clientes contentos, quiero mas como ellos"
- "Programa de referidos B2B"
- "Convertir clientes en promotores"
- "Case studies de clientes"

## Skills Activados

| Skill | Plugin | Propósito |
|-------|--------|-----------|
| `advocacy-scoring` | motor-de-referidos | Gate NPS≥9 + IMPULSO (0-100) para decidir a quien y cuando pedir referido |
| `referral-ladder` | motor-de-referidos | ESCALERA DE REFERIDOS (3 peldaños), incentive-bank, automation-on-threshold |
| `case-study-engine` | motor-de-referidos | Captura de case studies/testimonios tras hito de ESCALAR |

## Criterios de Entrada

- **Cliente en ESCALAR** (fase anterior completada o en curso — ver `escalar.md`)
- **NPS≥9** capturado **o** un milestone de ESCALAR completado (peak-satisfaction trigger; nunca al final del contrato) [research: zonkafeedback, customergauge]
- **Incentive-bank configurado**: `clients/<client>/referral/incentive-bank.md` existe — sin esto, `/referir` se detiene antes de proponer cualquier recompensa

## Criterios de Salida

- ✅ **`referred_pipeline` > 0**: al menos un lead referido registrado en `phase_metrics` (fila `REFERRAL`/`REFERIR`)
- ✅ **Primera referencia convertida**: al menos un referido entro a ACQUISITION y avanzo mas alla del intake inicial
- ✅ **Al menos un case study capturado y con sign-off**: prueba social publicable existe, no solo pendiente

**Nota de ramp — no evaluar como "fallido" antes de estas ventanas** [research: customergauge]:

| Hito | Ventana esperada |
|---|---|
| Primera actividad de referido | 60-90 dias desde que el cliente entro a REFERIR |
| Revenue medible del referido | 3-6 meses, dado el ciclo de venta B2B tipico |

Esta ventana debe propagarse a `/roadmap` — el loop de REFERIR es el de mayor riesgo de build y el de ramp mas largo de las 5 fases (`_revenue-os/03-architecture.md` §10, punto 5).

## Flujo Típico

```
1. Deteccion de Trigger (referral-advocacy-agent, Fase 1)
   - Lee GCO: phase.current + nps + milestones de ESCALAR
   - Confirma referral_ready (NPS>=9 O milestone completo)
   ↓
2. Advocacy Scoring (advocacy-scoring)
   - Gate NPS>=9 (binario)
   - IMPULSO score 0-100 -> tier (Listo / Preparar / Monitorear)
   ↓
3. Escalera de Referidos (referral-ladder)
   - Lee referral_ledger.ladder_rung (Supabase, automation-on-threshold)
   - Resuelve recompensa desde incentive-bank del cliente instalado
   - Prepara draft de ask (Red/HITL, nunca se envia sin aprobacion)
   ↓
4. Case Study Engine (case-study-engine, si aplica)
   - Entrevista conducida por parte no-vendedora
   - Borrador de case study, pendiente sign-off de marca + cliente
   ↓
5. Golden-Ticket Handoff (referral-advocacy-agent, Fase 5)
   - Intake ICP pre-calentado hacia ACQUISITION
   - SLA: mismo dia habil / dia habil siguiente
   ↓
6. Instrumentacion
   - stage_transitions: REFERIR -> ATRAER, headline_metric_key referred_pipeline
   - referral_ledger incrementado (trigger recalcula ladder_rung)
```

## Outputs Generados

- `advocacy_eligibility_table.md` — clientes NPS≥9 ordenados por IMPULSO, con momento de ask recomendado
- `referral_ladder_status.md` — peldaño actual + recompensa resuelta por cliente
- `case-study.md` — borrador de prueba social (por cliente, en `clients/<client>/referral/case-studies/`)
- `golden_ticket_intake.md` — intake preparado del referido para ACQUISITION, con SLA marcado

## Completitud del Ciclo

REFERIR cierra el ciclo completo de las 5 fases GrowthOS (DEFINIR → ATRAER → CONVERTIR → ESCALAR → REFERIR) alimentando de vuelta a ATRAER via el seam REF→ACQ (`_revenue-os/03-architecture.md` §5). Una vez que un referido entra y convierte, GrowthOS sugiere:

> "Un referido de [Cliente] esta ahora en tu pipeline de ATRAER. ¿Quieres revisar el estado completo del ciclo o seguir escalando la escalera de referidos con mas clientes?"

GrowthOS puede:
- Actualizar `/roadmap` con la expectativa de ramp de REFERIR
- Mostrar cuantos clientes estan en cada peldaño de la escalera via `/estado`
- Identificar clientes elegibles (NPS≥9) que aun no han sido invitados a ningun peldaño

## Comandos Relacionados

- `/referir` — corrida completa de la fase (deteccion → scoring → peldaño → drafts)
- `/roadmap` — incluye la expectativa de ramp de 60-90d/3-6mo cuando REFERIR esta activo
- `/estado` — muestra clientes elegibles, peldaños actuales, y `referred_pipeline` acumulado

## Referencias

- Master orchestrator: `../growthOS.md`
- Fase anterior: `escalar.md`
- Arquitectura completa de la fase: `_revenue-os/03-architecture.md` §2.5, §3.6, §4, §9 (D5-D8)
- Evidence base: `_revenue-os/02-research.md`, seccion "G7 — Referral"
