# Framework Extraction Patterns — Fase 2

Guia para identificar y categorizar frameworks extraibles dentro de cualquier repositorio.

---

## Que cuenta como framework extraible

Un framework extraible es cualquier pieza de conocimiento estructurado que:
1. Tiene pasos, dimensiones, o criterios definidos
2. Se puede aplicar repetidamente a diferentes situaciones
3. Produce outputs consistentes y predecibles
4. Aporta valor como guia autonoma (no depende de contexto externo)

---

## Taxonomia de frameworks

### 1. Metodologias
**Definicion**: Procesos nombrados con pasos definidos que guian una actividad.
**Ejemplos**: PULSO, Design Thinking, Jobs-to-be-Done, OKRs, MEDDIC
**Estructura tipica**: Fases secuenciales, cada una con inputs/outputs

**Senales de deteccion**:
- Headers tipo "Step 1:", "Phase 1:", "Paso 1:", "Fase 1:"
- Listas numeradas con 3+ elementos que describen acciones
- Diagramas de flujo o secuencia
- Palabra "framework", "methodology", "process", "modelo"
- Acronimos explicados (cada letra = una dimension)

### 2. Scoring Models
**Definicion**: Sistemas de evaluacion cuantitativa con escalas, pesos, y umbrales.
**Ejemplos**: ICP scoring, lead scoring, health score, NPS
**Estructura tipica**: Criterios con pesos + escala + thresholds para tiers

**Senales de deteccion**:
- Tablas con columnas "Score", "Peso", "Weight", "Tier"
- Rangos numericos: "0-100", "1-5", "0-10"
- Clasificaciones: "Alto/Medio/Bajo", "Verde/Amarillo/Rojo", "Tier 1/2/3"
- Funciones con nombres tipo `calculate_score`, `evaluate`, `assess`, `rate`
- Variables: `weight`, `threshold`, `max_score`, `tier_boundaries`

### 3. Workflows
**Definicion**: Secuencias de actividades con branching, estados, y transiciones.
**Ejemplos**: Pipeline de ventas, onboarding flow, review process
**Estructura tipica**: Estados + transiciones + condiciones de transicion

**Senales de deteccion**:
- Diagramas de estado o swimlane
- Palabras: "if... then", "cuando... entonces", "next step", "branch"
- Enums de estado: `PENDING`, `IN_PROGRESS`, `COMPLETED`
- State machines o workflow engines en codigo
- Tablas de transicion: "De → A → Condicion"

### 4. Decision Trees
**Definicion**: Logica ramificada que guia decisiones basadas en criterios.
**Ejemplos**: Qualification criteria, routing rules, escalation matrix
**Estructura tipica**: Nodos de decision con branches Si/No o multiples opciones

**Senales de deteccion**:
- Nested if/else o switch/case con logica de negocio
- Matrices de decision (filas = condiciones, columnas = acciones)
- Flowcharts con diamantes (decision points)
- Palabras: "depende de", "si... entonces", "en caso de"

### 5. Checklists / Playbooks
**Definicion**: Listas secuenciales de acciones para completar una tarea.
**Ejemplos**: Launch checklist, audit checklist, onboarding playbook
**Estructura tipica**: Lista de items checkbox, posiblemente agrupados por fase

**Senales de deteccion**:
- Listas con checkboxes: `- [ ]`, `- [x]`
- Listas numeradas con acciones imperativas ("Verificar...", "Configurar...", "Revisar...")
- Headers: "Checklist", "Playbook", "Runbook", "SOP"
- Archivos en directorio `playbooks/`, `runbooks/`, `sops/`

### 6. Template Sets
**Definicion**: Formatos de output estructurado reutilizables.
**Ejemplos**: Proposal template, email template, report template
**Estructura tipica**: Estructura fija con placeholders para contenido variable

**Senales de deteccion**:
- Placeholders: `[nombre]`, `{empresa}`, `$VARIABLE`, `{{campo}}`
- Archivos en directorio `templates/`
- Estructura repetitiva con secciones fijas
- Instrucciones tipo "Completar con...", "Reemplazar X con..."

### 7. Pattern Libraries
**Definicion**: Colecciones de formulas, ejemplos, o recetas reutilizables.
**Ejemplos**: Email subject formulas, headline patterns, objection handling
**Estructura tipica**: Lista de patrones categorizados con ejemplos

