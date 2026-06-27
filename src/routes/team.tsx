import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — TechSort IT Solutions" },
      { name: "description", content: "Meet the designers, engineers and strategists building premium products at TechSort." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Team" }]} eyebrow="The humans" title="Meet the team" subtitle="42 people across three offices and twelve timezones. Every project is led by a senior on day one." />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i % 3}>
              <div className="group glass-strong gradient-border rounded-2xl overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    {[Twitter, Linkedin, Github].map((Ic, j) => (
                      <a key={j} href="#" className="size-8 rounded-lg glass grid place-items-center hover:bg-white/20"><Ic className="size-4" /></a>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-sky">{m.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
