import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — TechSort" },
      { name: "description", content: "Terms governing the use of TechSort services and website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Terms" }]} eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated May 1, 2026" />
      <section className="py-12">
        <article className="mx-auto max-w-3xl px-4 md:px-8 text-sm text-muted-foreground space-y-6">
          {[
            { h: "Acceptance of terms", p: "By accessing techsort.io or engaging our services, you agree to these terms in full." },
            { h: "Services", p: "We provide IT consulting, design, development and related services as scoped in individual statements of work." },
            { h: "Payment", p: "Fixed-scope projects: 50% upfront, 50% on delivery. Retainers: monthly invoicing, NET-15 payment terms." },
            { h: "Intellectual property", p: "Upon final payment, ownership of all deliverables transfers to the client, excluding our pre-existing tools, libraries and frameworks." },
            { h: "Confidentiality", p: "We treat all client information as confidential. NDAs available on request." },
            { h: "Liability", p: "Our liability is limited to the fees paid for the engagement in question. We carry $2M in professional liability insurance." },
            { h: "Termination", p: "Either party may terminate with 30 days' written notice. Work completed up to termination is invoiced and payable." },
            { h: "Governing law", p: "These terms are governed by the laws of California, USA." },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-bold gradient-text">{s.h}</h2>
              <p className="mt-2">{s.p}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
