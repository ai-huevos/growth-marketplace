---
name: psychological-triggers
description: Use when applying persuasion principles, psychological triggers, or influence tactics to copy. Activates for "psychological trigger", "trigger psicologico", "persuasion", "influence", "cialdini", "scarcity", "urgency", "social proof", "loss aversion", "reciprocity".
version: 1.0.0
---

# Psychological Triggers

Biblioteca de triggers psicologicos extraida del analisis de 4,129 instancias reales en copy de alto rendimiento. Cada trigger incluye guia de implementacion practica.

## Cuando usar este skill

- El usuario quiere hacer su copy mas persuasivo
- Necesita elegir que triggers aplicar a una pieza especifica
- Quiere entender por que su copy actual no convierte
- Busca optimizar CTAs, headlines o secuencias con psicologia aplicada

## Jerarquia de triggers por efectividad

Ranking basado en leverage score (impacto por uso):

| # | Trigger | Leverage | Instancias | Descripcion |
|---|---------|----------|------------|-------------|
| 1 | **Scarcity** | 9.4/10 | 395 | Disponibilidad limitada impulsa urgencia |
| 2 | **Urgency** | 9.1/10 | 579 | Presion temporal acelera decisiones |
| 3 | **Greed** | 9.0/10 | 1,818 | Deseo de mas/mejor/exclusivo |
| 4 | **Reciprocity** | 8.6/10 | 770 | Dar valor primero, recibir compromiso |
| 5 | **Social Proof** | 7.9/10 | 204 | Si otros confian, yo deberia confiar |
| 6 | **Loss Aversion** | 7.6/10 | 128 | Miedo a perder > deseo de ganar (2x) |
| 7 | **Authority** | 4.0/10 | 84 | Posicionamiento de expertise |
| 8 | **Fear** | 3.0/10 | 58 | Consecuencias de la inaccion |
| 9 | **Commitment** | 2.0/10 | 56 | Pequenos "si" llevan a grandes "si" |
| 10 | **Curiosity** | 1.7/10 | 37 | Vacios de conocimiento demandan cierre |

## Proceso de aplicacion

### Paso 1: Diagnostico del copy actual

Evaluar que triggers estan presentes y cuales faltan:

```
Copy actual: [pegar copy]

Triggers detectados:
- [ ] Scarcity
- [ ] Urgency
- [ ] Greed
- [ ] Reciprocity
- [ ] Social Proof
- [ ] Loss Aversion
- [ ] Authority
- [ ] Fear
- [ ] Commitment
- [ ] Curiosity

Score persuasivo actual: X/10
```

### Paso 2: Seleccionar triggers segun contexto

No todos los triggers aplican a todos los contextos:

| Contexto | Triggers primarios | Triggers secundarios |
|----------|-------------------|---------------------|
| **Cold outreach** | Curiosity, Reciprocity | Social Proof, Authority |
| **Landing page** | Greed, Social Proof, Scarcity | Loss Aversion, Urgency |
| **Email nurture** | Reciprocity, Authority | Commitment, Curiosity |
| **Cierre/venta** | Scarcity, Urgency, Loss Aversion | Social Proof, Fear |
| **Reactivacion** | Loss Aversion, Fear | Scarcity, Greed |
| **Ads** | Curiosity, Greed | Urgency, Social Proof |

### Paso 3: Implementar triggers seleccionados

Para guia detallada de implementacion de cada trigger con ejemplos, frases y patrones de aplicacion, leer `patterns/trigger-library.md`.

Resumen de implementacion rapida:

**Scarcity (9.4/10)**
- Cupos limitados con numero especifico
- Ediciones limitadas con deadline
- Acceso exclusivo por invitacion

**Urgency (9.1/10)**
- Deadline real (no falso)
- Countdown timer con consecuencia
- Oferta por tiempo limitado con fecha especifica

**Greed (9.0/10)**
- Stack de valor (todo lo que incluye)
- Comparacion de precio vs valor
- Bonus exclusivos por accion rapida

**Reciprocity (8.6/10)**
- Contenido gratuito de alto valor
- Auditorias/diagnosticos gratis
- Templates y herramientas sin costo

**Social Proof (7.9/10)**
- Testimonios con nombre + foto + resultado
- Logos de clientes reconocidos
- Numeros de usuarios/clientes

**Loss Aversion (7.6/10)**
- Costo de no actuar cuantificado
- Escenario futuro negativo sin solucion
- "Lo que pierdes cada dia que esperas"

### Paso 4: Evaluar intensidad

Cada trigger tiene un nivel optimo. Demasiado = manipulativo. Muy poco = inefectivo.

| Nivel | Descripcion | Cuando usar |
|-------|-------------|-------------|
| **Sutil (1-3)** | Mencion indirecta, implicito | Audiencia sofisticada, B2B enterprise |
| **Moderado (4-6)** | Mencion directa pero elegante | B2B mid-market, SaaS |
| **Intenso (7-9)** | En-tu-cara, explicito | B2C, info-productos, urgencia real |
| **Extremo (10)** | Dominante en todo el copy | Solo con urgencia genuina, jamas fabricada |

### Paso 5: Validar etica

Checklist de etica persuasiva:

- [ ] Las claims son verificables?
- [ ] La escasez es real (no fabricada)?
- [ ] Los testimonios son autenticos?
- [ ] El producto cumple lo que promete?
- [ ] El precio refleja valor real?
- [ ] El usuario puede salir facilmente (cancelar, devolver)?

**Regla de oro**: Si te avergonzarias de que tu madre leyera el copy, reescribelo.

### Paso 6: Output final

```
## Analisis de triggers: [PIEZA DE COPY]

### Triggers aplicados
| Trigger | Implementacion | Intensidad |
|---------|---------------|------------|
| [X] | [Como se aplica] | [1-10] |

### Score persuasivo
- Antes: X/10
- Despues: X/10
- Mejora: +X puntos

### Copy optimizado
[Version final con triggers integrados]

### Notas
- [Advertencias o consideraciones eticas]
- [Sugerencias de testing]
```
