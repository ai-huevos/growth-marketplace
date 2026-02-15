---
description: Genera una propuesta comercial B2B basada en el diagnostico SPICED del deal. Incluye business case, ROI, y Mutual Action Plan.
argument-hint: <nombre del cliente o deal>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Generador de Propuesta

El usuario quiere generar una propuesta para: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo**. La propuesta se construye con informacion del usuario.

### Fase 1: Recopilar SPICED del Deal

Preguntar al usuario por el diagnostico SPICED. Si no lo tiene, ayudarlo a construirlo:

1. **Situation**: "Cuentame sobre el prospect: industria, tamano, herramientas actuales, contexto reciente."
2. **Pain**: "Cual es el dolor principal? Hay numeros? (ej: cuanto tiempo/dinero pierden)"
3. **Impact**: "Si resuelven esto, que cambia? (numeros + impacto personal para el decision maker)"
4. **Critical Event**: "Hay un deadline? Que pasa si no actuan a tiempo?"
5. **Decision**: "Quien firma? Como es el proceso? Que criterios usan para evaluar?"

**Esperar las respuestas. Sintetizar antes de continuar.**

Calcular el SPICED score. Si es < 23, advertir al usuario:

> "El SPICED score es [X]/30. Para una propuesta solida, recomiendo primero completar el diagnostico en las dimensiones [X, Y]. Quieres proceder de todas formas o prefieres hacer mas discovery?"

### Fase 2: Determinar segmento

Basado en ACV estimado:
- **$100K+**: Usar template enterprise (`skills/proposal-generation/templates/enterprise-proposal.md`)
- **$20K-$100K**: Usar template mid-market (`skills/proposal-generation/templates/mid-market-proposal.md`)
- **<$20K**: Usar template mid-market simplificado

Preguntar al usuario: "Cual es el valor estimado del deal (ACV)?"

### Fase 3: Recopilar informacion adicional

Para completar la propuesta, necesitas:

1. **Solucion propuesta**: "Que componentes/servicios incluirias en la propuesta?"
2. **Pricing**: "Cual es el pricing por opcion (Essential/Professional/Enterprise)?"
3. **Timeline de implementacion**: "Cuantas semanas/fases para implementar?"
4. **Caso de exito similar**: "Tienes un caso de un cliente similar que podamos incluir?"
5. **Equipo de implementacion**: "Quienes participan de tu lado?"

**Esperar las respuestas.**

### Fase 4: Generar la propuesta

Con toda la informacion, generar la propuesta completa:

1. **Executive Summary** (1 parrafo): Problema + solucion + resultado esperado + ROI
2. **Entendimiento de su Situacion**: Basado en S+P del SPICED. Demostrar que entendiste su mundo.
3. **Costo de la inaccion**: Basado en CE. Que pasa si no actuan.
4. **Solucion propuesta**: Cada componente conectado con un dolor especifico.
5. **Resultados esperados**: Quick wins (30 dias) + mediano plazo (90 dias) + 12 meses.
6. **Plan de implementacion**: Fases con deliverables, roles, y riesgos.
7. **Inversion**: Opciones con ROI calculado.
8. **Criterios de evaluacion**: Como la solucion cumple cada criterio del Decision SPICED.
9. **Proximos pasos**: Mutual Action Plan con timeline atado al CE.

### Fase 5: Trading Prep

Antes de presentar la propuesta, preparar para tradear:

Leer el Trading Checklist de `skills/proposal-generation/SKILL.md` y generar:

| Palanca | Nuestra posicion | Que pediriamos a cambio |
|---------|-----------------|------------------------|
| Precio | [Precio lista] | Contrato mas largo / pago adelantado |
| Termino | [12 meses base] | Caso de exito / referencia |
| Scope | [Scope propuesto] | Compromiso de adoption/usuarios |
| Soporte | [Nivel propuesto] | Decision rapida |
| Timeline | [Inicio propuesto] | Acceso a stakeholders |

### Fase 6: Review final

Antes de entregar, verificar:

- [ ] Cada seccion refleja datos especificos del SPICED (no generico)
- [ ] El executive summary se puede leer solo y tiene sentido
- [ ] El pricing esta contextualizado con el valor/impact (no solo el numero)
- [ ] Hay fecha de expiracion con consecuencias
- [ ] Los proximos pasos son concretos con nombres y fechas
- [ ] El tono es consultivo, no vendedor

**Output final**: Propuesta completa en formato listo para enviar + trading prep para la reunion de presentacion.
