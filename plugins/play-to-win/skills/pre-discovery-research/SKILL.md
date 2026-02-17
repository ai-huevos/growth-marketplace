---
name: pre-discovery-research
description: Use when preparing prospect intelligence before a discovery call, gathering pre-call research, building a prospect data cube, or creating a pre-call intelligence brief. Activates for "research pre-call", "investigacion prospecto", "inteligencia pre-discovery", "preparar llamada", "pre-call research", "prospect intelligence", "pre-discovery", "call prep research".
version: 1.0.0
---

# Pre-Discovery Research

Sistema de inteligencia de 5 capas para preparar discovery calls con contexto profundo. Convierte la investigacion pre-call de una tarea ad-hoc en un proceso sistematico que genera ventaja competitiva antes de la primera conversacion.

## Cuando usar este skill

- El usuario necesita preparar research antes de una discovery call
- Quiere construir un perfil de inteligencia completo de un prospect
- Necesita generar hipotesis de dolor basadas en datos publicos
- Quiere crear un brief pre-call estructurado para su equipo
- Necesita identificar senales de compra y triggers de urgencia

## Filosofia: La preparacion es la forma mas alta de respeto

Cada discovery call representa una persona invirtiendo su tiempo y atencion. La profundidad de nuestra investigacion honra esa inversion. La calidad de la preparacion demuestra seriedad. La relevancia de los insights prueba valor antes de pedir nada a cambio.

> "La solucion ya esta aqui — solo necesitamos escuchar lo suficientemente profundo para oirla."

## El Sistema de 5 Capas

La inteligencia pre-discovery opera en 5 capas concentricias. Cada capa es independiente pero la combinacion crea una imagen multidimensional:

```
Capa 5: Timing y Momentum ──────────────────────┐
  Capa 4: Contexto Geografico/Economico ───────┐ │
    Capa 3: Industria y Mercado ─────────────┐ │ │
      Capa 2: Inteligencia Humana ─────────┐ │ │ │
        Capa 1: Company Deep Dive ───────┐ │ │ │ │
                                         │ │ │ │ │
          [PROSPECT DATA CUBE]           │ │ │ │ │
                                         └─┘─┘─┘─┘
```

| Capa | Foco | Tiempo sugerido | Prioridad |
|------|------|-----------------|-----------|
| 1 — Company Deep Dive | Fundamentos, modelo de negocio, tech stack, competencia | 20 min | CRITICA |
| 2 — Inteligencia Humana | Trayectoria profesional, estilo, prioridades, rapport | 15 min | CRITICA |
| 3 — Industria y Mercado | Tendencias, benchmarks, dinamicas competitivas | 10 min | ALTA |
| 4 — Contexto Geografico | Macroeconomia, cultura de negocios, regulacion | 5 min | MEDIA |
| 5 — Timing y Momentum | Eventos recientes, senales de compra, factores de urgencia | 10 min | ALTA |

**Tiempo total**: ~60 minutos para research completo. Para deals de menor valor, las Capas 1, 2 y 5 son suficientes (~45 min).

Para el framework completo de cada capa con prompts de Perplexity, leer `frameworks/five-layer-research.md`.

## Prompts de Perplexity — Uso Rapido

Cada capa tiene un prompt optimizado para Perplexity (o cualquier herramienta de AI research). Los prompts siguen la estructura:

1. **Contexto**: Datos basicos del prospect (nombre, industria, URL, contacto)
2. **Objetivos de investigacion**: 5 areas especificas por capa
3. **Formato de output**: Estructura solicitada para datos accionables

Regla clave: Siempre solicitar **niveles de confianza** en los hallazgos. Separar hechos confirmados de inferencias.

## Data Cube — Esquema Relacional

El Data Cube es la estructura donde se almacena y relaciona toda la inteligencia. No es un documento plano — es un modelo relacional:

### Entidades principales

| Entidad | Campos clave | Relaciones |
|---------|-------------|------------|
| **Company** | Nombre, industria, revenue, funding, team, tech stack | -> Stakeholders, Industry |
| **Stakeholder** | Nombre, titulo, background, estilo, prioridades | -> Company, Engagement |
| **Industry** | Tamano mercado, growth rate, benchmarks, challenges | -> Company, Geography |
| **Geography** | Pais, economia, madurez digital, regulacion | -> Industry |
| **Momentum** | Eventos recientes, senales de compra, urgencia, riesgos | -> Company, Stakeholder |

### Campos de calidad

Cada Data Cube incluye metadata de calidad:

