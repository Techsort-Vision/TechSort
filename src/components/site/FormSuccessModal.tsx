import { Modal } from "antd";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FormSuccessModal({
  open,
  onClose,
  title = "Message submitted",
  description = "Thanks! We have received your details and will get back to you soon.",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}) {
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={420}>
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="py-8 text-center"
      >
        <motion.div
          initial={{ scale: 0.55, rotate: -18 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.05, duration: 0.45, type: "spring", stiffness: 220, damping: 14 }}
          className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary"
        >
          <CheckCircle2 className="size-9" />
        </motion.div>
        <h3 className="mt-5 text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
        <button
          onClick={onClose}
          className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Done
        </button>
      </motion.div>
    </Modal>
  );
}
