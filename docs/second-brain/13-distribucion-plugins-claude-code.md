# 13 — Distribución de Plugins y Skills en Claude Code

> Documento de referencia: Investigación profunda sobre los mecanismos de distribución, instalación y descubrimiento de plugins/skills en Claude Code a febrero 2026.
> Fecha: 2026-02-15
> Fuentes: Documentación oficial Claude Code (code.claude.com), GitHub anthropics/claude-plugins-official, anthropics/skills, agentskills.io, SkillsMP, claude-plugins.dev, TechCrunch, Axios, y 20+ fuentes adicionales.

---

## Resumen Ejecutivo

1. **Sistema de plugins maduro y funcional**: Claude Code tiene un sistema completo de plugins con CLI (`/plugin install`), marketplaces (`marketplace.json`), scopes (user/project/local/managed), y auto-updates. Todo funciona HOY.
2. **Agent Skills es un estándar abierto**: Anthropic publicó la especificación en agentskills.io (diciembre 2025). OpenAI, Google, Cursor, GitHub Copilot y 10+ herramientas adoptaron el mismo formato SKILL.md.
3. **Distribución via GitHub es el canal dominante**: Los marketplaces son repositorios Git con un `marketplace.json`. No hay npm, no hay app store centralizada, no hay pagos integrados.
4. **MCP y Skills son complementarios, no competidores**: MCP conecta a datos/servicios externos. Skills enseñan a Claude QUE hacer con esos datos. Un plugin puede incluir ambos.
5. **No existe infraestructura de monetización**: No hay pagos, licencias, ni acceso restringido en el ecosistema de plugins. La monetización requiere soluciones externas.
6. **Oportunidad confirmada para growth-marketplace**: El formato plugin es exactamente lo que tenemos construido. La conversión es directa y la distribución via GitHub marketplace es inmediata.

---

## 1. Mecanismo Oficial de Instalación de Plugins

### Estado: PRODUCCION (Public Beta, v1.0.33+)

Claude Code tiene un sistema de plugins completamente funcional desde la versión 1.0.33.

### Comandos CLI Disponibles

```bash
# Instalar desde marketplace oficial
/plugin install plugin-name@claude-plugins-official

# Instalar desde marketplace de terceros
/plugin install plugin-name@marketplace-name

# Instalar con scope específico
/plugin install plugin-name@marketplace --scope project   # compartido con equipo
/plugin install plugin-name@marketplace --scope local     # solo yo, gitignored
/plugin install plugin-name@marketplace --scope user      # default, todos mis proyectos

# Gestionar plugins
/plugin list                                    # listar instalados
/plugin disable plugin-name@marketplace         # deshabilitar sin desinstalar
/plugin enable plugin-name@marketplace          # re-habilitar
/plugin uninstall plugin-name@marketplace       # eliminar

# Gestionar marketplaces
/plugin marketplace add owner/repo              # agregar marketplace de GitHub
/plugin marketplace add https://gitlab.com/co/plugins.git  # desde otro Git
/plugin marketplace add ./local-path            # desde directorio local
/plugin marketplace list                        # listar marketplaces
/plugin marketplace update marketplace-name     # actualizar catálogo
/plugin marketplace remove marketplace-name     # eliminar marketplace

# Validación
/plugin validate .                              # validar plugin/marketplace local

# Testing local
claude --plugin-dir ./my-plugin                 # cargar plugin sin instalar
```

### UI Interactiva

El comando `/plugin` abre una interfaz con 4 tabs:
- **Discover**: navegar plugins de todos los marketplaces agregados
- **Installed**: ver y gestionar plugins instalados (agrupados por scope)
- **Marketplaces**: agregar, actualizar o eliminar marketplaces
- **Errors**: ver errores de carga de plugins

### Marketplace Oficial (Pre-instalado)

