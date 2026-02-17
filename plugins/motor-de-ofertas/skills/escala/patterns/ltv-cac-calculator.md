# Calculadora LTV:CAC para Escaleras de Valor B2B

Formulas, benchmarks y escenarios para modelar la rentabilidad de una escalera de valor ESCALA.

---

## Formulas Fundamentales

### LTV (Lifetime Value)

El valor total que un cliente genera a lo largo de su relacion con tu empresa, considerando todos los tiers de la escalera.

```
LTV = Revenue Frontend + Revenue Middle + Revenue Backend

Donde:
  Revenue Frontend = Precio Frontend x Prob. de compra Frontend
  Revenue Middle   = Precio Middle x Prob. de ascension a Middle
  Revenue Backend  = Precio Backend x Prob. de ascension a Backend x Meses de retencion
```

**Formula expandida con retencion**:

```
LTV = (F x Pf) + (M x Pm) + (B x Pb x R)

F  = Precio del Frontend
Pf = Probabilidad de que un lead compre el Frontend
M  = Precio del Middle
Pm = Probabilidad de que un cliente Frontend ascienda a Middle
B  = Precio del Backend (mensual/anual)
Pb = Probabilidad de que un cliente Middle ascienda a Backend
R  = Factor de retencion (meses promedio de permanencia / 12 si es mensual)
```

### CAC (Customer Acquisition Cost)

El costo total de adquirir un cliente, incluyendo todos los gastos de marketing y ventas.

```
CAC = (Ad Spend + Costos de Funnel + Costos de Ventas) / Clientes Adquiridos

Donde:
  Ad Spend        = Inversion total en publicidad
  Costos de Funnel = Herramientas (landing pages, email, quiz, CRM)
  Costos de Ventas = Salarios/comisiones del equipo que cierra (si aplica)
  Clientes Adquiridos = Numero de clientes nuevos en el periodo
```

### Revenue Per Lead (RPL)

El ingreso promedio que genera cada lead que entra al tope del funnel.

```
RPL = LTV x Tasa de Conversion Global

Donde:
  Tasa de Conversion Global = Clientes Adquiridos / Leads Totales
```

**Por que importa el RPL**: Si tu RPL es $50 y tu CPL es $3, puedes gastar hasta $50 por lead y no perder dinero. Esto te da una ventaja masiva sobre competidores que solo miran el CAC del frontend.

### Ratio LTV:CAC

```
LTV:CAC = LTV / CAC
```

---

## Benchmarks

### Por ratio LTV:CAC

| Ratio | Diagnostico | Accion recomendada |
|-------|-------------|-------------------|
| **< 1:1** | Perdiendo dinero | STOP — no escalar. Revisar pricing, mejorar conversion, o reducir CAC |
| **1:1 - 2:1** | Breakeven | Estas pagando por aprender. OK temporalmente, pero no sostenible |
| **2:1 - 3:1** | Marginalmente rentable | Optimizar: mejorar ascension triggers o reducir CAC 20% |
| **3:1 - 5:1** | Rentable | Zona de escalado. Invertir en crecimiento |
| **5:1 - 8:1** | Muy rentable | Dominando. Puedes outspend a la competencia |
| **> 8:1** | Posible sub-inversion | Podrías estar dejando crecimiento sobre la mesa — invertir mas en adquisicion |

### Por metrica individual

| Metrica | Malo | Aceptable | Bueno | Excelente |
|---------|------|-----------|-------|-----------|
| CPL (Bait) | >$10 | $5-$10 | $2-$5 | <$2 |
| Conversion Bait → Frontend | <2% | 2-5% | 5-10% | >10% |
| Ascension Frontend → Middle | <10% | 10-20% | 20-30% | >30% |
| Ascension Middle → Backend | <5% | 5-15% | 15-25% | >25% |
| Churn Backend (mensual) | >10% | 5-10% | 2-5% | <2% |
| Payback period | >18 meses | 12-18 meses | 6-12 meses | <6 meses |

---

## Escenarios Modelados

### Escenario 1: Conservador

Supuestos: tasas de conversion bajas, pricing modesto, alta friccion entre tiers.

```
Cohorte: 1,000 leads/mes
CPL: $5 → Inversion en ads: $5,000/mes
Costos de funnel: $500/mes
CAC total: ($5,000 + $500) / 30 clientes = $183/cliente

Tier         | Conversion | Clientes | Precio   | Revenue
-------------|-----------|----------|----------|---------
Bait         | 100%      | 1,000    | $0       | $0
Frontend     | 3%        | 30       | $147     | $4,410
Middle       | 10%       | 3        | $1,500   | $4,500
Backend      | 10%       | 0.3      | $8,000/a | $2,400

Revenue total del cohorte: $11,310
LTV por lead: $11.31
RPL: $11.31
LTV por cliente (frontend): $377

LTV:CAC = $377 / $183 = 2.06:1
```

**Diagnostico**: Marginalmente rentable. El sistema funciona pero hay poco margen para escalar agresivamente. Prioridad: mejorar ascension de frontend a middle.

### Escenario 2: Moderado

Supuestos: tasas de conversion promedio, pricing competitivo, triggers de ascension activos.

```
Cohorte: 1,000 leads/mes
CPL: $3 → Inversion en ads: $3,000/mes
Costos de funnel: $500/mes
CAC total: ($3,000 + $500) / 60 clientes = $58/cliente

Tier         | Conversion | Clientes | Precio    | Revenue
-------------|-----------|----------|-----------|--------
Bait         | 100%      | 1,000    | $0        | $0
Frontend     | 6%        | 60       | $247      | $14,820
Middle       | 20%       | 12       | $2,500    | $30,000
Backend      | 15%       | 1.8      | $12,000/a | $21,600

Revenue total del cohorte: $66,420
LTV por lead: $66.42
RPL: $66.42
LTV por cliente (frontend): $1,107

LTV:CAC = $1,107 / $58 = 19.1:1
```

