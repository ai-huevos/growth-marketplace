# IMAN: Infraestructura de Mensajes Automáticos

Sistema completo de email marketing que despliega al Attractive Character (ACF) en dos secuencias complementarias: Soap Opera (onboarding) y Seinfeld (engagement diario).

---

## Arquitectura General

```
Nuevo suscriptor entra
        ↓
  Soap Opera Sequence
    (Días 1-5)
   Onboarding emocional
        ↓
  Seinfeld Sequence
   (Diario, para siempre)
   Engagement continuo
        ↓
  Lanzamientos Ocasionales
    (2-4x al año)
   Campañas de oferta
```

### Lógica del sistema

| Etapa | Objetivo | Duración | Frecuencia |
|-------|----------|----------|------------|
| **Soap Opera** | Construir confianza, contar historia de origen, hacer primera oferta | 5 días | 1 email/día |
| **Seinfeld** | Mantener relación, educar, entretener, vender sutilmente | Indefinida | 1 email/día (lun-vie) |
| **Lanzamientos** | Introducir nueva oferta o promoción | 5-7 días | 2-4 veces/año |

---

## Soap Opera Sequence (5 Emails)

La Soap Opera Sequence es tu secuencia de onboarding. Su nombre viene de las telenovelas: cada email termina con un cliffhanger que hace que el suscriptor quiera abrir el siguiente.

### Principios de la Soap Opera

1. **Cada email cuenta UNA parte de la historia** — No metas toda tu vida en un email
2. **Cliffhanger al final** — "Mañana te cuento qué pasó después..."
3. **Progresión emocional** — Curiosidad → Empatía → Esperanza → Prueba → Acción
4. **CTA suave hasta el email 5** — Los primeros 4 venden la relación, el 5 vende el producto

---

### Email 1: "¿Quién soy?" (Historia de origen)

**Objetivo**: Presentar al personaje y generar identificación. El suscriptor debe pensar: "Esta persona me entiende."

**Subject line formula**: [Nombre] + [Pregunta intrigante o declaración personal]
- Ejemplo: "La historia que nunca le conté a nadie sobre mi negocio"
- Ejemplo: "Por qué dejé un trabajo de $120K para empezar de cero"
- Ejemplo: "Lo primero que debes saber sobre mí"

**Estructura del body**:

1. **Apertura personal** (2-3 líneas): Agradece por suscribirse. Establece tono casual y humano.
2. **Estado anterior** (3-4 líneas): Describe cómo era tu vida/negocio ANTES. Usa detalles específicos del backstory ACF.
3. **El dolor compartido** (2-3 líneas): Conecta tu estado anterior con el dolor que el suscriptor probablemente siente ahora.
4. **Cliffhanger** (1-2 líneas): "Mañana te cuento qué fue lo que cambió todo para mí..."
5. **Firma con personalidad**: No solo "Saludos, [Nombre]". Incluye una línea que refuerce la voz ACF.

**CTA**: Ninguno (o muy suave — "responde y cuéntame tu mayor desafío con X")

**Timing**: Enviar inmediatamente después de la suscripción o dentro de las primeras 2 horas.

---

### Email 2: "El viaje" (La lucha continúa)

**Objetivo**: Demostrar que entiendes el dolor del suscriptor porque tú lo viviste. Construir empatía profunda.

**Subject line formula**: [Referencia al dolor] + [Curiosidad]
- Ejemplo: "Los 3 errores que casi destruyen mi empresa"
- Ejemplo: "Esto es lo que NO funcionó (y gasté $50K descubriéndolo)"
- Ejemplo: "Si estás atorado aquí, no estás solo"

**Estructura del body**:

