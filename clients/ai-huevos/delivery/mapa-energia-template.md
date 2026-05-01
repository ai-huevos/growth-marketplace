---
client: AI Huevos
document: mapa-energia-template
version: 1.0
status: DRAFT
date: 2026-02-22
skill-ref: play-to-win/customer-journey
template-ref: T-15 (Mapa de Energía)
---

# Mapa de Energía

## Entregable del Sprint de Descubrimiento — AI Huevos

> Este documento es el activo que vende el siguiente tier.
> No es un reporte genérico. Es un espejo de la operación real del cliente.
> El Mapa de Energía cuantifica el costo de NO actuar.
>
> **Instrucciones para el KAI Partner:** Reemplaza todos los campos `{{PLACEHOLDER}}` con datos reales recopilados durante el Sprint de Descubrimiento (10 días). Elimina las notas en cursiva antes de entregar al cliente.

---

## 1. Portada

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║                      MAPA DE ENERGÍA                             ║
║                                                                  ║
║  Cliente:        {{NOMBRE_EMPRESA}}                              ║
║  Industria:      {{INDUSTRIA}}                                   ║
║  Energy Score:   {{ENERGY_SCORE}} / 100                          ║
║  Fecha:          {{FECHA_ENTREGA}}                               ║
║  KAI Partner:    {{NOMBRE_KAI_PARTNER}}                          ║
║                                                                  ║
║  ─────────────────────────────────────────────────────────────   ║
║                                                                  ║
║  AI Huevos                                                    ║
║  AI-OS Built with you. Proven with your data.                    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### Resumen Ejecutivo

*3 oraciones máximo. Impacto primero. Números siempre.*

{{RESUMEN_EJECUTIVO}}

**Ejemplo de referencia:**

> *"{{NOMBRE_EMPRESA}} procesa {{VOLUMEN_OPERACIONES}} con {{NUM_SISTEMAS}} sistemas desconectados y {{NUM_PERSONAS_CLAVE}} personas que cargan la operación. En 10 días de arqueología organizacional identificamos {{NUM_FRICCIONES}} puntos de fricción que representan ${{AHORRO_TOTAL}} en ahorros anuales ejecutables. Este Mapa de Energía detalla exactamente dónde está esa energía escondida y cómo capturarla en 90 días."*

### Energy Score — Desglose

| Dimensión | Score | Benchmark Finkargo (inicio) |
|-----------|-------|-----------------------------|
| **Flujo de datos** | {{SCORE_FLUJO}} / 25 | 5 / 25 |
| **Adopción real** | {{SCORE_ADOPCION}} / 25 | 8 / 25 |
| **Visibilidad** | {{SCORE_VISIBILIDAD}} / 25 | 7 / 25 |
| **Capacidad del equipo** | {{SCORE_CAPACIDAD}} / 25 | 8 / 25 |
| **TOTAL** | **{{ENERGY_SCORE}} / 100** | **28 / 100** |

*Nota: Finkargo arrancó con un Energy Score de 28. Hoy opera con un AI-OS que procesa $650M anuales.*

---

## 2. Diagrama de Flujo de Información Real

> No el organigrama. No el manual de procesos. La realidad.

### 2.1 Sistemas Identificados

| # | Sistema | Tipo | Departamento(s) | Datos que almacena | Estado |
|---|---------|------|------------------|-------------------|--------|
| 1 | {{SISTEMA_1}} | {{TIPO_1}} | {{DEPTO_1}} | {{DATOS_1}} | {{ESTADO_1}} |
| 2 | {{SISTEMA_2}} | {{TIPO_2}} | {{DEPTO_2}} | {{DATOS_2}} | {{ESTADO_2}} |
| 3 | {{SISTEMA_3}} | {{TIPO_3}} | {{DEPTO_3}} | {{DATOS_3}} | {{ESTADO_3}} |
| 4 | {{SISTEMA_4}} | {{TIPO_4}} | {{DEPTO_4}} | {{DATOS_4}} | {{ESTADO_4}} |
| 5 | {{SISTEMA_5}} | {{TIPO_5}} | {{DEPTO_5}} | {{DATOS_5}} | {{ESTADO_5}} |
| 6 | {{SISTEMA_6}} | {{TIPO_6}} | {{DEPTO_6}} | {{DATOS_6}} | {{ESTADO_6}} |

