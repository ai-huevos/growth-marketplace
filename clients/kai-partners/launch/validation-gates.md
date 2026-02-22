# Validation Gates — KAI Partners Launch

```yaml
client: KAI Partners
document: founder-validation-gates
version: 1.0
status: ACTIVE
date: 2026-02-22
blocks: all-public-content
```

> **Nada se publica hasta que estas gates se aprueben.**
> Cada gate tiene un owner, un entregable, y una lista de activos que bloquea.

---

## Gate 1A: Brand Voice — "¿Esto suena como nosotros?"

**Owner:** Daniel R. + Danny (ambos founders)
**Status:** ⬜ PENDIENTE
**Blocks:** TODO contenido público (landing, emails, LinkedIn, quiz copy)

### Qué validar

- [ ] Jerarquía Bold-First: BOLD → SMART → WARM → RELIABLE
- [ ] Arco GOLPE en ejemplos: GOLPE → DOLOR → PUENTE → PRUEBA → ACCIÓN
- [ ] Anti-vocabulario verificado: nunca "end-to-end", "leverage", "synergy", "disruptivo"
- [ ] Vocabulario de marca: "rieles", "energía", "fluir", "capturar", "AI-OS", "partner"
- [ ] Taglines se sienten naturales: "AI-OS Built with you. Proven with your data."
- [ ] "Nos quedamos" sigue siendo core

### Test de validación

Escribir 3 piezas usando las reglas de voz:

1. **LinkedIn post** (150 palabras, arco GOLPE) → "¿Esto lo postearíamos?"
2. **Email de apertura** (3 párrafos, Bold-First) → "¿Esto lo firmaríamos?"
3. **Intro de propuesta** (5 líneas, tono C-Suite) → "¿Esto nos representa?"

### Criterio de aprobación

Ambos founders dicen: "Esto suena como nosotros" en las 3 piezas.

**Archivo de referencia:** `clients/kai-partners/brand-config/brand-voice.md`

---

## Gate 1B: Finkargo Numbers — Verificación de datos

**Owner:** Daniel R. (validar con Roberto Mendez)
**Status:** ⬜ PENDIENTE
**Blocks:** Quiz Q8, ORIGEN Email 4, Landing Page Sección 6, Sección 9

### Qué validar

- [ ] $15M en ahorros — cifra exacta y período
- [ ] 428x ROI — cálculo verificable ($35K inversión → $15M ahorros)
- [ ] 110+ procesos automatizados — número actual
- [ ] 45 min → 3 min por transacción — verificado
- [ ] $650M procesados anualmente — cifra actual
- [ ] "4 personas" — contexto correcto
- [ ] $340,000 error detectado en 72h — historia verificada para Q8
- [ ] Roberto Mendez — autorización para usar nombre y quote en marketing

### Criterio de aprobación

Daniel R. confirma cada número con documentación interna o confirmación verbal de Roberto.

**Archivo de referencia:** `clients/kai-partners/case-studies/finkargo.md`

---

## Gate 1C: Sprint Pricing — Estructura de precios final

**Owner:** Daniel R. + Danny
**Status:** ⬜ PENDIENTE
**Blocks:** Cal.com booking page, ORIGEN Email 5, Landing Page CTA, propuestas

### Qué decidir

- [ ] Sprint precio fijo: $500 / $1,000 / $1,500 (o rango)
- [ ] Criterio de pricing por tamaño:
  - < 50 empleados → $___
  - 50-200 empleados → $___
  - 200+ empleados → $___
- [ ] Pricing LATAM ajustado: Colombia/Bolivia vs. México
- [ ] Garantía de satisfacción: "Si no encontramos 1 proceso que valga 10x, devolvemos el dinero" — ¿SÍ o NO?
- [ ] Método de pago: transferencia, Stripe, ambos

### Criterio de aprobación

Pricing table firmada por ambos founders. Se refleja en Cal.com y en toda la comunicación.

**Archivo de referencia:** `clients/kai-partners/offer-architecture/escala-value-ladder.md`

---

## Gate 1D: Domain — Registro y configuración

**Owner:** Danny (técnico)
**Status:** ⬜ PENDIENTE
**Blocks:** Webflow publish, email sending domain, todas las URLs públicas

