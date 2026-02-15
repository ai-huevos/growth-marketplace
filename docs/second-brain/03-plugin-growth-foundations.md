# Plugin: growth-foundations — Referencia Completa

## Identidad

- **Nombre**: growth-foundations
- **Versión**: 1.0.0
- **Precio**: Gratis (punto de entrada al marketplace)
- **Propósito**: Frameworks fundamentales de B2B growth para cualquier equipo
- **Autor**: AI Huevos

## Componentes

- 3 Skills: icp-analysis, positioning, competitive-analysis
- 2 Commands: /diagnostico, /icp
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

## Conexiones con Otros Plugins

- El ICP Score alimenta al **SDR Agent** de sales-blueprint (Tier assignment)
- El **competitive analysis** produce battle cards usadas por el **Deal Strategist**
- El **positioning** genera el messaging framework que usa el **copywriting-engine**
- El **/diagnostico ClarQ** identifica la madurez operacional que determina qué otros plugins necesita el cliente
