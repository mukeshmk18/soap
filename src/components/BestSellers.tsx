import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { products, type ProductCategory } from "../data/content";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

const filters: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "Complete Archive" },
  { id: "soap", label: "Botanical Bars" },
  { id: "face", label: "Facial Emulsions" },
  { id: "body", label: "Body & Balms" },
  { id: "gift", label: "Curated Sets" },
];

export function BestSellers() {
  const [filter, setFilter] = useState<ProductCategory>("all");
  const reduce = useReducedMotion();
  const list =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="shop" className="section-pad bg-[#faf8f5] text-[#13201c] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#13201c]/10 pb-8">
          <div>
            <p className="eyebrow text-[#8a7356]">The Atelier Dispensary</p>
            <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light">
              Choose a ritual.
              <br />
              <em className="italic font-light text-[#6e675e]">We prepare the harvest.</em>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-xs text-xs sm:text-sm leading-relaxed text-[#6e675e] font-light">
            Every bar and balm is hand-cut, wrapped in unbleached paper, and stamped with its specific batch provenance.
          </p>
        </Reveal>

        {/* Botanical Filter Tabs */}
        <div
          className="mt-12 flex gap-3 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Atelier Dispensary filters"
        >
          {filters.map((f) => {
            const count =
              f.id === "all"
                ? products.length
                : products.filter((p) => p.category === f.id).length;
            const isSelected = filter === f.id;

            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 font-sans ${
                  isSelected
                    ? "bg-[#13201c] text-[#faf8f5] shadow-sm"
                    : "bg-[#ece5d8]/70 text-[#6e675e] hover:bg-[#ece5d8] hover:text-[#13201c]"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[8.5px] ${
                    isSelected ? "text-[#b39b7d]" : "text-[#9c958a]"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid with Generous Whitespace */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 lg:gap-y-20">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
