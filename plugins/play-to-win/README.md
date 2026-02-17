# play-to-win

Sistema de transformacion de ventas B2B en 90 dias basado en 31 frameworks de Metodología GrowthOS (45,199 palabras de metodologia). Convierte actos aleatorios de ventas en un motor de revenue sistematico. Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### sales-transformation
Orquestador principal de transformacion: despliega un sistema de ventas completo en 7 fases secuenciales — desde product marketing hasta tecnicas avanzadas. Incluye 105 preguntas diagnosticas, taxonomia de problemas, cascadas de informacion, y roadmap de 90 dias.

**Triggers**: "transformacion ventas", "sistema ventas", "90 dias ventas", "auditoria ventas", "sales health", "sales transformation", "sales system", "90 day sales", "sales audit"

### product-marketing
Sistema integrado de product marketing: Hero's Journey storytelling (neural coupling, 3-part story structure), establecimiento de impacto (3 tipos: ↓Cost, ↑Experience, ↑Revenue), value proposition canvas, positioning statement, y messaging architecture matrix.

**Triggers**: "product marketing", "positioning", "messaging", "value proposition", "hero journey", "tagline", "storytelling ventas", "impact messaging", "narrativa impacto", "propuesta de valor", "arquitectura mensajes"

### icp-tal
ICP data-driven con metodologia PULSO de 5 pasos (Diagnostico → Cuantitativo → Cualitativo → Analisis → Documentacion) + Target Account List con 3 enfoques (Named/Fit/In-Market), calculo por tiers, y mapeo de relaciones con 4 jugadas tacticas y orquestacion 3×3.

**Triggers**: "ICP", "ideal customer", "perfil cliente ideal", "target accounts", "TAL", "lista cuentas", "stakeholder mapping", "mapeo stakeholders", "account prioritization", "priorizacion cuentas", "fit score", "account tiering", "3x3 orchestration"

### customer-journey
Mapa completo del viaje del cliente SaaS: PULSO como puente entre equipos (SDR→AE→CSM→AM), los 7 Momentos Clave del Metodo de Ventas SaaS (M1-M7), diseno de etapas con entry/exit criteria, y shift de BANT a Impact.

**Triggers**: "customer journey", "viaje del cliente", "sales stages", "etapas venta", "handoff", "traspaso", "buyer journey", "sales process stages", "7 key moments", "momentos clave", "SaaS sales method"

### discovery-demo
Discovery call con apertura AVE + progresion PULSO completa + checklist de 54 puntos, diagnosis deep-dive con 4 tipos de preguntas contextuales, y demo framework de prescripcion (PREP→DEMO→IMPACT→RECAP) con use-case selling.

**Triggers**: "discovery call", "llamada discovery", "demo framework", "AVE opening", "apertura AVE", "pain to solution", "demo customization", "diagnostico call", "diagnose call", "perfect discovery", "demo prescribe", "connecting vagones", "técnica de vagones"

### advanced-techniques
Tecnicas situacionales para deals estancados: aceleracion de Situaciones Críticas (4 tipos de comprador, backward planning), trading sin descuentos (9 pasos, 3-deal option matrix), e influencia en criterios de organización (DEPRIORITIZE/INSERT/IMPROVE ranking).

**Triggers**: "trading framework", "framework trading", "decision criteria", "criterios decision", "situacion critica", "evento critico", "advanced sales", "ventas avanzadas", "stuck deals", "deals estancados", "negociacion ventas", "trade not negotiate"

## Agents

### playbook-coach
Coach de ventas AI que analiza contexto de negocio, selecciona frameworks relevantes de Metodología GrowthOS (2-4 por problema), genera hipotesis testables IF/THEN/BECAUSE, sintetiza playbooks personalizados, y crea paquetes de enablement con materiales de entrenamiento.

## Commands

### /playbook
Genera un sales playbook personalizado basado en el contexto del negocio. Incluye proceso stage-by-stage, scripts de discovery y demo, manejo de objeciones, y metricas de exito.

```
/playbook [contexto del negocio o desafio GTM]
```

### /deal-analysis
Analisis de deals activos con diagnostico PULSO completo, identificacion de gaps, strategy de criterios de organización, y plan de aceleracion con Situaciones Críticas.

```
/deal-analysis [nombre del deal o contexto]
```

### /kickoff
Inicia un programa de transformacion de ventas de 90 dias: ejecuta el diagnostico de salud, identifica gaps criticos, y genera el roadmap con dependencias y decision gates.

```
/kickoff [nombre de la empresa o contexto]
```

## Metodologia

El plugin se construye sobre la sintesis de 31 frameworks de Metodología GrowthOS, organizados en 7+1 partes secuenciales:

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

- **PULSO**: Lenguaje comun de diagnostico (Panorama, Urgencia, Logro, Situación Crítica, Organización) — conecta todas las fases
- **ROCA**: Framework de coaching (Resultados, Operación, Conocimiento, Aptitud) — coaching basado en metricas
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
