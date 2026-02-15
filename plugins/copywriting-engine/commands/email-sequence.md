---
description: Construye una secuencia de 5-7 emails con subject lines, body copy, CTAs y cadencia. Aplica triggers psicologicos progresivos.
argument-hint: <objetivo de la secuencia o tipo de audiencia>
allowed-tools: [Read, Glob, Grep, WebSearch, WebFetch]
---

# /email-sequence — Diseno de secuencia de emails

El usuario quiere construir una secuencia de emails para: $ARGUMENTS

## Instrucciones

### Paso 1: Definir parametros

Si $ARGUMENTS no incluye suficiente contexto, preguntar:

1. **Tipo de secuencia**: Cold outreach, nurture, reactivacion, onboarding?
2. **Objetivo final**: Demo, compra, registro, descarga, reunion?
3. **Audiencia**: A quien le escribes? Cargo, industria, tamano de empresa
4. **Producto/servicio**: Que ofreces? Resultado principal
5. **Assets disponibles**: Case studies, free trial, webinars, guias?
6. **Tono**: Formal, conversacional, directo?

### Paso 2: Cargar templates

Segun el tipo de secuencia, leer el template correspondiente:
- Cold outreach → `skills/email-sequences/templates/cold-outreach.md`
- Nurture → `skills/email-sequences/templates/nurture.md`
- Reactivacion → `skills/email-sequences/templates/reactivation.md`

Tambien leer:
- `skills/psychological-triggers/patterns/trigger-library.md` para triggers por email
- `skills/headline-mastery/patterns/power-headlines.md` para subject lines

### Paso 3: Disenar la cadencia

Definir:
- Numero total de emails (tipico: 5-7)
- Dias entre cada envio
- Trigger psicologico dominante por email
- Escalera de compromiso (valor → insight → proof → pain → offer → urgency)

### Paso 4: Escribir cada email

Para cada email en la secuencia:

1. **Subject line**: Escribir 3 variaciones usando formulas de headline
2. **Preheader**: Complementar el subject, no repetirlo (40-90 caracteres)
3. **Apertura**: Hook en <15 palabras — primera linea es todo
4. **Cuerpo**: Un solo mensaje, una sola idea. Parrafos de 1-2 oraciones
5. **CTA**: Una accion clara. Verbo + beneficio
6. **P.S.** (si aplica): Social proof o segundo hook

### Paso 5: Aplicar triggers progresivos

Verificar que la secuencia sigue una progresion logica de triggers:

| Email | Trigger principal | Objetivo |
|-------|-------------------|----------|
| 1 | Reciprocity / Curiosity | Abrir la conversacion |
| 2 | Social Proof / Authority | Construir credibilidad |
| 3 | Loss Aversion / Fear | Hacer tangible el dolor |
| 4 | Greed | Mostrar el valor de la solucion |
| 5 | Urgency / Scarcity | Cerrar la accion |
| 6 | Scarcity + Loss Aversion | Breakup / ultima oportunidad |
| 7 | Reciprocity pura | Re-engagement con valor |

### Paso 6: Entregar la secuencia completa

```
## Secuencia de Email: [TIPO] para [AUDIENCIA]

### Resumen
- **Objetivo**: [accion final deseada]
- **Audiencia**: [descripcion]
- **Emails**: [N] emails
- **Cadencia**: [X dias entre envios]
- **Duracion total**: [X dias]

---

### Email 1: [Nombre descriptivo]
**Dia**: 0
**Trigger**: [trigger psicologico]

**Subject lines** (testear):
- A: [subject line]
- B: [subject line]
- C: [subject line]

**Preheader**: [texto]

**Body**:
---
[Copy completo del email, listo para usar]
---

**CTA**: [texto del boton o link]
**Metricas objetivo**: Open [X]% | Click [X]%

---

### Email 2: [Nombre descriptivo]
[... mismo formato ...]

[... continua para todos los emails ...]

---

### Cadencia visual

```
Dia 0  ──→ Email 1 (Valor)
Dia 2  ──→ Email 2 (Proof)
Dia 5  ──→ Email 3 (Pain)
Dia 8  ──→ Email 4 (Oferta)
Dia 14 ──→ Email 5 (Breakup)
```

### Logica de segmentacion
- Si abre pero no clickea → [accion]
- Si clickea pero no convierte → [accion]
- Si no abre despues de email 3 → [accion]
- Si responde → [accion]

### A/B tests recomendados
1. [Que testear primero y por que]
2. [Segundo test prioritario]

### Metricas de referencia
| Metrica | Target | Alerta |
|---------|--------|--------|
| Open Rate | [X]% | <[X]% |
| Click Rate | [X]% | <[X]% |
| Reply Rate | [X]% | <[X]% |
| Conversion | [X]% | <[X]% |
```
