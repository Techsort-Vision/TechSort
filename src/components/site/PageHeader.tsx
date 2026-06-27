import { motion } from "framer-motion";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-20 left-10 size-72 rounded-full bg-sky/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-10 size-72 rounded-full bg-cyan-glow/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {breadcrumbs && <div className="mb-6"><Breadcrumbs items={breadcrumbs} /></div>}
        {eyebrow && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="size-1.5 rounded-full bg-accent animate-glow-pulse" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
          <span className="gradient-text">{title}</span>
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
