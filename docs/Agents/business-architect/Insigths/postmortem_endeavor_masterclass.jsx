import { useState } from "react";

const COLORS = {
  abismo: "#0A0A0A",
  lienzo: "#F4F4F0",
  forja: "#FFD826",
  friccion: "#FF5C23",
  white: "#FFFFFF",
  green: "#27AE60",
  blue: "#3988FF",
  red: "#E74C3C",
  purple: "#9B59B6",
};

const tabs = [
  { id: "scorecard", label: ">_ SCORECARD" },
  { id: "moments", label: ">_ MOMENTOS" },
  { id: "content", label: ">_ CONTENIDO" },
  { id: "patterns", label: ">_ PATRONES" },
  { id: "next", label: ">_ NEXT" },
];

function ScoreBar({ label, score, max = 10, color }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>{label}</span>
        <span style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "'Oswald', sans-serif", color }}>{score}/{max}</span>
      </div>
      <div style={{ background: "#E0E0E0", height: "12px", border: `2px solid ${COLORS.abismo}` }}>
        <div style={{ width: `${(score / max) * 100}%`, height: "100%", background: color }} />
      </div>
    </div>
  );
}

function Tag({ text, color = COLORS.forja }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", fontSize: "10px", fontWeight: "bold",
      background: color, border: `2px solid ${COLORS.abismo}`, marginRight: "6px", marginBottom: "4px",
      fontFamily: "'Space Mono', monospace", textTransform: "uppercase",
    }}>{text}</span>
  );
}

const dimensions = [
  { label: "Dominio del tema", score: 9, color: COLORS.green, note: "Fluyes con autoridad natural. Los ejemplos de Finkargo, Vozy, y el cliente de $10M son concretos y creíbles." },
  { label: "Engagement / Interacción", score: 9, color: COLORS.green, note: "Pediste emojis, levantamanos, respuestas en chat constantemente. Hiciste diagnóstico en vivo con Tecus, Angie, Evidensign, Cristian. La audiencia participó." },
  { label: "Estructura narrativa", score: 6, color: COLORS.forja, note: "El framework PULSO estaba ahí pero no lo anclaste explícitamente. La audiencia no sabe que están en un framework — sienten una conversación fluida, pero pierden el hilo conductor." },
  { label: "Gestión del tiempo", score: 5, color: COLORS.friccion, note: "2 horas y dejaste cosas sin cerrar. Jaime se comió ~7 min con una tangente de robots y población envejeciendo. William de Evidensign se extendió. No cortaste a tiempo." },
  { label: "Claridad del CTA", score: 4, color: COLORS.red, note: "NO hubo CTA de cierre. No ofreciste diagnóstico gratuito, no dejaste link de booking, no hubo 'next step' claro. La sesión terminó con '5 acciones' pero sin puente hacia ti." },
  { label: "Posicionamiento personal", score: 7, color: COLORS.green, note: "El momento del brief en vivo fue BRUTAL — mostraste que en 20 min con IA analizaste sus 105 respuestas. Pero te presentaste como 'Hay Huevos', no como KAI Partners. Nombre confuso." },
  { label: "Uso de datos / pruebas", score: 8, color: COLORS.green, note: "Tasas de conversión, 60% apertura memes, 45-50% mejora con lead magnets, $650M en créditos, 15-20 follow ups en B2B. Números concretos = credibilidad." },
  { label: "Vulnerabilidad / autenticidad", score: 8, color: COLORS.green, note: "'No soy experto en absolutamente nada, me he equivocado demasiadas veces.' 'Mis matemáticas son bastante malas.' 'Mi papá de 78 años habla más con IA que conmigo.' Puro Danny." },
  { label: "Manejo de tangentes", score: 5, color: COLORS.friccion, note: "Dejaste que Jaime y William se extendieran demasiado. Cuando Angie no pudo explicar su producto, la diagnosticaste en vivo — brillante. Pero después perdiste ritmo." },
  { label: "Energía / presencia", score: 8, color: COLORS.green, note: "Arrancaste pidiendo aplausos, emojis, cámaras. Usaste humor ('no estoy hablando de vainas muy técnicas, porfa escriban'). La queja de cámaras apagadas = genuino. Muy Danny." },
];

