import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";
import { SERVICES } from "@/lib/site-data";

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
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

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

            {done ? (
              <div className="text-center py-8">
                <div className="text-5xl">🚀</div>
                <h3 className="mt-3 text-2xl font-bold gradient-text">Proposal incoming</h3>
                <p className="mt-2 text-sm text-muted-foreground">Check your inbox within 24 hours. We'll include scope, timeline and pricing.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (step < 2) setStep(step + 1); else setDone(true); }} className="grid gap-3">
                {step === 0 && (
                  <>
                    <Label>What kind of project?</Label>
                    <select required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm">
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                    </select>
                    <Label>Brief description</Label>
                    <textarea required rows={4} placeholder="What are you building?" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" />
                  </>
                )}
                {step === 1 && (
                  <>
                    <Label>Budget range</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"].map((b) => (
                        <label key={b} className="glass rounded-xl px-4 py-3 text-sm cursor-pointer hover:bg-white/10 flex items-center gap-2">
                          <input type="radio" name="budget" required className="accent-sky" /> {b}
                        </label>
                      ))}
                    </div>
                    <Label>Timeline</Label>
                    <select required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm">
                      <option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Just exploring</option>
                    </select>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Label>Full name</Label>
                    <input required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" />
                    <Label>Email</Label>
                    <input required type="email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" />
                    <Label>Company</Label>
                    <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm" />
                  </>
                )}
                <div className="mt-2 flex gap-2">
                  {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="rounded-full glass px-5 py-2.5 text-sm font-semibold">Back</button>}
                  <GlowButton className="flex-1">{step === 2 ? "Submit" : "Continue"}</GlowButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{children}</div>;
}
