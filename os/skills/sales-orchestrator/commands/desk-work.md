---
description: Generate post-discovery deliverables for a deal. Reads business-context.md and produces 4 branded outputs — HTML Discovery Report, Mapa de Energia, Growth Proposal, and Sales Deck. All outputs saved to deals/<company-slug>/.
argument-hint: <company-slug>
allowed-tools: [Read, Write, Glob, Grep]
---

# Desk Work — Deliverable Generation

El usuario quiere generar entregables post-discovery para: $ARGUMENTS

## Pre-requisitos

Verificar que existe:
- `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/business-context.md` (status: POPULATED)
- `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/coaching-report.md`

Si no existen, informar al usuario que debe ejecutar `/post-discovery` primero.

**Modo de falla (config de cliente)**: si `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` o `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` no existen, detente y pide al operador que configure `clients/{{CLIENT_SLUG}}/` antes de continuar.

## Instrucciones

### Paso 0: Cargar Contexto

Leer los siguientes archivos en paralelo:

1. `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/business-context.md` — datos del deal
2. `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` — pricing source of truth
3. `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` — brand rules
4. `os/skills/sales-orchestrator/frameworks/html-deliverable-spec.md` — HTML spec
5. `os/skills/sales-orchestrator/templates/discovery-report-html.md` — HTML template

### Paso 1: HTML Discovery Report

**Input**: business-context.md (todas las secciones)
**Template**: `os/skills/sales-orchestrator/templates/discovery-report-html.md`
**Spec**: `os/skills/sales-orchestrator/frameworks/html-deliverable-spec.md`
**Output**: `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/discovery-report.html`

Proceso:
1. Tomar el HTML template completo
2. Reemplazar TODOS los `{{PLACEHOLDER}}` con datos de business-context.md
3. Generar las cards de stakeholders (1 card por stakeholder)
4. Generar las cards de pain points (1 card por dolor)
5. Generar las cards de buying signals (positivas y negativas)
6. Calcular PULSO bar percentages: `(score / 5) * 100`
7. Asignar colores a PULSO bars: 4-5=green, 3=yellow, 0-2=red
8. Generar Mermaid diagrams:
   - **Current State**: Sistemas actuales con conexiones y fricciones
   - **Proposed**: AI-OS en el centro conectando todo
9. Generar action items rows
10. Verificar: 0 placeholders sin resolver, anti-words check, quotes verbatim

### Paso 2: Mapa de Energia (Pre-populated)

**Input**: business-context.md (sections 4, 5) + coaching-report.md
**Template**: `clients/{{CLIENT_SLUG}}/delivery/mapa-energia-template.md`
**Output**: `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/mapa-energia.md`

Este es un **pre-llenado parcial**, no el Mapa completo (que requiere el Sprint de 10 dias).

**Modo de falla**: si `clients/{{CLIENT_SLUG}}/delivery/mapa-energia-template.md` no existe, detente y pide al operador que provea el template de entregable del cliente instalado.

Proceso:
1. Leer el template de Mapa de Energia
2. Poblar SOLO las secciones que se pueden llenar con datos de la discovery call:
   - Portada: nombre, industria, fecha, responsable del deal (cliente instalado)
   - Section 2.1 (Sistemas Identificados): desde business-context section 5
   - Section 3 (Puntos de Friccion): desde business-context section 4 (pain points como proxy)
   - Section 7.6 (Proximos Pasos): desde business-context section 8
3. Dejar las secciones que requieren Sprint con `{{PENDIENTE_SPRINT}}`:
   - Energy Score (requiere evaluacion profunda)
   - Section 2.2 (Conexiones detalladas)
   - Section 4 (Estimacion de Ahorro — requiere datos financieros del Sprint)
   - Section 5 (Roadmap de Automatizaciones)
   - Section 6 (Benchmarks de Industria)
   - Section 7.1-7.5 (Recomendacion completa)
4. Agregar nota al inicio:

```
> **NOTA**: Este Mapa de Energia esta PRE-POBLADO con datos de la discovery call.
> Las secciones marcadas {{PENDIENTE_SPRINT}} se completan durante el Sprint de
> Descubrimiento (10 dias). Este documento sirve como preview para el prospect
> y como base para el equipo del cliente instalado.
```

### Paso 3: Growth Proposal (Populated)

**Input**: business-context.md (sections 1, 4, 7) + pricing-grid.md
**Template**: `clients/{{CLIENT_SLUG}}/delivery/propuesta-aios-build.md`
**Output**: `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/proposal.md`

**Modo de falla**: si `clients/{{CLIENT_SLUG}}/delivery/propuesta-aios-build.md` no existe, detente y pide al operador que provea el template de propuesta del cliente instalado.

**Delegacion**: este paso puede ejecutarse via `plugins/sales-blueprint/agents/proposal-pricing-agent.md` (Deal Desk / Revenue Ops) — aplica el gate PULSO>=23, selecciona tier con racional explicito y emite el Evidence Pack (Red/HITL, nunca envia). Las instrucciones de abajo siguen siendo la fuente del template de propuesta; el agente las opera, no las reemplaza.

Proceso:
1. Leer el template de propuesta
2. Determinar el tier recomendado desde business-context section 7
3. Obtener pricing desde `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` segun tier + region
4. Poblar:
   - Resumen ejecutivo con pain points y datos del prospect
   - Top 3 fricciones desde business-context
   - Pricing y estructura de pago segun tier
   - ROI projection (usar los proof points / benchmarks del cliente instalado, `brand-voice.md`, ajustados al prospect)
   - Equipo propuesto (del cliente instalado)
   - Timeline segun tier (Sprint=2 semanas, Build=90 dias)
   - Proximos pasos con fechas concretas
