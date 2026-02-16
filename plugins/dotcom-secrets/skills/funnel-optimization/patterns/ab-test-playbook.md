# A/B Test Playbook

Biblioteca de tests probados organizados por elemento del funnel. Cada test incluye hipotesis pre-formulada, metrica de exito y resultado esperado basado en patrones de la industria.

Usa este playbook como punto de partida para tus tests semanales. Adapta las hipotesis a tu contexto especifico.

---

## Tests de Squeeze Page (Opt-in)

### Test SP-01: Tipo de Lead Magnet

**Hipotesis**: Cambiar el formato del lead magnet de un formato extenso a uno de consumo rapido incrementara el opt-in rate.

| Elemento | Detalle |
|----------|---------|
| **Control** | Guia PDF de 20+ paginas |
| **Variante** | Checklist de 1 pagina + video de 5 minutos |
| **Metrica** | Opt-in rate |
| **Resultado esperado** | +20-40% relativo |
| **Razon** | Los decision-makers B2B tienen poco tiempo. Prefieren formatos que demuestren valor en minutos, no horas. |
| **Minimo para decidir** | 200 visitantes por variante |

### Test SP-02: Headline de Squeeze Page

**Hipotesis**: Un headline con numero especifico y timeframe generara mas opt-ins que un headline generico.

| Elemento | Detalle |
|----------|---------|
| **Control** | "Descarga nuestra guia de [tema]" |
| **Variante** | "Como [N] empresas [lograron resultado] en [timeframe]" |
| **Metrica** | Opt-in rate |
| **Resultado esperado** | +15-30% relativo |
| **Razon** | La especificidad genera credibilidad. Los numeros concretos implican que hay datos reales detras. |
| **Minimo para decidir** | 200 visitantes por variante |

### Test SP-03: Campos del Formulario

**Hipotesis**: Reducir los campos del formulario de 4+ a 2 (nombre + email) incrementara el opt-in rate.

| Elemento | Detalle |
|----------|---------|
| **Control** | Nombre + email + empresa + cargo |
| **Variante** | Nombre + email solamente |
| **Metrica** | Opt-in rate (y calidad de leads downstream) |
| **Resultado esperado** | +25-50% en opt-in, posible -10% en calidad |
| **Razon** | Menos friccion = mas conversiones. La cualificacion puede hacerse despues via email o quiz. |
| **Minimo para decidir** | 200 visitantes por variante + 2 semanas de datos de calidad |

### Test SP-04: Social Proof en Squeeze Page

**Hipotesis**: Agregar logos de clientes reconocidos y un contador de descargas incrementara la confianza y el opt-in rate.

| Elemento | Detalle |
|----------|---------|
| **Control** | Squeeze page sin social proof |
| **Variante** | + Barra de logos de clientes + "[N]+ profesionales ya lo descargaron" |
| **Metrica** | Opt-in rate |
| **Resultado esperado** | +10-20% relativo |
| **Razon** | El social proof reduce la incertidumbre. Si otros lo descargaron, debe valer la pena. |
| **Minimo para decidir** | 200 visitantes por variante |

---

## Tests de Sales Page (Frontend Conversion)

### Test SL-01: Estructura de la Oferta

**Hipotesis**: Presentar la oferta como 3 opciones (bueno/mejor/premium) en vez de precio unico incrementara la conversion y el AOV.

| Elemento | Detalle |
|----------|---------|
| **Control** | Precio unico: $297 |
| **Variante** | 3 tiers: $197 / $297 (resaltado) / $497 |
| **Metrica** | Conversion rate + AOV |
| **Resultado esperado** | +10-20% en conversion, +15-30% en AOV |
| **Razon** | El efecto de anclaje hace que la opcion del medio parezca razonable. Ademas, un % comprara la opcion premium. |
| **Minimo para decidir** | 100 compras totales |

### Test SL-02: Tipo de Garantia

**Hipotesis**: Una garantia mas agresiva (60 dias + bonus de compensacion) incrementara la conversion vs una garantia estandar de 30 dias.

