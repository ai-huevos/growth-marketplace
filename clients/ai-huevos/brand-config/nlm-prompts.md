# NLM Prompt Templates — AI Huevos

> Prompts bilingües para cada tipo de artifact en NotebookLM.
> Diseñados para los campos de personalización de NLM (--prompt, --focus, UI fields).

**Estado:** DRAFT — pendiente validación con fundadores
**Fecha:** 2026-02-16
**Notebook alias:** `second-brain`

---

## Convención

Cada template tiene dos versiones:
- **ES** — Prompt en español (default para LATAM)
- **EN** — Prompt en inglés (para audiencias internacionales)

Los prompts mapean a estos campos de NLM:
- **Report** → `--prompt` con `--format "Create Your Own"`
- **Slides** → campo "Describe the slide deck you want to create" / `--focus`
- **Infographic** → campo "Describe the infographic you want to create" / `--focus`
- **Video** → campos "Describe a custom visual style" + "What should the AI hosts focus on?"

---

## 1. Report Prompts

### ES — Reporte Ejecutivo (C-Suite)

```
Crea un reporte ejecutivo con voz audaz y directa. Estructura:
1. IMPACTO: Abre con el dato más impactante (ahorro, crecimiento, eficiencia)
2. PROBLEMA: Describe el problema real en 2-3 frases cortas y crudas
3. SOLUCIÓN: Cómo se resuelve — enfoca en "conectar sistemas" y "construir rieles"
4. EVIDENCIA: Métricas reales, testimonios, casos de estudio
5. ACCIÓN: Cierra con siguiente paso concreto

Tono: Directo, seguro, sin corporate speak. Frases cortas.
Usa voz activa. Lidera con números. Cada sección < 150 palabras.
Vocabulario: "conectar" no "integrar", "encontrar" no "identificar",
"arqueología organizacional" para el proceso de discovery.
```

### EN — Executive Report (C-Suite)

```
Create an executive report with a bold, direct voice. Structure:
1. IMPACT: Open with the most striking data point (savings, growth, efficiency)
2. PROBLEM: Describe the real problem in 2-3 short, raw sentences
3. SOLUTION: How it's solved — focus on "connecting systems" and "building rails"
4. EVIDENCE: Real metrics, testimonials, case studies
5. ACTION: Close with a concrete next step

Tone: Direct, confident, no corporate speak. Short sentences.
Use active voice. Lead with numbers. Each section < 150 words.
Vocabulary: "connect" not "integrate", "find" not "identify",
"organizational archaeology" for the discovery process.
```

### ES — Reporte Operativo

```
Crea un reporte operativo con enfoque en procesos y mejoras tangibles.
Abre con el problema que el equipo vive diario (WhatsApp, Excel, datos manuales).
Muestra el antes/después con métricas claras.
Usa lenguaje cercano pero profesional. Tuteo.
Cierra con los 3 próximos pasos más urgentes.
Frases cortas. Voz activa. Números siempre.
```

### EN — Operational Report

```
Create an operational report focused on processes and tangible improvements.
Open with the daily pain the team experiences (WhatsApp, Excel, manual data entry).
Show before/after with clear metrics.
Use warm but professional language.
Close with the 3 most urgent next steps.
Short sentences. Active voice. Always lead with numbers.
```

---

## 2. Slide Deck Prompts

### ES — Pitch / Presentación Ejecutiva

```
Crea un slide deck audaz y visual para audiencia ejecutiva.
Estructura: Problema → Dato de impacto → Solución → Cómo funciona → Caso real → CTA.
Cada slide = 1 idea. Títulos cortos (máx 6 palabras). Usa métricas grandes.
Tono directo, sin buzzwords. Cierra con call-to-action claro.
Estilo: Limpio, minimalista, alto contraste. Negro y amarillo como acentos.
```

### EN — Pitch / Executive Presentation

