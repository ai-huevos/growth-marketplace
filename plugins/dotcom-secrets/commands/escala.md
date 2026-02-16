---
description: Workshop interactivo para diseñar una ESCALA completa (value ladder de 4 niveles) con cálculo de LTV:CAC y customer journey mapping.
argument-hint: [industria, producto/servicio, o nombre de empresa]
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Workshop de ESCALA

El usuario quiere diseñar o refinar su ESCALA (value ladder) para: $ARGUMENTS

## Instrucciones

Este es un workshop **interactivo**. No generes todo de una vez — guía al usuario paso a paso, haciéndole preguntas y construyendo la ESCALA juntos.

### Fase 1: Contexto del Negocio (3 preguntas al usuario)

Antes de empezar, necesitas entender el negocio:

1. "¿Qué vendes y a quién?" (producto/servicio, B2B/B2C, modelo de revenue)
2. "¿Cuál es tu precio promedio actual y cuántos clientes tienes?"
3. "¿Cuál es tu costo de adquisición de cliente (CAC) actual? Si no lo sabes, ¿cuánto gastas en marketing/ventas al mes?"

**Espera las respuestas antes de continuar.**

### Fase 2: RADAR Discovery (4 preguntas al usuario)

Usa el framework RADAR para entender al cliente soñado:

4. **WHO**: "Describe a tu cliente soñado con el mayor detalle posible: industria, tamaño, cargo del decisor, dolor principal"
5. **WHERE**: "¿Dónde se congregan? (LinkedIn groups, eventos, comunidades, asociaciones)"
6. **BAIT**: "Si pudieras ofrecer algo GRATIS que fuera irresistible para ellos, ¿qué sería?"
7. **RESULT**: "¿Cuál es el resultado transformador que quieren lograr?"

**Espera las respuestas. Sintetiza lo que escuchas antes de continuar.**

### Fase 3: Auditoría de Ofertas Actuales

Con las respuestas de Fase 1 y 2, mapear las ofertas actuales del usuario a los 4 tiers de ESCALA:

| Tier | Oferta Actual | Precio | Status |
|------|--------------|--------|--------|
| BAIT (gratuito) | [basado en respuestas] | $0 | ✅ Existe / ❌ Falta |
| FRONTEND (bajo costo) | [basado en respuestas] | $[X] | ✅ Existe / ❌ Falta |
| MIDDLE (core) | [basado en respuestas] | $[X] | ✅ Existe / ❌ Falta |
| BACKEND (premium) | [basado en respuestas] | $[X] | ✅ Existe / ❌ Falta |

"¿Este mapeo es correcto? ¿Qué tiers te faltan o quieres rediseñar?"

**Espera las respuestas antes de continuar.**

### Fase 4: Diseño de ESCALA (tier por tier)

Para cada tier, proponer y validar con el usuario:

**Tier 1 — BAIT (Lead Magnet)**
- Nombre de la oferta
- Formato (guía, checklist, template, mini-curso, quiz)
- Problema específico que resuelve
- Canal de distribución
- Trigger de ascensión al FRONTEND

**Tier 2 — FRONTEND (Entrada)**
- Nombre de la oferta
- Precio sugerido (con ajuste LATAM si aplica)
- Entregable principal
- Tiempo a valor
- Trigger de ascensión al MIDDLE

**Tier 3 — MIDDLE (Core)**
- Nombre de la oferta
- Precio sugerido
- Entregable principal y duración
- Nivel de acceso/soporte incluido
- Trigger de ascensión al BACKEND

**Tier 4 — BACKEND (Premium)**
- Nombre de la oferta
- Precio sugerido
- Entregable premium (done-for-you, 1:1, mastermind)
- Exclusividad y diferenciador
- Modelo de continuidad (retainer, membership)

Validar cada tier con el usuario antes de avanzar al siguiente.

### Fase 5: Cálculo LTV:CAC

Con los datos recopilados, calcular:

| Métrica | Valor |
|---------|-------|
| CAC actual | $[dato del usuario] |
| Revenue por lead estimado | $[cálculo] |
| Conversion rate BAIT→FRONTEND | [%] |
| Conversion rate FRONTEND→MIDDLE | [%] |
| Conversion rate MIDDLE→BACKEND | [%] |
| LTV proyectado (12 meses) | $[cálculo] |
| **LTV:CAC ratio** | **[X]:1** |

Comparar con benchmarks:
- LTV:CAC < 1:1 — No viable, revisar pricing o CAC
- LTV:CAC 1:1 - 3:1 — Sostenible pero ajustado
- LTV:CAC 3:1 - 5:1 — Saludable
- LTV:CAC > 5:1 — Excelente, puede invertir más en adquisición

Si el usuario no tiene datos de conversion rate, usar benchmarks de industria para estimar.

### Fase 6: Customer Journey Map

Generar el mapa visual del journey completo:

```
[Tráfico] → [BAIT] → [FRONTEND] → [MIDDLE] → [BACKEND]
   ↓            ↓           ↓            ↓            ↓
 Canal      Lead Magnet   Oferta      Programa     Premium
 Fuente     Opt-in        Compra 1    Compra 2     Compra 3+
 $CAC       $0            $[precio]   $[precio]    $[precio]
```

Incluir:
- Triggers de ascensión entre cada tier
- Touchpoints de email/nurture entre tiers
- Tiempos estimados entre cada transición
- Puntos de decisión del cliente

### Fase 7: Output Final

Generar documento ESCALA completo usando el template en `skills/escala/templates/escala-canvas.md`.

El documento debe incluir:
1. RADAR completo (WHO, WHERE, BAIT, RESULT)
2. ESCALA de 4 tiers con nombre, precio, entregable, y trigger de ascensión
3. Cálculo LTV:CAC con métricas detalladas
4. Customer journey map con transiciones
5. Próximos 3 pasos recomendados con timeline

### Tono y estilo

- Sé conversacional — esto es un workshop, no un examen
- Sintetiza las respuestas del usuario antes de pasar al siguiente paso
- Ofrece ejemplos cuando el usuario dude
- Si el usuario no tiene datos, ayúdalo a estimar basándose en su experiencia y benchmarks de industria
- Al final, resume todo en un documento limpio y accionable
