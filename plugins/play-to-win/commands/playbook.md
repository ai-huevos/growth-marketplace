---
description: Diagnostica problemas GTM y sintetiza un playbook personalizado con blueprints Winning by Design seleccionados por relevancia.
argument-hint: <problema GTM o nombre de empresa>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Playbook personalizado GTM

El usuario quiere generar un playbook de ventas personalizado para: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo** de 6 fases. Guia al usuario paso a paso. Sigue el protocolo del agente `playbook-coach` en `agents/playbook-coach.md`.

### Fase 1: Extraer contexto de negocio

Si el usuario proporciono contexto en $ARGUMENTS, usarlo como base. Si no, conducir una entrevista rapida:

**Preguntas minimas** (obtener al menos estas):
1. Que hace tu empresa? (industria, producto/servicio, modelo de negocio)
2. Cual es tu revenue actual? (ARR/MRR, etapa de la empresa)
3. Como es tu equipo de ventas? (tamano, estructura, metodologia actual)
4. Metricas clave: win rate, sales cycle promedio, deal size promedio
5. Cual es tu desafio GTM principal? (el problema que quieres resolver)

Si existe un resumen SPICED previo (de `/discovery` u otra sesion), usarlo directamente.

Buscar contexto adicional en el plugin:
- Leer `skills/sales-transformation/frameworks/` para referencia metodologica
- Leer `skills/pre-discovery-research/` si hay research previo del usuario

**Presentar resumen del contexto al usuario. Esperar confirmacion.**

### Fase 2: Clasificar el problema GTM

Con el contexto validado, clasificar el problema en los 8 dominios:

| Dominio | Descripcion |
|---------|-------------|
| Pipeline Generation | Pocas oportunidades, bajo coverage |
| Deal Velocity | Ciclos largos, deals estancados |
| Win Rate | Baja conversion, "no decision" losses |
| Average Deal Size | Deals pequenos, descuentos excesivos |
| Customer Retention | Churn alto, handoff deficiente |
| Expansion Revenue | Bajo NRR, sin upsell |
| Team Capability | Ramp lento, coaching inconsistente |
| Sales Operations | Proceso informal, sin forecasting |

Un problema puede tocar multiples dominios. Priorizar los 1-2 dominios principales.

**Presentar clasificacion con razonamiento. Esperar confirmacion.**

### Fase 3: Scoring y seleccion de blueprints

Para cada dominio identificado, evaluar blueprints candidatos con scoring triple:

- **Relevancia** (40%): Que tan directamente aborda el problema
- **Impacto** (35%): Magnitud esperada de mejora
- **Factibilidad** (25%): Realismo de implementacion dado el contexto

Seleccionar los top 2-4 blueprints. Presentar ranking:

```
BLUEPRINT RANKING:

1. [Blueprint] (Score: X.X)
   - Relevancia: X/10 — [justificacion]
   - Impacto: X/10 — [justificacion]
   - Factibilidad: X/10 — [justificacion]
   - Razon: [por que este blueprint para este problema]

2. [Blueprint] (Score: X.X)
   [...]
```

**Esperar confirmacion del usuario** antes de sintetizar el playbook.

### Fase 4: Sintetizar playbook personalizado

Con los blueprints confirmados, generar un playbook de 15-20 paginas:

**Estructura obligatoria**:

```markdown
# Playbook: [Nombre] para [Empresa]

## Resumen ejecutivo
## Parte 1: La metodologia (sintesis de blueprints)
## Parte 2: Como ejecutar (adaptado al contexto)
## Parte 3: Roadmap de implementacion (12 semanas)
## Parte 4: Herramientas y enablement
## Parte 5: Medicion e iteracion
## Apendices
```

**Adaptaciones requeridas**:
- Por tamano de deal: lightweight (<$10K) / standard ($10K-$50K) / comprehensive (>$50K)
- Por ciclo de venta: comprimido (<30d) / standard (30-90d) / extendido (>90d)
- Por madurez del equipo: foundational (sin metodologia) / intermediate (basica) / advanced (optimizar)
- Guia por rol: AEs, Managers, Leadership

### Fase 5: Crear materiales de enablement

Generar como parte del playbook:

1. **Training deck** — Estructura de presentacion (15-25 slides en markdown)
2. **Quick reference guide** — One-pager imprimible con proceso core
3. **Templates de ejecucion** — SPICED adaptado al ICP, scripts de discovery, mapeo de decision
4. **Scripts de coaching** — Guia de 1-on-1 (formato REKS), deal review para reuniones
5. **Biblioteca de ejemplos** — Ejemplos de ejecucion exitosa y errores comunes

### Fase 6: Disenar plan de medicion con hypothesis cards

Generar 2-3 hypothesis cards:

```
IF [accion basada en el playbook]
THEN [resultado esperado con metrica especifica]
BECAUSE [razonamiento causal basado en el contexto]
MEASURED BY [KPIs y metodo de tracking]
TIMEFRAME [cuando evaluar]
CONFIDENCE [Alta/Media/Baja]
```

Incluir plan de medicion:

| Tipo | Metricas | Frecuencia |
|------|----------|------------|
| Leading (adopcion) | Completion rate, quality score | Semanal |
| Lagging (resultados) | Win rate, sales cycle, deal size | Mensual |
| Cohorte | Pre vs post playbook | Trimestral |

Definir criterios de decision:
- Adopcion <60% en semana 4 → aumentar coaching
- Quality scores <3.0 → training adicional
- Metricas planas en semana 8 → revisar playbook fit

### Output final

Entregar al usuario:
1. Playbook personalizado completo (15-20 paginas)
2. Ranking de blueprints con scoring justificado
3. Paquete de enablement (training, templates, scripts)
4. Hypothesis cards (2-3 hipotesis testables)
5. Plan de medicion con criterios de decision
