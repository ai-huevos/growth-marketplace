# Reconnaissance Prompts — Fase 1

Guia para analizar y clasificar un repositorio local antes de extraer frameworks.

---

## Indicadores de tipo de repositorio

### Repo de contenido (Content)

**Senales fuertes**:
- 60%+ de archivos son `.md`, `.txt`, `.rst`, `.adoc`
- Directorio `docs/`, `playbooks/`, `guides/`, `runbooks/`, `sops/`
- No existe `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`, `Makefile` con targets de build
- No existe directorio `src/`, `lib/`, `app/`
- README extenso con tabla de contenidos
- Archivos con YAML frontmatter (indica CMS, wiki, o skill system)

**Senales debiles**:
- Archivos de configuracion minimos (solo `.gitignore`, `LICENSE`)
- Imagenes/diagramas en `assets/` o `images/`
- Estructura plana o por carpetas tematicas

### Repo de codigo (Code)

**Senales fuertes**:
- `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`, `pom.xml`, `Gemfile`
- Directorio `src/`, `lib/`, `app/`, `pkg/`
- Archivos de test: `test/`, `tests/`, `__tests__/`, `spec/`, archivos `*_test.*`, `*.spec.*`
- Archivos de config: `tsconfig.json`, `setup.py`, `pyproject.toml`, `.eslintrc`
- CI/CD: `.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile`
- `Dockerfile`, `docker-compose.yml`

**Senales debiles**:
- Lock files: `package-lock.json`, `yarn.lock`, `poetry.lock`
- Directorio `node_modules/`, `venv/`, `.venv/`, `vendor/`
- Archivos binarios o compilados

### Repo hibrido (Hybrid)

- Tiene tanto `docs/` extenso como `src/` con codigo real
- README documenta tanto uso como API/configuracion
- Tiene tanto archivos `.md` con frameworks como codigo que los implementa
- Ejemplo tipico: herramientas con documentacion rica, frameworks con implementacion de referencia

---

## Archivos a leer primero (por prioridad)

### 1. Archivos de overview (leer SIEMPRE)
- `README.md` (raiz)
- `CLAUDE.md` (si existe — contiene convenciones del proyecto)
- `docs/README.md` o `docs/index.md`
- `TABLE_OF_CONTENTS.md` o `SUMMARY.md`
- `CONTRIBUTING.md` (revela estructura del proyecto)

### 2. Archivos de configuracion (leer para entender stack)
- `package.json` → scripts, dependencies (revelan que hace el proyecto)
- `requirements.txt` / `pyproject.toml` → dependencias Python
- `.claude-plugin/plugin.json` → si ya es un plugin del marketplace
- `manifest.json`, `config.yaml`, `settings.json`

### 3. Archivos de indice (leer para mapear contenido)
- Cualquier archivo que liste/referencie otros archivos
- `docs/` — primer nivel de archivos
- `skills/`, `agents/`, `commands/` — si existe estructura de plugin
- `templates/`, `playbooks/`, `frameworks/` — contenido extraible

### 4. Entry points (leer para entender logica principal)
- `src/index.*`, `src/main.*`, `app.*`
- `cli.*`, `__main__.py`
- Archivos con mas imports/requires (hubs del codigo)

---

## Template de mapeo de estructura

Al analizar un repo, capturar esta informacion:

```
### Metadata del repositorio
- **Path**: [path absoluto]
- **Nombre**: [nombre del directorio]
- **Tipo**: [Content / Code / Hybrid]
- **Git**: [si/no, branch actual, commits recientes]

### Conteo de archivos
| Extension | Cantidad | Porcentaje |
|-----------|----------|------------|
| .md | [N] | [X]% |
| .py | [N] | [X]% |
| .ts/.js | [N] | [X]% |
| .json | [N] | [X]% |
| otros | [N] | [X]% |
| **Total** | **[N]** | **100%** |

### Directorios clave
| Directorio | Contenido | Relevancia para extraccion |
|------------|-----------|---------------------------|
| [dir/] | [que contiene] | [Alta/Media/Baja] |

### Archivos clave (top 10)
| Archivo | Tipo | Contenido | Prioridad de lectura |
|---------|------|-----------|---------------------|
| [archivo] | [md/py/ts/...] | [resumen] | [1-10] |

### Stack tecnologico (solo para Code/Hybrid)
- Lenguaje principal: [X]
- Framework: [X]
- Dependencias clave: [lista]
- Build system: [X]
- Tests: [si/no, framework]

### Areas de interes para extraccion
1. [Area] — [por que parece tener frameworks extraibles]
2. [Area] — [por que parece tener frameworks extraibles]
```

---

## Heuristicas de profundidad de analisis

| Tamano del repo | Archivos | Estrategia |
|-----------------|----------|------------|
| Pequeno | <50 | Leer todo lo relevante, mapeo completo |
| Mediano | 50-200 | Leer indices + top 20 archivos, scan selectivo |
| Grande | 200-1000 | Leer indices + READMEs por directorio, scan por keywords |
| Muy grande | >1000 | Solo indices y READMEs, busqueda por keywords especificos |

### Keywords para busqueda en repos grandes

Buscar estos terminos para encontrar frameworks rapidamente:
- `framework`, `methodology`, `scoring`, `model`, `workflow`
- `steps`, `phases`, `stages`, `process`, `pipeline`
- `checklist`, `playbook`, `template`, `rubric`, `matrix`
- `decision`, `criteria`, `rules`, `validation`, `evaluation`
- `tier`, `score`, `weight`, `threshold`, `scale`
- `guide`, `handbook`, `manual`, `sop`, `runbook`
