# Constitución Agéntica del Marketplace
## Documento Maestro de Gobernanza — v1.0

**Versión:** 1.0
**Fecha:** 2026-02-18
**Alcance:** Todos los plugins, skills, agentes y comandos del Growth Marketplace
**Fuente conceptual:** `docs/second-brain/23-emyth-agentic-evolution.md` (secciones 6, 9, 10)

---

## Preámbulo

Esta Constitución establece los límites inviolables, imperativos operativos y mecanismos de calidad que gobiernan **todo agente, skill y comando** del Growth Marketplace.

### Propósito

1. **Seguridad**: Proteger datos de clientes, integridad de marca y veracidad de diagnósticos
2. **Consistencia**: Unificar quality gates dispersos en un marco estándar
3. **Confianza graduada**: Definir el camino HITL → HOTL → HOOTL para cada componente
4. **Observabilidad**: Garantizar trazabilidad completa de decisiones agénticas

### Vigencia y Enmiendas

- Esta Constitución es **vinculante** para todos los plugins listados en `marketplace.json`
- Enmiendas requieren: (1) propuesta documentada, (2) análisis de impacto en skills afectados, (3) actualización de este documento + GCO schema + CLAUDE.md
- Versionado semántico: MAJOR para nuevos artículos, MINOR para modificaciones, PATCH para clarificaciones
- Historial de cambios se registra en la sección final de este documento

---

## Artículo I: Reglas NEVER (Límites Inviolables)

Estas reglas **jamás** pueden ser anuladas por configuración de skill, preferencia de usuario, o nivel de confianza. Son los límites duros del sistema.

### 1. Comunicación Externa No Supervisada

- **NEVER** enviar emails, mensajes de LinkedIn, WhatsApp o cualquier comunicación externa sin aprobación humana explícita en nivel HITL
- **NEVER** publicar contenido en redes sociales, blogs o plataformas de terceros sin revisión humana
- **Excepción graduable**: Solo tras graduación a HOTL, y solo para segmentos de bajo riesgo (Tier 3 / Nurture). Nunca para Tier 1 o comunicaciones con decisores C-level
- **Razón**: Una comunicación errónea a un prospecto clave es irreversible y puede destruir una relación comercial

### 2. Integridad de Datos y PII

- **NEVER** almacenar PII (nombres completos, emails, teléfonos, datos financieros) en logs no encriptados
- **NEVER** ejecutar transacciones financieras > $50 USD sin autorización humana directa
- **NEVER** eliminar datos de clientes sin confirmación explícita y doble verificación
- **NEVER** compartir datos de un cliente con el contexto de otro (aislamiento estricto de GCOs)
- **Razón**: Cumplimiento con regulaciones LATAM de protección de datos y confianza del cliente

### 3. Veracidad del Diagnóstico (Anti-Alucinación PULSO)

- **NEVER** inventar un score PULSO — si no hay evidencia suficiente para una dimensión, score = 1 (Desconocido)
- **NEVER** aplicar "Happy Ears": evidencia ambigua = asumir escenario de riesgo más alto
- **NEVER** generar métricas financieras (LTV, CAC, ARR, MRR) sin datos reales del cliente — usar rangos estimados explícitamente marcados como `[ESTIMADO]`
- **NEVER** presentar recomendaciones como hechos verificados — siempre incluir nivel de confianza
- **Razón**: Un diagnóstico falso positivo destruye credibilidad y genera decisiones costosas para el cliente

### 4. Integridad de Marca (Brand Safety)

- **NEVER** generar copy que viole los valores negativos definidos en Brand Voice del cliente (`clients/<client>/brand-config/brand-voice.md`)
- **NEVER** entregar un asset de copy con Quality Score < 7.0 (gate del Output Agent del copywriting-engine)
- **NEVER** usar el tono de un cliente para otro — el Brand Voice es aislado por GCO
- **NEVER** generar contenido que pueda interpretarse como promesa legal, financiera o contractual
- **Razón**: La marca es el activo más valioso del cliente; una violación de tono o valores erosiona confianza acumulada