const goldMoments = [
  {
    time: "~44:00",
    title: "EL BRIEF EN VIVO",
    what: "Mostraste que en 20 minutos, con IA, analizaste las 105 respuestas de la audiencia y cambiaste toda tu presentación. Luego mostraste los clusters de dolor de ELLOS.",
    why: "Este es tu momento de mayor autoridad en toda la sesión. La audiencia vio en tiempo real lo que la IA puede hacer cuando alguien sabe usarla. Es enrollment puro.",
    content: "POST: 'Me dieron 105 respuestas 20 minutos antes de una masterclass. Esto es lo que encontré.' → Mostrar el análisis + framework. REEL: Screen recording de cómo lo hiciste.",
    tags: ["authority", "ia-aplicada", "wow-factor"],
  },
  {
    time: "~24:00",
    title: "TECUS: ROMPER LA OFERTA",
    what: "Samuel de Tecus explicó su modelo de 30 días gratis y diagnosticaste en vivo por qué funciona: reduce fricción, cubre CAC, y escala la primera conversión.",
    why: "Ejemplo perfecto de 'enseñar haciendo'. La audiencia vio cómo piensas, no solo qué sabes. Y Samuel quedó agradecido — posible referido o caso de estudio.",
    content: "POST: '¿Por qué regalar tu producto 30 días puede ser la mejor inversión comercial que hagas?' → Case study Tecus. CARRUSEL: 3 niveles de oferta (gratis → asequible → premium).",
    tags: ["case-study", "oferta", "b2b-sales"],
  },
  {
    time: "~18:00",
    title: "MEMES DE WIN-BACK: 60% APERTURA",
    what: "Contaste que con 3 memes enviados por email lograron 60% apertura y 70% respuesta vs. los correos genéricos del equipo de ventas.",
    why: "Dato memorable, contraintuitivo. La gente recuerda '60% con memes' mucho después de la sesión.",
    content: "POST: 'Mis mejores emails de ventas no tenían pitch. Tenían memes.' → Números + por qué funciona (humanizar la venta). THREAD: 'Los 3 tipos de email que nadie abre vs. los 3 que todos abren.'",
    tags: ["datos", "contrarian", "email-marketing"],
  },
  {
    time: "~1:10:00",
    title: "ANGIE: EL DIAGNÓSTICO EN VIVO",
    what: "Le pediste a Angie que explicara su producto. No pudo hacerlo claro. Le dijiste 'con todo el amor, no te entendí — tienes un problema de posicionamiento.'",
    why: "Momento incómodo pero REAL. Todos en la audiencia se preguntaron: '¿Yo podría explicar mi producto en 2 oraciones?' Es un espejo brutal.",
    content: "POST (vulnerable): 'Le pedí a una founder que me explicara su producto. No pude entenderla. Y le dije la verdad — con amor.' → Lección sobre clarity kills. REEL: 'Si no puedes explicar tu producto en 2 oraciones, este es tu problema #1.'",
    tags: ["vulnerability", "positioning", "founder-truth"],
  },
  {
    time: "~1:48:00",
    title: "15-20 FOLLOW UPS EN B2B",
    what: "Preguntaste cuántos follow-ups hacen. Respondieron 3-5. Revelaste que la media B2B es 15-20. 'Hasta que lo manden a comer mierda, no deje de hacerlo.'",
    why: "Dato que cambia comportamiento. Es concreto, medible, y la mayoría no lo sabe. El lenguaje directo ancla la memoria.",
    content: "POST: 'Le pregunté a 30 founders cuántos follow-ups hacen. Dijeron 3. La media en B2B es 15-20.' → Framework de secuencia post-reunión. REEL: 'Tus prospectos no te rechazan. Se les olvida que existes.'",
    tags: ["datos", "b2b-sales", "pattern-interrupt"],
  },
  {
    time: "~33:00",
    title: "FINKARGO: X/TWITTER PARA IMPORTADORES",
    what: "Contaste que 15-20% del revenue de Finkargo venía de marketing, y de ese, 20% venía de X porque los importadores estaban ahí peleándole a la DIAN.",
    why: "Ejemplo contra-intuitivo de selección de canal. No eligieron X por moda, sino por data de dónde estaban sus usuarios.",
    content: "POST: 'No elijas tu canal de marketing por lo que hacen todos. Elegilo por donde están TUS clientes.' → Historia Finkargo + cómo descubrieron X. THREAD: 'Cómo encontrar el canal que nadie está usando para tu ICP.'",
    tags: ["contrarian", "channel-strategy", "datos"],
  },
  {
    time: "~1:30:00",
    title: "ICP EN VIVO CON CRISTIAN/DIDACTICAL",
    what: "Le preguntaste revenue ($1.500M/año), ciclos de venta (60-90 días), stakeholders (6-7), implementación (2 meses). Calculaste: 'Tu ciclo de caja son 5-6 meses.' Luego construiste el ICP en vivo.",
    why: "La audiencia vio el framework aplicado. No fue teoría — fue cirugía en directo. Cristian salió con un ICP estructurado.",
    content: "POST: 'Le hice 5 preguntas a un founder. En 3 minutos tenía su ICP definido. Estas son las preguntas.' → Framework de 5 criterios. CARRUSEL: 'Define tu ICP en 5 preguntas.'",
    tags: ["framework", "icp", "live-diagnosis"],
  },
];