### Qué completar

- [ ] `kaipartners.com` registrado (o alternativo aprobado)
- [ ] DNS configurado para Webflow
- [ ] Email profesional: `team@kaipartners.com` (o alternativo)
- [ ] SPF + DKIM configurado para Kit (email deliverability)
- [ ] SSL activo en dominio
- [ ] Redirect: `www.kaipartners.com` → `kaipartners.com`

### Criterio de aprobación

`https://kaipartners.com` carga sin errores. Email de prueba desde `team@kaipartners.com` llega a inbox (no spam).

---

## Gate 1E: VoC Interview — Roberto Mendez

**Owner:** Daniel R.
**Status:** ⬜ PENDIENTE
**Blocks:** Landing page hero v2, case study upgrade

### Qué obtener

- [ ] Entrevista de 15 min con Roberto Mendez (COO Finkargo)
- [ ] Pregunta clave: "¿Cómo le describías el problema a un colega ANTES de que llegáramos?"
- [ ] Capturar verbatim: frase exacta en español
- [ ] Autorización para usar la frase en marketing

### Cómo se usa

| Destino | Uso del verbatim |
|---------|-----------------|
| Landing hero v2 | Abrir con dolor de Roberto, LUEGO el resultado |
| Finkargo case study | Pre-engagement pain quote como apertura |
| ORIGEN Email 4 | "Antes de conocernos, Roberto decía: '[verbatim]'" |

### Criterio de aprobación

Frase verbatim capturada. Roberto aprueba su uso en materiales de marketing.

---

## VoC Sprint Strategy — 3 Layers

### Layer 1: Inmediato (Días 1-5, antes del launch)

- [ ] Entrevista Roberto Mendez (Gate 1E)
- [ ] Minar transcripts existentes de Fireflies vía MCP (buscar referencias indirectas de prospectos en sesiones con Arkangel, Beezion)
- [ ] Extraer frases donde alguien FUERA de KAI describe dolor operativo

### Layer 2: Soft Launch VoC Sprint (Semana 1-2, 30-50 quiz completions)

- [ ] Enviar quiz a red existente (no tráfico frío)
- [ ] Exportar respuestas Q10 verbatim ("¿Cuál es el mayor dolor operativo?")
- [ ] Clusterizar top 5-7 frases recurrentes
- [ ] Reemplazar metáforas internas en:
  - Landing page problem section (S2)
  - Quiz result page diagnoses
  - PULSAR subject lines
- [ ] Si quiz respondents tienen discovery calls → pull transcripts via Fireflies MCP

### Layer 3: Ongoing VoC Flywheel (Semana 3+)

- [ ] Crear `clients/kai-partners/voc/prospect-language-bank.md` ✅ (creado)
- [ ] Agregar slot PULSAR rotativo: "Un cliente nos dijo..."
- [ ] Después de 100 quiz completions: reescribir S2, result pages, ORIGEN Email 5
- [ ] Mensual: 1 entrevista VoC por cliente activo → feeds case study pipeline
- [ ] Tag Fireflies calls: `#kai-voc` para mining automático

---

## Founder Action Items — Resumen

| # | Acción | Owner | Deadline sugerido | Gate |
|---|--------|-------|------------------|------|
| 1 | Revisar brand-voice.md → "¿Esto suena como nosotros?" | Ambos | Day 1 | 1A |
| 2 | Validar números de Finkargo con documentación | Daniel R. | Day 2 | 1B |
| 3 | Definir pricing table final del Sprint | Ambos | Day 2 | 1C |
| 4 | Registrar dominio kaipartners.com | Danny | Day 1 | 1D |
| 5 | Agendar entrevista con Roberto Mendez | Daniel R. | Day 3 | 1E |
| 6 | Obtener Kit API v4 key | Danny | Day 1 | Phase 0 |
| 7 | Generar Tally.so API key | Danny | Day 1 | Phase 0 |
| 8 | Completar Webflow OAuth (browser popup) | Danny | Day 1 | Phase 0 |
| 9 | Re-enable Fireflies MCP en global config | Danny | Day 1 | VoC Layer 1 |

---

*Gate status se actualiza aquí. Nada se publica hasta que 1A + 1D estén ✅.*
