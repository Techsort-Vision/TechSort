import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "About Our Work — TechSort IT Solutions" },
      { name: "description", content: "A company introduction focused on thoughtful strategy, polished design, and dependable digital delivery." },
      { property: "og:title", content: "About Our Work — TechSort" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "About Our Work" }]} eyebrow="Our approach" title="A studio built around thoughtful digital work" subtitle="We are a new company focused on strategy, design, and dependable delivery for founders and growing brands." />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="glass-strong gradient-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">We are still shaping our first public body of work.</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Rather than showcasing completed client work, this space now introduces who we are, what we believe in, and how we approach digital products with clarity and care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GlowButton to="/about">Learn about us</GlowButton>
              <GlowButton to="/contact" variant="ghost">Start a conversation</GlowButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
