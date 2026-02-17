# Template: Critical Event Planner (T-55)

Template para establecer, documentar, y acelerar critical events en deals activos. Guia al vendedor desde el diagnostico del tipo de comprador hasta el email de confirmacion y el backward planning completo.

> **Output Contract**: Plan de critical event completo con fecha establecida, backward timeline, email de confirmacion, y estrategia de aceleracion.
> **Benchmark**: CE date documentado con consecuencias, backward timeline de 5+ hitos, email de confirmacion enviado, buyer type identificado, 90-day test completado.

---

## Seccion 1: Perfil del Deal

| Campo | Valor |
|-------|-------|
| **Nombre del deal** | ___ |
| **Empresa / Prospect** | ___ |
| **Champion interno** | ___ |
| **Decision-maker** | ___ |
| **Etapa actual del deal** | ___ |
| **Valor estimado (ACV)** | $___ |
| **Fecha de creacion del deal** | ___ |
| **Dias en pipeline** | ___ |
| **Competidores identificados** | ___ |
| **Ultima interaccion** | ___ |

### Resumen PULSO del deal

| Dimension | Detalle |
|-----------|---------|
| **P** (Panorama) | ___ |
| **U** (Urgencia) | ___ |
| **L** (Logro) | ___ |
| **S** (Situación Crítica) | ___ |
| **O** (Organización — proceso y criterios) | ___ |

---

## Seccion 2: Diagnostico del Buyer Type

Responder las 5 preguntas de diagnostico para determinar el tipo de comprador:

| # | Pregunta | Respuesta del prospect |
|---|----------|----------------------|
| 1 | "Han experimentado este problema antes?" | ___ |
| 2 | "Cuando ocurrio por ultima vez?" | ___ |
| 3 | "Que paso cuando ocurrio?" | ___ |
| 4 | "Han intentado resolverlo antes?" | ___ |
| 5 | "Hay una fecha especifica en la que necesitan tenerlo resuelto?" | ___ |

### Resultado del diagnostico

| Tipo | Descripcion | Aplica? |
|------|-------------|---------|
| **Tipo 1** | No ha experimentado el problema. Nice-to-have. | [ ] |
| **Tipo 2** | Reconoce la severidad. Need-to-have. Busca activamente. | [ ] |
| **Tipo 3** | Subestimo el problema. Goes dark. Sin respuesta. | [ ] |
| **Tipo 4** | Problema volvio a ocurrir. Must-have. HOT lead. | [ ] |

**Tipo de comprador identificado**: ___

### Estrategia segun tipo

| Si es Tipo... | Estrategia | Acciones inmediatas |
|---------------|-----------|---------------------|
| **1** | Educar con referencias de terceros | Preparar 2-3 historias de empresas similares. Compartir datos de industria. No presionar. |
| **2** | Asistir en el proceso de trade-offs | Guiar evaluacion. Facilitar. Establecer CE date ahora. |
| **3** | Distanciarte. Posible NO BID. | Email de puerta abierta. No perseguir. Evaluar si vale invertir mas tiempo. |
| **4** | Asistir rapidamente | No bloquear con burocracia. Facilitar todo. Mover rapido. |

**Acciones inmediatas definidas**:

1. ___
2. ___
3. ___

---

## Seccion 3: Establecer Critical Event

### Pregunta 1: La fecha

> "Cuando necesitas esto en funcionamiento?"

**Variacion usada**: ___

**Respuesta del prospect**: ___

**Fecha establecida**: ___

### Pregunta 2: Las consecuencias

> "Que pasa si no llegas a esa fecha?"

**Variacion usada**: ___

**Respuesta del prospect**: ___

**Consecuencias documentadas**:

| Consecuencia | Severidad (1-5) | Quien se ve afectado |
|-------------|-----------------|---------------------|
| ___ | ___ | ___ |
| ___ | ___ | ___ |
| ___ | ___ | ___ |

### Pregunta 3: El cierre del CE

> "Si necesitas esto funcionando para **{fecha}** para obtener **{impacto}** o enfrentar **{consecuencia}**... como podemos ayudarte a llegar ahi?"

