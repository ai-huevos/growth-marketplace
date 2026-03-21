import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Deliverable {
  id: string;
  title: string;
  skillName: string;
  qualityScore: number;
  date: string;
  phase: "DEFINIR" | "ATRAER" | "CONVERTIR" | "ESCALAR";
}

interface DeliverableCardProps {
  deliverable: Deliverable;
}

export function DeliverableCard({ deliverable }: DeliverableCardProps) {
  const phaseColors = {
    DEFINIR: "bg-phase-definir/10 text-phase-definir hover:bg-phase-definir/20",
    ATRAER: "bg-phase-atraer/10 text-phase-atraer hover:bg-phase-atraer/20",
    CONVERTIR: "bg-phase-convertir/10 text-phase-convertir hover:bg-phase-convertir/20",
    ESCALAR: "bg-phase-escalar/10 text-phase-escalar hover:bg-phase-escalar/20",
  };

  const scoreColor = deliverable.qualityScore >= 80 
    ? "text-growos-success" 
    : deliverable.qualityScore >= 50 
      ? "text-growos-warning" 
      : "text-growos-danger";

  return (
    <Card className="flex flex-col justify-between overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <Badge className={phaseColors[deliverable.phase]} variant="secondary">
            {deliverable.skillName}
          </Badge>
          <div className={`font-mono text-sm font-bold ${scoreColor}`}>
            {deliverable.qualityScore}/100
          </div>
        </div>
        <CardTitle className="mt-3 line-clamp-2 text-lg leading-tight">
          {deliverable.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 py-2">
        <div className="flex h-24 items-center justify-center rounded-md border border-dashed bg-muted/50">
          <FileText className="h-8 w-8 text-muted-foreground/50" />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t bg-muted/20 p-4 py-3">
        <span className="text-xs text-muted-foreground">{deliverable.date}</span>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Download className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
