# AI Huevos Growth Marketplace — Launch Dashboard

> Estado del sistema al 16 de febrero de 2026. Principio rector: **esencialismo** — no más, sino mejor.

---

## 1. ESTADO ACTUAL: Lo que EXISTE y FUNCIONA

### Codebase (Fuente de Verdad)

| Métrica | Cantidad | Estado |
|---------|----------|--------|
| Plugins | 5 | Completos |
| Skills | 18 | Todos con SKILL.md + frameworks |
| Agents autónomos | 7 | Definidos en 3 plugins |
| Agents de roster (PM) | 5 | Diseñados, no probados E2E |
| Commands | 12 | Todos con YAML frontmatter |
| Templates | 25 | Catalogados en template-catalog.md |
| Frameworks | 32 | Embebidos en skills |
| Patterns | 17 | Fórmulas y librerías |
| Total archivos .md | 127 | En plugins/ |

### Second Brain (NLM)

| Métrica | Cantidad | Estado |
|---------|----------|--------|
| Sources totales | 42 | Limpio (0 duplicados, 0 orphans) |
| Docs canónicos (00-22) | 24 | Sincronizados |
| Google Docs playbooks | 12 | Referencia externa (no integrados) |
| Web pages | 5 | SEO/B2B research |
| Word docs | 1 | B2B Playbook |
| Artifacts generados | 7+ | Infographic, slides, data table, report, mindmap |

### Scripts y Herramientas

| Herramienta | Ubicación | Función | Estado |
|-------------|-----------|---------|--------|
| `second-brain-sync.sh` | `scripts/` | Auto-numera, slugifica, sube a NLM | Funcional |
| Plugin Factory | `tools/plugin-factory/` → `~/.claude/skills/` | Genera plugins desde repos | Funcional |
| Ingestion Orchestrator | `tools/ingestion-orchestrator/` → `~/.claude/skills/` | Triage de contenido (6 acciones) | Funcional |
| Conversational PM | `plugins/conversational-pm/` → `~/.claude/skills/` | PM conversacional | Diseñado, no probado |
| MCP Orchestrator | `~/.claude/skills/mcp-orchestrator/` | Gestión de MCPs | Funcional |
| Forensic Codebase | `~/.claude/skills/forensic-codebase-skill/` | Auditoría de repos | Funcional |
| NLM CLI | Sistema | 9 tipos de artifacts, queries, research | Funcional |

### Git

| Estado | Detalle |
|--------|---------|
| Branch | `development` |
| Último commit | `1175584` — coherence sweep |
| Uncommitted | CLAUDE.md modificado, docs 03/09/20 modificados, docs/prompts/ nuevo, doc-22 nuevo, E-Myth nuevo |

---

## 2. SINCRONICIDAD: Codebase ↔ NLM ↔ Second Brain

### Lo que está en sync

| Componente | Codebase | NLM | Aligned? |
|------------|----------|-----|----------|
| 5 plugins + manifests | Yes | Yes | **Yes** |
| 18 skills | Yes | Yes (ahora con doc-03 actualizado) | **Yes** |
| 7 agents | Yes | Yes (doc-07 correcto) | **Yes** |
| 25 templates | Yes | Yes (template-catalog) | **Yes** |
| SPICED methodology | Yes | Yes (doc-02) | **Yes** |
| Scoring models | Yes | Yes (doc-06) | **Yes** |
| content-strategy skill | Yes | **Yes** (doc-03 re-synced) | **Yes** |
| E-Myth Agentic | In second-brain/ | In NLM | **Yes** |

### Lo que NO está en sync

| Gap | Impacto | Fix |
|-----|---------|-----|
| 12 Google Docs playbooks en NLM no están en codebase | Bajo — son referencia externa | Decisión: ¿absorber o mantener? |
| `docs/prompts/` no trackeado en git | Bajo — nuevo directorio | Commit pendiente |
| Execution log tiene 1 sola entrada | Alto — no hay evidencia de uso | **Resolver con dog food test** |

---

## 3. LO QUE FUNCIONA HOY (puedes ejecutar ahora mismo)

### Flujo E2E Probado Parcialmente

```
/diagnostico  →  ClarQ heatmap (GTM, Revenue, Q2C, Capabilities)
/icp          →  ICP scoring 0-100, 3 tiers
positioning   →  Value Prop Canvas + Messaging
/quiz         →  ASK Method quiz funnel
/escala       →  Value Ladder (Bait → Frontend → Backend)
/discovery    →  SPICED prep + agenda
/propuesta    →  Propuesta con Business Case
/pipeline     →  Pipeline health con semáforo SPICED
/coaching     →  REKS diagnosis + coaching plan
/copy         →  Pipeline 4 agentes
/headline     →  50+ fórmulas
/email-sequence → Cold/Nurture/Reactivation/Sales
/funnel-diagnosis → Funnel optimization
content-strategy → Ski Slope + Topic Triangle
```

