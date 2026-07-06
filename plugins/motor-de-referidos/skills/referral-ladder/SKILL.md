---
name: referral-ladder
description: Use when diseñando la escalera de referidos de un cliente, decidiendo el proximo peldano y recompensa, configurando el incentive-bank de un cliente instalado, o preparando (nunca enviando) un ask de referido. Activates for "escalera de referidos", "referral ladder", "peldano de referido", "incentivo de referido", "co-marketing partner", "golden ticket", "incentive bank".
version: 1.0.0
---

# Referral Ladder — ESCALERA DE REFERIDOS

Escalera de 3 peldaños con desbloqueo por hito (milestone-unlock) para clientes que ya pasaron el gate de `advocacy-scoring`. Zona **Yellow** para el diseño de la escalera y el peldaño alcanzado (decision estrategica, revisable); zona **Red** para cualquier ask real o entrega de recompensa (comunicacion externa — Art. I.1 de la Constitucion, no graduable).

> **[DESIGN, nombre pendiente de registro]**: "ESCALERA DE REFERIDOS" debe pasar por `os/naming/framework-registry.md` antes de shippear — mirror del patron ya usado para registrar ESCALA. Ver `_revenue-os/03-architecture.md` §2.5, D8.

## Los 3 Peldaños

> **[OPERATOR-ASSERTED, input UpViral]**: la mecanica de "milestone-unlock ladder" (recompensa que se desbloquea al cruzar un umbral de conteo) esta inspirada en UpViral, pero UpViral opera para audiencias masivas de consumo. El operador tradujo la mecanica de auto-accrual + reward-on-threshold a un contexto B2B de bajo volumen; la secuencia especifica de emails de UpViral **no** esta verificada externamente y no se replica aqui (ver `_revenue-os/02-research.md` G7, Unresolved). Lo que SI se adapta con evidencia es: incentivos no-cash relacionales [research: customergauge] y el mecanismo de automation-on-threshold [research: upviral, parcial].

| Peldaño | Umbral | Recompensa (lado del referrer) | Recompensa (lado del referido) |
|---|---|---|---|
| **1** | 1 referido | Feature en case study / mencion publica como cliente destacado | Onboarding "golden ticket" acelerado (ver seam REF→ACQ en `agents/referral-advocacy-agent.md`) |
| **2** | 3 referidos | Descuento en el proximo engagement (definido en el incentive-bank del cliente instalado) | Mismo golden ticket + intro directa con el equipo senior |
| **3** | 5 referidos | Status de partner de co-marketing (contenido conjunto, webinars, co-branding) | Golden ticket + fast-track a discovery con contexto pre-calentado |

**Dual-sided por diseño**: cada peldaño entrega valor a ambos lados de la referencia, no solo al referrer. Un programa de referidos de un solo lado se lee como transaccional en B2B de alto valor. [research: customergauge]

## Automation-on-Threshold

El conteo y la recalculacion del peldaño **no son manuales** — ya existen en `supabase/migrations/20260320000006_referral_ledger.sql`:

- Tabla `referral_ledger`: `org_id, referrer_client, referral_count, ladder_rung, last_reward_at`
- Trigger `on_referral_count_change_update_ladder`: recalcula `ladder_rung` (0/1/2/3) automaticamente cuando `referral_count` cruza 1, 3, o 5, y estampa `last_reward_at`

Este skill **lee** ese estado (via `referral-advocacy-agent`) para saber en que peldaño esta un cliente — no reimplementa el conteo. La deteccion del cruce de umbral es Green/automatica; **lo que sigue despues del cruce (el ask + la entrega de la recompensa) es Red/HITL** — el trigger solo marca que el cliente es elegible para el siguiente peldaño, nunca dispara una comunicacion.

## Incentivos: No-Cash, Escalados a la Relacion

> "Los incentivos de referido B2B deben ser relacionales y no-cash (credito de cuenta, acceso exclusivo, donacion) — descuentos pequeños se leen como insultantes en B2B de alto valor." [research: customergauge]

Cada cliente instalado define sus propios incentivos concretos en un **incentive-bank** — mirror exacto del patron ya usado para `pricing-grid.md` en `os/skills/sales-orchestrator`:

- Ruta de instalacion: `clients/{{CLIENT_SLUG}}/referral/incentive-bank.md`
- Plantilla generica (este plugin): `templates/incentive-bank.md`
- **Modo de falla**: si `clients/{{CLIENT_SLUG}}/referral/incentive-bank.md` no existe, el agente se detiene y pide al operador que configure el cliente antes de proponer cualquier recompensa concreta — mismo patron que `sales-orchestrator` con `pricing-grid.md`

## SLA del Golden Ticket

Cuando un referido entra por Peldaño 1+, el handoff hacia ACQUISITION debe ocurrir el mismo dia o el dia habil siguiente — un lead referido que se enfria pierde su ventaja de conversion. Ver el mecanismo completo en `agents/referral-advocacy-agent.md`. [research: customergauge]

## Ramp Esperado (para `/roadmap` y expectativas del founder)

- Primera actividad de referido: **60-90 dias** despues de activar el peldaño 1
- Revenue medible del referido: **3-6 meses**, dado el ciclo de venta B2B tipico

**No marcar el loop como "fallido" antes de esas ventanas** — el `/referir` command y `os/phases/referir.md` deben propagar esta expectativa. [research: customergauge]

## Conexiones con otros skills

- **advocacy-scoring** → alimenta la elegibilidad y el timing; sin gate NPS≥9, no hay entrada a la escalera
- **case-study-engine** → el Peldaño 1 (feature en case study) dispara ese skill directamente
- **pricing-grid** (patron, `os/skills/sales-orchestrator`) → el incentive-bank es la version referral de ese mismo patron de configuracion por cliente

## Output Esperado

1. **Peldaño actual** por cliente (leido de `referral_ledger.ladder_rung`)
2. **Recompensa concreta** para ese peldaño, resuelta desde el incentive-bank del cliente instalado
3. **Draft de ask** (Yellow → nunca se envia sin aprobacion humana explicita — Red en el momento de envio)
4. **Trigger de case-study** si el peldaño alcanzado es 1 o superior
