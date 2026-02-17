---
name: icp-analysis
description: Use when analyzing ideal customer profiles, qualifying accounts, defining target markets, or building customer segmentation. Activates for "ICP", "ideal customer profile", "target market", "customer segmentation", "qualify accounts", "target account list", "account scoring", or "who should we sell to".
version: 1.0.0
---

# ICP Analysis

Framework para definir, documentar y scorear el Ideal Customer Profile (ICP) de una empresa B2B. Basado en la metodología PULSO aplicada a segmentación de clientes.

## Cuándo usar este skill

- El usuario quiere definir o refinar su ICP
- Necesita calificar si una cuenta/prospect es buen fit
- Quiere construir un Target Account List
- Necesita un scoring model para priorizar oportunidades

## Proceso de ICP Analysis

### Paso 1: Diagnóstico PULSO del cliente ideal

Antes de definir el ICP, diagnosticar los mejores clientes actuales usando PULSO:

| Dimensión | Pregunta para definir ICP |
|-----------|--------------------------|
| **P - Panorama** | ¿Qué hechos, circunstancias y contexto comparten tus mejores clientes? (industria, tamaño, etapa, tecnología) |
| **U - Urgencia** | ¿Qué dolor específico resuelves para ellos? ¿Cuál es el costo de no resolverlo? |
| **L - Logro** | ¿Cómo impactas su negocio? ¿Qué outcomes logran contigo? |
| **S - Situación Crítica** | ¿Qué evento los empuja a comprar? (funding, regulación, crecimiento, crisis) |
| **O - Organización** | ¿Cómo compran? ¿Quién decide? ¿Qué criterios usan? |

### Paso 2: Análisis cuantitativo (firmográfico)

Analizar patrones en los datos de clientes exitosos:

| Criterio | Datos a recopilar | Peso sugerido |
|----------|-------------------|---------------|
| Industria | ¿En qué industrias están tus mejores clientes? | 20% |
| Revenue/Tamaño | ¿Qué rango de facturación? ¿Número de empleados? | 20% |
| Crecimiento | ¿Están creciendo, estables o contrayendo? | 15% |
| Tecnología | ¿Qué stack tecnológico usan? ¿CRM? ¿ERP? | 10% |
| Geografía | ¿Dónde están ubicados? ¿Mercados que atienden? | 10% |
| Estructura | ¿Equipo de ventas? ¿Tamaño? ¿Roles? | 15% |
| Presupuesto | ¿Capacidad de inversión? ¿Ciclo fiscal? | 10% |

### Paso 3: Análisis cualitativo

Entrevistar al equipo GTM (ventas, marketing, CS) con estas preguntas:

1. "¿Cuáles son los 5 mejores clientes y por qué?"
2. "¿Cuáles son los 5 peores y qué tienen en común?"
3. "¿Qué deals se cierran rápido vs. cuáles se arrastran?"
4. "¿Dónde tenemos mayor retención y expansión?"
5. "¿Qué tipo de cliente nos refiere más?"

Para la guía completa de preguntas de entrevista, leer `frameworks/interview-guide.md`.

### Paso 4: Documentar ICP + Top Segments

Generar documento de ICP con esta estructura:

```
## ICP: [Nombre de la empresa]

### Perfil del cliente ideal
- Industria: [X]
- Revenue: $[X]-$[Y]
- Empleados: [X]-[Y]
- Crecimiento: [X]% anual
- Tecnología: [lista]
- Geografía: [regiones]

### Urgencia principal que resolvemos
[Descripción del dolor #1 con costo cuantificado]

### Logro que generamos
- Racional: [metric improvement]
- Emocional: [personal benefit for buyer]

### Situación Crítica típica
[Evento que dispara la compra]

### Organización (Proceso de Decisión)
- Decision maker: [título]
- Influencers: [títulos]
- Criterios: [lista]
- Timeline típico: [X] semanas/meses

### Segmentos (ordenados por fit)
1. [Segment A] — Score: X/100
2. [Segment B] — Score: X/100
3. [Segment C] — Score: X/100

### Anti-ICP (NO vender a)
- [Criterio de exclusión 1]
- [Criterio de exclusión 2]
```

### Paso 5: ICP Scoring Model

Para el scoring model completo con pesos y cálculo, leer `frameworks/scoring-model.md`.

Resumen del scoring:

| Categoría | Score | Peso |
|-----------|-------|------|
| Fit firmográfico | 0-30 | 30% |
| Urgencia match | 0-25 | 25% |
| Logro potential | 0-20 | 20% |
| Organización readiness | 0-15 | 15% |
| Situación crítica | 0-10 | 10% |
| **Total** | **0-100** | **100%** |

**Clasificación**:
- 80-100: Tier 1 — Perseguir activamente
- 60-79: Tier 2 — Calificar más, posible nurture
- 40-59: Tier 3 — Solo si llegan inbound
- 0-39: No ICP — No invertir tiempo

## Ejemplo real

Una empresa de soluciones de talento descubrió que solo las manufacturers de alta capacitación (farmacéutica, tecnología) tenían márgenes rentables. Redefinieron su ICP y dejaron de perseguir manufactura general — resultado: márgenes mejoraron 35%.

## Template

Para el template completo de ICP worksheet que Claude puede llenar con el usuario, leer `templates/icp-worksheet.md`.
