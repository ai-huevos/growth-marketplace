# Plugin: growth-foundations — Referencia Completa

## Identidad

- **Nombre**: growth-foundations
- **Versión**: 1.0.0
- **Precio**: Gratis (punto de entrada al marketplace)
- **Propósito**: Frameworks fundamentales de B2B growth para cualquier equipo
- **Autor**: AI Huevos

## Componentes

- 4 Skills: icp-analysis, positioning, competitive-analysis, quiz-funnel
- 3 Commands: /diagnostico, /icp, /quiz
- 0 Agents

---

## Skill 1: icp-analysis

**Triggers**: "ICP", "ideal customer profile", "target market", "customer segmentation", "qualify accounts"

### Qué hace
Análisis de Ideal Customer Profile con scoring basado en SPICED. Define el cliente ideal usando datos firmográficos + cualitativos, y genera un scoring model para calificar oportunidades.

### Proceso (5 pasos)
1. **Diagnóstico SPICED**: Usar segmentación SPICED para entender el mercado
2. **Análisis firmográfico**: Industria, tamaño, revenue, geografía
3. **Análisis cualitativo**: Pains, behaviors, triggers de compra
4. **Documentación**: Generar perfil ICP completo
5. **Scoring model**: Crear modelo 0-100 para calificar cuentas

### ICP Scoring Model (0-100)

| Categoría | Peso | Rango |
|-----------|------|-------|
| Fit Firmográfico | 30% | 0-30 pts |
| Pain Match | 25% | 0-25 pts |
| Impact Potential | 20% | 0-20 pts |
| Decision Readiness | 15% | 0-15 pts |
| Critical Event | 10% | 0-10 pts |

**Clasificación**:
| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 — Target Account | Perseguir activamente. Asignar AE senior. Outreach personalizado. |
| 60-79 | Tier 2 — Qualified | Calificar más. Discovery call. Evaluar timing. |
| 40-59 | Tier 3 — Nurture | Solo inbound. Contenido educativo. Revisitar en 6 meses. |
| 0-39 | No ICP | No invertir tiempo de ventas. Marketing automatizado. |

### Archivos
- `SKILL.md`: Definición y proceso
- `frameworks/interview-guide.md`: Guía de entrevistas para descubrimiento de ICP
- `frameworks/scoring-model.md`: Modelo de scoring detallado con ejemplos
- `templates/icp-worksheet.md`: Template interactivo para workshop de ICP

---

## Skill 2: positioning

**Triggers**: "positioning", "value proposition", "messaging", "differentiation", "product positioning"

### Qué hace
Framework de propuesta de valor y diferenciación competitiva. Usa Value Proposition Canvas para articular el valor único del producto/servicio.

### Proceso (5 pasos)
1. **Análisis de contexto**: Mercado, audiencia, competencia
2. **Declaración de posicionamiento**: Statement claro y diferenciado
3. **Value Proposition Canvas**: Jobs, pains, gains del cliente → Features, pain relievers, gain creators
4. **Messaging framework**: Mensajes por audiencia/persona
5. **Testing**: Validación del posicionamiento

### Archivos
- `SKILL.md`: Definición y proceso
- `frameworks/value-prop-canvas.md`: Template del Value Proposition Canvas

---

## Skill 3: competitive-analysis

**Triggers**: "competitive analysis", "competitors", "market landscape", "competitive intelligence", "market map"

### Qué hace
Análisis competitivo estructurado usando Five Forces de Porter + mapa competitivo visual. Identifica gaps de mercado y oportunidades de diferenciación.

### Proceso (6 pasos)
1. **Identificar competidores**: Directos, indirectos, sustitutos
2. **Five Forces de Porter**: Análisis del poder de negociación, amenazas, rivalidad
3. **Matriz competitiva**: Feature comparison por criterio
4. **Mapa de posicionamiento**: Visualización 2D del landscape
5. **Gap analysis**: Dónde hay oportunidades no cubiertas
6. **Battle cards**: Fichas de competencia para el equipo de ventas

