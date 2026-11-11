import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site/Site";

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

const architektur = [
  "romedi_aussen_1.jpg", "romedi_aussen_2_1920.jpg", "romedi_aussen_3_1920.jpg",
  "romedi_innen_1_small_3.jpg", "romedi_innen_6.jpg", "romedi_innen_7.jpg",
];
const aussen = ["romedi-aussen_0040_d.jpg", "romedi-aussen_0046_d.jpg", "romedi-aussen_0053_d.jpg", "aussicht_4795.jpg"];
const feiern = ["romediwirt_thaur_tirol_romedi_feier_1b.jpg", "romediwirt_thaur_tirol_romedi_feier_2b.jpg", "romediwirt_thaur_tirol_romedi_feier_3b.jpg"];

function Index() {
  const [y, setY] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal, .reveal-img").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const f = () => {
      setY(window.scrollY);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <div className="fixed top-0 left-0 z-[60] h-0.5 bg-accent" style={{ width: `${progress * 100}%` }} />
      <SiteHeader overHero />

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${y * 0.35}px)` }}>
          <img src={HERO} alt="Panoramablick vom Romediwirt über das Inntal" className="animate-kenburns h-full w-full object-cover" />
        </div>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 text-primary-foreground" style={{ transform: `translateY(${y * -0.15}px)`, opacity: Math.max(0, 1 - y / 700) }}>
          <p className="eyebrow animate-rise">Thaur · Tirol · Inntal</p>
          <h1 className="animate-rise mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl" style={{ animationDelay: ".15s" }}>
            Ihr Genusswirt <em className="text-accent">am Romedikirchl</em>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg opacity-90" style={{ animationDelay: ".3s" }}>
            Gutbürgerliche Küche mit steirischer Note, eine Sonnenterrasse mit Blick ins Inntal und Tiroler Gastfreundschaft von Herzen.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".45s" }}>
            <a href="tel:+436766737357" className="rounded-sm bg-accent px-8 py-4 text-sm tracking-widest text-accent-foreground uppercase transition hover:opacity-90">Tisch reservieren</a>
            <Link to="/speisekarte" className="rounded-sm border border-primary-foreground/60 px-8 py-4 text-sm tracking-widest uppercase transition hover:bg-primary-foreground hover:text-primary">Speisekarte</Link>
          </div>
        </div>
        <a href="#willkommen" aria-label="Weiter" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-primary-foreground uppercase md:flex">
          Entdecken<span className="animate-scrollhint block h-10 w-px bg-primary-foreground" />
        </a>
      </section>
      {/* Info bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center md:grid-cols-3 md:text-left">
          <Info label="Öffnungszeiten" value="Mi – So · 10:00 – 22:00" />
          <Info label="Adresse" value="Schlossgasse 17, 6065 Thaur" />
          <Info label="Reservierung" value="+43 676 67 37 357" href="tel:+436766737357" />
        </div>
      </div>

      <div className="overflow-hidden border-b border-border bg-background py-6">
        <div className="animate-marquee flex w-max gap-12 font-serif text-4xl whitespace-nowrap text-primary/80 italic">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Regional", "Hausgemacht", "Sonnenterrasse", "Steirische Note", "Tiroler Gastfreundschaft", "Das Leben ist schön"].map((w) => (
              <span key={k + w} className="flex items-center gap-12">{w}<span className="text-accent">✦</span></span>
            )),
          )}
        </div>
      </div>

      {/* Willkommen */}
      <section id="willkommen" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="reveal eyebrow">Willkommen</p>
          <h2 className="reveal mt-4 text-5xl leading-tight md:text-6xl">Modern, trendig &amp; zutiefst traditionell.</h2>
          <p className="reveal mt-8 text-lg leading-relaxed text-muted-foreground">
            Direkt neben dem Thaurer Wahrzeichen, dem <strong className="text-foreground">Romedikirchl</strong>, erwartet Sie eine bunte Mischung an kulinarischen Leckerbissen und Köstlichkeiten.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Umgeben von malerischer Landschaft verbinden wir Tiroler Gastfreundschaft, regionale Genüsse und herzlichen Service – ob für eine Feier oder ein genussvolles Essen.
          </p>
          <div className="reveal mt-10 border-l-2 border-accent pl-6">
            <p className="font-serif text-2xl italic">„Freut Euch auf eine gutbürgerliche Küche mit steirischer Note!"</p>
            <p className="mt-3 text-sm tracking-wider text-muted-foreground uppercase">Mirjam &amp; Markus Sonnek mit Tochter Stella · Ihre Pächterfamilie</p>
          </div>
        </div>
        <div className="relative">
          <img src={`${IMG}/NeuePaechter.jpg`} alt="Familie Sonnek" className="reveal-img aspect-[4/5] w-full rounded-sm object-cover shadow-2xl" />
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
            <p className="reveal eyebrow">Unsere Philosophie</p>
            <h2 className="reveal mt-4 text-5xl">Iss dich gesund.</h2>
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
          <img src={`${G}kaiserschmarrn_4807.jpg`} alt="Kaiserschmarrn" className="reveal-img aspect-square w-full rounded-sm object-cover shadow-xl" />
          <div>
            <p className="reveal eyebrow">Romedi-Küche</p>
            <h2 className="reveal mt-4 text-5xl md:text-6xl">Ein buntes Sammelsurium an Köstlichkeiten.</h2>
            <p className="reveal mt-8 text-lg leading-relaxed text-muted-foreground">
              Machen Sie eine Auszeit vom Alltag und teilen Sie mit uns den Spaß am Essen &amp; Trinken. Frei nach dem Motto: <em className="font-serif text-2xl text-foreground">Das Leben ist schön!</em>
            </p>
            <Link to="/speisekarte" className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-sm tracking-widest text-primary-foreground uppercase transition hover:bg-accent">Zur Speisekarte →</Link>
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
            <p className="reveal eyebrow">Die Architektur</p>
            <h2 className="reveal mt-4 text-5xl md:text-6xl">Minimalistisch geformt, im Ortsbild verwurzelt.</h2>
          </div>
          <div className="reveal space-y-4 leading-relaxed text-muted-foreground">
            <p>Die schlichte Form greift die Gestalt eines Widums auf – mit typischem Gesimsübergang zum Vordach und abgeschrägten Fensterlaibungen in Holzoptik, die für helle Lichtverhältnisse sorgen.</p>
            <p>Die Sonnenterrasse stuft sich mit dem Gelände ab, fügt sich in die Landschaft und bietet einen herrlichen Ausblick auf Thaur und das Inntal.</p>
          </div>
        </div>
        <div className="reveal mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
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
            <p className="reveal eyebrow">Feiern beim Romediwirt</p>
            <h2 className="reveal mt-4 text-5xl md:text-6xl">Besondere Anlässe, perfekt geplant.</h2>
            <p className="reveal mt-8 text-lg leading-relaxed text-muted-foreground">
              Geburtstage, Firmungen, Hochzeiten, Firmen- oder Weihnachtsfeiern – im kleinen oder größeren Kreis machen wir Ihren Anlass zu einem einzigartigen Erlebnis.
            </p>
          </div>
          <div className="reveal mt-14 flex justify-center gap-16 text-center">
            <div><p className="font-serif text-6xl text-accent">40</p><p className="text-xs tracking-widest uppercase">Sitzplätze innen</p></div>
            <div><p className="font-serif text-6xl text-accent">60</p><p className="text-xs tracking-widest uppercase">auf der Sonnenterrasse</p></div>
          </div>
          <div className="reveal mt-16 grid gap-4 md:grid-cols-3">
            {feiern.map((f) => <img key={f} src={`${G}${f}`} alt="Feier im Romediwirt" loading="lazy" className="reveal aspect-[4/3] w-full rounded-sm object-cover transition duration-700 hover:-translate-y-2 hover:shadow-2xl" />)}
          </div>
          <div className="mt-12 text-center">
            <a href="mailto:info@romediwirt.at" className="inline-block rounded-sm bg-accent px-8 py-4 text-sm tracking-widest text-accent-foreground uppercase transition hover:opacity-90">Feier anfragen</a>
          </div>
        </div>
      </section>

      {/* Anreise */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="reveal eyebrow">Anreise &amp; Parken</p>
          <h2 className="reveal mt-4 text-5xl">In wenigen Minuten bei uns.</h2>
          <p className="reveal mt-8 leading-relaxed text-muted-foreground">
            Parkmöglichkeiten: Thaurer Almparkplatz, Stollenparkplatz, Parkplatz Schloßgasse und Parkplatz Ladinsweg. Der Weg vom Almparkplatz ist barrierefrei – beachten Sie jedoch einige steilere Abschnitte.
          </p>
        </div>
        <iframe title="Karte Romediwirt" className="h-80 w-full rounded-sm border border-border grayscale" loading="lazy" src="https://www.google.com/maps?q=Romediwirt+Thaur&output=embed" />
      </section>

      <SiteFooter />
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
    <div className="reveal border-t border-primary-foreground/20 pt-6">
      <p className="font-serif text-accent">{n}</p>
      <h3 className="mt-2 text-3xl">{t}</h3>
      <p className="mt-3 leading-relaxed opacity-70">{d}</p>
    </div>
  );
}
