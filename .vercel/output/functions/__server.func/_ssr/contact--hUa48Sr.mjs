import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { WEB3FORMS_ACCESS_KEY, SERVICES, SITE, FAQS, FormSuccessModal, submitWeb3Form } from "./router-DXvb7jPE.mjs";
import { F as Form, I as Input, S as Select, B as Button, s as staticMethods } from "../_libs/antd.mjs";
import { a as Mail, b as MapPin, C as Clock, c as MessageCircle, h as ChevronDown, P as Phone } from "../_libs/lucide-react.mjs";
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
const BUDGETS = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];
function Contact() {
  const [form] = Form.useForm();
  const [successOpen, setSuccessOpen] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(null);
  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      await submitWeb3Form(values, "TechSort contact inquiry");
      form.resetFields();
      setSuccessOpen(true);
    } catch {
      staticMethods.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Contact"
    }], eyebrow: "Say hi", title: "Let's build something together", subtitle: "Tell us about your project — we'll respond within 24 hours with a tailored proposal." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 glass-strong gradient-border rounded-3xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Project inquiry" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { form, layout: "vertical", className: "ant-form-modern mt-6 grid sm:grid-cols-2 gap-3", onFinish: handleSubmit, requiredMark: false, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { hidden: true, name: "access_key", initialValue: WEB3FORMS_ACCESS_KEY, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "name", rules: [{
              required: true,
              message: "Please enter your full name"
            }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Full name *" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "email", rules: [{
              required: true,
              type: "email",
              message: "Please enter a valid email"
            }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Email *" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "phone", rules: [{
              required: true,
              message: "Please enter your phone number"
            }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phone *" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "company", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Company" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "service", rules: [{
              required: true,
              message: "Please select a service"
            }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "Select a service *", options: SERVICES.map((s) => ({
              label: s.title,
              value: s.slug
            })) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "budget", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "Budget", options: BUDGETS.map((b) => ({
              label: b,
              value: b
            })) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { className: "sm:col-span-2", name: "message", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input.TextArea, { rows: 5, placeholder: "Tell us about your project" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", htmlType: "submit", loading: submitting, block: true, children: "Send message" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 content-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCard, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: MapPin, title: "Office", value: SITE.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Clock, title: "Hours", value: SITE.hours }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${SITE.whatsapp}`, target: "_blank", rel: "noreferrer", className: "glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-emerald-500 grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "WhatsApp us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Average reply: 8 minutes" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 mt-10 grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 glass-strong gradient-border rounded-3xl overflow-hidden aspect-[16/9]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Office location", src: "https://www.google.com/maps?q=Surat,India&output=embed", className: "size-full grayscale-[40%] contrast-[1.1] opacity-90", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Quick response" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid gap-3 text-sm", children: ["First reply within 24h", "Proposal within 3 business days", "Discovery call free of charge", "NDA signed before discovery"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-sky" }),
            x
          ] }, x)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "FAQ" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3", children: FAQS.slice(0, 4).map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden border border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-5 transition ${isOpen ? "rotate-180" : ""}` })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground", children: f.a })
        ] }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormSuccessModal, { open: successOpen, onClose: () => setSuccessOpen(false), title: "Message submitted", description: "Thanks! Your inquiry is with TechSort. We will contact you within 24 hours." })
  ] });
}
function InfoCard({
  Icon,
  title,
  value,
  href
}) {
  const C = href ? "a" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(C, { href, className: "glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-brand animate-gradient grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: value })
    ] })
  ] });
}
function PhoneCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-brand animate-gradient grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Phone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 grid gap-1 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.phoneHref}`, className: "hover:text-sky", children: SITE.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.secondaryPhoneHref}`, className: "hover:text-sky", children: SITE.secondaryPhone })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
