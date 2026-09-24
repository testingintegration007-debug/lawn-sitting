import { Link } from "@tanstack/react-router";
import {
  Scissors,
  Shield,
  Clock,
  Camera,
  Droplets,
  TreePine,
  Phone,
  ArrowRight,
  Star,
  Check,
  Menu,
  X,
  MapPin,
  Mail,
  Zap,
  Award,
  Users,
} from "lucide-react";
import { useState } from "react";

const heroImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/ba895109-94ab-4a43-9ede-f4908d16309a.jpg";
const crewImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/2397c215-6407-45a1-be20-de1762c6d784.jpg";
const aerialImg =
  "https://staging.vibe.filesafe.space/1789021417416017000/assets/5eb92b36-eea8-41dd-9024-04ad351736d2.jpg";

const navLinks = [
  { href: "#services", label: "Services push" },
  { href: "#process", label: "Processing" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: Scissors,
    title: "Precision Mowing",
    desc: "Weekly or bi-weekly cuts with stripe patterns, clean edges, and trimmed borders every single time.",
    tag: "Most Popular",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    desc: "Automated sprinkler management and hand-watering for beds. We adjust for rain so you never waste a drop.",
  },
  {
    icon: TreePine,
    title: "Tree & Hedge Work",
    desc: "Shaping, thinning, and hazard removal. We keep your trees healthy and your sightlines clear.",
  },
  {
    icon: Camera,
    title: "Photo Reports",
    desc: "After every visit you get timestamped photos of your yard — front, back, and any areas we flagged.",
  },
  {
    icon: Shield,
    title: "Pest & Weed Control",
    desc: "Targeted treatment for grubs, dandelions, and crabgrass. Eco-friendly products safe for kids and pets.",
  },
  {
    icon: Zap,
    title: "Storm Recovery",
    desc: "Downed branches, scattered debris, flooded beds — we're there within 24 hours of any weather event.",
  },
];

const process = [
  {
    step: "01",
    title: "Tell Us Your Address",
    desc: "We pull satellite imagery of your property and measure your lot before we even show up.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Get a Fixed Price",
    desc: "No hourly billing, no surprise add-ons. You see the total before any work starts.",
    icon: Award,
  },
  {
    step: "03",
    title: "Meet Your Sitter",
    desc: "The same background-checked person shows up every visit. They learn your yard inside out.",
    icon: Users,
  },
];

const testimonials = [
  {
    quote:
      "I was skeptical about a 'lawn sitter' but these folks are the real deal. My yard has never looked this good — and I haven't touched a mower in eight months.",
    name: "Marcus T.",
    detail: "Homeowner, 3 years",
    avatar: "MT",
  },
  {
    quote:
      "We hired them before selling our house. The buyers literally mentioned the lawn in their offer letter. Worth every penny.",
    name: "Denise R.",
    detail: "Home seller",
    avatar: "DR",
  },
  {
    quote:
      "Same guy, every two weeks, rain or shine. He texts me when he's done with photos. I've never had service like this.",
    name: "Alvin P.",
    detail: "Bi-weekly plan",
    avatar: "AP",
  },
];

function LawnSittingLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TreePine className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Turf<span className="text-primary">Lab</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:5550142270"
              className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              (555) 014-2270
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 sm:inline-flex"
            >
              Free Quote
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {mobileOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border/50 py-3 text-base font-medium"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Zap className="h-3 w-3" /> Now serving the Tri-State area
            </span>

            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your yard.
              <br />
              <span className="text-primary">Our obsession.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              TurfLab pairs you with a dedicated lawn specialist — the same person, every visit.
              Precision cuts, smart watering, and photo proof it happened.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_30px_-5px] shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50"
              >
                Get Your Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold transition-colors hover:bg-card"
              >
                Explore Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" /> Fully insured
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> On-time guarantee
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" /> 4.9/5 rating
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={heroImg}
                alt="Perfectly striped lawn with crisp edges at golden hour"
                className="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card p-5 shadow-2xl sm:block hidden">
              <p className="font-display text-3xl font-bold text-primary">2,400+</p>
              <p className="mt-1 text-sm text-muted-foreground">Lawns maintained this year</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 sm:grid-cols-4 sm:px-8">
          {[
            { value: "2,400+", label: "Active lawns" },
            { value: "98%", label: "On-time visits" },
            { value: "4.9★", label: "Avg rating" },
            { value: "$0", label: "Cancellation fee" },
          ].map((s) => (
            <div key={s.label} className="px-4 py-8 text-center sm:px-6">
              <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            What We Do
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Six services. One dedicated crew.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Everything your yard needs under one plan — or pick exactly what you want.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-10px] hover:shadow-primary/10"
            >
              {s.tag && (
                <span className="absolute right-5 top-5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {s.tag}
                </span>
              )}
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                How It Works
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Three steps to a yard you never worry about
              </h2>

              <div className="mt-12 space-y-8">
                {process.map((p) => (
                  <div key={p.step} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        <span className="mr-2 text-primary">{p.step}</span>
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={aerialImg}
                alt="Aerial view of a beautifully landscaped suburban yard"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Trust ── */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={crewImg}
                alt="TurfLab crew member operating professional mowing equipment"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1.5 text-sm font-semibold">Rated 4.9 from 840+ reviews</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Why TurfLab
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Not a landscaping company. A lawn care partner.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Big landscaping outfits rotate crews and rush through routes. We assign one specialist
              to your yard. They learn every inch — the shady patch under the oak, the slope that
              erodes, the strip by the mailbox that always browns out.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Same sitter every visit",
                "Photo proof after each job",
                "Flat-rate, no surprises",
                "Cancel anytime, no fees",
                "Background-checked crew",
                "Eco-friendly products",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="reviews" className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Don't take our word for it
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-[0_0_30px_-8px] hover:shadow-primary/8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.avatar}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-[60px]" />

          <div className="relative grid lg:grid-cols-2">
            {/* Left info */}
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Get Started
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Your lawn is one form away from looking incredible
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Fill out the form and we'll respond within 24 hours with a fixed-price quote. No
                obligations, no contracts, no catch.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Phone, label: "(555) 014-2270", sub: "Mon–Sat, 8am–6pm" },
                  { icon: Mail, label: "hello@turflab.co", sub: "We reply within a day" },
                  { icon: MapPin, label: "Tri-State Area", sub: "NJ, NY, CT" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                      <c.icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{c.label}</p>
                      <p className="text-xs text-muted-foreground">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="border-t border-border p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Name
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Jane Alvarez"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Phone
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Property address
                  <input
                    required
                    type="text"
                    name="address"
                    placeholder="123 Maple St, Your City"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  What do you need?
                  <select
                    name="service"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option>Full lawn care plan</option>
                    <option>Mowing & edging only</option>
                    <option>One-time cleanup</option>
                    <option>Tree & hedge work</option>
                    <option>Not sure — advise me</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Notes
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Gate code, pets, problem areas…"
                    className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_0_25px_-5px] shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
                >
                  Send My Request
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  No spam. No sharing. We respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <TreePine className="h-4 w-4" />
                </span>
                <span className="font-display text-lg font-bold">
                  Turf<span className="text-primary">Lab</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Dedicated lawn specialists for homeowners who want a perfect yard without lifting a
                finger. Licensed, insured, obsessive about details.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Services
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>Precision Mowing</li>
                <li>Smart Irrigation</li>
                <li>Tree & Hedge Work</li>
                <li>Pest & Weed Control</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Company
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
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
                <li>hello@turflab.co</li>
                <li>Mon–Sat, 8am–6pm</li>
                <li>NJ · NY · CT</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} TurfLab Inc. All rights reserved.</p>
            <p>Licensed & Insured · Tri-State Area</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawnSittingLanding;
