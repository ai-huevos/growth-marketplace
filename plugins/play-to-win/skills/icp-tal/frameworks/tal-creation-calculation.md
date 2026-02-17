# Framework: Creacion y Calculo de Target Account List

Framework operativo para construir, calcular, y mantener un Target Account List (TAL) que refleje la capacidad real del equipo GTM. Cubre tres enfoques de construccion, una formula de calculo por tier, composicion de account pods, y el proceso de review trimestral.

## Principios fundamentales

- **El TAL es un compromiso, no una lista de deseos**: Cada cuenta en T1 consume tiempo, atencion, y recursos reales de un rep. Si la lista es demasiado grande, la calidad de engagement colapsa
- **El calculo determina la estrategia, no al reves**: Primero calculas cuantas cuentas puedes manejar con calidad, despues decides cuales entran
- **Tiering es allocation de recursos**: T1 recibe lo mejor (pod dedicado, contenido personalizado). T3 recibe air cover automatizado. No hay termino medio
- **20% de refresh trimestral**: El TAL es un organismo vivo. Cuentas que no avanzan salen, cuentas con nuevos signals entran
- **Operacionalizacion o muerte**: Un TAL que no esta en el CRM, marketing automation, y reporting no existe para el equipo

---

## 3 Enfoques para Construir el TAL

### Enfoque 1: Named Account List

Seleccion manual de cuentas conocidas que matchean el ICP. Tipicamente usado en modelos Enterprise y Named Accounts.

**Proceso**:
1. Extraer lista de cuentas del CRM que matchean firmograficos del ICP
2. Enriquecer con datos de terceros (LinkedIn, ZoomInfo, Clearbit)
3. Validar manualmente con el equipo de ventas (conocimiento de campo)
4. Asignar tier basado en fit score + señales de intent

**Ventajas**: Alta precision. El equipo conoce las cuentas personalmente.
**Limitaciones**: No escala. Depende del conocimiento individual de los reps.

**Mejor para**: Named Global (2-6 cuentas/rep) y Named Large (6-20 cuentas/rep).

### Enfoque 2: Fit Model

Scoring algoritmico basado en atributos firmograficos del ICP. Cada atributo tiene un peso y la suma produce un fit score.

**Proceso**:
1. Definir atributos del ICP con pesos (industria 30%, tamano 25%, tecnologia 20%, etc.)
2. Obtener datos firmograficos de todo el mercado addressable
3. Calcular fit score para cada cuenta
4. Ordenar por score y aplicar tiers

**Ejemplo de Fit Model**:

| Atributo | Peso | Criterio T1 | Criterio T2 | Criterio T3 |
|---|---|---|---|---|
| Industria | 30% | Match exacto | Adyacente | Tangencial |
| Empleados | 25% | 200-2,000 | 50-200 o 2,000-5,000 | <50 o >5,000 |
| Tecnologia | 20% | Stack compatible | Parcialmente compatible | Incompatible |
| Crecimiento | 15% | >30% YoY | 10-30% YoY | <10% YoY |
| Geografia | 10% | Region primaria | Region secundaria | Fuera de cobertura |

**Ventajas**: Escalable. Objetivo. Reproducible.
**Limitaciones**: Depende de la calidad de los datos. No captura señales cualitativas.

**Mejor para**: Field Sales (20-50 cuentas/rep) con volumen medio.

### Enfoque 3: In-Market Signals (Intent Data)

Identificar cuentas que estan activamente buscando soluciones como la tuya a traves de señales de intent.

**Señales de intent**:
- Busquedas de keywords relacionadas (Bombora, G2)
- Visitas al sitio web (analytics, reverse IP lookup)
- Consumo de contenido de competidores (G2, TrustRadius)
- Contrataciones en roles relevantes (LinkedIn)
- Participacion en eventos/webinars del sector
- Interacciones con contenido propio (email opens, downloads)

**Proceso**:
1. Definir keywords y topics de intent relevantes
2. Configurar plataforma de intent data (Bombora, 6sense, Demandbase)
3. Cruzar cuentas con intent activo contra ICP firmografico
4. Priorizar cuentas con intent alto + fit alto

**Ventajas**: Identifica timing. Las cuentas estan "calientes" — buscando activamente.
**Limitaciones**: Datos de intent pueden ser ruidosos. Requiere inversion en herramientas.

**Mejor para**: Two-Stage (50-150 cuentas/rep) con volumen alto y demand gen.

---

## Operacionalizacion en 5 Pasos

### Paso 1.1: Enriquecer con Data Sources

Antes de hacer tiering, asegurar que cada cuenta tiene datos completos:

| Tipo de Dato | Fuente Primaria | Fuente Secundaria | Criticidad |
|---|---|---|---|
| Firmograficos | CRM | Clearbit, ZoomInfo | Obligatorio |
| Tecnograficos | BuiltWith, G2 | Discovery calls | Recomendado |
| Intent | Bombora, 6sense | Web analytics | Opcional (alto valor) |
| Relaciones | LinkedIn | CRM contacts | Obligatorio |
| Financieros | Crunchbase, reportes | News alerts | Recomendado |

