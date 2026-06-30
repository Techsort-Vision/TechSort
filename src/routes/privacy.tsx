import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TechSort" },
      { name: "description", content: "How TechSort collects, uses and protects your personal data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Privacy" }]} eyebrow="Legal" title="Privacy Policy" subtitle="Last updated May 1, 2026" />
      <section className="py-12">
        <article className="mx-auto max-w-3xl px-4 md:px-8 prose prose-invert text-sm text-muted-foreground space-y-6">
          {[
            { h: "Information we collect", p: "We collect information you provide directly — your name, email, project details — and basic analytics about how you use our site (pages visited, time on page, device type)." },
            { h: "How we use information", p: "To respond to inquiries, deliver contracted services, improve our website and (with your permission) send occasional newsletters. We never sell your data." },
            { h: "Data retention", p: "Project data is retained for the duration of the engagement plus 24 months. Marketing data is retained until you unsubscribe." },
            { h: "Third parties", p: "We use Google Analytics, Cloudflare and standard email providers. All vendors are GDPR/CCPA compliant." },
            { h: "Your rights", p: `You can request access, correction or deletion of your data at any time by emailing ${SITE.email}. We respond within 30 days.` },
            { h: "Security", p: "We use industry-standard encryption in transit and at rest. Access to your data is limited to engagement personnel only." },
            { h: "Contact", p: `Questions about this policy? Email ${SITE.email} or write to our office at ${SITE.address}.` },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-bold text-foreground gradient-text">{s.h}</h2>
              <p className="mt-2">{s.p}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
