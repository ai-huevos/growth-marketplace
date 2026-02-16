# Revenue Infrastructure — Fase 0: Medición Antes de Optimización

> Agrega la "Fase 0" que falta en funnel-optimization: cómo construir la infraestructura de medición antes de optimizar. Sin medición, la optimización es adivinanza.

---

## Principio: Medir Primero, Optimizar Después

```
INFRAESTRUCTURA DE MEDICIÓN (este framework)
     ↓ datos reales fluyendo
DIAGNÓSTICO (funnel-optimization existente)
     ↓ gaps identificados
OPTIMIZACIÓN (A/B testing, scaling)
     ↓ resultados comprobados
ESCALA (vertical → horizontal → multiplicación)
```

---

## Los 3 Pilares del Revenue System

### Pilar 1: Infraestructura de Medición

Setup de tracking en 5 semanas.

| Semana | Acción | Entregable |
|--------|--------|-----------|
| 1 | **Auditoría** — Revisar qué tracking existe hoy | Inventario de herramientas + gaps |
| 2-3 | **Implementación** — Setup básico (Analytics + CRM + Attribution) | Tracking funcionando |
| 4 | **Configuración** — Modelos de atribución (First/Last/Multi-touch) | Attribution model activo |
| 5 | **Dashboarding** — Crear dashboards de conversion rate por stage | Dashboard operativo |

#### Stack Recomendado (Mínimo Viable)

| Capa | Herramienta | Propósito |
|------|-------------|-----------|
| Web Analytics | Google Analytics 4 | Traffic, sessions, conversion events |
| CRM | HubSpot / Salesforce | Leads, deals, pipeline |
| Attribution | UTM params + CRM integration | Source tracking |
| Email | CRM built-in o Mailchimp/Resend | Sequence metrics |
| Dashboard | Looker Studio / Metabase | Visualización unificada |

### Pilar 2: Auditoría Sistemática de Canales

Matriz de priorización para cada canal activo o potencial.

| Canal | Costo Mensual ($) | Esfuerzo (1-10) | Impacto (1-10) | Score | Prioridad |
|-------|-------------------|------------------|-----------------|-------|-----------|
| | | | | E×I = | |
| | | | | E×I = | |
| | | | | E×I = | |
| | | | | E×I = | |

**Regla**: Canales con Esfuerzo ≥ 7 e Impacto ≤ 4 → eliminar inmediatamente.

### Pilar 3: Embudo Técnico con SLAs

Definición precisa de cada stage del funnel con criterios cuantificables.

```
CONTACTO (cualquier interacción)
     ↓ Criterio: ICP Match ≥ 5/10
MQL (Marketing Qualified Lead)
     ↓ Criterio: Intent Score ≥ 5/10
SQL (Sales Qualified Lead)
     ↓ Criterio: BANT confirmed + meeting scheduled
OPPORTUNITY (propuesta presentada)
     ↓ Criterio: Decision timeline ≤ 90 días
CUSTOMER (deal cerrado)
```

---

## Lead Scoring Model

### Componente 1: ICP Match Score (0-10)

| Criterio | Puntos | Evidencia |
|----------|--------|-----------|
| Company Size match | 0-3 | # employees within target range |
| Title/Role match | 0-3 | Decision maker / influencer / user |
| Industry match | 0-2 | Target industry list |
| Budget indicators | 0-2 | Tech stack signals, growth signals |
| **Total ICP** | **/10** | |

### Componente 2: Intent Score (0-10)

| Señal | Puntos | Fuente |
|-------|--------|--------|
| Content download | 1-2 | Marketing automation |
| Multiple page visits (3+) | 1-2 | Web analytics |
| Email reply/engagement | 2-3 | Email platform |
| Pricing page visit | 3-4 | Web analytics |
| Demo request | 4-5 | Form submission |
| **Total Intent** | **/10** | |

### Lead Score Total = ICP + Intent (0-20)

| Score | Clasificación | Acción |
|-------|--------------|--------|
| 16-20 | Hot lead | Sales contact inmediato (< 1 hora) |
| 11-15 | Warm lead | Nurture + sales follow-up (< 24 horas) |
| 6-10 | Cold lead | Marketing nurture (email sequence) |
| 0-5 | Non-qualified | Discard o long-term nurture |

### Conexión con ICP scoring de growth-foundations

El ICP Match Score usa los mismos criterios que el ICP scoring (0-100) de `/icp`, simplificado a 0-10 para velocidad de calificación:

| ICP Score (growth-foundations) | ICP Match (funnel-optimization) |
|-------------------------------|--------------------------------|
| 80-100 (Tier 1) | 8-10 |
| 60-79 (Tier 2) | 6-7 |
| 40-59 (Tier 3) | 4-5 |
| 0-39 (Non-ICP) | 0-3 |

---

## Weekly Review Protocol

| Reunión | Duración | Participantes | Agenda |
|---------|----------|---------------|--------|
| **Funnel Review** | 30 min | Marketing + Sales lead | Conversion rates by stage, MQL quality feedback, hot leads |

### Dashboard del Review

| Stage | Volume esta semana | Conversion % | vs Target | vs Semana Anterior |
|-------|--------------------|-------------|-----------|-------------------|
| Visitantes → Contacto | | % | 🟢🟡🔴 | ↑↓→ |
| Contacto → MQL | | % | 🟢🟡🔴 | ↑↓→ |
| MQL → SQL | | % | 🟢🟡🔴 | ↑↓→ |
| SQL → Opportunity | | % | 🟢🟡🔴 | ↑↓→ |
| Opportunity → Customer | | % | 🟢🟡🔴 | ↑↓→ |

---

## Conexión SPICED

El lead scoring conecta con SPICED:
- **ICP Match** = Situation (quién es) + Pain (qué necesita)
- **Intent Score** = Critical Event (timing signals) + Decision (engagement level)
- El MQL threshold es un **Score-as-Gate**: score < 11 = no pasa a ventas

---

*Derivado de Playbook 04b: Revenue-First Marketing. Llena el gap de "Fase 0" en funnel-optimization: sin infraestructura de medición, el diagnóstico y la optimización son ciegos. La PM usa esto en dog-fooding para establecer la base de medición de AI Huevos antes de correr /funnel-diagnosis.*
