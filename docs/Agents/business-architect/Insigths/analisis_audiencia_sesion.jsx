import { useState } from "react";

const COLORS = {
  abismo: "#0A0A0A",
  lienzo: "#F4F4F0",
  forja: "#FFD826",
  friccion: "#FF5C23",
  white: "#FFFFFF",
};

const clusters = [
  {
    id: "ventas",
    label: "MOTOR COMERCIAL",
    icon: "🎯",
    count: 38,
    pct: 52,
    color: COLORS.friccion,
    pain: "No tienen un sistema de ventas. Punto.",
    detail:
      "52% de las preguntas giran alrededor de: cómo estructurar un área comercial, cómo crear un embudo de ventas, cómo monitorear métricas. La mayoría NO tiene un proceso formal — dependen de referidos, redes personales del fundador, o puro outbound manual.",
    quotes: [
      '"Las ventas y el marketing son nuestro talón de Aquiles"',
      '"No tenemos comerciales, tampoco realizamos mercadeo"',
      '"Hemos contado con encargados del proceso de ventas, pero no dueños"',
      '"¿Cómo crear canales de ventas predecibles que no dependan del 1 a 1?"',
    ],
    subPatterns: [
      { name: "Estructura comercial inexistente", count: 14 },
      { name: "Embudo sin métricas", count: 9 },
      { name: "Dependencia del fundador en ventas", count: 8 },
      { name: "Cierre lento / ciclos largos", count: 7 },
    ],
    opportunity:
      "Workshop de implementación: 'Tu motor comercial en 90 días' — CRM + pipeline + métricas + automatización con IA",
    kaiAngle:
      "KAI Partners les monta el CRM, automatiza el seguimiento, y conecta WhatsApp + email en un sistema que funciona solo. POC en 2 semanas.",
  },
  {
    id: "escalar",
    label: "ESCALAR SIN ROMPERSE",
    icon: "📈",
    count: 21,
    pct: 29,
    color: COLORS.forja,
    pain: "Saben que tienen que crecer, pero el crecimiento les da pánico.",
    detail:
      "29% pregunta cómo escalar sin que la operación explote, sin perder calidad, sin quemar caja. El patrón es claro: empresas que ya tienen tracción pero operan con procesos manuales y equipos pequeños que se saturan con cada nuevo cliente.",
    quotes: [
      '"¿Cómo escalar sin tener problemas de operación?"',
      '"¿Cómo escalar la base de clientes sin presión excesiva sobre el capital de trabajo?"',
      '"El crecimiento depende no solo de aumentar ventas, sino de la estructura operativa"',
      '"¿Cómo escalar sin depender del desplazamiento del equipo propio?"',
    ],
    subPatterns: [
      { name: "Operación no soporta crecimiento", count: 8 },
      { name: "Capital de trabajo insuficiente", count: 6 },
      { name: "Equipo saturado", count: 4 },
      { name: "Calidad vs. Volumen", count: 3 },
    ],
    opportunity:
      "Diagnóstico de cuellos de botella operativos + automatización de procesos repetitivos que liberan capacidad",
    kaiAngle:
      "Entrar con un diagnóstico de 'capacity audit' — encontrar las 3 tareas que más tiempo consumen y automatizarlas. El resultado: escalar sin contratar.",
  },
  {
    id: "marketing",
    label: "GENERACIÓN DE DEMANDA",
    icon: "🧲",
    count: 18,
    pct: 25,
    color: "#3988FF",
    pain: "No saben cómo atraer leads de forma consistente.",
    detail:
      "25% necesita un motor de leads: SEO, contenido, paid, alianzas. La mayoría depende de contactos de primer y segundo nivel — cuando se agotan, el pipeline se seca. Varios mencionan newsletters, redes sociales, pero sin estrategia clara ni métricas.",
    quotes: [
      '"Evolucionando de leads por contactos de 1° y 2° nivel a SEO y marketing digital"',
      '"¿Cómo atraer clientes que hagan buen fit de la forma más barata posible?"',
      '"¿Cuáles canales alternos de generación de leads podríamos considerar?"',
      '"¿Cómo generar un proceso replicable para un mercado tan de nicho?"',
    ],
    subPatterns: [
      { name: "Sin estrategia de contenido", count: 6 },
      { name: "Canales no optimizados", count: 5 },
      { name: "Leads dependen de red personal", count: 4 },
      { name: "Necesitan alianzas estratégicas", count: 3 },
    ],
    opportunity:
      "Framework 'Growth Stack LATAM': data lake + contenido + automatización de nurturing",
    kaiAngle:
      "Montar el growth stack: HubSpot + automatización WhatsApp + secuencias de email + dashboard de métricas. Lo que haces con S One, pero productizado.",
  },
  {
    id: "expansion",
    label: "EXPANSIÓN & MERCADOS",
    icon: "🌎",
    count: 11,
    pct: 15,
    color: "#9B59B6",
    pain: "Quieren internacionalizar pero no tienen playbook.",
    detail:
      "15% pregunta sobre nuevos mercados: geográficos (México, España, Europa) o por industria. Algunas empresas ya tienen presencia internacional pero no saben cómo replicar el éxito de forma sistemática sin que los fundadores sean el cuello de botella.",
    quotes: [
      '"¿Cómo escalar a otros países?"',
      '"¿Cómo estructurar nuestro playbook de expansión para que el éxito en México sea replicable?"',
      '"¿Cuáles mercados geográficos y por industria priorizar?"',
      '"¿Cómo decidir entre ir B2C o B2B?"',
    ],
    subPatterns: [
      { name: "Sin playbook de expansión", count: 4 },
      { name: "Priorización de mercados", count: 3 },
      { name: "Localización / PMF regional", count: 2 },
      { name: "B2B vs B2C decisión", count: 2 },
    ],
    opportunity:
      "Framework de 'Market Selection Matrix' + IA para análisis de mercado",
    kaiAngle:
      "Herramienta de análisis de mercado con IA que evalúa oportunidad, competencia y fit regulatorio por país. Un POC que demuestra el valor de data-driven expansion.",
  },
  {
    id: "capital",
    label: "CAPITAL & FINANCIACIÓN",
    icon: "💰",
    count: 12,
    pct: 16,
    color: "#27AE60",
    pain: "Bootstrapped hasta el tope. Necesitan capital inteligente.",
    detail:
      "16% tiene preguntas sobre financiación: cuándo levantar, cómo no diluirse, cómo priorizar inversión. Varias empresas están en el punto donde el bootstrapping ya no alcanza pero no saben si están listas para una ronda.",
    quotes: [
      '"¿Qué estrategias de inversión permiten acelerar sin comprometer sostenibilidad?"',
      '"¿Cuáles indicadores debe alcanzar una empresa para buscar rondas de inversión?"',
      '"Capital para armar equipo de prospección/lead farming"',
      '"Necesitamos el capital de nuestra ronda de 3 millones de dólares"',
    ],
    subPatterns: [
      { name: "Timing de ronda", count: 4 },
      { name: "Priorización de inversión", count: 3 },
      { name: "Bootstrapping al límite", count: 3 },
      { name: "No diluir fundadores", count: 2 },
    ],
    opportunity:
      "Asesoría en estructura de inversión + métricas que levantan capital vs las que no",
    kaiAngle:
      "Tu experiencia con Finkargo ($30M pipeline) + el framework de inversión que diseñaste con Cristian. Hablas desde la trinchera, no desde la teoría.",
  },
];

