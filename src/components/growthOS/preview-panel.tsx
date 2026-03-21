import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye } from "lucide-react";

interface PreviewPanelProps {
  content: string;
}

export function PreviewPanel({ content }: PreviewPanelProps) {
  return (
    <div className="flex h-full flex-col border-l bg-muted/20">
      <div className="flex items-center gap-2 border-b bg-background px-4 py-3 shadow-sm">
        <Eye className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Generando Entregable
        </h3>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="prose prose-sm max-w-none p-6 md:prose-base dark:prose-invert">
          {content ? (
            <ReactMarkdown>{content}</ReactMarkdown>
          ) : (
            <div className="flex h-[200px] items-center justify-center text-center text-sm text-muted-foreground p-8">
              Esperando contexto de la conversación para iniciar la generación del documento...
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
