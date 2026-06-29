"use client";

import Image from "next/image";
import { CalendarDays, Clock, MapPin, Menu, Phone, Utensils, Wine } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const menuItems = [
  { name: "Chu Signature Latte", desc: "Double ristretto, oat milk option, brown sugar crema.", price: "RM 14" },
  { name: "Golden Kaya Toast", desc: "House kaya, cultured butter, sea salt, toasted milk bread.", price: "RM 18" },
  { name: "Garden Brunch Plate", desc: "Eggs, mushrooms, tomatoes, greens and toasted sourdough.", price: "RM 28" },
  { name: "Evening Tiramisu", desc: "Coffee-soaked layers, mascarpone cream and dark cocoa.", price: "RM 22" },
];

const gallery = [
  { src: "/images/generated/story-barista.png", title: "Barista craft" },
  { src: "/images/generated/menu-brunch.png", title: "Brunch table" },
  { src: "/images/generated/space-interior.png", title: "Dining room" },
  { src: "/images/generated/events-booking.png", title: "Private table" },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.36em] ${light ? "text-amber-200/80" : "text-copper"}`}>
      <span className={`h-px w-10 ${light ? "bg-amber-200/50" : "bg-copper/50"}`} />
      {children}
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#100d0b]/82 text-white shadow-[0_20px_70px_rgba(0,0,0,.22)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-4" aria-label="Chu Cafe home">
          <div className="grid h-12 w-12 place-items-center border border-amber-200/40 bg-amber-100 text-[#1a120d]">
            <span className="font-display text-2xl font-bold">C</span>
          </div>
          <div className="leading-tight">
            <p className="font-display text-2xl font-bold tracking-wide">Chu Cafe</p>
            <p className="hidden text-[10px] font-bold uppercase tracking-[0.3em] text-amber-100/60 sm:block">Cafe & Restaurant</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/70 transition hover:text-amber-100">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="hidden rounded-none border border-amber-100/50 px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-amber-50 transition hover:bg-amber-100 hover:text-[#1a120d] lg:inline-flex">Booking</a>
        <button onClick={() => setOpen(!open)} className="border border-white/20 p-3 lg:hidden" aria-label="Toggle menu"><Menu size={19} /></button>
      </div>
      {open && (
        <div className="grid gap-1 border-t border-white/10 bg-[#100d0b] px-5 py-4 lg:hidden">
          {navItems.map((item) => <a key={item.href} onClick={() => setOpen(false)} href={item.href} className="px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/78">{item.label}</a>)}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#100d0b] text-white">
      <Image src="/images/generated/hero-cafe.png" alt="Warm premium cafe interior" fill priority sizes="100vw" className="object-cover opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,13,11,.96)_0%,rgba(16,13,11,.70)_43%,rgba(16,13,11,.30)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#100d0b] to-transparent" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 md:px-8">
        <div className="max-w-3xl py-24">
          <Eyebrow light>Welcome to Chu Cafe</Eyebrow>
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">Coffee, brunch & slow evenings.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/76">A polished cafe website inspired by premium restaurant WordPress templates: cinematic photos, elegant typography, darker contrast, warm details, and a clear reservation journey.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#booking" className="bg-amber-100 px-8 py-4 text-center text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#1a120d] transition hover:bg-white">Booking</a>
            <a href="#menu" className="border border-white/35 px-8 py-4 text-center text-[12px] font-extrabold uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-[#1a120d]">View Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#100d0b] px-5 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <Eyebrow light>Our story</Eyebrow>
          <h2 className="font-display text-5xl font-bold leading-tight md:text-7xl">Crafted like a neighborhood classic, presented like a destination.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/66">Chu Cafe blends all-day coffee culture with restaurant-level hospitality. The design now feels closer to high-end WordPress cafe templates: editorial imagery, layered dark sections, refined serif headings, and less synthetic gradient-heavy styling.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Artisan coffee", "All-day brunch", "Private tables"].map((item) => <div key={item} className="border border-white/12 bg-white/[.04] p-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-100/80">{item}</div>)}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full border border-amber-100/25" />
          <Image src="/images/generated/story-barista.png" alt="Barista preparing coffee" width={900} height={900} className="relative aspect-[4/5] w-full object-cover shadow-[0_35px_100px_rgba(0,0,0,.38)]" />
          <div className="absolute -bottom-7 right-7 bg-amber-100 px-7 py-5 text-[#1a120d] shadow-2xl"><p className="font-display text-4xl font-bold">7am</p><p className="text-xs font-bold uppercase tracking-[0.24em]">Daily opening</p></div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="bg-[#f5eadc] px-5 py-24 text-[#1a120d] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div>
            <Eyebrow>Special menu</Eyebrow>
            <h2 className="font-display text-5xl font-bold leading-tight md:text-7xl">Seasonal plates with cafe soul.</h2>
          </div>
          <Image src="/images/generated/menu-brunch.png" alt="Chu Cafe brunch and coffee table" width={1200} height={800} className="h-[360px] w-full object-cover shadow-[0_25px_80px_rgba(77,45,24,.22)]" />
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-7 md:grid-cols-2">
          {menuItems.map((item) => (
            <article key={item.name} className="border-b border-[#1a120d]/15 pb-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-3xl font-bold">{item.name}</h3>
                  <p className="mt-2 leading-7 text-[#1a120d]/62">{item.desc}</p>
                </div>
                <span className="font-display text-2xl font-bold text-copper">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-[#fffaf2] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-tight text-[#1a120d] md:text-7xl">Warm corners, honest food, real atmosphere.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {gallery.map((item, index) => (
            <figure key={item.src} className={`${index === 1 ? "md:translate-y-10" : ""} group overflow-hidden bg-[#1a120d]`}>
              <Image src={item.src} alt={item.title} width={800} height={1000} className="aspect-[3/4] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
              <figcaption className="px-5 py-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-100">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-[#17110d] px-5 py-24 text-white md:px-8">
      <Image src="/images/generated/events-booking.png" alt="Reserved cafe table for private gathering" fill sizes="100vw" className="object-cover opacity-28" />
      <div className="absolute inset-0 bg-[#17110d]/72" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div>
          <Eyebrow light>Reservation</Eyebrow>
          <h2 className="font-display text-5xl font-bold leading-tight md:text-7xl">Book a table for coffee, brunch or evening dessert.</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <div className="border border-white/15 p-5"><Clock className="mb-4 text-amber-100" /><p>Daily 7am–11pm</p></div>
            <div className="border border-white/15 p-5"><Utensils className="mb-4 text-amber-100" /><p>Brunch & dinner</p></div>
            <div className="border border-white/15 p-5"><Wine className="mb-4 text-amber-100" /><p>Private tables</p></div>
          </div>
        </div>
        <form className="bg-[#f5eadc] p-7 text-[#1a120d] shadow-[0_35px_100px_rgba(0,0,0,.38)] md:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-copper">Booking form</p>
          <h3 className="mt-3 font-display text-4xl font-bold">Reserve your table</h3>
          <div className="mt-8 grid gap-4">
            <input aria-label="Name" className="border border-[#1a120d]/15 bg-white px-5 py-4 outline-none focus:border-copper" placeholder="Your name" />
            <input aria-label="Phone" className="border border-[#1a120d]/15 bg-white px-5 py-4 outline-none focus:border-copper" placeholder="Phone number" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input aria-label="Date" type="date" className="border border-[#1a120d]/15 bg-white px-5 py-4 outline-none focus:border-copper" />
              <input aria-label="Guests" type="number" min="1" className="border border-[#1a120d]/15 bg-white px-5 py-4 outline-none focus:border-copper" placeholder="Guests" />
            </div>
            <button type="button" className="mt-2 bg-[#1a120d] px-7 py-4 text-[12px] font-extrabold uppercase tracking-[0.24em] text-white transition hover:bg-copper">Booking</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#f5eadc] px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-stretch">
        <Image src="/images/generated/visit-storefront.png" alt="Chu Cafe storefront exterior" width={1200} height={800} className="h-full min-h-[460px] w-full object-cover shadow-[0_25px_80px_rgba(77,45,24,.2)]" />
        <div className="bg-white p-8 shadow-[0_25px_80px_rgba(77,45,24,.14)] md:p-12">
          <Eyebrow>Visit us</Eyebrow>
          <h2 className="font-display text-5xl font-bold leading-tight text-[#1a120d]">Come for coffee, stay for the room.</h2>
          <div className="mt-9 space-y-6 text-[#1a120d]/72">
            <p className="flex gap-4"><MapPin className="shrink-0 text-copper" /> 88, Jalan Aroma, Kuala Lumpur</p>
            <p className="flex gap-4"><Phone className="shrink-0 text-copper" /> +60 12 000 0000</p>
            <p className="flex gap-4"><CalendarDays className="shrink-0 text-copper" /> Daily · 7.00am – 11.00pm</p>
          </div>
          <a href="#booking" className="mt-10 inline-flex bg-copper px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.24em] text-white transition hover:bg-[#1a120d]">Booking</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#100d0b] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <p className="font-display text-3xl font-bold">Chu Cafe</p>
        <p className="text-sm text-white/50">Premium cafe website with original GPT image 2 photography.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
