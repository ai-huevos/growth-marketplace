# 18. Plugin: dotcom-secrets — Referencia Completa

## Identidad

- **Nombre**: dotcom-secrets
- **Version**: 1.0.0
- **Proposito**: Funnels de conversion B2B basados en DotCom Secrets de Russell Brunson, adaptados a LATAM
- **Autor**: AI Huevos
- **Metodologia base**: DotCom Secrets (Russell Brunson) + PULSO + frameworks branded propios

## Componentes

- 4 Skills: escala, flujo, alma, funnel-optimization
- 2 Commands: /escala, /funnel-diagnosis
- 1 Agent: funnel-architect
- 29 archivos totales

---

## Stack de Frameworks Branded

El plugin introduce tres frameworks branded que encapsulan los conceptos de DotCom Secrets en un lenguaje propio, adaptado a B2B LATAM:

### ESCALA (Estrategia de Conversion Ascendente con Leverage Automatico)

Value ladder de 4 niveles que define la arquitectura de ofertas de un negocio. Cada nivel incrementa el valor entregado y el precio cobrado.

| Nivel | Nombre | Funcion | Rango de precio tipico |
|-------|--------|---------|------------------------|
| 1 | FREE | Atraccion y captura de leads | $0 |
| 2 | FRONTEND | Primera transaccion, generar confianza | Bajo |
| 3 | MIDDLE | Solucion core, mayor profundidad | Medio |
| 4 | BACKEND | Transformacion completa, high-ticket | Alto |

Incluye **RADAR** como framework de discovery dentro de ESCALA para diagnosticar en que nivel se encuentra el prospect y que oferta presentarle.

### FLUJO (Funnel de Lanzamiento Optimizado)

Metodologia unificada de funnels que consolida las Seven Phases de Brunson en un sistema operativo de 7 fases. Incluye:

- **7 fases operativas** del funnel (desde trafico hasta optimizacion)
- **Tipos de trafico**: frio, tibio, caliente — con estrategias diferenciadas por tipo
- **Selector de tipo de funnel**: segun objetivo, audiencia, y tier ESCALA
- **Benchmarks de conversion**: metricas de referencia por tipo de funnel y fase

### Alma

El alma de la marca. No es acronimo forzado — es literalmente el "alma" (soul) del negocio. Cubre dos sistemas:

1. **Attractive Character Framework (ACF)**: Desarrollo en 10 pasos del personaje que representa la marca. Define backstory, identidad, arquetipos, y voz.
2. **IMAN (Infraestructura de Mensajes Automaticos)**: Sistema de email automatizado con dos tipos de secuencias:
   - **Soap Opera Sequence**: Serie narrativa de 5 emails que cuentan una historia con arco dramatico
   - **Seinfeld Sequence**: Emails recurrentes de entretenimiento + valor que mantienen engagement post-nurture

---

## Skill 1: escala

**Triggers**: "value ladder", "escala", "ESCALA", "oferta", "pricing tiers", "RADAR", "LTV:CAC", "product ladder"

### Que hace
Disenya la arquitectura de ofertas de un negocio usando el value ladder de 4 niveles. Incluye RADAR discovery para diagnosticar el estado actual del prospect y modelado LTV:CAC para validar la economia del funnel.

### Proceso
1. **RADAR Discovery**: Diagnosticar el estado actual de las ofertas del negocio
2. **Mapeo de ofertas existentes**: Clasificar productos/servicios actuales en los 4 niveles
3. **Identificacion de gaps**: Detectar niveles vacios o debiles en la escalera
4. **Diseno de ofertas**: Crear o ajustar ofertas para cada nivel
5. **Modelado LTV:CAC**: Calcular y optimizar la relacion entre valor de vida del cliente y costo de adquisicion
6. **Plan de implementacion**: Secuencia para lanzar las ofertas por nivel

### RADAR Discovery

Framework de discovery integrado en ESCALA que permite diagnosticar:
- **R**ealidad actual de las ofertas
- **A**udiencia y sus necesidades por nivel
- **D**iferenciacion frente a competidores
- **A**lineacion entre oferta y capacidad de entrega
- **R**entabilidad por nivel

