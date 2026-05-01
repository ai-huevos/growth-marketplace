# Diagnostico de Energia AI — Quiz Funnel

```yaml
client: AI Huevos
type: quiz-funnel
tier: Bait (Tier 1 ESCALA)
scoring: hybrid (public 0-100 + internal PULSO)
status: DRAFT
date: 2026-02-22
author: GrowthOS / growth-foundations + motor-de-ofertas
skill-ref:
  - plugins/growth-foundations/skills/quiz-funnel (Metodologia SONDA)
  - plugins/motor-de-ofertas/skills/escala (ESCALA Value Ladder)
  - plugins/motor-de-ofertas/skills/flujo (Secuencia ORIGEN post-quiz)
template-ref:
  - T-08 (Quiz Blueprint Worksheet)
  - T-28 (ESCALA Canvas)
cross-ref:
  - clients/ai-huevos/offer-architecture/escala-value-ladder.md
  - clients/ai-huevos/sequences/secuencia-origen.md
  - clients/ai-huevos/brand-config/brand-voice.md
  - clients/ai-huevos/case-studies/finkargo.md
  - os/naming/framework-registry.md
```

> **Tier 1 BAIT de la escalera ESCALA de AI Huevos.**
> Quiz gratuito que mide la "Energia AI" de una empresa y simultneamente califica al lead via mapeo PULSO oculto.
> Metafora central: "Tu empresa es como una planta solar. La energia esta -- la estas capturando?"

---

## Diagrama de Flujo del Quiz

```
ENTRADA
  |
  v
[Landing Page]
  "Tu empresa tiene energia AI escondida. Descubrela en 5 minutos."
  |
  v
[Q1] Tamano de empresa ............ Segmentacion (PULSO-P)
  |
  v
[Q2] Rol principal ................ Segmentacion (PULSO-O)
  |
  v
[Q3] Pasos manuales por cliente ... Eje 1: Flujo de Datos (PULSO-P)
  |
  v
[Q4] Dependencia de conocimiento .. Eje 1: Flujo de Datos (PULSO-U)
  |                                  [BLIND-SPOT]
  v
[Q5] Herramientas sin uso ......... Eje 2: Adopcion Real (PULSO-U)
  |
  v
[Q6] Velocidad de acceso a datos .. Eje 2: Adopcion Real (PULSO-L)
  |                                  [BLIND-SPOT]
  v
[Q7] Visibilidad de perdidas ...... Eje 3: Visibilidad Operativa (PULSO-L)
  |                                  [BLIND-SPOT]
  v
[Q8] Deteccion de errores ......... Eje 3: Visibilidad Operativa (PULSO-S)
  |                                  [BLIND-SPOT]
  v
[Q9] Horas manuales semanales ..... Eje 4: Capacidad del Equipo (PULSO-U)
  |
  v
[Q10] PREGUNTA RAIZ (open text) ... PULSO-S + PULSO-O
  |
  v
[Email Gate]
  "Ingresa tu email para recibir tu reporte completo"
  |
  +---> Score 0-25:  APAGADO    --> Pagina de resultado + CTA
  +---> Score 26-50: LATENTE    --> Pagina de resultado + CTA
  +---> Score 51-75: CONECTADO  --> Pagina de resultado + CTA
  +---> Score 76-100: ENERGIZADO --> Pagina de resultado + CTA
  |
  v
[INTERNO - No visible al usuario]
  PULSO profile auto-generado
  Lead temperature (Hot/Warm/Cold)
  Sales brief enviado al equipo
  Secuencia ORIGEN activada (Email 1 inmediato)
```

---

## Modelo de Scoring Hibrido

### Capa Publica: Score de Energia AI (0-100)

Lo que el usuario ve. Cuatro ejes, 0-25 puntos cada uno.

| # | Eje | Preguntas | Rango | Que mide |
|---|-----|-----------|-------|----------|
| 1 | **Flujo de Datos** | Q3, Q4 | 0-25 | Como fluye (o no fluye) la informacion en la organizacion |
| 2 | **Adopcion Real** | Q5, Q6 | 0-25 | Si el equipo realmente USA las herramientas que tiene |
| 3 | **Visibilidad Operativa** | Q7, Q8 | 0-25 | Si la gerencia puede ver lo que pasa en tiempo real |
| 4 | **Capacidad del Equipo** | Q9 + Q1 proxy | 0-25 | Si las personas operan con AI o contra ella |

**Formula de scoring por eje (2 preguntas):**

```
Eje Score = ((Q_a + Q_b) / 8) * 25
```

Donde Q_a y Q_b son los puntos de cada pregunta (1-4).

**Formula de scoring por eje (1 pregunta + proxy):**

```
Eje Score = (Q_a / 4) * 25
```

**Score total:**

```
Energia AI = Eje 1 + Eje 2 + Eje 3 + Eje 4
```

### Segmentos por Score

| Score | Segmento | Etiqueta | Metafora |
|-------|----------|----------|----------|
| 0-25 | **Apagado** | "Luces apagadas" | La planta solar no tiene paneles. La energia se fuga por todos lados. |
| 26-50 | **Latente** | "Energia dormida" | Los paneles existen pero no estan conectados. Hay corriente pero no fluye. |
| 51-75 | **Conectado** | "Red parcial" | Algunos paneles funcionan. Hora de construir la red completa. |
| 76-100 | **Energizado** | "Sistema operando" | La planta genera energia. Expandir y optimizar. |

### Capa Interna: Mapeo PULSO (Oculto)

Lo que ventas ve. Cada pregunta alimenta una dimension de PULSO ademas del eje publico.

| PULSO | Dimension | Preguntas que la alimentan | Que revela para ventas |
|-------|-----------|---------------------------|----------------------|
| **P** (Panorama) | Situacion actual | Q1, Q3 | Tamano, madurez operativa, estado de sistemas |
| **U** (Urgencia) | Dolor cuantificable | Q4, Q5, Q9 | Dependencia de personas, dinero desperdiciado, horas perdidas |
| **L** (Logro) | Consciencia de ROI | Q6, Q7 | Velocidad de decisiones, visibilidad de perdidas |
| **S** (Situacion Critica) | Timeline/triggers | Q8, Q10 (timeline) | Riesgo operativo, ventana de accion de 90 dias |
| **O** (Organizacion) | Contexto decisor | Q2, Q10 (prioridad) | Rol del respondente, capacidad de decision, prioridad real |