const contentPlan = [
  {
    week: "SEMANA 1",
    pieces: [
      { type: "LinkedIn Post", title: "105 respuestas en 20 min: lo que la IA reveló sobre 30 startups", hook: "Contrarian", source: "Brief en vivo" },
      { type: "Reel/TikTok", title: "Si no puedes explicar tu producto en 2 oraciones...", hook: "Pattern Interrupt", source: "Momento Angie" },
      { type: "Carrusel", title: "Los 3 niveles de oferta que toda startup necesita", hook: "Educational", source: "Tecus breakdown" },
    ],
  },
  {
    week: "SEMANA 2",
    pieces: [
      { type: "LinkedIn Post", title: "Mis mejores emails de ventas tenían memes, no pitch", hook: "Confession", source: "Win-back 60%" },
      { type: "Reel/TikTok", title: "Tus prospectos no te rechazan. Se les olvida que existes.", hook: "Pattern Interrupt", source: "15-20 follow-ups" },
      { type: "Newsletter", title: "El framework PULSO para diagnosticar tu funnel en 15 min", hook: "Value-first", source: "Framework completo" },
    ],
  },
  {
    week: "SEMANA 3",
    pieces: [
      { type: "LinkedIn Post", title: "Le pregunté a 30 founders dónde vendían. 80% no tenía proceso.", hook: "Question", source: "Datos de audiencia" },
      { type: "Thread/Carrusel", title: "Cómo definir tu ICP en 5 preguntas (con ejemplo real)", hook: "Educational", source: "Cristian/Didactical" },
      { type: "Reel/TikTok", title: "No elijas tu canal por moda. Elegilo por data.", hook: "Contrarian", source: "Finkargo X/Twitter" },
    ],
  },
  {
    week: "SEMANA 4",
    pieces: [
      { type: "LinkedIn Post", title: "Mi papá tiene 78 años y usa IA mejor que la mayoría de founders", hook: "Philosophical", source: "Anécdota papá" },
      { type: "Video largo", title: "Masterclass condensada: De ventas oportunistas a crecimiento sistemático (20 min editado)", hook: "Authority", source: "Sesión completa" },
      { type: "Lead Magnet", title: "Guía de prompts para diagnosticar tu funnel comercial con IA", hook: "Value exchange", source: "Promesa de sesión" },
    ],
  },
];

