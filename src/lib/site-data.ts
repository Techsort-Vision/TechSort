import webDevImg from "@/assets/Web Dev.png";
import appDevImg from "@/assets/App Dev.png";
import uiuxGraphicImg from "@/assets/UI UX and Graphic design.png";
import brandingImg from "@/assets/Branding.png";
import videoEditingImg from "@/assets/video editing.png";
import digitalMarketingImg from "@/assets/digital marketing.png";
import seoImg from "@/assets/SEO.png";
import socialMediaImg from "@/assets/Social Media.png";
import ecommerceImg from "@/assets/E-commerce.png";
import cmsImg from "@/assets/CMS.png";
import maintenanceImg from "@/assets/Maintainance and Support.png";
import consultingImg from "@/assets/Consulting.png";

export const SITE = {
  name: "TechSort IT Solutions",
  short: "TechSort",
  tagline: "Transforming Ideas Into Powerful Digital Solutions",
  email: "techsort45@gmail.com",
  phone: "+91 9021598976",
  phoneHref: "+919021598976",
  secondaryPhone: "+91 7434986169",
  secondaryPhoneHref: "+917434986169",
  whatsapp: "https://wa.me/919021598976",
  address: "Surat, Gujarat, India",
  hours: "Mon–Fri · 9:00 — 19:00",
  socials: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://www.instagram.com/techs.ort?utm_source=qr&igsh=MThzbW0wd28zampndg==",
    dribbble: "https://dribbble.com",
    whatsapp: "https://wa.me/919021598976",
  },
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Tech" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  { slug: "web-development", title: "Web Development", icon: "Globe", desc: "High-performance sites & web apps built on modern stacks.", image: webDevImg },
  { slug: "app-development", title: "App Development", icon: "Smartphone", desc: "Native-feeling iOS & Android apps from a single codebase.", image: appDevImg },
  { slug: "ui-ux-design", title: "UI / UX & Graphic Design", icon: "Palette", desc: "Research-driven product design and visual systems that convert.", image: uiuxGraphicImg },
  { slug: "branding", title: "Branding", icon: "Sparkles", desc: "Identity, voice and brand guidelines from zero to launch.", image: brandingImg },
  { slug: "video-editing", title: "Video Editing", icon: "Film", desc: "Reels, ads and product films cut for attention.", image: videoEditingImg },
  { slug: "digital-marketing", title: "Digital Marketing", icon: "Megaphone", desc: "Paid + organic campaigns engineered for ROAS.", image: digitalMarketingImg },
  { slug: "seo", title: "SEO Optimization", icon: "Search", desc: "Technical, on-page and content SEO that ranks.", image: seoImg },
  { slug: "social-media", title: "Social Media", icon: "Hash", desc: "Calendar, creative and community at scale.", image: socialMediaImg },
  { slug: "ecommerce", title: "E-Commerce", icon: "ShoppingBag", desc: "Storefronts on Shopify, Stripe & headless commerce.", image: ecommerceImg },
  { slug: "cms", title: "CMS Development", icon: "FileText", desc: "Headless & traditional CMS — Sanity, Strapi, WP.", image: cmsImg },
  { slug: "maintenance", title: "Maintenance & Support", icon: "Wrench", desc: "24/7 monitoring, patching and uptime SLAs.", image: maintenanceImg },
  { slug: "consulting", title: "IT Consulting", icon: "Lightbulb", desc: "Strategy, audits and tech leadership on demand.", image: consultingImg },
];

