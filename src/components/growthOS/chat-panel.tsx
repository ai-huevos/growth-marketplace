import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  messages: Message[];
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatPanel({ messages, onSend, isLoading }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-6"
      >
        {messages.map((m) => (
          <div key={m.id} className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar className="h-8 w-8 mt-1 border">
                <AvatarFallback className={m.role === 'assistant' ? 'bg-growos-primary text-white' : 'bg-muted'}>
                  {m.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                </AvatarFallback>
              </Avatar>
              <div className={`rounded-xl px-4 py-3 text-sm flex flex-col ${
                m.role === 'user' 
                  ? 'bg-muted text-foreground' 
                  : 'bg-growos-primary/5 border border-growos-primary/10 shadow-sm'
              }`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex w-full justify-start">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarFallback className="bg-growos-primary text-white">
                  <Bot size={16} />
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center rounded-xl bg-growos-primary/5 px-4 py-3 shadow-sm">
                <Loader2 className="h-4 w-4 animate-spin text-growos-primary" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu respuesta..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isLoading} className="bg-growos-primary text-white hover:bg-growos-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
