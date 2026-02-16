# Modelos de Scoring — Referencia Unificada

Este documento consolida todos los modelos de scoring y evaluación del marketplace. Estos modelos son la columna vertebral cuantitativa de todo el sistema.

---

## 1. SPICED Score (5-30 puntos)

**Plugin**: sales-blueprint (discovery-mastery, pipeline-management, proposal-generation)
**Propósito**: Evaluar la calidad de una oportunidad de venta.

### Scoring por Dimensión (1-5 cada una)

| Dimensión | 1 (Mínimo) | 3 (Medio) | 5 (Máximo) |
|-----------|-----------|-----------|-----------|
| **Situation** | Sin info básica | Firmográfica + tools | Visión completa con presupuesto |
| **Pain** | No articula dolor | Cualitativo claro | Cuantificado + emocional + urgente |
| **Impact** | Sin conexión al negocio | Racional con métricas | Validado + conectado con OKRs |
| **Critical Event** | Sin deadline | Fecha aproximada | Fecha + consecuencias graves |
| **Decision** | No sabemos quién decide | DM + proceso general | Acceso DM + choreografía completa |

### Clasificación

| Score | Nivel | Acción |
|-------|-------|--------|
| 5-14 | No calificado | Descartar o nurture largo plazo |
| 15-22 | Nurture | Educar. Sin urgencia real. Revisar mensualmente. |
| 23-30 | Oportunidad activa | Avanzar en pipeline. Asignar AE. Crear MAP. |

### Reglas de uso
- **Prerequisito para propuestas**: SPICED >= 23
- **Prerequisito para Deal Strategist MAP**: SPICED >= 20
- **SDR Agent tiers**: Tier 1 (20+), Tier 2 (12-19), Tier 3 (<12)
- **Pipeline health**: Color-coded por deal según SPICED score

---

## 2. ICP Score (0-100 puntos)

**Plugin**: growth-foundations (icp-analysis)
**Propósito**: Calificar qué tan bien una cuenta encaja con el perfil de cliente ideal.

### Categorías

| # | Categoría | Peso | Rango | Qué mide |
|---|-----------|------|-------|----------|
| 1 | Fit Firmográfico | 30% | 0-30 | Industria, revenue, empleados |
| 2 | Pain Match | 25% | 0-25 | Reconocimiento y urgencia del dolor |
| 3 | Impact Potential | 20% | 0-20 | ROI y potencial de expansión |
| 4 | Decision Readiness | 15% | 0-15 | Budget y decision maker |
| 5 | Critical Event | 10% | 0-10 | Urgencia y compelling event |

### Detalle del Scoring

**Firmográfico (0-30)**:
- Industria: 0 (fuera de target) / 5 (adyacente) / 10 (core target)
- Revenue: 0 (<$1M o >$500M) / 5 ($1M-$10M o $200M-$500M) / 10 ($10M-$200M sweet spot)
- Empleados: 0 (<10 o >5000) / 5 (10-50 o 1000-5000) / 10 (50-1000)

**Pain Match (0-25)**:
- 0: No reconocen pain
- 8: Reconocen pero no priorizan
- 12: Pain priorizado, explorando opciones
- 25: Pain urgente, buscando solución activamente

**Impact Potential (0-20)**:
- ROI estimado: <2x (0) / 2x-5x (10) / >5x (20)
- Expansión: Small sin potencial (0) / Moderado (10) / Enterprise-wide (20)

**Decision Readiness (0-15)**:
- Budget: Sin presupuesto (0) → Pendiente (5) → Aprobado (10) → Asignado (15)
- Decision maker: No identificado (0) → Identificado (5) → Engaged (10) → Champion activo (15)

**Critical Event (0-10)**:
- Sin deadline (0) / Compelling event sin consecuencia (5) / Critical event con consecuencia (10)

### Clasificación

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 — Target Account | Perseguir activamente. AE senior. Outreach personalizado. |
| 60-79 | Tier 2 — Qualified | Discovery call. Evaluar timing. |
| 40-59 | Tier 3 — Nurture | Solo inbound. Contenido educativo. Revisitar en 6 meses. |
| 0-39 | No ICP | Marketing automatizado solamente. |

