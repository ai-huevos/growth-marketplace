# Sprint de Descubrimiento — SOP de Delivery

```yaml
client: AI Huevos
document: sprint-descubrimiento-sop
version: 1.0
status: DRAFT
date: 2026-02-22
skill-ref: play-to-win/discovery-demo
template-ref: T-14 (Sprint SOP)
cross-references:
  - clients/ai-huevos/offer-architecture/escala-value-ladder.md
  - clients/ai-huevos/funnel-architecture/funnel-blueprint.md
  - clients/ai-huevos/brand-config/brand-voice.md
  - clients/ai-huevos/case-studies/finkargo.md
```

> Este documento es el runbook operativo del Sprint de Descubrimiento — el producto Frontend de AI Huevos ($500-$1,500).
> Un KAI Partner toma este documento el Día 1 y ejecuta un Sprint completo sin ambigüedad.
>
> **Principio rector:** No mapeamos organigramas. Mapeamos cómo fluye la información de verdad.

---

## 1. Resumen Ejecutivo

### Qué es

El Sprint de Descubrimiento es una intervención de **2 semanas (10 días hábiles)** donde un KAI Partner se embebe en la operación del cliente para producir un **Mapa de Energía** — un documento visual que revela cómo fluye (o no fluye) la información en la empresa, dónde se pierde valor, y cuánto cuesta no actuar.

### Para quién

- **COOs, CTOs, VP Operations, Directores de Transformación Digital** de empresas B2B
- **Tamaño:** 50-500 empleados / $5M-$50M facturación anual
- **Industrias:** Fintech, logística, manufactura, servicios financieros — cualquier B2B con operaciones intensivas en datos
- **Dolor:** Invirtieron en AI que nadie usa. Los equipos siguen en Excel y WhatsApp. Cada trimestre reportan "avance" pero la operación no cambió.

### Qué entrega

El **Mapa de Energía** — un entregable con 6 componentes:

1. Diagrama de flujo de información real (no el organigrama)
2. 3-7 puntos de fricción identificados y cuantificados
3. Estimación de ahorro anual por punto de fricción
4. Roadmap de 3-5 automatizaciones prioritarias con ROI estimado
5. Comparativa con benchmarks de industria
6. Recomendación de AI-OS Build personalizada

### Benchmark de referencia

> En Finkargo encontramos 7 puntos de fricción en 10 días. El resultado: de 45 minutos por transacción a 3 minutos. $15M en ahorros. 110+ procesos automatizados. Todo empezó con un Sprint.

### Economía del Sprint

```
PRECIO:         $500 - $1,500 USD (según tamaño de empresa)
PRECIO LATAM:   $500 - $1,000 (Colombia, Bolivia) | $1,000 - $1,500 (México)
DURACIÓN:       10 días hábiles (2 semanas calendario)
HORAS KAI:      8-12 horas totales de un KAI Partner
MARGEN BRUTO:   75-85%
GARANTÍA:       Si no encontramos 1 proceso que valga 10x la inversión, devolvemos el dinero
```

---

## 2. Pre-Sprint (Día -3 a 0)

### 2.1 Email de Onboarding (Día -3)

Enviar dentro de las **2 horas** posteriores a la confirmación de pago.

**Asunto:** Tu Sprint de Descubrimiento empieza el [fecha] — esto necesitamos

**Contenido del email:**

```
GOLPE:   "En los próximos 10 días vamos a mapear cómo fluye tu información de verdad."
DOLOR:   "La mayoría de las empresas opera con procesos que nadie documentó y herramientas
          que nadie conectó. Eso cuesta dinero. Vamos a cuantificar cuánto."
PUENTE:  "Lo que necesitamos de tu parte es simple: acceso y 30 minutos de 4 personas clave."
PRUEBA:  "Así empezamos con Finkargo. Dos semanas después tenían claridad total sobre
          $15M en ahorros escondidos."
ACCIÓN:  [3 items listados abajo]
```

**Solicitar en el email:**

1. **Accesos técnicos:** Lista de sistemas que usa la empresa (CRM, ERP, herramientas de comunicación, hojas de cálculo compartidas, dashboards)
2. **Mapa de stakeholders:** Nombres + roles de las 4-6 personas que el cliente recomienda entrevistar
3. **Confirmación de kick-off:** Fecha y hora del kick-off call (Día 1)

**Template de firma:**

```
[Nombre del KAI Partner]
AI Huevos — AI-OS Built with you. Proven with your data.
```

### 2.2 Solicitud de Accesos (Día -2)

| Tipo de acceso | Qué necesitamos | Por qué | Prioridad |
|----------------|-----------------|---------|-----------|
| **Viewer access** a CRM/ERP | Solo lectura a Salesforce, HubSpot, SAP, o lo que usen | Ver cómo fluyen los datos de verdad | CRÍTICA |
| **Viewer access** a herramientas de comunicación | Slack/Teams/WhatsApp Business — solo lectura de canales operativos | Identificar dónde se toman decisiones fuera de los sistemas | ALTA |
| **Viewer access** a dashboards | BI tools, Google Sheets, Excel compartidos | Entender qué métricas miran y cuáles ignoran | ALTA |
| **Observador** en 1-2 reuniones operativas | Stand-up, revisión semanal, comité | Ver la dinámica real del equipo | MEDIA |
| **Contacto técnico** | 1 persona de IT/Ops que pueda responder preguntas | Resolver dudas sobre integraciones y datos | CRÍTICA |

**Regla:** Si el cliente no puede dar acceso a algún sistema, no es bloqueante. Documentar como "zona ciega" en el Mapa de Energía. Lo que NO vemos también es un hallazgo.

### 2.3 Mapa de Stakeholders (Día -2)

Construir el mapa antes del kick-off usando la información del cliente + investigación propia (LinkedIn, sitio web, org chart público).

| Rol | Entrevista requerida | Duración | Prioridad | Qué queremos saber |
|-----|---------------------|----------|-----------|---------------------|
| **CEO / GM** | Sí | 30 min | ALTA | Visión, frustraciones con tecnología, prioridades del próximo año |
| **COO / VP Operations** | Sí (champion) | 45 min | CRÍTICA | Flujos operativos, cuellos de botella conocidos, intentos previos de automatización |
| **CTO / Head of IT** | Sí | 30 min | ALTA | Stack tecnológico, integraciones existentes, deuda técnica, shadow IT |
| **VP / Director de área funcional** | Sí (1-2 personas) | 30 min | ALTA | Procesos diarios, herramientas que usan vs. las que "deberían" usar |
| **Operador de primera línea** | Si es posible | 20 min | MEDIA | La verdad sin filtro — qué hacen realmente en el día a día |
| **Finance / CFO** | Opcional | 20 min | BAJA | Costos de ineficiencia, presupuesto para transformación |

