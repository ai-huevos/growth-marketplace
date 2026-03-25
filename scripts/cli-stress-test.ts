import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { getSystemPromptForSkill } from '../src/lib/ai/templates';
import Anthropic from '@anthropic-ai/sdk';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function runStressTest() {
  console.log("🚀 Iniciando Motor Estratégico B2B (MEB) Stress Test...");
  
  if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.includes('your_anthropic')) {
    console.error("❌ ERROR: ANTHROPIC_API_KEY is missing or invalid in .env.local");
    console.error("Please add a real key to run this live CLI test.");
    process.exit(1);
  }

  // Define a test scenario for the Ideal Customer Profile skill
  const skillSlug = "ideal-customer-profile";
  const systemPrompt = getSystemPromptForSkill(skillSlug);
  
  const userContext = `
    Nuestra empresa ofrece un software SaaS de gestión logística para PyMEs en Latinoamérica. 
    Actualmente nos compran dueños de empresas, pero las ventas son lentas porque el ticket es de $500/mes. 
    Queremos enfocarnos en empresas más grandes (mid-market) donde el gerente de operaciones sea el tomador de decisión.
  `;

  console.log(`\n🧠 Model: Claude-3.5-Sonnet`);
  console.log(`🎯 Skill: ${skillSlug}`);
  console.log(`⏳ Generando respuesta (puede tomar 10-20 segundos)...\n`);

  try {
    const startTime = Date.now();
    
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: userContext
        }
      ]
    });

    const latency = ((Date.now() - startTime) / 1000).toFixed(2);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content = (msg.content[0] as any).text as string;

    console.log(`✅ ¡Completado en ${latency}s!`);
    console.log(`📊 Input Tokens: ${msg.usage?.input_tokens} | Output Tokens: ${msg.usage?.output_tokens}`);

    const outDir = join(process.cwd(), 'tests', 'outputs');
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    const filepath = join(outDir, `stress_test_${skillSlug}_${Date.now()}.md`);
    writeFileSync(filepath, content, 'utf8');

    console.log(`\n📄 Resultado guardado en: ${filepath}`);
    console.log(`\nAbre el archivo para analizar el <meb_analysis> interno y el Evidence Pack generado.\n`);

  } catch (error) {
    console.error("❌ API Error:", error);
  }
}

runStressTest();
