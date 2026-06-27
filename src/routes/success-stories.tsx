import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Our Values — TechSort" },
      { name: "description", content: "A company introduction focused on thoughtful strategy, polished design, and dependable digital delivery." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: Success,
});

function Success() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Our Values" }]} eyebrow="What drives us" title="A company built on trust and care" subtitle="We are creating TechSort around the belief that great digital work should feel thoughtful, collaborative, and lasting." />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="glass-strong gradient-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Our work is grounded in clarity and care.</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              We keep our process simple and transparent, communicate clearly, and aim for outcomes that feel as strong as they look. Whether we are shaping a brand experience, a product interface, or a launch strategy, we bring the same calm focus to every detail.
            </p>
            <div className="mt-8 text-center"><GlowButton to="/contact">Let’s build something meaningful</GlowButton></div>
          </div>
        </div>
      </section>
    </>
  );
}
