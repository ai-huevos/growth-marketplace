---
name: email-sequences
description: Use when designing email sequences, drip campaigns, nurture flows, or cold outreach. Activates for "email sequence", "secuencia de emails", "drip campaign", "cold email", "nurture sequence", "email marketing", "follow up sequence", "reactivation email".
version: 1.0.0
---

# Email Sequences

Sistema de diseno de secuencias de email basado en patrones de conversion probados. Integra triggers psicologicos, CTAs optimizados y estructuras de persuasion progresiva.

## Cuando usar este skill

- El usuario necesita una secuencia de cold outreach
- Quiere construir un nurture flow para leads
- Necesita emails de reactivacion/win-back
- Busca optimizar subject lines y CTAs de emails existentes

## Principios fundamentales

### Estructura de persuasion progresiva

Cada secuencia sigue una escalera de compromiso:

```
Email 1: VALOR     → Dar sin pedir (reciprocidad)
Email 2: INSIGHT   → Demostrar expertise (autoridad)
Email 3: PROOF     → Mostrar resultados (social proof)
Email 4: PAIN      → Amplificar el dolor de no actuar (loss aversion)
Email 5: OFFER     → Presentar la solucion (greed + scarcity)
Email 6: URGENCY   → Deadline real (urgencia)
Email 7: LAST CALL → Ultima oportunidad (scarcity + FOMO)
```

### Anatomia de un email efectivo

| Componente | Funcion | Largo optimo |
|------------|---------|--------------|
| **Subject line** | Abrir el email (unica mision) | 6-10 palabras |
| **Preheader** | Complementar subject, no repetir | 40-90 caracteres |
| **Apertura** | Hook en primera linea | 1-2 oraciones |
| **Cuerpo** | Un solo mensaje, una sola idea | 3-5 parrafos cortos |
| **CTA** | Una sola accion clara | 1 CTA principal |
| **P.S.** | Segundo hook o refuerzo social proof | 1-2 oraciones |

### Datos de CTAs aplicados a email

| Tipo CTA | Efectividad | Palabras clave |
|----------|-------------|----------------|
| Accion | 10.0/10 | Get, Start, Join, Try, Discover |
| Urgencia | 10.0/10 | Now, Today, Before, Limited |
| Risk Reversal | 9.7/10 | Free, Guaranteed, No Risk, Cancel Anytime |

## Proceso de diseno

### Paso 1: Definir parametros

| Variable | Pregunta |
|----------|----------|
| **Objetivo** | Que accion final quieres lograr? (demo, compra, registro) |
| **Audiencia** | A quien le escribes? (cargo, industria, pain) |
| **Producto** | Que ofreces? Cual es el diferencial? |
| **Tipo de secuencia** | Cold outreach, nurture, reactivacion, onboarding? |
| **Frecuencia** | Cada cuanto enviar? (tipico: cada 2-3 dias cold, 3-5 dias nurture) |
| **Assets disponibles** | Case studies, demos, free trials, webinars? |

### Paso 2: Seleccionar template base

Elegir el template segun tipo de secuencia:

- **Cold outreach** → Leer `templates/cold-outreach.md`
- **Nurture** → Leer `templates/nurture.md`
- **Reactivacion/Win-back** → Leer `templates/reactivation.md`

### Paso 3: Disenar subject lines

Aplicar las formulas de headline adaptadas a email:

| Formula | Ejemplo | Uso |
|---------|---------|-----|
| Pregunta + pain | "Sigues perdiendo 3h/dia en reportes manuales?" | Cold email 1 |
| Numero + beneficio | "5 formas en que [competidor] automatiza X" | Nurture |
| Nombre + relevancia | "[Nombre], esto cambiara tu Q4" | Follow-up |
| Curiosidad pura | "No abras este email si..." | Reactivacion |
| Social proof | "[Empresa similar] logro X en 30 dias" | Proof email |
| Urgencia real | "Quedan 48h para [oferta especifica]" | Cierre |

### Paso 4: Construir la secuencia

Para cada email en la secuencia:

1. **Definir el trigger psicologico principal** (uno por email)
2. **Escribir subject line** (3 variaciones para A/B)
3. **Escribir preheader** (complementa, no repite)
4. **Escribir apertura** (hook en <15 palabras)
5. **Escribir cuerpo** (un mensaje, una idea)
6. **Definir CTA** (una sola accion)
7. **Agregar P.S.** si aplica (social proof o segundo hook)

### Paso 5: Definir cadencia y triggers

| Tipo secuencia | Cadencia tipica | Total emails |
|---------------|----------------|--------------|
| Cold outreach | Dia 0, 2, 5, 8, 14 | 5-7 |
| Nurture | Dia 0, 3, 7, 14, 21, 30 | 5-8 |
| Reactivacion | Dia 0, 3, 7, 14 | 4-5 |
| Onboarding | Dia 0, 1, 3, 5, 7 | 5-7 |

### Paso 6: Output final

```
## Secuencia de email: [TIPO] para [AUDIENCIA]

### Resumen
- Objetivo: [X]
- Emails: [N]
- Cadencia: [X dias entre envios]
- Trigger principal por email: [lista]

### Email [N]: [Nombre del email]
- **Dia de envio**: [X]
- **Trigger psicologico**: [X]
- **Subject line**: [version A] | [version B]
- **Preheader**: [texto]
- **Cuerpo**:
  [Contenido completo del email]
- **CTA**: [texto del boton/link]
- **Metricas objetivo**: Open rate [X]%, Click rate [X]%

### Notas de optimizacion
- [Recomendaciones de A/B testing]
- [Segmentacion sugerida]
- [Condiciones de salida de la secuencia]
```

## Metricas de referencia

| Metrica | Cold | Nurture | Reactivacion |
|---------|------|---------|-------------|
| Open Rate | 25-35% | 30-45% | 15-25% |
| Click Rate | 3-8% | 5-12% | 2-5% |
| Reply Rate | 5-15% | — | — |
| Conversion | 1-3% | 3-8% | 2-5% |