### Modelado LTV:CAC

| Metrica | Formula | Benchmark B2B |
|---------|---------|---------------|
| LTV | Revenue promedio x Frecuencia x Vida util | Varia por industria |
| CAC | Gasto total de adquisicion / Clientes nuevos | Varia por canal |
| LTV:CAC | LTV / CAC | >= 3:1 saludable |

---

## Skill 2: flujo

**Triggers**: "funnel", "FLUJO", "embudo", "seven phases", "conversion funnel", "traffic types", "funnel selector"

### Que hace
Metodologia unificada para disenar, construir y operar funnels de conversion. Consolida las 7 fases del funnel con tipos de trafico, selector de tipo de funnel, y benchmarks de conversion.

### Las 7 Fases Operativas

| Fase | Nombre | Funcion |
|------|--------|---------|
| 1 | Trafico | Atraer visitantes (frio, tibio, caliente) |
| 2 | Captura | Convertir visitantes en leads (lead magnets, opt-in) |
| 3 | Calificacion | Segmentar y cualificar leads (quiz, scoring) |
| 4 | Nurture | Educar y generar confianza (email sequences, contenido) |
| 5 | Conversion | Presentar oferta y cerrar venta (sales pages, calls) |
| 6 | Entrega | Cumplir la promesa (onboarding, fulfillment) |
| 7 | Cambiar ambiente | Ascender al siguiente nivel de ESCALA o iniciar discovery call |

### Tipos de Trafico

| Tipo | Definicion | Estrategia |
|------|-----------|------------|
| Frio | No te conoce | Educacion, contenido de valor, awareness |
| Tibio | Te conoce pero no ha comprado | Nurture, social proof, ofertas frontend |
| Caliente | Ya compro o esta listo | Upsell, cross-sell, ofertas backend |

### Selector de Tipo de Funnel

Segun el objetivo y el tier ESCALA, FLUJO recomienda el tipo de funnel apropiado:
- **Lead Magnet Funnel**: Para tier FREE, generar lista
- **Tripwire Funnel**: Para tier FRONTEND, primera transaccion
- **Webinar Funnel**: Para tier MIDDLE, educacion + venta
- **Application Funnel**: Para tier BACKEND, calificar antes de vender
- **Launch Funnel**: Para lanzamientos puntuales en cualquier tier

### Benchmarks de Conversion

| Fase | Metrica | Benchmark |
|------|---------|-----------|
| Trafico → Captura | Opt-in rate | 20-40% (landing page) |
| Captura → Calificacion | Quiz completion | 60-80% |
| Calificacion → Nurture | Email open rate | 25-40% |
| Nurture → Conversion | Sales conversion | 1-5% (frio), 10-20% (caliente) |
| Conversion → Entrega | Fulfillment rate | >95% |

---

## Skill 3: alma

**Triggers**: "attractive character", "ACF", "alma", "brand voice", "IMAN", "soap opera", "seinfeld", "email strategy", "personaje de marca"

### Que hace
Desarrollo del Attractive Character (el personaje que representa la marca) en 10 pasos, mas el sistema de email IMAN que automatiza la comunicacion continua con la audiencia.

### ACF: Desarrollo en 10 Pasos

1. **Backstory**: La historia de origen que conecta con la audiencia
2. **Parables**: Historias que comunican valores y lecciones
3. **Character Flaws**: Vulnerabilidades que humanizan al personaje
4. **Polarity**: Posiciones fuertes que generan tribu (y anti-tribu)
5. **Identity**: Arquetipo principal (Leader, Adventurer, Reporter, Reluctant Hero)
6. **Storylines**: Arcos narrativos recurrentes
7. **Voice & Tone**: Lenguaje, nivel de formalidad, estilo
8. **Values**: Principios no negociables de la marca
9. **Enemy**: El villano comun contra el que lucha la marca junto a su audiencia
10. **Mission**: La mision mas grande que trasciende el producto

### IMAN: Infraestructura de Mensajes Automaticos

