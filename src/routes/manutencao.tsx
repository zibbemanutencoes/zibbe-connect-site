import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, ItemList, PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";
import maintImg from "@/assets/maintenance.jpg";

export const Route = createFileRoute("/manutencao")({
  head: () => ({
    meta: [
      {
        title:
          "Manutenção de Ferramentas em Três Marias - MG | Assistência Técnica | Zibbe",
      },
      {
        name: "description",
        content:
          "Assistência técnica e manutenção de ferramentas em Três Marias - MG. Reparo de ferramentas elétricas, motosserras, roçadeiras e equipamentos a combustão.",
      },
      {
        name: "keywords",
        content:
          "manutenção de ferramentas elétricas, manutenção de equipamentos a combustão, assistência técnica em Três Marias, conserto de ferramentas Três Marias",
      },
      {
        property: "og:title",
        content: "Manutenção de Ferramentas em Três Marias - MG | Zibbe",
      },
      {
        property: "og:description",
        content:
          "Diagnóstico, troca de peças e manutenção especializada de ferramentas elétricas e a combustão em Três Marias - MG.",
      },
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
        eyebrow="Assistência técnica em Três Marias - MG"
        title="Manutenção de Ferramentas em Três Marias"
        subtitle="Manutenção de ferramentas elétricas e equipamentos a combustão com diagnóstico técnico, troca de peças e orçamento claro. Atendimento para indústrias, empresas, profissionais e hobbystas."
        image={maintImg}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Serviços"
          title="O que fazemos"
          description="Assistência técnica especializada em manutenção de ferramentas elétricas e equipamentos a combustão para indústrias, empresas, profissionais e hobbystas em Três Marias e região."
        />
        <ItemList items={items} />
        <div className="mt-12">
          <WhatsAppButton size="lg">Solicitar manutenção</WhatsAppButton>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-7">
            <h2 className="font-display font-bold text-xl uppercase tracking-wide">
              Manutenção de ferramentas elétricas
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Atendemos indústrias, empresas, profissionais e hobbystas com
              manutenção de furadeiras, esmerilhadeiras, parafusadeiras, serras
              e demais ferramentas elétricas em Três Marias - MG.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-7">
            <h2 className="font-display font-bold text-xl uppercase tracking-wide">
              Reparo de equipamentos a combustão
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Manutenção de motosserras, roçadeiras e motores a combustão para
              produtores rurais e prestadores de serviço da região de Três
              Marias - MG.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
