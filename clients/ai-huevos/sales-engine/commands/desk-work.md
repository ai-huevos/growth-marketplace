---
description: Generate post-discovery deliverables for a deal. Reads business-context.md and produces 4 branded outputs — HTML Discovery Report, Mapa de Energia, Growth Proposal, and Sales Deck. All outputs saved to deals/<company-slug>/.
argument-hint: <company-slug>
allowed-tools: [Read, Write, Glob, Grep]
---

# KAI Desk Work — Deliverable Generation

El usuario quiere generar entregables post-discovery para: $ARGUMENTS

## Pre-requisitos

Verificar que existe:
- `clients/ai-huevos/deals/{{COMPANY_SLUG}}/business-context.md` (status: POPULATED)
- `clients/ai-huevos/deals/{{COMPANY_SLUG}}/coaching-report.md`

Si no existen, informar al usuario que debe ejecutar `/kai-discovery` primero.

## Instrucciones

### Paso 0: Cargar Contexto

Leer los siguientes archivos en paralelo:

1. `clients/ai-huevos/deals/{{COMPANY_SLUG}}/business-context.md` — datos del deal
2. `clients/ai-huevos/pricing/pricing-grid.md` — pricing source of truth
3. `clients/ai-huevos/brand-config/brand-reference.md` — brand rules
4. `clients/ai-huevos/sales-engine/frameworks/html-deliverable-spec.md` — HTML spec
5. `clients/ai-huevos/sales-engine/templates/discovery-report-html.md` — HTML template

### Paso 1: HTML Discovery Report

**Input**: business-context.md (todas las secciones)
**Template**: `sales-engine/templates/discovery-report-html.md`
**Spec**: `sales-engine/frameworks/html-deliverable-spec.md`
**Output**: `deals/{{COMPANY_SLUG}}/discovery-report.html`

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
**Template**: `clients/ai-huevos/delivery/mapa-energia-template.md`
**Output**: `deals/{{COMPANY_SLUG}}/mapa-energia.md`

Este es un **pre-llenado parcial**, no el Mapa completo (que requiere el Sprint de 10 dias).

Proceso:
1. Leer el template de Mapa de Energia
2. Poblar SOLO las secciones que se pueden llenar con datos de la discovery call:
   - Portada: nombre, industria, fecha, KAI Partner
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
> y como base para el equipo KAI.
```

### Paso 3: Growth Proposal (Populated)

**Input**: business-context.md (sections 1, 4, 7) + pricing-grid.md
**Template**: `clients/ai-huevos/delivery/propuesta-aios-build.md`
**Output**: `deals/{{COMPANY_SLUG}}/proposal.md`

Proceso:
1. Leer el template de propuesta
2. Determinar el tier recomendado desde business-context section 7
3. Obtener pricing desde pricing-grid.md segun tier + region (CO/BO vs MX)
4. Poblar:
   - Resumen ejecutivo con pain points y datos del prospect
   - Top 3 fricciones desde business-context
   - Pricing y estructura de pago segun tier
   - ROI projection (usar Finkargo benchmarks ajustados)
   - Equipo KAI propuesto
   - Timeline segun tier (Sprint=2 semanas, Build=90 dias)
   - Proximos pasos con fechas concretas
5. Si tier recomendado es FRONTEND (Sprint):
   - Adaptar la propuesta al Sprint, no al Build completo
   - Precio: $500-$1,500 segun region
   - Entregable: Mapa de Energia completo
   - Timeline: 10 dias
   - Ascension path: Sprint -> Build
6. Si tier recomendado es MIDDLE (Build):
   - Propuesta completa de AI-OS Build
   - Precio: $5K-$15K segun region
   - 3 fases (Rieles, Flujo, Energia)

### Paso 4: Sales Deck Outline

**Input**: business-context.md (all sections)
**Reference**: `clients/ai-huevos/sales-decks/g3-logistica-board-deck.md` (Andy Raskin 5 Moves pattern)
**Output**: `deals/{{COMPANY_SLUG}}/sales-deck-outline.md`

Generar outline de presentacion siguiendo Andy Raskin 5 Moves:

```markdown
# Sales Deck — {{COMPANY_NAME}}

## Move 1: Name the Undeniable Shift
{{INDUSTRY_SHIFT}} — el mundo cambio, y las empresas que no adapten su
{{CORE_OPERATION}} van a perder.

## Move 2: Show the Stakes (Winners & Losers)
- Ganadores: empresas con AI-OS integrado (Finkargo: $650M procesados, 110+ automatizaciones)
- Perdedores: empresas operando con {{CURRENT_PAIN_1}}, {{CURRENT_PAIN_2}}

## Move 3: Tease the Promised Land
{{COMPANY_NAME}} con un AI-OS funcional: {{VISION_DESCRIPTION}}

## Move 4: Introduce the Magic Gift (Features as Obstacles Overcome)
- Obstaculo 1: {{PAIN_1}} -> KAI resuelve con {{SOLUTION_1}}
- Obstaculo 2: {{PAIN_2}} -> KAI resuelve con {{SOLUTION_2}}
- Obstaculo 3: {{PAIN_3}} -> KAI resuelve con {{SOLUTION_3}}

## Move 5: Show the Evidence
- Finkargo: $35K -> $15M ahorros (428x ROI)
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
1. deals/{{SLUG}}/discovery-report.html    (HTML report with Mermaid diagrams)
2. deals/{{SLUG}}/mapa-energia.md          (Pre-populated Energy Map)
3. deals/{{SLUG}}/proposal.md              (Growth Proposal with pricing)
4. deals/{{SLUG}}/sales-deck-outline.md    (Andy Raskin 5 Moves outline)

RECOMMENDED TIER: {{TIER}}
PRICE RANGE: {{PRICE}}
NEXT STEP: {{NEXT_STEP}}

READY FOR: /kai-follow {{SLUG}}
```

### Paso 6: Quality Gates

Before declaring complete, verify:
1. All 4 files exist in `deals/{{COMPANY_SLUG}}/`
2. HTML report has 0 unresolved `{{PLACEHOLDER}}` tags
3. Proposal pricing matches pricing-grid.md
4. All prospect quotes are verbatim (not paraphrased)
5. No anti-words present (check brand-reference.md list)
6. At least 1 Finkargo proof point per deliverable
