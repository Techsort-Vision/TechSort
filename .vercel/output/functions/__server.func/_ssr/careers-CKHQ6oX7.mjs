import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { R as Reveal } from "./Reveal-CZG3hDEp.mjs";
import { JOBS, GlowButton } from "./router-DtXIbZlN.mjs";
import { j as Heart, k as Coffee, l as GraduationCap, m as Briefcase, b as MapPin, U as Upload } from "../_libs/lucide-react.mjs";
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
const BENEFITS = [{
  icon: Heart,
  title: "Full health coverage",
  desc: "Medical, dental, vision — fully covered."
}, {
  icon: Coffee,
  title: "Unlimited PTO",
  desc: "Take what you need, minimum 4 weeks/year."
}, {
  icon: GraduationCap,
  title: "Learning stipend",
  desc: "$2,500/year for courses, conferences, books."
}, {
  icon: Briefcase,
  title: "Remote-first",
  desc: "Work from anywhere, async by default."
}];
const PROCESS = ["Apply", "Intro call", "Skills interview", "Team chat", "Offer"];
function Careers() {
  const [done, setDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Careers"
    }], eyebrow: "We're hiring", title: "Build the future with us", subtitle: "Premium work, premium teammates, premium benefits. If you sweat the details — we want to talk." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80", alt: "", className: "rounded-3xl aspect-[4/3] object-cover", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Our culture" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "We're a small, opinionated team that hires slow and trusts fast. We optimize for craft, calm and compounding learning — not heroics. If you've ever worked somewhere that felt slightly chaotic and slightly too political, this is the antidote." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid sm:grid-cols-2 gap-3 text-sm", children: ["Async by default", "Senior-only hires", "4-day deep-work weeks", "No surprise meetings", "Open salaries", "Profit-share program"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-sky" }),
          x
        ] }, x)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Benefits" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: BENEFITS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "size-7 text-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: b.desc })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Hiring process" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-sky to-cyan-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: PROCESS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-12 rounded-full bg-brand grid place-items-center text-white font-bold animate-gradient", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold", children: s })
        ] }, s)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Open positions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3", children: JOBS.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: j.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
            " ",
            j.location,
            " · ",
            j.type
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply", className: "rounded-full glass px-5 py-2 text-sm font-semibold hover:bg-white/10", children: "Apply" })
      ] }, j.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-3xl p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Apply now" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Send us your details and we'll reply within 5 business days." }),
      !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 grid gap-3", onSubmit: (e) => {
        e.preventDefault();
        setDone(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Full name", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose a role" }),
          JOBS.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: j.title }, j.title))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: "Why TechSort?", rows: 4, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "rounded-xl bg-white/5 border border-dashed border-white/15 px-4 py-6 text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-4" }),
          " Upload resume (PDF)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: ".pdf,.doc,.docx", className: "hidden" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { className: "mt-2", children: "Submit application" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl glass p-6 text-center text-sky", children: "✓ Thanks! We'll be in touch within 5 business days." })
    ] }) }) })
  ] });
}
export {
  Careers as component
};
