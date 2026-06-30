import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { H as House, e as ChevronRight } from "../_libs/lucide-react.mjs";
function Breadcrumbs({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "hover:text-foreground flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "size-3" }),
      " Home"
    ] }),
    items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3" }),
      it.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: it.to, className: "hover:text-foreground", children: it.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: it.label })
    ] }, i))
  ] });
}
function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 size-72 rounded-full bg-sky/20 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-10 size-72 rounded-full bg-cyan-glow/20 blur-3xl animate-float", style: { animationDelay: "1.5s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-8", children: [
      breadcrumbs && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: breadcrumbs }) }),
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-accent animate-glow-pulse" }),
        eyebrow
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: title }) }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mt-4 max-w-2xl text-base md:text-lg text-muted-foreground", children: subtitle })
    ] })
  ] });
}
export {
  PageHeader as P
};