1. **Retomar el cliffhanger** (1-2 líneas): "Ayer te conté sobre mi situación. Hoy viene la parte difícil..."
2. **Los intentos fallidos** (4-5 líneas): Qué probaste para resolver el problema. Sé específico: nombres de metodologías, costos, tiempos.
3. **El costo del dolor** (2-3 líneas): No solo dinero — tiempo perdido, oportunidades que no tomaste, estrés, relaciones afectadas.
4. **Validación del suscriptor** (2-3 líneas): "Si estás pasando por algo similar, quiero que sepas que no es tu culpa. El problema es más sistémico de lo que parece."
5. **Cliffhanger** (1-2 líneas): "Hasta que un día descubrí algo que lo cambió todo. Mañana te cuento qué fue..."

**CTA**: Ninguno (la secuencia sigue construyendo relación)

**Timing**: 24 horas después del Email 1.

---

### Email 3: "El descubrimiento" (Solución encontrada)

**Objetivo**: Introducir la metodología o enfoque que cambió todo. Es el turning point de la historia.

**Subject line formula**: [El momento de cambio] + [Intriga]
- Ejemplo: "El día que todo cambió (fue un martes a las 3am)"
- Ejemplo: "Un mentor me dijo algo que me dejó helado"
- Ejemplo: "Encontré la pieza que faltaba en el lugar más inesperado"

**Estructura del body**:

1. **Retomar el cliffhanger** (1-2 líneas): "Te prometí contarte qué fue lo que cambió..."
2. **El momento "aha!"** (3-4 líneas): Describe con detalle sensorial el momento del descubrimiento. Dónde estabas, qué pasó, qué sentiste.
3. **La metodología/framework** (3-4 líneas): Introduce tu enfoque de forma conceptual, sin entrar en detalles tácticos. El suscriptor debe entender QUÉ descubriste, no necesariamente CÓMO implementarlo.
4. **Primeros resultados** (2-3 líneas): Métricas tempranas, pequeños wins, señales de que funcionaba.
5. **Cliffhanger** (1-2 líneas): "Pero los resultados reales vinieron después. Mañana te muestro los números..."

**CTA**: Suave — "¿Te suena familiar? Responde y cuéntame"

**Timing**: 24 horas después del Email 2.

---

### Email 4: "La transformación" (Resultados)

**Objetivo**: Mostrar prueba concreta. Números, testimoniales, métricas. Es el email de credibilidad.

**Subject line formula**: [Resultado específico] + [Timeframe]
- Ejemplo: "De $5K a $47K mensuales en 90 días"
- Ejemplo: "Los números que no me creían cuando los mostré"
- Ejemplo: "3 clientes, 3 resultados, 1 patrón"

**Estructura del body**:

1. **Retomar el cliffhanger** (1-2 líneas): "Te prometí los números. Aquí van..."
2. **Tus propios resultados** (3-4 líneas): Métricas específicas de tu transformación. Antes vs después con números concretos.
3. **Resultados de clientes** (3-4 líneas): 2-3 mini-testimoniales. Nombre (o inicial), industria, resultado, timeframe.
4. **El patrón** (2-3 líneas): ¿Qué tienen en común todos estos resultados? El denominador común que tu metodología explica.
5. **Cliffhanger** (1-2 líneas): "Y ahora quiero ayudarte a ti a lograr lo mismo. Mañana te cuento cómo..."

**CTA**: Medio — link a un caso de estudio completo o testimonial en video

**Timing**: 24 horas después del Email 3.

---

### Email 5: "La oportunidad" (Primera oferta)

**Objetivo**: Presentar la oferta frontend. Este es el primer email que vende directamente.

**Subject line formula**: [Beneficio directo] + [Urgencia o escasez]
- Ejemplo: "Tu turno: cómo implementar esto en tu negocio"
- Ejemplo: "Preparé algo especial para ti (solo esta semana)"
- Ejemplo: "La oportunidad que me hubiera gustado tener cuando empecé"

**Estructura del body**:

