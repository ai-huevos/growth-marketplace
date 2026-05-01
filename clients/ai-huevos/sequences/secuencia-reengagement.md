---
client: AI Huevos
document: secuencia-reengagement
version: 1.0
status: DRAFT
date: 2026-02-22
skill-ref: motor-de-ofertas/alma (IMAN)
template-ref: A6 (Re-engagement Sequence)
trigger: 30 days no email opens
sequence-length: 3 emails
spacing: Day 0, +7, +14
exit-action: no open on RE-3 → clean from list
---

# Secuencia Re-engagement — AI Huevos

> **Skill:** ALMA (motor-de-ofertas) — IMAN Re-engagement Sequence
> **Template:** `secuencia-reengagement.md` v1.0
> **Client:** AI Huevos
> **Status:** DRAFT — pendiente validacion con fundadores
> **Date:** 2026-02-22
> **Prerequisite:** Suscriptor completo ORIGEN, lleva 30+ dias sin abrir emails de PULSAR
> **Brand Voice:** `clients/ai-huevos/brand-config/brand-voice.md`
> **ACF Profile:** `clients/ai-huevos/brand-config/acf-profile.md`

---

## Filosofia de la Secuencia

Esta secuencia no es un ultimo intento desesperado. Es un filtro de calidad.

El objetivo no es "recuperar" a todos. Es separar a quienes perdieron interes real de quienes simplemente se distrajeron. Los que vuelven, valen mas que 100 leads nuevos. Los que no vuelven, nos liberan capacidad.

**Principios:**

1. **Dignidad, no desesperacion.** Nunca suplicamos. Mostramos que seguimos construyendo cosas interesantes.
2. **Valor antes de pedir.** RE-1 no tiene CTA. Es un regalo sin condiciones.
3. **Urgencia real, no fabricada.** RE-3 ofrece algo que genuinamente se acaba — no un countdown falso.
4. **La lista limpia gana.** Limpiar contactos que no abren mejora deliverability, open rates y la salud de todo el funnel.

---

## Arco Emocional de la Secuencia

```
Email RE-1          Email RE-2          Email RE-3
Curiosidad       →  FOMO            →  Decision
"Seguimos          "Mira lo que        "Ultima
construyendo..."    paso..."            oportunidad."

Valor puro          Prueba social       Urgencia natural
(sin CTA)           fresca              (cierre limpio)
```

**Spacing:** RE-1 en dia 0 (trigger: 30 dias sin opens). RE-2 a los +7 dias. RE-3 a los +14 dias.

---

## Email RE-1: "Seguimos aqui. Y seguimos construyendo rieles."

**Enviar:** Dia 0 — automatico al cumplir 30 dias sin abrir ningun email

### Subject Line

**A:** Algo cambio en como construimos AI-OS (no querias perdertelo)
**B:** Seguimos aqui. Y seguimos construyendo rieles.

### Preview Text

No venimos a pedirte nada. Venimos a contarte algo.

### Body

{{nombre}},

Hace un mes que no nos lees. Esta bien. Las bandejas de entrada son un campo de batalla.

Pero pasan cosas. Y esta te habria interesado.

La semana pasada terminamos de mapear algo que llevabamos meses investigando: **el patron que separa a las empresas que adoptan AI de las que lo abandonan.**

No es presupuesto. No es tecnologia. No es tamano de equipo.

Es una variable que nadie mide.

**Flujo de informacion real** — no el que aparece en el organigrama. El que pasa por WhatsApp a las 11pm. El que vive en la cabeza de 3 personas. El que se pierde entre Excel y el ERP.

Las empresas donde la informacion fluye adoptan AI en semanas. Las empresas donde la informacion esta atrapada gastan millones y el equipo sigue en Excel.

Simple. Obvio en retrospectiva. Invisible cuando estas adentro.

Eso es lo que mapeamos con arqueologia organizacional. Y es lo que separa un AI-OS que funciona de un chatbot que nadie abre despues del mes 1.

Solo queriamos que lo supieras.

— KAI

*La energia esta. Nosotros construimos los paneles.*

### CTA

Ninguno. Cero links. Cero botones. Este email es valor puro.

### P.S.

P.S. Si tienes 2 minutos de curiosidad, observa tu WhatsApp de trabajo. Cuenta cuantos mensajes de hoy son informacion operativa que deberia estar en un sistema. Si son mas de 10, ya sabes donde esta la energia atrapada.

### Notas de Ejecucion

