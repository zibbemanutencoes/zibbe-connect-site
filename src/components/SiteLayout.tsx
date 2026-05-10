import { Link, Outlet } from "@tanstack/react-router";
import { MessageCircle, Wrench } from "lucide-react";

const WHATSAPP = "https://wa.me/5538999510974";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/ferramentas", label: "Ferramentas" },
  { to: "/epis", label: "EPIs" },
  { to: "/manutencao", label: "Manutenção" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="bg-accent text-accent-foreground rounded-md p-1.5">
              <Wrench className="h-4 w-4" />
            </span>
            <span className="text-base sm:text-lg">Zibbe</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                activeOptions={{ exact: i.to === "/" }}
                activeProps={{ className: "bg-primary-foreground/10 text-accent" }}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                {i.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
        <nav className="md:hidden border-t border-primary-foreground/10">
          <div className="max-w-6xl mx-auto px-2 py-2 flex flex-wrap gap-1 justify-center">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                activeOptions={{ exact: i.to === "/" }}
                activeProps={{ className: "bg-primary-foreground/10 text-accent" }}
                className="px-3 py-1.5 rounded text-xs font-medium hover:bg-primary-foreground/10"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <div className="font-bold text-base mb-2">Zibbe Ferramentas e Manutenções</div>
            <p className="opacity-80">Três Marias - MG</p>
            <p className="opacity-80">Rua Curitiba, 12 - Centro</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Áreas</div>
            <ul className="space-y-1 opacity-90">
              <li><Link to="/ferramentas" className="hover:text-accent">Ferramentas</Link></li>
              <li><Link to="/epis" className="hover:text-accent">EPIs</Link></li>
              <li><Link to="/manutencao" className="hover:text-accent">Manutenção</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contato</div>
            <p className="opacity-90">WhatsApp: (38) 99951-0974</p>
            <p className="opacity-90">gustavo@zibbe.com.br</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-2 rounded-md font-semibold hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Falar agora
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Zibbe Ferramentas e Manutenções - Três Marias - MG
        </div>
      </footer>
    </div>
  );
}

export { WHATSAPP };
