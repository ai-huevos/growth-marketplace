# Mecánicas de Funnel

Flujos, puntos de captura, outcome pages, y seguimiento post-quiz. Guía técnica para construir el funnel completo.

---

## Arquitectura del Quiz Funnel

```
[Ad / Organic] → [Hook Page] → [Quiz (5-7 preguntas)] → [Email Gate] → [Outcome Page] → [CTA]
                                                                              ↓
                                                                    [Email Sequence por Bucket]
```

---

## Componente 1: Hook Page

La primera página que ve el prospect. Su único objetivo: que haga clic en "Tomar el Quiz".

### Estructura

| Elemento | Propósito | Ejemplo |
|----------|-----------|---------|
| **Headline** | Captar atención con la promesa del quiz | "Descubre por qué tu pipeline no se convierte (en 2 minutos)" |
| **Subheadline** | Reducir fricción, establecer expectativa | "Responde 6 preguntas y recibe un diagnóstico personalizado" |
| **Social proof** | Generar confianza | "Más de 500 equipos de ventas ya lo hicieron" |
| **CTA principal** | Acción clara | "Tomar el Quiz Gratis →" |
| **Tiempo estimado** | Reducir barrera | "Solo toma 2 minutos" |

### Principios de diseño

| Regla | Descripción |
|-------|-------------|
| Un solo CTA | No distraigas con links, menú, o recursos adicionales |
| Above the fold | El CTA debe verse sin scrollear |
| Específico > genérico | "Diagnóstico de pipeline" > "Assessment de ventas" |
| Resultado personal | Prometer algo personalizado ("TU diagnóstico") |
| Sin formulario visible | El email gate viene después, no aquí |

---

## Componente 2: Flujo del Quiz

### Flujo lineal (recomendado para empezar)

Todas las preguntas en secuencia. Simple de construir, fácil de analizar.

```
P1 → P2 → P3 → P4 → P5 → P6 → Email Gate → Outcome
```

**Mejor para**: Primera versión del quiz, mercados simples, <5 preguntas.

### Flujo con branching (avanzado)

Diferentes caminos según respuestas. Más personalizado, más complejo.

```
P1 → P2 → P3 (segmentación)
              ├── Bucket A → P4a → P5a → Email → Outcome A
              ├── Bucket B → P4b → P5b → Email → Outcome B
              └── Bucket C → P4c → P5c → Email → Outcome C
```

**Mejor para**: Quiz maduros con datos de la primera versión, mercados complejos.

### Progresión de compromiso

| Posición | Nivel de compromiso | Tipo de pregunta |
|----------|-------------------|-----------------|
| P1-P2 | Bajo | Grease-the-wheels (fácil, rápido) |
| P3 | Medio | Segmentación (requiere reflexión) |
| P4 | Alto | PREGUNTA RAÍZ (campo abierto, profundidad) |
| P5-P6 | Medio-Alto | Blind-spot / Urgencia |
| Gate | Máximo | Email + nombre |

---

## Componente 3: Email Gate

El momento de captura del lead. Va DESPUÉS de las preguntas, ANTES del resultado.

### Psicología del gate

El prospect ya invirtió 2-3 minutos respondiendo preguntas. El email es el "precio" por ver SU resultado personalizado. Principios en juego:
- **Reciprocidad**: "Ya hice el esfuerzo, merezco ver el resultado"
- **Curiosidad**: "Quiero saber en qué bucket estoy"
- **Ownership**: "Este resultado es MÍO"

### Estructura del gate

| Elemento | Recomendación |
|----------|---------------|
| Headline | "Tus resultados están listos" o "Tu diagnóstico está listo" |
| Campos mínimos | Nombre + Email (2 campos) |
| Campos opcionales | Empresa + Cargo (si tu ICP lo requiere) |
| CTA | "Ver Mi Resultado →" |
| Trust signal | "No spam. Solo contenido relevante a tu resultado." |

### Optimización

