# Product-Funnel Fit: Diseno de Productos por Tier

Framework para disenar productos que encajen naturalmente en cada nivel de la escalera de valor, asegurando que cada tier cree ascension natural al siguiente.

---

## El Triangulo Product-Market-Funnel

La mayoria de las empresas B2B hablan de Product-Market Fit. En ESCALA necesitas un tercer eje: **Funnel Fit**. El producto no solo debe resolver un problema (market fit) — debe encajar en la posicion correcta de la escalera (funnel fit).

```
                    MARKET
                   (Quien)
                     /\
                    /  \
                   /    \
                  / FIT  \
                 /  ZONE  \
                /          \
               /____________\
          PRODUCT          FUNNEL
          (Que)            (Donde)
```

| Eje | Pregunta que responde | Si falta |
|-----|----------------------|----------|
| **Product-Market** | Resuelve un problema real? | Nadie compra |
| **Product-Funnel** | Encaja en el tier correcto? | El pricing no tiene sentido |
| **Market-Funnel** | El mercado acepta esta estructura? | El embudo se rompe |

### Las 3 preguntas de Product-Funnel Fit

1. **El producto entrega valor proporcional a su precio?** Un frontend de $197 no puede prometer lo mismo que un backend de $15,000/ano.
2. **El producto crea naturalmente la necesidad del siguiente tier?** Si el frontend resuelve TODO el problema, no hay ascension.
3. **El formato del producto es apropiado para su tier?** Un PDF no funciona como backend. Un retainer mensual no funciona como bait.

---

## Matriz de Priorizacion de Features

Cuando tienes ideas para un producto, prioriza con esta matriz de 2 ejes:

```
ALTO    │ FUTURE TIER        │ BUILD NOW
        │ (guardar para      │ (maxima prioridad)
IMPACTO │  middle/backend)    │
EN      │                    │
CONV.   ├────────────────────┼─────────────────────
        │ IGNORE             │ NICE-TO-HAVE
BAJO    │ (no construir)     │ (si sobra tiempo)
        │                    │
        └────────────────────┴─────────────────────
              BAJO                    ALTO
              POTENCIAL DE UPSELL
```

| Cuadrante | Accion | Ejemplo |
|-----------|--------|---------|
| **BUILD NOW** (alto impacto + alto upsell) | Incluir en el tier actual Y disenar como trigger de ascension | Template que el cliente usa y luego quiere ayuda para personalizar |
| **FUTURE TIER** (alto impacto + bajo upsell) | Reservar para un tier superior donde pueda monetizarse | Consultoria personalizada — demasiado valiosa para dar en frontend |
| **NICE-TO-HAVE** (bajo impacto + alto upsell) | Incluir solo si no agrega complejidad | Bonus de comunidad Slack — poco impacto en conversion pero crea engagement |
| **IGNORE** (bajo impacto + bajo upsell) | No construir | Feature que nadie pidio y no lleva a nada |

---

## Criterios de Diseno por Tier

Cada tier tiene parametros de diseno que determinan que tipo de producto encaja.

### Tier 1: BAIT — Criterios de Diseno

| Criterio | Parametro | Razon |
|----------|-----------|-------|
| **Tiempo de consumo** | 5-15 minutos | Ejecutivos B2B no invierten mas en algo gratis |
| **Entrega de valor** | Inmediata | El valor se percibe al instante o no se percibe |
| **Complejidad** | Minima | Sin instrucciones extensas, sin prerequisitos |
| **ROI percibido** | "No puedo creer que es gratis" | Generar el shock de valor que abre la puerta |
| **Costo de produccion** | <$500 | Debe ser escalable sin costo marginal |
| **Formato** | Digital, autoservicio | Sin intervencion humana |

**Pregunta de validacion**: Si elimino este bait, mis leads bajarian significativamente?

### Tier 2: FRONTEND — Criterios de Diseno

| Criterio | Parametro | Razon |
|----------|-----------|-------|
| **Tiempo de consumo** | 1-5 horas | Suficiente para entregar resultado parcial |
| **Entrega de valor** | Dentro de 48 horas | El cliente debe ver progreso rapido |
| **Complejidad** | Media | Requiere esfuerzo del cliente pero con guia clara |
| **ROI percibido** | 3-5x el precio pagado | $197 debe sentirse como $600-$1,000 de valor |
| **Costo de produccion** | $500-$2,000 | Crearlo una vez, venderlo muchas veces |
| **Formato** | Digital, con estructura guiada | Puede ser grabado, templates, o combinacion |

**Pregunta de validacion**: Este producto crea al menos 20% de los clientes que compran el middle?

### Tier 3: MIDDLE — Criterios de Diseno

