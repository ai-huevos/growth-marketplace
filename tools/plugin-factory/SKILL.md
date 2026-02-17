---
name: plugin-factory
description: |
  Interactive workshop to analyze any local repo and convert its frameworks, methodologies, and business logic
  into growth-marketplace plugins. Generates marketplace-ready skills, agents, commands, and all supporting files
  following exact growth-marketplace conventions.

  TRIGGERS: "plugin factory", "extract framework", "convert repo", "create plugin from", "analyze repo for skills",
  "adaptar frameworks", "build plugin from repo", "reverse engineer plugin", "repo to plugin"
---

# Plugin Factory — Workshop Interactivo

Skill de 5 fases que analiza cualquier repositorio local, descubre frameworks/metodologias dentro de el, y genera plugins completos para el growth-marketplace.

## Cuando usar este skill

- El usuario tiene un repositorio con frameworks, metodologias, scoring models, o workflows que quiere convertir en plugins del marketplace
- El usuario quiere extraer conocimiento estructurado de un codebase y empaquetarlo como skill/command/agent
- El usuario dice "create plugin from", "convert this repo", "extract frameworks", "plugin factory"

## Requisitos previos

- El repositorio objetivo debe ser accesible localmente (path absoluto)
- El growth-marketplace debe estar en `/Volumes/deathstar/Development/growth-marketplace/`
- Todos los archivos generados seran Spanish-first

---

## Fase 1: Reconocimiento del Repositorio

**Objetivo**: Entender que es el repo, que tipo es, y mapear su estructura.

### Instrucciones

1. Pedir al usuario el path absoluto del repositorio a analizar
2. Determinar el tipo de repositorio usando los indicadores de `references/reconnaissance_prompts.md`:
   - **Content**: predominan archivos .md, docs/, playbooks, SOPs, sin package.json/requirements.txt
   - **Code**: src/, package.json, requirements.txt, Makefile, archivos de test
   - **Hybrid**: ambos presentes
3. Mapear la estructura del directorio:
   - Contar archivos por tipo (.md, .py, .ts, .json, etc.)
   - Identificar directorios clave (docs/, src/, config/, templates/, etc.)
   - Listar los 10 archivos mas importantes (READMEs, entry points, configs)
4. Leer los archivos top-level (README, index, tabla de contenidos) para entender el proposito del repo
5. Generar un resumen ejecutivo

### Presentar al usuario

```
## Reconocimiento del Repositorio

**Path**: [path]
**Tipo**: [Content / Code / Hybrid]
**Proposito**: [1-2 oraciones sobre que hace el repo]

### Estructura
- [X] archivos total ([Y] .md, [Z] .py, ...)
- Directorios clave: [lista]

### Archivos principales
1. [archivo] — [que contiene]
2. [archivo] — [que contiene]
...

### Areas de interes para extraccion
- [Area 1]: [por que es interesante]
- [Area 2]: [por que es interesante]
```

### Checkpoint con usuario

Preguntar:
- "Este resumen es correcto? Me falta algo importante?"
- "Hay alguna area especifica que quieres que explore mas?"

**Esperar respuesta antes de continuar a Fase 2.**

---

## Fase 2: Descubrimiento de Frameworks

**Objetivo**: Identificar todos los frameworks, metodologias, scoring models, y workflows extraibles.

### Instrucciones

1. Consultar `references/framework_extraction_patterns.md` para los patrones de deteccion
2. Segun el tipo de repo, ejecutar el scan apropiado:

   **Para repos de contenido**:
   - Buscar metodologias con pasos numerados, fases, etapas
   - Buscar scoring models (escalas numericas, tiers, pesos, thresholds)
   - Buscar decision trees (if/then, branching logic)
   - Buscar checklists y playbooks (listas secuenciales de acciones)
   - Buscar templates (formatos de output estructurado)
   - Buscar pattern libraries (colecciones de formulas, ejemplos reutilizables)
   - Escanear headers H2/H3 para jerarquias que sugieren workflows

   **Para repos de codigo**:
   - Buscar funciones de scoring/weight/tier
   - Buscar state machines, pipelines, workflows con fases
   - Buscar rule engines, validation schemas
   - Buscar decision trees implementados en switch/case o if/else chains
   - Buscar configuraciones que codifican reglas de negocio

   **Para repos hibridos**: ambos passes