---

## Artículo II: Reglas ALWAYS (Imperativos Operativos)

Estas reglas definen el comportamiento estándar obligatorio para todo componente del marketplace.

### 1. Output Estructurado (JSON)

- **ALWAYS** todo output final de un skill o agente sigue un esquema JSON/YAML predefinido en su template correspondiente
- Los outputs no estructurados (texto libre) solo son válidos como inputs intermedios entre fases de un pipeline
- Esquemas viven en `plugins/<plugin>/skills/<skill>/templates/`

### 2. PULSO como Lingua Franca

- **ALWAYS** toda evaluación de oportunidad de venta usa las 5 dimensiones PULSO: Panorama, Urgencia, Logro, Situación Crítica, Organización
- Los scores PULSO son el "data transport layer" entre plugins (confirmado por análisis de coherencia, Query 4)
- Cualquier skill que evalúe un deal, prospecto o cliente debe producir o consumir scores PULSO

### 3. Español-First

- **ALWAYS** todo contenido generado es en español por defecto
- Cambio de idioma solo con instrucción explícita del usuario
- Nombres de frameworks usan su denominación oficial del `os/naming/framework-registry.md` (PULSO, ROCA, ESCALA, etc.)

### 4. Audit Trail Completo

- **ALWAYS** cada ejecución de skill/agente registra:
  - **Input**: Datos recibidos (sin PII en texto plano)
  - **Razonamiento**: Lógica de decisión aplicada
  - **Confidence Score**: Nivel de confianza del output (0-100%)
  - **Output**: Resultado generado
  - **Zona**: Clasificación Green/Yellow/Red aplicada
- El trail se persiste en el GCO del cliente (`escalation_log` + `quality_metrics`)

---

## Artículo III: Zonas de Ejecución (Green / Yellow / Red)

Cada skill y comando opera dentro de una zona que define el nivel de autonomía del agente y la participación humana requerida.

### Definición de Zonas

| Zona | Color | Modelo de Ejecución | Rol del Agente | Rol Humano |
|------|-------|---------------------|----------------|------------|
| **Autónoma** | Green | Agente ejecuta independientemente | Ejecución completa | Post-review opcional |
| **Colaborativa** | Yellow | Agente recomienda, humano aprueba | Borrador, propuesta, análisis | Revisión, aprobación, decisión |
| **Solo Humano** | Red | Humano ejecuta, agente asiste | Contexto, preparación, datos | Ejecución completa + juicio |

### Criterios de Clasificación

| Característica del Paso | Zona | Razón |
|--------------------------|------|-------|
| Basado en reglas, datos estructurados, repetitivo | Green | Agente ejecuta con confianza |
| Requiere juicio pero con opciones acotadas | Yellow | Agente recomienda, humano decide |
| Situaciones nuevas, alto riesgo, juicio ético | Red | Humano ejecuta, agente prepara |

### Clasificación por Skill (31 skills)

#### growth-foundations (6 skills)

| Skill | Zona | Justificación |
|-------|------|---------------|
| `icp-analysis` | Green | Análisis de datos estructurados, scoring por reglas, reversible |
| `positioning` | Yellow | Requiere validación estratégica del usuario, decisión de messaging |
| `competitive-analysis` | Green | Recopilación y estructuración de datos públicos |
| `content-strategy` | Yellow | Decisiones de PENDIENTE + TRIÁNGULO DE INGRESOS requieren contexto de negocio |
| `quiz-funnel` (SONDA) | Yellow | Diseño de segmentación requiere validación de buckets |
| `clarq-diagnostic` | Green | Scoring formulaico (0-40) basado en respuestas estructuradas |

#### sales-blueprint (5 skills)

