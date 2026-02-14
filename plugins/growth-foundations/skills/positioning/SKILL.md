---
name: positioning
description: Use when working on product positioning, value propositions, messaging frameworks, brand differentiation, or go-to-market messaging. Activates for "positioning", "value proposition", "messaging", "differentiation", "product positioning", "messaging framework", "unique selling proposition", or "how should we position".
version: 1.0.0
---

# Positioning & Value Proposition

Framework para articular el valor único de un producto/servicio B2B. Construye positioning que conecta con el dolor del cliente y diferencia de la competencia.

## Cuándo usar este skill

- El usuario necesita definir o refinar su positioning
- Quiere crear un value proposition canvas
- Necesita un messaging framework para su equipo
- Quiere articular diferenciación competitiva
- Está preparando pitch deck, website copy, o sales materials

## Proceso de Positioning

### Paso 1: Entender el contexto

Antes de posicionar, necesitas 4 inputs:

| Input | Pregunta clave | Fuente |
|-------|---------------|--------|
| **Cliente ideal** | ¿A quién sirves mejor? | ICP analysis (usar skill `icp-analysis` si no existe) |
| **Pain principal** | ¿Qué dolor específico resuelves? | Entrevistas con clientes y equipo de ventas |
| **Alternativas** | ¿Contra qué compites? (incluyendo status quo) | Competitive analysis |
| **Capacidad única** | ¿Qué puedes hacer que otros no? | Análisis interno honesto |

### Paso 2: Positioning Statement

El positioning statement tiene esta estructura:

```
Para [CLIENTE IDEAL]
que [SITUACIÓN / PAIN]
[PRODUCTO] es [CATEGORÍA]
que [BENEFICIO PRINCIPAL].

A diferencia de [ALTERNATIVA PRINCIPAL],
[PRODUCTO] [DIFERENCIADOR CLAVE].
```

**Ejemplo**:
```
Para empresas familiares LATAM de $50M+ revenue
que dependen de conocimiento tribal y procesos manuales,
AI Huevos es una consultora de transformación operacional con AI
que institucionaliza el conocimiento y automatiza procesos críticos.

A diferencia de las Big 4 consultoras,
AI Huevos implementa en sprints de 30 días con ROI medible desde el día 1.
```

### Paso 3: Value Proposition Canvas

Para el canvas completo con instrucciones, leer `frameworks/value-prop-canvas.md`.

El canvas tiene dos lados:

**Lado del cliente (Customer Profile)**:
| Componente | Qué documentar |
|-----------|----------------|
| Jobs to be done | ¿Qué intenta lograr el cliente? (funcional, social, emocional) |
| Pains | ¿Qué le frustra, le da miedo, o le impide lograr sus jobs? |
| Gains | ¿Qué resultados y beneficios busca? |

**Lado del producto (Value Map)**:
| Componente | Qué documentar |
|-----------|----------------|
| Products & Services | ¿Qué ofreces? (lista concreta) |
| Pain Relievers | ¿Cómo eliminas o reduces cada pain? |
| Gain Creators | ¿Cómo generas cada gain deseado? |

**Fit**: El valor se crea donde Pain Relievers conectan con Pains, y Gain Creators conectan con Gains.

### Paso 4: Messaging Framework

El messaging framework traduce el positioning en copy usable por todo el equipo:

| Nivel | Qué es | Largo | Ejemplo de uso |
|-------|--------|-------|----------------|
| **Tagline** | Frase memorable que captura la esencia | 5-10 palabras | Homepage hero, business card |
| **Elevator Pitch** | Explicación completa en 30 segundos | 2-3 oraciones | Networking, cold calls |
| **Value Story** | Narrativa con contexto, problema, solución, resultado | 1-2 minutos | Discovery calls, demos |
| **Proof Points** | Datos y casos que respaldan los claims | Variables | Proposals, case studies |

**Template de Elevator Pitch**:
```
Ayudamos a [CLIENTE IDEAL] a [OUTCOME DESEADO]
usando [MÉTODO/PRODUCTO DIFERENCIADOR].
[PROOF POINT: métrica, caso, o credencial].
```

### Paso 5: Message Testing

Para validar el messaging:

1. **Test interno**: ¿Tu equipo de ventas puede repetir el pitch sin notas?
2. **Test de 5 segundos**: Muestra el headline a alguien — ¿entienden qué haces?
3. **Test de competidor**: ¿Podrías poner el logo de un competidor y el mensaje sigue funcionando? Si sí, no es diferenciador.
4. **Test del "¿y qué?"**: Después de cada claim, pregunta "¿y qué?" — si no puedes responder con impact, el claim es débil.

## Errores comunes

| Error | Ejemplo | Fix |
|-------|---------|-----|
| Centrado en features | "Tenemos AI y machine learning" | Centrar en outcome: "Reduces el cierre contable de 5 días a 1" |
| Genérico | "Soluciones innovadoras para tu empresa" | Específico: "Para logísticas LATAM con +500 conductores" |
| Sin diferenciador | "La mejor plataforma de X" | Comparativo: "A diferencia de X, nosotros Y" |
| Sin prueba | "Multiplicamos tu revenue" | Con proof: "Multiplicamos revenue 3x (caso OPL: $175M → análisis de $12M en leakage)" |
| Demasiado largo | Párrafos en el hero | Tagline < 10 palabras, elevator pitch < 3 oraciones |

## Output esperado

Al finalizar, el usuario debe tener:

1. **Positioning Statement** (1 párrafo, formato estructurado)
2. **Value Proposition Canvas** (2 lados, con fit documentado)
3. **Messaging Framework** (4 niveles: tagline, elevator pitch, value story, proof points)
4. **Recomendaciones** de dónde usar cada mensaje (website, sales, marketing)
