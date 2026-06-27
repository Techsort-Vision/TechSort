import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  aspect?: string;
};

/**
 * Image with shimmer skeleton until loaded.
 * Defaults to lazy loading + async decoding for perf.
 */
export function SmartImage({
  className,
  wrapperClassName,
  aspect,
  loading = "lazy",
  decoding = "async",
  onLoad,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative overflow-hidden", aspect, wrapperClassName)}>
      {!loaded && <div className="absolute inset-0 skeleton" aria-hidden />}
      <img
        {...rest}
        loading={loading}
        decoding={decoding}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
