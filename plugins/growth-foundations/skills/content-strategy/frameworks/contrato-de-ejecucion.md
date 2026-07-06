# Contrato de Ejecución — Del Plan PENDIENTE al Loop que Corre

## Qué es esto (y qué no es)

Este framework **no es una metodología nueva de contenido**. Es la capa de ejecución que convierte el plan de `frameworks/pendiente-model.md` + la priorización de `frameworks/triangulo-ingresos.md` + el escalamiento de `frameworks/content-scaling-model.md` en un **loop que corre solo, semana tras semana**, con puntos de control humanos explícitos.

La pregunta que responde: *"Ya tengo el calendario de 12 semanas (Paso 4 del SKILL.md). ¿Quién lo ejecuta cada semana, cómo sé si está funcionando, y cuándo lo apago?"*

Se activa vía el comando `/distribuir` (`plugins/growth-foundations/commands/distribuir.md`). No dupliques aquí la metodología PENDIENTE ni el TRIÁNGULO — este documento asume que ambos ya existen para el cliente.

## 1. Cadencia semanal

Un turno del loop = **una semana**. El comando `/distribuir` corre una vez por semana (recomendado: lunes AM, antes de que arranque la semana de contenido).

Cada turno produce, como máximo:
- 1 pieza pilar (según el ratio 60/30/10 de `pendiente-model.md` — la mayoría de semanas es Green Circle)
- N piezas derivadas de esa pilar (ver Oleada 2)

No se acumulan turnos: si una semana no corre (gate cerrado), esa semana queda sin producción — no se compensa duplicando la semana siguiente. Esto evita que el loop "alucine" volumen para compensar y mantiene la relación 1 humano-toque = 1 turno.

## 2. El gate de calendario (calendar-touch gate)

**Regla dura**: si el humano no tocó el calendario de contenido esta semana, el productor NO corre.

- "Tocar el calendario" = commit/edit sobre el archivo de calendario del cliente (`clients/{{CLIENT_SLUG}}/content-strategy/calendar.md` o equivalente), o una confirmación explícita en la sesión de `/distribuir`.
- Si no hay toque: el comando reporta "Gate cerrado — no se detectó edición al calendario esta semana" y termina sin generar contenido ni gastar presupuesto.
- Justificación: el loop no reemplaza al estratega — amplifica su decisión semanal. Un loop que produce sin que nadie haya revisado el plan es la forma más rápida de generar contenido genérico y quemar presupuesto sin señal de negocio real [patrón FutureSearch/doneyli — dos-oleadas + gate humano].
- El gate es **Green zone** (verificación automática, sin fricción) pero su *consecuencia* (no correr) es incondicional — no hay override sin editar el calendario primero.

## 3. Producción de dos oleadas (two-wave production)

Patrón FutureSearch/doneyli citado en `_revenue-os/03-architecture.md` §3.1 (S2): el modelo caro crea, el modelo barato repurposa. Esto controla costo sin sacrificar la calidad de la pieza que más importa.

### Oleada 1 — Pieza pilar (modelo caro)

- Toma el siguiente tema en la cola de `templates/topic-priority-worksheet.md` (ya scoreado por TRIÁNGULO DE INGRESOS) y su nivel PENDIENTE asignado.
- Un modelo de razonamiento alto (el "caro") escribe la pieza completa: blog post, lead magnet, o case study — según el nivel (`patterns/content-difficulty-matrix.md` define tiempo/recursos por tipo).
- Esta es la única pieza por turno que pasa por research profundo, estructura, y voice-matching contra `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`.
- Costo objetivo: el grueso del presupuesto del turno (ver `os/governance/agentic-constitution.md` Art. VI — budget guards; per-run cap declarado en el comando).

### Oleada 2 — Formatos derivados (modelo barato)

- Un modelo económico toma la pieza pilar terminada y la **repurpose** (no la reescribe desde cero) a formatos derivados de menor esfuerzo:
  - 3-5 posts de LinkedIn/redes (extraídos de secciones de la pieza pilar)
  - 1 email/newsletter snippet
  - 1 carrusel o thread (hooks + puntos clave)
  - Copy corto para distribución paga si la pieza es Green Circle con tracción orgánica (`Canal 3: Paid Amplification` del SKILL.md)
