# SOP: OPERACIÓN OMNIPRESENCIA — Distribución Omni-Canal

Procedimiento operativo estándar para maximizar la distribución de tu VELO colocándola en TODOS tus activos de marketing existentes.

## Filosofía

> "No necesitas más contenido. Necesitas que tu mejor contenido sea IMPOSIBLE de ignorar."

La mayoría de los negocios B2B tienen decenas de activos digitales que reciben tráfico diario sin CTA alguno. OPERACIÓN OMNIPRESENCIA convierte cada uno de estos puntos de contacto en una entrada al funnel.

## Prerequisitos

- [ ] VELO publicada y con URL accesible
- [ ] Sistema de UTM definido para tracking
- [ ] Herramienta de analytics configurada (GA4, Plausible, etc.)

---

## Paso 1: Auditar Todos los Activos Existentes

**Tiempo**: 1-2 horas

Inventariar CADA activo digital que recibe atención/tráfico:

### Activos Web
- [ ] Homepage (banner o barra superior)
- [ ] Páginas de servicio/producto (CTA lateral o inferior)
- [ ] Blog posts existentes (CTA inline + P.S. al final)
- [ ] Página "Acerca de" / "Sobre nosotros"
- [ ] Pop-up de exit intent

### Activos de Email
- [ ] Firma de email (todos los miembros del equipo)
- [ ] Footer de newsletter
- [ ] Secuencias de onboarding existentes (agregar P.S.)
- [ ] Respuestas automáticas / auto-replies

### Activos de Video/Audio
- [ ] Descripciones de YouTube (primera línea)
- [ ] Notas de podcast (primera línea de show notes)
- [ ] Pantalla final de videos
- [ ] Bio en plataformas de streaming

### Activos Sociales
- [ ] Bio de LinkedIn (personal + empresa)
- [ ] Bio de Instagram
- [ ] Bio de Twitter/X
- [ ] Sección "Featured" de LinkedIn
- [ ] Linktree o similar

### Activos Offline → Online
- [ ] Presentaciones de ventas (última slide)
- [ ] Propuestas comerciales (footer)
- [ ] Tarjetas de presentación (QR code)

**Output**: Lista numerada de todos los activos con URL/ubicación actual.

## Paso 2: Priorizar por Tráfico

**Tiempo**: 30 minutos

Ordenar los activos del Paso 1 por volumen de tráfico/exposición:

| Prioridad | Criterio | Acción |
|-----------|----------|--------|
| **Alta** | >500 visitas/mes o >1,000 impresiones | Implementar en las primeras 24 horas |
| **Media** | 100-500 visitas/mes | Implementar en la primera semana |
| **Baja** | <100 visitas/mes | Implementar en el primer mes |

## Paso 3: Colocar Link con UTM Único

**Tiempo**: 2-4 horas (activos de alta prioridad)

### Estructura UTM

```
[URL de VELO]?utm_source=[plataforma]&utm_medium=[tipo_activo]&utm_campaign=nowhere-to-hide&utm_content=[activo_específico]
```

**Ejemplos**:
- `tuisl.com?utm_source=youtube&utm_medium=description&utm_campaign=nowhere-to-hide&utm_content=video-funnel-b2b`
- `tuisl.com?utm_source=linkedin&utm_medium=bio&utm_campaign=nowhere-to-hide&utm_content=perfil-ceo`
- `tuisl.com?utm_source=email&utm_medium=signature&utm_campaign=nowhere-to-hide&utm_content=equipo-ventas`

### Copy de CTA por Activo

| Activo | Copy Recomendado |
|--------|-----------------|
| Firma de email | "[Nombre del recurso] — Lee cómo [resultado] en [tiempo] →" |
| Bio de LinkedIn | "[Emoji] [Resultado] para [ICP] → [link]" |
| Descripción YouTube | "RECURSO GRATUITO: [Resultado] paso a paso → [link]" |
| Blog post P.S. | "P.D. — Si quieres [resultado], lee esto: [link]" |
| Exit popup | "Antes de irte: [pregunta sobre su dolor] → [link]" |

## Paso 4: Crear Dashboard de Tracking

**Tiempo**: 1 hora

Configurar un dashboard con:

| Columna | Datos |
|---------|-------|
| Activo | Nombre del activo |
| UTM | Parámetros UTM asignados |
| Visitas/semana | Desde analytics |
| Conversiones | Leads o ventas atribuidas |
| CVR | Tasa de conversión |
| Notas | Observaciones de optimización |

**Herramientas recomendadas**: Google Sheets + GA4, Looker Studio, o Plausible.

## Paso 5: Revisión Semanal de Performance

**Tiempo**: 15-30 minutos/semana

- Revisar top 5 activos por conversión
- Identificar activos con tráfico alto pero conversión baja (optimizar CTA copy)
- Identificar activos nuevos para agregar (contenido nuevo publicado, apariciones en podcasts, etc.)
- Actualizar el link si cambias la VELO

---

## Output del SOP

- [ ] Inventario completo de activos (10-50+)
- [ ] Estrategia de colocación con UTMs únicos
- [ ] Dashboard de tracking configurado
- [ ] Proceso de revisión semanal documentado

## Benchmarks Esperados

| Métrica | Objetivo |
|---------|----------|
| Activos con link | 10+ en la primera semana, 25+ en el primer mes |
| Incremento de tráfico a VELO | 20%+ desde activos existentes |
| Tiempo de implementación total | 1 semana (activos prioritarios) |
| Tráfico "gratis" mensual | Depende de base existente, pero 15-30% del total |

## Conexión con FLUJO

- **Input de**: Página VELO completada, TOFU-BOFU Campaign (complemento orgánico a paid)
- **Output hacia**: Más tráfico a VELO = más datos para optimizar BOFU, más leads para email sequences
- **Se potencia con**: $5 Hit Records (paid) + Nowhere To Hide (orgánico) = cobertura completa
