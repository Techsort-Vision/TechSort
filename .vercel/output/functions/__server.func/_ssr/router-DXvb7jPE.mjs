import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation, e as useRouterState, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as ConfigProvider, F as Form, I as Input, B as Button, s as staticMethods, M as Modal } from "../_libs/antd.mjs";
import { M as Menu, X, a as Mail, P as Phone, b as MapPin, C as Clock, I as Instagram, c as MessageCircle, S as Sparkles, d as CircleCheck } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/scheduler.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/rc-component__util.mjs";
import "../_libs/is-mobile.mjs";
import "../_libs/react-is.mjs";
import "../_libs/ant-design__cssinjs.mjs";
import "../_libs/emotion__hash.mjs";
import "../_libs/emotion__unitless.mjs";
import "../_libs/stylis.mjs";
import "../_libs/ant-design__cssinjs-utils.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/rc-component__resize-observer.mjs";
import "../_libs/rc-component__motion.mjs";
import "../_libs/rc-component__select.mjs";
import "../_libs/rc-component__overflow.mjs";
import "../_libs/rc-component__trigger.mjs";
import "../_libs/rc-component__portal.mjs";
import "../_libs/rc-component__virtual-list.mjs";
import "../_libs/ant-design__fast-color.mjs";
import "../_libs/ant-design__icons.mjs";
import "../_libs/ant-design__icons-svg.mjs";
import "../_libs/rc-component__checkbox.mjs";
import "../_libs/rc-component__color-picker.mjs";
import "../_libs/rc-component__form.mjs";
import "../_libs/rc-component__async-validator.mjs";
import "../_libs/scroll-into-view-if-needed.mjs";
import "../_libs/compute-scroll-into-view.mjs";
import "../_libs/rc-component__input.mjs";
import "../_libs/rc-component__notification.mjs";
import "../_libs/rc-component__dialog.mjs";
import "../_libs/ant-design__colors.mjs";
import "../_libs/rc-component__upload.mjs";
import "../_libs/rc-component__pagination.mjs";
import "../_libs/rc-component__picker.mjs";
import "../_libs/rc-component__progress.mjs";
import "../_libs/rc-component__tooltip.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-DAin0_BI.css";
const logo = "/assets/logo-COH1mDFA.png";
const webDevImg = "/assets/Web%20Dev-Bin0BU-_.png";
const appDevImg = "/assets/App%20Dev-DBlW_3hS.png";
const uiuxGraphicImg = "/assets/UI%20UX%20and%20Graphic%20design-BoeJw0Jb.png";
const brandingImg = "/assets/Branding-3fRJMUZw.png";
const videoEditingImg = "/assets/video%20editing-teQnVXNw.png";
const digitalMarketingImg = "/assets/digital%20marketing-DbMyGqGc.png";
const seoImg = "/assets/SEO-BhVxfCHO.png";
const socialMediaImg = "/assets/Social%20Media-Y_kZJacb.png";
const ecommerceImg = "/assets/E-commerce-B2i3A0Qi.png";
const cmsImg = "/assets/CMS-B9rQpC2m.png";
const maintenanceImg = "/assets/Maintainance%20and%20Support-Cm2FfqHT.png";
const consultingImg = "/assets/Consulting-Dea2Gprw.png";
const SITE = {
  name: "TechSort IT Solutions",
  email: "hello@techsort.io",
  phone: "+1 (415) 555-0144",
  whatsapp: "14155550144",
  address: "1042 Innovation Ave, Suite 500, San Francisco, CA 94107",
  hours: "Mon–Fri · 9:00 — 19:00",
  socials: {
    instagram: "https://instagram.com"
  }
};
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Tech" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" }
];
const SERVICES = [
  { slug: "web-development", title: "Web Development", icon: "Globe", desc: "High-performance sites & web apps built on modern stacks.", image: webDevImg },
  { slug: "app-development", title: "App Development", icon: "Smartphone", desc: "Native-feeling iOS & Android apps from a single codebase.", image: appDevImg },
  { slug: "ui-ux-design", title: "UI / UX & Graphic Design", icon: "Palette", desc: "Research-driven product design and visual systems that convert.", image: uiuxGraphicImg },
  { slug: "branding", title: "Branding", icon: "Sparkles", desc: "Identity, voice and brand guidelines from zero to launch.", image: brandingImg },
  { slug: "video-editing", title: "Video Editing", icon: "Film", desc: "Reels, ads and product films cut for attention.", image: videoEditingImg },
  { slug: "digital-marketing", title: "Digital Marketing", icon: "Megaphone", desc: "Paid + organic campaigns engineered for ROAS.", image: digitalMarketingImg },
  { slug: "seo", title: "SEO Optimization", icon: "Search", desc: "Technical, on-page and content SEO that ranks.", image: seoImg },
  { slug: "social-media", title: "Social Media", icon: "Hash", desc: "Calendar, creative and community at scale.", image: socialMediaImg },
  { slug: "ecommerce", title: "E-Commerce", icon: "ShoppingBag", desc: "Storefronts on Shopify, Stripe & headless commerce.", image: ecommerceImg },
  { slug: "cms", title: "CMS Development", icon: "FileText", desc: "Headless & traditional CMS — Sanity, Strapi, WP.", image: cmsImg },
  { slug: "maintenance", title: "Maintenance & Support", icon: "Wrench", desc: "24/7 monitoring, patching and uptime SLAs.", image: maintenanceImg },
  { slug: "consulting", title: "IT Consulting", icon: "Lightbulb", desc: "Strategy, audits and tech leadership on demand.", image: consultingImg }
];
const TECH_CATEGORIES = [
  { id: "frontend", label: "Frontend", items: ["React.js", "Next.js", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { id: "backend", label: "Backend", items: ["Node.js", "Express.js", "Firebase", "REST APIs", "GraphQL", "Authentication"] },
  { id: "database", label: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"] },
  { id: "design", label: "Design Tools", items: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "Canva"] },
  { id: "marketing", label: "Marketing", items: ["Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "GA4", "SEMrush"] },
  { id: "video", label: "Video Editing", items: ["CapCut", "Premiere Pro", "After Effects", "DaVinci Resolve"] }
];
const WHY_US = [
  { icon: "Zap", title: "Fast Delivery", desc: "Aggressive timelines without cutting corners." },
  { icon: "Sparkles", title: "Innovative Solutions", desc: "We ship what others only put in pitch decks." },
  { icon: "Users", title: "Expert Team", desc: "Senior engineers, designers and strategists." },
  { icon: "TrendingUp", title: "Scalable Products", desc: "Built to grow from MVP to millions of users." },
  { icon: "Wallet", title: "Affordable Pricing", desc: "Transparent fixed-scope and retainer options." },
  { icon: "Headphones", title: "Always-on Support", desc: "Real humans, real response times, SLAs included." }
];
const TEAM = [
  { name: "Aarav Mehta", role: "Founder & CEO", image: "https://i.pravatar.cc/240?img=68" },
  { name: "Lena Park", role: "Head of Design", image: "https://i.pravatar.cc/240?img=45" },
  { name: "Jamal Carter", role: "Engineering Lead", image: "https://i.pravatar.cc/240?img=33" },
  { name: "Sofia Rossi", role: "Product Strategy", image: "https://i.pravatar.cc/240?img=44" },
  { name: "Kenji Tanaka", role: "Cloud Architect", image: "https://i.pravatar.cc/240?img=60" },
  { name: "Amara Okafor", role: "Marketing Director", image: "https://i.pravatar.cc/240?img=48" }
];
const JOBS = [
  { title: "Senior Full-Stack Engineer", location: "Remote · Worldwide", type: "Full-time" },
  { title: "Product Designer", location: "San Francisco · Hybrid", type: "Full-time" },
  { title: "DevOps Engineer", location: "Remote · EU", type: "Full-time" },
  { title: "Motion Designer", location: "Remote · Worldwide", type: "Contract" },
  { title: "Technical Project Manager", location: "San Francisco", type: "Full-time" }
];
const FAQS = [
  { q: "How long does a typical project take?", a: "Most MVPs ship in 6–10 weeks. Larger platforms run 3–6 months with iterative releases." },
  { q: "Do you sign NDAs?", a: "Always. We can use yours or send ours within an hour of request." },
  { q: "Can you work with our existing team?", a: "Yes — embedded, augmented or fully-outsourced engagements are all common for us." },
  { q: "What is your pricing model?", a: "Fixed-scope for defined projects, monthly retainers for ongoing work, and time & materials for discovery sprints." },
  { q: "Do you provide post-launch support?", a: "Yes — every project ships with 30 days of free support and optional SLA-backed retainers after that." },
  { q: "Which industries do you serve?", a: "Fintech, healthtech, e-commerce, SaaS, media, and ambitious early-stage startups across all sectors." }
];
const BLOG_POSTS = [
  { slug: "ship-faster-2026", title: "How modern teams ship 4x faster in 2026", excerpt: "Lean process, AI co-pilots and continuous delivery — the playbook we use on every engagement.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", date: "May 12, 2026", tag: "Engineering" },
  { slug: "design-systems-that-scale", title: "Design systems that actually scale", excerpt: "Tokens, primitives, and the boring discipline that lets ten designers feel like one.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80", date: "Apr 30, 2026", tag: "Design" },
  { slug: "edge-ai-in-production", title: "Running edge AI in production", excerpt: "What we learned shipping LLM-powered features to 2M users on Cloudflare Workers.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", date: "Apr 18, 2026", tag: "AI" },
  { slug: "seo-for-saas", title: "SEO playbook for B2B SaaS", excerpt: "The technical + content workflow that drives consistent qualified pipeline.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80", date: "Apr 4, 2026", tag: "Marketing" },
  { slug: "from-mvp-to-series-a", title: "From MVP to Series A in 12 months", excerpt: "A teardown of three of our portfolio companies and what made the difference.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", date: "Mar 21, 2026", tag: "Startups" },
  { slug: "cloud-cost-cutting", title: "Cutting cloud bills by 60% without firing AWS", excerpt: "Right-sizing, edge caching and serverless tricks that actually move the needle.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", date: "Mar 7, 2026", tag: "Cloud" }
];
const PRICING = [
  { name: "Starter", price: 1900, blurb: "For founders validating an idea.", features: ["Landing page or simple app", "Up to 5 pages / screens", "Brand kit lite", "30 days support", "Launch in 2–3 weeks"], cta: "Start project", featured: false },
  { name: "Growth", price: 6500, blurb: "For startups ready to scale.", features: ["Full web/app product", "Custom design system", "Backend + auth + payments", "90 days support", "Dedicated PM"], cta: "Most popular", featured: true },
  { name: "Enterprise", price: null, blurb: "For complex, mission-critical platforms.", features: ["Custom architecture", "Multi-tenant + SLAs", "Embedded team", "Dedicated cloud ops", "Quarterly roadmap"], cta: "Talk to us", featured: false }
];
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
async function submitWeb3Form(data, subject) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      ...data,
      subject
    })
  });
  if (!response.ok) {
    throw new Error("Form submission failed");
  }
  return response.json();
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost: "text-foreground border border-white/10 hover:bg-white/5"
};
function GlowButton({
  to,
  href,
  variant = "primary",
  className,
  children,
  ...rest
}) {
  const cls = cn(base, variants[variant], className);
  if (to) return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: cls, children });
  if (href) return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: cls, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cls, ...rest, children });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const loc = useLocation();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: cn(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-200",
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-white/[0.06]" : "bg-background/40 border-b border-transparent"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TechSort", className: "size-16 object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold tracking-tight", children: "TechSort" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground", children: "IT Solutions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "relative px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors",
              activeProps: { className: "text-foreground" },
              activeOptions: { exact: l.to === "/" },
              children: ({ isActive }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-px h-px bg-primary" })
              ] })
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { to: "/request-quote", className: "px-4 py-2 text-xs", children: "Get a Quote" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(true),
              className: "rounded-md p-2 text-foreground hover:bg-white/5 border border-white/10",
              "aria-label": "Open menu",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden",
          onClick: () => setOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.aside,
        {
          initial: { x: "-100%" },
          animate: { x: 0 },
          exit: { x: "-100%" },
          transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
          className: "fixed top-0 left-0 bottom-0 z-[70] w-[82%] max-w-sm bg-background border-r border-white/[0.08] flex flex-col lg:hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-14 px-5 border-b border-white/[0.06]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-md overflow-hidden bg-white/[0.04] border border-white/10 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "size-full object-contain" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold tracking-tight", children: "TechSort" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "rounded-md p-2 hover:bg-white/5", "aria-label": "Close menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-y-auto px-3 py-4 grid gap-0.5", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: "px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors",
                activeProps: { className: "text-foreground bg-white/[0.04]" },
                activeOptions: { exact: l.to === "/" },
                children: l.label
              },
              l.to
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-white/[0.06] grid gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { to: "/request-quote", className: "w-full", children: "Get a Quote" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.phoneHref}`, className: "text-xs text-muted-foreground text-center hover:text-foreground", children: SITE.phone })
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 border-t border-white/10 bg-gradient-to-b from-transparent via-royal/10 to-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-sky/20 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-8 pt-16 pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl overflow-hidden glass-strong p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "size-full object-contain" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold gradient-text", children: "TechSort" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "IT Solutions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm", children: "A modern IT studio building premium digital products for ambitious teams worldwide." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${SITE.email}`, className: "flex items-center gap-2 hover:text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-sky" }),
              SITE.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-sky mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.phoneHref}`, className: "hover:text-foreground", children: SITE.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.secondaryPhoneHref}`, className: "hover:text-foreground", children: SITE.secondaryPhone })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-sky mt-0.5" }),
              SITE.address
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 text-sky" }),
              SITE.hours
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-2", children: [{ Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" }, { Icon: MessageCircle, href: SITE.socials.whatsapp, label: "WhatsApp" }].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", "aria-label": label, className: "size-9 rounded-lg glass grid place-items-center hover:glow-sm hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Website", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: link.to, children: link.label }, link.to)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterCol, { title: "Services", children: [
          SERVICES.slice(0, 8).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/services", children: s.title }, s.slug)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/services", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterCol, { title: "Legal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/request-quote", children: "Request Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/privacy", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/terms", children: "Terms" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          SITE.name,
          ". All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-foreground", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-foreground", children: "Terms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "hover:text-foreground", children: "Support" })
        ] })
      ] })
    ] })
  ] });
}
function FooterCol({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-2 text-sm", children })
  ] });
}
function FooterLink({ to, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-muted-foreground hover:text-foreground hover:translate-x-0.5 inline-block transition", children }) });
}
function FormSuccessModal({
  open,
  onClose,
  title = "Message submitted",
  description = "Thanks! We have received your details and will get back to you soon."
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open, onCancel: onClose, footer: null, centered: true, width: 420, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18, scale: 0.94 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      className: "py-8 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0.55, rotate: -18 },
            animate: { scale: 1, rotate: 0 },
            transition: { delay: 0.05, duration: 0.45, type: "spring", stiffness: 220, damping: 14 },
            className: "mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-9" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-semibold text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground", children: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
            children: "Done"
          }
        )
      ]
    }
  ) });
}
const KEY = "ts_subscribed_seen_v1";
function SubscribeModal() {
  const [open, setOpen] = reactExports.useState(false);
  const [successOpen, setSuccessOpen] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);
  const close = () => {
    localStorage.setItem(KEY, "1");
    setOpen(false);
  };
  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      await submitWeb3Form(values, "TechSort newsletter subscription");
      close();
      setSuccessOpen(true);
    } catch {
      staticMethods.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-sm",
        onClick: close,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.96, y: 12 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.98 },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            className: "relative w-full max-w-md bg-surface border border-white/[0.08] rounded-2xl p-8",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: close, className: "absolute top-4 right-4 size-8 rounded-md grid place-items-center text-muted-foreground hover:bg-white/5", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary px-2.5 py-1 text-[11px] font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
                " Limited time"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold tracking-tight", children: "Stay in the loop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Early access to new services, case studies and a 10% discount on your first project." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "ant-form-modern mt-5 grid gap-3", onFinish: handleSubmit, requiredMark: false, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { hidden: true, name: "access_key", initialValue: WEB3FORMS_ACCESS_KEY, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "email", rules: [{ required: true, type: "email", message: "Please enter a valid email" }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "you@company.com" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", htmlType: "submit", loading: submitting, block: true, children: "Subscribe" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] text-muted-foreground text-center", children: "No spam. Unsubscribe anytime." })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormSuccessModal,
      {
        open: successOpen,
        onClose: () => setSuccessOpen(false),
        title: "Subscription submitted",
        description: "You're in. Watch your inbox for TechSort updates and early offers."
      }
    )
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: `https://wa.me/${SITE.whatsapp}`,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-40 size-14 rounded-full grid place-items-center bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.7)] hover:scale-110 transition animate-glow-pulse",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full ring-2 ring-emerald-400/50 animate-ping" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4 bg-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center glass-strong gradient-border rounded-3xl p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-8xl font-bold gradient-text", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-xl font-semibold", children: "Lost in cyberspace" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded-full bg-brand animate-gradient text-white text-sm font-semibold px-5 py-2.5", children: "Go home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full glass text-sm font-semibold px-5 py-2.5", children: "Contact us" })
    ] })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4 bg-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center glass-strong gradient-border rounded-3xl p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went sideways. Try again or go home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-full bg-brand text-white text-sm font-semibold px-5 py-2.5", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full glass text-sm font-semibold px-5 py-2.5", children: "Go home" })
    ] })
  ] }) });
}
const Route$j = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TechSort IT Solutions — Premium Digital Products" },
      { name: "description", content: "TechSort is a premium IT studio building web, mobile, branding and AI-powered products for ambitious teams worldwide." },
      { name: "author", content: "TechSort" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:site_name", content: "TechSort IT Solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TechSort IT Solutions",
        url: "/",
        slogan: "Transforming Ideas Into Powerful Digital Solutions"
      })
    }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "light", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      style: { willChange: "opacity, transform" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
    },
    pathname
  ) });
}
function RootComponent() {
  const { queryClient } = Route$j.useRouteContext();
  reactExports.useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark");
    html.classList.add("light");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ConfigProvider,
    {
      theme: {
        token: {
          colorPrimary: "#0b74d9",
          borderRadius: 14,
          colorText: "#222733",
          colorTextPlaceholder: "#7a8392",
          colorBorder: "rgba(0, 0, 0, 0.12)",
          fontFamily: "Inter, system-ui, sans-serif"
        },
        components: {
          Button: {
            controlHeight: 44,
            fontWeight: 700
          },
          Input: {
            controlHeight: 44,
            activeBorderColor: "#0b74d9",
            hoverBorderColor: "#0b74d9"
          },
          Select: {
            controlHeight: 44,
            optionSelectedBg: "rgba(11, 116, 217, 0.10)"
          }
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouteTransition, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SubscribeModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {})
      ]
    }
  ) });
}
const $$splitComponentImporter$i = () => import("./terms-D0gkNjbD.mjs");
const Route$i = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms & Conditions — TechSort"
    }, {
      name: "description",
      content: "Terms governing the use of TechSort services and website."
    }, {
      property: "og:url",
      content: "/terms"
    }],
    links: [{
      rel: "canonical",
      href: "/terms"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./technologies-hTwj9x4m.mjs");
const Route$h = createFileRoute("/technologies")({
  head: () => ({
    meta: [{
      title: "Technologies — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Our modern, battle-tested tech stack across frontend, backend, database, design, marketing and video editing."
    }, {
      property: "og:title",
      content: "Technologies — TechSort"
    }, {
      property: "og:url",
      content: "/technologies"
    }],
    links: [{
      rel: "canonical",
      href: "/technologies"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./team-BX-gBWjm.mjs");
const Route$g = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Meet the designers, engineers and strategists building premium products at TechSort."
    }, {
      property: "og:url",
      content: "/team"
    }],
    links: [{
      rel: "canonical",
      href: "/team"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./support-o9W-x0R9.mjs");
const Route$f = createFileRoute("/support")({
  head: () => ({
    meta: [{
      title: "Support Center — TechSort"
    }, {
      name: "description",
      content: "Get help fast — docs, FAQs, live support and SLA-backed retainers for ongoing clients."
    }, {
      property: "og:url",
      content: "/support"
    }],
    links: [{
      rel: "canonical",
      href: "/support"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./success-stories-4HbSS2_p.mjs");
const Route$e = createFileRoute("/success-stories")({
  head: () => ({
    meta: [{
      title: "Our Values — TechSort"
    }, {
      name: "description",
      content: "A company introduction focused on thoughtful strategy, polished design, and dependable digital delivery."
    }, {
      property: "og:url",
      content: "/success-stories"
    }],
    links: [{
      rel: "canonical",
      href: "/success-stories"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./services-CxTFitc-.mjs");
const Route$d = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Twenty world-class services across web, mobile, design, marketing, cloud and AI — all under one studio."
    }, {
      property: "og:title",
      content: "Services — TechSort"
    }, {
      property: "og:description",
      content: "Web, mobile, design, marketing, cloud and AI."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./request-quote-CJxuE4xI.mjs");
const Route$c = createFileRoute("/request-quote")({
  head: () => ({
    meta: [{
      title: "Request a Quote — TechSort"
    }, {
      name: "description",
      content: "Tell us about your project — we'll respond with a tailored proposal within 24 hours."
    }, {
      property: "og:url",
      content: "/request-quote"
    }],
    links: [{
      rel: "canonical",
      href: "/request-quote"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./privacy-CYF0hH5m.mjs");
const Route$b = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — TechSort"
    }, {
      name: "description",
      content: "How TechSort collects, uses and protects your personal data."
    }, {
      property: "og:url",
      content: "/privacy"
    }],
    links: [{
      rel: "canonical",
      href: "/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./pricing-D7M-pW96.mjs");
const Route$a = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Transparent pricing for premium IT services. Fixed-scope, retainer or enterprise — pick what fits."
    }, {
      property: "og:url",
      content: "/pricing"
    }],
    links: [{
      rel: "canonical",
      href: "/pricing"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./portfolio-BHTJv5pk.mjs");
const Route$9 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "About Our Work — TechSort IT Solutions"
    }, {
      name: "description",
      content: "A company introduction focused on thoughtful strategy, polished design, and dependable digital delivery."
    }, {
      property: "og:title",
      content: "About Our Work — TechSort"
    }, {
      property: "og:url",
      content: "/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./faq-E57TZ3i1.mjs");
const Route$8 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Answers to the questions teams ask us most often before kicking off a project."
    }, {
      property: "og:url",
      content: "/faq"
    }],
    links: [{
      rel: "canonical",
      href: "/faq"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contact--hUa48Sr.mjs");
const Route$7 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Get in touch with TechSort — project inquiries, partnerships and support. We reply within 24 hours."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./coming-soon-BbkSA6nA.mjs");
const Route$6 = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [{
      title: "Coming Soon — TechSort"
    }, {
      name: "description",
      content: "Something new is coming from TechSort. Subscribe to be first in line."
    }, {
      property: "og:url",
      content: "/coming-soon"
    }],
    links: [{
      rel: "canonical",
      href: "/coming-soon"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./case-studies-D-RVwXii.mjs");
const Route$5 = createFileRoute("/case-studies")({
  head: () => ({
    meta: [{
      title: "Our Approach — TechSort IT Solutions"
    }, {
      name: "description",
      content: "A company introduction focused on thoughtful strategy, polished design, and dependable digital delivery."
    }, {
      property: "og:url",
      content: "/case-studies"
    }],
    links: [{
      rel: "canonical",
      href: "/case-studies"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./careers-Cl5OMrgQ.mjs");
const Route$4 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Join a 42-person studio building premium products. Open roles, remote-friendly, generous benefits."
    }, {
      property: "og:url",
      content: "/careers"
    }],
    links: [{
      rel: "canonical",
      href: "/careers"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-D2JXv9oL.mjs");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Insights — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Field notes on product, design, engineering, AI, marketing and cloud — straight from the studio."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-BSBjk5ex.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — TechSort IT Solutions"
    }, {
      name: "description",
      content: "Meet TechSort, a newly launched studio focused on thoughtful strategy, elegant design, and dependable digital delivery."
    }, {
      property: "og:title",
      content: "About TechSort"
    }, {
      property: "og:description",
      content: "A new studio building thoughtful digital experiences with clarity and care."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DMC7P96k.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "TechSort IT Solutions — Premium Web, App & AI Studio"
    }, {
      name: "description",
      content: "Award-winning IT studio building web, mobile, branding, AI and cloud products for startups and enterprises worldwide."
    }, {
      property: "og:title",
      content: "TechSort IT Solutions"
    }, {
      property: "og:description",
      content: "We transform ideas into powerful digital solutions."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./services._slug-DrcAg5o2.mjs");
const $$splitErrorComponentImporter = () => import("./services._slug-BewXC6nC.mjs");
const $$splitComponentImporter = () => import("./services._slug-DdaAiDVg.mjs");
const Route = createFileRoute("/services/$slug")({
  loader: ({
    params
  }) => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return {
      svc
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.svc.title ?? "Service"} — TechSort`
    }, {
      name: "description",
      content: loaderData?.svc.desc ?? "TechSort service"
    }, {
      property: "og:title",
      content: `${loaderData?.svc.title} — TechSort`
    }, {
      property: "og:url",
      content: `/services/${loaderData?.svc.slug}`
    }],
    links: [{
      rel: "canonical",
      href: `/services/${loaderData?.svc.slug}`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const TermsRoute = Route$i.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$j
});
const TechnologiesRoute = Route$h.update({
  id: "/technologies",
  path: "/technologies",
  getParentRoute: () => Route$j
});
const TeamRoute = Route$g.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$j
});
const SupportRoute = Route$f.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => Route$j
});
const SuccessStoriesRoute = Route$e.update({
  id: "/success-stories",
  path: "/success-stories",
  getParentRoute: () => Route$j
});
const ServicesRoute = Route$d.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$j
});
const RequestQuoteRoute = Route$c.update({
  id: "/request-quote",
  path: "/request-quote",
  getParentRoute: () => Route$j
});
const PrivacyRoute = Route$b.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$j
});
const PricingRoute = Route$a.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$j
});
const PortfolioRoute = Route$9.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$j
});
const FaqRoute = Route$8.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$j
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$j
});
const ComingSoonRoute = Route$6.update({
  id: "/coming-soon",
  path: "/coming-soon",
  getParentRoute: () => Route$j
});
const CaseStudiesRoute = Route$5.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$j
});
const CareersRoute = Route$4.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$j
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$j
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$j
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$j
});
const ServicesSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ServicesRoute
});
const ServicesRouteChildren = {
  ServicesSlugRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  CareersRoute,
  CaseStudiesRoute,
  ComingSoonRoute,
  ContactRoute,
  FaqRoute,
  PortfolioRoute,
  PricingRoute,
  PrivacyRoute,
  RequestQuoteRoute,
  ServicesRoute: ServicesRouteWithChildren,
  SuccessStoriesRoute,
  SupportRoute,
  TeamRoute,
  TechnologiesRoute,
  TermsRoute
};
const routeTree = Route$j._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 50,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BLOG_POSTS,
  FAQS,
  FormSuccessModal,
  GlowButton,
  JOBS,
  PRICING,
  Route,
  SERVICES,
  SITE,
  TEAM,
  TECH_CATEGORIES,
  WEB3FORMS_ACCESS_KEY,
  WHY_US,
  cn,
  logo,
  router,
  submitWeb3Form
};
