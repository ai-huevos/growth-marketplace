---
description: Sesion de analisis win/loss usando framework PULSO. Revisa patrones en deals cerrados y recomienda ajustes al pipeline y CRM.
argument-hint: <datos de deal o pipeline>
allowed-tools: [Read, Glob, Grep]
---

# Analisis Win/Loss de deals

El usuario quiere analizar deals para: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo** de 5 fases. Guia al usuario paso a paso.

### Fase 1: Recopilar datos de deals

Solicitar al usuario datos de deals cerrados (won + lost). Minimo 10 deals para patrones significativos, ideal 20+.

**Datos requeridos por deal**:

| Campo | Descripcion | Obligatorio |
|-------|-------------|-------------|
| Empresa | Nombre del account | Si |
| Resultado | Won / Lost / No Decision | Si |
| Tamano | ACV o valor del deal | Si |
| Ciclo | Dias desde creacion hasta cierre | Si |
| Industria | Vertical del cliente | Si |
| Fuente | Inbound / Outbound / Referral / Partner | Si |
| Razon de perdida | Si aplica — competidor, precio, timing, no decision | Si (lost) |
| Stakeholders | Numero y roles involucrados | No |
| Competidor | Contra quien se compitio | No |
| Etapa de perdida | En que stage se perdio el deal | No (lost) |

**Si el usuario tiene CRM**, pedirle un export con estos campos. Si no, construir la tabla juntos.

**Presentar resumen de los datos recibidos. Esperar confirmacion.**

### Fase 2: PULSO scoring de cada deal

Para cada deal (o los top 5-10 mas representativos), aplicar scoring PULSO retroactivo:

```
DEAL: [Empresa] — [Won/Lost] — $[Valor]

PULSO SCORE:

| Dimension | Score (1-5) | Evidencia |
|-----------|-------------|-----------|
| Panorama | [X] | [Que sabiamos del contexto actual del cliente] |
| Urgencia | [X] | [Que tan bien identificamos y cuantificamos el dolor] |
| Logro | [X] | [Se cuantifico el logro en $ o metricas de negocio?] |
| Situación Crítica | [X] | [Habia urgencia real? Se identifico un evento catalizador?] |
| Organización | [X] | [Mapeamos el proceso de organización? Conocimos a los stakeholders?] |

PULSO TOTAL: [X/25]
CALIFICACION: [Fuerte (20-25) / Medio (13-19) / Debil (5-12)]
```

**Criterio de scoring**:
- 5 = Documentado, cuantificado, validado con el cliente
- 4 = Documentado con buen detalle
- 3 = Informacion parcial, algunas suposiciones
- 2 = Informacion vaga o incompleta
- 1 = No se abordó o desconocido

Presentar tabla resumen:

```
RESUMEN PULSO — TODOS LOS DEALS:

| Deal | Resultado | Valor | S | P | I | CE | D | Total | Calificacion |
|------|-----------|-------|---|---|---|----|---|-------|-------------|
| [A]  | Won       | $50K  | 4 | 5 | 4 | 4  | 3 | 20/25 | Fuerte      |
| [B]  | Lost      | $30K  | 3 | 2 | 1 | 1  | 2 | 9/25  | Debil       |

| ...  | ...       | ...   | . | . | . | .  | . | ...   | ...         |
```

### Fase 3: Analisis de patrones

Con los datos y scores, identificar patrones sistematicos:

**Patrones de victoria** (que tienen en comun los deals ganados):
- Score PULSO promedio de deals won vs lost
- Dimensiones PULSO mas fuertes en wins
- Tamano de deal promedio en wins
- Ciclo de venta promedio en wins
- Fuentes mas efectivas
- Industrias con mejor win rate

**Patrones de perdida** (que tienen en comun los deals perdidos):
- Dimensiones PULSO mas debiles en losses
- Razon de perdida mas frecuente
- Etapa donde se pierden mas deals
- Existe patron de "no decision"? (PULSO debil en Logro + Situación Crítica)
- Tamano de deal donde se pierde mas

**Correlaciones clave**:
- PULSO score vs resultado (hay umbral minimo para ganar?)
- Dimension PULSO mas predictiva de resultado
- Numero de stakeholders vs win rate
- Fuente del deal vs win rate
- Ciclo de venta vs resultado

Presentar analisis con visualizacion:

