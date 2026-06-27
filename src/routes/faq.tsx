import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — TechSort IT Solutions" },
      { name: "description", content: "Answers to the questions teams ask us most often before kicking off a project." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "FAQ" }]} eyebrow="Questions" title="Frequently asked" subtitle="Can't find what you're looking for? Email us — we reply within a business day." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-8 grid gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass-strong gradient-border rounded-2xl overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`size-5 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