| Elemento | Detalle |
|----------|---------|
| **Control** | Garantia de 30 dias, devolucion completa |
| **Variante** | Garantia de 60 dias + "si no funciona, te devolvemos el doble" |
| **Metrica** | Conversion rate + tasa de reembolso |
| **Resultado esperado** | +15-25% en conversion, <2% incremento en reembolsos |
| **Razon** | Una garantia fuerte transfiere el riesgo del comprador al vendedor. Paradojicamente, garantias mas largas generan MENOS reembolsos (la urgencia de "debo decidir rapido" desaparece). |
| **Minimo para decidir** | 100 compras totales + 60 dias de seguimiento de reembolsos |

### Test SL-03: Video vs Texto en Sales Page

**Hipotesis**: Agregar un video de ventas (VSL) en la parte superior de la sales page incrementara la conversion en trafico frio.

| Elemento | Detalle |
|----------|---------|
| **Control** | Sales page de solo texto (long-form) |
| **Variante** | Video de 15-20 min en la parte superior + texto debajo |
| **Metrica** | Conversion rate + time on page |
| **Resultado esperado** | +20-40% en conversion para trafico frio, neutro para trafico caliente |
| **Razon** | El video construye conexion personal y confianza mas rapido que el texto. Especialmente efectivo cuando el prospect no te conoce. |
| **Minimo para decidir** | 100 compras totales, segmentar por temperatura de trafico |

### Test SL-04: Urgencia / Escasez

**Hipotesis**: Agregar un elemento de urgencia legitima (descuento por tiempo limitado o bonus exclusivo) incrementara la conversion.

| Elemento | Detalle |
|----------|---------|
| **Control** | Oferta permanente sin urgencia |
| **Variante** | "Precio especial de lanzamiento: $197 (sube a $297 el [fecha])" + countdown timer |
| **Metrica** | Conversion rate |
| **Resultado esperado** | +20-35% en conversion |
| **Razon** | La urgencia activa el sesgo de aversion a la perdida. Pero DEBE ser legitima — si el precio nunca sube, la credibilidad se destruye. |
| **Minimo para decidir** | 100 compras totales |

---

## Tests de Checkout (AOV)

### Test CK-01: Order Bump

**Hipotesis**: Agregar un order bump relevante en el checkout incrementara el AOV sin reducir la conversion.

| Elemento | Detalle |
|----------|---------|
| **Control** | Checkout sin order bump |
| **Variante** | + Order bump ($37-$67) con checkbox pre-seleccionado |
| **Metrica** | AOV + checkout completion rate |
| **Resultado esperado** | +$15-30 en AOV, take rate 25-40% |
| **Razon** | El order bump es una compra impulsiva. El prospect ya decidio comprar, agregar algo pequeno es facil. |
| **Minimo para decidir** | 100 checkouts completados |

### Test CK-02: Estructura de Pago

**Hipotesis**: Ofrecer plan de pagos como opcion principal (vs pago unico) incrementara la conversion total.

| Elemento | Detalle |
|----------|---------|
| **Control** | Pago unico: $297 |
| **Variante** | 3 pagos de $117 (default) + opcion de pago unico de $297 con descuento implicito |
| **Metrica** | Conversion rate + revenue total a 90 dias |
| **Resultado esperado** | +20-35% en conversion, -5-10% en revenue neto (por morosidad en pagos) |
| **Razon** | El plan de pagos reduce la barrera psicologica de entrada. El monto mensual parece mas accesible. En LATAM especialmente, las cuotas son culturalmente preferidas. |
| **Minimo para decidir** | 100 checkouts + 90 dias de seguimiento de pagos |

---

## Tests de Email (Engagement + Conversion)

### Test EM-01: Subject Line — Curiosidad vs Beneficio

**Hipotesis**: Subject lines basados en curiosidad abierta generaran mas opens que subject lines basados en beneficio directo.

