"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function SyncDiagnostic() {
  const router = useRouter();
  const [isSyncing, setIsSyncing] = useState(true);
  const [hasPending, setHasPending] = useState(false);

  useEffect(() => {
    const pending = sessionStorage.getItem("pending_diagnostic");
    if (pending) {
      setHasPending(true);
      const answerIds = pending.split(",");
      fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answerIds }),
      }).then((res) => {
        if (res.ok) {
          sessionStorage.removeItem("pending_diagnostic");
          router.refresh(); // Refresh Server Components to show new data
        }
      }).catch(err => {
        console.error("Failed to sync diagnostics", err);
      }).finally(() => {
        setIsSyncing(false);
      });
    } else {
      setIsSyncing(false);
    }
  }, [router]);

  if (!hasPending) return null;

  return (
    <Card className="border-growos-primary/20 bg-growos-primary/5 mb-8">
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
  );
}
