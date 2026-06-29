"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarDays, Clock, MapPin, Menu, Phone, Star } from "lucide-react";
import { useState } from "react";

const navItems = ["Story", "Menu", "Space", "Events", "Visit"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.38em] text-roast/70">
      <span className="h-px w-10 bg-roast/40" />
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-roast/10 bg-crema/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="group flex items-center gap-4" aria-label="Chu Cafe home">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-roast/20 bg-white shadow-card transition group-hover:rotate-[-4deg]">
            <span className="font-display text-3xl font-bold text-roast">Chu</span>
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="font-display text-2xl font-bold tracking-wide text-espresso">Chu Cafe</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-espresso/55">Coffee · Brunch · Evenings</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative text-sm font-semibold uppercase tracking-[0.22em] text-espresso/70 transition hover:text-roast after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-roast after:transition hover:after:scale-x-100">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+60120000000" className="rounded-full border border-roast/15 px-4 py-3 text-sm font-semibold text-espresso/70 transition hover:border-roast/40 hover:bg-white">Call</a>
          <a href="#booking" className="rounded-full bg-espresso px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-crema shadow-card transition hover:-translate-y-0.5 hover:bg-roast">Booking</a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-roast/15 bg-white p-3 text-espresso lg:hidden" aria-label="Toggle menu">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="border-t border-roast/10 bg-crema px-5 py-5 lg:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="rounded-2xl bg-white px-4 py-3 font-semibold text-espresso/75">{item}</a>)}
            <a onClick={() => setOpen(false)} href="#booking" className="rounded-2xl bg-espresso px-4 py-3 text-center font-bold uppercase tracking-[0.18em] text-crema">Booking</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden bg-espresso text-crema">
      <div className="absolute inset-0 hero-photo opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-espresso/20 to-espresso/82" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl place-items-center px-5 py-24 text-center md:px-8">
        <motion.div initial={reduce ? false : "hidden"} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }} className="max-w-5xl">
          <motion.p variants={fadeUp} className="mb-5 text-xs font-bold uppercase tracking-[0.52em] text-crema/80">Now brewing · Chu Cafe</motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-6xl font-bold leading-[0.92] tracking-tight md:text-8xl lg:text-9xl">Awaken your everyday ritual.</motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-base leading-8 text-crema/82 md:text-xl">A warm neighborhood cafe for crafted coffee, comforting brunch plates, and slow golden-hour conversations.</motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#booking" className="rounded-full bg-crema px-8 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-espresso shadow-soft transition hover:-translate-y-1 hover:bg-white">Booking</a>
            <a href="#menu" className="rounded-full border border-crema/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-crema transition hover:bg-crema/10">Explore Menu</a>
          </motion.div>
        </motion.div>
        <a href="#story" aria-label="Scroll to story" className="absolute bottom-7 grid h-12 w-12 place-items-center rounded-full border border-crema/35 text-crema/90 transition hover:bg-crema/10">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-oat via-copper to-espresso p-4 shadow-soft">
            <div className="h-full rounded-[2rem] border border-white/35 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,.48),transparent_20%),linear-gradient(155deg,rgba(255,255,255,.18),rgba(27,23,19,.28))]" />
          </div>
          <div className="absolute -bottom-7 -right-4 rounded-[2rem] bg-white p-6 shadow-card md:-right-8">
            <p className="font-display text-4xl font-bold text-roast">7am</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-espresso/50">Daily opening</p>
          </div>
        </div>
        <div>
          <SectionLabel>Our story</SectionLabel>
          <h2 className="font-display text-5xl font-bold leading-tight text-espresso md:text-7xl">Cafe warmth with a modern booking-first experience.</h2>
          <p className="mt-7 text-lg leading-9 text-espresso/68">Inspired by classic cafe landing pages with a centered brand mark, simple navigation, large sensory hero message, and direct reservation flow — Chu Cafe updates the feel with soft editorial cards, earthy tones, and a responsive mobile-first structure.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Single-origin coffee", "Brunch favorites", "Cozy evening bites"].map((item) => (
              <div key={item} className="rounded-3xl border border-roast/10 bg-white/70 p-5 shadow-card backdrop-blur">
                <Star className="mb-4 text-copper" size={20} />
                <p className="font-semibold text-espresso">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const menu = [
  { name: "Chu Signature Latte", desc: "Velvety espresso, oat milk option, caramelized brown sugar finish.", price: "RM 14" },
  { name: "Golden Kaya Toast", desc: "Toasted milk bread, house kaya, cultured butter, sea salt flakes.", price: "RM 18" },
  { name: "Garden Brunch Plate", desc: "Eggs, mushrooms, roasted tomatoes, greens, and sourdough.", price: "RM 28" },
  { name: "Evening Tiramisu", desc: "Coffee-soaked layers, mascarpone cream, cocoa dust.", price: "RM 22" },
];