**Total de entrevistas:** 4-6 personas | **Horas totales de entrevistas:** 2.5-4 horas

### 2.4 Agenda del Kick-Off (Día 0 o Día 1)

**Duración:** 45 minutos
**Asistentes:** Champion del cliente + stakeholders clave + KAI Partner asignado

| Bloque | Tiempo | Contenido |
|--------|--------|-----------|
| **Contexto** | 5 min | Qué es el Sprint, qué NO es, qué vamos a hacer |
| **Expectativas** | 5 min | Qué entregamos (Mapa de Energía), cuándo (Día 10), formato (presentación + documento) |
| **Accesos** | 10 min | Confirmar accesos recibidos, resolver pendientes, identificar zonas ciegas |
| **Stakeholder map** | 10 min | Validar con el champion quién entrevistar, en qué orden, y qué temas son sensibles |
| **Calendario** | 10 min | Agendar las 4-6 entrevistas en los primeros 3 días. Bloquear Día 10 para presentación de hallazgos |
| **Preguntas** | 5 min | Dudas del cliente, acuerdos de confidencialidad si aplica |

**Output del kick-off:**
- Calendario de entrevistas confirmado
- Accesos verificados o plan B para zonas ciegas
- Expectativas alineadas (sin promesas vagas)

---

## 3. Día 1-3: Arqueología Organizacional

### 3.1 Objetivo

Entender **cómo opera la empresa de verdad** — no lo que dice el organigrama, no lo que dice el manual de procesos. La realidad: quién habla con quién, dónde vive la información, dónde se pierde, dónde se duplica.

### 3.2 Protocolo de Entrevistas

**Formato:** 1-on-1, video o presencial. Nunca en grupo (la gente no dice la verdad frente a su jefe).

**Reglas del entrevistador:**

1. **Escuchar más que hablar.** Ratio 80/20 (el entrevistado habla 80%).
2. **No sugerir soluciones.** Estamos en modo arqueología, no en modo consultoría.
3. **Preguntar "muéstrame" siempre que sea posible.** Si dicen "uso Excel para X," pedir que lo muestren en pantalla.
4. **Documentar textual.** Las frases exactas del cliente son oro. "Paso 4 horas copiando datos" vale más que "ineficiencia en data entry."
5. **Buscar la desconexión.** Lo que la gerencia cree que pasa vs. lo que el equipo realmente hace.

### 3.3 Guía de Preguntas por Rol (Formato PULSO)

#### CEO / GM (30 min)

**Panorama** — Contexto general
- "¿Cuál es la prioridad número 1 del negocio para los próximos 12 meses?"
- "Si pudieras resolver UN problema de operaciones mañana, ¿cuál sería?"
- "¿Cuántas herramientas de AI o automatización han comprado en los últimos 2 años? ¿Cuántas se usan diariamente?"

**Urgencia** — Presión temporal
- "¿Hay un deadline externo que haga esto urgente? (Board, inversionistas, regulación, competencia)"
- "¿Qué pasa si no hacemos nada en los próximos 6 meses?"

**Logro** — Definición de éxito
- "Si este Sprint revela algo valioso, ¿cómo se ve el siguiente paso para ti?"
- "¿Qué número necesitarías ver para justificar una inversión mayor en automatización?"

**Situación Crítica** — Riesgos y resistencia
- "¿Ha habido intentos previos de transformación digital? ¿Qué pasó?"
- "¿Quién en la organización sería resistente al cambio? ¿Por qué?"

**Organización** — Poder de decisión
- "¿Quién más necesita estar convencido para que esto avance?"
- "¿Cuál es el proceso de aprobación para proyectos de $5K-$15K?"

#### COO / VP Operations — Champion (45 min)

**Panorama** — Flujo de operaciones
- "Descríbeme un día típico. ¿Dónde pasas más tiempo que no deberías?"
- "¿Cuáles son los 3 reportes más importantes que generas? ¿De dónde vienen los datos?"
- "¿Cuántos sistemas diferentes toca tu equipo en un día? ¿Están conectados entre sí?"
- "Muéstrame cómo fluye una orden/transacción/proyecto desde que entra hasta que se completa."

**Urgencia** — Dolor operativo
- "¿Cuánto tiempo pierde tu equipo en tareas manuales o repetitivas por semana? (Copiar datos, hacer reportes, buscar información)"
- "¿Cuándo fue la última vez que un error de datos costó dinero real?"
- "¿Qué proceso te quita el sueño?"

**Logro** — Procesos ideales
- "Si mañana tu operación funcionara perfectamente, ¿qué sería diferente?"
- "¿Cuál es el proceso que, si se automatizara, tendría el mayor impacto en el negocio?"

**Situación Crítica** — Cuellos de botella
- "¿Dónde se atasca la información? ¿Quién es el cuello de botella humano?"
- "¿Hay procesos que solo una persona sabe hacer? ¿Qué pasa cuando esa persona no está?"
- "¿Cuántas decisiones se toman con datos desactualizados o incompletos?"

**Organización** — Equipo y cultura
- "¿Cómo reacciona tu equipo cuando se implementa una herramienta nueva?"
- "¿Hay 'shadow IT'? ¿Herramientas que los equipos usan sin aprobación de IT?"

#### CTO / Head of IT (30 min)

**Panorama** — Stack tecnológico
- "¿Cuál es el stack actual? (CRM, ERP, BI, comunicación, almacenamiento)"
- "¿Cuántas integraciones hay entre estos sistemas? ¿Cuántas son manuales (export/import)?"
- "¿Cuántos datos viven en hojas de cálculo que no están en ningún sistema oficial?"

**Urgencia** — Deuda técnica
- "¿Cuál es la deuda técnica más cara que tienen hoy?"
- "¿Hay sistemas legados que necesitan reemplazo pero nadie quiere tocar?"
- "¿Cuánto del budget de IT se va en 'apagar incendios' vs. construcción nueva?"

**Logro** — Visión técnica
- "Si tuvieras 90 días y carta blanca, ¿qué conectarías primero?"
- "¿Qué datos existen que nadie está usando?"

**Situación Crítica** — Seguridad y restricciones
- "¿Hay restricciones de compliance que limiten qué datos podemos mover o conectar?"
- "¿Cuál es la política de acceso a APIs? ¿Los sistemas tienen APIs?"

**Organización** — Capacidad del equipo
- "¿Tu equipo podría mantener automatizaciones una vez construidas?"
- "¿Cuántas personas en IT podrían ser contraparte técnica del Sprint?"