const sessionBlocks = [
  {
    time: "0-15 min",
    title: "EL ESPEJO",
    subtitle: "Mostrarles su propia data",
    content:
      "Abrir con los resultados de SUS preguntas. Mostrar los patrones. Hacerles sentir que los entiendes antes de decir una sola palabra de teoría. '52% de ustedes no tiene un proceso de ventas formal — y eso no es un problema de marketing, es un problema de arquitectura.'",
    hook: "Contrarian: 'El problema NO es que no vendan. El problema es que ni siquiera tienen un sistema que les diga POR QUÉ no venden.'",
    energy: "Alta — establece autoridad inmediata",
  },
  {
    time: "15-40 min",
    title: "EL FRAMEWORK",
    subtitle: "Growth Engine en 3 capas",
    content:
      "Presentar tu framework: CAPTURA → CONVERSIÓN → ESCALA. Cada capa con ejemplos reales. No teoría: números, herramientas, tiempos. La gente quiere saber QUÉ hacer el lunes, no un modelo bonito.",
    hook: "Authority: 'En Vozy pasamos de $4M a $8.5M ARR en 12 meses. No fue magia — fue este sistema exacto.'",
    energy: "Media-alta — enseñanza con credibilidad",
  },
  {
    time: "40-65 min",
    title: "EL QUIRÓFANO",
    subtitle: "Diagnóstico en vivo",
    content:
      "Tomar 2-3 casos de la audiencia y hacer diagnóstico en vivo. Preguntar: '¿Quién tiene el problema de ciclos de venta largos?' Aplicar tu framework al caso real. Esto es ENROLLMENT puro — que vean cómo piensas, no solo qué sabes.",
    hook: "Vulnerability: 'Yo también tuve este problema. En KAI Partners los primeros 6 meses no firmamos un solo contrato.'",
    energy: "Máxima — es el momento de conexión",
  },
  {
    time: "65-85 min",
    title: "LA HERRAMIENTA",
    subtitle: "IA aplicada a sus dolores",
    content:
      "Demo rápida de cómo la IA puede resolver 2-3 de sus problemas TOP: automatizar seguimiento de leads, analizar pipeline, crear contenido. No vender IA — mostrar IA resolviendo el dolor que ELLOS declararon en las preguntas.",
    hook: "Pattern Interrupt: 'No les voy a hablar de IA. Les voy a mostrar cómo en 3 minutos automatizo algo que a ustedes les toma 3 horas.'",
    energy: "Alta — wow factor con aplicación real",
  },
  {
    time: "85-110 min",
    title: "EL CAMINO",
    subtitle: "Next steps concretos + oferta suave",
    content:
      "Cerrar con: '¿Qué hacen el lunes?' Dar 3 acciones inmediatas. Luego ofrecer diagnóstico gratuito de 30 min para profundizar en SU caso. El diagnóstico es el primer paso del funnel hacia consultoría o implementación.",
    hook: "Philosophical: 'Saben cuál es la diferencia entre las empresas que escalan y las que se estancan? Las que escalan dejaron de pensar en ventas y empezaron a construir SISTEMAS.'",
    energy: "Media — cierre con claridad y urgencia tranquila",
  },
];

