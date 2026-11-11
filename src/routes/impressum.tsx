import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, LegalBody } from "@/components/site/Site";
import { impressum } from "@/components/site/legal-content";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Romediwirt Thaur" },
      { name: "description", content: "Impressum und Angaben laut E-Commerce-Gesetz des Romediwirt in Thaur." },
      { property: "og:title", content: "Impressum – Romediwirt" },
      { property: "og:description", content: "Impressum und Angaben laut E-Commerce-Gesetz des Romediwirt in Thaur." },
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
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <LegalBody blocks={impressum} />
      <SiteFooter />
    </div>
  );
}