#### VP / Director de Área Funcional (30 min)

**Panorama** — Procesos del día a día
- "Muéstrame cómo haces [el proceso más importante de tu área]."
- "¿Cuántas herramientas tocas para completar ese proceso?"
- "¿Dónde pierdes más tiempo esperando información de otro departamento?"

**Urgencia** — Frustración operativa
- "¿Qué proceso te gustaría que desapareciera mañana?"
- "¿Cuántas horas a la semana gastas haciendo cosas que una máquina podría hacer?"

**Logro** — Impacto deseado
- "Si ese proceso se automatizara, ¿qué harías con el tiempo liberado?"

**Situación Crítica** — Workarounds
- "¿Tienes 'trucos' o workarounds que usas porque el sistema oficial no funciona bien?"
- "¿Hay información que sabes que existe pero no puedes acceder fácilmente?"

**Organización** — Adopción
- "¿Has usado herramientas de AI? ¿Cuáles? ¿Las sigues usando?"
- "¿Qué haría que tu equipo adoptara una herramienta nueva sin resistencia?"

#### Operador de Primera Línea (20 min) — Opcional pero valioso

- "Muéstrame exactamente qué haces cuando recibes [input típico]."
- "¿Cuántas veces al día copias información de un lugar a otro?"
- "¿Qué parte de tu trabajo sientes que es una pérdida de tiempo?"
- "Si pudieras cambiar UNA cosa de cómo trabajas hoy, ¿cuál sería?"
- "¿Tu jefe sabe que haces esto así? ¿Hay una forma 'oficial' diferente?"

### 3.4 Qué Capturar por Entrevista

Después de cada entrevista, documentar en el template de notas:

```markdown
## Entrevista: [Nombre] — [Rol] — [Fecha]

### Datos clave
- Sistemas que usa: [lista]
- Procesos mencionados: [lista]
- Tiempo estimado en tareas manuales: [X horas/semana]

### Citas textuales (verbatim)
- "[Cita exacta 1]"
- "[Cita exacta 2]"

### Puntos de fricción identificados
1. [Descripción del punto de fricción]
   - Impacto estimado: [horas/dinero/riesgo]
   - Sistemas involucrados: [lista]
   - Frecuencia: [diario/semanal/mensual]

### Desconexiones observadas
- Lo que dice la gerencia: [X]
- Lo que realmente pasa: [Y]

### Oportunidades de automatización detectadas
1. [Oportunidad] — Impacto: [alto/medio/bajo]

### Notas para el Mapa de Energía
- [Observaciones para el diagrama de flujo]
```

### 3.5 Qué Mapear al Final de Día 3

Al completar las entrevistas, debes tener:

- [ ] **Lista de sistemas** del cliente con nivel de integración entre ellos
- [ ] **4-6 entrevistas documentadas** con notas estructuradas
- [ ] **Primeras hipótesis** sobre dónde se pierde información (mínimo 3)
- [ ] **Citas textuales** impactantes para usar en la presentación
- [ ] **Lista de accesos** para la fase de mapeo (Día 4-7)
- [ ] **Desconexiones** entre lo que la gerencia dice y lo que el equipo hace

---

## 4. Día 4-7: Mapeo de Flujos Reales

### 4.1 Objetivo

Documentar **cómo fluye la información de verdad** — no los flujos que están en el manual, sino los que existen en la práctica. Esto incluye las hojas de Excel que nadie oficializó, los grupos de WhatsApp donde se toman decisiones, y los emails que reemplazan al CRM.

### 4.2 Método de Mapeo

#### Paso 1: Identificar los 3-5 procesos críticos (Día 4)

Usando las entrevistas, seleccionar los procesos que:
- Tocan más sistemas
- Involucran más personas
- Generan más quejas
- Mueven más dinero

**Template de selección:**

| # | Proceso | Sistemas involucrados | Personas involucradas | Frecuencia | Dolor reportado (1-10) | Prioridad de mapeo |
|---|---------|----------------------|----------------------|------------|----------------------|-------------------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

#### Paso 2: Trazar el flujo real de cada proceso (Día 4-5)

Para cada proceso seleccionado, documentar:

```
TRIGGER: ¿Qué lo inicia? (email, llamada, evento en sistema, solicitud manual)
     │
     ▼
PASO 1: [Acción] — [Persona] — [Sistema] — [Tiempo estimado]
     │
     ▼
PASO 2: [Acción] — [Persona] — [Sistema] — [Tiempo estimado]
     │
     ├── ¿Hay handoff manual? → FRICCIÓN
     ├── ¿Se copia/pega entre sistemas? → FRICCIÓN
     ├── ¿Se espera aprobación humana? → CUELLO DE BOTELLA
     └── ¿Se pierde información? → FUGA DE ENERGÍA
     │
     ▼
PASO N: [Output final] — [Sistema destino] — [Quién lo consume]
```

**Herramientas recomendadas para mapeo:**
- **Miro / FigJam** — Para diagramas colaborativos (si el cliente ya usa una)
- **Whimsical** — Para flowcharts rápidos y limpios
- **Google Sheets** — Para matrices de proceso si no hay acceso a herramientas visuales
- **Loom** — Para grabar screen recordings de procesos en acción

#### Paso 3: Identificar puntos de fricción (Día 5-6)

Un **punto de fricción** es cualquier lugar donde la información se detiene, se duplica, se pierde, o requiere intervención manual innecesaria.

**Framework de clasificación:**

| Tipo de fricción | Descripción | Ejemplo | Señal |
|-----------------|-------------|---------|-------|
| **Fuga** | Datos que se pierden entre sistemas | "El pedido entra al CRM pero no llega al ERP" | Doble captura, datos inconsistentes |
| **Duplicación** | La misma información existe en 2+ lugares sin sincronización | "El inventario está en SAP y en un Excel que actualiza Juan manualmente" | Versiones conflictivas |
| **Cuello de botella humano** | Un proceso depende de una persona específica | "Solo María puede aprobar pagos" | Cola de espera, single point of failure |
| **Decisión ciega** | Se toman decisiones sin los datos correctos | "El forecast se hace con datos del mes pasado porque el dashboard no está actualizado" | Datos desactualizados, intuición > datos |
| **Proceso fantasma** | Existe un proceso oficial que nadie sigue | "Se supone que usamos el CRM pero todos usan WhatsApp" | Shadow IT, workarounds |
| **Retraso sistémico** | La tecnología es lenta, no el proceso | "El reporte tarda 45 minutos porque el sistema es viejo" | Esperas, exportaciones manuales |

#### Paso 4: Cuantificar cada punto de fricción (Día 6-7)