- **Completeness Score** (0-100): % de campos poblados
- **Confidence Level**: alto / medio / bajo
- **Data Quality**: excelente / bueno / regular / pobre
- **Sources List**: Fuentes consultadas
- **Last Updated**: Fecha de actualizacion

## Priorizacion de Research

No todos los deals merecen el mismo nivel de investigacion. Usar esta matriz:

| Deal Size | Tipo de Call | Capas requeridas | Tiempo |
|-----------|-------------|------------------|--------|
| Enterprise (>$50K) | Initial discovery | 5 capas completas | 60 min |
| Mid-market ($10-50K) | Initial discovery | Capas 1, 2, 3, 5 | 45 min |
| SMB (<$10K) | Initial discovery | Capas 1, 2, 5 | 30 min |
| Cualquiera | Follow-up | Delta update (solo cambios) | 15 min |

## De datos a hipotesis

El research no sirve si no genera hipotesis accionables. Despues de completar las 5 capas:

### Proceso de sintesis

1. **Cruzar capas**: Buscar patrones que se repiten entre capas (ej: "hiring agresivo" en Company + "nuevos lideres" en Momentum = ventana de cambio)
2. **Formular hipotesis**: Cada hipotesis sigue el formato:

```
HIPOTESIS: [Declaracion especifica sobre el dolor/necesidad del prospect]
EVIDENCIA: [Datos de las capas que soportan la hipotesis]
CONFIANZA: Alta / Media / Baja
PREGUNTA DE VALIDACION: [Pregunta para confirmar/refutar en la call]
```

3. **Priorizar**: Maximo 3-5 hipotesis por call, ordenadas por confianza e impacto potencial
4. **Preparar pivotes**: Para cada hipotesis, tener una pregunta alternativa si el prospect la invalida

### Ejemplo de hipotesis

```
HIPOTESIS: El VP de Ventas nuevo (6 meses) tiene presion para
           profesionalizar el proceso comercial antes del cierre fiscal
EVIDENCIA:
  - Capa 2: LinkedIn muestra que fue contratado hace 6 meses desde empresa con procesos maduros
  - Capa 5: 3 posiciones de Sales Ops publicadas en ultimos 90 dias
  - Capa 1: Glassdoor menciona "falta de proceso" como debilidad
CONFIANZA: Alta
PREGUNTA: "Entiendo que llegaste hace poco. Que cambios has priorizado
           en estos primeros meses?"
```

## Senales de compra (Buying Signals)

Clasificar cada senal encontrada por fuerza:

| Fuerza | Ejemplos | Accion |
|--------|----------|--------|
| **Fuerte** | Job posting de Sales Ops, nuevo CRO/VP Sales, presupuesto aprobado | Priorizar deal, research completo |
| **Moderada** | Posts sobre "transformacion", asistencia a eventos, evaluando herramientas | Research standard, monitorear |
| **Debil** | Crecimiento general, industria en movimiento | Research minimo, nurture |

## Red Flags y Riesgos

Documentar siempre los riesgos encontrados con estrategia de mitigacion:

- **Presupuesto ya asignado** -> Posicionar como iniciativa del siguiente ciclo fiscal
- **Liderazgo inestable** -> Validar poder de decision del contacto actual
- **Competidor incumbente fuerte** -> Preparar estrategia de decision criteria (ver skill deal-strategy)
- **Prensa negativa reciente** -> Ser sensible al tema, no mencionarlo directamente

## Integracion con SPICED

El research pre-discovery alimenta directamente el framework SPICED:

| Capa de Research | Dimension SPICED |
|-----------------|------------------|
| Capa 1 (Company) | **S** — Situation |
| Capa 2 (Humana) | **D** — Decision (stakeholder mapping) |
| Capa 3 (Industria) | **P** — Pain (benchmarks vs. realidad) |
| Capa 4 (Geografica) | **S** — Situation (contexto macro) |
| Capa 5 (Momentum) | **CE** — Critical Event (triggers de urgencia) |

## Output esperado

Al ejecutar este skill, generar:

1. **Pre-Call Intelligence Brief** completo (usar `templates/pre-call-brief.md`)
2. **Data Cube** estructurado con las 5 capas pobladas
3. **Tabla de hipotesis** (3-5 hipotesis priorizadas con preguntas de validacion)
4. **Mapa de senales de compra** clasificadas por fuerza
5. **Riesgos identificados** con estrategias de mitigacion
6. **Preguntas SPICED priorizadas** basadas en el research
