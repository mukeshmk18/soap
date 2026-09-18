import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { stories } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

export function EditorialSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-[#faf8f5] text-[#13201c]">
      {/* Desktop Sticky Magazine Scroller */}
      <div className="sticky top-0 hidden h-screen overflow-hidden lg:block">
        {stories.map((story, i) => (
          <StoryPanel
            key={story.index}
            story={story}
            index={i}
            progress={scrollYProgress}
            reduce={Boolean(reduce)}
          />
        ))}
      </div>
      <div className="hidden h-[300vh] lg:block" aria-hidden />

      {/* Mobile & Tablet Editorial Pacing */}
      <div className="lg:hidden">
        {stories.map((story, i) => (
          <div
            key={story.index}
            className={`px-6 py-24 sm:px-10 ${
              i % 2 ? "bg-[#f0eae1]" : "bg-[#faf8f5]"
            } border-t border-[#13201c]/8`}
          >
            <Reveal>
              <div className="flex items-center justify-between border-b border-[#13201c]/10 pb-4 mb-6">
                <span className="text-[9px] tracking-[0.32em] text-[#8a7356] uppercase font-sans">
                  {story.chapter}
                </span>
                <span className="text-[10px] tracking-[0.28em] text-[#9c958a] uppercase font-sans">
                  {story.index} / 04
                </span>
              </div>

              <h2 className="display whitespace-pre-line text-3xl sm:text-4xl font-light text-[#13201c] leading-[1.02]">
                {story.title}
              </h2>

              <div className="mt-8 aspect-[4/5] w-full overflow-hidden bg-[#ece5d8] border border-[#13201c]/8 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                <Photo
                  src={story.image}
                  alt={story.title.replace(/\n/g, " ")}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-8 text-sm sm:text-[15px] leading-relaxed text-[#6e675e] font-light">
                {story.copy}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function StoryPanel({
  story,
  index,
  progress,
  reduce,
}: {
  story: (typeof stories)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const start = index / 4;
  const end = (index + 1) / 4;
  const opacity = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );
  const imgY = useTransform(progress, [start, end], [28, -28]);
  const textY = useTransform(progress, [start, end], [16, -16]);
  const reverse = index % 2 === 1;

  return (
    <motion.div
      style={{ opacity: reduce ? 1 : opacity }}
      className="absolute inset-0 grid grid-cols-2"
    >
      {/* Photography Side */}
      <div className={`relative overflow-hidden bg-[#ece5d8] ${reverse ? "order-2" : "order-1"}`}>
        <motion.div className="h-full w-full" style={reduce ? undefined : { y: imgY }}>
          <Photo
            src={story.image}
            alt={story.title.replace(/\n/g, " ")}
            sizes="50vw"
            className="h-full w-full object-cover brightness-[0.98]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#13201c]/10" />

        {/* Tactile Folio Stamp */}
        <div className="absolute bottom-10 left-10 bg-[#faf8f5]/85 backdrop-blur-sm px-4 py-2 border border-[#13201c]/10 text-[9px] tracking-[0.28em] text-[#13201c] uppercase">
          Plate {story.index} · Devon Archive
        </div>
      </div>

      {/* Editorial Content Side */}
      <div
        className={`flex flex-col justify-center px-16 xl:px-28 ${
          reverse ? "order-1 bg-[#f0eae1]" : "order-2 bg-[#faf8f5]"
        }`}
      >
        <motion.div style={reduce ? undefined : { y: textY }} className="max-w-lg">
          <div className="flex items-center gap-4 border-b border-[#13201c]/10 pb-4 mb-8">
            <span className="text-[10px] tracking-[0.34em] text-[#8a7356] uppercase font-sans font-medium">
              {story.chapter}
            </span>
            <span className="text-[#9c958a]">/</span>
            <span className="text-[10px] tracking-[0.3em] text-[#9c958a] uppercase font-sans">
              Archive Note {story.index}
            </span>
          </div>

          <h2 className="display whitespace-pre-line text-5xl xl:text-[62px] font-light text-[#13201c] leading-[0.96]">
            {story.title}
          </h2>

          <p className="mt-8 text-[16px] xl:text-[17px] leading-relaxed text-[#6e675e] font-light">
            {story.copy}
          </p>

          <div className="mt-12 pt-6 border-t border-[#13201c]/8 text-[9px] tracking-[0.28em] text-[#9c958a] uppercase font-sans">
            Provenance: Handcrafted In Devon · 100% Biodegradable
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
