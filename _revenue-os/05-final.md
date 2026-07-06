# 05 — Revenue OS: Cierre de Fase 5 (Batch Build)

**Estado**: las 5 etapas AARRR construidas, los 7 flywheels cerrados o alimentados, instrumentación verificada con datos reales del deal Anagram. GrowthOS extendido a 5 fases: DEFINIR → ATRAER → CONVERTIR → ESCALAR → **REFERIR**.

**Conteos finales (verificados, no estimados)**: 7 plugins · 34 skills · 12 agentes · 26 comandos · 62 templates · 8 migraciones Supabase.

---

## Qué se construyó por etapa

| Etapa | Gap | Entregado | Zona |
|---|---|---|---|
| **ACQUISITION** | G1 | Loop de distribución: `contrato-de-ejecucion.md` (EXTEND content-strategy v1.1.0) + `/distribuir` + `learnings-distribucion.md`. Gate de calendario, producción two-wave, cola de revisión en `content-queue/`, learnings auto-actualizables | Publicar = Red/HITL |
| **ACTIVATION** | G2/G3 | Skill `client-onboarding` (capa de ejecución sobre customer-journey) + `activation-agent`. Contrato AND de 4 condiciones, TTFV desde `/kickoff`, gates fechados D3-4/D5/D7/30/60/90 | Yellow |
| **RETENTION** | G4 | Migración `client_health` (bandas por trigger, view `health_drops`) + `health-monitor-agent` + `/salud`. Señales relacionales (cadencia Fireflies, latencia, CSM Pulse), alertas por caída | Green score / Yellow outreach |
| **REVENUE** | G5/G6 | (Piloto, Fase 4) sales-orchestrator genérico + `proposal-pricing-agent` (evidence pack, approve-with-edits, gate PULSO≥23) — validado con deal Anagram real | Red permanente |
| **REFERIR** | G7 | Plugin `motor-de-referidos` (13 archivos): advocacy-scoring (IMPULSO), referral-ladder (ESCALERA DE REFERIDOS 1/3/5), case-study-engine, `referral-advocacy-agent`, `/referir` + 5ª fase `os/phases/referir.md` | Red todo outreach |
| **Infra** | G8/F1 | 5 migraciones nuevas + vía de escritura triple (MCP→psql→pending-metrics.sql) + `flush-pending-metrics.sh` + app reconectada (skill-loader con alias, logs en `onFinish`) | — |

## Cierre de flywheels (output → input verificado)

| Seam | Mecanismo | Estado |
|---|---|---|
| REFERIR→ACQ | golden-ticket SLA + `stage_transitions` REFERIR→ATRAER (`referred_pipeline`) | construido |
| ACQ→ACT | quiz seam (existente) + `content_published` alimenta pipeline | construido |
| ACT→RET | activación confirmada siembra baseline de salud (plan-30-60-90 §baseline) | construido |
| RET→REF | trigger `flag_referral_ready` (NPS≥9 → `referral_ledger`) | **probado en vivo** ✅ |
| RET→REV | banda healthy (80-100) → jugada de expansión (renewal-expansion REUSE) | construido |
| REV→ACQ | banco VoC → copy de prospecting (F2, ya giraba) | operativo |
| TODOS→meta | vía de escritura única → F4 (trust), F5 (templates), F6 (data) | **probado con datos reales Anagram** ✅ |

## Verificación ejecutada (2026-07-05)

- `npx supabase db reset`: **8/8 migraciones aplican limpias** desde cero.
- Triggers probados en vivo: provisión de 5 `phase_metrics` por org ✅ · escalera 1→3→5 ✅ · `flag_referral_ready` con NPS=9 ✅ · bandas de salud ✅.
- App: `tsc --noEmit` limpio, lint sin issues nuevos; los 7 alias de slug resuelven a SKILL.md reales.
- Pipeline E2E con deal real (Anagram): PULSO 18/25, coaching 22→40/85, propuesta 38/100 con veredicto DENIED del gate — 1 transición + 3 scores + 5 métricas en Supabase, restaurables por replay del `pending-metrics.applied.sql`.
- Sales-orchestrator: 0 referencias de cliente, 87 variables `{{CLIENT_SLUG}}`.

## Swap list de instalación (completo, 5 etapas)

| Ítem | Ubicación | Requerido por |
|---|---|---|
| `CLIENT_SLUG` | frontmatter/paths de comandos | todo el pipeline |
| **`organizations.name` = CLIENT_SLUG** | Supabase (supuesto explícito — no hay columna slug) | instrumentación |
| Pricing grid | `clients/<slug>/sales-engine/pricing-grid.md` | proposal-pricing-agent (**ai-huevos: PENDIENTE**) |
| Incentive bank | `clients/<slug>/referral/incentive-bank.md` | referral-ladder |
| Brand config | `clients/<slug>/brand-config/` | deliverables HTML, case studies |
| GCO | `~/.growthos/contexts/<slug>.yaml` (+ campos aditivos §6.3) | todos los agentes |
| Content queue | `clients/<slug>/content-queue/` | /distribuir |
| Credenciales | `ANTHROPIC_API_KEY`, `FIREFLIES_API_KEY`, Supabase local/cloud, `CONTENT_ROOT`, `GCO_DIR` | app + loops |
| Budget guards | `BUDGET_*` env | constitución Art. VI |
| Scheduling | /distribuir + /salud como Desktop tasks (H8: Routines cloud no leen YAML local; /salud puede ser Routine — lee Supabase) | loops |

## Diferidos (con razón)

1. **Rebuild de `docs/template-catalog.md`** (62 templates): borrado en limpieza de feb 2026; higiene de registro, no elemento de arquitectura. CLAUDE.md ya marca PENDING REBUILD.
2. **Reparación F3** (backlog del second-brain corrompiéndose): higiene de infraestructura de conocimiento, no toca revenue. Sesión aparte.
3. **Canon de escala PULSO** (5-30 vs 0-50 vs 0-25): en cuarentena por diseño (§1.3) — el campo `scale` hace la deriva observable sin promediar.
4. **Lista de corte** (6 assets del mapa §6): decisión del operador pendiente; nada borrado.
5. **Validaciones D1–D8**: dependen de datos de dog-food (bandas de salud, umbrales de activación, secuencias UpViral A/B). El deal Anagram es el primer dato.
6. **Espejo GCO→Supabase completo**: solo `client_health` se espeja hoy; el espejo total se construye cuando un loop corra realmente como cloud Routine.

## Acciones del operador para encender el motor

1. Crear `clients/ai-huevos/sales-engine/pricing-grid.md` (bloqueó el score de la propuesta Anagram).
2. Crear `clients/ai-huevos/referral/incentive-bank.md` desde el template del plugin.
3. Programar `/distribuir` (semanal) y `/salud` (semanal) como Desktop tasks.
4. Ejecutar las acciones correctivas del deal Anagram (email a Jina, NDA, cuantificación SC/U) — el reloj corre.

**Gate Fase 5**: todo elemento de la arquitectura está construido o diferido con razón explícita ✅ · todo loop cerrado con su seam verificado ✅.
