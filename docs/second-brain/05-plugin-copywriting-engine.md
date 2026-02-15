# Plugin: copywriting-engine — Referencia Completa

## Identidad

- **Nombre**: copywriting-engine
- **Versión**: 1.0.0
- **Propósito**: Motor de copywriting basado en datos reales
- **Autor**: AI Huevos
- **Base de datos**: 38,737 headlines, 4,129 triggers psicológicos, 2,245 CTAs, 1,570 propuestas de valor analizados

## Componentes

- 4 Skills: headline-mastery, email-sequences, landing-pages, psychological-triggers
- 3 Commands: /copy, /headline, /email-sequence
- 4 Agents: research-agent, insight-agent, ideation-agent, copy-output-agent

---

## Skill 1: headline-mastery

**Triggers**: "headline", "título", "subject line", "hook", "genera titulares", "power headline"

### Qué hace
Generación de titulares usando las 50 fórmulas más efectivas, organizadas en 10 categorías. Scoring automático con target >7.5/10.

### Las 10 Categorías de Headlines

| # | Categoría | Mecanismo | Ejemplo |
|---|-----------|-----------|---------|
| 1 | Curiosity Gap | Vacío de conocimiento | "El email de 3 líneas que cerró un deal de $250K" |
| 2 | Power Promise | Resultado + timeframe | "Duplica tus demos en 30 días sin cold calling" |
| 3 | Social Proof | Números reales | "2,300 CMOs ya automatizaron su reporting" |
| 4 | Fear/Loss | Aversión a la pérdida | "Tu pipeline tiene una fuga de 40% y no lo sabes" |
| 5 | Contrarian | Desafiar creencias | "El embudo de ventas está muerto" |
| 6 | How-To | Habilidad + objeción | "Cómo cerrar deals de $100K+ sin case studies" |
| 7 | Secret/Insider | Info exclusiva | "El framework que los top closers de Salesforce usan" |
| 8 | Warning | Alertar peligro | "No contrates otro vendedor hasta que leas esto" |
| 9 | Direct Command | Orden + beneficio | "Triplica tu pipeline en 90 días" |
| 10 | Comparison | Enfrentar opciones | "Outbound vs Inbound: lo que 500 equipos revelaron" |

### Proceso (6 pasos)
1. Análisis de contexto (audiencia, producto, pain)
2. Selección de categorías de fórmula
3. Generación de 12-15 variaciones
4. Aplicación de potenciadores (triggers psicológicos)
5. Scoring (>7.5/10 para publicar)
6. Output con recomendaciones A/B

### Checklist de Calidad de Headlines
- ¿Se entiende en menos de 3 segundos?
- ¿Tiene entre 8 y 15 palabras?
- ¿Incluye dato específico (número, porcentaje, timeframe)?
- ¿Apela a una emoción clara?
- ¿Es relevante para el pain #1 de la audiencia?
- ¿Cumple la promesa (no es clickbait)?

### Reglas de Combinación
Las fórmulas más poderosas combinan 2 categorías:
- Curiosity + Number
- Social Proof + How-To
- Fear + Contrarian
- Command + Promise
- Warning + Secret

### Archivos
- `SKILL.md`: Proceso de generación
- `patterns/power-headlines.md`: Las 50 fórmulas con ejemplos
- `patterns/formulas.md`: Fórmulas adicionales

---

## Skill 2: email-sequences

**Triggers**: "email sequence", "secuencia de emails", "drip campaign", "cold email", "nurture sequence"

### Qué hace
Diseño de secuencias de email con persuasion ladder progresiva y cadencia optimizada.

### Persuasion Ladder (7 emails)
1. **Email 1 — Valor**: Dar algo útil sin pedir nada
2. **Email 2 — Insight**: Compartir conocimiento exclusivo
3. **Email 3 — Proof**: Social proof y resultados
4. **Email 4 — Pain**: Amplificar el dolor de no actuar
5. **Email 5 — Offer**: Presentar la solución
6. **Email 6 — Urgency**: Crear presión temporal
7. **Email 7 — Last Call**: Último intento antes del break-up

