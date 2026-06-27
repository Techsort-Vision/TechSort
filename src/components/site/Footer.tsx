import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Clock, Dribbble } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, SITE, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-gradient-to-b from-transparent via-royal/10 to-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-sky/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="size-10 rounded-xl overflow-hidden glass-strong p-1"><img src={logo} alt="" className="size-full object-contain" /></div>
              <div className="leading-tight">
                <div className="text-sm font-bold gradient-text">TechSort</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">IT Solutions</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">A modern IT studio building premium digital products for ambitious teams worldwide.</p>
            <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-foreground"><Mail className="size-4 text-sky" />{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-foreground"><Phone className="size-4 text-sky" />{SITE.phone}</a>
              <div className="flex items-start gap-2"><MapPin className="size-4 text-sky mt-0.5" />{SITE.address}</div>
              <div className="flex items-center gap-2"><Clock className="size-4 text-sky" />{SITE.hours}</div>
            </div>
            <div className="mt-5 flex gap-2">
              {[{ Icon: Twitter, href: SITE.socials.twitter }, { Icon: Linkedin, href: SITE.socials.linkedin }, { Icon: Github, href: SITE.socials.github }, { Icon: Instagram, href: SITE.socials.instagram }, { Icon: Dribbble, href: SITE.socials.dribbble }].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="size-9 rounded-lg glass grid place-items-center hover:glow-sm hover:scale-110 transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Website">
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.to} to={link.to}>{link.label}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICES.slice(0, 8).map((s) => (
              <FooterLink key={s.slug} to="/services">{s.title}</FooterLink>
            ))}
            <FooterLink to="/services">View all</FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink to="/request-quote">Request Quote</FooterLink>
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/terms">Terms</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/support" className="hover:text-foreground">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-4">{title}</h4>
      <ul className="grid gap-2 text-sm">{children}</ul>
    </div>
  );
}
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <li><Link to={to} className="text-muted-foreground hover:text-foreground hover:translate-x-0.5 inline-block transition">{children}</Link></li>;
}
