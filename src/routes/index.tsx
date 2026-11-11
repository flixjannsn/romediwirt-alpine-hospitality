import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const IMG = "https://romediwirt.at/images";
const G = `${IMG}/phocagallery/thumbs/phoca_thumb_l_`;
const HERO = `${IMG}/Panorama-Ausblick.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Romediwirt – Ihr Genusswirt in Thaur, Tirol" },
      { name: "description", content: "Gutbürgerliche Küche mit steirischer Note direkt neben dem Romedikirchl in Thaur. Sonnenterrasse mit Blick ins Inntal." },
      { property: "og:title", content: "Romediwirt – Genusswirt in Thaur" },
      { property: "og:description", content: "Regionale Küche, Sonnenterrasse & Feiern neben dem Romedikirchl in Tirol." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const nav = [
  ["Über uns", "#willkommen"],
  ["Küche", "#kueche"],
  ["Architektur", "#architektur"],
  ["Feiern", "#feiern"],
  ["Kontakt", "#kontakt"],
];

const architektur = [
  "romedi_aussen_1.jpg", "romedi_aussen_2_1920.jpg", "romedi_aussen_3_1920.jpg",
  "romedi_innen_1_small_3.jpg", "romedi_innen_6.jpg", "romedi_innen_7.jpg",
];
const aussen = ["romedi-aussen_0040_d.jpg", "romedi-aussen_0046_d.jpg", "romedi-aussen_0053_d.jpg", "aussicht_4795.jpg"];
const feiern = ["romediwirt_thaur_tirol_romedi_feier_1b.jpg", "romediwirt_thaur_tirol_romedi_feier_2b.jpg", "romediwirt_thaur_tirol_romedi_feier_3b.jpg"];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 py-3 shadow-sm backdrop-blur" : "py-6"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className={`font-serif text-3xl tracking-wide ${scrolled ? "text-primary" : "text-primary-foreground"}`}>Romediwirt</a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className={`text-sm tracking-wider uppercase transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>{l}</a>
            ))}
            <a href="https://romediwirt.at/index.php/speisekarte" target="_blank" rel="noreferrer" className="rounded-sm bg-accent px-5 py-2.5 text-sm tracking-wider text-accent-foreground uppercase transition hover:opacity-90">Speisekarte</a>
          </nav>
          <button aria-label="Menü" onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <span className="block h-0.5 w-7 bg-current" /><span className="mt-1.5 block h-0.5 w-7 bg-current" /><span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>
        {open && (
          <div className="mt-3 flex flex-col gap-4 bg-background px-6 py-6 md:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="uppercase tracking-wider">{l}</a>)}
            <a href="https://romediwirt.at/index.php/speisekarte" className="text-accent uppercase tracking-wider">Speisekarte</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={HERO} alt="Panoramablick vom Romediwirt über das Inntal" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 text-primary-foreground">
          <p className="eyebrow animate-rise">Thaur · Tirol · seit Generationen</p>
          <h1 className="animate-rise mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl" style={{ animationDelay: ".15s" }}>
            Ihr Genusswirt <em className="text-accent">am Romedikirchl</em>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg opacity-90" style={{ animationDelay: ".3s" }}>
            Gutbürgerliche Küche mit steirischer Note, eine Sonnenterrasse mit Blick ins Inntal und Tiroler Gastfreundschaft von Herzen.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".45s" }}>
            <a href="tel:+436766737357" className="rounded-sm bg-accent px-8 py-4 text-sm tracking-widest text-accent-foreground uppercase transition hover:opacity-90">Tisch reservieren</a>
            <a href="https://romediwirt.at/index.php/speisekarte" className="rounded-sm border border-primary-foreground/60 px-8 py-4 text-sm tracking-widest uppercase transition hover:bg-primary-foreground hover:text-primary">Speisekarte</a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center md:grid-cols-3 md:text-left">
          <Info label="Öffnungszeiten" value="Mi – So · 10:00 – 22:00" />
          <Info label="Adresse" value="Schlossgasse 17, 6065 Thaur" />
          <Info label="Reservierung" value="+43 676 67 37 357" href="tel:+436766737357" />
        </div>
      </div>

      {/* Willkommen */}
      <section id="willkommen" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="eyebrow">Willkommen</p>
          <h2 className="mt-4 text-5xl leading-tight md:text-6xl">Modern, trendig &amp; zutiefst traditionell.</h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Direkt neben dem Thaurer Wahrzeichen, dem <strong className="text-foreground">Romedikirchl</strong>, erwartet Sie eine bunte Mischung an kulinarischen Leckerbissen und Köstlichkeiten.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Umgeben von malerischer Landschaft verbinden wir Tiroler Gastfreundschaft, regionale Genüsse und herzlichen Service – ob für eine Feier oder ein genussvolles Essen.
          </p>
          <div className="mt-10 border-l-2 border-accent pl-6">
            <p className="font-serif text-2xl italic">„Freut Euch auf eine gutbürgerliche Küche mit steirischer Note!"</p>
            <p className="mt-3 text-sm tracking-wider text-muted-foreground uppercase">Mirjam &amp; Markus Sonnek mit Tochter Stella · Ihre Pächterfamilie</p>
          </div>
        </div>
        <div className="relative">
          <img src={`${IMG}/NeuePaechter.jpg`} alt="Familie Sonnek" className="aspect-[4/5] w-full rounded-sm object-cover shadow-2xl" />
          <div className="absolute -bottom-8 -left-8 hidden bg-accent p-8 text-accent-foreground md:block">
            <p className="font-serif text-5xl">100</p>
            <p className="text-xs tracking-widest uppercase">Plätze innen &amp; Terrasse</p>
          </div>
        </div>
      </section>

      {/* Gesund */}
      <section className="bg-dark text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="eyebrow">Unsere Philosophie</p>
            <h2 className="mt-4 text-5xl">Iss dich gesund.</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-2">
            <Pillar n="01" t="Ohne Fertigprodukte" d="Auf Fertig-, Halbfertigprodukte und Glutamate verzichten wir im Romediwirt zur Gänze." />
            <Pillar n="02" t="Regional & nachhaltig" d="Unsere Hauptzutaten kommen aus Tirol und aus der Genussregion Österreich." />
            <Pillar n="03" t="Wertigkeit zählt" d="Nicht nur Geschmack, sondern auch Wertigkeit und Nachhaltigkeit für den Körper stehen im Vordergrund." />
            <Pillar n="04" t="Gastgeber aus Leidenschaft" d="Gastfreundschaft ist unser oberstes Prinzip – ohne regionale oder kulturelle Grenzen." />
          </div>
        </div>
      </section>

      {/* Küche */}
      <section id="kueche" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
          <img src={`${G}kaiserschmarrn_4807.jpg`} alt="Kaiserschmarrn" className="aspect-square w-full rounded-sm object-cover shadow-xl" />
          <div>
            <p className="eyebrow">Romedi-Küche</p>
            <h2 className="mt-4 text-5xl md:text-6xl">Ein buntes Sammelsurium an Köstlichkeiten.</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Machen Sie eine Auszeit vom Alltag und teilen Sie mit uns den Spaß am Essen &amp; Trinken. Frei nach dem Motto: <em className="font-serif text-2xl text-foreground">Das Leben ist schön!</em>
            </p>
            <a href="https://romediwirt.at/index.php/speisekarte" className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-sm tracking-widest text-primary-foreground uppercase transition hover:bg-accent">Zur Speisekarte →</a>
          </div>
        </div>
      </section>

      {/* Aussen strip */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {aussen.map((f) => (
          <div key={f} className="group aspect-square overflow-hidden">
            <img src={`${G}${f}`} alt="Romediwirt außen" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          </div>
        ))}
      </section>

      {/* Architektur */}
      <section id="architektur" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Die Architektur</p>
            <h2 className="mt-4 text-5xl md:text-6xl">Minimalistisch geformt, im Ortsbild verwurzelt.</h2>
          </div>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>Die schlichte Form greift die Gestalt eines Widums auf – mit typischem Gesimsübergang zum Vordach und abgeschrägten Fensterlaibungen in Holzoptik, die für helle Lichtverhältnisse sorgen.</p>
            <p>Die Sonnenterrasse stuft sich mit dem Gelände ab, fügt sich in die Landschaft und bietet einen herrlichen Ausblick auf Thaur und das Inntal.</p>
          </div>
        </div>
        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {architektur.map((f, i) => (
            <div key={f} className={`group overflow-hidden rounded-sm ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "md:col-span-2" : ""}`}>
              <img src={`${G}${f}`} alt="Architektur Romediwirt" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* Feiern */}
      <section id="feiern" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Feiern beim Romediwirt</p>
            <h2 className="mt-4 text-5xl md:text-6xl">Besondere Anlässe, perfekt geplant.</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Geburtstage, Firmungen, Hochzeiten, Firmen- oder Weihnachtsfeiern – im kleinen oder größeren Kreis machen wir Ihren Anlass zu einem einzigartigen Erlebnis.
            </p>
          </div>
          <div className="mt-14 flex justify-center gap-16 text-center">
            <div><p className="font-serif text-6xl text-accent">40</p><p className="text-xs tracking-widest uppercase">Sitzplätze innen</p></div>
            <div><p className="font-serif text-6xl text-accent">60</p><p className="text-xs tracking-widest uppercase">auf der Sonnenterrasse</p></div>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {feiern.map((f) => <img key={f} src={`${G}${f}`} alt="Feier im Romediwirt" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />)}
          </div>
          <div className="mt-12 text-center">
            <a href="mailto:info@romediwirt.at" className="inline-block rounded-sm bg-accent px-8 py-4 text-sm tracking-widest text-accent-foreground uppercase transition hover:opacity-90">Feier anfragen</a>
          </div>
        </div>
      </section>

      {/* Anreise */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="eyebrow">Anreise &amp; Parken</p>
          <h2 className="mt-4 text-5xl">In wenigen Minuten bei uns.</h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Parkmöglichkeiten: Thaurer Almparkplatz, Stollenparkplatz, Parkplatz Schloßgasse und Parkplatz Ladinsweg. Der Weg vom Almparkplatz ist barrierefrei – beachten Sie jedoch einige steilere Abschnitte.
          </p>
        </div>
        <iframe title="Karte Romediwirt" className="h-80 w-full rounded-sm border border-border grayscale" loading="lazy" src="https://www.google.com/maps?q=Romediwirt+Thaur&output=embed" />
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-dark text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-4xl">Romediwirt</p>
            <p className="mt-4 max-w-sm opacity-70">Ihr Genusswirt in Thaur in Tirol – direkt neben dem Romedikirchl.</p>
          </div>
          <div>
            <p className="eyebrow">Kontakt</p>
            <div className="mt-4 space-y-2 opacity-90">
              <p>Schlossgasse 17<br />A-6065 Thaur</p>
              <a href="tel:+436766737357" className="block hover:text-accent">+43 676 67 37 357</a>
              <a href="mailto:info@romediwirt.at" className="block hover:text-accent">info@romediwirt.at</a>
            </div>
          </div>
          <div>
            <p className="eyebrow">Öffnungszeiten</p>
            <div className="mt-4 space-y-2 opacity-90">
              <p>Mittwoch – Sonntag<br />10:00 – 22:00 Uhr</p>
              <p className="opacity-70">Montag &amp; Dienstag Ruhetag</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-6 text-sm opacity-60">
            <p>© Romediwirt 2026</p>
            <div className="flex gap-6">
              <a href="https://romediwirt.at/index.php/impressum">Impressum</a>
              <a href="https://romediwirt.at/index.php/datenschutz">Datenschutz</a>
              <a href="https://www.facebook.com/profile.php?id=61562497402363">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.3em] uppercase opacity-60">{label}</p>
      {href ? <a href={href} className="mt-1 block font-serif text-2xl hover:text-accent">{value}</a> : <p className="mt-1 font-serif text-2xl">{value}</p>}
    </div>
  );
}

function Pillar({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="border-t border-primary-foreground/20 pt-6">
      <p className="font-serif text-accent">{n}</p>
      <h3 className="mt-2 text-3xl">{t}</h3>
      <p className="mt-3 leading-relaxed opacity-70">{d}</p>
    </div>
  );
}
