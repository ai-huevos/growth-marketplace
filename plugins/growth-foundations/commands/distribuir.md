---
description: Orquesta un turno semanal del loop de distribución de contenido (gate de calendario, producción en dos oleadas, clasificación 1-5, cola de revisión, learnings.md). Nunca publica ni envía — abre una cola de borradores para aprobación humana.
argument-hint: [cliente] (opcional — usa clients/{{CLIENT_SLUG}}/ si se omite y solo hay un cliente instalado)
allowed-tools: [Read, Write, Glob, Grep]
---

# Distribuir — Loop Semanal de Distribución de Contenido

El usuario quiere correr un turno del loop de distribución de contenido para: $ARGUMENTS

**Este comando NUNCA publica ni envía contenido.** Publicar es siempre humano — zona Red por diseño (`os/governance/agentic-constitution.md` Art. I.1). El comando produce borradores, los clasifica, y los deja en una cola de revisión.

**Nota de scheduling**: este comando corre como **Desktop task**, no como Cloud Routine. El loop necesita leer archivos locales del cliente (`clients/{{CLIENT_SLUG}}/content-strategy/calendar.md`, `learnings.md`, `brand-config/`) — las Cloud Routines no pueden leer archivos locales (constraint H8, `_revenue-os/03-architecture.md` §1.1). Si se necesita correr desde la nube, el estado crítico del loop debe primero mirrorearse a Supabase; hasta entonces, este comando asume ejecución local programada (ej. cron de Desktop, o invocación manual semanal).

**Modo de falla (config de cliente)**: si `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` no existe, detente y pide al operador que configure `clients/{{CLIENT_SLUG}}/` antes de producir contenido (la Oleada 1 necesita voice-matching).

## Instrucciones

Ejecutar el Contrato de Ejecución completo: `plugins/growth-foundations/skills/content-strategy/frameworks/contrato-de-ejecucion.md`. Este comando es la orquestación operativa de ese contrato — no dupliques aquí la metodología, solo el flujo de pasos.

### Paso 0: Ubicar el cliente y el estado del loop

1. Resolver `{{CLIENT_SLUG}}` de `$ARGUMENTS` o de `clients/` si hay un único cliente instalado.
2. Leer (o crear desde plantilla si es el primer turno):
   - `clients/{{CLIENT_SLUG}}/content-strategy/calendar.md` (calendario de 12 semanas del SKILL.md content-strategy, Paso 4)
   - `clients/{{CLIENT_SLUG}}/content-strategy/learnings.md` (si no existe: crear desde `plugins/growth-foundations/skills/content-strategy/templates/learnings-distribucion.md`)
   - `clients/{{CLIENT_SLUG}}/content-strategy/topic-priority-worksheet.md` (cola de temas del TRIÁNGULO DE INGRESOS)

### Paso 1: Gate de calendario

Aplicar `frameworks/contrato-de-ejecucion.md` §2.

Verificar si el calendario fue editado/tocado desde el último turno registrado en `learnings.md` §4 (comparar fecha de última modificación del archivo o pedir confirmación explícita al operador si no hay forma de verificarlo automáticamente).

**Si el gate está CERRADO** (no hubo toque humano):
- Registrar en `learnings.md` §4: `Gate de calendario: CERRADO — turno saltado`
- Reportar al usuario: "El calendario no fue editado esta semana. El loop no produce contenido este turno (gate cerrado). Edita el calendario para reactivar el próximo turno."
- **Detener aquí.** No ejecutar Paso 2 en adelante, no gastar presupuesto.

**Si el gate está ABIERTO**: continuar al Paso 2.

### Paso 2: Producción en dos oleadas

Aplicar `frameworks/contrato-de-ejecucion.md` §3.

**Oleada 1 (modelo caro)**: tomar el siguiente tema de mayor score en `topic-priority-worksheet.md`, con su nivel PENDIENTE asignado. Escribir la pieza pilar completa, aplicando:
- `plugins/growth-foundations/skills/content-strategy/patterns/content-difficulty-matrix.md` (formato + recursos esperados por nivel)
- `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` (voice-matching)
- Template correspondiente si aplica (`templates/aida-blog-post-template.md` para blog posts)

**Oleada 2 (modelo barato)**: repurpose la pieza de Oleada 1 a formatos derivados (posts de redes, email snippet, carrusel/thread). Nunca inventar afirmaciones nuevas — solo reformatear.

Guardar ambas oleadas como borradores (no publicar):
`clients/{{CLIENT_SLUG}}/content-queue/{{FECHA}}-{{slug-tema}}/`
- `pilar.md` (Oleada 1)
- `derivados/{{formato}}.md` (uno por formato de Oleada 2)
- `meta.md` (canal(es) destino, nivel PENDIENTE, tema, score del TRIÁNGULO, fecha)

