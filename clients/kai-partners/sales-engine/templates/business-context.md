---
template: business-context
version: 1.0
description: Data contract between sales engine phases. Populated after transcript extraction.
status: TEMPLATE
---

# Business Context — {{COMPANY_NAME}}

> Extracted from: {{SOURCE}} ({{SOURCE_ID}})
> Date of call: {{CALL_DATE}}
> Extracted by: KAI Sales Engine v1.0

---

## 1. Company Profile

| Campo | Dato |
|-------|------|
| **Empresa** | {{COMPANY_NAME}} |
| **Industria** | {{INDUSTRY}} |
| **Producto/Servicio** | {{PRODUCT_SERVICE}} |
| **Modelo de negocio** | {{BUSINESS_MODEL}} |
| **Tamano** | {{COMPANY_SIZE}} (empleados) |
| **Revenue** | {{ANNUAL_REVENUE}} |
| **Mercados** | {{MARKETS}} |
| **Fundada** | {{FOUNDED}} |
| **Stage** | {{STAGE}} |
| **Website** | {{WEBSITE}} |

---

## 2. Stakeholders Identificados

| Nombre | Titulo/Rol | Influencia | Actitud | Cita Clave |
|--------|-----------|------------|---------|------------|
| {{STAKEHOLDER_1_NAME}} | {{S1_TITLE}} | {{S1_INFLUENCE}} | {{S1_ATTITUDE}} | "{{S1_QUOTE}}" |
| {{STAKEHOLDER_2_NAME}} | {{S2_TITLE}} | {{S2_INFLUENCE}} | {{S2_ATTITUDE}} | "{{S2_QUOTE}}" |
| {{STAKEHOLDER_3_NAME}} | {{S3_TITLE}} | {{S3_INFLUENCE}} | {{S3_ATTITUDE}} | "{{S3_QUOTE}}" |

---

## 3. PULSO Diagnostic

| Dimension | Score (1-5) | Evidencia |
|-----------|:-----------:|-----------|
| **P — Panorama** | {{P_SCORE}} | {{P_EVIDENCE}} |
| **U — Urgencia** | {{U_SCORE}} | {{U_EVIDENCE}} |
| **L — Logro** | {{L_SCORE}} | {{L_EVIDENCE}} |
| **S — Situacion Critica** | {{SC_SCORE}} | {{SC_EVIDENCE}} |
| **O — Organizacion** | {{O_SCORE}} | {{O_EVIDENCE}} |
| **TOTAL** | **{{PULSO_TOTAL}}/25** | {{PULSO_CLASSIFICATION}} |

Classification: 5-14 = No calificado | 15-22 = Nurture | 23-30 = Oportunidad activa

---

## 4. Pain Points Identified

| # | Dolor | Cita Textual | Departamento | Cuantificacion | Frecuencia |
|---|-------|-------------|-------------|----------------|------------|
| D1 | {{PAIN_1_DESC}} | "{{PAIN_1_QUOTE}}" | {{PAIN_1_DEPT}} | {{PAIN_1_QUANT}} | {{PAIN_1_FREQ}} |
| D2 | {{PAIN_2_DESC}} | "{{PAIN_2_QUOTE}}" | {{PAIN_2_DEPT}} | {{PAIN_2_QUANT}} | {{PAIN_2_FREQ}} |
| D3 | {{PAIN_3_DESC}} | "{{PAIN_3_QUOTE}}" | {{PAIN_3_DEPT}} | {{PAIN_3_QUANT}} | {{PAIN_3_FREQ}} |
| D4 | {{PAIN_4_DESC}} | "{{PAIN_4_QUOTE}}" | {{PAIN_4_DEPT}} | {{PAIN_4_QUANT}} | {{PAIN_4_FREQ}} |

---

## 5. Systems Landscape

