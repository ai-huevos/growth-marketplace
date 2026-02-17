# Framework de Investigacion de 5 Capas

Sistema completo de recopilacion de inteligencia para discovery calls. Cada capa es independiente pero la combinacion genera una imagen multidimensional del prospect.

## Principios de investigacion

1. **No forzar conexiones**: Dejar que los patrones emerjan naturalmente de los datos
2. **Hechos > suposiciones**: Marcar claramente que es confirmado vs. inferido
3. **Esencia sobre volumen**: Buscar la verdad central, no acumular datos irrelevantes
4. **Anticipar necesidades**: Responder preguntas que el prospect aun no ha formulado

---

## Capa 1: Company Deep Dive (20 min)

### Objetivo
Construir una comprension profunda de los fundamentos de la empresa: que hace, como gana dinero, como esta posicionada, y donde tiene fricciones.

### Areas de investigacion

#### 1.1 Fundamentos de la empresa
- Historia de fundacion y linea de tiempo de evolucion
- Revenue estimado y trayectoria de crecimiento
- Rondas de financiamiento, inversionistas, salud financiera
- Tamano del equipo y patrones de contratacion recientes
- Oficinas y presencia geografica

#### 1.2 Modelo de negocio
- Productos/servicios principales y modelo de pricing
- Perfil del cliente objetivo y posicionamiento de mercado
- Revenue streams (si esta disponible)
- Senales de estrategia go-to-market
- Canales de distribucion y partnerships

#### 1.3 Technology stack e infraestructura
- Plataformas tecnologicas principales
- CRM y herramientas de ventas (revisar job postings)
- Indicadores de cultura de engineering
- Madurez de presencia digital

#### 1.4 Senales de crecimiento y challenges
- Noticias recientes, press releases, anuncios
- Job postings (especialmente en ventas, marketing, revenue)
- Cambios de liderazgo o expansiones de equipo
- Testimoniales y caso de estudio de clientes
- Senales de sentimiento de empleados (Glassdoor)

#### 1.5 Landscape competitivo
- Competidores directos y posicionamiento
- Claims de diferenciacion en su messaging
- Market share estimado
- Ventajas competitivas y vulnerabilidades

### Prompt de Perplexity — Capa 1

```markdown
SOLICITUD DE INVESTIGACION — CAPA 1: INTELIGENCIA DE EMPRESA

Empresa: [NOMBRE_EMPRESA]
Industria: [INDUSTRIA]
Website: [URL]
LinkedIn: [LINKEDIN_URL]

Objetivos de investigacion:

1. Fundamentos: historia, revenue estimado, funding, tamano equipo, presencia geografica
2. Modelo de negocio: productos, pricing, cliente objetivo, go-to-market, partnerships
3. Technology stack: CRM, herramientas de ventas (buscar en job postings), madurez digital
4. Senales de crecimiento: noticias recientes, hiring patterns, cambios de liderazgo, reviews de empleados
5. Competencia: competidores directos, diferenciacion, market share, vulnerabilidades

Formato de output:
- Resumen ejecutivo (3-4 oraciones)
- Hallazgos estructurados con niveles de confianza (CONFIRMADO / PROBABLE / INFERIDO)
- Insights clave para la conversacion de discovery
- Red flags o indicadores de riesgo
- Areas de oportunidad para engagement
```

### Fuentes recomendadas
- Website de la empresa y blog
- LinkedIn (pagina corporativa)
- Crunchbase / AngelList
- Glassdoor
- G2 / Capterra (si es software)
- Noticias de industria
- SEC filings (si es publica)

---

## Capa 2: Inteligencia Humana (15 min)

### Objetivo
Conocer a la persona detras del titulo. Entender su trayectoria, estilo de comunicacion, prioridades actuales y oportunidades de rapport.

### Areas de investigacion

#### 2.1 Trayectoria profesional
- Carrera y transiciones clave
- Empresas anteriores y roles (patrones de industria)
- Educacion y certificaciones
- Tiempo en el rol actual y en la empresa
- Velocidad de ascenso y momentum profesional