| Criterio | Parametro | Razon |
|----------|-----------|-------|
| **Tiempo de consumo** | 4-12 semanas | Suficiente para implementar y ver resultados |
| **Entrega de valor** | Resultado medible al final | El cliente termina con metricas concretas |
| **Complejidad** | Alta (con soporte) | Requiere implementacion real, no solo aprendizaje |
| **ROI percibido** | 5-10x el precio pagado | $2,000 debe generar $10,000-$20,000 en resultados |
| **Costo de entrega** | 30-50% del precio | Margen bruto de 50-70% |
| **Formato** | Hibrido (contenido + interaccion humana) | Sesiones grupales o 1:1 + materiales |

**Pregunta de validacion**: Al menos 80% de los clientes de middle terminan con un resultado que puedo usar como caso de exito?

### Tier 4: BACKEND — Criterios de Diseno

| Criterio | Parametro | Razon |
|----------|-----------|-------|
| **Tiempo de consumo** | 6-12+ meses (continuo) | Relacion de largo plazo |
| **Entrega de valor** | Continua y acumulativa | El valor crece con el tiempo |
| **Complejidad** | Alta (personalizada) | Solucion unica para cada cliente |
| **ROI percibido** | 10-20x el precio pagado | $15,000/ano debe generar $150K-$300K en impacto |
| **Costo de entrega** | 20-40% del precio | Margen bruto de 60-80% |
| **Formato** | High-touch, personalizado | 1:1, acceso directo, SLA |

**Pregunta de validacion**: Mis clientes de backend renuevan >80% anualmente?

---

## Secuencia de Lanzamiento de Productos

No construyas los 4 tiers al mismo tiempo. Sigue esta secuencia:

### Fase 1: Valida con Bait (Semana 1-2)

```
[Bait] → [Medir leads generados y engagement]
```

- Construye un bait de alto valor
- Distribuye en 3 canales donde esta tu dream customer
- Mide: leads generados, CPL, consumo del bait
- **Decision gate**: >100 leads en 2 semanas? → Avanzar

### Fase 2: Prueba con Frontend (Semana 3-6)

```
[Bait] → [Frontend] → [Medir conversion y feedback]
```

- Disena un frontend basado en el dolor que el bait revelo
- Lanzalo a los leads del bait
- Mide: tasa de conversion, revenue, feedback cualitativo
- **Decision gate**: >5% conversion de lead a cliente? → Avanzar

### Fase 3: Escala con Middle (Semana 7-14)

```
[Bait] → [Frontend] → [Middle] → [Medir resultados de clientes]
```

- Ofrece el middle a los mejores clientes de frontend
- Ejecutalo como piloto con 3-5 clientes
- Mide: resultados entregados, satisfaccion, testimonios
- **Decision gate**: >80% de clientes con resultado positivo? → Avanzar

### Fase 4: Maximiza con Backend (Semana 15+)

```
[Bait] → [Frontend] → [Middle] → [Backend] → [Medir LTV y retencion]
```

- Propone el backend a los mejores clientes de middle
- Arranca con 1-3 clientes piloto
- Mide: LTV:CAC, churn, expansion revenue
- **Decision gate**: LTV:CAC > 3:1? → Escalar toda la escalera

---

## Principio de Financiamiento en Cascada

Cada tier financia el siguiente:

```
Backend profit → Financia inversion en Middle
Middle profit → Financia inversion en Frontend
Frontend revenue → Financia (o subsidia) adquisicion de Bait
Bait → Costo subsidiado por el sistema completo
```

### Ejemplo numerico

```
Backend:   5 clientes x $15,000/ano = $75,000 (margen 70% = $52,500 profit)
Middle:   20 clientes x $2,500     = $50,000 (margen 60% = $30,000 profit)
Frontend: 100 clientes x $197      = $19,700 (margen 40% = $7,880 profit)
Bait:     500 leads x $0           = $0      (costo: $2,500 en ads)

Profit total: $90,380
Inversion en adquisicion: $2,500
ROI del sistema: 36:1
```

El backend (que solo representa 5 clientes) genera el 58% del profit total. Por eso el backend es el tier mas importante de disenar correctamente.

---

## Anti-patrones: Errores Comunes en Diseno de Producto

| Error | Consecuencia | Correccion |
|-------|-------------|------------|
| **Frontend demasiado completo** | No hay razon para ascender a middle | Resolver parcialmente: dar el "que" pero no el "como" |
| **Middle sin resultado medible** | No genera casos de exito ni ascension | Disenar con KPI de exito explicito |
| **Backend sin diferenciacion del middle** | El cliente no ve por que pagar mas | Backend = personalizado + continuo + acceso directo |
| **Bait generico** | Atrae leads no calificados | Hacer el bait tan especifico que solo el dream customer lo quiera |
| **Mismo formato en todos los tiers** | La experiencia no escala con el precio | Bait: digital. Frontend: guiado. Middle: hibrido. Backend: high-touch. |
| **Pricing sin ancla** | El cliente no tiene referencia de valor | Siempre presentar el precio en contexto del ROI |