| Secuencia | Proposito | Estructura | Duracion |
|-----------|-----------|------------|----------|
| Soap Opera | Construir relacion inicial | 5 emails con arco narrativo (conflicto → revelacion → solucion → beneficio → urgencia) | 5-7 dias post opt-in |
| Seinfeld | Mantener engagement continuo | Emails recurrentes de valor + entretenimiento sin estructura rigida | Indefinida, 2-3x/semana |

### Soap Opera Sequence (5 emails)

| Email | Elemento narrativo | Funcion |
|-------|-------------------|---------|
| 1 | Escenario + conflicto | Enganchar con la historia, crear tension |
| 2 | Backstory + drama | Profundizar la conexion emocional |
| 3 | Revelacion + epifania | Momento de cambio, transicion a solucion |
| 4 | Beneficios ocultos | Mostrar resultados y transformacion |
| 5 | Urgencia + CTA | Cerrar la narrativa con llamada a accion |

### Seinfeld Sequence

Emails sobre "nada" (y sobre todo). Mezclan:
- Historias personales con lecciones de negocio
- Observaciones del dia a dia aplicadas a B2B
- Contenido util envuelto en entretenimiento
- CTAs suaves integrados en la narrativa

---

## Skill 4: funnel-optimization

**Triggers**: "funnel optimization", "funnel health", "A/B testing", "conversion optimization", "funnel diagnosis", "scaling", "optimizacion de funnel"

### Que hace
Diagnostica la salud de un funnel existente, identifica cuellos de botella, ejecuta ciclos de A/B testing, y define estrategia de scaling.

### Proceso

1. **Diagnostico de salud**: Evaluar cada fase del funnel contra benchmarks
2. **Identificacion de cuellos de botella**: Encontrar la fase con mayor caida de conversion
3. **Hipotesis de mejora**: Generar hipotesis de por que se pierde conversion
4. **A/B Testing**: Disenar tests para validar hipotesis (una variable a la vez)
5. **Ciclo semanal de optimizacion**: Revisar metricas, implementar cambios, medir impacto
6. **Estrategia de scaling**: Una vez que el funnel convierte, escalar trafico

### Ciclo Semanal de Optimizacion

| Dia | Actividad |
|-----|-----------|
| Lunes | Revisar metricas de la semana anterior |
| Martes | Identificar cuello de botella principal |
| Miercoles | Disenar e implementar test A/B |
| Jueves-Viernes | Ejecutar test con trafico |
| Sabado-Domingo | Acumular datos |
| Lunes siguiente | Analizar resultados, decidir ganador, iterar |

### Estrategia de Scaling

Criterios para escalar:
- Funnel con al menos 2 semanas de datos estables
- LTV:CAC >= 3:1
- Conversion rates dentro de benchmarks o mejores
- Fulfillment rate >95%

Metodos de scaling:
- **Horizontal**: Mas fuentes de trafico
- **Vertical**: Mas presupuesto en fuentes existentes que funcionan
- **Oferta**: Agregar niveles a ESCALA para incrementar LTV

---

## Command: /escala

**Uso**: `/escala <negocio, producto, o contexto>`

### Que hace
Workshop interactivo de 7 fases para disenar una ESCALA completa con modelado LTV:CAC.

### Fases del Workshop (7)

1. **Contexto**: Que vendes, a quien, revenue actual, ofertas existentes
2. **RADAR Discovery**: Diagnosticar estado actual de ofertas y audiencia
3. **Mapeo actual**: Clasificar ofertas existentes en los 4 niveles
4. **Gap analysis**: Identificar niveles sin oferta o con oferta debil
5. **Diseno de ofertas**: Crear ofertas para cada nivel con pricing, entregables, y promesa
6. **Modelado LTV:CAC**: Calcular metricas y validar economia del funnel
7. **Output final**: ESCALA blueprint completa con plan de implementacion

### Output
- Diagrama de ESCALA de 4 niveles con ofertas detalladas
- Modelo LTV:CAC con proyecciones
- Plan de implementacion secuencial
- Recomendaciones de funnel por nivel (conecta con FLUJO)

