import { createFileRoute } from "@tanstack/react-router";
import { Button, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FormSuccessModal } from "@/components/site/FormSuccessModal";
import { FormErrorModal } from "@/components/site/FormErrorModal";
import { SITE, SERVICES, FAQS, submitWeb3Form, WEB3FORMS_ACCESS_KEY } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TechSort IT Solutions" },
      { name: "description", content: "Get in touch with TechSort — project inquiries, partnerships and support. We reply within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const BUDGETS = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];

function Contact() {
  const [form] = Form.useForm();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const handleSubmit = async (values: Record<string, string>) => {
    setSubmitting(true);
    try {
      await submitWeb3Form(values, "TechSort contact inquiry");
      form.resetFields();
      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Contact" }]} eyebrow="Say hi" title="Let's build something together" subtitle="Tell us about your project — we'll respond within 24 hours with a tailored proposal." />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-strong gradient-border rounded-3xl p-8">
            <h2 className="text-2xl font-bold"><span className="gradient-text">Project inquiry</span></h2>
              <Form form={form} layout="vertical" className="ant-form-modern mt-6 grid sm:grid-cols-2 gap-3" onFinish={handleSubmit} requiredMark={false}>
                <Form.Item hidden name="access_key" initialValue={WEB3FORMS_ACCESS_KEY}>
                  <Input />
                </Form.Item>
                <Form.Item name="name" rules={[{ required: true, message: "Please enter your full name" }]}>
                  <Input placeholder="Full name *" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
                  <Input placeholder="Email *" />
                </Form.Item>
                <Form.Item name="phone" rules={[{ required: true, message: "Please enter your phone number" }]}>
                  <Input placeholder="Phone *" />
                </Form.Item>
                <Form.Item name="company">
                  <Input placeholder="Company" />
                </Form.Item>
                <Form.Item name="service" rules={[{ required: true, message: "Please select a service" }]}>
                  <Select
                    placeholder="Select a service *"
                    options={SERVICES.map((s) => ({ label: s.title, value: s.slug }))}
                  />
                </Form.Item>
                <Form.Item name="budget">
                  <Select placeholder="Budget" options={BUDGETS.map((b) => ({ label: b, value: b }))} />
                </Form.Item>
                <Form.Item className="sm:col-span-2" name="message">
                  <Input.TextArea rows={5} placeholder="Tell us about your project" />
                </Form.Item>
                <Form.Item className="sm:col-span-2">
                  <Button type="primary" htmlType="submit" loading={submitting} block>Send message</Button>
                </Form.Item>
              </Form>
          </div>

          <div className="grid gap-4 content-start">
            <InfoCard Icon={Mail} title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <PhoneCard />
            <InfoCard Icon={MapPin} title="Office" value={SITE.address} />
            <InfoCard Icon={Clock} title="Hours" value={SITE.hours} />
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition">
              <div className="size-10 rounded-xl bg-emerald-500 grid place-items-center text-white"><MessageCircle className="size-5" /></div>
              <div>
                <div className="font-semibold">WhatsApp us</div>
                <div className="text-xs text-muted-foreground">Average reply: 8 minutes</div>
              </div>
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-strong gradient-border rounded-3xl overflow-hidden aspect-[16/9]">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Surat,India&output=embed"
              className="size-full grayscale-[40%] contrast-[1.1] opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="glass-strong gradient-border rounded-3xl p-6">
            <h3 className="text-lg font-bold"><span className="gradient-text">Quick response</span></h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {["First reply within 24h", "Proposal within 3 business days", "Discovery call free of charge", "NDA signed before discovery"].map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-sky" />{x}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold text-center"><span className="gradient-text">FAQ</span></h2>
          <div className="mt-8 grid gap-3">
            {FAQS.slice(0, 4).map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="glass rounded-2xl overflow-hidden border border-white/5">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-white/5">
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`size-5 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FormSuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Message submitted"
        description="Thanks! Your inquiry is with TechSort. We will contact you within 24 hours."
      />
      <FormErrorModal 
        open={errorOpen} 
        onClose={() => setErrorOpen(false)} 
      />
    </>
  );
}

function InfoCard({ Icon, title, value, href }: { Icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const C: React.ElementType = href ? "a" : "div";
  return (
    <C href={href} className="glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition">
      <div className="size-10 rounded-xl bg-brand animate-gradient grid place-items-center text-white"><Icon className="size-5" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </C>
  );
}

function PhoneCard() {
  return (
    <div className="glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition">
      <div className="size-10 rounded-xl bg-brand animate-gradient grid place-items-center text-white"><Phone className="size-5" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
        <div className="mt-1 grid gap-1 text-sm font-medium">
          <a href={`tel:${SITE.phoneHref}`} className="hover:text-sky">{SITE.phone}</a>
          <a href={`tel:${SITE.secondaryPhoneHref}`} className="hover:text-sky">{SITE.secondaryPhone}</a>
        </div>
      </div>
    </div>
  );
}
