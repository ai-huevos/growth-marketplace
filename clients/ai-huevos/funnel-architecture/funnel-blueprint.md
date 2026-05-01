---
client: ai-huevos
document: master-funnel-blueprint
version: 1.0
status: DRAFT
date: 2026-02-22
author: GrowthOS / motor-de-ofertas (FLUJO 7-Phase)
skills-used:
  - motor-de-ofertas/flujo
  - motor-de-ofertas/escala
  - motor-de-ofertas/alma
  - growth-foundations/icp
  - growth-foundations/content-strategy
  - play-to-win/product-marketing
  - play-to-win/customer-journey
cross-references:
  - clients/ai-huevos/offer-architecture/escala-value-ladder.md
  - clients/ai-huevos/sequences/secuencia-origen.md
  - clients/ai-huevos/sequences/secuencia-pulsar.md
  - clients/ai-huevos/case-studies/finkargo.md
  - clients/ai-huevos/brand-config/brand-voice.md
  - clients/ai-huevos/brand-config/acf-profile.md
  - clients/ai-huevos/brand-config/creation-myth.md
---

# Arquitectura Maestra de Funnel — AI Huevos

> Este documento es el blueprint definitivo del sistema go-to-market de AI Huevos.
> Mapea el viaje completo del cliente desde el primer contacto hasta Partner Continuo.
> Todos los demas activos de marketing — quiz, landing page, secuencias de email, value ladder, caso Finkargo — son componentes de este sistema.
>
> **Metafora central:** AI es como el sol. La energia esta ahi. Nosotros construimos los paneles.
>
> **Un equipo de marketing lee este documento y sabe exactamente que construir, en que orden, y con que metricas medir exito.**

---

## Indice

