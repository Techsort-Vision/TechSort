import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as LucideIcons, S as Sparkles } from "../_libs/lucide-react.mjs";
function Icon({ name, ...props }) {
  const C = LucideIcons[name] ?? Sparkles;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(C, { ...props });
}
export {
  Icon as I
};
