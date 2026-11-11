import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, LegalBody } from "@/components/site/Site";
import { datenschutz } from "@/components/site/legal-content";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Romediwirt Thaur" },
      { name: "description", content: "Datenschutzerklärung des Romediwirt in Thaur, Tirol." },
      { property: "og:title", content: "Datenschutz – Romediwirt" },
      { property: "og:description", content: "Datenschutzerklärung des Romediwirt in Thaur, Tirol." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader overHero />
      <PageHero eyebrow="Rechtliches" title="Datenschutz" />
      <LegalBody blocks={datenschutz} />
      <SiteFooter />
    </div>
  );
}