**Diagnostico**: Muy rentable. El salto de conservador a moderado es dramatico porque las tasas de ascension se multiplican entre si. Este es el poder de la escalera — pequenas mejoras en conversion entre tiers tienen impacto exponencial.

### Escenario 3: Agresivo

Supuestos: escalera optimizada, triggers automaticos, brand awareness establecido, equipo de ventas para middle y backend.

```
Cohorte: 1,000 leads/mes
CPL: $2 → Inversion en ads: $2,000/mes
Costos de funnel: $500/mes
Costos de equipo de ventas (middle+backend): $3,000/mes
CAC total: ($2,000 + $500 + $3,000) / 80 clientes = $69/cliente

Tier         | Conversion | Clientes | Precio    | Revenue
-------------|-----------|----------|-----------|--------
Bait         | 100%      | 1,000    | $0        | $0
Frontend     | 8%        | 80       | $297      | $23,760
Middle       | 25%       | 20       | $3,500    | $70,000
Backend      | 20%       | 4        | $18,000/a | $72,000

Revenue total del cohorte: $165,760
LTV por lead: $165.76
RPL: $165.76
LTV por cliente (frontend): $2,072

LTV:CAC = $2,072 / $69 = 30:1
```

**Diagnostico**: Dominando. Con un RPL de $165.76, esta empresa puede pagar hasta $165 por lead y no perder dinero. Ningun competidor con un solo producto puede competir con esa capacidad de gasto en adquisicion.

---

## Ajustes LATAM

El mercado LATAM tiene variables que afectan el modelo:

### Factores de ajuste

| Variable | Ajuste vs US | Impacto en modelo |
|----------|-------------|-------------------|
| **Pricing** | 50-70% del precio US | Reduce LTV por tier |
| **CPL** | 30-60% del costo US | Reduce CAC (ads mas baratos) |
| **Conversion rates** | Similar o ligeramente inferior | Neutral |
| **Churn** | 10-20% mayor en LATAM | Reduce LTV de backend |
| **Pagos en cuotas** | Necesarios para middle y backend | Mejora conversion pero agrega riesgo de default |
| **Estacionalidad** | Enero lento, Nov-Dic muy lento | Ajustar proyecciones por trimestre |

### Ejemplo LATAM: Escenario Moderado Ajustado

```
Cohorte: 1,000 leads/mes
CPL: $1.50 (LATAM) → Inversion en ads: $1,500/mes
Costos de funnel: $300/mes
CAC total: ($1,500 + $300) / 50 clientes = $36/cliente

Tier         | Conversion | Clientes | Precio LATAM | Revenue
-------------|-----------|----------|-------------|--------
Bait         | 100%      | 1,000    | $0          | $0
Frontend     | 5%        | 50       | $147        | $7,350
Middle       | 18%       | 9        | $1,500      | $13,500
Backend      | 12%       | 1.08     | $8,000/a    | $8,640

Revenue total del cohorte: $29,490
LTV por lead: $29.49
LTV por cliente (frontend): $589.80

LTV:CAC = $589.80 / $36 = 16.4:1
```

**Insight LATAM**: Aunque el revenue por tier es menor, el CAC tambien es significativamente menor. El ratio LTV:CAC puede ser igual o superior al de US si se optimiza correctamente.

---

## Sensibilidad: Que Palanca Mover Primero

No todas las palancas tienen el mismo impacto. Esta tabla muestra el efecto de mejorar cada variable un 20% (usando el escenario moderado como base):

| Palanca | Cambio | Nuevo LTV:CAC | Cambio vs base | Prioridad |
|---------|--------|--------------|----------------|-----------|
| **Base (sin cambios)** | — | 19.1:1 | — | — |
| Reducir CPL 20% | $3 → $2.40 | 23.9:1 | +25% | Media |
| Mejorar conv. Bait→Frontend 20% | 6% → 7.2% | 22.9:1 | +20% | Media |
| Mejorar ascension Front→Middle 20% | 20% → 24% | 22.5:1 | +18% | Alta |
| Mejorar ascension Middle→Backend 20% | 15% → 18% | 21.8:1 | +14% | Alta |
| Aumentar precio Frontend 20% | $247 → $296 | 20.7:1 | +8% | Baja |
| Aumentar precio Middle 20% | $2,500 → $3,000 | 22.0:1 | +15% | Media |
| Aumentar precio Backend 20% | $12,000 → $14,400 | 22.2:1 | +16% | Media |

**Hallazgo clave**: Reducir CPL y mejorar la ascension entre tiers tienen mas impacto que aumentar precios. La escalera se optimiza desde abajo (adquisicion) y desde los puentes (triggers de ascension), no desde el pricing.

---

## Formulas de Referencia Rapida

### Payback Period

```
Payback Period = CAC / Revenue Mensual Promedio por Cliente
```

Si tu CAC es $183 y tu cliente promedio genera $95/mes → payback en 1.9 meses.

### Break-even Leads

```
Break-even Leads = Costos Fijos Mensuales / RPL
```

Si tus costos fijos son $10,000/mes y tu RPL es $66.42 → necesitas 151 leads/mes para break-even.

### Maximum CPL (cuanto puedes pagar por lead)

```
Max CPL = RPL x (1 - Margen Objetivo)
```

Si tu RPL es $66.42 y quieres 50% de margen → puedes pagar hasta $33.21 por lead.

### Expansion Revenue Rate

```
Expansion Rate = (Revenue de clientes existentes que ascienden de tier) / Revenue total
```

Un expansion rate >30% indica una escalera saludable donde los clientes existentes generan crecimiento organico.
