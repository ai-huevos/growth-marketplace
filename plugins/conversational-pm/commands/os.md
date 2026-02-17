---
description: Start GrowthOS intake — conversational protocol to diagnose growth stage and route to correct phase
argument-hint: (none — starts intake conversation)
allowed-tools: all
---

# Command: /os

Inicia el protocolo de intake de GrowthOS para nuevos usuarios. Ejecuta el cuestionario conversacional de 4 seed data points y rutea al usuario a la fase correcta.

## Uso

```
/os
```

No requiere argumentos. Inicia una conversación interactiva.

## Flujo

1. **Intake conversacional**: Ejecuta `os/intake/seed-questionnaire.md`
   - Recopila: firmográfico, oferta, dolor, activos
   - Deriva: growth_stage, icp_draft, bottleneck, team_constraints

2. **Diagnóstico**: Determina la fase inicial basándose en el bottleneck
   - Bottleneck "identidad" → Fase DEFINIR
   - Bottleneck "atracción" → Fase ATRAER
   - Bottleneck "conversión" → Fase CONVERTIR
   - Bottleneck "retención" → Fase ESCALAR

3. **Routing**: Activa los skills de la fase correspondiente
   - Muestra qué skills se activarán
   - Pregunta si el usuario quiere empezar

4. **GCO creation**: Crea el GrowthOS Context Object inicial
   - Guarda los 4 seed data points
   - Establece fase actual
   - Inicializa outputs vacío

## Ejemplo

```
Usuario: /os

PM: "Hola, soy GrowthOS. Voy a hacerte algunas preguntas para entender tu situación y sugerirte los próximos pasos. ¿Empezamos?"

Usuario: "Sí"

PM: "Perfecto. ¿Cuál es el nombre de tu empresa y en qué industria operas?"

[... conversación continúa ...]

PM: "Basándome en lo que me contaste:
- Tu bottleneck principal es ATRAER leads
- Tienes un buen producto (resultados con clientes existentes)
- Necesitas contenido y funnel

Te sugiero empezar con la fase ATRAER. ¿Quieres que te ayude a crear un plan de contenido y estructura de funnel?"
```

## Referencias

- Intake protocol: `os/intake/seed-questionnaire.md`
- GCO schema: `os/intake/context-object.md`
- Master orchestrator: `os/growthOS.md`
- Fases: `os/phases/definir.md`, `os/phases/atraer.md`, `os/phases/convertir.md`, `os/phases/escalar.md`
