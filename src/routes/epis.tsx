import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, WhatsAppButton } from "@/components/Page";

export const Route = createFileRoute("/epis")({
  head: () => ({
    meta: [
      { title: "Loja de EPIs em Três Marias - MG | Zibbe" },
      {
        name: "description",
        content:
          "Loja de EPIs em Três Marias - MG: luvas, óculos, protetores auriculares, capacetes, botinas, máscaras e mais. Cotação rápida via WhatsApp.",
      },
      { property: "og:title", content: "Loja de EPIs em Três Marias - MG" },
      {
        property: "og:description",
        content:
          "Equipamentos de proteção individual para empresas, profissionais e prestadores de serviço em Três Marias - MG.",
      },
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
        title="Loja de EPIs em Três Marias - MG"
        subtitle="Fornecemos equipamentos de proteção individual para empresas, profissionais e prestadores de serviço, com foco em segurança, qualidade e atendimento rápido."
      />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Linha de EPIs</h2>
        <ItemList items={items} />
        <div className="mt-10">
          <WhatsAppButton size="lg">Solicitar cotação de EPIs</WhatsAppButton>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