**Formula de temperatura del lead:**

```
Hot  = Score < 40 AND (Q8 = A or B) AND (Q2 = A or B)
       El dolor es alto, el riesgo es real, y el decisor esta respondiendo.

Warm = Score 40-65 OR (Q10 contiene palabras: "urgente", "ya", "perdemos", "costo")
       Hay consciencia del problema pero falta el trigger de accion.

Cold = Score > 65 AND Q10 no indica urgencia
       Sistema funciona razonablemente. Nurture a largo plazo.
```

---

## Las 10 Preguntas

### Q1 -- Grease-the-Wheels: Contexto de Empresa

> **Eje:** Segmentacion (no puntua)
> **PULSO:** P (Panorama)
> **Tipo SONDA:** Grease-the-wheels

**"Cuantas personas tiene tu empresa?"**

| Opcion | Texto | Puntos | Segmentacion |
|--------|-------|--------|--------------|
| A | Menos de 20 | -- | Startup/micro |
| B | 20-50 | -- | Scaleup temprano |
| C | 51-200 | -- | Scaleup/mid-market |
| D | Mas de 200 | -- | Mid-market/enterprise |

**Nota de diseno:** No puntua en el score de energia. Sirve para dos cosas: (1) segmentar el tamano del lead para que ventas ajuste el approach, y (2) calentar al respondente con una pregunta facil que no requiere reflexion.

**Proxy para Eje 4:** El tamano de empresa informa la complejidad de la capacidad del equipo. Se usa como variable de ajuste en el calculo del Eje 4:
- <20: sin ajuste
- 20-50: +2 al eje si Q9 >= 3
- 51-200: +3 al eje si Q9 >= 2
- 200+: +1 al eje (mas personas = mas complejidad, compensa)

---

### Q2 -- Grease-the-Wheels: Rol

> **Eje:** Segmentacion (no puntua)
> **PULSO:** O (Organizacion)
> **Tipo SONDA:** Grease-the-wheels

**"Cual es tu rol principal?"**

| Opcion | Texto | Puntos | Segmentacion |
|--------|-------|--------|--------------|
| A | CEO / Fundador | -- | Decision-maker directo |
| B | COO / Director de Operaciones | -- | ICP primario |
| C | CTO / Director de Tecnologia | -- | ICP secundario |
| D | VP / Gerente de area | -- | Influencer, no decisor |

**Nota de diseno:** No puntua, pero es critica para ventas. Un CEO que responde este quiz tiene un ciclo de venta diferente a un VP. El PULSO-O se calibra aqui: opciones A y B indican acceso directo a decision; C y D requieren mapeo de organizacion en el discovery call.

---

### Q3 -- Flujo de Datos (Eje 1)

> **Eje:** Flujo de Datos (1 de 2)
> **PULSO:** P (Panorama -- estado actual)
> **Tipo SONDA:** Segmentacion + Axis scoring

**"Cuando un cliente nuevo entra a tu sistema, cuantos pasos manuales necesita tu equipo para procesar la informacion?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | Mas de 10 pasos, varios sistemas, copiar-pegar constante | 1 |
| B | 5-10 pasos, algunos automatizados | 2 |
| C | 3-5 pasos, mayormente conectados | 3 |
| D | Menos de 3 pasos, fluye automaticamente | 4 |

**Por que esta pregunta importa:** El numero de pasos manuales es el indicador mas directo de friction en el flujo de datos. Cada paso manual es un punto donde la informacion se pierde, se duplica o se transforma a mano. Finkargo tenia mas de 10 pasos antes de KAI.

**Lo que el usuario aprende:** Muchos responden B o C pensando que estan bien. La pregunta los fuerza a contar pasos reales -- y generalmente descubren que son mas de los que pensaban.

---

### Q4 -- Flujo de Datos (Eje 1) [BLIND-SPOT]

> **Eje:** Flujo de Datos (2 de 2)
> **PULSO:** U (Urgencia -- riesgo de dependencia)
> **Tipo SONDA:** Blind-spot

**"Si manana tu mejor empleado se va, cuanto conocimiento operativo critico se pierde?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | Casi todo -- procesos viven en su cabeza | 1 |
| B | Mucho -- tiene sistemas que solo el/ella entiende | 2 |
| C | Algo -- documentado parcialmente | 3 |
| D | Poco -- todo esta en el sistema | 4 |

**Por que es blind-spot:** La mayoria de los COOs saben que dependen de personas clave. Lo que no han cuantificado es CUANTO conocimiento critico vive exclusivamente en cabezas humanas. Esta pregunta pone un espejo: si la respuesta es A o B, la empresa opera sobre una base fragil.

**Lo que el usuario aprende:** La dependencia de personas clave no es un problema de HR -- es un problema de arquitectura de datos. Si el conocimiento no esta en el sistema, no existe para la organizacion.

**Conexion Finkargo:** En Finkargo, la mitad de los datos vivia en la cabeza de 4 personas. Cuando mapeamos la operacion, encontramos 7 puntos donde la informacion se fugaba porque dependia de personas, no de sistemas.

---

### Q5 -- Adopcion Real (Eje 2)

> **Eje:** Adopcion Real (1 de 2)
> **PULSO:** U (Urgencia -- inversion desperdiciada)
> **Tipo SONDA:** Segmentacion + Axis scoring

**"Cuantas herramientas digitales tiene tu equipo que nadie usa realmente?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | Muchas -- pagamos por cosas que nadie toca | 1 |
| B | Algunas -- usan el 50% de lo que tenemos | 2 |
| C | Pocas -- la mayoria se usa | 3 |
| D | Ninguna -- todo lo que pagamos se usa | 4 |

**Por que esta pregunta importa:** La adopcion real es el indicador silencioso de salud operativa. Las empresas gastan en promedio 30% de su presupuesto de software en licencias que nadie abre. No es un problema de tecnologia -- es un problema de rieles: las herramientas existen pero no estan conectadas al flujo de trabajo real.

**Lo que el usuario aprende:** La pregunta fuerza una auditoria mental rapida. Muchos descubren en tiempo real que pagan por 5-10 herramientas que usan "a veces." Ese "a veces" es dinero quemado.

