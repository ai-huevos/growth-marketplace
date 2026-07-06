# Transcript Extraction Protocol

Protocolo para extraer datos estructurados de transcripts de discovery calls (Fireflies MCP o texto pegado) y mapearlos al business-context template.

## Fuentes de Input

### Opcion A: Fireflies MCP (preferida)

```
1. Obtener transcript: fireflies_get_transcript(transcriptId)
2. Obtener summary: fireflies_get_summary(transcriptId)
3. Combinar ambos para extraccion completa
```

### Opcion B: Transcript pegado

El usuario pega el transcript directamente. Parsear por speaker turns.

### Opcion C: Fireflies URL

Extraer el transcript ID del URL: `https://app.fireflies.ai/view/<title>::<TRANSCRIPT_ID>`

## Pipeline de Extraccion

### Paso 1: Identificar Speakers

```
INPUT:  Raw transcript con speaker labels
OUTPUT: Mapa de speakers

| Speaker | Rol | Empresa | Tipo |
|---------|-----|---------|------|
| [nombre] | [titulo] | [empresa] | Prospect / Vendedor |
```

### Paso 2: Extraer Company Profile

Buscar en el transcript menciones de:

- Nombre de la empresa y que hace
- Industria / sector / vertical
- Tamano (empleados, revenue, clientes)
- Productos / servicios principales
- Stack tecnologico mencionado
- Modelo de negocio (SaaS, servicios, marketplace, etc.)
- Mercados / geografia
- Funding / stage (si aplica)

### Paso 3: Extraer Stakeholders

| Campo | Que buscar en el transcript |
|-------|----------------------------|
| Nombre | Mencion directa |
| Titulo/Rol | Mencion directa o inferido |
| Influencia | Decision maker, influencer, champion, blocker |
| Actitud | Entusiasta, neutral, esceptico, resistente |
| Citas textuales | Frases que revelen prioridades o dolores |

### Paso 4: Scoring PULSO

Evaluar cada dimension 1-5 basado en lo que se revelo en la call:

| Dimension | Score | Evidencia del transcript |
|-----------|-------|--------------------------|
| **P - Panorama** | 1-5 | Cuanta informacion factual se obtuvo |
| **U - Urgencia** | 1-5 | Se identifico dolor cuantificable + cualitativo |
| **L - Logro** | 1-5 | Se conecto dolor con impacto de negocio |
| **S - Situacion Critica** | 1-5 | Hay deadline, evento, consecuencia de no actuar |
| **O - Organizacion** | 1-5 | Se mapeo proceso de decision, stakeholders, criterios |

**Guia de scoring:**
- **5**: Dimension completamente explorada con datos concretos
- **4**: Dimension explorada con algunos datos pero gaps menores
- **3**: Dimension tocada pero sin profundidad
- **2**: Dimension mencionada de pasada
- **1**: Dimension no explorada

### Paso 5: Extraer Pain Points

Para cada dolor mencionado, capturar:

```
DOLOR #N:
  Descripcion: [que duele]
  Cita textual: "[frase exacta del prospect]"
  Departamento: [donde vive el dolor]
  Cuantificacion: [numero mencionado o "no cuantificado"]
  Frecuencia: [continua / semanal / mensual / esporadica]
  Quien lo siente: [rol/persona]
```

### Paso 6: Extraer Systems Landscape

| Sistema | Tipo | Departamento | Estado | Mencion textual |
|---------|------|-------------|--------|-----------------|
| [nombre] | [ERP/CRM/Excel/etc] | [depto] | [Activo/Subutilizado/etc] | "[cita]" |

### Paso 7: Extraer Buying Signals

Senales positivas y negativas:

| Senal | Tipo | Cita | Peso |
|-------|------|------|------|
| [descripcion] | Positiva/Negativa | "[cita]" | Alto/Medio/Bajo |

### Paso 8: Extraer Action Items

| # | Accion | Responsable | Deadline | Status |
|---|--------|-------------|----------|--------|
| 1 | [que hacer] | [quien] | [cuando] | Pendiente |

### Paso 9: Extraer Vocabulario del Prospect

Palabras y frases exactas del prospect que revelan como piensa y habla:

- Terminos de industria que usa
- Metaforas o analogias
- Como describe su dolor (sus palabras, no las nuestras)
- Frases que podemos reusar en follow-up

Estos alimentan `clients/{{CLIENT_SLUG}}/voc/prospect-language-bank.md`

### Paso 10: Opportunity Sizing

```
TICKET ESTIMADO:
  Tier recomendado: [Bait / Frontend / Middle / Backend]
  Rango de precio: $[min] - $[max]
  Fuente de pricing: clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md

TIMELINE ESTIMADO:
  Ciclo de venta: [corto < 2 sem / medio 2-6 sem / largo > 6 sem]
  Proximo paso: [segunda discovery / demo / propuesta / Sprint]

CONFIANZA:
  Probabilidad de cierre: [alta / media / baja]
  Razon: [por que]
```

## Output

El resultado de la extraccion se guarda en:
`clients/{{CLIENT_SLUG}}/deals/<company-slug>/business-context.md`

Usar el template: `os/skills/sales-orchestrator/templates/business-context.md`
