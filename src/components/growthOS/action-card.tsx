import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileType2 } from "lucide-react";
import Link from "next/link";

export interface Skill {
  slug: string;
  name: string;
  description: string;
  estimatedMinutes: number;
  deliverableType: string;
  phase: "DEFINIR" | "ATRAER" | "CONVERTIR" | "ESCALAR";
}

interface ActionCardProps {
  skill: Skill;
}

export function ActionCard({ skill }: ActionCardProps) {
  return (
    <Card className="relative overflow-hidden border-growos-primary shadow-sm">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-growos-primary" />
      <CardHeader>
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-growos-primary">
          Tu Siguiente Acción
        </div>
        <CardTitle className="text-xl">{skill.name}</CardTitle>
        <CardDescription className="text-sm text-foreground/80 mt-1">
          {skill.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{skill.estimatedMinutes} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileType2 className="h-4 w-4" />
            <span>{skill.deliverableType}</span>
          </div>
        </div>
        <Link href={`/ejecutar/${skill.slug}`}>
          <Button className="w-full sm:w-auto bg-growos-primary hover:bg-growos-primary/90 text-white">
            Ejecutar Skill <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
