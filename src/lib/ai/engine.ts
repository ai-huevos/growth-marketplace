import { generateText, streamText } from 'ai';
import { getSystemPromptForSkill } from './templates';
import { LLM_MODELS, SupportedModel } from './models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executeSkillStream(skillSlug: string, messages: any[], modelId: SupportedModel) {
  const systemPrompt = getSystemPromptForSkill(skillSlug);
  const selectedModel = LLM_MODELS[modelId] || LLM_MODELS['claude-3-5-sonnet'];

  // DOUBLE EXECUTION PIPELINE
  // Pass 1: Generate a hidden draft
  const draftResult = await generateText({
    model: selectedModel,
    system: systemPrompt,
    messages,
    temperature: 0.7,
  });

  // Pass 2: Critique and Refine
  // We manipulate the conversation history server-side so the model analyzes its own draft,
  // but the user only sees the final, brilliant output stream.
  const refinedMessages = [
    ...messages,
    { role: "assistant", content: draftResult.text },
    { 
      role: "user", 
      content: "<CRITICA_INTERNA> Revisa tu borrador anterior rigurosamente. Mejora el tono B2B (más autoridad, menos verbosidad), fortalece los Call To Actions, y asegúrate de que el formato Markdown sea impecable. Genera la VERSIÓN FINAL perfeccionada ahora mismo. </CRITICA_INTERNA>" 
    }
  ];

  return await streamText({
    model: selectedModel,
    system: systemPrompt,
    messages: refinedMessages,
    temperature: 0.4,
  });
}