1. **Recap del viaje** (3-4 líneas): Resumen de la historia contada en los emails 1-4. "Esta semana te conté cómo pasé de X a Y..."
2. **La oferta** (4-5 líneas): Presenta tu producto frontend. Qué incluye, qué resultado promete, para quién es.
3. **Value prop** (2-3 líneas): ¿Por qué este producto es la forma más rápida/segura/eficiente de lograr el resultado?
4. **Garantía** (2-3 líneas): Elimina el riesgo. Garantía de devolución, prueba gratuita, compromiso mínimo.
5. **CTA claro y directo** (2-3 líneas): Un solo link. Una sola acción. "Haz click aquí para empezar."
6. **P.S.** (1-2 líneas): Refuerzo de urgencia o beneficio adicional. "P.S. Los primeros 20 que se inscriban reciben también X."

**CTA**: Directo — link a página de venta o checkout del producto frontend

**Timing**: 24 horas después del Email 4.

---

## Seinfeld Sequence (Diario, Para Siempre)

Después de los 5 días de Soap Opera, el suscriptor entra en la Seinfeld Sequence. Su nombre viene del show de Jerry Seinfeld: "un show sobre nada" que en realidad es sobre todo.

### Principios de la Seinfeld Sequence

1. **Entretenimiento primero, venta segundo** — Si el email no es interesante por sí solo, no funciona
2. **Personal siempre** — Cada email empieza con algo del personaje, no del producto
3. **CTA en cada email** — Pero suave, natural, como una recomendación de un amigo
4. **Consistencia > perfección** — Es mejor enviar un email "bueno" cada día que un email "perfecto" cada semana

### Calendario semanal temático

| Día | Tema | Objetivo | Tipo de contenido |
|-----|------|----------|-------------------|
| **Lunes** | Contenido educativo | Demostrar expertise, dar valor | Insight de industria, tendencia, dato poco conocido |
| **Martes** | Caso de estudio | Social proof, inspiración | Resultado de cliente, before/after, lección aprendida |
| **Miércoles** | Quick win / tip | Valor inmediato y aplicable | Táctica que pueden implementar en 10 minutos |
| **Jueves** | Behind-the-scenes | Transparencia, conexión humana | Proceso interno, decisión difícil, día a día real |
| **Viernes** | Evento / oferta | Oportunidad, acción | Webinar, recurso nuevo, promoción, contenido exclusivo |

### Fórmula para cada email Seinfeld

#### 1. Subject line (curiosidad + beneficio)

Fórmulas probadas:
- "Lo que [persona famosa/cliente] me enseñó sobre [tema]"
- "[Número] [cosa] que [resultado inesperado]"
- "Por qué dejé de [acción común] (y qué hago ahora)"
- "La conversación de [lugar inesperado] que cambió mi [área]"
- "No leas esto si [condición que describe exactamente al lector]"

#### 2. Opening personal (2-3 líneas)

Siempre empieza con algo humano. Una anécdota, una observación, algo que pasó hoy o esta semana. NO empieces con "Hoy quiero hablarte sobre..."

#### 3. Teaching point (3-5 líneas)

La transición del opening personal al punto educativo. "Y eso me hizo pensar en algo que veo todo el tiempo con mis clientes..."

#### 4. CTA (1-2 líneas)

Natural, no agresivo. "Si quieres profundizar en esto, [link]" o "Tenemos un [recurso] que va perfecto con esto".

#### 5. Firma con personalidad

No "Atentamente". Algo que refuerce la voz del ACF. Puede variar, pero el tono debe ser constante.

---

## Métricas de Email

### Benchmarks B2B

| Métrica | Pobre | Aceptable | Bueno | Excelente |
|---------|-------|-----------|-------|-----------|
| **Open rate** | <15% | 15-25% | 25-35% | >35% |
| **Click rate** | <1% | 1-3% | 3-7% | >7% |
| **Reply rate** | 0% | 0.5-1% | 1-3% | >3% |
| **Conversion rate** | <0.5% | 0.5-1% | 1-3% | >3% |
| **Unsubscribe rate** | >1% | 0.5-1% | 0.2-0.5% | <0.2% |