```
Create a bold, visual slide deck for an executive audience.
Structure: Problem → Impact data → Solution → How it works → Case study → CTA.
Each slide = 1 idea. Short titles (max 6 words). Use big metrics.
Direct tone, no buzzwords. Close with a clear call-to-action.
Style: Clean, minimalist, high contrast. Black and yellow as accents.
```

### ES — Workshop / Formación

```
Crea un slide deck educativo para un workshop práctico.
Tono cercano pero riguroso. Usa "tú" (tuteo).
Estructura: Concepto → Ejemplo real → Ejercicio → Takeaway.
Incluye preguntas de reflexión y espacios para participación.
Cada slide debe poder explicarse en 60 segundos.
```

### EN — Workshop / Training

```
Create an educational slide deck for a hands-on workshop.
Warm but rigorous tone.
Structure: Concept → Real example → Exercise → Takeaway.
Include reflection questions and participation spaces.
Each slide should be explainable in 60 seconds.
```

---

## 3. Infographic Prompts

### ES — Resumen Ejecutivo

```
Usa un tema de colores negro y amarillo con alto contraste.
Destaca las 3 estadísticas clave en formato grande.
Flujo visual de arriba a abajo: problema → solución → resultado.
Texto mínimo, máximo impacto. Cada punto en una frase.
Estilo limpio y moderno, sin decoración innecesaria.
```

### EN — Executive Summary

```
Use a black and yellow color theme with high contrast.
Highlight the 3 key statistics in large format.
Visual flow top to bottom: problem → solution → result.
Minimal text, maximum impact. Each point in one sentence.
Clean modern style, no unnecessary decoration.
```

### ES — Proceso / Metodología

```
Crea una infografía de proceso paso a paso.
Usa íconos simples y flechas de flujo.
Tema: fondo blanco, acentos en azul y amarillo.
Cada paso: número + título corto + 1 línea de descripción.
Destaca los puntos de decisión con color diferente.
```

### EN — Process / Methodology

```
Create a step-by-step process infographic.
Use simple icons and flow arrows.
Theme: white background, blue and yellow accents.
Each step: number + short title + 1-line description.
Highlight decision points with a different color.
```

---

## 4. Video Overview Prompts

### ES — Estilo Visual

```
Estilo profesional con gráficos limpios y minimalistas.
Paleta: negro, blanco, amarillo como acento principal, azul como secundario.
Evita animaciones excesivas. Prioriza claridad y datos visuales.
```

### ES — Foco del Host

```
Presenta los hallazgos como una historia de descubrimiento.
Abre con el problema más crudo. Usa números para generar impacto.
Mantén un tono seguro y directo — como un consultor senior presentando a la junta.
Cierra con una pregunta provocadora o un call-to-action.
```

### EN — Visual Style

```
Professional style with clean, minimalist graphics.
Palette: black, white, yellow as primary accent, blue as secondary.
Avoid excessive animations. Prioritize clarity and visual data.
```

### EN — Host Focus

```
Present findings as a discovery story.
Open with the rawest problem. Use numbers for impact.
Keep a confident, direct tone — like a senior consultant presenting to the board.
Close with a provocative question or call-to-action.
```

---

## 5. Quick Reference: NLM Commands

### Report (ejecutivo, español)
```bash
echo y | nlm report create second-brain \
  -f "Create Your Own" \
  --prompt "Crea un reporte ejecutivo con voz audaz y directa..." \
  --language es \
  -y
```

### Slides (pitch, español)
```bash
echo y | nlm slides create second-brain \
  -f detailed_deck \
  --language es \
  --focus "Slide deck audaz para audiencia ejecutiva. Problema → Impacto → Solución → Caso → CTA." \
  -y
```

### Infographic (ejecutivo, español)
```bash
echo y | nlm infographic create second-brain \
  -o landscape \
  -d standard \
  --language es \
  --focus "Tema negro y amarillo. 3 estadísticas clave. Problema → solución → resultado." \
  -y
```
