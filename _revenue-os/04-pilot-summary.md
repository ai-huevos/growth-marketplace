# 04 — Piloto Revenue OS: Loop de REVENUE + Instrumentación (Fase 4)

**Estado**: construido y verificado end-to-end contra Supabase local. Pendiente de tu aprobación (gate duro de Fase 4) antes de construir las otras 4 etapas.

---

## Qué se construyó (12 archivos: 6 nuevos, 6 extendidos)

### 1. Capa de instrumentación (cierra G8 — la "vía de escritura única")
4 migraciones nuevas en `supabase/migrations/`:
- `..003_stage_transitions.sql` — log de transiciones de etapa (append-only, mismo patrón RLS que `ai_execution_logs`)
- `..004_execution_scores.sql` — scores de outcome de negocio, FK a `ai_execution_logs` (patrón Langfuse/LangSmith)
- `..005_phase_metrics.sql` — 5 filas por organización (una métrica titular por etapa), auto-provisionadas por trigger al crear la org: ACQ=signups ICP, ACT=TTFV, RET=churn (gate 10, below), REV=win_rate (gate 30, above), REF=pipeline referido
- `..006_referral_ledger.sql` — ledger de referidos con trigger de umbral: al cruzar 1/3/5 referidos avanza rung 1/2/3 y estampa recompensa (mecánica UpViral de automatización-por-umbral, listo para la fase REFERIR)

### 2. Sales-orchestrator genérico (cierra G6/F2)
`os/skills/sales-orchestrator/` (13 archivos) de-scopeado: `client: kai-partners` y todos los paths duros → variable de instalación `{{CLIENT_SLUG}}` (87 usos). Cero referencias de cliente restantes. La metodología (PULSO, scorecards, extracción) quedó intacta — solo cambió el scoping.

### 3. Agente proposal-pricing (cierra G5)
`plugins/sales-blueprint/agents/proposal-pricing-agent.md` (NUEVO): gate de viabilidad PULSO ≥ 23 → selección de tier vs pricing grid → borrador + **Evidence Pack** (racional, contexto, diff vs grid, riesgos — decidible en segundos) → **approve-with-edits** (ajustas el precio, el agente continúa sin reiniciar). Zona **Red permanente**: jamás envía, jamás gradúa más allá de HITL.

### 4. Instrumentación cableada al pipeline
Los 5 comandos del sales-orchestrator ganaron fase de "Instrumentación" con SQL exacto:
- `/prospect` → transición ATRAER→CONVERTIR (`pipeline_entered`)
- `/post-discovery` → checkpoint PULSO + score `discovery_quality` (rule)
- `/sales-coach` → score `conversation_quality` (llm_judge)
- `/desk-work` → delega propuesta al agente proposal-pricing + score `deliverable_quality` (human)
- `/follow-up` → **sitio único autoritativo** del evento win/loss: transición + recálculo de `win_rate` en `phase_metrics`
- El agente registra `proposal_review` (aprobado/editado/rechazado) — señal que alimenta F4 (graduación de confianza) y F6 (data flywheel)

Mecanismo de escritura en 3 niveles: Supabase MCP → `psql` local (54332) → si no hay DB, el INSERT se guarda en `clients/{{CLIENT_SLUG}}/deals/<deal>/pending-metrics.sql` (ningún dato se pierde en silencio). `scripts/flush-pending-metrics.sh` (NUEVO) aplica los pendientes cuando la DB vuelve.

## Cómo correrlo

```bash
# 1. Levantar el stack local (Docker debe estar corriendo)
npx supabase start && npx supabase db reset   # aplica las 7 migraciones

# 2. Instalar un cliente: la org DEBE llamarse igual que el CLIENT_SLUG
#    (organizations.name = slug — supuesto de instalación explícito)
#    + crear clients/<slug>/sales-engine/pricing-grid.md y brand-config/

# 3. Correr el pipeline sobre un deal real:
#    /prospect → (llamada) → /post-discovery → /sales-coach → /desk-work → /follow-up
#    El agente de propuesta te presenta el Evidence Pack; tú apruebas/ajustas/rechazas.

# 4. Si la DB no estaba disponible durante el pipeline:
./scripts/flush-pending-metrics.sh
```

## Cómo verificar que funciona (ya ejecutado, replicable)

```sql
-- Al crear una org: select * from phase_metrics where org_id='...';  → 5 filas automáticas ✅
-- Escalera de referidos: insert/update referral_ledger con count 1→3→5 → rung 1→2→3 + reward_stamped ✅
-- Patrón CTE de los comandos (log + score en una operación) → ejecuta limpio ✅
-- Transición win: insert into stage_transitions ... 'win_rate' ✅
```
Resultado de la corrida de verificación (2026-07-05): 7/7 migraciones aplicadas, trigger de provisión ✅, trigger de escalera ✅, CTE real de los comandos ✅.

## Supuestos de instalación (explícitos)
1. `organizations.name` = `CLIENT_SLUG` (no existe columna slug; el SQL de los comandos resuelve la org por nombre).
2. `profiles` requiere usuario auth existente (FK) — en instalación real el signup lo crea vía `handle_new_user`.
3. Deal perdido se registra como CONVERTIR→CONVERTIR (sin avance de fase) — el enum no tiene etapa "perdido" por diseño.

## Lo que el piloto NO incluye (secuencia aprobada en la arquitectura §10)
Build 2: métricas ACT/RET pobladas + reconexión app↔contenido (F1). Build 3: loop de salud RETENTION. Build 4: fase REFERIR completa (plugin motor-de-referidos). El `referral_ledger` ya quedó listo como fundación.

---

**GATE FASE 4**: corre el piloto con un deal real (o el fixture TalentFlow de `docs/test-results/`) y aprueba antes de que construya las 4 etapas restantes.