El marketplace `claude-plugins-official` (repo `anthropics/claude-plugins-official`) viene pre-configurado. Contiene 29 plugins:
- **12 internos** (mantenidos por Anthropic)
- **17 externos** (partners aprobados)

Categorías disponibles:
- **Code Intelligence** (LSP): TypeScript, Python, Rust, Go, Java, Swift, PHP, C#, Kotlin, Lua, C/C++
- **External Integrations** (MCP): GitHub, GitLab, Atlassian, Asana, Linear, Notion, Figma, Vercel, Firebase, Supabase, Slack, Sentry
- **Development Workflows**: commit-commands, pr-review-toolkit, agent-sdk-dev, plugin-dev
- **Output Styles**: explanatory-output-style, learning-output-style

### Submisión al Directorio Oficial

Existe un formulario de submisión: https://clau.de/plugin-directory-submission. Los plugins externos deben cumplir estándares de calidad y seguridad para ser aprobados.

---

## 2. Estructura de Archivos y Descubrimiento

### Estructura de un Plugin

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json          # Manifiesto (REQUERIDO)
├── skills/
│   └── skill-name/
│       ├── SKILL.md          # Definición del skill (REQUERIDO)
│       ├── resources/        # Archivos de referencia opcionales
│       ├── templates/        # Templates opcionales
│       ├── examples/         # Ejemplos opcionales
│       └── scripts/          # Scripts ejecutables opcionales
├── commands/
│   └── command-name.md       # Comandos slash opcionales
├── agents/
│   └── agent-name.md         # Agentes opcionales
├── hooks/
│   └── hooks.json            # Event handlers opcionales
├── .mcp.json                 # Configuración MCP opcional
├── .lsp.json                 # Configuración LSP opcional
└── README.md                 # Documentación
```

### plugin.json (Manifiesto)

```json
{
  "name": "growth-marketplace",
  "description": "B2B growth frameworks as Claude Code skills",
  "version": "1.0.0",
  "author": {
    "name": "AI Huevos"
  },
  "homepage": "https://github.com/...",
  "repository": "https://github.com/...",
  "license": "MIT",
  "keywords": ["growth", "b2b", "sales", "marketing", "spiced"]
}
```

### SKILL.md (Definición de Skill)

```yaml
---
name: icp-scoring
description: Analiza y puntúa perfiles de cliente ideal (ICP) usando segmentación SPICED. Usar cuando se necesite evaluar fit de mercado, priorizar segmentos, o construir perfiles de cliente.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Write
---

