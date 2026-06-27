import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { SITE, GlowButton } from "./router-DtXIbZlN.mjs";
import { e as Search, B as Book, f as LifeBuoy, c as MessageCircle, P as Phone } from "../_libs/lucide-react.mjs";
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
const CATS = [{
  Icon: Book,
  title: "Documentation",
  desc: "Guides, API references and how-tos.",
  cta: "Browse docs"
}, {
  Icon: LifeBuoy,
  title: "Open a ticket",
  desc: "Get a dedicated engineer on your issue.",
  cta: "Submit ticket"
}, {
  Icon: MessageCircle,
  title: "Live chat",
  desc: "Mon–Fri, 9am–7pm PT — usually under 10 min.",
  cta: "Start chat"
}, {
  Icon: Phone,
  title: "Phone support",
  desc: "For enterprise plans with SLA.",
  cta: "Call us"
}];
function Support() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Support"
    }], eyebrow: "Support", title: "We've got your back", subtitle: "Self-serve, real humans or enterprise SLA — pick what fits." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong gradient-border rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search the help center...", className: "w-full bg-transparent rounded-full pl-12 pr-5 py-4 text-sm outline-none" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 md:px-8 mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: CATS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "size-7 text-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 text-sm text-sky font-medium", children: [
          c.cta,
          " →"
        ] })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 md:px-8 mt-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold gradient-text", children: "Still stuck?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
          "Email us at ",
          SITE.email,
          " — we read every message."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { to: "/contact", children: "Contact support" }) })
      ] })
    ] })
  ] });
}
export {
  Support as component
};