### Paso 3: Clasificación 1-5 de canales (turno anterior)

Aplicar `frameworks/contrato-de-ejecucion.md` §4. Usando las señales disponibles del turno anterior (si las hay — un cliente en su primer turno no tiene señal aún, saltar este paso y anotarlo en `learnings.md`), clasificar cada canal activo 1-5 y actualizar su estado (ACTIVO / GANADOR / OBSERVAR / RETIRADO) siguiendo las reglas de §5 del contrato (N=3 para retiro, 2 turnos para ganador).

### Paso 4: Abrir cola de revisión

La cola de revisión ES el output del loop — no un paso opcional. Ubicación: `clients/{{CLIENT_SLUG}}/content-queue/{{FECHA}}-{{slug-tema}}/` (creada en Paso 2).

Si el repo del cliente usa PR-as-approval (git-native), el operador puede convertir esta carpeta en un PR; si no, la carpeta de borradores en sí ES la cola — el humano revisa, edita, y decide qué se publica y por qué canal. El comando no marca nada como "aprobado" — eso lo hace el humano al mover/confirmar la pieza fuera de la cola.

### Paso 5: Actualizar `learnings.md`

Aplicar `frameworks/contrato-de-ejecucion.md` §5 usando `templates/learnings-distribucion.md`:
1. Registrar el turno en §4 del template (gate, oleadas, piezas generadas).
2. Actualizar la tabla de estado por canal (§1) con los scores del Paso 3.
3. Aplicar reglas de retiro/doble-apuesta.
4. Añadir entrada al log de decisiones (§2) si hubo un cambio de estado de canal.
5. Escribir/actualizar hasta 3 hipótesis para el próximo ciclo (§3).

### Paso 6: Instrumentación (Revenue OS)

Después de que el operador apruebe piezas de la cola de revisión (Paso 4) — o al cierre del turno, contando las piezas que quedaron aprobadas — registrar el conteo de piezas publicadas en `stage_transitions` (fase ATRAER, sin avance de fase todavía) y un score de performance de canal en `execution_scores`.

**Mecanismo**: `execute_sql` (Supabase MCP) si está disponible; si no, fallback `psql "$DATABASE_URL" -c "..."` (local, puerto 54332); si ninguno está disponible, anexar los INSERT a `clients/{{CLIENT_SLUG}}/pending-metrics.sql` (nunca perder el dato). `org_id` se resuelve de `organizations` para el cliente instalado.

```sql
insert into public.stage_transitions
  (org_id, from_stage, to_stage, headline_metric_key, metric_value, scale)
values (
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'ATRAER', 'ATRAER', 'content_published', {{PIEZAS_APROBADAS}}, 'count'
);

with log as (
  insert into public.ai_execution_logs (org_id, profile_id, skill_slug, model_id)
  values (
    (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
    '{{PROFILE_ID}}', 'distribuir', '{{MODEL_ID}}'
  ) returning id
)
insert into public.execution_scores (execution_id, org_id, score_key, score_value, source, comment)
select log.id,
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'channel_score_avg', {{PROMEDIO_SCORES_1_5}}, 'rule', '{{CANALES_RETIRADOS_O_GANADORES_ESTE_TURNO}}'
from log;
```

No bloquea el flujo: si la escritura falla, continuar y avisar en el resumen del Paso 7.

### Paso 7: Resumen del turno

Presentar al usuario:

```
LOOP DE DISTRIBUCIÓN — {{CLIENT_SLUG}} — Turno {{N}}

GATE DE CALENDARIO: [ABIERTO / CERRADO]

OLEADA 1 (pilar): [tema] — [nivel PENDIENTE] — en cola de revisión
OLEADA 2 (derivados): [N formatos generados]

CANALES:
- [canal]: score [1-5] — estado [ACTIVO/GANADOR/OBSERVAR/RETIRADO]
(repetir por canal)

COLA DE REVISIÓN: clients/{{CLIENT_SLUG}}/content-queue/{{FECHA}}-{{slug}}/
LEARNINGS ACTUALIZADO: clients/{{CLIENT_SLUG}}/content-strategy/learnings.md

PRÓXIMO TURNO: [resumen de qué cambia — canales retirados/doblados, hipótesis a probar]

RECORDATORIO: nada se publicó automáticamente. Revisa la cola antes de distribuir.
```

## Presupuesto

Declarar un cap por turno (`os/governance/agentic-constitution.md` Art. VI, budget guards). Si no hay override del operador, usar el default de `BUDGET_SESSION_LIMIT_USD` del entorno instalado. Si el turno excede el cap antes de completar ambas oleadas, detener después de Oleada 1 (la pieza pilar es más valiosa que los derivados) y anotarlo en el resumen.
