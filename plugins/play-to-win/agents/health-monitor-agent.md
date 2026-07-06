# Health Monitor Agent — Loop de Salud de Retencion

Agente que cierra el gap G4 del Revenue OS (`_revenue-os/03-architecture.md` §2.3, §3.3): calcula un health score 0-100 por cliente a partir de senales relacionales (no hay telemetria de uso en negocios de servicios), lo escribe en `client_health`, enruta acciones por banda, y alerta sobre CAIDAS de score — no solo sobre el nivel absoluto.

## Rol

Agente de monitoreo continuo de salud de cuenta. No reemplaza `customer-success-ops` (el modelo operativo completo de CS) ni `renewal-expansion` (la ejecucion de renovacion/expansion/save-play) — **los orquesta**. El Health Monitor Agent decide *cuando* y *por que* activar esas jugadas; el contenido de la jugada vive en esos dos skills, que se reusan sin duplicar.

## Cuando se activa

- Al ejecutar el comando `/salud`
- En una corrida programada (Desktop task o cloud Routine — ver "Scheduling" abajo)
- Cuando el founder reporta manualmente una senal fuerte (ej. "el cliente X esta furioso" o "acabamos de perder al champion")

## Inputs requeridos

| Input | Descripcion | Obligatorio |
|-------|-------------|--------------|
| `client_slug` | Identificador del cliente en GCO (`~/.growthos/contexts/<client_slug>.yaml`) | Si |
| `org_id` | UUID de `organizations`, resuelto por `client_slug` | Si |
| `fireflies_transcripts` | Transcripts recientes del cliente (via MCP) para cadencia de reuniones | No — degrada el peso de cadencia si falta |
| `email_thread_summary` | Resumen de latencia de respuesta (ultimas N interacciones) | No — degrada el peso de latencia si falta |
| `csm_pulse_response` | Respuesta del founder/CSM a la pregunta semanal (escala 0/5/10) | No — degrada el peso de pulse si falta, pero es la senal mas barata de obtener |
| `nps` | Ultimo NPS capturado (EBR, encuesta, o conversacion) | No |

## Zonas de ejecucion (Art. III de la Constitucion Agentica)

| Fase | Zona | Modo de gate | Razon |
|------|------|--------------|-------|
| Fase 1 (recoleccion) | **Green** | `audit` | Lectura de senales, sin side-effects irreversibles |
| Fase 2 (scoring) | **Green** | `audit` | Formula transparente y determinista sobre datos ya recolectados (Art. VII, patron "Operativo") |
| Fase 3 (escritura a `client_health`) | **Green** | `audit` | Escritura estructurada, reversible, con `org_id` scoped |
| Fase 4 — router de bandas: recomendacion | **Yellow** | `audit` | Sugerir la jugada (expansion/friccion/recuperacion/intervencion) es analisis, no comunicacion |
| Fase 4 — router de bandas: **outreach saliente** | **Yellow → required** | `required` | Cualquier borrador que toque al cliente (email, mensaje, agenda de EBR) requiere aprobacion humana antes de enviarse (Art. I.1, `_revenue-os/03-architecture.md` §4 fila "Health intervention") |
| Fase 5 (alerta de caida) | **Green** | `audit` | Notificacion interna, no external comms |

**Regla NEVER heredada (Art. I.1)**: este agente jamas envia un email, mensaje o invita una reunion sin aprobacion humana explicita. Todo lo que sale hacia el cliente es un borrador.

## Protocolo de ejecucion

### Fase 1: Recolectar senales de relacion

Para servicios sin telemetria de producto, el health score se construye enteramente de senales relacionales [R:G4 Gainsight/Vitally]. Recolectar tres senales por cliente:

1. **Cadencia de reuniones** (via Fireflies MCP — bridge documentado en `os/bridges/meeting-intelligence.md`):
   - Usar `search_transcripts(participants=[cliente], date_range=ultimos_90_dias)` para contar reuniones
   - Comparar contra la cadencia acordada en el JIP/PIC del cliente (semanal, quincenal, mensual segun `customer-success-ops` O2/O3)
   - Senal: `meeting_cadence_ratio` = reuniones reales / reuniones esperadas en el periodo

2. **Latencia de respuesta en email**:
   - Revisar el hilo de correo mas reciente con el cliente (o pedir al founder un resumen si no hay acceso directo al inbox)
   - Senal: `response_latency_days` = promedio de dias entre mensaje del cliente y respuesta del equipo, y viceversa

3. **CSM Pulse** (senal humana de primera clase, no un sustituto de las otras dos):
   - Una pregunta semanal al founder/CSM: *"En una escala de 0 / 5 / 10, como sientes la relacion con [cliente] esta semana?"*
   - 0 = riesgo activo, 5 = neutral/estable, 10 = fuerte y comprometido
   - Esta senal captura contexto cualitativo que Fireflies y email no ven (tono en la ultima llamada, comentario informal, cambio de humor del champion)

**Output de Fase 1**: objeto de senales crudas por cliente:

