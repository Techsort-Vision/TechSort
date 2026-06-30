import { createFileRoute } from "@tanstack/react-router";
import { Button, Form, Input, Radio, Select, message } from "antd";
import { useState } from "react";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FormSuccessModal } from "@/components/site/FormSuccessModal";
import { FormErrorModal } from "@/components/site/FormErrorModal";
import { SERVICES, submitWeb3Form, WEB3FORMS_ACCESS_KEY } from "@/lib/site-data";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — TechSort" },
      { name: "description", content: "Tell us about your project — we'll respond with a tailored proposal within 24 hours." },
      { property: "og:url", content: "/request-quote" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: Quote,
});

const STEPS = ["Project", "Scope", "Contact"];

function Quote() {
  const [form] = Form.useForm();
  const [step, setStep] = useState(0);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    setSubmitting(true);
    try {
      await submitWeb3Form(form.getFieldsValue(true), "TechSort quote request");
      form.resetFields();
      setStep(0);
      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Request Quote" }]} eyebrow="Get a quote" title="Tell us about your project" subtitle="Three quick steps. Two minutes. One tailored proposal in your inbox within 24 hours." />

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <div className="glass-strong gradient-border rounded-3xl p-8 md:p-10">
            {/* Steps */}
            <div className="flex items-center justify-between mb-8">
              {STEPS.map((s, i) => (
                <div key={s} className="flex-1 flex items-center">
                  <div className={`size-9 rounded-full grid place-items-center text-sm font-bold transition ${i <= step ? "bg-brand text-white" : "glass"}`}>
                    {i < step ? <Check className="size-4" /> : i + 1}
                  </div>
                  {i < STEPS.length - 1 && <div className={`flex-1 h-px mx-2 transition ${i < step ? "bg-sky" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>

              <Form form={form} layout="vertical" className="ant-form-modern grid gap-3" onFinish={handleSubmit} requiredMark={false}>
                <Form.Item hidden name="access_key" initialValue={WEB3FORMS_ACCESS_KEY}>
                  <Input />
                </Form.Item>
                {step === 0 && (
                  <>
                    <Form.Item label="What kind of project?" name="service" rules={[{ required: true, message: "Please select a service" }]}>
                      <Select
                        placeholder="Select a service"
                        options={SERVICES.map((s) => ({ label: s.title, value: s.slug }))}
                      />
                    </Form.Item>
                    <Form.Item label="Brief description" name="description" rules={[{ required: true, message: "Please add a brief description" }]}>
                      <Input.TextArea rows={4} placeholder="What are you building?" />
                    </Form.Item>
                  </>
                )}
                {step === 1 && (
                  <>
                    <Form.Item label="Budget range" name="budget" rules={[{ required: true, message: "Please select a budget" }]}>
                      <Radio.Group className="grid grid-cols-2 gap-2">
                        {["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"].map((b) => (
                          <Radio key={b} value={b} className="glass rounded-xl px-4 py-3 text-sm hover:bg-white/10">{b}</Radio>
                        ))}
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Timeline" name="timeline" rules={[{ required: true, message: "Please select a timeline" }]}>
                      <Select
                        placeholder="Select timeline"
                        options={["ASAP", "1–3 months", "3–6 months", "Just exploring"].map((value) => ({ label: value, value }))}
                      />
                    </Form.Item>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Form.Item label="Full name" name="name" rules={[{ required: true, message: "Please enter your full name" }]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="Company" name="company">
                      <Input />
                    </Form.Item>
                  </>
                )}
                <div className="mt-2 flex gap-2">
                  {step > 0 && <Button htmlType="button" onClick={() => setStep(step - 1)} className="rounded-full glass px-5 font-semibold">Back</Button>}
                  <Button type="primary" htmlType="submit" loading={submitting} className="flex-1">{step === 2 ? "Submit" : "Continue"}</Button>
                </div>
              </Form>
          </div>
        </div>
      </section>

      <FormSuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Proposal request submitted"
        description="Nice. Your quote request is in. We will send scope, timeline and pricing within 24 hours."
      />
      <FormErrorModal 
        open={errorOpen} 
        onClose={() => setErrorOpen(false)} 
      />
    </>
  );
}
