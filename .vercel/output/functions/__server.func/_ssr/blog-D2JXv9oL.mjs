import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { R as Reveal } from "./Reveal-CZG3hDEp.mjs";
import { BLOG_POSTS } from "./router-DXvb7jPE.mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function Blog() {
  const [feature, ...rest] = BLOG_POSTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Insights"
    }], eyebrow: "Insights", title: "Field notes from the studio", subtitle: "Practical writing on product, design, engineering and growth — no fluff." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "group block glass-strong gradient-border rounded-3xl overflow-hidden hover:glow-sm transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] md:aspect-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: feature.image, alt: "", className: "size-full object-cover group-hover:scale-105 transition duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-sky", children: [
            feature.tag,
            " · ",
            feature.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold gradient-text", children: feature.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: feature.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-1 text-sm text-sky font-medium", children: [
            "Read article ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: rest.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "group block h-full glass-strong gradient-border rounded-2xl overflow-hidden hover:glow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "", className: "size-full object-cover group-hover:scale-110 transition duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-sky", children: [
            p.tag,
            " · ",
            p.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-semibold text-lg leading-snug", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.excerpt })
        ] })
      ] }) }, p.slug)) })
    ] }) })
  ] });
}
export {
  Blog as component
};
