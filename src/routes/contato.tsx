import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { PageHero, WhatsAppButton } from "@/components/Page";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato - Zibbe Ferramentas e Manutenções - Três Marias - MG" },
      {
        name: "description",
        content:
          "Fale com a Zibbe Ferramentas em Três Marias - MG. WhatsApp (38) 99951-0974, Rua Curitiba, 12 - Centro.",
      },
      { property: "og:title", content: "Fale com a Zibbe - Três Marias - MG" },
      {
        property: "og:description",
        content: "Atendimento via WhatsApp, e-mail e na loja em Três Marias - MG.",
      },
    ],
  }),
  component: Contato,
});

const info = [
  { icon: MapPin, label: "Endereço", value: "Rua Curitiba, 12 - Centro - Três Marias - MG" },
  { icon: Phone, label: "WhatsApp", value: "(38) 99951-0974" },
  { icon: Mail, label: "E-mail", value: "gustavo@zibbe.com.br" },
  { icon: Globe, label: "Site", value: "www.zibbe.com.br" },
];

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Zibbe"
        subtitle="Estamos prontos para atender você pelo WhatsApp, e-mail ou na nossa loja em Três Marias - MG."
      />
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {info.map((i) => (
            <div
              key={i.label}
              className="bg-card border border-border rounded-xl p-6 flex gap-4 items-start hover:border-accent transition"
            >
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {i.label}
                </div>
                <div className="font-semibold mt-1">{i.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-primary text-primary-foreground rounded-2xl p-8 text-center border-l-4 border-accent">
          <h2 className="text-2xl font-bold">Atendimento rápido pelo WhatsApp</h2>
          <p className="opacity-90 mt-2">
            Zibbe Ferramentas e Manutenções - Três Marias - MG
          </p>
          <div className="mt-5">
            <WhatsAppButton size="lg">Chamar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