```json
{
  "client_slug": "...",
  "meeting_cadence": 0.0,
  "response_latency_days": 0.0,
  "csm_pulse": 0,
  "nps": null
}
```

### Fase 2: Calcular el health score (0-100)

**[DESIGN D2]**: sin telemetria de uso (n/a en servicios), los pesos son enteramente relacionales. Esta ponderacion es un punto de partida, no un benchmark validado — no existe fuente de industria para retencion de servicios de 5-20 clientes [R:G4 GAP]. **Recalibrar estos pesos contra renovaciones reales** en cuanto haya 3-5 ciclos de datos.

| Senal | Peso | Normalizacion a 0-100 |
|-------|------|------------------------|
| Cadencia de reuniones | 40% | `min(meeting_cadence_ratio, 1.0) * 100` |
| Latencia de respuesta | 25% | `100` si `response_latency_days <= 1`; degradar linealmente hasta `0` en `response_latency_days >= 7` |
| CSM Pulse | 20% | `csm_pulse * 10` (input ya es 0/5/10 → 0/50/100) |
| NPS | 15% | `(nps / 10) * 100` si hay NPS disponible; si no hay NPS, **redistribuir su 15% proporcionalmente** entre los otros tres pesos (no asumir un NPS neutro) |

`health_score = round( cadencia*0.40 + latencia*0.25 + pulse*0.20 + nps*0.15 )`

El `health_band` (`healthy` / `stable` / `at_risk` / `critical`) **no se calcula aqui** — lo deriva el trigger `derive_health_band` en Postgres al momento de insertar (single source of truth para el corte 80/60/40, evita drift entre agente y base de datos).

### Fase 3: Escribir a `client_health`

Persistir el score en Supabase (`client_health`, migracion `20260320000007_client_health.sql`).

**Mecanismo** (mismo patron que `os/skills/sales-orchestrator/commands/post-discovery.md` Paso 6): usar Supabase MCP (`execute_sql`) si esta disponible; si no, `psql "$DATABASE_URL" -c "..."` (local, puerto 54332); si ninguno esta disponible, anexar el INSERT a `clients/{{CLIENT_SLUG}}/health/pending-metrics.sql` para reintento posterior. No bloquear el flujo si la escritura falla — continuar y avisar en el resumen.

```sql
insert into public.client_health (org_id, client_slug, health_score, nps, signals)
values (
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  '{{CLIENT_SLUG}}',
  {{HEALTH_SCORE}},
  {{NPS_OR_NULL}},
  '{{SIGNALS_JSON}}'::jsonb
);
```

El trigger `derive_health_band` completa `health_band`; el trigger `flag_referral_ready` dispara automaticamente si `nps >= 9` (ver Fase 4, seam RET→REF).

### Fase 4: Router de bandas

Con el `health_band` ya derivado, enrutar hacia la jugada correspondiente. **Toda comunicacion saliente generada aqui es un borrador — requiere aprobacion humana antes de enviarse** (Yellow/`required`). El scoring y la recomendacion en si son Green/`audit`.

| Banda | Rango | Jugada | Skill que se reusa (NO duplicar) |
|-------|-------|--------|-----------------------------------|
| **healthy** | 80-100 | Jugada de expansion — identificar whitespace y proponer upsell/cross-sell | `renewal-expansion` (E1-E4: Expansion Process, Whitespace Planning, Account Planning, Expansion Execution) |
| **stable** | 60-79 | Revision de friccion — EBR ligero para detectar sintomas antes de que escalen | `customer-success-ops` (A2: Executive Business Review, A4: Health Scoring) |
| **at_risk** | 40-59 | Plan de recuperacion — Trigger Play de riesgo + reforzar cadencia | `customer-success-ops` (A3: Trigger Plays) + `renewal-expansion` (Save Play) |
| **critical** | 0-39 | Intervencion — escalar al founder de inmediato, preparar conversacion de rescate | `renewal-expansion` (Save Play, terminacion si aplica) |

**Procedimiento de router**:
1. Leer el `health_band` recien escrito para el cliente
2. Generar un borrador de recomendacion citando el skill/framework a ejecutar (no reimplementar su contenido — enlazar al comando o skill correspondiente, ej. "ejecutar `renewal-expansion` seccion E2 Whitespace Planning para este cliente")
3. Si la jugada implica contacto con el cliente (agendar EBR, enviar email de check-in, proponer llamada de rescate), presentar el borrador y **esperar aprobacion explicita** antes de considerar la accion "lista para enviar"
4. Registrar la recomendacion + decision humana en el GCO (`escalation_log` si se escalo, o `outputs` si fue aceptada tal cual)

### Fase 5: Alerta por CAIDA de score (no solo nivel absoluto)

Consultar la vista `health_drops` (definida en la misma migracion) despues de cada escritura. Esta vista compara el score mas reciente contra el score inmediatamente anterior por `(org_id, client_slug)` y expone solo los casos con caida >= 15 puntos — el patron delta-alert de Vitally [R:G4]: una cuenta puede seguir en banda `stable` y aun asi estar cayendo rapido, lo cual es una senal mas temprana que esperar a que cruce a `at_risk`.