*Tipos comunes: ERP, CRM, Excel, WhatsApp, Email, Google Sheets, Slack, sistema interno, base de datos, papel.*
*Estados: Activo, Subutilizado, Abandonado, Shadow IT.*

### 2.2 Conexiones Entre Sistemas

| De → A | Tipo de conexión | Frecuencia | Responsable | Tiempo por transferencia |
|--------|-----------------|------------|-------------|-------------------------|
| {{SISTEMA_A}} → {{SISTEMA_B}} | {{TIPO_CONEXION_1}} | {{FRECUENCIA_1}} | {{RESPONSABLE_1}} | {{TIEMPO_1}} |
| {{SISTEMA_C}} → {{SISTEMA_D}} | {{TIPO_CONEXION_2}} | {{FRECUENCIA_2}} | {{RESPONSABLE_2}} | {{TIEMPO_2}} |
| {{SISTEMA_E}} → {{SISTEMA_F}} | {{TIPO_CONEXION_3}} | {{FRECUENCIA_3}} | {{RESPONSABLE_3}} | {{TIEMPO_3}} |
| {{SISTEMA_G}} → {{SISTEMA_H}} | {{TIPO_CONEXION_4}} | {{FRECUENCIA_4}} | {{RESPONSABLE_4}} | {{TIEMPO_4}} |
| {{SISTEMA_I}} → {{SISTEMA_J}} | {{TIPO_CONEXION_5}} | {{FRECUENCIA_5}} | {{RESPONSABLE_5}} | {{TIEMPO_5}} |

*Tipos de conexión: Manual (copy-paste), Semi-automático (export/import), Automático (API/integración), Verbal (WhatsApp/llamada), Inexistente (dato se pierde).*

### 2.3 Diagrama de Flujo

*Reemplaza este diagrama con los sistemas y conexiones reales del cliente. Marca los puntos de fricción con `[!!]`.*

```
                         ┌──────────────┐
                         │  {{FUENTE    │
                         │  PRINCIPAL}} │
                         └──────┬───────┘
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
             ┌───────────┐ ┌────────┐ ┌──────────┐
             │{{SISTEMA  │ │{{SIST  │ │{{SISTEMA │
             │  A}}      │ │  B}}   │ │  C}}     │
             └─────┬─────┘ └───┬────┘ └────┬─────┘
                   │           │            │
              [!!] │      [!!] │       [!!] │
            MANUAL ▼    VERBAL ▼     NO HAY ▼
             ┌───────────┐ ┌────────┐ ┌──────────┐
             │{{SISTEMA  │ │{{SIST  │ │  DATO    │
             │  D}}      │ │  E}}   │ │  PERDIDO │
             └─────┬─────┘ └───┬────┘ └──────────┘
                   │           │
                   └─────┬─────┘
                         │
                    [!!]  ▼
              ┌────────────────────┐
              │  {{CONSOLIDACION}} │
              │  (Excel / manual)  │
              └────────┬───────────┘
                       │
                       ▼
              ┌────────────────────┐
              │  DECISIONES        │
              │  (con datos        │
              │   incompletos)     │
              └────────────────────┘

LEYENDA:
  ───── Conexión automática (API)
  - - - Conexión semi-automática (export/import)
  ····· Conexión manual (copy-paste)
  [!!]  Punto de fricción identificado
```

### 2.4 Benchmark Finkargo — Flujo de Información

```
ANTES (Finkargo, día 0):                 DESPUÉS (Finkargo, día 90):

ERP ···> Excel ···> WhatsApp              ERP ────> AI-OS ────> Dashboard
  │        │           │                    │          │            │
  │   copy-paste   mensajes               API     automático    real-time
  │        │           │                    │          │            │
  ▼        ▼           ▼                    ▼          ▼            ▼
4 personas reconcilando               Reconciliación automática
3 días para detectar errores           Alertas en 3 minutos
$340K desaparecidos 72 horas           $0 discrepancias sin detectar
```

