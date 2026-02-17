# Framework: Win/Loss Analysis con PULSO

Sistema de analisis de deals ganados y perdidos usando el framework PULSO para descubrir patrones repetibles de exito y fracaso. Basado en el analisis win/loss de Metodología GrowthOS.

## Principio fundamental

Despues de adoptar una metodologia y crear consistencia en las operaciones de ventas, puedes usar el lenguaje comun para diagnosticar el macro-performance del equipo. Preguntar **"POR QUE"** un deal se gano o se perdio te ayuda a hacer forecast con mas precision y priorizar tiempo y deals para generar exito repetible.

> "El outcome de este proceso para la mayoria de empresas es descubrir que tienen una concentracion de deals ganados y perdidos con criterios similares."

---

## El Proceso de Analisis

### Pre-requisitos

- Campos PULSO definidos en el CRM (o estar dispuesto a hacer un ejercicio manual post-mortem)
- Datos de al menos un trimestre completo (idealmente dos) para sample size adecuado
- Ser tan especifico y objetivo como sea posible — minimizar suposiciones

### Paso 1: Recopilar datos PULSO de deals cerrados

Para cada deal closed-won y closed-lost, documentar:

#### P — Panorama (Contexto)

| Campo | Que capturar | Ejemplos de patrones |
|-------|-------------|---------------------|
| Contexto personal/emocional | Vista del champion sobre la resolucion | Champion motivado por cambio |
| Historia previa | Experiencia pasada con tu negocio o como fueron introducidos | Ex-cliente, referral de cliente, outbound frio |
| Tamano de empresa | Revenue, empleados, etapa | Serie A, 50-200 empleados |
| Industria/vertical | Segmento especifico | SaaS B2B, Fintech, Healthcare |

#### U — Urgencia (Dolor)

| Campo | Que capturar | Ejemplos de patrones |
|-------|-------------|---------------------|
| Tipo de urgencia | Categorizar el dolor | Urgencia previniendo crecimiento vs. urgencia operativa |
| Severidad | Que tan critico es | Bloqueante vs. nice-to-fix |
| Tecnologia/proceso | Urgencia especifica tech o proceso | Plataforma incumbente, disfuncion operativa, workaround manual |
| Visibilidad | Quien sabe del dolor | Con visibilidad CxO vs. solo nivel operativo |

#### L — Logro (Impacto)

| Campo | Que capturar | Ejemplos de patrones |
|-------|-------------|---------------------|
| Importancia personal/profesional | Logro en la carrera del champion | Visibilidad de carrera, promocion potencial |
| Tamano del logro | Magnitud para el departamento o empresa | >20% mejora, $X ahorrado |
| Importancia estrategica | Alineacion con iniciativas estrategicas | Ventaja competitiva, atado a expansion |

#### S — Situación Crítica (Evento Critico)

| Campo | Que capturar | Ejemplos de patrones |
|-------|-------------|---------------------|
| Deadline | Fecha especifica o ventana | Dentro de 120 dias, fin de ano fiscal |
| Consecuencia | Que pasa si no se resuelve a tiempo | Perdida de mercado, regulacion, board pressure |
| Trigger | Que creo la urgencia | Nuevo CxO, financiamiento, perdida de cliente |

#### O — Organización (Decision)

| Campo | Que capturar | Ejemplos de patrones |
|-------|-------------|---------------------|
| # Stakeholders | Cuantos involucrados | 3+ vs. <2 |
| Criterios claros | Tienen decision criteria definidos | Si/No, cuales |
| Champion activo | El champion hace trabajo interno | Push activo vs. pasivo |
| Velocidad de avance | Tiempo entre stages | Stage 2 en <60 dias vs. >90 dias |

---

### Paso 2: Identificar concentraciones

Buscar clusters de deals que comparten criterios similares. Documentar en formato de patron:

#### Template de patron WIN

```
PATRON WIN #___: [Nombre descriptivo]

Criterios que se repiten:
- Panorama: ___
- Urgencia: ___
- Logro: ___
- Situación Crítica: ___
- Organización: ___

Frecuencia: ___/[total deals analizados]
Win rate del patron: ___%

Ejemplo de deal: [Deal name]
  - Panorama: ___
  - Urgencia: ___
  - Logro: ___
  - SC: ___
  - Organización: ___
  - Resultado: Won, $___

Implicacion: [Que significa para el proceso de ventas]
```

#### Template de patron LOSS

```
PATRON LOSS #___: [Nombre descriptivo]

Criterios que se repiten:
- Panorama: ___
- Urgencia: ___
- Logro: ___
- Situación Crítica: ___
- Organización: ___

Frecuencia: ___/[total deals analizados]
Close rate del patron: ___%

Ejemplo de deal: [Deal name]
  - Panorama: ___
  - Urgencia: ___
  - Logro: ___
  - SC: ___
  - Organización: ___
  - Resultado: Lost, motivo: ___

Implicacion: [Que significa — donde no debemos invertir tiempo]
```

---

### Paso 3: Analisis de concentracion

Mapear los patrones encontrados en una matriz visual:

