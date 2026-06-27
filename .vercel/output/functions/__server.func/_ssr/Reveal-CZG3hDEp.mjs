import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } })
};
function Reveal({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      custom: delay,
      variants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      className,
      children
    }
  );
}
export {
  Reveal as R
};
