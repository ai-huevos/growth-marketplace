# Adaptaciones LATAM para Funnels

Guia completa para adaptar funnels a mercados B2B en Latinoamerica.

## Consideraciones Tecnologicas

- **Mobile-first design**: 70%+ del trafico es movil en LATAM
- **Optimizacion para baja velocidad de internet** (3G/4G)
- **Paginas de carga rapida**: menos de 3 segundos
- Imagenes comprimidas y lazy loading obligatorio
- Evitar scripts pesados y animaciones complejas

## Canales de Comunicacion

| Canal | Penetracion | Uso Principal | Prioridad |
|-------|-------------|---------------|-----------|
| WhatsApp Business API | 98% en LATAM | Opt-in, follow-up, soporte | Principal |
| Email | 60-70% open rate B2B | Nurture sequences, contenido | Secundario |
| SMS | Variable por pais | Comunicaciones urgentes solamente | Terciario |
| Redes sociales (DM) | Alta en LinkedIn | Prospecting B2B, relationship | Complementario |

### WhatsApp como Canal Principal

- Engagement 3-5x superior a email
- Ideal para opt-in inicial y confirmaciones
- Automatizable con Business API
- Permite envio de documentos, videos y audio
- Mejor canal para seguimiento post-call

### Email como Canal Secundario

- Esencial para nurture sequences largas
- Mejor para contenido educativo extenso
- Permite segmentacion avanzada
- Medible y automatizable
- Complementa WhatsApp, no lo reemplaza

## Metodos de Pago

### Planes de Cuotas

- 6-12 meses es estandar en la region
- Ofrecer siempre opcion de cuotas sin intereses
- Mostrar precio mensual prominentemente
- Descuentos del 10-15% por pago anticipado (anual)

### Metodos de Pago Locales

| Pais | Metodo Local | Procesador Recomendado |
|------|-------------|----------------------|
| Brasil | Boleto Bancario, PIX | Stripe, PagSeguro |
| Mexico | Oxxo, SPEI | Stripe, Conekta |
| Argentina | Mercado Pago, Rapipago | Mercado Pago |
| Colombia | PSE, Efecty | PayU, Mercado Pago |
| Chile | Webpay, Servipag | Transbank, Mercado Pago |
| Regional | Mercado Pago | Mercado Pago |

### Estrategia Multi-Moneda

- Siempre mostrar precio en USD + moneda local
- Usar tipo de cambio actualizado automaticamente
- Ofrecer facturacion en moneda local cuando sea posible

## Adaptaciones Culturales

### Relationship-First

- Los ciclos de venta B2B son 30-50% mas largos que en US
- Mas touchpoints personales necesarios antes de la compra
- Video calls > email para decisiones importantes
- La confianza personal precede a la confianza institucional
- Networking y referidos son el canal #1

### Contenido Nativo

- Contenido creado en espanol/portugues (no traducido)
- Usar expresiones y referencias culturales locales
- Evitar anglicismos innecesarios
- Adaptar ejemplos y casos de estudio al contexto regional
- Idiomas regionales y modismos cuando sea apropiado

### Casos de Exito Locales

- Son absolutamente esenciales para conversion
- Deben incluir empresas reconocidas en la region
- Metricas en moneda local y contexto local
- Video testimoniales tienen 3x mas impacto

### Calendario de Campanas

- Respetar feriados locales de cada pais
- Evitar lanzamientos en epoca de vacaciones (diciembre-enero)
- Aprovechar Buen Fin (Mexico), Cyber Monday LATAM
- Q1 y Q3 son los mejores trimestres para B2B

## Senales de Confianza

- **Testimoniales locales** con foto real y cargo completo
- **Casos de estudio regionales** con metricas verificables
- **Procesadores de pago locales** reconocidos y confiables
- **Direccion fisica** o presencia local visible
- **Logos de clientes** de empresas conocidas en la region
- **Certificaciones** y membresías de asociaciones locales
- **Numeros de contacto locales** (no solo formulario)

## Ajustes de Pricing por Pais

| Precio US | Precio LATAM Recomendado | Rango | Notas |
|-----------|--------------------------|-------|-------|
| FREE | FREE | — | Igual en todas las regiones |
| $97 | $47-$67 | 50-70% | Frontend offer / lead magnet premium |
| $997 | $497-$697 | 50-70% | Curso o programa mid-ticket |
| $15,000 | $7,500-$10,000 | 50-70% | High-ticket consulting/done-with-you |
| $100,000 | $50,000-$70,000 | 50-70% | Enterprise — o mantener precio US |

### Criterios de Ajuste

- Poder adquisitivo del mercado objetivo
- Competencia local y sus precios
- Costo de entrega del servicio
- Margen minimo viable
- Enterprise puede mantener precios US si el valor lo justifica

## Prioridad de Expansion Geografica

| Prioridad | Pais | Razon | Consideracion Clave |
|-----------|------|-------|---------------------|
| 1 | Mexico | Punto de entrada, proximidad a US | Mayor mercado hispanohablante |
| 2 | Brasil | Mercado mas grande de LATAM | Requiere contenido en portugues |
| 3 | Colombia/Chile | Hubs tech en crecimiento | Ecosistema startup maduro |
| 4 | Argentina | Mercado sofisticado | Volatilidad economica, ajustar pricing |
| 5 | Resto de LATAM | Expansion gradual | Evaluar caso por caso |

## Funnel Modificado para LATAM B2B

```
Trafico (LinkedIn + referidos)
    ↓
WhatsApp Opt-in (lead magnet via WA)
    ↓
Relationship Building (contenido + interacciones 1:1)
    ↓
Discovery Call (video call, diagnostico PULSO)
    ↓
Pilot Project (proyecto acotado de 30-60 dias)
    ↓
Full Contract (propuesta formal con cuotas)
    ↓
Retained Partnership (relacion a largo plazo + referidos)
```

### Diferencias Clave vs. Funnel US

- Mas etapas de relationship building antes de la venta
- WhatsApp reemplaza al email como canal principal
- Pilot project reduce riesgo percibido
- El cierre es el inicio de una relacion, no una transaccion
- Los referidos alimentan la parte superior del funnel
