import { Link, Outlet } from "@tanstack/react-router";
import { MessageCircle, Menu, X, Phone, Instagram } from "lucide-react";
import { useState } from "react";
import { ZibbeLogo } from "./ZibbeLogo";

const WHATSAPP =
  "https://wa.me/5538999510974?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/ferramentas", label: "Ferramentas" },
  { to: "/epis", label: "EPIs" },
  { to: "/manutencao", label: "Manutenção" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary-deep text-primary-foreground/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <span className="uppercase tracking-widest">Três Marias - MG · Atendimento técnico especializado</span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-accent" /> (38) 3030-1035 · (38) 99951-0974 <MessageCircle className="h-3 w-3 text-accent" /></span>
            <span>Seg-Sex 07h-18h · Sáb 07h-12h</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b-2 border-accent/80 backdrop-blur supports-[backdrop-filter]:bg-primary/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4 py-3">
          <Link to="/" className="shrink-0">
            <ZibbeLogo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                activeOptions={{ exact: i.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-accent transition-colors group"
              >
                {i.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left data-[status=active]:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-accent-glow transition shadow-accent pulse-accent"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 rounded hover:bg-primary-foreground/10"
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-primary-foreground/10 bg-primary-deep animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
              {navItems.map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: i.to === "/" }}
                  activeProps={{ className: "text-accent border-l-accent" }}
                  className="px-4 py-3 text-sm font-semibold uppercase tracking-wide border-l-4 border-transparent hover:border-l-accent hover:text-accent transition-all"
                >
                  {i.label}
                </Link>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 mx-4 sm:hidden inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded font-bold text-sm uppercase"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating WhatsApp (desktop) */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-accent text-accent-foreground pl-4 pr-5 py-3.5 rounded-full shadow-accent pulse-accent hover:scale-105 transition-transform font-bold text-sm uppercase tracking-wide"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        Fale pelo WhatsApp
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-px bg-primary-deep border-t-2 border-accent shadow-2xl">
        <a
          href="tel:+5538999510974"
          className="flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide active:opacity-80"
          aria-label="Ligar para Zibbe"
        >
          <Phone className="h-4 w-4 text-accent" /> Ligar
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wide active:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> Orçamento
        </a>
      </div>
      <div className="md:hidden h-14" aria-hidden />

      <footer className="bg-primary-deep text-primary-foreground mt-20 border-t-4 border-accent">
        <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
          <div className="md:col-span-2">
            <ZibbeLogo />
            <p className="opacity-70 mt-4 max-w-sm leading-relaxed">
              Ferramentas, EPIs e assistência técnica especializada para empresas e
              profissionais em Três Marias - MG.
            </p>
            <a
              href="https://www.instagram.com/zibbeferramentas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold uppercase tracking-wide hover:text-accent transition"
              aria-label="Instagram da Zibbe"
            >
              <Instagram className="h-5 w-5 text-accent" />
              @zibbeferramentas
            </a>
          </div>
          <div>
            <div className="font-display font-bold text-base uppercase tracking-wider text-accent mb-3">Áreas</div>
            <ul className="space-y-2 opacity-90">
              <li><Link to="/ferramentas" className="hover:text-accent transition">Ferramentas</Link></li>
              <li><Link to="/epis" className="hover:text-accent transition">EPIs</Link></li>
              <li><Link to="/manutencao" className="hover:text-accent transition">Manutenção</Link></li>
              <li><Link to="/contato" className="hover:text-accent transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold text-base uppercase tracking-wider text-accent mb-3">Contato</div>
            <p className="opacity-90">Rua Curitiba, 12 - Centro</p>
            <p className="opacity-90">Três Marias - MG</p>
            <p className="opacity-90 mt-2">(38) 3030-1035 · Fixo</p>
            <p className="opacity-90 flex items-center gap-1.5">(38) 99951-0974 <MessageCircle className="h-3.5 w-3.5 text-accent" /> WhatsApp</p>
            <p className="opacity-90">contato@zibbe.com.br</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-5 text-center text-xs opacity-60 uppercase tracking-widest">
          © {new Date().getFullYear()} Zibbe Ferramentas e Manutenções
        </div>
      </footer>
    </div>
  );
}

export { WHATSAPP };
