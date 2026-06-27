import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { SERVICES, GlowButton, SITE, FAQS } from "./router-DtXIbZlN.mjs";
import { a as Mail, P as Phone, b as MapPin, C as Clock, c as MessageCircle, g as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const BUDGETS = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];
function Contact() {
  const [done, setDone] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Contact"
    }], eyebrow: "Say hi", title: "Let's build something together", subtitle: "Tell us about your project — we'll respond within 24 hours with a tailored proposal." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 glass-strong gradient-border rounded-3xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Project inquiry" }) }),
          !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 grid sm:grid-cols-2 gap-3", onSubmit: (e) => {
            e.preventDefault();
            setDone(true);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Full name *", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email *", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Phone", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Company", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky sm:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service *" }),
              SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.title }, s.slug))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Budget *" }),
              BUDGETS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: b }, b))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, placeholder: "Tell us about your project *", className: "sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { className: "w-full", children: "Send message" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-xl glass p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold gradient-text", children: "Message received" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We'll be in touch within 24 hours. Meanwhile, check out our recent work." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 content-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Phone, title: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: MapPin, title: "Office", value: SITE.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Clock, title: "Hours", value: SITE.hours }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${SITE.whatsapp}`, target: "_blank", rel: "noreferrer", className: "glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-emerald-500 grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "WhatsApp us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Average reply: 8 minutes" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 mt-10 grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 glass-strong gradient-border rounded-3xl overflow-hidden aspect-[16/9]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Office location", src: "https://www.google.com/maps?q=San+Francisco&output=embed", className: "size-full grayscale-[40%] contrast-[1.1] opacity-90", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Quick response" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid gap-3 text-sm", children: ["First reply within 24h", "Proposal within 3 business days", "Discovery call free of charge", "NDA signed before discovery"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-sky" }),
            x
          ] }, x)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "FAQ" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3", children: FAQS.slice(0, 4).map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden border border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-5 transition ${isOpen ? "rotate-180" : ""}` })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground", children: f.a })
        ] }, i);
      }) })
    ] }) })
  ] });
}
function InfoCard({
  Icon,
  title,
  value,
  href
}) {
  const C = href ? "a" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(C, { href, className: "glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-brand animate-gradient grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: value })
    ] })
  ] });
}
export {
  Contact as component
};
