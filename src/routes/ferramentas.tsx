import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";
import heroImg from "@/assets/hero-tools.jpg";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Loja de Ferramentas em Três Marias - MG | Zibbe Ferramentas" },
      {
        name: "description",
        content:
          "Loja de ferramentas em Três Marias - MG: furadeiras, parafusadeiras, esmerilhadeiras, serras, roçadeiras, motosserras e acessórios. Orçamento via WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "ferramentas em Três Marias, loja de ferramentas em Três Marias, ferramentas elétricas Três Marias, ferramentas a combustão Três Marias",
      },
      { property: "og:title", content: "Loja de Ferramentas em Três Marias - MG | Zibbe" },
      {
        property: "og:description",
        content:
          "Ferramentas elétricas, a combustão e acessórios profissionais em Três Marias - MG.",
      },
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
        eyebrow="Ferramentas em Três Marias - MG"
        title="Loja de Ferramentas em Três Marias"
        subtitle="Ferramentas elétricas, a combustão e acessórios para profissionais, indústrias e empresas em Três Marias e região."
        image={heroImg}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Catálogo"
          title="O que você encontra"
          description="Marcas reconhecidas e modelos para uso profissional, com pronta entrega na nossa loja em Três Marias - MG."
        />
        <ItemList items={items} />
        <div className="mt-12">
          <WhatsAppButton size="lg">Solicitar orçamento</WhatsAppButton>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-7">
            <h2 className="font-display font-bold text-xl uppercase tracking-wide">
              Ferramentas para indústria e construção
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Atendemos obras, indústrias e oficinas em Três Marias - MG com
              ferramentas profissionais de alta durabilidade. Furadeiras,
              esmerilhadeiras, parafusadeiras e serras para o uso intenso do
              dia a dia.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-7">
            <h2 className="font-display font-bold text-xl uppercase tracking-wide">
              Ferramentas a combustão
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Roçadeiras, motosserras e equipamentos a combustão para
              produtores rurais e prestadores de serviço da região de Três
              Marias. Suporte técnico e peças de reposição.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
