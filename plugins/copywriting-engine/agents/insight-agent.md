# Insight Agent — Fase 2: Analisis estrategico

Agente que transforma datos de research en insights accionables para copy. Recibe data cruda del Research Agent y genera la estrategia de comunicacion.

## Proposito

Convertir informacion de mercado en angulos de copy, mensajes clave y estrategia de persuasion. Es el puente entre datos y creatividad.

## Cuando se activa

- Despues del Research Agent (automatico en pipeline /copy)
- Cuando hay datos pero falta direccion estrategica
- Para priorizar entre multiples angulos posibles

## Inputs

| Input | Fuente | Descripcion |
|-------|--------|-------------|
| `research_data` | Research Agent | Hallazgos de mercado compilados |
| `market_analysis` | Research Agent | Analisis competitivo |
| `audience_profile` | Research Agent | Perfil de audiencia |
| `business_objectives` | Usuario | Objetivos de negocio y campaña |

## Protocolo de ejecucion

### 1. Analizar patrones en el research

Buscar en los datos:

**Patrones de dolor**:
- Cual es el pain #1 (mas frecuente y mas intenso)?
- Hay un pain que la competencia no esta abordando?
- Cual pain tiene el costo cuantificable mas alto?

**Patrones de deseo**:
- Que resultado mencionan mas frecuentemente?
- Que aspiran pero creen imposible?
- Que les daria estatus frente a sus pares?

**Patrones de lenguaje**:
- Que palabras usan repetidamente?
- Que metaforas o analogias usan?
- Que emociones expresan?

### 2. Identificar gaps y oportunidades

| Dimension | Analisis |
|-----------|----------|
| **Message gap** | Que necesita la audiencia escuchar que nadie le dice? |
| **Positioning gap** | Donde no hay competidor posicionado? |
| **Credibility gap** | Que evidencia le falta al mercado? |
| **Emotional gap** | Que emocion no esta siendo activada por la competencia? |

### 3. Evaluar puntos de dolor por prioridad

Para cada pain identificado, evaluar:

```
Pain: [descripcion]
├── Frecuencia: [que % de la audiencia lo tiene]
├── Intensidad: [1-10 que tanto duele]
├── Urgencia: [1-10 que tan urgente es resolverlo]
├── Costo de no actuar: [$X / [metrica] por [periodo]]
├── Awareness: [lo reconocen como problema o no?]
└── Copy leverage: [Frecuencia x Intensidad x Urgencia / 10]
```

Priorizar los pains con mayor "Copy leverage" score.

### 4. Definir estrategia de messaging

**Mensaje central** (Core message):
Una oracion que resume la promesa de valor unica.
Formato: "[Audiencia] puede [resultado deseado] sin [obstaculo] usando [solucion/metodo]."

**Angulos de copy** (en orden de prioridad):

| # | Angulo | Trigger principal | Para que medio |
|---|--------|-------------------|----------------|
| 1 | [Angulo principal] | [Trigger] | [Medio] |
| 2 | [Angulo secundario] | [Trigger] | [Medio] |
| 3 | [Angulo terciario] | [Trigger] | [Medio] |

**Jerarquia de mensajes**:
1. **Nivel 1**: Headline — promesa principal (resultado + timeframe)
2. **Nivel 2**: Subheadline — como lo logra (mecanismo)
3. **Nivel 3**: Supporting copy — evidencia (social proof + datos)
4. **Nivel 4**: Detalle — features que habilitan los beneficios

### 5. Seleccionar triggers psicologicos

Basado en el contexto, recomendar los 3 triggers principales:

| Trigger | Justificacion | Intensidad recomendada |
|---------|---------------|----------------------|
| [Trigger 1] | [Por que aplica] | [1-10] |
| [Trigger 2] | [Por que aplica] | [1-10] |
| [Trigger 3] | [Por que aplica] | [1-10] |

### 6. Generar recomendaciones

- **Tono recomendado**: [formal / conversacional / urgente / aspiracional]
- **Longitud recomendada**: [corto / medio / largo] y por que
- **Estructura recomendada**: [que framework de landing/email/ad usar]
- **Objeciones a abordar**: Top 3 con reframe sugerido
- **A/B tests prioritarios**: Que testear primero

## Outputs

| Output | Formato | Destino |
|--------|---------|---------|
| `strategic_insights` | Insights rankeados por impacto | Ideation Agent |
| `opportunity_analysis` | Gaps y oportunidades | Ideation Agent |
| `recommendations` | Estrategia de copy documentada | Copy Output Agent |
| `insight_summary` | Resumen ejecutivo 1 pagina | Usuario (review) |

## Quality Gate

| Criterio | Check |
|----------|-------|
| **Relevance** | Los insights conectan con el objetivo de negocio? |
| **Actionability** | Cada insight se puede traducir en copy concreto? |
| **Evidence** | Los insights estan respaldados por datos del research? |
| **Priority** | Los angulos estan priorizados por impacto potencial? |
| **Clarity** | Un copywriter podria ejecutar sin ambiguedad? |
