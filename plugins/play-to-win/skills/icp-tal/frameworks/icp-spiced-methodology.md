# Framework: ICP con Metodologia SPICED

Framework completo para crear un Ideal Customer Profile basado en datos, utilizando SPICED como lente de diagnostico. Combina analisis cuantitativo (firmografico + revenue) con analisis cualitativo (entrevistas GTM + deep dives de clientes) para descubrir el ICP real — no el imaginado.

## Principios fundamentales

- **Los datos revelan, las opiniones distorsionan**: El ICP no se inventa en una sala de reuniones. Emerge de patrones reales en tus mejores clientes
- **SPICED como filtro universal**: Cada dimension del ICP se valida contra el framework SPICED para asegurar que el perfil predice conversion real, no solo fit superficial
- **Cuantitativo + Cualitativo = Verdad**: Los numeros muestran *que* pasa. Las entrevistas explican *por que*. Necesitas ambos
- **Segmentos, no monolitos**: Un ICP no es un perfil unico. Son 3-5 segmentos con patrones distintos que requieren estrategias diferenciadas
- **Cross-functional buy-in**: El ICP solo funciona si Sales, Marketing, CS, y Product lo adoptan. Un comite cross-funcional es esencial

---

## El Proceso de 5 Pasos

### Paso 1.1: Diagnosticar con SPICED

Antes de analizar datos, se establece el marco de diagnostico. SPICED provee las dimensiones que importan para identificar al cliente ideal:

| Componente | Preguntas de Diagnostico para ICP | Datos a Recolectar |
|---|---|---|
| **Situation** | Que tipo de empresa es? Que tamano tiene? En que industria opera? Que tecnologia usa? | Industria, empleados, revenue, ubicacion, stack tech, etapa de crecimiento |
| **Pain** | Que problema tienen que nosotros resolvemos mejor que nadie? Que tan urgente es? | Pain statements de discovery calls, tickets de soporte, razon de compra |
| **Impact** | Cual es el costo de no resolver el problema? Que ganan al resolverlo? | Revenue perdido, horas desperdiciadas, oportunidades no capturadas, ROI documentado |
| **Critical Event** | Que evento dispara la necesidad de comprar? Es recurrente o unico? | Triggers de compra: ronda de inversion, cambio de CEO, deadline regulatorio, M&A |
| **Decision** | Como deciden? Quien aprueba? Cuanto tarda el proceso? | Buying committee, timeline de decision, criterios de evaluacion, budget authority |

**Tip**: No busques las respuestas "correctas" en este paso. Busca patrones que se repitan en tus mejores clientes.

### Paso 1.2: Analisis Cuantitativo

Con el marco SPICED establecido, se extraen y analizan datos duros de la base de clientes actual.

#### Datos Firmograficos a Recolectar

| Categoria | Atributos | Fuente |
|---|---|---|
| **Demograficos** | Industria, sub-industria, vertical | CRM, LinkedIn, Clearbit |
| **Tamano** | Empleados, revenue anual, oficinas | CRM, ZoomInfo, reportes anuales |
| **Geografia** | Pais, region, ciudad, timezone | CRM, website |
| **Tecnologia** | Stack tech, herramientas actuales, integraciones | BuiltWith, G2, discovery calls |
| **Crecimiento** | Tasa de crecimiento, contrataciones, rondas | Crunchbase, LinkedIn, noticias |

#### Cross-Reference con Lifetime Revenue

El paso critico es cruzar firmograficos con metricas de revenue:

| Segmento | # Clientes | ACV Promedio | LTV | Churn Rate | Expansion Rate | Win Rate |
|---|---|---|---|---|---|---|
| Segmento A | ___ | $___ | $___ | ___% | ___% | ___% |
| Segmento B | ___ | $___ | $___ | ___% | ___% | ___% |
| Segmento C | ___ | $___ | $___ | ___% | ___% | ___% |

**Criterio de seleccion**: Los segmentos con mayor LTV Y menor churn son los candidatos mas fuertes para ICP. No te dejes engañar por ACV alto con churn alto — eso destruye unit economics.

#### Data Layering

