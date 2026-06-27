import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DGRdgqs7.mjs";
import { SERVICES, GlowButton } from "./router-DtXIbZlN.mjs";
import { i as Check } from "../_libs/lucide-react.mjs";
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
const STEPS = ["Project", "Scope", "Contact"];
function Quote() {
  const [step, setStep] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { breadcrumbs: [{
      label: "Request Quote"
    }], eyebrow: "Get a quote", title: "Tell us about your project", subtitle: "Three quick steps. Two minutes. One tailored proposal in your inbox within 24 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong gradient-border rounded-3xl p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-8", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-9 rounded-full grid place-items-center text-sm font-bold transition ${i <= step ? "bg-brand text-white" : "glass"}`, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) : i + 1 }),
        i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 h-px mx-2 transition ${i < step ? "bg-sky" : "bg-white/10"}` })
      ] }, s)) }),
      done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: "🚀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl font-bold gradient-text", children: "Proposal incoming" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Check your inbox within 24 hours. We'll include scope, timeline and pricing." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        if (step < 2) setStep(step + 1);
        else setDone(true);
      }, className: "grid gap-3", children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "What kind of project?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service" }),
            SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.title }, s.slug))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Brief description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, placeholder: "What are you building?", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Budget range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "glass rounded-xl px-4 py-3 text-sm cursor-pointer hover:bg-white/10 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "budget", required: true, className: "accent-sky" }),
            " ",
            b
          ] }, b)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "ASAP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "1–3 months" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "3–6 months" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Just exploring" })
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
          step > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep(step - 1), className: "rounded-full glass px-5 py-2.5 text-sm font-semibold", children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButton, { className: "flex-1", children: step === 2 ? "Submit" : "Continue" })
        ] })
      ] })
    ] }) }) })
  ] });
}
function Label({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-2", children });
}
export {
  Quote as component
};
