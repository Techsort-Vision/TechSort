import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const KEY = "ts_subscribed_seen_v1";

export function SubscribeModal() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    localStorage.setItem(KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-surface border border-white/[0.08] rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} className="absolute top-4 right-4 size-8 rounded-md grid place-items-center text-muted-foreground hover:bg-white/5" aria-label="Close">
              <X className="size-4" />
            </button>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary px-2.5 py-1 text-[11px] font-medium">
              <Sparkles className="size-3" /> Limited time
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">Stay in the loop</h3>
            <p className="mt-2 text-sm text-muted-foreground">Early access to new services, case studies and a 10% discount on your first project.</p>
            {!done ? (
              <form className="mt-5 grid gap-3" onSubmit={(e) => { e.preventDefault(); setDone(true); setTimeout(close, 1200); }}>
                <input type="email" required placeholder="you@company.com" className="rounded-lg bg-white/[0.04] border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition-colors" />
                <button className="rounded-lg bg-primary text-primary-foreground font-semibold py-3 text-sm hover:bg-primary/90 transition-colors">Subscribe</button>
              </form>
            ) : (
              <div className="mt-5 rounded-lg bg-white/[0.04] border border-white/10 p-4 text-sm text-center text-primary">✓ You&apos;re in. Check your inbox.</div>
            )}
            <p className="mt-3 text-[11px] text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