- **Palabras:** ~210
- **Arco GOLPE:** GOLPE (algo cambio, te lo perdiste) → DOLOR (bandejas de entrada saturadas, informacion atrapada) → PUENTE (patron descubierto, arqueologia organizacional) → PRUEBA (implicita — el ejercicio del P.S.) → ACCION (ninguna — valor puro)
- **Voz:** 60% KAI combinada. Tono: generoso, no necesitado. "Solo queriamos que lo supieras."
- **Objetivo estrategico:** Reactivar curiosidad sin pedir nada. El suscriptor debe pensar: "Me estoy perdiendo cosas interesantes." La ausencia de CTA es deliberada — rompe el patron de "todos me quieren vender algo."
- **Por que funciona:** El suscriptor espera un "te extranamos" generico. Recibe un insight que puede usar HOY. Eso recalibra su percepcion de KAI.
- **Defecto mostrado:** Intensidad obsesiva — "llevabamos meses investigando" — KAI no puede dejar de construir.

---

### >> Pausa: 7 dias <<

El email RE-1 trabaja en la cabeza del suscriptor. Si abre, vuelve a la secuencia PULSAR — ya demostro interes. Si no abre, RE-2 sube la presion con resultados concretos que se esta perdiendo.

---

## Email RE-2: "Finkargo acaba de cruzar un numero que no esperabamos"

**Enviar:** 7 dias despues de RE-1

### Subject Line

**A:** $15M. Ese es el numero nuevo de Finkargo.
**B:** Un dato de Finkargo que no conocias (y que cambia la ecuacion)

### Preview Text

Cuando empezamos eran $650M en transacciones. Ahora hay un numero mas grande.

### Body

{{nombre}},

Cuando contamos la historia de Finkargo, siempre hablamos de los mismos numeros: $650M en transacciones. 110 procesos automatizados. 45 minutos a 3 minutos.

Pero hay un numero que no habiamos compartido hasta ahora.

**$15M en ahorros ejecutados.**

No estimados. No proyectados. Ejecutados.

Finkargo procesa pagos logisticos en LATAM. Cuando llegamos, su equipo conciliaba transacciones a mano. Habian probado 2 vendors. Uno entrego un dashboard que nadie abrio despues del mes 1. Otro automatizo un proceso y rompio 3.

Estaban a punto de contratar 15 personas mas para tapar los huecos.

Nosotros mapeamos 7 puntos de friccion donde los datos se perdian, se duplicaban o se transformaban a mano. Construimos rieles sobre sus sistemas existentes. No reemplazamos nada — conectamos todo.

**Los numeros completos:**

- **$15M** en ahorros ejecutados
- **428x** ROI ($35K de inversion)
- **45 min → 3 min** por transaccion
- **110+** procesos automatizados
- **3+ anos** de relacion continua

El equipo de Finkargo penso que eramos 20 personas. Eramos 4.

Y seguimos ahi. 3 anos despues.

Eso es lo que pasa cuando alguien se queda.

— KAI

*Nos quedamos.*

### CTA

Suave: "Mira el caso completo de Finkargo aqui: {{link-caso-estudio}}"

### P.S.

P.S. Roberto Mendez, COO de Finkargo, lo dijo mejor que nosotros: "Llegaron con una pregunta, no con un PowerPoint. Dos semanas despues ya sabian mas de nuestra operacion que gente que llevaba anos aqui."

### Notas de Ejecucion

- **Palabras:** ~260
- **Arco GOLPE:** GOLPE ($15M — numero nuevo, no el que ya conocian) → DOLOR (2 vendors fallidos, 15 contrataciones evitadas) → PUENTE (arqueologia + rieles + "nos quedamos") → PRUEBA (numeros concretos + testimonio) → ACCION (link a caso completo)
- **Parabola ACF:** #3 — Finkargo: $650M (version actualizada con $15M y 428x ROI)
- **Voz:** 60% KAI combinada. Datos hablan solos. El testimonio de Roberto cierra en el P.S.
- **Objetivo estrategico:** FOMO a traves de resultados. El suscriptor debe pensar: "Esta gente sigue produciendo resultados y yo no estoy al dia." El numero de $15M es nuevo — no es el mismo email de siempre.
- **Por que funciona:** Prueba social fresca rompe la inercia. No es un "te extranamos" — es un "mira lo que paso mientras no estabas." La diferencia es poder vs. necesidad.
- **Defecto mostrado:** Impaciencia con el status quo — los numeros hablan por si solos, KAI no necesita decorarlos.

---

### >> Pausa: 7 dias <<

Si abrio RE-2, vuelve a PULSAR. Si no abrio, RE-3 es el ultimo intento — con urgencia natural y una oferta que genuinamente se acaba.

---

## Email RE-3: "Ultima sesion de diagnostico este trimestre"