### Ejemplo: ACME Corp
| Categoría | Score | Nota |
|-----------|-------|------|
| Firmográfico | 25/30 | SaaS, $15M ARR, 200 empleados |
| Pain Match | 20/25 | Reconocen problemas, han intentado soluciones |
| Impact | 15/20 | ROI ~4x, expansión a 3 departamentos |
| Decision | 10/15 | Budget aprobado, VP Sales es champion |
| Critical Event | 8/10 | Hiring 20% más reps Q1 |
| **Total** | **78/100** | **Tier 2 — Discovery call** |

---

## 3. ClarQ Score (0-40 puntos)

**Plugin**: growth-foundations (/diagnostico command)
**Propósito**: Evaluar la madurez operacional de una empresa B2B.

### 4 Dimensiones (0-10 cada una)

| Dimensión | Qué mide | Criterios clave |
|-----------|----------|----------------|
| **GTM Strategy** | Madurez de go-to-market | Adquisición, documentación, predictibilidad, canales |
| **Revenue Streams** | Salud de ingresos | Tipo, concentración, diversificación, predecibilidad |
| **Quota-to-Cash (Q2C)** | Eficiencia operativa | Pasos manuales, fricción, visibilidad, integridad |
| **Capabilities** | Capacidades del equipo | Skills, tools, documentación, bus factor |

### Sistema de Colores

| Color | Score | Significado |
|-------|-------|-------------|
| 🟢 Verde | 7-10 | Maduro, documentado, automatizado |
| 🟡 Amarillo | 4-6 | Parcial, algunos procesos, gaps visibles |
| 🔴 Rojo | 1-3 | Inmaduro, tribal, manual, alto riesgo |

### Clasificación

| Score | Nivel | Significado | Prioridad |
|-------|-------|-------------|-----------|
| 0-15 | Fragile Giant | Operaciones frágiles. Revenue depende de héroes. | Estabilizar y documentar |
| 16-25 | Growth Constrained | Algunos procesos pero gaps significativos. | Automatizar Q2C, documentar GTM |
| 26-32 | Growth Ready | Procesos establecidos, herramientas adecuadas. | Optimizar y expandir |
| 33-40 | Scaling | Operación madura, revenue predecible. | Innovar y diversificar |

### Conceptos Propios de ClarQ
- **"Juan Guillermo Problem"**: Empleado clave con todo el conocimiento (bus factor = 1)
- **"Barbacha"**: Leakage operativo por procesos manuales no detectados
- **"Caja Negra"**: Falta de visibilidad real sobre operaciones
- **"Blindaje"**: Objetivo final: blindar la empresa contra riesgos operativos

---

## 4. REKS Diagnostic (Cualitativo)

**Plugin**: sales-blueprint (coaching-cadence)
**Propósito**: Diagnosticar la causa raíz de problemas de performance de un rep de ventas.

### Árbol de Decisión

```
¿Results en target?
├─ SÍ → Felicitar. ¿Puede mejorar más?
└─ NO → ¿Effort en target?
         ├─ NO → Diagnóstico de esfuerzo:
         │        • Time management
         │        • Priorización
         │        • Motivación
         │        • Capacidad
         │        • Evitación
         └─ SÍ → ¿Knowledge en target?
                  ├─ NO → Solución:
                  │        • Self-study
                  │        • Training session
                  │        • Shadowing
                  │        • Certificación
                  └─ SÍ → Skills es el issue:
                           • 1:1 Roleplay
                           • Peer roleplay
                           • Call review
                           • Real-time coaching
                           • Shadow top performer
```

### Error Común
El 70% de los managers saltan directo a "necesitas mejorar tu discovery" sin verificar si el problema es de esfuerzo, conocimiento o habilidad. Cada nivel requiere una intervención diferente.

---

## 5. Bucket Scorecard (0-100 puntos)

**Plugin**: growth-foundations (quiz-funnel)
**Propósito**: Priorizar qué bucket construir primero al diseñar un quiz funnel.

### Fórmula