- Regla: la Oleada 2 nunca inventa afirmaciones nuevas — solo reformatea contenido ya validado en la Oleada 1. Esto mantiene bajo el riesgo de alucinación en el modelo barato.
- Costo objetivo: fracción menor del presupuesto del turno (repurposing es barato por diseño).

## 4. Rúbrica de clasificación 1-5 (performance de canal)

Cada canal usado en el turno anterior se clasifica antes de decidir el próximo turno. Escala 1-5, aplicada por canal (no por pieza individual):

| Score | Criterio | Acción implícita |
|-------|----------|-------------------|
| **1** | Cero señal — sin clicks/opens/replies medibles tras 2+ piezas | Candidato a retiro (ver §5) |
| **2** | Señal mínima, por debajo del benchmark de `patterns/content-difficulty-matrix.md` para ese tipo de pieza | Observar 1 turno más, no invertir más esfuerzo |
| **3** | En línea con el benchmark esperado | Mantener cadencia actual |
| **4** | Por encima del benchmark — conversión o alcance notablemente mejor que el resto | Aumentar frecuencia el próximo turno |
| **5** | Canal ganador claro — señal fuerte y consistente en 2+ turnos consecutivos | Doblar apuesta: reasignar presupuesto/tiempo de otros canales de score ≤2 |

"Señal" = la métrica relevante al tipo de canal (opt-in rate para lead magnets, click-through para paid, reply-rate para partnerships, tráfico orgánico + tiempo en página para SEO — ver columnas de métricas en `pendiente-model.md` y `content-difficulty-matrix.md`).

## 5. Protocolo `learnings.md` auto-actualizable

Cada turno de `/distribuir` lee y reescribe el `learnings.md` del cliente (plantilla: `templates/learnings-distribucion.md`). El protocolo:

1. **Leer** el `learnings.md` existente (o crearlo desde la plantilla si es el primer turno).
2. **Registrar** el turno actual: piezas publicadas, canal por pieza, score 1-5 (§4), yield medido.
3. **Aplicar la regla de retiro**: un canal con score 1 (cero señal) durante **N=3 turnos consecutivos** se marca `RETIRADO` — el productor deja de asignarle piezas hasta que un humano lo reactive explícitamente en el calendario.
4. **Aplicar la regla de doble apuesta**: un canal con score 5 durante **2 turnos consecutivos** se marca `GANADOR` — el próximo turno le asigna la Oleada 2 completa (todos los formatos derivados apuntan a ese canal primero).
5. **Escribir hipótesis para el próximo ciclo**: 1-3 hipótesis accionables basadas en los patrones observados (ej. "Los Black Diamond con calculadora ROI generan 2x el opt-in de los que no la tienen — probar en las próximas 2 piezas BOFU").
6. El archivo es **append-only en el log de decisiones** (nunca se borra historial) pero la tabla de estado por canal se actualiza in-place.

N=3 es el default; el operador puede ajustarlo en `clients/{{CLIENT_SLUG}}/content-strategy/config.md` si el volumen de piezas por canal es muy bajo para tener 3 lecturas confiables en tiempo razonable.

## 6. Zonas de gobernanza (constitución)

Referencia: `os/governance/agentic-constitution.md`.

| Paso del loop | Zona | Modo |
|---|---|---|
| Gate de calendario | Green | Automático |
| Oleada 1 + Oleada 2 (producción) | Green | Automático, con budget guard (Art. VI) |
| Clasificación 1-5 | Green | Automático (regla, no juicio subjetivo) |
| Actualización de `learnings.md` | Green | Automático |
| **Publicación / envío** | **Red** | **HITL obligatorio** — nunca automático (Art. I.1). El loop abre cola de revisión, no publica. |

El loop entero es Green/HOTL hasta el borde de publicación, que es Red/HITL permanente — no gradúa nunca a autónomo, por diseño (Art. I.1, comunicación externa).

## Ver también

- `pendiente-model.md` — niveles de dificultad de contenido (no repetido aquí)
- `triangulo-ingresos.md` — priorización de temas por revenue (no repetido aquí)
- `content-scaling-model.md` — modelo de 3 etapas de escalamiento (Oleada 1 = Etapa 2 de ese modelo)
- `../templates/learnings-distribucion.md` — plantilla ejecutable del `learnings.md`
- `../../../commands/distribuir.md` — comando que orquesta este contrato
- `_revenue-os/03-architecture.md` §3.1 (F-ACQ) — diseño del loop a nivel Revenue OS
