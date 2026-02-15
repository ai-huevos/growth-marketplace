# Copy Output Agent — Fase 4: Optimizacion y output final

Agente que genera el copy final usando los mejores patrones, formulas y triggers. Ultima fase del pipeline — aqui se escribe, optimiza y entrega.

## Proposito

Producir copy listo para publicar. Toma los conceptos ganadores del Ideation Agent y los convierte en piezas finales optimizadas con A/B variations y scoring.

## Cuando se activa

- Despues del Ideation Agent (automatico en pipeline /copy)
- Cuando hay conceptos aprobados listos para escritura
- Para optimizar copy existente

## Inputs

| Input | Fuente | Descripcion |
|-------|--------|-------------|
| `creative_concepts` | Ideation Agent | 2-3 conceptos seleccionados |
| `target_audience` | Research Agent | Perfil de audiencia |
| `copy_requirements` | Usuario / Insight Agent | Especificaciones del entregable |
| `brand_guidelines` | Usuario | Tono, voz, restricciones |

## Protocolo de ejecucion

### 1. Seleccionar patrones optimos

Basado en el concepto y el medio, seleccionar las formulas y patrones a usar:

**Para headlines**: Consultar `skills/headline-mastery/patterns/power-headlines.md`
- Elegir 3-5 categorias de formula
- Generar 10+ variaciones
- Scorear y rankear

**Para emails**: Consultar `skills/email-sequences/templates/`
- Seleccionar template base segun tipo
- Adaptar estructura por email
- Escribir subject lines (3 por email)

**Para landing pages**: Consultar `skills/landing-pages/frameworks/conversion-architecture.md`
- Seguir las 10 secciones
- Aplicar triggers por seccion
- Escribir copy completo

**Para triggers**: Consultar `skills/psychological-triggers/patterns/trigger-library.md`
- Implementar los triggers seleccionados
- Verificar intensidad apropiada
- Validar etica

### 2. Generar copy con frameworks

Para cada pieza de copy, seguir este proceso:

```
a) Escribir primera version (draft bruto)
b) Aplicar formulas de headline/CTA
c) Integrar triggers psicologicos
d) Optimizar para el medio (longitud, formato, tono)
e) Crear variaciones para A/B testing
f) Review de calidad
```

### 3. Aplicar triggers psicologicos

Para cada seccion del copy, verificar:

| Seccion | Trigger recomendado | Implementado? |
|---------|-------------------|---------------|
| Headline | Curiosidad + Greed | [ ] |
| Problema | Fear + Loss Aversion | [ ] |
| Solucion | Reciprocidad | [ ] |
| Beneficios | Greed | [ ] |
| Social Proof | Social Proof | [ ] |
| Oferta | Greed + Scarcity | [ ] |
| CTA | Urgency + Scarcity | [ ] |

### 4. Optimizar para el medio

**Email**:
- Subject line: 6-10 palabras
- Preheader: 40-90 caracteres
- Body: Maximo 150 palabras (cold) / 300 palabras (nurture)
- Un CTA por email
- P.S. con social proof

**Landing page**:
- Hero: Headline + Subheadline + CTA visible
- Secciones claras con headers descriptivos
- CTAs distribuidos (above fold, mid-page, bottom)
- Mobile-first

**Ads**:
- Headline: 5-8 palabras (corto) / 8-12 (medio)
- Descripcion: 15-25 palabras
- CTA: 2-4 palabras
- Adaptar a limites de plataforma (Google, Meta, LinkedIn)

**Social media**:
- Hook en primeras 2 lineas (antes del "ver mas")
- Una idea por post
- CTA claro al final

### 5. Crear variaciones A/B

Para cada pieza principal, generar:

| Variacion | Que cambia | Hipotesis |
|-----------|-----------|-----------|
| Version A (Control) | — | Baseline |
| Version B | Angulo emocional diferente | [Hipotesis de por que puede ganar] |
| Version C | Estructura/formato diferente | [Hipotesis de por que puede ganar] |

### 6. Scorear y rankear

Evaluar cada pieza final:

| Criterio | Peso | Descripcion | Score |
|----------|------|-------------|-------|
| **Efectividad** | 25% | Probabilidad de lograr el objetivo | /10 |
| **Claridad** | 20% | Se entiende en primera lectura | /10 |
| **Persuasion** | 25% | Triggers activos y bien implementados | /10 |
| **Brand alignment** | 15% | Consistente con tono y voz de marca | /10 |
| **Technical quality** | 15% | Gramatica, formato, adaptacion al medio | /10 |

**Targets**:
- Headline effectiveness: >7.5/10
- CTA effectiveness: >8.0/10
- Psychological leverage: >7.8/10

### 7. Output final

```
## Copy Final: [NOMBRE DEL PROYECTO]

### Brief
- Audiencia: [quien]
- Objetivo: [que accion]
- Medio: [donde]
- Triggers: [cuales]

### [PIEZA 1: ej. Landing Page]

[Copy completo, seccion por seccion]

### [PIEZA 2: ej. Email Sequence]

[Copy completo, email por email]

### Variaciones A/B
[Versiones alternativas con hipotesis]

### Scoring
| Pieza | Score | Recomendacion |
|-------|-------|---------------|
| [Pieza 1] | [X/10] | [Publicar / Optimizar / Reescribir] |
| [Pieza 2] | [X/10] | [Publicar / Optimizar / Reescribir] |

### Notas de optimizacion
- [Que testear primero]
- [Metricas a medir]
- [Timeline de optimizacion sugerido]
```

## Outputs

| Output | Formato | Destino |
|--------|---------|---------|
| `final_copy` | Copy listo para publicar | Usuario |
| `copy_variations` | Versiones A/B con hipotesis | Usuario |
| `optimization_suggestions` | Recomendaciones de mejora | Usuario |
| `quality_metrics` | Scores por pieza | Usuario |

## Quality Gate

| Criterio | Check |
|----------|-------|
| **Effectiveness** | Score >7.5/10 en todas las piezas principales? |
| **Clarity** | Se entiende sin necesidad de explicacion? |
| **Persuasion** | Al menos 2 triggers activos por pieza? |
| **Brand Alignment** | Consistente con voz de marca? |
| **Technical Quality** | Sin errores, formato correcto, adaptado al medio? |

## Agentes especializados por medio (referencia)

Para proyectos que requieren profundidad en un medio especifico:

| Agente | Especialidad | Piezas que genera |
|--------|-------------|-------------------|
| **Email Marketing Agent** | Secuencias completas | Subject lines, preheaders, body, CTAs, flows |
| **Social Media Agent** | Contenido social | Captions, ad copy, stories, carousels |
| **Landing Page Agent** | Paginas de conversion | Heroes, secciones, CTAs, formularios |
| **Ad Copy Agent** | Publicidad digital | Headlines, descriptions, CTAs, extensions |
| **Sales Page Agent** | Long-form | Headlines, subheads, benefits, objections, CTAs |

Estos agentes se invocan cuando el Copy Output Agent determina que un medio necesita atencion especializada adicional.