**Enviar:** 14 dias despues de RE-1 (7 dias despues de RE-2)

### Subject Line

**A:** Cierro agenda de diagnosticos este viernes. Queria avisarte.
**B:** Ultima sesion de arqueologia organizacional del trimestre (5 slots)

### Preview Text

Despues de esto, la siguiente ventana es en 90 dias.

### Body

{{nombre}},

Te escribo por ultima vez sobre esto.

Este viernes cierro la agenda de **sesiones de diagnostico de energia AI** del trimestre. Quedan 5 slots.

Son 30 minutos. Gratis. Sin compromiso. Sin PowerPoint.

**Lo que hacemos en esos 30 minutos:**

1. Mapeamos como fluye la informacion en tu empresa — la version real, no la del organigrama
2. Identificamos los 2-3 puntos donde la energia AI se esta fugando
3. Te decimos si tiene sentido hacer un Sprint de Descubrimiento — y si no tiene sentido, te lo decimos tambien

Es lo mismo que hicimos con Finkargo antes de los $15M en ahorros. Es lo mismo que hacemos con cada cliente antes de construir un solo riel.

**¿Por que cierro agenda?** Porque cuando tenemos Sprints activos y clientes en Build, no tenemos ancho de banda para diagnosticos nuevos. Somos 4 personas. No hacemos parches. Asi que abrimos ventanas trimestrales.

La proxima ventana es en 90 dias.

Si en algun momento pensaste "deberia hablar con esta gente" — este es el momento.

**[AGENDAR MI DIAGNOSTICO →]** {{link-booking}}

Si no, esta bien. Seguiremos construyendo. Y si algun dia necesitas rieles, sabes donde encontrarnos.

— KAI

*Construido contigo. Probado con tus datos.*

### CTA

Directo: **[AGENDAR MI DIAGNOSTICO →]** — un solo link a Cal.com / pagina de booking.

### P.S.

P.S. Este es el ultimo email que te enviamos por un tiempo. Si no te interesa lo que hacemos, no te vamos a llenar la bandeja. Preferimos una lista de 100 personas que leen a 1,000 que ignoran. Calidad > cantidad. Siempre.

### Notas de Ejecucion

- **Palabras:** ~250
- **Arco GOLPE:** GOLPE (cierro agenda este viernes) → DOLOR (la siguiente ventana es en 90 dias) → PUENTE (30 min, gratis, sin compromiso — lo mismo que hicimos con Finkargo) → PRUEBA (referencia a $15M, somos 4 personas) → ACCION (booking link directo)
- **Voz:** 60% KAI combinada. Tono: directo, respetuoso, sin desesperacion. "Si no, esta bien."
- **Objetivo estrategico:** Urgencia natural. La ventana trimestral es REAL — KAI tiene capacidad limitada. No es un countdown artificial. El P.S. establece que este es el ultimo email — eso en si mismo es una forma de urgencia ("si no actuo ahora, desaparezco de su radar").
- **Por que funciona:** La urgencia esta justificada (equipo de 4, capacidad real limitada). El suscriptor sabe que es el ultimo email — no hay "te escribo una mas." Eso fuerza una decision: actuar o soltar. Ambas opciones estan bien para KAI.
- **Defecto mostrado:** Intensidad obsesiva — "Somos 4 personas. No hacemos parches." La limitacion de capacidad es el defecto convertido en feature.
- **Tono del P.S.:** El P.S. es la despedida. No es pasivo-agresivo. Es honesto. "Preferimos 100 que leen a 1,000 que ignoran." Eso refuerza la marca.

---

## Despues de la Secuencia Re-engagement

| Escenario | Accion | Tag en Kit |
|-----------|--------|-----------|
| **Abrio RE-1** | Vuelve a PULSAR inmediatamente. No recibe RE-2 ni RE-3. | `reengaged`, remove `cold-30d` |
| **Abrio RE-2** | Vuelve a PULSAR inmediatamente. No recibe RE-3. | `reengaged`, remove `cold-30d` |
| **Abrio RE-3** | Vuelve a PULSAR. Si hizo click en booking, crear deal en CRM. | `reengaged`, remove `cold-30d` |
| **Abrio RE-3 + agendo** | Secuencia pre-Sprint. Tratamiento VIP (lead reactivado = alta intencion). | `reengaged`, `sprint-booked`, remove `cold-30d` |
| **No abrio ninguno** | Remover de lista activa. Tag como `cleaned-30d`. | `cleaned-30d`, remove de segmento activo |

### Regla de oro post-limpieza

> Los contactos `cleaned-30d` NO se eliminan del CRM. Se marcan como inactivos. Si en el futuro completan un nuevo quiz, regresan al funnel como leads frescos — con la ventaja de que ya conocen a KAI.

