# PLAN DE CRECIMIENTO: AI HUEVOS GROWTH MARKETPLACE (LATAM B2B)

### 1. Auditoría del Estado Actual: El Ecosistema de Claude Code

La infraestructura de AI Huevos representa un cambio de paradigma en la implementación de RevOps: una arquitectura **Content-Only**. Este repositorio no es software tradicional; es un sistema de inteligencia operativa basado en Markdown y JSON que Claude Code interpreta como instrucciones ejecutables. Al eliminar compilaciones, dependencias de Node/Python y tests de código, hemos reducido la fricción de implementación a cero: la metodología *es* el motor.

#### Inventario Técnico y de Plugins
El marketplace se compone de **122 archivos** versionados en Git, estructurados bajo el patrón **Skill + Framework + Template**. Esta proporción (32 frameworks y 25 templates frente a solo 18 skills) es lo que garantiza la velocidad de ejecución: el sistema no solo dice qué hacer, sino que entrega la estructura exacta del output.

| Plugin | Versión | Propósito | Skills |
| :--- | :--- | :--- | :--- |
| `growth-foundations` | 1.0.0 | Diagnóstico ClarQ y estrategia base (Ski Slope/Topic Triangle). | 6 |
| `sales-blueprint` | 1.0.0 | Ejecución de ventas consultivas (PULSO/Metodología GrowthOS). | 4 |
| `copywriting-engine` | 1.0.0 | Motor de persuasión basado en 38k+ titulares analizados. | 4 |
| `dotcom-secrets` | 1.0.0 | Arquitectura de funnels y Escala de Valor (ESCALA/FLUJO). | 4 |
| `conversational-pm` | 1.0.0 | Orquestación de agentes mediante modelo de irrigación. | 1 |

**Nota Arquitectónica:** El skill `content-strategy` ha sido consolidado en `growth-foundations` para alimentar directamente el **Topic Triangle**, priorizando temas con CPC >$10 para maximizar el retorno orgánico.

---

### 2. Propuesta de Valor: El "Moat" para GTM Engineers

En 2025, el **GTM Engineer** emerge como el arquitecto indispensable. Mientras que el 85% de los SDRs de IA totalmente autónomos han fracasado por falta de contexto y matiz, el GTM Engineer actúa como el orquestador "Human-in-the-loop". AI Huevos es su caja de herramientas para capturar el mercado de RevOps en Latinoamérica, valuado en **$21.7B para 2032**.

#### Diferenciación Estratégica
*   **Spanish-First Moat:** Mientras competidores como `gtmagents` (92 agentes) o `marketingskills` operan exclusivamente en inglés, AI Huevos domina el contexto cultural y los disparadores lingüísticos de LATAM. No es solo traducción; es relevancia táctica en un mercado desatendido por la IA anglocéntrica.
*   **Metodología Unificada (PULSO):** El sistema utiliza PULSO no como un checklist, sino como el tejido conectivo entre marketing y ventas. Esto evita los silos de información y asegura que el "Impacto" (Impact) definido en el anuncio sea el mismo que se valida en el Discovery y se entrega en el Onboarding.

#### Diagrama de Conexión Metodológica (Modelo Bowtie)
```
[ AWARENESS ]             [ IMPACT ]                 [ GROWTH ]
  ClarQ Score     --->   PULSO (5-30)       --->    REKS Performance
(Madurez Operativa)     (Salud del Deal)            (Escalamiento del Equipo)
```

---

### 3. Secuencia de Lanzamiento: Estrategia de 4 Fases

1.  **Fase 1: Dogfooding & Human-in-the-loop:** Validación interna en AI Huevos. Implementación de "Quality Gates" donde la IA genera, pero el consultor refina, superando la mediocridad de la automatización pura.
2.  **Fase 2: Monetización y CRM Sync:** Activación de servidores MCP para conectar los plugins con datos en tiempo real. Lanzamiento de versiones "Pro" de `sales-blueprint` con integración nativa a HubSpot y Apollo.
3.  **Fase 3: Localización y Multi-idioma:** Expansión a Inglés y Portugués. El motor estratégico se mantiene; solo se localizan los *patterns* y *triggers* para mercados globales.
4.  **Fase 4: Ecosistema Enterprise:** Lanzamiento del plugin `enterprise-sales-engine` basado en MEDDPICC para ciclos de venta complejos y comités de decisión múltiples.

