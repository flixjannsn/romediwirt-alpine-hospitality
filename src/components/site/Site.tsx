import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import type { Block } from "./legal-content";

const nav = [
  ["Über uns", "willkommen"],
  ["Küche", "kueche"],
  ["Architektur", "architektur"],
  ["Feiern", "feiern"],
  ["Kontakt", "kontakt"],
] as const;

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = scrolled || !overHero || open;
  const tone = solid ? "text-foreground" : "text-primary-foreground";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-background/90 py-3 shadow-sm backdrop-blur-md" : "py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className={`font-serif text-3xl tracking-wide ${solid ? "text-primary" : "text-primary-foreground"}`}>Romediwirt</Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([l, h]) => (
            <Link key={h} to="/" hash={h} className={`group relative text-sm tracking-wider uppercase ${tone}`}>
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link to="/speisekarte" className="rounded-sm bg-accent px-5 py-2.5 text-sm tracking-wider text-accent-foreground uppercase transition hover:-translate-y-0.5 hover:shadow-lg">Speisekarte</Link>
        </nav>
        <button aria-label="Menü" onClick={() => setOpen(!open)} className={`lg:hidden ${tone}`}>
          <span className="block h-0.5 w-7 bg-current" /><span className="mt-1.5 block h-0.5 w-7 bg-current" /><span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-5 px-6 py-8 font-serif text-2xl lg:hidden">
          {nav.map(([l, h]) => <Link key={h} to="/" hash={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <Link to="/speisekarte" onClick={() => setOpen(false)} className="text-accent">Speisekarte</Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-5xl">Romediwirt</p>
          <p className="mt-4 max-w-sm opacity-70">Ihr Genusswirt in Thaur in Tirol – direkt neben dem Romedikirchl.</p>
          <div className="mt-6 flex gap-6 text-sm opacity-70">
            <a href="https://www.ruinethaur.at/" target="_blank" rel="noreferrer" className="hover:text-accent">Ruine Thaur</a>
            <a href="http://www.chronos-thaur.at/highlights/das-romedikirchl" target="_blank" rel="noreferrer" className="hover:text-accent">Romedikirchl</a>
          </div>
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
            <Link to="/impressum" className="hover:text-accent">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-accent">Datenschutz</Link>
            <a href="https://www.facebook.com/profile.php?id=61562497402363" className="hover:text-accent">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: ReactNode; image?: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-dark">
      {image && <img src={image} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />}
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-16 text-primary-foreground">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-4 text-6xl md:text-8xl" style={{ animationDelay: ".15s" }}>{title}</h1>
      </div>
    </section>
  );
}

export function LegalBody({ blocks }: { blocks: Block[] }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      {blocks.map((b, i) =>
        b.t === "h" ? (
          <h2 key={i} className="mt-12 mb-4 text-3xl text-primary first:mt-0">{b.v}</h2>
        ) : b.t === "ul" ? (
          <ul key={i} className="my-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">{b.v.map((x) => <li key={x}>{x}</li>)}</ul>
        ) : (
          <p key={i} className="my-4 leading-relaxed whitespace-pre-line text-muted-foreground">{b.v}</p>
        ),
      )}
    </article>
  );
}
