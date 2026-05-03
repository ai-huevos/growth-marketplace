---
name: headline-mastery
description: Use when generating headlines, titles, subject lines, or hooks. Activates for "headline", "titulo", "subject line", "hook", "genera titulares", "power headline", "copywriting headline", "attention grabber".
version: 1.1.0
lenses:
  - hormozi   # offer-engineering/hormozi.md — Value Equation discipline (Dream Outcome / Likelihood / Time / Effort)
  - schwartz  # offer-engineering/schwartz.md — Five Stages of Awareness; Mass Desire Channeling
---

# Headline Mastery

Sistema de generacion de titulares basado en el analisis de 38,737 headlines reales. Cada formula ha sido validada por efectividad medible.

## Cuando usar este skill

- El usuario necesita titulares para cualquier medio (email, landing, ads, blog, social)
- Quiere optimizar titulares existentes
- Necesita variaciones para A/B testing
- Busca hooks de apertura para contenido

## Datos clave del analisis

| Tipo de headline | Instancias | Efectividad |
|-----------------|------------|-------------|
| Numeros | 23,258 | 10.0/10 |
| Beneficio | 374 | 2.1/10 |
| Urgencia | 210 | 1.4/10 |
| Pregunta | 132 | 1.1/10 |
| Historia | 220 | — |
| Problema | 59 | — |
| Solucion | 56 | — |
| Curiosidad | 11 | — |

**Longitud optima**: 8-15 palabras.

## Proceso de generacion

### Paso 1: Definir el contexto

Recopilar del usuario:

| Variable | Pregunta |
|----------|----------|
| **Producto/servicio** | Que vendes exactamente? |
| **Audiencia** | A quien le hablas? (cargo, industria, nivel) |
| **Pain principal** | Que dolor resuelve tu producto? |
| **Resultado deseado** | Que outcome prometes? |
| **Medio** | Donde se publicara? (email, landing, ad, blog) |
| **Tono** | Formal, conversacional, urgente, aspiracional? |

### Paso 1.5: Lens Activation (Hormozi + Schwartz)

Antes de seleccionar categorias, cargar las dos lentes declaradas en frontmatter (`lenses: [hormozi, schwartz]`). Resolver paths via `os/lenses/registry.md` y leer:

- `os/lenses/offer-engineering/hormozi.md`
- `os/lenses/offer-engineering/schwartz.md`

Aplicar el protocolo definido en `tools/lens-loader.md`:

**1. Limitation gate.** Revisar las `limitations` de ambas lentes contra el contexto del cliente (brand-config, regulacion, mercado):
- Si el cliente esta en mercado regulado o B2B enterprise pesado → **suprimir Hormozi** (su sesgo direct-response y guarantees agresivos no aplica). Documentar la supresion en el footer.
- Si la audiencia es Most Aware con alta confianza de marca y copy minimo → **suprimir Schwartz** (modelo de mass desire no es central). Documentar.

**2. Seleccion del Awareness Stage (Schwartz).** Antes de Paso 2, fijar la etapa de conciencia del prospecto a partir del input del Paso 1:

| Awareness Stage | Permite headline... | Bloquea headline... |
|---|---|---|
| **Unaware** | Curiosidad, historia, imagen aceptable | Producto, oferta, precio |
| **Problem Aware** | Nombrar problema/consecuencias, prometer alivio | Producto sin contexto del problema |
| **Solution Aware** | Posicionar mejor mecanismo / "por que esto funciona" | Repetir categoria de solucion |
| **Product Aware** | Ventaja, oferta, prueba, reversion de riesgo | Educar (ya lo conoce) |
| **Most Aware** | Precio, deadline, bonus, garantia | Educacion / story / curiosidad |

Mismatch de etapa → headline rechazado en Paso 5 sin importar score.

**3. Self-check Hormozi (key_questions).** Para cada headline candidato del Paso 3 que prometa transformacion u outcome, validar contra los `key_questions` de Hormozi:

- ¿El Dream Outcome esta nombrado como destino, no como vehiculo? (vacaciones, no boleto de avion)
- ¿Hay senal de Perceived Likelihood — prueba, especificidad, mecanismo, garantia?
- ¿El Time Delay esta acotado o hay early-win nombrado?
- ¿El Effort esta minimizado o el headline implica esfuerzo bajo (tools, hechos por ti, en X minutos)?

Headlines que no tocan el Value Equation (DO x PL / TD x ES) reciben score reducido en el criterio "Especificidad" del Paso 5.

**4. Decision rules (composicion Hormozi + Schwartz).** Aplicar sobre cada candidato:

