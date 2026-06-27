import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
function Soon() {
  const target = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30).getTime();
  const [t, setT] = reactExports.useState(target - Date.now());
  reactExports.useEffect(() => {
    const i = setInterval(() => setT(target - Date.now()), 1e3);
    return () => clearInterval(i);
  }, [target]);
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-10 flex gap-2 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "you@company.com", className: "flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-sm outline-none focus:border-sky" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-brand animate-gradient text-white px-5 py-3 text-sm font-semibold", children: "Notify me" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-8 inline-block text-sm text-muted-foreground hover:text-foreground", children: "← Back home" })
    ] })
  ] });
}
export {
  Soon as component
};
