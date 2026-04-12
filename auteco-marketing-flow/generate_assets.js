const fs = require('fs');
const path = require('path');

const models = [
    { brand: 'BAJAJ', model: 'Boxer_CT_100', name: 'Boxer CT 100', feature: 'Mayor rendimiento de ciudad, repuestos baratos', spec: 'Motor 4 tiempos 102cc', tag: 'Ahorro' },
    { brand: 'TVS', model: 'Raider_125', name: 'Raider 125', feature: 'Tablero digital y modos de manejo', spec: 'Motor 3 válvulas, 12.7 HP', tag: 'Tecnología' },
    { brand: 'VICTORY', model: 'MRX_150', name: 'MRX 150', feature: 'Suspensión alta y llantas off-road', spec: 'Suspension horquilla telescópica', tag: 'Aventura' },
    { brand: 'KTM', model: 'Duke_390', name: 'Duke 390', feature: 'Modo Supermoto y Quickshifter+', spec: '44 HP, chasis multitubular', tag: 'Velocidad' },
    { brand: 'Husqvarna', model: 'Norden_901', name: 'Norden 901', feature: 'Control de tracción cornering y tanque 19L', spec: '105 HP, 2 cilindros paralelos', tag: 'Exploración' }
];

const basePath = path.join(__dirname, 'Demo_Outputs', 'Phase4_5');

// For prompt 5
const variantMatrix = [];

models.forEach(m => {
    const dir = path.join(basePath, `${m.brand}_${m.model}`);
    
    // Asset 1: TikTok
    const tiktok = `(Gancho: Primer plano del tablero/llanta de la ${m.name})
"¿Cansado de motos que no rinden? Parceros, la nueva ${m.brand} ${m.name} viene con ${m.feature}.
¡Pura potencia de ${m.spec}! Saca tu crédito directo y llevatela hoy. #MotosColombia #${m.brand}"`;
    fs.writeFileSync(path.join(dir, 'tiktok_script.md'), tiktok);

    // Asset 2: WhatsApp
    const wa = `¡Hola! 👋 La nueva ${m.brand} ${m.name} está brutal.
Aprovecha su ${m.feature} (${m.spec}). 
Consíguela AHORA con CRÉDITO FÁCIL sin cuota inicial.
👉 Encuentra tu concesionario ${m.brand} más cercano aquí: [link]`;
    fs.writeFileSync(path.join(dir, 'whatsapp_promo.md'), wa);

    // Asset 3: IG
    const ig = `Slide 1: ¡Conoce la ${m.brand} ${m.name}!
Slide 2: ${m.spec}
Slide 3: ${m.feature}
Slide 4: ${m.brand} respalda tu camino.
Slide 5: ¡Pregunta por tu crédito hoy!`;
    fs.writeFileSync(path.join(dir, 'instagram_carousel_brief.md'), ig);

    // Asset 4: Blog
    const blog = `# Todo lo que debes saber de la ${m.brand} ${m.name}
## La mejor ${m.tag} del 2026
La ${m.name} destaca por sus ${m.feature} superando a los rivales del segmento...`;
    fs.writeFileSync(path.join(dir, 'blog_outline.md'), blog);

    // Asset 5: Dealer
    const dealer = `# ${m.brand} ${m.name} - Guía de Vendedor
* Beneficio 1: ${m.feature}
* Beneficio 2: Crédito rápido aprobado
* Cierre: "Es la moto de mayor valor por su precio, muy superior a la competencia."`;
    fs.writeFileSync(path.join(dir, 'dealer_one_pager.md'), dealer);

    // Variants Phase 5 logic - just generating the CSV entries
    variantMatrix.push(`${m.brand},${m.name},tiktok_script.md,link,El Domiciliario,link,Tono más informal (parcero),✅ PASSED`);
    variantMatrix.push(`${m.brand},${m.name},whatsapp_promo.md,link,El Primer Comprador,link,Énfasis en crédito facil,✅ PASSED`);
    
    // Write actual Variant files for the Demo (TVS Raider specifically)
    if(m.brand === 'TVS') {
        fs.writeFileSync(path.join(dir, 'whatsapp_variant_premium.md'), `[REJECTED BY COMPLIANCE: Tono KTM detectado en marca TVS]`);
        variantMatrix.push(`TVS,Raider 125,whatsapp_promo.md,link,El Premium,link,Intento de tono aspiracional fallido,🔴 REJECTED`);
    }
});

fs.writeFileSync(path.join(basePath, 'Persona_Variant_Matrix.csv'), `brand,model,asset_type,base_asset_link,persona,variant_link,key_adaptation,compliance_status\n` + variantMatrix.join('\n'));
console.log("Phase 4 and 5 generated successfully.");
