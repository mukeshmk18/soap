import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "../data/content";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";

export function JournalSection() {
  const [lead, ...rest] = articles;

  return (
    <section className="section-pad bg-[#faf8f5] text-[#13201c] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <Reveal className="flex items-end justify-between border-b border-[#13201c]/10 pb-8">
          <div>
            <p className="eyebrow text-[#8a7356]">The Studio Gazette · Vol. IV</p>
            <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light">
              Essays on craft & botanical time.
            </h2>
          </div>
          <Link
            to="/journal"
            className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase font-medium link-underline"
          >
            <span>Read All Essays</span>
            <ArrowRight size={13} />
          </Link>
        </Reveal>

        {/* Magazine Editorial Spread */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          {/* Main Lead Article */}
          <Reveal className="lg:col-span-7">
            <Link to="/journal" data-cursor="READ" className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ece5d8] border border-[#13201c]/8">
                <Photo
                  src={lead.image}
                  alt={lead.title}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] brightness-[0.98]"
                />
                <div className="absolute top-4 left-4 bg-[#faf8f5]/90 px-3 py-1 text-[8px] tracking-[0.24em] uppercase text-[#13201c] border border-[#13201c]/10">
                  {lead.volume}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[9.5px] tracking-[0.24em] text-[#8a7356] uppercase font-sans">
                <span>{lead.date}</span>
                <span>·</span>
                <span>{lead.read} Read</span>
              </div>

              <h3 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-light leading-snug text-[#13201c] group-hover:italic transition-all duration-500">
                {lead.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm sm:text-[15px] leading-relaxed text-[#6e675e] font-light">
                {lead.dek}
              </p>
            </Link>
          </Reveal>

          {/* Secondary Editorial Essays Column */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1}>
                <Link
                  to="/journal"
                  data-cursor="READ"
                  className="group grid grid-cols-12 gap-5 p-3 -mx-3 transition-colors duration-500 hover:bg-[#ece5d8]/40 border-b border-[#13201c]/6 pb-6"
                >
                  <div className="col-span-4 relative aspect-[4/5] overflow-hidden bg-[#ece5d8] border border-[#13201c]/8">
                    <Photo
                      src={a.image}
                      alt={a.title}
                      sizes="(min-width: 1024px) 16vw, 35vw"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="col-span-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[8.5px] tracking-[0.22em] text-[#8a7356] uppercase font-sans">
                      <span>{a.volume}</span>
                      <span>·</span>
                      <span>{a.read}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-xl sm:text-2xl font-light text-[#13201c] leading-snug group-hover:italic transition-all duration-300">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#6e675e] font-light line-clamp-2">
                      {a.dek}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