### Archivos
- `SKILL.md`: Definición y proceso
- `frameworks/competitive-report-template.md`: Template del reporte competitivo

---

## Skill 4: quiz-funnel

**Triggers**: "quiz funnel", "ASK Method", "market buckets", "survey funnel", "lead qualification quiz", "SMIQ", "stress test de mercado"

### Qué hace
Diseña quiz funnels que segmentan un mercado en 3-5 buckets accionables. Basado en el ASK Method de Ryan Levesque adaptado a B2B e integrado con SPICED. Incluye plan de validación lean por menos de $500.

### ASK Method — Conceptos Clave
- **SMIQ** (Single Most Important Question): La pregunta open-ended que revela el dolor core y segmenta naturalmente el mercado
- **Buckets**: 3-5 segmentos de mercado que cubren >80% de la audiencia. Tipos: por journey, desafío, situación, u objetivo
- **Micro-compromisos**: Cada pregunta del quiz genera reciprocidad, consistencia, y ownership

### Proceso (5 pasos)
1. **Descubrir SMIQ**: Encontrar la pregunta que mejor segmenta el mercado
2. **Deep Dive Survey**: Encuesta de 8-12 preguntas para identificar patrones cualitativos
3. **Identificar Buckets**: Agrupar respuestas en 3-5 segmentos (regla del 80%)
4. **Diseñar Quiz**: 5-7 preguntas con progresión de micro-compromisos
5. **Stress Test**: Validación en 4 fases por <$500 (desk research → survey → build → paid)

### Estructura del Quiz (6 preguntas)

| Posición | Tipo | Función |
|----------|------|---------|
| 1-2 | Grease-the-wheels | Calentar, micro-compromiso inicial |
| 3 | Segmentación | Asignar bucket (pregunta clave) |
| 4 | SMIQ | Descubrir dolor profundo (open-ended) |
| 5 | Blind-spot | Revelar gap, generar urgencia |
| 6 | Urgencia | Proxy del Critical Event (SPICED) |

### Bucket Scorecard (0-100)

```
Score = (Volume × 0.30) + (ICP Match × 0.25) + (Engagement × 0.20) + (Decision × 0.15) + (Pain × 0.10)
```

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 | Construir primero |
| 60-79 | Tier 2 | Prioridad secundaria |
| 40-59 | Tier 3 | Nurture / revisitar |
| 0-39 | Deprioritizar | No construir aún |

### Integración SPICED

| SPICED | Conexión con Quiz Funnel |
|--------|--------------------------|
| Situation | El bucket define la situación del prospect dentro del ICP |
| Pain | El SMIQ descubre el dolor core; buckets segmentan variaciones |
| Impact | La outcome page comunica impacto de resolver el dolor |
| Critical Event | Preguntas de urgencia como proxy |
| Decision | Preguntas de presupuesto/proceso como proxy |

### Archivos (11)
- `SKILL.md`: Definición completa del skill
- `frameworks/ask-method-fundamentals.md`: Core ASK Method + mapeo ASK↔SPICED
- `frameworks/bucket-identification.md`: Cómo descubrir 3-5 buckets, checklist de validación
- `frameworks/question-design-framework.md`: 4 tipos de preguntas, reglas, errores comunes
- `frameworks/lean-stress-test.md`: Plan de validación <$500 en 4 fases
- `templates/quiz-blueprint-worksheet.md`: Worksheet completo del workshop
- `templates/deep-dive-survey-template.md`: Template de encuesta de 12 preguntas
- `templates/bucket-scorecard.md`: Scorecard 0-100 para priorizar buckets
- `patterns/quiz-question-library.md`: 53 preguntas reutilizables por tipo
- `patterns/funnel-mechanics.md`: Flujos, email gates, outcome pages, seguimiento
- `examples/b2b-saas-quiz-example.md`: Caso completo SalesPro con métricas reales

---

## Command: /diagnostico