---

## Metricas Objetivo

| Email | Nombre | Open Rate Target | Click Rate Target | Objetivo Emocional |
|-------|--------|-----------------|-------------------|-------------------|
| RE-1 | "Seguimos construyendo rieles" | >15% | N/A (sin CTA) | Curiosidad — "Me estoy perdiendo algo" |
| RE-2 | "Finkargo: $15M" | >12% | 1-2% (link caso) | FOMO — "Estos tipos siguen produciendo" |
| RE-3 | "Ultima sesion" | >10% | 2-4% (booking link) | Decision — "Ahora o nunca" |

**Senal de exito:** Si RE-1 abre >15%, la lista tiene suscriptores rescatables. Si RE-3 abre <5%, la lista estaba muerta — la limpieza era inevitable.

**Benchmark de re-engagement:** Tasa de recuperacion saludable = 10-20% de la cohorte cold. Si de 100 contactos cold recuperamos 10-20, el sistema funciona.

---

## Reglas de Ejecucion

### Timing

| Parametro | Valor |
|-----------|-------|
| **Trigger de entrada** | 30 dias consecutivos sin abrir ningun email (PULSAR o ORIGEN) |
| **Dia de envio RE-1** | El dia que se cumple el trigger (automatico) |
| **Dia de envio RE-2** | 7 dias despues de RE-1 |
| **Dia de envio RE-3** | 14 dias despues de RE-1 (7 dias despues de RE-2) |
| **Hora de envio** | 7:00-9:00 AM hora local del suscriptor (martes o miercoles preferido) |
| **Ventana total** | 14 dias desde RE-1 hasta RE-3 |
| **Cooldown post-limpieza** | Contacto limpiado no recibe emails por minimo 90 dias |

### Automatizacion en Kit (ConvertKit)

#### Configuracion de segmentos

| Segmento | Criterio | Proposito |
|----------|----------|-----------|
| `cold-30d` | 0 emails abiertos en 30 dias + ha recibido 5+ emails | Audiencia target de re-engagement |
| `re-engagement-active` | Esta recibiendo la secuencia RE-1/RE-2/RE-3 | Excluir de PULSAR mientras dure |
| `reengaged` | Abrio al menos 1 email de la secuencia RE | Volvio a PULSAR |
| `cleaned-30d` | No abrio ningun email de RE-1, RE-2, RE-3 | Removido de lista activa |

#### Flujo de automatizacion

```
TRIGGER: Suscriptor entra a segmento "cold-30d"
  │
  ├─ ACCION: Mover a segmento "re-engagement-active"
  ├─ ACCION: Remover de secuencia PULSAR (pausar envios regulares)
  │
  ├─ ENVIAR: RE-1
  │    │
  │    ├─ SI ABRE → Tag "reengaged" → Remover de "re-engagement-active"
  │    │            → Remover de "cold-30d" → Regresar a PULSAR
  │    │
  │    └─ NO ABRE (7 dias) → ENVIAR: RE-2
  │         │
  │         ├─ SI ABRE → Tag "reengaged" → Remover de "re-engagement-active"
  │         │            → Remover de "cold-30d" → Regresar a PULSAR
  │         │
  │         └─ NO ABRE (7 dias) → ENVIAR: RE-3
  │              │
  │              ├─ SI ABRE → Tag "reengaged" → Remover de "re-engagement-active"
  │              │            → Remover de "cold-30d" → Regresar a PULSAR
  │              │
  │              ├─ SI CLICK en booking → Tag "reengaged" + "sprint-booked"
  │              │                        → Crear deal en Pipedrive (Zapier)
  │              │                        → Secuencia pre-Sprint
  │              │
  │              └─ NO ABRE (7 dias) → Tag "cleaned-30d"
  │                                   → Remover de "re-engagement-active"
  │                                   → Remover de TODAS las secuencias activas
  │                                   → Marcar como "cold" en Pipedrive (Zapier)
```

#### Exclusiones

- **No enviar re-engagement a:** Clientes activos (segmento `customer`), leads con Sprint activo, contactos que respondieron emails en los ultimos 30 dias (reply ≠ open — pueden haber respondido sin que el pixel registre apertura).
- **No enviar RE si:** El contacto se suscribio hace menos de 45 dias (darle tiempo de completar ORIGEN + 2 semanas de PULSAR antes de considerarlo cold).

### Tagging y Segmentacion

