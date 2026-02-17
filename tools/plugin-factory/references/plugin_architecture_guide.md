# Plugin Architecture Guide — Fase 3

Guia para mapear frameworks descubiertos a componentes del growth-marketplace (skills, commands, agents).

---

## Decision Matrix: Skill vs Command vs Agent

### Skill
**Definicion**: Conocimiento que se activa automaticamente por contexto. El usuario habla sobre un tema y Claude activa el skill.

**Usar cuando**:
- El framework es conocimiento de referencia (metodologias, scoring models, best practices)
- El usuario podria activarlo sin saberlo (habla de "ICP" y el skill de ICP se activa)
- La interaccion es conversacional, no una ejecucion estructurada
- El framework tiene multiples usos posibles (no un solo workflow)

**No usar cuando**:
- Requiere un workflow estructurado con fases obligatorias
- Necesita inputs especificos del usuario antes de empezar
- Es un proceso autonomo que corre sin intervencion

**Estructura del archivo**:
```
SKILL.md con:
- YAML frontmatter: name, description (con triggers), version
- Cuando usar este skill
- Proceso (pasos con tablas, frameworks)
- Referencias a sub-archivos
- Ejemplo real
- Template reference
```

### Command
**Definicion**: Workflow interactivo invocado explicitamente con `/nombre`. El usuario decide cuando ejecutarlo.

**Usar cuando**:
- El framework tiene un workflow estructurado con fases definidas
- Requiere inputs del usuario al inicio ($ARGUMENTS)
- Es un workshop interactivo (preguntas → respuestas → output)
- El output es un deliverable concreto (documento, analisis, plan)
- El usuario quiere control explicito de cuando lo ejecuta

**No usar cuando**:
- Es solo conocimiento de referencia sin workflow
- No requiere inputs del usuario
- Es un proceso autonomo sin interaccion

**Estructura del archivo**:
```
command.md con:
- YAML frontmatter: description, argument-hint, allowed-tools
- Instrucciones (workshop interactivo)
- Fases con preguntas al usuario
- "Espera las respuestas antes de continuar"
- Output final con template reference
- Tono y estilo
```

### Agent
**Definicion**: Proceso autonomo con inputs/outputs definidos. Ejecutado por commands o por otros agents.

**Usar cuando**:
- El framework es un proceso autonomo con inputs y outputs claros
- Forma parte de un pipeline mas grande (agent 1 → agent 2 → agent 3)
- No requiere interaccion con el usuario durante la ejecucion
- Tiene quality gates verificables
- Es orquestado por un command (ej: /copy orquesta 4 agents)

**No usar cuando**:
- Requiere interaccion frecuente con el usuario
- Es conocimiento de referencia sin ejecucion
- No tiene inputs/outputs definidos

**Estructura del archivo**:
```
agent.md con:
- Proposito
- Cuando se activa
- Inputs requeridos (tabla)
- Protocolo de ejecucion (pasos numerados)
- Outputs (tabla)
- Quality Gate (tabla)
```

---

## Decision Flowchart

```
¿El framework es conocimiento de referencia?
├── SI → ¿Tiene un workflow estructurado con fases?
│         ├── SI → Crear SKILL + COMMAND
│         │        (skill para activacion por contexto,
│         │         command para ejecucion explicita)
│         └── NO → Solo SKILL
└── NO → ¿Es un proceso autonomo sin interaccion?
          ├── SI → AGENT (orquestado por un command)
          └── NO → COMMAND (workflow interactivo)
```

**Nota**: Un framework complejo puede generar multiples componentes. Ejemplo:
- PULSO genera: 1 skill (referencia), 1 command (/discovery), 1 agent (sdr-agent)
- Esto es normal y deseable — cada componente tiene un rol distinto.

---

## Plugin Scoping: Nuevo vs Existente

### Crear plugin nuevo cuando:
- Los frameworks descubiertos forman un dominio coherente nuevo
- No encajan en ningun plugin existente (growth-foundations, sales-blueprint, copywriting-engine)
- Son suficientes para justificar un plugin independiente (2+ skills o 1 skill + 1 command minimo)

