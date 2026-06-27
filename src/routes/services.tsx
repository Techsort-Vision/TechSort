import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { GlowButton } from "@/components/site/GlowButton";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TechSort IT Solutions" },
      { name: "description", content: "Twenty world-class services across web, mobile, design, marketing, cloud and AI — all under one studio." },
      { property: "og:title", content: "Services — TechSort" },
      { property: "og:description", content: "Web, mobile, design, marketing, cloud and AI." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Services" }]} eyebrow="What we do" title="Twenty services. One studio." subtitle="From scrappy MVPs to enterprise-grade platforms — every capability you need, in-house." />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 9).map((s, i) => (
              <Reveal key={s.slug} delay={i % 3}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface shadow-[0_18px_60px_-42px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 hover:border-primary/35"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
                    {s.image ? (
                      <img src={s.image} alt={s.title} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-brand">
                        <Icon name={s.icon} className="size-12 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 grid size-11 place-items-center rounded-xl border border-white/10 bg-background/85 backdrop-blur">
                      <Icon name={s.icon} className="size-5 text-sky" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="mb-3 h-px w-10 bg-primary/70" />
                      <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{s.desc}</p>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky transition group-hover:text-primary">
                      Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center"><span className="gradient-text">Service deep-dive</span></h2>
          <p className="mt-3 text-center text-muted-foreground">Expand any service for scope, deliverables and timeline.</p>
          <div className="mt-10 grid gap-3">
            {SERVICES.slice(0, 10).map((s) => {
              const isOpen = open === s.slug;
              return (
                <div key={s.slug} className="glass rounded-2xl overflow-hidden border border-white/5">
                  <button onClick={() => setOpen(isOpen ? null : s.slug)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-xl bg-brand grid place-items-center text-white"><Icon name={s.icon} className="size-5" /></div>
                      <div>
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <ChevronDown className={`size-5 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 grid sm:grid-cols-3 gap-4 text-sm">
                      <div><div className="text-xs text-sky font-semibold mb-1">Scope</div><p className="text-muted-foreground">Discovery, design, build, QA and launch.</p></div>
                      <div><div className="text-xs text-sky font-semibold mb-1">Deliverables</div><p className="text-muted-foreground">Production-ready code, design files, docs.</p></div>
                      <div><div className="text-xs text-sky font-semibold mb-1">Timeline</div><p className="text-muted-foreground">Typically 4–10 weeks per engagement.</p></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center"><GlowButton to="/request-quote">Get a custom quote</GlowButton></div>
        </div>
      </section>
    </>
  );
}
