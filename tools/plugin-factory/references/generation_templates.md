# Generation Templates — Fase 4

Templates exactos para cada tipo de archivo generado por el Plugin Factory. Estos templates replican las convenciones del growth-marketplace tal cual existen en los plugins actuales.

**Referencia dorada**: `plugins/growth-foundations/` — todo archivo generado debe ser estructuralmente indistinguible de los archivos en ese plugin.

---

## 1. plugin.json

Ubicacion: `plugins/[plugin-name]/.claude-plugin/plugin.json`

```json
{
  "name": "[plugin-name]",
  "version": "1.0.0",
  "description": "[Descripcion en ingles, 1-2 oraciones. Describe que hace el plugin y para quien.]",
  "author": {
    "name": "AI Huevos",
    "email": "hola@huevos.ai",
    "url": "https://huevos.ai"
  },
  "repository": "https://github.com/ai-huevos/growth-marketplace",
  "homepage": "https://huevos.ai",
  "license": "MIT",
  "keywords": ["[keyword1]", "[keyword2]", "[keyword3]", "spanish"]
}
```

**Reglas**:
- `name`: kebab-case, mismo nombre que el directorio del plugin
- `version`: siempre empezar en `1.0.0`
- `description`: en ingles (para el marketplace), concisa, terminar con periodo
- `keywords`: incluir siempre "spanish", agregar 3-6 keywords relevantes en ingles
- `author`: siempre AI Huevos con los datos exactos mostrados arriba

---

## 2. SKILL.md

Ubicacion: `plugins/[plugin-name]/skills/[skill-name]/SKILL.md`

```markdown
---
name: [skill-name]
description: Use when [contexto de activacion en ingles]. Activates for "[trigger1]", "[trigger2]", "[trigger3]", "[trigger4-es]", "[trigger5-en]".
version: 1.0.0
---

# [Nombre del Skill]

[1-2 oraciones describiendo el skill y su base metodologica. En espanol.]

## Cuando usar este skill

- [Situacion 1 en que se activa]
- [Situacion 2 en que se activa]
- [Situacion 3 en que se activa]
- [Situacion 4 en que se activa]

## Proceso de [Nombre]

### Paso 1: [Nombre del paso]

[Descripcion de que hacer en este paso]

| [Dimension/Criterio] | [Pregunta/Descripcion] |
|----------------------|----------------------|
| **[Item 1]** | [Detalle] |
| **[Item 2]** | [Detalle] |
| **[Item 3]** | [Detalle] |

### Paso 2: [Nombre del paso]

[Descripcion con tablas, listas, o instrucciones segun aplique]

| Criterio | Datos a recopilar | Peso sugerido |
|----------|-------------------|---------------|
| [Criterio 1] | [Que recopilar] | [X]% |
| [Criterio 2] | [Que recopilar] | [X]% |

### Paso 3: [Nombre del paso]

[Instrucciones con preguntas guia si aplica]

1. "[Pregunta 1]"
2. "[Pregunta 2]"
3. "[Pregunta 3]"

Para la guia completa, leer `frameworks/[nombre-framework].md`.

### Paso 4: [Nombre del paso — Documentar/Output]

Generar documento con esta estructura:

```
## [Titulo del output]: [Variable]

### [Seccion 1]
- [Campo]: [valor]
- [Campo]: [valor]

### [Seccion 2]
[Contenido estructurado]

### [Seccion 3]
1. [Item A] — Score: X/100
2. [Item B] — Score: X/100
```

### Paso 5: [Scoring/Evaluacion — si aplica]

Para el modelo de scoring completo, leer `frameworks/[scoring-model].md`.

Resumen del scoring:

| Categoria | Score | Peso |
|-----------|-------|------|
| [Cat 1] | 0-[max] | [X]% |
| [Cat 2] | 0-[max] | [X]% |
| **Total** | **0-[total]** | **100%** |

**Clasificacion**:
- [rango alto]: [Tier 1 — descripcion]
- [rango medio-alto]: [Tier 2 — descripcion]
- [rango medio]: [Tier 3 — descripcion]
- [rango bajo]: [No califica — descripcion]

## Ejemplo real

[1 parrafo con un ejemplo concreto de uso del framework, idealmente con resultado cuantificado]

## Template

Para el template completo que Claude puede llenar con el usuario, leer `templates/[template-name].md`.
```

