---
name: deal-strategy
description: Use when analyzing won/lost deals, facilitating stakeholder meetings, driving decision criteria, planning deal strategy, or preparing CxO meetings. Activates for "estrategia deal", "stakeholder meeting", "facilitar reunion", "criterios decision", "ganar deal", "analisis win loss", "analizar deals", "deal strategy", "stakeholder facilitation", "decision criteria", "win the deal", "win loss analysis", "deal analysis".
version: 1.0.0
---

# Deal Strategy

Sistema integrado de estrategia de deals que cubre el ciclo completo: desde el analisis de deals ganados/perdidos para identificar patrones, hasta la facilitacion de reuniones de stakeholders, manipulacion de criterios de decision, y sponsorship CxO. Basado en la Metodología GrowthOS y el framework PULSO.

## Cuando usar este skill

- El usuario necesita analizar por que gana o pierde deals (win/loss analysis)
- Quiere facilitar una reunion de stakeholders de forma estructurada
- Necesita influir en los criterios de decision del prospect a su favor
- Quiere preparar una estrategia para ganar un deal especifico
- Necesita obtener sponsorship de un CxO para avanzar el deal
- Quiere disenar KPIs que demuestren impacto durante una evaluacion

## Filosofia: Ganar se disena, no se improvisa

Los deals no se ganan en la negociacion final — se ganan en cada interaccion anterior. Cada punto de contacto es una oportunidad para educar al comprador, reconfigurar los criterios a tu favor, y construir sponsorship que haga la decision obvia.

> "Un comprador bien educado generalmente toma la decision correcta para su negocio. Tu trabajo es educar mejor que tu competencia."

## Los 4 Pilares de Deal Strategy

Este skill integra 4 capacidades que trabajan en conjunto:

```
┌─────────────────────────────────────────────────┐
│              DEAL STRATEGY                       │
│                                                  │
│  ┌──────────────┐    ┌──────────────────────┐   │
│  │ 1. Win/Loss  │───>│ 2. Stakeholder       │   │
│  │    Analysis  │    │    Facilitation       │   │
│  │              │    │                       │   │
│  │ Patrones de  │    │ As-Is → Possible      │   │
│  │ exito/fallo  │    │ → Agree Plan          │   │
│  └──────┬───────┘    └──────────┬────────────┘   │
│         │                       │                │
│         v                       v                │
│  ┌──────────────┐    ┌──────────────────────┐   │
│  │ 3. Decision  │<───│ 4. CxO Sponsorship   │   │
│  │    Criteria  │    │    & KPI Design       │   │
│  │              │    │                       │   │
│  │ Deprioritize │    │ Know / Process /      │   │
│  │ Insert / Rank│    │ Provoke / Parity      │   │
│  └──────────────┘    └──────────────────────┘   │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## Pilar 1: Win/Loss Analysis (PULSO)

Analizar deals cerrados (ganados y perdidos) usando PULSO para descubrir patrones repetibles. No se trata de buscar excusas — se trata de encontrar los factores que predicen exito o fracaso.

### El proceso

1. **Revisar deals closed-won y closed-lost** del ultimo trimestre completo (minimo)
2. **Codificar cada deal** con los campos PULSO:

| Dimension PULSO | Que codificar | Ejemplo won | Ejemplo lost |
|-----------------|---------------|-------------|--------------|
| **Panorama** | Contexto personal/emocional, como llegaron | Champion motivado por cambio | Referral frio, sin urgencia personal |
| **Urgencia** | Tipo y severidad del dolor, tecnologia/proceso incumbente | Urgencia bloqueando crecimiento, CxO visibility | Urgencia moderada, workaround funcional |
| **Logro** | Importancia personal/profesional, tamano del logro/impacto, importancia estrategica | Visibilidad de carrera, >20% mejora | Logro marginal, nice-to-have |
| **Situación Crítica** | Deadline real que fuerza la decision | Deadline en <120 dias, consecuencias claras | Sin deadline, "para el proximo ano" |
| **Organización** | Proceso, stakeholders, criterios | 3+ stakeholders, criterios claros, champion activo | <2 stakeholders, proceso vago |

3. **Identificar concentraciones**: Buscar clusters de deals con criterios similares
4. **Formular action plan** basado en los patrones

### Patrones tipicos a buscar

**Patrones de victoria**:
- Champion nuevo (primeros 90 dias en el rol) + incumbente problematico + Situación Crítica en <120 dias = win rate 50%+
- 3+ stakeholders involucrados + criterios de decision establecidos = avance predecible
- Pain con visibilidad CxO + impacto cuantificable = ciclo corto

**Patrones de derrota**:
- <2 stakeholders + sin Stage 2 en <60 dias + incumbente no es uno de los 3 problematicos = 2% close rate
- Sin Situación Crítica real = deal se estanca indefinidamente
- Champion sin poder de decision + no hay acceso a CxO = ghost

### Action plan post-analisis

1. **CRM**: Ajustar campos y data collection para capturar estos patrones automaticamente
2. **Calificacion**: Incorporar learnings en el proceso de qualification temprano — no quemar ciclos donde no puedes ganar
3. **Forecasting**: Ajustar confianza de forecast y/o algoritmos, lead scoring, targeting de expansion
4. **Repetir**: Analisis cada trimestre para refinar y confirmar patrones

Para el framework completo de win/loss analysis, leer `frameworks/win-loss-analysis.md`.

### Metricas de validacion

Cuando el analisis es correcto, deberias ver:

| Metrica | Efecto esperado |
|---------|----------------|
| CR3 (MQL → SQL) | Disminuye notablemente (criterios mas estrictos) |
| CR4 (SQL → Commit) | Aumenta notablemente (pipeline de mayor calidad) |
| Forecast accuracy | Mejora significativamente |
| T4 (sales cycle) | Se normaliza, el rango se reduce |
| T5 (time to value) | Puede reducir por mejor fit pain/solucion |
| CR6 (churn) | Disminuye por impacto validado y confirmado |

---

## Pilar 2: Stakeholder Meeting Facilitation

La reunion de stakeholders es el momento donde se gana o se pierde el deal a nivel organizacional. No es una presentacion — es una facilitacion en 3 partes.

### Secuencia de 3 partes

```
PARTE 1: AS-IS                PARTE 2: WHAT'S POSSIBLE       PARTE 3: AGREE PLAN
─────────────────              ──────────────────────         ──────────────────
Alinear a todos sobre         Co-crear la vision de un       Crear plan de 30-90 dias
el estado actual              futuro mejor                   para llegar al primer impacto