const patterns = [
  {
    label: "LO QUE HICISTE MUY BIEN",
    color: COLORS.green,
    items: [
      "Enrollment puro: pediste cámaras, emojis, respuestas. No diste una charla — creaste una conversación.",
      "Diagnóstico en vivo: Tecus, Angie, Evidensign, Cristian. Cada uno fue un mini-case que la audiencia pudo ver aplicado.",
      "El brief moment: mostrar que analizaste sus respuestas con IA en 20 min fue el WOW factor de la sesión.",
      "Vulnerabilidad calibrada: 'no soy experto en nada', 'mis matemáticas son malas', 'aprendí a las malas'. Sin caer en falsa humildad.",
      "Datos concretos en cada punto: $650M, 60% apertura, 45-50% conversión, 15-20 follow-ups. Números = credibilidad.",
      "Paisa auténtico: 'comer mierda', 'métale candela', 'chimba'. Tu voz es tu marca.",
    ],
  },
  {
    label: "LO QUE TE COSTÓ",
    color: COLORS.friccion,
    items: [
      "Jaime se comió ~7 min con tangente de robots + población envejeciendo. Necesitabas cortar a los 2 min. 'Gran punto, Jaime — lo dejamos para el Q&A y seguimos.'",
      "William de Evidensign se extendió explicando su negocio. Interrumpir con amor: 'William, te tengo — déjame hacerte UNA pregunta específica.'",
      "El framework PULSO no quedó explícito. La audiencia no sabe que estaban recorriendo un sistema. Anclar: 'Estamos en el paso 3 de PULSO: el LOGRO.'",
      "No hubo CTA de cierre. Terminaste con '5 acciones' pero no dijiste: 'Si quieren profundizar, tengo 5 espacios de diagnóstico gratis.'",
      "Te presentaste como 'Hay Huevos' — no como KAI Partners. Confusión de marca en un espacio donde había prospectos reales.",
      "La sesión duró 2 horas exactas. Para la densidad de lo que cubriste, 90 min hubieran sido más impactantes.",
    ],
  },
  {
    label: "PATRONES DANNY (de tu framework)",
    color: COLORS.purple,
    items: [
      "SCOPE SPIRAL activado: pasaste de funnel → IA → CRM → TikTok → robots.txt → ICP → contenido → newsletter. Cubriste TODO. La profundidad sufrió por la amplitud.",
      "SOLO HERO presente: tú llevaste el 95% de la sesión. Felipe apenas habló. No hubo co-facilitación ni moderación de preguntas.",
      "ARCHITECTURE ESCAPE potencial: mostraste herramientas y prompts (el cómo) más que el resultado de negocio (el para qué). Cuidado con enamorarte del sistema.",
      "Being Liked activo: cuando Jaime y William se extendieron, no cortaste. El costo fue tiempo y ritmo de la audiencia que SÍ estaba enganchada.",
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("scorecard");
  const [expandedMoment, setExpandedMoment] = useState(null);

  const avgScore = (dimensions.reduce((a, d) => a + d.score, 0) / dimensions.length).toFixed(1);

  return (
    <div style={{ fontFamily: "'Space Mono', monospace", background: COLORS.lienzo, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{ background: COLORS.abismo, padding: "20px 24px", borderBottom: `6px solid ${COLORS.forja}` }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, color: COLORS.forja, letterSpacing: "2px", textTransform: "uppercase" }}>
          POST-MORTEM: MASTERCLASS ENDEAVOR
        </div>
        <div style={{ color: COLORS.lienzo, fontSize: "12px", marginTop: "4px", opacity: 0.7 }}>
          <span style={{ color: COLORS.friccion }}>{">"}_</span> 2h · 30+ asistentes · Embudo de Crecimiento, Marketing, IA
        </div>
      </div>

      {/* TABS */}
      <div style={{ display: "flex", borderBottom: `6px solid ${COLORS.abismo}`, overflow: "auto" }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            fontFamily: "'Space Mono', monospace", fontSize: "12px", fontWeight: "bold", padding: "12px 16px",
            background: activeTab === tab.id ? COLORS.forja : COLORS.lienzo, color: COLORS.abismo,
            border: "none", borderRight: `3px solid ${COLORS.abismo}`, cursor: "pointer",
            textTransform: "uppercase", whiteSpace: "nowrap",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ padding: "20px 24px", maxWidth: "900px" }}>

        {/* SCORECARD */}
        {activeTab === "scorecard" && (
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>SCORECARD MULTIDIMENSIONAL</h2>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "32px", fontWeight: 700, color: COLORS.friccion }}>{avgScore}<span style={{ fontSize: "16px", opacity: 0.5 }}>/10</span></div>
            </div>

            {/* VERDICT BOX */}
            <div style={{ background: COLORS.forja, border: `6px solid ${COLORS.abismo}`, boxShadow: `8px 8px 0px 0px ${COLORS.abismo}`, padding: "20px", marginBottom: "24px" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                <span style={{ color: COLORS.friccion }}>{">"}_</span> VEREDICTO
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                <strong>Fue una sesión de autoridad genuina con engagement alto, pero sin cierre comercial.</strong> Diste una masterclass que posiciona — pero no cosecha. El 80% fue excelente: datos reales, diagnósticos en vivo, vulnerabilidad calibrada, tu voz auténtica. El 20% que faltó: estructura visible del framework, gestión de tiempo en preguntas, y sobre todo un CTA que convirtiera esa energía en pipeline. Hiciste enrollment pero no cerraste la puerta del funnel.
              </p>
            </div>

            {dimensions.map((d, i) => (
              <div key={i} style={{ marginBottom: "4px" }}>
                <ScoreBar label={d.label} score={d.score} color={d.color} />
                <p style={{ fontSize: "11px", lineHeight: 1.5, margin: "0 0 12px 0", opacity: 0.7, paddingLeft: "4px" }}>{d.note}</p>
              </div>
            ))}
          </div>
        )}

        {/* MOMENTS */}
        {activeTab === "moments" && (
          <div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, margin: "0 0 8px 0", textTransform: "uppercase" }}>7 MOMENTOS DE ORO</h2>
            <p style={{ fontSize: "12px", lineHeight: 1.5, margin: "0 0 16px 0", opacity: 0.7 }}>Cada momento = al menos 3 piezas de contenido. Click para expandir.</p>

            {goldMoments.map((m, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <button onClick={() => setExpandedMoment(expandedMoment === i ? null : i)} style={{
                  width: "100%", textAlign: "left", fontFamily: "'Space Mono', monospace",
                  background: expandedMoment === i ? COLORS.abismo : COLORS.white,
                  color: expandedMoment === i ? COLORS.forja : COLORS.abismo,
                  border: `4px solid ${COLORS.abismo}`,
                  boxShadow: expandedMoment === i ? "none" : `6px 6px 0px 0px ${COLORS.abismo}`,
                  padding: "14px 16px", cursor: "pointer",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "11px", opacity: 0.5, fontWeight: "bold", flexShrink: 0 }}>{m.time}</span>
                    <span style={{ fontWeight: "bold", fontSize: "13px", textTransform: "uppercase" }}>{m.title}</span>
                  </div>
                </button>
                {expandedMoment === i && (
                  <div style={{ border: `4px solid ${COLORS.abismo}`, borderTop: "none", padding: "16px", background: COLORS.white }}>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: "bold", color: COLORS.friccion, marginBottom: "4px", textTransform: "uppercase" }}>Qué pasó:</div>
                      <p style={{ fontSize: "12px", lineHeight: 1.5, margin: 0 }}>{m.what}</p>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: "bold", color: COLORS.friccion, marginBottom: "4px", textTransform: "uppercase" }}>Por qué importa:</div>
                      <p style={{ fontSize: "12px", lineHeight: 1.5, margin: 0 }}>{m.why}</p>
                    </div>
                    <div style={{ background: COLORS.forja, border: `3px solid ${COLORS.abismo}`, padding: "12px" }}>
                      <div style={{ fontSize: "11px", fontWeight: "bold", marginBottom: "4px", textTransform: "uppercase" }}>💡 CONTENIDO EXTRAÍBLE:</div>
                      <p style={{ fontSize: "12px", lineHeight: 1.5, margin: 0 }}>{m.content}</p>
                    </div>
                    <div style={{ marginTop: "8px" }}>{m.tags.map((t, j) => <Tag key={j} text={t} />)}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CONTENT PLAN */}
        {activeTab === "content" && (
          <div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, margin: "0 0 8px 0", textTransform: "uppercase" }}>CALENDARIO DE CONTENIDO: 4 SEMANAS</h2>
            <p style={{ fontSize: "12px", lineHeight: 1.5, margin: "0 0 4px 0", opacity: 0.7 }}>12 piezas extraídas directamente de la sesión. Todo basado en momentos reales, no inventado.</p>
            <p style={{ fontSize: "11px", lineHeight: 1.5, margin: "0 0 20px 0", color: COLORS.friccion, fontWeight: "bold" }}>
              Producción mínima: 1 post + 1 reel + 1 pieza complementaria por semana. Total: ~12 piezas de 2 horas de sesión.
            </p>

            {contentPlan.map((week, wi) => (
              <div key={wi} style={{ marginBottom: "20px" }}>
                <div style={{
                  fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700,
                  background: COLORS.abismo, color: COLORS.forja, padding: "10px 16px",
                  textTransform: "uppercase", letterSpacing: "1px",
                }}>{week.week}</div>
                {week.pieces.map((piece, pi) => (
                  <div key={pi} style={{
                    border: `3px solid ${COLORS.abismo}`, borderTop: "none", padding: "12px 16px",
                    background: COLORS.white, display: "flex", gap: "12px", alignItems: "flex-start", flexWrap: "wrap",
                  }}>
                    <Tag text={piece.type} color={piece.type.includes("Reel") ? COLORS.friccion : piece.type.includes("Newsletter") || piece.type.includes("Lead") ? COLORS.blue : COLORS.forja} />
                    <div style={{ flex: 1, minWidth: "200px" }}>
                      <div style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "2px" }}>{piece.title}</div>
                      <div style={{ fontSize: "10px", opacity: 0.6 }}>Hook: {piece.hook} · Fuente: {piece.source}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* BONUS CONTENT */}
            <div style={{ background: COLORS.forja, border: `6px solid ${COLORS.abismo}`, boxShadow: `8px 8px 0px 0px ${COLORS.abismo}`, padding: "16px", marginTop: "12px" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" }}>
                ⚡ BONUS: CONTENIDO EVERGREEN DE ESTA SESIÓN
              </div>
              <div style={{ fontSize: "12px", lineHeight: 1.7 }}>
                <strong>1. Video editado (20 min)</strong> — Cortar los mejores momentos de la sesión de 2h en un video de alto impacto para YouTube/LinkedIn.<br/>
                <strong>2. Lead Magnet</strong> — "Guía de prompts para diagnosticar tu funnel con IA" (lo prometiste en la sesión, entrégalo).<br/>
                <strong>3. Case Study PDF</strong> — "Cómo analizamos 105 startups en 20 minutos" — documenta el proceso del brief.<br/>
                <strong>4. Mini-curso</strong> — Las 5 acciones de cierre convertidas en un email sequence de 5 días.
              </div>
            </div>
          </div>
        )}

        {/* PATTERNS */}
        {activeTab === "patterns" && (
          <div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, margin: "0 0 16px 0", textTransform: "uppercase" }}>ANÁLISIS DE PATRONES</h2>

            {patterns.map((section, si) => (
              <div key={si} style={{ marginBottom: "20px" }}>
                <div style={{
                  fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 700,
                  background: section.color, color: section.color === COLORS.purple ? COLORS.white : COLORS.abismo,
                  padding: "10px 16px", border: `4px solid ${COLORS.abismo}`, textTransform: "uppercase",
                }}>{section.label}</div>
                <div style={{ border: `4px solid ${COLORS.abismo}`, borderTop: "none", background: COLORS.white }}>
                  {section.items.map((item, ii) => (
                    <div key={ii} style={{
                      padding: "10px 16px", fontSize: "12px", lineHeight: 1.6,
                      borderBottom: ii < section.items.length - 1 ? `1px solid ${COLORS.abismo}22` : "none",
                    }}>
                      <span style={{ color: section.color, fontWeight: "bold" }}>→</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NEXT STEPS */}
        {activeTab === "next" && (
          <div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, margin: "0 0 16px 0", textTransform: "uppercase" }}>ACCIONES POST-SESIÓN</h2>

            {/* URGENT */}
            <div style={{ background: COLORS.friccion, border: `6px solid ${COLORS.abismo}`, padding: "16px", marginBottom: "16px", color: COLORS.white }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>🔴 URGENTE (PRÓXIMAS 48H)</div>
              <div style={{ fontSize: "13px", lineHeight: 1.8 }}>
                <strong>1.</strong> Manda la guía de prompts que prometiste. NO entregarla = romper tu palabra. Broken Agreement Protocol.<br/>
                <strong>2.</strong> Pídele a Felipe que mande un email a todos los asistentes con: grabación + un link para agendar diagnóstico gratis de 30 min contigo.<br/>
                <strong>3.</strong> Publica MAÑANA el primer post de LinkedIn sobre la sesión. El hierro está caliente.
              </div>
            </div>

            {/* THIS WEEK */}
            <div style={{ background: COLORS.forja, border: `6px solid ${COLORS.abismo}`, boxShadow: `8px 8px 0px 0px ${COLORS.abismo}`, padding: "16px", marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>🟡 ESTA SEMANA</div>
              <div style={{ fontSize: "13px", lineHeight: 1.8 }}>
                <strong>4.</strong> Cortar video: usa Opus Pro para sacar 10-15 clips de los mejores momentos. El de Angie, el brief, los follow-ups.<br/>
                <strong>5.</strong> Mandar mensaje personalizado a los 5-7 founders que más participaron: Samuel (Tecus), Hernán (Quartam), Cristian (Didactical), Andrés (MedVision), William/Guillermo (Evidensign).<br/>
                <strong>6.</strong> Documentar el caso del brief como proceso replicable para KAI Partners: "Audience Intelligence in 20 min" — esto es un servicio vendible.
              </div>
            </div>

            {/* STRATEGIC */}
            <div style={{ background: COLORS.white, border: `6px solid ${COLORS.abismo}`, padding: "16px", marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>🔵 ESTRATÉGICO (PRÓXIMAS 4 SEMANAS)</div>
              <div style={{ fontSize: "13px", lineHeight: 1.8 }}>
                <strong>7.</strong> Ejecutar el calendario de contenido de 12 piezas (pestaña CONTENIDO). No improvises — ya está minado.<br/>
                <strong>8.</strong> Habla con Felipe sobre hacer una segunda sesión (follow-up): "Cómo implementar lo que aprendimos." Esa segunda sesión es donde cierras.<br/>
                <strong>9.</strong> El lead magnet de prompts + el caso del brief = los primeros 2 assets del growth engine de KAI Partners.<br/>
                <strong>10.</strong> Cada persona que agendé diagnóstico → propuesta de Growth Engine Setup ($5-8K) o Growth Stack ($3-5K/mes).
              </div>
            </div>

            {/* THE MIRROR */}
            <div style={{ background: COLORS.abismo, border: `6px solid ${COLORS.abismo}`, padding: "20px", color: COLORS.lienzo }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, color: COLORS.forja, marginBottom: "10px" }}>
                <span style={{ color: COLORS.friccion }}>{">"}_</span> EL ESPEJO
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                Acabas de demostrar, en vivo, frente a 30+ founders, que puedes analizar 105 respuestas con IA en 20 minutos, diagnosticar empresas en tiempo real, y enseñar frameworks que generan valor inmediato.
                <br/><br/>
                Y no dejaste un solo link para que alguien te contrate.
                <br/><br/>
                Eso es <strong>Being Liked</strong> ganándole a <strong>revenue</strong>. Diste todo sin pedir nada. Generoso — sí. Pero no sostenible. La próxima sesión, el CTA no es opcional. Es la diferencia entre ser mentor gratis y ser CEO de KAI Partners.
                <br/><br/>
                <span style={{ color: COLORS.forja, fontWeight: "bold" }}>"I am a trustworthy, creative, abundant leader."</span>
                <br/>
                Abundant leaders close. Hoy demostraste creative y trustworthy. Falta abundant.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
