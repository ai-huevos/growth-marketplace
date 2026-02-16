# growth-foundations

Frameworks fundamentales de B2B growth. Plugin gratuito del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### icp-analysis
Análisis de Ideal Customer Profile con scoring basado en SPICED. Define tu cliente ideal usando datos firmográficos + cualitativos, y genera un scoring model para calificar oportunidades.

**Triggers**: "ICP", "ideal customer profile", "target market", "customer segmentation", "qualify accounts"

### positioning
Framework de propuesta de valor y diferenciación competitiva. Usa Value Proposition Canvas para articular el valor único de tu producto/servicio.

**Triggers**: "positioning", "value proposition", "messaging", "differentiation", "product positioning"

### competitive-analysis
Análisis competitivo estructurado usando Five Forces de Porter + mapa competitivo visual. Identifica gaps de mercado y oportunidades de diferenciación.

**Triggers**: "competitive analysis", "competitors", "market landscape", "competitive intelligence", "market map"

### quiz-funnel
Diseño de quiz funnels para segmentar un mercado en 3-5 buckets accionables. Basado en el ASK Method adaptado a B2B e integrado con SPICED. Incluye frameworks de diseño de preguntas, scoring de buckets, y plan de stress test por <$500.

**Triggers**: "quiz funnel", "ASK Method", "market buckets", "survey funnel", "lead qualification quiz", "SMIQ", "stress test de mercado"

### content-strategy
Sistema de 2 frameworks para planificar, priorizar y distribuir contenido B2B que genera leads cualificados. Combina **Ski Slope Strategy** (progresión de dificultad por etapa del funnel) y **Topic Triangle** (priorización de temas por potencial de revenue). Incluye 3 workflows adaptados a LATAM: calendario de contenido, distribución por partnerships, y SEO content mapping.

**Triggers**: "content strategy", "estrategia de contenido", "ski slope", "topic triangle", "plan de contenido", "content calendar", "calendario de contenido", "content distribution", "contenido SEO"

## Commands

### /diagnostico
Assessment rápido usando el framework ClarQ. Evalúa una empresa en 4 dimensiones: GTM Strategy, Revenue Streams, Quota-to-Cash, y Capabilities. Output: heatmap rojo/amarillo/verde.

```
/diagnostico [nombre de empresa o descripción]
```

### /icp
Workshop interactivo para construir un Ideal Customer Profile. Guía al usuario paso a paso por el proceso de diagnóstico SPICED, análisis cuantitativo y cualitativo.

```
/icp [industria o contexto]
```

### /quiz
Workshop interactivo para diseñar un quiz funnel. Guía al usuario por 8 fases: contexto, buckets, SMIQ, diseño del quiz, survey, stress test, métricas, y output final.

```
/quiz [industria, producto, o mercado target]
```

## Instalación

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install growth-foundations@growth-marketplace
```
