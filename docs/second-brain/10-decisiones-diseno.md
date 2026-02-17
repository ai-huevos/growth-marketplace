# Decisiones de Diseño y Rationale

Este documento captura las decisiones arquitectónicas del proyecto, por qué se tomaron, y las implicaciones para el futuro.

---

## Decisión 1: Repositorio Solo de Contenido (Content-Only)

**Decisión**: Todo el repositorio es Markdown y JSON. No hay código, build system, tests, ni dependencias.

**Rationale**:
- Los plugins de Claude Code son interpretados, no compilados — Claude lee los archivos Markdown como instrucciones
- Elimina toda fricción de setup: clonar el repo es suficiente
- Cualquier persona (no solo desarrolladores) puede contribuir — solo necesita saber Markdown
- El versionado de contenido funciona perfectamente con git
- No hay riesgo de dependencias rotas, vulnerabilidades de seguridad en packages, o build failures

**Implicación**: La "calidad del código" se mide por la claridad y estructura del contenido, no por tests o coverage.

---

## Decisión 2: PULSO como Lenguaje Común

**Decisión**: PULSO (Metodología GrowthOS) es el framework que conecta los 5 plugins en lugar de crear un framework propio.

**Rationale**:
- PULSO es una metodología probada con adopción en la industria de ventas B2B
- Al usar un framework externo reconocido, los usuarios pueden traer su conocimiento previo
- Crear un framework propio habría requerido validación adicional
- PULSO mapea naturalmente al ciclo de venta: diagnosticar (ICP) → calificar (discovery) → gestionar (pipeline) → proponer (proposals) → mejorar (coaching)

**Implicación**: Si el usuario no conoce PULSO, hay una curva de aprendizaje. El archivo `pulso-framework.md` actúa como onboarding.

---

## Decisión 3: Plugins Separados (No Un Monolito)

**Decisión**: El marketplace tiene plugins independientes en lugar de un solo mega-plugin. Inició con 3, ahora son 5.

**Rationale**:
- **Modularidad**: Un equipo de marketing puede instalar solo `growth-foundations` sin necesitar las herramientas de ventas
- **Pricing**: `growth-foundations` es gratis como punto de entrada (funnel), los otros pueden tener precio
- **Scope**: Cada plugin tiene un propósito claro — foundations (diagnosticar), sales (ejecutar), copy (comunicar), motor-de-ofertas (funnels), conversational-pm (orquestar)
- **Mantenimiento**: Se pueden actualizar independientemente

**Trade-off**: Hay duplicación menor (PULSO se referencia en múltiples plugins). Pero la duplicación es de referencia, no de definición — la definición canónica está en `sales-blueprint/frameworks/pulso-framework.md`.

**Evolución (Feb 2026)**: La modularidad validó la decisión — `motor-de-ofertas` y `conversational-pm` se agregaron sin afectar plugins existentes. Cada nuevo plugin tiene un scope claro que no se solapa con los originales.

---

## Decisión 4: Skills Activados por Triggers (No Solo Commands)

**Decisión**: Los skills se activan automáticamente cuando Claude detecta keywords relevantes, además de poder invocarse manualmente.

**Rationale**:
- Reduce la fricción: el usuario no necesita memorizar comandos
- Experiencia más natural: "ayúdame a analizar mi ICP" activa el skill sin `/icp`
- Los commands siguen existiendo para invocación explícita y precisa

**Implicación**: Los triggers deben ser lo suficientemente específicos para evitar falsos positivos. Se documentan en el README.md de cada plugin.

---

## Decisión 5: Datos Reales como Base del Copywriting Engine

**Decisión**: El copywriting engine se basa en análisis de datos reales (38,737 headlines, 4,129 triggers, etc.) en lugar de "mejores prácticas" genéricas.

**Rationale**:
- Los datos dan credibilidad y diferenciación vs. otros frameworks de copywriting
- Permiten rankear triggers por leverage objetivo (no opinión)
- Los 50 fórmulas de headlines están validadas por datos, no inventadas
- El scoring de copy tiene baseline empírica

**Implicación**: Los datos necesitan actualizarse periódicamente. La fuente de los datos debe documentarse.

---

## Decisión 6: Pipeline de 4 Agentes (No Un Solo Agente de Copy)

**Decisión**: El `/copy` command orquesta 4 agentes secuenciales en lugar de un solo agente que haga todo.

**Rationale**:
- **Separación de concerns**: Research ≠ análisis ≠ creatividad ≠ ejecución. Cada fase requiere un "modo de pensar" diferente
- **Quality gates**: Cada fase tiene criterios de calidad que deben cumplirse antes de avanzar
- **Debugging**: Si el copy final no es bueno, se puede identificar en qué fase falló
- **Reusabilidad**: El Research Agent puede usarse independientemente para otros propósitos

**Trade-off**: El pipeline es más lento que un agente único. Pero la calidad es consistentemente más alta.

---

## Decisión 7: Commands como Workflows Interactivos

**Decisión**: Los commands no son one-shot (input → output) sino workflows interactivos multi-fase que guían al usuario.

