import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SubscribeModal } from "@/components/site/SubscribeModal";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-hero">
      <div className="max-w-md text-center glass-strong gradient-border rounded-3xl p-10">
        <h1 className="text-8xl font-bold gradient-text">404</h1>
        <h2 className="mt-2 text-xl font-semibold">Lost in cyberspace</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <Link to="/" className="rounded-full bg-brand animate-gradient text-white text-sm font-semibold px-5 py-2.5">Go home</Link>
          <Link to="/contact" className="rounded-full glass text-sm font-semibold px-5 py-2.5">Contact us</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-hero">
      <div className="max-w-md text-center glass-strong gradient-border rounded-3xl p-10">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went sideways. Try again or go home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-brand text-white text-sm font-semibold px-5 py-2.5">Try again</button>
          <a href="/" className="rounded-full glass text-sm font-semibold px-5 py-2.5">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TechSort IT Solutions — Premium Digital Products" },
      { name: "description", content: "TechSort is a premium IT studio building web, mobile, branding and AI-powered products for ambitious teams worldwide." },
      { name: "author", content: "TechSort" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:site_name", content: "TechSort IT Solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TechSort IT Solutions",
        url: "/",
        slogan: "Transforming Ideas Into Powerful Digital Solutions",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "opacity, transform" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Ensure light theme is always active
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark");
    html.classList.add("light");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <RouteTransition />
      </main>
      <Footer />
      <SubscribeModal />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
