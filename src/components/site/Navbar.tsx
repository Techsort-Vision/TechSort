import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { GlowButton } from "./GlowButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-200",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-background/40 border-b border-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} alt="TechSort" className="size-16 object-cover" />
            <div className="leading-tight">
              <div className="text-[13px] font-semibold tracking-tight">TechSort</div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">IT Solutions</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-primary" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <GlowButton to="/request-quote" className="px-4 py-2 text-xs">Get a Quote</GlowButton>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="rounded-md p-2 text-foreground hover:bg-white/5 border border-white/10"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile left drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[82%] max-w-sm bg-background border-r border-white/[0.08] flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between h-14 px-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-md overflow-hidden bg-white/[0.04] border border-white/10 p-1">
                    <img src={logo} alt="" className="size-full object-contain" />
                  </div>
                  <div className="text-[13px] font-semibold tracking-tight">TechSort</div>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-md p-2 hover:bg-white/5" aria-label="Close menu">
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4 grid gap-0.5">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                    activeProps={{ className: "text-foreground bg-white/[0.04]" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="p-5 border-t border-white/[0.06] grid gap-3">
                <GlowButton to="/request-quote" className="w-full">Get a Quote</GlowButton>
                <a href={`tel:${SITE.phoneHref}`} className="text-xs text-muted-foreground text-center hover:text-foreground">{SITE.phone}</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