**Para cada fricción identificada, calcular:**

```
FRICCIÓN #X: [Nombre descriptivo]
├── Descripción: [Qué pasa exactamente]
├── Frecuencia: [veces/día] o [veces/semana] o [veces/mes]
├── Tiempo perdido: [minutos por ocurrencia]
├── Personas afectadas: [#]
├── Cálculo de costo anual:
│   └── [Frecuencia × Tiempo × Costo/hora × Personas × 52 semanas]
├── Riesgo adicional: [error, compliance, cliente insatisfecho]
└── Automatizable: [Sí — complejidad baja/media/alta] | [No — por qué]
```

**Ejemplo de cuantificación (benchmark Finkargo):**

```
FRICCIÓN #3: Reconciliación manual de transacciones
├── Descripción: Cada transacción se verifica manualmente contra 3 sistemas
├── Frecuencia: 200 transacciones/día
├── Tiempo perdido: 45 minutos por transacción
├── Personas afectadas: 4 analistas
├── Cálculo de costo anual:
│   └── 200 × 45min × $25/hora × 1 × 250 días = $9,375,000/año
├── Riesgo adicional: Errores de reconciliación = pérdidas financieras directas
└── Automatizable: Sí — complejidad media (requiere APIs + reglas de negocio)
```

### 4.3 Herramientas de Análisis

| Herramienta | Uso en el Sprint | Cuándo |
|-------------|-----------------|--------|
| **Diagrama de flujo** (Miro/Whimsical) | Mapear procesos reales | Día 4-5 |
| **Matriz de fricción** (Google Sheet) | Catalogar y priorizar puntos de fricción | Día 5-6 |
| **Calculadora de ROI** (Spreadsheet) | Cuantificar ahorro por fricción | Día 6-7 |
| **Screen recordings** (Loom) | Documentar procesos tal como se hacen | Día 4-5 |
| **Notas de entrevista** (Notion/Docs) | Referencia cruzada con hallazgos de mapeo | Todo el Sprint |

### 4.4 Checklist de Fin de Día 7

- [ ] **3-5 procesos críticos** mapeados con flujos reales
- [ ] **3-7 puntos de fricción** identificados, clasificados y cuantificados
- [ ] **Estimación de ahorro anual** total (suma de todas las fricciones)
- [ ] **3-5 oportunidades de automatización** priorizadas por impacto y factibilidad
- [ ] **Citas textuales** del cliente que validan cada fricción
- [ ] **Datos suficientes** para construir el Mapa de Energía

---

## 5. Día 8-9: Análisis y Construcción del Mapa de Energía

### 5.1 Objetivo

Sintetizar toda la arqueología y el mapeo en un entregable que el cliente no pueda ignorar. El Mapa de Energía no es un reporte — es un espejo. El cliente se ve reflejado y no puede dejar de actuar.

### 5.2 Los 6 Componentes del Mapa de Energía

#### Componente 1: Diagrama de Flujo de Información Real

**Formato:** Diagrama visual (Miro, Whimsical, o Figma)

Qué incluye:
- Todos los sistemas del cliente (cajas)
- Flechas que muestran cómo fluye la información entre ellos
- Flechas ROJAS donde la información se pierde o se detiene
- Flechas AMARILLAS donde hay duplicación o intervención manual
- Flechas VERDES donde fluye correctamente
- Personas clave como nodos (especialmente cuellos de botella humanos)
- Procesos "fantasma" marcados con línea punteada

**Regla:** El diagrama debe ser comprensible por un COO que no es técnico. Sin jerga. Sin acrónimos no explicados.

#### Componente 2: 3-7 Puntos de Fricción Identificados

**Formato:** Lista priorizada con narrativa de impacto

Para cada punto de fricción:

```
🔴 FRICCIÓN #1: [Nombre impactante — no técnico]

LO QUE PASA: [Descripción en 2-3 oraciones — lenguaje del cliente]
LO QUE CUESTA: $[X] al año | [Y] horas/semana | [Z] riesgo adicional
QUIÉN LO SUFRE: [Roles afectados]
POR QUÉ EXISTE: [Causa raíz — no el síntoma]
EVIDENCIA: "[Cita textual del cliente]" — [Nombre, Rol]
```

**Orden:** De mayor a menor impacto económico. El primer punto de fricción debe ser el más doloroso.

#### Componente 3: Estimación de Ahorro Anual

**Formato:** Tabla resumen + número total prominente

| # | Punto de fricción | Ahorro anual estimado | Confianza |
|---|-------------------|----------------------|-----------|
| 1 | [Nombre] | $[X] | Alta / Media / Baja |
| 2 | [Nombre] | $[X] | Alta / Media / Baja |
| ... | ... | ... | ... |
| **TOTAL** | | **$[TOTAL]** | |

**Niveles de confianza:**
- **Alta:** Cálculo basado en datos duros del cliente (tiempos medidos, costos conocidos)
- **Media:** Cálculo basado en estimaciones del equipo + benchmarks de industria
- **Baja:** Cálculo basado en suposiciones razonables (documentar supuestos)

**Regla:** Ser conservador. Es mejor que el ahorro real sea MAYOR que la estimación. Nunca inflar números — la credibilidad es el activo más valioso del Sprint.

#### Componente 4: Roadmap de 3-5 Automatizaciones Prioritarias

**Formato:** Roadmap visual con timeline estimado

| Prioridad | Automatización | Impacto estimado | Complejidad | Timeline estimado | Dependencias |
|-----------|---------------|-----------------|-------------|------------------|-------------|
| 1 | [Nombre] | $[X]/año | Baja / Media / Alta | [X] semanas | [Sistemas/personas] |
| 2 | [Nombre] | $[X]/año | Baja / Media / Alta | [X] semanas | [Sistemas/personas] |
| 3 | [Nombre] | $[X]/año | Baja / Media / Alta | [X] semanas | [Sistemas/personas] |

**Criterios de priorización:**
1. **Impacto / Esfuerzo:** Quick wins primero (alto impacto, baja complejidad)
2. **Dependencias:** Lo que desbloquea otras automatizaciones va antes
3. **Visibilidad:** Lo que el C-Suite puede ver y sentir rápido

#### Componente 5: Benchmarks de Industria

**Formato:** Comparativa visual

```
BENCHMARK: [Industria del cliente] — empresas de tamaño similar

                   CLIENTE              BENCHMARK              FINKARGO (ref.)
Tiempo de          [X] horas            [Y] horas              3 minutos/tx
proceso clave

Sistemas           [#] (desconectados)  [#] (integrados)       110+ procesos
integrados                                                      automatizados

Decisiones con     [%] intuición        [%] datos              Datos en
datos reales       [%] datos            [%] intuición          tiempo real

Costo de           $[X]/año             $[Y]/año               $15M en
ineficiencia                                                    ahorros
```

