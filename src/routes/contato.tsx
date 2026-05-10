import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero, SectionHeading, WhatsAppButton } from "@/components/Page";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      {
        title:
          "Contato Zibbe Ferramentas - Três Marias - MG | WhatsApp (38) 99951-0974",
      },
      {
        name: "description",
        content:
          "Fale com a Zibbe Ferramentas em Três Marias - MG. Loja de ferramentas, EPIs e assistência técnica. WhatsApp (38) 99951-0974, Rua Curitiba, 12 - Centro.",
      },
      {
        property: "og:title",
        content: "Fale com a Zibbe Ferramentas - Três Marias - MG",
      },
      {
        property: "og:description",
        content:
          "Atendimento via WhatsApp, e-mail e na loja em Três Marias - MG.",
      },
    ],
  }),
  component: Contato,
});

const info = [
  { icon: MapPin, label: "Endereço", value: "Rua Curitiba, 12", sub: "Centro - Três Marias - MG" },
  { icon: Phone, label: "Telefone fixo", value: "(38) 3030-1035", sub: "Atendimento na loja" },
  { icon: Phone, label: "WhatsApp", value: "(38) 99951-0974", sub: "Atendimento direto" },
  { icon: Mail, label: "E-mail", value: "contato@zibbe.com.br", sub: "Resposta rápida" },
  { icon: Clock, label: "Horário", value: "Seg a Sáb", sub: "Seg-Sex 07h-18h · Sáb 07h-12h" },
];

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Zibbe"
        subtitle="Atendimento direto pelo WhatsApp, e-mail ou na nossa loja em Três Marias - MG."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow="Onde estamos" title="Informações de contato" />
        <div className="grid gap-5 sm:grid-cols-2">
          {info.map((i) => (
            <div
              key={i.label}
              className="group bg-card border border-border rounded-lg p-6 flex gap-5 items-start hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="bg-primary text-primary-foreground p-3.5 rounded group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <i.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  {i.label}
                </div>
                <div className="font-display font-bold text-xl mt-1">{i.value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{i.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-14 bg-gradient-hero text-primary-foreground rounded-lg overflow-hidden shadow-industrial">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-accent" />
          <div className="relative p-10 md:p-14 text-center">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase">
              Atendimento <span className="text-accent">rápido</span> pelo WhatsApp
            </h2>
            <p className="opacity-85 mt-3">Zibbe Ferramentas e Manutenções - Três Marias - MG</p>
            <div className="mt-7 inline-flex">
              <WhatsAppButton size="lg">Chamar no WhatsApp</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