---

## Command: /funnel-diagnosis

**Uso**: `/funnel-diagnosis <URL del funnel, descripcion, o metricas>`

### Que hace
Assessment diagnostico de 6 fases para evaluar la salud de un funnel existente.

### Fases del Assessment (6)

1. **Intake**: Tipo de funnel, metricas actuales, objetivo, tiempo operando
2. **Mapeo de fases**: Identificar cada fase del funnel y su metrica clave
3. **Benchmark comparison**: Comparar cada metrica contra benchmarks de referencia
4. **Cuello de botella**: Identificar la fase con mayor caida vs benchmark
5. **Diagnostico**: Hipotesis de por que falla esa fase (copy, oferta, trafico, tecnico)
6. **Receta de optimizacion**: Plan de accion priorizado con tests A/B sugeridos

### Output
- Heatmap de salud del funnel (rojo/amarillo/verde por fase)
- Cuello de botella principal identificado
- 3 hipotesis de mejora priorizadas
- Plan de testing semanal
- Proyeccion de impacto si se corrige el cuello de botella

---

## Agent: funnel-architect

### Rol
Arquitecto de funnels senior que disena blueprints completos integrando ESCALA (arquitectura de ofertas), FLUJO (fases operativas del funnel), y Alma (voz y estrategia de comunicacion).

### Workflow (5 fases)

1. **Discovery**: Entender el negocio, audiencia, ofertas actuales, y objetivos usando RADAR
2. **Arquitectura ESCALA**: Disenar o validar el value ladder de 4 niveles
3. **Diseno FLUJO**: Seleccionar tipo de funnel por nivel ESCALA, mapear las 7 fases, definir metricas por fase
4. **Estrategia Alma**: Definir el Attractive Character, planificar Soap Opera + Seinfeld sequences
5. **Blueprint integrado**: Consolidar todo en un documento ejecutable con timeline de implementacion

### Output
- ESCALA diagram con 4 niveles de ofertas
- FLUJO blueprint por nivel con fases, metricas, y benchmarks
- Alma profile con ACF de 10 puntos + plan IMAN
- Timeline de implementacion por prioridad
- Dependencias cross-plugin identificadas

---

## Conexiones Cross-Plugin

### escala ↔ growth-foundations/icp-analysis
El ICP informa el WHO de RADAR. Sin saber quien es el cliente ideal, no se puede disenar una escalera de valor efectiva. El ICP scoring determina para quien se disena cada nivel de ESCALA.

### flujo Fase 3 ↔ growth-foundations/quiz-funnel
La Fase 3 de FLUJO (Calificacion) puede implementarse como un quiz funnel del ASK Method. El quiz segmenta leads en buckets que mapean a diferentes niveles de ESCALA.

### flujo Fase 7 ↔ sales-blueprint/discovery-mastery
La Fase 7 de FLUJO (Cambiar ambiente) es el punto donde el lead marketing se convierte en oportunidad de ventas. "Cambiar ambiente" significa pasar de la interaccion digital a una discovery call con PULSO.

### alma → copywriting-engine/email-sequences
Alma define la estrategia de comunicacion (ACF + IMAN), mientras que copywriting-engine ejecuta el copy de cada email. Alma dice QUE comunicar y CON QUE VOZ; copywriting-engine produce el copy final optimizado.

### funnel-optimization → sales-blueprint/pipeline-management
El handoff de marketing funnel a sales pipeline. Cuando funnel-optimization detecta que la conversion esta optimizada, los leads calificados fluyen a pipeline-management donde se gestionan con PULSO scoring.

```
growth-foundations/icp-analysis ──(WHO)──► escala (RADAR)
                                              │
growth-foundations/quiz-funnel ◄──(Fase 3)── flujo
                                              │
sales-blueprint/discovery-mastery ◄──(Fase 7)── flujo (cambiar ambiente)
                                              │
copywriting-engine/email-sequences ◄──(voz + estrategia)── alma (IMAN)
                                              │
sales-blueprint/pipeline-management ◄──(leads calificados)── funnel-optimization
```