### Anatomía de un Email Efectivo
- **Subject line**: 6-10 palabras con trigger de curiosidad o urgencia
- **Preheader**: 40-90 caracteres que complementen el subject
- **Opening**: Primera línea que engancha (NO "Espero que estés bien")
- **Body**: Máximo 150 palabras (cold) / 300 palabras (nurture)
- **CTA**: Un solo call-to-action por email
- **P.S.**: Social proof o refuerzo de urgencia

### Templates Disponibles
- Cold outreach (primera contacto)
- Nurture (educación progresiva)
- Reactivación (clientes inactivos)

### Archivos
- `SKILL.md`: Framework completo
- `templates/cold-outreach.md`
- `templates/nurture.md`
- `templates/reactivation.md`

---

## Skill 3: landing-pages

**Triggers**: "landing page", "página de ventas", "conversion copy", "sales page", "above the fold"

### Qué hace
Arquitectura de conversión para landing pages. Framework de 10 secciones con flujo psicológico.

### Conversion Ladder
Atención → Interés → Deseo → Confianza → Acción

### Estructura de 10 Secciones
1. **Hero**: Headline + subheadline + CTA + micro social proof
2. **Problema**: Agitación del pain con datos
3. **Solución**: Presentación del producto/servicio
4. **Beneficios**: Features traducidas a outcomes
5. **Social Proof**: Testimoniales + logos + números
6. **Cómo Funciona**: 3-4 pasos simples
7. **Objeciones**: FAQ / objeciones comunes resueltas
8. **Pricing**: Estructura de precios con value stacking
9. **Garantía**: Eliminar riesgo percibido
10. **CTA Final**: Urgencia + scarcity + último push

### Trigger Mapping por Sección
| Sección | Trigger Recomendado |
|---------|-------------------|
| Hero | Curiosidad + Greed |
| Problema | Fear + Loss Aversion |
| Solución | Reciprocidad |
| Beneficios | Greed |
| Social Proof | Social Proof |
| Pricing/Oferta | Greed + Scarcity |
| CTA Final | Urgency + Scarcity |

### Archivos
- `SKILL.md`: Proceso de diseño
- `frameworks/conversion-architecture.md`: Estructura de 10 secciones con trigger mapping

---

## Skill 4: psychological-triggers

**Triggers**: "psychological trigger", "trigger psicológico", "persuasión", "scarcity", "social proof"

### Qué hace
Biblioteca de los 10 triggers psicológicos más efectivos con guía de implementación. Rankeados por leverage de 4,129 instancias analizadas.

### Los 10 Triggers (por Leverage)

| # | Trigger | Leverage | Instancias | Principio |
|---|---------|----------|-----------|-----------|
| 1 | Scarcity (Escasez) | 9.4/10 | 395 | Lo limitado se percibe más valioso |
| 2 | Urgency (Urgencia) | 9.1/10 | 579 | La presión temporal acelera decisiones |
| 3 | Greed (Codicia/Deseo) | 9.0/10 | 1,818 | El deseo de obtener más impulsa la compra |
| 4 | Reciprocity (Reciprocidad) | 8.6/10 | 770 | Dar valor genera obligación de reciprocar |
| 5 | Social Proof (Prueba Social) | 7.9/10 | 204 | Miramos lo que hacen otros para decidir |
| 6 | Loss Aversion (Aversión a la Pérdida) | 7.6/10 | 128 | El dolor de perder es 2x más intenso que ganar |
| 7 | Authority (Autoridad) | 4.0/10 | 84 | Confiamos en expertos reconocidos |
| 8 | Fear (Miedo) | 3.0/10 | 58 | Las consecuencias impulsan acción preventiva |
| 9 | Commitment (Compromiso) | 2.0/10 | 56 | Micro-síes llevan a macro-síes |
| 10 | Curiosity (Curiosidad) | 1.7/10 | 37 | Vacíos de conocimiento generan tensión |

