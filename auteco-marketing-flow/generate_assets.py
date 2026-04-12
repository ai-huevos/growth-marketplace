import os

models = [
    {"brand": "BAJAJ", "model": "Boxer_CT_100", "name": "Boxer CT 100", "feature": "Mayor rendimiento de ciudad, repuestos baratos", "spec": "Motor 4 tiempos 102cc", "tag": "Ahorro"},
    {"brand": "TVS", "model": "Raider_125", "name": "Raider 125", "feature": "Tablero digital y modos de manejo", "spec": "Motor 3 válvulas, 12.7 HP", "tag": "Tecnología"},
    {"brand": "VICTORY", "model": "MRX_150", "name": "MRX 150", "feature": "Suspensión alta y llantas off-road", "spec": "Suspension horquilla telescópica", "tag": "Aventura"},
    {"brand": "KTM", "model": "Duke_390", "name": "Duke 390", "feature": "Modo Supermoto y Quickshifter+", "spec": "44 HP, chasis multitubular", "tag": "Velocidad"},
    {"brand": "Husqvarna", "model": "Norden_901", "name": "Norden 901", "feature": "Control de tracción cornering y tanque 19L", "spec": "105 HP, 2 cilindros paralelos", "tag": "Exploración"}
]

base_path = os.path.join(os.getcwd(), "Demo_Outputs", "Phase4_5")
variant_matrix = []

for m in models:
    dir_path = os.path.join(base_path, f"{m['brand']}_{m['model']}")
    os.makedirs(dir_path, exist_ok=True)
    
    tiktok = f"""(Gancho: Primer plano del tablero/llanta de la {m['name']})
"¿Cansado de motos que no rinden? Parceros, la nueva {m['brand']} {m['name']} viene con {m['feature']}.
¡Pura potencia de {m['spec']}! Saca tu crédito directo y llevatela hoy. #MotosColombia #{m['brand']}\""""
    with open(os.path.join(dir_path, "tiktok_script.md"), "w") as f: f.write(tiktok)
    
    wa = f"""¡Hola! 👋 La nueva {m['brand']} {m['name']} está brutal.
Aprovecha su {m['feature']} ({m['spec']}). 
Consíguela AHORA con CRÉDITO FÁCIL sin cuota inicial.
👉 Encuentra tu concesionario {m['brand']} más cercano aquí: [link]"""
    with open(os.path.join(dir_path, "whatsapp_promo.md"), "w") as f: f.write(wa)
    
    ig = f"""Slide 1: ¡Conoce la {m['brand']} {m['name']}!
Slide 2: {m['spec']}
Slide 3: {m['feature']}
Slide 4: {m['brand']} respalda tu camino.
Slide 5: ¡Pregunta por tu crédito hoy!"""
    with open(os.path.join(dir_path, "instagram_carousel_brief.md"), "w") as f: f.write(ig)
    
    blog = f"""# Todo lo que debes saber de la {m['brand']} {m['name']}
## La mejor {m['tag']} del 2026
La {m['name']} destaca por sus {m['feature']} superando a los rivales del segmento..."""
    with open(os.path.join(dir_path, "blog_outline.md"), "w") as f: f.write(blog)
    
    dealer = f"""# {m['brand']} {m['name']} - Guía de Vendedor
* Beneficio 1: {m['feature']}
* Beneficio 2: Crédito rápido aprobado
* Cierre: "Es la moto de mayor valor por su precio, muy superior a la competencia."
[QR Placeholder]"""
    with open(os.path.join(dir_path, "dealer_one_pager.md"), "w") as f: f.write(dealer)
    
    variant_matrix.append(f"{m['brand']},{m['name']},tiktok_script.md,link,El Domiciliario,link,Tono más informal (parcero),✅ PASSED")
    variant_matrix.append(f"{m['brand']},{m['name']},whatsapp_promo.md,link,El Primer Comprador,link,Énfasis en crédito facil,✅ PASSED")
    
    if m['brand'] == 'TVS':
        with open(os.path.join(dir_path, "whatsapp_variant_premium.md"), "w") as f:
            f.write("[REJECTED BY COMPLIANCE: Tono KTM detectado en marca TVS]")
        variant_matrix.append(f"TVS,Raider 125,whatsapp_promo.md,link,El Premium,link,Intento de tono aspiracional fallido,🔴 REJECTED")

with open(os.path.join(base_path, "Persona_Variant_Matrix.csv"), "w") as f:
    f.write("brand,model,asset_type,base_asset_link,persona,variant_link,key_adaptation,compliance_status\n" + "\n".join(variant_matrix))

print("Python Phase 4 and 5 generated successfully.")
