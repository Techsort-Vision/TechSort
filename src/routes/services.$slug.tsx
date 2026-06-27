import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";
import { Icon } from "@/components/site/Icon";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.svc.title ?? "Service"} — TechSort` },
      { name: "description", content: loaderData?.svc.desc ?? "TechSort service" },
      { property: "og:title", content: `${loaderData?.svc.title} — TechSort` },
      { property: "og:url", content: `/services/${loaderData?.svc.slug}` },
    ],
    links: [{ rel: "canonical", href: `/services/${loaderData?.svc.slug}` }],
  }),
  component: ServiceDetail,
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  notFoundComponent: () => (
    <div className="p-20 text-center">
      <h1 className="text-3xl font-bold gradient-text">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-sky">← Back to services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { svc } = Route.useLoaderData();
  const features = ["Discovery & strategy", "Design & prototyping", "Engineering & QA", "Launch & analytics", "Post-launch support", "Iterative improvement"];

  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Services", to: "/services" }, { label: svc.title }]} eyebrow="Service" title={svc.title} subtitle={svc.desc} />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-strong gradient-border rounded-3xl p-8">
            <div className="size-14 rounded-xl bg-brand grid place-items-center text-white animate-gradient mb-5"><Icon name={svc.icon} className="size-7" /></div>
            <h2 className="text-2xl font-bold">What's included</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="size-4 text-sky shrink-0 mt-0.5" />{f}</li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">Every engagement starts with a discovery call to scope the work, set milestones and align on outcomes. You'll get weekly demos and a dedicated PM throughout.</p>
          </div>
          <div className="glass rounded-3xl p-6 h-fit sticky top-24">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Starting at</div>
            <div className="mt-2 text-3xl font-bold gradient-text">$1,900</div>
            <div className="mt-1 text-xs text-muted-foreground">Fixed-scope · 2–10 weeks</div>
            <div className="mt-6 grid gap-2">
              <GlowButton to="/request-quote">Get a quote <ArrowRight className="size-4" /></GlowButton>
              <GlowButton to="/contact" variant="ghost">Talk to us</GlowButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h3 className="text-2xl font-bold"><span className="gradient-text">Other services</span></h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 4).map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="glass rounded-2xl p-5 hover:glow-sm transition">
                <Icon name={s.icon} className="size-6 text-sky mb-3" />
                <div className="font-semibold text-sm">{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
