# 22 — Sistema: Realidad vs Documentación (Source of Truth)

> **Propósito**: Documento único que reconcilia lo que el sistema ES (codebase) con lo que el sistema CREE que es (second brain / NLM). Auditoría Marie Kondo aplicada el 16 de febrero de 2026.

---

## 1. Inventario Real del Marketplace (Codebase = Verdad)

### Plugins: 5
| Plugin | Skills | Agents | Commands | Templates | Frameworks | Patterns | Examples |
|--------|--------|--------|----------|-----------|------------|----------|----------|
| `growth-foundations` | 6 | 0 | 3 | 6 | 11 | 3 | 5 |
| `sales-blueprint` | 4 | 2 | 4 | 5 | 5 | 0 | 1 |
| `copywriting-engine` | 4 | 4 | 3 | 4 | 1 | 7 | 0 |
| `motor-de-ofertas` | 4 | 1 | 2 | 10 | 12 | 7 | 1 |
| `conversational-pm` | 1 | 0 | 0 | 0 | 3 | 0 | 0 |
| **TOTAL** | **18** | **7** | **12** | **25** | **32** | **17** | **6** |

**Total archivos .md en plugins/**: 122 (+ 5 README = 127 referenciados en registros anteriores)

### Skills por Plugin (18 total)

**growth-foundations (6):**
1. `icp-analysis` — Perfil de cliente ideal + scoring 0-100
2. `positioning` — Propuesta de valor, diferenciación, messaging
3. `competitive-analysis` — Five Forces + mapa de mercado
4. `quiz-funnel` — Metodología SONDA adaptada a B2B
5. `content-strategy` — Ski Slope + Topic Triangle + 3 workflows LATAM ⚠️ **NO CONOCIDO POR NLM**
6. (nota: positioning no tiene subcarpetas, es SKILL.md + 1 framework)

**sales-blueprint (4):**
1. `discovery-mastery` — PULSO discovery calls
2. `pipeline-management` — Health indicators + forecasting
3. `proposal-generation` — Enterprise y mid-market proposals
4. `coaching-cadence` — ROCA framework para coaching 1:1

**copywriting-engine (4):**
1. `headline-mastery` — 50+ fórmulas de headlines
2. `email-sequences` — Cold outreach, nurture, reactivation, 900-word sales
3. `landing-pages` — Arquitectura de conversión 10 secciones + ISL
4. `psychological-triggers` — 10 gatillos psicológicos

**motor-de-ofertas (4):**
1. `escala` — Value Ladder (Bait → Frontend → Backend)
2. `flujo` — 7 fases del funnel + traffic types + ISL
3. `alma` — Attractive Character Framework (ACF 10 steps) + IMAN email
4. `funnel-optimization` — Dashboard + optimization cycle + scaling

**conversational-pm (1):**
1. `project-management` — PM conversacional con agent roster

### Agentes Autónomos (7)
| Agente | Plugin | Rol |
|--------|--------|-----|
| `research-agent` | copywriting-engine | Inteligencia de mercado (Fase 1) |
| `insight-agent` | copywriting-engine | Estrategia y ángulos (Fase 2) |
| `ideation-agent` | copywriting-engine | Conceptos creativos (Fase 3) |
| `copy-output-agent` | copywriting-engine | Redacción final (Fase 4) |
| `sdr-agent` | sales-blueprint | Investigación + outreach sequences |
| `deal-strategist` | sales-blueprint | Análisis crítico de oportunidades |
| `funnel-architect` | motor-de-ofertas | Diseño de blueprints de embudos |

### Agentes de Roster (5 — definidos en `conversational-pm/frameworks/agent-roster.md`)
| Agente | Responsabilidad |
|--------|----------------|
| Architecture Plumber | Infraestructura y plataforma |
| Data Specialist | Pipelines ETL y flujo de datos |
| Database Architect | Diseño de almacenamiento (SQL/Graph) |
| Implementation Agent | Construcción y despliegue |
| Dashboard Builder | Visualización de métricas en 3 niveles |

### Comandos (12)
| Comando | Plugin | Función |
|---------|--------|---------|
| `/diagnostico` | growth-foundations | ClarQ assessment (GTM, Revenue, Q2C, Capabilities) |
| `/icp` | growth-foundations | Workshop ICP + scoring |
| `/quiz` | growth-foundations | Quiz funnel Metodología SONDA builder |
| `/discovery` | sales-blueprint | PULSO discovery session |
| `/pipeline` | sales-blueprint | Pipeline health analysis |
| `/propuesta` | sales-blueprint | Proposal generation |
| `/coaching` | sales-blueprint | Sales coaching 1:1 session |
| `/copy` | copywriting-engine | Pipeline de 4 agentes |
| `/headline` | copywriting-engine | Generación de headlines |
| `/email-sequence` | copywriting-engine | Email sequence builder |
| `/escala` | motor-de-ofertas | ESCALA value ladder builder |
| `/funnel-diagnosis` | motor-de-ofertas | Funnel optimization diagnosis |

---

## 2. Entropía del Second Brain (NLM)

### Estado actual: 56 fuentes — debería tener ~37

| Categoría | Cantidad | Acción | Razón |
|-----------|----------|--------|-------|
| Docs canónicos (00-21 + GUÍA) | 22 | **KEEP** | Core knowledge |
| Duplicados (re-sync Feb 16) | 9 | **DELETE** | Ruido, confunden queries |
| Framework orphans del codebase | 7 | **DELETE** | Ya viven en plugins/ |
| Codebase dump (pasted_text) | 1 | **DELETE** | Stale snapshot |
| "Untitled document" | 1 | **DELETE** | Basura |
| Google Docs playbooks (00-10) | 10 | **EVALUATE** | Contenido externo valioso pero no inventariado |
| Web pages (SEO/B2B) | 4 | **KEEP** | Referencias externas útiles |
| B2B Playbook (Word) | 1 | **EVALUATE** | Puede estar absorbido en plugins |
| AI Megaprompts | 1 | **EVALUATE** | ¿Redundante con copywriting-engine? |
| Lenny's Podcast (GitHub) | 1 | **KEEP** | Referencia de investigación |

### Duplicados a Eliminar (IDs)
```
# 01-arquitectura-convenciones (keep 262c5711, delete 525fa339)
# 02-metodologia-spiced (keep 3a08b8fd, delete c1cb3631)
# 06-modelos-scoring (keep beb6056c, delete e442e79c)
# 07-sistema-agentes (keep 3bd9b605, delete dc58ed24)
# 10-decisiones-diseno (keep 406bf003, delete 6b21375c)
# 11-gtm-skills-landscape (keep 05212fa3, delete 833ab219)
# 12-validacion-mercado (keep 8ed2c1a1, delete ed9214bb)
# 18-plugin-motor-de-ofertas (keep 7dc9cfea, delete b0d0ba68)
# 19-deep-research (keep 649bab05, delete f58a0d01)
```

### Orphans a Eliminar (IDs)
```
# conversion-architecture.md → 16803e21 (ya existe en copywriting-engine/landing-pages/frameworks/)
# power-headlines.md → 0e278688 (ya existe en copywriting-engine/headline-mastery/patterns/)
# roca-framework.md → 31d18bef (ya existe en sales-blueprint/coaching-cadence/frameworks/)
# scoring-model.md → 993ccec7 (ya existe en growth-foundations/icp-analysis/frameworks/)
# spiced-framework.md → fa10254c (ya existe en sales-blueprint/discovery-mastery/frameworks/)
# trigger-library.md → 7b9394e9 (ya existe en copywriting-engine/psychological-triggers/patterns/)
# growth-marketplace-full-codebase.md → 9d9425e4 (stale pasted dump)
# Untitled document → af134560 (basura)
```

---

## 3. Gaps: Lo que NLM No Sabe vs Lo que Existe

| Realidad (codebase) | NLM cree | Impacto |
|---------------------|----------|---------|
| `content-strategy` skill EXISTE con Ski Slope, Topic Triangle, 3 workflows LATAM, 3 templates | "No existe como skill, solo hay doc de diseño (doc 20)" | **CRÍTICO** — NLM omite un skill completo en queries |
| 25 templates | 14 templates | **ALTO** — 11 templates invisibles para NLM |
| 18 skills | 17 skills | **MEDIO** — content-strategy es la missing skill |
| Doc 07 dice "6 agentes" | 7 agentes en realidad | **BAJO** — ya corregido en doc 07 header, falta re-sync NLM |
| Doc 09 (inventario) | Tiene conteo viejo | **MEDIO** — inventario desactualizado |

### Docs que Necesitan Re-sync a NLM
1. `03-plugin-growth-foundations.md` — Agregar content-strategy skill
2. `07-sistema-agentes.md` — Ya actualizado a 7 agentes, necesita re-upload
3. `09-inventario-contenido.md` — Conteos desactualizados
4. `20-content-mavericks-ecosystem.md` — Marcar que content-strategy YA fue implementada

---

## 4. Flujo E2E Real del Sistema (Lo que FUNCIONA hoy)

```
┌─────────────────────────────────────────────────────────────┐
│                    FASE 0: ORQUESTACIÓN                     │
│  conversational-pm → PULSO project discovery               │
│  PM despacha agentes según necesidad del cliente            │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 1: DIAGNÓSTICO + CIMIENTOS                │
│  growth-foundations                                          │
│  /diagnostico → ClarQ heatmap (GTM/Revenue/Q2C/Cap)        │
│  /icp → ICP scoring 0-100, Tier 1/2/3                      │
│  positioning → Value Prop Canvas + Messaging                │
│  competitive-analysis → Battle cards + Five Forces          │
│  content-strategy → Ski Slope + Topic Triangle ← NUEVO     │
│  /quiz → Metodología SONDA quiz funnel builder                     │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│            FASE 2: ARQUITECTURA DEL FUNNEL                  │
│  motor-de-ofertas                                              │
│  /escala → Value Ladder (Bait/Frontend/Backend)             │
│  flujo → 7 fases del funnel + traffic types                 │
│  alma → Attractive Character + voz de marca                 │
│  funnel-architect agent → Blueprints de embudos             │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 3: EJECUCIÓN DE VENTAS                    │
│  sales-blueprint                                             │
│  sdr-agent → Outreach 14 días (email+LinkedIn+calls)        │
│  /discovery → PULSO prep + agenda                          │
│  deal-strategist → PULSO score, MAP, risk matrix           │
│  /propuesta → Propuesta con Business Case (gate: PULSO≥23) │
│  /pipeline → Health forecast con semáforo PULSO            │
│  /coaching → ROCA diagnosis + coaching plan                 │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 4: MOTOR DE CONTENIDOS                    │
│  copywriting-engine                                          │
│  /copy → Pipeline 4 agentes (Research→Insight→Ideation→Output) │
│  /headline → 50+ fórmulas de headlines                      │
│  /email-sequence → Cold/Nurture/Reactivation/Sales          │
│  psychological-triggers → 10 gatillos + Present Pain        │
│  landing-pages → ISL + Conversion Architecture              │
└─────────────────────────────────────────────────────────────┘
```

### Lo que NO funciona hoy (gaps reales)
1. **Sin MCP integrations** — Todo es content-only, no lee CRM/email/analytics
2. **Sin ejecución de diseño** — Copy sale como texto, no como HTML/landing pages
3. **Sin monetización** — No hay infra de pagos para vender plugins
4. **Sin MEDDPICC** — Para enterprise deals grandes, PULSO puede quedarse corto
5. **Sin ABM orchestrator** — No coordina marketing + ventas en cuentas específicas
6. **Conversational PM es teórico** — Diseñado pero no probado E2E con proyecto real

---

## 5. Plan E2E Test: AI Huevos como Cliente Experimental

### Concepto: Dog Food Test
Usar AI Huevos (la propia empresa) como el primer cliente real del marketplace. Esto valida cada fase con datos reales y genera los primeros casos de éxito documentados.

### AI Huevos como Input
- **Producto**: Marketplace de plugins para Claude Code
- **ICP target**: GTM Engineers, B2B consultores, equipos de growth LATAM
- **Precio**: Freemium → consultoría (value ladder por diseñar)
- **Pain**: Los equipos no tienen frameworks estructurados para Claude Code
- **Canal**: Claude Code marketplace + distribución directa

### Secuencia del Test

#### Test 1: `/diagnostico` con AI Huevos
- **Input**: "AI Huevos, empresa de plugins de growth para Claude Code"
- **Esperado**: ClarQ heatmap mostrando gaps reales de GTM
- **Valida**: Que el ClarQ framework genera output útil para una startup

#### Test 2: `/icp` con AI Huevos
- **Input**: Datos reales de AI Huevos (ticket, mercado, buyer persona)
- **Esperado**: ICP scoring que identifica Tier 1 (GTM Engineer LATAM $50M+)
- **Valida**: Que el scoring model produce tiers accionables

#### Test 3: `/escala` con AI Huevos
- **Input**: Los 5 plugins como oferta base
- **Esperado**: Value Ladder completa (Bait: plugin gratis → Frontend: pack → Backend: consultoría)
- **Valida**: Que ESCALA puede diseñar monetización real

#### Test 4: `content-strategy` con AI Huevos
- **Input**: Blog/contenido de AI Huevos
- **Esperado**: Ski Slope plan con Topic Triangle priorizado para LATAM
- **Valida**: Que content-strategy produce un plan ejecutable

#### Test 5: `/copy` con AI Huevos
- **Input**: ICP + positioning de Tests 1-2
- **Esperado**: Landing page copy + email sequence para launch
- **Valida**: Que el pipeline de 4 agentes produce copy coherente end-to-end

#### Test 6: `/discovery` + `/propuesta` simulación
- **Input**: Prospect ficticio interesado en implementar el marketplace
- **Esperado**: PULSO prep + propuesta comercial generada
- **Valida**: Que el flujo de ventas funciona con datos reales de AI Huevos

### Criterios de Éxito
- [ ] Cada comando genera output completo sin errores
- [ ] Los outputs se conectan entre sí (ICP → positioning → copy → proposal)
- [ ] PULSO score fluye consistentemente entre plugins
- [ ] Los templates producen documentos que un consultor usaría con un cliente real
- [ ] El flujo completo se puede ejecutar en < 2 horas de sesión Claude Code

### Entregables del Test
1. **6 documentos de output** (1 por test) guardados en `docs/e2e-test/`
2. **Reporte de gaps** — qué falló, qué necesita ajuste
3. **Execution log** — cada template usado, tiempo, adaptaciones
4. **Caso de éxito**: "Cómo AI Huevos validó su propio marketplace"

---

## 6. Comandos NLM para Limpieza

### Paso 1: Eliminar duplicados (9 sources)
```bash
nlm source delete second-brain 525fa339-3474-48c8-a56e-cc4664f36738
nlm source delete second-brain c1cb3631-7bc8-4e1e-9c14-973f33c408a8
nlm source delete second-brain e442e79c-32a9-4c74-ba18-d6640fa7d764
nlm source delete second-brain dc58ed24-0a72-4930-940f-9d781ffc249e
nlm source delete second-brain 6b21375c-f866-480f-b7ad-216cf096e6c1
nlm source delete second-brain 833ab219-63ac-4162-85ba-4f06d39728a9
nlm source delete second-brain ed9214bb-a4e9-45fd-965a-045d3423dc73
nlm source delete second-brain b0d0ba68-4615-4e16-a5b3-3e1fc0bbadd1
nlm source delete second-brain f58a0d01-c0f6-4e01-9754-b79ba556b8ad
```

### Paso 2: Eliminar orphans y basura (8 sources)
```bash
nlm source delete second-brain 16803e21-7b3b-49e5-bbc3-c9584c18a2da
nlm source delete second-brain 0e278688-d1c9-4ace-a700-80b7fee56287
nlm source delete second-brain 31d18bef-12c5-4d51-b4a2-32eca9e0ff73
nlm source delete second-brain 993ccec7-c4a4-436b-8dda-3fc8e953c9c2
nlm source delete second-brain fa10254c-4f20-49bd-b1b4-48efbc8dd697
nlm source delete second-brain 7b9394e9-fd61-4b37-8be2-5849d7c3d750
nlm source delete second-brain 9d9425e4-e388-441f-9a67-296b18737d7e
nlm source delete second-brain af134560-1342-47c8-859c-15a046ba2b52
```

### Paso 3: Re-sync docs actualizados
```bash
# Después de actualizar docs 03, 09, 20:
nlm source add second-brain --file docs/second-brain/03-plugin-growth-foundations.md --title "03-plugin-growth-foundations.md" --wait
nlm source add second-brain --file docs/second-brain/09-inventario-contenido.md --title "09-inventario-contenido.md" --wait
nlm source add second-brain --file docs/second-brain/20-content-mavericks-ecosystem.md --title "20-content-mavericks-ecosystem.md" --wait
nlm source add second-brain --file docs/second-brain/22-sistema-realidad-source-of-truth.md --title "22-sistema-realidad-source-of-truth.md" --wait
```

### Paso 4: Evaluar Google Docs playbooks (10 sources)
```
# Estos 10 playbooks (00-10) son contenido externo de marketing.
# Decisión pendiente: ¿se absorben en el marketplace como skills/frameworks,
# o se mantienen como referencia de investigación?
# IDs: 5bf84e34, c2fc3004, 92222ecb, 27164fee, 68addb89, 2889c0f6,
#       29f0b0fe, 4504df61, 746e8126, a8c7d1e6, 92f45381
```

---

## 7. Estado Post-Limpieza Esperado

| Métrica | Antes | Después |
|---------|-------|---------|
| Sources NLM | 56 | ~39 |
| Duplicados | 9 | 0 |
| Orphans | 8 | 0 |
| Skills conocidos por NLM | 17 | 18 |
| Templates conocidos por NLM | 14 | 25 |
| Docs second-brain | 22 | 23 (+ este doc) |

---

*Generado: 2026-02-16 | Método: Cross-reference codebase `find` vs NLM `notebook query` vs MEMORY.md | Principio: Marie Kondo — "Does this spark joy?" aplicado a cada source del second brain*
