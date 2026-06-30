import { createFileRoute } from "@tanstack/react-router";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { useState } from "react";
import { Briefcase, Coffee, GraduationCap, Heart, MapPin, Upload as UploadIcon } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { FormSuccessModal } from "@/components/site/FormSuccessModal";
import { FormErrorModal } from "@/components/site/FormErrorModal";
import { JOBS, submitWeb3Form, WEB3FORMS_ACCESS_KEY } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — TechSort IT Solutions" },
      { name: "description", content: "Join a 42-person studio building premium products. Open roles, remote-friendly, generous benefits." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const BENEFITS = [
  { icon: Heart, title: "Full health coverage", desc: "Medical, dental, vision — fully covered." },
  { icon: Coffee, title: "Unlimited PTO", desc: "Take what you need, minimum 4 weeks/year." },
  { icon: GraduationCap, title: "Learning stipend", desc: "$2,500/year for courses, conferences, books." },
  { icon: Briefcase, title: "Remote-first", desc: "Work from anywhere, async by default." },
];

const PROCESS = ["Apply", "Intro call", "Skills interview", "Team chat", "Offer"];

function Careers() {
  const [form] = Form.useForm();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: Record<string, unknown>) => {
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

  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Careers" }]} eyebrow="We're hiring" title="Build the future with us" subtitle="Premium work, premium teammates, premium benefits. If you sweat the details — we want to talk." />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="" className="rounded-3xl aspect-[4/3] object-cover" loading="lazy" />
          </Reveal>
          <Reveal>
            <h2 className="text-3xl font-bold"><span className="gradient-text">Our culture</span></h2>
            <p className="mt-4 text-muted-foreground">We're a small, opinionated team that hires slow and trusts fast. We optimize for craft, calm and compounding learning — not heroics. If you've ever worked somewhere that felt slightly chaotic and slightly too political, this is the antidote.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["Async by default", "Senior-only hires", "4-day deep-work weeks", "No surprise meetings", "Open salaries", "Profit-share program"].map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-sky" />{x}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center"><span className="gradient-text">Benefits</span></h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="glass-strong gradient-border rounded-2xl p-6">
                <b.icon className="size-7 text-sky" />
                <h3 className="mt-3 font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center"><span className="gradient-text">Hiring process</span></h2>
          <div className="mt-10 relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-sky to-cyan-glow" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {PROCESS.map((s, i) => (
                <div key={s} className="relative text-center">
                  <div className="mx-auto size-12 rounded-full bg-brand grid place-items-center text-white font-bold animate-gradient">{i + 1}</div>
                  <div className="mt-3 text-sm font-semibold">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center"><span className="gradient-text">Open positions</span></h2>
          <div className="mt-10 grid gap-3">
            {JOBS.map((j) => (
              <div key={j.title} className="glass-strong gradient-border rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="font-semibold">{j.title}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2"><MapPin className="size-3" /> {j.location} · {j.type}</div>
                </div>
                <a href="#apply" className="rounded-full glass px-5 py-2 text-sm font-semibold hover:bg-white/10">Apply</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-16">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <div className="glass-strong gradient-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold"><span className="gradient-text">Apply now</span></h2>
            <p className="mt-1 text-sm text-muted-foreground">Send us your details and we'll reply within 5 business days.</p>
              <Form form={form} layout="vertical" className="ant-form-modern mt-6 grid gap-3" onFinish={handleSubmit} requiredMark={false}>
                <Form.Item hidden name="access_key" initialValue={WEB3FORMS_ACCESS_KEY}>
                  <Input />
                </Form.Item>
                <Form.Item name="name" rules={[{ required: true, message: "Please enter your full name" }]}>
                  <Input placeholder="Full name" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="role" rules={[{ required: true, message: "Please choose a role" }]}>
                  <Select
                    placeholder="Choose a role"
                    options={JOBS.map((j) => ({ label: j.title, value: j.title }))}
                  />
                </Form.Item>
                <Form.Item name="why">
                  <Input.TextArea placeholder="Why TechSort?" rows={4} />
                </Form.Item>
                <Form.Item name="resume" valuePropName="fileList" getValueFromEvent={(event) => Array.isArray(event) ? event : event?.fileList}>
                  <Upload.Dragger beforeUpload={() => false} maxCount={1} accept=".pdf,.doc,.docx">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <UploadIcon className="size-4" /> Upload resume (PDF)
                    </div>
                  </Upload.Dragger>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={submitting} block>Submit application</Button>
                </Form.Item>
              </Form>
          </div>
        </div>
      </section>

      <FormSuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Application submitted"
        description="Thanks! Your application is with us. We will reply within 5 business days."
      />
      <FormErrorModal 
        open={errorOpen} 
        onClose={() => setErrorOpen(false)} 
      />
    </>
  );
}
