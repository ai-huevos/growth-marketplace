---
template: persona-update
version: 1.0
description: Structured log of new vocabulary, objections, buying criteria, competitive intel, and industry insights extracted from a discovery call. Feeds prospect-language-bank.md.
target: clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md
---

# Persona Update — {{COMPANY_NAME}}

> Extracted from: {{SOURCE}} ({{SOURCE_ID}})
> Date: {{CALL_DATE}}
> Prospect: {{PROSPECT_NAME}}, {{PROSPECT_TITLE}}

---

## 1. New Vocabulary

Palabras y frases exactas del prospect. Nunca editar — usar verbatim.

| Categoria | Frase Exacta | Contexto | Cluster Tematico |
|-----------|-------------|----------|-----------------|
| Como describe su dolor | "{{VOC_PAIN_1}}" | {{CONTEXT_1}} | {{CLUSTER_1}} |
| Como describe su dolor | "{{VOC_PAIN_2}}" | {{CONTEXT_2}} | {{CLUSTER_2}} |
| Como describe su vision | "{{VOC_VISION_1}}" | {{CONTEXT_3}} | {{CLUSTER_3}} |
| Terminos de industria | {{VOC_TERMS}} | — | {{CLUSTER_TERMS}} |
| Metaforas que usa | "{{VOC_METAPHOR}}" | {{CONTEXT_M}} | {{CLUSTER_M}} |

### Clusters Tematicos (referencia)

Mapear cada frase al cluster mas relevante de `prospect-language-bank.md`:

- Cluster 1: Sistemas Desconectados
- Cluster 2: Datos Perdidos / Invisibilidad
- Cluster 3: Equipo Sobrecargado
- Cluster 4: Revenue Impredecible
- Cluster 5: Marca / Posicionamiento
- Cluster 6: Liderazgo / Decision-Making
- NEW CLUSTER: Si la frase no encaja, crear nuevo cluster

---

## 2. Objections Captured

| Objecion | Tipo | Cita Exacta | Respuesta Sugerida |
|----------|------|-------------|-------------------|
| {{OBJECTION_1}} | {{OBJ_TYPE_1}} | "{{OBJ_QUOTE_1}}" | {{RESPONSE_1}} |
| {{OBJECTION_2}} | {{OBJ_TYPE_2}} | "{{OBJ_QUOTE_2}}" | {{RESPONSE_2}} |

Tipos: Precio, Timing, Decision-maker, Competencia, Scope, Trust, Interno

---

## 3. Buying Criteria Revealed

| Criterio | Evidencia | Peso (Alto/Medio/Bajo) |
|----------|-----------|------------------------|
| {{CRITERIA_1}} | "{{CRITERIA_QUOTE_1}}" | {{WEIGHT_1}} |
| {{CRITERIA_2}} | "{{CRITERIA_QUOTE_2}}" | {{WEIGHT_2}} |
| {{CRITERIA_3}} | "{{CRITERIA_QUOTE_3}}" | {{WEIGHT_3}} |

---

## 4. Competitive Intel

| Competidor / Alternativa | Que dijo el prospect | Implicacion para el cliente instalado |
|--------------------------|---------------------|---------------------|
| {{COMPETITOR_1}} | "{{COMP_QUOTE_1}}" | {{IMPLICATION_1}} |
| {{COMPETITOR_2}} | "{{COMP_QUOTE_2}}" | {{IMPLICATION_2}} |

Incluir alternativas internas (e.g., "contratar in-house", "no hacer nada")

---

## 5. Industry Insights

| Insight | Fuente | Relevancia para otros deals |
|---------|--------|---------------------------|
| {{INSIGHT_1}} | {{PROSPECT_NAME}} | {{RELEVANCE_1}} |
| {{INSIGHT_2}} | {{PROSPECT_NAME}} | {{RELEVANCE_2}} |

---

## 6. PULSO Dimension Updates

Si la call revelo informacion nueva que cambia algun score PULSO:

| Dimension | Score Anterior | Score Nuevo | Razon del Cambio |
|-----------|:--------------:|:-----------:|-----------------|
| {{DIMENSION}} | {{OLD_SCORE}} | {{NEW_SCORE}} | {{CHANGE_REASON}} |

---

## Integration Instructions

Despues de poblar este template:

1. **Append to language bank**: Agregar las frases de la seccion 1 a `clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md` en el cluster correspondiente
2. **Update business-context**: Si hay cambios PULSO (seccion 6), actualizar `deals/<slug>/business-context.md`
3. **Log objections**: Si hay objeciones nuevas no vistas antes, considerar agregarlas al training material de coaching
4. **Flag competitive intel**: Si un competidor nuevo aparece, notificar al equipo

### Language Bank Append Format

```markdown
### Batch: {{CALL_DATE}} — {{COMPANY_NAME}} ({{PROSPECT_NAME}})

- "{{FRASE_EXACTA}}" — {{PROSPECT_NAME}}, {{PROSPECT_TITLE}}, {{COMPANY_NAME}}
```
