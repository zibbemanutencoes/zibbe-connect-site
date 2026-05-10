import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP } from "./SiteLayout";
import { Reveal } from "./Reveal";

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
      ? "bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent hover:-translate-y-0.5"
      : "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground";
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 ${sz} rounded font-bold uppercase tracking-wider transition-all duration-300 ${styles}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
      <div className="absolute inset-0 grid-bg opacity-50" />
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-transparent" />
        </>
      )}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-accent/15 blur-3xl rounded-full float-slow" />
      <div className="absolute inset-y-0 right-0 w-1.5 bg-accent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-20 md:py-28">
        {eyebrow && (
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="text-accent font-semibold text-[11px] uppercase tracking-[0.3em]">
                {eyebrow}
              </span>
            </div>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-5 text-base md:text-lg opacity-85 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={240}>
          <div className="mt-9">
            <WhatsAppButton size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA({
  text = "Vamos conversar?",
  subtitle = "Atendimento direto pelo WhatsApp para orçamentos e suporte técnico.",
}: { text?: string; subtitle?: string }) {
  return (
    <section className="relative bg-primary-deep text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-accent/15 blur-3xl rounded-full" />
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-accent font-semibold text-[11px] uppercase tracking-[0.3em]">
              Fale com a Zibbe
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-[0.95]">
            {text}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 opacity-80 max-w-md mx-auto">{subtitle}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap justify-center">
            <WhatsAppButton size="lg">Chamar no WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Reveal as="li" key={it} delay={i * 40}>
          <div className="hover-lift flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-accent shadow-soft hover:shadow-industrial">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" strokeWidth={2.5} />
            <span className="font-semibold">{it}</span>
          </div>
        </Reveal>
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
    <Reveal>
      <div className={`max-w-2xl mb-12 ${a}`}>
        {eyebrow && (
          <div className={`inline-flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-6 bg-accent" />
            <span className="text-primary font-bold text-[11px] uppercase tracking-[0.3em]">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="font-display font-black text-3xl md:text-5xl uppercase leading-[0.95]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