### Lo que NO funciona hoy

| Gap | Por qué | Importancia para launch |
|-----|---------|------------------------|
| Sin integraciones MCP reales | Content-only, no lee CRM/email | Baja — no bloquea launch |
| Sin ejecución de diseño | Copy es texto, no HTML | Baja — el valor está en la estrategia |
| Sin monetización | No hay infra de pagos | Media — MVP es gratuito |
| PM Conversacional no probado | Diseñado pero sin test real | Baja — es Phase 2 |
| Sin dog food completo | Nunca se corrió el flujo E2E | **ALTA — es el objetivo de hoy** |

---

## 4. PLAN DE LAUNCH: 2 HORAS

> Principio: No crear nada nuevo. Usar lo que ya existe. Probar. Documentar.

### Hora 1: Dog Food Test (AI Huevos como cliente)

| Min | Acción | Comando | Output Esperado |
|-----|--------|---------|-----------------|
| 0-15 | Diagnóstico operativo | `/diagnostico` | ClarQ heatmap de AI Huevos |
| 15-25 | Perfil de cliente ideal | `/icp` | ICP scoring con 3 tiers |
| 25-35 | Value Ladder | `/escala` | ESCALA canvas: free → paid → consulting |
| 35-45 | Estrategia de contenido | `content-strategy` trigger | Ski Slope plan + Topic Triangle |
| 45-55 | Copy de lanzamiento | `/copy` | Landing page copy + email sequence |
| 55-60 | Discovery simulada | `/discovery` | SPICED prep para prospect ficticio |

**Cada output se guarda en `docs/e2e-test/` y se registra en `docs/execution-log.md`**

### Hora 2: Consolidación + Commit

| Min | Acción | Detalle |
|-----|--------|---------|
| 60-70 | Descargar artifacts NLM | Report + Slides + Mindmap → `docs/artifacts/` |
| 70-80 | Review gap report | ¿Qué falló? ¿Qué templates necesitan ajuste? |
| 80-90 | Crear `docs/e2e-test/gap-report.md` | Hallazgos del dog food |
| 90-100 | Actualizar execution-log | 6 nuevas entradas |
| 100-110 | Git commit coherente | Todo el dog food + artifacts + gaps |
| 110-120 | Sync gap report a NLM | El second brain aprende del test |

### Criterios de Éxito (de doc-22 §5)

- [ ] Cada comando genera output completo sin errores
- [ ] Los outputs se conectan entre sí (ICP → positioning → copy → proposal)
- [ ] SPICED score fluye consistentemente entre plugins
- [ ] Los templates producen documentos que un consultor usaría con un cliente real
- [ ] El flujo completo se ejecuta en < 2 horas

---

## 5. ARTIFACTS GENERÁNDOSE AHORA

| Artifact | ID | Estado | Para qué |
|----------|----|--------|----------|
| Growth Plan Report | `722554be` | Generando | Plan de crecimiento accionable |
| Launch Slide Deck | `c1a60b93` | Generando | Presentación de lanzamiento |
| System Mindmap | `e617ed7a` | **Descargado** → `docs/artifacts/system-architecture-mindmap.json` | Mapa visual del sistema |

### Artifacts Previos (ya descargados)

| Archivo | Tipo | Contenido |
|---------|------|-----------|
| `marketplace-briefing-report.md` | Report | Briefing general del marketplace |
| `marketplace-mindmap.json` | Mindmap | Mapa general |
| `plugin-inventory-spiced.csv` | Data table | Inventario de plugins |
| `quiz-funnel-infographic.png` | Infographic | Visual del quiz funnel |
| `quiz-funnel-slide-deck.txt` | Slides | Presentación del quiz funnel |

---

## 6. DESPUÉS DEL LAUNCH (Backlog Esencialista)

Solo lo que importa, en orden de impacto:

1. **Publicar 2 plugins como open source** — growth-foundations + sales-blueprint
2. **Crear 1 caso de éxito documentado** — el dog food de hoy
3. **Evaluar los 12 Google Docs playbooks** — ¿absorber como skills o mantener como referencia?
4. **MCP integration para 1 CRM** — HubSpot o Pipedrive (data connection)
5. **Pricing page** — Value ladder aplicada a AI Huevos mismo

---

*Generado: 2026-02-16 | Principio: Esencialismo + Steve Jobs ("Focus is saying no to the hundred good ideas")*
