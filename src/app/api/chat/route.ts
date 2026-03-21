import { executeSkillStream } from '@/lib/ai/engine';
import { NextResponse } from 'next/server';

export const maxDuration = 120; // Expanded to 2 minutes to allow Double-Execution passes

export async function POST(req: Request) {
  try {
    const { messages, skillSlug, modelId } = await req.json();

    if (!skillSlug || !messages) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const result = await executeSkillStream(skillSlug, messages, modelId || 'claude-3-5-sonnet');
    return result.toTextStreamResponse();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
