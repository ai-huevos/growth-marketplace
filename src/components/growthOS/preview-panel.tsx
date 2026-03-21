"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Bot, ChevronDown, ChevronRight, BrainCircuit } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function PreviewPanel({ content }: { content: string }) {
  // ADW PARSER: Extract the <meb_analysis> block for the "Thinking" UI
  const thinkingMatch = content.match(/<meb_analysis>([\s\S]*?)(?:<\/meb_analysis>|$)/);
  const isThinkingStarted = content.includes('<meb_analysis>');
  const isThinkingClosed = content.includes('</meb_analysis>');
  const rawThinkingText = thinkingMatch ? thinkingMatch[1] : null;
  
  // Extract the actual deliverable markdown, removing the thinking block
  const finalMarkdown = content.replace(/<meb_analysis>[\s\S]*?(?:<\/meb_analysis>|$)/, '').trim();

  const [thinkingExpanded, setThinkingExpanded] = useState(true);

  return (
    <div className="flex h-full flex-col bg-muted/20 relative">
      <div className="flex h-12 shrink-0 items-center justify-between border-b px-6 bg-background/50 backdrop-blur-sm z-10">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <Bot className="h-4 w-4 text-growos-primary" />
          Previsualización del Entregable
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-8 relative">
        {/* Empty State */}
        {!content && (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50 space-y-4">
            <Bot className="h-16 w-16" />
            <p className="text-sm">El Motor Estratégico está a la espera de instrucciones...</p>
          </div>
        )}

        {/* MEB Inner Monologue (ADW Chain of Thought) */}
        {isThinkingStarted && (
          <div className="mb-8 border rounded-lg bg-background overflow-hidden shadow-sm transition-all duration-300">
            <button 
              onClick={() => setThinkingExpanded(!thinkingExpanded)}
              className="w-full flex items-center justify-between px-4 py-3 bg-muted/40 hover:bg-muted/60 transition-colors text-xs font-semibold tracking-wider uppercase text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <BrainCircuit className={cn("h-4 w-4 text-blue-500", !isThinkingClosed && "animate-pulse")} />
                Monólogo Interno B2B {isThinkingClosed ? "(Completado)" : "(Calculando...)"}
              </div>
              {thinkingExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            
            {thinkingExpanded && rawThinkingText && (
              <div className="px-4 py-4 text-sm font-mono text-muted-foreground bg-slate-50/50 dark:bg-slate-950/20 whitespace-pre-wrap border-t border-muted/50">
                {rawThinkingText}
                {!isThinkingClosed && <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse align-middle" />}
              </div>
            )}
          </div>
        )}

        {/* Final Markdown Deliverable */}
        {finalMarkdown && (
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none 
                          prose-headings:text-foreground prose-headings:font-bold 
                          prose-p:leading-relaxed prose-p:text-muted-foreground
                          prose-strong:text-foreground prose-strong:font-bold
                          prose-table:border prose-table:rounded-lg prose-th:bg-muted/50 prose-td:p-3
                          prose-li:marker:text-growos-primary prose-a:text-growos-primary
                          bg-background p-8 rounded-xl border shadow-sm"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {finalMarkdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
