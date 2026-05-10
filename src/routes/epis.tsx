import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";
import epiImg from "@/assets/epi-worker.jpg";

export const Route = createFileRoute("/epis")({
  head: () => ({
    meta: [
      { title: "Loja de EPIs em Três Marias - MG | EPI Profissional | Zibbe" },
      {
        name: "description",
        content:
          "Loja de EPIs em Três Marias - MG: luvas, óculos, protetores auriculares, capacetes, botinas e máscaras. EPI certificado para empresas e profissionais.",
      },
      {
        name: "keywords",
        content:
          "EPI em Três Marias, loja de EPIs em Três Marias, equipamentos de proteção Três Marias, segurança do trabalho Três Marias",
      },
      { property: "og:title", content: "Loja de EPIs em Três Marias - MG | Zibbe" },
      {
        property: "og:description",
        content:
          "Equipamentos de proteção individual certificados para empresas, indústrias e profissionais em Três Marias - MG.",
      },
      { property: "og:image", content: epiImg },
    ],
  }),
  component: Epis,
});

const items = [
  "Luvas",
  "Óculos de proteção",
  "Protetores auriculares",
  "Capacetes",
  "Botinas",
  "Máscaras",
  "Aventais",
  "Cintos de segurança",
];

function Epis() {
  return (
    <>
      <PageHero
        eyebrow="EPIs em Três Marias - MG"
        title="Loja de EPIs em Três Marias"
        subtitle="Equipamentos de proteção individual com certificação, segurança e atendimento rápido para empresas em Três Marias e região."
        image={epiImg}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Linha completa"
          title="EPIs disponíveis"
          description="Atendemos indústrias, construtoras, oficinas e prestadores de serviço com EPIs certificados e estoque para pronta entrega."
        />
        <ItemList items={items} />
        <div className="mt-12">
          <WhatsAppButton size="lg">Solicitar cotação</WhatsAppButton>
        </div>

        <div className="mt-20 bg-card border border-border rounded-lg p-7 md:p-10">
          <h2 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wide">
            Fornecimento de EPIs para empresas em Três Marias
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
            A Zibbe é referência em segurança do trabalho em Três Marias - MG.
            Trabalhamos com fornecimento contínuo de EPIs para indústrias,
            construtoras e operações industriais da região, garantindo
            certificação, qualidade e prazo.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
