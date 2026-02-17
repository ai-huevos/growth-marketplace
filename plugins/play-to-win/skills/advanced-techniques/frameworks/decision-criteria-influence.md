# Framework: Influencia en Criterios de Decision

Sistema para guiar el proceso de evaluacion del prospect, mejorar tu posicion competitiva, y educar al comprador para que tome la mejor decision basada en logro real — no en checklists arbitrarios. Basado en el concepto de Influencia en Criterios de Decision de la Metodología GrowthOS.

## Principios fundamentales

- **La mayoria de los prospects no saben como decidir** — Su proceso de decision es arbitrario. Consultan con colegas, arman checklists de features, y asignan pesos que no reflejan impacto real. Tu trabajo es guiarlos.
- **Educar > Competir** — Un comprador bien educado generalmente toma la decision correcta para su negocio. Tu expertise es haberlo hecho docenas de veces al mes; el comprador lo hace una vez cada pocos anos.
- **Impacto > Features** — Los criterios de decision deben rankearse por impacto en el negocio del prospect, no por cantidad de checkboxes. El precio casi siempre tiene el menor impacto real.
- **Tu posicion no es fija** — Puedes DEPRIORITIZAR criterios donde eres debil, INSERTAR criterios donde eres unico, y MEJORAR tu ranking con evidencia nueva.
- **La tabla de decision es tu campo de batalla** — Quien controla los criterios controla la evaluacion. Si dejas que el competidor defina los criterios, pierdes antes de empezar.

---

## Proceso de 4 Pasos

### Paso 1: Establecer los criterios

Hablar con las personas que **usaran** la solucion, no solo el comprador economico. Los usuarios finales revelan los criterios que realmente determinan adopcion y exito.

**Preguntas para surfacear criterios**:

| Pregunta | Objetivo |
|----------|----------|
| "Cuando evaluan una solucion como esta, que factores son mas importantes para su equipo?" | Surfacear criterios espontaneos |
| "Si tuvieran que elegir entre {criterio A} y {criterio B}, cual tiene mas peso?" | Forzar priorizacion |
| "Que experiencia han tenido con soluciones anteriores? Que funciono y que no?" | Criterios basados en experiencia real |
| "Si pudieran disenar la solucion ideal, que NO deberia faltarle?" | Criterios de must-have vs. nice-to-have |
| "Quien mas va a opinar sobre esta decision y que les importa a ellos?" | Criterios ocultos de otros stakeholders |

**Criterios tipicos** (varian por industria y solucion):

```
FUNCIONALES                    ECONOMICOS                 OPERACIONALES
├── Performance               ├── Precio total (TCO)     ├── Facilidad de uso
├── Features especificos      ├── ROI esperado           ├── Time-to-value
├── Integraciones             ├── Costo de switching     ├── Soporte / SLA
├── Escalabilidad             ├── Terminos de pago       ├── Programa de onboarding
├── Seguridad / Compliance    └── Costo de oportunidad   ├── Roadmap de producto
└── Customizacion                                        └── Ecosistema / Partners
```

### Paso 2: Identificar opciones

Mapear todas las opciones que el prospect esta considerando — incluyendo las que no te dicen:

| Opcion | Tipo | Fortaleza conocida | Debilidad conocida |
|--------|------|-------------------|-------------------|
| **Tu solucion** | Competidor directo | ___ | ___ |
| **Competidor A** | Competidor directo | ___ | ___ |
| **Competidor B** | Competidor directo | ___ | ___ |
| **Sustituto** (solucion diferente al mismo problema) | Competidor indirecto | ___ | ___ |
| **Build interno** | DIY | Control total, sin costo de licencia | Tiempo, mantenimiento, costo oculto |
| **No action** (status quo) | Inercia | Cero riesgo de implementacion | Costo de oportunidad creciente |

**Insight**: "No action" es casi siempre tu competidor mas fuerte. El status quo no requiere decision, no tiene riesgo de implementacion, y no necesita aprobacion de procurement.

### Paso 3: Rankear opciones por criterio

Crear la tabla de decision criteria con ranking honesto (1 = mejor, N = peor):

```
                      Tu      Comp A    Comp B    Sustituto    No Action
Criterio              ────    ──────    ──────    ─────────    ─────────
1. Performance         1        2         3          4            5
2. Integracion         3        2         1          4            5
3. Soporte             2        3         4          1            5
4. Escalabilidad       1        3         2          4            5
5. Precio              3        1         2          4            -
```

