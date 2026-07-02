import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { cn } from "./router-cFfHQxW3.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-accent animate-glow-pulse" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-5xl font-bold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: title }) }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed", children: subtitle })
      ]
    }
  );
}
export {
  SectionHeading as S
};