function MenuSection() {
  return (
    <section id="menu" className="bg-white/55 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Menu mood</SectionLabel>
            <h2 className="font-display text-5xl font-bold text-espresso md:text-7xl">Simple, warm, made to linger.</h2>
          </div>
          <a href="#booking" className="w-fit rounded-full bg-roast px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-card transition hover:-translate-y-1 hover:bg-espresso">Book a table</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {menu.map((item, index) => (
            <article key={item.name} className="menu-card-bg rounded-[2rem] border border-roast/10 p-7 shadow-card">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-3xl font-bold text-espresso">{item.name}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-espresso/65">{item.desc}</p>
                </div>
                <span className="rounded-full bg-espresso px-4 py-2 text-sm font-bold text-crema">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Space() {
  return (
    <section id="space" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SectionLabel>The space</SectionLabel>
          <h2 className="font-display text-5xl font-bold text-espresso md:text-6xl">A calm corner for every kind of coffee moment.</h2>
        </div>
        {["Morning bar", "Window tables", "Evening lounge"].map((title, i) => (
          <div key={title} className="min-h-[360px] rounded-[2.4rem] bg-gradient-to-br from-white to-oat/60 p-5 shadow-card">
            <div className="flex h-full flex-col justify-end rounded-[1.9rem] bg-gradient-to-br from-espresso/15 via-copper/20 to-sage/25 p-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-espresso/50">0{i + 1}</p>
              <h3 className="font-display text-4xl font-bold text-espresso">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventsBooking() {
  return (
    <section id="events" className="bg-espresso px-5 py-24 text-crema md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>Private moments</SectionLabel>
          <h2 className="font-display text-5xl font-bold md:text-7xl">Coffee tastings, small gatherings, and weekend brunch tables.</h2>
          <p className="mt-7 text-lg leading-9 text-crema/72">Chu Cafe is built around the conversion flow the reference emphasizes: find the mood, understand the place, then book quickly. Use the form to request a table or event slot.</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-crema/15 p-5"><Clock className="mb-4" /><p>Daily 7am–11pm</p></div>
            <div className="rounded-3xl border border-crema/15 p-5"><MapPin className="mb-4" /><p>City cafe location</p></div>
            <div className="rounded-3xl border border-crema/15 p-5"><CalendarDays className="mb-4" /><p>Booking friendly</p></div>
          </div>
        </div>
        <form id="booking" className="rounded-[2.5rem] bg-crema p-7 text-espresso shadow-soft md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-roast/70">Booking</p>
          <h3 className="mt-3 font-display text-4xl font-bold">Reserve your table</h3>
          <div className="mt-8 grid gap-4">
            <input aria-label="Name" className="rounded-2xl border border-roast/15 bg-white px-5 py-4 outline-none ring-roast/30 transition focus:ring-4" placeholder="Your name" />
            <input aria-label="Phone" className="rounded-2xl border border-roast/15 bg-white px-5 py-4 outline-none ring-roast/30 transition focus:ring-4" placeholder="Phone number" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input aria-label="Date" type="date" className="rounded-2xl border border-roast/15 bg-white px-5 py-4 outline-none ring-roast/30 transition focus:ring-4" />
              <input aria-label="Guests" type="number" min="1" className="rounded-2xl border border-roast/15 bg-white px-5 py-4 outline-none ring-roast/30 transition focus:ring-4" placeholder="Guests" />
            </div>
            <button type="button" className="mt-2 rounded-full bg-espresso px-7 py-4 text-sm font-extrabold uppercase tracking-[0.24em] text-crema transition hover:bg-roast">Booking</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2.5rem] border border-roast/10 bg-white shadow-card">
          <div className="grid min-h-[420px] place-items-center bg-[linear-gradient(135deg,#d7bea0,#f6efe4_46%,#7d8b72)] p-8 text-center">
            <div>
              <MapPin className="mx-auto mb-5 text-roast" size={42} />
              <p className="font-display text-5xl font-bold text-espresso">Find Chu Cafe</p>
              <p className="mx-auto mt-4 max-w-md text-espresso/65">Map placeholder ready for Google Maps embed or a custom illustrated location panel.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2.5rem] bg-white p-8 shadow-card md:p-10">
          <SectionLabel>Visit</SectionLabel>
          <h2 className="font-display text-5xl font-bold text-espresso">Come for coffee, stay for the room.</h2>
          <div className="mt-8 space-y-5 text-espresso/72">
            <p className="flex gap-4"><MapPin className="shrink-0 text-roast" /> 88, Jalan Aroma, Kuala Lumpur</p>
            <p className="flex gap-4"><Phone className="shrink-0 text-roast" /> +60 12 000 0000</p>
            <p className="flex gap-4"><Clock className="shrink-0 text-roast" /> Daily · 7.00am – 11.00pm</p>
          </div>
          <a href="#booking" className="mt-10 inline-flex rounded-full bg-roast px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-espresso">Booking</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#14110f] px-5 py-10 text-crema md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-3xl font-bold">Chu Cafe</p>
          <p className="mt-1 text-sm text-crema/55">Original cafe website inspired by warm classic cafe UX patterns.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-crema/72">
          <a href="#story">Story</a>
          <a href="#menu">Menu</a>
          <a href="#booking">Booking</a>
          <a href="#visit">Visit</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Story />
      <MenuSection />
      <Space />
      <EventsBooking />
      <Visit />
      <Footer />
    </main>
  );
}
