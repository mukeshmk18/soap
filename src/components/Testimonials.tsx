import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-28 md:py-40 text-[#13201c] border-t border-[#13201c]/8">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <Reveal className="flex items-end justify-between border-b border-[#13201c]/10 pb-8 mb-16">
          <div>
            <p className="eyebrow text-[#8a7356]">Critical & Patron Accolades</p>
            <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light">
              Considered, they say.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous quote"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#13201c]/15 transition-all duration-500 hover:bg-[#13201c] hover:text-[#faf8f5] hover:scale-105"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next quote"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#13201c]/15 transition-all duration-500 hover:bg-[#13201c] hover:text-[#faf8f5] hover:scale-105"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </Reveal>

        {/* Featured Testimonial Quote */}
        <div className="relative min-h-[260px] md:min-h-[220px] flex flex-col justify-center">
          <span className="pointer-events-none absolute -top-8 -left-4 font-serif text-[90px] md:text-[140px] text-[#13201c]/6 leading-none select-none">
            “
          </span>

          <blockquote className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-relaxed italic text-[#13201c] font-light max-w-4xl">
            “{testimonials[current].quote}”
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs tracking-[0.2em] text-[#6e675e] uppercase font-sans">
            <span className="font-serif italic text-lg text-[#13201c] normal-case">
              {testimonials[current].name}
            </span>
            <span className="text-[#8a7356]">·</span>
            <span>{testimonials[current].location}</span>
            {testimonials[current].attribution && (
              <>
                <span className="text-[#8a7356]">·</span>
                <span className="text-[#b39b7d]">{testimonials[current].attribution}</span>
              </>
            )}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 transition-all duration-500 ${
                current === i ? "w-8 bg-[#13201c]" : "w-2 bg-[#13201c]/20 hover:bg-[#13201c]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
