import { BrandStory } from "../components/BrandStory";
import { EditorialSection } from "../components/EditorialSection";
import { Reveal } from "../components/Reveal";

export function StoryPage() {
  return (
    <div className="bg-[#faf8f5] text-[#13201c] pt-28">
      <div className="px-6 py-20 md:px-14 border-b border-[#13201c]/10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="eyebrow text-[#8a7356]">Origins & Philosophy</p>
            <h1 className="mt-4 display max-w-3xl text-4xl sm:text-5xl md:text-7xl font-light leading-[0.96]">
              A Devon studio, a coastal garden,
              <br />
              <em className="italic font-light text-[#6e675e]">and six weeks of patience.</em>
            </h1>
            <p className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-[#6e675e] font-light">
              The Bubble Soap began as a quiet kitchen experiment and remained one even after establishing a dedicated atelier. We still weigh our botanical oils on balance scales. We still let the saponification cure in its own unhurried time.
            </p>
          </Reveal>
        </div>
      </div>
      <BrandStory />
      <EditorialSection />
    </div>
  );
}
