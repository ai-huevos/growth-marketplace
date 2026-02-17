# Dashboard de Salud del Funnel

Sistema de metricas en 3 niveles para diagnosticar la salud de tu funnel en cualquier momento. Cada nivel tiene metricas clave, benchmarks objetivo y preguntas diagnosticas para cuando los numeros estan por debajo del target.

## Nivel 1: Top of Funnel (Trafico)

El trafico es el combustible del funnel. Sin trafico suficiente y de calidad, nada mas importa.

### Metricas clave

| Metrica | Definicion | Benchmark B2B | Benchmark B2B LATAM |
|---------|-----------|---------------|---------------------|
| **Volumen de trafico** | Visitantes unicos por dia | 100-500/dia (early), 500-2000/dia (growth) | 50-300/dia (early), 300-1000/dia (growth) |
| **Costo de trafico (CPC)** | Costo por click en ads pagados | $1-5 USD | $0.30-2 USD |
| **Costo de trafico (CPM)** | Costo por mil impresiones | $10-50 USD | $3-15 USD |
| **Calidad del trafico — Time on site** | Tiempo promedio en el sitio | >2 minutos | >1.5 minutos |
| **Calidad del trafico — Bounce rate** | % que abandona sin interactuar | <60% | <65% |
| **Distribucion por tipo** | Own / Control / Don't Control | 30% / 50% / 20% ideal | 20% / 50% / 30% tipico |

### Tipos de trafico por control