```
Score = (Volume × 0.30) + (ICP Match × 0.25) + (Engagement × 0.20) + (Decision × 0.15) + (Pain × 0.10)
```

### Criterios

| # | Criterio | Peso | Qué mide |
|---|----------|------|----------|
| 1 | Volume | 30% | Tamaño del bucket dentro del mercado |
| 2 | ICP Match | 25% | Alineación con el ICP definido |
| 3 | Engagement | 20% | Nivel de interacción con marca/contenido |
| 4 | Decision Readiness | 15% | Cercanía a una decisión de compra |
| 5 | Pain Intensity | 10% | Intensidad del dolor del bucket |

### Clasificación

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 — Construir primero | Prioridad #1. Outcome page, email sequence, oferta específica. |
| 60-79 | Tier 2 — Secundario | Construir después del Tier 1. Puede compartir recursos. |
| 40-59 | Tier 3 — Nurture | No construir oferta dedicada. Nurture genérica. Revisitar en 90 días. |
| 0-39 | Deprioritizar | No invertir recursos. No justifica quiz path propio. |

### Relación con ICP Score
El Bucket Scorecard opera DENTRO de un ICP ya definido. El ICP Score (0-100) califica cuentas; el Bucket Scorecard (0-100) prioriza segmentos dentro de esas cuentas calificadas.

---

## 6. Copy Quality Score (0-10)

**Plugin**: copywriting-engine (copy-output-agent)
**Propósito**: Evaluar la calidad de cada pieza de copy generada.

### Criterios

| Criterio | Peso | Qué evalúa |
|----------|------|-----------|
| Efectividad | 25% | Probabilidad de lograr el objetivo |
| Claridad | 20% | Se entiende en primera lectura |
| Persuasión | 25% | Triggers activos y bien implementados |
| Brand alignment | 15% | Consistente con tono/voz de marca |
| Technical quality | 15% | Gramática, formato, adaptación al medio |

### Targets
- Headline effectiveness: >7.5/10
- CTA effectiveness: >8.0/10
- Psychological leverage: >7.8/10

---

## 7. Psychological Trigger Leverage (1-10)

**Plugin**: copywriting-engine (psychological-triggers)
**Propósito**: Rankear la efectividad de cada trigger psicológico.

| Trigger | Leverage | Instancias analizadas |
|---------|----------|----------------------|
| Scarcity | 9.4 | 395 |
| Urgency | 9.1 | 579 |
| Greed | 9.0 | 1,818 |
| Reciprocity | 8.6 | 770 |
| Social Proof | 7.9 | 204 |
| Loss Aversion | 7.6 | 128 |
| Authority | 4.0 | 84 |
| Fear | 3.0 | 58 |
| Commitment | 2.0 | 56 |
| Curiosity | 1.7 | 37 |

---

## Mapa de Relaciones entre Scores

```
ICP Score (0-100) ──────► Determina si la cuenta vale la pena
        │
        ▼
Bucket Scorecard (0-100)► Segmenta DENTRO del ICP en buckets priorizados
        │
        ▼
SPICED Score (5-30) ───► Evalúa la oportunidad específica
        │
        ▼
ClarQ Score (0-40) ────► Evalúa si la empresa puede implementar
        │
        ▼
REKS Diagnostic ───────► Mejora al equipo que ejecuta
        │
        ▼
Copy Quality (0-10) ──► Mide la calidad del messaging
```

Cada modelo alimenta al siguiente en el ciclo de ventas B2B.

---

## Score-as-Gate: Scores que Controlan Flujo

Los scores no son solo métricas — funcionan como **gates** que bloquean o habilitan acciones en el marketplace:

| Condición | Efecto |
|-----------|--------|
| ClarQ < 16 | Alerta "Fragile Giant", recomienda acciones inmediatas |
| ICP < 40 | No califica como target, descartado de pipeline |
| SPICED < 20 | Deal Strategist emite No-Go, no genera MAP |
| SPICED < 23 | `/propuesta` bloqueado ("completa discovery primero") |
| Headline < 7.5 | Copy rechazado, genera variaciones nuevas |

> Ver también: `15-arquitectura-sistema.md` §7 para el contexto arquitectónico de scoring.