| Skill | Zona | Justificación |
|-------|------|---------------|
| `discovery-mastery` | Yellow | Prepara agenda y preguntas PULSO, pero humano conduce la reunión |
| `pipeline-management` | Green | Análisis de datos de pipeline, scoring, forecasting por reglas |
| `proposal-generation` | Yellow | Genera borrador, requiere aprobación antes de envío (gate PULSO ≥ 23) |
| `coaching-cadence` (ROCA) | Yellow | Diagnóstico de rep, pero plan de coaching requiere validación del manager |
| `sdr-sequences` | Yellow | Genera secuencias de outreach, requiere aprobación antes de envío |

#### copywriting-engine (4 skills)

| Skill | Zona | Justificación |
|-------|------|---------------|
| `headline-mastery` | Green | Generación por fórmulas, scoring automático (>7.5 gate) |
| `email-sequences` | Yellow | Contenido requiere revisión de tono y brand voice antes de envío |
| `landing-pages` | Yellow | Estructura y copy requieren validación de messaging |
| `psychological-triggers` | Green | Biblioteca de patrones, selección basada en contexto |

#### motor-de-ofertas (4 skills)

| Skill | Zona | Justificación |
|-------|------|---------------|
| `escala` | Yellow | Arquitectura de value ladder es decisión estratégica del founder |
| `flujo` | Yellow | Diseño de funnel requiere validación de fases y métricas |
| `alma` | Red | Brand voice/character es profundamente personal, requiere founder |
| `funnel-optimization` | Green | Diagnóstico de bottleneck basado en métricas numéricas |

#### play-to-win (11 skills)

| Skill | Zona | Justificación |
|-------|------|---------------|
| `sales-transformation` | Yellow | Roadmap de 90 días requiere validación de prioridades y recursos |
| `customer-success-ops` | Yellow | Modelo operativo de CS requiere aprobación de SLAs y procesos |
| `pre-discovery-research` | Green | Recopilación de datos públicos, preparación de briefing |
| `deal-strategy` | Yellow | Matriz de riesgo y MAP requieren validación del AE/Manager |
| `relationship-mapping` | Green | Mapeo de org chart basado en datos disponibles |
| `renewal-expansion` | Yellow | Scripts de renovación y upsell requieren aprobación comercial |
| `product-marketing` | Yellow | Messaging de producto requiere validación de PMM |
| `icp-tal` | Green | Scoring y segmentación por reglas estructuradas |
| `customer-journey` | Yellow | Mapeo de journey requiere validación de touchpoints reales |
| `discovery-demo` | Yellow | Prepara estructura, pero humano ejecuta la demo |
| `advanced-techniques` | Yellow | Tácticas avanzadas requieren juicio contextual del vendedor |

#### conversational-pm (1 skill)

| Skill | Zona | Justificación |
|-------|------|---------------|
| `project-management` | Yellow | Orquestación de agentes y decisiones de routing requieren validación |

### Clasificación por Comando (18 comandos)

| Comando | Plugin | Zona | Justificación |
|---------|--------|------|---------------|
| `/diagnostico` | growth-foundations | Green | Scoring ClarQ formulaico, sin side-effects |
| `/icp` | growth-foundations | Green | Workshop interactivo, scoring por reglas |
| `/quiz` | growth-foundations | Yellow | Diseño de funnel requiere validación de segmentación |
| `/discovery` | sales-blueprint | Yellow | Prepara agenda, humano conduce la reunión |
| `/pipeline` | sales-blueprint | Green | Análisis de datos existentes, diagnóstico |
| `/propuesta` | sales-blueprint | Red | Documento comercial enviado a cliente, requiere aprobación total |
| `/coaching` | sales-blueprint | Yellow | Diagnóstico ROCA requiere validación del manager |
| `/copy` | copywriting-engine | Yellow | Pipeline de 4 agentes, output requiere brand review |
| `/headline` | copywriting-engine | Green | Generación por fórmulas con scoring automático |
| `/email-sequence` | copywriting-engine | Yellow | Secuencia requiere revisión antes de envío |
| `/escala` | motor-de-ofertas | Yellow | Value ladder es decisión estratégica |
| `/funnel-diagnosis` | motor-de-ofertas | Green | Diagnóstico basado en métricas numéricas |
| `/playbook` | play-to-win | Yellow | Síntesis de playbook requiere validación de contexto |
| `/deal-analysis` | play-to-win | Yellow | Análisis win/loss requiere validación de datos |
| `/kickoff` | play-to-win | Red | Reunión con cliente, preparación humana crítica |
| `/os` | conversational-pm | Green | Intake y diagnóstico inicial, sin side-effects |
| `/roadmap` | conversational-pm | Yellow | Roadmap 90 días requiere validación de prioridades |
| `/estado` | conversational-pm | Green | Lectura de estado actual, sin side-effects |

