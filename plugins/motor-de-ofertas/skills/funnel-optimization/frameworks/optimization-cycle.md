# Ciclo Semanal de Optimizacion

Sistema disciplinado para mejorar tu funnel semana a semana mediante testing basado en datos. Un test por semana, documentado, medido y con decision clara.

## El Ciclo: Lunes a Lunes

### Lunes: Revisar y Diagnosticar

Revisa las metricas de la semana anterior usando el Dashboard de Salud del Funnel. Responde estas 5 preguntas:

1. **Que metrica cambio mas** (positiva o negativamente) respecto a la semana anterior?
2. **Cual es el cuello de botella #1** que mas esta limitando el revenue?
3. **El test de la semana anterior** genero un resultado estadisticamente significativo?
4. **El ganador del test anterior** ya fue implementado como default?
5. **Que aprendimos** que cambia nuestra comprension del customer?

### Martes: Disenar Hipotesis de Test

Usando la priorizacion de impacto (ver abajo), selecciona el elemento a testear y formula una hipotesis estructurada.

**Template de hipotesis**:

```
HIPOTESIS #[numero]
Fecha: [fecha]
Elemento: [que vas a cambiar]
Nivel de impacto: [oferta/headline/CTA/social proof/design]

SI [hacemos este cambio especifico]
ENTONCES [esta metrica] mejorara en [cantidad estimada]
PORQUE [razonamiento basado en datos o principios]

EXITO = [metrica especifica] alcanza [valor especifico] con [nivel de confianza]
DURACION MINIMA = [dias o conversiones necesarias]
```

**Ejemplo**:

```
HIPOTESIS #12
Fecha: 2026-02-15
Elemento: Lead magnet de la squeeze page
Nivel de impacto: Oferta (50%)

SI cambiamos el lead magnet de "Guia de 30 paginas" a "Checklist de 1 pagina + video de 5 min"
ENTONCES el opt-in rate mejorara de 25% a 35%
PORQUE los prospects B2B prefieren formatos de consumo rapido que demuestren valor inmediato

EXITO = opt-in rate >= 33% con 95% de confianza estadistica
DURACION MINIMA = 200 visitantes por variante (aprox. 5 dias)
```

### Miercoles: Lanzar Test

Implementa el test con estas reglas:

- **Trafico minimo**: 100 conversiones por variante (no visitantes — conversiones)
- **Split**: 50/50 entre control y variante
- **Un solo elemento**: Cambiar solo una variable a la vez
- **Tracking**: Verificar que el tracking esta funcionando correctamente antes de enviar trafico

### Jueves-Viernes: Monitorear Resultados Parciales

- Revisar que el test esta corriendo correctamente (trafico distribuido, tracking activo)
- **NO tomar decisiones** con datos parciales — solo verificar que no hay errores tecnicos
- Si hay un error tecnico evidente, pausar y corregir
- Documentar observaciones cualitativas (comentarios de usuarios, patrones inusuales)

### Siguiente Lunes: Evaluar y Decidir

- Evaluar resultados con significancia estadistica (95% de confianza minimo)
- Si el test no tiene suficientes conversiones, extender una semana mas
- **Ganador claro**: Implementar como default. Documentar el aprendizaje.
- **Sin diferencia significativa**: El control gana (no cambiar sin evidencia). Documentar.
- **Perdedor claro**: El control se mantiene. Analizar por que la hipotesis fallo.

Iniciar nuevo ciclo.

---

## Priorizacion de Tests: Orden de Impacto

No todos los elementos del funnel tienen el mismo impacto en conversion. Prioriza siempre de mayor a menor impacto:

### 1. Oferta / Bait (50% de impacto)

El elemento de mayor impacto. Cambiar la oferta puede duplicar o triplicar conversion.

**Que testear**:
- Tipo de lead magnet (guia vs checklist vs video vs quiz vs template)
- Oferta frontend (precio, formato, bonus, garantia)
- Angulo de la propuesta de valor
- Pricing y estructura de pago

**Ejemplo de tests**:
- Lead magnet A: "Guia completa de 30 paginas" vs Lead magnet B: "Template rellenable en 10 minutos"
- Precio A: $197 pago unico vs Precio B: 3 pagos de $79
- Garantia A: 30 dias vs Garantia B: 60 dias + bonus de compensacion

### 2. Headline (30% de impacto)

El headline es lo primero que lee el visitante. Determina si sigue leyendo o se va.

**Que testear**:
- Beneficio especifico vs curiosidad
- Numero especifico vs promesa general
- Pregunta vs afirmacion
- Con dolor vs con aspiracion

**Ejemplo de tests**:
- Headline A: "Como 47 empresas B2B duplicaron sus leads en 90 dias" vs Headline B: "El metodo que las agencias no quieren que conozcas"
- Headline A: "Reduce tu CPA un 40% en 30 dias" vs Headline B: "Deja de desperdiciar tu presupuesto de ads"

### 3. CTA (10% de impacto)

El call-to-action afecta la conversion pero menos de lo que la mayoria cree.

**Que testear**:
- Copy del boton ("Descargar gratis" vs "Quiero mi copia" vs "Acceder ahora")
- Color del boton (contraste con la pagina)
- Posicion (above the fold vs after pitch vs ambos)
- Numero de CTAs en la pagina

### 4. Social Proof (5% de impacto)

Los testimonios y prueba social refuerzan la decision pero rara vez la cambian por si solos.

**Que testear**:
- Tipo de testimonio (video vs texto vs screenshot)
- Cantidad (3 vs 7 vs 12)
- Logos de clientes (con vs sin)
- Metricas de resultados ("127 empresas usan esto" vs "4.8/5 estrellas")

### 5. Design / Layout (5% de impacto)

El diseno importa menos que el mensaje. Solo testea design despues de optimizar los 4 elementos anteriores.

**Que testear**:
- Long-form vs short-form sales page
- Con video vs sin video
- Imagen hero vs sin imagen
- Orden de secciones

---

## Reglas de Testing

Estas reglas son innegociables. Romperlas invalida tus resultados.

1. **Minimo 100 conversiones por variante** — No 100 visitantes, 100 conversiones. Con menos no hay significancia estadistica.
2. **Un elemento a la vez** — Si cambias headline Y CTA al mismo tiempo, no sabes cual causo el resultado.
3. **Documentar TODOS los resultados** — Incluyendo los tests que perdieron. Los fracasos ensensan tanto como los exitos.
4. **Implementar el ganador inmediatamente** — No dejes el test corriendo "un poquito mas" despues de tener resultado claro.
5. **No espiar resultados parciales para tomar decisiones** — Los datos parciales mienten. Espera al minimo de conversiones.
6. **Testear es una disciplina semanal** — No es algo que se hace "cuando hay tiempo". Es el ritual mas importante del funnel.

---

## Preguntas del Check-in Semanal

Cada lunes, antes de revisar las metricas, responde estas preguntas honestamente:

1. **Que test corrimos la semana pasada y cual fue el resultado?**
   - Si la respuesta es "ninguno", ese es el problema #1.

2. **Cual es la metrica que mas nos esta costando dinero ahora mismo?**
   - No la metrica mas facil de arreglar — la que mas impacta el revenue.

3. **Tenemos suficiente trafico para testear esta semana?**
   - Si no hay trafico suficiente, el problema no es optimizacion — es trafico.

4. **Que aprendimos del comportamiento de nuestros usuarios esta semana?**
   - Datos cuantitativos + observaciones cualitativas.

5. **Estamos listos para escalar o todavia estamos optimizando?**
   - Ver checklist pre-scaling en `scaling-strategy.md`.