**Version personalizada de la pregunta**:

> "Si necesitas ___ funcionando para **___** para obtener **___** o enfrentar **___**... como podemos ayudarte a llegar ahi?"

**Respuesta del prospect**: ___

### Validacion del CE

| Criterio | Si / No |
|----------|---------|
| La fecha es del negocio del cliente (no nuestra) | ___ |
| Las consecuencias son concretas y medibles | ___ |
| El prospect articulo las consecuencias con sus palabras | ___ |
| Hay un evento externo real detras de la fecha (SKO, regulacion, fin de contrato, lanzamiento) | ___ |
| El champion confirma que la fecha es real | ___ |

**CE validado**: Si / No

**Si NO esta validado, que falta**: ___

---

## Seccion 4: Backward Planning

Trabajar hacia atras desde la fecha del CE. Empezar desde go-live (no desde PO):

| # | Hito | Fecha | Duracion estimada | Responsable | Dependencia |
|---|------|-------|-------------------|-------------|-------------|
| 1 | **GO-LIVE (CE date)** | ___ | — | Cliente | — |
| 2 | Integracion / Configuracion completa | ___ | ___ semanas | ___ | Hito 1 |
| 3 | Desarrollo / Setup tecnico | ___ | ___ semanas | ___ | Hito 2 |
| 4 | Kick-off / PO firmado | ___ | ___ dias | ___ | Hito 3 |
| 5 | Legal / Procurement | ___ | ___ semanas | ___ | Hito 4 |
| 6 | Decision final del comite | ___ | ___ semana | ___ | Hito 5 |
| 7 | Propuesta presentada | ___ | ___ dias | ___ | Hito 6 |
| 8 | **HOY** | ___ | — | — | — |

### Analisis de viabilidad

| Metrica | Valor |
|---------|-------|
| **Dias entre HOY y CE date** | ___ |
| **Dias necesarios segun backward plan** | ___ |
| **Margen de maniobra** | ___ dias |
| **Buffer recomendado (15%)** | ___ dias |
| **Margen real (con buffer)** | ___ dias |

**Conclusion**:
- [ ] Timeline viable — margen positivo
- [ ] Timeline ajustado — margen < 1 semana, necesita aceleracion
- [ ] Timeline no viable — margen negativo, necesita renegociar CE date

**Si el timeline no es viable**:

> Script: "Basado en los pasos necesarios para tener esto en produccion, la unica forma de llegar a {fecha CE} es tomar la decision esta semana. Es eso posible? Si no, necesitamos ajustar la fecha objetivo y entender que eso implica {consecuencia}."

---

## Seccion 5: Email de Confirmacion

Enviar dentro de las 24 horas posteriores a establecer el CE. Email standalone (no enterrado en un follow-up).

### Datos del email

| Campo | Valor |
|-------|-------|
| **Para** | ___ |
| **CC** | ___ |
| **Subject** | Confirmacion: ___ en funcionamiento para ___ |

### Cuerpo del email

```
Hola ___,

Gracias por la conversacion de hoy. Quiero confirmar lo que acordamos:

CRITICAL EVENT:
- Fecha objetivo: ___
- Necesidad: ___
- Impacto si se cumple: ___
- Consecuencia si no se cumple: ___

TIMELINE DE TRABAJO (hacia atras desde ___):
- ___: ___ — Responsable: ___
- ___: ___ — Responsable: ___
- ___: ___ — Responsable: ___
- ___: ___ — Responsable: ___
- ___: ___ — Responsable: ___

SIGUIENTE PASO:
- ___  para ___, liderado por ___

Por favor confirma que este timeline refleja correctamente lo que
discutimos. Si algo cambio, necesitamos ajustar ahora para no
comprometer la fecha de ___.

Saludos,
___
```

### Checklist de envio

- [ ] Subject line sigue el formato: "Confirmacion: {solucion} en funcionamiento para {fecha}"
- [ ] Usa las palabras del cliente, no las mias
- [ ] Incluye consecuencias concretas
- [ ] Timeline con responsables para cada hito
- [ ] Siguiente paso es concreto (que, quien, cuando)
- [ ] Pide confirmacion explicita
- [ ] Copia a todos los stakeholders relevantes
- [ ] Enviado dentro de las 24 horas