Superponer datos de multiples fuentes para enriquecer el perfil:

```
Capa 1: CRM (datos propios)         → Firmograficos basicos + revenue
Capa 2: Enrichment (Clearbit, etc.) → Tecnografia + growth signals
Capa 3: Intent (Bombora, G2)        → Busquedas activas + comparaciones
Capa 4: Social (LinkedIn)           → Contrataciones + contenido consumido
```

### Paso 1.3: Analisis Cualitativo

Los numeros dicen *que*. Las entrevistas dicen *por que*. Ambos son necesarios.

#### Entrevistas con el Equipo GTM

Entrevistar a 5-8 personas del equipo (AEs, SDRs, CSMs, SEs) con estas preguntas:

| # | Pregunta | Que revela |
|---|---|---|
| 1 | "Describe al cliente que mas rapido cierra y mas facil renueva" | Patron de fit ideal |
| 2 | "Cual es el pain que mencionan en la primera llamada?" | Pain pattern dominante |
| 3 | "Que critical event dispara la urgencia de comprar?" | Triggers de compra reales |
| 4 | "Donde pierdes mas deals y por que?" | Anti-ICP (quien NO es tu cliente) |
| 5 | "Si pudieras clonar 10 cuentas, cuales serian y que tienen en comun?" | Atributos aspiracionales |

**Preguntas adicionales de profundidad**:
- "Cuanto tiempo toma desde primera llamada hasta firma? Que lo acelera?"
- "Que objeciones escuchas mas frecuentemente?"
- "Que departamento inicia la busqueda tipicamente?"
- "Cuando un deal se muere en pipeline, en que etapa pasa y por que?"
- "Que diferencia a los clientes que expanden vs los que hacen churn?"

#### Deep Dive SPICED: 5-10 Clientes Top

Seleccionar los 5-10 mejores clientes (por LTV, expansion, NPS) y completar un SPICED card por cada uno:

| Campo | Cliente: _______________ |
|---|---|
| **Situation** | ___ |
| **Pain** | ___ |
| **Impact** (cuantificado) | ___ |
| **Critical Event** | ___ |
| **Decision** (proceso) | ___ |
| **ACV** | $___ |
| **Time to Close** | ___ dias |
| **Expansion** | ___% |
| **NPS/CSAT** | ___ |

Al completar 5-10 cards, los patrones se hacen evidentes. Buscar: Que Pain se repite? Que Critical Events aparecen en 3+ clientes? Que Situation firmografica comparten los top performers?

### Paso 1.4: Descubrir el ICP con Patrones

La convergencia de datos cuantitativos y cualitativos revela los segmentos reales:

| Atributo | Segmento A | Segmento B | Segmento C |
|---|---|---|---|
| **Industria** | ___ | ___ | ___ |
| **Tamano (empleados)** | ___ | ___ | ___ |
| **Revenue anual** | ___ | ___ | ___ |
| **Ubicacion** | ___ | ___ | ___ |
| **Pain dominante** | ___ | ___ | ___ |
| **Critical Event** | ___ | ___ | ___ |
| **ACV promedio** | $___ | $___ | $___ |
| **Win Rate** | ___% | ___% | ___% |
| **Cycle Length** | ___ dias | ___ dias | ___ dias |
| **Expansion Rate** | ___% | ___% | ___% |