---

### Q6 -- Adopcion Real (Eje 2) [BLIND-SPOT]

> **Eje:** Adopcion Real (2 de 2)
> **PULSO:** L (Logro -- impacto potencial)
> **Tipo SONDA:** Blind-spot

**"Cuando tu equipo necesita un dato para tomar una decision, cuanto se tarda en conseguirlo?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | Dias -- hay que pedirle a alguien que genere un reporte | 1 |
| B | Horas -- buscar en varias fuentes y consolidar | 2 |
| C | Minutos -- buscar en el sistema correcto | 3 |
| D | Segundos -- esta en un dashboard en tiempo real | 4 |

**Por que es blind-spot:** La velocidad de acceso a datos determina la velocidad de las decisiones. Si tu equipo tarda dias en conseguir un numero, tus decisiones van dias atras del mercado. Muchos COOs no han medido esto conscientemente.

**Lo que el usuario aprende:** La brecha entre "tenemos datos" y "tomamos decisiones con datos" se mide en tiempo. Dias = operar a ciegas. Segundos = operar con energia.

**Conexion PULSO-L:** Esta pregunta revela cuanto impacto tendria un sistema en tiempo real. Si la respuesta es A o B, el ROI potencial de conectar datos es enorme -- cada decision acelerada es dinero.

---

### Q7 -- Visibilidad Operativa (Eje 3) [BLIND-SPOT]

> **Eje:** Visibilidad Operativa (1 de 2)
> **PULSO:** L (Logro -- consciencia de ROI)
> **Tipo SONDA:** Blind-spot

**"Puedes decirme ahora mismo cuanto dinero pierde tu empresa por ineficiencias operativas al mes?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | No tengo idea | 1 |
| B | Tengo una intuicion pero no datos | 2 |
| C | Tengo estimaciones aproximadas | 3 |
| D | Si, lo mido y lo reporto | 4 |

**Por que es blind-spot:** Esta es la pregunta mas reveladora del quiz. Si un COO no puede responder cuanto pierde por ineficiencias, significa que no tiene visibilidad sobre su propia operacion. No saber cuanto pierdes es peor que perder -- porque no puedes actuar sobre lo que no ves.

**Lo que el usuario aprende:** La incomodidad de responder A o B ES el diagnostico. Si no puedes cuantificar la perdida, la perdida es mayor de lo que crees.

**Conexion Finkargo:** Finkargo tenia $15M en ahorros escondidos. No era que no existieran -- era que nadie podia verlos. "Cuando no mides, no es que no pierdes. Es que no sabes cuanto."

---

### Q8 -- Visibilidad Operativa (Eje 3) [BLIND-SPOT]

> **Eje:** Visibilidad Operativa (2 de 2)
> **PULSO:** S (Situacion Critica -- riesgo operativo)
> **Tipo SONDA:** Blind-spot

**"Si ocurriera un error de $340,000 en tus operaciones hoy, cuanto tardarian en detectarlo?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | Semanas o meses | 1 |
| B | Dias | 2 |
| C | Horas | 3 |
| D | Minutos -- tengo alertas automaticas | 4 |

**Por que es blind-spot:** El numero $340,000 no es inventado. Le paso a Finkargo. Tardaron 72 horas en detectar una discrepancia de esa magnitud. La pregunta usa un dato real para que el respondente se imagine su propia version: "si esto me pasara a mi, cuanto tardaria?"

**Lo que el usuario aprende:** La velocidad de deteccion de errores es proporcional a la visibilidad operativa. Si la respuesta es A o B, errores de esta magnitud podrian estar ocurriendo ahora mismo sin que lo sepan.

**Generador de urgencia:** Esta pregunta es la mas potente del quiz para activar PULSO-S (Situacion Critica). Si alguien responde A o B, hay un riesgo operativo real y presente.

---

### Q9 -- Capacidad del Equipo (Eje 4)

> **Eje:** Capacidad del Equipo
> **PULSO:** U (Urgencia -- dolor cuantificable)
> **Tipo SONDA:** Segmentacion + Axis scoring

**"Cuantas horas a la semana pasa tu equipo haciendo tareas que una maquina podria hacer?"**

| Opcion | Texto | Puntos |
|--------|-------|--------|
| A | Mas de 20 horas/persona -- la mayoria del tiempo es manual | 1 |
| B | 10-20 horas -- mucho admin, poco estrategico | 2 |
| C | 5-10 horas -- algo manual pero manejable | 3 |
| D | Menos de 5 horas -- automatizado casi todo | 4 |

**Por que esta pregunta importa:** Las horas manuales son el costo mas visible y mas ignorado. Si tu equipo de 50 personas pasa 15 horas semanales en tareas automatizables, son 750 horas-persona por semana. A $25/hora, son $975,000 al ano quemados en tareas que una maquina haria en segundos.

**Lo que el usuario aprende:** La matematica en su cabeza: "Si mi equipo pasa X horas... y somos Y personas... eso es..." El calculo mental genera urgencia propia.

**Conexion Finkargo:** El equipo de Finkargo pasaba la mayoria de su tiempo en reconciliacion manual -- 45 minutos por transaccion. Hoy: 3 minutos. Las horas liberadas se convirtieron en capacidad estrategica.

---

### Q10 -- PREGUNTA RAIZ (Open Text)

> **Eje:** No puntua directamente
> **PULSO:** S (Situacion Critica -- timeline 90 dias) + O (Organizacion -- prioridad real)
> **Tipo SONDA:** PREGUNTA RAIZ

**"Si pudieras resolver UN problema operativo en los proximos 90 dias, cual seria?"**

```
[CAMPO DE TEXTO LIBRE]
Placeholder: "Describe tu problema en una o dos frases..."
```

**Por que esta es la PREGUNTA RAIZ:** Esta pregunta combina tres funciones:

1. **Prioridad real:** Las palabras que usa el prospecto para describir su dolor son oro para ventas. No lo que el prospect "deberia" querer -- lo que realmente quiere resolver.

2. **Timeline implicito:** "90 dias" establece una ventana de accion que mapea directamente al AI-OS Build (Tier 3 ESCALA = 90 dias). El prospect ya esta pensando en ese horizonte temporal.

