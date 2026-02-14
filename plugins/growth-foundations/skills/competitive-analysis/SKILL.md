---
name: competitive-analysis
description: Use when analyzing competitors, mapping competitive landscape, identifying market gaps, or building competitive intelligence. Activates for "competitive analysis", "competitors", "market landscape", "competitive intelligence", "market map", "five forces", "competitive positioning", "competitor comparison", or "how do we compare to".
version: 1.0.0
---

# Competitive Analysis

Framework estructurado para analizar el panorama competitivo de una empresa B2B. Combina Five Forces de Porter con mapeo visual de competidores y análisis de gaps.

## Cuándo usar este skill

- El usuario necesita entender su posición competitiva
- Quiere mapear competidores directos e indirectos
- Necesita identificar gaps de mercado y oportunidades
- Está preparando un pitch deck o board presentation con competitive slide
- Quiere prepararse para objeciones competitivas en ventas

## Proceso de Análisis Competitivo

### Paso 1: Identificar competidores

Clasificar competidores en 4 categorías:

| Categoría | Definición | Ejemplo |
|-----------|-----------|---------|
| **Directos** | Resuelven el mismo problema para el mismo cliente | Mismo producto, mismo mercado |
| **Indirectos** | Resuelven el problema de otra forma | Alternativas, sustitutos |
| **Adyacentes** | No compiten hoy pero podrían expandirse | Vendors que podrían añadir features |
| **Status quo** | El cliente no hace nada / lo hace manual | Excel, tribal knowledge, contratar más gente |

**El status quo es casi siempre el competidor #1 en B2B.** No ignorarlo.

### Paso 2: Five Forces Analysis (simplificado)

Evaluar cada fuerza del 1 (bajo) al 5 (alto):

| Fuerza | Pregunta | Score (1-5) | Implicación |
|--------|----------|-------------|-------------|
| **Rivalidad** | ¿Cuántos competidores directos hay? ¿Qué tan agresivos son? | ___ | Alto = márgenes bajo presión |
| **Nuevos entrantes** | ¿Qué tan fácil es entrar a este mercado? ¿Hay barreras? | ___ | Alto = más competencia pronto |
| **Sustitutos** | ¿Qué tan fácil es que clientes usen alternativas? | ___ | Alto = clientes pueden irse fácil |
| **Poder del comprador** | ¿Cuántas opciones tiene el comprador? ¿Son price-sensitive? | ___ | Alto = presión en pricing |
| **Poder del proveedor** | ¿Dependes de pocos proveedores/plataformas clave? | ___ | Alto = riesgo de supply |

**Interpretación**:
- Score total < 12: Mercado atractivo, baja competencia
- Score total 12-18: Mercado moderado, diferenciación importante
- Score total > 18: Mercado difícil, necesitas moat fuerte

### Paso 3: Competitive Matrix

Crear una matriz comparativa con los atributos que importan al ICP:

| Atributo | Tu producto | Competidor A | Competidor B | Status Quo |
|----------|------------|-------------|-------------|-----------|
| ___ (ej: Precio) | ___ | ___ | ___ | ___ |
| ___ (ej: Facilidad de uso) | ___ | ___ | ___ | ___ |
| ___ (ej: Soporte LATAM) | ___ | ___ | ___ | ___ |
| ___ (ej: Integración ERP) | ___ | ___ | ___ | ___ |
| ___ (ej: Time to value) | ___ | ___ | ___ | ___ |
| ___ (ej: Customización) | ___ | ___ | ___ | ___ |

**Reglas para la matriz**:
- Incluir SOLO atributos que el ICP le importan (no features que nadie pidió)
- Ser honesto — si el competidor es mejor en algo, documentarlo
- Incluir el status quo como "competidor" (Excel, manual, no hacer nada)
- Máximo 6-8 atributos (más es confuso)

### Paso 4: Competitive Positioning Map

Mapa 2x2 con los dos ejes que más importan al ICP:

```
                    [Eje Y: ej. Especialización]
                         Alto
                          │
                          │    ★ TÚ
                          │
         Comp C ○         │         ○ Comp A
                          │
     ─────────────────────┼───────────────────── [Eje X: ej. Precio]
         Bajo             │                Alto
                          │
                ○ Status Quo    ○ Comp B
                          │
                         Bajo
```

**Cómo elegir los ejes**:
- Eje X: El atributo donde MÁS te diferencias
- Eje Y: El segundo atributo más importante para el ICP
- Tu posición ideal: Cuadrante superior derecho (o donde haya menos competidores)

### Paso 5: Gap Analysis

Identificar oportunidades donde ningún competidor sirve bien:

| Gap identificado | ¿A quién afecta? | ¿Podemos llenarlo? | Esfuerzo | Impacto |
|-----------------|-------------------|--------------------|---------|---------|
| ___ | ___ | Sí / No / Parcial | Alto/Medio/Bajo | Alto/Medio/Bajo |
| ___ | ___ | ___ | ___ | ___ |
| ___ | ___ | ___ | ___ | ___ |

### Paso 6: Battle Cards (para ventas)

Para cada competidor directo, crear una battle card concisa:

```markdown
## Battle Card: [Competidor]

### En una frase
[Qué son y para quién]

### Cuándo los mencionan los prospects
[Situaciones típicas en que sale este competidor]

### Sus fortalezas (ser honesto)
- [Fortaleza 1]
- [Fortaleza 2]

### Sus debilidades
- [Debilidad 1]
- [Debilidad 2]

### Cómo competir
- Si dicen "[objeción]" → Responder "[respuesta]"
- Si dicen "[objeción]" → Responder "[respuesta]"

### Killer question
"[Pregunta que expone la debilidad del competidor sin atacarlo directamente]"

### Proof point
[Caso o dato que demuestra tu superioridad en el área clave]
```

## Output esperado

Al finalizar, el usuario debe tener:

1. **Lista categorizada** de competidores (directos, indirectos, adyacentes, status quo)
2. **Five Forces score** con interpretación
3. **Competitive matrix** con atributos relevantes al ICP
4. **Positioning map** visual (2x2)
5. **Gap analysis** con oportunidades priorizadas
6. **Battle cards** para los top 2-3 competidores directos

Para el template completo de competitive analysis report, leer `frameworks/competitive-report-template.md`.
