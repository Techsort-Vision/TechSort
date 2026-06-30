import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { SITE, GlowButton } from "./router-DXvb7jPE.mjs";
import { I as Input } from "../_libs/antd.mjs";
import { f as Search, B as Book, g as LifeBuoy, c as MessageCircle, P as Phone } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
  title: "WhatsApp chat",
  desc: `${SITE.hours} IST — message us anytime.`,
  cta: "Start chat",
  href: SITE.socials.whatsapp
}, {
  Icon: Phone,
  title: "Phone support",
  desc: SITE.phone,
  cta: "Call us",
  href: `tel:${SITE.phoneHref}`
}];
function Support() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Support"
    }], eyebrow: "Support", title: "We've got your back", subtitle: "Self-serve, real humans or enterprise SLA — pick what fits." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ant-form-modern", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { size: "large", prefix: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 text-muted-foreground" }), placeholder: "Search the help center...", className: "rounded-full" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 md:px-8 mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: CATS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "size-7 text-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.desc }),
        c.href ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: c.href.startsWith("http") ? "noreferrer" : void 0, className: "mt-4 inline-block text-sm text-sky font-medium", children: [
          c.cta,
          " →"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 text-sm text-sky font-medium", children: [
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