**Ejemplo real** (Blueprint #16 — empresa de soluciones de talento):
- **Segmento A**: Manufactura high-skilled (ingenieros, tecnicos especializados) — ACV alto, ciclos cortos, pain de escasez aguda
- **Segmento B**: Manufactura low-skilled (operarios, linea de produccion) — ACV medio, volumen alto, pain de rotacion
- **Insight clave**: Ambos son "manufactura" pero requieren mensajes, procesos de venta, y equipos completamente diferentes

### Paso 1.5: Documentar ICP y Segmentos Top

#### Entregable 1: ICP Summary

Documento narrativo de 1-2 paginas que describe:
- Perfil firmografico del cliente ideal
- SPICED completo del cliente ideal
- Anti-ICP: Que clientes evitar y por que
- Metricas de validacion (win rate, ACV, LTV esperados)

#### Entregable 2: Account Segment Profiles (3-5)

Cada perfil de segmento incluye:
- Nombre del segmento y descripcion
- Atributos firmograficos especificos
- SPICED del segmento
- Metricas historicas (si existen)
- Estrategia de engagement recomendada
- Tier asignado (T1/T2/T3)

---

## SPICED Tiers para ICP

El tiering SPICED determina la priorizacion de cuentas:

| Tier | Situation | Pain | Impact | Critical Event | Implicacion Operativa |
|---|---|---|---|---|---|
| **T1** | Match exacto con ICP firmografico | Pain critico, urgente, articulado | Impact cuantificado >$100K/año | CE activo en <6 meses (regulatorio, M&A, ronda) | Asignar pod dedicado. Engagement 1:1. Resources premium. |
| **T2** | Match bueno (80%+ de atributos) | Pain claro pero no urgente | Impact medible pero <$100K | CE potencial (reconocen necesidad, sin deadline) | Seguimiento activo. Nurture personalizado. Check trimestral. |
| **T3** | Match parcial (50-80%) | Pain leve o no reconocido | Impact indirecto o no cuantificado | Sin CE claro (no hay urgencia) | Marketing air cover. Contenido educativo. No asignar rep. |

**Regla de oro**: Un T3 con Critical Event activo sube automaticamente a T2. Un T2 cuyo CE se materializa sube a T1. Los tiers son dinamicos, no estaticos.

---

## Matriz Firmografica Completa

Template comprehensivo para documentar atributos firmograficos del ICP:

| Dimension | Atributo | ICP Ideal | Aceptable | Descalificante |
|---|---|---|---|---|
| **Industria** | Vertical | ___ | ___ | ___ |
| **Industria** | Sub-vertical | ___ | ___ | ___ |
| **Tamano** | Empleados | ___ | ___ | ___ |
| **Tamano** | Revenue | ___ | ___ | ___ |
| **Geografia** | Region | ___ | ___ | ___ |
| **Tecnologia** | Stack requerido | ___ | ___ | ___ |
| **Crecimiento** | Tasa YoY | ___ | ___ | ___ |
| **Madurez** | Etapa (seed/growth/scale) | ___ | ___ | ___ |
| **Equipo** | Departamento comprador | ___ | ___ | ___ |
| **Budget** | Presupuesto estimado | ___ | ___ | ___ |

---

## Comite Cross-Funcional para ICP

El ICP solo funciona si toda la organizacion lo adopta. Se recomienda un comite de alineacion:

| Rol | Contribucion al ICP | Frecuencia de Review |
|---|---|---|
| **VP Sales** | Validacion con datos de pipeline y win/loss | Trimestral |
| **VP Marketing** | Alineacion de messaging y targeting | Trimestral |
| **VP CS** | Datos de retention, expansion, churn | Trimestral |
| **Product** | Roadmap alignment y feature-fit | Semestral |
| **Rev Ops** | Data integrity y operacionalizacion | Mensual |

---

## Errores comunes

| Error | Consecuencia | Correccion |
|---|---|---|
| Definir ICP por intuicion del founder sin datos | Perseguir cuentas que no convierten, desperdicio de pipeline | Seguir los 5 pasos: SPICED → Quant → Qual → Patrones → Documentar |
| Un solo ICP monolitico sin segmentos | Messaging generico que no resuena con nadie | Documentar 3-5 segmentos con atributos y estrategias diferenciadas |
| Ignorar el analisis cualitativo | Perder el *por que* detras de los numeros — patrones invisibles | Entrevistar 5-8 personas GTM + deep dive SPICED en 5-10 clientes |
| No definir el Anti-ICP | Reps persiguen cuentas que nunca cerraran | Documentar explicitamente que clientes evitar y por que |
| ICP estatico que nunca se revisa | El mercado cambia, el producto evoluciona, el ICP queda obsoleto | Review trimestral con comite cross-funcional |
| Confundir "mercado grande" con "ICP amplio" | TAM grande pero win rates bajisimos | Estrechar el ICP. Mejor ganar 40% de un mercado chico que 2% de uno grande |
