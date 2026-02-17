# play-to-win

Sistema de transformacion de ventas B2B en 90 dias basado en 31 blueprints de Winning by Design (45,199 palabras de metodologia). Convierte actos aleatorios de ventas en un motor de revenue sistematico. Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### sales-transformation
Orquestador principal de transformacion: despliega un sistema de ventas completo en 7 fases secuenciales — desde product marketing hasta tecnicas avanzadas. Incluye 105 preguntas diagnosticas, taxonomia de problemas, cascadas de informacion, y roadmap de 90 dias.

**Triggers**: "transformacion ventas", "sistema ventas", "90 dias ventas", "auditoria ventas", "sales health", "sales transformation", "sales system", "90 day sales", "sales audit"

### product-marketing *(planificado)*
Fundamentos de product marketing: hero's journey, value proposition canvas, positioning statement, messaging architecture matrix, y taglines de impacto.

**Triggers**: "product marketing", "positioning", "messaging", "value proposition", "hero journey", "tagline"

### icp-tal *(planificado)*
ICP data-driven con scoring SPICED + Target Account List con modelo 3x3 de stakeholder mapping y priorizacion por fit + intent.

**Triggers**: "ICP", "ideal customer", "target accounts", "TAL", "stakeholder mapping", "account prioritization"

### customer-journey *(planificado)*
Mapa de viaje del cliente SaaS con etapas SPICED, handoff protocols, entry/exit criteria, y touchpoint excellence standards.

**Triggers**: "customer journey", "sales stages", "handoff", "buyer journey", "sales process stages"

### discovery-demo *(planificado)*
Discovery call con apertura ACE + SPICED completo, y demo framework pain-to-solution-to-impact con criterios de decision.

**Triggers**: "discovery call", "demo framework", "ACE opening", "pain to solution", "demo customization"

### advanced-techniques *(planificado)*
Tecnicas avanzadas situacionales: storytelling (hero's journey), trading (no descuentos), influencia de criterios de decision, y aceleracion de critical events.

**Triggers**: "trading framework", "storytelling ventas", "decision criteria", "critical event", "advanced sales", "stuck deals"

## Agents

### playbook-coach
Coach de ventas AI que analiza contexto de negocio, selecciona blueprints relevantes (2-4 por problema), genera hipotesis testables IF/THEN/BECAUSE, sintetiza playbooks personalizados, y crea paquetes de enablement con materiales de entrenamiento.

## Commands

### /playbook
Genera un sales playbook personalizado basado en el contexto del negocio. Incluye proceso stage-by-stage, scripts de discovery y demo, manejo de objeciones, y metricas de exito.

```
/playbook [contexto del negocio o desafio GTM]
```

### /deal-analysis
Analisis de deals activos con diagnostico SPICED completo, identificacion de gaps, strategy de decision criteria, y plan de aceleracion con critical events.

```
/deal-analysis [nombre del deal o contexto]
```

### /kickoff
Inicia un programa de transformacion de ventas de 90 dias: ejecuta el diagnostico de salud, identifica gaps criticos, y genera el roadmap con dependencias y decision gates.

```
/kickoff [nombre de la empresa o contexto]
```

## Metodologia

El plugin se construye sobre la sintesis de 31 blueprints de Winning by Design, organizados en 7+1 partes secuenciales:

| Parte | Foco | Blueprints |
|-------|------|------------|
| **0** | Product Marketing | 22, 27 |
| **1** | ICP | 16, 30 |
| **2** | TAL + Stakeholders | 13, 14, 15 |
| **3** | Customer Journey | 10, 28 |
| **4** | Goals + Playbook | 7, 9 |
| **5** | Discovery | 25, 26, 30 |
| **6** | Demo + Prescription | 24, 27 |
| **7** | Tecnicas Avanzadas | 8, 21, 22, 23 |

### Conceptos clave

- **SPICED**: Lenguaje comun de diagnostico (Situation, Pain, Impact, Critical Event, Decision) — conecta todas las fases
- **REKS**: Framework de coaching (Results, Efforts, Knowledge, Skills) — coaching basado en metricas
- **ACE**: Apertura profesional de calls (Appreciate, Check time, End goal)
- **Information Cascades**: Cada componente alimenta datos explicitos al siguiente, eliminando adivinanzas
- **Trading (no negociacion)**: Framework de 9 pasos para acuerdos win-win sin descuentos

### Conexion con sales-blueprint

`play-to-win` es el sistema de transformacion end-to-end. `sales-blueprint` cubre la ejecucion tactica (discovery, pipeline, proposals, coaching). Los plugins se complementan:

- `play-to-win` diagnostica y construye el sistema completo
- `sales-blueprint` ejecuta las operaciones diarias dentro del sistema

## Instalacion

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install play-to-win@growth-marketplace
```

## Quick Start

```
# Iniciar transformacion de ventas de 90 dias
/kickoff Mi startup SaaS B2B tiene 10 reps, ciclo de venta de 90 dias, win rate de 20%

# Generar playbook personalizado
/playbook Empresa fintech, venta enterprise, deal size $100K, equipo de 5 AEs

# Analizar un deal activo
/deal-analysis Deal Acme Corp: discovery hecha, demo pendiente, 3 stakeholders identificados
```