3. Categorizar cada framework descubierto:
   - **Tipo**: metodologia, scoring model, workflow, pattern library, template set, checklist, decision tree
   - **Complejidad**: simple (1 paso), media (2-4 pasos), compleja (5+ pasos)
   - **Calidad de extraccion**: alta (bien documentado), media (parcial), baja (codigo sin docs)

### Presentar al usuario

```
## Frameworks Descubiertos

| # | Nombre | Tipo | Complejidad | Calidad | Descripcion |
|---|--------|------|-------------|---------|-------------|
| 1 | [nombre] | [tipo] | [simple/media/compleja] | [alta/media/baja] | [1 linea] |
| 2 | [nombre] | [tipo] | ... | ... | [1 linea] |
...

### Detalle por framework

#### 1. [Nombre]
- **Ubicacion**: [archivo(s) fuente]
- **Que hace**: [descripcion de 2-3 lineas]
- **Extraible como**: [skill / command / agent / framework reference]
```

### Checkpoint con usuario

Preguntar:
- "Cuales de estos quieres extraer? (indica numeros, ej: 1, 3, 5)"
- "Hay alguno que quieras renombrar o combinar?"

**Esperar seleccion antes de continuar a Fase 3.**

---

## Fase 3: Arquitectura del Plugin

**Objetivo**: Disenar la estructura del plugin — que componentes crear, como organizarlos.

### Instrucciones

1. Consultar `references/plugin_architecture_guide.md` para la decision matrix
2. Para cada framework seleccionado, determinar:
   - **Tipo de componente**: skill, command, o agent (con razonamiento)
     - Skill: conocimiento que se activa por contexto (el usuario habla del tema)
     - Command: workflow interactivo invocado explicitamente (el usuario ejecuta /)
     - Agent: proceso autonomo con inputs/outputs definidos (orquestado por commands)
   - **Trigger keywords**: en espanol (primarios) + ingles (secundarios)
   - **Numero de fases** en el workflow
   - **Sub-archivos**: que va en frameworks/, templates/, patterns/
3. Decidir si es un plugin nuevo o extiende uno existente
4. Definir nombre del plugin (kebab-case)

### Presentar al usuario

```
## Arquitectura Propuesta

**Plugin**: [nombre-del-plugin]
**Descripcion**: [1 linea]
**Extiende plugin existente**: [Si: cual / No: plugin nuevo]

### Componentes

| Framework | Componente | Tipo | Triggers (ES) | Triggers (EN) | Fases |
|-----------|-----------|------|----------------|----------------|-------|
| [nombre] | [nombre-skill] | skill | [...] | [...] | [N] |
| [nombre] | /[nombre-cmd] | command | — | — | [N] |
| [nombre] | [nombre-agent] | agent | — | — | [N] |

### Estructura de archivos

plugins/[nombre-del-plugin]/
  .claude-plugin/plugin.json
  README.md
  skills/
    [skill-name]/
      SKILL.md
      frameworks/[...].md
      templates/[...].md
      patterns/[...].md
  commands/
    [command].md
  agents/
    [agent].md

### Cross-references
- [skill X] referencia [framework Y]
- [command Z] orquesta [agent W]
```

### Checkpoint con usuario

Preguntar:
- "La estructura te parece bien?"
- "Quieres cambiar algun mapping? (ej: convertir un skill en command, renombrar algo)"
- "Nombre del plugin ok?"

**Esperar confirmacion antes de continuar a Fase 4.**

---

## Fase 4: Generacion

**Objetivo**: Generar todos los archivos del plugin siguiendo las convenciones exactas del marketplace.

### Instrucciones

