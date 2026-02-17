---
description: Orquesta una kickoff call completa para un nuevo cliente. Prepara agenda interna/externa, apertura AVE, verificacion PULSO, y plan de impacto conjunto.
argument-hint: <nombre del cliente>
allowed-tools: [Read, Glob, Grep]
---

# Kickoff call para nuevo cliente

El usuario quiere preparar una kickoff call para: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo** de 4 fases. Guia al usuario paso a paso.

### Fase 1: Preparacion interna

Antes de la kickoff con el cliente, preparar al equipo interno.

**1.1 Revisar notas de ventas**

Solicitar al usuario:
- Notas de discovery calls (resumen o transcripcion)
- PULSO summary del deal (si existe de `/discovery` o CRM)
- Propuesta enviada y terminos acordados
- Emails relevantes del proceso de venta

Si hay PULSO previo, validar que todas las dimensiones estan documentadas:

```
PULSO DEL DEAL — VALIDACION PRE-KICKOFF:

| Dimension | Status | Contenido | Accion |
|-----------|--------|-----------|--------|
| Panorama | [OK/Incompleto] | [Resumen] | [Validar en kickoff] |
| Urgencia | [OK/Incompleto] | [Resumen] | [Profundizar con CS] |
| Logro | [OK/Incompleto] | [Resumen] | [Cuantificar con cliente] |
| Situación Crítica | [OK/Incompleto] | [Resumen] | [Confirmar timeline] |
| Organización | [OK/Incompleto] | [Resumen] | [Mapear stakeholders CS] |
```

**1.2 Mapeo de stakeholders**

Construir el mapa de stakeholders del cliente para la fase de CS/implementacion:

```
MAPA DE STAKEHOLDERS — [Cliente]:

| Nombre | Rol | Tipo | Relacion actual | Accion en kickoff |
|--------|-----|------|----------------|-------------------|
| [Nombre] | [CEO] | Decision Maker | Sponsor del deal | Confirmar vision |
| [Nombre] | [VP Ops] | Champion | Contacto principal | Asignar como punto de contacto |
| [Nombre] | [IT Lead] | Influencer | Bajo contacto | Involucrar en plan tecnico |
| [Nombre] | [End User] | Usuario | Sin contacto | Presentar plan de adoption |
```

Tipos: Decision Maker, Champion, Influencer, Blocker, End User

**1.3 Briefing interno**

Preparar documento de briefing para el equipo que atendera la kickoff (CS, implementacion, soporte):

```
BRIEFING INTERNO — [Cliente]

CONTEXTO:
- Empresa: [nombre, industria, tamano, productos que compraron]
- Valor del deal: $[X] / [anual/mensual]
- Fecha de cierre: [fecha]
- Fecha de kickoff: [fecha]

POR QUE NOS COMPRARON:
- Urgencia principal: [dolor que resolvemos]
- Logro esperado: [metricas que esperan mejorar]
- Situación Crítica: [que genera urgencia de implementar rapido]

QUE PROMETIMOS:
- Outcomes comprometidos: [lista]
- Timeline acordado: [hitos]
- Exclusiones / limitaciones: [que NO esta incluido]

RIESGOS CONOCIDOS:
- [Riesgo 1: stakeholder que no esta convencido]
- [Riesgo 2: timeline agresivo]
- [Riesgo 3: dependencia tecnica]

EQUIPO INTERNO ASIGNADO:
- CSM: [nombre]
- Implementation: [nombre]
- Soporte: [nombre]
- Executive sponsor: [nombre]
```

**Presentar briefing al usuario. Esperar confirmacion y ajustes.**

### Fase 2: Preparacion externa

Preparar los materiales que se comparten con el cliente antes de la kickoff.

**2.1 Agenda de kickoff**

Generar agenda personalizada (60-90 min):

```
AGENDA — KICKOFF CALL [Cliente]
Fecha: [fecha] | Duracion: 60-90 min

APERTURA AVE (5 min)
  A: "Agradecemos la confianza de elegir [nuestra empresa]. Estamos
      entusiasmados de trabajar con [nombre del champion]."
  C: "Tenemos [X] minutos agendados. Sigue funcionando?"
  E: "El objetivo de hoy es alinear expectativas, confirmar prioridades,
      y salir con un plan de impacto concreto para los primeros 90 dias.
      Que mas les gustaria cubrir?"

PRESENTACIONES Y CONTEXTO (10 min)
  - Presentacion del equipo asignado (roles y responsabilidades)
  - El cliente presenta: quienes estan, que esperan
  - Confirmar stakeholders faltantes

VERIFICACION PULSO (20 min)
  - "Antes de definir el plan, queremos confirmar que entendemos
     bien su situacion actual..."
  - Recorrer cada dimension PULSO con el cliente
  - Profundizar en areas con baja confianza
  - Documentar actualizaciones en tiempo real

TEACHING DE VALOR (15 min)
  - Compartir insight relevante de la industria o del proceso
  - Mostrar como otros clientes similares lograron [outcome]
  - Anclar expectativas realistas con datos

PLAN DE IMPACTO CONJUNTO — PIC (20 min)
  - Definir 3-5 hitos de los primeros 90 dias
  - Asignar owners (cliente + nosotros)
  - Definir metricas de exito por hito
  - Acordar cadencia de checkpoints

PROXIMOS PASOS (5 min)
  - Resumen de 3 puntos clave
  - Maximo 3 acciones con owner y fecha
  - Confirmar proximo checkpoint
  - "Que preguntas tienen?"
```