---

## Seccion 6: Value-CE Alignment

Verificar que el CE y el Value esten alineados (sal y pimienta):

| Dimension | Detalle | Status |
|-----------|---------|--------|
| **Value cuantificado** | $___ /ano o ___% mejora | Documentado / Pendiente |
| **CE date** | ___ | Confirmado / Pendiente |
| **Consecuencias del CE** | ___ | Articuladas por prospect / Asumidas |

### Diagnostico de alignment

| Escenario | Status | Accion |
|-----------|--------|--------|
| **Value alto + CE fuerte** | Deal se cierra | Mantener momentum, no sobre-vender |
| **Value alto + CE debil** | Deal se retrasa | **Prioridad**: Establecer o fortalecer CE |
| **Value bajo + CE fuerte** | Deal en riesgo | **Prioridad**: Fortalecer value proposition |
| **Value bajo + CE debil** | Deal muerto | Reevaluar si vale invertir tiempo. Posible NO BID. |

**Status actual del deal**: ___

**Accion prioritaria**: ___

---

## Seccion 7: Test de los 90 Dias

> "Hay alguna razon por la cual NO podrian implementar esto en los proximos 90 dias?"

**Respuesta del prospect**: ___

### Interpretacion

| Si la respuesta fue... | Significado | Siguiente paso |
|------------------------|------------|----------------|
| "No, ninguna razon" | CE implicito de 90 dias | Construir backward plan de 90 dias |
| "Si, presupuesto" | Bloqueador financiero | Resolver presupuesto. Quien aprueba? Cuando hay ciclo? |
| "Si, decision interna" | Falta alineacion | Activar relationship mapping. Quien bloquea? |
| "Si, otro proyecto" | Competencia interna | Cuantificar costo de esperar. "Cada mes sin esto cuesta $___" |
| "Si, no estamos listos" | Tipo 1 — no reconoce severidad | Volver a educacion con referencias |

**Bloqueadores identificados**:

1. ___
2. ___

**Plan para resolver bloqueadores**:

1. ___
2. ___

---

## Seccion 8: Decision Recipe

Pasos concretos para llegar desde el estado actual hasta el CE date:

| # | Paso | Responsable | Fecha limite | Status |
|---|------|-------------|-------------|--------|
| 1 | ___ | ___ | ___ | Pendiente / En progreso / Completado |
| 2 | ___ | ___ | ___ | Pendiente / En progreso / Completado |
| 3 | ___ | ___ | ___ | Pendiente / En progreso / Completado |
| 4 | ___ | ___ | ___ | Pendiente / En progreso / Completado |
| 5 | ___ | ___ | ___ | Pendiente / En progreso / Completado |
| 6 | ___ | ___ | ___ | Pendiente / En progreso / Completado |

### Riesgos identificados

| Riesgo | Probabilidad | Impacto | Mitigacion |
|--------|-------------|---------|------------|
| ___ | Alta / Media / Baja | ___ | ___ |
| ___ | Alta / Media / Baja | ___ | ___ |
| ___ | Alta / Media / Baja | ___ | ___ |

### Siguiente paso inmediato

| Campo | Valor |
|-------|-------|
| **Que** | ___ |
| **Quien** | ___ |
| **Cuando** | ___ |
| **Como confirmar** | ___ |

---

## Metadata

| Campo | Valor |
|-------|-------|
| **Template ID** | T-55 |
| **Nombre** | Critical Event Planner |
| **Plugin** | play-to-win |
| **Skill** | advanced-techniques |
| **Framework de referencia** | `frameworks/critical-event-acceleration.md` |
| **Concepto fuente** | Aceleracion de Eventos Criticos |
| **Version** | 1.0.0 |
| **Metodologia** | Metodología GrowthOS / PULSO |
| **Tiempo estimado** | 45-60 minutos |
| **Prerequisitos** | Discovery completado, PULSO documentado, champion identificado |