# Instrucciones del skill aquí...
```

Campos YAML frontmatter disponibles:

| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| `name` | No | Nombre display. Si se omite, usa el nombre del directorio |
| `description` | Recomendado | Claude lo usa para decidir cuándo aplicar el skill |
| `argument-hint` | No | Hint de argumentos: `[segmento] [formato]` |
| `disable-model-invocation` | No | `true` = solo invocación manual via `/nombre` |
| `user-invocable` | No | `false` = oculto del menú `/`, solo para Claude |
| `allowed-tools` | No | Tools permitidas sin pedir permiso |
| `model` | No | Modelo específico cuando el skill está activo |
| `context` | No | `fork` = ejecutar en subagente aislado |
| `agent` | No | Tipo de subagente (`Explore`, `Plan`, `general-purpose`) |

### Mecanismo de Descubrimiento (Progressive Loading)

1. **Al inicio**: Solo se cargan name + description de todos los skills
2. **Cuando es relevante**: Claude lee SKILL.md completo
3. **Bajo demanda**: Claude lee archivos adicionales (resources/, templates/) solo cuando los necesita

### Namespacing

Skills de plugins usan prefijo: `/plugin-name:skill-name`. Esto previene conflictos entre plugins.

Ejemplo: `/growth-marketplace:icp-scoring`

### Scopes de Skills

| Ubicación | Path | Aplica a |
|-----------|------|----------|
| Enterprise | Managed settings | Todos los usuarios de la org |
| Personal | `~/.claude/skills/` | Todos mis proyectos |
| Project | `.claude/skills/` | Solo este proyecto |
| Plugin | `<plugin>/skills/` | Donde el plugin está habilitado |

### CLAUDE.md: Rol en el Ecosistema

CLAUDE.md provee contexto persistente a sesiones Claude Code. NO es el mecanismo de descubrimiento de skills. Su rol es:
- Instrucciones de proyecto, convenciones, patrones arquitectónicos
- Se carga automáticamente al iniciar sesión
- Descubrimiento descendiente: CLAUDE.md en subdirectorios se carga cuando Claude trabaja con archivos en esos directorios
- Los plugins cargan CLAUDE.md del proyecto junto con sus skills

---

## 3. Distribución via Marketplace (GitHub)

### Cómo Funciona

Un marketplace es un repositorio Git con un archivo `.claude-plugin/marketplace.json` que cataloga plugins disponibles.

### marketplace.json

```json
{
  "name": "growth-marketplace",
  "owner": {
    "name": "AI Huevos",
    "email": "contact@example.com"
  },
  "metadata": {
    "description": "B2B growth, sales, and marketing frameworks for Claude Code",
    "version": "1.0.0",
    "pluginRoot": "./plugins"
  },
  "plugins": [
    {
      "name": "growth-foundations",
      "source": "./plugins/growth-foundations",
      "description": "ICP scoring, positioning, competitive analysis, ClarQ diagnostic",
      "version": "1.0.0",
      "category": "growth",
      "tags": ["icp", "positioning", "spiced", "b2b"],
      "keywords": ["growth", "icp", "positioning", "competitive-analysis"]
    },
    {
      "name": "sales-blueprint",
      "source": "./plugins/sales-blueprint",
      "description": "Discovery calls, pipeline management, proposals, sales coaching",
      "version": "1.0.0",
      "category": "sales",
      "tags": ["sales", "pipeline", "discovery", "spiced"]
    },
    {
      "name": "copywriting-engine",
      "source": "./plugins/copywriting-engine",
      "description": "Headlines, emails, landing pages, psychological triggers",
      "version": "1.0.0",
      "category": "marketing",
      "tags": ["copywriting", "email", "landing-page", "headlines"]
    }
  ]
}
```

### Fuentes de Plugins Soportadas

```json
// Relativo al repo (para plugins en el mismo repo)
{ "source": "./plugins/my-plugin" }

// GitHub (otro repo)
{ "source": { "source": "github", "repo": "owner/repo" } }

// GitHub con versión pinned
{ "source": { "source": "github", "repo": "owner/repo", "ref": "v2.0.0" } }

