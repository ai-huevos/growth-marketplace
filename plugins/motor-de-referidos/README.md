# motor-de-referidos

Motor de Referidos: 5ta fase GrowthOS (REFERIR). Plugin del [AI Huevos Growth Marketplace](../../README.md).

Convierte clientes promotores en pipeline referido a traves de 3 skills encadenados: **advocacy-scoring** (quien y cuando) → **referral-ladder** (que peldaño, que incentivo) → **case-study-engine** (prueba social del resultado).

> **Nuevo greenfield**: antes de este plugin, cero capacidad de referidos existia en el marketplace (gap G7, `_revenue-os/02-research.md` + `_revenue-os/03-architecture.md` §2.5). REFERIR es la 5ta fase de GrowthOS, siguiendo a ESCALAR — ver `os/phases/referir.md`.

## Skills

### advocacy-scoring
Califica clientes NPS 9-10 como elegibles para referir (gate binario, no promediable) y calcula el **IMPULSO** (Indice de Promotores, 0-100) para decidir el momento correcto del ask — nunca al final del contrato, siempre en un pico de satisfaccion.

**Triggers**: "advocacy scoring", "NPS promoters", "cliente promotor", "IMPULSO", "elegibilidad de referido", "cuando pedir referidos"

### referral-ladder
La **ESCALERA DE REFERIDOS**: 3 peldaños con desbloqueo por hito (1 referido = case study, 3 = descuento, 5 = partner de co-marketing), dual-sided, con automation-on-threshold via el trigger de `referral_ledger` ya existente en Supabase.

**Triggers**: "escalera de referidos", "referral ladder", "peldano de referido", "incentivo de referido", "co-marketing partner", "golden ticket", "incentive bank"

### case-study-engine
Captura case studies y testimonios despues del hito de ESCALAR, con la entrevista conducida por una parte no-vendedora. Distinto de la captura VoC de `sales-orchestrator` (pre-venta vs. post-resultado).

**Triggers**: "case study engine", "entrevista de case study", "testimonio de cliente", "capturar resultado de cliente", "video testimonial"

## Comandos

### /referir
Corrida completa de la fase: detecta clientes referral-ready → califica → ubica peldaño → prepara drafts (ask, case study, handoff) para aprobacion humana.

```
/referir [nombre del cliente instalado o "todos"]
```

## Agents

### referral-advocacy-agent
Orquesta los 3 skills end-to-end e instrumenta la transicion REFERIR→ATRAER (`stage_transitions`, `referral_ledger`, `execution_scores`). Zona **Red/HITL** para todo lo que implique comunicacion externa — prepara, nunca envia.

## Zonas de Ejecucion (Constitucion Agentica, Articulo I.1)

| Componente | Zona | Nota |
|---|---|---|
| `advocacy-scoring` | Green | Scoring formulaico, sin comunicacion externa |
| `referral-ladder` (diseño de peldaño) | Yellow | Decision estrategica revisable |
| `referral-ladder` (envio de ask / entrega de recompensa) | Red | Comunicacion externa, no graduable (Art. I.1) |
| `case-study-engine` | Yellow | Requiere sign-off de marca + cliente antes de publicar |
| `/referir` | Yellow diseño / Red envio | Ver notas de zona en el comando |

## Conexiones Cross-Plugin

- `advocacy-scoring` ↔ RETENTION (`customer-success-ops`, `renewal-expansion` de play-to-win) — fuente de NPS hasta que exista un health-monitor dedicado (gap G4, fuera de alcance)
- `referral-ladder` ↔ `os/skills/sales-orchestrator` — el incentive-bank es el mirror del pricing-grid
- `case-study-engine` ↔ `os/skills/sales-orchestrator` (VoC) — fuentes de contexto distintas, no duplicadas
- `referral-advocacy-agent` → ACQUISITION (14 skills de growth-foundations/sales-blueprint) — seam REF→ACQ, golden-ticket handoff con intake ICP pre-calentado

## Epistemica

- **Research-backed** [research: zonkafeedback, customergauge, napierb2b, influitive]: gate NPS≥9, momentos de ask (nunca al final del contrato), incentivos no-cash relacionales, SLA de handoff, ramp de 60-90d/3-6mo, reglas de captura de case study
- **[OPERATOR-ASSERTED, input UpViral]**: la estructura de milestone-unlock ladder (1/3/5) y automation-on-threshold — patron adaptado de mecanicas de consumo masivo a B2B 1:1, con la logica exacta de secuencias de email de UpViral explicitamente **no verificada** y no replicada
- **[DESIGN, pendiente de registro]**: los nombres "IMPULSO" y "ESCALERA DE REFERIDOS" deben pasar por `os/naming/framework-registry.md` antes de produccion (ver `_revenue-os/03-architecture.md` D8)

## Instalacion

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install motor-de-referidos@growth-marketplace
```

**Requerido antes de usar `/referir` o `referral-advocacy-agent`**: configurar `clients/<client>/referral/incentive-bank.md` (usar `skills/referral-ladder/templates/incentive-bank.md` como base) — mismo patron de instalacion que `clients/<client>/sales-engine/pricing-grid.md`.
