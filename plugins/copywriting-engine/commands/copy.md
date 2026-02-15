---
description: Generacion de copy completa en 4 fases — research, insights, ideacion, output final. Pipeline completo para cualquier medio.
argument-hint: <brief del proyecto o descripcion del producto/servicio>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# /copy — Pipeline completo de generacion

El usuario quiere generar copy profesional para: $ARGUMENTS

## Instrucciones

Ejecuta el pipeline de 4 fases en orden. Cada fase alimenta la siguiente. No saltes fases.

### Fase 1: Research (Inteligencia de mercado)

Leer `agents/research-agent.md` para el protocolo completo.

1. **Recopilar brief del usuario**. Si $ARGUMENTS es vago, preguntar:
   - Que producto/servicio vendes?
   - A quien le vendes? (audiencia, cargo, industria)
   - Que medio necesitas? (landing page, emails, ads, social)
   - Que accion quieres que tome el lector? (comprar, registrarse, agendar demo)
   - Tienes testimonios, datos, o case studies?

2. **Investigar mercado** usando WebSearch:
   - Buscar competidores y analizar su messaging
   - Buscar pains de la audiencia en foros, reviews, redes
   - Buscar tendencias y datos del sector

3. **Compilar perfil de audiencia**: demograficos + psicograficos + lenguaje

**Output de fase 1**: market_insights, competitor_analysis, audience_profile

### Fase 2: Insights (Analisis estrategico)

Leer `agents/insight-agent.md` para el protocolo completo.

1. Analizar patrones en los datos recopilados
2. Identificar pain #1, desire #1, y gap de messaging
3. Definir core message (1 oracion)
4. Seleccionar 3 triggers psicologicos principales (consultar `skills/psychological-triggers/SKILL.md`)
5. Definir tono y estructura recomendada
6. Priorizar angulos de copy

**Output de fase 2**: strategic_insights, core_message, trigger_stack, recommended_structure

### Fase 3: Ideacion (Generacion de conceptos)

Leer `agents/ideation-agent.md` para el protocolo completo.

1. Generar 5+ angulos creativos desde diferentes perspectivas
2. Desarrollar messaging framework para los top 3
3. Crear variaciones adaptadas al medio solicitado
4. Evaluar y seleccionar los 2 mejores conceptos

**Output de fase 3**: copy_concepts (top 2), messaging_frameworks, variations

### Fase 4: Copy Output (Escritura final)

Leer `agents/copy-output-agent.md` para el protocolo completo.
Leer las pattern libraries segun el medio:
- Headlines: `skills/headline-mastery/patterns/power-headlines.md`
- Triggers: `skills/psychological-triggers/patterns/trigger-library.md`
- Emails: `skills/email-sequences/templates/` (el template que corresponda)
- Landing pages: `skills/landing-pages/frameworks/conversion-architecture.md`

1. Seleccionar formulas y patrones optimos para el medio
2. Escribir el copy completo usando los conceptos ganadores
3. Aplicar triggers psicologicos seccion por seccion
4. Crear variaciones A/B con hipotesis
5. Scorear cada pieza (target: >7.5/10)
6. Entregar output final con notas de optimizacion

## Formato de entrega final

```
# Copy: [NOMBRE DEL PROYECTO]

## Brief
- Producto: [X]
- Audiencia: [X]
- Medio: [X]
- Objetivo: [X]

## Research highlights
- Pain #1: [X]
- Desire #1: [X]
- Gap de mercado: [X]

## Copy final

### [Pieza 1]
[Copy completo]

### [Pieza 2] (si aplica)
[Copy completo]

## Variaciones A/B
[Versiones alternativas]

## Scoring
| Pieza | Score | Estado |
|-------|-------|--------|
| [X] | [X/10] | [Listo / Optimizar] |

## Recomendaciones
- Testing: [que testear primero]
- Metricas: [que medir]
- Optimizacion: [proximos pasos]
```
