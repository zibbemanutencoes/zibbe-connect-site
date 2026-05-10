import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, HardHat, Cog, ArrowRight, ShieldCheck } from "lucide-react";
import { FinalCTA, SectionHeading, WhatsAppButton } from "@/components/Page";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-tools.jpg";
import epiImg from "@/assets/epi-worker.jpg";
import maintImg from "@/assets/maintenance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ferramentas, EPIs e manutenção de ferramentas em Três Marias | Zibbe",
      },
      {
        name: "description",
        content:
          "Atendimento especializado para indústrias, empresas, profissionais e hobbystas em Três Marias - MG. Ferramentas elétricas, equipamentos a combustão, EPIs e manutenção de ferramentas.",
      },
      {
        property: "og:title",
        content: "Ferramentas, EPIs e manutenção de ferramentas em Três Marias",
      },
      {
        property: "og:description",
        content:
          "Manutenção de ferramentas elétricas, equipamentos a combustão, EPIs e ferramentas profissionais em Três Marias - MG.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Wrench, title: "Ferramentas", desc: "Elétricas, a combustão e acessórios.", to: "/ferramentas" as const, img: heroImg },
  { icon: HardHat, title: "EPIs", desc: "Proteção certificada para o trabalho.", to: "/epis" as const, img: epiImg },
  { icon: Cog, title: "Manutenção", desc: "Diagnóstico e reparo especializado.", to: "/manutencao" as const, img: maintImg },
];

const trust = [
  { icon: Wrench, title: "Elétricas", label: "manutenção especializada" },
  { icon: Cog, title: "Combustão", label: "equipamentos a combustão" },
  { icon: ShieldCheck, title: "EPIs", label: "equipamentos certificados" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary-deep text-primary-foreground overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/90 to-primary-deep/20" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-accent/15 blur-3xl rounded-full float-slow" />
        <div className="absolute bottom-0 right-0 w-1.5 h-2/3 bg-accent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-5 glass px-3 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-accent" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold">
                  Três Marias - MG
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] uppercase">
                Ferramentas, <span className="text-accent">EPIs</span>
                <br />
                e assistência técnica
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-5 text-sm sm:text-base md:text-lg opacity-90 max-w-lg leading-relaxed">
                Manutenção de ferramentas elétricas e equipamentos a combustão em Três Marias - MG.
              </p>
              <p className="mt-2 text-xs sm:text-sm opacity-70 max-w-lg leading-relaxed">
                Atendimento para indústrias, empresas, profissionais e hobbystas.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-3">
                <WhatsAppButton size="lg">Solicitar orçamento no WhatsApp</WhatsAppButton>
                <Link
                  to="/ferramentas"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded text-sm font-bold uppercase tracking-wider glass hover:border-accent hover:text-accent transition-all duration-300"
                >
                  Ver catálogo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-wider opacity-80">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Indústrias e empresas</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Profissionais e hobbystas</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Loja física em Três Marias</span>
              </div>
            </Reveal>
          </div>

          {/* trust strip */}
          <Reveal delay={400}>
            <div className="mt-16 md:mt-24 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
              {trust.map((b) => (
                <div
                  key={b.title}
                  className="glass rounded-lg p-4 sm:p-5 hover-lift hover:border-accent/50"
                >
                  <b.icon className="h-5 w-5 text-accent mb-2 sm:mb-3" />
                  <div className="font-display font-black uppercase text-2xl sm:text-3xl leading-none">
                    {b.title}
                  </div>
                  <div className="text-[10px] sm:text-xs opacity-70 mt-1.5 uppercase tracking-wider">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Soluções completas"
          description="Da ferramenta ao EPI, com manutenção que mantém tudo funcionando."
        />
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link
                to={s.to}
                className="group hover-lift relative block overflow-hidden bg-primary-deep text-primary-foreground rounded-xl aspect-[4/5] shadow-industrial hover:shadow-accent"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/85 to-primary-deep/20" />
                <div className="absolute top-5 left-5 text-accent font-display font-black text-xs tracking-[0.3em]">
                  0{i + 1}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="inline-flex p-3 rounded-lg bg-accent text-accent-foreground mb-5 shadow-accent group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="h-6 w-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-black text-3xl md:text-4xl uppercase leading-none">
                    {s.title}
                  </h3>
                  <p className="text-sm opacity-80 mt-3 max-w-[18ch]">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-accent gap-2 group-hover:gap-3 transition-all">
                    Ver mais <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMPANIES */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -left-40 top-0 bottom-0 w-[28rem] bg-accent/10 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-accent" />
                <span className="text-accent font-semibold text-[11px] uppercase tracking-[0.3em]">
                  Para empresas
                </span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-[0.95]">
                Atendimento <span className="text-accent">dedicado</span>
              </h2>
              <p className="mt-5 opacity-85 max-w-md">
                Fornecimento contínuo, manutenção preventiva e suporte técnico ágil.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Cotações rápidas via WhatsApp",
                  "Manutenção preventiva e corretiva",
                  "Equipe técnica qualificada",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rotate-45 bg-accent" />
                    <span className="font-medium">{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <WhatsAppButton size="lg">Solicitar atendimento</WhatsAppButton>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {[
              { v: "Indústrias", l: "fornecimento e manutenção" },
              { v: "Empresas", l: "atendimento dedicado" },
              { v: "Profissionais", l: "ferramentas profissionais" },
              { v: "Hobbystas", l: "suporte e peças" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 80}>
                <div className={`hover-lift bg-primary-deep border-l-2 border-accent p-6 sm:p-7 shadow-industrial rounded-r ${i % 2 ? "mt-6" : ""}`}>
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-accent leading-none break-words">
                    {s.v}
                  </div>
                  <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-80">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-24 md:py-28 grid lg:grid-cols-3 gap-10">
          <Reveal>
            <div className="lg:col-span-1">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-primary font-bold text-[11px] uppercase tracking-[0.3em]">
                  Atendimento regional
                </span>
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase leading-[0.95]">
                Referência em <span className="text-accent">Três Marias - MG</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                A Zibbe Ferramentas e Manutenções atua em Três Marias MG
                oferecendo ferramentas, EPIs e manutenção de ferramentas
                elétricas e equipamentos a combustão. Atendemos indústrias,
                empresas, profissionais e hobbystas com foco em qualidade,
                agilidade e atendimento especializado.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                {
                  t: "Ferramentas em Três Marias",
                  d: "Ferramentas elétricas, a combustão e acessórios para uso profissional, indústrias, empresas e hobbystas.",
                },
                {
                  t: "Loja de EPI em Três Marias",
                  d: "Linha completa de equipamentos de segurança e EPIs certificados para empresas e profissionais.",
                },
                {
                  t: "Manutenção de ferramentas elétricas",
                  d: "Diagnóstico, troca de peças e reparo especializado de furadeiras, esmerilhadeiras, parafusadeiras e mais.",
                },
                {
                  t: "Manutenção de equipamentos a combustão",
                  d: "Assistência técnica em Três Marias para motosserras, roçadeiras e motores a combustão.",
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="hover-lift bg-card border border-border rounded-lg p-6 hover:border-accent shadow-soft hover:shadow-industrial"
                >
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide">
                    {b.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {b.d}
                  </p>
                </div>
              ))}
              <div className="sm:col-span-2 mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Atendemos Três Marias, Felixlândia, Morada Nova de Minas,
                Biquinhas, Pompéu e região.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
