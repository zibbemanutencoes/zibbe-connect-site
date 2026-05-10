import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";
import maintImg from "@/assets/maintenance.jpg";

export const Route = createFileRoute("/manutencao")({
  head: () => ({
    meta: [
      { title: "Manutenção de Ferramentas em Três Marias - MG | Zibbe" },
      {
        name: "description",
        content:
          "Assistência técnica de ferramentas elétricas e equipamentos a combustão em Três Marias - MG.",
      },
      { property: "og:title", content: "Manutenção de Ferramentas em Três Marias - MG" },
      { property: "og:description", content: "Diagnóstico, troca de peças e manutenção especializada." },
      { property: "og:image", content: maintImg },
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
        title="Manutenção de Ferramentas"
        subtitle="Diagnóstico, troca de peças e orçamento claro para ferramentas elétricas e a combustão."
        image={maintImg}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow="Serviços" title="O que fazemos" />
        <ItemList items={items} />
        <div className="mt-12">
          <WhatsAppButton size="lg">Solicitar manutenção</WhatsAppButton>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
