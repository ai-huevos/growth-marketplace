# Brand Export Pipeline

> Pipeline genérico para generar contenido branded desde NotebookLM
> hacia entregables profesionales. Agnóstico de marca — cada cliente
> configura su voz, prompts y assets en `clients/<client>/`.

**Versión:** 1.0.0
**Fecha:** 2026-02-16

---

## 1. Arquitectura

### Separación engine vs. cliente

```
growth-marketplace/              ← ENGINE (genérico)
  plugins/                       ← Metodologías (PULSO, PlainIQ, etc.)
  tools/                         ← Meta-tools
  docs/second-brain/             ← Conocimiento del sistema
  scripts/                       ← Utilidades

  clients/<client>/              ← CLIENTE (específico)
    brand-config/
      brand-voice.md             ← Reglas de voz y vocabulario
      nlm-prompts.md             ← Prompt templates para NLM
      brand-qa-checklist.md      ← Criterios de validación
    exports/                     ← Contenido exportado
      YYYY-MM-DD-<slug>/
        raw/                     ← NLM output sin branding
        branded/                 ← Output con marca aplicada
        metadata.md              ← Trazabilidad
    nlm-sources/                 ← Fuentes específicas del cliente
```

### Principio: El pipeline es genérico, la marca es del cliente

El marketplace provee:
- El comando `/brand-export`
- La estructura de directorios
- El pipeline NLM → download → brand → validate → export
- El template de metadata

El cliente provee:
- Su `brand-voice.md` (voz, vocabulario, estructura narrativa)
- Sus `nlm-prompts.md` (prompt templates por tipo de artifact y audiencia)
- Su skill de marca (colores, tipografía, logos, tokens)
- Su `brand-qa-checklist.md` (criterios de aprobación)

---

## 2. Pipeline: NLM → Branded Export

### Flujo Completo

```
┌─────────────────────────────────────┐
│  1. GENERATE (NLM)                  │
│     nlm <artifact> create           │
│     + prompt template del cliente   │
│     → Raw content (MD/TXT/PNG)      │
├─────────────────────────────────────┤
│  2. DOWNLOAD                        │
│     nlm studio status → get ID      │
│     Download to clients/<c>/exports │
├─────────────────────────────────────┤
│  3. BRAND (brand skill del cliente) │
│     Aplica:                         │
│     - Colores (tokens)              │
│     - Tipografía                    │
│     - Logo + placement rules        │
│     - Layout patterns               │
│     → Branded HTML/PDF/PPTX         │
├─────────────────────────────────────┤
│  4. VALIDATE (brand-qa)             │
│     Ejecuta checklist del cliente   │
│     Score mínimo definido por brand │
├─────────────────────────────────────┤
│  5. EXPORT                          │
│     Guarda en branded/ + metadata   │
│     Log en execution-log            │
└─────────────────────────────────────┘
```

### Artifact Type → NLM Command Mapping

| Tipo | Comando NLM | Opciones clave |
|------|-------------|----------------|
| Report | `nlm report create <notebook> -f "Create Your Own" --prompt "..." --language <lang>` | `--source-ids` para filtrar fuentes |
| Slides | `nlm slides create <notebook> -f <format> --language <lang> --focus "..."` | `-l short\|default`, `-f detailed_deck\|presenter_slides` |
| Infographic | `nlm infographic create <notebook> -o <orient> -d <detail> --language <lang> --focus "..."` | `-o landscape\|portrait\|square`, `-d concise\|standard\|detailed` |
| Video | `nlm video create <notebook> --language <lang>` | Custom style via NLM web UI |
| Data Table | `nlm data-table create <notebook> --language <lang>` | Para inventarios y comparaciones |
| Mindmap | `nlm mindmap create <notebook> --language <lang> --focus "..."` | Para mapas de arquitectura |

### Poll + Download Pattern

```bash
# Después de crear un artifact, esperar a que complete
nlm studio status <notebook>

# Una vez completado, el artifact ID está en el output de status
```

---

## 3. Directorio de Exports

### Estructura

```
clients/<client>/exports/
  YYYY-MM-DD-<slug>/
    raw/           ← NLM output sin branding
    branded/       ← Output final con marca
    metadata.md    ← Trazabilidad completa
```

### metadata.md Template

```markdown
# Export: [slug]

- **Cliente:** [nombre del cliente]
- **Fecha:** YYYY-MM-DD
- **Tipo:** report | slides | infographic | video | data-table | mindmap
- **Audiencia:** [definida por el cliente en brand-voice.md]
- **Idioma:** es | en
- **Prompt usado:** [copiar del nlm-prompts.md del cliente]
- **Notebook:** [alias o ID]
- **Source IDs:** [IDs de NLM sources filtrados]
- **Brand QA Score:** XX/100
- **Exportado por:** [nombre]
```

---

## 4. Comando /brand-export

### Uso

```
/brand-export [tipo] [audiencia] [idioma] --client <client>

Ejemplo:
/brand-export slides c-suite es --client ai-huevos
/brand-export report operations en --client ai-huevos
/brand-export infographic executive es --client ai-huevos
```

### Pasos que ejecuta:

1. **Lee brand config** → `clients/<client>/brand-config/nlm-prompts.md`
2. **Selecciona prompt template** → según tipo + audiencia + idioma
3. **Ejecuta NLM command** → `nlm <tipo> create` con opciones correctas
4. **Poll status** → espera a que el artifact esté listo
5. **Download** → descarga a `clients/<client>/exports/<date>-<slug>/raw/`
6. **Invoca brand skill** → aplica la marca del cliente al contenido
7. **Brand QA** → valida contra `brand-qa-checklist.md` del cliente
8. **Guarda** → output final en `branded/` + genera `metadata.md`
9. **Log** → registra en `docs/execution-log.md`

---

## 5. Configuración por Cliente

### Archivos requeridos en `clients/<client>/brand-config/`

| Archivo | Contenido | Obligatorio |
|---------|-----------|-------------|
| `brand-voice.md` | Reglas de voz, vocabulario, estructura narrativa, tono por audiencia | Sí |
| `nlm-prompts.md` | Prompt templates bilingües por tipo de artifact y audiencia | Sí |
| `brand-qa-checklist.md` | Criterios de validación y score mínimo | Sí |
| `nlm-config.md` | Notebook alias, source filtering rules | Opcional |

### Cómo agregar un nuevo cliente

1. `mkdir -p clients/<client>/brand-config clients/<client>/exports clients/<client>/nlm-sources`
2. Copiar templates de `clients/_template/` (TODO: crear starter kit)
3. Llenar los 3 archivos obligatorios con la marca del cliente
4. Configurar NLM notebook alias si el cliente tiene su propio notebook

---

## Referencias

- **Ingestion orchestrator:** `tools/ingestion-orchestrator/SKILL.md`
- **Template catalog:** `docs/template-catalog.md`
- **Execution log:** `docs/execution-log.md`
- **NLM CLI reference:** ver `CLAUDE.md` §NotebookLM CLI
