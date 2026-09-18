import { Star, Instagram } from "lucide-react";
import { instagram } from "../data/content";
import { Photo } from "./Photo";

export function PressRibbon() {
  const reviews = [
    {
      source: "British Vogue",
      quote: "The Bubble Soap turns the utilitarian act of bathing into an unhurried ritual. The Calendula & Oat bar is a quiet masterpiece.",
    },
    {
      source: "Kinfolk Gallery",
      quote: "Tactile unbleached linen, raw beveled soap edges, and scents that recall damp Provençal gardens rather than department stores.",
    },
    {
      source: "Elle Eco-Living",
      quote: "Ancestral cold-process fats that respect your lipid barrier. The skin stops fighting and begins to genuinely rest.",
    },
  ];

  return (
    <section className="relative bg-[#f7f4ed] py-16 md:py-20 text-[#13201c] border-t border-[#13201c]/8">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Editorial Press Quote Grid (Compact & Crisp) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-[#13201c]/10">
          {reviews.map((rev) => (
            <div
              key={rev.source}
              className="flex flex-col justify-between rounded-xl bg-white/70 p-6 border border-[#13201c]/6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#b39b7d] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif text-base italic leading-relaxed text-[#2b2824]">
                “{rev.quote}”
              </p>
              <div className="mt-4 pt-3 border-t border-[#13201c]/6">
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#8a7356]">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Crisp Gallery Grid (Contained, Square, Clean) */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a7356]">
              Atelier Visual Archive
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-[#13201c]">
              <Instagram size={13} />
              <span>@thebubblesoap</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instagram.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl bg-[#ece5d8] border border-[#13201c]/8"
              >
                <Photo
                  src={item.src}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-2.5">
                  <p className="text-[9px] text-white font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
