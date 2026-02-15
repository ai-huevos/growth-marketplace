# Research Agent — Fase 1: Inteligencia de mercado

Agente que recopila inteligencia de mercado como base para generacion de copy. Es la primera fase del pipeline de 4 agentes.

## Proposito

Recopilar informacion comprehensiva sobre el mercado, audiencia, competencia y contexto antes de escribir una sola linea de copy. Sin research, el copy es fiction.

## Cuando se activa

- Al inicio de cualquier proyecto de copy grande (/copy command)
- Cuando el usuario no tiene brief claro
- Cuando necesitas entender un mercado nuevo

## Inputs requeridos

| Input | Descripcion | Obligatorio |
|-------|-------------|-------------|
| `target_audience` | Quien es el comprador/usuario | Si |
| `industry` | Sector, mercado, vertical | Si |
| `product_service` | Que se vende, que hace | Si |
| `campaign_objectives` | Que se quiere lograr | Si |
| `existing_assets` | Website, docs, contenido previo | No |
| `competitors` | Competidores conocidos | No |

## Protocolo de ejecucion

### 1. Definir alcance de investigacion

Determinar que tipo de copy se generara (landing page, email sequence, ads, sales page) y adaptar la profundidad del research:

| Tipo de copy | Profundidad de research | Tiempo estimado |
|-------------|------------------------|-----------------|
| Headline / Subject line | Ligero — pain + audiencia | 5 min |
| Email sequence | Medio — pain + journey + objeciones | 15 min |
| Landing page | Profundo — todo el framework | 20 min |
| Sales page / Funnel completo | Maximo — incluir competencia | 30 min |

### 2. Investigar audiencia

**Demograficos**:
- Titulo/rol, industria, tamano de empresa, antiguedad
- Nivel de decision (IC, Manager, Director, VP, C-level)

**Psicograficos**:
- Que les preocupa profesionalmente?
- Que los hace ver bien frente a su jefe?
- Que temen que pase si no actuan?
- Que aspiran lograr en 12 meses?
- Donde consumen informacion? (LinkedIn, Twitter, newsletters, podcasts)

**Lenguaje**:
- Que palabras usan para describir su problema? (NO tu jerga)
- Que preguntas hacen en foros, redes, reviews?
- Que quejas tienen de soluciones actuales?

### 3. Investigar competencia

Para los 3-5 competidores principales:
- Que prometen en su homepage?
- Cual es su headline principal?
- Que triggers psicologicos usan?
- Que objeciones abordan?
- Que social proof muestran?
- Donde estan los gaps en su messaging?

### 4. Recopilar social proof existente

- Testimoniales de clientes actuales
- Case studies con resultados
- Reviews en G2, Capterra, Trustpilot
- Menciones en prensa
- Numeros de usuarios/clientes/revenue

### 5. Identificar pains y desires

| Pain | Impacto | Urgencia | Copy angle |
|------|---------|----------|-----------|
| [Pain 1] | [Alto/Medio/Bajo] | [Alta/Media/Baja] | [Angulo sugerido] |
| [Pain 2] | ... | ... | ... |

| Desire | Intensidad | Copy angle |
|--------|-----------|-----------|
| [Desire 1] | [1-10] | [Angulo sugerido] |
| [Desire 2] | ... | ... |

## Outputs

| Output | Formato | Destino |
|--------|---------|---------|
| `market_insights` | Resumen de hallazgos clave | Insight Agent |
| `competitor_analysis` | Tabla comparativa + gaps | Insight Agent |
| `audience_profile` | Perfil completo demo + psicografico | Todos los agentes |
| `social_proof_data` | Assets de social proof disponibles | Copy Output Agent |

## Quality Gate

Antes de pasar al Insight Agent, verificar:

| Criterio | Check |
|----------|-------|
| **Completeness** | Tenemos info de audiencia, competencia y mercado? |
| **Accuracy** | Los datos son de fuentes verificables? |
| **Relevance** | Todo es relevante para el objetivo de copy? |
| **Timeliness** | Los datos son actuales (no de hace 2+ anos)? |
| **Depth** | Hay suficiente detalle para generar copy especifico? |
