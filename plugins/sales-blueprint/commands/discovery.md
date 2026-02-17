---
description: Prepara una discovery call con diagnostico PULSO. Investiga al prospect, genera hipotesis, prepara preguntas y agenda ACE.
argument-hint: <nombre de empresa o contacto>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# Prep de Discovery Call

El usuario quiere preparar una discovery call para: $ARGUMENTS

## Instrucciones

Este es un proceso **interactivo**. Guia al usuario paso a paso.

### Fase 1: Research (ejecutar inmediatamente)

Si se proporciono un nombre de empresa o contacto:

1. **Buscar la empresa**: website, LinkedIn, noticias recientes, tamano, industria, productos/servicios
2. **Buscar el contacto** (si se dio nombre): titulo, tiempo en el rol, publicaciones recientes
3. **Identificar compelling events**: contrataciones recientes, funding, cambios de liderazgo, expansion, regulacion

Presentar un resumen del research al usuario.

### Fase 2: Hipotesis PULSO

Con el research, construir una hipotesis PULSO:

| Dimension | Hipotesis | Confianza (1-5) | Pregunta clave para validar |
|-----------|----------|-----------------|---------------------------|
| **P - Panorama** | [Datos firmograficos del research] | [Alta] | [Pregunta para profundizar] |
| **U - Urgencia** | [Dolor inferido de noticias/industria] | [Media] | [Pregunta para descubrir] |
| **L - Logro** | [Logro potencial estimado] | [Media-Baja] | [Pregunta para cuantificar] |
| **S - Situación Crítica** | [Evento detectado o estimado] | [Variable] | [Pregunta para confirmar] |
| **O - Organización** | [Proceso inferido del tamano/industria] | [Baja] | [Pregunta para mapear] |

Pedir al usuario que valide/ajuste la hipotesis. **Esperar respuesta.**

### Fase 3: Preguntas priorizadas

Basado en la hipotesis validada, seleccionar las 5-7 preguntas mas relevantes del banco de preguntas.

Leer `skills/discovery-mastery/frameworks/question-bank.md` para seleccionar preguntas por:
- Industria del prospect
- Rol del contacto (C-level, VP, Manager, User)
- Dimensiones PULSO con menor confianza (priorizar lo que NO sabemos)

### Fase 4: Agenda ACE

Generar agenda personalizada:

```
APERTURA AVE (5 min)
A: "Agradezco que hayas tomado el tiempo para esta llamada, [nombre]."
C: "Tenemos [X] minutos agendados. Sigue funcionando?"
E: "El objetivo es [adaptado al context]. Si hay fit, discutimos proximos pasos."
+ "Que mas quieres sacar de la reunion de hoy?"

DIAGNOSTICO PULSO (15-20 min)
1. [Pregunta Panorama] — validar hipotesis
2. [Pregunta Urgencia] — descubrir dolor cuantificable
3. [Pregunta Urgencia] — descubrir dolor cualitativo
4. [Pregunta Logro] — conectar con resultados de negocio
5. [Pregunta SC] — identificar urgencia
6. [Pregunta Organización] — mapear proceso
7. RESUMIR lo escuchado antes de cerrar

CIERRE (5 min)
- Verificar End Goal del ACE
- Maximo 3 proximos pasos concretos
- Resumen en 3 puntos
- "Que preguntas tienes?"
- Follow-up en <60 min
```

### Fase 5: Objeciones anticipadas

Basado en el research, listar 3-4 objeciones probables con respuestas preparadas.

### Fase 6: Checklist y output

Generar el pre-call brief completo. El template esta en `skills/discovery-mastery/templates/call-prep.md`.

**Output final**:
1. Research summary del prospect
2. Hipotesis PULSO con confianza
3. Top 5-7 preguntas priorizadas
4. Agenda ACE personalizada
5. Objeciones anticipadas con respuestas
6. Checklist pre-call
