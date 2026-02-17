# Selector de Tipo de Funnel

Árbol de decisión para seleccionar el tipo de funnel correcto basado en tu Average Order Value (AOV), ciclo de venta y modelo de negocio.

---

## Principio de Selección

> No todos los negocios necesitan el mismo funnel. El AOV y el ciclo de venta determinan la complejidad necesaria. Un funnel demasiado simple para una oferta high-ticket pierde ventas. Un funnel demasiado complejo para una oferta low-ticket desperdicia recursos.

---

## Árbol de Decisión

```
                    ¿Cuál es tu AOV?
                         │
            ┌────────────┼─────────────┐
            │            │             │
        $0 - $100    $100 - $2,000   $2,000+
            │            │             │
            ▼            │             ▼
      FRONTEND           │        ¿Ciclo de venta?
      FUNNELS             │             │
        │                 │        ┌────┴────┐
        │                 │        │         │
        │                 │     Corto     Largo
        │                 │    (1-30d)   (30+d)
        │                 │        │         │
        │                 ▼        ▼         ▼
        │             MIDDLE    MIDDLE    BACKEND
        │             FUNNELS   FUNNELS   FUNNELS
        │                                    │
        ▼                ▼                   ▼
  ┌──────────┐   ┌──────────────┐    ┌──────────────┐
  │Two-Step  │   │Perfect       │    │Application   │
  │SLO       │   │Webinar       │    │Funnel        │
  │Continuity│   │Invisible     │    │High-Ticket   │
  │          │   │Webinar       │    │Phone Close   │
  │          │   │Product       │    │              │
  │          │   │Launch        │    │              │
  └──────────┘   └──────────────┘    └──────────────┘
```

---

## Frontend Funnels ($0 - $100)

### Two-Step Tripwire Funnel

**Qué es**: Funnel de 2 páginas que convierte tráfico frío en compradores con una oferta irresistible de bajo precio ($7-$47).

**Cómo funciona**:
1. Página 1: Squeeze page con lead magnet gratuito
2. Página 2: Thank you page con oferta tripwire (impulsiva, bajo riesgo)
3. Post-compra: OTOs para monetizar hyperactive buyers

**Cuándo usarlo**:
- Quieres construir lista Y cualificar compradores simultáneamente
- Tienes un producto digital de bajo costo que resuelve un dolor puntual
- Necesitas financiar tus ads (self-liquidating)

**Métricas objetivo**: Opt-in >30%, tripwire conversion 5-10%, OTO take rate 15-25%

### Self-Liquidating Offer (SLO) Funnel

**Qué es**: Funnel diseñado para que el frontend cubra EXACTAMENTE el costo de adquisición. El profit viene del backend (upsells, ascensión).

**Cómo funciona**:
1. Ad → Landing page con oferta ($27-$97)
2. Order bump en checkout (+30-40% take rate)
3. OTO post-compra (2-3x el precio del frontend)
4. Downsell si rechaza OTO

**Cuándo usarlo**:
- Tu modelo depende de LTV, no de la primera venta
- Tienes un value ladder claro con productos de ascensión
- Puedes tolerar ROAS de 1:1 en frontend sabiendo que el backend genera profit

**Métricas objetivo**: Frontend ROAS 1:1, AOV total (con bumps/OTOs) >2x costo de frontend, LTV:CAC >3:1

### Continuity Funnel (Membresía/Suscripción)

**Qué es**: Funnel que convierte a una suscripción mensual. El valor se genera con retención, no con la venta inicial.

**Cómo funciona**:
1. Landing page con oferta de trial o primer mes con descuento
2. Onboarding sequence (primeros 7-14 días son críticos)
3. Contenido mensual que justifica la retención
4. Secuencias de retención y reactivación

**Cuándo usarlo**:
- Tu producto/servicio entrega valor continuo (software, contenido, comunidad)
- Puedes construir un hábito en los primeros 30 días
- Tu unidad económica mejora drásticamente con retención (LTV de 6+ meses)

**Métricas objetivo**: Trial-to-paid >40%, churn mensual <8%, retención a 3 meses >60%, LTV >10x precio mensual

---

## Middle Funnels ($100 - $2,000)

### Perfect Webinar Funnel

**Qué es**: Funnel basado en un webinar en vivo (o grabado) de 60-90 minutos que educa y presenta una oferta de precio medio.

**Cómo funciona**:
1. Registration page (opt-in para el webinar)
2. Confirmación + secuencia de pre-webinar (aumentar show rate)
3. Webinar: 45 min de contenido + 15-30 min de pitch
4. Replay page + secuencia de cierre (3-5 días post-webinar)

