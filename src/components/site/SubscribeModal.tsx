import { AnimatePresence, motion } from "framer-motion";
import { Button, Form, Input, message } from "antd";
import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FormSuccessModal } from "./FormSuccessModal";
import { FormErrorModal } from "./FormErrorModal";
import { submitWeb3Form, WEB3FORMS_ACCESS_KEY } from "@/lib/site-data";

const KEY = "ts_subscribed_seen_v1";

export function SubscribeModal() {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (values: Record<string, string>) => {
    setSubmitting(true);
    try {
      await submitWeb3Form(values, "TechSort newsletter subscription");
      close();
      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
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
              <Form className="ant-form-modern mt-5 grid gap-3" onFinish={handleSubmit} requiredMark={false}>
                <Form.Item hidden name="access_key" initialValue={WEB3FORMS_ACCESS_KEY}>
                  <Input />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
                  <Input placeholder="you@company.com" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={submitting} block>Subscribe</Button>
                </Form.Item>
              </Form>
              <p className="mt-3 text-[11px] text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <FormSuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Subscription submitted"
        description="You're in. Watch your inbox for TechSort updates and early offers."
      />
      <FormErrorModal 
        open={errorOpen} 
        onClose={() => setErrorOpen(false)} 
      />
    </>
  );
}
