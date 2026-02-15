# sales-blueprint

Sistema de ejecucion de ventas B2B basado en la metodologia Winning by Design. Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### discovery-mastery
Preparacion y ejecucion de discovery calls con SPICED + apertura ACE. Incluye banco de preguntas por industria/stakeholder, template de prep, y ejemplo real (ACME Cybersecurity).

**Triggers**: "discovery call", "SPICED", "qualifying opportunity", "sales discovery", "ACE opening", "call prep"

### pipeline-management
Gestion de pipeline con SPICED scoring, indicadores de salud rojo/amarillo/verde, modelo Bowtie, y metricas core (LTV:CAC, NRR, Growth Rate, Rule of 40).

**Triggers**: "pipeline review", "deal health", "pipeline health", "deal scoring", "forecast", "stuck deals"

### proposal-generation
Generacion de propuestas comerciales basadas en el diagnostico SPICED. Incluye templates enterprise y mid-market, business case con ROI, y Trading Checklist de 9 pasos.

**Triggers**: "proposal", "propuesta", "SOW", "business case", "cotizacion"

### coaching-cadence
Coaching de ventas con REKS (Results, Effort, Knowledge, Skills). Cadencia semanal/mensual, 8 modelos de coaching, conversaciones candidas, y feedback TOAST.

**Triggers**: "coaching", "1:1", "REKS", "sales coaching", "rep performance", "candid conversation"

## Agents

### sdr-agent
Workflow de SDR: research del prospect, calificacion SPICED pre-contacto, y preparacion de outreach multi-canal (email + LinkedIn + cold call).

### deal-strategist
Analisis critico de deals activos. Identifica gaps en SPICED, riesgos no mitigados, genera Mutual Action Plan y estrategia de buying center 3x3.

## Commands

### /discovery
Prepara una discovery call: research del prospect, hipotesis SPICED, preguntas priorizadas, y agenda ACE personalizada.

```
/discovery [nombre de empresa o contacto]
```

### /propuesta
Genera una propuesta comercial B2B completa basada en el diagnostico SPICED del deal. Incluye business case, ROI, y trading prep.

```
/propuesta [nombre del cliente o deal]
```

### /pipeline
Review de salud del pipeline: SPICED scoring por deal, health map, forecast en 3 niveles, y acciones priorizadas.

```
/pipeline [datos del pipeline o contexto]
```

### /coaching
Prepara un 1:1 de coaching: diagnostico REKS, agenda estructurada segun la semana del mes, y feedback preparado.

```
/coaching [nombre del rep o contexto]
```

## Metodologia

Todo el plugin esta construido sobre SPICED como lenguaje comun de diagnostico:

- **S**ituation: Hechos y contexto del prospect
- **P**ain: Dolor cuantificable + cualitativo
- **I**mpact: Impacto racional + emocional
- **C**ritical **E**vent: Deadline con consecuencias
- **D**ecision: Proceso, comite, y criterios

SPICED conecta discovery (diagnosticar), pipeline (evaluar), proposals (presentar), y coaching (mejorar). Es el hilo conductor de todo el sistema.

## Instalacion

```bash
/plugin install sales-blueprint@growth-marketplace
```
