import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, HardHat, Cog, ArrowRight, ShieldCheck, Truck, Headset, Award } from "lucide-react";
import { FinalCTA, SectionHeading, WhatsAppButton } from "@/components/Page";
import heroImg from "@/assets/hero-tools.jpg";
import epiImg from "@/assets/epi-worker.jpg";
import maintImg from "@/assets/maintenance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zibbe · Ferramentas, EPIs e Manutenção em Três Marias - MG" },
      {
        name: "description",
        content:
          "Loja de ferramentas, EPIs e assistência técnica especializada em Três Marias - MG. Atendimento profissional para empresas e profissionais.",
      },
      { property: "og:title", content: "Zibbe Ferramentas e Manutenções - Três Marias - MG" },
      {
        property: "og:description",
        content: "Ferramentas, EPIs e manutenção especializada para empresas e profissionais.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Wrench,
    title: "Ferramentas",
    desc: "Elétricas, a combustão e acessórios para uso profissional.",
    to: "/ferramentas" as const,
    img: heroImg,
  },
  {
    icon: HardHat,
    title: "EPIs",
    desc: "Equipamentos de proteção individual com qualidade certificada.",
    to: "/epis" as const,
    img: epiImg,
  },
  {
    icon: Cog,
    title: "Manutenção",
    desc: "Assistência técnica de ferramentas elétricas e a combustão.",
    to: "/manutencao" as const,
    img: maintImg,
  },
];

const trustBadges = [
  { icon: Award, title: "+10 anos", desc: "de experiência" },
  { icon: ShieldCheck, title: "Garantia", desc: "em todos os serviços" },
  { icon: Truck, title: "Entrega", desc: "em Três Marias e região" },
  { icon: Headset, title: "Suporte", desc: "técnico especializado" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Ferramentas profissionais Zibbe"
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/30" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.3em]">
                Três Marias - MG
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
              Ferramentas.
              <br />
              <span className="text-accent">EPIs.</span> Manutenção.
            </h1>
            <p className="mt-6 text-base md:text-xl opacity-90 max-w-xl leading-relaxed">
              Tudo o que sua obra, oficina ou empresa precisa — com atendimento técnico especializado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" />
              <Link
                to="/ferramentas"
                className="inline-flex items-center gap-2 px-7 py-4 rounded text-sm font-bold uppercase tracking-wider border-2 border-primary-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                Ver catálogo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {trustBadges.map((b) => (
                <div key={b.title} className="border-l-2 border-accent pl-4">
                  <b.icon className="h-5 w-5 text-accent mb-2" />
                  <div className="font-display font-bold uppercase text-lg leading-none">{b.title}</div>
                  <div className="text-xs opacity-70 mt-1">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* angled bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 0 100%)" }} />
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Soluções completas para profissionais"
          description="Da ferramenta certa ao EPI adequado e à manutenção que mantém tudo funcionando."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative overflow-hidden bg-primary-deep text-primary-foreground rounded-lg aspect-[4/5] flex flex-col justify-end shadow-industrial hover:shadow-accent transition-all"
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/70 to-transparent" />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-black uppercase tracking-widest px-2 py-1">
                0{i + 1}
              </div>
              <div className="relative p-6">
                <div className="inline-flex p-3 rounded bg-accent text-accent-foreground mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-black text-3xl uppercase">{s.title}</h3>
                <p className="text-sm opacity-85 mt-2">{s.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-bold uppercase tracking-wide text-accent group-hover:gap-3 gap-1.5 transition-all">
                  Ver mais <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -left-32 top-0 bottom-0 w-96 bg-accent/10 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.3em]">
                Para empresas
              </span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-tight">
              Atendimento <span className="text-accent">dedicado</span> para indústria e construção
            </h2>
            <p className="mt-5 opacity-85 max-w-lg">
              Fornecimento contínuo, contratos de manutenção preventiva e suporte técnico ágil.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Cotações rápidas via WhatsApp",
                "Manutenção preventiva e corretiva",
                "Equipe técnica qualificada",
                "Entrega em Três Marias e região",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 rotate-45 bg-accent" />
                  <span className="font-medium">{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton size="lg">Solicitar atendimento</WhatsAppButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-deep border-l-4 border-accent p-6 shadow-industrial">
              <div className="font-display text-6xl font-black text-accent leading-none">+10</div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-80">anos de mercado</div>
            </div>
            <div className="bg-primary-deep border-l-4 border-accent p-6 shadow-industrial mt-8">
              <div className="font-display text-6xl font-black text-accent leading-none">100%</div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-80">atendimento técnico</div>
            </div>
            <div className="bg-primary-deep border-l-4 border-accent p-6 shadow-industrial">
              <div className="font-display text-6xl font-black text-accent leading-none">24h</div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-80">resposta no WhatsApp</div>
            </div>
            <div className="bg-primary-deep border-l-4 border-accent p-6 shadow-industrial mt-8">
              <div className="font-display text-6xl font-black text-accent leading-none">MG</div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-80">Três Marias e região</div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