**Reglas del ranking**:
- Se honesto contigo mismo — un ranking inflado se desmorona en la evaluacion real
- Usa datos, no opiniones — analyst reports, reviews, benchmarks
- Incluye siempre "No Action" — el prospect necesita ver el costo de no actuar
- Actualiza el ranking conforme descubres nueva informacion

### Paso 4: Determinar el impacto de cada criterio

Este es el paso donde ganas. Traducir cada criterio a **impacto medible en el negocio del prospect**:

| Criterio | Impacto tipo | Impacto cuantificado | Simbolo |
|----------|-------------|---------------------|---------|
| Performance | Revenue (aumento de ingresos) | +$2,000/mes de revenue adicional | +$$$ |
| Feature X | Revenue (capacidad nueva) | +$1,500/mes de revenue nuevo | +$$$ |
| Integracion | Costo (eficiencia) | -$15K one-time + $500/mes | -$$$ |
| Soporte | Experiencia (productividad) | SLA 2 horas vs. 24 horas actual | +CX |
| Precio | Costo (directo) | +$500/mes vs. competidor | -$$$ |

**Resultado**: Cuando el prospect ve que Performance genera +$2,000/mes y Precio cuesta +$500/mes, la decision es obvia. El criterio con menor impacto real es casi siempre el precio.

---

## Comprador No Educado vs Educado

### Comprador no educado (weighting / checkboxes)

Usa un sistema de ponderacion: asigna pesos a criterios y suma puntos.

```
Criterio       Peso    Tu    Comp A    Comp B
──────────     ────    ───   ──────    ──────
Precio          30%     2      5         4
Performance     25%     5      3         3
Integracion     25%     3      4         5
Soporte         20%     4      3         2
                       ───    ───       ───
TOTAL (pond.)          3.35   3.85      3.55  ← Competidor A "gana"
```

**Problema**: El weighting trata todos los criterios como comparables. Un "5" en precio vale igual que un "5" en performance, cuando el impacto de negocio es radicalmente diferente. Este metodo favorece al competidor mas barato.

### Comprador educado (impacto)

Decide basado en el impacto real de cada criterio en su negocio:

```
Criterio       Impacto anual     Tu    Comp A    Comp B
──────────     ─────────────     ───   ──────    ──────
Performance    +$24,000/ano       1      3         3
Feature X      +$18,000/ano       1      -         -
Integracion    +$21,000/ano       2      1         1
Soporte        Productividad      2      3         4
Precio         -$6,000/ano        3      1         1
                                 ───    ───       ───
Impacto neto                    $57K    $39K      $33K  ← TU ganas
```

**Tu trabajo**: Mover al comprador de weighting a impacto. Esto no es manipulacion — es educacion. Un comprador que decide por impacto toma una decision mejor para su negocio.

---

## 3 Tacticas para Mejorar tu Posicion

### Tactica 1: DEPRIORITIZE (Reducir importancia de la fortaleza del competidor)

**Cuando usarla**: Cuando el competidor es fuerte en un criterio donde tu eres debil — tipicamente precio.

**Como funciona**: Demostrar que el impacto del criterio donde eres fuerte supera ampliamente el criterio donde eres debil.

**Ejemplo detallado**:

```
ANTES (vision del prospect):
  "Competidor A es $500/mes mas barato. Eso importa."

  Ranking del prospect:
  1. Precio        → Comp A gana (ahorro $500/mes)
  2. Performance   → Tu ganas
  3. Soporte       → Comp A gana
  4. Integracion   → Tu ganas

TU EDUCACION:
  "Entiendo que $500/mes es significativo. Pero veamos el impacto
   completo: nuestra performance genera $2,000/mes de revenue
   adicional que Comp A no puede igualar. Eso significa que los
   $500 de ahorro en precio les cuestan $1,500/mes en revenue
   no capturado. El precio tiene el menor impacto real."

DESPUES (vision educada):
  1. Performance   → +$2,000/mes revenue     ← TU
  2. Integracion   → -$500/mes eficiencia    ← TU
  3. Soporte       → -$300/mes productividad
  4. Precio        → -$500/mes costo         ← Menos impacto real
```