### Combinaciones Efectivas
| Combinación | Uso ideal | Ejemplo |
|-------------|-----------|---------|
| Scarcity + Urgency | Cierre de venta | "Últimos 5 cupos — la oferta cierra mañana" |
| Greed + Social Proof | Landing page hero | "El sistema que usan 2,300 equipos para 3x sus demos" |
| Reciprocity + Authority | Lead magnets | "Guía creada por experto con datos de N empresas" |
| Loss Aversion + Fear | Sección de problema | "Cada día sin actuar cuesta $147. En 1 año son $53K" |
| Curiosity + Greed | Subject lines | "El framework secreto detrás de $47M en revenue" |

### Reglas Éticas
- JAMÁS fabricar escasez falsa
- Fear solo con datos verificables y proporcionados
- Curiosity sin payoff = clickbait
- Greed sin credibilidad = spam
- Siempre cumplir la promesa del copy

### Archivos
- `SKILL.md`: Proceso de aplicación (6 pasos)
- `patterns/trigger-library.md`: Biblioteca completa de los 10 triggers

---

## Arquitectura de Agentes (Pipeline de 4 Fases)

El comando `/copy` orquesta 4 agentes secuenciales. El output de cada agente es input del siguiente. Cada agente tiene un Quality Gate.

### Fase 1: Research Agent
**Propósito**: Recopilar inteligencia de mercado. Sin research, el copy es ficción.

**Inputs**: target_audience, industry, product_service, campaign_objectives
**Proceso**:
1. Definir alcance según tipo de copy (headline=ligero, sales page=máximo)
2. Investigar audiencia (demográficos + psicográficos + lenguaje)
3. Investigar competencia (3-5 principales)
4. Recopilar social proof existente
5. Identificar pains y desires

**Outputs**: market_insights, competitor_analysis, audience_profile, social_proof_data
**Quality Gate**: Completeness, Accuracy, Relevance, Timeliness, Depth

### Fase 2: Insight Agent
**Propósito**: Transformar datos en estrategia de comunicación.

**Proceso**: Patrones → Gaps → Pain priority → Messaging strategy → Triggers → Recommendations
**Outputs**: strategic_insights, opportunity_analysis

### Fase 3: Ideation Agent
**Propósito**: Generar conceptos creativos y messaging frameworks.

**Proceso**: Constraints → Ángulos → Frameworks → Variaciones → Evaluación → Selección
**Outputs**: 2-3 conceptos + messaging frameworks

### Fase 4: Copy Output Agent
**Propósito**: Producir copy final optimizado con A/B variations y scoring.

**Proceso**:
1. Seleccionar patrones óptimos (consultar power-headlines.md, trigger-library.md, conversion-architecture.md)
2. Generar copy con frameworks (draft → fórmulas → triggers → optimizar → variaciones → review)
3. Aplicar triggers por sección
4. Optimizar para el medio (email, landing page, ads, social)
5. Crear variaciones A/B con hipótesis
6. Scorear y rankear

**Scoring de Copy Final**:
| Criterio | Peso |
|----------|------|
| Efectividad | 25% |
| Claridad | 20% |
| Persuasión | 25% |
| Brand alignment | 15% |
| Technical quality | 15% |

**Targets**: Headline >7.5/10, CTA >8.0/10, Psychological leverage >7.8/10

---

## Commands

### /copy
Pipeline completo de 4 fases (Research → Insight → Ideation → Output). Genera copy profesional para cualquier medio.

### /headline
Generación rápida de 10+ headlines en 7 pasos: Context → Load formulas → Categories → Generate 12-15 → Potenciators → Scoring → Deliver.

### /email-sequence
Construye secuencia de 5-7 emails en 6 pasos: Parameters → Template → Cadence → Write → Triggers → Deliver.