**Finkargo tenía 7 puntos de fricción. {{NOMBRE_EMPRESA}} tiene {{NUM_FRICCIONES}}.**

---

## 3. Puntos de Fricción Identificados

> Cada punto de fricción es energía que se fuga. Cada dólar aquí es un dólar que {{NOMBRE_EMPRESA}} pierde cada año por no actuar.

| # | Descripción | Ubicación (depto/proceso) | Impacto Cuantificado ($/año) | Frecuencia | Personas Afectadas | Complejidad de Resolución |
|---|-------------|--------------------------|-----------------------------:|------------|-------------------|--------------------------|
| F1 | {{FRICCION_1_DESC}} | {{FRICCION_1_UBIC}} | ${{FRICCION_1_IMPACTO}} | {{FRICCION_1_FREC}} | {{FRICCION_1_PERSONAS}} | {{FRICCION_1_COMPLEJIDAD}} |
| F2 | {{FRICCION_2_DESC}} | {{FRICCION_2_UBIC}} | ${{FRICCION_2_IMPACTO}} | {{FRICCION_2_FREC}} | {{FRICCION_2_PERSONAS}} | {{FRICCION_2_COMPLEJIDAD}} |
| F3 | {{FRICCION_3_DESC}} | {{FRICCION_3_UBIC}} | ${{FRICCION_3_IMPACTO}} | {{FRICCION_3_FREC}} | {{FRICCION_3_PERSONAS}} | {{FRICCION_3_COMPLEJIDAD}} |
| F4 | {{FRICCION_4_DESC}} | {{FRICCION_4_UBIC}} | ${{FRICCION_4_IMPACTO}} | {{FRICCION_4_FREC}} | {{FRICCION_4_PERSONAS}} | {{FRICCION_4_COMPLEJIDAD}} |
| F5 | {{FRICCION_5_DESC}} | {{FRICCION_5_UBIC}} | ${{FRICCION_5_IMPACTO}} | {{FRICCION_5_FREC}} | {{FRICCION_5_PERSONAS}} | {{FRICCION_5_COMPLEJIDAD}} |
| F6 | {{FRICCION_6_DESC}} | {{FRICCION_6_UBIC}} | ${{FRICCION_6_IMPACTO}} | {{FRICCION_6_FREC}} | {{FRICCION_6_PERSONAS}} | {{FRICCION_6_COMPLEJIDAD}} |
| F7 | {{FRICCION_7_DESC}} | {{FRICCION_7_UBIC}} | ${{FRICCION_7_IMPACTO}} | {{FRICCION_7_FREC}} | {{FRICCION_7_PERSONAS}} | {{FRICCION_7_COMPLEJIDAD}} |

*Elimina filas no utilizadas. Mínimo 3, máximo 7 puntos de fricción.*

**Guía de complejidad:**
- **Alta**: Requiere cambio de sistema o proceso multi-departamento (8-12 semanas)
- **Media**: Requiere integración o automatización de proceso existente (4-8 semanas)
- **Baja**: Requiere conexión directa o automatización simple (1-4 semanas)

**Guía de frecuencia:**
- Continua (cada transacción/día)
- Semanal (cierre semanal, reportes)
- Mensual (reconciliaciones, reportes)
- Esporádica (cuando alguien se da cuenta)

### Benchmark Finkargo — Puntos de Fricción

| # | Fricción Finkargo | Impacto | Resolución |
|---|-------------------|---------|------------|
| 1 | Reconciliación manual entre ERP y banco | $340K en discrepancias no detectadas | Automática — alertas en 3 min |
| 2 | Transacciones procesadas a mano (45 min c/u) | $2.1M/año en horas-persona | De 45 min a 3 min por transacción |
| 3 | Datos de compliance en Excel separado | Multas potenciales + 72h de detección | Compliance integrado al AI-OS |
| 4 | Reportes consolidados manualmente | 3 días de cierre mensual | Real-time dashboard |
| 5 | Comunicación operativa por WhatsApp | Decisiones sin registro, datos perdidos | Workflow automatizado con trazabilidad |
| 6 | Patrones de fraude no monitoreados | Exposición de riesgo no cuantificada | Detección automática continua |
| 7 | Onboarding de clientes manual | 5 días por cliente nuevo | Automatizado a 4 horas |

