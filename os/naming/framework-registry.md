# Framework Registry — GrowthOS

> Tabla autoritativa de nombres originales. Todo framework en el marketplace DEBE usar los nombres de esta tabla.
> Si un término de tercero aparece en el codebase y no está mapeado aquí, es un bug.

---

## Frameworks Propios (Ya Existentes)

| Nombre | Tipo | Descripción | Plugin |
|--------|------|-------------|--------|
| **ClarQ** | Diagnóstico | Evaluación de madurez operativa (GTM, Revenue, Q2C, Capabilities) 0-40 puntos | growth-foundations |
| **ESCALA** | Escalera de valor | Arquitectura de oferta en 4 niveles (Bait → Frontend → Middle → Backend) | motor-de-ofertas |
| **FLUJO** | Arquitectura de funnels | Sistema de 7 fases de conversión | motor-de-ofertas |
| **ALMA** | Personaje de marca | Sistema de identidad narrativa y voz de marca | motor-de-ofertas |
| **IMAN** | Infraestructura de email | Infraestructura de Mensajes Automáticos (secuencias + nurturing) | motor-de-ofertas |
| **RADAR** | Descubrimiento de cliente ideal | Identificación del cliente soñado dentro de ESCALA | motor-de-ofertas |
| **GrowthOS** | Sistema operativo | Capa de orquestación need-driven sobre los plugins | os/ |

---

## P0 — Renames Críticos (Sistema Completo)

| Término Tercero | Propietario | Nombre Original GrowthOS | Acrónimo | Mapeo de Dimensiones |
|----------------|-------------|--------------------------|----------|---------------------|
| **SPICED** | Winning by Design | **PULSO** | **P**anorama, **U**rgencia, **L**ogro, **S**ituación crítica, **O**rganización | Situation→Panorama, Pain→Urgencia, Impact→Logro, Critical Event→Situación Crítica, Decision→Organización |
| **dotcom-secrets** (plugin) | Russell Brunson | **motor-de-ofertas** | — | Plugin completo renombrado |
| **ASK Method** | Ryan Levesque (™) | **SONDA** | **S**egmentación por **O**bservación **N**atural con **D**atos **A**ctivos | Metodología completa de quiz/survey funnels |
| **Winning by Design** (marca) | WbD | **Metodología GrowthOS** | — | Reemplazar atribución de marca, no concepto |

---

## P1 — Renames por Skill

| Término Tercero | Propietario | Nombre Original GrowthOS | Significado | Skills Afectados |
|----------------|-------------|--------------------------|-------------|-----------------|
| **REKS** (Results, Effort, Knowledge, Skills) | Winning by Design | **ROCA** | **R**esultados, **O**peración, **C**onocimiento, **A**ptitud — "Roca" = base sólida de coaching | coaching-cadence, sales-transformation |
| **Bowtie Model** | Winning by Design | **CICLO** | **C**aptación, **I**ngreso, **C**onsolidación, **L**ealtad, **O**portunidad — ciclo completo de revenue | pipeline-management, customer-success-ops |
| **ACE Opening** (Appreciate, Check, End Goal) | Winning by Design | **AVE** | **A**gradecimiento, **V**erificación de tiempo, **E**xpectativas — "Ave" = apertura que vuela | discovery-mastery, discovery-demo |
| **SMIQ** (Single Most Important Question) | Ryan Levesque | **PREGUNTA RAÍZ** | La pregunta fundamental de segmentación | quiz-funnel |
| **Soap Opera Sequence** | Russell Brunson | **Secuencia ORIGEN** | Secuencia narrativa de historia de origen | alma, flujo |
| **Seinfeld Sequence** | Russell Brunson / NBC | **Secuencia PULSAR** | **P**ublicación **U**til y **L**igera con **S**torytelling, **A**cción, y **R**elevancia — ritmo de engagement diario | alma |
| **ACF** (Attractive Character Framework) | Russell Brunson | **ALMA** (ya existe) | Solo eliminar referencias a ACF, ALMA ya es el nombre propio | alma |
| **ISL** (Invisible Sales Letter) | Content Mavericks | **VELO** | **V**enta **E**stratégica con **L**ectura **O**rgánica — venta invisible a través de contenido | flujo, landing-pages |
| **Ski Slope Strategy** | Content Mavericks | **PENDIENTE** | Progresión de contenido por dificultad (verde → negro). "Pendiente" = slope en español | content-strategy |
| **Topic Triangle** | Content Mavericks | **TRIÁNGULO DE INGRESOS** | Priorización de temas por potencial de revenue | content-strategy |
| **Recurring Impact** | Winning by Design | **IMPACTO COMPUESTO** | El impacto recurrente como base de revenue recurrente | customer-success-ops |
| **Three Jabs** | Content Mavericks | **TRIPLE VALOR** | 3 piezas de valor antes de pedir algo | flujo, content-strategy |

