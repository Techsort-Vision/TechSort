import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { R as Reveal } from "./Reveal-CZG3hDEp.mjs";
import { TEAM } from "./router-DtXIbZlN.mjs";
import { T as Twitter, L as Linkedin, G as Github } from "../_libs/lucide-react.mjs";
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
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Team"
    }], eyebrow: "The humans", title: "Meet the team", subtitle: "42 people across three offices and twelve timezones. Every project is led by a senior on day one." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: TEAM.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass-strong gradient-border rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.image, alt: m.name, loading: "lazy", className: "size-full object-cover group-hover:scale-105 transition duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all", children: [Twitter, Linkedin, Github].map((Ic, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "size-8 rounded-lg glass grid place-items-center hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ic, { className: "size-4" }) }, j)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-sky", children: m.role })
      ] })
    ] }) }, m.name)) }) })
  ] });
}
export {
  Team as component
};
