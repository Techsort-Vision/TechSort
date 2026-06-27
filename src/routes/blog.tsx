import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — TechSort IT Solutions" },
      { name: "description", content: "Field notes on product, design, engineering, AI, marketing and cloud — straight from the studio." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [feature, ...rest] = BLOG_POSTS;
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Insights" }]} eyebrow="Insights" title="Field notes from the studio" subtitle="Practical writing on product, design, engineering and growth — no fluff." />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link to="/blog" className="group block glass-strong gradient-border rounded-3xl overflow-hidden hover:glow-sm transition">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img src={feature.image} alt="" className="size-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs text-sky">{feature.tag} · {feature.date}</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold gradient-text">{feature.title}</h2>
                <p className="mt-3 text-muted-foreground">{feature.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-sky font-medium">Read article <ArrowUpRight className="size-4" /></div>
              </div>
            </div>
          </Link>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i % 3}>
                <Link to="/blog" className="group block h-full glass-strong gradient-border rounded-2xl overflow-hidden hover:glow-sm transition">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt="" className="size-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-sky">{p.tag} · {p.date}</div>
                    <h3 className="mt-2 font-semibold text-lg leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
