const fs = require('fs');
const path = require('path');

console.log("==================================================");
console.log("🚀 KAI PARTNERS: AUTECO MARKETING ATOMIZER PROTOTYPE");
console.log("==================================================\n");

// Phase 1: Context (Ingest)
console.log("[PHASE 1: CONTEXT INGESTION]");
const specPath = path.join(__dirname, '../docs/dummy-auteco-spec-sheet.md');
if (!fs.existsSync(specPath)) {
    console.error("❌ Spec sheet not found!");
    process.exit(1);
}
const rawContext = fs.readFileSync(specPath, 'utf8');
console.log(`✅ Ingested: "AUTECO TVS Raider 125 Specs" (${rawContext.length} bytes)`);

// Simulated Extraction
const extractedMetrics = {
    model: "TVS Raider 125",
    price: "$7,499,000 COP",
    economy: "250 km/galón",
    key_features: ["Tablero Digital LCD", "Cargador USB", "Modos de Manejo"],
    benefits: ["Financiación 0% inicial", "800+ centros de servicio"]
};
console.log(`✅ Extracted key metrics: ${JSON.stringify(extractedMetrics)}\n`);


// Phase 2: Plan (Strategy & Atomization)
console.log("[PHASE 2: PLAN & ATOMIZATION BLUEPRINT]");
const blueprint = [
    { type: "tiktok_script", persona: "Delivery Driver", objective: "Highlight fuel economy and USB charger" },
    { type: "whatsapp_promo", persona: "First-time buyer", objective: "Highlight 0% financing and low price" }
];
console.log(`✅ Blueprint Generated: 2 Target Assets\n`);


// Phase 3 & 4: Suit + Build (Simulated LLM Generation with Brand Rules)
console.log("[PHASE 3 & 4: BRAND SUIT ENFORCEMENT & BUILD]");
console.log("🛡️ Loading Suit: auteco-brand.md (B2C Retail, Colombian Spanish, No B2B Jargon)");

const generatedAssets = [];
blueprint.forEach(asset => {
    console.log(`⚙️ Generating: ${asset.type}...`);
    let copy = "";
    if (asset.type === "tiktok_script") {
        copy = `(Gancho Visual: Repartidor acelerando en la ciudad)
"Parcero, si está camellando todo el día en la calle, necesita una máquina que no le pida gasolina a cada rato. 
La nueva ${extractedMetrics.model} le da hasta ${extractedMetrics.economy}. Y ojo, trae cargador USB de fábrica para que el celu nunca se le apague en pleno pedido. 
Llegue a cualquier concesionario AUTECO y sáquela a crédito. ¡Pruébela hoy!"`;
    } else if (asset.type === "whatsapp_promo") {
        copy = `¡Hola! 👋 ¿Buscando tu primera moto? 
La ${extractedMetrics.model} está bestial y es tuya por solo ${extractedMetrics.price}.
Lo mejor: Te damos financiación rápida. ¡Puedes sacarla con 0% de cuota inicial! 
Respaldo total de la red AUTECO a nivel nacional. 
👉 Responde este mensaje con la palabra "CRÉDITO" y te enviamos la pre-aprobación en 30 minutos.`;
    }
    
    generatedAssets.push({ type: asset.type, copy });
});
console.log("✅ Assets Generated.\n");


// Phase 5: Test (Compliance & Verification)
console.log("[PHASE 5: TEST & VERIFICATION]");
let testsPassed = true;
generatedAssets.forEach(asset => {
    console.log(`🔍 Testing [${asset.type}]...`);
    
    // Rule 1: Must include CTA for Financing/Crédito
    const hasCredit = asset.copy.toLowerCase().includes("crédito") || asset.copy.toLowerCase().includes("financiación");
    if (!hasCredit) {
        console.error(`  ❌ FAILED: Missing 'Crédito' or 'Financiación' keyword.`);
        testsPassed = false;
    } else {
        console.log(`  ✅ PASSED: Verifiable B2C CTA included.`);
    }

    // Rule 2: Must mention AUTECO
    const hasBrand = asset.copy.toLowerCase().includes("auteco");
    if (!hasBrand) {
        console.error(`  ❌ FAILED: Missing 'AUTECO' brand mention.`);
        testsPassed = false;
    } else {
         console.log(`  ✅ PASSED: Brand presence verified.`);
    }

    // Rule 3: Anti-pattern check (B2B wording)
    const hasB2B = asset.copy.toLowerCase().includes("sinergia") || asset.copy.toLowerCase().includes("b2b");
    if (hasB2B) {
        console.error(`  ❌ FAILED: Found B2B forbidden wording.`);
        testsPassed = false;
    } else {
        console.log(`  ✅ PASSED: Brand tone is purely B2C.`);
    }
});
console.log("");


// Phase 6: Ship
console.log("[PHASE 6: REVIEW & SHIP]");
if (testsPassed) {
    console.log("🟢 All Quality Gates Passed. Assets are staged for Human-in-the-Loop review.");
    console.log("📦 Target Destinations: Meta Ads API, Twilio WhatsApp API.");
} else {
    console.log("🔴 Quality Gates Failed. Assets routed back to BUILD phase.");
}

console.log("\n==================================================");
console.log("🏁 END OF ATOMIZER WORKFLOW");
console.log("==================================================");