**2.2 Expectativas pre-kickoff**

Email template para enviar al cliente antes de la kickoff:

```
ASUNTO: Preparacion para kickoff — [Empresa + Cliente]

Hola [nombre],

Estamos preparando nuestra kickoff call del [fecha]. Para aprovechar
al maximo el tiempo, queria compartir:

1. AGENDA ADJUNTA — La reunion durara [X] minutos. Si hay algo
   que quieran agregar, solo diganme.

2. ASISTENTES — De nuestro lado estaran [nombres y roles].
   De su lado, seria ideal tener a [roles sugeridos].

3. PREPARACION — Si pueden tener disponible:
   - [Dato especifico que necesitamos]
   - [Acceso o permiso que necesitamos]
   - [Documento o metrica relevante]

4. OBJETIVO — Salir con un plan de impacto conjunto (PIC)
   con hitos claros para los primeros 90 dias.

Nos vemos el [fecha]!

[Firma]
```

**2.3 Materiales de soporte**

Preparar para tener disponible durante la kickoff:
- Deck de presentacion del equipo (si aplica)
- Template del PLAN DE IMPACTO CONJUNTO (PIC)
- Case study relevante de la industria del cliente
- Cronograma de implementacion

### Fase 3: Plan de ejecucion de la kickoff

Guia paso a paso para ejecutar la kickoff de manera efectiva.

**3.1 Apertura AVE**

```
APERTURA AVE — GUIA DETALLADA:

APPRECIATE (crear conexion):
- Agradecer especificamente algo del proceso de ventas
- Reconocer al champion por su rol
- "Sabemos que tuvieron opciones y elegir [nosotros] es una decision
   que nos tomamos muy en serio"

CHECK TIME (respetar el tiempo):
- "Tenemos 60 minutos agendados, sigue funcionando para todos?"
- Si hay limite de tiempo, ajustar agenda en tiempo real
- Priorizar: PULSO verification + PIC son innegociables

END GOAL (alinear expectativas):
- "El objetivo es salir con un plan de 90 dias donde ambos
   equipos sepan exactamente que hacer, cuando, y como medir exito"
- PREGUNTAR: "Que mas les gustaria cubrir hoy?"
- Anotar y abordar sus adiciones
```

**3.2 Verificacion PULSO**

Recorrer cada dimension con el cliente para validar/actualizar:

```
GUIA DE VERIFICACION PULSO EN KICKOFF:

PANORAMA (validar contexto actual):
- "Durante el proceso de ventas, entendimos que su situacion actual es
   [resumen]. Sigue siendo correcto?"
- "Ha cambiado algo desde nuestra ultima conversacion?"
- "Hay algo que no hayamos capturado?"

URGENCIA (profundizar post-venta):
- "La urgencia principal que identificamos fue [dolor]. Ahora que estamos
   en implementacion, hay otras urgencias que quieran abordar?"
- "Cual es la urgencia que mas les urge resolver primero?"

LOGRO (cuantificar con precision):
- "Hablamos de un logro de [metrica]. Tienen datos mas precisos
   ahora que podamos usar como baseline?"
- "Que pasaria si en 90 dias [logramos X]? Como cambia su negocio?"

SITUACIÓN CRÍTICA (confirmar timeline):
- "El timeline que discutimos era [fecha/evento]. Sigue vigente?"
- "Hay algun evento nuevo que genere urgencia adicional?"
- "Que pasa si no logramos [objetivo] antes de [fecha]?"

ORGANIZACIÓN (mapear para CS):
- "Para la fase de implementacion, quienes son los stakeholders clave?"
- "Quien sera nuestro punto de contacto principal?"
- "Hay alguien que deberia estar involucrado pero no esta hoy?"
```

**3.3 Teaching de valor**

Compartir un insight que demuestre expertise y ancle la relacion:

- Benchmark de la industria relevante al pain del cliente
- Patron que hemos visto en clientes similares
- Dato de research que valide la urgencia del problema
- Ejemplo concreto de resultado logrado (anonimizado si es necesario)

