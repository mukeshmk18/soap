import { IngredientSection } from "../components/IngredientSection";
import { Reveal } from "../components/Reveal";

export function IngredientsPage() {
  return (
    <div className="bg-[#faf8f5] text-[#13201c] pt-28">
      <div className="px-6 pt-16 md:px-14 border-b border-[#13201c]/10 pb-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="eyebrow text-[#8a7356]">Botanical Pantry</p>
            <h1 className="mt-4 display max-w-3xl text-4xl sm:text-5xl md:text-7xl font-light leading-[0.96]">
              A pantry you could
              <br />
              <em className="italic font-light text-[#6e675e]">recognise in the dark.</em>
            </h1>
            <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#6e675e] font-light">
              Every oil, herb, flower, and clay originates from organic smallholdings that share our stewardship values.
            </p>
          </Reveal>
        </div>
      </div>
      <IngredientSection />
    </div>
  );
}