### Paso 1.2: Tiering de Cuentas

Aplicar criterios de tiering basados en fit score + señales adicionales:

**Criterios para T1** (todos deben cumplirse):
- Fit score >= 80/100
- Al menos 1 contacto identificado en buying center
- Revenue de la cuenta >= umbral minimo de ACV
- Sin bloqueadores conocidos (competidor instalado con contrato largo, etc.)

**Criterios para T2** (mayoria deben cumplirse):
- Fit score 60-79/100
- Industria o tamano dentro del ICP
- Pain reconocido pero sin urgencia inmediata

**Criterios para T3** (minimo):
- Fit score 40-59/100
- Al menos un atributo firmografico alineado con ICP
- No es anti-ICP (no tiene atributos descalificantes)

### Paso 1.3: Validar con Stakeholders GTM

El TAL requiere validacion cross-funcional antes de operacionalizar:

| Rol | Responsabilidad en Validacion | Input que Provee |
|---|---|---|
| **VP Sales** (Driver) | Aprueba lista final y asignacion a reps | Conocimiento de campo, relaciones existentes |
| **VP Marketing** (Approver) | Confirma que puede generar campanas por tier | Capacidad de targeting, contenido disponible |
| **Rev Ops** (Contributor) | Valida datos, identifica gaps | Data quality, integraciones de sistemas |
| **SDR/ADR Lead** (Contributor) | Confirma que puede ejecutar outreach por tier | Capacidad de equipo, scripts existentes |
| **CS Lead** (Influencer) | Señala cuentas con potencial de expansion | Datos de satisfaction, expansion signals |

### Paso 1.4: Operacionalizar en Sistemas

El TAL solo existe si esta en los sistemas que el equipo usa diariamente:

**CRM (Salesforce, HubSpot)**:
- Campo `ICP_Tier` (T1/T2/T3) en objeto Account
- Campo `Fit_Score` (0-100) calculado o manual
- Vista personalizada por tier para cada rep
- Reports de cobertura: cuentas asignadas vs contactadas vs en pipeline

**Marketing Automation (HubSpot, Marketo, Pardot)**:
- Listas segmentadas por tier
- Workflows diferenciados: T1 (1:1 personalizado), T2 (1:few segmentado), T3 (1:many automatizado)
- Scoring de leads ajustado por tier (T1 +50 puntos, T2 +25, T3 +0)

**Reporting**:
- Dashboard de cobertura TAL: % de T1 con actividad en ultimo mes
- Conversion por tier: T1 vs T2 vs T3 win rates
- Pipeline generado por tier
- Velocidad de ciclo por tier

### Paso 1.5: Review Trimestral (~20% Refresh)

Cada trimestre, revisar el TAL completo y refrescar aproximadamente el 20% de las cuentas:

**Cuentas que salen**:
- Sin engagement en 2 trimestres consecutivos
- Firmograficos cambiaron (M&A, downsizing) y ya no matchean ICP
- Competidor ganado con contrato multi-año
- Fit score cayo por debajo del umbral del tier

**Cuentas que entran**:
- Nuevas cuentas que matchean ICP con fit score alto
- Cuentas existentes con nuevos intent signals
- Referrals de clientes actuales
- Cuentas que pasaron por un Critical Event (ronda, nuevo CRO, expansion)

---

## Calculo del TAL

### Cuentas por Rep segun Deal Size

La tabla fundamental que determina cuantas cuentas puede manejar cada rep con calidad:

| Modelo GTM | ACV Tipico | Cuentas por Rep | Ciclo Tipico | Complejidad de Venta |
|---|---|---|---|---|
| **Named Global** | >$500K | 2-6 | 9-18 meses | Ultra-alta. C-suite. Multi-region. |
| **Named Large** | $100K-$500K | 6-20 | 6-12 meses | Alta. VP-level. Multi-stakeholder. |
| **Field Sales** | $25K-$100K | 20-50 | 3-6 meses | Media. Director. Pod-supported. |
| **Two-Stage** | $5K-$25K | 50-150 | 1-3 meses | Baja-media. Manager. Efficiency-driven. |

### Formula de Calculo por Tier

```
T1 = cuentas_por_rep × total_reps
T2 = total_ICP × 20%
T3 = total_ICP - (T1 + T2)
```

**Donde**:
- `cuentas_por_rep` = numero de la tabla anterior segun modelo GTM
- `total_reps` = numero de Account Executives o reps de cierre
- `total_ICP` = universo total de cuentas que matchean el ICP

### Ejemplos de Calculo

#### Ejemplo 1: Named Accounts

- **Modelo**: Named Large
- **Total ICP**: 500 cuentas
- **Reps**: 6
- **Cuentas/Rep**: 15