• Benchmark actual            • "Sonar en grande"            • Mutual Action Plan
• Datos del as-is             • Metricas de impacto          • Priorizar
• Custom demo                   potencial (12 meses)         • Comprometerse
• Compartir insights          • Historias de clientes        • Decision criteria
  de discovery anterior         similares                    • PoC o propuesta de impacto
                              • Impacto en el negocio
```

### Preparacion critica

**Antes de la reunion**:
- Call previa con tu champion ("call before the call")
- Coachear al champion para abrir con: *"La razon por la que los reuni hoy es..."*
- Esto establece su liderazgo y te posiciona como experto (no como vendedor pitcheando)
- Conocer los criterios de decision de los involucrados

**Regla del formato**:
- Mas whiteboard, menos PowerPoint
- Compartir el marcador con los stakeholders
- Co-crear, no presentar

**Despues de la reunion**:
- Obtener statement de sponsorship del CxO
- Esto establece quienes deben estar en la reunion de stakeholders
- Asegurar que los criterios de decision estan documentados

### CxO Sponsorship

Antes del stakeholder meeting: enviar mensaje al CxO preguntando *"Que quieres obtener personalmente de esta reunion?"*

Esto logra 3 cosas:
1. Confirma que el CxO asistira y esta invested
2. Revela sus prioridades reales (que pueden diferir del champion)
3. Te permite preparar contenido que responde directamente a sus expectativas

Para el framework completo, leer `frameworks/stakeholder-facilitation.md`.

---

## Pilar 3: Decision Criteria

La mayoria de los prospects tienen un proceso de decision arbitrario. Como profesional de ventas, tu trabajo es guiar al prospect en los criterios que deberian usar.

### 4 pasos para establecer criterios

1. **Establecer criterios** hablando con quienes usaran la solucion
2. **Identificar opciones** para abordar cada criterio (competidores, sustitutos)
3. **Rankear opciones** basado en los criterios usando research (analistas, reviews publicas)
4. **Determinar el impacto** de cada criterio en el negocio del cliente

### 3 formas de mejorar tu posicion competitiva

| Tactica | Que hacer | Ejemplo |
|---------|----------|---------|
| **DEPRIORITIZE** | Reducir la importancia de un criterio donde el competidor es fuerte | Tu servicio cuesta $500/mes mas, pero genera $2,000/mes de revenue adicional → el impacto de revenue supera el impacto de precio |
| **INSERT** | Insertar un criterio nuevo donde solo tu tienes capacidad | Feature unica que genera momentum con usuarios y eventualmente mas revenue → criterio emocional + racional |
| **IMPROVE RANKING** | Mejorar tu posicion en un criterio existente | Nueva API que simplifica la vida del cliente → usar cliente existente como referencia |

### Comprador educado vs. no educado

- **Comprador no educado**: Usa ponderacion (weighting) — chequea casillas, gana el que tiene mas checks
- **Comprador educado**: Decide basado en impacto — prioriza los criterios que mas mueven la aguja del negocio

Tu trabajo es educar al comprador. Tu haces esto docenas de veces al mes; el prospect lo hace una vez cada varios anos. Tu expertise es necesaria para demostrar el impacto de cada criterio.

### Trade-off Matrix

La herramienta clave para educar al comprador:

```
Criterio          | Impacto en el negocio
──────────────────┼──────────────────────────────────
Performance       | Aumenta revenue $2,000/mes
[Criterio nuevo]  | Aumenta revenue $1,500/mes
Integration       | Ahorra $15K one-time + $500/mes
Support           | SLA de 2 horas de respuesta
─── umbral de impacto mayor ────────────────────────
Price             | Aumenta costo $500/mes
```

Stack rank basado en el impacto que provee al negocio del prospect. El precio casi siempre tiene el menor impacto real.

Para el framework completo, leer `frameworks/decision-criteria-tactics.md`.

---

## Pilar 4: KPI Design (Know / Process / Provoke / Parity)

Disenar KPIs estrategicos para las reuniones de stakeholders. Los KPIs compartidos tienden a convertirse en criterios de decision y criterios de PoC.

### Los 4 tipos de KPI

| Tipo | Proposito | Ejemplo |
|------|-----------|---------|
| **Know** | KPIs que el prospect ya conoce y trackea | Revenue mensual, win rate, churn rate |
| **Process** | KPIs de proceso que revelan la raiz del problema | Tiempo en cada etapa, touches por deal, conversion entre stages |
| **Provoke** | KPIs provocadores que el prospect no esta midiendo (pero deberia) | Revenue perdido por deals no trabajados, costo de oportunidad del status quo |
| **Parity** | KPIs de comparacion con la industria | "Tu win rate es 18%, la industria promedia 25%" |

### Estrategia de uso

1. **Abrir con Know**: Demostrar que entiendes su negocio
2. **Profundizar con Process**: Mostrar donde estan las fricciones reales
3. **Provocar con Provoke**: Crear urgencia mostrando lo que no estan midiendo
4. **Contextualizar con Parity**: Posicionar vs. benchmarks de industria

Los KPIs compartidos durante la reunion de stakeholders (Parte 2: What's Possible) tienen una tendencia natural a convertirse en los criterios de decision y en los KPIs de una PoC.

---

## Integracion entre pilares

Los 4 pilares no operan en aislamiento:

1. **Win/Loss Analysis** revela que patrones PULSO predicen exito → informa que deals priorizar
2. **Stakeholder Facilitation** avanza los deals priorizados → el formato As-Is/Possible/Plan estructura la conversacion
3. **Decision Criteria** se trabaja durante y despues del stakeholder meeting → las tacticas de deprioritize/insert/improve reconfiguran la evaluacion
4. **KPI Design** alimenta la Parte 2 del stakeholder meeting → los KPIs compartidos se convierten en decision criteria naturalmente

## Conexion con otros skills

- **Pre-Discovery Research**: El research de 5 capas alimenta directamente la preparacion del stakeholder meeting y la estrategia de decision criteria
- **Relationship Mapping**: El mapa de stakeholders informa quien debe estar en la reunion y que rol juega cada uno
- **Sales Transformation**: Los patrones de win/loss informan que cambios de proceso son necesarios

## Output esperado

Al ejecutar este skill, generar segun el caso de uso:

### Para Win/Loss Analysis:
1. **Analisis PULSO** de 10+ deals (ganados y perdidos)
2. **Tabla de patrones** con concentraciones identificadas
3. **Recomendaciones de CRM** (campos, data collection)
4. **Ajustes de calificacion** para el proceso de ventas
5. **Predicciones de forecast** basadas en patrones

### Para Stakeholder Meeting:
1. **Agenda de 3 partes** (As-Is → What's Possible → Agree Plan)
2. **Prep del champion** (script para apertura)
3. **KPIs seleccionados** (Know / Process / Provoke / Parity)
4. **Decision criteria** identificados y estrategia
5. **Mutual Action Plan** draft

### Para Decision Criteria:
1. **Trade-off Matrix** con impacto cuantificado
2. **Estrategia** (deprioritize / insert / improve)
3. **Argumentario de educacion** al comprador
4. **Referencias de clientes** alineadas a criterios clave