---

## 4. Estimación de Ahorro Anual

> Los números hablan. Esta tabla es el argumento que cierra.

### 4.1 Resumen de Ahorros por Punto de Fricción

| # | Punto de Fricción | Ahorro Anual Estimado | Confianza* |
|---|-------------------|----------------------:|-----------|
| F1 | {{FRICCION_1_DESC_CORTA}} | ${{AHORRO_F1}} | {{CONFIANZA_F1}} |
| F2 | {{FRICCION_2_DESC_CORTA}} | ${{AHORRO_F2}} | {{CONFIANZA_F2}} |
| F3 | {{FRICCION_3_DESC_CORTA}} | ${{AHORRO_F3}} | {{CONFIANZA_F3}} |
| F4 | {{FRICCION_4_DESC_CORTA}} | ${{AHORRO_F4}} | {{CONFIANZA_F4}} |
| F5 | {{FRICCION_5_DESC_CORTA}} | ${{AHORRO_F5}} | {{CONFIANZA_F5}} |
| F6 | {{FRICCION_6_DESC_CORTA}} | ${{AHORRO_F6}} | {{CONFIANZA_F6}} |
| F7 | {{FRICCION_7_DESC_CORTA}} | ${{AHORRO_F7}} | {{CONFIANZA_F7}} |
| | **TOTAL AHORRO ANUAL** | **${{AHORRO_TOTAL}}** | |

*Confianza: Alta (dato medido directo), Media (estimación basada en entrevistas), Baja (proyección basada en benchmarks).*

### 4.2 Comparativa con Benchmark Finkargo

| Métrica | {{NOMBRE_EMPRESA}} | Finkargo (inicio) | Finkargo (post AI-OS) |
|---------|--------------------|--------------------|----------------------|
| Puntos de fricción | {{NUM_FRICCIONES}} | 7 | 0 activos |
| Ahorro anual estimado | ${{AHORRO_TOTAL}} | $15,000,000 | $15,000,000 ejecutados |
| Procesos manuales críticos | {{NUM_PROCESOS_MANUALES}} | 110+ identificados | 110+ automatizados |
| Tiempo promedio por transacción core | {{TIEMPO_TRANSACCION}} | 45 min | 3 min |
| Personas cargando la operación | {{NUM_PERSONAS_CLAVE}} | 4 | 4 (mismas, haciendo trabajo de valor) |
| Sistemas desconectados | {{NUM_SISTEMAS}} | 5+ | 0 (AI-OS conecta todo) |

### 4.3 Cálculo de ROI

```
INVERSIÓN AI-OS BUILD:           ${{INVERSION_BUILD}}
                                 (estimación basada en alcance del Mapa de Energía)

AHORRO ANUAL ESTIMADO:           ${{AHORRO_TOTAL}}

ROI AÑO 1:                      {{ROI_ANO_1}}x
                                 (${{AHORRO_TOTAL}} / ${{INVERSION_BUILD}})

BREAKEVEN:                       {{BREAKEVEN_MESES}} meses
                                 (${{INVERSION_BUILD}} / (${{AHORRO_TOTAL}} / 12))

BENCHMARK FINKARGO:              428x ROI
                                 ($15M ahorros / $35K inversión)
```

**La pregunta no es si invertir. Es cuánto cuesta cada trimestre de espera.**

Costo de no actuar: **${{COSTO_TRIMESTRAL_INACCION}}** por trimestre.

---

## 5. Roadmap de Automatizaciones Prioritarias

> Priorizadas por ratio ROI/complejidad. Quick wins primero. La velocidad construye confianza.

