import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Shield, Leaf } from "lucide-react";
import { products } from "../data/content";
import { useStore } from "../store";
import { Photo } from "./Photo";

export function CrispHero() {
  const reduce = useReducedMotion();
  const { addToCart, setModalProduct } = useStore();
  const [addedId, setAddedId] = useState<string | null>(null);

  // 3 featured soaps matching the 3 cards in the reference GIF
  const heroProducts = [
    {
      item: products.find((p) => p.id === "calendula-oat") || products[0],
      badge: "GENTLE CARE",
      planLabel: "Sensitive Skin",
      accent: "from-[#f3ede4] to-[#e7ded1]",
    },
    {
      item: products.find((p) => p.id === "wild-rosemary") || products[1],
      badge: "MOST POPULAR",
      planLabel: "Daily Clarity",
      featured: true,
      accent: "from-[#e4ede7] to-[#d3e3d8]",
    },
    {
      item: products.find((p) => p.id === "evening-lavender") || products[2],
      badge: "CALMING RITUAL",
      planLabel: "Evening Rest",
      accent: "from-[#ede8f3] to-[#ded5e9]",
    },
  ];

  const handleQuickAdd = (p: typeof products[0]) => {
    addToCart(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f4ed] via-[#faf8f5] to-[#f0eae1] pt-32 pb-16 md:pt-40 md:pb-24 text-[#13201c]">
      {/* Decorative Subtle Organic Watercolor Blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#d8e3dc]/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[#e8ded3]/40 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Crisp Header Content: Centered & Punchy */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[#13201c]/10 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm"
          >
            <Leaf size={12} className="text-[#678478]" />
            <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#678478]">
              100% Bio & Organic Cold-Process
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#13201c] leading-[1.02]"
          >
            Beauty Soap Bars
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-base sm:text-lg text-[#6e675e] font-light max-w-xl mx-auto leading-relaxed"
          >
            Handcrafted with cold-pressed olive oil, raw shea butter, and wild botanicals.
            Slow-cured for 42 days for wholesome, radiant skin.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#13201c] px-8 py-3.5 text-[11px] font-medium tracking-[0.24em] uppercase text-[#faf8f5] transition-all duration-300 hover:bg-[#253f37] hover:shadow-lg shadow-md hover:-translate-y-0.5"
            >
              Shop All Bars
              <ArrowRight size={14} />
            </Link>
            <a
              href="#why-choose-us"
              className="inline-flex items-center gap-2 rounded-full border border-[#13201c]/15 bg-white/70 px-7 py-3.5 text-[11px] font-medium tracking-[0.24em] uppercase text-[#13201c] transition-all duration-300 hover:bg-white hover:border-[#13201c]/30 shadow-sm"
            >
              Why Choose Us
            </a>
          </motion.div>
        </div>

        {/* 3 Floating Showcase Cards (Matching Reference GIF) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {heroProducts.map((card, i) => {
            const p = card.item;
            const isFeatured = card.featured;
            const isAdded = addedId === p.id;

            return (
              <motion.div
                key={p.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1.5 ${
                  isFeatured
                    ? "bg-white shadow-[0_20px_50px_rgba(19,32,28,0.12)] border-2 border-[#678478]/40 md:-translate-y-4"
                    : "bg-white/90 shadow-[0_10px_30px_rgba(19,32,28,0.06)] border border-[#13201c]/8"
                }`}
              >
                {/* Card Header: Tag & Plan Type */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#13201c]/6">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[8.5px] font-semibold tracking-[0.2em] uppercase ${
                      isFeatured
                        ? "bg-[#678478] text-white"
                        : "bg-[#13201c]/6 text-[#6e675e]"
                    }`}
                  >
                    {isFeatured && <Sparkles size={10} />}
                    {card.badge}
                  </span>
                  <span className="text-[9.5px] font-medium tracking-[0.2em] uppercase text-[#8a7356]">
                    42-Day Cure
                  </span>
                </div>

                {/* Contained, Crisp Product Image Frame (No huge blur!) */}
                <button
                  type="button"
                  onClick={() => setModalProduct(p)}
                  className="group mt-4 relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#ece5d8] focus:outline-none"
                >
                  <Photo
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  <span className="absolute bottom-2.5 right-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[8.5px] font-medium tracking-[0.16em] uppercase text-[#13201c] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quick View
                  </span>
                </button>

                {/* Body Details: Clean, Crisp, No Wordiness */}
                <div className="mt-4 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setModalProduct(p)}
                      className="text-left font-serif text-2xl font-light text-[#13201c] hover:text-[#678478] transition-colors"
                    >
                      {p.name}
                    </button>
                    <span className="font-serif text-xl font-medium text-[#13201c]">
                      ${p.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-[#6e675e] line-clamp-1 font-light">
                    {p.short}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {p.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="rounded-md bg-[#faf8f5] px-2 py-0.5 text-[8.5px] font-medium text-[#6e675e] border border-[#13201c]/6"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex items-center justify-between gap-3 pt-3 border-t border-[#13201c]/6">
                  <button
                    type="button"
                    onClick={() => setModalProduct(p)}
                    className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8a7356] hover:text-[#13201c] transition-colors"
                  >
                    Details
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickAdd(p)}
                    disabled={isAdded}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
                      isAdded
                        ? "bg-[#678478] text-white"
                        : isFeatured
                        ? "bg-[#13201c] text-white hover:bg-[#253f37] shadow-sm"
                        : "bg-[#ece5d8] text-[#13201c] hover:bg-[#13201c] hover:text-white"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={12} />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <span>Add To Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Crisp Trust Highlights (Matching bottom bar of GIF hero) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-xl border border-[#13201c]/8 bg-white/60 p-5 backdrop-blur-sm text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#678478]/10 text-[#678478]">
              <Shield size={16} />
            </span>
            <div className="text-left">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#13201c]">
                Cold Saponification
              </p>
              <p className="text-[9.5px] text-[#6e675e]">Cured 42 days in pine racks</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-y sm:border-y-0 sm:border-x border-[#13201c]/8 py-3 sm:py-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#678478]/10 text-[#678478]">
              <Leaf size={16} />
            </span>
            <div className="text-left">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#13201c]">
                100% Biodegradable
              </p>
              <p className="text-[9.5px] text-[#6e675e]">Returns gently to nature</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#678478]/10 text-[#678478]">
              <Sparkles size={16} />
            </span>
            <div className="text-left">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#13201c]">
                Zero Toxins or SLS
              </p>
              <p className="text-[9.5px] text-[#6e675e]">Safe for reactive & baby skin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper / Deckle Edge Bottom Transition */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 w-full bg-[#faf8f5]"
        style={{
          clipPath:
            "polygon(0 80%, 3% 20%, 6% 90%, 9% 30%, 12% 70%, 16% 15%, 20% 85%, 24% 25%, 28% 90%, 32% 30%, 36% 75%, 40% 10%, 44% 85%, 48% 25%, 52% 90%, 56% 20%, 60% 80%, 64% 15%, 68% 85%, 72% 30%, 76% 90%, 80% 25%, 84% 80%, 88% 15%, 92% 85%, 96% 25%, 100% 70%, 100% 100%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}
