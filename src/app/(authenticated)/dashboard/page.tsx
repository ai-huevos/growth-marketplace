"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  const [isSyncing, setIsSyncing] = useState(true);
  const [syncDone, setSyncDone] = useState(false);

  useEffect(() => {
    const syncDiagnostic = async () => {
      const pending = sessionStorage.getItem("pending_diagnostic");
      if (pending) {
        const answerIds = pending.split(",");
        try {
          const res = await fetch("/api/diagnostic", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answerIds }),
          });
          
          if (res.ok) {
            sessionStorage.removeItem("pending_diagnostic");
            setSyncDone(true);
          }
        } catch (err) {
          console.error("Failed to sync diagnostics", err);
        }
      }
      setIsSyncing(false);
    };

    syncDiagnostic();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-growos-primary">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bienvenido a tu Command Center operativo.</p>
        </div>
      </div>

      {(isSyncing || syncDone) && (
        <Card className="border-growos-primary/20 bg-growos-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              {isSyncing ? (
                <><Loader2 className="h-4 w-4 animate-spin text-growos-primary" /> Sincronizando Resultados...</>
              ) : (
                <><CheckCircle2 className="h-5 w-5 text-growos-success" /> Resultados Sincronizados</>
              )}
            </CardTitle>
            <CardDescription>
              Hemos vinculado exitosamente tu diagnóstico inicial a tu nuevo workspace.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tu Fase Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-growos-primary">ATRAER</div>
            <p className="text-xs text-muted-foreground mt-1">Enfoque: Generación de Demanda</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Clarity Quotient</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-growos-primary">54/100</div>
            <p className="text-xs text-growos-warning mt-1">Requiere atención en Urgencia</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Entregables Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-growos-primary">0/12</div>
            <p className="text-xs text-muted-foreground mt-1">Este trimestre</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
