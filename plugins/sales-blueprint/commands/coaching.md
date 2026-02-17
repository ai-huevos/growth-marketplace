---
description: Prepara un 1:1 de coaching con un rep de ventas. Diagnostico ROCA, agenda estructurada, y feedback preparado.
argument-hint: <nombre del rep o contexto>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Prep de 1:1 Coaching

El usuario quiere preparar un 1:1 de coaching para: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo**. El coaching se construye con datos reales del rep.

### Fase 1: Contexto del Rep

Preguntar al usuario:

1. "Cual es el rol del rep?" (SDR, AE, AM, CS)
2. "Cuanto tiempo lleva en el rol?"
3. "Que semana del mes estamos? (Esto determina el foco del 1:1)"
   - Semana 1: Pipeline + Business Plan
   - Semana 2: Skills + Call Review
   - Semana 3: Career Growth + Sales Coaching
   - Semana 4: Pipeline Review + Skills Refresh

**Esperar las respuestas.**

### Fase 2: Diagnostico ROCA

Guiar al usuario por el arbol de decision ROCA.

Leer `skills/coaching-cadence/frameworks/roca-framework.md` para los detalles completos.

**Paso 1 — Results**:
"Como estan los resultados del rep vs target?"
- Revenue: ___/___
- Deals cerrados: ___/___
- Pipeline creado: ___/___
- Win rate: ___%

Si Results estan en target → Felicitar. Buscar optimizacion. Ir a Career Growth.
Si Results NO estan en target → Seguir a Paso 2.

**Paso 2 — Effort**:
"Como esta la actividad del rep?"
- Calls/dia: ___/___
- Emails/dia: ___/___
- Meetings/semana: ___/___

Si Effort NO esta en target → **ISSUE DE ESFUERZO**
- Solucion: Accountability, time management, verificar motivacion
- Preguntar: "Por que crees que la actividad esta baja? Hay algo que le este impidiendo ejecutar?"

Si Effort esta en target → Seguir a Paso 3.

**Paso 3 — Knowledge**:
"El rep conoce bien el producto, el proceso de ventas, y las personas/buyers?"

Si Knowledge tiene gaps → **ISSUE DE CONOCIMIENTO**
- Solucion: Entrenamiento, study sessions, certificacion
- Preguntar: "En que areas notas que le falta conocimiento? Ha habido situaciones donde no supo responder?"

Si Knowledge esta en target → Seguir a Paso 4.

**Paso 4 — Skills**:
"El rep sabe que hacer pero no lo ejecuta bien?"

Si Skills tiene gaps → **ISSUE DE SKILLS**
- Solucion: Roleplay, call review, coaching en vivo
- Preguntar: "Que skill especifica necesita mejorar? Tienes una call grabada que podamos analizar?"

### Fase 3: Generar Diagnostico

Con la informacion, presentar:

```
DIAGNOSTICO ROCA: [Nombre del Rep]
════════════════════════════════════
Results:   [En target / Behind / Ahead]
Effort:    [En target / Behind]
Knowledge: [Certificado / Gaps en ___]
Skills:    [Fuerte / Debil en ___]

ISSUE PRINCIPAL: [Effort / Knowledge / Skills]
EVIDENCIA: ___
```

### Fase 4: Preparar Agenda del 1:1

Basado en la semana del mes y el diagnostico ROCA, generar una agenda de 30 minutos.

Leer `skills/coaching-cadence/templates/one-on-one-prep.md` para el template completo.

#### Si es Semana 1 (Pipeline + Business Plan):
```
[0:00-0:05] "Como estas? Algo que deba saber?"
[0:05-0:15] Pipeline review con PULSO scoring
[0:15-0:25] Plan de accion de la semana + donde necesita ayuda
[0:25-0:30] Compromisos mutuos
```

#### Si es Semana 2 (Skills + Call Review):
```
[0:00-0:05] Check-in personal
[0:05-0:10] Status de compromisos de la semana pasada
[0:10-0:20] Call review (pre-seleccionar call + momento critico)
[0:20-0:25] Roleplay de mejora
[0:25-0:30] Homework para la semana
```

#### Si es Semana 3 (Career Growth):
```
[0:00-0:05] Check-in personal
[0:05-0:15] Desarrollo: Donde quiere estar en 6-12 meses?
[0:15-0:25] Coaching de 1 skill especifica (ROCA-based)
[0:25-0:30] Plan de desarrollo + compromisos
```

#### Si es Semana 4 (Pipeline Review + Skills Refresh):
```
[0:00-0:05] Check-in personal
[0:05-0:15] Cierre de mes: resultados vs target, wins/losses
[0:15-0:25] Progreso en la skill que estamos trabajando
[0:25-0:30] Plan del proximo mes
```

### Fase 5: Preparar Feedback

Si hay un tema de performance, preparar feedback usando formato TOAST:

```
OBSERVACION: "En [fecha/situacion], note que [dato objetivo]."
IMPACTO: "Esto resulto en [consecuencia medible]."
ACCION: "Mi sugerencia es [accion concreta]."
PREGUNTA: "Como lo ves tu?"
```

Leer `skills/coaching-cadence/frameworks/coaching-plays.md` para conversaciones candidas si el rep no esta abierto a feedback.

### Fase 6: Preguntas para el 1:1

Generar 3-5 preguntas de coaching basadas en el diagnostico:

**Si es issue de Effort**:
- "Como estas distribuyendo tu tiempo esta semana?"
- "Que te esta quitando tiempo de [actividad core]?"
- "Que necesitarias para llegar a [target de actividad]?"

**Si es issue de Knowledge**:
- "Si un prospect te pregunta [tema], que respondrias?"
- "Describeme el buyer persona de [rol]. Que le quita el sueno?"
- "Cuales son los top 3 compelling events en [industria]?"

**Si es issue de Skills**:
- "Llevame por como abriste tu ultima discovery call."
- "Si pudieras rehacer [momento de la call], que harias diferente?"
- "Hagamos un roleplay rapido: yo soy [persona], vendeme."

### Output Final

1. Diagnostico ROCA con evidencia
2. Agenda del 1:1 (30 min) adaptada a la semana y diagnostico
3. Feedback preparado (TOAST)
4. Preguntas de coaching priorizadas
5. Compromisos sugeridos para el rep