---

## P2 — Renames Secundarios

| Término Tercero | Propietario | Nombre Original GrowthOS | Skills Afectados |
|----------------|-------------|--------------------------|-----------------|
| **$5 Hit Records** | Content Mavericks | **MICRO-PRESUPUESTO** | flujo |
| **Operation Nowhere To Hide** | Content Mavericks | **OPERACIÓN OMNIPRESENCIA** | funnel-optimization |
| **Three Brains Model** (CM version) | Content Mavericks | **MODELO TRICORTICAL** | psychological-triggers |
| **Greatest Hits Survey** | Content Mavericks | **ENCUESTA DE RESONANCIA** | icp-analysis |
| **Present Pain Framework** | Content Mavericks | **DOLOR PRESENTE** | psychological-triggers |
| **Hero's Journey** (WbD adaptation) | WbD / Joseph Campbell (PD) | **ARCO DE TRANSFORMACIÓN** | product-marketing |
| **Value Proposition Canvas** | Strategyzer | **CANVAS DE PROPUESTA** | positioning |
| **SaaS Sales Method** | Winning by Design | **MÉTODO DE 7 MOMENTOS** | customer-journey |
| **Joint Impact Plan** | Winning by Design | **PLAN DE IMPACTO CONJUNTO** | customer-success-ops |
| **Wagons technique** | Winning by Design | **TÉCNICA DE VAGONES** | discovery-demo |
| **AIDA Article Template** | Content Mavericks (AIDA = PD) | Mantener AIDA (dominio público), eliminar atribución CM | content-strategy |
| **Content Mavericks** (marca) | Content Mavericks | Eliminar toda mención de marca | múltiples |

---

## Términos de Dominio Público (Sin Cambio)

| Término | Origen | Razón para mantener |
|---------|--------|---------------------|
| AIDA | Elias St. Elmo Lewis, ~1898 | Dominio público, +125 años |
| PAS | Dan Kennedy / genérico | Completamente genericizado |
| BANT | IBM / genérico | Industria estándar |
| Five Forces | Michael Porter, 1979 | Conocimiento académico público |
| JTBD | Clayton Christensen | Concepto académico ampliamente publicado |
| MEDDIC | PTC, 1990s | Solo usado como referencia comparativa |

---

## Reglas de Migración

1. **Archivos de framework** (`frameworks/*.md`): Renombrar archivo + contenido completo
2. **SKILL.md**: Cambiar nombre del framework, mantener la lógica intacta
3. **Templates**: Solo cambiar nombres de frameworks referenciados. **La estructura del output NO cambia** (templates son sagrados)
4. **Patterns/Examples**: Actualizar terminología, mantener el ejemplo/patrón intacto
5. **README.md**: Actualizar tablas y descripciones
6. **Commands**: Actualizar referencias a frameworks
7. **Agents**: Actualizar vocabulario del agente
8. **Atribuciones**: Reemplazar "Basado en [Marca]" con "Metodología GrowthOS" o descripción original del concepto
