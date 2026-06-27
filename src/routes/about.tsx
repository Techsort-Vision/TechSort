import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { GlowButton } from "@/components/site/GlowButton";
import { Icon } from "@/components/site/Icon";
import { TEAM, WHY_US } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TechSort IT Solutions" },
      { name: "description", content: "Meet TechSort, a newly launched studio focused on thoughtful strategy, elegant design, and dependable digital delivery." },
      { property: "og:title", content: "About TechSort" },
      { property: "og:description", content: "A new studio building thoughtful digital experiences with clarity and care." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2026", title: "Studio founded", desc: "TechSort was launched with a clear mission: help ambitious teams shape thoughtful digital experiences with precision and care." },
  { year: "2026", title: "Focused on craft", desc: "We centered our work around strategy, design quality, and dependable delivery from the first conversation to the final launch." },
  { year: "2026", title: "Building for the future", desc: "We are creating a studio that values long-term partnership, clarity in communication, and meaningful results over noise." },
];

function About() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "About" }]} eyebrow="Who we are" title="A new studio with a clear vision" subtitle="TechSort is building a practice around thoughtful strategy, elegant design, and dependable digital delivery for founders and growing brands." />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-8">
          {[
            { t: "Our Mission", d: "Create digital experiences that feel polished, purposeful, and genuinely useful from the first impression onward.", icon: "Target" },
            { t: "Our Vision", d: "Become a trusted partner for teams that value clarity, craftsmanship, and long-term thinking in every launch.", icon: "Eye" },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="glass-strong gradient-border rounded-3xl p-8 h-full">
                <div className="size-12 rounded-xl bg-brand animate-gradient text-white grid place-items-center mb-4"><Icon name={b.icon} className="size-6" /></div>
                <h3 className="text-2xl font-bold">{b.t}</h3>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <SectionHeading align="left" eyebrow="Our Promise" title="Built on clarity, craft, and commitment" subtitle="We believe a great digital experience should feel intentional at every touchpoint. That means listening carefully, designing thoughtfully, and delivering with integrity." />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Our Journey" title="How we are building TechSort" />
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky via-cyan-glow to-transparent" />
            <div className="grid gap-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i}>
                  <div className={`relative flex md:items-center gap-6 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-brand glow-sm" />
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <div className="glass-strong gradient-border rounded-2xl p-6">
                        <div className="text-sky text-sm font-semibold">{t.year}</div>
                        <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Our Values" title="What we believe" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((w) => (
              <div key={w.title} className="glass rounded-2xl p-6 hover:glow-sm transition">
                <Icon name={w.icon} className="size-7 text-sky mb-3" />
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Leadership" title="The humans in charge" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.slice(0, 3).map((m) => (
              <div key={m.name} className="glass-strong gradient-border rounded-2xl p-6 text-center">
                <img src={m.image} alt={m.name} className="mx-auto size-28 rounded-full object-cover ring-2 ring-sky/40" />
                <h3 className="mt-4 font-semibold">{m.name}</h3>
                <p className="text-sm text-sky">{m.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><GlowButton to="/team" variant="ghost">Meet the full team</GlowButton></div>
        </div>
      </section>
    </>
  );
}
