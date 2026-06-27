import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost:
    "text-foreground border border-white/10 hover:bg-white/5",
};

export function GlowButton({
  to,
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: Common & { to?: string; href?: string } & ComponentProps<"button">) {
  const cls = cn(base, variants[variant], className);
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
