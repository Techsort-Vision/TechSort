import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { WEB3FORMS_ACCESS_KEY, SERVICES, FormSuccessModal, FormErrorModal, submitWeb3Form } from "./router-cFfHQxW3.mjs";
import { F as Form, I as Input, S as Select, R as Radio, B as Button } from "../_libs/antd.mjs";
import { p as Check } from "../_libs/lucide-react.mjs";
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
import "../_libs/rc-component__dialog.mjs";
import "../_libs/ant-design__colors.mjs";
import "../_libs/rc-component__upload.mjs";
import "../_libs/rc-component__pagination.mjs";
import "../_libs/rc-component__picker.mjs";
import "../_libs/rc-component__progress.mjs";
import "../_libs/rc-component__tooltip.mjs";
const STEPS = ["Project", "Scope", "Contact"];
function Quote() {
  const [form] = Form.useForm();
  const [step, setStep] = reactExports.useState(0);
  const [successOpen, setSuccessOpen] = reactExports.useState(false);
  const [errorOpen, setErrorOpen] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    setSubmitting(true);
    try {
      await submitWeb3Form(form.getFieldsValue(true), "TechSort quote request");
      form.resetFields();
      setStep(0);
      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Request Quote"
    }], eyebrow: "Get a quote", title: "Tell us about your project", subtitle: "Three quick steps. Two minutes. One tailored proposal in your inbox within 24 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-3xl p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-8", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-9 rounded-full grid place-items-center text-sm font-bold transition ${i <= step ? "bg-brand text-white" : "glass"}`, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) : i + 1 }),
        i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 h-px mx-2 transition ${i < step ? "bg-sky" : "bg-white/10"}` })
      ] }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { form, layout: "vertical", className: "ant-form-modern grid gap-3", onFinish: handleSubmit, requiredMark: false, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { hidden: true, name: "access_key", initialValue: WEB3FORMS_ACCESS_KEY, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "What kind of project?", name: "service", rules: [{
            required: true,
            message: "Please select a service"
          }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "Select a service", options: SERVICES.map((s) => ({
            label: s.title,
            value: s.slug
          })) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Brief description", name: "description", rules: [{
            required: true,
            message: "Please add a brief description"
          }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input.TextArea, { rows: 4, placeholder: "What are you building?" }) })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Budget range", name: "budget", rules: [{
            required: true,
            message: "Please select a budget"
          }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Group, { className: "grid grid-cols-2 gap-2", children: ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { value: b, className: "glass rounded-xl px-4 py-3 text-sm hover:bg-white/10", children: b }, b)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Timeline", name: "timeline", rules: [{
            required: true,
            message: "Please select a timeline"
          }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "Select timeline", options: ["ASAP", "1–3 months", "3–6 months", "Just exploring"].map((value) => ({
            label: value,
            value
          })) }) })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Full name", name: "name", rules: [{
            required: true,
            message: "Please enter your full name"
          }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Email", name: "email", rules: [{
            required: true,
            type: "email",
            message: "Please enter a valid email"
          }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Company", name: "company", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
          step > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { htmlType: "button", onClick: () => setStep(step - 1), className: "rounded-full glass px-5 font-semibold", children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", htmlType: "submit", loading: submitting, className: "flex-1", children: step === 2 ? "Submit" : "Continue" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormSuccessModal, { open: successOpen, onClose: () => setSuccessOpen(false), title: "Proposal request submitted", description: "Nice. Your quote request is in. We will send scope, timeline and pricing within 24 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorModal, { open: errorOpen, onClose: () => setErrorOpen(false) })
  ] });
}
export {
  Quote as component
};
