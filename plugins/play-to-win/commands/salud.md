---
description: Orquesta una corrida del health-monitor-agent sobre todos los clientes del GCO dir. Calcula health score, banda, alertas de caida, y actualiza la fila RETENTION (gross_churn) de phase_metrics cuando hay churn confirmado.
argument-hint: (ninguno — corre sobre todos los clientes en GCO_DIR) o <client_slug> para un solo cliente
allowed-tools: [Read, Write, Glob, Grep, Bash]
---

# Command: /salud

El usuario quiere ver o recalcular la salud de sus clientes: $ARGUMENTS

Este comando **orquesta** al `health-monitor-agent` (`plugins/play-to-win/agents/health-monitor-agent.md`) — no reimplementa su logica de scoring ni de routing. Lee ese archivo antes de ejecutar este comando.

## Uso

```
/salud                  → corre sobre todos los clientes en GCO_DIR
/salud finkargo         → corre solo sobre el cliente finkargo
```

## Flujo

### Paso 1: Descubrir clientes

Listar todos los GCO en `${GCO_DIR:-~/.growthos/contexts}/*.yaml`. Cada archivo `<client_slug>.yaml` es un cliente activo. Si el usuario paso un `client_slug` como argumento, filtrar a ese unico cliente.

Si no hay ningun GCO, detener y avisar: *"No hay clientes activos en GrowthOS. Ejecuta `/os` primero para dar de alta un cliente."*

### Paso 2: Corrida del health-monitor-agent por cliente

Para cada cliente descubierto, ejecutar las Fases 1-5 del `health-monitor-agent`:

1. Recolectar senales (cadencia via Fireflies MCP, latencia de respuesta, CSM Pulse — preguntar al founder si no se proveyo)
2. Calcular `health_score` con la formula ponderada (40% cadencia / 25% latencia / 20% pulse / 15% NPS, redistribuyendo si falta NPS)
3. Escribir a `client_health` (Supabase MCP `execute_sql`, o `psql "$DATABASE_URL"` puerto 54332 como fallback, o `clients/{{CLIENT_SLUG}}/health/pending-metrics.sql` si ninguno esta disponible)
4. Leer el `health_band` derivado por el trigger de Postgres (no recalcular la banda en el agente)
5. Consultar `health_drops` para ese `org_id` / `client_slug`

No bloquear el resto de la corrida si un cliente falla — registrar el fallo en el resumen y continuar con el siguiente.

### Paso 3: Resumen de bandas

Presentar un resumen consolidado de todos los clientes procesados:

```
SALUD DE CLIENTES — [fecha]

| Cliente | Score | Banda | NPS | Caida detectada |
|---------|-------|-------|-----|------------------|
| [slug]  | [0-100] | [healthy/stable/at_risk/critical] | [0-10 o "N/A"] | [Si (-X pts) / No] |
```

### Paso 4: Acciones propuestas por banda

Para cada cliente, presentar la accion recomendada segun la tabla de routing del `health-monitor-agent` (Fase 4) — citando el skill que se reusa, nunca reimplementando su contenido aqui:

```
ACCIONES PROPUESTAS:

[Cliente] — banda: [banda]
  Jugada: [expansion / revision de friccion / plan de recuperacion / intervencion]
  Skill a ejecutar: [renewal-expansion seccion X / customer-success-ops seccion Y]
  Requiere aprobacion humana: [Si, si implica contacto con el cliente]
```

Cualquier borrador de comunicacion saliente generado en este paso queda marcado como **pendiente de aprobacion** — nunca se envia desde este comando (Yellow/`required`, Art. I.1 de la Constitucion Agentica).

### Paso 5: Alertas de caida

Listar por separado los clientes que aparecen en `health_drops` (caida >= 15 puntos), **independientemente de su banda absoluta** — una cuenta `stable` cayendo rapido es una senal mas temprana que esperar a que cruce a `at_risk`:

```
ALERTAS DE CAIDA DE SCORE:

[Cliente]: [score anterior] → [score actual] (-[X] pts)
  Senal mas debil: [cadencia / latencia / pulse / nps]
  Accion sugerida: [investigar de inmediato, independiente de la banda]
```

### Paso 6: Confirmar churn y actualizar `phase_metrics`

Preguntar al usuario si algun cliente de la corrida confirmo churn (cancelacion, no-renovacion) desde la ultima corrida de `/salud`. Si el usuario confirma uno o mas:

1. Calcular el `gross_churn` actualizado para el `org_id` correspondiente: `(clientes perdidos en el periodo / clientes activos al inicio del periodo) * 100`
2. Actualizar la fila `RETENTION` de `phase_metrics` (migracion `20260320000005_phase_metrics.sql`, PK `(org_id, stage)`):

```sql
update public.phase_metrics
set current_value = {{GROSS_CHURN_PCT}},
    updated_at = timezone('utc'::text, now())
where org_id = (select id from public.organizations where name = '{{CLIENT_SLUG}}')
  and stage = 'RETENTION';
```

Usar el mismo mecanismo de escritura del Paso 2 (Supabase MCP → `psql` local → `pending-metrics.sql`). No bloquear el resto del resumen si esta escritura falla.

Si ningun cliente confirmo churn, omitir este paso silenciosamente (no es un error — la mayoria de las corridas de `/salud` no tienen churn que registrar).

## Output final

```
RESUMEN /salud — [fecha]

Clientes procesados: [N]
Banda: [X] healthy / [Y] stable / [Z] at_risk / [W] critical

ALERTAS DE CAIDA: [N] clientes ([lista])

ACCIONES PENDIENTES DE APROBACION: [N]

CHURN CONFIRMADO ESTA CORRIDA: [Si (N clientes) / No]
RETENTION.gross_churn ACTUALIZADO: [Si → nuevo valor / No aplica]

Siguiente corrida recomendada: [en 7 dias, alineado a cadencia de CSM Pulse]
```

## Referencias

- `plugins/play-to-win/agents/health-monitor-agent.md` — logica completa de recoleccion, scoring y routing (no duplicar aqui)
- `plugins/play-to-win/skills/customer-success-ops/SKILL.md` — A4 Health Scoring conceptual, A2 EBR, A3 Trigger Plays
- `plugins/play-to-win/skills/renewal-expansion/` — Save Play, Whitespace Planning, Expansion Execution
- `supabase/migrations/20260320000007_client_health.sql` — tabla `client_health`, triggers `derive_health_band` / `flag_referral_ready`, vista `health_drops`
- `supabase/migrations/20260320000005_phase_metrics.sql` — fila RETENTION (`gross_churn`) actualizada en el Paso 6
- `supabase/migrations/20260320000006_referral_ledger.sql` — destino del seam RET→REF (disparado automaticamente por el trigger, no por este comando)
- `_revenue-os/03-architecture.md` §2.3, §3.3 — especificacion del gap G4
- `os/bridges/meeting-intelligence.md` — bridge MCP usado por el Paso 2
