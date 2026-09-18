import { img } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

const principles = [
  {
    num: "I",
    title: "Small-Batch Wooden Moulds",
    copy: "Every batch is hand-blended, stirred at room temperature, and poured into unlined Devon pine moulds. Never automated, never rushed to meet industrial quotas.",
  },
  {
    num: "II",
    title: "Cold-Process Saponification",
    copy: "We reject external steam heat. By allowing natural saponification to unfold over forty-two days, precious natural glycerin remains locked within the bar.",
  },
  {
    num: "III",
    title: "Ancestral Whole Lipids",
    copy: "Raw Tuscan olive oil, unrefined Ghana shea butter, and solar-steeped botanicals. Fats that human lipid barriers have recognized for millennia.",
  },
  {
    num: "IV",
    title: "Compostable Cotton Papers",
    copy: "No virgin plastic wraps or metallic foils. Each bar is dressed in unbleached FSC cotton papers printed with water-based vegetable soy inks.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative bg-[#f0eae1] text-[#13201c] section-pad">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <Reveal className="mb-16 md:mb-24 max-w-2xl">
          <p className="eyebrow text-[#8a7356]">The Atelier Discipline</p>
          <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light leading-[0.94]">
            The elegance of
            <br />
            <em className="italic font-light text-[#6e675e]">unhurried restraint.</em>
          </h2>
          <p className="mt-6 text-sm sm:text-[15px] leading-relaxed text-[#6e675e] font-light max-w-lg">
            In an era of instant chemistry and synthetic silicones, we maintain an archaic commitment: slow curing, botanical clarity, and ingredients your skin requires nothing to forgive.
          </p>
        </Reveal>

        {/* Asymmetrical 12-Column Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Tactile Framed Photography */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative overflow-hidden bg-[#e2dacb] border border-[#13201c]/10 shadow-[0_20px_48px_-12px_rgba(19,32,28,0.1)]">
              <div className="aspect-[4/5] overflow-hidden">
                <Photo
                  src={img.heroProduct}
                  alt="Cold-process botanical bars curing peacefully"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
              <div className="p-5 bg-[#faf8f5]/90 border-t border-[#13201c]/8 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.26em] uppercase text-[#8a7356]">
                  Studio Archive · Dev. 01
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#9c958a] uppercase">
                  Pine Rack Rest
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 4 Editorial Principles */}
          <div className="order-1 lg:order-2 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08} className="flex flex-col justify-start">
                <div className="flex items-baseline gap-3 border-b border-[#13201c]/10 pb-3">
                  <span className="font-serif text-xl sm:text-2xl text-[#8a7356] font-light">
                    {p.num}.
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#13201c] font-light leading-snug">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#6e675e] font-light">
                  {p.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
