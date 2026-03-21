import { streamText } from 'ai';
import { getSystemPromptForSkill } from './templates';
import { LLM_MODELS, SupportedModel } from './models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executeSkillStream(skillSlug: string, messages: any[], modelId: SupportedModel) {
  const systemPrompt = getSystemPromptForSkill(skillSlug);
  const selectedModel = LLM_MODELS[modelId] || LLM_MODELS['claude-3-5-sonnet'];

  // SINGLE-PASS ADW PIPELINE
  // We rely entirely on the System Prompt's ADW constraints (Inner Monologue + Evidence Pack) 
  // to achieve superior reasoning in a single deterministic stream.
  return await streamText({
    model: selectedModel,
    system: systemPrompt,
    messages,
    temperature: 0.6,
  });
}
