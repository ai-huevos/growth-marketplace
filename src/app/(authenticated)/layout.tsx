import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Compass, BookCheck, Activity } from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "Roadmap", icon: Compass },
  { href: "/entregables", label: "Entregables", icon: BookCheck },
  { href: "/evaluacion", label: "Motor IA", icon: Activity },
];

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <aside className="hidden w-64 flex-col border-r bg-muted/10 md:flex">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-growos-primary shadow-sm">
              <span className="font-bold tracking-tighter text-white">GO</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-growos-primary">GrowthOS</span>
          </Link>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          <div className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main</div>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="group flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="border-t p-4">
          <div className="flex items-center gap-3 rounded-md px-3 py-2 bg-muted/30">
            <div className="h-8 w-8 rounded-full bg-growos-primary/10 flex items-center justify-center text-growos-primary font-bold">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">KAI Partners</span>
              <span className="text-xs text-muted-foreground">ATRAER</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 z-50 flex h-16 w-full border-t bg-background md:hidden">
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="flex flex-1 flex-col items-center justify-center gap-1 text-muted-foreground hover:text-growos-primary transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
