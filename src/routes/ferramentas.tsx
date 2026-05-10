import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";
import heroImg from "@/assets/hero-tools.jpg";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Loja de Ferramentas em Três Marias - MG | Zibbe" },
      {
        name: "description",
        content:
          "Furadeiras, parafusadeiras, esmerilhadeiras, serras, roçadeiras, motosserras e acessórios em Três Marias - MG.",
      },
      { property: "og:title", content: "Loja de Ferramentas em Três Marias - MG" },
      { property: "og:description", content: "Ferramentas elétricas, a combustão e acessórios profissionais." },
      { property: "og:image", content: heroImg },
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
        title="Loja de Ferramentas em Três Marias"
        subtitle="Ferramentas elétricas, a combustão e acessórios para profissionais e empresas."
        image={heroImg}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow="Catálogo" title="O que você encontra" />
        <ItemList items={items} />
        <div className="mt-12">
          <WhatsAppButton size="lg">Solicitar orçamento</WhatsAppButton>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
