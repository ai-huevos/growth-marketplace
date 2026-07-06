---
description: Orquesta una corrida completa de la fase REFERIR — detecta clientes referral-ready, califica por IMPULSO, ubica el peldaño de la escalera, y prepara (nunca envia) los drafts de ask, case study, y handoff de referido hacia ACQUISITION.
argument-hint: <nombre del cliente instalado o "todos" para correr sobre toda la cartera>
allowed-tools: [Read, Write, Glob, Grep]
---

# /referir — Corrida de Fase REFERIR

El usuario quiere correr la fase REFERIR para: $ARGUMENTS

**Modo de falla (config de cliente)**: si `clients/{{CLIENT_SLUG}}/referral/incentive-bank.md` no existe, detente y pide al operador que configure el incentive-bank del cliente antes de proponer cualquier recompensa concreta. Este comando nunca inventa un incentivo.

## Instrucciones

### Paso 1: Detectar Clientes Referral-Ready

Para el cliente (o cartera) indicado en `$ARGUMENTS`, leer el GCO (`~/.growthos/contexts/<client>.yaml`) y, si existe, la proyeccion Supabase de salud del cliente.

Un cliente es candidato a esta corrida si:
- `phase.current` es `ESCALAR` o `REFERIR`, **y**
- `nps >= 9` **o** un milestone de ESCALAR fue completado recientemente

Si ningun cliente cumple, informar al usuario y detenerse — no forzar candidatos que no califican.

### Paso 2: Advocacy Scoring (skill `advocacy-scoring`)

Para cada candidato:
1. Confirmar el gate NPS≥9 (binario, no promediable)
2. Calcular IMPULSO (0-100) usando `skills/advocacy-scoring/frameworks/indice-impulso.md`
3. Asignar tier: Listo (80-100) / Preparar (60-79) / Monitorear (0-59)

### Paso 3: Ubicar en la Escalera (skill `referral-ladder`)

1. Leer `referral_ledger.ladder_rung` del cliente (Supabase, si esta disponible; si no, preguntar al operador el conteo conocido)
2. Resolver la recompensa del peldaño desde `clients/{{CLIENT_SLUG}}/referral/incentive-bank.md`
3. Preparar el draft del ask correspondiente (Peldaño 1/2/3) — **nunca marcarlo como enviado**

### Paso 4: Case Study si Aplica (skill `case-study-engine`)

Si el cliente esta en tier "Listo" o completo un milestone de ESCALAR, generar la guia de entrevista poblada (`entrevista-case-study.md`) para que una parte no-vendedora la conduzca. No redactar el case study final hasta que exista una entrevista real conducida por un humano.

### Paso 5: Preparar Golden-Ticket Handoff (si hay un referido activo)

Si el cliente ya trajo un referido (evento externo al agente — reportado por el humano o detectado en `referral_ledger`), preparar el intake pre-calentado hacia ACQUISITION con el SLA marcado (mismo dia habil / dia habil siguiente). Ver `agents/referral-advocacy-agent.md` Fase 5.

### Paso 6: Expectativa de Ramp (para `/roadmap`)

Incluir siempre esta nota en el resumen y, si el usuario esta corriendo `/roadmap` en paralelo, propagarla:

> "El loop de REFERIR tiene un ramp esperado de 60-90 dias para la primera actividad de referido, y 3-6 meses para revenue medible — no se marca como 'fallido' dentro de una ventana de 90 dias." [research: customergauge]

### Paso 7: Instrumentacion

Delegar a `agents/referral-advocacy-agent.md` Fase 6 (stage_transitions + referral_ledger + execution_scores, con fallback a `pending-metrics.sql`). No bloquea el flujo si falla.

### Paso 8: Resumen Ejecutivo

```
CORRIDA REFERIR: [fecha]
CLIENTES EVALUADOS: [N]
CLIENTES REFERRAL-READY: [N] — [lista con tier IMPULSO]

POR CLIENTE:
  [Nombre]: IMPULSO [score] ([tier]) | Peldaño [0-3] | Recompensa: [resuelta / PENDIENTE incentive-bank]
  Draft de ask: [preparado, pendiente de aprobacion humana]
  Case study: [N/A / entrevista preparada / borrador pendiente sign-off]
  Handoff a ACQUISITION: [N/A / preparado, SLA vence en X]

RAMP ESPERADO: primera actividad 60-90d, revenue 3-6 meses — no evaluar como fallido antes.

INSTRUMENTACION: [ok / fallback / error]
```

## Notas de Zona

- Deteccion + scoring (Pasos 1-2): **Green** — formulaico, sin comunicacion externa
- Ubicacion en escalera + draft de ask (Paso 3): **Yellow** diseño / **Red** envio
- Case study (Paso 4): **Yellow** — requiere sign-off de marca + cliente antes de publicar
- Handoff a ACQUISITION (Paso 5): preparacion **Yellow**, cualquier contacto directo al referido es **Red**

Este comando **nunca** envia un mensaje, publica un asset, o entrega una recompensa. Todo output es un draft para aprobacion humana explicita (Articulo I.1 de la Constitucion — no graduable para este tipo de comunicacion externa).