| Elemento | Detalle |
|----------|---------|
| **Control** | "5 formas de reducir tu CPA un 40%" |
| **Variante** | "Lo que descubri ayer me dejo pensando..." |
| **Metrica** | Open rate + click rate |
| **Resultado esperado** | +15-25% en open rate, posible -5% en click rate |
| **Razon** | La curiosidad genera apertura, pero el beneficio genera accion. El balance optimo varia por audiencia. |
| **Minimo para decidir** | 1,000 emails enviados por variante |

### Test EM-02: Frecuencia de Envio

**Hipotesis**: Enviar emails diarios la primera semana (vs cada 2 dias) incrementara el engagement total sin aumentar significativamente los unsubscribes.

| Elemento | Detalle |
|----------|---------|
| **Control** | Email cada 2 dias (Soap Opera de 7 emails en 14 dias) |
| **Variante** | Email diario (Soap Opera de 7 emails en 7 dias) |
| **Metrica** | Total clicks en 14 dias + unsubscribe rate + conversion a frontend |
| **Resultado esperado** | +30-50% en total clicks, +0.2-0.5% en unsubscribes |
| **Razon** | La frecuencia mantiene el momentum. Los leads estan mas comprometidos en los primeros dias — capitalizar esa atencion antes de que se enfrie. |
| **Minimo para decidir** | 500 leads nuevos por variante + 14 dias |

### Test EM-03: Formato de Email

**Hipotesis**: Emails en formato plain text (sin diseno HTML elaborado) generaran mas clicks que emails con diseno profesional.

| Elemento | Detalle |
|----------|---------|
| **Control** | Email con header grafico, columnas, botones estilizados |
| **Variante** | Email plain text, sin imagenes, link como texto |
| **Metrica** | Click rate + deliverability |
| **Resultado esperado** | +10-20% en click rate, +5% en deliverability |
| **Razon** | Los emails plain text parecen personales (como si alguien te escribiera directamente). Los emails HTML parecen marketing masivo. En B2B especialmente, el formato personal genera mas confianza. |
| **Minimo para decidir** | 1,000 emails enviados por variante |

---

## Tests de Trafico (Ads)

### Test TR-01: Angulo del Ad

**Hipotesis**: Un ad que lidere con el dolor generara mas clicks cualificados que un ad que lidere con el beneficio.

| Elemento | Detalle |
|----------|---------|
| **Control** | "Duplica tus leads B2B en 90 dias con nuestro metodo" |
| **Variante** | "Cansado de gastar en ads sin resultados? Hay una razon..." |
| **Metrica** | CTR + CPC + conversion post-click |
| **Resultado esperado** | +10-20% en CTR, CPC similar, +5-15% en conversion |
| **Razon** | El dolor es un motivador mas fuerte que la aspiracion para trafico frio. El prospect primero necesita sentirse comprendido antes de creer en la solucion. |
| **Minimo para decidir** | 10,000 impresiones por variante |

### Test TR-02: Formato de Ad Creative

**Hipotesis**: Un ad en formato carrusel (3-5 slides contando una historia) generara mas engagement que una imagen estatica.

| Elemento | Detalle |
|----------|---------|
| **Control** | Imagen estatica con headline + CTA |
| **Variante** | Carrusel de 4 slides: problema → datos → solucion → CTA |
| **Metrica** | CTR + CPC + cost per lead |
| **Resultado esperado** | +15-30% en CTR, -10-20% en cost per lead |
| **Razon** | El carrusel involucra al usuario activamente (swipe). Cada slide avanza la narrativa y pre-frame el landing page. |
| **Minimo para decidir** | 10,000 impresiones por variante |

---

## Registro de Tests Completados

Documenta todos tus tests aqui para construir tu base de conocimiento.

| # | Fecha | Elemento | Hipotesis (resumen) | Resultado | Ganador | Impacto | Aprendizaje |
|---|-------|----------|---------------------|-----------|---------|---------|-------------|
| 1 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 2 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 3 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 4 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 5 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 6 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 7 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 8 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 9 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 10 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 11 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
| 12 | ___ | ___ | ___ | ___ | ___ | ___% | ___ |