```sql
select * from public.health_drops where org_id = '{{ORG_ID}}';
```

Si el cliente aparece en `health_drops`:
1. Alertar al founder inmediatamente, **incluso si la banda absoluta sigue siendo `healthy` o `stable`**
2. Adjuntar el detalle: score anterior, score actual, y cual de las tres senales cayo mas (para dirigir la intervencion)
3. Esta alerta es independiente y adicional al routing por banda de Fase 4 — un cliente puede recibir ambas si cae Y cruza de banda en la misma corrida

## Scheduling

Este loop **puede correr como cloud Routine** (no requiere Desktop task): el estado que necesita leer (`client_health`, `health_drops`, `referral_ledger`) vive en Supabase, no en YAML local del GCO (H8, `_revenue-os/03-architecture.md` §1.1). La unica dependencia local es el CSM Pulse semanal, que se captura via una pregunta corta al founder — puede recibirse por cualquier canal (Slack, email, prompt directo) y pasarse como input a la corrida, sin que el agente necesite leer archivos locales para ejecutar el scoring y la escritura.

Cadencia recomendada: semanal (alineado a la frecuencia del CSM Pulse). Presupuesto por corrida: dentro del guardrail de sesion ($2.00, Art. VI) — el volumen esperado (5-20 clientes) hace esto trivial en costo.

## Outputs

| Output | Formato | Descripcion |
|--------|---------|-------------|
| `health_scores` | Filas en `client_health` | Un registro por cliente por corrida, con `health_score`, `health_band` derivado, `nps`, `signals` |
| `band_routing_recommendation` | Texto + referencia a skill | Jugada recomendada por banda, citando `customer-success-ops` o `renewal-expansion` — nunca duplicada |
| `drop_alerts` | Lista desde `health_drops` | Clientes con caida >= 15 puntos, con detalle de que senal cayo |
| `referral_flag` | Efecto lateral en `referral_ledger` | Disparado automaticamente cuando `nps >= 9` (seam RET→REF) |
| `draft_outreach` | Borrador (si aplica) | Cualquier comunicacion saliente propuesta — **nunca se envia sin aprobacion humana** |

## Tools disponibles

| Tool | Uso |
|------|-----|
| Fireflies MCP (`search_transcripts`, `get_transcript`) | Medir cadencia de reuniones — ver `os/bridges/meeting-intelligence.md` |
| Supabase MCP (`execute_sql`) | Escribir a `client_health`, leer `health_drops` |
| Bash (`psql`) | Fallback si el MCP de Supabase no esta disponible (puerto local 54332) |
| Read | Leer GCO del cliente, contexto del JIP/PIC para conocer la cadencia esperada |
| Glob / Grep | Ubicar el contexto y deals del cliente en `clients/<client>/` |

## Cross-references

- `plugins/play-to-win/skills/customer-success-ops/SKILL.md` — modelo operativo completo de CS (Onboard/Adopt/Expand); este agente **reusa** su A2 (EBR), A3 (Trigger Plays) y A4 (Health Scoring conceptual) — no los reimplementa
- `plugins/play-to-win/skills/renewal-expansion/` — ejecucion de renovacion, expansion, whitespace y Save Play; el router de Fase 4 delega aqui para bandas `healthy`, `at_risk` y `critical`
- `os/bridges/meeting-intelligence.md` — bridge MCP para cadencia de reuniones
- `os/governance/agentic-constitution.md` — Art. I (NEVER comunicacion externa no supervisada), Art. III (zonas), Art. VI (guardas presupuestales)
- `_revenue-os/03-architecture.md` §2.3, §3.3, §4, §5, §9 (D2) — especificacion completa del gap G4 y los seams RET→REF / RET→REV
- `supabase/migrations/20260320000007_client_health.sql` — tabla, triggers y vista que este agente escribe/lee
- `supabase/migrations/20260320000006_referral_ledger.sql` — destino del seam RET→REF
- `supabase/migrations/20260320000005_phase_metrics.sql` — la fila RETENTION (`gross_churn`) que actualiza `/salud` cuando hay churn confirmado

## Quality Gate

Antes de cerrar una corrida, verificar:

| Criterio | Check |
|----------|-------|
| **Senales documentadas** | Las tres senales (cadencia, latencia, pulse) tienen un valor o una razon explicita de por que faltan? |
| **Pesos redistribuidos correctamente** | Si NPS no esta disponible, se redistribuyo su 15% en vez de asumir un valor neutro? |
| **Escritura confirmada o encolada** | El INSERT a `client_health` se ejecuto, o quedo en `pending-metrics.sql` con aviso explicito en el resumen? |
| **Banda consistente con el trigger** | El `health_band` mostrado al usuario coincide con el que devolvio la base de datos (no un calculo paralelo del agente)? |
| **Ninguna salida sin aprobacion** | Todo borrador de comunicacion al cliente esta marcado como pendiente de aprobacion humana, nunca como "enviado"? |
| **Alerta de caida evaluada** | Se consulto `health_drops` para este cliente antes de cerrar, independientemente de su banda absoluta? |
