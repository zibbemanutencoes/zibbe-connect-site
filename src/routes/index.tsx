import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, HardHat, Cog, Building2, ArrowRight } from "lucide-react";
import { FinalCTA, PageHero } from "@/components/Page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ferramentas, EPIs e Manutenção em Três Marias - MG | Zibbe",
      },
      {
        name: "description",
        content:
          "Loja de ferramentas, EPIs e assistência técnica em Três Marias - MG. Atendemos empresas e profissionais com venda e manutenção de ferramentas elétricas e a combustão.",
      },
      { property: "og:title", content: "Zibbe Ferramentas e Manutenções - Três Marias - MG" },
      {
        property: "og:description",
        content:
          "Ferramentas, EPIs e manutenção especializada para empresas e profissionais em Três Marias - MG.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Wrench,
    title: "Ferramentas",
    desc: "Ferramentas elétricas, a combustão e acessórios para profissionais e empresas.",
    to: "/ferramentas" as const,
  },
  {
    icon: HardHat,
    title: "EPIs",
    desc: "Equipamentos de proteção individual com qualidade e atendimento rápido.",
    to: "/epis" as const,
  },
  {
    icon: Cog,
    title: "Manutenção",
    desc: "Assistência técnica de ferramentas elétricas e equipamentos a combustão.",
    to: "/manutencao" as const,
  },
];

function Index() {
  return (
    <>
      <PageHero
        eyebrow="Três Marias - MG"
        title="Ferramentas, EPIs e Manutenção Especializada em Três Marias - MG"
        subtitle="Atendemos empresas, profissionais e clientes residenciais com venda de ferramentas, equipamentos de proteção individual e assistência técnica especializada."
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Serviços principais</h2>
          <p className="text-muted-foreground mt-2">
            Tudo o que sua obra, oficina ou empresa precisa em um só lugar.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="bg-primary text-primary-foreground inline-flex p-3 rounded-lg mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                Ver mais <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              <Building2 className="h-4 w-4" /> Para empresas
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Atendimento dedicado para empresas
            </h2>
            <p className="text-muted-foreground mt-3">
              Fornecimento contínuo de ferramentas e EPIs, contratos de manutenção
              preventiva e atendimento técnico ágil. Falamos a linguagem da indústria,
              construção civil e prestadores de serviço.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Cotações rápidas via WhatsApp",
                "Manutenção preventiva e corretiva",
                "Equipe técnica qualificada",
                "Entrega em Três Marias e região",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl border-l-4 border-accent">
            <div className="text-5xl font-extrabold text-accent">+10</div>
            <p className="mt-2 font-semibold">Anos de experiência atendendo Três Marias e região</p>
            <p className="opacity-80 text-sm mt-3">
              Confiança construída com profissionais, empresas e clientes residenciais
              que precisam de ferramentas que funcionam e suporte quando precisam.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