| # | Proceso | Ahorro Estimado | Complejidad | Timeline (semanas) | Dependencias | Quick Win |
|---|---------|----------------:|-------------|-------------------:|-------------|-----------|
| R1 | {{AUTOMATIZACION_1}} | ${{AHORRO_R1}} | {{COMPLEJIDAD_R1}} | {{SEMANAS_R1}} | {{DEPS_R1}} | {{QW_R1}} |
| R2 | {{AUTOMATIZACION_2}} | ${{AHORRO_R2}} | {{COMPLEJIDAD_R2}} | {{SEMANAS_R2}} | {{DEPS_R2}} | {{QW_R2}} |
| R3 | {{AUTOMATIZACION_3}} | ${{AHORRO_R3}} | {{COMPLEJIDAD_R3}} | {{SEMANAS_R3}} | {{DEPS_R3}} | {{QW_R3}} |
| R4 | {{AUTOMATIZACION_4}} | ${{AHORRO_R4}} | {{COMPLEJIDAD_R4}} | {{SEMANAS_R4}} | {{DEPS_R4}} | {{QW_R4}} |
| R5 | {{AUTOMATIZACION_5}} | ${{AHORRO_R5}} | {{COMPLEJIDAD_R5}} | {{SEMANAS_R5}} | {{DEPS_R5}} | {{QW_R5}} |

*Mínimo 3, máximo 5 automatizaciones. Elimina filas no utilizadas.*
*Quick Win: Sí = se puede demostrar resultado en < 2 semanas dentro del Build.*

### Criterio de Priorización

```
PRIORIDAD = (Ahorro Estimado / Complejidad) × Factor Quick Win

Donde:
  Complejidad: Alta = 3, Media = 2, Baja = 1
  Factor Quick Win: Sí = 1.5, No = 1.0
```

### Roadmap Visual — AI-OS Build (90 días)

```
SEMANA    1    2    3    4    5    6    7    8    9   10   11   12
         ├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤

MES 1 — RIELES
         ┌─────────────────────────────┐
         │ R1: {{AUTOMATIZACION_1}}    │ ← Quick Win visible semana 2
         └─────────────────────────────┘
              ┌──────────────────────────────┐
              │ R2: {{AUTOMATIZACION_2}}     │
              └──────────────────────────────┘

MES 2 — FLUJO
                   ┌──────────────────────────────────────┐
                   │ R3: {{AUTOMATIZACION_3}}              │
                   └──────────────────────────────────────┘
                        ┌─────────────────────────────────┐
                        │ R4: {{AUTOMATIZACION_4}}        │
                        └─────────────────────────────────┘

MES 3 — ENERGÍA
                                  ┌───────────────────────────────┐
                                  │ R5: {{AUTOMATIZACION_5}}      │
                                  └───────────────────────────────┘
                                       ┌──────────────────────────┐
                                       │ Optimización + ROI medido│
                                       └──────────────────────────┘

CHECKPOINTS:
  ● Semana 2: Quick win R1 demostrado
  ● Semana 4: Review Mes 1 — rieles conectados
  ● Semana 8: Review Mes 2 — equipo operando con AI-OS
  ● Semana 12: Review Mes 3 — ROI medido vs. proyectado
```

### Benchmark Finkargo — Timeline

```
Finkargo ejecutó las 7 automatizaciones en 90 días:
  Mes 1: Reconciliación automática + transacciones aceleradas (Quick Wins)
  Mes 2: Compliance integrado + reportes en tiempo real
  Mes 3: Detección de fraude + onboarding automatizado + optimización

Resultado: De 0 procesos automatizados a 110+ en 90 días.
```

---

## 6. Comparativa con Benchmarks de Industria

> Los números del cliente contra la realidad del mercado. Contexto que convierte datos en urgencia.

### 6.1 Métricas Operativas