#### 2.2 Estilo de liderazgo y filosofia
- Contenido que crea (posts de LinkedIn, articulos, podcasts)
- Charlas y thought leadership
- Causas que apoya y valores que expresa
- Senales de approach de management
- Preferencias de estilo de comunicacion

#### 2.3 Prioridades y challenges actuales
- Actividad reciente en LinkedIn y temas de interes
- Problemas que discute publicamente
- Tecnologias o metodologias que esta explorando
- Iniciativas de equipo mencionadas
- Pain points expresados en contenido

#### 2.4 Red e influencia
- Conexiones mutuas (1er y 2do grado)
- Comunidades de industria donde participa
- Influencers y thought leaders que sigue
- Asociaciones profesionales y grupos

#### 2.5 Contexto personal
- Hobbies e intereses (para construir rapport)
- Ubicacion y timezone
- Preferencias de idioma
- Patrones de comunicacion (frecuencia de posting, estilo)

### Prompt de Perplexity — Capa 2

```markdown
SOLICITUD DE INVESTIGACION — CAPA 2: INTELIGENCIA DE STAKEHOLDER

Nombre: [NOMBRE]
Titulo: [TITULO]
Empresa: [NOMBRE_EMPRESA]
LinkedIn: [LINKEDIN_URL]

Objetivos de investigacion:

1. Trayectoria: carrera, transiciones, empresas anteriores, educacion, certificaciones
2. Estilo de liderazgo: contenido que crea, charlas, valores, approach de comunicacion
3. Prioridades actuales: actividad reciente, problemas que discute, tech que explora
4. Red: conexiones mutuas, comunidades, influencers que sigue, asociaciones
5. Contexto personal: hobbies, ubicacion, idioma, patrones de comunicacion

Formato de output:
- Perfil resumido del stakeholder
- Approach de conversacion recomendado
- Oportunidades de rapport
- Temas que probablemente resonaran
- Adaptaciones de estilo de comunicacion recomendadas
```

### Clasificacion de estilo (usar para adaptar la call)

| Estilo | Caracteristicas | Como adaptar |
|--------|----------------|--------------|
| **Analytical** | Datos, logica, detalle, precision | Preparar numeros, benchmarks, ROI cuantificado |
| **Driver** | Resultados, eficiencia, control, velocidad | Ir al grano, resumen ejecutivo primero, timeline claro |
| **Expressive** | Vision, creatividad, entusiasmo, big picture | Historias, posibilidades, impacto transformacional |
| **Amiable** | Relaciones, consenso, estabilidad, confianza | Construir rapport primero, referencias de pares, bajo riesgo |

---

## Capa 3: Industria y Mercado (10 min)

### Objetivo
Contextualizar al prospect dentro de su industria. Conocer benchmarks, tendencias y challenges especificos del sector para hablar su idioma.

### Areas de investigacion

#### 3.1 Tendencias y dinamicas
- Estado actual de la industria (crecimiento, consolidacion, disrupcion)
- Tendencias emergentes (proximos 12-24 meses)
- Disrupciones tecnologicas y patrones de innovacion
- Cambios regulatorios o de politica
- Tendencias de consolidacion o fragmentacion

#### 3.2 Sizing y economia del mercado
- TAM estimado
- Tasas de crecimiento y proyecciones
- Segmentos clave y dinamicas
- Tendencias de pricing y presion de margenes
- Actividad de inversion y M&A

#### 3.3 Dinamicas competitivas
- Lideres y challengers del mercado
- Players emergentes y disruptores
- Barreras de entrada y moats
- Shifts de market share

#### 3.4 Patrones de comportamiento del comprador
- Evolucion del proceso de compra en esta industria
- Normas y cambios de sales cycle
- Composicion tipica del decision-making unit
- Tendencias de procurement

#### 3.5 Challenges de venta especificos de la industria
- Bottlenecks comunes del proceso de venta
- Win rates y cycle times tipicos
- Objeciones comunes del sector
- Requerimientos regulatorios para vender
- Dinamicas de canal y partnerships

### Prompt de Perplexity — Capa 3

