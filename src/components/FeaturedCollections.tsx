import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { collections } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

const layout = [
  "lg:col-span-7 lg:h-[74vh] lg:min-h-[540px]",
  "lg:col-span-5 lg:h-[74vh] lg:min-h-[540px] lg:pt-14",
  "lg:col-span-5 lg:h-[64vh] lg:min-h-[460px]",
  "lg:col-span-7 lg:h-[64vh] lg:min-h-[460px] lg:-mt-12",
];

export function FeaturedCollections() {
  return (
    <section className="relative section-pad bg-[#faf8f5] text-[#13201c] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Editorial Section Header */}
        <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-8 border-b border-[#13201c]/10">
          <div className="md:col-span-7">
            <p className="eyebrow text-[#8a7356]">Curated Botanical Houses</p>
            <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-light leading-[0.96]">
              Formulas for the way
              <br />
              <em className="italic font-light text-[#6e675e]">you actually live.</em>
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end">
            <p className="max-w-md text-sm sm:text-[15px] leading-relaxed text-[#6e675e] font-light">
              Four dedicated apothecary suites. Stone-pressed botanicals, cold-cured fats, and unhurried cures. Nothing created for the brief convenience of a trend cycle.
            </p>
          </div>
        </Reveal>

        {/* Asymmetrical Magazine Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-12 lg:gap-8">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className={layout[i]}>
              <Link
                to="/collections"
                data-cursor="VIEW"
                className="group flex flex-col h-full justify-between"
              >
                {/* Image Frame with Archival Proportion */}
                <div className="relative h-[65vw] sm:h-[440px] lg:h-full w-full overflow-hidden bg-[#ece5d8] border border-[#13201c]/8">
                  <Photo
                    src={c.image}
                    alt={c.title}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035] brightness-[0.98]"
                  />
                  {/* Subtle Grain & Tone Overlay */}
                  <div className="absolute inset-0 bg-[#13201c]/10 transition-opacity duration-700 group-hover:opacity-0" />

                  {/* Provenance Corner Stamp */}
                  <div className="absolute top-4 left-4 bg-[#faf8f5]/90 backdrop-blur-sm px-3 py-1 border border-[#13201c]/10 text-[8.5px] font-sans tracking-[0.24em] uppercase text-[#13201c]">
                    {c.provenance}
                  </div>
                </div>

                {/* Typography & Editorial Metadata */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-sans tracking-[0.32em] text-[#8a7356]">
                        {String(i + 1).padStart(2, "0")} / 04
                      </span>
                    </div>
                    <h3 className="mt-1 font-serif text-2xl sm:text-3xl md:text-[32px] font-light text-[#13201c] group-hover:italic transition-all duration-500">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#6e675e] font-light max-w-sm">
                      {c.subtitle}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#13201c]/15 text-[#13201c] transition-all duration-500 group-hover:bg-[#13201c] group-hover:text-[#faf8f5] group-hover:scale-110">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
