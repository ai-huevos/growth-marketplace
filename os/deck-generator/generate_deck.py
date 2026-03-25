#!/usr/bin/env python3
"""
G3 Logística Board Deck Generator
Brand system: KAI Partners — "The Hacked Stamp" (Neo-Brutalist Tech)
Framework: Andy Raskin — 5 Strategic Moves
Output: .pptx (16:9)
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
import os

# ─── Brand Tokens ───────────────────────────────────────────────
ABISMO   = RGBColor(0x0A, 0x0A, 0x0A)
LIENZO   = RGBColor(0xF4, 0xF4, 0xF0)
FORJA    = RGBColor(0xFF, 0xD8, 0x26)
FRICCION = RGBColor(0xFF, 0x5C, 0x23)
WHITE    = RGBColor(0xFF, 0xFF, 0xFF)

FONT_DISPLAY = "Oswald"
FONT_MONO    = "Space Mono"

SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)
BORDER  = Pt(4.5)  # 6px equiv at 72dpi ≈ 4.5pt
SHADOW_OFFSET = Inches(0.1)

# ─── Helpers ────────────────────────────────────────────────────

def set_slide_bg(slide, color):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_shape(slide, left, top, width, height, fill_color=None,
              border_color=None, border_width=None):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.rotation = 0.0
    sf = shape.fill
    if fill_color:
        sf.solid()
        sf.fore_color.rgb = fill_color
    else:
        sf.background()
    ln = shape.line
    if border_color:
        ln.color.rgb = border_color
        ln.width = border_width or BORDER
    else:
        ln.fill.background()
    return shape


def brutal_box(slide, left, top, width, height, fill_color=WHITE,
               border_color=ABISMO, shadow=True):
    """Neo-brutalist box: solid fill + thick border + offset block shadow."""
    shapes = []
    if shadow:
        shd = add_shape(slide, left + SHADOW_OFFSET, top + SHADOW_OFFSET,
                        width, height, fill_color=ABISMO)
        shapes.append(shd)
    box = add_shape(slide, left, top, width, height,
                    fill_color=fill_color, border_color=border_color)
    shapes.append(box)
    return box


def add_text_box(slide, left, top, width, height, text, font_name=FONT_MONO,
                 font_size=Pt(14), font_color=ABISMO, bold=False,
                 alignment=PP_ALIGN.LEFT, word_wrap=True):
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = word_wrap
    p = tf.paragraphs[0]
    p.text = text
    p.font.name = font_name
    p.font.size = font_size
    p.font.color.rgb = font_color
    p.font.bold = bold
    p.alignment = alignment
    return txBox


def add_paragraph(text_frame, text, font_name=FONT_MONO, font_size=Pt(14),
                  font_color=ABISMO, bold=False, alignment=PP_ALIGN.LEFT,
                  space_before=Pt(6), space_after=Pt(2)):
    p = text_frame.add_paragraph()
    p.text = text
    p.font.name = font_name
    p.font.size = font_size
    p.font.color.rgb = font_color
    p.font.bold = bold
    p.alignment = alignment
    p.space_before = space_before
    p.space_after = space_after
    return p


def set_speaker_notes(slide, text):
    notes_slide = slide.notes_slide
    tf = notes_slide.notes_text_frame
    tf.text = text


def add_terminal_tag(slide, left, top, text=">_KAI", size=Pt(18)):
    """The >_ prompt in Fricción Orange + KAI in Abismo."""
    txBox = slide.shapes.add_textbox(left, top, Inches(3), Inches(0.5))
    tf = txBox.text_frame
    p = tf.paragraphs[0]
    # >_ in orange
    run1 = p.add_run()
    run1.text = ">_"
    run1.font.name = FONT_MONO
    run1.font.size = size
    run1.font.color.rgb = FRICCION
    run1.font.bold = True
    # rest in black
    run2 = p.add_run()
    run2.text = text.replace(">_", "")
    run2.font.name = FONT_MONO
    run2.font.size = size
    run2.font.color.rgb = ABISMO
    run2.font.bold = True
    return txBox


def add_headline(slide, text, top=Inches(0.4), left=Inches(0.8),
                 width=Inches(11.5), font_size=Pt(36), color=ABISMO):
    return add_text_box(slide, left, top, width, Inches(0.8), text,
                        font_name=FONT_DISPLAY, font_size=font_size,
                        font_color=color, bold=True, alignment=PP_ALIGN.LEFT)


def add_raskin_tag(slide, move_text, top=Inches(0.15)):
    """Small tag showing which Raskin Move this slide maps to."""
    box = brutal_box(slide, Inches(0.8), top, Inches(3.2), Inches(0.35),
                     fill_color=FORJA, shadow=False)
    tf = box.text_frame
    tf.word_wrap = False
    p = tf.paragraphs[0]
    p.text = move_text
    p.font.name = FONT_MONO
    p.font.size = Pt(10)
    p.font.color.rgb = ABISMO
    p.font.bold = True
    p.alignment = PP_ALIGN.CENTER


def add_quote_box(slide, text, attribution, left, top, width, height):
    """Highlighted quote from discovery call."""
    box = brutal_box(slide, left, top, width, height, fill_color=FORJA)
    tf = box.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0.2)
    tf.margin_right = Inches(0.2)
    tf.margin_top = Inches(0.15)
    p = tf.paragraphs[0]
    run = p.add_run()
    run.text = f'"{text}"'
    run.font.name = FONT_MONO
    run.font.size = Pt(12)
    run.font.color.rgb = ABISMO
    run.font.italic = True
    p2 = tf.add_paragraph()
    p2.text = f"— {attribution}"
    p2.font.name = FONT_MONO
    p2.font.size = Pt(10)
    p2.font.color.rgb = ABISMO
    p2.font.bold = True
    p2.space_before = Pt(6)


def build_table(slide, left, top, width, rows_data, col_widths=None):
    """Build a branded table. rows_data = list of lists, first row = header."""
    rows = len(rows_data)
    cols = len(rows_data[0])
    table_shape = slide.shapes.add_table(rows, cols, left, top, width,
                                         Inches(0.4 * rows))
    table = table_shape.table

    if col_widths:
        for i, w in enumerate(col_widths):
            table.columns[i].width = w

    for r, row_data in enumerate(rows_data):
        for c, cell_text in enumerate(row_data):
            cell = table.cell(r, c)
            cell.text = cell_text

            for paragraph in cell.text_frame.paragraphs:
                paragraph.font.name = FONT_MONO
                paragraph.font.size = Pt(11)
                paragraph.font.color.rgb = ABISMO if r > 0 else ABISMO

            # Header row styling
            if r == 0:
                cell.fill.solid()
                cell.fill.fore_color.rgb = FORJA
                for paragraph in cell.text_frame.paragraphs:
                    paragraph.font.bold = True
                    paragraph.font.size = Pt(12)
            else:
                cell.fill.solid()
                cell.fill.fore_color.rgb = WHITE if r % 2 == 1 else LIENZO

    return table_shape


def add_icon_card(slide, left, top, width, height, icon, title, body,
                  fill=WHITE):
    """Card with icon emoji, title, and body text."""
    box = brutal_box(slide, left, top, width, height, fill_color=fill)
    tf = box.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0.15)
    tf.margin_right = Inches(0.15)
    tf.margin_top = Inches(0.1)

    p = tf.paragraphs[0]
    run = p.add_run()
    run.text = f"{icon} {title}"
    run.font.name = FONT_MONO
    run.font.size = Pt(12)
    run.font.color.rgb = ABISMO
    run.font.bold = True

    p2 = tf.add_paragraph()
    p2.text = body
    p2.font.name = FONT_MONO
    p2.font.size = Pt(10)
    p2.font.color.rgb = ABISMO
    p2.space_before = Pt(4)


def add_bullet_list(slide, left, top, width, height, items, font_size=Pt(13),
                    color=ABISMO, icon="⚡"):
    """Bulleted list with custom icon prefix."""
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = True

    for i, item in enumerate(items):
        if i == 0:
            p = tf.paragraphs[0]
        else:
            p = tf.add_paragraph()
        p.text = f"{icon} {item}"
        p.font.name = FONT_MONO
        p.font.size = font_size
        p.font.color.rgb = color
        p.space_before = Pt(8)
        p.space_after = Pt(2)

    return txBox


def add_phase_block(slide, left, top, width, phase_num, title, items):
    """Vertical phase block for methodology slide."""
    # Header
    hdr = brutal_box(slide, left, top, width, Inches(0.45), fill_color=FORJA)
    tf = hdr.text_frame
    tf.word_wrap = False
    tf.margin_left = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = f"FASE {phase_num}: {title}"
    p.font.name = FONT_DISPLAY
    p.font.size = Pt(16)
    p.font.color.rgb = ABISMO
    p.font.bold = True
    p.alignment = PP_ALIGN.CENTER

    # Body
    body = brutal_box(slide, left, top + Inches(0.45), width, Inches(2.0),
                      fill_color=WHITE, shadow=False)
    tf2 = body.text_frame
    tf2.word_wrap = True
    tf2.margin_left = Inches(0.12)
    tf2.margin_top = Inches(0.08)
    for i, item in enumerate(items):
        if i == 0:
            p = tf2.paragraphs[0]
        else:
            p = tf2.add_paragraph()
        p.text = f"→ {item}"
        p.font.name = FONT_MONO
        p.font.size = Pt(10)
        p.font.color.rgb = ABISMO
        p.space_before = Pt(4)


# ─── Slide Builders ─────────────────────────────────────────────

def slide_01_apertura(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # Blank
    set_slide_bg(slide, LIENZO)

    # Logo stamp (simulated)
    brutal_box(slide, Inches(4.8), Inches(1.2), Inches(3.7), Inches(1.5),
               fill_color=FORJA)
    add_terminal_tag(slide, Inches(5.4), Inches(1.5), ">_KAI PARTNERS", Pt(32))

    # Tagline
    add_text_box(slide, Inches(2.5), Inches(3.0), Inches(8.3), Inches(0.6),
                 "AI-OS Built with you. Proven with your data.",
                 font_name=FONT_MONO, font_size=Pt(16), font_color=ABISMO,
                 bold=False, alignment=PP_ALIGN.CENTER)

    # Subtitle
    add_text_box(slide, Inches(2.5), Inches(3.8), Inches(8.3), Inches(0.5),
                 "Presentación para la Junta Directiva de G3 Logística",
                 font_name=FONT_DISPLAY, font_size=Pt(22), font_color=ABISMO,
                 bold=True, alignment=PP_ALIGN.CENTER)

    # Date
    add_text_box(slide, Inches(2.5), Inches(4.5), Inches(8.3), Inches(0.4),
                 "Febrero 2026",
                 font_name=FONT_MONO, font_size=Pt(14), font_color=ABISMO,
                 alignment=PP_ALIGN.CENTER)

    # Presenter
    add_text_box(slide, Inches(2.5), Inches(5.8), Inches(8.3), Inches(0.4),
                 "Daniel Cardona  |  Cofundador, KAI Partners",
                 font_name=FONT_MONO, font_size=Pt(12), font_color=ABISMO,
                 alignment=PP_ALIGN.CENTER)

    set_speaker_notes(slide, (
        "Buenas tardes. Soy Daniel Cardona, cofundador de KAI Partners.\n\n"
        "Hace unas semanas tuve una conversación con Raúl sobre la operación de G3. "
        "Una conversación de casi una hora donde escuché algo que no escucho a menudo: "
        "un CEO que acaba de llegar y que ya tiene claridad absoluta sobre lo que necesita cambiar.\n\n"
        "Esta presentación no es un pitch genérico de AI. Es una respuesta directa a lo que "
        "Raúl nos compartió — con datos, con casos reales, y con una propuesta concreta.\n\n"
        "Vamos a empezar por lo que está pasando afuera de G3 — porque lo de adentro lo vemos después."
    ))
    return slide


def slide_02_gran_cambio(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 1 — BIG, RELEVANT CHANGE")
    add_headline(slide, "LAS BARRERAS CAYERON. LA COMPETENCIA YA VIENE.")

    items = [
        "Venezuela abrió barreras de entrada a competidores internacionales",
        "Empresas logísticas en Colombia y México ya operan con AI integrado",
        "El costo de automatización bajó 80% en 3 años — lo que antes costaba $2M hoy cuesta $35K",
    ]
    add_bullet_list(slide, Inches(0.8), Inches(1.8), Inches(7), Inches(2.5),
                    items, icon="→")

    add_quote_box(slide,
                  "Acaban de bajar las barreras de entrada de competencias internacionales",
                  "Raúl Moreno, CEO — G3 Logística",
                  Inches(0.8), Inches(4.8), Inches(11.5), Inches(1.2))

    set_speaker_notes(slide, (
        "Raúl lo dijo mejor que yo: acabaron de bajar las barreras de entrada de competencias internacionales.\n\n"
        "Eso significa que empresas de Colombia, México, Brasil — empresas que ya operan con sistemas inteligentes "
        "— van a entrar a competir en el mercado venezolano. No en 5 años. Ahora.\n\n"
        "Hay un dato que importa: el costo de construir un sistema operativo con AI bajó 80% en tres años. "
        "Lo que antes era un proyecto de $2 millones para una empresa enterprise, hoy se puede construir por una fracción. "
        "Las empresas que aprovechen ese cambio van a dominar. Las que no... van a competir con la mitad de las herramientas "
        "contra rivales que tienen el doble."
    ))


def slide_03_ganadores_vs_perdedores(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 2 — WINNERS VS. LOSERS")
    add_headline(slide, "DOS TIPOS DE EMPRESA EN 2026")

    data = [
        ["Empresa con AI-OS", "Empresa sin AI-OS"],
        ["Cotiza en minutos", "Cotiza en días (depende de 1 persona)"],
        ["Reconcilia automáticamente", "Reconcilia a mano (3 días, riesgo de error)"],
        ["Datos en tiempo real para la junta", "Reportes desactualizados, basados en intuición"],
        ["Escala sin duplicar headcount", 'Necesita "el doble de la gente" para crecer'],
        ["Compite con logísticas internacionales", "Vulnerable ante competidores con tecnología"],
    ]
    build_table(slide, Inches(0.8), Inches(1.6), Inches(11.5), data,
                col_widths=[Inches(5.75), Inches(5.75)])

    add_quote_box(slide,
                  "Se las va a comer en dos, tres años cualquier otra empresa que sí lo haga",
                  "Daniel Cardona — KAI Partners",
                  Inches(0.8), Inches(5.3), Inches(11.5), Inches(1.0))

    set_speaker_notes(slide, (
        "Esta tabla no es teórica. Es lo que vemos en todas las industrias donde trabajamos.\n\n"
        "Las empresas que construyeron rieles — infraestructura para que su información fluya — "
        "cotizan en minutos, reconcilian automáticamente, y toman decisiones con datos reales. "
        "Las que no, dependen de personas clave, de Excel, de WhatsApp.\n\n"
        "Lo digo sin rodeos: las empresas que no construyan su sistema operativo con AI en los próximos "
        "18-24 meses van a competir con la mitad de las herramientas contra rivales que tienen el doble. "
        "Y en un mercado recién abierto como Venezuela, esa ventana es más corta."
    ))


def slide_04_radiografia(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 4 — OBSTACLES")
    add_headline(slide, "ESTO ES LO QUE ESCUCHAMOS DE SU OPERACIÓN")

    cards = [
        ("📊", "SAP AL 20%", "El ERP está instalado pero funciona a una quinta parte de su capacidad"),
        ("👤", "CONCENTRACIÓN CRÍTICA", "El proceso de cotización depende de una sola persona"),
        ("📋", '"TRAJE A LA MEDIDA"', "Cada cotización se arma a mano porque los procesos no están estandarizados"),
        ("👥", '"EL DOBLE DE LA GENTE"', "Para crecer, la solución actual es contratar más personas"),
        ("😤", '"ES UN ASCO"', "La operación funciona, pero con un costo humano que el equipo ya no aguanta"),
    ]

    for i, (icon, title, body) in enumerate(cards):
        col = i % 3
        row = i // 3
        x = Inches(0.8) + Inches(3.9) * col
        y = Inches(1.6) + Inches(2.3) * row
        add_icon_card(slide, x, y, Inches(3.6), Inches(1.8), icon, title, body)

    add_text_box(slide, Inches(0.8), Inches(6.6), Inches(11.5), Inches(0.4),
                 "Fuente: Conversación con Raúl Moreno, CEO, 11 de febrero de 2026",
                 font_name=FONT_MONO, font_size=Pt(9), font_color=ABISMO,
                 bold=False, alignment=PP_ALIGN.LEFT)

    set_speaker_notes(slide, (
        "Esto no lo inventamos. Son las palabras de Raúl.\n\n"
        "SAP al 20%. El sistema está instalado, se pagó, pero funciona a una quinta parte. "
        "Eso significa que el 80% de la información de G3 vive fuera del sistema — en Excel, "
        "en la cabeza de personas clave, en WhatsApp.\n\n"
        "El proceso de cotización depende de una persona. Cuando esa persona no está, no se cotiza. "
        "Eso en la industria se llama concentración de conocimiento crítico. Es el riesgo más alto "
        "que una empresa logística puede tener.\n\n"
        "Y para crecer, la solución actual es 'contratar el doble de la gente.' Eso no es crecimiento "
        "— es supervivencia cara.\n\n"
        "[NOTA: Este slide requiere validación — ajustar tono y detalle para la junta.]"
    ))


def slide_05_costo_oculto(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 4 — OBSTACLES (CUANTIFICACIÓN)")
    add_headline(slide, "CUÁNTO CUESTA OPERAR ASÍ")

    risks = [
        ("RIESGO #1: BUS FACTOR",
         "La cotización depende de 1 persona.\n"
         "Si se va, se enferma, o se atrasa → la operación se detiene.\n"
         "Costo estimado: $[X]/año"),
        ("RIESGO #2: VELOCIDAD DE RESPUESTA",
         "Cada cotización se arma a mano: días vs. minutos.\n"
         "Colgate y Nestlé esperan respuestas en horas, no semanas.\n"
         "Costo de oportunidad: $[X] en deals perdidos"),
        ("RIESGO #3: HEADCOUNT OCULTO",
         '"El doble de la gente" = duplicar nómina.\n'
         "En vez de 30 personas con sistemas inteligentes,\n"
         "se necesitan 60 con Excel.\nCosto adicional: $[X]/año"),
    ]

    for i, (title, body) in enumerate(risks):
        x = Inches(0.8) + Inches(3.9) * i
        # Title bar
        hdr = brutal_box(slide, x, Inches(1.6), Inches(3.6), Inches(0.45),
                         fill_color=FRICCION, shadow=False)
        tf = hdr.text_frame
        tf.margin_left = Inches(0.1)
        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_DISPLAY
        p.font.size = Pt(13)
        p.font.color.rgb = WHITE
        p.font.bold = True

        # Body
        box = brutal_box(slide, x, Inches(2.05), Inches(3.6), Inches(2.2),
                         fill_color=WHITE, shadow=False)
        tf2 = box.text_frame
        tf2.word_wrap = True
        tf2.margin_left = Inches(0.12)
        tf2.margin_top = Inches(0.08)
        p2 = tf2.paragraphs[0]
        p2.text = body
        p2.font.name = FONT_MONO
        p2.font.size = Pt(11)
        p2.font.color.rgb = ABISMO

    # Finkargo reference
    add_quote_box(slide,
                  "En Finkargo: 45 min de proceso manual por transacción costaba $9.3M/año. "
                  "Después de KAI Partners: 3 minutos por transacción.",
                  "Caso documentado — Finkargo",
                  Inches(0.8), Inches(5.0), Inches(11.5), Inches(1.1))

    # Total
    total_box = brutal_box(slide, Inches(3.5), Inches(6.3), Inches(6.3), Inches(0.55),
                           fill_color=ABISMO)
    tf = total_box.text_frame
    tf.word_wrap = False
    p = tf.paragraphs[0]
    p.text = "COSTO TOTAL ESTIMADO DE LA MANUALIDAD: $[X]/AÑO"
    p.font.name = FONT_DISPLAY
    p.font.size = Pt(16)
    p.font.color.rgb = FORJA
    p.font.bold = True
    p.alignment = PP_ALIGN.CENTER

    set_speaker_notes(slide, (
        "Vamos a ponerle número a esto.\n\n"
        "Primero: el bus factor. Si la persona que cotiza no está mañana, ¿qué pasa? "
        "Clientes como Colgate y Nestlé no esperan.\n\n"
        "Segundo: velocidad de respuesta. En logística internacional, la cotización rápida gana el contrato.\n\n"
        "Tercero: headcount. Si la única forma de crecer es contratar el doble de personas, los márgenes se comprimen.\n\n"
        "En Finkargo encontramos una situación muy similar: 45 minutos por transacción, todo manual. "
        "Hoy procesan en 3 minutos. Los ahorros: $15 millones. La inversión: $35 mil."
    ))


def slide_06_tierra_prometida(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 3 — PROMISED LAND")
    add_headline(slide, "G3 CON ENERGÍA: CÓMO SE VE EN 90 DÍAS")

    items = [
        "COTIZACIÓN EN MINUTOS — El sistema genera cotizaciones con tarifas actualizadas, márgenes calculados, y condiciones personalizadas. Sin depender de una persona.",
        "RECONCILIACIÓN AUTOMÁTICA — SAP, Excel, y los datos operativos se conectan. Discrepancias detectadas en tiempo real, no en 3 días.",
        "VISIBILIDAD PARA LA JUNTA — Dashboard en vivo: margen por cliente, ocupación de almacén, rutas, KPIs operativos.",
        "ESCALAR SIN DUPLICAR NÓMINA — El crecimiento requiere mejores rieles para que la información fluya.",
        "LA JUNTA DUERME TRANQUILA — La operación no depende de personas clave. El conocimiento está en el sistema.",
    ]
    add_bullet_list(slide, Inches(0.8), Inches(1.6), Inches(11.5), Inches(4.2),
                    items, font_size=Pt(13), icon="⚡")

    # Metaphor
    add_text_box(slide, Inches(2.5), Inches(6.2), Inches(8.3), Inches(0.5),
                 '"La energía ya está en G3. Solo faltan los paneles."',
                 font_name=FONT_MONO, font_size=Pt(14), font_color=FRICCION,
                 bold=True, alignment=PP_ALIGN.CENTER)

    set_speaker_notes(slide, (
        "Esto no es ciencia ficción. Es lo que construimos para empresas como la de ustedes.\n\n"
        "Imaginen que un cliente de Colgate pide una cotización. Hoy eso toma días y depende de una persona. "
        "En 90 días, el sistema toma las tarifas actualizadas, calcula márgenes, aplica condiciones del contrato, "
        "y genera la cotización. La persona que antes armaba todo a mano ahora supervisa y aprueba.\n\n"
        "SAP al 20% se convierte en SAP al 80%. No porque cambien el ERP, sino porque conectamos lo que ya tienen.\n\n"
        "Daniel dijo algo que nos gusta repetir: 'AI es como el sol — hay energía infinita, pero si no construyes "
        "los paneles solares, no sirve de nada.' G3 tiene la energía. Nosotros construimos los paneles."
    ))


def slide_07_metodologia(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 4 — NEW WAY (METHODOLOGY)")
    add_headline(slide, "TRES FASES. 90 DÍAS. CON TU EQUIPO, CON TUS DATOS.")

    add_phase_block(slide, Inches(0.8), Inches(1.6), Inches(3.6), "1", "AUMENTAR (Mes 1)", [
        "Arqueología organizacional",
        "Mapear flujos REALES de información",
        "Conectar SAP con la operación",
        "Primeras automatizaciones en producción",
    ])
    add_phase_block(slide, Inches(4.85), Inches(1.6), Inches(3.6), "2", "AUTOMATIZAR (Mes 2)", [
        "Activar flujos de datos",
        "Cotización automatizada",
        "Reconciliación automática",
        "Equipo opera con el AI-OS",
    ])
    add_phase_block(slide, Inches(8.9), Inches(1.6), Inches(3.6), "3", "AGENTIZAR (Mes 3)", [
        "Optimización con datos reales",
        "Agentes de AI que monitorean y alertan",
        "Equipo supervisa, no ejecuta",
        "ROI medido, no estimado",
    ])

    # Footer
    add_text_box(slide, Inches(0.8), Inches(6.3), Inches(11.5), Inches(0.5),
                 "No reemplazamos tus sistemas. Construimos rieles encima de lo que ya tienes.",
                 font_name=FONT_MONO, font_size=Pt(13), font_color=FRICCION,
                 bold=True, alignment=PP_ALIGN.CENTER)

    set_speaker_notes(slide, (
        "Esto es lo que hacemos diferente: no llegamos con un producto genérico. Llegamos con una pregunta: "
        "'¿Dónde duele más?'\n\n"
        "Las primeras dos semanas son arqueología organizacional — mapear cómo fluye la información de verdad en G3.\n\n"
        "La fase 1 conecta SAP con el resto. La fase 2 activa los flujos: cotización, reconciliación, reportes. "
        "La fase 3 optimiza con datos reales y mide el ROI.\n\n"
        "En 90 días, la operación de G3 funciona diferente. No porque compraron tecnología nueva, "
        "sino porque la información que ya tienen empieza a fluir."
    ))


def slide_08_caso_confie(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 5 — EVIDENCE")
    add_headline(slide, "CONFIE: DE 1.5 SEMANAS A MENOS DE 15 MINUTOS")

    add_text_box(slide, Inches(0.8), Inches(1.4), Inches(11.5), Inches(0.4),
                 "Empresa de transporte en Colombia. Cotización manual. Dependía de expertos humanos.",
                 font_name=FONT_MONO, font_size=Pt(13), font_color=ABISMO)

    data = [
        ["Métrica", "Antes", "Después de KAI Partners"],
        ["Tiempo de cotización", "1.5 semanas", "< 15 minutos"],
        ["Dependencia de personas", "2-3 expertos", "Sistema + supervisión"],
        ["Reducción de costos", "—", "60%"],
        ["Integración con entes", "Manual", "Automática (ministerio, QR)"],
    ]
    build_table(slide, Inches(0.8), Inches(2.2), Inches(11.5), data,
                col_widths=[Inches(3.8), Inches(3.85), Inches(3.85)])

    add_quote_box(slide,
                  "Le mostramos el sistema en vivo a Raúl durante nuestra primera conversación. "
                  "La reacción fue inmediata.",
                  "Daniel Cardona — KAI Partners",
                  Inches(0.8), Inches(5.2), Inches(11.5), Inches(1.0))

    set_speaker_notes(slide, (
        "Este caso es particularmente relevante para G3 porque es la misma industria: transporte y logística.\n\n"
        "Confie cotizaba transporte de forma manual. Cada cotización tomaba una semana y media "
        "porque dependía de 2-3 personas que conocían las tarifas, las rutas, y las condiciones de cada cliente.\n\n"
        "Construimos un sistema que toma las variables — ruta, peso, tipo de carga, condiciones del contrato — "
        "y genera la cotización en minutos. Con aprobación digital, integración con el ministerio de transporte, y QR.\n\n"
        "Reducción de costo: 60%. Y lo más importante: el proceso ya no depende de personas."
    ))


def slide_09_caso_finkargo(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, ABISMO)
    add_raskin_tag(slide, "MOVE 5 — EVIDENCE (PROOF PRINCIPAL)", top=Inches(0.15))

    add_headline(slide, "FINKARGO: $650M PROCESADOS. 428x ROI.",
                 color=FORJA, font_size=Pt(38))

    add_text_box(slide, Inches(0.8), Inches(1.4), Inches(11.5), Inches(0.4),
                 "Fintech / Pagos Logísticos — Bogotá, Colombia",
                 font_name=FONT_MONO, font_size=Pt(13), font_color=LIENZO)

    data = [
        ["Métrica", "Antes", "Después de KAI Partners"],
        ["Tiempo por transacción", "45 minutos", "3 minutos"],
        ["Reconciliación", "3 días (manual)", "Automática"],
        ["Procesos automatizados", "0", "110+"],
        ["Ahorros ejecutados", "$0", "$15M"],
        ["Inversión", "—", "$35K"],
        ["ROI", "—", "428x"],
    ]
    build_table(slide, Inches(0.8), Inches(2.1), Inches(11.5), data,
                col_widths=[Inches(3.8), Inches(3.85), Inches(3.85)])

    # Implementation details
    details_box = brutal_box(slide, Inches(0.8), Inches(5.5), Inches(5.2), Inches(0.7),
                             fill_color=FORJA, shadow=False)
    tf = details_box.text_frame
    tf.margin_left = Inches(0.15)
    p = tf.paragraphs[0]
    p.text = "Implementación: 90 días  |  Relación: 3+ años continua"
    p.font.name = FONT_MONO
    p.font.size = Pt(11)
    p.font.color.rgb = ABISMO
    p.font.bold = True

    add_quote_box(slide,
                  "Llegaron con una pregunta, no con un PowerPoint. Dos semanas después ya sabían más "
                  "de nuestra operación que gente que llevaba años aquí.",
                  "Roberto Méndez, COO — Finkargo",
                  Inches(0.8), Inches(6.4), Inches(11.5), Inches(0.9))

    set_speaker_notes(slide, (
        "Finkargo procesa $650 millones al año en pagos logísticos. Tres rondas de inversión. 47 personas.\n\n"
        "Desde adentro: 3 tabs de Excel, 12 grupos de WhatsApp, y la mitad de los datos en la cabeza de 4 personas. "
        "¿Les suena familiar?\n\n"
        "Cada transacción tomaba 45 minutos de verificación manual. Habían probado 2 vendors antes.\n\n"
        "Nosotros llegamos con una pregunta: '¿Dónde duele más?' Dos semanas de arqueología. 90 días de construcción. "
        "Resultado: 110 procesos automatizados, conciliaciones automáticas, $15 millones en ahorros ejecutados.\n\n"
        "$35 mil de inversión. $15 millones de retorno. 428 veces el ROI.\n\n"
        "Y lo más importante: tres años después, seguimos ahí."
    ))


def slide_10_arquitectura(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 4 — NEW WAY (TECHNICAL)")
    add_headline(slide, "NO REEMPLAZAMOS. CONECTAMOS.")

    # K.AI Layer (top bar)
    kai_layer = brutal_box(slide, Inches(1.5), Inches(1.6), Inches(10.3), Inches(2.2),
                           fill_color=FORJA)
    tf = kai_layer.text_frame
    tf.margin_left = Inches(0.3)
    tf.margin_top = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "CAPA K.AI (AI-OS)"
    p.font.name = FONT_DISPLAY
    p.font.size = Pt(20)
    p.font.color.rgb = ABISMO
    p.font.bold = True

    # Sub-boxes inside K.AI layer
    modules = ["Workflows\nAutomáticos", "Agentes\nde AI", "Dashboards\nen tiempo real"]
    for i, mod in enumerate(modules):
        x = Inches(2.0) + Inches(3.2) * i
        box = brutal_box(slide, x, Inches(2.3), Inches(2.6), Inches(1.1),
                         fill_color=WHITE, shadow=False)
        tf2 = box.text_frame
        tf2.word_wrap = True
        tf2.margin_left = Inches(0.1)
        p2 = tf2.paragraphs[0]
        p2.text = mod
        p2.font.name = FONT_MONO
        p2.font.size = Pt(12)
        p2.font.color.rgb = ABISMO
        p2.font.bold = True
        p2.alignment = PP_ALIGN.CENTER

    # Bottom systems
    systems = [("SAP B1\n(ERP)", Inches(2.0)),
               ("Excel\n(datos legacy)", Inches(5.2)),
               ("WhatsApp\n(comunicación)", Inches(8.4))]
    for label, x in systems:
        box = brutal_box(slide, x, Inches(4.5), Inches(2.6), Inches(1.0),
                         fill_color=WHITE)
        tf3 = box.text_frame
        tf3.word_wrap = True
        p3 = tf3.paragraphs[0]
        p3.text = label
        p3.font.name = FONT_MONO
        p3.font.size = Pt(12)
        p3.font.color.rgb = ABISMO
        p3.font.bold = True
        p3.alignment = PP_ALIGN.CENTER

    # Priority flows
    flows = [
        "1. Cotización automatizada — SAP + tarifas + condiciones → cotización en minutos",
        "2. Reconciliación operativa — SAP + Excel + datos de almacén → conciliación automática",
        "3. Dashboard de junta — Datos de todos los sistemas → visibilidad en tiempo real",
    ]
    add_bullet_list(slide, Inches(0.8), Inches(5.8), Inches(11.5), Inches(1.5),
                    flows, font_size=Pt(11), icon="→")

    set_speaker_notes(slide, (
        "G3 ya tiene SAP B1, Excel, WhatsApp. No vamos a reemplazar nada de eso.\n\n"
        "Lo que construimos es una capa intermedia — la capa K.AI — que conecta todo.\n\n"
        "SAP pasa del 20% al 80% de uso porque los datos entran automáticamente. "
        "Excel deja de ser la base de datos principal. Y WhatsApp sigue siendo el canal "
        "— pero las decisiones ahora tienen datos detrás.\n\n"
        "Los 2-3 flujos prioritarios: cotización automatizada, reconciliación operativa, y dashboard de junta."
    ))


def slide_11_opciones_entrada(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 4 — SOLUTION (PRACTICAL ENTRY)")
    add_headline(slide, "DOS RUTAS PARA EMPEZAR")

    # Route A
    brutal_box(slide, Inches(0.8), Inches(1.6), Inches(5.5), Inches(4.8),
               fill_color=WHITE)
    hdr_a = brutal_box(slide, Inches(0.8), Inches(1.6), Inches(5.5), Inches(0.6),
                       fill_color=FORJA, shadow=False)
    tf = hdr_a.text_frame
    tf.margin_left = Inches(0.15)
    p = tf.paragraphs[0]
    p.text = "RUTA A: DIAGNÓSTICO COMPLETO"
    p.font.name = FONT_DISPLAY
    p.font.size = Pt(18)
    p.font.color.rgb = ABISMO
    p.font.bold = True
    p.alignment = PP_ALIGN.CENTER

    txA = slide.shapes.add_textbox(Inches(1.1), Inches(2.4), Inches(5.0), Inches(3.8))
    tf_a = txA.text_frame
    tf_a.word_wrap = True
    items_a = [
        ("Inversión:", "$5,000 USD"),
        ("", ""),
        ("Incluye:", ""),
        ("", "• Arqueología completa (60+ personas entrevistadas)"),
        ("", "• Mapa de Energía completo"),
        ("", "• Roadmap de automatizaciones"),
        ("", "• Propuesta de AI-OS Build"),
        ("", ""),
        ("Timeline:", "2-3 semanas"),
        ("", ""),
        ("Ideal para:", '"Quiero ver todo antes de decidir"'),
    ]
    for i, (label, value) in enumerate(items_a):
        if i == 0:
            pa = tf_a.paragraphs[0]
        else:
            pa = tf_a.add_paragraph()
        text = f"{label} {value}".strip() if label else value
        pa.text = text
        pa.font.name = FONT_MONO
        pa.font.size = Pt(11)
        pa.font.color.rgb = ABISMO
        pa.font.bold = bool(label)
        pa.space_before = Pt(2)

    # Route B
    brutal_box(slide, Inches(7.0), Inches(1.6), Inches(5.5), Inches(4.8),
               fill_color=WHITE)
    hdr_b = brutal_box(slide, Inches(7.0), Inches(1.6), Inches(5.5), Inches(0.6),
                       fill_color=FRICCION, shadow=False)
    tf2 = hdr_b.text_frame
    tf2.margin_left = Inches(0.15)
    p2 = tf2.paragraphs[0]
    p2.text = "RUTA B: UN PROCESO CRÍTICO"
    p2.font.name = FONT_DISPLAY
    p2.font.size = Pt(18)
    p2.font.color.rgb = WHITE
    p2.font.bold = True
    p2.alignment = PP_ALIGN.CENTER

    txB = slide.shapes.add_textbox(Inches(7.3), Inches(2.4), Inches(5.0), Inches(3.8))
    tf_b = txB.text_frame
    tf_b.word_wrap = True
    items_b = [
        ("Inversión:", "$3,500-$4,000/mes"),
        ("", ""),
        ("Incluye:", ""),
        ("", "• Elegimos 1 proceso (ej: cotización)"),
        ("", "• Lo automatizamos completamente en 60-90 días"),
        ("", "• ROI medible desde mes 2"),
        ("", "• Si funciona, expandimos"),
        ("", ""),
        ("Timeline:", "60-90 días"),
        ("", ""),
        ("Ideal para:", '"Ya sé que necesito esto. Empecemos."'),
    ]
    for i, (label, value) in enumerate(items_b):
        if i == 0:
            pb = tf_b.paragraphs[0]
        else:
            pb = tf_b.add_paragraph()
        text = f"{label} {value}".strip() if label else value
        pb.text = text
        pb.font.name = FONT_MONO
        pb.font.size = Pt(11)
        pb.font.color.rgb = ABISMO
        pb.font.bold = bool(label)
        pb.space_before = Pt(2)

    set_speaker_notes(slide, (
        "No les vamos a pedir que aprueben un proyecto de millones. Dos opciones con riesgo controlado.\n\n"
        "Ruta A: diagnóstico completo. $5,000. Dos a tres semanas. Mapeamos toda la operación, "
        "cuantificamos la manualidad, entregamos un Mapa de Energía.\n\n"
        "Ruta B: un proceso crítico — la cotización. $3,500-$4,000/mes. En 60-90 días tienen ROI medible.\n\n"
        "La Ruta A es ideal si la junta quiere ver el panorama completo. "
        "La Ruta B es ideal si ya hay claridad sobre dónde empezar.\n\n"
        "Ambas rutas son de bajo riesgo. No estamos pidiendo un compromiso de 18 meses."
    ))


def slide_12_modelo_economico(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 5 — EVIDENCE (ALIGNMENT)")
    add_headline(slide, "NUESTRO ÉXITO DEPENDE DE TU ÉXITO")

    # Pricing structure
    brutal_box(slide, Inches(0.8), Inches(1.6), Inches(5.5), Inches(2.5),
               fill_color=WHITE)
    tx1 = slide.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(5.0), Inches(2.2))
    tf1 = tx1.text_frame
    tf1.word_wrap = True
    p = tf1.paragraphs[0]
    p.text = "ESTRUCTURA DE INVERSIÓN"
    p.font.name = FONT_DISPLAY
    p.font.size = Pt(16)
    p.font.color.rgb = ABISMO
    p.font.bold = True

    lines = [
        "Componente fijo mensual → Equipo dedicado, infraestructura, soporte",
        "",
        "Componente variable → Atado a resultados medibles (ahorro generado, procesos automatizados, tiempo recuperado)",
        "",
        "Filosofía 80/20:",
        "80% construir valor a largo plazo",
        "20% experimentos e iteración rápida",
    ]
    for line in lines:
        pl = tf1.add_paragraph()
        pl.text = line
        pl.font.name = FONT_MONO
        pl.font.size = Pt(10)
        pl.font.color.rgb = ABISMO
        pl.space_before = Pt(3)

    # Comparison table
    data = [
        ["Vendor tradicional", "KAI Partners"],
        ["Cobra por horas", "Cobra por resultados"],
        ["Se va a los 3 meses", "Se queda hasta que funciona"],
        ["Entrega un reporte", "Construye un sistema operativo"],
        ['ROI "proyectado"', "ROI medido y documentado"],
    ]
    build_table(slide, Inches(6.8), Inches(1.6), Inches(5.7), data,
                col_widths=[Inches(2.85), Inches(2.85)])

    set_speaker_notes(slide, (
        "Nuestro modelo no es el de consultoría tradicional. No cobramos por horas y nos vamos.\n\n"
        "Hay un componente fijo que cubre el equipo y la infraestructura. Y hay un componente variable "
        "atado a resultados reales — no a PowerPoints entregados, sino a procesos funcionando.\n\n"
        "En Finkargo la inversión fue $35 mil. El retorno fue $15 millones. Tres años después seguimos."
    ))


def slide_13_cultura_cambio(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, LIENZO)
    add_raskin_tag(slide, "MOVE 3+4 — PROMISED LAND + HUMAN SIDE")
    add_headline(slide, "LA TECNOLOGÍA FUNCIONA CUANDO LA GENTE LA ADOPTA")

    pillars = [
        ("1", "OPERADORES → SUPERVISORES",
         "Las personas que hoy hacen tareas manuales se convierten en supervisores del sistema. "
         "No se pierde headcount — se transforma."),
        ("2", "HUMANO EN EL LOOP (HITL)",
         "El AI-OS no toma decisiones solo. Las personas aprueban, supervisan, y ajustan. "
         "La tecnología amplifica, no reemplaza."),
        ("3", "LLEVADOS DE LA MANO",
         "Entrenamiento práctico (no workshops de 2 horas). El equipo de KAI Partners trabaja "
         "junto al equipo de G3 hasta que operan solos."),
    ]

    for i, (num, title, body) in enumerate(pillars):
        x = Inches(0.8) + Inches(3.9) * i
        # Number badge
        badge = brutal_box(slide, x, Inches(1.6), Inches(0.6), Inches(0.6),
                           fill_color=FORJA, shadow=False)
        tf = badge.text_frame
        p = tf.paragraphs[0]
        p.text = num
        p.font.name = FONT_DISPLAY
        p.font.size = Pt(24)
        p.font.color.rgb = ABISMO
        p.font.bold = True
        p.alignment = PP_ALIGN.CENTER

        # Title
        add_text_box(slide, x + Inches(0.7), Inches(1.65), Inches(3.0), Inches(0.5),
                     title, font_name=FONT_DISPLAY, font_size=Pt(15),
                     font_color=ABISMO, bold=True)

        # Body card
        box = brutal_box(slide, x, Inches(2.4), Inches(3.6), Inches(2.0),
                         fill_color=WHITE)
        tf2 = box.text_frame
        tf2.word_wrap = True
        tf2.margin_left = Inches(0.15)
        tf2.margin_top = Inches(0.1)
        p2 = tf2.paragraphs[0]
        p2.text = body
        p2.font.name = FONT_MONO
        p2.font.size = Pt(11)
        p2.font.color.rgb = ABISMO

    add_quote_box(slide,
                  "La junta quiere avanzar, pero que nos lleven de la mano",
                  "Raúl Moreno, CEO — G3 Logística",
                  Inches(0.8), Inches(5.2), Inches(11.5), Inches(1.0))

    set_speaker_notes(slide, (
        "Esta es la pregunta que toda junta hace: '¿Y la gente?'\n\n"
        "Raúl lo dijo: 'La junta quiere avanzar, pero que nos lleven de la mano.'\n\n"
        "Primero: no reemplazamos personas. Las transformamos. La persona que hoy pasa 4 horas armando "
        "cotizaciones mañana supervisa un sistema que las genera en minutos.\n\n"
        "Segundo: todo pasa con humano en el loop. El sistema propone, la persona aprueba.\n\n"
        "Tercero: no hacemos un workshop de 2 horas. Trabajamos junto al equipo de G3 durante 90 días."
    ))


def slide_14_equipo(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, ABISMO)
    add_raskin_tag(slide, "MOVE 5 — EVIDENCE (TEAM)", top=Inches(0.15))
    add_headline(slide, "QUIÉN CONSTRUYE TU AI-OS", color=FORJA, font_size=Pt(34))

    team = [
        ("DANIEL RESTREPO", "Cofundador",
         "10 años en oil & gas → 4 años construyendo infraestructura de datos en fintech\n"
         "Diseñó los sistemas que procesan $650M/año para Finkargo\n"
         '"La tecnología sin adopción es basura cara."'),
        ("DANIEL CARDONA", "Cofundador",
         "15 años en marketing, growth, y GTM para B2B LATAM\n"
         "Lidera la arqueología organizacional — mapea cómo opera tu empresa de verdad\n"
         '"Llegamos con una pregunta, no con un PowerPoint."'),
        ("THOMAS SCHUCK", "Advisor",
         "25 años en logística y supply chain\n"
         "Harvard OPM (Owner/President Management)\n"
         "Asegura que lo que construimos funciona en la operación real"),
    ]

    for i, (name, role, bio) in enumerate(team):
        x = Inches(0.8) + Inches(3.9) * i
        # Name bar
        name_bar = brutal_box(slide, x, Inches(1.4), Inches(3.6), Inches(0.55),
                              fill_color=FORJA, shadow=False)
        tf = name_bar.text_frame
        tf.margin_left = Inches(0.1)
        p = tf.paragraphs[0]
        p.text = name
        p.font.name = FONT_DISPLAY
        p.font.size = Pt(16)
        p.font.color.rgb = ABISMO
        p.font.bold = True

        # Role
        add_text_box(slide, x, Inches(2.0), Inches(3.6), Inches(0.35),
                     role, font_name=FONT_MONO, font_size=Pt(12),
                     font_color=FRICCION, bold=True)

        # Bio
        bio_box = brutal_box(slide, x, Inches(2.4), Inches(3.6), Inches(2.5),
                             fill_color=RGBColor(0x1A, 0x1A, 0x1A), shadow=False)
        tf2 = bio_box.text_frame
        tf2.word_wrap = True
        tf2.margin_left = Inches(0.15)
        tf2.margin_top = Inches(0.1)
        p2 = tf2.paragraphs[0]
        p2.text = bio
        p2.font.name = FONT_MONO
        p2.font.size = Pt(10)
        p2.font.color.rgb = LIENZO

    # Track record bar
    track = brutal_box(slide, Inches(0.8), Inches(5.5), Inches(11.5), Inches(0.55),
                       fill_color=FORJA, shadow=False)
    tf3 = track.text_frame
    tf3.margin_left = Inches(0.2)
    p3 = tf3.paragraphs[0]
    p3.text = "12+ clientes  |  3 países (Colombia, México, Bolivia)  |  $650M en transacciones procesadas"
    p3.font.name = FONT_MONO
    p3.font.size = Pt(13)
    p3.font.color.rgb = ABISMO
    p3.font.bold = True
    p3.alignment = PP_ALIGN.CENTER

    set_speaker_notes(slide, (
        "No somos una consultora grande con juniors ejecutando. Somos los founders construyendo con ustedes.\n\n"
        "Daniel Restrepo diseñó los sistemas que hoy procesan $650 millones para Finkargo.\n\n"
        "Yo — Daniel Cardona — lidero la arqueología organizacional. Las primeras dos semanas "
        "las paso entendiendo cómo opera G3 de verdad.\n\n"
        "Y Thomas Schuck — 25 años en logística, Harvard OPM — asegura que lo que construimos "
        "funciona en la operación real.\n\n"
        "Doce clientes activos. Tres países. $650 millones procesados. Tres años de track record."
    ))


def slide_15_cta(prs):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_bg(slide, ABISMO)

    add_headline(slide, "PRÓXIMOS PASOS", top=Inches(0.8), color=FORJA,
                 font_size=Pt(40))

    # Two options side by side
    # Option A
    opt_a = brutal_box(slide, Inches(1.5), Inches(2.0), Inches(4.8), Inches(2.0),
                       fill_color=FORJA)
    tf_a = opt_a.text_frame
    tf_a.word_wrap = True
    tf_a.margin_left = Inches(0.2)
    tf_a.margin_top = Inches(0.15)
    p_a = tf_a.paragraphs[0]
    p_a.text = "OPCIÓN A: Diagnóstico Completo"
    p_a.font.name = FONT_DISPLAY
    p_a.font.size = Pt(18)
    p_a.font.color.rgb = ABISMO
    p_a.font.bold = True
    for line in ["$5,000 → Mapa de Energía en 2-3 semanas",
                 "Ideal si quieren ver todo antes de decidir"]:
        pl = tf_a.add_paragraph()
        pl.text = line
        pl.font.name = FONT_MONO
        pl.font.size = Pt(12)
        pl.font.color.rgb = ABISMO
        pl.space_before = Pt(8)

    # Option B
    opt_b = brutal_box(slide, Inches(7.0), Inches(2.0), Inches(4.8), Inches(2.0),
                       fill_color=FRICCION)
    tf_b = opt_b.text_frame
    tf_b.word_wrap = True
    tf_b.margin_left = Inches(0.2)
    tf_b.margin_top = Inches(0.15)
    p_b = tf_b.paragraphs[0]
    p_b.text = "OPCIÓN B: Un Proceso Crítico"
    p_b.font.name = FONT_DISPLAY
    p_b.font.size = Pt(18)
    p_b.font.color.rgb = WHITE
    p_b.font.bold = True
    for line in ["$3,500-$4,000/mes → Cotización en 60-90 días",
                 "Ideal si quieren resultados inmediatos"]:
        pl = tf_b.add_paragraph()
        pl.text = line
        pl.font.name = FONT_MONO
        pl.font.size = Pt(12)
        pl.font.color.rgb = WHITE
        pl.space_before = Pt(8)

    # CTA
    cta_box = brutal_box(slide, Inches(2.5), Inches(4.5), Inches(8.3), Inches(0.7),
                         fill_color=FORJA)
    tf_cta = cta_box.text_frame
    tf_cta.word_wrap = True
    p_cta = tf_cta.paragraphs[0]
    p_cta.text = "Aprobemos un presupuesto exploratorio. Agendemos la siguiente sesión."
    p_cta.font.name = FONT_MONO
    p_cta.font.size = Pt(14)
    p_cta.font.color.rgb = ABISMO
    p_cta.font.bold = True
    p_cta.alignment = PP_ALIGN.CENTER

    # Contact
    add_text_box(slide, Inches(2.5), Inches(5.6), Inches(8.3), Inches(0.4),
                 "Daniel Cardona  |  kai@kaipartners.com  |  kaipartners.com/agenda",
                 font_name=FONT_MONO, font_size=Pt(13), font_color=LIENZO,
                 alignment=PP_ALIGN.CENTER)

    # Closing tagline
    add_text_box(slide, Inches(2.5), Inches(6.3), Inches(8.3), Inches(0.5),
                 "AI-OS Built with you. Proven with your data.",
                 font_name=FONT_MONO, font_size=Pt(16), font_color=FORJA,
                 bold=True, alignment=PP_ALIGN.CENTER)

    # Terminal tag
    add_terminal_tag(slide, Inches(5.5), Inches(6.8), ">_KAI PARTNERS", Pt(14))

    set_speaker_notes(slide, (
        "No les pido que decidan hoy. Les pido tres cosas:\n\n"
        "Uno: elijan una ruta. Ruta A si quieren diagnóstico completo. Ruta B si quieren empezar por cotización.\n\n"
        "Dos: aprueben un presupuesto exploratorio. $5,000 para la Ruta A. $3,500-$4,000 mensuales para la Ruta B.\n\n"
        "Tres: agendemos una sesión la próxima semana para afinar el alcance.\n\n"
        "Lo que sí les digo: cada trimestre que pasa sin actuar, los costos se acumulan. "
        "Y las empresas que sí están construyendo su sistema operativo con AI — esas no están esperando.\n\n"
        "La energía está en G3. Solo faltan los paneles. Nosotros los construimos con ustedes.\n\n"
        "Gracias."
    ))


# ─── Main ───────────────────────────────────────────────────────

def main():
    prs = Presentation()
    prs.slide_width = SLIDE_W
    prs.slide_height = SLIDE_H

    slide_01_apertura(prs)
    slide_02_gran_cambio(prs)
    slide_03_ganadores_vs_perdedores(prs)
    slide_04_radiografia(prs)
    slide_05_costo_oculto(prs)
    slide_06_tierra_prometida(prs)
    slide_07_metodologia(prs)
    slide_08_caso_confie(prs)
    slide_09_caso_finkargo(prs)
    slide_10_arquitectura(prs)
    slide_11_opciones_entrada(prs)
    slide_12_modelo_economico(prs)
    slide_13_cultura_cambio(prs)
    slide_14_equipo(prs)
    slide_15_cta(prs)

    out_dir = os.path.dirname(os.path.abspath(__file__))
    out_path = os.path.join(out_dir, "G3-Logistica-Board-Deck-KAI-Partners.pptx")
    prs.save(out_path)
    print(f"✓ Deck generated: {out_path}")
    print(f"  {len(prs.slides)} slides | Brand: KAI Partners (Neo-Brutalist)")
    print(f"  Fonts: {FONT_DISPLAY} + {FONT_MONO}")
    print(f"  Colors: Abismo, Lienzo, Forja, Fricción")


if __name__ == "__main__":
    main()
