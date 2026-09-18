import { ingredients } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

export function IngredientSection() {
  return (
    <section className="section-pad bg-[#ece5d8] text-[#13201c] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#13201c]/10 pb-8">
          <div>
            <p className="eyebrow text-[#8a7356]">The Studio Herbarium</p>
            <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light">
              Ingredients your skin
              <br />
              <em className="italic font-light text-[#6e675e]">instinctively recognizes.</em>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-sm text-xs sm:text-sm leading-relaxed text-[#6e675e] font-light">
            Eight foundational botanicals sourced directly from ancestral estates. Zero synthetics, petroleum derivatives, or filler surfactants.
          </p>
        </Reveal>

        {/* Herbarium Specimen Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
          {ingredients.map((ing, i) => (
            <Reveal key={ing.name} delay={i * 0.05}>
              <article data-cursor="VIEW" className="group flex flex-col h-full">
                {/* Tactile Herbarium Plate */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#faf8f5] border border-[#13201c]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-[0_16px_36px_rgba(19,32,28,0.08)]">
                  <Photo
                    src={ing.image}
                    alt={ing.name}
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 brightness-[0.98]"
                  />
                  {/* Origin Specimen Pill */}
                  {ing.origin && (
                    <div className="absolute top-3.5 left-3.5 bg-[#faf8f5]/90 backdrop-blur-sm px-2.5 py-1 text-[8px] font-sans tracking-[0.24em] uppercase text-[#13201c] border border-[#13201c]/10">
                      {ing.origin}
                    </div>
                  )}
                </div>

                {/* Typography & Botanical Description */}
                <div className="mt-5 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl font-light text-[#13201c] group-hover:italic transition-all duration-300">
                      {ing.name}
                    </h3>
                    {ing.process && (
                      <span className="text-[8.5px] font-sans tracking-[0.2em] text-[#8a7356] uppercase">
                        {ing.process}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#6e675e] font-light">
                    {ing.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
