---
name: coaching-cadence
description: Use when coaching sales reps, preparing 1:1 meetings, diagnosing performance issues with ROCA framework, or having candid conversations about performance. Activates for "coaching", "1:1", "one on one", "ROCA", "sales coaching", "rep performance", "coaching cadence", "candid conversation", "performance review", "sales training", or "how to coach a rep".
version: 1.0.0
---

# Coaching Cadence

Sistema de coaching de ventas basado en el framework ROCA de Metodología GrowthOS. Incluye diagnostico de performance, cadencia semanal/mensual de coaching, y framework para conversaciones candidas.

## Cuando usar este skill

- El usuario necesita preparar un 1:1 con un rep
- Quiere diagnosticar por que un rep no esta dando resultados
- Necesita estructurar un programa de coaching para su equipo
- Quiere tener una conversacion candida sobre performance
- Necesita un framework para coaching de skills especificas

## Filosofia: Coaching es Diagnostico, No Instruccion

Asi como en ventas se diagnostica con PULSO antes de prescribir, en coaching se diagnostica con ROCA antes de entrenar. No asumas que sabes cual es el problema — diagnostica primero.

## Framework ROCA

ROCA = Resultados | Operación | Conocimiento | Aptitud

| Dimension | Que mide | Ejemplos de metricas |
|-----------|---------|---------------------|
| **Results** | Outcomes especificos y medibles | Discovery calls realizadas, meetings agendados, oportunidades creadas, deals cerrados, revenue |
| **Effort** | Actividades especificas que generan resultados | Calls hechas, emails enviados, mensajes sociales, eventos atendidos |
| **Knowledge** | Lo que el rep SABE | Proceso de ventas, producto, personas/buyers, industria, compelling events |
| **Skills** | Lo que el rep PUEDE HACER | Correr un discovery, hacer demo, manejar objeciones, escribir emails, tradear en cierre |

## Arbol de Decision ROCA

Este es el diagnostico paso a paso cuando un rep no esta en target:

```
1. Los RESULTS estan en target?
   |
   ├── NO → El EFFORT (actividad) esta en target?
   |         |
   |         ├── NO → ISSUE DE ESFUERZO
   |         |         Solucion: Accountability + gestion de tiempo
   |         |         El rep no esta haciendo suficiente actividad
   |         |
   |         └── SI → Esta certificado en KNOWLEDGE?
   |                   |
   |                   ├── NO → ISSUE DE CONOCIMIENTO
   |                   |         Solucion: Entrenamiento + estudio
   |                   |         El rep no sabe lo suficiente
   |                   |
   |                   └── SI → Revisar el trabajo →
   |                             ISSUE DE SKILLS
   |                             Solucion: Roleplay + coaching en vivo
   |                             El rep sabe pero no ejecuta
   |
   └── SI → Excelente! Es el mejor del equipo?
             |
             ├── SI → Elevar: mentoring, stretch goals
             └── NO → Hay espacio para crecer en efficiency
```

**La clave**: No saltes al coaching de skills si el problema es de esfuerzo. No des entrenamiento si el problema es que no esta haciendo las llamadas.

## Los 8 Modelos de Coaching

### Coaching Grupal (1-4)
1. **Training Team**: Sesion de entrenamiento con todo el equipo
2. **Coached Roleplay**: Roleplay con feedback del coach frente al equipo
3. **Peer-to-Peer Roleplay**: Reps practican entre ellos, coach observa
4. **Group Session**: Discusion grupal de casos, objeciones, best practices

### Coaching Individual (5-8)
5. **Study**: Rep estudia material, coach evalua comprension
6. **Simulate**: Rep practica escenarios, coach evalua ejecucion
7. **1:1 Roleplay**: Practica uno a uno con feedback inmediato
8. **Real-Time Coaching**: Coach observa call real y da feedback despues

## Cadencia Semanal de Coaching