```
HALLAZGOS CLAVE:

1. PULSO SCORE PREDICE RESULTADO:
   - Deals Won: PULSO promedio = [X/25]
   - Deals Lost: PULSO promedio = [Y/25]
   - Umbral critico: Deals con PULSO < [Z] tienen [W%] probabilidad de perder

2. DIMENSION MAS DEBIL: [Logro / Situación Crítica / Organización]
   - En [X%] de los deals perdidos, esta dimension tenia score <= 2
   - Implicacion: [que significa esto para el proceso de ventas]

3. PATRON "NO DECISION":
   - [X%] de perdidas son "no decision"
   - Caracteristica comun: Logro no cuantificado + Situación Crítica ausente
   - Costo: $[X] en pipeline estancado

4. [Patron adicional especifico al dataset]
```

**Esperar reaccion del usuario** antes de continuar.

### Fase 4: Analisis de concentracion

Evaluar riesgos de concentracion en el pipeline:

**Por industria**:
- Que % del pipeline viene de cada vertical?
- Hay sobre-dependencia de una industria?
- Que industrias tienen mejor win rate?

**Por tamano de deal**:
- Distribucion: SMB vs Mid-Market vs Enterprise
- Win rate por segmento
- Revenue potencial por segmento

**Por fuente**:
- Inbound vs Outbound vs Referral vs Partner
- Win rate y deal size por fuente
- Costo de adquisicion implicito por fuente

**Por rep** (si hay datos):
- Distribucion de performance
- Top performers vs struggling (que hacen diferente?)
- Correlacion entre PULSO quality y resultados por rep

Presentar mapa de concentracion:

```
MAPA DE CONCENTRACION:

INDUSTRIA:
| Vertical | % Pipeline | Win Rate | Deal Size Prom | Riesgo |
|----------|-----------|----------|----------------|--------|
| [Fintech] | 45% | 35% | $40K | Alto — sobre-concentrado |
| [SaaS] | 30% | 25% | $25K | Medio |
| [Otro] | 25% | 15% | $15K | Bajo win rate |

FUENTE:
| Canal | % Pipeline | Win Rate | Recomendacion |
|-------|-----------|----------|---------------|
| [Inbound] | 60% | 30% | Sano pero diversificar |
| [Outbound] | 25% | 15% | Mejorar targeting |
| [Referral] | 15% | 45% | Escalar — mejor win rate |
```

### Fase 5: Recomendaciones de CRM y calificacion

Basado en todo el analisis, generar recomendaciones accionables:

**1. Ajustes al proceso de ventas**:
- Que cambiar en discovery basado en las dimensiones PULSO debiles
- Criterios de entry/exit por stage del pipeline
- Qualification gates: que PULSO score minimo para avanzar deals

**2. Ajustes al CRM**:
- Campos requeridos por stage (basado en PULSO)
- Alertas automaticas para deals con PULSO score bajo
- Dashboard de salud de pipeline con PULSO como eje central

**3. Ajustes de coaching**:
- Areas de coaching prioritarias (dimensiones PULSO debiles)
- Ejercicios especificos para mejorar cada dimension
- Cadencia de deal review recomendada

**4. Ajustes de targeting**:
- ICP refinado basado en patrones de victoria
- Industrias/segmentos a priorizar vs deprioritizar
- Criterios de calificacion ajustados

### Output final

Entregar el reporte completo de analisis Win/Loss:

```markdown
# Reporte Win/Loss Analysis — [Empresa/Contexto]

## 1. Resumen ejecutivo
- [X] deals analizados ([Y] won, [Z] lost)
- Win rate actual: [X%]
- Hallazgo principal: [insight mas importante]
- Recomendacion #1: [accion de mayor impacto]

## 2. PULSO scoring detallado
- Tabla completa de scoring por deal
- Score promedio por dimension (won vs lost)

## 3. Patrones identificados
- Patrones de victoria (top 3)
- Patrones de perdida (top 3)
- Correlaciones clave

## 4. Analisis de concentracion
- Por industria, tamano, fuente
- Riesgos identificados
- Oportunidades de diversificacion

## 5. Recomendaciones
- Proceso de ventas (3-5 ajustes)
- CRM (campos, alertas, dashboards)
- Coaching (areas prioritarias)
- Targeting (ICP refinado)

## 6. Plan de accion inmediato
- Semana 1: [accion rapida de mayor impacto]
- Semana 2-4: [implementar ajustes de proceso]
- Mes 2-3: [medir impacto, iterar]
```
