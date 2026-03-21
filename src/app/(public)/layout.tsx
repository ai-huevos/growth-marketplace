import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhaseBar } from "@/components/growthOS/phase-bar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-growos-primary flex items-center justify-center">
              <span className="font-bold text-white tracking-tighter">GO</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-growos-primary">GrowthOS</span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8">
             <PhaseBar currentPhase="DEFINIR" completedPhases={[]} />
          </div>

          <nav className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Iniciar sesión
            </Link>
            <Link href="/diagnostico">
              <Button className="bg-growos-primary text-white hover:bg-growos-primary/90">
                Diagnóstico Gratuito
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
