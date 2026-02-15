---
name: landing-pages
description: Use when building landing pages, sales pages, conversion optimization, or page copy. Activates for "landing page", "pagina de aterrizaje", "sales page", "conversion copy", "pagina de ventas", "copy de landing", "conversion optimization", "above the fold".
version: 1.0.0
---

# Landing Pages — Arquitectura de Conversion

Sistema de diseno de landing pages basado en arquitectura psicologica de conversion. Cada seccion tiene un proposito persuasivo especifico respaldado por datos de 38K headlines y 4,129 triggers analizados.

## Cuando usar este skill

- El usuario necesita copy para una landing page nueva
- Quiere optimizar una landing page existente
- Necesita estructura y flujo persuasivo para una pagina de ventas
- Busca mejorar conversion rates

## Principio de arquitectura

Una landing page efectiva es una escalera de compromiso psicologico:

```
ATENCION  →  INTERES  →  DESEO  →  CONFIANZA  →  ACCION
(Headline)  (Problema)  (Solucion) (Prueba)     (CTA)
```

Cada seccion escala el compromiso emocional del visitante. Si una seccion falla, las siguientes no importan.

## Proceso de diseno

### Paso 1: Definir el brief de conversion

| Variable | Pregunta |
|----------|----------|
| **Objetivo** | Una sola accion deseada (registro, compra, demo, descarga) |
| **Audiencia** | Quien llega a esta pagina? De donde viene? (ad, email, organic) |
| **Awareness level** | Sabe que tiene un problema? Conoce soluciones? Te conoce a ti? |
| **Producto** | Que ofreces? Resultado principal en una oracion |
| **Diferencial** | Por que tu y no la competencia? |
| **Objeciones** | Top 3-5 razones por las que NO comprarian |
| **Prueba** | Que evidencia tienes? (testimonios, numeros, logos, estudios) |

### Paso 2: Seleccionar estructura

Segun awareness level:

| Nivel | Estructura | Largo |
|-------|-----------|-------|
| **Unaware** | Problema → Educacion → Solucion → CTA | Long-form |
| **Problem-aware** | Empatia → Agitar → Solucion → Proof → CTA | Medium |
| **Solution-aware** | Diferencial → Comparacion → Proof → CTA | Medium |
| **Product-aware** | Oferta → Proof → Urgencia → CTA | Short |
| **Most aware** | Oferta directa → CTA | Muy corta |

### Paso 3: Construir por secciones

Para el framework completo seccion por seccion con ejemplos y triggers, leer `frameworks/conversion-architecture.md`.

Resumen de la estructura de 10 secciones:

| # | Seccion | Trigger principal | Objetivo |
|---|---------|-------------------|----------|
| 1 | Hero / Above the fold | Curiosidad + Greed | Capturar atencion en <5 segundos |
| 2 | Problema / Agitacion | Fear + Loss Aversion | "Esto es exactamente lo que me pasa" |
| 3 | Solucion / Transicion | Reciprocidad | Presentar la salida al dolor |
| 4 | Beneficios (no features) | Greed | Pintar el estado futuro deseado |
| 5 | Como funciona | Authority | Reducir incertidumbre del proceso |
| 6 | Social Proof | Social Proof | "Otros como yo ya lo lograron" |
| 7 | Oferta detallada | Greed + Scarcity | Mostrar todo lo que incluye |
| 8 | Garantia / Risk reversal | Loss Aversion inversa | Eliminar el riesgo de decidir |
| 9 | FAQ / Objeciones | Commitment | Resolver dudas finales |
| 10 | CTA final | Urgency + Scarcity | Impulsar la accion ahora |

### Paso 4: Estrategia de CTAs

Basado en datos de 2,245 CTAs analizados:

**Colocacion**:
- **Above the fold**: CTA primario con urgencia
- **Mid-page** (despues de beneficios): CTA secundario con beneficio
- **Bottom** (despues de FAQ): CTA con risk reversal

**Anatomia del CTA efectivo**:
```
[Verbo de accion] + [Beneficio] + [Timeframe o modificador]

Ejemplos:
- "Empieza tu prueba gratuita de 14 dias"
- "Descarga la guia ahora — es gratis"
- "Agenda tu demo en 30 segundos"
```

**Palabras mas efectivas en CTAs**:
- Free (413 instancias) — Risk reversal
- Now (220) — Urgencia
- Start (218) — Accion
- Get (83) — Beneficio directo

### Paso 5: Optimizacion y review

Checklist de conversion:

- [ ] Headline pasa la prueba de 5 segundos (se entiende la propuesta)
- [ ] Un solo objetivo por pagina (un CTA, una accion)
- [ ] Beneficios > features (que logra el usuario, no que hace el producto)
- [ ] Social proof visible (testimonios con nombre, foto, resultado)
- [ ] Objeciones abordadas antes de pedir la accion
- [ ] Risk reversal claro (garantia, free trial, cancelacion facil)
- [ ] Urgencia real (no falsa escasez)
- [ ] Mobile-first (50%+ del trafico)
- [ ] Velocidad de carga <3 segundos

### Paso 6: Output final

```
## Landing Page: [PRODUCTO/SERVICIO]
### Audiencia: [QUIEN] | Awareness: [NIVEL] | Objetivo: [ACCION]

---

### S1: Hero
**Headline**: [headline]
**Subheadline**: [subheadline]
**CTA**: [texto del boton]
**Visual**: [descripcion de imagen/video sugerido]

### S2: Problema
[Copy de la seccion]

### S3: Solucion
[Copy de la seccion]

[... demas secciones ...]

---

### Notas de implementacion
- Metricas a trackear: [lista]
- A/B tests sugeridos: [lista]
- Integraciones recomendadas: [formulario, analytics, etc.]
```
