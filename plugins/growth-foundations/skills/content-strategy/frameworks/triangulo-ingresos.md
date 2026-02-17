# TRIÁNGULO DE INGRESOS — Framework de Priorización de Temas por Revenue

## Concepto Central

El TRIÁNGULO DE INGRESOS es un sistema de priorización que selecciona temas de contenido basándose en su potencial de generar ingresos, no solo tráfico. Usa señales de intención comercial (CPC) como filtro inicial y luego puntúa cada tema en dos dimensiones.

> "No escribas sobre lo que es popular. Escribe sobre lo que es rentable."

## El Proceso en 3 Pasos

### Paso 1: Filtrar por CPC > $10

El CPC (Costo Por Click) en Google Ads es una proxy directa de intención comercial. Si los anunciantes pagan más de $10 por un click en ese keyword, significa que hay dinero en la conversión.

**Cómo extraer datos**:
1. Ingresar URLs de competidores en Ahrefs/SEMrush
2. Exportar lista de keywords orgánicos
3. Filtrar: CPC > $10 (o CPC > $5 si el nicho tiene CPCs bajos)
4. Eliminar keywords de marca (branded)
5. Resultado: lista depurada de 50-200 keywords con intención comercial

**Excepción para mercados LATAM**: En muchos mercados hispanohablantes los CPCs son menores. Ajustar el umbral:
- Mercado US-hispano: CPC > $8
- México/Colombia/Argentina: CPC > $3-5
- Nicho B2B específico: usar el CPC del equivalente en inglés como referencia

### Paso 2: Calcular Score de Prioridad

Para cada tema que pase el filtro, calcular:

**Score = Potencial de Revenue (1-10) × Potencial de Tráfico (1-10)**

#### Potencial de Revenue (1-10)

| Score | Criterio |
|-------|----------|
| 9-10 | El tema conecta directamente con tu oferta core. Un lector de este contenido es un prospect ideal. |
| 7-8 | El tema se relaciona fuertemente con tu oferta. El lector tiene el problema que resuelves. |
| 5-6 | Relación moderada. El lector podría necesitar tu servicio eventualmente. |
| 3-4 | Relación indirecta. Atrae audiencia adyacente pero no compradores inmediatos. |
| 1-2 | Poca relación con tu oferta. Genera tráfico pero no revenue. |

#### Potencial de Tráfico (1-10)

| Score | Criterio |
|-------|----------|
| 9-10 | Volumen de búsqueda >10,000/mes. Tema amplio con muchas variaciones long-tail. |
| 7-8 | Volumen 3,000-10,000/mes. Competencia moderada, factible rankear top 5. |
| 5-6 | Volumen 1,000-3,000/mes. Nicho específico con competencia manejable. |
| 3-4 | Volumen 300-1,000/mes. Long-tail específico, fácil de rankear. |
| 1-2 | Volumen <300/mes. Muy específico, solo vale si Revenue Potential es 9-10. |

### Paso 3: Priorizar y Clasificar

Ordenar la lista por score descendente. Los top 10-20 temas son tu roadmap de contenido.

**Clasificación por score**:
- **Score 60-100**: Prioridad máxima — Crear inmediatamente. Estos temas son tu "Masterpiece Content".
- **Score 30-59**: Prioridad media — Crear en los primeros 3 meses. Buenos temas de soporte.
- **Score 10-29**: Prioridad baja — Solo si hay capacidad. Útiles para volumen pero no urgentes.
- **Score 1-9**: No crear — El esfuerzo no justifica el retorno.

## Worksheet de Scoring

Para la plantilla ejecutable que Claude puede completar con el usuario, leer `../templates/topic-priority-worksheet.md`.

## Ejemplos B2B LATAM

### Ejemplo 1: SaaS de CRM para PyMEs

| Tema | CPC | Revenue (1-10) | Tráfico (1-10) | Score | Nivel PENDIENTE |
|------|-----|----------------|-----------------|-------|-----------------|
| "Mejor CRM para pequeñas empresas" | $12 | 10 | 7 | 70 | Black Diamond |
| "Cómo organizar contactos de clientes" | $6 | 7 | 8 | 56 | Green Circle |
| "Plantilla de pipeline de ventas" | $8 | 8 | 5 | 40 | Blue Square |

### Ejemplo 2: Agencia de Marketing Digital

| Tema | CPC | Revenue (1-10) | Tráfico (1-10) | Score | Nivel PENDIENTE |
|------|-----|----------------|-----------------|-------|-----------------|
| "Agencia de marketing digital precios" | $15 | 10 | 6 | 60 | Black Diamond |
| "Cómo crear una estrategia de redes sociales" | $4 | 5 | 9 | 45 | Green Circle |
| "Checklist de auditoría SEO" | $11 | 8 | 5 | 40 | Blue Square |

### Ejemplo 3: Consultoría de Transformación Digital

| Tema | CPC | Revenue (1-10) | Tráfico (1-10) | Score | Nivel PENDIENTE |
|------|-----|----------------|-----------------|-------|-----------------|
| "Consultoría de transformación digital" | $20 | 10 | 4 | 40 | Black Diamond |
| "Qué es la transformación digital en empresas" | $5 | 6 | 9 | 54 | Green Circle |
| "Guía de automatización de procesos empresariales" | $9 | 8 | 6 | 48 | Blue Square |

## Conexión con Greatest Hits Survey

El TRIÁNGULO DE INGRESOS funciona mejor cuando se combina con validación cualitativa. El ENCUESTA DE RESONANCIA pregunta a tu audiencia "¿cuál es tu mayor desafío con [tema]?" y las respuestas informan:

1. **Qué temas tienen demanda real** (no solo volumen de búsqueda)
2. **Qué ángulo usar** (el lenguaje exacto de tu audiencia)
3. **Qué content upgrades crear** (los problemas específicos que quieren resolver)

Orden recomendado: ENCUESTA DE RESONANCIA → TRIÁNGULO DE INGRESOS → Mapeo PENDIENTE
