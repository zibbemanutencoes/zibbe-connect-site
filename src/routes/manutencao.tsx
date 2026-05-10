import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, WhatsAppButton } from "@/components/Page";

export const Route = createFileRoute("/manutencao")({
  head: () => ({
    meta: [
      { title: "Manutenção de Ferramentas em Três Marias - MG | Zibbe" },
      {
        name: "description",
        content:
          "Assistência técnica de ferramentas em Três Marias - MG. Manutenção de furadeiras, esmerilhadeiras, parafusadeiras, roçadeiras e motosserras.",
      },
      { property: "og:title", content: "Manutenção de Ferramentas em Três Marias - MG" },
      {
        property: "og:description",
        content:
          "Manutenção de ferramentas elétricas e equipamentos a combustão com diagnóstico e orçamento claro.",
      },
    ],
  }),
  component: Manutencao,
});

const items = [
  "Manutenção de furadeiras",
  "Manutenção de esmerilhadeiras",
  "Manutenção de parafusadeiras",
  "Manutenção de roçadeiras",
  "Manutenção de motosserras",
  "Troca de peças",
  "Diagnóstico técnico",
];

function Manutencao() {
  return (
    <>
      <PageHero
        eyebrow="Assistência técnica"
        title="Manutenção de Ferramentas em Três Marias - MG"
        subtitle="Realizamos manutenção de ferramentas elétricas e equipamentos a combustão com atendimento técnico, diagnóstico e orçamento claro."
      />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Serviços</h2>
        <ItemList items={items} />
        <div className="mt-10">
          <WhatsAppButton size="lg">Solicitar manutenção</WhatsAppButton>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