3. **Vocabulario del cliente:** Las respuestas alimentan el CRM con las palabras exactas del prospect. Cuando ventas lo llame, puede usar su propio lenguaje: "Mencionaste que tu mayor problema es [verbatim]..."

**Lo que el usuario aprende:** La pregunta lo fuerza a priorizar. Muchos prospects tienen 10 problemas; esta pregunta revela cual les quita el sueno. Esa claridad ya tiene valor.

**Para ventas:** Esta respuesta es la pieza mas valiosa del quiz. Un lead que escribe "necesitamos automatizar la reconciliacion de pagos antes del cierre fiscal" le dice a ventas exactamente que ofrecer, con que urgencia, y en que lenguaje hablar.

---

## Email Gate

Despues de Q10, antes de mostrar resultados:

```
PANTALLA DE CAPTURA
---

"Tu Reporte de Energia AI esta listo."

"Ingresa tu email corporativo para recibir:"
  - Tu score de Energia AI (0-100)
  - Diagnostico personalizado de tus 4 ejes
  - 3 quick wins especificos para tu empresa
  - Comparacion con empresas de tu tamano

[Email corporativo]
[Nombre]
[Empresa]

[BOTON: "Ver mi diagnostico"]

Nota al pie: "Sin spam. Sin newsletters genericas.
Solo tu reporte + una invitacion a una sesion de 30 min si tu score lo amerita."
```

---

## Paginas de Resultado

### Estructura General de Cada Pagina

```
1. SCORE VISUAL
   Barra de 0-100 con posicion marcada
   Nombre del segmento en grande
   Metafora de una linea

2. DIAGNOSTICO (2-3 frases, voz KAI)
   Bold-First. Impacto primero.

3. DESGLOSE POR EJE
   4 mini-barras con score de cada eje
   Una frase por eje

4. QUICK WINS (3 acciones inmediatas)
   Numeradas. Concretas. Ejecutables hoy.

5. COMPARACION FINKARGO
   "Finkargo estaba aqui. Despues de KAI: [resultado]."

6. CTA
   Boton principal + texto de soporte
```

---

### Segmento 1: APAGADO (0-25)

#### Score Visual

```
[####|........................] 18/100
         APAGADO
  "La energia esta atrapada."
```

#### Diagnostico

> Tu empresa tiene energia AI atrapada en Excel, WhatsApp y las cabezas de 4 personas. No es un problema de tecnologia -- es un problema de arquitectura.
>
> La informacion existe. Los datos existen. El equipo existe. Lo que no existe son los rieles para que todo eso fluya.
>
> La buena noticia: cuando la energia esta tan atrapada, los quick wins son enormes. Hay fruta al piso que nadie ve.

#### Desglose por Eje

| Eje | Score | Diagnostico de una linea |
|-----|-------|--------------------------|
| Flujo de Datos | [X/25] | Tu informacion viaja a mano entre sistemas desconectados. |
| Adopcion Real | [X/25] | Pagas herramientas que nadie usa. La inversion no genera retorno. |
| Visibilidad Operativa | [X/25] | No puedes ver lo que pasa en tu operacion en tiempo real. Operas a ciegas. |
| Capacidad del Equipo | [X/25] | Tu equipo pasa mas tiempo en tareas manuales que en decisiones estrategicas. |

#### 3 Quick Wins

1. **Mapea tus 3 procesos mas manuales.** Abre un documento y escribe paso a paso como fluye la informacion en tus 3 procesos mas repetitivos. No el proceso oficial -- el real. Donde entra la info, quien la toca, donde se pierde. Este mapa es el primer paso para ver donde se fuga la energia.

2. **Calcula las horas desperdiciadas esta semana.** Preguntale a tu equipo: "Cuantas horas pasaste esta semana haciendo algo que una maquina podria hacer?" Multiplica por el costo/hora. Ese numero es lo que pierdes cada semana por no tener rieles.

3. **Identifica tu cuello de botella #1.** Cual es el UNICO punto donde la informacion se frena mas? Ese punto es tu mayor oportunidad. Si pudieras desbloquearlo, todo lo demas fluiria mejor.

#### Comparacion Finkargo

> **Finkargo estaba aqui.** 3 tabs de Excel. 12 grupos de WhatsApp. 45 minutos por transaccion. La mitad de la informacion en la cabeza de 4 personas.
>
> **Despues de 90 dias con KAI:** 110+ procesos automatizados. Transacciones de 45 min a 3 min. $15M en ahorros ejecutados. $650M procesados anualmente.
>
> Mismo equipo. Mismos sistemas. Diferentes rieles.

#### CTA

```
[BOTON PRIMARIO]
"Agenda una llamada de diagnostico gratuita (30 min)"

Texto de soporte:
"En 30 minutos te mostramos donde esta la energia escondida en tu operacion.
Sin PowerPoints. Sin pitch de ventas. Solo un mapa de donde se fuga tu informacion."

--> Redirige a: calendly/kai-diagnostico
--> Trigger interno: marcar lead como HOT, notificar a ventas inmediatamente
```

---

### Segmento 2: LATENTE (26-50)

#### Score Visual

```
[###########|..................] 42/100
            LATENTE
   "La energia existe. No esta conectada."
```

#### Diagnostico

> Tienes las piezas pero no los rieles. La energia existe en tu organizacion -- no esta conectada.
>
> Probablemente tienes herramientas, datos, y un equipo capaz. Lo que no tienes es la arquitectura para que todo eso trabaje junto. Cada sistema vive en su isla. Cada departamento tiene su version de la verdad.
>
> La zona Latente es la mas comun y la mas frustrante. Sabes que hay potencial. No sabes por donde empezar a capturarlo.

#### Desglose por Eje

| Eje | Score | Diagnostico de una linea |
|-----|-------|--------------------------|
| Flujo de Datos | [X/25] | La informacion fluye parcialmente. Hay puntos de conexion pero tambien huecos criticos. |
| Adopcion Real | [X/25] | Tu equipo usa algunas herramientas. Otras acumulan polvo digital. |
| Visibilidad Operativa | [X/25] | Tienes intuicion sobre lo que pasa. No tienes datos en tiempo real para confirmarlo. |
| Capacidad del Equipo | [X/25] | Tu equipo tiene potencial. Las tareas manuales les roban tiempo estrategico. |

#### 3 Quick Wins

