import { executeSkillStream } from '@/lib/ai/engine';
import { NextResponse } from 'next/server';

export const maxDuration = 120; // Expanded to 2 minutes to allow Double-Execution passes

export async function POST(req: Request) {
  try {
    const { messages, skillSlug, modelId } = await req.json();

    if (!skillSlug || !messages) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.includes('your_')) {
      const mockText = `<meb_analysis>
- **Goal:** Mock generation for ${skillSlug} since no valid API keys are detected.
- **Action:** Generating a standard B2B Evidence Pack and Dummy Content to allow End-to-End UI testing.
- **UI Check:** The PreviewPanel should parse this block perfectly and display it nicely in the "Thinking..." accordion.
</meb_analysis>

# Entregable Generado (Modo Pruebas / MOCK)

Este es un documento generado **offline** porque no se detectaron claves de API de Anthropic, OpenAI o DeepSeek reales en el archivo \`.env.local\`.

## 💼 Evidence Pack
- **Racional Estratégico:** Pruebas E2E exitosas. UI responde correctamente a los bloqueos de estado de carga y parseo Markdown.
- **Riesgos Detectados:** La falta de llaves limitará la generación en producción. Agregue las claves para continuar.
- **B2B Risk Score:** 95/100 (Listo para producción una vez se agreguen las llaves).

### Siguientes Pasos
Ve al menú superior y presiona el botón **Guardar Entregable** para probar la inserción en la base de datos Supabase, y luego verifica la pestaña de Módulo de Motor IA.`;

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          const chunks = mockText.split(' ');
          for (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk + ' '));
            // Simulate 50ms latency per word to test UI loading states and streaming effect
            await new Promise(r => setTimeout(r, 50)); 
          }
          controller.close();
        }
      });
      return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    const result = await executeSkillStream(skillSlug, messages, modelId || 'claude-3-5-sonnet');
    return result.toTextStreamResponse();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
