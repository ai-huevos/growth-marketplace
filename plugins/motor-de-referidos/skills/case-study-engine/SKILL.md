---
name: case-study-engine
description: Use when un cliente completa un hito de ESCALAR y es candidato a case study, preparando la entrevista de captura, o redactando un case study publicable. Activates for "case study engine", "entrevista de case study", "testimonio de cliente", "capturar resultado de cliente", "case study publicable", "video testimonial".
version: 1.0.0
---

# Case Study Engine

Captura entregables de prueba social (case studies, testimonios) en el momento correcto del ciclo de vida del cliente — despues de uso probado, no despues de la firma. Zona **Yellow**: el agente prepara la entrevista y redacta el borrador, pero la publicacion requiere sign-off de marca y del cliente (Articulo I.4 de la Constitucion).

## Trigger: Finalizacion de Hito en ESCALAR

Este skill se activa cuando un cliente completa un milestone dentro de la fase ESCALAR (ver `os/phases/escalar.md`) — no en cualquier punto del engagement. Un case study capturado antes de que el resultado sea real es, en el mejor caso, debil, y en el peor, una promesa que la Constitucion prohibe (Articulo I.3: no presentar resultados no verificados como hechos).

## Reglas de Captura (research-backed)

> "Los case studies/testimonios se capturan solo despues del despliegue y uso probado, idealmente preguntados por una parte no-vendedora, con video capturado rapido antes de que los detalles se pierdan." [research: napierb2b]

| Regla | Por que |
|---|---|
| **Despues de uso probado**, no despues de la venta o el kickoff | Un resultado sin evidencia de uso real es una promesa, no un case study |
| **Pregunta hecha por una parte no-vendedora** | El AE/CSM que vendio tiene sesgo de confirmacion; alguien neutral (marketing, un tercero, o el propio agente preparando preguntas para que el founder las haga) obtiene respuestas mas honestas y citables |
| **Video/captura rapida** | Los detalles especificos (numeros, citas exactas) se pierden si se espera semanas; capturar cerca del momento del hito |

## Distinto de la Captura VoC de Ventas — No Duplicar

`os/skills/sales-orchestrator` ya captura lenguaje de prospectos (VoC) en `clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md`, alimentado por el comando `/follow-up`. **Ese banco es de prospectos en el ciclo de venta** (pre-cierre, lenguaje de dolor/objeciones). `case-study-engine` captura **clientes ya entregados**, post-resultado, para prueba social publicable — un proposito distinto con una fuente de dato distinta.

| | VoC (sales-orchestrator) | case-study-engine (este skill) |
|---|---|---|
| Momento | Durante el ciclo de venta (discovery, follow-up) | Despues de un hito de ESCALAR |
| Quien habla | El prospecto, en llamadas de venta | El cliente, en una entrevista dedicada |
| Proposito | Afinar mensajes de prospecting | Generar prueba social publicable |
| Output | `prospect-language-bank.md` | `case-study.md` (este skill) |

Si un case study necesita lenguaje de venta original (como describia su dolor antes de comprar), leer el `prospect-language-bank.md` o el `business-context.md` del deal original **como referencia**, no reemplazarlo.

## Flujo de Captura

1. **Deteccion del trigger** — `referral-advocacy-agent` (o el humano) marca que un cliente completo un hito de ESCALAR elegible
2. **Preparacion de entrevista** — usar `templates/entrevista-case-study.md` para generar las preguntas, asignadas idealmente a una parte no-vendedora
3. **Conduccion de la entrevista** — **Red/HITL**: un humano conduce la entrevista real; el agente solo prepara preguntas y estructura
4. **Redaccion del borrador** — usar `templates/case-study.md` para estructurar el resultado en un formato publicable
5. **Sign-off** — Articulo I.4: revision de marca (`clients/{{CLIENT_SLUG}}/brand-config/brand-qa-checklist.md`) + aprobacion explicita del cliente antes de cualquier publicacion externa

## Conexiones con otros skills

- **referral-ladder** → el Peldaño 1 (1 referido) usa el output de este skill como recompensa ("feature en case study")
- **advocacy-scoring** → un cliente con IMPULSO alto y milestone reciente es doble candidato: a referido Y a case study
- **sales-orchestrator (`os/skills/`)** → fuente de contexto original del deal (business-context.md), nunca se duplica el VoC

## Output Esperado

1. **Guia de entrevista poblada** (`entrevista-case-study.md`) lista para que una parte no-vendedora la conduzca
2. **Borrador de case study** (`case-study.md`) con resultado cuantificado + cita textual del cliente
3. **Checklist de sign-off** pendiente: marca + cliente, antes de cualquier publicacion
