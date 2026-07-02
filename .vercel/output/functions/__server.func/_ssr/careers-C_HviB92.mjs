import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { R as Reveal } from "./Reveal-CZG3hDEp.mjs";
import { JOBS, WEB3FORMS_ACCESS_KEY, FormSuccessModal, FormErrorModal, submitWeb3Form } from "./router-cFfHQxW3.mjs";
import { F as Form, I as Input, S as Select, U as Upload, B as Button } from "../_libs/antd.mjs";
import { q as Heart, r as Coffee, s as GraduationCap, t as Briefcase, b as MapPin, U as Upload$1 } from "../_libs/lucide-react.mjs";
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
const BENEFITS = [{
  icon: Heart,
  title: "Full health coverage",
  desc: "Medical, dental, vision — fully covered."
}, {
  icon: Coffee,
  title: "Unlimited PTO",
  desc: "Take what you need, minimum 4 weeks/year."
}, {
  icon: GraduationCap,
  title: "Learning stipend",
  desc: "$2,500/year for courses, conferences, books."
}, {
  icon: Briefcase,
  title: "Remote-first",
  desc: "Work from anywhere, async by default."
}];
const PROCESS = ["Apply", "Intro call", "Skills interview", "Team chat", "Offer"];
function Careers() {
  const [form] = Form.useForm();
  const [successOpen, setSuccessOpen] = reactExports.useState(false);
  const [errorOpen, setErrorOpen] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      await submitWeb3Form(values, "TechSort career application");
      form.resetFields();
      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Careers"
    }], eyebrow: "We're hiring", title: "Build the future with us", subtitle: "Premium work, premium teammates, premium benefits. If you sweat the details — we want to talk." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80", alt: "", className: "rounded-3xl aspect-[4/3] object-cover", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Our culture" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "We're a small, opinionated team that hires slow and trusts fast. We optimize for craft, calm and compounding learning — not heroics. If you've ever worked somewhere that felt slightly chaotic and slightly too political, this is the antidote." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid sm:grid-cols-2 gap-3 text-sm", children: ["Async by default", "Senior-only hires", "4-day deep-work weeks", "No surprise meetings", "Open salaries", "Profit-share program"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-sky" }),
          x
        ] }, x)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Benefits" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: BENEFITS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "size-7 text-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: b.desc })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Hiring process" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-sky to-cyan-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: PROCESS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-12 rounded-full bg-brand grid place-items-center text-white font-bold animate-gradient", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold", children: s })
        ] }, s)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Open positions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3", children: JOBS.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: j.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
            " ",
            j.location,
            " · ",
            j.type
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply", className: "rounded-full glass px-5 py-2 text-sm font-semibold hover:bg-white/10", children: "Apply" })
      ] }, j.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-3xl p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Apply now" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Send us your details and we'll reply within 5 business days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { form, layout: "vertical", className: "ant-form-modern mt-6 grid gap-3", onFinish: handleSubmit, requiredMark: false, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { hidden: true, name: "access_key", initialValue: WEB3FORMS_ACCESS_KEY, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "name", rules: [{
          required: true,
          message: "Please enter your full name"
        }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Full name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "email", rules: [{
          required: true,
          type: "email",
          message: "Please enter a valid email"
        }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Email" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "role", rules: [{
          required: true,
          message: "Please choose a role"
        }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "Choose a role", options: JOBS.map((j) => ({
          label: j.title,
          value: j.title
        })) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "why", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input.TextArea, { placeholder: "Why TechSort?", rows: 4 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { name: "resume", valuePropName: "fileList", getValueFromEvent: (event) => Array.isArray(event) ? event : event?.fileList, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload.Dragger, { beforeUpload: () => false, maxCount: 1, accept: ".pdf,.doc,.docx", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload$1, { className: "size-4" }),
          " Upload resume (PDF)"
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", htmlType: "submit", loading: submitting, block: true, children: "Submit application" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormSuccessModal, { open: successOpen, onClose: () => setSuccessOpen(false), title: "Application submitted", description: "Thanks! Your application is with us. We will reply within 5 business days." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorModal, { open: errorOpen, onClose: () => setErrorOpen(false) })
  ] });
}
export {
  Careers as component
};