| Métrica | {{NOMBRE_EMPRESA}} | Promedio industria ({{INDUSTRIA}}) | Finkargo (post AI-OS) | Gap |
|---------|--------------------|------------------------------------|----------------------|-----|
| Tiempo por transacción core | {{TIEMPO_TRANSACCION}} | {{BENCHMARK_TIEMPO_INDUSTRIA}} | 3 min | {{GAP_TIEMPO}} |
| Tiempo de detección de errores | {{TIEMPO_DETECCION_ERRORES}} | {{BENCHMARK_DETECCION_INDUSTRIA}} | 3 min (automático) | {{GAP_DETECCION}} |
| Horas manuales/semana en datos | {{HORAS_MANUALES_SEMANA}} | {{BENCHMARK_HORAS_INDUSTRIA}} | < 2 hrs/semana | {{GAP_HORAS}} |
| Velocidad de acceso a datos clave | {{VELOCIDAD_ACCESO}} | {{BENCHMARK_ACCESO_INDUSTRIA}} | Real-time | {{GAP_ACCESO}} |
| Sistemas conectados vs. total | {{SISTEMAS_CONECTADOS}}/{{NUM_SISTEMAS}} | {{BENCHMARK_CONECTADOS_INDUSTRIA}} | 100% | {{GAP_SISTEMAS}} |
| Tiempo de cierre mensual | {{TIEMPO_CIERRE}} | {{BENCHMARK_CIERRE_INDUSTRIA}} | < 1 día | {{GAP_CIERRE}} |

### 6.2 Madurez AI

| Dimensión | {{NOMBRE_EMPRESA}} | Promedio industria | Finkargo | Líder de mercado |
|-----------|--------------------|--------------------|----------|-----------------|
| Flujo de datos (0-25) | {{SCORE_FLUJO}} | {{BENCH_FLUJO}} | 23 | 25 |
| Adopción real (0-25) | {{SCORE_ADOPCION}} | {{BENCH_ADOPCION}} | 22 | 24 |
| Visibilidad (0-25) | {{SCORE_VISIBILIDAD}} | {{BENCH_VISIBILIDAD}} | 24 | 25 |
| Capacidad del equipo (0-25) | {{SCORE_CAPACIDAD}} | {{BENCH_CAPACIDAD}} | 21 | 23 |
| **TOTAL (0-100)** | **{{ENERGY_SCORE}}** | **{{BENCH_TOTAL}}** | **90** | **97** |

### 6.3 Interpretación

{{INTERPRETACION_BENCHMARKS}}

*Ejemplo de referencia:*

> *"{{NOMBRE_EMPRESA}} opera {{GAP_PORCENTAJE}}% por debajo del promedio de industria en velocidad de acceso a datos. Esto significa que cada decisión operativa tarda {{GAP_TIEMPO_DECISION}} más que la competencia. En un mercado donde la velocidad define márgenes, este gap se traduce en ${{COSTO_GAP_ANUAL}} anuales en oportunidades perdidas."*

---

## 7. Recomendación AI-OS Build

> Esta sección es la propuesta. El Mapa de Energía fue el diagnóstico. Esto es el tratamiento.

### 7.1 Qué Construir

Basado en los {{NUM_FRICCIONES}} puntos de fricción identificados y el roadmap de {{NUM_AUTOMATIZACIONES}} automatizaciones prioritarias, recomendamos un **AI-OS Build de 90 días** con el siguiente alcance:

**Fase 1 — Rieles (Semanas 1-4)**
- {{RIEL_1}}
- {{RIEL_2}}
- {{RIEL_3}}
- Quick win demostrable: {{QUICK_WIN_DESCRIPCION}}

**Fase 2 — Flujo (Semanas 5-8)**
- {{FLUJO_1}}
- {{FLUJO_2}}
- {{FLUJO_3}}
- Equipo de {{NOMBRE_EMPRESA}} operando con AI-OS desde semana 6

**Fase 3 — Energía (Semanas 9-12)**
- {{ENERGIA_1}}
- {{ENERGIA_2}}
- ROI medido y documentado vs. proyecciones de este Mapa

### 7.2 Inversión

| Concepto | Detalle | Inversión |
|----------|---------|----------:|
| AI-OS Build (90 días) | {{NUM_KAI_PARTNERS}} AI Huevos embebidos, {{HORAS_ESTIMADAS}} horas totales | ${{INVERSION_BUILD}} |
| Incluye | Implementación + entrenamiento del equipo + documentación del AI-OS | — |
| No incluye | Licencias de software de terceros (si aplica) | ${{LICENCIAS_ESTIMADAS}} |
| **Total** | | **${{INVERSION_TOTAL}}** |

*Precio según alcance definido en este Mapa de Energía. Pricing LATAM: $5,000-$10,000 (Colombia, Bolivia) | $10,000-$15,000 (México).*