**Script**:
> "Si miran el impacto de cada criterio en su negocio, nuestro servicio cuesta $500 mas al mes. Pero genera $2,000 mas de revenue mensual. El ahorro en precio es real, pero el impacto de performance es 4 veces mayor. Cual criterio mueve mas su negocio?"

### Tactica 2: INSERT (Agregar un criterio nuevo donde solo tu tienes capacidad)

**Cuando usarla**: Cuando tienes una capacidad unica que el prospect no esta considerando en su evaluacion.

**Como funciona**: Introducir un criterio nuevo que solo tu puedes satisfacer, y demostrar su impacto emocional + racional.

**Ejemplo detallado**:

```
ANTES (criterios del prospect):
  1. Precio
  2. Performance
  3. Soporte
  4. Integracion

TU INSERCION:
  "Algo que muchos de nuestros clientes descubrieron despues de
   implementar es que nuestra Feature X genera adopcion organica
   en el equipo. Los usuarios empiezan a usarlo por cuenta propia
   porque les facilita el trabajo diario. Eso se traduce en
   $1,500/mes de productividad adicional que ningun competidor
   puede ofrecer porque simplemente no tienen esta capacidad."

DESPUES:
  1. Performance   → +$2,000/mes revenue
  2. Feature X     → +$1,500/mes productividad  ← NUEVO, SOLO TU
  3. Integracion   → -$500/mes eficiencia
  4. Soporte       → Productividad
  5. Precio        → -$500/mes costo
```

**Tipos de criterios para insertar**:
- Features que generan adopcion organica en el equipo (impacto emocional + racional)
- Capacidades de analytics o visibilidad que otros no tienen
- Integraciones exclusivas con herramientas que el prospect ya usa
- Programas de enablement, coaching, o CSM incluidos (no solo software)
- Capacidades de AI, automatizacion, o prediccion diferenciadoras
- Comunidad de usuarios, marketplace de extensiones, ecosistema

### Tactica 3: IMPROVE RANKING (Mejorar tu posicion en un criterio existente)

**Cuando usarla**: Cuando eres percibido como debil en un criterio pero puedes demostrar lo contrario con evidencia nueva.

**Como funciona**: Presentar evidencia que cambie la percepcion del prospect sobre tu posicion.

**Ejemplo detallado**:

```
ANTES (percepcion del prospect):
  Integracion: Tu = #3 de 4
  (prospect asume que tu integracion es dificil y lenta)

TU EVIDENCIA:
  "Entiendo la preocupacion sobre integracion. Hace 2 meses
   lanzamos nuestra nueva API que reduce el setup de 3 semanas
   a 3 dias. {Cliente X}, una empresa similar a la suya, acaba
   de implementarla y redujo su tiempo de setup en 80%.
   Puedo conectarlos con ellos si quieren escucharlo directo."

DESPUES (nueva percepcion):
  Integracion: Tu = #1 de 4 (evidencia real, no claims)
```

**Fuentes de evidencia para mejorar ranking**:

| Fuente | Credibilidad | Ejemplo |
|--------|-------------|---------|
| **Nuevo release / feature** | Alta | "Nuestro API v2 reduce setup de 3 semanas a 3 dias" |
| **Caso de estudio** | Muy alta | "{Empresa X} logro {resultado} en {tiempo}" |
| **Referencia directa** | Maxima | "Puedo conectarlos con {persona} de {empresa similar}" |
| **Datos de benchmark** | Alta | "En el benchmark de {firma}, subimos de #3 a #1 en {criterio}" |
| **PoC reciente** | Muy alta | "En el PoC con {empresa}, logramos {resultado} en {tiempo}" |
| **Analyst report** | Alta | "Gartner nos posiciono como lider en {cuadrante}" |

---

## Trade-off Matrix

La herramienta definitiva para educar al comprador. Stack rank los criterios por impacto en el negocio del prospect:

```
┌──────────────────────────────────────────────────────────────┐
│  TRADE-OFF MATRIX                                             │
│                                                               │
│  Criterio                 Impacto en el negocio               │
│  ───────────────────────  ──────────────────────────────────  │
│  1. Performance           Aumenta revenue $24,000/ano         │
│  2. [Criterio insertado]  Aumenta productividad $18,000/ano   │
│  3. Integracion           Ahorra $15K one-time + $6,000/ano   │
│  4. Soporte               SLA 2 horas → productividad equipo  │
│  ═══════════════════════  ═══ Umbral de impacto mayor ═══════ │
│  5. Precio                Aumenta costo $6,000/ano            │
│                                                               │
│  NOTA: Los criterios arriba del umbral son los que realmente  │
│  mueven el negocio. El precio casi siempre cae debajo.        │
└──────────────────────────────────────────────────────────────┘
```