export const TECH_CATEGORIES = [
  { id: "frontend", label: "Frontend", items: ["React.js", "Next.js", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { id: "backend", label: "Backend", items: ["Node.js", "Express.js", "Firebase", "REST APIs", "GraphQL", "Authentication"] },
  { id: "database", label: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"] },
  { id: "design", label: "Design Tools", items: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "Canva"] },
  { id: "marketing", label: "Marketing", items: ["Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "GA4", "SEMrush"] },
  { id: "video", label: "Video Editing", items: ["CapCut", "Premiere Pro", "After Effects", "DaVinci Resolve"] },
];

export const PORTFOLIO = [
  { id: 1, title: "Nimbus Analytics", category: "Dashboard UI Designs", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: 2, title: "Atlas Commerce", category: "E-Commerce Stores", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { id: 3, title: "Orbit Fitness", category: "Mobile Apps", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80" },
  { id: 4, title: "Loop Studio", category: "Branding Projects", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" },
  { id: 5, title: "Helix SaaS", category: "Startup Projects", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { id: 6, title: "Northwind Law", category: "Business Websites", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
  { id: 7, title: "Pulse Health", category: "Dashboard UI Designs", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80" },
  { id: 8, title: "Vault Pay", category: "Startup Projects", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
  { id: 9, title: "Forge Threads", category: "E-Commerce Stores", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" },
];

export const PORTFOLIO_CATEGORIES = ["All", "Startup Projects", "Business Websites", "E-Commerce Stores", "Mobile Apps", "Branding Projects", "Dashboard UI Designs"];

export const TESTIMONIALS = [
  { name: "Sarah Chen", role: "CEO, Helix Labs", avatar: "https://i.pravatar.cc/120?img=47", quote: "TechSort delivered our MVP in six weeks. The polish was unreal — our investors thought it was a year-old product." },
  { name: "Marcus Reed", role: "CTO, Atlas Commerce", avatar: "https://i.pravatar.cc/120?img=12", quote: "From migration to launch they made the impossible feel obvious. Conversion is up 38% post-relaunch." },
  { name: "Priya Shah", role: "Founder, Orbit Fitness", avatar: "https://i.pravatar.cc/120?img=32", quote: "Best agency we've ever worked with. Their design instincts are genuinely world-class." },
  { name: "Diego Alvarez", role: "Head of Product, Vault Pay", avatar: "https://i.pravatar.cc/120?img=15", quote: "The engineering rigor is what sets them apart. Clean, scalable, fast — exactly what fintech needs." },
  { name: "Hannah Kim", role: "Marketing Lead, Loop Studio", avatar: "https://i.pravatar.cc/120?img=49", quote: "They rebuilt our brand from scratch and the response has been incredible. Worth every cent." },
];

export const WHY_US = [
  { icon: "Zap", title: "Fast Delivery", desc: "Aggressive timelines without cutting corners." },
  { icon: "Sparkles", title: "Innovative Solutions", desc: "We ship what others only put in pitch decks." },
  { icon: "Users", title: "Expert Team", desc: "Senior engineers, designers and strategists." },
  { icon: "TrendingUp", title: "Scalable Products", desc: "Built to grow from MVP to millions of users." },
  { icon: "Wallet", title: "Affordable Pricing", desc: "Transparent fixed-scope and retainer options." },
  { icon: "Headphones", title: "Always-on Support", desc: "Real humans, real response times, SLAs included." },
];

export const COUNTERS = [
  { label: "Projects Delivered", value: 240 },
  { label: "Happy Clients", value: 180 },
  { label: "Team Members", value: 42 },
  { label: "Years in Market", value: 7 },
];

export const TEAM = [
  { name: "Aarav Mehta", role: "Founder & CEO", image: "https://i.pravatar.cc/240?img=68" },
  { name: "Lena Park", role: "Head of Design", image: "https://i.pravatar.cc/240?img=45" },
  { name: "Jamal Carter", role: "Engineering Lead", image: "https://i.pravatar.cc/240?img=33" },
  { name: "Sofia Rossi", role: "Product Strategy", image: "https://i.pravatar.cc/240?img=44" },
  { name: "Kenji Tanaka", role: "Cloud Architect", image: "https://i.pravatar.cc/240?img=60" },
  { name: "Amara Okafor", role: "Marketing Director", image: "https://i.pravatar.cc/240?img=48" },
];

export const JOBS = [
  { title: "Senior Full-Stack Engineer", location: "Remote · Worldwide", type: "Full-time" },
  { title: "Product Designer", location: "San Francisco · Hybrid", type: "Full-time" },
  { title: "DevOps Engineer", location: "Remote · EU", type: "Full-time" },
  { title: "Motion Designer", location: "Remote · Worldwide", type: "Contract" },
  { title: "Technical Project Manager", location: "San Francisco", type: "Full-time" },
];

export const FAQS = [
  { q: "How long does a typical project take?", a: "Most MVPs ship in 6–10 weeks. Larger platforms run 3–6 months with iterative releases." },
  { q: "Do you sign NDAs?", a: "Always. We can use yours or send ours within an hour of request." },
  { q: "Can you work with our existing team?", a: "Yes — embedded, augmented or fully-outsourced engagements are all common for us." },
  { q: "What is your pricing model?", a: "Fixed-scope for defined projects, monthly retainers for ongoing work, and time & materials for discovery sprints." },
  { q: "Do you provide post-launch support?", a: "Yes — every project ships with 30 days of free support and optional SLA-backed retainers after that." },
  { q: "Which industries do you serve?", a: "Fintech, healthtech, e-commerce, SaaS, media, and ambitious early-stage startups across all sectors." },
];

export const BLOG_POSTS = [
  { slug: "ship-faster-2026", title: "How modern teams ship 4x faster in 2026", excerpt: "Lean process, AI co-pilots and continuous delivery — the playbook we use on every engagement.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", date: "May 12, 2026", tag: "Engineering" },
  { slug: "design-systems-that-scale", title: "Design systems that actually scale", excerpt: "Tokens, primitives, and the boring discipline that lets ten designers feel like one.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80", date: "Apr 30, 2026", tag: "Design" },
  { slug: "edge-ai-in-production", title: "Running edge AI in production", excerpt: "What we learned shipping LLM-powered features to 2M users on Cloudflare Workers.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", date: "Apr 18, 2026", tag: "AI" },
  { slug: "seo-for-saas", title: "SEO playbook for B2B SaaS", excerpt: "The technical + content workflow that drives consistent qualified pipeline.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80", date: "Apr 4, 2026", tag: "Marketing" },
  { slug: "from-mvp-to-series-a", title: "From MVP to Series A in 12 months", excerpt: "A teardown of three of our portfolio companies and what made the difference.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", date: "Mar 21, 2026", tag: "Startups" },
  { slug: "cloud-cost-cutting", title: "Cutting cloud bills by 60% without firing AWS", excerpt: "Right-sizing, edge caching and serverless tricks that actually move the needle.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", date: "Mar 7, 2026", tag: "Cloud" },
];

export const PRICING = [
  { name: "Starter", price: 1900, blurb: "For founders validating an idea.", features: ["Landing page or simple app", "Up to 5 pages / screens", "Brand kit lite", "30 days support", "Launch in 2–3 weeks"], cta: "Start project", featured: false },
  { name: "Growth", price: 6500, blurb: "For startups ready to scale.", features: ["Full web/app product", "Custom design system", "Backend + auth + payments", "90 days support", "Dedicated PM"], cta: "Most popular", featured: true },
  { name: "Enterprise", price: null, blurb: "For complex, mission-critical platforms.", features: ["Custom architecture", "Multi-tenant + SLAs", "Embedded team", "Dedicated cloud ops", "Quarterly roadmap"], cta: "Talk to us", featured: false },
];

export const CASE_STUDIES = [
  { title: "Helix Labs — 0 to Series A in 9 months", client: "Helix Labs", result: "+340% MRR", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80" },
  { title: "Atlas Commerce — Headless replatform", client: "Atlas", result: "+38% conversion", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80" },
  { title: "Vault Pay — Compliance-first fintech", client: "Vault Pay", result: "SOC2 in 6 mo", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
  { title: "Pulse Health — Patient portal at scale", client: "Pulse", result: "1.2M users", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
];

export const WEB3FORMS_ACCESS_KEY = "dfac954a-ddf4-42aa-8425-0e677aad4aff";

export async function submitWeb3Form(data: Record<string, any>, subject: string) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...data,
      subject,
    }),
  });
  
  if (!response.ok) {
    throw new Error("Form submission failed");
  }
  
  return response.json();
}
