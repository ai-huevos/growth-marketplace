---
name: content-strategy
description: Use when planning content marketing strategy, prioritizing topics, mapping content to funnel stages, creating content calendars, or designing distribution partnerships. Activates for "content strategy", "estrategia de contenido", "ski slope", "topic triangle", "que contenido crear", "blog strategy", "content plan", "plan de contenido", "SEO content", "contenido SEO", "calendario de contenido", "content calendar", "content distribution", "distribución de contenido".
version: 1.0.0
---

# Content Strategy — Sistema de 2 Frameworks para Contenido B2B

Framework para planificar, priorizar y distribuir contenido de marketing B2B que genera leads cualificados y revenue predecible. Combina dos metodologías complementarias: **Ski Slope Strategy** (progresión de dificultad) y **Topic Triangle** (priorización por potencial de ingresos).

## Filosofía: Contenido como Sistema de Revenue

> "El problema nunca es la cantidad de contenido. El problema es crear el contenido correcto, en el orden correcto, para la audiencia correcta."

El contenido B2B efectivo no se trata de publicar más — se trata de publicar estratégicamente. Cada pieza de contenido tiene un rol específico en el journey del comprador, y cada tema se selecciona porque tiene potencial demostrado de generar ingresos.

Este skill conecta la investigación de ICP con la ejecución de contenido, creando un puente entre "sabemos quién es nuestro cliente" y "tenemos un sistema predecible de generación de leads".

## Cuándo usar este skill

- El usuario quiere definir qué contenido crear y en qué orden
- Necesita priorizar temas por potencial de revenue (no solo tráfico)
- Quiere mapear contenido a las etapas del funnel (TOFU/MOFU/BOFU)
- Necesita un calendario de contenido ejecutable con KPIs
- Quiere diseñar una estrategia de distribución basada en partnerships
- Busca un sistema de contenido que genere leads consistentes

## Los 2 Frameworks

### Framework 1: Ski Slope Strategy

Modelo de progresión de dificultad de contenido que refleja los niveles de una pista de esquí:

| Nivel | Símbolo | Etapa Funnel | Intención | Tipo de Contenido |
|-------|---------|-------------|-----------|-------------------|
| **Green Circle** | 🟢 | TOFU | Informacional | Blog posts SEO long-tail, guías introductorias |
| **Blue Square** | 🔷 | MOFU | Consideración | Lead magnets, herramientas, webinars, plantillas |
| **Black Diamond** | ◆ | BOFU | Decisión | Case studies, comparativas, calculadoras ROI |

**Ratio recomendado**: 60% Green / 30% Blue / 10% Black Diamond

Para el modelo completo con reglas de progresión, leer `frameworks/ski-slope-model.md`.

### Framework 2: Topic Triangle

Sistema de priorización de temas basado en señales de intención comercial:

1. **Filtro**: CPC > $10 (señal de intención comercial alta)
2. **Score**: Potencial de Revenue (1-10) × Potencial de Tráfico (1-10)
3. **Prioridad**: Score más alto = crear primero

Para la metodología completa de scoring, leer `frameworks/topic-triangle.md`.

## Proceso de Content Strategy

### Paso 1: Definir necesidades de contenido del ICP

Antes de seleccionar temas, diagnosticar qué necesita consumir tu cliente ideal en cada etapa de su journey.

| Etapa del Journey | Pregunta Clave | Tipo de Contenido |
|-------------------|----------------|-------------------|
| Reconocimiento | "¿Tengo este problema?" | Green Circle — contenido educativo |
| Investigación | "¿Cómo se resuelve?" | Green Circle → Blue Square |
| Consideración | "¿Quién puede resolverlo?" | Blue Square — lead magnets, tools |
| Evaluación | "¿Por qué elegir a X?" | Black Diamond — comparativas, cases |
| Decisión | "¿Cuánto vale resolverlo?" | Black Diamond — calculadoras ROI |

**Conexión**: Esta fase se integra directamente con **icp-analysis** — el ICP define los dolores y el contexto que informan la selección de temas.

### Paso 2: Construir Topic Triangle

Generar y priorizar lista de temas ejecutando el Topic Triangle:

1. Extraer keywords de competidores usando herramientas SEO (Ahrefs, SEMrush)
2. Filtrar por CPC > $10 (umbral de intención comercial)
3. Calcular score: Revenue Potential (1-10) × Traffic Potential (1-10)
4. Clasificar los top 10-20 temas por score
5. Validar intención de búsqueda analizando SERPs de Google

Para la worksheet ejecutable de priorización, leer `templates/topic-priority-worksheet.md`.

### Paso 3: Mapear contenido al Ski Slope

Asignar cada tema priorizado a un nivel del Ski Slope:

**Green Circle (TOFU)** — Crear primero:
- Posts de blog optimizados para SEO long-tail
- Guías introductorias ("Qué es X", "Cómo funciona Y")
- Listas y comparativas informacionales
- Objetivo: volumen de tráfico orgánico

