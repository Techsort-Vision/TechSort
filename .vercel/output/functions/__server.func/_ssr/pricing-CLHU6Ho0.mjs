import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { PRICING, GlowButton } from "./router-DtXIbZlN.mjs";
import { S as Sparkles, i as Check } from "../_libs/lucide-react.mjs";
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
function Pricing() {
  const [annual, setAnnual] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Pricing"
    }], eyebrow: "Simple Plans", title: "Pricing that respects your runway", subtitle: "No hidden fees, no surprise invoices. Pick the engagement that fits — change anytime." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-full p-1 inline-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAnnual(false), className: `px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? "bg-brand text-white" : ""}`, children: "Monthly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAnnual(true), className: `px-5 py-2 rounded-full text-sm font-medium transition ${annual ? "bg-brand text-white" : ""}`, children: [
          "Annual ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs opacity-80", children: "−15%" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: PRICING.map((p) => {
        const price = p.price === null ? null : annual ? Math.round(p.price * 0.85) : p.price;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-2xl p-8 bg-surface border transition-colors ${p.featured ? "border-primary/40" : "border-white/[0.08] hover:border-white/[0.16]"}`, children: [
          p.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
            " Most popular"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-end gap-1", children: price === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-semibold tracking-tight", children: "Custom" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-semibold tracking-tight", children: [
              "$",
              price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground pb-1.5", children: [
              "/",
              annual ? "mo · billed yearly" : "starting"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-2.5 text-sm text-muted-foreground", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
          ] }, f)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { to: "/request-quote", variant: p.featured ? "primary" : "ghost", className: "w-full", children: p.cta }) })
        ] }, p.name);
      }) })
    ] }) })
  ] });
}
export {
  Pricing as component
};
