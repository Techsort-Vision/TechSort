import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, Coffee, GraduationCap, Heart, MapPin, Upload } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { GlowButton } from "@/components/site/GlowButton";
import { JOBS } from "@/lib/site-data";

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
  const [done, setDone] = useState(false);
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
            {!done ? (
              <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <input required placeholder="Full name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <input required type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <select required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky">
                  <option value="">Choose a role</option>
                  {JOBS.map((j) => <option key={j.title}>{j.title}</option>)}
                </select>
                <textarea required placeholder="Why TechSort?" rows={4} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <label className="rounded-xl bg-white/5 border border-dashed border-white/15 px-4 py-6 text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10">
                  <Upload className="size-4" /> Upload resume (PDF)
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </label>
                <GlowButton className="mt-2">Submit application</GlowButton>
              </form>
            ) : (
              <div className="mt-6 rounded-xl glass p-6 text-center text-sky">✓ Thanks! We'll be in touch within 5 business days.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
