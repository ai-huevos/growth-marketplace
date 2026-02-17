# Plugin: play-to-win — Metodología GrowthOS Full Lifecycle

## Overview

Plugin que implementa el sistema completo Metodología GrowthOS para transformación de equipos de ventas B2B. Generado a partir de 31 blueprints (45,199 palabras) + frameworks de síntesis del repositorio Play to Win.

**Brecha que llena**: Todo el ciclo post-venta (Customer Success Operating Model), relationship mapping avanzado, deal strategy, renewal/expansion, y un orquestador de transformación de 90 días. Ninguno de estos existía en el marketplace.

## Composición

- **11 skills**: sales-transformation, customer-success-ops, pre-discovery-research, deal-strategy, relationship-mapping, renewal-expansion, product-marketing, icp-tal, customer-journey, discovery-demo, advanced-techniques
- **1 agente**: playbook-coach (AI Sales Coach — clasifica problemas GTM, sintetiza playbooks personalizados)
- **3 comandos**: `/playbook`, `/deal-analysis`, `/kickoff`
- **22 templates**: T-35 a T-56
- **~70 archivos** total

## Skills

### 1. sales-transformation
Orquestador de transformación de 90 días en 7 fases (Part 0-7). 105 preguntas diagnósticas en 7 dominios. Rutea a los demás skills según la fase. Meta-skill que secuencia todo el sistema.

### 2. customer-success-ops
Modelo operativo completo de CS: Onboard (O1-O4: Handoff, Kickoff, JIP, First Impact), Adopt (A1-A5: Drive Impact, EBR, Trigger Plays, Health Scoring, Renewal), Expand (E1-E5: Expansion, Whitespace, Account Planning, Ejecución, Terminación). 6 core skills del CSM.

### 3. pre-discovery-research
Sistema de inteligencia pre-llamada en 5 capas: Company → Human → Industry → Geography → Timing. Incluye prompts para Perplexity y schema de Data Cube.

