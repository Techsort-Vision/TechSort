import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Database, Palette, Megaphone, Video, Layers } from "lucide-react";
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

const getCategoryIcon = (id: string) => {
  switch (id) {
    case "frontend": return Code2;
    case "backend": return Cpu;
    case "database": return Database;
    case "design": return Palette;
    case "marketing": return Megaphone;
    case "video": return Video;
    default: return Layers;
  }
};

function Tech() {
  const [tab, setTab] = useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === tab)!;

  return (
    <>
      <PageHeader 
        breadcrumbs={[{ label: "Technologies" }]} 
        eyebrow="Our Stack" 
        title="Modern tools, picked on purpose" 
        subtitle="We don't chase hype — we ship with tools that have proven themselves on real production at scale." 
      />
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_CATEGORIES.map((c) => (
              <button 
                key={c.id} 
                onClick={() => setTab(c.id)} 
                className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  tab === c.id 
                    ? "bg-brand text-white shadow-[0_0_24px_-4px_var(--primary)] scale-105" 
                    : "glass hover:bg-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-16 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={tab} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, staggerChildren: 0.05 }} 
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {current.items.map((t, i) => {
                  const Icon = getCategoryIcon(current.id);
                  return (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl glass-strong border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-[0_8px_30px_-10px_var(--primary)] transition-all duration-500 bg-surface/50 backdrop-blur-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                      
                      <div className="relative z-10 size-14 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-inner group-hover:bg-primary/20 transition-colors duration-500 mb-5">
                        <Icon className="size-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      
                      <div className="relative z-10 font-bold text-lg tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                        {t}
                      </div>
                      
                      <div className="relative z-10 mt-2 flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_var(--color-emerald-500)]" />
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Production Ready</span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