```markdown
SOLICITUD DE INVESTIGACION — CAPA 3: INTELIGENCIA DE INDUSTRIA Y MERCADO

Industria: [INDUSTRIA_PRINCIPAL]
Sub-sector: [SUB_SECTOR]
Mercado geografico: [PAIS/REGION]
Contexto empresa: [NOMBRE_EMPRESA] en [INDUSTRIA]

Objetivos de investigacion:

1. Tendencias: estado actual, tendencias emergentes 12-24mo, disrupciones tech, regulacion
2. Mercado: TAM, growth rates, segmentos clave, pricing trends, M&A
3. Competencia: lideres, challengers, disruptores, barreras de entrada
4. Comportamiento comprador: proceso de compra, sales cycle norms, decision-making unit
5. Challenges de venta: bottlenecks, win rates tipicos, objeciones comunes, compliance

Formato de output:
- Brief de contexto de industria (5-7 puntos clave)
- Benchmarks y metricas relevantes
- Terminologia y lenguaje especifico de la industria
- Challenges comunes en este sector
- Oportunidades de diferenciacion
```

---

## Capa 4: Contexto Geografico y Economico (5 min)

### Objetivo
Entender el entorno macroeconomico, cultural y regulatorio que afecta las decisiones de compra del prospect.

### Areas de investigacion

#### 4.1 Contexto macroeconomico
- GDP growth rate y outlook economico
- Tendencias de inflacion y estabilidad de moneda
- Desempleo y condiciones del mercado laboral
- Indicadores de confianza empresarial
- Cambios recientes de politica economica

#### 4.2 Entorno de negocios
- Indicadores de facilidad para hacer negocios
- Madurez de adopcion tecnologica
- Readiness de transformacion digital
- Salud del ecosistema startup
- Tendencias de inversion extranjera

#### 4.3 Factores regionales especificos de la industria
- Growth rate de [INDUSTRIA] en [REGION]
- Entorno regulatorio regional
- Lideres y dinamicas del mercado local
- Practicas culturales de negocios
- Normas de idioma y comunicacion

#### 4.4 Entorno de ventas B2B
- Procesos y timelines tipicos de venta
- Normas culturales de toma de decisiones
- Modelos de engagement preferidos (remoto vs. presencial)
- Terminos de pago y practicas financieras
- Consideraciones contractuales y legales

#### 4.5 Landscape de tecnologia e innovacion
- Tasas de adopcion SaaS y madurez
- Plataformas tecnologicas comunes
- Preferencias de infraestructura cloud
- Requerimientos de data privacy y compliance
- Hubs de innovacion y comunidades tech

### Prompt de Perplexity — Capa 4

```markdown
SOLICITUD DE INVESTIGACION — CAPA 4: INTELIGENCIA GEOGRAFICA Y ECONOMICA

Pais/Region: [PAIS/REGION]
Industria: [INDUSTRIA]
Contexto economico: [TRIMESTRE/ANO ACTUAL]

Objetivos de investigacion:

1. Macroeconomia: GDP growth, inflacion, moneda, confianza empresarial, politicas recientes
2. Entorno de negocios: facilidad de negocios, adopcion tech, transformacion digital, startups
3. Factores regionales: [INDUSTRIA] growth en [REGION], regulacion local, cultura de negocios
4. Ventas B2B: procesos tipicos, normas culturales, engagement (remoto/presencial), pagos
5. Tech e innovacion: adopcion SaaS, plataformas comunes, data privacy, compliance

Formato de output:
- Resumen de contexto regional
- Consideraciones culturales de negocios
- Factores economicos que afectan decisiones de compra
- Benchmarks y normas regionales
- Requerimientos de localizacion u oportunidades
```

---

## Capa 5: Timing y Momentum (10 min)

### Objetivo
Identificar factores de urgencia, senales de compra y riesgos basados en eventos recientes y proximos. Esta capa es la que mas influye en la probabilidad de cierre.

### Areas de investigacion

#### 5.1 Milestones recientes de la empresa (ultimos 90 dias)
- Anuncios de funding o eventos financieros
- Lanzamientos de producto
- Customer wins o case studies publicados
- Anuncios de partnerships
- Expansiones de oficina o crecimiento geografico