**Reglas**:
- YAML frontmatter: `name` en kebab-case, `description` en ingles con triggers entre comillas
- Contenido del body: todo en espanol
- Tablas estilo PULSO: dimension en bold en primera columna
- Cross-references: siempre con path relativo (`frameworks/`, `templates/`)
- Scoring: incluir tabla resumen + clasificacion con tiers
- Pasos numerados: "Paso 1:", "Paso 2:", etc. (no "Phase" ni "Step")

---

## 3. command.md

Ubicacion: `plugins/[plugin-name]/commands/[command-name].md`

```markdown
---
description: [Descripcion en espanol, 1-2 oraciones. Que hace el command y que output genera.]
argument-hint: [pista de que poner como argumento, entre corchetes]
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# [Titulo del Workshop/Proceso]

El usuario quiere [accion principal] para: $ARGUMENTS

## Instrucciones

Este es un workshop **interactivo**. No generes todo de una vez — guia al usuario paso a paso, haciendole preguntas y construyendo el [output] juntos.

### Fase 1: [Nombre] ([N] preguntas al usuario)

[Contexto de por que esta fase es necesaria]

1. "[Pregunta 1]" ([que revela esta pregunta])
2. "[Pregunta 2]" ([que revela esta pregunta])
3. "[Pregunta 3]" ([que revela esta pregunta])

**Espera las respuestas antes de continuar.**

### Fase 2: [Nombre] ([N] preguntas al usuario)

[Contexto]

4. **[Dimension/Tema]**: "[Pregunta]"
5. **[Dimension/Tema]**: "[Pregunta]"
6. **[Dimension/Tema]**: "[Pregunta]"

**Espera las respuestas. Sintetiza lo que escuchas antes de continuar.**

### Fase 3: [Nombre — Analisis/Propuesta]

Con las respuestas de Fase 1 y 2, [proponer/analizar/evaluar]:

Presenta una tabla con [criterios/resultados] y pide confirmacion/ajuste:

| [Criterio] | [Valor sugerido] | [Peso/Prioridad] |
|-------------|-----------------|-------------------|
| [Item 1] | [basado en respuestas] | [X]% |
| [Item 2] | [basado en respuestas] | [X]% |

"[Pregunta de confirmacion]?"

### Fase 4: [Nombre — Profundizacion/Contexto adicional]

[Instrucciones para recopilar contexto adicional]

Documentar [hallazgos/criterios/insights].

### Fase 5: [Nombre — Output final]

Usar el [scoring model / template / framework] del skill `[skill-name]` (leer `skills/[skill-name]/frameworks/[file].md` si necesitas los detalles).

[Instrucciones para generar el output]

### Fase 6: Output final

Generar un documento completo usando el template en `skills/[skill-name]/templates/[template].md`.

El documento debe incluir:
1. [Seccion 1]
2. [Seccion 2]
3. [Seccion 3]
4. [Seccion 4]
5. [Seccion 5]

### Tono y estilo

- Se conversacional — esto es un workshop, no un examen
- Sintetiza las respuestas del usuario antes de pasar al siguiente paso
- Ofrece ejemplos cuando el usuario dude
- Si el usuario no tiene datos, ayudalo a estimar basandose en su experiencia
- Al final, resume todo en un documento limpio y accionable
```

**Reglas**:
- YAML frontmatter: `description` en espanol, `argument-hint` entre corchetes, `allowed-tools` como array
- `$ARGUMENTS`: placeholder obligatorio para el input del usuario
- Fases numeradas con preguntas numeradas secuencialmente a traves de todas las fases
- "**Espera las respuestas antes de continuar.**" despues de cada fase con preguntas
- Tono y estilo al final: siempre incluir estas 5 directivas
- Cross-references a skills del mismo plugin con paths relativos

---

## 4. agent.md

Ubicacion: `plugins/[plugin-name]/agents/[agent-name].md`