1. **Auditoria de adopcion: que pagas vs. que usas.** Haz una lista de cada herramienta digital que pagas. Al lado, escribe quien la usa y con que frecuencia. Todo lo que nadie abre en 30 dias es energia desperdiciada. Ese numero te va a sorprender.

2. **Conecta tus 2 sistemas mas desconectados.** Identifica los 2 sistemas donde tu equipo pasa mas tiempo copiando datos de uno a otro. Esa conexion manual es el riel que falta. Automatizarla libera horas inmediatamente.

3. **Crea UN dashboard de visibilidad real.** Elige tu metrica operativa mas importante -- la que hoy te tarda horas o dias conseguir. Ponla en un dashboard que se actualice automaticamente. Un solo numero visible cambia como tu equipo toma decisiones.

#### Comparacion Finkargo

> **Finkargo estaba aqui.** Tenian herramientas. Tenian datos. Tenian equipo. Lo que no tenian: rieles.
>
> 2 semanas de arqueologia operacional encontraron 7 puntos de friccion donde la informacion se fugaba. $15M en ahorros estaban ahi. Nadie los veia.
>
> **El problema no era tecnologia. Era arquitectura.**

#### CTA

```
[BOTON PRIMARIO]
"Descarga tu Mapa de Energia + agenda una sesion de 30 min"

Texto de soporte:
"Te enviamos un template para mapear donde fluye (y donde se pierde) tu informacion.
Si quieres que lo hagamos contigo: 30 minutos, sin costo. Te mostramos lo que encontramos en empresas como la tuya."

--> Redirige a: landing/mapa-energia + calendly/kai-diagnostico
--> Trigger interno: marcar lead como WARM, secuencia ORIGEN activada
--> Lead magnet: Template "Mapa de Energia" (PDF)
```

---

### Segmento 3: CONECTADO (51-75)

#### Score Visual

```
[###################|..........] 64/100
                    CONECTADO
    "Algunos paneles funcionan. Hora de construir la red completa."
```

#### Diagnostico

> Algunos paneles funcionan. Hora de construir la red completa. Estas en la zona donde cada mejora se multiplica.
>
> Tu organizacion ya tiene conexiones basicas. Algunos flujos de datos funcionan. Tu equipo usa herramientas con regularidad. Lo que falta es el diseno completo del sistema -- conectar lo que funciona con lo que no, eliminar los cuellos de botella que quedan, y construir visibilidad total.
>
> Esta es la zona mas emocionante. El ROI de cada mejora aqui se multiplica porque ya tienes la base.

#### Desglose por Eje

| Eje | Score | Diagnostico de una linea |
|-----|-------|--------------------------|
| Flujo de Datos | [X/25] | La informacion fluye en los procesos principales. Quedan huecos en los secundarios. |
| Adopcion Real | [X/25] | Tu equipo adopta herramientas con regularidad. Hay oportunidades de optimizacion. |
| Visibilidad Operativa | [X/25] | Tienes visibilidad parcial. Un dashboard integrado cambiaria la velocidad de tus decisiones. |
| Capacidad del Equipo | [X/25] | Tu equipo opera con cierta eficiencia. El salto es de "funciona" a "funciona solo." |

#### 3 Quick Wins

1. **Identifica tus 3 oportunidades de mayor ROI.** De los procesos que aun son manuales o semi-manuales, cuales tocan mas dinero o mas personas? Esos 3 son donde la automatizacion genera retorno inmediato. No busques lo facil -- busca lo que mueve la aguja.

2. **Construye un dashboard de velocidad de decision.** Mide cuanto tarda tu equipo en ir de "necesito un dato" a "tengo el dato." Ese tiempo es el gap entre operar y reaccionar. Reducirlo de dias a minutos transforma la operacion.

3. **Automatiza tu handoff manual mas repetido.** Cual es el punto donde la informacion pasa de una persona a otra (o de un sistema a otro) a mano con mas frecuencia? Ese handoff es un riel roto. Repararlo conecta todo lo que esta antes y despues.

#### Comparacion Finkargo

> **Finkargo paso de Conectado a Energizado en 90 dias.** Tenian algunos sistemas funcionando. Otros estaban desconectados. 110+ procesos despues, el sistema opera como una red completa.
>
> $15M en ahorros. Mismo equipo. La diferencia: rieles completos, no parches.

#### CTA

```
[BOTON PRIMARIO]
"Sprint de Descubrimiento (2 semanas, $500-$1,500)"

Texto de soporte:
"Mapeamos tu operacion completa en 2 semanas.
Te entregamos un Mapa de Energia con las 3-5 oportunidades de mayor ROI cuantificadas.
Es el paso antes de construir: saber exactamente donde poner los rieles."

--> Redirige a: landing/sprint-descubrimiento
--> Trigger interno: marcar lead como WARM-HIGH, notificar a ventas para follow-up Sprint
```

---

### Segmento 4: ENERGIZADO (76-100)

#### Score Visual

```
[###########################|..] 88/100
                            ENERGIZADO
    "Tu sistema opera con energia. Expandir y optimizar."
```

#### Diagnostico

> Tu sistema opera con energia. Ahora: expandir, optimizar, escalar. La pregunta ya no es "como empezar" sino "cuanto mas podemos capturar."
>
> Tu organizacion tiene flujos conectados, herramientas adoptadas, y visibilidad operativa. Estas en el top 10% de las empresas que evaluamos. Lo que queda es expansion: mas procesos, mas departamentos, mas inteligencia sobre tus datos.
>
> El siguiente nivel no es mejorar lo que tienes -- es multiplicarlo.

#### Desglose por Eje

| Eje | Score | Diagnostico de una linea |
|-----|-------|--------------------------|
| Flujo de Datos | [X/25] | Tu informacion fluye entre sistemas con minima friccion. |
| Adopcion Real | [X/25] | Tu equipo usa las herramientas disponibles de forma consistente. |
| Visibilidad Operativa | [X/25] | Tienes visibilidad en tiempo real sobre la mayoria de tu operacion. |
| Capacidad del Equipo | [X/25] | Tu equipo opera con eficiencia. Las tareas manuales son la excepcion, no la regla. |

#### 3 Quick Wins