**3.4 PLAN DE IMPACTO CONJUNTO (PIC)**

Construir el plan de impacto conjunto:

```
JOINT IMPACT PLAN — [Cliente]

VISION DE EXITO (90 DIAS):
"En 90 dias, [cliente] habra logrado [outcome principal medible]"

HITOS:

| # | Hito | Fecha | Owner (Cliente) | Owner (Nosotros) | Metrica de exito |
|---|------|-------|----------------|-------------------|------------------|
| 1 | [Setup / onboarding completo] | Sem 1-2 | [Nombre] | [CSM] | [Criterio] |
| 2 | [Primer valor demostrado] | Sem 3-4 | [Nombre] | [CSM] | [Criterio] |
| 3 | [Adoption del equipo] | Sem 5-8 | [Nombre] | [CSM] | [Criterio] |
| 4 | [Impacto medible] | Sem 9-12 | [Nombre] | [CSM] | [Criterio] |

CHECKPOINTS:
- Semanal: Sync de 15 min [dia/hora] — status de hitos
- Mensual: Review de 30 min — metricas y ajustes
- Trimestral: Business review — impacto y expansion

RIESGOS Y MITIGACION:
| Riesgo | Probabilidad | Impacto | Mitigacion | Owner |
|--------|-------------|---------|-----------|-------|
| [Riesgo 1] | [Alta/Media/Baja] | [Alto/Medio/Bajo] | [Accion] | [Nombre] |
```

### Fase 4: Post-kickoff

Acciones inmediatas despues de la kickoff call.

**4.1 VAGONES / proximos pasos**

Documentar y enviar dentro de 60 minutos post-call:

```
RESUMEN POST-KICKOFF — [Cliente]
Fecha: [fecha]

ASISTENTES:
- Nuestro equipo: [nombres]
- Equipo del cliente: [nombres]

3 PUNTOS CLAVE ACORDADOS:
1. [Punto clave 1]
2. [Punto clave 2]
3. [Punto clave 3]

ACCIONES INMEDIATAS:
| # | Accion | Owner | Fecha limite |
|---|--------|-------|-------------|
| 1 | [Accion] | [Nombre] | [Fecha] |
| 2 | [Accion] | [Nombre] | [Fecha] |
| 3 | [Accion] | [Nombre] | [Fecha] |

PULSO ACTUALIZADO: [Si/No — adjuntar si se actualizo]

PIC CONFIRMADO: [Si/No — adjuntar version final]
```

**4.2 Follow-up timeline**

```
TIMELINE POST-KICKOFF:

Dia 0 (hoy):
- [ ] Enviar resumen + PIC al cliente (< 60 min post-call)
- [ ] Actualizar CRM con PULSO revisado
- [ ] Crear proyecto en herramienta de implementacion

Semana 1:
- [ ] Primer checkpoint con cliente
- [ ] Iniciar onboarding tecnico
- [ ] Confirmar que stakeholders tienen acceso

Semana 2-4:
- [ ] Primer hito del PIC completado
- [ ] Review de adoption inicial
- [ ] Ajustar plan si es necesario

Mes 2-3:
- [ ] Checkpoints mensuales con metricas
- [ ] Escalar issues si los hay
- [ ] Preparar first business review
```

**4.3 First impact tracking**

Establecer el sistema de tracking desde dia 1:

```
METRICAS DE IMPACTO — [Cliente]:

BASELINE (capturado en kickoff):
| Metrica | Valor actual | Target 90 dias | Metodo de medicion |
|---------|-------------|----------------|-------------------|
| [Metrica 1] | [X] | [Y] | [Como se mide] |
| [Metrica 2] | [X] | [Y] | [Como se mide] |
| [Metrica 3] | [X] | [Y] | [Como se mide] |

TRACKING:
- Frecuencia: [semanal/quincenal]
- Responsable: [CSM + contacto del cliente]
- Herramienta: [CRM, spreadsheet, dashboard]
- Primer data point: [fecha]
```

### Output final

Entregar al usuario el paquete completo de kickoff:

1. **Briefing interno** — Documento para alinear al equipo
2. **Mapa de stakeholders** — Con tipos y acciones por persona
3. **Agenda de kickoff** — Con apertura AVE y tiempos
4. **Email pre-kickoff** — Template listo para enviar
5. **Guia de verificacion PULSO** — Preguntas por dimension
6. **Template PIC** — PLAN DE IMPACTO CONJUNTO con hitos y owners
7. **Resumen post-kickoff** — Template de follow-up
8. **Timeline de seguimiento** — Acciones dia 0 a mes 3
9. **Metricas de impacto** — Baseline + targets + tracking