---

## Integracion con PULSO

PULSO es el lenguaje comun que conecta marketing funnels con ventas. dotcom-secrets se integra en cada dimension:

| Dimension PULSO | Conexion con dotcom-secrets |
|------------------|----------------------------|
| **Situation** | El tier ESCALA del prospect define su situacion. Un lead que entro por FREE esta en una situacion diferente a uno que ya compro FRONTEND. |
| **Pain** | Las preguntas RADAR descubren el dolor. Mapean directamente a PULSO Situation + Pain. |
| **Impact** | El value ladder ESCALA comunica el impacto de cada nivel de solucion. Mayor tier = mayor impacto transformacional. |
| **Critical Event** | La Fase 7 de FLUJO (cambiar ambiente) es el bridge a PULSO Discovery. Es el momento critico donde el lead esta listo para una conversacion. |
| **Decision** | Funnel health metrics de funnel-optimization alimentan los PULSO scores en pipeline-management para tomar decisiones informadas. |

### Flujo completo ESCALA → PULSO

```
Lead entra por ESCALA FREE
  → FLUJO lo cualifica (Fases 1-3)
    → Alma lo nurturea (Fases 4-5, IMAN emails)
      → FLUJO Fase 7: cambiar ambiente
        → PULSO Discovery (sales-blueprint)
          → Pipeline Management (PULSO scoring)
```

---

## Decisiones de Diseno

### 1. RADAR como sub-framework de ESCALA (no standalone)

**Decision**: RADAR vive dentro del skill escala, no como skill independiente.
**Razon**: RADAR tiene overlap significativo con icp-analysis de growth-foundations. Como sub-framework de ESCALA, cumple su funcion especifica (diagnosticar para disenar la escalera de valor) sin duplicar el analisis de ICP.

### 2. FLUJO absorbe Seven Phases — un skill unificado

**Decision**: Las Seven Phases de Brunson se consolidan en un solo skill (flujo) en lugar de skills separados por fase.
**Razon**: Las fases son interdependientes. Separar en skills individuales fragmentaria el flujo de trabajo y forzaria al usuario a navegar multiples skills para un proceso que es inherentemente secuencial.

### 3. Alma = "alma" (soul), no acronimo forzado

**Decision**: Alma no es un acronimo. Es el "alma" de la marca.
**Razon**: A diferencia de ESCALA, FLUJO, RADAR e IMAN, Alma funciona mejor como concepto: el alma del negocio es su personaje, su voz, su identidad. Forzar un acronimo diluiria el concepto. Cubre ACF (framework estructurado) + IMAN (sistema de emails).

### 4. Lead magnets y landing pages referenciados pero delegados

**Decision**: FLUJO referencia lead magnets (Fase 2) y landing pages (Fase 5), pero delega la ejecucion del copy a copywriting-engine.
**Razon**: Evita duplicacion. FLUJO define la estrategia (que tipo de lead magnet, donde va el landing page en el funnel), y copywriting-engine ejecuta el copy (/headline, /copy, /email-sequence). Cada plugin hace lo que mejor sabe hacer.

### 5. Traffic Secrets y Expert Secrets como plugins separados futuros

**Decision**: Solo DotCom Secrets se implementa como plugin. Traffic Secrets y Expert Secrets quedan en roadmap.
**Razon**: DotCom Secrets es el fundamento (funnels + value ladder). Traffic Secrets (trafico + Dream 100) y Expert Secrets (movimientos masivos + storytelling + webinars) son extensiones que requieren su propia profundidad. Implementarlos como plugins separados permite:
- Desarrollo iterativo sin sobrecargar un solo plugin
- Cada plugin tiene su propia coherencia tematica
- Los usuarios pueden instalar solo lo que necesitan

---

## Inventario de Archivos (29)