---

### 4. Modelo de Valor (Value Ladder): Framework ESCALA

Utilizamos el diagnóstico **ClarQ** para segmentar y mover a los clientes a través de la escala de valor, identificando su nivel de madurez: *Fragile Giant, Growth Constrained, Growth Ready o Scaling*.

*   **Imán (Gratis):** Plugin `growth-foundations`. El comando `/diagnostico` genera un ClarQ Score inmediato, atrayendo leads al identificar sus brechas operativas.
*   **Front-End (Pago):** Plugins especializados (`copywriting-engine`, `sales-blueprint`). Herramientas de ejecución rápida para equipos que necesitan pasar de "Growth Constrained" a "Growth Ready".
*   **Middle (Implementación):** Consultoría de GTM Engineering. Configuración de flujos de agentes y servidores MCP para empresas con procesos complejos.
*   **Back-End (High-Ticket):** Servicios "Done-for-you" (Modelos Elite). AI Huevos construye y opera la infraestructura de ingresos completa para el cliente.

---

### 5. Canales de Distribución: Tácticas de Adquisición B2B

#### Canal 1: SEO & AEO (Ski Slope Model)
No buscamos solo tráfico, sino exposición en Answer Engines. Implementamos el **Query Fan-out**, descomponiendo cada tema en 12-15 sub-preguntas. Esta estructura hace que nuestras páginas sean **161% más probables** de obtener citaciones en AI Overviews (Perplexity, Gemini).
*   **Topic Triangle:** Priorizamos contenido "Black Diamond" donde el CPC supera los $10, atacando la intención de compra directa.

#### Canal 2: Red Packet Partnerships
Distribución masiva con CPL $0. Entregamos *skills* específicos como "regalos" a comunidades SaaS y consultores en LATAM, aprovechando su audiencia existente para inyectar nuestros plugins en sus flujos de trabajo.

#### Canal 3: Paid Ads ($5 Hit Records)
Amplificación de bajo riesgo. Invertimos $5/día en posts probados orgánicamente usando el framework **Three Jabs**. Esta táctica de "mejoras de contenido" convierte consistentemente a **más del 10% del tráfico**, donde el 65% de los opt-ins provienen de estos micro-upgrades dentro del artículo.

---

### 6. Sistema de Métricas de Éxito (RevOps Dashboard)

#### Métricas de Producto y Calidad
*   **ClarQ Score (0-40):** El KPI maestro de madurez. El objetivo es transicionar cuentas de "Fragile Giant" a "Scaling".
*   **PULSO Confidence Level (5-30):**
    *   **5-14:** Nurture (No invertir recursos de ventas).
    *   **23-30:** Oportunidad Activa (Asignar AE y crear Mutual Action Plan).
*   **REKS Score:** Evaluación cualitativa de Results, Effort, Knowledge y Skills para diagnosticar fallos en el equipo humano.

#### Métricas de Crecimiento e IA
*   **AEO Citation Probability:** Meta de 3.2x más citaciones que la competencia mediante el uso de estructuras de contenido "chunked" y data points densos.
*   **Atribución de Ingresos:** Meta de 90% de precisión mediante tracking de origen por canal.

---

### 7. Integraciones MCP: Multiplicadores de Valor

El protocolo MCP transforma nuestros archivos Markdown en agentes con "ojos" en los datos del cliente:

1.  **HubSpot (Prioridad 1):** Sincronización bidireccional. Permite que Claude Code escriba los scores PULSO directamente en los Deals, actualizando la probabilidad de cierre basada en la profundidad del Discovery.
2.  **Apollo (Prioridad 1):** Activación de **Waterfall Enrichment**. Identifica perfiles ICP y detecta "Topic Surge" (señales de intención), permitiendo que el `sdr-agent` contacte solo cuando hay una ventana de oportunidad abierta.
3.  **Gong (Prioridad 2):** Inyecta verbatims y transcripciones reales de llamadas en el `copywriting-engine`. Esto garantiza que la IA utilice el **lenguaje exacto del comprador** (sus miedos y dolores literales), eliminando el copy genérico.
4.  **Notion (Prioridad 2):** Repositorio centralizado. Todos los blueprints, propuestas y estrategias generadas se depositan automáticamente en el espacio de trabajo del cliente para asegurar la persistencia del conocimiento.