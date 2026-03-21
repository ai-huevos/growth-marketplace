import { executeSkillStream } from '@/lib/ai/engine';
import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages, skillSlug } = await req.json();

    if (!skillSlug || !messages) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const result = await executeSkillStream(skillSlug, messages);
    return result.toTextStreamResponse();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