**Fuentes de benchmarks:**
- McKinsey Digital (automation adoption rates)
- Datos propios de KAI de Sprints anteriores
- Benchmarks de industria (Gartner, Forrester)
- Caso Finkargo como referencia aspiracional

#### Componente 6: Recomendación de AI-OS Build

**Formato:** Propuesta ejecutiva (1 página)

```
RECOMENDACIÓN: AI-OS Build — [Nombre del cliente]

HALLAZGO PRINCIPAL:
[1 oración que resume el problema más grande]

AHORRO IDENTIFICADO:
$[X] al año en [Y] puntos de fricción

PROPUESTA:
Construir un AI-OS en 90 días que conecte [sistemas A, B, C] y automatice
[procesos 1, 2, 3] con ROI medible.

INVERSIÓN:
$[5,000-15,000] — 3 fases de 30 días (Rieles → Flujo → Energía)

ROI ESPERADO:
[X]x en [Y] meses (basado en hallazgos del Sprint)

REFERENCIA:
Finkargo: $35K inversión → $15M en ahorros = 428x ROI

SIGUIENTE PASO:
[CTA concreto]
```

### 5.3 Formato de Entrega del Mapa de Energía

| Componente | Formato | Herramienta sugerida |
|------------|---------|---------------------|
| Documento completo | PDF (15-25 páginas) | Google Docs → PDF |
| Diagrama de flujo | Interactivo + PNG export | Miro / Whimsical |
| Presentación | Deck de 12-15 slides | Google Slides / Figma |
| Resumen ejecutivo | 1 página | Incluido en PDF y deck |
| Propuesta de Build | 1 página | Incluido en PDF, separado en email |

### 5.4 Checklist de QA del Mapa de Energía

Antes de presentar al cliente:

**Contenido:**
- [ ] Los 6 componentes están completos
- [ ] Todos los números son verificables o tienen nota de "estimado"
- [ ] Las citas textuales son reales y atribuidas correctamente
- [ ] La recomendación de Build es específica (no genérica)
- [ ] Finkargo aparece como referencia al menos 2 veces

**Voz y tono (reglas Brand Voice):**
- [ ] Bold-First: impacto primero, datos después
- [ ] Sin "solución end-to-end," "leverage," "disruptivo," "robusto"
- [ ] Vocabulario KAI: energía, rieles, fluir, capturar, arqueología organizacional
- [ ] Oraciones cortas. Voz activa. Números al frente.
- [ ] GOLPE Arc en la narrativa principal

**Forma:**
- [ ] El documento es comprensible por un COO no técnico
- [ ] El diagrama de flujo cabe en una pantalla
- [ ] El deck tiene máximo 15 slides
- [ ] El resumen ejecutivo cabe en 1 página
- [ ] Branding AI Huevos consistente en todo el documento

---

## 6. Día 10: Presentación de Hallazgos

### 6.1 Estructura de la Sesión (60 minutos)

**Asistentes:** Champion + stakeholders clave + decisor económico (idealmente CEO/COO)

**Pre-sesión:** Enviar el resumen ejecutivo (1 página) 2 horas antes. El objetivo: que el decisor llegue ya pensando en los números.

| Bloque | Tiempo | Contenido | Emoción objetivo |
|--------|--------|-----------|-----------------|
| **GOLPE** | 5 min | Un dato impactante. "Su operación pierde $[X] al año en estos [Y] puntos." Sin preámbulo, sin "gracias por su tiempo." Directo al número. | Shock constructivo |
| **DOLOR** | 10 min | Mostrar los 3 puntos de fricción principales con detalle. Usar citas textuales de las entrevistas. "Su equipo nos dijo [cita]." Mostrar el diagrama de flujo con las flechas rojas. | Reconocimiento — "sí, eso nos pasa" |
| **PUENTE** | 15 min | Presentar el Mapa de Energía completo. Caminar por el diagrama de flujo. Mostrar la cuantificación. Presentar el roadmap de automatizaciones. "Esto es lo que encontramos. Esto es lo que se puede hacer." | Claridad — "nunca lo habíamos visto así" |
| **PRUEBA** | 10 min | Finkargo como referencia. "En Finkargo encontramos 7 puntos de fricción similares. El resultado: de 45 minutos por transacción a 3 minutos. $15M en ahorros." Mostrar benchmarks de industria. | Credibilidad — "esto ya funcionó" |
| **ACCIÓN** | 10 min | Presentar la recomendación de AI-OS Build. Pricing. Timeline. Equipo. ROI esperado basado en SUS datos. | Urgencia natural — "cuándo empezamos" |
| **Q&A** | 10 min | Responder preguntas. Nota: las preguntas son información — revelan objeciones, prioridades, y quién tiene el poder de decisión. | Resolución |

### 6.2 El Ascension Trigger

El momento más importante de la sesión es el **cierre del bloque ACCIÓN**. Este es el ascension trigger que mueve al cliente del Sprint al AI-OS Build.

**Fórmula:**

> "Hoy identificamos $[X] en pérdidas anuales. Si cada trimestre pierden $[X/4], la pregunta no es si vale la pena actuar — es cuántos trimestres más están dispuestos a perder."

**Variante si el ahorro es > $500K/año:**

> "Cada semana que pasa sin actuar le cuesta a su operación $[X/52]. En el tiempo que toma implementar un AI-OS Build (90 días), la inacción habrá costado $[X/4]. La inversión para resolverlo es $[precio del Build]."

**Nunca hacer:**
- Presionar. Los números presionan solos.
- Ofrecer descuento sin que lo pidan.
- Pedir una decisión en el momento. Dar 48 horas.

### 6.3 Protocolo Post-Presentación

| Acción | Timing | Responsable |
|--------|--------|-------------|
| Enviar Mapa de Energía completo (PDF + links al diagrama) | Mismo día, < 2 horas después | KAI Partner asignado |
| Enviar propuesta de AI-OS Build (separada del Mapa) | 48 horas máximo | KAI Partner + Founder |
| Follow-up call para resolver dudas | 3-5 días después de la presentación | KAI Partner |
| Escalación a founder si el deal es > $10K | Si aplica | KAI Partner → Daniel R. o Danny |

### 6.4 Protocolo de Handoff a Propuesta

La propuesta de AI-OS Build se construye usando los hallazgos del Sprint. No es una propuesta genérica.

**La propuesta debe incluir:**

