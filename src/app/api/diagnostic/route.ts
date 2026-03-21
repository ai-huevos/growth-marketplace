import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { calculateScore } from '@/lib/diagnostic/scoring';
import { determineNextPhase } from '@/lib/diagnostic/routing';

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { answerIds } = await request.json();

    if (!answerIds || !Array.isArray(answerIds)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Get the user's orgid
    const { data: profile } = await supabase
      .from('profiles')
      .select('org_id')
      .eq('id', user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Calculate metrics server-side
    const { pulso, clarQ } = calculateScore(answerIds);
    const phase = determineNextPhase({ pulso, clarQ });

    // Insert results into the DB
    const { data, error } = await supabase
      .from('diagnostic_results')
      .insert({
        org_id: profile.org_id,
        raw_answers: answerIds,
        pulso_score: pulso,
        clarq_score: clarQ,
        recommended_phase: phase
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
