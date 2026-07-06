# ESCALERA DE REFERIDOS

> **[DESIGN, nombre pendiente de registro]**: mirror del patron de nombre GrowthOS usado para ESCALA (`os/naming/framework-registry.md`). Registrar antes de shippear (H4, `_revenue-os/03-architecture.md`).

## Filosofia: El Referido es un Cliente que Ya Gano

ESCALA (motor-de-ofertas) responde "como asciendo a un cliente por niveles de precio". ESCALERA DE REFERIDOS responde una pregunta distinta: **como convierto la satisfaccion de un cliente que ya ascendio en nuevo pipeline**, sin tratarlo como una transaccion mas.

La diferencia de diseño clave frente a un programa de referidos B2C: no hay urgencia artificial (sin sweepstakes, sin waiting-list), no hay incentivo en efectivo por defecto, y cada peldaño beneficia a **ambas partes** de la referencia, no solo a quien refiere. [research: customergauge; OPERATOR-ASSERTED partial, UpViral input — ver nota de mecanica abajo]

## Los 3 Peldaños en Detalle

### Peldaño 1 — Advocate (1 referido)

| Atributo | Detalle |
|---|---|
| **Umbral** | `referral_count >= 1` |
| **Trigger de recalculo** | Automatico via `referral_ledger` (Supabase trigger, `20260320000006`) |
| **Recompensa referrer** | Feature en case study / mencion en canales del cliente instalado (LinkedIn, newsletter, sitio) |
| **Recompensa referido** | Onboarding "golden ticket": intake ICP pre-calentado, SLA de respuesta mismo/siguiente dia habil |
| **Zona del ask** | Yellow (diseño del ask) → Red (envio real) |
| **Dispara tambien** | `case-study-engine` — el feature en case study requiere el entregable completo, no solo la mencion |

### Peldaño 2 — Champion (3 referidos)

| Atributo | Detalle |
|---|---|
| **Umbral** | `referral_count >= 3` |
| **Recompensa referrer** | Descuento en el proximo engagement (monto/porcentaje definido en `incentive-bank.md` del cliente instalado — nunca hardcodeado aqui) |
| **Recompensa referido** | Golden ticket + intro directa con el equipo senior del cliente instalado (no solo el equipo de delivery estandar) |
| **Señal adicional** | Un cliente que llega a 3 referidos es candidato fuerte para `advocacy-scoring` con IMPULSO alto en el componente "Señal Explicita de Disposicion" |

### Peldaño 3 — Partner de Co-Marketing (5 referidos)

| Atributo | Detalle |
|---|---|
| **Umbral** | `referral_count >= 5` |
| **Recompensa referrer** | Status de partner de co-marketing: contenido conjunto, webinars compartidos, co-branding en materiales |
| **Recompensa referido** | Golden ticket + fast-track a discovery, saltando la cola estandar de prospecting |
| **Nota** | Este peldaño es el mas cercano a un "champion program" — el research confirma que la direccion es correcta pero el ROI cuantificado no esta verificado en ningun caso B2B servicios encontrado (GAP, `02-research.md`). Tratar como hipotesis: medir `referred_pipeline` (phase_metrics) antes de prometer resultados especificos al cliente instalado |

## Automation-on-Threshold: Lo que Automatiza y Lo que No

```
AUTOMATICO (Green, ya implementado):
  referral_count incrementa → trigger recalcula ladder_rung → last_reward_at se estampa

NO AUTOMATICO (Red/HITL, por diseño — Art. I.1):
  ladder_rung sube → el agente PREPARA el draft de ask/recompensa → humano aprueba → humano envia
```

El trigger de Supabase nunca envia nada — solo marca el estado. La distancia entre "el sistema sabe que el cliente cruzo el umbral" y "el cliente recibe la comunicacion" es, por diseño constitucional, un paso humano.

## Mecanica UpViral: Que se Adapta y Que No

| Elemento UpViral | Se adapta aqui | Razon |
|---|---|---|
| Milestone-unlock ladder (recompensas por umbral) | Si | Encaja con B2B de bajo volumen; el research confirma automation-on-threshold como patron [research: upviral, parcial] |
| Dual-sided incentive | Si | Coincide con la evidencia de customergauge sobre incentivos relacionales |
| Automated reward delivery on threshold | Parcial — se automatiza la DETECCION, no la ENTREGA | La entrega/comunicacion es Red/HITL por la Constitucion, sin excepcion para Tier 1 |
| Sweepstakes, waiting-list urgency | **No** | Mecanicas de audiencia masiva de consumo, no aplican a relaciones B2B 1:1 de alto valor [research: G7, mismatch explicito] |
| Secuencias de email especificas para revenue | **No verificado** | [OPERATOR-ASSERTED, GAP] — el contenido/logica real de las secuencias de UpViral no pudo verificarse independientemente; no se replica su copy o cadencia especifica, solo el patron estructural de "evento dispara secuencia" |

## Conexion con Incentive-Bank

Ningun monto, porcentaje, o beneficio concreto vive en este framework — todos se resuelven desde `clients/{{CLIENT_SLUG}}/referral/incentive-bank.md` al momento de instalacion, siguiendo el mismo patron de `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` que ya usa `os/skills/sales-orchestrator`.