1. [Vision del Sistema](#1-vision-del-sistema)
2. [Fase 1: Fuentes de Trafico](#2-fase-1-fuentes-de-trafico)
3. [Fase 2: Puentes de Pre-Frame](#3-fase-2-puentes-de-pre-frame)
4. [Fase 3: Calificar Suscriptores — Quiz Funnel](#4-fase-3-calificar-suscriptores--quiz-funnel)
5. [Fase 4: Calificar Compradores — Frontend](#5-fase-4-calificar-compradores--frontend)
6. [Fase 5: Identificar Compradores Hiperactivos](#6-fase-5-identificar-compradores-hiperactivos)
7. [Fase 6: Nutrir y Ascender Relaciones](#7-fase-6-nutrir-y-ascender-relaciones)
8. [Fase 7: Cambiar Entorno de Venta — High-Ticket](#8-fase-7-cambiar-entorno-de-venta--high-ticket)
9. [Diagrama Completo del Funnel](#9-diagrama-completo-del-funnel)
10. [Timeline del Cliente](#10-timeline-del-cliente)
11. [Framework de Metricas](#11-framework-de-metricas)
12. [Tech Stack Recomendado](#12-tech-stack-recomendado)
13. [Secuencia de Lanzamiento](#13-secuencia-de-lanzamiento)
14. [Mapa de Activos y Dependencias](#14-mapa-de-activos-y-dependencias)
15. [Checklist de Ejecucion](#15-checklist-de-ejecucion)

---

## 1. Vision del Sistema

AI Huevos no vende AI. Construye el sistema operativo de la empresa con el cliente, usando sus datos, y se queda hasta que funciona.

El funnel refleja esa filosofia: **no es una maquina de cerrar deals. Es un sistema de construir confianza.** Cada fase filtra, educa y prepara al prospecto para la siguiente. Los que llegan al final no necesitan ser "vendidos" — necesitan empezar.

### Principios de diseno

1. **Cada pieza sirve a la siguiente.** No hay contenido huerfano. Todo LinkedIn post lleva al quiz. Todo quiz lleva al Sprint. Todo Sprint lleva al Build.
2. **El prospecto se auto-califica.** El Energy Score les dice donde estan. No necesitamos decirles que nos necesitan — los numeros lo dicen.
3. **Finkargo en cada esquina.** El caso de 428x ROI aparece en cada fase, adaptado al tier que estamos vendiendo.
4. **La metafora del sol unifica todo.** Desde el primer post de LinkedIn hasta la propuesta de Partner Continuo, el lenguaje de energia, paneles y rieles es consistente.
5. **Digital → humano cuando el deal lo justifica.** No ponemos una persona en una call que se puede resolver con un email. No mandamos un email cuando se necesita una persona.

### Arquitectura de valor (referencia ESCALA)

```
TIER 1: BAIT          Diagnostico de Energia AI          $0           ← Calificar
TIER 2: FRONTEND      Sprint de Descubrimiento           $500-$1,500  ← Probar
TIER 3: MIDDLE        AI-OS Build                        $5K-$15K     ← Implementar
TIER 4: BACKEND       Partner Continuo                   $10K-$25K/mes ← Escalar
```

> Referencia completa: `clients/ai-huevos/offer-architecture/escala-value-ladder.md`

---

## 2. Fase 1: Fuentes de Trafico

Todo funnel empieza con trafico. KAI opera con tres tipos, priorizados por calidad de lead y costo de adquisicion.

### Trafico Propio (mayor valor, menor costo)

El trafico que ya nos pertenece. No dependemos de plataformas ni de algoritmos.

| Canal | Activo necesario | Volumen esperado | Calidad |
|-------|-----------------|-----------------|---------|
| Lista de email | Quiz + ORIGEN + PULSAR | 200-500 contactos/mes (crecimiento) | Alta |
| Grupos de WhatsApp | Comunidad LATAM B2B Ops | 50-100 activos | Alta |
| LinkedIn connections (Daniel R. + Danny) | Perfiles optimizados, publicaciones | 3,000+ connections combinadas | Alta |
| CRM contactos existentes | Pipeline historico + referidos | 50-100 contactos calientes | Muy alta |

**Accion inmediata:** Migrar todos los contactos existentes (clientes, prospectos, networking) al CRM con campos PULSO. Estos son los primeros en recibir ORIGEN.

### Trafico Controlado (pagado, predecible)

Trafico que compramos. Predecible, escalable, pero requiere optimizacion.

| Canal | Destino | Budget mensual | CPL objetivo | Volumen esperado |
|-------|---------|---------------|-------------|-----------------|
| LinkedIn Ads | Landing page del quiz | $2,000-$5,000 | $8-$15 (LATAM) | 150-400 leads/mes |
| Google Ads (branded) | Landing page | $500-$1,000 | $5-$10 | 50-100 leads/mes |
| Google Ads ("AI implementation") | Blog → Quiz CTA | $1,000-$2,000 | $10-$20 | 50-100 leads/mes |
| Meta Ads (retargeting) | Quiz o caso Finkargo | $500-$1,000 | $3-$8 | 60-125 leads/mes |
| Conferencias LATAM (sponsorship) | Booth → QR → Quiz | $1,000-$2,000/evento | $20-$40 | 25-50 leads/evento |

**Nota LATAM:** LinkedIn CPM en Colombia y Mexico es 3-5x mas barato que en US/EU. Esto le da a KAI una ventaja estructural en costo de adquisicion.

**Regla de budget:** No gastar mas del 10% de revenue mensual en ads hasta validar conversion quiz → Sprint con al menos 50 leads. Empezar con $500/mes de test.

### Trafico No Controlado (ganado, organico)

Trafico que no pagamos ni controlamos. El mas valioso cuando llega, el menos predecible.

| Canal | Frecuencia | Formato | Volumen esperado |
|-------|-----------|---------|-----------------|
| LinkedIn organico (Daniel R. + Danny) | 3-5 posts/semana (PULSAR) | Carousels, texto, video corto | 5,000-15,000 impresiones/semana |
| Referidos de Finkargo y clientes | Continuo (programa formal) | Intro directa + link a quiz | 3-8 leads/mes |
| Conferencias / keynotes (Daniel R.) | 2-4/trimestre | Keynote con Metafora del Sol | 10-25 leads/evento |
| SEO (blog content) | Continuo, efecto acumulativo | Posts de PULSAR reciclados | 200-500 visitas/mes (mes 6+) |
| PR / medios | Oportunista | Entrevistas, guest posts | Variable |
| Word-of-mouth | Continuo | Organico | 2-5 leads/mes |

**Regla de contenido organico:** Todo post de LinkedIn termina en una de dos cosas: (1) link al quiz, o (2) pregunta que genera conversacion en comments → DM → quiz. No hay contenido sin direccion.

### Priorizacion de canales

```
PRIORIDAD 1 (mes 1-2):    Referidos + LinkedIn organico + CRM existente
PRIORIDAD 2 (mes 2-3):    LinkedIn Ads (test $500-$1K) + PULSAR email
PRIORIDAD 3 (mes 3-6):    Google Ads + retargeting + SEO + conferencias
PRIORIDAD 4 (mes 6+):     Meta Ads + partnerships + programa de referidos formal
```

---

## 3. Fase 2: Puentes de Pre-Frame

El pre-frame es el contenido que prepara la mente del prospecto ANTES de llegar al quiz. Sin pre-frame, el quiz es una encuesta fria. Con pre-frame, es un diagnostico que el prospecto ya quiere.

### Ruta por temperatura del prospecto

```
FRIO (no conoce KAI)
  LinkedIn post → Articulo "Metafora del Sol" → Quiz
  LinkedIn carousel → Blog post AI en LATAM → Quiz
  Conferencia → Follow-up email → Quiz

TIBIO (sabe que tiene un problema con AI)
  Caso Finkargo (1-pager) → Quiz
  Blog: "3 razones por las que tu AI fracaso" → Quiz
  Video 60s Daniel R. contando la metafora → Quiz

CALIENTE (referido o returning)
  Directo a Sprint booking page (skip quiz)
  O: Quiz rapido (5 preguntas, 2 min) → Sprint inmediato
```

### Activos de pre-frame necesarios

| # | Activo | Formato | Audiencia | CTA final | Estado |
|---|--------|---------|-----------|-----------|--------|
| 1 | "3 razones por las que tu implementacion de AI fracaso" | LinkedIn carousel (10 slides) | Frio | Link a quiz | POR CREAR |
| 2 | "La Metafora del Sol: por que tu empresa no captura energia AI" | Blog post (800-1,200 palabras) | Frio/Tibio | Link a quiz | POR CREAR |
| 3 | Video: Daniel R. contando la Metafora del Sol | Video vertical 60s | Frio/Tibio | Link a quiz | POR CREAR |
| 4 | Caso Finkargo — 1-pager digital | PDF / pagina web | Tibio | Link a Sprint booking | LAUNCH-READY |
| 5 | "Lo que 44 entrevistas con operaciones revelan" | LinkedIn post (long-form) | Frio | Link a quiz | POR CREAR |
| 6 | "Compraste AI generica? Esto es lo que pasa despues del mes 3" | Blog post (600-800 palabras) | Tibio | Link a quiz | POR CREAR |
| 7 | Infografia: "La Escalera de Energia AI" | Imagen/carousel | Frio | Link a quiz | POR CREAR |
| 8 | LinkedIn post: posicion polarizante "Buying generic AI is over" | Texto + imagen | Frio | Conversacion → DM → Quiz | POR CREAR |

### Reglas de pre-frame

1. **Siempre cerrar con quiz o Sprint.** Nunca cerrar con "sigueme" o "dale like." Cada pieza de contenido tiene un destino dentro del funnel.
2. **Metafora del sol en el primer parrafo.** Si el contenido puede incluir la metafora de forma natural, la incluye. Si no, usa el vocabulario de energia (rieles, fluir, capturar).
3. **Arco GOLPE siempre.** Incluso en un post de 150 palabras: GOLPE (dato), DOLOR (consecuencia), PUENTE (como lo resolvemos), PRUEBA (Finkargo), ACCION (quiz/Sprint).
4. **Un numero en el titulo.** "$2M", "44 entrevistas", "110 procesos", "45 min → 3 min." Los numeros detienen el scroll.

---

## 4. Fase 3: Calificar Suscriptores — Quiz Funnel

El quiz es el corazon del funnel. Transforma prospectos anonimos en leads calificados con un Energy Score, un email, y un perfil PULSO interno.

### Activo principal

**Nombre:** Diagnostico de Energia AI
**Formato:** Quiz interactivo online (10 preguntas, 5-7 minutos)
**URL objetivo:** kaipartners.com/diagnostico

> Referencia de quiz detallada: `clients/ai-huevos/quiz-funnel/` (por crear)

### Arquitectura de la landing page

La landing page del quiz sigue una arquitectura de 10 secciones disenada para conversion del 30-45%.

> Referencia de landing page detallada: `clients/ai-huevos/website/` (por crear)

```
SECCION 1:  Hero — Headline + subheadline + CTA primario
SECCION 2:  Problema — La realidad de AI en empresas B2B
SECCION 3:  Metafora del Sol — "La energia esta, faltan los paneles"
SECCION 4:  Que descubriras — 4 dimensiones del Energy Score
SECCION 5:  Como funciona — 3 pasos (responde, descubre, actua)
SECCION 6:  Prueba social — Finkargo + metricas de impacto
SECCION 7:  Para quien es — ICP descrito en su propio lenguaje
SECCION 8:  Preguntas frecuentes — Objeciones eliminadas
SECCION 9:  Testimonio — Roberto Mendez, COO Finkargo
SECCION 10: CTA final — Repeticion del CTA con urgencia natural
```

### Score de Energia: 4 dimensiones

El quiz evalua 4 dimensiones de la madurez operativa AI del prospecto:

| Dimension | Puntos | Que mide |
|-----------|--------|----------|
| **Flujo de datos** | 0-25 | Sistemas desconectados, duplicacion, entrada manual |
| **Adopcion real** | 0-25 | AI comprada vs. AI usada diariamente por el equipo |
| **Visibilidad** | 0-25 | Decisiones con datos vs. decisiones con intuicion |
| **Capacidad del equipo** | 0-25 | Autonomia operativa sin intervencion externa |

**Score total: 0-100**

### Flujo post-quiz por score

```
SCORE 0-50 (Energia Atrapada)
  ├─ Resultado inmediato: "Tu empresa tiene energia atrapada en X, Y, Z"
  ├─ Email capture: Obligatorio para ver resultado completo
  ├─ Perfil PULSO: Se crea internamente con datos del quiz
  ├─ Siguiente paso: Secuencia ORIGEN (5 emails, 24h spacing)
  └─ Oferta: Sprint de Descubrimiento al final de ORIGEN (Email 5)

SCORE 51-75 (Energia Parcial)
  ├─ Resultado inmediato: "Captas parte de la energia, pero pierdes en X"
  ├─ Email capture: Obligatorio
  ├─ Perfil PULSO: Se crea internamente
  ├─ Siguiente paso: Oferta de Sprint inmediata + ORIGEN en paralelo
  └─ Oferta: Sprint de Descubrimiento con link de booking directo

SCORE 76-100 (Energia Alta — Anomalia)
  ├─ Resultado inmediato: "Tu operacion captura mas energia que el 90%"
  ├─ Email capture: Obligatorio
  ├─ Perfil PULSO: Se crea internamente
  ├─ Siguiente paso: Conversacion directa con KAI
  └─ Oferta: Partner Continuo (skip Sprint si el perfil lo justifica)
```

### Metricas del quiz

| Metrica | Target | Senal de alarma |
|---------|--------|-----------------|
| Landing page → quiz start | 60-75% | < 50% = revisar hero/headline |
| Quiz start → quiz complete | 70-85% | < 60% = preguntas confusas o largas |
| Quiz complete → email capture | 85-95% | < 80% = el resultado no genera curiosidad |
| **Conversion total (landing → email)** | **30-45%** | **< 25% = problema de funnel** |

---

## 5. Fase 4: Calificar Compradores — Frontend

El Sprint de Descubrimiento es donde KAI demuestra su valor con hechos, no con promesas. Es el tier que transforma un lead en un cliente — y un cliente en un evangelista.

### Producto: Sprint de Descubrimiento

```
PRECIO:       $500 - $1,500 USD (segun tamano de empresa)
DURACION:     2 semanas (10 dias habiles)
EQUIPO:       1 KAI Partner embebido (8-12 horas totales)
ENTREGABLE:   Mapa de Energia
GARANTIA:     Si no encontramos 1 proceso que valga 10x la inversion, devolvemos el dinero
```

> Referencia completa: `clients/ai-huevos/offer-architecture/escala-value-ladder.md` — Tier 2

### Quien llega al Sprint

| Origen | % estimado | Temperatura | Tratamiento |
|--------|-----------|-------------|-------------|
| Quiz score 0-50 + ORIGEN completada | 40% | Tibio (educado) | Call de 15 min pre-Sprint |
| Quiz score 51-75 + booking directo | 30% | Caliente | Sprint inmediato |
| Referido directo (skip quiz) | 20% | Muy caliente | Sprint inmediato, skip ORIGEN |
| Score 76-100 redirigido | 10% | Caliente (anomalia) | Evaluar si Sprint o directo a Build |

### Conversion target

**20-35% de quiz completers** se convierten en Sprint en un window de 30 dias.

Desglose:
- 10-15% convierten en dias 1-7 (oferta inmediata post-quiz o Email 5 de ORIGEN)
- 5-10% convierten en dias 8-21 (nutricion PULSAR + retargeting)
- 2-5% convierten en dias 22-30 (re-engagement o evento trigger)
- 3-5% convierten despues de dia 30 (long-tail, referido, conferencia)

### Proceso del Sprint

```
DIA 1-3:   Entrevistas con lideres de area (arqueologia organizacional)
DIA 4-7:   Mapeo de flujos de datos reales (no los documentados)
DIA 8-10:  Analisis + construir Mapa de Energia
DIA 10:    Sesion de presentacion de hallazgos (60 min con equipo del cliente)
```

### Entregable: Mapa de Energia

El Mapa de Energia es el activo que vende el siguiente tier. No es un reporte generico — es un espejo de la operacion real del cliente.

**Contenido del Mapa de Energia:**
1. Diagrama de flujo de informacion real (no el organigrama)
2. 3-7 puntos de friccion identificados y cuantificados
3. Estimacion de ahorro anual por punto de friccion
4. Roadmap de 3-5 automatizaciones prioritarias con ROI estimado
5. Comparativa con benchmarks de industria
6. Recomendacion de AI-OS Build personalizada

### Trigger de ascension

El Sprint termina con una reunion de presentacion. En esa reunion, el Mapa de Energia habla por si solo:

> "Si pierdes $X cada trimestre por estos 3 cuellos de botella... cuando empezamos?"

El cliente no necesita ser convencido. El Mapa de Energia cuantifica el costo de NO actuar.

---

## 6. Fase 5: Identificar Compradores Hiperactivos

KAI no vende e-commerce. El modelo es consultivo. Pero hay senales que indican que un cliente esta listo para moverse mas rapido de lo normal.

### Senales de comprador hiperactivo

| Senal | Indicador | Accion |
|-------|-----------|--------|
| **Ahorro masivo** | Sprint revela > $1M en ahorro potencial anual | Fast-track a propuesta de AI-OS Build |
| **Deadline de board** | Cliente menciona deadline con junta directiva o inversionistas | Propuesta acelerada, pricing premium justificado |
| **Multi-departamento** | Sprint revela oportunidades en 3+ departamentos | Sprint scope expandido ($1,500 → $3,000, 2 sem → 3 sem) |
| **Presupuesto pre-aprobado** | Cliente ya tiene budget asignado para transformacion digital | Skip Sprint → directo a AI-OS Build con discovery incluido |
| **Segundo referido** | Cliente refiere a otro prospect antes de terminar su propio Sprint | Tratamiento VIP, Partner Continuo fast-track |
| **Re-engagement rapido** | Lead frio que vuelve y completa el quiz en < 48h despues de re-engagement | Sprint inmediato con pricing preferencial |

### Regla de oro

> No forzar la ascension. El Mapa de Energia y los numeros hacen el trabajo. Si un cliente es hiperactivo, se auto-identifica. La unica accion de KAI es no poner friccion en el camino.

### Mecanismos de fast-track

1. **Propuesta en 48h**: Si el Sprint revela ahorro > $500K, la propuesta de AI-OS Build se entrega en 48 horas, no en 5 dias.
2. **Escalacion a founders**: Si el prospecto es C-Suite de empresa > $20M, Daniel R. o Danny se involucran personalmente.
3. **Pricing flexible**: Sprints expandidos (3 semanas, $3,000) para oportunidades multi-departamento.

---

## 7. Fase 6: Nutrir y Ascender Relaciones

No todos los leads se convierten inmediatamente. La mayoria necesita tiempo, educacion y confianza. Las secuencias de email son el motor que mantiene la relacion viva.

### Secuencias de email

#### ORIGEN (5 emails, dias 0-5)

Secuencia de onboarding post-quiz. Construye la relacion con la historia de KAI usando las 3 parabolas del ACF.

```
EMAIL 1 (Dia 0):  "AI es como el sol"                    → Curiosidad
EMAIL 2 (Dia 1):  "Gastamos $2M en AI que nadie uso"     → Empatia
EMAIL 3 (Dia 2):  "El dia que dejamos de vender AI"      → Esperanza
EMAIL 4 (Dia 3):  "Finkargo: $650M. 4 personas."         → Confianza
EMAIL 5 (Dia 4):  "Tu turno."                            → Accion (Sprint CTA)
```

> Referencia completa: `clients/ai-huevos/sequences/secuencia-origen.md`

#### PULSAR (semanal, continuo)

Calendario de engagement de 5 emails/semana que mantiene a KAI en la mente del suscriptor. Empieza despues de ORIGEN.

```
LUNES:     Contenido educativo (insight de industria, dato de AI en LATAM)
MARTES:    Caso de estudio (narrativa con numeros, no corporate case study)
MIERCOLES: Quick win / tip (algo que el suscriptor puede hacer en 10 min)
JUEVES:    Behind-the-scenes (como opera KAI por dentro)
VIERNES:   Evento / oferta (webinar, sesion de diagnostico, recurso nuevo)
```

> Referencia completa: `clients/ai-huevos/sequences/secuencia-pulsar.md`

#### Re-engagement (3 emails, despues de 30 dias de inactividad)

Para contactos que dejaron de abrir emails.

```
RE-1:  "Seguimos aqui. Y seguimos construyendo rieles." (valor puro, sin CTA)
RE-2:  "Dato nuevo: [metrica actualizada de Finkargo o cliente nuevo]" (prueba social fresca)
RE-3:  "Ultima oportunidad de [recurso/sesion/evento]" (urgencia natural, no artificial)
```

Si no abre RE-3 → limpiar de la lista. Calidad > cantidad.

### Triggers de ascension entre tiers

| Transicion | Trigger racional | Trigger emocional | Mecanismo de activacion |
|-----------|-----------------|-------------------|------------------------|
| **Quiz → Sprint** | Score < 50 + texto abierto revela dolor urgente | "Estoy perdiendo dinero ahora mismo" | Email automatico + link booking (ORIGEN Email 5) |
| **Sprint → Build** | Mapa de Energia cuantifica perdida > $100K/ano | "No puedo presentar esto al board sin actuar" | Reunion de cierre del Sprint + propuesta personalizada |
| **Build → Partner** | ROI demostrado en Mes 3 + 3 nuevas areas identificadas | "Si funciona aqui, lo necesito en toda la empresa" | Revision de Mes 3 + plan de expansion |

### Escenarios post-ORIGEN

| Escenario | Siguiente paso |
|-----------|---------------|
| Agendo Sprint | Secuencia pre-Sprint (confirmacion, prep) → post-Sprint (propuesta AI-OS) |
| No compro, sigue abriendo | PULSAR semanal → nurture → eventos → Sprint |
| No abrio Email 3+ | Cold → re-engagement en 30 dias |
| Respondio emails | Engagement personal de KAI → call informal → Sprint |

### Contenido de nutricion por pilar

Cada pieza de contenido (email, LinkedIn, blog) se mapea a uno de 5 pilares de PULSAR:

| # | Pilar | Descripcion | Frecuencia |
|---|-------|-------------|------------|
| P1 | **Adopcion profunda de AI** | Profundidad > velocidad. Integracion real, no demos. | 2x/semana |
| P2 | **Arqueologia organizacional** | Como fluye (o no) la informacion. Procesos reales. | 1x/semana |
| P3 | **Metafora de energia** | Sol, paneles, rieles. La narrativa central de KAI. | 1x/semana |
| P4 | **Realidad B2B LATAM** | Lo que vemos en Colombia, Mexico, Bolivia. | 1x/semana |
| P5 | **Partnership vs. Consulting** | "Nos quedamos." Por que el modelo esta roto. | Rotacion |

---

## 8. Fase 7: Cambiar Entorno de Venta — High-Ticket

Cuando el deal justifica interaccion humana, el funnel digital pasa la estafeta a los founders. Este handoff no es un punto de friccion — es una escalacion de confianza.

### Cuando digital → humano

| Situacion | Accion | Quien participa |
|-----------|--------|----------------|
| Sprint presentation (fin semana 2) | Reunion de hallazgos → propuesta AI-OS Build | KAI Partner asignado + 1 founder |
| Score > 75 + rol = C-Suite | Discovery call directa (skip Sprint) | Daniel R. o Danny |
| Referido de cliente activo | Propuesta directa (skip quiz) | Founder que tiene la relacion |
| Prospect regresa despues de 6+ meses | Call de reconexion → Sprint actualizado | KAI Partner |

### Interacciones humanas del funnel

Cinco momentos donde una persona de KAI habla con el prospecto/cliente:

```
1. DIAGNOSTICO (30 min, gratis)
   Quien: KAI Partner junior o founder
   Cuando: Post-quiz para leads calientes (score 51-100 + rol C-Suite)
   Objetivo: Validar que el Sprint es el paso correcto
   Output: Booking de Sprint confirmado o disqualificacion amable

2. SPRINT KICK-OFF (45 min)
   Quien: KAI Partner asignado
   Cuando: Dia 1 del Sprint
   Objetivo: Alinear expectativas, mapear stakeholders, definir scope
   Output: Plan de 10 dias + accesos a sistemas

3. SPRINT FINDINGS (60 min)
   Quien: KAI Partner + 1 founder
   Cuando: Dia 10 del Sprint
   Objetivo: Presentar Mapa de Energia + proponer AI-OS Build
   Output: Propuesta de Build enviada en 48h

4. BUILD CHECK-INS (30 min, mensuales)
   Quien: KAI Partner asignado
   Cuando: Fin de cada mes durante AI-OS Build (3 reuniones)
   Objetivo: Revisar progreso, ajustar scope, medir ROI parcial
   Output: Reporte mensual + ajustes al roadmap

5. PARTNER QUARTERLY REVIEWS (60 min)
   Quien: Founder + KAI Partner dedicado
   Cuando: Cada 90 dias durante Partner Continuo
   Objetivo: Revisar ROI, identificar expansiones, renovar
   Output: Plan de expansion + renewal confirmado
```

### Regla de handoff

> **El prospecto nunca siente un "handoff."** Para el, es la misma conversacion que empezo con el quiz. Cada interaccion humana referencia lo que el prospecto ya hizo: "Vi tu Energy Score — tienes energia atrapada en X. Hablemos de eso."

---

## 9. Diagrama Completo del Funnel

### Vista macro: Flujo principal

```
                        ┌─────────────────────────────────────────┐
                        │          FUENTES DE TRAFICO             │
                        │                                         │
                        │  LinkedIn Org.  LinkedIn Ads  Referidos │
                        │  Google Ads     Conferencias  SEO       │
                        │  Meta Retarg.   WhatsApp      PR        │
                        └──────────────────┬──────────────────────┘
                                           │
                                           ▼
                        ┌─────────────────────────────────────────┐
                        │         PUENTES DE PRE-FRAME            │
                        │                                         │
                        │  FRIO: Post → Articulo → Quiz           │
                        │  TIBIO: Caso Finkargo → Quiz            │
                        │  CALIENTE: Directo a Sprint booking     │
                        └──────────────────┬──────────────────────┘
                                           │
                                           ▼
                ┌──────────────────────────────────────────────────────┐
                │             LANDING PAGE (10 secciones)              │
                │  "Tu empresa tiene energia AI escondida.             │
                │   Descubrela en 5 minutos."                          │
                │                                                      │
                │  Conversion target: 30-45% landing → email           │
                └─────────────────────┬────────────────────────────────┘
                                      │
                                      ▼
                ┌──────────────────────────────────────────────────────┐
                │       QUIZ: DIAGNOSTICO DE ENERGIA AI                │
                │  10 preguntas | 5-7 min | 4 dimensiones              │
                │  Output: Energy Score (0-100) + Email + PULSO        │
                └─────┬──────────────────┬──────────────────┬─────────┘
                      │                  │                  │
                      ▼                  ▼                  ▼
              ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
              │ SCORE 0-50   │  │ SCORE 51-75  │  │ SCORE 76-100     │
              │ Energia      │  │ Energia      │  │ Energia Alta     │
              │ Atrapada     │  │ Parcial      │  │ (Anomalia)       │
              └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘
                     │                 │                    │
                     ▼                 ▼                    ▼
              ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
              │ SECUENCIA    │  │ SPRINT OFFER │  │ CONVERSACION     │
              │ ORIGEN       │  │ INMEDIATA +  │  │ DIRECTA CON      │
              │ (5 emails,   │  │ ORIGEN en    │  │ FOUNDERS         │
              │  5 dias)     │  │ paralelo     │  │                  │
              └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘
                     │                 │                    │
                     ▼                 ▼                    │
              ┌──────────────────────────────────┐         │
              │  SPRINT DE DESCUBRIMIENTO        │         │
              │  $500 - $1,500 | 2 semanas       │         │
              │  1 KAI Partner embebido           │         │
              │  Entregable: Mapa de Energia      │         │
              └──────────────┬───────────────────┘         │
                             │                              │
                             ▼                              │
              ┌──────────────────────────────────┐         │
              │  PRESENTACION DE HALLAZGOS       │         │
              │  Mapa de Energia + ROI estimado   │         │
              │  "Si pierdes $X/trimestre...      │         │
              │   cuando empezamos?"              │         │
              └──────────────┬───────────────────┘         │
                             │                              │
                             ▼                              │
              ┌──────────────────────────────────┐         │
              │  AI-OS BUILD                      │◄────────┘
              │  $5,000 - $15,000 | 90 dias       │
              │  2-3 AI Huevos embebidos        │
              │  Mes 1: Rieles  Mes 2: Flujo       │
              │  Mes 3: Energia                    │
              └──────────────┬───────────────────┘
                             │
                             ▼
              ┌──────────────────────────────────┐
              │  PARTNER CONTINUO                 │
              │  $10,000 - $25,000/mes            │
              │  1-2 AI Huevos dedicados        │
              │  Expansion + optimizacion continua │
              │  Contrato minimo: 12 meses         │
              └──────────────────────────────────┘
```

### Vista paralela: Flujo de nutricion

```
                    QUIZ COMPLETADO
                          │
          ┌───────────────┼───────────────┐
          │               │               │
    [No compra]     [Compra Sprint]   [Fast-track]
          │               │               │
    SECUENCIA         PRE-SPRINT      PROPUESTA
    ORIGEN (5d)       PREP EMAIL      DIRECTA
          │               │               │
    ¿Compra?          SPRINT           BUILD
     │    │           (2 sem)          (90d)
     │    │               │               │
    SI   NO          HALLAZGOS       PARTNER
     │    │               │          CONTINUO
  SPRINT  │          ¿BUILD?
          │           │    │
    SECUENCIA        SI   NO
    PULSAR            │    │
    (semanal)      BUILD   │
          │        (90d)   │
    ¿Reactivacion?    │  PULSAR
     │    │      PARTNER  (semanal)
    SI   NO     CONTINUO
     │    │
  SPRINT  LIMPIAR
          LISTA
```

---

## 10. Timeline del Cliente

### Escenario principal: Frio → Partner Continuo

```
DIA 0          Primer contacto
               LinkedIn post, ad, conferencia, o referido.
               El prospecto ve contenido de KAI por primera vez.
               ─────────────────────────────────────────────────────

DIA 0-1        Pre-frame
               Consume 1-2 piezas de contenido (articulo, video, caso).
               La metafora del sol empieza a trabajar en su cabeza.
               ─────────────────────────────────────────────────────

DIA 1          Quiz completado
               5-7 minutos. Energy Score revelado. Email capturado.
               Perfil PULSO creado internamente.
               ─────────────────────────────────────────────────────

DIA 1-5        Secuencia ORIGEN
               5 emails en 5 dias. Historia de KAI.
               Email 5: oferta de Sprint de Descubrimiento.
               ─────────────────────────────────────────────────────

DIA 5-14       Ventana de decision del Sprint
               El prospecto decide si invierte $500-$1,500.
               Si no compra: entra a PULSAR (nurture semanal).
               ─────────────────────────────────────────────────────

SEMANA 2-4     Sprint de Descubrimiento
               2 semanas con 1 KAI Partner embebido.
               Arqueologia organizacional. Mapeo de flujos reales.
               Entrega: Mapa de Energia.
               ─────────────────────────────────────────────────────

SEMANA 4       Presentacion de hallazgos
               60 minutos con el equipo del cliente.
               El Mapa de Energia revela $X en ahorros.
               Propuesta de AI-OS Build entregada en 48h.
               ─────────────────────────────────────────────────────

MES 2-4        AI-OS Build
               90 dias de implementacion.
               Mes 1: Rieles (infraestructura de conexion).
               Mes 2: Flujo (datos moviendose, equipo operando).
               Mes 3: Energia (optimizacion, ROI medido).
               ─────────────────────────────────────────────────────

MES 5+         Partner Continuo
               KAI como extension permanente del equipo.
               Expansion a nuevos departamentos. Optimizacion continua.
               Reportes mensuales de ROI. Revisiones trimestrales.
               Contrato minimo: 12 meses.
               ─────────────────────────────────────────────────────
```

### Variantes del timeline

| Variante | Diferencia | Timeline total |
|----------|-----------|---------------|
| **Referido caliente** | Skip quiz, directo a Sprint | Dia 0 → Sprint (semana 1) → Build (mes 2) |
| **Score 76-100** | Skip Sprint, directo a Build | Dia 0 → Quiz → Build (mes 1) |
| **Multi-departamento** | Sprint expandido (3 sem) | +1 semana en Sprint, mismo flujo |
| **Nurture largo** | PULSAR por 3+ meses antes de Sprint | Dia 0 → Quiz → PULSAR 90d → Sprint → Build |
| **Conferencia** | Pre-frame en persona | Dia 0 (keynote) → QR → Quiz (dia 1) → ORIGEN |

---

## 11. Framework de Metricas

### Tabla maestra de conversion

| Fase | Input | Tasa de conversion | Output | Revenue directo | Palanca de optimizacion |
|------|-------|-------------------|--------|----------------|------------------------|
| Trafico → Landing | 1,000 visitantes/mes | -- | 1,000 | $0 | CPL, segmentacion de audiencia, copy de ads |
| Landing → Quiz start | 1,000 | 60-75% | 600-750 | $0 | Hero headline, propuesta de valor, diseno |
| Quiz start → Quiz complete | 600-750 | 70-85% | 420-637 | $0 | Longitud de preguntas, progreso visual, relevancia |
| Quiz complete → Email | 420-637 | 85-95% | 357-605 | $0 | Calidad del resultado, curiosidad generada |
| **Landing → Email (total)** | **1,000** | **35-60%** | **357-605** | **$0** | **Landing page completa** |
| Email → Sprint | 357-605 | 10-20% | 36-121 | $18K-$181K | Secuencia ORIGEN, relevancia del score |
| Sprint → Build | 36-121 | 30-50% | 11-60 | $55K-$900K | Calidad del Mapa de Energia, pricing |
| Build → Partner | 11-60 | 40-60% | 4-36 | $480K-$10.8M/ano | ROI en 90 dias, relacion con founders |

### Revenue por escenario mensual

| Escenario | Leads/mes | Sprints | Builds/trim | Partners activos (mes 12) | Revenue anual |
|-----------|-----------|---------|-------------|--------------------------|--------------|
| **Conservador** | 100 | 2-3 | 1 | 1-2 | $180K-$600K |
| **Moderado** | 300 | 6-9 | 2-3 | 3-5 | $720K-$1.8M |
| **Agresivo** | 600 | 12-18 | 4-6 | 6-10 | $1.4M-$3.6M |

### LTV:CAC por referencia

> Datos completos en `clients/ai-huevos/offer-architecture/escala-value-ladder.md` — Seccion 4

| Escenario | CAC estimado | LTV/lead | LTV:CAC | Diagnostico |
|-----------|-------------|----------|---------|-------------|
| Conservador (10 leads) | $1,000/lead | $8,350 | **8.4:1** | Escalar con confianza |
| Moderado (25 leads) | $480/lead | $9,200 | **19.2:1** | Escalar agresivamente |
| Agresivo (50 leads) | $220/lead | $10,000 | **45.5:1** | Territorio unicornio B2B |

### KPIs por fase con frecuencia de revision

| KPI | Fase | Target | Frecuencia de revision | Senal de alarma |
|-----|------|--------|----------------------|-----------------|
| CPL (LinkedIn Ads) | Trafico | < $15 LATAM | Semanal | > $25 por 2 semanas |
| Conversion landing → email | Quiz | 35-60% | Semanal | < 25% |
| Open rate ORIGEN | Nutricion | > 35% | Per-sequence | < 25% en Email 1 |
| Click rate ORIGEN Email 5 | Nutricion | > 5% | Per-sequence | < 3% |
| Quiz → Sprint (30 dias) | Conversion | 10-20% | Mensual | < 8% |
| Sprint → Build | Ascension | 30-50% | Trimestral | < 20% |
| Build → Partner | Ascension | 40-60% | Trimestral | < 30% |
| Partner churn | Retencion | < 10% anual | Trimestral | > 15% |
| NPS Sprint | Satisfaccion | > 50 | Per-sprint | < 30 |
| NPS Build | Satisfaccion | > 60 | Per-build | < 40 |
| Revenue per lead | Economia | > $5,000 | Mensual | < $2,000 |

---

## 12. Tech Stack Recomendado

### Stack principal

| Funcion | Herramienta recomendada | Alternativa | Costo mensual | Prioridad |
|---------|------------------------|-------------|--------------|-----------|
| **Quiz** | Tally (free tier) | Typeform ($29/mo) | $0-$29 | CRITICA |
| **Landing page** | Framer | Webflow ($29/mo) | $15-$29 | CRITICA |
| **Email marketing** | ConvertKit (Creator) | ActiveCampaign ($49/mo) | $29-$49 | CRITICA |
| **CRM** | Pipedrive (Essential) | HubSpot (Starter) | $15-$45 | ALTA |
| **Calendar / booking** | Cal.com (free) | Calendly ($10/mo) | $0-$10 | ALTA |
| **Analytics** | Mixpanel (free tier) | Google Analytics 4 (free) | $0 | MEDIA |
| **WhatsApp Business** | WhatsApp Business API | Twilio WhatsApp | $0-$50 | MEDIA |
| **Social scheduling** | Buffer ($15/mo) | Hootsuite | $15-$30 | MEDIA |
| **Retargeting pixel** | LinkedIn Insight Tag + Meta Pixel | -- | $0 | ALTA |
| **Forms / surveys** | Tally | Typeform | $0 | BAJA |

### Integraciones criticas

```
QUIZ (Tally) ──webhook──→ CRM (Pipedrive)
                              │
                    ┌─────────┼─────────┐
                    │         │         │
              EMAIL MARKETING  │    ANALYTICS
              (ConvertKit)     │    (Mixpanel)
                    │         │         │
              ORIGEN/PULSAR   BOOKING   EVENT TRACKING
              automatizadas   (Cal.com) (funnel metrics)
```

| Integracion | De → A | Proposito | Metodo |
|-------------|--------|-----------|--------|
| Quiz → CRM | Tally → Pipedrive | Crear lead con Energy Score + PULSO | Webhook / Zapier |
| Quiz → Email | Tally → ConvertKit | Trigger ORIGEN por score range | Webhook / Zapier |
| CRM → Email | Pipedrive → ConvertKit | Sync segmentos (customer, cold) | Native / Zapier |
| Landing → Analytics | Framer → Mixpanel | Track conversion events | JS snippet |
| Email → CRM | ConvertKit → Pipedrive | Actualizar deal stage por engagement | Zapier |
| Booking → CRM | Cal.com → Pipedrive | Crear actividad "Sprint booked" | Zapier |

### Campos PULSO en CRM

El CRM debe tener campos personalizados para el perfil PULSO de cada lead:

| Campo | Tipo | Valores | Llenado |
|-------|------|---------|---------|
| `energy_score` | Numero (0-100) | Quiz result | Automatico (webhook) |
| `score_flujo_datos` | Numero (0-25) | Dimension 1 | Automatico |
| `score_adopcion` | Numero (0-25) | Dimension 2 | Automatico |
| `score_visibilidad` | Numero (0-25) | Dimension 3 | Automatico |
| `score_capacidad` | Numero (0-25) | Dimension 4 | Automatico |
| `traffic_source` | Texto | linkedin_ad, organic, referral, conference | UTM / manual |
| `funnel_stage` | Dropdown | quiz_complete, origen, pulsar, sprint, build, partner | Manual / auto |
| `pulso_panorama` | Texto largo | Discovery notes | Manual (Sprint) |
| `pulso_urgencia` | Dropdown | baja, media, alta, critica | Manual (Sprint) |

---

## 13. Secuencia de Lanzamiento

### Semana a semana: de cero a funnel operativo

| Semana | Accion | Dependencias | Owner | Verificacion |
|--------|--------|-------------|-------|-------------|
| **1** | Quiz en vivo (Tally o Typeform) | Contenido del quiz finalizado, scoring configurado | Marketing | Quiz funcional, score correcto, webhook conectado a CRM |
| **1** | Landing page en vivo (Framer) | Copy de 10 secciones finalizado, diseno aprobado | Marketing + Design | Pagina carga < 3s, mobile responsive, CTA visible |
| **1** | Secuencia ORIGEN en ConvertKit | 5 emails escritos y aprobados por founders | Marketing | Emails automaticos disparan correctamente por score |
| **1** | CRM configurado (Pipedrive) | Campos PULSO creados, pipeline stages definidos | Ops | Lead llega con Energy Score, stage correcto |
| **2** | PULSAR — primeros envios | Calendario editorial semana 1-2 escrito | Marketing | Primer email lunes enviado, open rate tracked |
| **2** | LinkedIn organico empieza | 10 posts pre-escritos (banco de contenido) | Daniel R. + Danny | 3-5 posts/semana, cada uno con CTA a quiz |
| **2** | Cal.com configurado | Pagina de booking Sprint lista | Ops | Link funcional, confirmacion automatica |
| **3** | LinkedIn Ads → Quiz | Audience definida, creative aprobado, pixel instalado | Marketing | $500-$1K budget de test, CPL tracked |
| **3** | Primeros Sprint clients onboarded | Proceso de Sprint documentado, Mapa de Energia template | Delivery | Sprint ejecutado correctamente, cliente satisfecho |
| **4** | Retargeting ads en vivo | Pixel data de semanas 1-3, audiences creadas | Marketing | Ads sirviendo a visitors que no completaron quiz |
| **4** | Mixpanel configurado | Events de funnel trackeados en cada fase | Ops/Dev | Dashboard con metricas de cada fase |
| **5-8** | Optimizacion basada en datos | Dashboard de metricas funcionando | Marketing | A/B tests corriendo, conversion mejorando |
| **8** | Review completo | 8 semanas de data, al menos 5 Sprints completados | Founders | Decisiones: escalar, ajustar, o pivotar |

### Checklist de "Go/No-Go" por semana

**Semana 1 — Go si:**
- [ ] Quiz funciona completo (completar → score → email → CRM)
- [ ] Landing page carga en mobile y desktop
- [ ] ORIGEN Email 1 se dispara en < 2 horas post-quiz
- [ ] Al menos 1 founder reviso y aprobo todo

**Semana 3 — Go para ads si:**
- [ ] Al menos 20 quiz completes organicos
- [ ] Conversion landing → email > 25%
- [ ] ORIGEN open rate > 30%
- [ ] Proceso de Sprint documentado y listo

**Semana 8 — Go para escalar si:**
- [ ] Al menos 5 Sprints completados
- [ ] Sprint → Build conversion > 20%
- [ ] CPL de ads < $20
- [ ] NPS de Sprint > 40
- [ ] Al menos 1 propuesta de Build entregada

---

## 14. Mapa de Activos y Dependencias

### Todos los activos del funnel

| # | Activo | Tipo | Estado | Ubicacion | Depende de |
|---|--------|------|--------|-----------|-----------|
| A1 | Landing page (10 secciones) | Web | POR CREAR | `clients/ai-huevos/website/` | A2, A3, A8 |
| A2 | Quiz: Diagnostico de Energia AI | Interactivo | POR CREAR | `clients/ai-huevos/quiz-funnel/` | -- |
| A3 | Caso Finkargo (web version) | Caso | LAUNCH-READY | `clients/ai-huevos/case-studies/finkargo.md` | -- |
| A4 | Secuencia ORIGEN (5 emails) | Email | DRAFT | `clients/ai-huevos/sequences/secuencia-origen.md` | A9, A10 |
| A5 | Secuencia PULSAR (calendario) | Email | DRAFT | `clients/ai-huevos/sequences/secuencia-pulsar.md` | A4 |
| A6 | Secuencia Re-engagement (3 emails) | Email | POR CREAR | -- | A4, A5 |
| A7 | ESCALA Value Ladder | Estrategia | DRAFT | `clients/ai-huevos/offer-architecture/escala-value-ladder.md` | -- |
| A8 | Brand Voice | Guia | IN-REBRAND | `clients/ai-huevos/brand-config/brand-voice.md` | -- |
| A9 | ACF Profile | Guia | DRAFT | `clients/ai-huevos/brand-config/acf-profile.md` | -- |
| A10 | Creation Myth | Narrativa | DRAFT | `clients/ai-huevos/brand-config/creation-myth.md` | -- |
| A11 | LinkedIn carousel (pre-frame) | Social | POR CREAR | -- | A8 |
| A12 | Blog: Metafora del Sol | Contenido | POR CREAR | -- | A8, A10 |
| A13 | Video: Daniel R. Metafora del Sol (60s) | Video | POR CREAR | -- | A10 |
| A14 | Sprint de Descubrimiento (SOP) | Proceso | POR CREAR | -- | A7 |
| A15 | Template Mapa de Energia | Entregable | POR CREAR | -- | A14 |
| A16 | Propuesta AI-OS Build (template) | Ventas | POR CREAR | -- | A7 |
| A17 | Pagina de booking Sprint | Web | POR CREAR | -- | A1 |
| A18 | Funnel Blueprint (este documento) | Estrategia | DRAFT | `clients/ai-huevos/funnel-architecture/funnel-blueprint.md` | -- |

### Grafo de dependencias

```
A8 (Brand Voice)
 ├──→ A1 (Landing page)
 ├──→ A4 (ORIGEN)
 ├──→ A5 (PULSAR)
 ├──→ A11 (LinkedIn carousel)
 └──→ A12 (Blog Metafora)

A9 (ACF Profile)
 ├──→ A4 (ORIGEN — parabolas)
 └──→ A10 (Creation Myth)

A10 (Creation Myth)
 ├──→ A4 Email 1 (ORIGEN)
 ├──→ A12 (Blog Metafora)
 └──→ A13 (Video 60s)

A7 (ESCALA Value Ladder)
 ├──→ A14 (Sprint SOP)
 ├──→ A16 (Propuesta Build)
 └──→ A2 (Quiz scoring)

A2 (Quiz)
 ├──→ A1 (Landing page lo contiene)
 └──→ A4 (ORIGEN se dispara post-quiz)

A3 (Finkargo)
 ├──→ A1 (Landing page — seccion 6)
 ├──→ A4 Email 4 (ORIGEN)
 └──→ A11 (Carousel — proof point)

A14 (Sprint SOP)
 └──→ A15 (Template Mapa de Energia)
```

---

## 15. Checklist de Ejecucion

### Pre-lanzamiento (antes de encender ads o publicar)

**Fundacional**
- [ ] Brand Voice validada por ambos founders (de IN-REBRAND a VALIDATED)
- [ ] ACF Profile validado ("Esto suena como nosotros")
- [ ] Creation Myth ensayada por ambos founders (< 50 segundos sin notas)
- [ ] Dominio kaipartners.com registrado y configurado
- [ ] Email profesional configurado (team@kaipartners.com)

**Quiz + Landing**
- [ ] Quiz de 10 preguntas construido en Tally/Typeform
- [ ] Scoring de 4 dimensiones configurado correctamente
- [ ] Landing page de 10 secciones publicada
- [ ] Landing page optimizada para mobile
- [ ] Webhook quiz → CRM funcionando
- [ ] Webhook quiz → email marketing funcionando
- [ ] Pagina de resultados con Energy Score personalizado

**Email**
- [ ] 5 emails de ORIGEN escritos y cargados en ConvertKit
- [ ] Automatizacion ORIGEN configurada (trigger por quiz score)
- [ ] Delay de 24h entre emails verificado
- [ ] Subject lines A/B configurados
- [ ] Link de booking Sprint en Email 5 funcional
- [ ] Segmentos post-ORIGEN creados (compro / no compro / cold)

**CRM + Ops**
- [ ] Pipeline stages configurados en Pipedrive
- [ ] Campos PULSO creados
- [ ] Cal.com configurado con pagina de Sprint booking
- [ ] Confirmacion automatica de Sprint booking

**Contenido organico**
- [ ] 10 posts de LinkedIn pre-escritos (banco de 2 semanas)
- [ ] Calendario editorial PULSAR del primer mes definido
- [ ] Perfiles de LinkedIn de founders optimizados con nuevo branding

**Proceso de delivery**
- [ ] Sprint de Descubrimiento documentado paso a paso (SOP)
- [ ] Template del Mapa de Energia creado
- [ ] Template de propuesta AI-OS Build creado
- [ ] Primer batch de Sprint clients identificados (red actual)

### Post-lanzamiento (semanas 1-8)

**Semana 1**
- [ ] Quiz live y recibiendo trafico
- [ ] ORIGEN disparandose correctamente
- [ ] Al menos 5 quiz completes
- [ ] CRM recibiendo leads con Energy Score

**Semana 2**
- [ ] PULSAR primeros envios
- [ ] LinkedIn organico activo (3+ posts)
- [ ] Primer Sprint client onboarded

**Semana 3**
- [ ] LinkedIn Ads live ($500-$1K test)
- [ ] CPL < $20 verificado
- [ ] Retargeting pixel acumulando data

**Semana 4**
- [ ] Retargeting ads live
- [ ] Primer Sprint completado
- [ ] Primer Mapa de Energia entregado
- [ ] Primera propuesta de Build enviada

**Semana 8 — Decision point**
- [ ] Dashboard de metricas de funnel completo
- [ ] Al menos 5 Sprints completados
- [ ] LTV:CAC preliminar calculado
- [ ] Decision: escalar / ajustar / pivotar documentada

---

## Finkargo como Proof Engine

Finkargo aparece en cada fase del funnel. No como caso de estudio generico — como prueba especifica del valor de cada tier.

| Fase del funnel | Como aparece Finkargo | Mensaje clave |
|----------------|----------------------|---------------|
| **Pre-frame** | LinkedIn posts, carousel | "Una fintech procesaba $650M con Excel y WhatsApp" |
| **Landing page** | Seccion 6 (prueba social) + Seccion 9 (testimonio) | "$15M en ahorros. 110+ procesos. 90 dias." |
| **Quiz resultado** | Comparativa con benchmark | "Tu score: 35. Finkargo empezo en 28." |
| **ORIGEN Email 4** | Historia completa de Finkargo | "$650M. 4 personas. 45 min → 3 min." |
| **Sprint pitch** | Referencia durante Sprint booking | "Hacemos lo mismo que hicimos con Finkargo, a escala de diagnostico" |
| **Sprint findings** | Comparativa de hallazgos | "Finkargo tenia 7 puntos de friccion. Tu tienes X." |
| **Build proposal** | ROI de referencia | "Finkargo: $35K inversion → $15M ahorros = 428x ROI" |
| **Partner pitch** | Duracion de relacion | "3+ anos. De 1 proceso a 110+. Nos quedamos." |

> Referencia completa: `clients/ai-huevos/case-studies/finkargo.md`

---

## Conexiones con Skills del Marketplace

Este blueprint fue construido activando los siguientes skills de GrowthOS:

| Skill | Plugin | Que aporto al blueprint |
|-------|--------|------------------------|
| **FLUJO** | motor-de-ofertas | Arquitectura de 7 fases del funnel |
| **ESCALA** | motor-de-ofertas | Value ladder de 4 tiers (Bait → Backend) |
| **ALMA (ACF)** | motor-de-ofertas | Personaje, parabolas, voz para secuencias |
| **IMAN (ORIGEN)** | motor-de-ofertas | Secuencia de 5 emails post-quiz |
| **IMAN (PULSAR)** | motor-de-ofertas | Calendario semanal de contenido |
| **ICP** | growth-foundations | Dream Customer (COO/CTO, $5M-$50M, LATAM) |
| **Content Strategy** | growth-foundations | Pilares de contenido (PENDIENTE) |
| **Product Marketing** | play-to-win | 5 pilares de producto alineados con PULSAR |
| **Customer Journey** | play-to-win | Mapeo de touchpoints y emociones por fase |
| **Copywriting Engine** | copywriting-engine | Arco GOLPE, formulas de headlines y CTAs |

---

## Notas Finales

### Que es este documento

Este es el **mapa del sistema completo.** Un equipo de marketing que lea este documento sabe exactamente:

1. **Que construir** — Cada activo listado con su formato, ubicacion y dependencias
2. **En que orden** — Secuencia de lanzamiento semana a semana
3. **Con que metricas** — KPIs por fase, benchmarks, senales de alarma
4. **Con que herramientas** — Tech stack recomendado con integraciones
5. **Cuando escalar** — Criterios de Go/No-Go en cada checkpoint

### Que NO es este documento

- No es el quiz (ver `quiz-funnel/`)
- No es la landing page (ver `website/`)
- No es las secuencias de email (ver `sequences/`)
- No es la value ladder (ver `offer-architecture/`)
- No es la guia de voz (ver `brand-config/`)

Es el sistema que conecta todo. Cada componente puede y debe evolucionar independientemente, pero este blueprint define como encajan.

### Principio rector

> La energia ya esta ahi. En los datos del prospecto, en sus procesos, en su equipo. El funnel no crea demanda — revela la energia que ya existe y construye los rieles para que fluya hacia KAI.

---

*Construido contigo. Probado con tus datos.*