### Ajustes para LATAM

| Factor | Ajuste | Razón |
|--------|--------|-------|
| **Open rates** | Esperar 5-10% menos inicialmente | Menor hábito de email profesional en algunos mercados |
| **WhatsApp parallel** | Considerar secuencia paralela en WhatsApp | Penetración de WhatsApp >95% en LATAM B2B |
| **Nurture más largo** | Agregar 2-3 emails pre-oferta en Soap Opera | Ciclos de confianza más largos en culturas latinas |
| **Idioma** | Localización por país (no solo "español") | Modismos y tono varían significativamente por país |
| **Timing de envío** | Probar 7-9am y 12-2pm hora local | Patrones de lectura diferentes al mercado US |

### Métricas por secuencia

| Secuencia | Métrica principal | Target |
|-----------|-------------------|--------|
| **Soap Opera** | Open rate del Email 5 | >25% (indica que la historia mantuvo engagement) |
| **Soap Opera** | Click rate del Email 5 | >5% (indica que la oferta resonó) |
| **Seinfeld** | Open rate promedio mensual | >20% (indica que el contenido mantiene interés) |
| **Seinfeld** | Reply rate | >1% (indica conexión real con el personaje) |
| **Global** | List growth rate | >10% mensual neto (crecimiento - unsubs) |

---

## Segmentación

La segmentación ocurre automáticamente según el comportamiento del suscriptor.

### Reglas de segmentación

| Comportamiento | Segmento | Acción |
|---------------|----------|--------|
| Abre emails pero no hace click | **Engaged-passive** | Cambiar CTA: más directo, más urgente, probar formatos diferentes |
| Hace click pero no compra | **Warm-not-ready** | Enviar a secuencia de frontend con más prueba social y garantías |
| Compra frontend | **Customer-frontend** | Mover a secuencia de nurture hacia middle tier |
| Compra middle/backend | **Customer-core** | Emails exclusivos, early access, referral program |
| No abre en 30 días | **Cold** | Secuencia de re-engagement (3 emails). Si no responde, eliminar |
| Se desuscribe | **Removed** | Eliminar inmediatamente. No reintentar |

### Secuencia de re-engagement (Cold → Active o Remove)

| Email | Subject | Contenido | Decisión |
|-------|---------|-----------|----------|
| 1 | "¿Sigues ahí?" | Breve, personal, pregunta directa | Si abre → vuelve a Active |
| 2 | "Última oportunidad de [beneficio]" | Resumen de valor + incentivo | Si abre → vuelve a Active |
| 3 | "Nos despedimos" | Aviso de que será removido de la lista | Si no abre → Remove |

---

## Integración con ESCALA

| Tier ESCALA | Secuencia de email | Objetivo del email |
|-------------|-------------------|--------------------|
| **Tier 1: BAIT** | Post-lead magnet (1-2 emails) | Agradecer, entregar bait, entrar a Soap Opera |
| **Tier 2: FRONTEND** | Soap Opera Email 5 + follow-up | Presentar oferta frontend, manejar objeciones |
| **Tier 3: MIDDLE** | Seinfeld + secuencia de ascensión | Nurture hacia middle con casos de estudio y ROI |
| **Tier 4: BACKEND** | Email 1:1 o high-touch sequence | Invitación personal, no automatizado |

---

## Stack Tecnológico Recomendado

| Herramienta | Uso | Precio aprox. |
|-------------|-----|---------------|
| **ActiveCampaign** | Automatización completa, segmentación | $29-149/mes |
| **ConvertKit** | Creadores, simplicidad, buen editor | $29-79/mes |
| **Mailchimp** | Starter, ecommerce integration | Gratis-$20/mes |
| **Beehiiv** | Newsletter-first, growth tools | Gratis-$99/mes |

Para empresas B2B LATAM que empiezan: **ConvertKit** o **Beehiiv** por simplicidad. Para empresas con automatización avanzada: **ActiveCampaign**.
