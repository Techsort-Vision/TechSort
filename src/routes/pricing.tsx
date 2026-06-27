import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";
import { PRICING } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TechSort IT Solutions" },
      { name: "description", content: "Transparent pricing for premium IT services. Fixed-scope, retainer or enterprise — pick what fits." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Pricing" }]} eyebrow="Simple Plans" title="Pricing that respects your runway" subtitle="No hidden fees, no surprise invoices. Pick the engagement that fits — change anytime." />
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex justify-center mb-10">
            <div className="glass rounded-full p-1 inline-flex">
              <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? "bg-brand text-white" : ""}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? "bg-brand text-white" : ""}`}>Annual <span className="ml-1 text-xs opacity-80">−15%</span></button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PRICING.map((p) => {
              const price = p.price === null ? null : annual ? Math.round(p.price * 0.85) : p.price;
              return (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-8 bg-surface border transition-colors ${p.featured ? "border-primary/40" : "border-white/[0.08] hover:border-white/[0.16]"}`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold flex items-center gap-1">
                      <Sparkles className="size-3" /> Most popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-6 flex items-end gap-1">
                    {price === null ? (
                      <span className="text-4xl font-semibold tracking-tight">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-semibold tracking-tight">${price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground pb-1.5">/{annual ? "mo · billed yearly" : "starting"}</span>
                      </>
                    )}
                  </div>
                  <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2"><Check className="size-4 text-primary mt-0.5 shrink-0" /><span>{f}</span></li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <GlowButton to="/request-quote" variant={p.featured ? "primary" : "ghost"} className="w-full">{p.cta}</GlowButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