### 7.3 ROI Esperado

```
INVERSIÓN TOTAL:                 ${{INVERSION_TOTAL}}
AHORRO ANUAL (conservador):      ${{AHORRO_CONSERVADOR}}
AHORRO ANUAL (proyectado):       ${{AHORRO_TOTAL}}

ROI CONSERVADOR (Año 1):         {{ROI_CONSERVADOR}}x
ROI PROYECTADO (Año 1):          {{ROI_ANO_1}}x
BREAKEVEN:                       {{BREAKEVEN_MESES}} meses

BENCHMARK FINKARGO:
  Inversión: $35,000
  Ahorro ejecutado: $15,000,000
  ROI: 428x
  Breakeven: < 30 días
```

### 7.4 Equipo Requerido

**Por parte de KAI:**
- {{NUM_KAI_PARTNERS}} KAI Partner(s) embebido(s) — dedicación: {{HORAS_KAI_SEMANA}} hrs/semana
- Acceso a equipo técnico senior de KAI para arquitectura de rieles
- Check-ins mensuales con founders de KAI

**Por parte de {{NOMBRE_EMPRESA}}:**
- 1 sponsor ejecutivo ({{ROL_SPONSOR}}) — 2 hrs/semana para decisiones y desbloqueos
- {{NUM_CHAMPIONS}} champion(s) operativo(s) ({{ROLES_CHAMPIONS}}) — 4-6 hrs/semana para validación y adopción
- Acceso a sistemas: {{SISTEMAS_ACCESO_REQUERIDO}}

### 7.5 Qué Pasa Después del Build

Si el AI-OS Build demuestra ROI (como lo hizo en Finkargo), el paso natural es **Partner Continuo**:

- Expansión del AI-OS a {{DEPARTAMENTOS_EXPANSION}}
- Optimización continua basada en datos de uso real
- Nuevas automatizaciones conforme la operación evoluciona
- $10,000-$25,000/mes — KAI como extensión permanente del equipo

**Finkargo empezó con 1 proceso. Hoy tiene 110+. Tres años después, seguimos ahí.**

### 7.6 Próximos Pasos

| # | Acción | Responsable | Fecha límite |
|---|--------|-------------|-------------|
| 1 | Aprobación interna del AI-OS Build | {{NOMBRE_SPONSOR}} | {{FECHA_APROBACION}} |
| 2 | Firma de acuerdo y kick-off | AI Huevos + {{NOMBRE_EMPRESA}} | {{FECHA_KICKOFF}} |
| 3 | Accesos a sistemas entregados | {{NOMBRE_CHAMPION}} | {{FECHA_ACCESOS}} |
| 4 | Quick win R1 demostrado | KAI Partner asignado | Semana 2 del Build |

**Cada trimestre que pasa sin actuar cuesta ${{COSTO_TRIMESTRAL_INACCION}}.**

---

## 8. Apéndice

### A. Resumen de Entrevistas

| # | Persona | Cargo | Departamento | Fecha | Duración | Hallazgos Clave |
|---|---------|-------|-------------|-------|----------|----------------|
| 1 | {{ENTREVISTA_1_NOMBRE}} | {{ENTREVISTA_1_CARGO}} | {{ENTREVISTA_1_DEPTO}} | {{ENTREVISTA_1_FECHA}} | {{ENTREVISTA_1_DURACION}} | {{ENTREVISTA_1_HALLAZGOS}} |
| 2 | {{ENTREVISTA_2_NOMBRE}} | {{ENTREVISTA_2_CARGO}} | {{ENTREVISTA_2_DEPTO}} | {{ENTREVISTA_2_FECHA}} | {{ENTREVISTA_2_DURACION}} | {{ENTREVISTA_2_HALLAZGOS}} |
| 3 | {{ENTREVISTA_3_NOMBRE}} | {{ENTREVISTA_3_CARGO}} | {{ENTREVISTA_3_DEPTO}} | {{ENTREVISTA_3_FECHA}} | {{ENTREVISTA_3_DURACION}} | {{ENTREVISTA_3_HALLAZGOS}} |
| 4 | {{ENTREVISTA_4_NOMBRE}} | {{ENTREVISTA_4_CARGO}} | {{ENTREVISTA_4_DEPTO}} | {{ENTREVISTA_4_FECHA}} | {{ENTREVISTA_4_DURACION}} | {{ENTREVISTA_4_HALLAZGOS}} |
| 5 | {{ENTREVISTA_5_NOMBRE}} | {{ENTREVISTA_5_CARGO}} | {{ENTREVISTA_5_DEPTO}} | {{ENTREVISTA_5_FECHA}} | {{ENTREVISTA_5_DURACION}} | {{ENTREVISTA_5_HALLAZGOS}} |