```markdown
# [Agent Name] — [Fase N: Descripcion corta]

[1-2 oraciones describiendo que hace el agente y su rol en el pipeline.]

## Proposito

[Parrafo describiendo el proposito principal del agente. Que hace, por que existe, y que pasa si no se ejecuta.]

## Cuando se activa

- [Trigger 1 — cuando en el pipeline se activa]
- [Trigger 2 — contexto alternativo]
- [Trigger 3 — contexto alternativo]

## Inputs requeridos

| Input | Descripcion | Obligatorio |
|-------|-------------|-------------|
| `[input_1]` | [Que es y de donde viene] | Si |
| `[input_2]` | [Que es y de donde viene] | Si |
| `[input_3]` | [Que es y de donde viene] | Si |
| `[input_4]` | [Que es y de donde viene] | No |
| `[input_5]` | [Que es y de donde viene] | No |

## Protocolo de ejecucion

### 1. [Paso — Definir/Preparar/Configurar]

[Instrucciones detalladas para este paso]

| [Dimension] | [Detalle] | [Criterio] |
|-------------|-----------|------------|
| [Item 1] | [Descripcion] | [Valor] |
| [Item 2] | [Descripcion] | [Valor] |

### 2. [Paso — Investigar/Analizar/Procesar]

[Instrucciones con sub-secciones si necesario]

**[Sub-seccion A]**:
- [Punto 1]
- [Punto 2]
- [Punto 3]

**[Sub-seccion B]**:
- [Punto 1]
- [Punto 2]
- [Punto 3]

### 3. [Paso — Evaluar/Sintetizar]

[Instrucciones]

### 4. [Paso — Identificar/Categorizar]

| [Criterio] | [Medicion] | [Resultado esperado] |
|------------|------------|---------------------|
| [Item 1] | [Escala] | [Formato de output] |
| [Item 2] | [Escala] | [Formato de output] |

## Outputs

| Output | Formato | Destino |
|--------|---------|---------|
| `[output_1]` | [Tipo de formato] | [Siguiente agente o usuario] |
| `[output_2]` | [Tipo de formato] | [Siguiente agente o usuario] |
| `[output_3]` | [Tipo de formato] | [Todos los agentes / Usuario] |

## Quality Gate

Antes de pasar al [siguiente agente / usuario], verificar:

| Criterio | Check |
|----------|-------|
| **Completeness** | [Pregunta de verificacion de completitud] |
| **Accuracy** | [Pregunta de verificacion de precision] |
| **Relevance** | [Pregunta de verificacion de relevancia] |
| **Timeliness** | [Pregunta de verificacion de actualidad — si aplica] |
| **Depth** | [Pregunta de verificacion de profundidad] |
```

**Reglas**:
- Sin YAML frontmatter (los agents no tienen frontmatter en el marketplace actual)
- Titulo: `# [Nombre] — [Fase N: descripcion]`
- Inputs y Outputs como tablas con `code` formatting para nombres de variables
- Quality Gate siempre al final, con tabla de criterios
- Protocolo: pasos numerados con `### N.` (no "Paso N")
- Destino de outputs: indicar siguiente agente en el pipeline o "Usuario"

---

## 5. README.md

Ubicacion: `plugins/[plugin-name]/README.md`

```markdown
# [plugin-name]

[1 oracion describiendo el plugin. En espanol.] Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### [skill-name-1]
[2-3 oraciones describiendo el skill, su metodologia base, y que output genera.]

**Triggers**: "[trigger1]", "[trigger2]", "[trigger3]", "[trigger4]", "[trigger5]"

### [skill-name-2]
[2-3 oraciones]

**Triggers**: "[trigger1]", "[trigger2]", "[trigger3]"

## Commands

### /[command-1]
[2-3 oraciones describiendo el command, su workflow, y que output genera.]

```
/[command-1] [argumento de ejemplo]
```

### /[command-2]
[2-3 oraciones]

```
/[command-2] [argumento de ejemplo]
```

## Instalacion

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install [plugin-name]@growth-marketplace
```
```

**Reglas**:
- Titulo: nombre del plugin en kebab-case (como H1)
- Descripcion: 1 linea en espanol, linkeando al marketplace
- Skills con triggers en **bold** label
- Commands con ejemplo de uso en code block
- Instalacion: siempre incluir ambos comandos (marketplace add + plugin install)

---

## 6. framework.md (archivo de referencia metodologica)

Ubicacion: `plugins/[plugin-name]/skills/[skill-name]/frameworks/[framework-name].md`

```markdown
# [Nombre del Framework]

