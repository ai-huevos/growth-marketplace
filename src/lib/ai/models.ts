import { createOpenAI } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

// Setup OpenAI-compatible clients for DeepSeek and GLM
const deepseek = createOpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

const glm = createOpenAI({
  baseURL: 'https://open.bigmodel.cn/api/paas/v4',
  apiKey: process.env.GLM_API_KEY || '',
});

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const LLM_MODELS = {
  'claude-3-5-sonnet': anthropic('claude-3-5-sonnet-20241022'),
  'claude-3-opus': anthropic('claude-3-opus-20240229'),
  'gpt-4o': openai('gpt-4o'),
  'deepseek-chat': deepseek('deepseek-chat'),
  'glm-4': glm('glm-4'), // GLM-5 might be accessed under glm-4 namespace or directly as glm-5
} as const;

export type SupportedModel = keyof typeof LLM_MODELS;

export const MODEL_OPTIONS = [
  { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet (Anthropic)', tier: 'Fast & Smart' },
  { id: 'claude-3-opus', name: 'Claude 3 Opus (Anthropic)', tier: 'Deep Reasoning' },
  { id: 'gpt-4o', name: 'GPT-4o (OpenAI)', tier: 'Balanced' },
  { id: 'deepseek-chat', name: 'DeepSeek V3 (DeepSeek)', tier: 'High Volume/Value' },
  { id: 'glm-4', name: 'GLM 5 (ZhipuAI)', tier: 'Alternative Engine' },
];