**Senales de deteccion**:
- Listas largas de ejemplos agrupados por categoria
- Formulas con variables: "Logra [resultado] sin [dolor] en [tiempo]"
- Headers: "Patterns", "Formulas", "Examples", "Recipes"
- Archivos en directorio `patterns/`, `examples/`, `recipes/`

---

## Heuristicas de deteccion por tipo de repo

### Repos de contenido — Donde buscar

| Ubicacion | Que buscar | Probabilidad |
|-----------|-----------|--------------|
| README.md | Overview de metodologias, links a frameworks | Alta |
| docs/ | Guias, playbooks, SOPs, frameworks completos | Alta |
| templates/ | Template sets listos para extraer | Alta |
| guides/, playbooks/ | Checklists, workflows, playbooks | Alta |
| frameworks/ | Frameworks ya categorizados | Muy alta |
| examples/ | Pattern libraries, ejemplos reutilizables | Media |
| Archivos con headers H2/H3 jerarquicos | Metodologias con pasos/fases | Media |
| Archivos con tablas markdown | Scoring models, decision matrices | Media |

**Scan de contenido**:
```
Buscar en archivos .md:
- Patrones de headers: "## Paso", "## Phase", "## Step", "## Fase"
- Tablas con "Score", "Peso", "Tier", "Nivel"
- Listas numeradas con 3+ items
- Acronimos en mayusculas seguidos de explicacion
- Links internos entre archivos (cross-references = sistema)
```

### Repos de codigo — Donde buscar

| Ubicacion | Que buscar | Probabilidad |
|-----------|-----------|--------------|
| src/models/, src/scoring/ | Scoring models implementados | Alta |
| src/rules/, src/validation/ | Rule engines, decision trees | Alta |
| src/workflows/, src/pipeline/ | Workflows, state machines | Alta |
| config/, settings/ | Reglas de negocio configuradas | Media |
| src/utils/ | Funciones de calculo/evaluacion | Media |
| tests/ | Tests revelan la logica de negocio esperada | Media |
| README, docs/ | Documentacion de la logica de negocio | Alta |

**Scan de codigo**:
```
Buscar en archivos de codigo:
- Funciones: score, evaluate, assess, calculate, validate, qualify
- Variables: weight, threshold, tier, level, score, criteria
- Enums: Status, Phase, Stage, Tier, Level
- Patterns: switch/case con 3+ cases, if/else chains, pipeline patterns
- Clases: *Engine, *Evaluator, *Scorer, *Pipeline, *Workflow
- Decorators/annotations que definen reglas: @rule, @step, @phase
```

### Repos hibridos — Estrategia

1. Primero scan de contenido (mas rapido, frameworks mejor documentados)
2. Luego scan de codigo para encontrar logica adicional no documentada
3. Cross-reference: el contenido describe el "que", el codigo el "como"
4. Priorizar frameworks que existen en ambos (contenido + implementacion)

---

## Template de catalogo de frameworks descubiertos

```
### Framework: [Nombre]
- **Tipo**: [Metodologia / Scoring / Workflow / Decision Tree / Checklist / Template / Patterns]
- **Complejidad**: [Simple: 1 paso | Media: 2-4 | Compleja: 5+]
- **Calidad de documentacion**: [Alta: bien documentado | Media: parcial | Baja: solo codigo]
- **Archivos fuente**: [lista de archivos]
- **Descripcion**: [2-3 lineas de que hace]
- **Dimensiones/pasos**: [lista rapida de los componentes]
- **Extraible como**: [skill / command / agent / framework reference]
- **Dependencias**: [otros frameworks de los que depende, si aplica]
- **Esfuerzo de extraccion**: [Bajo: copiar y adaptar | Medio: reestructurar | Alto: documentar desde cero]
```

---

## Filtrado: Que NO extraer

No extraer como framework independiente:
- Configuracion pura (variables de entorno, conexiones DB, API keys)
- Boilerplate de setup (Docker, CI/CD, linting rules)
- Logica trivial (CRUD basico, validacion de campos obligatorios)
- Contenido especifico a un cliente/proyecto sin patron generalizable
- Codigo legacy marcado como deprecated o sin uso activo
- Librerias de terceros (extraer el USO del framework, no el framework en si)
