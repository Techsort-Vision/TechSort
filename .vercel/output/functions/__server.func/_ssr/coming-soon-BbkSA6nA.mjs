import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { WEB3FORMS_ACCESS_KEY, FormSuccessModal, submitWeb3Form } from "./router-DXvb7jPE.mjs";
import { F as Form, I as Input, B as Button, s as staticMethods } from "../_libs/antd.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function Soon() {
  const target = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30).getTime();
  const [t, setT] = reactExports.useState(target - Date.now());
  const [successOpen, setSuccessOpen] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const i = setInterval(() => setT(target - Date.now()), 1e3);
    return () => clearInterval(i);
  }, [target]);
  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      await submitWeb3Form(values, "TechSort coming soon notification");
      setSuccessOpen(true);
    } catch {
      staticMethods.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const days = Math.max(0, Math.floor(t / (1e3 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor(t / (1e3 * 60 * 60) % 24));
  const mins = Math.max(0, Math.floor(t / (1e3 * 60) % 60));
  const secs = Math.max(0, Math.floor(t / 1e3 % 60));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-1/4 size-[400px] rounded-full bg-sky/30 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-1/4 size-[400px] rounded-full bg-cyan-glow/30 blur-3xl animate-float", style: {
      animationDelay: "2s"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-2xl px-4 text-center pt-24 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-accent animate-glow-pulse" }),
        " Almost there"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-5xl md:text-7xl font-bold gradient-text", children: "Something new is coming" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-lg mx-auto", children: "A new product line we've been quietly building. Subscribe to be first in line when we launch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-4 gap-3 max-w-md mx-auto", children: [{
        l: "Days",
        v: days
      }, {
        l: "Hours",
        v: hours
      }, {
        l: "Min",
        v: mins
      }, {
        l: "Sec",
        v: secs
      }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold gradient-text tabular-nums", children: x.v.toString().padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1", children: x.l })
      ] }, x.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onFinish: handleSubmit, className: "ant-form-modern mt-10 flex gap-2 max-w-md mx-auto", requiredMark: false, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { hidden: true, name: "access_key", initialValue: WEB3FORMS_ACCESS_KEY, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "email", className: "flex-1", rules: [{
          required: true,
          type: "email",
          message: "Please enter a valid email"
        }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "you@company.com" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", htmlType: "submit", loading: submitting, children: "Notify me" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-8 inline-block text-sm text-muted-foreground hover:text-foreground", children: "← Back home" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormSuccessModal, { open: successOpen, onClose: () => setSuccessOpen(false), title: "Notification request submitted", description: "Perfect. We will notify you as soon as this page goes live." })
  ] });
}
export {
  Soon as component
};
