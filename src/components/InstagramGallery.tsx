import { Instagram, ArrowUpRight } from "lucide-react";
import { instagram } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:col-span-2",
  "",
  "",
];

export function InstagramGallery() {
  return (
    <section className="section-pad bg-[#ece5d8] text-[#13201c] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <Reveal className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#13201c]/10 pb-6 gap-4">
          <div>
            <p className="eyebrow text-[#8a7356]">Photographic Dispatch</p>
            <h2 className="mt-3 display text-3xl sm:text-4xl md:text-5xl font-light">
              The Devonshire Studio Diary
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase font-medium link-underline"
          >
            <Instagram size={14} />
            <span>@thebubblesoap</span>
            <ArrowUpRight size={13} />
          </a>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4">
          {instagram.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 0.04}
              className={`relative overflow-hidden bg-[#faf8f5] border border-[#13201c]/10 p-2 shadow-sm group ${spans[i]}`}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="VIEW"
                className="relative block h-full w-full overflow-hidden"
              >
                <Photo
                  src={item.src}
                  alt={item.caption}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 brightness-[0.98]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-[#13201c]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-[#faf8f5]">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-center">
                    {item.caption}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