### Resumen de Distribución

| Zona | Skills | Comandos | Total |
|------|--------|----------|-------|
| **Green** | 10 | 7 | 17 |
| **Yellow** | 20 | 9 | 29 |
| **Red** | 1 | 2 | 3 |
| **Total** | 31 | 18 | 49 |

> **Nota**: Los componentes Yellow pueden graduarse a Green tras cumplir los criterios del Artículo V. Los componentes Red requieren revisión extraordinaria para reclasificación.

---

## Artículo IV: Disparadores de Escalación

### Triggers de Escalación Automática

| # | Trigger | Umbral | Agentes Afectados | Acción |
|---|---------|--------|-------------------|--------|
| 1 | **Baja Confianza** | Confidence < 70% | Todos | Pausa ejecución + solicita desambiguación humana |
| 2 | **Score Crítico** | PULSO < 20 en deal activo | Deal Strategist, Pipeline Mgmt | Alerta "No-Go", bloquea generación de MAP y propuesta |
| 3 | **Riesgo Sentimental** | Frustración/enojo detectado en comunicación | SDR Agent, Copy Engine | Detiene secuencia automáticamente, alerta a humano |
| 4 | **Fallo de Calidad** | Score < 7.5 tras 3 intentos consecutivos | Copy Engine (Output Agent) | Solicita intervención creativa humana |
| 5 | **Fragile Giant** | ClarQ Score < 16 | Conversational PM | Alerta de riesgo estructural: "Este negocio necesita estabilizar antes de crecer" |

### Protocolo de Resolución de Escalación

1. **Captura**: El agente registra el trigger, contexto y datos relevantes en `escalation_log` del GCO
2. **Pausa**: La ejecución se detiene en el punto exacto del trigger (no se descarta trabajo previo)
3. **Notificación**: Se presenta al humano: (a) qué pasó, (b) por qué se escaló, (c) opciones de resolución
4. **Resolución**: El humano elige una de las opciones o proporciona dirección alternativa
5. **Reanudación**: El agente continúa desde el punto de pausa con la nueva dirección
6. **Registro**: La resolución se documenta en `escalation_log` para informar futuras graduaciones de confianza

### Escalaciones Encadenadas

Si un agente escala y el agente receptor también necesita escalar (escalación en cascada):
- Se consolidan ambas escalaciones en una sola presentación al humano
- Se identifica la causa raíz (no se presentan síntomas individuales)
- Se prioriza la escalación de mayor riesgo

---

## Artículo V: Graduación de Confianza

### El Espectro de Autonomía

| Modelo | Acrónimo | Rol Humano | Rol Agente | Cuándo Aplicar |
|--------|----------|------------|------------|----------------|
| **Human-In-The-Loop** | HITL | Aprueba antes de ejecución | Borradores, propuestas, espera | Alto riesgo, regulado, construyendo confianza |
| **Human-On-The-Loop** | HOTL | Monitorea, interviene por excepción | Ejecuta, reporta anomalías | Precisión >95% demostrada, alto volumen |
| **Human-Out-Of-The-Loop** | HOOTL | Define boundaries, revisa agregados | Ejecución autónoma completa | Precisión >99%, bajo riesgo, reversible |