1. **Resumen de hallazgos** (del Mapa de Energía, 1 página)
2. **Alcance propuesto** (qué fricciones se resuelven primero)
3. **Timeline de 90 días** (Rieles → Flujo → Energía)
4. **Equipo asignado** (2-3 AI Huevos, nombres si es posible)
5. **Inversión** ($5,000-$15,000 con desglose por fase)
6. **ROI esperado** (basado en los números del Sprint, no en genéricos)
7. **Referencia Finkargo** ($35K inversión → $15M ahorros = 428x ROI)
8. **Condiciones** (pagos, accesos, commitment del cliente)

---

## 7. Post-Sprint (Día 11-14)

### 7.1 Email de Follow-Up (Día 11)

**Asunto:** Tu Mapa de Energía + próximos pasos

**Contenido:**

```
[Nombre],

Hace una semana empezamos a mapear cómo fluye la información en [empresa].

Hoy sabemos que [empresa] pierde $[X] al año en [Y] puntos de fricción.
Lo vimos en sus sistemas, lo escuchamos de su equipo, lo cuantificamos con datos reales.

Adjunto el Mapa de Energía completo. Los hallazgos principales:

1. [Fricción #1] — $[costo]/año
2. [Fricción #2] — $[costo]/año
3. [Fricción #3] — $[costo]/año

La propuesta de AI-OS Build sale mañana [o: va adjunta].

¿30 minutos esta semana para resolver cualquier duda?

[Firma KAI]
```

### 7.2 Entrega de Propuesta (Regla de 48 Horas)

**La propuesta se entrega máximo 48 horas después de la presentación de hallazgos.** Sin excepciones.

Por qué: La urgencia del cliente tiene fecha de vencimiento. Cada día que pasa, la inercia gana. A las 48 horas, el cliente todavía siente el impacto de la presentación. A los 5 días, ya es otro problema en su bandeja.

**Flujo de entrega:**

```
Día 10: Presentación de hallazgos (60 min)
     │
     ├── Mismo día: Enviar Mapa de Energía PDF
     │
     ├── Día 11: Construir propuesta personalizada de AI-OS Build
     │
     └── Día 12 (máximo): Enviar propuesta por email + agendar call de dudas
```

### 7.3 Actualización de CRM (Día 11)

Actualizar en Pipedrive (o CRM activo):

