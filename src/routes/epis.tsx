import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";
import epiImg from "@/assets/epi-worker.jpg";

export const Route = createFileRoute("/epis")({
  head: () => ({
    meta: [
      { title: "Loja de EPIs em Três Marias - MG | Zibbe" },
      {
        name: "description",
        content:
          "EPIs em Três Marias - MG: luvas, óculos, protetores, capacetes, botinas, máscaras e mais.",
      },
      { property: "og:title", content: "Loja de EPIs em Três Marias - MG" },
      { property: "og:description", content: "Equipamentos de proteção individual para empresas e profissionais." },
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
        eyebrow="EPIs"
        title="Loja de EPIs em Três Marias"
        subtitle="Equipamentos de proteção individual com qualidade, segurança e atendimento rápido."
        image={epiImg}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow="Linha completa" title="EPIs disponíveis" />
        <ItemList items={items} />
        <div className="mt-12">
          <WhatsAppButton size="lg">Solicitar cotação</WhatsAppButton>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
