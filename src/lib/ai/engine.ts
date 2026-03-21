import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { getSystemPromptForSkill } from './templates';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executeSkillStream(skillSlug: string, messages: any[]) {
  const systemPrompt = getSystemPromptForSkill(skillSlug);

  return await streamText({
    model: anthropic('claude-3-5-sonnet-20241022'),
    system: systemPrompt,
    messages,
    temperature: 0.6,
  });
}
