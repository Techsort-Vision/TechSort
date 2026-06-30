import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { TECH_CATEGORIES } from "./router-DXvb7jPE.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
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
function Tech() {
  const [tab, setTab] = reactExports.useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === tab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Technologies"
    }], eyebrow: "Our Stack", title: "Modern tools, picked on purpose", subtitle: "We don't chase hype — we ship with tools that have proven themselves on real production at scale." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: TECH_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(c.id), className: `px-5 py-2.5 rounded-full text-sm font-medium transition ${tab === c.id ? "bg-brand text-white animate-gradient glow-sm" : "glass hover:bg-white/10"}`, children: c.label }, c.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.4
      }, className: "mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: current.items.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass-strong gradient-border rounded-2xl p-6 text-center hover:scale-105 hover:glow-sm transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold gradient-text", children: (i + 1).toString().padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-brand animate-gradient", style: {
          width: `${75 + i * 7 % 22}%`
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: "Production-ready" })
      ] }, t)) }, tab)
    ] }) })
  ] });
}
export {
  Tech as component
};
