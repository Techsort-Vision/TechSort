import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Compass, Cpu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import aboutImage from "@/assets/About.png";
import { GlowButton } from "@/components/site/GlowButton";
import { MagneticButton } from "@/components/site/MagneticButton";
import { ServicesCarousel } from "@/components/site/ServicesCarousel";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { TECH_CATEGORIES, WHY_US } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechSort IT Solutions — Premium Web, App & AI Studio" },
      { name: "description", content: "Award-winning IT studio building web, mobile, branding, AI and cloud products for startups and enterprises worldwide." },
      { property: "og:title", content: "TechSort IT Solutions" },
      { property: "og:description", content: "We transform ideas into powerful digital solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ROTATING = ["Web Development", "App Development", "Branding", "Digital Marketing", "E-Commerce"];

function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen z-0">
        <Hero />
      </div>
      <div className="relative z-10 -mt-[10vh] rounded-t-[2rem] bg-background border-t border-border shadow-[0_-24px_60px_-20px_rgba(0,0,0,0.35)]">
        <About />
        <WhyUs />
        <Services />
        <Tech />
        <CtaBand />
      </div>
    </div>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx((x) => (x + 1) % ROTATING.length), 2800);
    return () => clearInterval(i);
  }, []);

  const pillars = [
    { Icon: Compass, k: "Vision-led", v: "Thoughtful strategy from day one" },
    { Icon: Sparkles, k: "Craft-first", v: "Polished experiences with a premium feel" },
    { Icon: BadgeCheck, k: "Dependable", v: "Clear communication and reliable delivery" },
    { Icon: Cpu, k: "Future-ready", v: "Built to grow with your ambition" },
  ];

  return (
    <section
      aria-label="Hero"
      className="relative h-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[680px] rounded-full bg-primary/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          Premium IT studio · Est. 2019
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.025em] text-foreground"
        >
          <span className="block">Transforming ideas into</span>
          <span className="relative mt-1 block h-[1.15em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 text-primary"
              >
                {ROTATING[idx]}.
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-[15px] md:text-base text-muted-foreground leading-relaxed"
        >
          A focused engineering studio building web, mobile, AI and cloud products for
          teams that care about craft. Design-led. Outcome-driven.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton to="/request-quote">
            Start a project <ArrowUpRight className="size-4" />
          </MagneticButton>
          <MagneticButton to="/about" variant="ghost">
            Meet our studio
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02]"
        >
          {pillars.map((t) => (
            <div key={t.v} className="bg-background/40 px-4 py-4 flex items-center gap-3">
              <t.Icon className="size-4 text-primary shrink-0" strokeWidth={2} />
              <span className="flex flex-col leading-tight min-w-0">
                <span className="text-[13px] font-semibold text-foreground truncate">{t.k}</span>
                <span className="text-[11px] text-muted-foreground truncate">{t.v}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-0 bg-brand blur-3xl opacity-30 rounded-full" />
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface shadow-[0_30px_90px_-55px_rgba(0,0,0,0.8)]">
              <div className="aspect-[4/3] overflow-hidden bg-white/[0.03]">
                <img src={aboutImage} alt="About TechSort" className="size-full object-cover" />
              </div>
              <div className="grid gap-px border-t border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {[
                  { k: "Strategy", v: "Clear direction" },
                  { k: "Design", v: "Polished systems" },
                  { k: "Delivery", v: "Reliable launch" },
                ].map((item) => (
                  <div key={item.k} className="bg-surface/95 px-5 py-4">
                    <div className="text-sm font-semibold text-foreground">{item.k}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About TechSort"
            title="A new studio built for thoughtful growth"
            subtitle="TechSort is a freshly launched digital studio helping founders and growing brands turn bold ideas into clear, polished, and meaningful experiences. We bring strategy, design, and careful execution together in a way that feels calm, collaborative, and future-ready."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Our Mission", d: "Create digital experiences that are elegant, useful, and built with intention." },
              { t: "Our Vision", d: "Become the trusted studio partners turn to when their next idea deserves real care." },
            ].map((b) => (
              <div key={b.t} className="glass rounded-2xl p-5">
                <div className="text-sm font-semibold text-sky">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm leading-7 text-muted-foreground">
              We believe great digital work begins with clarity, grows through collaboration, and lasts through care. That is the standard we are building TechSort around every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Built different, on purpose" subtitle="Six reasons teams pick TechSort over the big agencies — and rarely look back." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i}>
              <div className="group relative h-full glass-strong gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                <div className="size-12 rounded-xl bg-brand grid place-items-center text-white animate-gradient mb-4 group-hover:scale-110 transition">
                  <Icon name={w.icon} className="size-6" />
                </div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="A spotlight on every capability"
          subtitle="Drag, swipe or use the arrows — focus on one service at a time while previewing what's next."
        />
      </div>

      <div className="mt-12 mx-auto max-w-[1400px]">
        <ServicesCarousel />
      </div>

      <div className="mt-10 text-center">
        <MagneticButton to="/services" variant="ghost">
          View all services <ArrowRight className="size-4" />
        </MagneticButton>
      </div>
    </section>
  );
}

function Tech() {
  const [tab, setTab] = useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === tab)!;
  const items = current.items;
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading eyebrow="Our Stack" title="A holographic toolbox" subtitle="Switch categories — watch the stack reform around the core. Modern, battle-tested, picked for speed and developer joy." />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {TECH_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setTab(c.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${tab === c.id ? "bg-brand text-white animate-gradient glow-sm" : "glass hover:bg-white/70"}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Orbital holographic stage */}
        <div className="relative mt-16 mx-auto h-[520px] md:h-[600px] max-w-3xl">
          {/* concentric rings */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="absolute size-[260px] md:size-[320px] rounded-full border border-border" />
            <div className="absolute size-[400px] md:size-[480px] rounded-full border border-border/70" />
            <div className="absolute size-[520px] md:size-[600px] rounded-full border border-border/50" />
            <div className="absolute size-[180px] rounded-full bg-primary/20 blur-3xl" />

          </div>

          {/* core logo */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              key={tab}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative size-32 md:size-40 rounded-full glass-strong gradient-border grid place-items-center glow"
            >
              <img src={logo} alt="" className="size-20 object-contain" />
              <span className="absolute inset-0 rounded-full ring-1 ring-[oklch(0.62_0.20_250/0.4)] animate-glow-pulse" />
            </motion.div>
          </div>

          {/* orbiting tech chips */}
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              {items.map((t, i) => {
                const angle = (i / items.length) * Math.PI * 2;
                const radius = 44;
                const cx = 50 + Math.cos(angle) * radius;
                const cy = 50 + Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.035, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ left: `${cx}%`, top: `${cy}%`, willChange: "transform, opacity" }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  >
                    <div className="relative glass-strong gradient-border rounded-2xl px-4 py-2.5 hover:scale-105 transition cursor-default whitespace-nowrap">
                      <span className="text-xs md:text-sm font-semibold">{t}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

        </div>

        <div className="mt-8 text-center">
          <MagneticButton to="/technologies" variant="ghost">Explore full stack <ArrowRight className="size-4" /></MagneticButton>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-surface border border-white/[0.08] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Ready to build something the world will notice?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Tell us about your project — we&apos;ll respond with a tailored proposal within 24 hours.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GlowButton to="/request-quote">Request a quote <ArrowRight className="size-4" /></GlowButton>
            <GlowButton to="/contact" variant="ghost">Or just say hi</GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