| Dia | Actividad | Duracion | Modelo |
|-----|----------|----------|--------|
| **Lunes** | Team Coaching — skill de la semana | 30 min | Training Team (#1) |
| **Martes** | 1:1 con rep (turno 1) | 30 min | Varia segun ROCA |
| **Miercoles** | High Impact Coaching — call review o roleplay grupal | 60 min | Coached Roleplay (#2) o Peer-to-Peer (#3) |
| **Jueves** | 1:1 con rep (turno 2) | 30 min | Varia segun ROCA |
| **Viernes** | Homework review + client call shadowing | 30 min | Study (#5) o Real-Time (#8) |

## Rotacion Mensual de 1:1s

| Semana | Foco del 1:1 | Que cubrir |
|--------|-------------|------------|
| **Semana 1** | Pipeline + Business Plan | Review de pipeline con PULSO scoring, forecast, plan del mes |
| **Semana 2** | Skills + Call Review | Escuchar una call grabada, feedback ROCA, roleplay de mejora |
| **Semana 3** | Career Growth + Sales Coaching | Desarrollo profesional, motivacion, metas personales |
| **Semana 4** | Pipeline Review + Skills Refresh | Cierre de mes, review de resultados, plan de siguiente mes |

Para el template de prep de 1:1, leer `templates/one-on-one-prep.md`.

## Conversaciones Candidas

Cuando necesitas dar feedback dificil, hay 3 escenarios posibles:

### Escenario 1: Rep abierto a feedback
El rep reconoce el problema y quiere mejorar.
- **Approach**: Directo + colaborativo
- Ir directo al diagnostico ROCA
- Co-crear el plan de mejora

### Escenario 2: Rep abierto pero distraido
El rep escucha pero tiene otros problemas (personales, motivacion, fit).
- **Approach**: Empezar por entender su contexto
- Paso 1: "Noto algo diferente. Esta todo bien?"
- Paso 2: Escuchar antes de diagnosticar
- Paso 3: Separar problemas personales de performance
- Paso 4: Acordar un plan que considere ambos

### Escenario 3: Rep no abierto / no valora el feedback
El rep esta a la defensiva o no ve el problema.
- **Approach**: Estructurado y basado en datos

Para el framework completo de conversaciones candidas y coaching plays, leer `frameworks/coaching-plays.md`.

## Estructura de Conversacion Candida (4 Pasos)

1. **Preguntar si algo es inusual**: "He notado que [dato objetivo]. Es algo inusual o hay algo que deba saber?"
2. **Verificar si sabe que es 'bueno'**: "Como se ve [metrica/actividad] cuando esta funcionando bien?" (Si no sabe → issue de Knowledge, ensenar)
3. **Explicar tu perspectiva**: "Desde mi punto de vista, lo que veo es [observacion con datos]. Me preocupa porque [consecuencia]."
4. **Ofrecer opciones**: "Veo estas opciones: (A) [plan de mejora con timeline], (B) [alternativa], (C) [consecuencia de no actuar]. Cual prefieres?"

## Herramientas de Feedback

1. **Alinear con motivaciones**: Conectar el feedback con lo que al rep le importa (dinero, crecimiento, reconocimiento)
2. **Targeted + Objective + Actionable + Timely + Specific (TOAST)**: El feedback debe ser concreto y accionable, no vago
3. **Deliver through questions**: En vez de "tu discovery es debil", preguntar "que information te falta despues de tus discoveries?"
4. **Help take action**: No solo senalar el problema — ofrecer practica y recursos

## Integracion con PULSO

El coaching esta conectado con PULSO en todo momento:

| Skill a coachear | Dimension PULSO | Metrica |
|-----------------|-----------------|---------|
| Abrir calls (ACE) | Panorama | % de calls donde se establece agenda |
| Hacer preguntas de discovery | Urgencia + Logro | PULSO score promedio del rep |
| Identificar urgencia | Situación Crítica | % de deals con SC documentada |
| Mapear stakeholders | Organización | # contactos promedio por deal |
| Escribir propuestas | Todas | Win rate en proposals enviadas |
| Tradear en cierre | Decision | Descuento promedio otorgado |

## Output esperado

Al preparar coaching, generar:

1. **Diagnostico ROCA** del rep con evidencia por dimension
2. **Plan de coaching** especifico (no generico) basado en el diagnostico
3. **Agenda de 1:1** estructurada con temas y preguntas
4. **Feedback** preparado (dato + impacto + accion)
5. **Proximos pasos** con metricas de seguimiento