```
plugins/dotcom-secrets/
  .claude-plugin/
    plugin.json                              ← Manifiesto del plugin
  README.md                                  ← Documentacion con skills, commands, triggers
  skills/
    escala/
      SKILL.md                               ← Value ladder + RADAR + LTV:CAC
      frameworks/
        value-ladder.md                      ← Framework ESCALA de 4 niveles
        radar-discovery.md                   ← Sub-framework de discovery
        ltv-cac-model.md                     ← Modelado economico del funnel
      templates/
        escala-workshop.md                   ← Worksheet del workshop /escala
      examples/
        b2b-saas-escala-example.md           ← Ejemplo real de value ladder B2B
    flujo/
      SKILL.md                               ← 7 fases + trafico + selector + benchmarks
      frameworks/
        seven-phases.md                      ← Las 7 fases operativas detalladas
        traffic-types.md                     ← Frio, tibio, caliente
        funnel-selector.md                   ← Selector por objetivo y tier
        conversion-benchmarks.md             ← Benchmarks por tipo y fase
      templates/
        funnel-blueprint.md                  ← Template de blueprint de funnel
    alma/
      SKILL.md                               ← ACF + IMAN
      frameworks/
        attractive-character.md              ← ACF en 10 pasos
        iman-email-system.md                 ← Soap Opera + Seinfeld
      templates/
        acf-worksheet.md                     ← Worksheet del Attractive Character
        soap-opera-template.md               ← Template de 5 emails Soap Opera
    funnel-optimization/
      SKILL.md                               ← Diagnostico + A/B + scaling
      frameworks/
        health-diagnosis.md                  ← Framework de diagnostico de salud
        ab-testing-guide.md                  ← Guia de A/B testing para funnels
        scaling-strategy.md                  ← Estrategia de scaling
      templates/
        weekly-optimization-cycle.md         ← Template del ciclo semanal
  commands/
    escala.md                                ← /escala command
    funnel-diagnosis.md                      ← /funnel-diagnosis command
  agents/
    funnel-architect.md                      ← Agente arquitecto de funnels
```

---

## Roadmap de la Trilogia Brunson

| Fase | Plugin | Foco | Estado |
|------|--------|------|--------|
| 1 | dotcom-secrets | Funnels de conversion, value ladders, attractive character, email systems | Actual (v1.0.0) |
| 2 | traffic-secrets (futuro) | Dream 100, content strategy, paid traffic, fill your funnel | Planificado |
| 3 | expert-secrets (futuro) | Mass movements, storytelling frameworks, webinar funnels, offer creation | Planificado |

### Dependencias entre plugins de la trilogia

```
dotcom-secrets (funnels + ofertas)
  ↑
traffic-secrets (trafico para llenar los funnels)
  ↑
expert-secrets (autoridad + storytelling para convertir dentro de los funnels)
```

DotCom Secrets se implementa primero porque es el fundamento: sin funnel no hay donde enviar trafico, y sin oferta estructurada el storytelling no convierte.

---

## Fuentes

Basado en el analisis y adaptacion de los siguientes archivos del DotComSecrets-Playbook:

| Archivo fuente | Contenido | Uso en el plugin |
|----------------|-----------|------------------|
| `01-executive-summary.md` | Vision general del playbook | Estructura del plugin, decision de alcance |
| `02-visual-frameworks.md` | Diagramas de frameworks | ESCALA, FLUJO, IMAN visualizaciones |
| `03-marketing-sales-guide.md` | Guia de marketing y ventas | Skills escala y flujo, integracion PULSO |
| `04-product-development-guide.md` | Guia de desarrollo de producto | Value ladder design, pricing tiers |
| `05-clevel-strategic-overview.md` | Vision estrategica C-level | Conexiones cross-plugin, roadmap |
| `06-90day-implementation-timeline.md` | Timeline de implementacion | Ciclo semanal, scaling strategy |
| `ACF_template.md` | Template del Attractive Character | Skill alma, ACF de 10 pasos |
| `attractive-character.md` | Guia completa de ACF | Backstory, arquetipos, voz |
| `Seven phases of a funnel.md` | Las 7 fases del funnel | Skill flujo, 7 fases operativas |
| `ESCALA Implementation.md` | Implementacion de ESCALA | Skill escala, RADAR, LTV:CAC |