- IF headline trata de "crear deseo" en lugar de canalizar uno existente (Schwartz) → penalizar (axiom de canalizacion).
- IF headline mezcla multiples deseos compitiendo (Schwartz) → penalizar deseo disperso.
- IF headline lidera con atributos fisicos sin enlace al deseo (Schwartz) → penalizar.
- IF Dream Outcome no esta claro (Hormozi) → STOP. No compensar con otras variables.
- IF Perceived Likelihood debil sin proof/risk-reversal (Hormozi) → recomendar agregar prueba antes de optimizar copy.
- IF un headline aplicaria solo si `limitations` de la lente fueron suprimidas → marcarlo (no usar en client deck final).

**Conflict Disclosure Rule.** Si Hormozi sugiere stacking agresivo y Schwartz sugiere "una promesa creida supera muchas dudosas" sobre el mismo candidato, surfacing el conflicto en la salida en lugar de elegir uno silenciosamente.

### Paso 2: Seleccionar categorias de formula

Basado en el contexto, seleccionar 3-5 categorias relevantes de las 10 principales:

1. **Curiosity Gap** — Cuando el producto tiene un angulo sorprendente
2. **Power Promise** — Cuando hay resultados cuantificables
3. **Social Proof** — Cuando hay datos de clientes/usuarios
4. **Fear/Loss** — Cuando el costo de no actuar es alto
5. **Contrarian** — Cuando desafias una creencia del mercado
6. **How-To** — Cuando educas al mercado
7. **Secret/Insider** — Cuando tienes informacion exclusiva
8. **Warning** — Cuando hay riesgos que la audiencia ignora
9. **Direct Command** — Cuando la audiencia esta lista para actuar
10. **Comparison** — Cuando compites directamente

Para las 50 formulas completas con ejemplos, leer `patterns/power-headlines.md`.

### Paso 3: Generar variaciones

Para cada categoria seleccionada, generar 3-4 variaciones:

1. **Version corta** (5-8 palabras) — Para ads y subject lines
2. **Version media** (8-12 palabras) — Para headlines principales
3. **Version larga** (12-18 palabras) — Para subheadlines y descripciones

### Paso 4: Aplicar potenciadores

Revisar cada headline con estos amplificadores:

| Potenciador | Ejemplo | Impacto |
|-------------|---------|---------|
| Agregar numero | "7 formas de..." | +36% engagement |
| Agregar timeframe | "...en 30 dias" | +28% urgencia |
| Agregar exclusion | "...sin gastar mas" | +22% credibilidad |
| Agregar especificidad | "$47,000 → $147,000" | +41% confianza |
| Agregar social proof | "...que usan 2,300 CMOs" | +33% autoridad |

### Paso 5: Scorear y rankear

Evaluar cada headline en 5 criterios:

| Criterio | Peso | Que mide |
|----------|------|----------|
| Claridad | 25% | Se entiende en <3 segundos? |
| Especificidad | 25% | Tiene datos, numeros, detalles concretos? |
| Emocion | 20% | Provoca curiosidad, miedo, deseo, sorpresa? |
| Relevancia | 20% | Conecta con el pain real de la audiencia? |
| Accionabilidad | 10% | Impulsa al siguiente paso? |

**Target**: Score >7.5/10 para publicar.

### Paso 6: Output final

Entregar al usuario:

```
## Headlines generados para [CONTEXTO]

### Top 3 recomendados (score >8/10)
1. [HEADLINE] — Score: X/10 — Categoria: [X]
2. [HEADLINE] — Score: X/10 — Categoria: [X]
3. [HEADLINE] — Score: X/10 — Categoria: [X]

### Variaciones para A/B testing
- Version A: [HEADLINE] (enfoque: beneficio)
- Version B: [HEADLINE] (enfoque: curiosidad)
- Version C: [HEADLINE] (enfoque: urgencia)

### Recomendacion de testing
- Testear primero: [A vs B]
- Metrica a medir: [CTR / Open Rate / Engagement]
- Volumen minimo: [X impresiones para significancia]

---
Lenses applied: [hormozi, schwartz]
Awareness stage seleccionada: [Unaware | Problem Aware | Solution Aware | Product Aware | Most Aware]
Biases disclosed:
- Direct-response bias (Hormozi): evalua via conversion medible; subponderar brand equity
- Mass-desire model (Schwartz): puede subestimar nichos pequenos con LTV alto
Limitations triggered (si aplica): [lista cualquier supresion ejecutada en Paso 1.5]
Conflicts surfaced (si aplica): [lista decisiones donde las lentes apuntaron en direcciones opuestas]
```

## Variaciones de formulas

Para variaciones avanzadas y combinaciones de formulas, leer `patterns/formulas.md`.

## Prioridades de testing

1. Testear pregunta vs afirmacion (mismo mensaje, diferente formato)
2. A/B testear enfoque en beneficio vs enfoque en dolor
3. Experimentar con posicion de urgencia (inicio vs final del headline)