**Cuándo usarlo**:
- Tu producto requiere educación antes de la compra
- Tu oferta está en el rango $297-$1,997
- Tienes una historia de transformación compelling
- LATAM: webinars tienen conversion rates superiores al promedio global (+40% vs. US)

**Estructura del webinar**:
1. Introducción + promesa (5 min)
2. Historia de origen / credibilidad (5 min)
3. Contenido: 3 secretos/frameworks (30 min)
4. Transición al pitch: "Lo que acabo de enseñarte es solo el 20%..." (5 min)
5. Oferta: stack, precio, bonos, garantía (15 min)
6. Q&A + cierre de urgencia (10 min)

**Métricas objetivo**: Registration rate 30-45%, show rate 25-40%, conversión de asistentes 10-20%, replay conversión 3-8%

### Invisible Webinar Funnel (Webinar Evergreen)

**Qué es**: Versión automatizada del Perfect Webinar que corre 24/7 sin necesidad de presentar en vivo.

**Cómo funciona**:
1. Registration page con horarios "en vivo" (próximas 24 horas)
2. Webinar grabado que simula la experiencia en vivo
3. Secuencia de cierre automatizada post-webinar
4. Deadline dinámico por registrante (3-5 días desde su webinar)

**Cuándo usarlo**:
- Ya probaste el webinar en vivo y tienes una versión que convierte
- Quieres escalar sin depender de tu tiempo para presentar
- Tu oferta no cambia con frecuencia

**Nota**: Funciona mejor cuando el webinar en vivo ya demostró conversión. No empezar con invisible.

**Métricas objetivo**: Similares al Perfect Webinar, con show rate +10-15% por la inmediatez del horario

### Product Launch Funnel

**Qué es**: Funnel de lanzamiento basado en 3-4 videos de contenido gratuito que construyen anticipación antes de abrir carrito.

**Cómo funciona**:
1. Opt-in para la serie de videos gratuitos
2. Video 1: La oportunidad (qué es posible)
3. Video 2: La transformación (cómo funciona)
4. Video 3: La experiencia de otros (prueba social)
5. Video 4 (opcional): Objeciones resueltas
6. Apertura de carrito con deadline (7-10 días)
7. Secuencia de cierre con urgencia creciente

**Cuándo usarlo**:
- Lanzas un producto nuevo o una nueva versión
- Tienes una lista existente que puedes activar
- Tu oferta tiene un componente de grupo o cohort
- Quieres crear un evento alrededor de la venta

**Métricas objetivo**: Opt-in a la serie 40-60%, video completion rate >50%, conversión de la lista 5-15%, revenue concentrado en 7-10 días

---

## Backend Funnels ($2,000+)

### Application Funnel

**Qué es**: Funnel que filtra prospectos mediante un formulario de aplicación antes de permitirles comprar o agendar una llamada. Invierte el poder: el prospect aplica a ti, no al revés.

**Cómo funciona**:
1. Landing page que explica el programa/servicio premium
2. Video de presentación (10-20 min) que educa sobre la metodología
3. Formulario de aplicación (8-15 preguntas de cualificación)
4. Thank you page con agendamiento de llamada (solo si cualifica)
5. Discovery call → propuesta personalizada → cierre

**Cuándo usarlo**:
- Tu oferta es $5,000+ y requiere personalización
- Necesitas filtrar prospectos (no todos son buen fit)
- Tu capacidad de entrega es limitada (solo puedes tomar X clientes)
- Quieres posicionarte como premium/exclusivo

**Preguntas de aplicación recomendadas**:
1. ¿Cuál es tu negocio y a qué te dedicas?
2. ¿Cuánto factura tu empresa mensualmente?
3. ¿Cuál es el resultado específico que buscas?
4. ¿En qué timeline necesitas ese resultado?
5. ¿Cuánto has invertido previamente en resolver este problema?
6. ¿Qué has intentado antes y por qué no funcionó?
7. ¿Eres el tomador de decisión para esta inversión?
8. ¿Por qué crees que este programa es lo que necesitas?

**Métricas objetivo**: Application rate 5-15%, qualification rate 40-60%, show rate 70-85%, close rate 20-40%

### High-Ticket Phone Close

**Qué es**: Funnel donde el cierre de la venta se hace exclusivamente por teléfono o videollamada, para ofertas de $10,000+.

**Cómo funciona**:
1. Pre-calentamiento: webinar, case study, o serie de contenido
2. Application funnel (como arriba)
3. Discovery call (diagnóstico con PULSO)
4. Propuesta personalizada (envío post-call)
5. Follow-up call de cierre (resolver objeciones finales)
6. Onboarding inmediato post-firma

