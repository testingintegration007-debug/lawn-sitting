import { Link } from "@tanstack/react-router";
import { TreePine, ShieldCheck, Clock, ClipboardCheck, Sprout, Phone } from "lucide-react";

const heroImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/9362c83f-c5b0-45f3-805a-96b08735f6d0.png";
const crewImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/51f4ab60-926c-4b0e-8fe0-3658d7a326fb.png";

const services = [
  {
    icon: TreePine,
    title: "I hope this works",
    desc: "Scheduled cuts that keep your lawn at the right height for healthy growth.",
  },
  {
    icon: Sprout,
    title: "Commit pull 2 Test",
    desc: "Seasonal fertilization and watering plans so your yard never goes thirsty.",
  },
  {
    icon: ClipboardCheck,
    title: "This as well 11",
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
  },
  {
    quote:
      "Booked them for a one-time cleanup before a family reunion. They finished in one afternoon and the yard looked better than when we moved in.",
    name: "Denise R.",
    detail: "One-time cleanup",
  },
  {
    quote:
      "Same crew every two weeks. They know my yard, they know my gate code, and they never miss a visit.",
    name: "Alvin P.",
    detail: "Recurring bi-weekly plan",
  },
];

const reveal = "animate-[fadeInUp_0.6s_ease-out_both]";

function LawnSittingLanding() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-nav-border bg-nav-background/95 text-nav-foreground backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-nav-accent text-nav-background">
              <TreePine className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              GreenGuard<span className="text-nav-accent">Lawn</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-nav-muted md:flex">
            <a href="#services" className="transition-colors hover:text-nav-foreground">
              Services manual push
            </a>
            <a href="#how" className="transition-colors hover:text-nav-foreground">
              How It Works - manul
            </a>
            <a href="#reviews" className="transition-colors hover:text-nav-foreground">
              Reviews
            </a>
            <a href="#book" className="transition-colors hover:text-nav-foreground">
              Book a call
            </a>
          </nav>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-lg bg-nav-accent px-4 py-2 text-sm font-semibold text-nav-background shadow-sm transition-opacity hover:opacity-90"
          >
            <Clock className="h-4 w-4" />
            Book a Visit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Sunlit, well-kept backyard lawn"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <div className={`max-w-xl ${reveal}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Licensed · Insured · Local
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your lawn, cared for — even when you can't be there.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              GreenGuard pairs your home with a dedicated, vetted lawn sitter. Mowing, watering,
              cleanups, and tree care on a schedule you control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
              >
                Book a Free Walkthrough
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:bg-secondary"
              >
                See Services
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Insured crews
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> On-time guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Sprout className="h-4 w-4 text-primary" /> Satisfaction promise
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <div className={`max-w-2xl ${reveal}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your yard needs, handled by one crew
          </h2>
          <p className="mt-3 text-muted-foreground">
            One dedicated sitter learns your property and keeps it healthy year-round — no rotating
            strangers, no re-explaining your yard.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${reveal}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className={`max-w-2xl ${reveal}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From overgrown to handled in three steps
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className={`relative rounded-2xl border border-border bg-card p-6 ${reveal}`}
              >
                <span className="font-display text-4xl font-bold text-primary/25">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / trust */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className={reveal}>
            <img
              src={crewImg}
              alt="GreenGuard crew member tending a garden bed"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
          <div className={reveal}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why GreenGuard
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A sitter who knows your yard by name
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every GreenGuard sitter is background-checked, insured, and assigned to a small route
              — so the same person shows up every visit. They notice the thin patches, the leaning
              fence post, the sprinkler head that drifted. You get a photo report after every visit.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Background-checked, uniformed sitters",
                "Photo report after every single visit",
                "Flat-rate pricing locked in before work begins",
                "Skip a visit or reschedule anytime online",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className={`max-w-2xl ${reveal}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Reviews</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Yards our clients stopped worrying about
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className={`flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm ${reveal}`}
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-lg md:grid-cols-2 md:p-12">
          <div className={reveal}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Book a Visit
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              Tell us about your lawn
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We'll schedule a free walkthrough and send a fixed quote within one business day. No
              obligation, no hourly billing.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-secondary/60 p-4">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Prefer to call?</p>
                <p className="text-sm text-muted-foreground">(555) 014-2270 · Mon–Sat, 8am–6pm</p>
              </div>
            </div>
          </div>
          <form
            className={`grid gap-4 ${reveal}`}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">
                Full name
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Jane Alvarez"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">
                Service
                <select
                  name="service"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  <option>Recurring lawn care</option>
                  <option>One-time cleanup</option>
                  <option>Mowing & edging only</option>
                  <option>Tree & shrub care</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Property address
                <input
                  required
                  type="text"
                  name="address"
                  placeholder="123 Maple St"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">
              Anything we should know?
              <textarea
                name="notes"
                rows={3}
                placeholder="Gate code, dog in yard, problem areas…"
                className="resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
            >
              Request My Free Walkthrough
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We reply within one business day. Your info is never shared or sold.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <TreePine className="h-4 w-4" />
            </span>
            <span className="font-display font-semibold text-foreground">GreenGuard Lawn</span>
          </div>
          <p>© {new Date().getFullYear()} GreenGuard Lawn Sitting · Licensed & Insured</p>
        </div>
      </footer>
    </div>
  );
}

export default LawnSittingLanding;