**Blue Square (MOFU)** — Crear segundo:
- Lead magnets descargables (checklists, templates, toolkits)
- Webinars y talleres en vivo
- Herramientas interactivas (quizzes, calculadoras simples)
- Objetivo: conversión de visitante a lead

**Black Diamond (BOFU)** — Crear tercero:
- Case studies con datos reales de ROI
- Páginas comparativas (tu solución vs. alternativas)
- Calculadoras ROI personalizables
- Demos y pruebas gratuitas
- Objetivo: conversión de lead a oportunidad

Para la matriz completa de tipos de contenido por nivel, leer `patterns/content-difficulty-matrix.md`.

### Paso 4: Crear calendario de contenido

Estructurar un calendario de 12 semanas con cadencia y responsables:

| Semana | Green Circle | Blue Square | Black Diamond |
|--------|-------------|-------------|---------------|
| 1-4 | 2 posts/semana | 1 lead magnet | — |
| 5-8 | 2 posts/semana | 1 lead magnet | 1 case study |
| 9-12 | 2 posts/semana | 1 webinar | 1 comparativa + 1 calculadora |

**Cadencia mínima recomendada**:
- Green Circle: 2 piezas/semana (8/mes)
- Blue Square: 2 piezas/mes
- Black Diamond: 1 pieza/mes

### Paso 5: Distribución + Partnerships

El contenido sin distribución no genera resultados. Implementar sistema de distribución multi-canal:

**Canal 1: SEO Orgánico** (compounding, 3-6 meses para resultados)
- Optimización on-page de cada Green Circle post
- Link building a "Masterpiece Content" (posts de 3,000+ palabras)
- Estructura de silos/clusters con internal linking

**Canal 2: Red Packet Partnerships** (resultados inmediatos)
- Identificar 50+ partners con audiencias complementarias
- Outreach personalizado con assets listos para compartir
- Tracking con UTMs para medir ROI por partner

Para el SOP completo de partnerships, leer `templates/red-packet-partnership-sop.md`.

**Canal 3: Paid Amplification** ($5/día mínimo)
- Amplificar los Green Circle posts con mejor performance orgánico
- Retargeting a visitantes del blog con Blue Square offers
- Campañas TOFU→BOFU para Invisible Sales Letters

## Conexiones PULSO

| Dimensión PULSO | Conexión con Content Strategy |
|-----------------|-------------------------------|
| **P — Panorama** | Define los temas Green Circle: contenido que refleja la realidad y contexto del ICP |
| **U — Urgencia** | Define los temas Black Diamond: case studies y calculadoras que cuantifican el dolor |
| **L — Logro** | Los benchmarks cuantifican el impacto en métricas del negocio del cliente |
| **S — Situación Crítica** | Los workflows de 12 semanas crean urgencia con timelines concretos |
| **O — Organización** | Los Partnership SOPs y el sistema ISL aceleran la decisión de compra |

## Integración con el Ecosistema

| Skill / Plugin | Conexión con Content Strategy |
|---------------|-------------------------------|
| **ICP Analysis** (growth-foundations) | Paso 1 — el ICP define las necesidades de contenido |
| **Quiz Funnel** (growth-foundations) | Blue Square — quiz como lead magnet que cualifica y segmenta |
| **Positioning** (growth-foundations) | Define el ángulo diferenciador del contenido vs. competencia |
| **FLUJO** (motor-de-ofertas) | Los niveles de Ski Slope alimentan las fases del funnel |
| **ESCALA** (motor-de-ofertas) | El value ladder define qué ofrecer en cada nivel |
| **Copywriting Engine** | Templates AIDA para escribir cada pieza de contenido |
| **Discovery Mastery** (sales-blueprint) | Black Diamond content prepara leads para la llamada de discovery |

## Output Esperado

Al completar el proceso de Content Strategy, el usuario obtiene:

1. **Topic Triangle priorizado** — Lista de 20+ temas ordenados por potencial de revenue
2. **Mapa de Ski Slope** — Cada tema asignado a un nivel (Green/Blue/Black) con formato definido
3. **Calendario de 12 semanas** — Cadencia, responsables y KPIs por semana
4. **SOP de distribución** — Sistema de partnerships + SEO + paid con tracking
5. **Benchmarks por fase** — Métricas objetivo para medir salud del sistema de contenido
6. **Templates ejecutables** — AIDA para blog posts, worksheet de priorización, SOP de partnerships

## Templates

- Para la worksheet de priorización de temas, leer `templates/topic-priority-worksheet.md`
- Para el template de blog post AIDA, leer `templates/aida-blog-post-template.md`
- Para el SOP de partnerships, leer `templates/red-packet-partnership-sop.md`

## Ejemplos de Implementación

- B2B SaaS en LATAM: `examples/workflow-b2b-saas-latam.md`
- Consultoría / Agencia: `examples/workflow-consulting-agency.md`
- Solo Creator hispanohablante: `examples/workflow-solo-creator-spanish.md`

## Patterns

Para la matriz de dificultad de contenido con expectativas de conversión y recursos, leer `patterns/content-difficulty-matrix.md`.
