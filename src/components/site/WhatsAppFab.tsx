import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full grid place-items-center bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.7)] hover:scale-110 transition animate-glow-pulse"
    >
      <MessageCircle className="size-6" />
      <span className="absolute inset-0 rounded-full ring-2 ring-emerald-400/50 animate-ping" />
    </a>
  );
}
