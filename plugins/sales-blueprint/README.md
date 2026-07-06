# sales-blueprint

Sistema de ejecucion de ventas B2B basado en la Metodología GrowthOS. Plugin del [AI Huevos Growth Marketplace](../../README.md).

## Skills

### discovery-mastery
Preparacion y ejecucion de discovery calls con PULSO + apertura AVE. Incluye banco de preguntas por industria/stakeholder, template de prep, y ejemplo real (ACME Cybersecurity).

**Triggers**: "discovery call", "PULSO", "qualifying opportunity", "sales discovery", "AVE opening", "call prep"

### pipeline-management
Gestion de pipeline con PULSO scoring, indicadores de salud rojo/amarillo/verde, modelo CICLO, y metricas core (LTV:CAC, NRR, Growth Rate, Rule of 40).

**Triggers**: "pipeline review", "deal health", "pipeline health", "deal scoring", "forecast", "stuck deals"

### proposal-generation
Generacion de propuestas comerciales basadas en el diagnostico PULSO. Incluye templates enterprise y mid-market, business case con ROI, y Trading Checklist de 9 pasos.

**Triggers**: "proposal", "propuesta", "SOW", "business case", "cotizacion"

### coaching-cadence
Coaching de ventas con ROCA (Resultados, Operación, Conocimiento, Aptitud). Cadencia semanal/mensual, 8 modelos de coaching, conversaciones candidas, y feedback TOAST.

**Triggers**: "coaching", "1:1", "ROCA", "sales coaching", "rep performance", "candid conversation"

## Agents

### sdr-agent
Workflow de SDR: research del prospect, calificacion PULSO pre-contacto, y preparacion de outreach multi-canal (email + LinkedIn + cold call).

### deal-strategist
Analisis critico de deals activos. Identifica gaps en PULSO, riesgos no mitigados, genera Mutual Action Plan y estrategia de buying center 3x3.

### proposal-pricing-agent
Convierte el contexto de negocio + PULSO de un deal + la pricing grid instalada del cliente en un borrador de propuesta con racional de precio explicito. Actua como Deal Desk / RevOps analyst — nunca vende, negocia, ni envia el documento. Zona Red permanente (no gradua mas alla de HITL).

## Commands

### /discovery
Prepara una discovery call: research del prospect, hipotesis PULSO, preguntas priorizadas, y agenda ACE personalizada.

```
/discovery [nombre de empresa o contacto]
```

### /propuesta
Genera una propuesta comercial B2B completa basada en el diagnostico PULSO del deal. Incluye business case, ROI, y trading prep.

```
/propuesta [nombre del cliente o deal]
```

### /pipeline
Review de salud del pipeline: PULSO scoring por deal, health map, forecast en 3 niveles, y acciones priorizadas.

```
/pipeline [datos del pipeline o contexto]
```

### /coaching
Prepara un 1:1 de coaching: diagnóstico ROCA, agenda estructurada segun la semana del mes, y feedback preparado.

```
/coaching [nombre del rep o contexto]
```

## Metodologia

Todo el plugin esta construido sobre PULSO como lenguaje comun de diagnostico:

- **P**anorama: Hechos y contexto del prospect
- **U**rgencia: Dolor cuantificable + cualitativo
- **L**ogro: Impacto racional + emocional
- **S**ituación Crítica: Deadline con consecuencias
- **O**rganización: Proceso, comite, y criterios

PULSO conecta discovery (diagnosticar), pipeline (evaluar), proposals (presentar), y coaching (mejorar). Es el hilo conductor de todo el sistema.

## Instalación

```bash
# Agregar el marketplace (solo la primera vez)
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar el plugin
/plugin install sales-blueprint@growth-marketplace
```
