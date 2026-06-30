import { createFileRoute } from "@tanstack/react-router";
import { Input } from "antd";
import { Book, LifeBuoy, MessageCircle, Phone, Search } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Center — TechSort" },
      { name: "description", content: "Get help fast — docs, FAQs, live support and SLA-backed retainers for ongoing clients." },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

const CATS = [
  { Icon: Book, title: "Documentation", desc: "Guides, API references and how-tos.", cta: "Browse docs" },
  { Icon: LifeBuoy, title: "Open a ticket", desc: "Get a dedicated engineer on your issue.", cta: "Submit ticket" },
  { Icon: MessageCircle, title: "WhatsApp chat", desc: `${SITE.hours} IST — message us anytime.`, cta: "Start chat", href: SITE.socials.whatsapp },
  { Icon: Phone, title: "Phone support", desc: SITE.phone, cta: "Call us", href: `tel:${SITE.phoneHref}` },
];

function Support() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Support" }]} eyebrow="Support" title="We've got your back" subtitle="Self-serve, real humans or enterprise SLA — pick what fits." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="ant-form-modern">
            <Input size="large" prefix={<Search className="size-4 text-muted-foreground" />} placeholder="Search the help center..." className="rounded-full" />
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-4 md:px-8 mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATS.map((c) => (
            <div key={c.title} className="glass-strong gradient-border rounded-2xl p-6">
              <c.Icon className="size-7 text-sky" />
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              {c.href ? (
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noreferrer" : undefined} className="mt-4 inline-block text-sm text-sky font-medium">{c.cta} →</a>
              ) : (
                <button className="mt-4 text-sm text-sky font-medium">{c.cta} →</button>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl px-4 md:px-8 mt-16 text-center">
          <h2 className="text-2xl font-bold gradient-text">Still stuck?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Email us at {SITE.email} — we read every message.</p>
          <div className="mt-6"><GlowButton to="/contact">Contact support</GlowButton></div>
        </div>
      </section>
    </>
  );
}