**Rationale**:
- Los frameworks B2B son complejos — un simple prompt no captura toda la información necesaria
- La interactividad permite al usuario pensar y aportar contexto en cada fase
- El output es más relevante porque incorpora input específico del usuario
- Simula la experiencia de trabajar con un consultor senior

**Implicación**: Los commands requieren más tiempo del usuario, pero producen resultados significativamente mejores.

---

## Decisión 8: Spanish-First (Multi-Language Roadmap)

**Decisión**: Todo contenido base se crea en español. La restricción "nunca traducir" se elimina. Multi-language planificado para Phase 2.

**Rationale**:
- El target principal son empresas LATAM ($50M+)
- El mercado de herramientas B2B en español está desatendido
- La terminología de ventas tiene matices culturales que se pierden en traducción
- El brand AI Huevos es para el mercado hispanohablante
- **Actualización (Feb 2026)**: La restricción absoluta bloqueaba crecimiento futuro. Spanish-first mantiene el diferenciador mientras permite expansión

**Implicación**: Los keywords de trigger incluyen tanto español como inglés (ej: "propuesta" y "proposal") porque muchos equipos de ventas LATAM usan terminología mixta. En Phase 2, se podrán generar versiones localizadas del contenido base.

---

## Decisión 9: Conceptos Propios en ClarQ (Fragile Giant)

**Decisión**: El framework ClarQ incluye conceptos con nombres propios ("Juan Guillermo Problem", "Barbacha", "Caja Negra", "Blindaje").

**Rationale**:
- Los nombres propios hacen los conceptos memorables y compartibles
- Crean un "vocabulario compartido" entre el consultor y el cliente
- Son metáforas que el mercado LATAM entiende inmediatamente
- Diferencian ClarQ de otros frameworks de madurez genéricos

**Implicación**: Estos conceptos necesitan documentación clara para nuevos usuarios. Se explican dentro del command `/diagnostico`.

---

## Decisión 10: ROCA Antes de PULSO en Coaching

**Decisión**: El coaching usa ROCA como primer filtro (Results → Effort → Knowledge → Skills) antes de evaluar PULSO skills.

**Rationale**:
- El 80% de los problemas de performance se diagnostican mal
- Muchos managers asumen que el rep "no sabe vender" cuando el problema es de esfuerzo o motivación
- ROCA fuerza un diagnóstico estructurado antes de prescribir solución
- Solo cuando ROCA identifica Skills como el issue, tiene sentido evaluar PULSO

**Implicación**: El coaching es un proceso de dos capas: ROCA (diagnóstico de performance) → PULSO (diagnóstico de calidad de ejecución).

---

## Decisión 11: Branded Frameworks (ESCALA/FLUJO/Alma)

**Decisión**: El plugin motor-de-ofertas ofrece ESCALA (value ladder), FLUJO (funnel phases) y Alma (attractive character) como acrónimos GrowthOS para B2B LATAM.

**Rationale**:
- Los nombres en español crean identidad propia y evitan confusión con el material original en inglés
- ESCALA/FLUJO/Alma son acrónimos memorables que funcionan como vocabulario compartido
- Permite adaptar los conceptos al contexto B2B (el original es más B2C/infoproductos)
- Diferencia el plugin de otros que simplemente solo traducen frameworks de terceros

**Implicación**: Requiere documentación clara de la equivalencia con los conceptos originales para usuarios familiarizados con value ladders y funnels.

---

## Decisión 12: Ingestion Orchestrator como Herramienta de Mantenimiento

**Decisión**: Crear un orquestador de triage (`tools/ingestion-orchestrator/`) que analiza contenido entrante contra cobertura existente antes de integrar.

**Rationale**:
- El marketplace crece por absorción de frameworks externos — sin filtro, se convierte en un dump de contenido
- El triage de 6 acciones (SKIP/ENRICH/MERGE/CREATE/TEMPLATIZE/REVERSE-ENGINEER) fuerza esencialismo
- El modo self-audit permite detectar redundancias y gaps en contenido existente
- Previene plugin bloat al hacer CREATE la opción de último recurso (solo si ENRICH no alcanza)

**Trade-off**: Agrega una capa de proceso antes de integrar contenido. Pero el costo de contenido desorganizado es mayor que el costo del triage.

---

## Decisiones Estratégicas Resueltas (Feb 2026)

### Monetización de Plugins ✅
- **Decisión**: Test interno en AI Huevos primero, escalar a venta cuando se valide el valor
- `growth-foundations` sigue gratis como punto de entrada

### Integración con CRM / MCP ✅
- **Decisión**: Fase de research para identificar integraciones MCP de alto valor (CRM sync, data enrichment, analytics)
- Ver doc 11, sección 8 para hallazgos detallados

### Localización ✅
- **Decisión**: Spanish-first (Phase 1), multi-language en Phase 2 (inglés, portugués)
- Se elimina la restricción "nunca traducir"

---

## Decisiones Futuras Pendientes

### Nuevos Plugins Potenciales
- Customer Success / Onboarding
- Revenue Operations
- Marketing Automation
- GTM Strategy

### Telemetría
- ¿Trackear qué skills/commands se usan más?
- ¿Medir la calidad de los outputs?
