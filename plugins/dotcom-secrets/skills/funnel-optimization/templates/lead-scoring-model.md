# T-30: Lead Scoring Model — Modelo de Calificación de Leads

> **Output contract**: Modelo de scoring operativo con criterios ICP + Intent, thresholds, y protocolo de routing.
> **Variables**: Criterios de ICP, señales de intent, thresholds por stage.
> **Benchmark**: Un SDR puede calificar un lead en < 2 minutos usando este modelo.

---

## Datos del Modelo

| Campo | Valor |
|-------|-------|
| Empresa | |
| ICP Profile (de /icp) | |
| Fecha de creación | |
| Última actualización | |
| Owner | |

---

## Componente 1: ICP Match Score (0-10)

| # | Criterio | Definición | Puntos | Score |
|---|----------|-----------|--------|-------|
| 1 | Company Size | ___-___ employees = 3pts, ___-___ = 2pts, otro = 0-1pts | 0-3 | /3 |
| 2 | Title/Role | Decision maker = 3pts, Influencer = 2pts, User = 1pt, Other = 0 | 0-3 | /3 |
| 3 | Industry | Target list: ___, ___, ___ = 2pts, Adjacent = 1pt | 0-2 | /2 |
| 4 | Budget Signals | Uses [tool X] = 1pt, Recently funded = 1pt, Growing team = 1pt | 0-2 | /2 |
| | **TOTAL ICP** | | **/10** | |

---

## Componente 2: Intent Score (0-10)

| # | Señal | Fuente | Puntos | Score |
|---|-------|--------|--------|-------|
| 1 | Content download (1 asset) | Marketing automation | 1 | /1 |
| 2 | Multiple downloads (2+ assets) | Marketing automation | 2 | /2 |
| 3 | Multiple page visits (3+ pages) | Web analytics | 1-2 | /2 |
| 4 | Email engagement (open + click) | Email platform | 1-2 | /2 |
| 5 | Email reply | Email platform | 2-3 | /3 |
| 6 | Pricing page visit | Web analytics | 3 | /3 |
| 7 | Demo/trial request | Form submission | 4-5 | /5 |
| | **TOTAL INTENT** | | **/10** | |

*Nota: Intent se acumula. Un lead con download (1) + email reply (3) + pricing page (3) = 7.*

---

## Lead Score Total = ICP + Intent

| Score | Clasificación | Color | Routing | SLA de Contacto |
|-------|--------------|-------|---------|-----------------|
| 16-20 | 🔥 Hot Lead | 🔴 | Sales inmediato | < 1 hora |
| 11-15 | ♨️ Warm Lead | 🟡 | Nurture + Sales | < 24 horas |
| 6-10 | ❄️ Cold Lead | 🔵 | Marketing nurture | Email sequence |
| 0-5 | ⛔ Non-Qualified | ⚪ | Discard o long-term | No contact directo |

---

## Protocolo de Routing

```
Lead entra al sistema
     ↓
¿ICP Match ≥ 5?
     │
     ├─ NO → Marketing nurture (educate until ICP signals improve)
     │
     ├─ YES → Check Intent Score
     │         │
     │         ├─ Intent ≥ 6 → HOT/WARM → Sales contact
     │         │
     │         └─ Intent < 6 → COLD → Marketing nurture (trigger-based)
     │
     └─ ICP = 0-2 → Discard (no es nuestro mercado)
```

---

## Calibración Mensual

| Pregunta | Data Source | Acción si falla |
|----------|-----------|-----------------|
| ¿Los Hot Leads se convierten en meetings? | CRM: Hot → Meeting rate | Ajustar threshold o criterios |
| ¿Los MQLs rechazados por ventas tienen score bajo? | CRM: Rejected MQLs vs score | Si score alto + rejected = revisar ICP criteria |
| ¿Leads con score bajo cierran deals? | CRM: Closed won vs original score | Si sí = missing signal, agregar criterio |

### Regla de Calibración

Revisar el modelo cada 30 días con estos datos. Si la correlación score ↔ conversion es < 70%, re-calibrar criterios.

---

## Mapeo a ICP Scoring (growth-foundations)

| ICP Score (/icp command) | ICP Match (este modelo) | Interpretación |
|--------------------------|------------------------|----------------|
| 80-100 (Tier 1) | 8-10 | Perfect fit |
| 60-79 (Tier 2) | 6-7 | Good fit, needs qualification |
| 40-59 (Tier 3) | 4-5 | Marginal, needs strong intent |
| 0-39 (Non-ICP) | 0-3 | Not our market |

---

*Conecta con: ICP scoring → /icp (defines the match criteria), Pipeline health → /pipeline (tracks score through funnel), PULSO → /discovery (deeper qualification for warm/hot leads). Score-as-Gate: score < 11 = no handoff to sales.*
