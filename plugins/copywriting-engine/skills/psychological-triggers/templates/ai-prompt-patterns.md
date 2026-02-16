# T-34: AI Prompt Patterns — Mega-Prompts de Marketing

> **Output contract**: Biblioteca de prompt patterns reutilizables para tareas de marketing con AI.
> **Variables**: Contexto del cliente (ICP, pain, product), canal, objetivo.
> **Benchmark**: Cada prompt genera output usable en < 3 iteraciones.

---

## Pattern 1: JTBD Discovery Prompt (WHO-WHAT-HOW)

**Uso**: Descubrir los Jobs-to-be-Done del cliente ideal.

```
Eres un investigador de mercado experto en Jobs-to-be-Done (Christensen).

CONTEXTO:
- Producto: [producto]
- ICP: [perfil del cliente ideal]
- Industria: [industria]

ANALIZA usando el framework WHO-WHAT-HOW:
1. WHO: ¿Quién "contrata" este producto? (rol, situación, constraints)
2. WHAT: ¿Qué "trabajo" necesita que se haga? (funcional, social, emocional)
3. HOW: ¿Cómo mide si el trabajo se hizo bien? (outcomes esperados)

Para cada job identificado, clasifica:
- Urgencia (1-10)
- Impacto financiero (1-10)
- Alternativas actuales (qué usa hoy)
- Frustración con alternativas (1-10)

OUTPUT: Tabla de 5-8 jobs priorizados por urgencia × impacto.
```

---

## Pattern 2: Hooks Framework (3 tipos)

**Uso**: Generar hooks para contenido que captura atención en < 3 segundos.

```
Genera 10 hooks para [tema] usando estos 3 tipos:

TIPO 1 — STORY HOOK (personal, relatable)
Formato: "Cuando [situación personal], descubrí que [insight inesperado]..."
Ejemplo: "Cuando perdí mi tercer cliente en un mes, descubrí que el problema no era mi producto..."

TIPO 2 — DATA-SHOCK HOOK (número que sorprende)
Formato: "[Número impactante] + [implicación para la audiencia]"
Ejemplo: "El 73% de los compradores B2B ya usan AI para evaluar vendors — y tu website no está optimizado para eso."

TIPO 3 — CONTRARIAN HOOK (opinión que desafía el status quo)
Formato: "La mayoría cree que [creencia popular]. Están equivocados porque [razón contraintuitiva]."
Ejemplo: "La mayoría cree que necesitan más leads. Están equivocados — necesitan mejor calificación de los que ya tienen."

CONTEXTO:
- Audiencia: [ICP]
- Canal: [LinkedIn / Email / Blog / Ads]
- Pain principal: [dolor]
- Tono: [profesional / provocativo / educativo]

OUTPUT: 10 hooks (al menos 3 de cada tipo) + recomendación del mejor para cada canal.
```

---

## Pattern 3: CRO Scientific Method

**Uso**: Generar hipótesis de conversión para A/B testing.

```
Eres un científico de conversión. Aplica el método científico a esta página/funnel.

CONTEXTO:
- URL o descripción de la página: [página]
- Tráfico mensual: [volumen]
- Conversion rate actual: [%]
- Objetivo de conversión: [acción deseada]

PROCESO:
1. OBSERVACIÓN: ¿Qué puede estar causando fricción? (lista 5 hipótesis)
2. HIPÓTESIS: Para cada una, escribe: "Si cambio [X], entonces [Y] porque [Z]"
3. PRIORIZACIÓN: Clasifica por Impacto Esperado (1-10) × Facilidad (1-10)
4. EXPERIMENTO: Para la hipótesis #1, define:
   - Control vs Variante
   - Métrica primaria
   - Sample size necesario
   - Duración estimada

Prioriza por este orden de impacto:
- Offer (50% de impacto) — ¿La oferta es clara y atractiva?
- Headline (30%) — ¿El headline comunica el beneficio principal?
- CTA (10%) — ¿El CTA es específico y urgente?
- Social Proof (5%) — ¿Hay evidencia de que funciona?
- Design (5%) — ¿El diseño facilita o obstruye?

OUTPUT: Tabla de 5 hipótesis priorizadas + plan de A/B test para la #1.
```

---

## Pattern 4: Enemy-Driven Messaging

**Uso**: Crear messaging que define un "enemigo" claro (status quo, método viejo, competidor genérico).

```
Crea messaging usando la técnica del "enemigo compartido."

CONTEXTO:
- Producto: [producto]
- ICP: [perfil]
- Pain: [dolor]

IDENTIFICA el enemigo (NO un competidor específico — un método, sistema, o creencia):
- ¿Qué hace tu audiencia HOY que no funciona?
- ¿Qué les han dicho que es "la forma correcta" pero no lo es?
- ¿Qué les frustra del status quo?

GENERA:
1. Enemy Statement: "[El enemigo] es la razón por la que [consecuencia negativa]"
2. Hero Positioning: "Nosotros creemos en [alternativa] porque [razón]"
3. Battle Cry: Una frase de 10 palabras que tu audiencia compartiría
4. 3 Content Ideas que atacan al enemigo:
   - Blog post: "[Título]"
   - LinkedIn post: "[Hook]"
   - Email subject: "[Subject line]"

OUTPUT: Enemy statement + hero positioning + battle cry + 3 content ideas.
```

---

## Pattern 5: Content Multiplication (1-to-10)

**Uso**: Convertir 1 pieza de contenido largo en 10+ piezas derivadas.

```
Toma esta pieza de contenido y multiplícala en 10 formatos diferentes.

CONTENIDO ORIGINAL:
[Pegar o describir el contenido fuente — blog post, webinar, podcast, etc.]

GENERA:
1. Thread de LinkedIn (5-7 posts con hook)
2. 3 tweets/posts cortos (< 280 chars cada uno)
3. Email newsletter excerpt (200 palabras)
4. Infografía outline (5 puntos clave + data)
5. Carrusel de LinkedIn/Instagram (8-10 slides)
6. Quote graphic (1 frase impactante)
7. Video script para reel/short (60 segundos)
8. Podcast talking points (3 minutos)
9. Blog H2/H3 outline para SEO derivado
10. Sales enablement snippet (para que ventas use en conversations)

Para cada pieza:
- Adaptar al formato (no solo cortar — reformular)
- Incluir CTA específico del canal
- Mantener el hook principal pero variar el ángulo

OUTPUT: 10 piezas listas para publicar/usar.
```

---

## Cómo Usar Esta Biblioteca

1. **Identificar la necesidad**: ¿Qué tarea de marketing necesitas resolver?
2. **Seleccionar el pattern**: Elegir el mega-prompt más relevante
3. **Personalizar variables**: Reemplazar [placeholders] con datos reales del cliente
4. **Ejecutar**: Correr el prompt con Claude Code
5. **Iterar**: Refinar output en 2-3 rondas máximo
6. **Documentar**: Si el output es excepcional, guardar como example en el skill

---

*Derivado de: AI Megaprompts - Marketing (fuente NLM). Implementa frameworks existentes como prompt patterns ejecutables: JTBD → icp-analysis, Hooks → content-strategy, CRO → funnel-optimization, Enemy → positioning.*
