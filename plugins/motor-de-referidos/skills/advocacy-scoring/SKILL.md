---
name: advocacy-scoring
description: Use when calificando clientes existentes como promotores elegibles para referir, calculando el Indice de Promotores (IMPULSO), o decidiendo el momento correcto para pedir una referencia. Activates for "advocacy scoring", "NPS promoters", "cliente promotor", "IMPULSO", "elegibilidad de referido", "cuando pedir referidos", "segmentar promotores".
version: 1.0.0
---

# Advocacy Scoring

Framework para identificar, calificar, y ordenar por prioridad a los clientes con mayor probabilidad de referir — antes de que cualquier ask salga de la organizacion. Zona **Green** (formulaico, reversible, sin comunicacion externa): el score se calcula solo con datos ya existentes (NPS, hitos, GCO). El ask en si vive en `referral-ladder` (Yellow/Red).

## Principio Rector: Segmentar SIEMPRE, Nunca Broadcast

> "NPS 9-10 promoters son el mecanismo sistematico de targeting para advocacy — segmentar antes del outreach, nunca broadcast." [research: zonkafeedback]

Pedir una referencia a un cliente que no esta en su pico de satisfaccion desperdicia la unica oportunidad que tenias con esa cuenta. Este skill existe para que ese ask nunca sea un blast generico a la base de clientes.

## Gate Duro: NPS 9-10 = Unico Umbral de Elegibilidad

A diferencia de un score ponderado (donde un numero bajo en una dimension se compensa con otro alto), la elegibilidad de referido es un **gate binario**, no un promedio:

```
SI nps_score < 9  →  NO ELEGIBLE (sin excepcion, sin importar otras senales)
SI nps_score >= 9 →  Calcular IMPULSO (0-100) para decidir TIMING del ask
```

**Por que gate y no promedio**: diluir el requisito de NPS con otras senales (tenure, tamano de cuenta) generaria falsos positivos — un cliente grande pero insatisfecho (NPS 6) referiria a alguien que luego tiene una mala experiencia, dañando la marca del cliente promotor. [research: zonkafeedback]

## IMPULSO: Indice de Promotores (0-100)

> **[DESIGN D8]**: "IMPULSO" es un nombre propuesto, pendiente de aprobacion en `os/naming/framework-registry.md` antes de shippear. La capacidad (el scoring) es real; el nombre puede cambiar.

Una vez que el cliente pasa el gate NPS≥9, IMPULSO califica **cuando** (no si) pedir la referencia, reusando el patron de scoring 0-100 → tiers de PULSO/ICP.

Ver el modelo completo, pesos, y tiers en `frameworks/indice-impulso.md`.

## Momentos de Ask: Picos de Satisfaccion, Nunca al Final

El timing del ask es tan importante como la elegibilidad. Pedir en el momento equivocado quema el gate NPS≥9.

| Momento | Calidad de ask | Fuente |
|---|---|---|
| Milestone/hito entregado (implementacion, quick win) | Alto — resultado fresco y demostrable | [research: zonkafeedback, customergauge] |
| NPS≥9 recien capturado (encuesta reciente) | Alto — sentimiento positivo verbalizado | [research: zonkafeedback] |
| Renovacion firmada | Alto — el cliente acaba de reafirmar su decision | [research: customergauge] |
| Final de contrato / offboarding | **NUNCA** — la relacion ya se esta cerrando, el ask se siente oportunista | [research: customergauge] |

**Regla ALWAYS**: todo ask debe dispararse desde uno de los tres momentos "Alto" de la tabla. Un ask fuera de esos momentos requiere justificacion explicita del humano antes de proceder (Art. IV, escalacion por baja confianza si no hay momento claro).

## Datos de Entrada

| Fuente | Campo | Estado |
|---|---|---|
| GCO (`~/.growthos/contexts/<client>.yaml`) | `nps`, `phase.current`, `metadata` | Campo aditivo — ver `os/intake/context-object.md` H6; puede no existir aun en GCOs creados antes de esta capacidad |
| Supabase `client_health` (proyectado por el health-monitor de RETENTION, gap G4) | `nps`, `health_score`, `health_band` | **Dependencia cruzada RET→REF**: esta tabla es del build de RETENTION (G4), aun no construido en este alcance. Si no existe, usar el campo `nps` del GCO como fuente unica |
| `referral_ledger` (Supabase, `20260320000006_referral_ledger.sql`) | `referral_count`, `ladder_rung` | Ya existe — usado por `referral-ladder`, no por este skill |

**Modo de falla**: si ni GCO ni `client_health` tienen un valor de NPS, el score es `NO EVALUABLE` — nunca inventar o asumir un NPS (Art. I.3, anti-alucinacion PULSO se extiende a NPS).

## Output Esperado

1. **Tabla de elegibilidad** — lista de clientes con NPS≥9, ordenados por score IMPULSO
2. **Momento de ask recomendado** por cliente (cual de los 3 momentos "Alto" aplica ahora)
3. **Flag `referral_ready`** propuesto para el GCO de cada cliente elegible (consumido por `referral-advocacy-agent` en el seam RET→REF)
4. **Lista de exclusion explicita** — clientes NPS<9, con la razon, para que nunca entren a un ask masivo

## Conexiones con otros skills

- **customer-success-ops / renewal-expansion** (play-to-win) → fuente de NPS y momentos de renovacion, hasta que exista un health-monitor dedicado (G4)
- **referral-ladder** (este plugin) → consume la tabla de elegibilidad para decidir el peldano y el incentivo
- **case-study-engine** (este plugin) → un cliente con IMPULSO alto y milestone reciente es tambien candidato a case study, no solo a referido