```
T1 = 15 × 6 = 90 cuentas
T2 = 500 × 20% = 100 cuentas
T3 = 500 - 90 - 100 = 310 cuentas
```

**Interpretacion**: 90 cuentas reciben engagement 1:1 con pod dedicado. 100 cuentas en nurture activo. 310 cuentas en air cover de marketing.

#### Ejemplo 2: Field Sales

- **Modelo**: Field Sales
- **Total ICP**: 2,500 cuentas
- **Reps**: 10
- **Cuentas/Rep**: 30

```
T1 = 30 × 10 = 300 cuentas
T2 = 2,500 × 20% = 500 cuentas
T3 = 2,500 - 300 - 500 = 1,700 cuentas
```

**Interpretacion**: 300 cuentas con outreach personalizado. 500 en campanas segmentadas. 1,700 en contenido automatizado.

#### Ejemplo 3: Two-Stage

- **Modelo**: Two-Stage
- **Total ICP**: 3,500 cuentas
- **Reps**: 8 (AEs) + 12 (SDRs que prospectan)
- **Cuentas/Rep**: 100 (para SDRs)

```
T1 = 100 × 12 = 1,200 cuentas (SDR-sourced pipeline)
T2 = 3,500 × 20% = 700 cuentas
T3 = 3,500 - 1,200 - 700 = 1,600 cuentas
```

**Interpretacion**: SDRs prospectan activamente 1,200 cuentas. 700 en nurture marketing. 1,600 en awareness automatizado.

---

## Account Pod Composition

El pod es la unidad operativa que ejecuta la estrategia en cuentas T1:

| Rol | Responsabilidad | Metricas Clave | Ratio Tipico |
|---|---|---|---|
| **ABM** (Account-Based Marketer) | Contenido personalizado, campanas 1:1, experiencias de cuenta, eventos exclusivos | Engagement rate, pipeline influenced | 1 ABM : 5-10 cuentas T1 |
| **ADR** (Account Development Rep) | Outreach personalizado, multi-threading, calificacion de contactos, coordinar meetings | Meetings booked, contacts engaged, multi-thread % | 1 ADR : 10-20 cuentas T1 |
| **SE** (Solutions Engineer) | Demos tecnicas, POCs, validacion de fit tecnico, arquitectura de solucion | Demo-to-close rate, POC success rate | 1 SE : 3-5 AEs |

**Configuracion de pod por modelo**:
- **Named Global**: 1 ABM + 1 ADR + 1 SE por AE (ratio 1:1:1:1)
- **Named Large**: 1 ABM por 2 AEs + 1 ADR por AE + SE compartido
- **Field Sales**: ABM compartido + 1 ADR por 2 AEs + SE bajo demanda
- **Two-Stage**: Sin ABM dedicado. SDR team + SE pool compartido

---

## 3 Factores Clave que Determinan el Calculo

### Factor 1: Deal Size (ACV)

El ACV determina directamente cuantas cuentas puede manejar cada rep con calidad. A mayor ACV, menos cuentas pero mas profundidad en cada una.

**Regla**: Si tu ACV sube 2x, tus cuentas por rep bajan ~50%.

### Factor 2: Account-Based Resources (Pod)

La disponibilidad de recursos de soporte (ABM, ADR, SE) define el techo de cuantas cuentas T1 puedes realmente atender. Sin pod, no hay T1 genuino — solo T2 con nombre de T1.

**Regla**: Si no tienes pod, tu T1 real es 0. Esas cuentas son T2 con buen deseo.

### Factor 3: Complexity of Sale

Ciclos largos con multiples stakeholders, evaluaciones tecnicas, y procurement requieren mas tiempo por cuenta. La complejidad no es solo del producto — es del proceso de compra del cliente.

**Regla**: Complejidad de compra (del cliente) importa mas que complejidad de producto (tuya).

---

## Errores comunes

| Error | Consecuencia | Correccion |
|---|---|---|
| TAL demasiado grande para la capacidad de reps | Engagement superficial en todas las cuentas. Nadie recibe atencion real. | Calcular con la formula. T1 = cuentas/rep x reps. No negociar. |
| No diferenciar engagement por tier | Mismo email generico para T1 y T3. Desperdicio de cuentas premium. | Definir playbooks diferenciados: T1 (1:1), T2 (1:few), T3 (1:many). |
| TAL estatico sin refresh | Cuentas muertas consumen slots. Cuentas nuevas calientes no entran. | Review trimestral obligatorio. Refresh ~20%. |
| No operacionalizar en CRM | El TAL existe en un spreadsheet que nadie mira. | Campos de tier y fit score en CRM. Vistas por rep. |
| Llamar T1 a todo | Si todo es prioridad, nada es prioridad. | T1 maximo = cuentas/rep x reps. El resto es T2 o T3. |
| Pod inexistente para cuentas T1 | Prometes engagement premium que no puedes cumplir. | Honestidad: sin pod, reclasificar a T2. |