// URL Git (GitLab, Bitbucket, self-hosted)
{ "source": { "source": "url", "url": "https://gitlab.com/team/plugin.git" } }
```

### Nombres Reservados (No usar)

`claude-code-marketplace`, `claude-code-plugins`, `claude-plugins-official`, `anthropic-marketplace`, `anthropic-plugins`, `agent-skills`, `life-sciences`

### Auto-updates

- Marketplaces oficiales: auto-update habilitado por defecto
- Terceros/locales: auto-update deshabilitado por defecto
- Configurable por marketplace via UI (`/plugin > Marketplaces > Enable auto-update`)

### Configuración para Equipos

Admins pueden configurar `.claude/settings.json` para auto-instalar marketplaces:

```json
{
  "extraKnownMarketplaces": {
    "growth-tools": {
      "source": {
        "source": "github",
        "repo": "your-org/growth-marketplace"
      }
    }
  },
  "enabledPlugins": {
    "growth-foundations@growth-tools": true,
    "sales-blueprint@growth-tools": true
  }
}
```

---

## 4. Agent Skills: El Estándar Abierto

### Estado: ESTANDAR ADOPTADO (Diciembre 2025)

Anthropic publicó la especificación Agent Skills como estándar abierto en agentskills.io en diciembre 2025.

### Plataformas que Adoptan el Formato SKILL.md

| Plataforma | Soporte | Path de Skills |
|-----------|---------|----------------|
| Claude Code | Nativo | `.claude/skills/` o via plugins |
| Claude.ai / Cowork | Nativo | Upload via interfaz |
| OpenAI Codex CLI | Adoptado | `~/.codex/skills/` |
| ChatGPT | Adoptado | Via interfaz |
| Cursor | Adoptado | - |
| GitHub Copilot (VS Code) | Adoptado | - |
| Google Gemini CLI | Adoptado | - |
| Goose (Block) | Adoptado | - |
| Roo Code | Adoptado | - |
| Windsurf | Adoptado | - |
| Amp | Adoptado | - |
| Trae | Adoptado | - |

### Implicación para Growth Marketplace

Nuestros skills en formato SKILL.md son **automáticamente compatibles** con 12+ plataformas AI. No estamos locked-in a Claude Code.

---

## 5. Patrones de Distribución de la Comunidad

### Canal 1: GitHub Marketplace Repos (Dominante)

La mayoría de la comunidad distribuye via repos GitHub con `marketplace.json`:

- **anthropics/claude-plugins-official**: Directorio oficial curado (29 plugins)
- **anthropics/claude-code**: Marketplace demo con plugins de ejemplo
- **anthropics/skills**: Skills oficiales + especificación del estándar
- **anthropics/knowledge-work-plugins**: Plugins para Claude Cowork
- **ivan-magda/claude-code-plugin-template**: Template GitHub para crear marketplaces
- Docenas de marketplaces individuales de la comunidad

### Canal 2: Directorios y Agregadores

- **SkillsMP.com**: 200,000+ skills indexados, cross-platform (Claude/Codex/ChatGPT)
- **claude-plugins.dev**: Registry comunitario con CLI simplificado
- **claudemarketplaces.com**: Directorio de marketplaces y plugins
- **mcpmarket.com**: Incluye sección de Agent Skills

### Canal 3: Listas Curadas (Awesome Lists)

- **hesreallyhim/awesome-claude-code**: Skills, hooks, commands, plugins, aplicaciones
- **ComposioHQ/awesome-claude-skills**: Skills y recursos
- **ComposioHQ/awesome-claude-plugins**: Plugins categorizados
- **travisvn/awesome-claude-skills**: Skills y herramientas
- **skillmatic-ai/awesome-agent-skills**: Recurso definitivo para Agent Skills

### Canal 4: Copy-Paste Manual (En Declive)

Antes del sistema de plugins, la gente compartía archivos `.md` via:
- Gists de GitHub
- Posts de blog con snippets
- Repos con instrucciones de copiar a `.claude/skills/`

Este patrón está siendo reemplazado por plugins formales, pero aún existe para skills simples de un solo archivo.

---

## 6. MCP como Canal de Distribución

### Relación MCP vs Skills

| Aspecto | MCP | Skills |
|---------|-----|--------|
| **Qué es** | Protocolo para conectar a datos/servicios externos | Instrucciones para Claude sobre qué hacer |
| **Analogía** | Sistema nervioso (conexiones) | Playbook interno (conocimiento) |
| **Ejecución** | Programática, determinista (código) | Probabilística (instrucciones al modelo) |
| **Uso** | Acceder a APIs, DBs, archivos, servicios | Workflows, metodologías, convenciones |
| **Distribución** | Via `.mcp.json` en plugins o standalone | Via `SKILL.md` en plugins o standalone |

### MCP Dentro de Plugins

Un plugin puede incluir AMBOS: skills (SKILL.md) + servidores MCP (.mcp.json). Esto es poderoso cuando:
- El skill necesita acceso a datos externos para funcionar
- La metodología requiere integración con herramientas del usuario
- Se quiere combinar instrucciones (skill) con capacidades (MCP)

### MCP Ecosystem

- 97M descargas mensuales de SDKs (Python + TypeScript)
- 10,000+ servidores activos
- Donado a Agentic AI Foundation (Linux Foundation) en diciembre 2025
- Soporte nativo en Claude, ChatGPT, Cursor, Gemini, VS Code, etc.

### Relevancia para Growth Marketplace

Para el caso de uso actual (frameworks metodológicos), **MCP no es necesario**. Los skills son instrucciones puras en Markdown. MCP sería relevante en futuras integraciones:
- Conectar a CRM para enriquecer datos ICP
- Acceder a pipelines de ventas reales
- Integrar con herramientas de email/outreach

---

## 7. Roadmap de Anthropic

### Confirmado y Disponible (Febrero 2026)

- Sistema de plugins completo con CLI, UI, marketplaces, scopes
- Agent Skills como estándar abierto (agentskills.io)
- Marketplace oficial pre-instalado (claude-plugins-official)
- Formulario de submisión para plugins externos
- Auto-updates para plugins
- Plugins en Claude Cowork (lanzado 30 enero 2026, 11 plugins open-source)
- Managed settings para distribución enterprise

### Anunciado, Pendiente de Lanzamiento

- **Organization-wide sharing y private plugin marketplaces**: Anthropic dijo que viene "in the weeks ahead" (desde 30 enero 2026)
- **Más plugins para Cowork**: Expansión del catálogo de plugins knowledge-work

### No Anunciado / Especulativo

- **Monetización de plugins**: No hay infraestructura de pagos
- **App store centralizada**: El modelo actual es descentralizado (cada quien hostea su marketplace)
- **Plugin analytics**: No hay métricas de uso para autores
- **Verificación/certificación**: Solo el directorio oficial tiene curaduría formal

---

## 8. Implicaciones para Growth Marketplace

### Lo Que Funciona HOY (Accionable Inmediatamente)

1. **Conversión a plugin format**: Nuestra estructura actual (`plugins/<plugin-name>/`) es 95% compatible. Solo necesitamos:
   - Agregar `.claude-plugin/plugin.json` a cada plugin (ya los tenemos)
   - Crear `.claude-plugin/marketplace.json` en la raíz del repo
   - Renombrar `SKILL.md` frontmatter para usar campos estándar (`name`, `description`)

2. **Distribución via GitHub**: Cualquier usuario puede agregar nuestro marketplace con:
   ```
   /plugin marketplace add our-org/growth-marketplace
   /plugin install growth-foundations@growth-marketplace
   ```

3. **Cross-platform gratis**: El formato SKILL.md funciona en Codex CLI, ChatGPT, Cursor, etc. Sin trabajo adicional.

4. **Submisión al directorio oficial**: Podemos aplicar via https://clau.de/plugin-directory-submission para aparecer en el Discover tab de todos los usuarios.

### Gaps y Riesgos

| Gap | Impacto | Mitigación |
|-----|---------|------------|
| Sin monetización nativa | No hay manera de cobrar dentro del ecosistema | Freemium: skills básicos gratis, premium via Gumroad/Lemonsqueezy |
| Sin analytics | No sabemos quién instala o usa nuestros skills | GitHub stars/forks como proxy; feedback directo |
| Namespacing obligatorio | `/growth-marketplace:icp-scoring` es verboso | Nombres de plugin cortos: `gm:icp-scoring` |
| Sin acceso restringido | Cualquiera puede ver/copiar los skills | Open-source como estrategia de distribución; moat en metodología |
| Dependencia de Anthropic | Cambios en el sistema de plugins nos afectan | Multi-platform (SKILL.md estándar abierto) reduce riesgo |

### Estrategia de Distribución Recomendada

**Fase 1 (Inmediata)**: Conversión y publicación
- Adaptar estructura actual a formato plugin oficial
- Crear marketplace.json
- Publicar en GitHub
- Documentar instalación en README

**Fase 2 (30 días)**: Visibilidad
- Submisión al directorio oficial de Anthropic
- Listing en SkillsMP.com
- Post en awesome-claude-plugins
- Publicar en claude-plugins.dev

**Fase 3 (60 días)**: Monetización experimental
- Skills básicos: free (open-source en GitHub)
- Skills premium: acceso via repo privado + pago externo
- Alternativa: skills gratuitos + servicios de consultoría como upsell

**Fase 4 (90 días)**: Expansión cross-platform
- Verificar compatibilidad con Codex CLI
- Documentar instalación para cada plataforma soportada
- Posicionar como "el toolkit GTM que funciona en cualquier AI coding assistant"

---

## 9. Análisis Competitivo de Distribución

### Marketplaces de Terceros Existentes

| Marketplace | Plugins | Enfoque | Monetización |
|-------------|---------|---------|--------------|
| claude-plugins-official | 29 | Curado por Anthropic | No |
| anthropics/skills | ~20 | Oficiales de referencia | No |
| anthropics/knowledge-work-plugins | 11 | Claude Cowork enterprise | No |
| SkillsMP.com | 200k+ | Agregador cross-platform | No |
| claude-plugins.dev | Variado | Registry + CLI simplificado | No |
| claudemarketplaces.com | Directorio | Directorio de marketplaces | No |
| Marketplaces individuales | 1-20 | Nicho específico | No |

### Observación Clave

**Nadie ha construido un marketplace vertical de dominio**. Todos los marketplaces existentes son horizontales (desarrollo general, DevOps, productividad). Un marketplace vertical de GTM/sales/marketing sería primero en su categoría.

---

## 10. Fuentes

- [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)
- [Discover and install prebuilt plugins - Claude Code Docs](https://code.claude.com/docs/en/discover-plugins)
- [Create and distribute a plugin marketplace - Claude Code Docs](https://code.claude.com/docs/en/plugin-marketplaces)
- [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- [Plugins reference - Claude Code Docs](https://code.claude.com/docs/en/plugins-reference)
- [anthropics/claude-plugins-official (GitHub)](https://github.com/anthropics/claude-plugins-official)
- [anthropics/skills (GitHub)](https://github.com/anthropics/skills)
- [anthropics/knowledge-work-plugins (GitHub)](https://github.com/anthropics/knowledge-work-plugins)
- [Agent Skills Specification (agentskills.io)](https://agentskills.io/specification)
- [SkillsMP - Agent Skills Marketplace](https://skillsmp.com/)
- [claude-plugins.dev - Community Registry](https://claude-plugins.dev/)
- [Claude Code Plugin CLI: The Missing Manual (Medium)](https://medium.com/@garyjarrel/claude-code-plugin-cli-the-missing-manual-0a4d3a7c99ce)
- [Anthropic brings agentic plugins to Cowork (TechCrunch)](https://techcrunch.com/2026/01/30/anthropic-brings-agentic-plugins-to-cowork/)
- [Anthropic bolsters enterprise offerings with Cowork plugins (Axios)](https://www.axios.com/2026/01/30/ai-anthropic-enterprise-claude)
- [Claude Skills vs MCP: Technical Comparison (IntuitionLabs)](https://intuitionlabs.ai/articles/claude-skills-vs-mcp)
- [Skills explained: How Skills compares to prompts, Projects, MCP (Claude Blog)](https://claude.com/blog/skills-explained)
- [Customize Claude Code with plugins (Claude Blog)](https://claude.com/blog/claude-code-plugins)
- [ivan-magda/claude-code-plugin-template (GitHub)](https://github.com/ivan-magda/claude-code-plugin-template)
- [hesreallyhim/awesome-claude-code (GitHub)](https://github.com/hesreallyhim/awesome-claude-code)
- [How to Monetize Claude Code Skills (Agent37)](https://www.agent37.com/blog/monetize-claude-code-skills)