### Extender plugin existente cuando:
- El framework es claramente del dominio de un plugin existente
- Complementa skills/commands existentes
- Comparte la misma audiencia y caso de uso

### Referencia de plugins existentes:

| Plugin | Dominio | Extiende si el framework trata de... |
|--------|---------|--------------------------------------|
| growth-foundations | ICP, positioning, competencia, diagnostico | Segmentacion, calificacion de mercado, propuesta de valor |
| sales-blueprint | Discovery, pipeline, proposals, coaching | Ventas, negociacion, pipeline management, qualification |
| copywriting-engine | Headlines, emails, landing pages, triggers | Copy, messaging, content creation, persuasion |

---

## Trigger Keyword Strategy

### Reglas para triggers

1. **Espanol primario**: Los triggers principales son en espanol
2. **Ingles secundario**: Incluir equivalentes en ingles para usuarios bilingues
3. **Variaciones comunes**: Incluir sinonimos y formas alternativas
4. **Especificidad**: Los triggers deben ser lo suficientemente especificos para evitar falsos positivos

### Patron de triggers

```yaml
description: |
  [Descripcion del skill]. Activates for [trigger1], [trigger2], [trigger3], ...
```

### Ejemplos de buenos triggers

| Skill | Triggers ES | Triggers EN |
|-------|-------------|-------------|
| ICP Analysis | "perfil de cliente ideal", "segmentacion", "calificacion de cuentas" | "ICP", "ideal customer profile", "target market" |
| Pipeline | "pipeline de ventas", "forecast", "salud del pipeline" | "sales pipeline", "pipeline health", "deal velocity" |
| Copy | "escribir copy", "headline", "email sequence" | "copywriting", "sales copy", "landing page copy" |

### Anti-patterns de triggers

- Muy genericos: "ventas", "marketing", "ayuda" (se activan demasiado)
- Muy especificos: "calcular score ICP dimension 3" (nadie lo dice asi)
- Solo ingles: contradice la filosofia Spanish-first
- Duplicados con otro skill: causa conflicto de activacion

---

## Cross-Reference Planning

### Que va en cada directorio

| Directorio | Contenido | Cuando crear |
|------------|-----------|-------------|
| `frameworks/` | Metodologias de referencia, modelos teoricos, rubrics | Cuando el skill referencia una metodologia con detalle |
| `templates/` | Worksheets, formatos de output, plantillas rellenables | Cuando el skill genera un deliverable estructurado |
| `patterns/` | Colecciones de ejemplos, formulas, recetas reutilizables | Cuando hay una libreria de patrones reutilizables |
| `examples/` | Casos reales, demos, walkthroughs | Cuando hay ejemplos concretos que ilustran el uso |

### Reglas de cross-reference

1. Skills referencian sus propios sub-directorios: `frameworks/`, `templates/`, `patterns/`
2. Commands referencian skills del mismo plugin: `skills/[skill-name]/frameworks/...`
3. Agents referencian otros agents (pipeline): "Output → [Next Agent]"
4. README lista todos los skills y commands con sus triggers

---

## Naming Conventions

### Directorios y archivos
- **Plugin name**: kebab-case, descriptivo (`sales-blueprint`, no `sb` o `sales`)
- **Skill name**: kebab-case, accion o dominio (`icp-analysis`, `competitive-analysis`)
- **Command name**: kebab-case, verbo o sustantivo corto (`discovery`, `pipeline`, `copy`)
- **Agent name**: kebab-case, rol descriptivo (`research-agent`, `deal-strategist`)
- **Framework files**: kebab-case, topic (`scoring-model.md`, `interview-guide.md`)
- **Template files**: kebab-case, tipo de output (`icp-worksheet.md`, `proposal-template.md`)

### Contenido
- Titulos en espanol: "Workshop de ICP", "Analisis Competitivo"
- Secciones estandar en espanol: "Cuando usar", "Proceso", "Ejemplo real"
- Tablas con headers en espanol o ingles segun el contexto tecnico
- PULSO dimensions siempre en ingles (es el nombre propio del framework)
