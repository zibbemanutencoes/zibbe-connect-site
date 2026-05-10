import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WHATSAPP } from "./SiteLayout";

export function WhatsAppButton({
  children = "Falar no WhatsApp",
  size = "md",
  variant = "accent",
}: {
  children?: React.ReactNode;
  size?: "md" | "lg";
  variant?: "accent" | "outline";
}) {
  const sz = size === "lg" ? "px-7 py-4 text-sm" : "px-5 py-3 text-xs";
  const styles =
    variant === "accent"
      ? "bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent"
      : "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground";
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 ${sz} rounded font-bold uppercase tracking-wider transition-all ${styles}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-y-0 right-0 w-2 bg-accent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] uppercase max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg opacity-85 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton size="lg" />
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-7 py-4 rounded text-sm font-bold uppercase tracking-wider border-2 border-primary-foreground/30 hover:border-accent hover:text-accent transition-all"
          >
            Outros contatos
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({
  text = "Vamos conversar?",
  subtitle = "Atendimento direto pelo WhatsApp para orçamentos, dúvidas e suporte técnico.",
}: { text?: string; subtitle?: string }) {
  return (
    <section className="relative bg-primary-deep text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 blur-3xl rounded-full" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-10 bg-accent" />
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.3em]">Fale com a Zibbe</span>
          <span className="h-px w-10 bg-accent" />
        </div>
        <h2 className="font-display font-black text-3xl md:text-5xl uppercase">{text}</h2>
        <p className="mt-4 opacity-85 max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WhatsAppButton size="lg">Chamar no WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li
          key={it}
          className="group flex items-center gap-3 bg-card border border-border rounded p-4 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" strokeWidth={2.5} />
          <span className="font-semibold">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl mb-10 ${a}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-accent" />
          <span className="text-primary font-bold text-xs uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
