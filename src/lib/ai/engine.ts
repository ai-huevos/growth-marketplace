import { streamText } from 'ai';
import { getSystemPromptForSkill } from './templates';
import { LLM_MODELS, SupportedModel } from './models';
import type { createClient } from '@/lib/supabase/server';

// Authenticated context needed to write ai_execution_logs. Resolved by the
// caller (route handler, which has cookie access) before streaming starts.
export interface ExecutionLogContext {
  supabase: ReturnType<typeof createClient>;
  orgId: string;
  profileId: string;
}

export async function executeSkillStream(
  skillSlug: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any[],
  modelId: SupportedModel,
  logContext?: ExecutionLogContext
) {
  const systemPrompt = getSystemPromptForSkill(skillSlug);
  const selectedModel = LLM_MODELS[modelId] || LLM_MODELS['claude-3-5-sonnet'];
  const startedAt = Date.now();

  // SINGLE-PASS ADW PIPELINE
  // We rely entirely on the System Prompt's ADW constraints (Inner Monologue + Evidence Pack)
  // to achieve superior reasoning in a single deterministic stream.
  return await streamText({
    model: selectedModel,
    system: systemPrompt,
    messages,
    temperature: 0.6,
    onFinish: async ({ totalUsage }) => {
      // Unauthenticated / dev-mode requests have no log context — skip silently.
      if (!logContext) return;

      try {
        await logContext.supabase.from('ai_execution_logs').insert({
          org_id: logContext.orgId,
          profile_id: logContext.profileId,
          skill_slug: skillSlug,
          model_id: modelId,
          latency_ms: Date.now() - startedAt,
          prompt_tokens: totalUsage.inputTokens ?? null,
          completion_tokens: totalUsage.outputTokens ?? null,
        });
      } catch {
        // Never break the chat flow on a logging failure.
      }
    },
  });
}