*Agrega o elimina filas según el número de entrevistas realizadas durante el Sprint.*

### B. Log de Acceso a Sistemas

| # | Sistema | Tipo de acceso | Otorgado por | Fecha | Notas |
|---|---------|---------------|-------------|-------|-------|
| 1 | {{ACCESO_1_SISTEMA}} | {{ACCESO_1_TIPO}} | {{ACCESO_1_POR}} | {{ACCESO_1_FECHA}} | {{ACCESO_1_NOTAS}} |
| 2 | {{ACCESO_2_SISTEMA}} | {{ACCESO_2_TIPO}} | {{ACCESO_2_POR}} | {{ACCESO_2_FECHA}} | {{ACCESO_2_NOTAS}} |
| 3 | {{ACCESO_3_SISTEMA}} | {{ACCESO_3_TIPO}} | {{ACCESO_3_POR}} | {{ACCESO_3_FECHA}} | {{ACCESO_3_NOTAS}} |

*Tipos de acceso: Read-only, Read-write, Export, API, Observación (screen share).*

### C. Fuentes de Datos Utilizadas

| # | Fuente | Tipo | Período | Observaciones |
|---|--------|------|---------|---------------|
| 1 | {{FUENTE_1}} | {{FUENTE_1_TIPO}} | {{FUENTE_1_PERIODO}} | {{FUENTE_1_OBS}} |
| 2 | {{FUENTE_2}} | {{FUENTE_2_TIPO}} | {{FUENTE_2_PERIODO}} | {{FUENTE_2_OBS}} |
| 3 | {{FUENTE_3}} | {{FUENTE_3_TIPO}} | {{FUENTE_3_PERIODO}} | {{FUENTE_3_OBS}} |
| 4 | {{FUENTE_4}} | {{FUENTE_4_TIPO}} | {{FUENTE_4_PERIODO}} | {{FUENTE_4_OBS}} |

*Tipos: Reporte interno, Base de datos, Entrevista, Observación directa, Documento de proceso, Export de sistema.*

### D. Metodología de Cuantificación

Para cada punto de fricción, el ahorro se calcula con la siguiente fórmula:

```
AHORRO ANUAL = (Horas/semana × Costo/hora × 52 semanas)
             + (Errores/mes × Costo/error × 12 meses)
             + (Oportunidad perdida/trimestre × 4)

Donde:
  Costo/hora = Salario anual promedio de personas afectadas / 2,080 horas
  Costo/error = Costo promedio de corrección + costo de oportunidad
  Oportunidad perdida = Revenue no capturado por lentitud o falta de datos
```

*Los cálculos de este Mapa usan datos recopilados durante el Sprint. Las estimaciones de confianza "Alta" están basadas en datos medidos directamente. Las de confianza "Media" y "Baja" usan benchmarks de industria y proyecciones conservadoras.*

---

## Nota de Cierre

La energía ya está en {{NOMBRE_EMPRESA}}. En sus datos, en sus procesos, en su equipo. Este Mapa muestra exactamente dónde se esconde y cuánto cuesta cada día que no fluye.

Finkargo empezó exactamente donde {{NOMBRE_EMPRESA}} está hoy. Procesaba $650M con Excel y WhatsApp. Hoy tiene un AI-OS que su equipo no quiere soltar. La diferencia no fue tecnología nueva — fue construir los rieles correctos sobre lo que ya tenían.

**Construido contigo. Probado con tus datos.**

---

*AI Huevos — Nos quedamos.*
