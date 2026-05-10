import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, WhatsAppButton } from "@/components/Page";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Loja de Ferramentas em Três Marias - MG | Zibbe" },
      {
        name: "description",
        content:
          "Loja de ferramentas em Três Marias - MG: furadeiras, parafusadeiras, esmerilhadeiras, serras, roçadeiras, motosserras e acessórios. Solicite orçamento.",
      },
      { property: "og:title", content: "Loja de Ferramentas em Três Marias - MG" },
      {
        property: "og:description",
        content:
          "Ferramentas elétricas, a combustão e acessórios para profissionais e empresas em Três Marias - MG.",
      },
    ],
  }),
  component: Ferramentas,
});

const items = [
  "Furadeiras",
  "Parafusadeiras",
  "Esmerilhadeiras",
  "Serras",
  "Roçadeiras",
  "Motosserras",
  "Discos, brocas e acessórios",
];

function Ferramentas() {
  return (
    <>
      <PageHero
        eyebrow="Ferramentas"
        title="Loja de Ferramentas em Três Marias - MG"
        subtitle="A Zibbe oferece ferramentas elétricas, ferramentas a combustão, acessórios e soluções para profissionais, empresas e uso doméstico."
      />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-xl md:text-2xl font-bold mb-6">O que você encontra</h2>
        <ItemList items={items} />
        <div className="mt-10">
          <WhatsAppButton size="lg">Solicitar orçamento no WhatsApp</WhatsAppButton>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
