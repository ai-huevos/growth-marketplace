# T-27: Marketing-Sales SLA — Service Level Agreement Bilateral

> **Output contract**: SLA firmable entre marketing y ventas con compromisos, métricas, y cadence de revisión.
> **Variables**: Revenue target, MQL volume, follow-up time, ICP score threshold.
> **Benchmark**: Ambos equipos pueden señalar este documento para resolver disputas de accountability.

---

## Datos del Acuerdo

| Campo | Valor |
|-------|-------|
| Empresa | |
| Revenue target anual | $ |
| Marketing contribution % | % |
| Marketing revenue target | $ |
| Periodo del SLA | Q_ 20__ |
| Firmado por (Marketing) | |
| Firmado por (Ventas) | |
| Fecha | |

---

## Compromisos de Marketing

| # | Compromiso | Métrica | Target | Medición |
|---|-----------|---------|--------|----------|
| M1 | Volumen de MQLs | MQLs/mes | | CRM report semanal |
| M2 | Calidad de MQLs | % que cumplen ICP score ≥ 60 | ≥ % | ICP scoring model |
| M3 | Data completeness | Cada MQL tiene: nombre, empresa, título, pain, source | 100% | CRM audit |
| M4 | Timing | Leads entregados before day ___ del mes | ≥ % on-time | CRM timestamps |
| M5 | Content support | Battle cards y enablement materials actualizados | Monthly | Shared drive |

---

## Compromisos de Ventas

| # | Compromiso | Métrica | Target | Medición |
|---|-----------|---------|--------|----------|
| S1 | Speed to contact | Contactar MQL en < ___ horas | ≥ 90% | CRM timestamps |
| S2 | Lead feedback | Calificar como Accepted/Rejected + razón | 100% | CRM status field |
| S3 | Meeting conversion | Convertir MQLs a meetings | ≥ % | CRM meetings logged |
| S4 | Attribution | Reportar wins/losses con marketing source | 100% | CRM closed deals |
| S5 | Feedback loop | Compartir objeciones y patterns semanalmente | Weekly | Slack channel / meeting |

---

## Definiciones Compartidas

| Término | Definición | Score/Criterio |
|---------|-----------|----------------|
| MQL (Marketing Qualified Lead) | Lead que cumple ICP + intent signal | ICP score ≥ 60 + action ≥ 1 |
| SQL (Sales Qualified Lead) | MQL aceptado por ventas + BANT confirmado | SLA accepted + budget confirmed |
| Opportunity | SQL con propuesta presentada | Proposal sent |
| Win | Deal cerrado | Contract signed |
| Loss | Deal perdido | Lost reason documented |

---

## Cadence de Revisión

| Reunión | Frecuencia | Duración | Agenda |
|---------|------------|----------|--------|
| Operational sync | Semanal | 15 min | Métricas vs target, blockers, hot leads |
| Strategic review | Mensual | 60 min | SLA performance, trends, adjustments |
| Quarterly planning | Trimestral | 2-3h | Revenue target update, SLA refresh |

---

## Escalación

| Trigger | Acción | Responsable |
|---------|--------|-------------|
| Marketing < 80% del target MQL por 2 semanas consecutivas | Emergency review meeting | Marketing lead |
| Ventas < 80% follow-up rate por 2 semanas consecutivas | Emergency review meeting | Sales lead |
| MQL quality disputed (rechazo > 30%) | Joint review of ICP criteria | Both leads |
| Revenue target at risk | Executive escalation | Both leads → CEO |

---

## Scorecard Mensual

| Métrica | Target | Mes 1 | Mes 2 | Mes 3 | Trend |
|---------|--------|-------|-------|-------|-------|
| MQLs entregados | | | | | |
| MQL quality (% ICP ≥ 60) | | | | | |
| Speed to contact (< 24h) | | | | | |
| MQL → Meeting rate | | | | | |
| Meeting → Opportunity rate | | | | | |
| Win rate | | | | | |
| Revenue from marketing leads | | | | | |

---

*Conecta con: ICP scoring → /icp (define el threshold), Pipeline health → /pipeline (tracks through funnel), SPICED → /discovery (qualifies individual deals).*
