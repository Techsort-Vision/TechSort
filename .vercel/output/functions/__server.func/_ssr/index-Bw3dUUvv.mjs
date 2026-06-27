import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { WHY_US, TECH_CATEGORIES, logo, GlowButton, cn, SERVICES } from "./router-DtXIbZlN.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { I as Icon } from "./Icon-CAAul6Jk.mjs";
import { S as SectionHeading } from "./SectionHeading-C14XNCFA.mjs";
import { R as Reveal } from "./Reveal-CZG3hDEp.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as ArrowUpRight, o as Compass, S as Sparkles, p as BadgeCheck, q as Cpu, A as ArrowRight, r as ChevronLeft, d as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
const aboutImage = "/assets/About-DuvozzmI.png";
const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost: "text-foreground border border-white/10 hover:bg-white/5"
};
function MagneticButton({ to, href, variant = "primary", className, children, ...rest }) {
  const cls = cn(base, variants[variant], className);
  if (to) return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: cls, children });
  if (href) return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: cls, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cls, ...rest, children });
}
function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
    skipSnaps: false
  });
  const [selected, setSelected] = reactExports.useState(0);
  const onSelect = reactExports.useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-[18%] z-20 bg-gradient-to-r from-background via-background/80 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-[18%] z-20 bg-gradient-to-l from-background via-background/80 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden cursor-grab active:cursor-grabbing", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center py-12 md:py-16 touch-pan-y", children: SERVICES.map((s, i) => {
      const isActive = i === selected;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative shrink-0 grow-0 basis-[78%] sm:basis-[55%] md:basis-[42%] lg:basis-[34%] px-3 md:px-5",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "group relative h-[420px] md:h-[460px] rounded-2xl overflow-hidden bg-surface border shadow-[0_22px_70px_-42px_rgba(0,0,0,0.7)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                isActive ? "scale-100 opacity-100 border-primary/35 z-10" : "scale-[0.92] opacity-55 border-white/[0.06]"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 md:h-56 overflow-hidden bg-white/[0.03]", children: [
                  s.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, className: "w-full h-full object-cover transition duration-700 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary/20 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-6 grid size-12 place-items-center rounded-xl bg-background/85 border border-white/10 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: s.icon, className: "size-6 text-sky" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-6 top-6 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-muted-foreground border border-white/10 backdrop-blur", children: [
                    String(i + 1).padStart(2, "0"),
                    " / ",
                    SERVICES.length
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between p-6 md:p-7", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 h-px w-12 bg-primary/70" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold leading-tight tracking-tight text-2xl md:text-[1.6rem] text-foreground", children: s.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed line-clamp-3", children: s.desc })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn(
                        "mt-6 transition-all duration-500",
                        isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
                      ),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: "/services/$slug",
                          params: { slug: s.slug },
                          className: "inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors",
                          children: [
                            "Explore service",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                          ]
                        }
                      )
                    }
                  )
                ] })
              ] })
            }
          )
        },
        s.slug
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-30 mt-2 flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Previous service",
          onClick: scrollPrev,
          className: "grid place-items-center size-10 rounded-full bg-white/[0.04] border border-white/10 text-foreground hover:bg-white/[0.08] transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: SERVICES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": `Go to service ${i + 1}`,
          onClick: () => emblaApi?.scrollTo(i),
          className: cn(
            "h-1.5 rounded-full transition-all duration-300",
            i === selected ? "w-6 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
          )
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Next service",
          onClick: scrollNext,
          className: "grid place-items-center size-10 rounded-full bg-white/[0.04] border border-white/10 text-foreground hover:bg-white/[0.08] transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" })
        }
      )
    ] })
  ] });
}
const ROTATING = ["Web Development", "App Development", "Branding", "Digital Marketing", "E-Commerce"];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 h-screen z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 -mt-[10vh] rounded-t-[2rem] bg-background border-t border-border shadow-[0_-24px_60px_-20px_rgba(0,0,0,0.35)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tech, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, {})
    ] })
  ] });
}
function Hero() {
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const i = setInterval(() => setIdx((x) => (x + 1) % ROTATING.length), 2800);
    return () => clearInterval(i);
  }, []);
  const pillars = [{
    Icon: Compass,
    k: "Vision-led",
    v: "Thoughtful strategy from day one"
  }, {
    Icon: Sparkles,
    k: "Craft-first",
    v: "Polished experiences with a premium feel"
  }, {
    Icon: BadgeCheck,
    k: "Dependable",
    v: "Clear communication and reliable delivery"
  }, {
    Icon: Cpu,
    k: "Future-ready",
    v: "Built to grow with your ambition"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "Hero", className: "relative h-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[680px] rounded-full bg-primary/[0.06] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-5xl px-5 md:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 8
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
        "Premium IT studio · Est. 2019"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 14
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }, className: "mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.025em] text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Transforming ideas into" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative mt-1 block h-[1.15em] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
          y: "100%",
          opacity: 0
        }, animate: {
          y: "0%",
          opacity: 1
        }, exit: {
          y: "-100%",
          opacity: 0
        }, transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }, className: "absolute inset-0 text-primary", children: [
          ROTATING[idx],
          "."
        ] }, idx) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2,
        duration: 0.5
      }, className: "mx-auto mt-6 max-w-2xl text-[15px] md:text-base text-muted-foreground leading-relaxed", children: "A focused engineering studio building web, mobile, AI and cloud products for teams that care about craft. Design-led. Outcome-driven." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3,
        duration: 0.5
      }, className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { to: "/request-quote", children: [
          "Start a project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { to: "/about", variant: "ghost", children: "Meet our studio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.4,
        duration: 0.5
      }, className: "mx-auto mt-14 grid max-w-3xl grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02]", children: pillars.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 px-4 py-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t.Icon, { className: "size-4 text-primary shrink-0", strokeWidth: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground truncate", children: t.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground truncate", children: t.v })
        ] })
      ] }, t.v)) })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand blur-3xl opacity-30 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface shadow-[0_30px_90px_-55px_rgba(0,0,0,0.8)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-white/[0.03]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImage, alt: "About TechSort", className: "size-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px border-t border-white/[0.08] bg-white/[0.08] sm:grid-cols-3", children: [{
          k: "Strategy",
          v: "Clear direction"
        }, {
          k: "Design",
          v: "Polished systems"
        }, {
          k: "Delivery",
          v: "Reliable launch"
        }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface/95 px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: item.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: item.v })
        ] }, item.k)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "About TechSort", title: "A new studio built for thoughtful growth", subtitle: "TechSort is a freshly launched digital studio helping founders and growing brands turn bold ideas into clear, polished, and meaningful experiences. We bring strategy, design, and careful execution together in a way that feels calm, collaborative, and future-ready." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-4", children: [{
        t: "Our Mission",
        d: "Create digital experiences that are elegant, useful, and built with intention."
      }, {
        t: "Our Vision",
        d: "Become the trusted studio partners turn to when their next idea deserves real care."
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-sky", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.d })
      ] }, b.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-muted-foreground", children: "We believe great digital work begins with clarity, grows through collaboration, and lasts through care. That is the standard we are building TechSort around every day." }) })
    ] })
  ] }) });
}
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why Choose Us", title: "Built different, on purpose", subtitle: "Six reasons teams pick TechSort over the big agencies — and rarely look back." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: WHY_US.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full glass-strong gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-brand grid place-items-center text-white animate-gradient mb-4 group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: w.icon, className: "size-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: w.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: w.desc })
    ] }) }, w.title)) })
  ] }) });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 mesh-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What We Do", title: "A spotlight on every capability", subtitle: "Drag, swipe or use the arrows — focus on one service at a time while previewing what's next." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 mx-auto max-w-[1400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesCarousel, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { to: "/services", variant: "ghost", children: [
      "View all services ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
    ] }) })
  ] });
}
function Tech() {
  const [tab, setTab] = reactExports.useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === tab);
  const items = current.items;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Stack", title: "A holographic toolbox", subtitle: "Switch categories — watch the stack reform around the core. Modern, battle-tested, picked for speed and developer joy." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-2", children: TECH_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(c.id), className: `relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${tab === c.id ? "bg-brand text-white animate-gradient glow-sm" : "glass hover:bg-white/70"}`, children: c.label }, c.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 mx-auto h-[520px] md:h-[600px] max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute size-[260px] md:size-[320px] rounded-full border border-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute size-[400px] md:size-[480px] rounded-full border border-border/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute size-[520px] md:size-[600px] rounded-full border border-border/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute size-[180px] rounded-full bg-primary/20 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 0.7,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }, className: "relative size-32 md:size-40 rounded-full glass-strong gradient-border grid place-items-center glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "size-20 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full ring-1 ring-[oklch(0.62_0.20_250/0.4)] animate-glow-pulse" })
      ] }, tab) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.3
      }, className: "absolute inset-0", children: items.map((t, i) => {
        const angle = i / items.length * Math.PI * 2;
        const radius = 44;
        const cx = 50 + Math.cos(angle) * radius;
        const cy = 50 + Math.sin(angle) * radius;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.7
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: i * 0.035,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1]
        }, style: {
          left: `${cx}%`,
          top: `${cy}%`,
          willChange: "transform, opacity"
        }, className: "absolute -translate-x-1/2 -translate-y-1/2 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative glass-strong gradient-border rounded-2xl px-4 py-2.5 hover:scale-105 transition cursor-default whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs md:text-sm font-semibold", children: t }) }) }, t);
      }) }, tab) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { to: "/technologies", variant: "ghost", children: [
      "Explore full stack ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
    ] }) })
  ] }) });
}
function CtaBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-surface border border-white/[0.08] p-10 md:p-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold tracking-tight text-foreground", children: "Ready to build something the world will notice?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: "Tell us about your project — we'll respond with a tailored proposal within 24 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowButton, { to: "/request-quote", children: [
        "Request a quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { to: "/contact", variant: "ghost", children: "Or just say hi" })
    ] })
  ] }) }) });
}
export {
  Home as component
};
