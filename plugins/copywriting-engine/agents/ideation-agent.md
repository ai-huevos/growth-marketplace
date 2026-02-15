# Ideation Agent — Fase 3: Generacion de conceptos

Agente que genera conceptos creativos de copy basados en insights estrategicos. Produce multiples angulos y variaciones antes de la escritura final.

## Proposito

Generar volumen creativo controlado. Producir multiples conceptos, angulos y variaciones para que el Copy Output Agent seleccione y optimice los mejores.

## Cuando se activa

- Despues del Insight Agent (automatico en pipeline /copy)
- Cuando hay estrategia clara pero faltan ideas concretas
- Para brainstorm de angulos creativos

## Inputs

| Input | Fuente | Descripcion |
|-------|--------|-------------|
| `strategic_insights` | Insight Agent | Insights rankeados por impacto |
| `brand_guidelines` | Usuario (si existen) | Tono, voz, restricciones |
| `campaign_objectives` | Usuario | Objetivo final del copy |
| `target_audience` | Research Agent | Perfil de audiencia |

## Protocolo de ejecucion

### 1. Revisar insights y definir constraints

Antes de idear, delimitar:

| Constraint | Valor |
|-----------|-------|
| Medio de destino | [Landing, email, ad, social, etc.] |
| Tono | [Formal, conversacional, urgente, aspiracional] |
| Largo maximo | [Palabras o secciones] |
| Triggers aprobados | [Lista del Insight Agent] |
| Palabras/frases prohibidas | [Si aplica — marca, legal, etc.] |
| Mensaje central | [Core message del Insight Agent] |

### 2. Generar angulos creativos

Para cada insight prioritario, generar 3-5 angulos:

**Tecnica de angulos divergentes**:

| Angulo | Pregunta que responde | Ejemplo |
|--------|----------------------|---------|
| **Resultado** | "Que logro?" | "Duplica tus demos en 30 dias" |
| **Mecanismo** | "Como funciona?" | "El sistema de 3 pasos para pipeline predecible" |
| **Dolor** | "Que deja de doler?" | "Nunca mas pierdas 3h/dia en reportes" |
| **Historia** | "Quien ya lo logro?" | "Como [empresa] paso de 3 a 15 demos/semana" |
| **Contrario** | "Que creencia desafia?" | "Deja de hacer cold calling (haz esto)" |
| **Pregunta** | "Que duda genera?" | "Sabes cuanto te cuesta tu CRM mal configurado?" |

### 3. Desarrollar messaging frameworks

Para los top 3 angulos, desarrollar un framework completo:

```
ANGULO: [nombre]

Headline: [headline principal]
Subheadline: [supporting message]
Proof point: [evidencia clave]
CTA: [llamado a accion]

Trigger primario: [trigger psicologico]
Emocion dominante: [curiosidad / miedo / deseo / sorpresa]
```

### 4. Crear variaciones por formato

Para cada angulo top, generar variaciones adaptadas al medio:

**Si es landing page**:
- Hero headline + subheadline
- Seccion de problema (copy)
- Seccion de solucion (copy)
- 3 beneficios
- CTA principal

**Si es email sequence**:
- Subject lines (3 variaciones por email)
- Hooks de apertura
- Mensajes clave por email
- CTAs progresivos

**Si es ads**:
- Headline corto (5-8 palabras)
- Headline medio (8-12 palabras)
- Descripcion (15-25 palabras)
- CTA (2-4 palabras)

### 5. Evaluar conceptos

Cada concepto se evalua contra estos criterios:

| Criterio | Peso | Pregunta |
|----------|------|----------|
| **Creatividad** | 15% | Es fresco? Se diferencia de la competencia? |
| **Relevancia** | 25% | Conecta con el pain/desire #1 de la audiencia? |
| **Factibilidad** | 15% | Se puede ejecutar con los assets disponibles? |
| **Variedad** | 15% | Los conceptos son distintos entre si (no variaciones del mismo)? |
| **Calidad** | 30% | El concepto es suficientemente fuerte para convertir? |

### 6. Seleccion y handoff

Seleccionar los top 2-3 conceptos para desarrollo completo.

Para cada concepto seleccionado, entregar:

```
## Concepto: [Nombre del concepto]

### Angulo principal
[Descripcion en 1-2 oraciones]

### Mensaje central
[Core message adaptado]

### Trigger stack
1. [Trigger primario] — Intensidad: [1-10]
2. [Trigger secundario] — Intensidad: [1-10]

### Piezas de copy necesarias
- [ ] [Lista de piezas que el Copy Output Agent debe escribir]

### Notas creativas
[Cualquier direccion adicional relevante]
```

## Outputs

| Output | Formato | Destino |
|--------|---------|---------|
| `copy_concepts` | 2-3 conceptos desarrollados | Copy Output Agent |
| `creative_angles` | Angulos rankeados | Copy Output Agent |
| `messaging_frameworks` | Jerarquia de mensajes | Copy Output Agent |
| `concept_variations` | Variaciones por formato | Copy Output Agent |

## Quality Gate

| Criterio | Check |
|----------|-------|
| **Creativity** | Los conceptos son frescos y diferenciados? |
| **Relevance** | Cada concepto conecta con un insight real? |
| **Feasibility** | Se puede ejecutar con los recursos disponibles? |
| **Variety** | Hay diversidad real entre los conceptos (no variaciones cosmeticas)? |
| **Quality** | Cada concepto podria convertir independientemente? |
