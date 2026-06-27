import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Our Approach — TechSort IT Solutions" },
      { name: "description", content: "A company introduction focused on thoughtful strategy, polished design, and dependable digital delivery." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Our Approach" }]} eyebrow="What we stand for" title="Thoughtful strategy, polished execution" subtitle="We focus on building digital experiences that feel clear, intentional, and ready to grow with your ambition." />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="glass-strong gradient-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">We believe the best work starts with listening.</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Every engagement begins with understanding your goals, users, and constraints so the final experience feels thoughtful rather than rushed. Our work is shaped by clarity, craft, and the kind of calm execution that builds trust over time.
            </p>
            <div className="mt-8 text-center"><GlowButton to="/contact">Start a conversation</GlowButton></div>
          </div>
        </div>
      </section>
    </>
  );
}