| Tag | Cuando se aplica | Cuando se remueve |
|-----|-----------------|------------------|
| `cold-30d` | Automatico: 30 dias sin opens | Cuando abre cualquier RE o cuando se limpia |
| `re-engagement-active` | Al entrar a la secuencia | Al salir (reengaged o cleaned) |
| `reengaged` | Al abrir cualquier email RE | Nunca — tag permanente para tracking |
| `cleaned-30d` | Al no abrir RE-3 despues de 7 dias | Si completa un nuevo quiz en el futuro |
| `sprint-booked` | Al hacer click en booking de RE-3 | Al completar Sprint |

### Higiene de Lista

| Accion | Frecuencia | Responsable |
|--------|-----------|-------------|
| Revisar tamano del segmento `cold-30d` | Semanal | Automatico (dashboard Kit) |
| Ejecutar limpieza post-RE-3 | Automatico (7 dias despues de RE-3) | Kit automation |
| Auditar tasa de recuperacion (reengaged / cold-30d) | Mensual | Marketing |
| Verificar que `cleaned-30d` no reciben emails | Mensual | Marketing |
| Revisar contactos `cleaned-30d` que vuelven via quiz | Trimestral | Ops |
| Reportar metricas de re-engagement a founders | Mensual | Marketing |

### Reglas de Deliverability

1. **Limpiar mejora todo.** Cada contacto que no abre baja el sender score. Limpiar 100 contactos muertos puede subir el open rate general 2-5%.
2. **Nunca enviar a cleaned sin re-opt-in.** Si un contacto `cleaned-30d` quiere volver, debe completar el quiz de nuevo. No hay "re-suscripcion" manual.
3. **Monitorear bounce rate de RE.** Si RE-1 tiene bounce rate >5%, hay un problema de calidad de lista anterior al re-engagement. Investigar fuente de leads.
4. **SPF, DKIM, DMARC.** Antes de enviar cualquier secuencia, verificar que kaipartners.com tiene los 3 configurados. Sin esto, nada funciona.

---

## Checklist de Validacion Pre-Envio

- [ ] Subject lines A/B configurados para los 3 emails
- [ ] Preview text se lee bien en mobile (max 90 caracteres)
- [ ] RE-1 no tiene ningun link ni CTA (verificar)
- [ ] RE-2 tiene link a caso Finkargo funcional
- [ ] RE-3 tiene link de booking funcional (Cal.com)
- [ ] Automatizacion de segmentos configurada en Kit
- [ ] Reglas de exclusion activas (customers, sprints activos, <45 dias)
- [ ] Zapier/webhook para crear deal en Pipedrive cuando click en RE-3
- [ ] Ambos fundadores leyeron los 3 emails y confirman: "Esto suena como nosotros"
- [ ] Brand voice QA: cero terminos prohibidos, vocabulario KAI presente
- [ ] No hay referencias a huevos, AI Huevos, ni terminos de la era anterior
- [ ] Numeros de Finkargo verificados y actualizados ($15M, 428x, 110+)
- [ ] Hora de envio configurada para zona horaria del suscriptor
- [ ] Secuencia de salida (reengaged → PULSAR) probada end-to-end

---

## Conexiones con Skills del Marketplace

| Skill Invocado | Template | Como se Uso |
|----------------|----------|-------------|
| **ALMA / IMAN** (motor-de-ofertas) | `secuencia-reengagement.md` | Estructura de 3 emails, arco emocional, timing de re-engagement |
| **ACF** (motor-de-ofertas) | `acf-worksheet.md` | Defectos mostrados, voz, parabola Finkargo adaptada |
| **ESCALA** (motor-de-ofertas) | Value ladder reference | Diagnostico de energia = Tier 1 (bait) como CTA de RE-3 |
| **Brand Voice** (client config) | `brand-voice.md` | GOLPE arc, vocabulario de marca, terminos prohibidos |
| **Finkargo** (case study) | `finkargo.md` | $15M, 428x ROI, testimonio Roberto como prueba social fresca |
| **FLUJO** (motor-de-ofertas) | Funnel blueprint reference | Posicion de RE en el sistema: post-PULSAR, pre-limpieza |

---

## Nota sobre Actualizacion de Datos

Los emails RE-2 y RE-3 dependen de **datos frescos**. Cada trimestre:

1. Actualizar la metrica de Finkargo en RE-2 si hay nuevos numeros disponibles
2. Verificar que la oferta de RE-3 (sesion de diagnostico) sigue vigente
3. Ajustar los 5 slots disponibles segun capacidad real del equipo
4. Si hay un nuevo cliente con resultados publicables, considerar rotar RE-2 entre Finkargo y el caso nuevo

> La frescura de los datos es lo que separa un re-engagement que funciona de un email automatico que huele a automatico.