### Como presentar la Trade-off Matrix

> "Hemos analizado cada criterio de su evaluacion en terminos de impacto real en su negocio. Lo que encontramos es que Performance les genera $24,000/ano de revenue adicional, mientras que la diferencia de precio es $6,000/ano. Los criterios que mas mueven su negocio estan arriba de esta linea {sealar umbral}. El precio, aunque importante, tiene el menor impacto relativo."

**Regla**: Nunca digas "el precio no importa". Di "el precio tiene el menor impacto relativo comparado con los otros criterios". Esto respeta la preocupacion del prospect sin ceder terreno.

---

## Educating > Competing

Tu ventaja como vendedor profesional:

```
TU EXPERTISE:
  - Ves docenas de evaluaciones al mes
  - Conoces las consecuencias de cada decision
  - Sabes que criterios realmente importan post-implementacion
  - Tienes datos de clientes similares

EXPERTISE DEL COMPRADOR:
  - Hace esta evaluacion una vez cada pocos anos
  - Primera vez con esta categoria de producto
  - Influenciado por marketing de competidores
  - No sabe que no sabe

TU RESPONSABILIDAD:
  Guiar al comprador con tu experiencia.
  Un comprador bien educado toma la decision correcta.
  Si tu solucion es realmente la mejor, educacion = ganar.
```

**Frase clave**: "He visto a docenas de empresas como la suya hacer esta evaluacion. Lo que consistentemente genera el mayor impacto es {criterio}, no {criterio que el competidor domina}."

---

## Programa de Coaching Semanal

Cronograma para practicar decision criteria con el equipo de ventas:

| Dia | Duracion | Actividad | Detalle |
|-----|----------|-----------|---------|
| **Lunes** | 50 min | Training de Decision Criteria | Formar 2 equipos. Cada equipo crea una tabla de criterios para un prospect real. Presentar y debatir. |
| **Martes** | 25 min | Roleplay — Mejorar posicion | 4 personas. Practicar las 3 tacticas (DEPRIORITIZE, INSERT, IMPROVE) con deals activos. |
| **Jueves** | 25 min | Roleplay — Escenario diferente | 4 personas. Escenario nuevo: prospect con criterios desfavorables. Practicar reconfigurar la tabla. |
| **Viernes** | 50 min | Reunion de equipo completo | Roleplay de demo completa. Dibujar tabla de decision en whiteboard. Lessons learned. Actualizar playbook. |

**Metricas de progreso**:
- Semana 1-2: El equipo puede listar criterios y crear la tabla basica
- Semana 3-4: El equipo puede aplicar las 3 tacticas con fluidez
- Semana 5-6: El equipo presenta la Trade-off Matrix naturalmente en demos
- Semana 7-8: Decision criteria se vuelve parte del proceso de discovery, no solo del cierre

---

## Errores comunes

| Error | Consecuencia | Correccion |
|-------|-------------|------------|
| Aceptar los criterios del prospect sin cuestionar | Si el competidor definio los criterios, ya perdiste | Guiar activamente los criterios usando impacto. "Veamos que criterios realmente mueven su negocio." |
| Competir en precio | Precio siempre tiene el menor impacto real, y un descuento se multiplica por anos | Deprioritize precio. Demostrar impacto de otros criterios. Usar Trade-off Matrix. |
| Hablar solo con el comprador economico | Los criterios reales vienen de los usuarios finales | Paso 1: Hablar con quienes usaran la solucion, no solo quien firma el cheque |
| No tener evidencia de clientes | Claims sin prueba no convencen a nadie | Preparar 2-3 referencias alineadas a criterios clave. Ofrecer PoC con metricas. |
| Presentar features en vez de impacto | Features no mueven decisiones — el impacto de negocio si | Siempre traducir: feature → resultado → impacto medible ($, %, tiempo) |
| Ignorar "No Action" como competidor | Es tu competidor mas fuerte — cero riesgo, cero esfuerzo | Incluir status quo en la tabla y cuantificar su costo de oportunidad creciente |