1. **Identifica los proximos 10 procesos para automatizar.** Ya automatizaste los principales. Ahora busca los que tu equipo asume como "normales" pero que consumen tiempo: aprobaciones, notificaciones, reportes periodicos, conciliaciones menores. La segunda ola de automatizacion es donde se multiplica el ROI.

2. **Construye modelos predictivos sobre tus datos operativos.** Ya tienes datos fluyendo. El siguiente paso es que esos datos predigan: demanda, riesgos, cuellos de botella antes de que ocurran. Pasar de reactivo a predictivo es el salto de Conectado a Energizado real.

3. **Plan de expansion cross-departamental.** Si tu operacion principal ya tiene rieles, donde mas se puede aplicar el mismo modelo? Logistica, finanzas, HR, customer success -- cada departamento tiene su propia energia escondida.

#### Comparacion Finkargo

> **Finkargo lleva 3+ anos como Partner Continuo.** De 1 proceso automatizado a 110+. De un equipo de 4 a un sistema que procesa $650M anuales. Nos quedamos.
>
> La expansion no fue un proyecto. Fue una decision: "si esto funciona aqui, donde mas?"

#### CTA

```
[BOTON PRIMARIO]
"Partner Continuo -- expansion y optimizacion continua"

Texto de soporte:
"Tu sistema ya opera. Lo que sigue es expandirlo.
Hablemos de como escalar lo que funciona a toda tu organizacion."

--> Redirige a: calendly/kai-partner-continuo
--> Trigger interno: marcar lead como HIGH-VALUE, notificar a founders directamente
```

---

## Sales Brief Interno (Auto-Generado por Lead)

Template que ventas recibe por cada lead que completa el quiz.

```
========================================
SALES BRIEF — DIAGNOSTICO DE ENERGIA AI
========================================

LEAD
----
Nombre:    {{nombre}}
Empresa:   {{empresa}}
Rol:       {{rol}} (Q2)
Tamano:    {{tamano}} empleados (Q1)
Email:     {{email}}
Fecha:     {{fecha_completado}}

ENERGY SCORE
------------
Score Total:   {{score}}/100
Segmento:      {{segmento}} (Apagado/Latente/Conectado/Energizado)

  Flujo de Datos:       {{eje1}}/25
  Adopcion Real:        {{eje2}}/25
  Visibilidad Operativa: {{eje3}}/25
  Capacidad del Equipo:  {{eje4}}/25

PERFIL PULSO
------------
P (Panorama):          {{pulso_p}}/10
  Insight: {{Q1_context}} | {{Q3_insight}}
  Estado: empresa de {{tamano}}, {{Q3_pasos}} pasos manuales por cliente nuevo

U (Urgencia):          {{pulso_u}}/10
  Insight: {{Q4_insight}} | {{Q5_insight}} | {{Q9_insight}}
  Dolor: dependencia de personas (Q4={{Q4}}), herramientas sin uso (Q5={{Q5}}),
         {{Q9_horas}} horas manuales/semana por persona

L (Logro):             {{pulso_l}}/10
  Insight: {{Q6_insight}} | {{Q7_insight}}
  ROI awareness: decision speed = {{Q6_velocidad}}, visibilidad de perdidas = {{Q7_nivel}}

S (Situacion Critica): {{pulso_s}}/10
  Insight: {{Q8_insight}} | {{Q10_timeline}}
  Riesgo: deteccion de errores en {{Q8_tiempo}}, ventana de accion = 90 dias

O (Organizacion):      {{pulso_o}}/10
  Insight: {{Q2_context}} | {{Q10_prioridad}}
  Decisor: {{Q2_rol}} — {{Q2_acceso_decision}}

PREGUNTA RAIZ (VERBATIM)
------------------------
"{{Q10_respuesta}}"

TEMPERATURA
-----------
{{temperatura}}: {{temperatura_razon}}

ACCION RECOMENDADA
------------------
{{accion_recomendada}}

NOTAS PARA EL PRIMER CONTACTO
------------------------------
- Usar vocabulario del lead: "{{Q10_palabras_clave}}"
- Eje mas debil: {{eje_mas_debil}} — abrir conversacion por ahi
- Referencia Finkargo relevante: {{finkargo_ref}}
- Trigger de urgencia: {{trigger_urgencia}}

========================================
```

### Reglas de Generacion del Sales Brief

**Temperatura:**

| Condicion | Temperatura | Accion |
|-----------|------------|--------|
| Score < 40 AND (Q8 = A o B) AND (Q2 = A o B) | **HOT** | Llamar en < 24h. Proponer diagnostico gratuito. Usar Q10 como apertura. |
| Score 40-65 OR Q10 contiene urgencia ("urgente", "ya", "antes de", "perdemos") | **WARM** | Email personalizado en < 48h. Enviar Mapa de Energia template. Invitar a sesion. |
| Score > 65 AND Q10 sin urgencia | **COLD** | Secuencia ORIGEN automatica. Nurture con contenido. Recontactar en 30 dias. |
| Q2 = D (VP/Gerente) AND Score < 40 | **WARM** (downgrade) | El dolor es real pero el respondente no es decisor. Pedir referencia al C-level. |

**Accion recomendada por segmento:**

| Segmento | Accion | Tier ESCALA objetivo |
|----------|--------|---------------------|
| Apagado (0-25) | Diagnostico gratuito 30 min + pitch Sprint | Bait --> Frontend |
| Latente (26-50) | Mapa de Energia template + sesion 30 min | Bait --> Frontend |
| Conectado (51-75) | Propuesta de Sprint de Descubrimiento | Bait --> Frontend (directo) |
| Energizado (76-100) | Conversacion de Partner Continuo | Bait --> Middle/Backend |

---

## Notas de Implementacion

### Plataformas Recomendadas

| Plataforma | Uso | Nota |
|-----------|-----|------|
| **Typeform** | Quiz principal | Logica condicional, diseno limpio, integraciones |
| **Google Forms** | MVP / stress test | Gratis, rapido, sin diseno avanzado |
| **Outgrow** | Quiz + landing integrada | Score visual nativo, A/B testing |
| **Tally** | Alternativa open-source | Gratis, autohosted, API completa |

### Integraciones Necesarias