## Descripcion

[1-2 parrafos explicando el framework, su origen, y cuando aplicarlo.]

## Dimensiones / Componentes / Fases

### [Dimension 1]: [Nombre]

**Definicion**: [Que es esta dimension]
**Preguntas clave**:
- [Pregunta 1]
- [Pregunta 2]
**Indicadores**: [Que senales buscar]

### [Dimension 2]: [Nombre]

[Mismo formato]

## Modelo de aplicacion

[Como usar el framework en la practica — pasos concretos]

## Ejemplo

[Ejemplo concreto de aplicacion con datos reales o realistas]
```

---

## 7. template.md (worksheet/output rellenable)

Ubicacion: `plugins/[plugin-name]/skills/[skill-name]/templates/[template-name].md`

```markdown
# [Nombre del Template]

Template para [que genera]. Llenar con el usuario durante el workshop.

---

## [Seccion 1]: [Nombre]

### [Sub-seccion]
- **[Campo 1]**: [instruccion de que poner]
- **[Campo 2]**: [instruccion de que poner]
- **[Campo 3]**: [instruccion de que poner]

### [Sub-seccion]
| [Criterio] | [Valor] | [Notas] |
|------------|---------|---------|
| [Item] | [___] | [instruccion] |

## [Seccion 2]: [Nombre]

[Estructura del output esperado con placeholders]

## [Seccion 3]: [Nombre]

1. [Item con placeholder]
2. [Item con placeholder]
3. [Item con placeholder]

---

## Proximos pasos

- [ ] [Accion 1]
- [ ] [Accion 2]
- [ ] [Accion 3]
```

---

## 8. pattern.md (libreria de patrones reutilizables)

Ubicacion: `plugins/[plugin-name]/skills/[skill-name]/patterns/[pattern-name].md`

```markdown
# [Nombre de la Pattern Library]

Coleccion de [tipo de patrones] para [caso de uso]. Usar como referencia durante [actividad].

---

## Categoria: [Nombre]

### Patron: [Nombre descriptivo]
**Formula**: [Patron con variables entre corchetes]
**Ejemplo**: [Ejemplo concreto]
**Cuando usar**: [Contexto ideal]

### Patron: [Nombre descriptivo]
**Formula**: [Patron]
**Ejemplo**: [Ejemplo]
**Cuando usar**: [Contexto]

## Categoria: [Nombre]

### Patron: [Nombre descriptivo]
**Formula**: [Patron]
**Ejemplo**: [Ejemplo]
**Cuando usar**: [Contexto]

---

## Tips de uso

- [Consejo 1 para elegir el patron correcto]
- [Consejo 2 para adaptar patrones]
- [Consejo 3 para combinar patrones]
```

---

## Checklist de generacion

Antes de presentar archivos al usuario, verificar:

- [ ] `plugin.json` tiene todos los campos requeridos con datos correctos de AI Huevos
- [ ] Todos los `SKILL.md` tienen YAML frontmatter con name, description (con triggers), version
- [ ] Todos los `command.md` tienen YAML frontmatter con description, argument-hint, allowed-tools
- [ ] Todos los `agent.md` tienen Proposito, Inputs, Protocolo, Outputs, Quality Gate
- [ ] `README.md` lista todos los skills con triggers y todos los commands con ejemplo
- [ ] Todos los cross-references usan paths relativos correctos
- [ ] Todo el contenido esta en espanol (excepto YAML frontmatter descriptions y triggers)
- [ ] `$ARGUMENTS` presente en commands
- [ ] "Espera las respuestas antes de continuar" presente en cada fase interactiva
- [ ] Scoring models tienen tabla resumen + clasificacion con tiers
- [ ] Estructura de directorios sigue el patron: `skills/[name]/SKILL.md`, `skills/[name]/frameworks/`, etc.
- [ ] Keywords en `plugin.json` incluyen "spanish"
