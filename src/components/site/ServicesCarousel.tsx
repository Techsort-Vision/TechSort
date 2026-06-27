import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@/components/site/Icon";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] z-20 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[18%] z-20 bg-gradient-to-l from-background via-background/80 to-transparent" />

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex items-center py-12 md:py-16 touch-pan-y">
          {SERVICES.map((s, i) => {
            const isActive = i === selected;
            return (
              <div
                key={s.slug}
                className="relative shrink-0 grow-0 basis-[78%] sm:basis-[55%] md:basis-[42%] lg:basis-[34%] px-3 md:px-5"
              >
                <div
                  className={cn(
                    "group relative h-[420px] md:h-[460px] rounded-2xl overflow-hidden bg-surface border shadow-[0_22px_70px_-42px_rgba(0,0,0,0.7)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                    isActive
                      ? "scale-100 opacity-100 border-primary/35 z-10"
                      : "scale-[0.92] opacity-55 border-white/[0.06]",
                  )}
                >
                  <div className="relative h-full flex flex-col">
                    <div className="relative h-52 md:h-56 overflow-hidden bg-white/[0.03]">
                      {s.image ? (
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                      <div className="absolute left-6 top-6 grid size-12 place-items-center rounded-xl bg-background/85 border border-white/10 backdrop-blur">
                        <Icon name={s.icon} className="size-6 text-sky" />
                      </div>
                      <span className="absolute right-6 top-6 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-muted-foreground border border-white/10 backdrop-blur">
                        {String(i + 1).padStart(2, "0")} / {SERVICES.length}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                      <div>
                        <div className="mb-3 h-px w-12 bg-primary/70" />
                      <h3 className="font-display font-semibold leading-tight tracking-tight text-2xl md:text-[1.6rem] text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed line-clamp-3">
                        {s.desc}
                      </p>
                      </div>

                      <div
                        className={cn(
                          "mt-6 transition-all duration-500",
                          isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none",
                        )}
                      >
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                        >
                          Explore service
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-30 mt-2 flex items-center justify-center gap-4">
        <button
          aria-label="Previous service"
          onClick={scrollPrev}
          className="grid place-items-center size-10 rounded-full bg-white/[0.04] border border-white/10 text-foreground hover:bg-white/[0.08] transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to service ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === selected ? "w-6 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
              )}
            />
          ))}
        </div>

        <button
          aria-label="Next service"
          onClick={scrollNext}
          className="grid place-items-center size-10 rounded-full bg-white/[0.04] border border-white/10 text-foreground hover:bg-white/[0.08] transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
