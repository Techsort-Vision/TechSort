import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { GlowButton } from "@/components/site/GlowButton";
import { SITE, SERVICES, FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TechSort IT Solutions" },
      { name: "description", content: "Get in touch with TechSort — project inquiries, partnerships and support. We reply within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const BUDGETS = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];

function Contact() {
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Contact" }]} eyebrow="Say hi" title="Let's build something together" subtitle="Tell us about your project — we'll respond within 24 hours with a tailored proposal." />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-strong gradient-border rounded-3xl p-8">
            <h2 className="text-2xl font-bold"><span className="gradient-text">Project inquiry</span></h2>
            {!done ? (
              <form className="mt-6 grid sm:grid-cols-2 gap-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <input required placeholder="Full name *" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <input required type="email" placeholder="Email *" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <input placeholder="Phone" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <input placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <select required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky sm:col-span-1">
                  <option value="">Select a service *</option>
                  {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
                <select required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky">
                  <option value="">Budget *</option>
                  {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                </select>
                <textarea required rows={5} placeholder="Tell us about your project *" className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky" />
                <div className="sm:col-span-2"><GlowButton className="w-full">Send message</GlowButton></div>
              </form>
            ) : (
              <div className="mt-6 rounded-xl glass p-8 text-center">
                <div className="text-3xl">✓</div>
                <h3 className="mt-2 text-xl font-bold gradient-text">Message received</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 24 hours. Meanwhile, check out our recent work.</p>
              </div>
            )}
          </div>

          <div className="grid gap-4 content-start">
            <InfoCard Icon={Mail} title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoCard Icon={Phone} title="Phone" value={SITE.phone} href={`tel:${SITE.phone}`} />
            <InfoCard Icon={MapPin} title="Office" value={SITE.address} />
            <InfoCard Icon={Clock} title="Hours" value={SITE.hours} />
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition">
              <div className="size-10 rounded-xl bg-emerald-500 grid place-items-center text-white"><MessageCircle className="size-5" /></div>
              <div>
                <div className="font-semibold">WhatsApp us</div>
                <div className="text-xs text-muted-foreground">Average reply: 8 minutes</div>
              </div>
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-strong gradient-border rounded-3xl overflow-hidden aspect-[16/9]">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=San+Francisco&output=embed"
              className="size-full grayscale-[40%] contrast-[1.1] opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="glass-strong gradient-border rounded-3xl p-6">
            <h3 className="text-lg font-bold"><span className="gradient-text">Quick response</span></h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {["First reply within 24h", "Proposal within 3 business days", "Discovery call free of charge", "NDA signed before discovery"].map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-sky" />{x}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold text-center"><span className="gradient-text">FAQ</span></h2>
          <div className="mt-8 grid gap-3">
            {FAQS.slice(0, 4).map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="glass rounded-2xl overflow-hidden border border-white/5">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-white/5">
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`size-5 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ Icon, title, value, href }: { Icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const C: React.ElementType = href ? "a" : "div";
  return (
    <C href={href} className="glass-strong gradient-border rounded-2xl p-5 flex items-center gap-3 hover:glow-sm transition">
      <div className="size-10 rounded-xl bg-brand animate-gradient grid place-items-center text-white"><Icon className="size-5" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </C>
  );
}
