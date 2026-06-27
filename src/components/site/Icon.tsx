import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name] ?? LucideIcons.Sparkles;
  return <C {...props} />;
}