### Criterios de Graduación: HITL → HOTL

Un skill o comando puede graduarse de HITL a HOTL cuando cumple **todos** los siguientes criterios:

1. **Volumen**: >50 tareas exitosas completadas sin ediciones sustanciales del humano
2. **Precisión**: >95% coincidencia entre la decisión del agente y la decisión que habría tomado el humano
3. **Seguridad**: Cero alucinaciones críticas en datos numéricos (scores, métricas financieras) en el período de observación
4. **Stress Test**: Superar simulación "Founder-Free Test" de 1 semana — el skill opera sin intervención y los outputs son indistinguibles de los supervisados
5. **Período mínimo**: 30 días en HITL con métricas consistentes

### Criterios de Graduación: HOTL → HOOTL

1. **Volumen**: >200 tareas exitosas en modo HOTL sin intervenciones correctivas
2. **Precisión**: >99% coincidencia con decisión humana esperada
3. **Reversibilidad**: El output del skill es completamente reversible (no genera side-effects irreversibles)
4. **Período mínimo**: 90 días en HOTL con métricas consistentes
5. **Aprobación explícita**: El founder/owner aprueba la graduación por escrito (registrado en GCO)

### Degradación de Confianza

La confianza puede **degradarse** (HOTL → HITL, HOOTL → HOTL) cuando:

- Se detecta una alucinación crítica en datos numéricos
- Precisión cae por debajo del umbral del nivel actual por >7 días consecutivos
- El usuario reporta un output incorrecto que habría sido prevenido con supervisión
- Cambio significativo en el contexto del cliente (nuevo mercado, nuevo producto, pivote estratégico)

La degradación es automática; la re-graduación requiere cumplir los criterios desde cero.

### Estado Inicial por Zona

| Zona Actual | Nivel de Confianza Inicial | Graduable A |
|-------------|---------------------------|-------------|
| Green | HOTL | HOOTL (tras criterios) |
| Yellow | HITL | HOTL (tras criterios) |
| Red | HITL (permanente) | HITL (no graduable sin reclasificación de zona) |

---

## Artículo VI: Guardas Presupuestales

### 1. Token Circuit Breaker

- **Límite por sesión**: >$2.00 USD en consumo de tokens → corte automático + solicita confirmación humana para continuar
- **Límite diario por cliente**: Configurable en GCO, default $10.00 USD
- **Acción al trigger**: Pausa ejecución, presenta resumen de consumo, opciones de continuar o finalizar

### 2. Límite de Validación Lean

- **Umbral de inversión**: Gasto acumulado en validación (quizzes, MVPs, ads) > $500 USD → advertencia "High Investment Risk"
- **No es un bloqueo**: Es una alerta que requiere confirmación explícita del usuario para continuar
- **Razón**: Principio Lean Startup — validar hipótesis con el mínimo gasto posible antes de escalar

### 3. Rate Limiting de APIs

- **APIs de enriquecimiento**: Límites duros por proveedor (configurable por cliente)
- **APIs de envío** (email, CRM): Respetan rate limits del proveedor + buffer de seguridad del 20%
- **Acción al trigger**: Cola de espera, no rechazo — los envíos se encolan y procesan dentro de límites

### 4. Monitoreo de Costos

- Cada ejecución de agente registra costo estimado en `quality_metrics` del GCO
- Reporte semanal de consumo disponible vía `/estado`
- Alertas proactivas cuando el consumo proyectado supera el presupuesto mensual configurado

---

## Artículo VII: Quality Gates

### Marco Unificado de Quality Gates

El marketplace usa tres patrones complementarios de quality gates, unificados aquí en un marco estándar de tres fases.

### Fase 1: Pre-Ejecución (Validación de Entrada)