| Tipo | Definicion | Ejemplos |
|------|-----------|----------|
| **Trafico que POSEES (Own)** | Audiencia propia a la que puedes llegar sin pagar | Email list, SMS list, comunidad propia, podcast subscribers |
| **Trafico que CONTROLAS (Control)** | Trafico que puedes activar pagando | Facebook Ads, Google Ads, LinkedIn Ads, YouTube Ads |
| **Trafico que NO CONTROLAS (Don't Control)** | Trafico organico que llega sin que lo actives | SEO, shares en redes, PR, referrals, mencion en podcasts |

### Diagnostico: Que revisar si el trafico esta bajo

1. **Volumen bajo**: Estas invirtiendo lo suficiente? Tus keywords/audiencias estan agotadas? Es un problema de presupuesto o de targeting?
2. **CPC alto**: Tu relevance score es bajo? Tu ad creative esta gastada? Tus audiencias son demasiado competidas?
3. **Calidad baja (bounce alto, time on site bajo)**: Hay disconnect entre el ad y la landing? El mensaje pre-frame no coincide con la pagina? El trafico es de temperatura incorrecta?
4. **Dependencia de un solo tipo**: Mas del 70% viene de trafico que controlas? Ese es un riesgo — si la plataforma sube precios o cambia algoritmo, tu funnel se rompe.

---

## Nivel 2: Middle of Funnel (Conversion)

La conversion es donde el trafico se transforma en leads y los leads en compradores. Es el nivel donde la mayoria de los funnels tienen fugas.

### Metricas clave

| Metrica | Definicion | Benchmark B2B | Señal de alarma |
|---------|-----------|---------------|-----------------|
| **Opt-in rate** | % de visitantes que se convierten en leads | 30-60% (squeeze page), 10-30% (content page) | <20% en squeeze, <5% en content |
| **Frontend conversion** | % de leads que compran el producto frontend | 10-30% (webinar), 2-5% (cold traffic direct) | <1% sostenido |
| **Email open rate** | % de emails abiertos | 20-40% | <15% |
| **Email click rate** | % de emails con click | 3-10% | <2% |

### Diagnostico: Que revisar si la conversion esta baja

**Opt-in rate bajo (<20% en squeeze page)**:
1. El lead magnet no es lo suficientemente atractivo? Resuelve un dolor real e inmediato?
2. La squeeze page tiene distracciones? Hay mas de un CTA?
3. El headline de la squeeze page comunica el beneficio en <5 segundos?
4. Hay trust elements suficientes? (testimonios, logos, garantia)
5. El formulario pide demasiada informacion? (en B2B, nombre + email + empresa maximo)

**Frontend conversion bajo (<2%)**:
1. La oferta es clara y el valor percibido supera el precio?
2. La sales page sigue una estructura probada? (problema → agitacion → solucion → prueba → oferta → garantia → CTA)
3. El precio esta calibrado para el mercado? (LATAM generalmente requiere 30-50% menos que US)
4. La garantia es lo suficientemente fuerte?
5. Hay suficiente prueba social relevante?

**Email engagement bajo**:
1. Los subject lines generan curiosidad o beneficio claro?
2. Estas enviando con la frecuencia correcta? (diario los primeros 7 dias, 2-3/semana despues)
3. Los emails cuentan historias o son puramente promocionales?
4. Tu lista tiene problemas de deliverability? (check SPF, DKIM, domain reputation)

---

## Nivel 3: Bottom of Funnel (Monetizacion)

La monetizacion determina si el funnel es un negocio o un hobby costoso. Aqui se mide si cada cliente vale lo suficiente para justificar el costo de adquirirlo.

### Metricas clave

| Metrica | Formula | Benchmark B2B | Target ideal |
|---------|---------|---------------|-------------|
| **AOV (Average Order Value)** | Revenue total / Numero de ordenes | Varia por tier (ver ESCALA) | Maximizar via order bumps y OTOs |
| **LTV (Customer Lifetime Value)** | (AOV x Frecuencia de compra x Tiempo de retencion) + Expansion revenue | $500-5,000 B2B SMB, $5,000-50,000 B2B Mid-Market | >3x CAC |
| **CPA (Cost Per Acquisition)** | Gasto total en marketing / Clientes nuevos adquiridos | Varia por industria y canal | <33% del LTV |
| **LTV:CPA ratio** | LTV / CPA | 3:1 minimo | 5:1 ideal, 10:1 excelente |

### Interpretacion del ratio LTV:CPA

| Ratio | Diagnostico | Accion |
|-------|-------------|--------|
| **< 1:1** | Perdiendo dinero en cada cliente | PARAR de escalar. Arreglar la oferta o reducir CPA drasticamente |
| **1:1 - 2:1** | Breakeven o margen minimo | Optimizar conversion y AOV antes de escalar |
| **3:1 - 5:1** | Rentable y escalable | Zona de escala — incrementar inversion gradualmente |
| **5:1 - 10:1** | Altamente rentable | Escalar agresivamente — puedes outspend a la competencia |
| **> 10:1** | Dominancia de mercado | Considerar expansion horizontal o nuevos mercados |

### Diagnostico: Que revisar si el revenue esta bajo

**AOV bajo**:
1. Tienes order bumps configurados? (target: 30-40% take rate)
2. Tienes OTOs (One-Time Offers) post-compra? (target: 15-25% take rate)
3. El pricing esta anclado correctamente? (mostrar el valor total antes del precio)
4. Ofreces bundles o paquetes? (3 opciones con la del medio resaltada)

**LTV bajo**:
1. Tienes un backend definido? (sin backend, LTV = AOV del frontend)
2. Tus secuencias de email venden productos adicionales?
3. Tu tasa de retencion es saludable? (>80% mensual para SaaS, >60% anual para servicios)
4. Tienes un programa de referidos? (expansion revenue)

**CPA alto**:
1. Tu ad targeting es preciso? (audiencias lookalike de mejores clientes)
2. Tu funnel tiene buenas tasas de conversion? (mejorar conversion baja CPA automaticamente)
3. Estas diversificando fuentes de trafico? (dependency de una sola fuente = CPA inflado)
4. Tu contenido organico genera leads? (owned traffic tiene CPA ~$0)

---

## Dashboard Semanal de Seguimiento

Completa esta tabla cada lunes para mantener el pulso del funnel.

### Metricas de Trafico

| Metrica | Sem anterior | Sem actual | Cambio (%) | vs Benchmark | Estado |
|---------|-------------|-----------|------------|-------------|--------|
| Visitantes unicos/dia | ___ | ___ | ___% | ___/dia target | ___  |
| CPC promedio | $___ | $___ | ___% | <$___ target | ___ |
| Bounce rate | ___% | ___% | ___% | <___% target | ___ |
| Time on site | ___min | ___min | ___% | >___min target | ___ |
| % trafico own | ___% | ___% | ___% | >30% target | ___ |

### Metricas de Conversion

| Metrica | Sem anterior | Sem actual | Cambio (%) | vs Benchmark | Estado |
|---------|-------------|-----------|------------|-------------|--------|
| Opt-in rate | ___% | ___% | ___% | >___% target | ___ |
| Frontend conversion | ___% | ___% | ___% | >___% target | ___ |
| Email open rate | ___% | ___% | ___% | >___% target | ___ |
| Email click rate | ___% | ___% | ___% | >___% target | ___ |

### Metricas de Revenue

| Metrica | Sem anterior | Sem actual | Cambio (%) | vs Benchmark | Estado |
|---------|-------------|-----------|------------|-------------|--------|
| AOV | $___ | $___ | ___% | >$___ target | ___ |
| Nuevos clientes | ___ | ___ | ___% | >___ target | ___ |
| Revenue semanal | $___ | $___ | ___% | >$___ target | ___ |
| CPA | $___ | $___ | ___% | <$___ target | ___ |
| LTV:CPA ratio | ___:1 | ___:1 | ___% | >3:1 target | ___ |

### Resumen de la Semana

- **Cuello de botella #1 identificado**: ___
- **Accion tomada**: ___
- **Test en curso**: ___
- **Resultado del test anterior**: ___
- **Prioridad para la proxima semana**: ___