#### 5.2 Cambios de liderazgo y equipo
- Nuevos ejecutivos (especialmente CRO, VP Sales, CMO)
- Expansiones de equipo (tamano y departamentos)
- Senales de reestructuracion organizacional
- Cambios de board o advisory appointments

#### 5.3 Triggers de mercado y competencia
- Movimientos de competidores que afectan su posicion
- Shifts de mercado que crean urgencia
- Eventos o conferencias de industria proximos
- Deadlines regulatorios o de compliance
- Shifts tecnologicos que requieren adaptacion

#### 5.4 Senales de compra e intento
- Job postings que indican nuevas iniciativas
- Cambios o adiciones al tech stack
- Patrones de consumo de contenido (webinars, downloads)
- Engagement con contenido de metodologia de ventas
- Timing del ciclo de presupuesto (fin de ano fiscal, periodos de planning)

#### 5.5 Indicadores de riesgo
- Prensa negativa o issues de reputacion
- Senales de customer churn
- Perdidas competitivas
- Salidas de liderazgo
- Presiones economicas o senales de cost-cutting

### Prompt de Perplexity — Capa 5

```markdown
SOLICITUD DE INVESTIGACION — CAPA 5: INTELIGENCIA DE TIMING Y MOMENTUM

Empresa: [NOMBRE_EMPRESA]
Periodo de investigacion: Ultimos 90 dias
Mirada a futuro: Proximos 6-12 meses

Objetivos de investigacion:

1. Milestones recientes: funding, lanzamientos, customer wins, partnerships, expansiones
2. Cambios de equipo: nuevos ejecutivos, expansiones, reestructuracion, board changes
3. Triggers de mercado: movimientos competidores, shifts de mercado, eventos proximos, regulacion
4. Senales de compra: job postings de nuevas iniciativas, tech stack changes, consumo de contenido
5. Indicadores de riesgo: prensa negativa, churn, perdidas competitivas, salidas de liderazgo

Formato de output:
- Indicadores de urgencia y factores de timing
- Timing de engagement recomendado
- Hooks de conversacion basados en eventos recientes
- Factores de riesgo a abordar o evitar
- Oportunidades de momentum a aprovechar
```

---

## Sintesis: Del Research a la Hipotesis

Despues de completar las 5 capas, ejecutar el proceso de sintesis:

### Paso 1: Cruzar capas
Buscar patrones que se repiten entre multiples capas:

| Patron | Capas involucradas | Significado |
|--------|-------------------|-------------|
| Hiring agresivo + nuevos lideres + posts sobre cambio | 1, 2, 5 | Ventana de transformacion activa |
| Win rate bajo + ciclo largo + competidor fuerte | 1, 3 | Dolor de proceso de ventas confirmado |
| Nuevo funding + expansion + hiring | 1, 5 | Presion de crecimiento, presupuesto disponible |
| Glassdoor negativo + turnover + lider nuevo | 1, 2, 5 | Necesidad urgente de profesionalizar |

### Paso 2: Formular hipotesis
Usar el formato estandar (3-5 hipotesis maximo):

```
HIPOTESIS: [Declaracion especifica]
EVIDENCIA: [Datos de multiples capas]
CONFIANZA: Alta / Media / Baja
PREGUNTA DE VALIDACION: [Pregunta para la call]
PREGUNTA PIVOTE: [Si la hipotesis es incorrecta, que preguntar]
```

### Paso 3: Generar Pre-Call Intelligence Brief
Usar el template en `../templates/pre-call-brief.md` para consolidar todo en un documento accionable.

## Asignacion de tiempo por tipo de deal

| Scenario | Capas | Tiempo | Nivel de detalle |
|----------|-------|--------|-----------------|
| Enterprise initial | 1-5 completas | 60 min | Maximo — todos los campos |
| Mid-market initial | 1, 2, 3, 5 | 45 min | Alto — Capa 4 solo si es mercado nuevo |
| SMB initial | 1, 2, 5 | 30 min | Esencial — fundamentos + timing |
| Follow-up (cualquiera) | Delta update | 15 min | Solo cambios desde ultimo research |
| Expansion | 2 (nuevo stakeholder) + 5 | 20 min | Nuevo contacto + momentum actualizado |
