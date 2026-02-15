# Indicadores de Salud por Deal

Senales rojo/amarillo/verde para evaluar la salud de cada deal en el pipeline. Basado en el SPICED score y comportamiento observable.

## Indicadores por Dimension SPICED

### Situation

| Verde | Amarillo | Rojo |
|-------|----------|------|
| Info completa: industria, tamano, tools, estructura, iniciativas | Info parcial: datos basicos pero faltan detalles de estructura | Solo tenemos nombre de empresa y contacto |
| Actualizada en ultimos 14 dias | Info tiene >30 dias sin actualizar | Info tiene >60 dias o nunca fue validada |
| Multiples fuentes (LinkedIn, web, CRM, conversacion) | Solo de una fuente | Basada en suposiciones |

### Pain

| Verde | Amarillo | Rojo |
|-------|----------|------|
| Dolor cuantificado + cualitativo | Solo cualitativo ("es un problema") | No hay dolor articulado |
| El prospect lo menciono proactivamente | Lo descubrimos con preguntas | Nosotros se lo "vendimos" |
| Multiples stakeholders confirman el dolor | Solo nuestro contacto lo confirma | Nadie mas en la cuenta sabe del dolor |
| Costo de no actuar documentado | Costo estimado vagamente | Sin costo de inaccion |

### Impact

| Verde | Amarillo | Rojo |
|-------|----------|------|
| ROI cuantificado y validado por el prospect | ROI estimado por nosotros | Sin business case |
| Conectado con OKRs/metas de la empresa | Conectado con metas del departamento | No conectado con ninguna meta |
| Impact racional + emocional documentado | Solo racional | Solo features, no outcomes |
| El prospect puede articularle el valor a su jefe | Entendio el valor pero no lo puede repetir | No entiende el valor diferenciado |

### Critical Event

| Verde | Amarillo | Rojo |
|-------|----------|------|
| Fecha especifica con consecuencias documentadas | Fecha vaga ("este trimestre") | Sin fecha limite |
| Multiples presiones convergiendo | Una presion pero no urgente | "No hay prisa" |
| El prospect menciona la fecha proactivamente | La fecha salio por preguntas | Nosotros inventamos la urgencia |
| Consecuencias de no actuar son graves y claras | Consecuencias moderadas | Sin consecuencias reales |

### Decision

| Verde | Amarillo | Rojo |
|-------|----------|------|
| Buying center mapeado (3+ roles identificados) | Solo conocemos al champion y DM | Single-threaded (1 contacto) |
| Acceso al decision maker | Champion tiene acceso, nosotros no | No sabemos quien decide |
| Criterios de decision documentados | Criterios vagos | Sin criterios — "lo van a evaluar" |
| Proceso y timeline confirmados | Proceso conocido pero timeline incierto | Sin visibilidad del proceso |
| Mutual Action Plan acordado | Plan unilateral (nuestro) | Sin plan de accion |
| Legal/procurement involucrados | Legal mencionado pero no activo | No sabemos si requieren legal |

## Indicadores de Comportamiento del Prospect

### Engagement (Verde)
- Responde emails en <24h
- Asiste a todas las reuniones programadas
- Trae a mas stakeholders a las reuniones
- Comparte informacion interna proactivamente
- Agenda proximos pasos por su cuenta
- Hace preguntas sobre implementacion y timeline

### Engagement (Amarillo)
- Responde emails en 24-72h
- Asiste a reuniones pero cancela/reprograma ocasionalmente
- Nuestro contacto participa solo — no involucra a otros
- Responde preguntas pero no comparte informacion extra
- Proximos pasos requieren push de nuestra parte
- Preguntas centradas en features, no en resultados

### Engagement (Rojo)
- No responde emails por >72h
- Cancela reuniones sin reprogramar
- Ghosting despues de enviar propuesta
- No involucra a otros stakeholders a pesar de pedirlo
- Pide informacion generica ("envienme un brochure")
- No tiene proximos pasos definidos
- Dice "yo les aviso" o "estamos evaluando" sin fecha

## Indicadores de Pipeline Health (Nivel Macro)

### Pipeline Coverage

| Coverage | Estado | Accion |
|----------|--------|--------|
| >4x target | Verde | Pipeline saludable. Enfocarse en conversion |
| 3-4x target | Amarillo | Aceptable pero fragil. Incrementar sourcing |
| <3x target | Rojo | Pipeline insuficiente. Modo alerta en lead generation |

### Velocity (Tiempo en Etapa)

| Etapa | Tiempo saludable | Tiempo riesgo | Tiempo critico |
|-------|-----------------|---------------|----------------|
| Discovery | <14 dias | 14-28 dias | >28 dias |
| Evaluation | <21 dias | 21-42 dias | >42 dias |
| Proposal | <14 dias | 14-21 dias | >21 dias |
| Negotiation | <14 dias | 14-28 dias | >28 dias |

*Nota: Estos tiempos son para ciclos de venta de 60-90 dias. Para enterprise (6+ meses), multiplicar x2-3.*

### Conversion Rates Saludables (B2B SaaS benchmark)

| Transicion | Benchmark | Preocupante | Critico |
|-----------|-----------|-------------|---------|
| MQL → SQL | 30-40% | 20-30% | <20% |
| SQL → Opportunity | 50-60% | 35-50% | <35% |
| Opportunity → Proposal | 60-70% | 45-60% | <45% |
| Proposal → Closed Won | 25-35% | 15-25% | <15% |
| Overall MQL → Closed Won | 3-5% | 1-3% | <1% |

## Decision Framework: Que Hacer con Cada Color

### Deal Verde (Score SPICED 23-30)
- Avanzar a la siguiente etapa
- Siguiente paso claro con fecha
- Incluir en forecast (commit si esta en negotiation+)
- Dedicar tiempo de calidad (no micromanagear)

### Deal Amarillo (Score SPICED 15-22)
- Identificar que dimension SPICED esta baja
- Crear plan especifico para subir el score
- Involucrar al manager/lider en strategia
- Poner deadline: si no mejora en 2 semanas, reclasificar
- NO incluir en forecast commit

### Deal Rojo (Score SPICED 5-14)
- Reuniion de 15 minutos con el rep para decidir:
  - Hay algun path realista a verde? (raro)
  - Se puede salvar con una accion especifica? (posible)
  - Debemos moverlo a nurture o descartar? (probable)
- Remover del pipeline activo si no hay plan concreto
- Mejor un pipeline limpio y realista que uno inflado con fantasmas
