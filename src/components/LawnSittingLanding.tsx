import { Link } from "@tanstack/react-router";
import {
  TreePine,
  ShieldCheck,
  Clock,
  ClipboardCheck,
  Sprout,
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const heroImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/9362c83f-c5b0-45f3-805a-96b08735f6d0.png";
const crewImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/51f4ab60-926c-4b0e-8fe0-3658d7a326fb.png";

const services = [
  {
    icon: TreePine,
    title: "Mowing & Edging",
    desc: "Scheduled cuts that keep your lawn at the right height for healthy growth.",
  },
  {
    icon: Sprout,
    title: "Feeding & Watering",
    desc: "Seasonal fertilization and watering plans so your yard never goes thirsty.",
  },
  {
    icon: ClipboardCheck,
    title: "Seasonal Cleanup",
    desc: "Leaf removal, brush clearing, and storm debris hauled away — no trace left.",
  },
  {
    icon: ShieldCheck,
    title: "Tree & Shrub Care",
    desc: "Pruning, health checks, and hazard limbs removed before they become a problem.",
  },
];

const steps = [
  {
    n: "01",
    title: "Request a Visit",
    desc: "Tell us about your lawn and pick a time that works for you.",
  },
  {
    n: "02",
    title: "Get a Fixed Quote",
    desc: "We walk the property and give you a flat price — no hourly surprises.",
  },
  {
    n: "03",
    title: "We Handle the Rest",
    desc: "Recurring or one-time, your sitter shows up on schedule, every time.",
  },
];

const testimonials = [
  {
    quote:
      "I travel for work six months a year. GreenGuard has kept my lawn looking like I never left.",
    name: "Marcus T.",
    detail: "Snowbird client, 3 years",
    rating: 5,
  },
  {
    quote:
      "Booked them for a one-time cleanup before a family reunion. They finished in one afternoon and the yard looked better than when we moved in.",
    name: "Denise R.",
    detail: "One-time cleanup",
    rating: 5,
  },
  {
    quote:
      "Same crew every two weeks. They know my yard, they know my gate code, and they never miss a visit.",
    name: "Alvin P.",
    detail: "Recurring bi-weekly plan",
    rating: 5,
  },
];

const stats = [
  { value: "2,400+", label: "Lawns cared for" },
  { value: "4.9★", label: "Average rating" },
  { value: "98%", label: "On-time rate" },
  { value: "0", label: "Contracts required" },
];

function LawnSittingLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <TreePine className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Green<span className="text-primary">Guard</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {[
              { href: "#services", label: "Services" },
              { href: "#how", label: "How It Works" },
              { href: "#reviews", label: "Reviews" },
              { href: "#book", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:inline-flex"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            >
              {mobileOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 pb-5 pt-2 md:hidden">
            <nav className="flex flex-col">
              {[
                { href: "#services", label: "Services" },
                { href: "#how", label: "How It Works" },
                { href: "#reviews", label: "Reviews" },
                { href: "#book", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border/50 py-3 text-base font-medium text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Sunlit, well-kept backyard lawn"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 md:pb-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> Licensed · Insured · Local
          </span>

          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your lawn, cared for
            <span className="block text-primary"> — even when you can't be.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            GreenGuard pairs your home with a dedicated, vetted lawn sitter. Mowing, watering,
            cleanups, and tree care on a schedule you control.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Free Walkthrough
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-7 py-3.5 font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              See Services
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-border/50 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything your yard needs, one crew
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One dedicated sitter learns your property and keeps it healthy year-round — no rotating
            strangers, no re-explaining your yard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Simple Process
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From overgrown to handled in three steps
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-8 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-xl font-bold text-primary">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / trust */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <img
              src={crewImg}
              alt="GreenGuard crew member tending a garden bed"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-display font-semibold">100% Insured</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Every visit, every crew member
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why GreenGuard
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A sitter who knows your yard by name
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every GreenGuard sitter is background-checked, insured, and assigned to a small route
              — so the same person shows up every visit. They notice the thin patches, the leaning
              fence post, the sprinkler head that drifted. You get a photo report after every visit.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Background-checked, uniformed sitters",
                "Photo report after every single visit",
                "Flat-rate pricing locked in before work begins",
                "Skip a visit or reschedule anytime online",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Happy Yards
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Yards our clients stopped worrying about
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary/5 p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Get Started
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Tell us about your lawn
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We&rsquo;ll schedule a free walkthrough and send a fixed quote within one business
                day. No obligation, no hourly billing.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Prefer to call?</p>
                    <p className="text-sm text-muted-foreground">
                      (555) 014-2270 · Mon–Sat, 8am–6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Quick turnaround</p>
                    <p className="text-sm text-muted-foreground">
                      Quote within 24 hours of walkthrough
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">No contracts</p>
                    <p className="text-sm text-muted-foreground">
                      Cancel or pause anytime, no penalties
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Full name
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Jane Alvarez"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Phone
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Service
                    <select
                      name="service"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    >
                      <option>Recurring lawn care</option>
                      <option>One-time cleanup</option>
                      <option>Mowing & edging only</option>
                      <option>Tree & shrub care</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Property address
                    <input
                      required
                      type="text"
                      name="address"
                      placeholder="123 Maple St"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium">
                  Anything we should know?
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Gate code, dog in yard, problem areas…"
                    className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Request My Free Walkthrough
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We reply within one business day. Your info is never shared or sold.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <TreePine className="h-4 w-4" />
                </span>
                <span className="font-display text-lg font-bold">
                  Green<span className="text-primary">Guard</span>
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Dedicated lawn sitters for homeowners who want a beautiful yard without the hassle.
                Licensed, insured, and committed to showing up on time, every time.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#how", label: "How It Works" },
                  { href: "#reviews", label: "Reviews" },
                  { href: "#book", label: "Book a Visit" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>(555) 014-2270</li>
                <li>hello@greenguardlawn.com</li>
                <li>Mon–Sat, 8am–6pm</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} GreenGuard Lawn Sitting · Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawnSittingLanding;
