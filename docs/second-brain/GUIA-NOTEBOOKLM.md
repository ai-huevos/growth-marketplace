# Guía para Crear el Second Brain en NotebookLM

## Paso 1: Crear el Notebook

1. Ir a [NotebookLM](https://notebooklm.google.com)
2. Click en **"New Notebook"**
3. Nombrar el notebook: **"AI Huevos Growth Marketplace — Second Brain"**

## Paso 2: Subir los Source Documents

Sube los siguientes 11 archivos desde `docs/second-brain/` en este orden:

### Documentos Core (subir primero)
| # | Archivo | Contenido | Prioridad |
|---|---------|-----------|-----------|
| 1 | `00-proyecto-overview.md` | Visión general, plugins, audiencia, datos clave | Alta |
| 2 | `01-arquitectura-convenciones.md` | Estructura de archivos, anatomía de plugins, patrones | Alta |
| 3 | `02-metodologia-pulso.md` | PULSO completo: 5 dimensiones, scoring, conexiones | Alta |

### Documentos por Plugin (subir segundo)
| # | Archivo | Contenido | Prioridad |
|---|---------|-----------|-----------|
| 4 | `03-plugin-growth-foundations.md` | ICP, positioning, competitive analysis, ClarQ | Alta |
| 5 | `04-plugin-sales-blueprint.md` | Discovery, pipeline, proposals, coaching, agents | Alta |
| 6 | `05-plugin-copywriting-engine.md` | Headlines, emails, landing pages, triggers, 4-agent pipeline | Alta |

### Documentos Transversales (subir tercero)
| # | Archivo | Contenido | Prioridad |
|---|---------|-----------|-----------|
| 7 | `06-modelos-scoring.md` | Todos los scoring models unificados | Media |
| 8 | `07-sistema-agentes.md` | Arquitectura de los 6 agentes, workflows, pipelines | Media |
| 9 | `08-frameworks-patrones.md` | Todos los frameworks, templates, pattern libraries | Media |
| 10 | `09-inventario-contenido.md` | Mapa completo de los 59 archivos | Media |
| 11 | `10-decisiones-diseno.md` | Decisiones arquitectónicas y rationale | Media |

### Fuentes Adicionales (opcional, para más profundidad)

También puedes subir directamente los archivos clave del repositorio:

| Archivo | Por qué subirlo |
|---------|-----------------|
| `pulso-framework.md` | El framework más importante — detalle completo con scoring |
| `trigger-library.md` | Los 10 triggers con implementación detallada por canal |
| `power-headlines.md` | Las 50 fórmulas de headlines con todos los ejemplos |
| `reks-framework.md` | ROCA completo con árbol de decisión y scorecards |
| `scoring-model.md` | ICP scoring con ejemplo detallado |
| `conversion-architecture.md` | Estructura de 10 secciones para landing pages |

**Nota**: NotebookLM permite hasta 50 fuentes por notebook. Con los 11 documentos base + 6 archivos clave = 17 fuentes. Tienes espacio para 33 fuentes más si quieres añadir todos los archivos del repo.

## Paso 3: Configurar el Notebook

Una vez subidas las fuentes:

1. **Generar Audio Overview** (opcional): NotebookLM puede crear un podcast-style overview del contenido
2. **Crear Notas**: Organiza notas por tema:
   - "PULSO Quick Reference"
   - "Scoring Models Cheat Sheet"
   - "Agent Workflows"
   - "Copy Formulas"
3. **Probar consultas**: Verifica que el notebook responde bien a preguntas como:
   - "¿Cómo funciona PULSO?"
   - "¿Cuáles son los 10 triggers psicológicos?"
   - "¿Qué hace el SDR Agent?"
   - "¿Cómo se conectan los plugins entre sí?"
   - "¿Cuál es el scoring del ICP?"

## Paso 4: Mantener Actualizado

Cuando añadas nuevo contenido al marketplace:

1. Actualiza el documento correspondiente en `docs/second-brain/`
2. Re-sube el archivo modificado a NotebookLM (reemplaza la fuente anterior)
3. Si es un plugin nuevo, crea un nuevo documento siguiendo el formato de los plugins existentes

## Consultas Sugeridas para Probar

### Estrategia
- "¿Cómo decidimos qué clientes perseguir?"
- "¿Cuál es la conexión entre ICP y PULSO?"
- "¿Por qué el marketplace tiene 3 plugins separados?"

### Ventas
- "Explica el flujo completo de un deal: desde prospecting hasta cierre"
- "¿Cuándo debo descartar un deal vs seguir invirtiendo?"
- "¿Cómo diagnostico si un rep necesita coaching de skills vs esfuerzo?"

### Copywriting
- "¿Cuáles son los triggers psicológicos más efectivos?"
- "¿Cómo construyo una landing page que convierta?"
- "Dame las mejores fórmulas de headlines para un SaaS B2B"

### Técnico
- "¿Cómo funciona el pipeline de 4 agentes del copywriting engine?"
- "¿Qué archivos necesito modificar para añadir un nuevo framework?"
- "¿Cuáles son los archivos más importantes del repositorio?"
