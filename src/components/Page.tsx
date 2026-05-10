import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WHATSAPP } from "./SiteLayout";

export function WhatsAppButton({
  children = "Falar no WhatsApp",
  size = "md",
}: {
  children?: React.ReactNode;
  size?: "md" | "lg";
}) {
  const sz = size === "lg" ? "px-6 py-4 text-base" : "px-5 py-3 text-sm";
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-accent text-accent-foreground ${sz} rounded-md font-semibold shadow-sm hover:opacity-90 transition`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground border-b-4 border-accent">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        {eyebrow && (
          <div className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-6">
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ text = "Pronto para falar com a Zibbe?" }: { text?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{text}</h2>
        <p className="mt-3 opacity-90">
          Atendimento rápido pelo WhatsApp para orçamentos, dúvidas e suporte técnico.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppButton size="lg">Chamar no WhatsApp</WhatsAppButton>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-md font-semibold border border-primary-foreground/30 hover:bg-primary-foreground/10"
          >
            Outras formas de contato <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {items.map((it) => (
        <li
          key={it}
          className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="font-medium">{it}</span>
        </li>
      ))}
    </ul>
  );
}
