"use client";
import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { partners } from "../data/partners";

export function PartnerSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 6, align: "start", dragFree: true });
  const pauseRef = useRef(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    let raf: number;
    function autoplay() {
      if (!pauseRef.current && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
      raf = window.setTimeout(autoplay, 2200);
    }
    raf = window.setTimeout(autoplay, 2200);
    return () => window.clearTimeout(raf);
  }, [emblaApi]);

  return (
    <section className="max-w-5xl mx-auto mt-12 md:mt-20 mb-6 px-2">
      <h2 className="text-center text-xl font-semibold text-[var(--neon-cyan)] mb-4">Nos partenaires</h2>
      <div
        className="overflow-hidden embla"
        ref={emblaRef}
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
      >
        <div className="flex gap-6 embla__container">
          {partners.map((p, i) => (
            <a
              key={p.name + i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group opacity-80 hover:opacity-100 transition min-w-[110px] max-w-[120px]"
              tabIndex={0}
              aria-label={p.name}
            >
              <div className="w-20 h-20 rounded-2xl bg-black/20 flex items-center justify-center overflow-hidden shadow-neon border-2 border-[var(--neon-cyan)]/30 group-hover:border-[var(--neon-pink)] transition">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="object-contain w-16 h-16 grayscale group-hover:grayscale-0 duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs mt-2 text-white/70 group-hover:text-[var(--neon-pink)] transition">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}