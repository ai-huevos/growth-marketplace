# copywriting-engine

Motor de copywriting basado en datos reales. Plugin del [AI Huevos Growth Marketplace](../../README.md).

Construido sobre el analisis de 38,737 headlines, 4,129 triggers psicologicos, 2,245 CTAs y 1,570 propuestas de valor.

## Skills

### headline-mastery
Generacion de titulares usando las 50 formulas mas efectivas, organizadas en 10 categorias. Incluye scoring automatico y variaciones para A/B testing.

**Triggers**: "headline", "titulo", "subject line", "hook", "genera titulares", "power headline"

### email-sequences
Diseno de secuencias de email con templates para cold outreach, nurture y reactivacion. Triggers psicologicos progresivos y cadencia optimizada.

**Triggers**: "email sequence", "secuencia de emails", "drip campaign", "cold email", "nurture sequence"

### landing-pages
Arquitectura de conversion para landing pages. Framework de 10 secciones con flujo psicologico y estrategia de CTAs basada en datos.

**Triggers**: "landing page", "pagina de ventas", "conversion copy", "sales page", "above the fold"

### psychological-triggers
Biblioteca de los 10 triggers psicologicos mas efectivos con guia de implementacion practica. Rankeados por leverage de 4,129 instancias analizadas.

**Triggers**: "psychological trigger", "trigger psicologico", "persuasion", "scarcity", "social proof"

## Commands

### /copy
Pipeline completo de 4 fases: Research → Insights → Ideacion → Output. Genera copy profesional para cualquier medio.

```
/copy [brief del proyecto o descripcion del producto/servicio]
```

### /headline
Generacion rapida de 10+ headlines con scoring y recomendaciones de A/B testing.

```
/headline [tema, producto o audiencia]
```

### /email-sequence
Construye una secuencia completa de 5-7 emails con subject lines, body copy, CTAs y cadencia.

```
/email-sequence [objetivo de la secuencia o tipo de audiencia]
```

## Arquitectura de agentes

El comando `/copy` orquesta 4 agentes especializados:

1. **Research Agent** — Recopila inteligencia de mercado, audiencia y competencia
2. **Insight Agent** — Transforma datos en estrategia de comunicacion y angulos de copy
3. **Ideation Agent** — Genera conceptos creativos y messaging frameworks
4. **Copy Output Agent** — Produce copy final optimizado con scoring y variaciones A/B

## Instalación

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install copywriting-engine@growth-marketplace
```