const funnelSteps = [
  {
    step: "SESIÓN (hoy)",
    people: "~30-40 asistentes",
    action: "Valor masivo + diagnóstico de patrones",
  },
  {
    step: "DIAGNÓSTICO GRATIS",
    people: "10-15 solicitan",
    action: "30 min 1:1 — mapear su problema específico",
  },
  {
    step: "PROPUESTA",
    people: "5-7 califican",
    action: "Implementación comercial o growth stack",
  },
  {
    step: "CLIENTE",
    people: "2-3 cierran",
    action: "$3-5K/mes retainer o $8-15K proyecto",
  },
];

function BarChart({ data, maxVal }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {data.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "180px",
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              textAlign: "right",
              color: COLORS.abismo,
              flexShrink: 0,
            }}
          >
            {item.name}
          </div>
          <div style={{ flex: 1, position: "relative", height: "28px" }}>
            <div
              style={{
                width: `${(item.count / maxVal) * 100}%`,
                height: "100%",
                background: COLORS.forja,
                border: `3px solid ${COLORS.abismo}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "8px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                fontWeight: "bold",
                minWidth: "40px",
              }}
            >
              {item.count}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeCluster, setActiveCluster] = useState(null);

  const tabs = [
    { id: "overview", label: ">_ PATRONES" },
    { id: "clusters", label: ">_ CLUSTERS" },
    { id: "session", label: ">_ SESIÓN" },
    { id: "funnel", label: ">_ VENTA" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Space Mono', monospace",
        background: COLORS.lienzo,
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* HEADER */}
      <div
        style={{
          background: COLORS.abismo,
          padding: "24px 32px",
          borderBottom: `6px solid ${COLORS.forja}`,
        }}
      >
        <div
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "28px",
            fontWeight: 700,
            color: COLORS.forja,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          ANÁLISIS DE AUDIENCIA
        </div>
        <div
          style={{
            color: COLORS.lienzo,
            fontSize: "13px",
            marginTop: "6px",
            opacity: 0.8,
          }}
        >
          <span style={{ color: COLORS.friccion }}>{">"}_</span> 105 respuestas
          · 52 obstáculos · 73 preguntas estratégicas
        </div>
      </div>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          gap: "0",
          borderBottom: `6px solid ${COLORS.abismo}`,
          overflow: "auto",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setActiveCluster(null);
            }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "13px",
              fontWeight: "bold",
              padding: "14px 20px",
              background:
                activeTab === tab.id ? COLORS.forja : COLORS.lienzo,
              color: COLORS.abismo,
              border: "none",
              borderRight: `3px solid ${COLORS.abismo}`,
              cursor: "pointer",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div style={{ padding: "24px 32px", maxWidth: "900px" }}>
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                margin: "0 0 8px 0",
                textTransform: "uppercase",
              }}
            >
              LA RADIOGRAFÍA
            </h2>
            <p style={{ fontSize: "13px", lineHeight: 1.6, margin: "0 0 24px 0" }}>
              Esto es lo que tu audiencia está gritando. No son preguntas
              genéricas — son síntomas de empresas que crecieron por producto/técnica
              y ahora necesitan un motor comercial que no existe.
            </p>

            {/* KEY INSIGHT BOX */}
            <div
              style={{
                background: COLORS.forja,
                border: `6px solid ${COLORS.abismo}`,
                boxShadow: `8px 8px 0px 0px ${COLORS.abismo}`,
                padding: "24px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: COLORS.friccion }}>{">"}_</span> INSIGHT
                CENTRAL
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                <strong>El 80%+ de estas empresas tiene el MISMO problema disfrazado de formas diferentes:</strong>{" "}
                construyeron un producto o servicio sólido pero NUNCA
                construyeron un SISTEMA de ventas. Venden por relación, no por
                proceso. El día que se acaban los contactos de primer nivel, el
                pipeline se seca.
              </p>
            </div>

            {/* FREQUENCY CHART */}
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              FRECUENCIA DE KEYWORDS
            </div>
            <BarChart
              data={[
                { name: "Ventas/Comercial", count: 95 },
                { name: "Escalar/Escalable", count: 29 },
                { name: "Estructura/Estructurar", count: 30 },
                { name: "Equipo/Talento", count: 28 },
                { name: "Capital/Financiación", count: 26 },
                { name: "Marketing/Mercadeo", count: 24 },
                { name: "Proceso", count: 24 },
                { name: "Ciclos largos", count: 16 },
                { name: "Leads", count: 10 },
                { name: "Internacional", count: 11 },
              ]}
              maxVal={95}
            />

            {/* MATURITY SPECTRUM */}
            <div
              style={{
                marginTop: "28px",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              ESPECTRO DE MADUREZ DE LA AUDIENCIA
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                {
                  level: "NIVEL 0",
                  label: "Sin proceso",
                  pct: "~35%",
                  color: COLORS.friccion,
                  desc: "No tienen área comercial ni marketing. Venden por referidos.",
                },
                {
                  level: "NIVEL 1",
                  label: "Proceso informal",
                  pct: "~40%",
                  color: COLORS.forja,
                  desc: "Tienen alguien 'encargado' de ventas. Sin métricas ni pipeline formal.",
                },
                {
                  level: "NIVEL 2",
                  label: "En construcción",
                  pct: "~20%",
                  color: "#3988FF",
                  desc: "Ya usan CRM, hacen contenido. Necesitan optimizar y escalar.",
                },
                {
                  level: "NIVEL 3",
                  label: "Sofisticado",
                  pct: "~5%",
                  color: "#27AE60",
                  desc: "Facturan $4M+. Problema es escala internacional y capital.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 200px",
                    border: `3px solid ${COLORS.abismo}`,
                    padding: "16px",
                    background: COLORS.white,
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "11px",
                      color: item.color,
                      marginBottom: "4px",
                    }}
                  >
                    {item.level} — {item.pct}
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: 1.5, opacity: 0.75 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLUSTERS TAB */}
        {activeTab === "clusters" && (
          <div>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                margin: "0 0 8px 0",
                textTransform: "uppercase",
              }}
            >
              5 CLUSTERS DE DOLOR
            </h2>
            <p style={{ fontSize: "13px", lineHeight: 1.6, margin: "0 0 20px 0" }}>
              Cada cluster = un servicio potencial. Click en uno para ver el detalle.
            </p>

            {/* CLUSTER CARDS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {clusters.map((c) => (
                <div key={c.id}>
                  <button
                    onClick={() =>
                      setActiveCluster(activeCluster === c.id ? null : c.id)
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      fontFamily: "'Space Mono', monospace",
                      background:
                        activeCluster === c.id ? COLORS.abismo : COLORS.white,
                      color:
                        activeCluster === c.id ? COLORS.forja : COLORS.abismo,
                      border: `6px solid ${COLORS.abismo}`,
                      boxShadow:
                        activeCluster === c.id
                          ? "none"
                          : `8px 8px 0px 0px ${COLORS.abismo}`,
                      padding: "16px 20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span style={{ fontSize: "24px" }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          textTransform: "uppercase",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          opacity: 0.7,
                          marginTop: "2px",
                        }}
                      >
                        {c.pain}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "24px",
                          fontFamily: "'Oswald', sans-serif",
                        }}
                      >
                        {c.pct}%
                      </div>
                      <div style={{ fontSize: "10px", opacity: 0.6 }}>
                        {c.count} menciones
                      </div>
                    </div>
                  </button>

                  {/* EXPANDED DETAIL */}
                  {activeCluster === c.id && (
                    <div
                      style={{
                        border: `6px solid ${COLORS.abismo}`,
                        borderTop: "none",
                        padding: "24px",
                        background: COLORS.white,
                      }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: 1.6,
                          margin: "0 0 16px 0",
                        }}
                      >
                        {c.detail}
                      </p>

                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          marginBottom: "8px",
                          textTransform: "uppercase",
                          color: COLORS.friccion,
                        }}
                      >
                        {">"}_  Citas textuales:
                      </div>
                      {c.quotes.map((q, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: "12px",
                            lineHeight: 1.5,
                            padding: "8px 12px",
                            borderLeft: `4px solid ${COLORS.forja}`,
                            marginBottom: "6px",
                            fontStyle: "italic",
                            background: COLORS.lienzo,
                          }}
                        >
                          {q}
                        </div>
                      ))}

                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          marginTop: "16px",
                          marginBottom: "8px",
                          textTransform: "uppercase",
                          color: COLORS.friccion,
                        }}
                      >
                        {">"}_  Sub-patrones:
                      </div>
                      {c.subPatterns.map((sp, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "6px 0",
                            borderBottom: `1px solid ${COLORS.abismo}22`,
                            fontSize: "12px",
                          }}
                        >
                          <span>{sp.name}</span>
                          <span style={{ fontWeight: "bold" }}>
                            {sp.count}x
                          </span>
                        </div>
                      ))}

                      {/* OPPORTUNITY BOX */}
                      <div
                        style={{
                          marginTop: "16px",
                          background: COLORS.forja,
                          border: `3px solid ${COLORS.abismo}`,
                          padding: "16px",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginBottom: "6px",
                            textTransform: "uppercase",
                          }}
                        >
                          💡 OPORTUNIDAD DE VENTA
                        </div>
                        <p
                          style={{
                            fontSize: "12px",
                            lineHeight: 1.5,
                            margin: "0 0 8px 0",
                          }}
                        >
                          {c.opportunity}
                        </p>
                        <div
                          style={{
                            fontSize: "11px",
                            lineHeight: 1.5,
                            padding: "8px",
                            background: COLORS.abismo,
                            color: COLORS.forja,
                          }}
                        >
                          <strong>ÁNGULO KAI PARTNERS:</strong> {c.kaiAngle}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SESSION TAB */}
        {activeTab === "session" && (
          <div>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                margin: "0 0 8px 0",
                textTransform: "uppercase",
              }}
            >
              ESTRUCTURA DE LA SESIÓN (110 MIN)
            </h2>
            <p style={{ fontSize: "13px", lineHeight: 1.6, margin: "0 0 20px 0" }}>
              Diseñada para máximo engagement + posicionamiento como experto + funnel hacia diagnóstico.
            </p>

            {sessionBlocks.map((block, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "16px",
                  border: `6px solid ${COLORS.abismo}`,
                  boxShadow: `8px 8px 0px 0px ${COLORS.abismo}`,
                  background: COLORS.white,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    background: COLORS.abismo,
                    color: COLORS.forja,
                    padding: "12px 16px",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                    }}
                  >
                    BLOQUE {i + 1}
                  </div>
                  <div
                    style={{
                      background: COLORS.friccion,
                      color: COLORS.white,
                      padding: "2px 10px",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                  >
                    {block.time}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      fontSize: "11px",
                      opacity: 0.6,
                    }}
                  >
                    Energía: {block.energy}
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {block.title}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: COLORS.friccion,
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {block.subtitle}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      margin: "0 0 12px 0",
                    }}
                  >
                    {block.content}
                  </p>
                  <div
                    style={{
                      background: COLORS.lienzo,
                      border: `3px solid ${COLORS.abismo}`,
                      padding: "12px 16px",
                      fontSize: "12px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: COLORS.friccion, fontWeight: "bold" }}>
                      HOOK:
                    </span>{" "}
                    {block.hook}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FUNNEL TAB */}
        {activeTab === "funnel" && (
          <div>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                margin: "0 0 8px 0",
                textTransform: "uppercase",
              }}
            >
              EMBUDO POST-SESIÓN
            </h2>
            <p style={{ fontSize: "13px", lineHeight: 1.6, margin: "0 0 24px 0" }}>
              De la sesión al revenue. Cada paso tiene un objetivo claro y una métrica.
            </p>

            {/* FUNNEL VISUAL */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0",
                marginBottom: "28px",
              }}
            >
              {funnelSteps.map((step, i) => {
                const width = 100 - i * 18;
                return (
                  <div
                    key={i}
                    style={{
                      width: `${width}%`,
                      background:
                        i === 0
                          ? COLORS.abismo
                          : i === 1
                          ? COLORS.friccion
                          : i === 2
                          ? COLORS.forja
                          : "#27AE60",
                      color: i === 2 ? COLORS.abismo : COLORS.white,
                      padding: "16px 20px",
                      borderLeft: `6px solid ${COLORS.abismo}`,
                      borderRight: `6px solid ${COLORS.abismo}`,
                      borderTop:
                        i === 0 ? `6px solid ${COLORS.abismo}` : "none",
                      borderBottom:
                        i === funnelSteps.length - 1
                          ? `6px solid ${COLORS.abismo}`
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontWeight: 700,
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          {step.step}
                        </div>
                        <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "2px" }}>
                          {step.action}
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {step.people}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* REVENUE PROJECTION */}
            <div
              style={{
                background: COLORS.abismo,
                border: `6px solid ${COLORS.abismo}`,
                padding: "24px",
                color: COLORS.lienzo,
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: COLORS.forja,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: COLORS.friccion }}>{">"}_</span>{" "}
                PROYECCIÓN DE REVENUE
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {[
                  {
                    label: "Conservador (2 cierres)",
                    amount: "$6-10K",
                    desc: "2 retainers de $3-5K/mes",
                  },
                  {
                    label: "Optimista (3 cierres)",
                    amount: "$15-24K",
                    desc: "Mix de retainers + proyectos",
                  },
                  {
                    label: "Valor de pipeline",
                    amount: "$30-50K",
                    desc: "5-7 propuestas activas en 30 días",
                  },
                ].map((proj, i) => (
                  <div key={i} style={{ flex: "1 1 200px" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        opacity: 0.6,
                        marginBottom: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {proj.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "28px",
                        fontWeight: 700,
                        color: COLORS.forja,
                      }}
                    >
                      {proj.amount}
                    </div>
                    <div style={{ fontSize: "11px", opacity: 0.5 }}>
                      {proj.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OFFERS */}
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              OFERTAS MAPEADAS A CLUSTERS DE DOLOR
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                {
                  name: "Growth Engine Setup",
                  target: "Nivel 0-1 (sin proceso)",
                  price: "$5-8K proyecto",
                  includes:
                    "CRM setup + pipeline + automatizaciones + 3 meses de acompañamiento",
                },
                {
                  name: "Growth Stack LATAM",
                  target: "Nivel 1-2 (en construcción)",
                  price: "$3-5K/mes retainer",
                  includes:
                    "Data lake + contenido + nurturing + dashboard + optimización mensual",
                },
                {
                  name: "Scale Ops Audit",
                  target: "Nivel 2-3 (escalando)",
                  price: "$8-15K proyecto",
                  includes:
                    "Diagnóstico de cuellos de botella + automatización de top 3 procesos + IA aplicada",
                },
              ].map((offer, i) => (
                <div
                  key={i}
                  style={{
                    border: `3px solid ${COLORS.abismo}`,
                    padding: "16px",
                    background: COLORS.white,
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: "1 1 200px" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        marginBottom: "2px",
                      }}
                    >
                      {offer.name}
                    </div>
                    <div style={{ fontSize: "11px", opacity: 0.6 }}>
                      {offer.target}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: COLORS.friccion,
                      flexShrink: 0,
                    }}
                  >
                    {offer.price}
                  </div>
                  <div style={{ width: "100%", fontSize: "11px", opacity: 0.7 }}>
                    Incluye: {offer.includes}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA REMINDER */}
            <div
              style={{
                marginTop: "24px",
                background: COLORS.forja,
                border: `6px solid ${COLORS.abismo}`,
                boxShadow: `8px 8px 0px 0px ${COLORS.abismo}`,
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                ⚡ CTA PARA LA SESIÓN
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                "Si lo que hablamos hoy les hizo click — les ofrezco 30 minutos
                de diagnóstico gratuito donde miramos SU caso específico y les
                doy un plan de acción concreto. No les voy a vender nada en esa
                llamada. Si después de eso quieren que les ayudemos a
                implementar, hablamos. Pero el diagnóstico es suyo, gratis, y
                se van con un plan. ¿Quién quiere?"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