### 4. deal-strategy
Skill fusionado: win/loss analysis PULSO + facilitación de stakeholder meetings (3 partes: As-Is → What's Possible → Agree Plan) + tácticas de criterios de decisión (deprioritize/insert/improve). CxO sponsorship y KPI design.

### 5. relationship-mapping
Buying center avanzado (7 roles vs 4 básicos). 4 jugadas tácticas (LinkedIn → RRR → Provocative → Bottom-up). Mapeo organizacional 6 pasos. Matriz power/interest. Planificación 3×3. 5 jugadas de multi-threading.

### 6. renewal-expansion
Conversación de renovación (AVE → SPI review → demo → story → trade). Gestión de expectation gap (3 tipos). Whitespace planning (Impact × CE). Ejecución de expansión. Checklist de terminación de cuenta.

## Agente: playbook-coach
Pipeline de 6 fases: clasificación de problema (8 dominios) → análisis de contexto → scoring de blueprints (relevancia + impacto + factibilidad) → síntesis de playbook → creación de enablement → testing de hipótesis.

## Comandos

| Comando | Propósito |
|---------|-----------|
| `/playbook [problema/empresa]` | Sintetiza playbook GTM personalizado usando el playbook-coach |
| `/deal-analysis [deal/pipeline]` | Sesión interactiva de análisis win/loss con PULSO |
| `/kickoff [nombre cliente]` | Orquesta llamada de kickoff completa (prep → AVE → PULSO → JIP) |

## Relación con otros plugins

- **sales-blueprint**: play-to-win extiende el ciclo de ventas hacia post-venta y estrategia avanzada. sales-blueprint cubre discovery → pipeline → proposals → coaching. play-to-win cubre pre-discovery → deal strategy → CS ops → renewal.
- **growth-foundations**: ICP y positioning alimentan el pre-discovery research.
- **motor-de-ofertas**: Los funnels de motor-de-ofertas se optimizan con las métricas de CS health scoring.

## Fuente

Repositorio: `/Volumes/deathstar/Development/Play to win/`
- 31 blueprints Metodología GrowthOS (extracted_text/markdown/)
- SALES_SYSTEM_TRANSFORMATION_FRAMEWORK.md (90-day orchestrator)
- PRE_DISCOVERY_RESEARCH_SYSTEM.md (5-layer intelligence)
- ai_sales_coach_system/ (5 archivos: classifier, scorer, synthesizer, enablement, hypothesis)
- deliverable_templates/ (wave1, wave2, complete discovery)

## Templates (T-35 a T-46)

| ID | Template | Skill |
|----|----------|-------|
| T-35 | sales-health-audit | sales-transformation |
| T-36 | playbook-synthesis | sales-transformation |
| T-37 | hypothesis-card | sales-transformation |
| T-38 | messaging-architecture | sales-transformation |
| T-39 | joint-impact-plan-worksheet | customer-success-ops |
| T-40 | health-scoring-dashboard | customer-success-ops |
| T-41 | trigger-play-cards | customer-success-ops |
| T-42 | pre-call-brief | pre-discovery-research |
| T-43 | win-loss-analysis-template | deal-strategy |
| T-44 | org-mapping-worksheet | relationship-mapping |
| T-45 | three-by-three-canvas | relationship-mapping |
| T-46 | renewal-conversation-script | renewal-expansion |

## Phase 2: 5 Skills Adicionales (2026-02-17)

### 7. product-marketing
ARCO DE TRANSFORMACIÓN storytelling (neural coupling, 3-part structure) + establecimiento de impacto (↓Cost, ↑Experience, ↑Revenue) + value proposition canvas + positioning statement + messaging architecture matrix. Blueprints #22, #27.

### 8. icp-tal
ICP data-driven con PULSO de 5 pasos + TAL con 3 enfoques (Named/Fit/In-Market) + cálculo por tiers + mapeo de relaciones con 4 jugadas tácticas y orquestación 3×3. Blueprints #16, #14, #15, #13.

### 9. customer-journey
PULSO como puente entre equipos (SDR→AE→CSM→AM) + 7 Momentos Clave del Método SaaS (M1-M7) + diseño de etapas + shift BANT→Logro. Blueprints #10, #28.

### 10. discovery-demo
Discovery call con AVE + PULSO + checklist 54 puntos + diagnosis deep-dive con 4 tipos de preguntas contextuales + demo framework prescribe (PREP→DEMO→LOGRO→RECAP). Blueprints #25, #26, #24.

### 11. advanced-techniques
Critical event acceleration (4 tipos de comprador, backward planning) + trading sin descuentos (9 pasos, 3-deal option matrix) + influencia en criterios de decisión (DEPRIORITIZE/INSERT/IMPROVE). Blueprints #08, #21, #23.

## Templates Phase 2 (T-47 a T-56)

| ID | Template | Skill |
|----|----------|-------|
| T-47 | heros-journey-story-template | product-marketing |
| T-48 | impact-messaging-canvas | product-marketing |
| T-49 | icp-segment-worksheet | icp-tal |
| T-50 | tal-tiering-calculator | icp-tal |
| T-51 | handoff-documentation-template | customer-journey |
| T-52 | seven-moments-checklist | customer-journey |
| T-53 | discovery-call-playbook | discovery-demo |
| T-54 | demo-execution-template | discovery-demo |
| T-55 | critical-event-planner | advanced-techniques |
| T-56 | trade-deal-configurator | advanced-techniques |

## Fase 3 pendiente: Enrichments a sales-blueprint

El plan incluye enriquecer skills existentes en sales-blueprint con contenido de los blueprints:
- discovery-mastery: AVE, wagon connection, ARCO DE TRANSFORMACIÓN, critical events, diagnostic call, impact types
- pipeline-management: 7 Key Moments (MÉTODO DE 7 MOMENTOS), stage entry/exit criteria
- proposal-generation: 9-step trading language, decision criteria manipulation
- coaching-cadence: 8 coaching models, 13-week rotation cycle

Estos enrichments son Phase 3 separada para mantener limpia la generación del plugin principal.
