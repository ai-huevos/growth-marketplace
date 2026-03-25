---
description: Pre-call research and discovery scorecard preparation for a prospect. Uses Perplexity for deep research, generates PULSO hypotheses, AVE opening script, and populated scorecard.
argument-hint: <company name or contact name>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# KAI Prospect — Pre-Call Research

El usuario quiere preparar una discovery call para: $ARGUMENTS

## Instrucciones

### Fase 1: Deep Research (ejecutar inmediatamente)

Usar Perplexity MCP (si disponible) o WebSearch para investigar:

1. **Empresa**: website, LinkedIn company page, noticias recientes, tamano, industria, productos/servicios, funding rounds, tech stack visible
2. **Contacto** (si se dio nombre): titulo, tiempo en el rol, publicaciones LinkedIn, conferencias, patrones de comunicacion
3. **Industria**: tendencias macro, tamano de mercado, competidores directos, regulaciones relevantes
4. **Compelling events**: contrataciones recientes, restructuraciones, lanzamientos, expansiones, regulaciones nuevas

### Fase 2: Hipotesis PULSO

Con el research, construir hipotesis para cada dimension:

| Dimension | Hipotesis | Confianza (1-5) | Pregunta clave para validar |
|-----------|----------|-----------------|---------------------------|
| **P - Panorama** | [Datos firmograficos] | [Alta] | [Pregunta para profundizar] |
| **U - Urgencia** | [Dolor inferido] | [Media] | [Pregunta para descubrir] |
| **L - Logro** | [Impacto potencial estimado] | [Media-Baja] | [Pregunta para cuantificar] |
| **S - Situacion Critica** | [Timeline/evento detectado] | [Variable] | [Pregunta para confirmar] |
| **O - Organizacion** | [Proceso inferido] | [Baja] | [Pregunta para mapear] |

### Fase 3: AVE Opening Script (personalizado)

Generar apertura AVE adaptada al prospect:

```
A — Agradecimiento (10 seg)
"Gracias por hacer espacio en tu agenda para esta conversacion, [Nombre].
Se que en [industria] el tiempo es el recurso mas escaso — quiero que cada minuto cuente."

V — Verificar Tiempo (10 seg)
"Tenemos ___ minutos agendados. Sigue siendo buen tiempo para ti?"

E — Establecer Expectativas (25 seg)
"Mi objetivo hoy es entender donde esta [empresa] en su camino de [contexto relevante],
que desafios estan frenando la velocidad, y determinar si tiene sentido que trabajemos juntos."

Post-AVE: Pregunta Poderosa
"Tengo una agenda preparada basada en lo que investigue sobre [empresa] y [industria],
pero antes de seguir con ella... que mas quisieras obtener de la reunion de hoy?"
```

### Fase 4: Preguntas PULSO Priorizadas

Seleccionar 7-10 preguntas del banco, personalizadas con research data:

- **Panorama** (2-3): Preguntas cerradas que demuestran research
- **Urgencia** (2-3): Preguntas reflexivas con contexto de industria
- **Logro** (1-2): Preguntas para cuantificar ROI
- **Situacion Critica** (1): Deadline o evento que genera urgencia
- **Organizacion** (1-2): Proceso de decision, stakeholders

Referencia: `plugins/sales-blueprint/skills/discovery-mastery/frameworks/question-bank.md`

### Fase 5: Historias de Terceros Preparadas

Preparar 2-3 historias relevantes al prospect:

| Historia | Activar cuando... |
|----------|-------------------|
| **Finkargo (80% reduction)** | Mencionan operaciones que no escalan |
| **Finkargo (428x ROI)** | Dudan del ROI o piden numeros |
| **Caso industria similar** | Necesitan referencia de su sector |

Regla: Menos de 2 minutos por historia. El CLIENTE es el heroe, no KAI.

### Fase 6: Objeciones Anticipadas

Listar 3-4 objeciones probables con respuestas preparadas usando framework GOLPE.

### Fase 7: Output — Discovery Scorecard

Generar scorecard completa siguiendo el template en:
`clients/kai-partners/delivery/retorna-discovery-scorecard.md`

Adaptar todas las secciones al prospect investigado:
1. Prospect Intel (tabla completa)
2. Market Context (datos duros con fuentes)
3. Pre-Call Hypotheses (6 dolores hipoteticos)
4. AVE Opening Script personalizado
5. Preguntas PULSO con contexto
6. Scorecard de Calificacion (vacia, para completar durante call)
7. Next Steps (VAGONES)
8. Quality Control Checklist

Guardar output en: `clients/kai-partners/deals/<company-slug>/discovery-scorecard.md`
