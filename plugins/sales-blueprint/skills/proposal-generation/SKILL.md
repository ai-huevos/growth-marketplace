---
name: proposal-generation
description: Use when creating sales proposals, SOWs, business cases, or commercial offers for B2B deals. Activates for "proposal", "propuesta", "SOW", "statement of work", "business case", "commercial proposal", "quote", "cotizacion", "sales proposal", or "how to write a proposal".
version: 1.0.0
---

# Proposal Generation

Sistema para generar propuestas comerciales B2B basadas en el diagnostico PULSO. La propuesta no presenta tu producto — presenta la solucion al dolor diagnosticado.

## Cuando usar este skill

- El usuario necesita crear una propuesta o SOW
- Quiere generar un business case para un deal
- Necesita un template de propuesta por segmento (enterprise, mid-market)
- Quiere asegurar que la propuesta refleja el PULSO del deal

## Filosofia: Trading, NOT Negotiating (Momento M4)

Una propuesta profesional no es un documento para "negociar" — es un documento para "tradear". La diferencia:

- **Negociar**: "Te doy descuento si firmas hoy" (pierde-gana)
- **Tradear**: "Si incluimos implementacion, necesitamos un contrato de 24 meses" (nunca dar sin recibir)

## Prerequisito: PULSO Score >= 23

**No generar propuesta si el PULSO score es < 23.** Si el deal no esta suficientemente diagnosticado:
1. Identificar que dimensiones de PULSO estan incompletas
2. Recomendar acciones de discovery adicionales (ver skill `discovery-mastery`)
3. Solo proceder cuando el diagnostico este completo

Generar una propuesta sin diagnostico es como recetar sin examinar al paciente.

## Estructura de la Propuesta

Toda propuesta B2B sigue esta estructura:

### 1. Contexto del Cliente (basado en Panorama + Urgencia del PULSO)
- No hablar de tu producto — hablar de SU situacion
- Demostrar que entendiste su mundo
- Citar datos especificos de las conversaciones de discovery

### 2. Impacto del Problema (basado en Logro del PULSO)
- Cuantificar el costo de no actuar
- Conectar con metricas de negocio (revenue, costo, eficiencia)
- Incluir el impacto emocional/personal para el decision maker

### 3. Solucion Propuesta
- Alineada directamente con la Urgencia diagnosticada
- Cada componente de la solucion conectado con un dolor especifico
- No listar features — listar outcomes

### 4. Resultados Esperados
- Metricas especificas que mejoraran
- Timeline realista de resultados
- Quick wins (primeros 30 dias) + resultados sostenidos

### 5. Plan de Implementacion
- Fases con deliverables claros
- Roles y responsabilidades (ambos lados)
- Dependencias y riesgos con mitigacion

### 6. Inversion
- Pricing alineado con el valor/impact (no con el costo)
- Opciones (Good / Better / Best)
- ROI calculado: "Por cada $1 invertido, retorno de $X"

### 7. Decision Framework (basado en Organización del PULSO)
- Criterios de evaluacion (los que el prospect ya te dijo)
- Como tu solucion cumple cada criterio
- Comparativa honesta si hay competencia

### 8. Proximos Pasos y Timeline (basado en Situación Crítica del PULSO)
- Conectar timeline con la Situación Crítica del prospect
- Mutual Action Plan: que hace cada quien, cuando
- Fecha de expiracion de la propuesta (con consecuencias)

## 9-Step Trading Checklist

Antes de presentar la propuesta, preparar para tradear:

1. **Listar todas las palancas** de la propuesta (precio, termino, scope, soporte, SLA, pagos)
2. **Preguntar y repetir** lo que escuchas del prospect sobre sus prioridades
3. **Priorizar los issues** con el prospect (que es mas importante para ellos?)
4. **Calificar al decision maker** — esta la persona que firma en la mesa?
5. **Tradear empezando por lo facil** — nunca dar sin recibir algo a cambio
6. **Escuchar y repetir** la contraoferta antes de responder
7. **Pedir el deal** — directamente, sin rodeos
8. **Agregar fecha de expiracion** con consecuencias claras
9. **Confirmar con email y contrato** dentro de 30 minutos

## Templates por Segmento

### Enterprise ($100K+ ACV)
Para el template completo de propuesta enterprise, leer `templates/enterprise-proposal.md`.

Caracteristicas:
- Mas detalle en implementation plan (fases, milestones)
- Business case con ROI detallado
- Security y compliance section
- Buying center acknowledgment (mapear todos los stakeholders)
- Legal considerations (SLA, data processing, liability)

### Mid-Market ($20K-$100K ACV)
Para el template completo de propuesta mid-market, leer `templates/mid-market-proposal.md`.

Caracteristicas:
- Mas conciso (el decision maker es mas cercano al usuario)
- Focus en time-to-value (implementacion rapida)
- Pricing mas simple (menos opciones)
- Case studies de empresas similares
- ROI simplificado pero concreto

## Decision Process Support

### Mapeo del Buying Center en la Propuesta

La propuesta debe hablarle a cada rol del buying center:

| Rol | Que le importa | Seccion de la propuesta que lo cubre |
|-----|---------------|--------------------------------------|
| Champion | Que su recomendacion se vea bien | Resultados esperados + quick wins |
| Decider | ROI y riesgo | Business case + plan de mitigacion |
| Buyer/Procurement | Precio y terminos | Inversion + opciones |
| Users | Facilidad de uso y soporte | Implementacion + onboarding |
| Legal | Compliance y contratos | Security + SLA + terminos |

### Choreografia del Buying Center

Plan 3x3: Contactar al menos 3 personas en 3 niveles de la organizacion:
- Nivel 1: Usuarios / team leads
- Nivel 2: Managers / directors (nuestro champion tipicamente)
- Nivel 3: VP / C-level (decision maker)

## Storytelling en la Propuesta

Usar el Hero's Journey en 3 partes para el caso de exito:

1. **Panorama**: "[Empresa similar] tenia [contexto relatable]..."
2. **Urgencia**: "Estaban perdiendo [impacto negativo cuantificado]..."
3. **Logro**: "Despues de implementar [solucion], lograron [resultado positivo]..."

Reglas: Usar nombres de pila, hacerlo personal, menos de 2 minutos de lectura, 1-2 oraciones por parte. El CLIENTE es el heroe, no tu producto.

## Errores Comunes en Propuestas

| Error | Por que falla | Fix |
|-------|--------------|-----|
| Propuesta generica | No refleja el PULSO del deal | Personalizar cada seccion con datos del discovery |
| Listar features | Al decision maker no le importan features | Traducir cada feature en outcome de negocio |
| Sin business case | El CFO no tiene como justificar la inversion | Incluir ROI cuantificado con datos del prospect |
| Sin urgencia | La propuesta se archiva | Conectar con Situación Crítica + fecha de expiracion |
| Single-threaded | Si tu contacto se va, el deal muere | Mapear buying center y crear seccion para cada rol |
| Precio sin contexto | "Es caro" vs "Es el 2% del problema que cuesta $5M" | Presentar precio DESPUES de establecer valor |

## Output esperado

Al generar una propuesta, producir:

1. **Propuesta completa** personalizada al PULSO del deal
2. **Executive summary** (1 pagina para el decision maker)
3. **Business case / ROI** con numeros del prospect
4. **Mutual Action Plan** con timeline atado a la Situación Crítica
5. **Trading prep** con palancas y posiciones de negociacion