5. Si tier recomendado es FRONTEND (Sprint):
   - Adaptar la propuesta al Sprint, no al Build completo
   - Precio: ver tier FRONTEND en `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md`
   - Entregable: Mapa de Energia completo (o el entregable equivalente del cliente instalado)
   - Timeline: 10 dias
   - Ascension path: Sprint -> Build
6. Si tier recomendado es MIDDLE (Build):
   - Propuesta completa de AI-OS Build (o la oferta equivalente del cliente instalado)
   - Precio: ver tier MIDDLE en `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md`
   - 3 fases (Rieles, Flujo, Energia — o las fases del roadmap propio del cliente instalado)

### Paso 4: Sales Deck Outline

**Input**: business-context.md (all sections)
**Reference**: `clients/{{CLIENT_SLUG}}/sales-decks/<reference-deck>.md` (ejemplo previo del cliente instalado, Andy Raskin 5 Moves pattern; opcional — si no existe, generar el outline sin referencia previa)
**Output**: `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/sales-deck-outline.md`

Generar outline de presentacion siguiendo Andy Raskin 5 Moves:

```markdown
# Sales Deck — {{COMPANY_NAME}}

## Move 1: Name the Undeniable Shift
{{INDUSTRY_SHIFT}} — el mundo cambio, y las empresas que no adapten su
{{CORE_OPERATION}} van a perder.

## Move 2: Show the Stakes (Winners & Losers)
- Ganadores: empresas con la solucion del cliente instalado integrada ({{CASE_STUDY_PROOF}} — proof point de `brand-voice.md`)
- Perdedores: empresas operando con {{CURRENT_PAIN_1}}, {{CURRENT_PAIN_2}}

## Move 3: Tease the Promised Land
{{COMPANY_NAME}} con la solucion del cliente instalado funcionando: {{VISION_DESCRIPTION}}

## Move 4: Introduce the Magic Gift (Features as Obstacles Overcome)
- Obstaculo 1: {{PAIN_1}} -> se resuelve con {{SOLUTION_1}}
- Obstaculo 2: {{PAIN_2}} -> se resuelve con {{SOLUTION_2}}
- Obstaculo 3: {{PAIN_3}} -> se resuelve con {{SOLUTION_3}}

## Move 5: Show the Evidence
- {{CASE_STUDY_PROOF}} (proof point principal del cliente instalado, ver `brand-voice.md`)
- {{ADDITIONAL_PROOF}}

## Appendix: Pricing & Next Steps
- Tier: {{RECOMMENDED_TIER}}
- Precio: {{PRICE_RANGE}}
- Proximo paso: {{NEXT_STEP}}
```

### Paso 5: Summary Output

Presentar al usuario:

```
DESK WORK COMPLETE — {{COMPANY_NAME}}
============================================

DELIVERABLES GENERATED:
1. clients/{{CLIENT_SLUG}}/deals/{{SLUG}}/discovery-report.html    (HTML report with Mermaid diagrams)
2. clients/{{CLIENT_SLUG}}/deals/{{SLUG}}/mapa-energia.md          (Pre-populated Energy Map)
3. clients/{{CLIENT_SLUG}}/deals/{{SLUG}}/proposal.md              (Growth Proposal with pricing)
4. clients/{{CLIENT_SLUG}}/deals/{{SLUG}}/sales-deck-outline.md    (Andy Raskin 5 Moves outline)

RECOMMENDED TIER: {{TIER}}
PRICE RANGE: {{PRICE}}
NEXT STEP: {{NEXT_STEP}}

READY FOR: /follow-up {{SLUG}}
```

### Paso 6: Quality Gates

Before declaring complete, verify:
1. All 4 files exist in `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/`
2. HTML report has 0 unresolved `{{PLACEHOLDER}}` tags
3. Proposal pricing matches `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md`
4. All prospect quotes are verbatim (not paraphrased)
5. No anti-words present (check `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` list)
6. At least 1 case-study proof point per deliverable (from `brand-voice.md`)

### Paso 7: Instrumentación (Revenue OS)

Despues de que el operador revise los 4 entregables (Paso 6), registrar un score de calidad de deliverable con `source='human'` — nunca auto-calificar el propio trabajo.

**Mecanismo**: `execute_sql` (Supabase MCP) si esta disponible; si no, fallback `psql "$DATABASE_URL" -c "..."` (local, puerto 54332); si ninguno esta disponible, anexar el INSERT a `clients/{{CLIENT_SLUG}}/deals/{{COMPANY_SLUG}}/pending-metrics.sql`. `org_id` se resuelve de `organizations` para el cliente instalado.

```sql
with log as (
  insert into public.ai_execution_logs (org_id, profile_id, skill_slug, model_id)
  values (
    (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
    '{{PROFILE_ID}}', 'desk-work', '{{MODEL_ID}}'
  ) returning id
)
insert into public.execution_scores (execution_id, org_id, score_key, score_value, source, comment)
select log.id,
  (select id from public.organizations where name = '{{CLIENT_SLUG}}'),
  'deliverable_quality', {{OPERATOR_SCORE}}, 'human', '{{OPERATOR_NOTE}}'
from log;
```

Requiere revision humana explicita antes de escribir; no se dispara automaticamente al generar los 4 archivos.
