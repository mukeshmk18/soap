import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Heart, Sparkles, Sprout, ShieldCheck, ArrowUpRight } from "lucide-react";
import { products, type Product } from "../data/content";
import { useStore } from "../store";
import { Photo } from "./Photo";

type CatalogCategory = "all" | "floral" | "herbal" | "sensitive" | "gift";

const filterTabs: { id: CatalogCategory; label: string }[] = [
  { id: "all", label: "All Soaps" },
  { id: "floral", label: "Floral & Lavender" },
  { id: "herbal", label: "Herbal & Pine" },
  { id: "sensitive", label: "Sensitive & Oat" },
  { id: "gift", label: "Curated Sets" },
];

export function DarkCatalogSection() {
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>("all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const { addToCart, toggleWishlist, wishlist, setModalProduct } = useStore();

  const getFilteredProducts = (): Product[] => {
    if (activeCategory === "all") return products.slice(0, 8);
    if (activeCategory === "floral") {
      return products.filter(
        (p) =>
          p.id.includes("lavender") ||
          p.id.includes("rose") ||
          p.notes?.top.toLowerCase().includes("floral") ||
          p.notes?.top.toLowerCase().includes("lavender")
      );
    }
    if (activeCategory === "herbal") {
      return products.filter(
        (p) =>
          p.id.includes("rosemary") ||
          p.id.includes("vetiver") ||
          p.id.includes("olive")
      );
    }
    if (activeCategory === "sensitive") {
      return products.filter(
        (p) =>
          p.id.includes("calendula") ||
          p.id.includes("chamomile") ||
          p.id.includes("aloe") ||
          p.id.includes("oat")
      );
    }
    if (activeCategory === "gift") {
      return products.filter((p) => p.category === "gift");
    }
    return products.slice(0, 8);
  };

  const currentList = getFilteredProducts();

  const handleAdd = (p: Product) => {
    addToCart(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section className="relative bg-[#13201c] pt-28 pb-24 text-[#faf8f5] overflow-hidden">
      {/* Torn Paper / Deckle Edge Top Transition (Signature Feature from GIF) */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-7 w-full bg-[#faf8f5]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 20%, 97% 85%, 94% 25%, 90% 90%, 86% 30%, 82% 80%, 78% 15%, 74% 85%, 70% 30%, 66% 90%, 62% 20%, 58% 75%, 54% 15%, 50% 85%, 46% 25%, 42% 90%, 38% 30%, 34% 80%, 30% 15%, 26% 85%, 22% 25%, 18% 90%, 14% 30%, 10% 80%, 6% 20%, 3% 85%, 0 25%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Top 3 Trust Badges (Matching GIF) */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12 border-b border-[#faf8f5]/10 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <Sprout size={16} className="text-[#b39b7d]" />
            <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#ece5d8]">
              Locally Sourced Flora
            </span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Sparkles size={16} className="text-[#b39b7d]" />
            <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#ece5d8]">
              Hand-Poured in Devon
            </span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <ShieldCheck size={16} className="text-[#b39b7d]" />
            <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#ece5d8]">
              100% Compostable Wrap
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b39b7d]">
            Curated Atelier Dispensary
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#faf8f5]">
            Striving for Perfection in Every Bar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#faf8f5]/70 font-light">
            Formulated without water fillers, parabens, or synthetic foam boosters. Saponified in slow reverence.
          </p>
        </div>

        {/* Category Tabs Filter (Matching GIF) */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#1b2c27] p-1.5 border border-[#faf8f5]/10">
            {filterTabs.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full px-5 py-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                    isSelected
                      ? "bg-[#faf8f5] text-[#13201c] shadow-md"
                      : "text-[#faf8f5]/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact, Crispy Product Grid (Matching GIF) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {currentList.map((p) => {
              const isAdded = addedId === p.id;
              const wished = wishlist.includes(p.id);

              return (
                <motion.div
                  key={p.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col justify-between rounded-xl bg-[#192b25] border border-[#faf8f5]/10 p-4 transition-all duration-300 hover:border-[#b39b7d]/40 hover:-translate-y-1 shadow-md"
                >
                  {/* Product Image Frame */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#253d35]">
                    <button
                      type="button"
                      onClick={() => setModalProduct(p)}
                      className="block h-full w-full focus:outline-none"
                    >
                      <Photo
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </button>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(p.id)}
                      className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#13201c]/70 text-[#faf8f5] backdrop-blur-sm transition-colors hover:bg-white hover:text-[#13201c]"
                    >
                      <Heart
                        size={12}
                        fill={wished ? "currentColor" : "none"}
                        className={wished ? "text-red-400" : ""}
                      />
                    </button>

                    {/* Batch Pill */}
                    <div className="absolute bottom-2.5 left-2.5 rounded bg-[#13201c]/80 px-2 py-0.5 text-[8px] font-sans tracking-[0.18em] uppercase text-[#b39b7d] backdrop-blur-sm">
                      {p.weight || "145g Bar"}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-4 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setModalProduct(p)}
                        className="text-left font-serif text-lg text-[#faf8f5] group-hover:text-[#b39b7d] transition-colors leading-snug line-clamp-1"
                      >
                        {p.name}
                      </button>
                      <span className="font-serif text-lg font-medium text-[#b39b7d] shrink-0">
                        ${p.price}
                      </span>
                    </div>

                    <p className="mt-1 text-[11.5px] text-[#faf8f5]/65 line-clamp-1 font-light">
                      {p.notes?.top || p.short}
                    </p>
                  </div>

                  {/* Action Bar: Details + Add to Bag */}
                  <div className="mt-4 pt-3 border-t border-[#faf8f5]/10 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setModalProduct(p)}
                      className="inline-flex items-center gap-1 text-[9.5px] font-medium tracking-[0.2em] uppercase text-[#faf8f5]/70 hover:text-white transition-colors"
                    >
                      <span>Ritual</span>
                      <ArrowUpRight size={11} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAdd(p)}
                      disabled={isAdded}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-[9.5px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
                        isAdded
                          ? "bg-[#678478] text-white"
                          : "bg-[#faf8f5] text-[#13201c] hover:bg-[#ece5d8]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={11} />
                          <span>Added</span>
                        </>
                      ) : (
                        <span>+ Add</span>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
