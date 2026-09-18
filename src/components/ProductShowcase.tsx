import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../data/content";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function ProductShowcase() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-pad bg-[#faf8f5] text-[#13201c] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Editorial Header */}
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#13201c]/10 pb-8">
          <div>
            <p className="eyebrow text-[#8a7356]">The Permanent Collection</p>
            <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light">
              The rituals people
              <br />
              <em className="italic font-light text-[#6e675e]">faithfully return to.</em>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-[#6e675e] font-light md:text-right">
              Four central formulas poured every single Tuesday in Devonshire. Saponified slowly, unadorned, and intentionally quiet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] text-[#13201c] uppercase font-medium link-underline"
            >
              View Complete Atelier
              <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>

        {/* Mobile Swipe Carousel / Desktop 4-Column Editorial Grid */}
        <div className="mt-16 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-16 sm:overflow-visible sm:pb-0 scrollbar-none">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className="min-w-[80vw] snap-start sm:min-w-0"
            >
              <Reveal delay={i * 0.07}>
                <ProductCard product={p} index={i} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