| Métrica | Target | Si no llegas |
|---------|--------|-------------|
| Capture rate >30% | Mínimo viable | Reducir campos, mejorar headline |
| Capture rate >45% | Bueno | Mantener, optimizar copy |
| Capture rate >60% | Excelente | Escalar tráfico |

---

## Componente 4: Outcome Pages

Una página de resultado por bucket. El prospect llega aquí después de dar su email.

### Estructura de la outcome page

| Sección | Propósito | Ejemplo |
|---------|-----------|---------|
| **Resultado** | Validar el bucket | "Eres un [Nombre del Bucket]" |
| **Diagnóstico** | Explicar qué significa | "Tu mayor desafío es [X]. Esto suele pasar cuando [contexto]" |
| **Insight** | Aportar valor inmediato | "El 67% de empresas en tu situación cometen el error de [Y]" |
| **Solución** | Presentar camino | "La forma más efectiva de resolver [X] es [approach]" |
| **CTA** | Siguiente paso | "Agenda un diagnóstico gratuito de 15 min" |
| **Recurso adicional** | Valor extra | "Descarga nuestra guía: [recurso relevante al bucket]" |

### CTAs por bucket

| Tipo de bucket | CTA sugerido | Por qué |
|---------------|-------------|---------|
| Alta urgencia | "Agenda una call esta semana" | Están listos para actuar |
| Media urgencia | "Descarga la guía + agenda call" | Necesitan más info antes |
| Baja urgencia | "Descarga el recurso gratuito" | No están listos para call |

---

## Componente 5: Seguimiento Post-Quiz

### Email sequence por bucket

Cada bucket recibe una secuencia de emails diferente con contenido relevante a su dolor.

| Email | Timing | Contenido |
|-------|--------|-----------|
| Email 1 | Inmediato | Resultado del quiz + recurso complementario |
| Email 2 | Día 2 | Caso de estudio relevante al bucket |
| Email 3 | Día 4 | Insight adicional + soft CTA |
| Email 4 | Día 7 | Invitación a demo/call + urgencia |
| Email 5 | Día 14 | Último follow-up + alternativa de bajo compromiso |

### Integración con CRM

| Dato del quiz | Campo en CRM | Uso |
|--------------|-------------|-----|
| Bucket asignado | Tag o campo personalizado | Segmentación de comunicación |
| Respuesta PREGUNTA RAÍZ | Nota en el contacto | Personalizar discovery call |
| Score de urgencia | Lead score | Priorizar follow-up |
| Respuestas blind-spot | Nota en el contacto | Preparar talking points |

### Handoff a ventas

| Criterio | Acción |
|----------|--------|
| Bucket Tier 1 + urgencia alta | SDR contacta en <24h con referencia al resultado |
| Bucket Tier 1 + urgencia media | Email sequence completa + SDR si abre email 3+ |
| Bucket Tier 2 | Email sequence completa, SDR solo si pide demo |
| Bucket Tier 3 | Solo email sequence, sin SDR |

---

## Métricas del Funnel

### Embudo completo

| Etapa | Métrica | Target mínimo | Bueno | Excelente |
|-------|---------|--------------|-------|-----------|
| Hook → Quiz start | Click-through rate | >30% | >45% | >60% |
| Quiz start → Complete | Completion rate | >40% | >55% | >70% |
| Complete → Email | Capture rate | >30% | >45% | >60% |
| Email → CTA click | CTA rate | >15% | >25% | >40% |
| CTA → Meeting | Booking rate | >10% | >20% | >30% |

### Por bucket

| Métrica | Qué indica |
|---------|-----------|
| Distribución de buckets | Si es muy desbalanceada, revisar preguntas de segmentación |
| Completion rate por bucket | Si un bucket tiene mucho abandono, las preguntas no resuenan |
| CTA rate por bucket | Si un bucket no hace clic en CTA, la outcome page no conecta |
| Booking rate por bucket | Qué bucket convierte mejor a reuniones |