1. Consultar `references/generation_templates.md` para los templates exactos
2. Generar cada archivo usando las convenciones del growth-marketplace:

   **plugin.json**: name, version (1.0.0), description, author (AI Huevos), keywords

   **SKILL.md**: YAML frontmatter (name, description con triggers, version), secciones:
   - Cuando usar este skill
   - Proceso (pasos numerados con tablas PULSO-style donde aplique)
   - Referencias a frameworks/, templates/, patterns/
   - Ejemplo real (si hay datos del repo fuente)
   - Template (referencia al template worksheet)

   **command.md**: YAML frontmatter (description, argument-hint, allowed-tools), secciones:
   - Instrucciones (workshop interactivo con fases)
   - Cada fase con preguntas al usuario
   - "Espera las respuestas antes de continuar"
   - Output final con template reference
   - Tono y estilo

   **agent.md**: secciones:
   - Proposito
   - Cuando se activa
   - Inputs requeridos (tabla: Input, Descripcion, Obligatorio)
   - Protocolo de ejecucion (pasos numerados)
   - Outputs (tabla: Output, Formato, Destino)
   - Quality Gate (tabla: Criterio, Check)

   **README.md**: Skills table, Commands table, Instalacion

   **frameworks/*.md, templates/*.md, patterns/*.md**: contenido extraido del repo fuente, adaptado a formato marketplace

3. Todo el contenido en espanol
4. Usar `$ARGUMENTS` en commands para input del usuario

### Presentar al usuario

```
## Archivos a generar

[tree de archivos con tamano estimado]

### Preview de archivos clave

#### plugin.json
[contenido completo]

#### skills/[nombre]/SKILL.md
[primeras 30 lineas]

#### commands/[nombre].md
[primeras 20 lineas]
```

### Checkpoint con usuario

Preguntar:
- "Revisa los previews. Quieres ajustar algo antes de que escriba los archivos?"
- "El tono y nivel de detalle estan bien?"

**Esperar confirmacion antes de escribir archivos.**

---

## Fase 5: Integracion

**Objetivo**: Escribir los archivos al marketplace y sugerir pasos de integracion.

### Instrucciones

1. Escribir todos los archivos generados en `plugins/[nombre-del-plugin]/` dentro del growth-marketplace
2. Verificar la estructura contra un plugin existente (ej: growth-foundations) para asegurar consistencia
3. Sugerir creacion de documento second-brain:
   - Nombre: `docs/second-brain/NN-plugin-[nombre].md` (siguiente numero disponible)
   - Contenido: overview del plugin, skills, commands, agents, metodologias extraidas
4. Sugerir push a NotebookLM:
   ```bash
   nlm source add second-brain --file docs/second-brain/NN-plugin-[nombre].md --title "NN-plugin-[nombre].md" --wait
   ```
5. Sugerir git commit

### Presentar al usuario

```
## Resumen de integracion

### Archivos creados
- [lista de archivos con path completo]

### Proximos pasos sugeridos
1. [ ] Revisar archivos generados en plugins/[nombre]/
2. [ ] Crear doc second-brain: docs/second-brain/NN-plugin-[nombre].md
3. [ ] Push a NotebookLM: nlm source add second-brain --file ...
4. [ ] Git commit: git add plugins/[nombre]/ && git commit -m "feat([nombre]): add [nombre] plugin"
5. [ ] Probar el plugin: ejecutar /[command] o hablar sobre el tema para activar el skill
```

---

## Notas de implementacion

- **Interactividad**: Cada fase tiene un checkpoint obligatorio. NO avanzar sin confirmacion del usuario.
- **Idempotencia**: Si el usuario corre el factory de nuevo sobre el mismo repo, detectar plugins existentes y ofrecer actualizar vs crear nuevo.
- **Calidad**: Los archivos generados deben ser indistinguibles de los plugins escritos a mano. Verificar contra `plugins/growth-foundations/` como referencia dorada.
- **Scope**: Un run del factory genera UN plugin. Si el repo tiene frameworks para multiples plugins, sugerir runs separados.

## Archivos de referencia

- `references/reconnaissance_prompts.md` — Indicadores de tipo de repo y mapeo de estructura
- `references/framework_extraction_patterns.md` — Que buscar y como categorizar frameworks
- `references/plugin_architecture_guide.md` — Decision matrix: skill vs command vs agent
- `references/generation_templates.md` — Templates exactos para cada tipo de archivo