**Cuándo usarlo**:
- Tu oferta es $10,000+ y tiene componente de servicio
- El prospect necesita hablar con un humano antes de decidir
- Tu equipo de ventas puede sostener el proceso
- LATAM: la relación personal es fundamental para high-ticket

**Métricas objetivo**: Similar al Application Funnel, con close rate potencialmente mayor (25-50%) gracias a la segunda call

---

## Funnel de Página Única

### Invisible Sales Letter (ISL)

**Qué es**: Funnel de una sola página que educa mientras vende simultáneamente, eliminando la necesidad de funnels multi-paso complejos. Una página que transforma al prospecto de TOFU a BOFU en una sola sesión de lectura.

**Cómo funciona**:
1. Agitación del problema: describir el dolor de forma vívida y específica
2. Educación paso a paso: enseñar la solución en 3-5 pasos claros
3. Prueba social embebida: testimonios y resultados integrados en CADA paso (no al final)
4. Presentación de la oferta: transición natural de la educación al producto/servicio
5. Reversión de riesgo: garantía que elimina la ansiedad de compra
6. CTA único: una sola acción, sin confusión ni múltiples opciones

**Principio central**: Claridad = Certeza → Sin objeciones = Ventas rápidas. Cuanto más entiende el lector, más seguro se siente, menos objeciones quedan.

**Cuándo usarlo**:
- Tu oferta está en el rango $5 - $60,000 (funciona tanto low-ticket como high-ticket)
- Tu audiencia resiste las páginas de venta tradicionales (demasiado agresivas)
- El prospecto necesita educación antes de poder comprar
- Funnels tradicionales se sienten demasiado agresivos para tu mercado
- Quieres ventas consistentes sin depender de webinars o lanzamientos

**Diferencia clave vs. otros funnels**: No separa la educación de la venta. El acto de educar ES el pitch. La prueba social no se acumula al final — se integra en cada paso de la educación.

**Métricas objetivo**: 10-45 clientes/día (benchmark del caso de estudio original: 45 clientes en un solo día), 500-1,000 clientes/mes para low-ticket, 30-150 reuniones de venta/mes para high-ticket

---

## Recomendaciones por Modelo B2B

| Modelo de Negocio | Funnel Recomendado | Justificación |
|-------------------|--------------------|---------------|
| **Lead Generation Agency** | Perfect Webinar | El webinar educa sobre la metodología, el cierre es una oferta de servicio mensual. LATAM responde muy bien a webinars. |
| **SaaS ($50-$200/mes)** | SLO + Continuity | SLO para trial/primer mes subsidiado. Continuity para retención. Order bumps de features premium. |
| **Consultoría ($5K-$25K)** | Application Funnel | Filtra los curiosos. Posiciona como premium. Discovery call cualifica con PULSO. |
| **Training / Cursos ($500-$2K)** | Product Launch | Serie de videos construye anticipación. Cohort crea urgencia. Ideal para lanzamientos periódicos. |
| **Agencia Full-Service ($10K+)** | High-Ticket Phone Close | Requiere relación personal. Propuesta personalizada es clave. Múltiples touchpoints antes del cierre. |
| **Info Products ($27-$97)** | Two-Step Tripwire | Volumen sobre margen. Monetización por OTOs y backend. Lista crece rápido. |
| **Comunidad / Membresía** | Continuity | Free trial o primer mes con descuento. Onboarding es crítico. Contenido continuo justifica retención. |
| **E-commerce B2B** | SLO | Primer pedido a costo, profit en reordenes. Order bumps de productos complementarios. |

---

## Combinaciones de Funnels (Funnel Stacking)

Un negocio maduro no usa un solo funnel — usa una cadena de funnels conectados por el value ladder:

```
Frontend Funnel ──→ Middle Funnel ──→ Backend Funnel
  (Adquisición)     (Monetización)     (Maximización)

  Two-Step ──→ Perfect Webinar ──→ Application
  $27-$97      $497-$1,997         $5,000-$25,000

  SLO ──→ Product Launch ──→ High-Ticket Phone
  $47-$197   $997-$2,997      $10,000-$50,000
```

**Regla**: Domina un funnel antes de agregar otro. No construir 3 funnels simultáneamente.

---

## Checklist de Selección Rápida

Antes de construir tu funnel, responde estas 5 preguntas:

1. **¿Cuál es tu AOV?** → Define la categoría (Frontend / Middle / Backend)
2. **¿Cuánto dura tu ciclo de venta?** → Define la complejidad (más largo = más touchpoints)
3. **¿Tienes equipo de ventas?** → Si no, evita funnels que requieren phone close
4. **¿Tu producto requiere educación?** → Si sí, webinar o product launch
5. **¿Tienes lista existente?** → Si no, empieza con un frontend funnel para construirla
