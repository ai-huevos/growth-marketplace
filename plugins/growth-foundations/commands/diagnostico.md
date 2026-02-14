---
description: Assessment ClarQ de una empresa B2B. Evalúa GTM, Revenue, Q2C y Capabilities. Output un heatmap de madurez operacional.
argument-hint: <empresa o descripción del negocio>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Diagnóstico ClarQ

El usuario quiere un assessment rápido de madurez operacional para: $ARGUMENTS

## Framework ClarQ

Evalúa la empresa en 4 dimensiones. Para cada una, asigna un score y un color:
- 🟢 Verde (7-10): Maduro, documentado, automatizado
- 🟡 Amarillo (4-6): Parcial, algunos procesos, gaps visibles
- 🔴 Rojo (1-3): Inmaduro, tribal, manual, alto riesgo

## Instrucciones

1. **Investiga** la empresa si se proporcionó un nombre (buscar website, LinkedIn, noticias recientes). Si solo hay una descripción, usa esa información.

2. **Evalúa cada dimensión** haciendo preguntas al usuario cuando necesites más información:

### Dimensión 1: Go-to-Market (GTM) Strategy
| Criterio | Pregunta de evaluación |
|----------|----------------------|
| Adquisición | ¿Cómo consiguen clientes? ¿Es "hunting" (hero-dependent) o "farming" (process-dependent)? |
| Documentación | ¿El proceso de ventas está documentado? ¿Hay playbook? |
| Predictibilidad | ¿Pueden predecir cuántos clientes cerrarán este mes? |
| Canales | ¿Cuántos canales de adquisición usan? ¿Cuál domina? |

### Dimensión 2: Revenue Streams
| Criterio | Pregunta de evaluación |
|----------|----------------------|
| Tipo | ¿Revenue recurrente, re-ocurrente, o eventual? |
| Concentración | ¿Top 5 clientes representan >30% del revenue? (Riesgo alto) |
| Diversificación | ¿Cuántas líneas de producto/servicio? |
| Predecibilidad | ¿Pueden proyectar revenue con ±10% de precisión? |

### Dimensión 3: Quota-to-Cash (Q2C)
| Criterio | Pregunta de evaluación |
|----------|----------------------|
| Proceso | ¿Cuántos pasos manuales del quote al cobro? |
| Fricción | ¿Dónde se usa Excel para "puentear" el sistema? |
| Visibilidad | ¿El GM puede ver el estado real del pipeline en cualquier momento? |
| Integridad | ¿Los reportes financieros reflejan la realidad operativa? |

### Dimensión 4: Capabilities
| Criterio | Pregunta de evaluación |
|----------|----------------------|
| Skills | ¿El equipo tiene las competencias necesarias? |
| Tools | ¿Las herramientas son adecuadas? ¿ERP + Excel o plataformas integradas? |
| Documentation | ¿Qué % de procesos están documentados? (Typical: 11-30%) |
| Dependency | ¿Cuántas personas son "irremplazables"? (Bus Factor) |

3. **Genera el heatmap de resultados**:

```
╔══════════════════════════════════════════════════╗
║           DIAGNÓSTICO CLARQ: [EMPRESA]           ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  GTM Strategy    [COLOR] ██████████  [X/10]      ║
║  Revenue Streams [COLOR] ██████████  [X/10]      ║
║  Quota-to-Cash   [COLOR] ██████████  [X/10]      ║
║  Capabilities    [COLOR] ██████████  [X/10]      ║
║                                                  ║
║  Score Total: [XX/40]                            ║
║  Nivel: [Fragile Giant / Growth Ready / Scaling] ║
╚══════════════════════════════════════════════════╝
```

4. **Interpreta los resultados**:

| Score Total | Nivel | Significado |
|-------------|-------|-------------|
| 0-15 | Fragile Giant | Operaciones frágiles. Revenue depende de héroes. Riesgo alto de disruption. Prioridad: estabilizar y documentar. |
| 16-25 | Growth Constrained | Algunos procesos, pero gaps significativos. Puede crecer pero con fricción. Prioridad: automatizar Q2C y documentar GTM. |
| 26-32 | Growth Ready | Procesos establecidos, herramientas adecuadas. Listo para escalar. Prioridad: optimizar y expandir. |
| 33-40 | Scaling | Operación madura. Revenue predecible. Prioridad: innovar y diversificar. |

5. **Genera recomendaciones** priorizadas:
   - Top 3 acciones inmediatas (próximos 30 días)
   - Top 3 acciones de mediano plazo (90 días)
   - Riesgos principales si no actúan

6. **Si aplica**, menciona conceptos del Fragile Giant:
   - "Juan Guillermo Problem" — cuando un empleado clave tiene todo el conocimiento
   - "Barbacha" — leakage operativo por procesos manuales
   - "Caja Negra" — falta de visibilidad sobre operaciones reales
   - "Blindaje" — el objetivo: blindar la empresa contra riesgos operativos
