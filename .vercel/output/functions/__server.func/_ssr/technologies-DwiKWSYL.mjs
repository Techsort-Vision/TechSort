import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { TECH_CATEGORIES } from "./router-cFfHQxW3.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { L as Layers, V as Video, g as Megaphone, h as Palette, D as Database, i as Cpu, j as CodeXml } from "../_libs/lucide-react.mjs";
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
import "../_libs/scheduler.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/antd.mjs";
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
import "../_libs/rc-component__dialog.mjs";
import "../_libs/ant-design__colors.mjs";
import "../_libs/rc-component__upload.mjs";
import "../_libs/rc-component__pagination.mjs";
import "../_libs/rc-component__picker.mjs";
import "../_libs/rc-component__progress.mjs";
import "../_libs/rc-component__tooltip.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const getCategoryIcon = (id) => {
  switch (id) {
    case "frontend":
      return CodeXml;
    case "backend":
      return Cpu;
    case "database":
      return Database;
    case "design":
      return Palette;
    case "marketing":
      return Megaphone;
    case "video":
      return Video;
    default:
      return Layers;
  }
};
function Tech() {
  const [tab, setTab] = reactExports.useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === tab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Technologies"
    }], eyebrow: "Our Stack", title: "Modern tools, picked on purpose", subtitle: "We don't chase hype — we ship with tools that have proven themselves on real production at scale." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 md:py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: TECH_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(c.id), className: `relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${tab === c.id ? "bg-brand text-white shadow-[0_0_24px_-4px_var(--primary)] scale-105" : "glass hover:bg-white/10 text-muted-foreground hover:text-foreground"}`, children: c.label }, c.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, transition: {
          duration: 0.4,
          staggerChildren: 0.05
        }, className: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: current.items.map((t, i) => {
          const Icon = getCategoryIcon(current.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.95,
            y: 10
          }, animate: {
            opacity: 1,
            scale: 1,
            y: 0
          }, transition: {
            duration: 0.4,
            delay: i * 0.05
          }, whileHover: {
            y: -6,
            scale: 1.02
          }, className: "group relative overflow-hidden rounded-2xl glass-strong border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-[0_8px_30px_-10px_var(--primary)] transition-all duration-500 bg-surface/50 backdrop-blur-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 size-14 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-inner group-hover:bg-primary/20 transition-colors duration-500 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 text-muted-foreground group-hover:text-primary transition-colors duration-500", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 font-bold text-lg tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-300", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-2 flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_var(--color-emerald-500)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground", children: "Production Ready" })
            ] })
          ] }, t);
        }) }, tab) }) })
      ] })
    ] })
  ] });
}
export {
  Tech as component
};
