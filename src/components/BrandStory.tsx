import { useEffect, useRef, useState } from "react";
import { img } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

const stats = [
  { value: 42, suffix: " Days", label: "Cold Pine Cure" },
  { value: 100, suffix: "%", label: "Biodegradable" },
  { value: 0, suffix: "%", label: "Synthetic Surfactants" },
];

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-[#13201c] text-[#faf8f5]">
      {/* Torn Top Deckle Edge Transition */}
      <div className="torn-top bg-[#13201c]">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-28 sm:px-10 md:px-14 lg:grid-cols-12 lg:items-center lg:py-40">
          {/* Text & Manifesto Column */}
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b39b7d]" />
              <p className="eyebrow text-[#b39b7d] tracking-[0.34em]">
                The Devonshire Manifesto
              </p>
            </div>

            <h2 className="mt-5 display text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-light leading-[0.96]">
              From soil and sun.
              <br />
              <em className="italic font-light text-[#ece5d8]">To your evening ritual.</em>
            </h2>

            <p className="mt-8 max-w-md text-sm sm:text-[16px] leading-relaxed text-[#faf8f5]/75 font-light">
              We make soap the way it was crafted before industrialized cosmetic conglomerates:
              slowly, in deliberate small batches, with nothing added for the sake of marketing claims or shelf-life extension.
            </p>

            <blockquote className="mt-8 border-l border-[#b39b7d]/40 pl-6 font-serif text-xl sm:text-2xl italic leading-relaxed text-[#ece5d8]/85 font-light">
              “When you return to cold-process botanical fats, the skin stops fighting its own barrier and begins to rest.”
            </blockquote>

            {/* Founder Note & Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-serif italic text-lg text-[#faf8f5]">Ananth V.</span>
                <span className="text-[8.5px] font-sans tracking-[0.24em] uppercase text-[#b39b7d]">
                  Founder & Master Formulator
                </span>
              </div>
            </div>

            {/* Counter Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#faf8f5]/12 pt-8">
              {stats.map((s) => (
                <Counter key={s.label} {...s} />
              ))}
            </div>
          </Reveal>

          {/* Archival Photography Frame */}
          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="relative overflow-hidden bg-[#0b1512] border border-[#faf8f5]/15 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
              <div className="aspect-[4/5] overflow-hidden">
                <Photo
                  src={img.story}
                  alt="Herbal apothecary formulation in studio light"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 brightness-[0.94]"
                />
              </div>
              <div className="p-4 bg-[#13201c] border-t border-[#faf8f5]/10 flex items-center justify-between text-[8.5px] tracking-[0.24em] text-[#faf8f5]/60 uppercase">
                <span>Plates & Cures</span>
                <span>Devonshire Studio 2021</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (reduce) {
          setN(value);
          io.disconnect();
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1600);
          setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <p className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-[9px] tracking-[0.2em] text-[#b39b7d] uppercase font-sans">
        {label}
      </p>
    </div>
  );
}