**Uso**: `/diagnostico <empresa o descripción del negocio>`

### Qué hace
Assessment rápido de madurez operacional usando el framework ClarQ. Evalúa una empresa en 4 dimensiones y genera un heatmap rojo/amarillo/verde.

### Framework ClarQ (4 Dimensiones, 0-40)

| Dimensión | Qué evalúa |
|-----------|-----------|
| **GTM Strategy** | Adquisición (hunting vs farming), documentación, predictibilidad, canales |
| **Revenue Streams** | Tipo (recurrente/eventual), concentración, diversificación, predecibilidad |
| **Quota-to-Cash (Q2C)** | Pasos manuales, fricción, visibilidad, integridad de datos |
| **Capabilities** | Skills del equipo, herramientas, documentación, bus factor |

**Colores**: 🟢 Verde (7-10), 🟡 Amarillo (4-6), 🔴 Rojo (1-3)

**Clasificación**:
| Score | Nivel | Significado |
|-------|-------|-------------|
| 0-15 | Fragile Giant | Operaciones frágiles. Revenue depende de héroes. |
| 16-25 | Growth Constrained | Algunos procesos pero gaps significativos. |
| 26-32 | Growth Ready | Procesos establecidos, listo para escalar. |
| 33-40 | Scaling | Operación madura. Revenue predecible. |

### Conceptos del Fragile Giant
- **"Juan Guillermo Problem"**: Cuando un empleado clave tiene todo el conocimiento
- **"Barbacha"**: Leakage operativo por procesos manuales
- **"Caja Negra"**: Falta de visibilidad sobre operaciones reales
- **"Blindaje"**: El objetivo: blindar la empresa contra riesgos operativos

### Output
Genera un heatmap ASCII visual + score total + nivel + recomendaciones priorizadas (30 días y 90 días).

---

## Command: /icp

**Uso**: `/icp <industria o contexto>`

### Qué hace
Workshop interactivo para construir un Ideal Customer Profile. Guía al usuario paso a paso por el proceso de diagnóstico SPICED, análisis cuantitativo y cualitativo.

### Fases del Workshop (6)
1. **Diagnóstico SPICED**: Segmentación inicial
2. **Firmográficos**: Industria, revenue, empleados, geografía
3. **Pain Discovery**: Problemas que resuelve el producto
4. **Impact Mapping**: ROI y beneficios emocionales
5. **Scoring Model**: Construir el modelo de 0-100
6. **Output**: ICP Profile completo + scoring template

---

## Command: /quiz

**Uso**: `/quiz <industria, producto, o mercado target>`

### Qué hace
Workshop interactivo de 8 fases para diseñar un quiz funnel completo con el usuario.

### Fases del Workshop (8)
1. **Contexto**: Qué vendes, a quién, dolor, objetivo, presupuesto
2. **Hipótesis de buckets**: Proponer 3-5 buckets, validar con usuario
3. **SMIQ**: Diseñar la Single Most Important Question
4. **Quiz design**: 6 preguntas + hook page + outcome pages
5. **Deep Dive Survey** (opcional): Si buckets no están validados
6. **Stress test plan**: Timeline + presupuesto
7. **Métricas**: Definir criterios de éxito
8. **Output final**: Quiz blueprint completo

---

## Conexiones con Otros Plugins

- El ICP Score alimenta al **SDR Agent** de sales-blueprint (Tier assignment)
- El **quiz-funnel** segmenta DENTRO del ICP en buckets accionables — puente entre ICP y discovery
- El **competitive analysis** produce battle cards usadas por el **Deal Strategist**
- El **positioning** genera el messaging framework que usa el **copywriting-engine**
- El **quiz funnel** genera hook pages y outcome pages que usa el **copywriting-engine** (`/headline`, `/copy`)
- El **/diagnostico ClarQ** identifica la madurez operacional que determina qué otros plugins necesita el cliente
- Los **tags de bucket** del quiz alimentan el CRM y mapean a etapas de **pipeline-management**
