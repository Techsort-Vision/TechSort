import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon — TechSort" },
      { name: "description", content: "Something new is coming from TechSort. Subscribe to be first in line." },
      { property: "og:url", content: "/coming-soon" },
    ],
    links: [{ rel: "canonical", href: "/coming-soon" }],
  }),
  component: Soon,
});

function Soon() {
  const target = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).getTime();
  const [t, setT] = useState(target - Date.now());
  useEffect(() => { const i = setInterval(() => setT(target - Date.now()), 1000); return () => clearInterval(i); }, [target]);

  const days = Math.max(0, Math.floor(t / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((t / (1000 * 60 * 60)) % 24));
  const mins = Math.max(0, Math.floor((t / (1000 * 60)) % 60));
  const secs = Math.max(0, Math.floor((t / 1000) % 60));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 left-1/4 size-[400px] rounded-full bg-sky/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 size-[400px] rounded-full bg-cyan-glow/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-glow-pulse" /> Almost there
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold gradient-text">Something new is coming</h1>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">A new product line we've been quietly building. Subscribe to be first in line when we launch.</p>

        <div className="mt-10 grid grid-cols-4 gap-3 max-w-md mx-auto">
          {[{ l: "Days", v: days }, { l: "Hours", v: hours }, { l: "Min", v: mins }, { l: "Sec", v: secs }].map((x) => (
            <div key={x.l} className="glass-strong gradient-border rounded-2xl p-4">
              <div className="text-3xl font-bold gradient-text tabular-nums">{x.v.toString().padStart(2, "0")}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{x.l}</div>
            </div>
          ))}
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex gap-2 max-w-md mx-auto">
          <input required type="email" placeholder="you@company.com" className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-sm outline-none focus:border-sky" />
          <button className="rounded-full bg-brand animate-gradient text-white px-5 py-3 text-sm font-semibold">Notify me</button>
        </form>

        <Link to="/" className="mt-8 inline-block text-sm text-muted-foreground hover:text-foreground">← Back home</Link>
      </div>
    </section>
  );
}