```
Quiz Platform --> Zapier/Make --> CRM (HubSpot/Pipedrive)
                             --> Email (ActiveCampaign/Mailchimp)
                             --> Slack (#leads-entrantes)
                             --> Google Sheets (backup)

Flujo:
1. Lead completa quiz
2. Webhook dispara calculo de score + PULSO
3. Sales brief se genera y envia a Slack + CRM
4. Lead recibe pagina de resultado + entra a Secuencia ORIGEN
5. Si HOT: alerta inmediata a ventas con brief completo
```

### Metricas de Exito

| Metrica | Target | Que indica |
|---------|--------|-----------|
| Completion rate | > 60% | El quiz es lo suficientemente corto y enganchante |
| Email capture rate | > 40% | La promesa del resultado vale el email |
| Score promedio | 30-50 | Estamos atrayendo al ICP correcto (zona Latente) |
| Distribucion de segmentos | 50%+ en Latente/Conectado | Sweet spot para Sprint pitch |
| Q10 completion rate | > 70% | El usuario esta comprometido hasta el final |
| Hot leads / mes | 15-20% del total | El quiz filtra efectivamente |
| Conversion Bait --> Frontend | 20-35% | La escalera funciona |
| CPL (paid traffic) | < $15 | Economicamente viable para LATAM |

### Stress Test Plan (Metodologia SONDA Paso 5)

| Fase | Inversion | Actividad | Objetivo | Timeline |
|------|-----------|-----------|----------|----------|
| 1. Build MVP | $0-100 | Quiz en Typeform/Tally, landing basica, email capture | Quiz funcional con 10 preguntas | Semana 1 |
| 2. Soft launch | $0 | Enviar a red actual (clientes, LinkedIn, WhatsApp) | 30-50 completions, validar scoring | Semana 2 |
| 3. Paid validation | $300-500 | LinkedIn Ads targeting COO/CTO en Colombia y Mexico | 200+ completions, medir CPL y conversion | Semana 3-4 |
| 4. Optimize | $0 | Analizar datos: A/B subjects, ajustar scoring, refinar copy | Metricas en target | Semana 5 |

### Conexiones con Secuencias Post-Quiz

| Segmento | Secuencia activada | Primer email | CTA del email |
|----------|-------------------|-------------|---------------|
| Apagado | ORIGEN (completa, 5 emails) | Email 1: "AI es como el sol" (inmediato) | "Agenda tu diagnostico gratuito" |
| Latente | ORIGEN (completa, 5 emails) | Email 1: "AI es como el sol" (inmediato) | "Descarga tu Mapa de Energia" |
| Conectado | ORIGEN (emails 1, 3, 5) | Email 1: "AI es como el sol" (inmediato) | "Sprint de Descubrimiento: 2 semanas" |
| Energizado | Email directo de founder | Personalizado por Daniel R. | "Hablemos de expansion" |

---

## Rubrica de Scoring Completa

### Tabla Maestra de Puntuacion

| Pregunta | Eje | Opcion A | Opcion B | Opcion C | Opcion D | PULSO |
|----------|-----|----------|----------|----------|----------|-------|
| Q1 | -- | -- | -- | -- | -- | P |
| Q2 | -- | -- | -- | -- | -- | O |
| Q3 | Flujo de Datos | 1 | 2 | 3 | 4 | P |
| Q4 | Flujo de Datos | 1 | 2 | 3 | 4 | U |
| Q5 | Adopcion Real | 1 | 2 | 3 | 4 | U |
| Q6 | Adopcion Real | 1 | 2 | 3 | 4 | L |
| Q7 | Visibilidad | 1 | 2 | 3 | 4 | L |
| Q8 | Visibilidad | 1 | 2 | 3 | 4 | S |
| Q9 | Capacidad | 1 | 2 | 3 | 4 | U |
| Q10 | -- (open text) | -- | -- | -- | -- | S+O |

### Calculo Paso a Paso

```
PASO 1: Sumar puntos brutos por eje
  Eje 1 (Flujo de Datos)     = Q3 + Q4         (rango: 2-8)
  Eje 2 (Adopcion Real)      = Q5 + Q6         (rango: 2-8)
  Eje 3 (Visibilidad)        = Q7 + Q8         (rango: 2-8)
  Eje 4 (Capacidad)          = Q9 * 2          (rango: 2-8)

PASO 2: Normalizar a 0-25 por eje
  Eje N Score = ((Eje N bruto - 2) / 6) * 25
  (redondear al entero mas cercano)

PASO 3: Aplicar ajuste Q1 al Eje 4
  Si Q1 = B (20-50) y Q9 >= 3: Eje 4 += 2
  Si Q1 = C (51-200) y Q9 >= 2: Eje 4 += 3
  Si Q1 = D (200+): Eje 4 += 1
  (Cap en 25)

PASO 4: Sumar total
  Energy Score = Eje 1 + Eje 2 + Eje 3 + Eje 4

PASO 5: Asignar segmento
  0-25:   Apagado
  26-50:  Latente
  51-75:  Conectado
  76-100: Energizado

PASO 6: Calcular PULSO
  P = (Q3 / 4) * 10  (ajustado por Q1 segmentacion)
  U = ((Q4 + Q5 + Q9) / 12) * 10
  L = ((Q6 + Q7) / 8) * 10
  S = (Q8 / 4) * 10  (ajustado por Q10 urgencia keywords)
  O = segun Q2:
      A (CEO): 8/10
      B (COO): 10/10
      C (CTO): 7/10
      D (VP): 4/10
      (ajustado por Q10 decision keywords)

PASO 7: Calcular temperatura
  Aplicar reglas de la seccion "Formula de temperatura del lead"
```

### Ejemplo Completo

**Respondente:** Maria Lopez, COO, empresa de 80 personas

| Pregunta | Respuesta | Puntos | Eje | PULSO |
|----------|-----------|--------|-----|-------|
| Q1 | C (51-200) | -- | -- | P: segmentacion |
| Q2 | B (COO) | -- | -- | O: 10/10 |
| Q3 | B (5-10 pasos) | 2 | Eje 1 | P: medio |
| Q4 | A (casi todo se pierde) | 1 | Eje 1 | U: alto |
| Q5 | B (50% de herramientas) | 2 | Eje 2 | U: medio |
| Q6 | A (dias para conseguir datos) | 1 | Eje 2 | L: bajo |
| Q7 | B (intuicion sin datos) | 2 | Eje 3 | L: medio |
| Q8 | B (dias para detectar error) | 2 | Eje 3 | S: medio |
| Q9 | B (10-20 horas manuales) | 2 | Eje 4 | U: medio |
| Q10 | "Necesitamos que la informacion de logistica llegue a finanzas sin que alguien la copie a mano" | -- | -- | S+O: conectividad |

