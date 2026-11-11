import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site/Site";

const IMG = "https://romediwirt.at/images/phocagallery/thumbs/phoca_thumb_l_kaiserschmarrn_4807.jpg";
const PDF = "https://romediwirt.at/images/Speisekarte_Romediwirt_2026.pdf";

export const Route = createFileRoute("/speisekarte")({
  head: () => ({
    meta: [
      { title: "Speisekarte – Romediwirt Thaur" },
      { name: "description", content: "Die aktuelle Speisekarte des Romediwirt: regionale Küche aus Tirol und Österreich mit steirischer Note." },
      { property: "og:title", content: "Speisekarte – Romediwirt" },
      { property: "og:description", content: "Farbenfrohe Vielfalt an kulinarischen Genüssen aus Tirol." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMG },
      { name: "twitter:image", content: IMG },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader overHero />
      <PageHero eyebrow="Romedi-Küche" title={<>Unsere <em className="text-accent">Speisekarte</em></>} image={IMG} />
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <div className="animate-rise">
          <p className="eyebrow">Mit Liebe zubereitet</p>
          <h2 className="mt-4 text-5xl md:text-6xl">Eine farbenfrohe Vielfalt an Genüssen.</h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Unsere hochwertigen Zutaten stammen direkt aus Tirol und den besten Regionen Österreichs – für authentische Geschmackserlebnisse.
          </p>
          <blockquote className="mt-10 border-l-2 border-accent pl-6 font-serif text-2xl italic">
            „Gönnen Sie sich eine Pause im Romediwirt und erleben Sie die Freude am gemeinsamen Essen und Trinken."
          </blockquote>
          <p className="mt-6 text-sm tracking-wider text-muted-foreground uppercase">Unser Motto: Das Leben genießen!</p>
        </div>
        <a href={PDF} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-sm bg-primary p-12 text-primary-foreground shadow-2xl transition duration-500 hover:-translate-y-2">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl transition duration-700 group-hover:scale-150" />
          <p className="eyebrow relative">Saison 2026</p>
          <p className="relative mt-6 font-serif text-6xl leading-none">Speisekarte<br /><em className="text-accent">ansehen</em></p>
          <p className="relative mt-8 opacity-80">Die aktuelle Karte als PDF zum Ansehen oder Herunterladen.</p>
          <span className="relative mt-10 inline-flex items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest uppercase">
            PDF öffnen <span className="transition group-hover:translate-x-2">→</span>
          </span>
        </a>
      </section>
      <section className="bg-secondary py-20 text-center">
        <p className="font-serif text-3xl italic">Guten Appetit wünscht Ihnen das gesamte Team des Romediwirts</p>
        <a href="tel:+436766737357" className="mt-8 inline-block rounded-sm bg-accent px-8 py-4 text-sm tracking-widest text-accent-foreground uppercase transition hover:-translate-y-0.5 hover:shadow-lg">Tisch reservieren</a>
      </section>
      <SiteFooter />
    </div>
  );
}