| Sistema | Tipo | Departamento | Estado | Mencion |
|---------|------|-------------|--------|---------|
| {{SYS_1}} | {{SYS_1_TYPE}} | {{SYS_1_DEPT}} | {{SYS_1_STATUS}} | "{{SYS_1_QUOTE}}" |
| {{SYS_2}} | {{SYS_2_TYPE}} | {{SYS_2_DEPT}} | {{SYS_2_STATUS}} | "{{SYS_2_QUOTE}}" |
| {{SYS_3}} | {{SYS_3_TYPE}} | {{SYS_3_DEPT}} | {{SYS_3_STATUS}} | "{{SYS_3_QUOTE}}" |

---

## 6. Buying Signals

| Senal | Tipo | Cita | Peso |
|-------|------|------|------|
| {{SIGNAL_1}} | {{S1_TYPE}} | "{{S1_QUOTE}}" | {{S1_WEIGHT}} |
| {{SIGNAL_2}} | {{S2_TYPE}} | "{{S2_QUOTE}}" | {{S2_WEIGHT}} |
| {{SIGNAL_3}} | {{S3_TYPE}} | "{{S3_QUOTE}}" | {{S3_WEIGHT}} |

---

## 7. Opportunity Sizing

| Campo | Dato |
|-------|------|
| **Tier recomendado** | {{RECOMMENDED_TIER}} |
| **Rango de precio** | ${{PRICE_MIN}} - ${{PRICE_MAX}} |
| **Ciclo de venta estimado** | {{SALES_CYCLE}} |
| **Probabilidad de cierre** | {{CLOSE_PROBABILITY}} |
| **Proximo paso** | {{NEXT_STEP}} |
| **Razon** | {{PROBABILITY_REASON}} |

Pricing source: `clients/kai-partners/pricing/pricing-grid.md`

---

## 8. Action Items

| # | Accion | Responsable | Deadline | Status |
|---|--------|-------------|----------|--------|
| 1 | {{ACTION_1}} | {{A1_OWNER}} | {{A1_DATE}} | Pendiente |
| 2 | {{ACTION_2}} | {{A2_OWNER}} | {{A2_DATE}} | Pendiente |
| 3 | {{ACTION_3}} | {{A3_OWNER}} | {{A3_DATE}} | Pendiente |

---

## 9. Prospect Vocabulary (VoC)

Palabras y frases exactas del prospect para reusar en follow-up:

| Categoria | Frase del Prospect |
|-----------|--------------------|
| **Como describe su dolor** | "{{VOC_PAIN}}" |
| **Como describe su vision** | "{{VOC_VISION}}" |
| **Terminos de industria** | {{VOC_INDUSTRY_TERMS}} |
| **Metaforas que usa** | "{{VOC_METAPHORS}}" |
| **Objeciones expresadas** | "{{VOC_OBJECTIONS}}" |

---

## 10. KAI Fit Assessment

| Dimension | Score (1-5) | Notas |
|-----------|:-----------:|-------|
| **Dolor real identificado** | {{FIT_PAIN}} | {{FIT_PAIN_NOTES}} |
| **Urgencia / Situacion Critica** | {{FIT_URGENCY}} | {{FIT_URGENCY_NOTES}} |
| **Capacidad de decision** | {{FIT_DECISION}} | {{FIT_DECISION_NOTES}} |
| **Budget / Willingness to invest** | {{FIT_BUDGET}} | {{FIT_BUDGET_NOTES}} |
| **Alineacion con KAI capabilities** | {{FIT_ALIGNMENT}} | {{FIT_ALIGNMENT_NOTES}} |
| **Cultural fit** | {{FIT_CULTURE}} | {{FIT_CULTURE_NOTES}} |
| **Tamano de oportunidad** | {{FIT_SIZE}} | {{FIT_SIZE_NOTES}} |
| **TOTAL** | **{{FIT_TOTAL}}/35** | >25 High Priority / 18-24 Qualified / <18 Nurture |
