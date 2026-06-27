import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { TECH_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — TechSort IT Solutions" },
      { name: "description", content: "Our modern, battle-tested tech stack across frontend, backend, database, design, marketing and video editing." },
      { property: "og:title", content: "Technologies — TechSort" },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: Tech,
});

function Tech() {
  const [tab, setTab] = useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === tab)!;
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Technologies" }]} eyebrow="Our Stack" title="Modern tools, picked on purpose" subtitle="We don't chase hype — we ship with tools that have proven themselves on real production at scale." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_CATEGORIES.map((c) => (
              <button key={c.id} onClick={() => setTab(c.id)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${tab === c.id ? "bg-brand text-white animate-gradient glow-sm" : "glass hover:bg-white/10"}`}>
                {c.label}
              </button>
            ))}
          </div>

          <motion.div key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {current.items.map((t, i) => (
              <div key={t} className="group glass-strong gradient-border rounded-2xl p-6 text-center hover:scale-105 hover:glow-sm transition-all">
                <div className="text-3xl font-bold gradient-text">{(i + 1).toString().padStart(2, "0")}</div>
                <div className="mt-3 font-semibold">{t}</div>
                <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-brand animate-gradient" style={{ width: `${75 + ((i * 7) % 22)}%` }} />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Production-ready</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