**Calculo:**

```
Eje 1 = Q3(2) + Q4(1) = 3 bruto --> ((3-2)/6)*25 = 4.2 --> 4
Eje 2 = Q5(2) + Q6(1) = 3 bruto --> ((3-2)/6)*25 = 4.2 --> 4
Eje 3 = Q7(2) + Q8(2) = 4 bruto --> ((4-2)/6)*25 = 8.3 --> 8
Eje 4 = Q9(2) * 2     = 4 bruto --> ((4-2)/6)*25 = 8.3 --> 8
  Ajuste Q1=C, Q9=2(>=2): +3 --> 11

Energy Score = 4 + 4 + 8 + 11 = 27
Segmento: LATENTE (26-50)

PULSO:
  P = (2/4)*10 = 5.0
  U = ((1+2+2)/12)*10 = 4.2
  L = ((1+2)/8)*10 = 3.8
  S = (2/4)*10 = 5.0 (+ urgencia implicita en Q10: "necesitamos")
  O = 10/10 (COO = decisor directo)

Temperatura: HOT
  Score < 40 ✓ AND Q8 = B ✓ AND Q2 = B (COO) ✓

Accion: Llamar en < 24h. Abrir con:
  "Maria, mencionaste que tu mayor problema es que la informacion
   de logistica no llega a finanzas sin copiado manual.
   Eso es exactamente lo que encontramos en Finkargo."
```

---

## Reglas de Voz del Quiz

Derivadas de `clients/ai-huevos/brand-config/brand-voice.md`:

| Regla | Aplicacion en el Quiz |
|-------|----------------------|
| **Bold-First** | Cada pregunta revela algo. No son preguntas neutrales -- son espejos. |
| **Short sentences** | Opciones de respuesta en una frase. Sin parrafos en las opciones. |
| **Name the problem** | "Copiar-pegar constante", "nadie lo usa", "operas a ciegas" -- nombrar el dolor. |
| **Numbers up front** | "$340,000", "45 minutos", "110+ procesos" -- datos concretos en contexto. |
| **Active voice** | "Tu equipo pasa X horas" no "X horas son pasadas por tu equipo." |
| **Close with action** | Cada pagina de resultado termina con un CTA concreto y especifico. |

### Palabras que USA el quiz
Conectar, encontrar, construir rieles, energia, sistema operativo, arqueologia operacional, partner, fluir, capturar.

### Palabras que NUNCA usa el quiz
Solucion end-to-end, leverage, synergy, disruptivo, robusto, de clase mundial, cutting-edge, seamless, chatbot, implementar soluciones.

---

## Principios de Diseno del Quiz

1. **El quiz mismo es valioso.** Cada pregunta ensena algo. Si el respondente no completa el quiz, ya aprendio algo sobre su operacion. Eso construye confianza.

2. **Las opciones son escenarios, no escalas.** No decimos "Malo / Regular / Bueno / Excelente." Describimos situaciones reales que el respondente reconoce. "Copiar-pegar constante" es una imagen, no un juicio.

3. **Los blind-spots son el producto.** Las preguntas Q4, Q6, Q7, Q8 estan disenadas para revelar lo que el respondente no sabia que no sabia. Esa revelacion es lo que convierte un quiz en un diagnostico.

4. **Finkargo es el ancla de prueba.** Cada pagina de resultado incluye una comparacion con Finkargo. No como caso generico -- como espejo especifico: "Ellos estaban donde tu estas. Mira lo que paso."

5. **La PREGUNTA RAIZ (Q10) es el activo mas valioso.** Las 9 preguntas anteriores segmentan y puntuan. La Q10 genera la conversacion de ventas. Las palabras exactas del prospecto son el mejor script de discovery que existe.

6. **El scoring es honesto.** No inflamos scores para hacer sentir bien al respondente. Un Apagado es un Apagado. La honestidad construye credibilidad. La credibilidad construye confianza. La confianza convierte.

---

## Proximos Pasos

- [ ] Fundadores revisan y validan preguntas (especialmente Q8 con referencia Finkargo)
- [ ] Construir quiz en Typeform/Tally (MVP)
- [ ] Disenar paginas de resultado con visual scoring (barras, colores)
- [ ] Conectar con CRM: auto-generacion de Sales Brief
- [ ] Conectar con Secuencia ORIGEN: trigger por segmento
- [ ] Soft launch a red actual (30-50 completions)
- [ ] Stress test con paid traffic ($300-500 en LinkedIn)
- [ ] A/B test: landing page headline + primera pregunta
- [ ] Crear template "Mapa de Energia" (lead magnet para segmento Latente)
- [ ] Documentar scoring real post-primeros-100-leads y ajustar umbrales

---

## Conexiones

| Documento | Relacion |
|-----------|----------|
| `clients/ai-huevos/offer-architecture/escala-value-ladder.md` | Este quiz es el Tier 1 (Bait) de la escalera ESCALA |
| `clients/ai-huevos/sequences/secuencia-origen.md` | Secuencia de 5 emails activada post-quiz |
| `clients/ai-huevos/case-studies/finkargo.md` | Datos de Finkargo usados en preguntas y resultados |
| `clients/ai-huevos/brand-config/brand-voice.md` | Reglas de voz aplicadas a todo el copy |
| `clients/ai-huevos/brand-config/acf-profile.md` | Personalidad de marca en paginas de resultado |
| `clients/ai-huevos/brand-config/creation-myth.md` | "AI es como el sol" -- metafora central del quiz |
| `plugins/growth-foundations/skills/quiz-funnel/SKILL.md` | Metodologia SONDA (estructura del quiz) |
| `plugins/growth-foundations/skills/quiz-funnel/frameworks/sonda-methodology.md` | PREGUNTA RAIZ, buckets, micro-compromisos |
| `plugins/motor-de-ofertas/skills/escala/SKILL.md` | ESCALA value ladder framework |
| `os/naming/framework-registry.md` | Nombres de frameworks: PULSO, SONDA, ESCALA |
