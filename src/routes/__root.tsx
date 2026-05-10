import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente recarregar.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zibbe Ferramentas e Manutenções - Três Marias - MG" },
      {
        name: "description",
        content:
          "Ferramentas em Três Marias, EPIs em Três Marias e assistência técnica em Três Marias - MG. Loja com atendimento rápido via WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "ferramentas em Três Marias, loja de ferramentas em Três Marias, EPI em Três Marias, loja de EPIs em Três Marias, manutenção de ferramentas em Três Marias, assistência técnica em Três Marias, manutenção industrial em Três Marias",
      },
      { name: "author", content: "Zibbe Ferramentas e Manutenções" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "BR-MG" },
      { name: "geo.placename", content: "Três Marias" },
      { name: "geo.position", content: "-18.2008;-45.2336" },
      { name: "ICBM", content: "-18.2008, -45.2336" },
      { property: "og:site_name", content: "Zibbe Ferramentas e Manutenções" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: "Zibbe Ferramentas e Manutenções - Três Marias - MG" },
      {
        property: "og:description",
        content:
          "Ferramentas, EPIs e manutenção de ferramentas em Três Marias - MG. Atendimento técnico rápido pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HardwareStore",
          name: "Zibbe Ferramentas e Manutenções",
          description:
            "Loja de ferramentas, EPIs e assistência técnica de ferramentas elétricas e a combustão em Três Marias - MG.",
          image: "https://zibbe.com.br/og.jpg",
          telephone: "+55-38-99951-0974",
          email: "gustavo@zibbe.com.br",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Curitiba, 12 - Centro",
            addressLocality: "Três Marias",
            addressRegion: "MG",
            postalCode: "39205-000",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -18.2008,
            longitude: -45.2336,
          },
          areaServed: [
            { "@type": "City", name: "Três Marias" },
            { "@type": "City", name: "Felixlândia" },
            { "@type": "City", name: "Morada Nova de Minas" },
            { "@type": "City", name: "Biquinhas" },
            { "@type": "City", name: "Pompéu" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          makesOffer: [
            { "@type": "Offer", name: "Venda de Ferramentas em Três Marias" },
            { "@type": "Offer", name: "Venda de EPIs em Três Marias" },
            { "@type": "Offer", name: "Manutenção de Ferramentas em Três Marias" },
            { "@type": "Offer", name: "Assistência Técnica em Três Marias" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