```
                    WIN PATTERNS                    LOSS PATTERNS
                    ────────────                    ─────────────
Alta               ┌───────────────┐               ┌───────────────┐
concentracion      │ Patron W1:    │               │ Patron L1:    │
                   │ Champion nuevo│               │ <2 stakeholders│
                   │ + incumbente  │               │ + sin SC clara │
                   │ problematico  │               │ + incumbente   │
                   │ + SC <120d    │               │   no es target │
                   │               │               │               │
                   │ Win rate: 50%+│               │ Close: 2%     │
                   └───────────────┘               └───────────────┘

Media              ┌───────────────┐               ┌───────────────┐
concentracion      │ Patron W2:    │               │ Patron L2:    │
                   │ Referral +    │               │ Outbound frio │
                   │ pain con CxO  │               │ + pain medio  │
                   │ visibility    │               │ + sin acceso  │
                   │               │               │   a CxO       │
                   │ Win rate: 35% │               │ Close: 8%     │
                   └───────────────┘               └───────────────┘

Baja               ┌───────────────┐               ┌───────────────┐
concentracion      │ Otros deals   │               │ Otros deals   │
                   │ sin patron    │               │ sin patron    │
                   │ claro         │               │ claro         │
                   └───────────────┘               └───────────────┘
```

---

### Paso 4: Formular Action Plan

Una vez completado el analisis, ejecutar estas 4 acciones:

#### Accion 1: Ajustes de CRM y Data Collection

| Cambio | Proposito | Prioridad |
|--------|-----------|-----------|
| Agregar campo "Tipo de champion" | Trackear si es nuevo vs. establecido | Alta |
| Agregar campo "Incumbente actual" | Identificar incumbentes target | Alta |
| Agregar campo "# Stakeholders activos" | Medir amplitud del engagement | Alta |
| Crear alerta "Deal sin SC en 60 dias" | Flag deals estancados temprano | Media |
| Agregar "Velocidad de avance por stage" | Detectar deals lentos | Media |

**Objetivo**: Hacer este proceso mas facil de repetir regularmente para trending analysis.

#### Accion 2: Ajustes al proceso de calificacion

Incorporar los patrones en el qualification process temprano:

```
QUALIFICATION CHECKPOINT (post-discovery):

□ Champion: Nuevo en el rol (<6 meses)?          → +2 puntos
□ Urgencia: Tiene visibilidad CxO?               → +2 puntos
□ Incumbente: Es uno de los 3 incumbentes target? → +2 puntos
□ SC: Existe deadline en <120 dias?              → +3 puntos
□ Stakeholders: Hay 3+ involucrados?             → +2 puntos
□ Stage 2: Se alcanzo en <60 dias?               → +2 puntos

Score: ___/13

> 10: Prioridad maxima — asignar recursos senior
7-10: Oportunidad solida — seguir proceso standard
< 7:  Re-evaluar — posible nurture o disqualify
```

**Regla critica**: No quemar ciclos donde no puedes ganar. Priorizar los deals donde eres la solucion correcta.

#### Accion 3: Ajustes de forecasting

- Ajustar confianza de forecast basado en la presencia de patrones WIN/LOSS
- Actualizar algoritmos de lead scoring con los criterios identificados
- Refinar targeting de customer expansion y account-based con los patrones
- Crear "deal risk score" basado en cuantos criterios LOSS tiene un deal activo

#### Accion 4: Repetir cada trimestre

```
Q1: Analisis inicial — establecer baseline de patrones
Q2: Validar patrones — confirmar que se repiten, refinar
Q3: Profundizar — buscar sub-patrones dentro de cada cluster
Q4: Review anual — recalibrar todo el modelo con 12 meses de datos
```

---

## Metricas de Validacion

Cuando el analisis win/loss esta funcionando correctamente, deberias observar estos efectos en el ciclo de revenue:

### Conversion Rates

| Metrica | Efecto esperado | Por que |
|---------|----------------|---------|
| **CR3** (MQL → SQL) | **Disminuye** notablemente | El campo adopta criterios de aceptacion mas estrictos |
| **CR4** (SQL → Commit) | **Aumenta** notablemente | Pipeline de mayor calidad, menos deals no calificados |
| **CR6** (Onboard → Expand) | **Disminuye** (menos churn) | Impacto validado y confirmado durante la venta |

### Velocidad

| Metrica | Efecto esperado | Por que |
|---------|----------------|---------|
| **T4** (sales cycle) | Se **normaliza** y el rango se reduce | Deals similares, proceso predecible |
| **T5** (time to value) | Puede **reducirse** | Mejor fit pain/solucion desde el inicio |

### Forecasting

| Metrica | Efecto esperado | Por que |
|---------|----------------|---------|
| **Forecast accuracy** | Mejora **significativamente** | Predecir basado en patrones, no en intuicion |
| **Pipeline coverage needed** | **Disminuye** | Mejor conversion = menos cobertura necesaria |

---

## Errores comunes en Win/Loss Analysis

| Error | Consecuencia | Correccion |
|-------|-------------|-----------|
| Sample size muy pequeno (<15 deals) | Patrones falsos, conclusiones erroneas | Esperar a tener al menos 1-2 trimestres completos |
| Demasiadas suposiciones | Los patrones no son confiables | Solo usar datos confirmados, marcar inferencias |
| Solo analizar losses | Se pierde la mitad del insight | Wins son igualmente importantes — revelan que replicar |
| Hacerlo una sola vez | Los patrones cambian con el mercado | Repetir cada trimestre, trending analysis |
| No actualizar el CRM | Imposible repetir el analisis automaticamente | Invertir en data collection antes del proximo ciclo |
| No actuar sobre los findings | El analisis no genera valor | Cada finding debe tener un action item con owner y fecha |

---

## Integracion con Pipeline Management

Los patrones de win/loss informan directamente:

1. **Pipeline health indicators**: Deals con patrones LOSS conocidos se flagean automaticamente
2. **Forecast confidence**: Deals con patrones WIN conocidos obtienen mayor peso
3. **Resource allocation**: Senior resources se asignan a deals con mayor probabilidad de win
4. **Coaching focus**: Los patrones LOSS se convierten en temas de coaching recurrentes
5. **Territory planning**: Concentrar esfuerzos en segmentos con patrones WIN fuertes
