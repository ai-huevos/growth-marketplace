# Bucket Scorecard

Modelo de scoring para priorizar qué bucket construir primero. Cada bucket se evalúa de 0-100 con 5 criterios ponderados.

---

## Fórmula

```
Score = (Volume × 0.30) + (ICP Match × 0.25) + (Engagement × 0.20) + (Decision × 0.15) + (Pain × 0.10)
```

---

## Criterios de evaluación

### 1. Volume (0-100, peso 30%)

¿Qué tan grande es este bucket dentro de tu mercado?

| Score | Criterio |
|-------|----------|
| 0-20 | <10% del mercado — Nicho extremo |
| 21-40 | 10-15% del mercado — Significativo pero pequeño |
| 41-60 | 15-25% del mercado — Buen tamaño |
| 61-80 | 25-35% del mercado — Gran segmento |
| 81-100 | >35% del mercado — Segmento dominante |

### 2. ICP Match (0-100, peso 25%)

¿Qué tan bien se alinea este bucket con tu ICP?

| Score | Criterio |
|-------|----------|
| 0-20 | Poco overlap con ICP — Firmográficos y dolor no coinciden |
| 21-40 | Overlap parcial — Algunos criterios de ICP se cumplen |
| 41-60 | Buen overlap — Mayoría de criterios de ICP se cumplen |
| 61-80 | Alto overlap — ICP casi perfecto |
| 81-100 | Match perfecto — Es exactamente tu ICP ideal |

### 3. Engagement (0-100, peso 20%)

¿Qué tan engaged está este bucket con tu contenido/marca?

| Score | Criterio |
|-------|----------|
| 0-20 | Sin señales de engagement — No interactúan |
| 21-40 | Engagement bajo — Abren emails, visitan sitio |
| 41-60 | Engagement medio — Descargan recursos, asisten webinars |
| 61-80 | Engagement alto — Responden surveys, piden demos |
| 81-100 | Engagement muy alto — Champions, refieren, participan activamente |

### 4. Decision Readiness (0-100, peso 15%)

¿Qué tan cerca está este bucket de tomar una decisión de compra?

| Score | Criterio |
|-------|----------|
| 0-20 | Solo explorando — Sin budget ni timeline |
| 21-40 | Interesado — Reconoce el problema, sin urgencia |
| 41-60 | Evaluando — Comparando opciones activamente |
| 61-80 | Listo — Budget aprobado, buscando proveedor |
| 81-100 | Urgente — Necesita resolver ahora, budget asignado |

### 5. Pain Intensity (0-100, peso 10%)

¿Qué tan intenso es el dolor de este bucket?

| Score | Criterio |
|-------|----------|
| 0-20 | Pain leve — "Nice to have" |
| 21-40 | Pain moderado — Lo reconocen pero no priorizan |
| 41-60 | Pain significativo — Buscan solución activamente |
| 61-80 | Pain alto — Les cuesta dinero/tiempo medible |
| 81-100 | Pain crítico — Impacto directo en revenue/operación |

---

## Scorecard

| Bucket | Volume (×0.30) | ICP Match (×0.25) | Engagement (×0.20) | Decision (×0.15) | Pain (×0.10) | **Score Total** |
|--------|---------------|-------------------|--------------------|--------------------|--------------|-----------------|
| 1: ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | **___/100** |
| 2: ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | **___/100** |
| 3: ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | **___/100** |
| 4: ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | **___/100** |
| 5: ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | ___/100 = ___ | **___/100** |

---

## Clasificación y acción

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 — Construir primero | Este bucket es tu prioridad #1. Construir outcome page, secuencia de email, y oferta específica. |
| 60-79 | Tier 2 — Prioridad secundaria | Construir después del Tier 1. Puede compartir algunos recursos con Tier 1. |
| 40-59 | Tier 3 — Nurture | No construir oferta dedicada aún. Incluir en nurture sequence genérica. Revisitar en 90 días. |
| 0-39 | Deprioritizar | No invertir recursos. Este bucket no justifica un quiz path propio por ahora. |

---

## Ejemplo de scoring

**Caso**: SaaS de productividad para equipos de ventas

| Bucket | Volume | ICP Match | Engagement | Decision | Pain | **Score** |
|--------|--------|-----------|------------|----------|------|-----------|
| "No cierro deals" | 70 × 0.30 = 21 | 85 × 0.25 = 21.25 | 60 × 0.20 = 12 | 50 × 0.15 = 7.5 | 80 × 0.10 = 8 | **69.75 — Tier 2** |
| "No genero pipeline" | 80 × 0.30 = 24 | 90 × 0.25 = 22.5 | 75 × 0.20 = 15 | 65 × 0.15 = 9.75 | 90 × 0.10 = 9 | **80.25 — Tier 1** |
| "Mi equipo no rinde" | 40 × 0.30 = 12 | 60 × 0.25 = 15 | 45 × 0.20 = 9 | 30 × 0.15 = 4.5 | 60 × 0.10 = 6 | **46.5 — Tier 3** |