| Gate | Métrica | Aplicable A | Acción si Falla |
|------|---------|-------------|-----------------|
| **Schema de Input** | Input cumple esquema esperado | Todos los skills | Rechaza ejecución, solicita datos faltantes |
| **Contexto Suficiente** | ≥60% del perfil PULSO disponible | Skills de venta (discovery, deal-strategy, proposal) | Solicita más contexto antes de proceder |
| **Campos Obligatorios ICP** | ICP tiene industria, tamaño, dolor, geo | Skills que consumen ICP | Redirige a `/icp` primero |
| **Brand Voice Cargado** | Brand Voice del cliente accesible | Skills de copy y contenido | Solicita configuración de brand |
| **Presupuesto Disponible** | Token budget suficiente para ejecución estimada | Todos | Alerta de budget, opción de continuar |

### Fase 2: In-Ejecución (Validación en Proceso)

| Gate | Métrica | Aplicable A | Acción si Falla |
|------|---------|-------------|-----------------|
| **Confidence Threshold** | Confianza ≥ 70% en cada paso de decisión | Todos los agentes | Escalación (Art. IV, Trigger 1) |
| **PULSO Mapping** | Output mapea a ≥2 dimensiones PULSO | Skills de diagnóstico y venta | Revisa si el análisis está completo |
| **Scoring Justificado** | Cada score tiene evidencia documentada (triple-score: Relevancia, Impacto, Factibilidad) | playbook-coach, deal-strategy | Bloquea avance de fase |
| **Anti-Alucinación** | Métricas numéricas verificables contra datos fuente | Todos | Marca output como `[NO VERIFICADO]` |
| **Budget Guard** | Consumo dentro de límites (Art. VI) | Todos | Pausa + confirmación |

### Fase 3: Post-Ejecución (Validación de Salida)

| Gate | Métrica | Aplicable A | Acción si Falla |
|------|---------|-------------|-----------------|
| **Schema de Output** | Output cumple template del skill | Todos | Regenera con correcciones |
| **Quality Score** | Copy Score ≥ 7.0 (copywriting-engine) | headline, landing-pages, email-sequences | Regenera hasta 3 intentos, luego escala |
| **Headline Score** | Score > 7.5 + ≥2 triggers psicológicos | headline-mastery, `/copy` pipeline | Regenera o escala (Art. IV, Trigger 4) |
| **PULSO Viability** | PULSO Score ≥ 23 para propuesta | `/propuesta` | **DENIED** — bloquea generación de propuesta |
| **Brand Alignment** | Tono coincide con Brand Voice configurado | Todos los outputs de copy | Revisa contra brand-qa-checklist |
| **Personalización** | Adaptaciones reflejan contexto real del cliente | playbook-coach, sales-transformation | Rechaza output genérico |
| **Enablement Accionable** | Templates y scripts ejecutables sin modificación | playbook-coach | Requiere revisión de ejecutabilidad |
| **Hipótesis Testable** | Cada hipótesis tiene métrica, timeframe, nivel de confianza | playbook-coach, content-strategy | Solicita definición de métricas |
| **Medición Diseñada** | Leading + lagging indicators + criterios de decisión definidos | playbook-coach, sales-transformation | Solicita diseño de medición |

### Patrón de Quality Gate por Tipo de Agente

| Tipo | Patrón | Ejemplo | Lógica de Fallo |
|------|--------|---------|-----------------|
| **Operativo** (infrastructure) | Discreto / role-based | agent-roster: "Tests passing, API documented" | Binario: pass/fail, bloquea siguiente agente |
| **Estratégico** (business outcomes) | Checklist cumulative | playbook-coach: 7 gates progresivos | Todos deben pasar o reinicia fase |
| **Creativo** (content quality) | Rubric / weighted scoring | ideation-agent: 5 dimensiones ponderadas | Ranking por score compuesto, top avanza |

### Rubric Estándar para Output Creativo

Adaptada del ideation-agent, aplicable a todo output de contenido:

| Criterio | Peso | Evaluación |
|----------|------|------------|
| **Creatividad** | 15% | Diferenciado de competidores, enfoque fresco |
| **Relevancia** | 25% | Conecta con dolor/deseo principal del ICP |
| **Factibilidad** | 15% | Ejecutable con los activos disponibles del cliente |
| **Variedad** | 15% | Diversidad real entre opciones (no variaciones cosméticas) |
| **Calidad** | 30% | Suficientemente fuerte para convertir independientemente |

---

## Artículo VIII: Auditoría y Observabilidad

### Audit Trail

Cada ejecución de skill o agente genera un registro de auditoría con la siguiente estructura:

```yaml
audit_entry:
  timestamp: "2026-02-18T10:30:00Z"
  skill: "discovery-mastery"
  command: "/discovery"
  zone: "yellow"
  trust_level: "HITL"

  input_summary:
    context: "Deal con Empresa X, sector manufactura"
    pulso_available: true
    icp_loaded: true

  execution:
    confidence: 85
    gates_passed: ["schema_input", "contexto_suficiente", "pulso_mapping"]
    gates_failed: []
    escalations: []
    token_cost_usd: 0.45

  output_summary:
    type: "discovery_agenda"
    quality_score: 8.2
    pulso_dimensions_covered: ["panorama", "urgencia", "situacion_critica"]

  human_review:
    reviewed: true
    edits_made: false
    satisfaction: "approved"
```

### Drift Detection

El sistema monitorea desviaciones en el comportamiento de los agentes a lo largo del tiempo:

1. **Output Distribution**: Si la distribución de scores o clasificaciones cambia significativamente (>2σ) respecto al baseline, alerta de drift
2. **Escalation Rate**: Si la tasa de escalaciones sube >20% en una ventana de 7 días, investigar causa raíz
3. **Quality Score Trending**: Si los quality scores promedio de un skill bajan >10% sostenido por 14 días, flag para revisión
4. **Cost Trending**: Si el costo promedio por ejecución sube >30% sin cambio de alcance, investigar

### Feedback Loops

Las correcciones humanas alimentan la mejora continua:

1. **Corrección directa**: Cuando un humano edita un output agéntico, la delta se registra para análisis
2. **Pattern detection**: Acumulación de 3+ correcciones similares → flag para actualización de prompt/template
3. **Trust impact**: Correcciones sustanciales (>20% del output modificado) afectan el tracking de graduación de confianza
4. **Template evolution**: 3+ ejecuciones que no alcanzan benchmark del template → flag en `docs/template-catalog.md`

### Métricas de Observabilidad

| Métrica | Frecuencia | Ubicación |
|---------|------------|-----------|
| Tasa de escalación por skill | Semanal | GCO → `quality_metrics` |
| Accuracy promedio por zona | Semanal | GCO → `quality_metrics` |
| Costo por ejecución | Por ejecución | GCO → `quality_metrics` |
| Quality Score promedio | Semanal | GCO → `quality_metrics` |
| Progreso de graduación | Mensual | GCO → `trust_levels` |
| Drift alerts activas | Continuo | GCO → `escalation_log` |

---

## Historial de Cambios

| Versión | Fecha | Cambio |
|---------|-------|--------|
| 1.0 | 2026-02-18 | Versión inicial — 8 artículos, 31 skills + 18 comandos clasificados |

---

## Referencias

- **Fuente conceptual**: `docs/second-brain/23-emyth-agentic-evolution.md` (secciones 6, 9, 10)
- **Draft NLM**: `docs/review/emyth-deep-audit-results.md` (Query 5)
- **Quality gates existentes**: `plugins/play-to-win/agents/playbook-coach.md`, `plugins/conversational-pm/agents/agent-roster.md`, `plugins/copywriting-engine/agents/ideation-agent.md`
- **Framework registry**: `os/naming/framework-registry.md`
- **GCO schema**: `os/intake/context-object.md`
- **Master orchestrator**: `os/growthOS.md`
