import { JournalSection } from "../components/JournalSection";
import { articles } from "../data/content";
import { Reveal } from "../components/Reveal";

export function JournalPage() {
  return (
    <div className="bg-[#faf8f5] text-[#13201c] pt-28">
      <div className="px-6 pt-16 md:px-14 border-b border-[#13201c]/10 pb-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="eyebrow text-[#8a7356]">The Studio Gazette</p>
            <h1 className="mt-4 display max-w-3xl text-4xl sm:text-5xl md:text-7xl font-light leading-[0.96]">
              Essays from the pour
              <br />
              <em className="italic font-light text-[#6e675e]">& the botanical cure.</em>
            </h1>
            <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-[#6e675e] font-light">
              {articles.length} collected essays on saponification, botany, and the quiet dignity of taking time.
            </p>
          </Reveal>
        </div>
      </div>
      <JournalSection />
    </div>
  );
}