| Campo | Valor |
|-------|-------|
| `funnel_stage` | `sprint_complete` |
| `energy_score_sprint` | [Score validado con datos reales — reemplaza score del quiz] |
| `friction_points` | [#] puntos identificados |
| `annual_savings_estimate` | $[X] |
| `build_proposal_sent` | [Fecha] |
| `build_proposal_amount` | $[X] |
| `next_action` | [Follow-up call / Proposal review / Decision pending] |
| `pulso_panorama` | [Notas de discovery — resumen de 3 líneas] |
| `pulso_urgencia` | [baja / media / alta / crítica] |
| `sprint_nps` | [Score del feedback] |

### 7.4 Recolección de Feedback (Día 12-14)

**Método:** Encuesta corta (5 preguntas) enviada por email + opción de call de 10 minutos.

**Preguntas:**

1. **NPS:** "Del 0 al 10, ¿qué tan probable es que recomiendes el Sprint de Descubrimiento a un colega?" (numérica)
2. **Valor:** "¿El Mapa de Energía reveló algo que no sabías sobre tu operación?" (sí/no + texto libre)
3. **Claridad:** "¿Los hallazgos fueron claros y accionables?" (1-5)
4. **KAI Partner:** "¿Cómo fue la experiencia de trabajar con [nombre del Partner]?" (1-5 + texto libre)
5. **Testimonial:** "¿Podemos usar tu feedback (con tu nombre) como referencia para futuros clientes?" (sí/no)

**Si NPS > 8:** Pedir referido inmediatamente. "¿Conoces a alguien con un problema similar?"

**Si NPS < 6:** Escalar a founder. Llamar al cliente para entender qué falló. Documentar en lecciones aprendidas.

---

## 8. Checklists

### 8.1 Checklist Pre-Sprint

```
PRE-SPRINT (Día -3 a 0)
═══════════════════════

ONBOARDING
  □ Email de onboarding enviado (< 2h después de pago confirmado)
  □ Solicitud de accesos enviada
  □ Mapa de stakeholders construido (4-6 personas)
  □ Kick-off agendado (Día 1)

PREPARACIÓN
  □ Investigación previa del cliente (LinkedIn, sitio web, Crunchbase)
  □ Notas del quiz / ORIGEN / call de venta leídas
  □ Template de notas de entrevista preparado
  □ Template de Mapa de Energía preparado
  □ Calculadora de ROI preparada
  □ CRM actualizado con stage = sprint_started

ACCESOS
  □ Viewer access a CRM/ERP confirmado (o zona ciega documentada)
  □ Viewer access a herramientas de comunicación confirmado
  □ Viewer access a dashboards confirmado
  □ Contacto técnico identificado

CALENDARIO
  □ 4-6 entrevistas agendadas (Día 1-3)
  □ Día 10 bloqueado para presentación de hallazgos (60 min)
  □ Disponibilidad del champion confirmada para Día 4-7 (preguntas ad-hoc)
```

### 8.2 Checklist Diario

```
DIARIO — Sprint de Descubrimiento
══════════════════════════════════

DÍA 1
  □ Kick-off completado (45 min)
  □ Accesos verificados
  □ Primera(s) entrevista(s) realizadas
  □ Notas documentadas con template

DÍA 2
  □ Entrevistas continuando (2-3 programadas)
  □ Primeras hipótesis de fricción documentadas
  □ Accesos adicionales solicitados si es necesario

DÍA 3
  □ Todas las entrevistas completadas
  □ Resumen de hallazgos de arqueología escrito
  □ 3+ puntos de fricción hipotéticos identificados
  □ Lista de procesos a mapear (Día 4-7) definida

DÍA 4
  □ 3-5 procesos críticos seleccionados
  □ Mapeo de flujo real del proceso #1 completado
  □ Screen recordings de procesos clave (si aplica)

DÍA 5
  □ Mapeo de flujo real de procesos #2 y #3 completado
  □ Puntos de fricción clasificados por tipo
  □ Evidencia recopilada (capturas, datos, citas)

DÍA 6
  □ Cuantificación de fricciones iniciada
  □ Benchmarks de industria investigados
  □ Borrador de diagrama de flujo iniciado

DÍA 7
  □ Cuantificación completada (todos los puntos con $)
  □ Roadmap de automatizaciones priorizado
  □ Todos los inputs para el Mapa de Energía listos

DÍA 8
  □ Diagrama de flujo de información real completado
  □ Tabla de fricciones con cuantificación completada
  □ Estimación de ahorro anual calculada

DÍA 9
  □ Mapa de Energía completo (6 componentes)
  □ Deck de presentación listo (12-15 slides)
  □ QA del Mapa completado (checklist de calidad)
  □ Ensayo de la presentación (al menos 1 run-through)

DÍA 10
  □ Presentación de hallazgos completada (60 min)
  □ Mapa de Energía enviado al cliente (PDF)
  □ Reacción del cliente documentada
  □ Propuesta de Build en proceso
```

### 8.3 Checklist de QA del Entregable

```
QA DEL MAPA DE ENERGÍA
═══════════════════════

COMPLETITUD
  □ Componente 1: Diagrama de flujo de información real
  □ Componente 2: 3-7 puntos de fricción identificados
  □ Componente 3: Estimación de ahorro anual
  □ Componente 4: Roadmap de 3-5 automatizaciones
  □ Componente 5: Benchmarks de industria
  □ Componente 6: Recomendación de AI-OS Build

PRECISIÓN
  □ Todos los números son verificables o marcados como "estimado"
  □ Las citas textuales son reales y atribuidas
  □ Los nombres de personas y sistemas son correctos
  □ La cuantificación usa supuestos conservadores
  □ El ROI esperado está basado en datos del Sprint, no genéricos

VOZ KAI
  □ Bold-First: impacto primero, datos después
  □ Vocabulario KAI: energía, rieles, fluir, capturar, Partner
  □ Cero buzzwords prohibidos (end-to-end, leverage, disruptivo, robusto)
  □ GOLPE Arc en la narrativa
  □ Oraciones cortas, voz activa, números al frente
  □ Finkargo como referencia (mínimo 2 menciones)

PRESENTACIÓN
  □ Comprensible por un COO no técnico
  □ Diagrama de flujo cabe en 1 pantalla
  □ Deck tiene ≤ 15 slides
  □ Resumen ejecutivo en 1 página
  □ Branding KAI consistente
  □ Sin errores ortográficos ni de formato
```

---

## 9. Protocolos de Escalación

### 9.1 Acceso Denegado

**Situación:** El cliente no puede o no quiere dar acceso a un sistema o persona clave.

| Nivel | Situación | Acción |
|-------|-----------|--------|
| **Normal** | No dan acceso a 1 sistema secundario | Documentar como "zona ciega" en el Mapa de Energía. Estimar impacto con datos indirectos (entrevistas, benchmarks). |
| **Preocupante** | No dan acceso al CRM o ERP principal | Hablar directamente con el champion. Explicar que sin esos datos, la cuantificación será menos precisa. Si persiste, ajustar expectativas y documentar limitaciones. |
| **Bloqueante** | No dan acceso a ningún sistema + cancelan entrevistas | Escalar a founder. Call con el champion para re-alinear. Si no hay voluntad, ofrecer terminar el Sprint con lo que se tiene + reembolso parcial. |

**Regla:** Nunca inventar datos para compensar un acceso denegado. Es mejor un Mapa de Energía con zonas ciegas honestas que uno con estimaciones infladas.

### 9.2 Hallazgos Mínimos

**Situación:** El Sprint no revela fricciones significativas o el ahorro estimado es menor a $50K/año.

| Escenario | Qué hacer |
|-----------|-----------|
| **La empresa está genuinamente bien operada** | Felicitar al cliente. El Sprint tiene valor diagnóstico aún si confirma que la operación es sólida. Cambiar la narrativa de "te mostramos lo que pierdes" a "te confirmamos que vas bien + estas son las 2-3 oportunidades de optimización." |
| **No tuvimos acceso suficiente** | Documentar las zonas ciegas. Ofrecer una extensión de 3-5 días a costo reducido si el cliente abre más accesos. |
| **El dolor es real pero no cuantificable** | Algunos hallazgos son cualitativos (moral del equipo, riesgo de compliance, dependencia de personas clave). Presentar estos hallazgos con honestidad. No forzar números donde no existen. |

**En cualquier caso:** El Sprint debe entregar valor. Si los hallazgos son mínimos, el Mapa de Energía se enfoca en las oportunidades de optimización y en validar que la operación está por encima del benchmark de industria.

**Impacto en ascensión:** Si el ahorro estimado es < $100K/año, la probabilidad de conversión a Build es baja. El follow-up cambia: en vez de "construyamos tu AI-OS," la narrativa es "cuando estén listos para el siguiente nivel, el mapa ya está listo."

### 9.3 Cliente Quiere Expandir Scope

**Situación:** Durante el Sprint, el cliente pide más entrevistas, más departamentos, o entregables adicionales.

| Solicitud | Respuesta |
|-----------|-----------|
| **1-2 entrevistas extra** con personas del mismo departamento | Aceptar si caben en el timeline. No cobrar extra. |
| **Agregar un departamento** completo al Sprint | Proponer Sprint expandido ($1,500-$3,000, 3 semanas). Formalizar por email antes de empezar. |
| **Entregable adicional** (ej: análisis de un sistema específico, benchmark personalizado) | Si toma < 2 horas, incluirlo como cortesía. Si toma más, proponer como add-on con precio y timeline. |
| **"¿Pueden empezar a implementar?"** (quieren Build durante el Sprint) | Agradecer el entusiasmo. Mantener la separación: "El Sprint diagnostica. El Build construye. Si mezclamos, ninguno funciona bien." Presentar la propuesta de Build al final del Sprint como está diseñado. |
| **Quieren involucrar a 10+ personas** en la presentación de hallazgos | Aceptar, pero pedir al champion que prepare al grupo. "Todos necesitan contexto mínimo para que la presentación no se vuelva una sesión de educación." |

**Regla de oro:** El scope del Sprint está definido. Las expansiones se aceptan cuando agregan valor sin comprometer la calidad del entregable. Si requieren más tiempo o esfuerzo significativo, se cobran.

### 9.4 Conflictos Internos del Cliente

**Situación:** Durante las entrevistas se revelan tensiones internas (culparse entre departamentos, sabotaje, resistencia activa al cambio).

**Protocolo:**

1. **No tomar partido.** El KAI Partner es neutral — documenta lo que ve, no quién tiene razón.
2. **Documentar las tensiones** como puntos de fricción organizacionales (no solo técnicos).
3. **No revelar** lo que una persona dijo sobre otra, a menos que tenga permiso explícito.
4. **En la presentación:** Hablar de "desconexiones entre áreas" no de "el departamento X no coopera con Y."
5. **Si la tensión es bloqueante** (ej: un VP se niega a participar y su área es crítica): Escalar al champion. Si el champion no puede resolverlo, escalar a founder.

---

## 10. Métricas de Calidad

### 10.1 KPIs del Sprint

| Métrica | Target | Señal de alarma | Frecuencia de revisión |
|---------|--------|-----------------|----------------------|
| **NPS del Sprint** | > 50 | < 30 | Por Sprint |
| **Conversión Sprint → Build** | > 30% | < 15% | Trimestral |
| **Entrega de propuesta** | < 48 horas | > 5 días | Por Sprint |
| **Puntos de fricción identificados** | 3-7 por Sprint | < 2 | Por Sprint |
| **Ahorro anual estimado** | > $100K | < $50K (sin build justificado) | Por Sprint |
| **Feedback "reveló algo nuevo"** | > 80% dicen "sí" | < 60% | Por Sprint |
| **Referidos post-Sprint** | > 20% de clientes refieren | < 10% | Trimestral |
| **Horas KAI por Sprint** | 8-12 horas | > 16 horas (scope creep) | Por Sprint |
| **Duración del Sprint** | 10 días hábiles | > 14 días (delays de acceso) | Por Sprint |

### 10.2 Salud del Programa de Sprints

| Indicador | Saludable | Atención requerida | Acción correctiva |
|-----------|-----------|--------------------|--------------------|
| **Sprint → Build > 30%** | El Mapa de Energía vende solo | — | — |
| **Sprint → Build 15-30%** | Aceptable, optimizar presentación | Revisar la sesión de hallazgos, los números deben ser más contundentes | Mejorar cuantificación + ensayar presentación |
| **Sprint → Build < 15%** | Problema serio | El Sprint no genera urgencia suficiente | Revisar: ¿Los hallazgos son débiles? ¿La cuantificación es creíble? ¿El precio del Build es muy alto? |
| **NPS > 50** | Clientes encantados | — | — |
| **NPS 30-50** | Aceptable, pero no genera referidos | Algo falta en la experiencia | Revisar: ¿El partner fue suficientemente embebido? ¿El entregable fue claro? |
| **NPS < 30** | Emergencia | Clientes insatisfechos | Root cause analysis inmediato. Founder habla con el cliente. |
| **Horas > 12/Sprint promedio** | Scope creep sistemático | Márgenes se erosionan | Revisar proceso, endurecer scope gates |

### 10.3 Evolución del Benchmark

Después de cada 5 Sprints completados:

1. **Actualizar los benchmarks de industria** con datos propios de KAI
2. **Refinar las preguntas de entrevista** (eliminar las que no generan hallazgos útiles)
3. **Actualizar el template del Mapa de Energía** si hay componentes que los clientes no valoran
4. **Documentar patrones** — ¿Hay fricciones que se repiten entre industrias/tamaños?
5. **Calibrar la cuantificación** — ¿Las estimaciones fueron conservadoras o excesivas vs. la realidad del Build?

---

## Anexo A: Glosario KAI

| Término | Significado |
|---------|-------------|
| **Mapa de Energía** | Entregable principal del Sprint. Documento visual de flujo de información + fricciones + cuantificación + recomendaciones. |
| **Punto de fricción** | Lugar donde la información se detiene, se pierde, se duplica o requiere intervención manual innecesaria. |
| **Arqueología organizacional** | El proceso de descubrir cómo opera la empresa de verdad, no cómo dice que opera. |
| **AI-OS** | AI Operating System. El sistema operativo construido por KAI que conecta sistemas, automatiza procesos y genera visibilidad. |
| **Rieles** | La infraestructura de conexión entre sistemas. Los rieles permiten que la información fluya. |
| **Energía** | El valor escondido en la operación del cliente. Los datos que no se usan, los procesos que nadie optimizó, las decisiones que se toman a ciegas. |
| **Sprint de Descubrimiento** | 2 semanas de inmersión en la operación del cliente. Producto Frontend de KAI ($500-$1,500). |
| **AI-OS Build** | 90 días de implementación. Producto Middle de KAI ($5,000-$15,000). |
| **Partner Continuo** | Retainer mensual. KAI como extensión permanente del equipo. Producto Backend ($10,000-$25,000/mes). |
| **PULSO** | Framework de discovery: Panorama, Urgencia, Logro, Situación Crítica, Organización. |
| **GOLPE Arc** | Estructura narrativa: GOLPE → DOLOR → PUENTE → PRUEBA → ACCIÓN. |
| **Bold-First** | Principio de voz: BOLD → SMART → WARM → RELIABLE. Impacto primero. |

---

## Anexo B: Quick Reference Card (1 página para imprimir)

```
╔══════════════════════════════════════════════════════════╗
║           SPRINT DE DESCUBRIMIENTO — QUICK REF          ║
║                     AI Huevos                         ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  PRE-SPRINT (Día -3 a 0)                                ║
║  □ Email de onboarding (< 2h post-pago)                 ║
║  □ Solicitar accesos + mapa de stakeholders              ║
║  □ Kick-off agendado (45 min)                            ║
║                                                          ║
║  DÍA 1-3: ARQUEOLOGÍA                                   ║
║  □ 4-6 entrevistas (PULSO format)                        ║
║  □ Citas textuales capturadas                            ║
║  □ 3+ hipótesis de fricción                              ║
║                                                          ║
║  DÍA 4-7: MAPEO                                         ║
║  □ 3-5 procesos críticos mapeados                        ║
║  □ Puntos de fricción cuantificados ($)                  ║
║  □ Roadmap de automatizaciones priorizado                ║
║                                                          ║
║  DÍA 8-9: MAPA DE ENERGÍA                               ║
║  □ 6 componentes completos                               ║
║  □ QA de contenido + voz + forma                         ║
║  □ Ensayo de presentación                                ║
║                                                          ║
║  DÍA 10: PRESENTACIÓN                                   ║
║  □ Sesión de 60 min (GOLPE Arc)                          ║
║  □ Enviar Mapa de Energía mismo día                      ║
║  □ Ascension trigger: "Si pierden $X/trimestre..."       ║
║                                                          ║
║  POST-SPRINT (Día 11-14)                                 ║
║  □ Propuesta de Build en ≤ 48h                           ║
║  □ CRM actualizado                                       ║
║  □ Feedback NPS recolectado                              ║
║                                                          ║
║  BENCHMARK: Finkargo = 7 fricciones, $15M ahorros,      ║
║  45 min → 3 min, 428x ROI                                ║
║                                                          ║
║  TARGETS: NPS > 50 | Sprint → Build > 30%               ║
║  | Propuesta < 48h | 3-7 fricciones/Sprint               ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

*Construido contigo. Probado con tus datos.*
