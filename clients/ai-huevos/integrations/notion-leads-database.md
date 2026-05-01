# Notion Lead Database Spec — KAI Leads

```yaml
client: AI Huevos
document: notion-leads-database-spec
version: 1.0
status: DRAFT
date: 2026-02-22
platform: Notion
purpose: Lightweight CRM for launch (migrate to Attio when pipeline > 100 leads)
```

> **CRM de lanzamiento.** Notion como base de datos de leads con Energy Score,
> perfil PULSO completo, y tracking de funnel stage.
> Migración a Attio cuando el pipeline justifique un CRM dedicado.

---

## Database: "KAI Leads"

### Properties

| Property | Type | Values / Format | Source | Notes |
|----------|------|----------------|--------|-------|
| **Nombre** | Title | Text | Tally email gate | Primary display |
| **Email** | Email | email@empresa.com | Tally email gate | Unique identifier |
| **Empresa** | Rich Text | Text | Tally email gate | — |
| **Energy Score** | Number | 0-100 | n8n (calculated) | Primary qualification metric |
| **Segmento** | Select | APAGADO / LATENTE / CONECTADO / ENERGIZADO | n8n (calculated) | Color-coded: 🔴🟠🟡🟢 |
| **Temperatura** | Select | HOT / WARM / COLD | n8n (calculated) | Color-coded: 🔴🟡🔵 |
| **Funnel Stage** | Select | Quiz Complete / ORIGEN Active / ORIGEN Complete / Sprint Booked / Sprint Active / Sprint Complete / Build Proposed / Build Active / Partner Active | Manual + n8n | Pipeline tracking |
| **Sprint Status** | Select | — / Booked / In Progress / Completed / Cancelled | Cal.com webhook + manual | — |
| **Sprint Date** | Date | YYYY-MM-DD | Cal.com webhook | — |
| **Q10 Verbatim** | Rich Text | Free text (Spanish) | Tally quiz | VoC goldmine — search this field |
| **Eje 1 Flujo** | Number | 0-25 | n8n | Flujo de Datos score |
| **Eje 2 Adopción** | Number | 0-25 | n8n | Adopción Real score |
| **Eje 3 Visibilidad** | Number | 0-25 | n8n | Visibilidad Operativa score |
| **Eje 4 Capacidad** | Number | 0-25 | n8n | Capacidad del Equipo score |
| **PULSO-P** | Number | 0-10 | n8n | Panorama |
| **PULSO-U** | Number | 0-10 | n8n | Urgencia |
| **PULSO-L** | Number | 0-10 | n8n | Logro |
| **PULSO-S** | Number | 0-10 | n8n | Situación Crítica |
| **PULSO-O** | Number | 0-10 | n8n | Organización |
| **Eje Más Débil** | Select | Flujo de Datos / Adopción Real / Visibilidad Operativa / Capacidad del Equipo | n8n | For sales opening |
| **Acción Recomendada** | Rich Text | Auto-generated recommendation | n8n | — |
| **Tamaño Empresa** | Select | A (<20) / B (20-50) / C (51-200) / D (200+) | Tally Q1 | — |
| **Rol** | Select | A (CEO) / B (COO) / C (CTO) / D (VP/Gerente) | Tally Q2 | — |
| **Fecha Quiz** | Date | YYYY-MM-DD | n8n timestamp | — |
| **Traffic Source** | Select | linkedin_ad / linkedin_organic / referral / conference / direct / google_ad / whatsapp | UTM or manual | — |
| **Assigned To** | Person | KAI Partner | Manual | — |
| **Notes** | Rich Text | Free text | Manual | Discovery notes, call notes |
| **Last Contact** | Date | YYYY-MM-DD | Manual | — |
| **Build Revenue** | Number | USD | Manual | If converted to Build |

---

## Views

### 1. Pipeline View (Board)

```
Group by: Funnel Stage
Sort by: Energy Score (ascending — worst first = most opportunity)

Columns:
[Quiz Complete] → [ORIGEN Active] → [ORIGEN Complete] → [Sprint Booked] → [Sprint Active] → [Sprint Complete] → [Build Proposed] → [Build Active] → [Partner Active]
```

### 2. HOT Leads (Filtered Table)

```
Filter: Temperatura = HOT
Sort: Fecha Quiz (newest first)
Show: Nombre, Empresa, Energy Score, Q10 Verbatim, Acción Recomendada, Assigned To
```

### 3. Sprint Pipeline (Filtered Table)

```
Filter: Sprint Status is not empty
Sort: Sprint Date (soonest first)
Show: Nombre, Empresa, Sprint Status, Sprint Date, Energy Score, Assigned To
```

### 4. VoC Mining (Filtered Table)

```
Filter: Q10 Verbatim is not empty
Sort: Fecha Quiz (newest first)
Show: Nombre, Empresa, Rol, Energy Score, Q10 Verbatim, Segmento
```

Use this view to export Q10 responses for clustering in `voc/prospect-language-bank.md`.

### 5. Weekly Dashboard (Gallery)

```
Filter: Fecha Quiz is within past 7 days
Show: count by Segmento, count by Temperatura, avg Energy Score
```

---

## Automation Rules (via n8n)

| Trigger | Action | n8n Workflow |
|---------|--------|-------------|
| Tally quiz completed | Create lead page with all scores | Workflow 1 |
| Cal.com booking created | Update Sprint Status + Funnel Stage | Workflow 2 |
| Kit tag "origen-complete" | Update Funnel Stage | Workflow 3 |
| Manual: Sprint completed | Update Sprint Status → propose Build | Manual |
| Manual: Build signed | Update Funnel Stage + Build Revenue | Manual |

---

## Migration Trigger: Notion → Attio

**When to migrate:**

- [ ] 100+ leads in database
- [ ] Need deal stages with probability weighting
- [ ] Need automated follow-up sequences based on CRM stage
- [ ] Need multi-user pipeline management
- [ ] Need revenue forecasting

**Migration plan:**

1. Export Notion DB to CSV
2. Map properties to Attio fields (Energy Score, PULSO, etc.)
3. Import via Attio API
4. Update n8n workflows to write to Attio instead of Notion
5. Keep Notion as read-only archive for 30 days
6. Delete Notion DB after confirming Attio data integrity

**Attio advantages over Notion:**
- Native deal pipeline with weighted probabilities
- Automatic email sync (see full conversation history)
- API-first design (better n8n integration)
- Team collaboration features (assignments, tasks, notes)

---

## Setup Checklist

- [ ] Create "KAI Leads" database in Notion workspace
- [ ] Add all properties from table above
- [ ] Create 4 views (Pipeline, HOT Leads, Sprint Pipeline, VoC Mining)
- [ ] Set color coding: Segmento (🔴🟠🟡🟢), Temperatura (🔴🟡🔵)
- [ ] Share database with Notion MCP integration
- [ ] Copy database ID for n8n environment variable
- [ ] Test: create one manual entry with all fields populated
- [ ] Test: verify n8n can write to database via API

---

*Lightweight by design. Migrate when the pipeline demands it.*
