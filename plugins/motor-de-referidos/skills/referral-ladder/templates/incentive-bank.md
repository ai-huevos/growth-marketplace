# Incentive Bank — {{CLIENT_SLUG}}

> Plantilla generica del motor. Se instala en `clients/{{CLIENT_SLUG}}/referral/incentive-bank.md` — mirror exacto del patron de `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` (`os/skills/sales-orchestrator`).
>
> **Modo de falla**: si este archivo no existe para el cliente instalado, `referral-advocacy-agent` y el comando `/referir` se detienen antes de proponer cualquier recompensa concreta y piden al operador que lo configure primero.
>
> Principio rector: incentivos **no-cash, escalados a la relacion** — un descuento pequeño se lee como insultante en B2B de alto valor [research: customergauge]. Completar cada celda con el beneficio real que el cliente instalado puede y quiere ofrecer; no dejar placeholders en produccion.

## Peldaño 1 — Advocate (1 referido)

| Campo | Valor |
|---|---|
| Recompensa para el referrer | {{PELDANO_1_REFERRER_REWARD}} — ej. "Feature en case study + mencion en newsletter mensual" |
| Recompensa para el referido | {{PELDANO_1_REFERIDO_REWARD}} — ej. "Onboarding golden ticket: kickoff en 48h en vez de 2 semanas" |
| Canal de entrega | {{PELDANO_1_DELIVERY_CHANNEL}} — quien del equipo entrega esto y como |
| SLA de entrega tras cruzar el umbral | {{PELDANO_1_SLA}} — recomendado: mismo dia / dia habil siguiente |

## Peldaño 2 — Champion (3 referidos)

| Campo | Valor |
|---|---|
| Recompensa para el referrer | {{PELDANO_2_REFERRER_REWARD}} — ej. "15% de descuento en el proximo engagement Middle/Backend" |
| Recompensa para el referido | {{PELDANO_2_REFERIDO_REWARD}} — ej. "Golden ticket + intro directa con el Head de Delivery" |
| Monto/porcentaje concreto (si aplica) | {{PELDANO_2_AMOUNT}} — nunca dejar generico; definir el numero real |
| Restricciones | {{PELDANO_2_RESTRICTIONS}} — ej. "aplica solo a engagements firmados dentro de 12 meses" |

## Peldaño 3 — Partner de Co-Marketing (5 referidos)

| Campo | Valor |
|---|---|
| Recompensa para el referrer | {{PELDANO_3_REFERRER_REWARD}} — ej. "Co-autoria de 1 webinar + logo en pagina de partners" |
| Recompensa para el referido | {{PELDANO_3_REFERIDO_REWARD}} — ej. "Golden ticket + fast-track a discovery, salta la cola de prospecting" |
| Compromiso del cliente instalado | {{PELDANO_3_COMMITMENT}} — que se compromete a producir/co-crear el equipo del cliente |
| Revision | {{PELDANO_3_REVIEW_CADENCE}} — cada cuanto se revisa si el partnership sigue activo |

## Reglas Generales (no editar sin aprobacion del founder)

- Todo incentivo aqui es **no-cash por defecto**. Un incentivo en efectivo requiere aprobacion explicita del founder y queda fuera del gate `< $50 USD sin autorizacion humana` del Articulo I.2 de la Constitucion si excede ese monto.
- Ningun ask se envia automaticamente. El cruce de umbral en `referral_ledger` solo marca elegibilidad — la entrega de cualquier recompensa de esta tabla pasa por aprobacion humana (Red/HITL, Articulo I.1).
- Si el cliente instalado no tiene un beneficio definido para un peldaño, `referral-advocacy-agent` debe detenerse y escalar (no inventar un incentivo — Articulo I.3, anti-alucinacion se extiende a compromisos comerciales).
