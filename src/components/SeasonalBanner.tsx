import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { img, products } from "../data/content";
import { useStore } from "../store";
import { Photo } from "./Photo";

export function SeasonalBanner() {
  const { addToCart, setModalProduct } = useStore();
  const [added, setAdded] = useState(false);
  const seasonalProduct = products.find((p) => p.id === "wild-rosemary") || products[1];

  const handleQuickAdd = () => {
    addToCart(seasonalProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <section className="relative bg-[#ebe4d8] py-20 md:py-24 text-[#13201c] overflow-hidden">
      {/* Torn Paper Deckle Top Border */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-6 w-full bg-[#13201c]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 30%, 97% 85%, 94% 20%, 90% 90%, 86% 25%, 82% 85%, 78% 15%, 74% 90%, 70% 25%, 66% 85%, 62% 20%, 58% 80%, 54% 15%, 50% 90%, 46% 25%, 42% 85%, 38% 20%, 34% 85%, 30% 15%, 26% 90%, 22% 25%, 18% 85%, 14% 20%, 10% 85%, 6% 15%, 3% 90%, 0 20%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="rounded-3xl bg-white/70 p-8 sm:p-12 md:p-14 shadow-lg border border-[#13201c]/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#678478]/15 px-3.5 py-1 text-[9px] font-semibold tracking-[0.24em] uppercase text-[#678478]">
                <Sparkles size={11} />
                <span>Limited Harvest Release · 350 Bars</span>
              </div>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#13201c] leading-[1.06]">
                Wild Rosemary & Highland Lavender
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#6e675e] leading-relaxed font-light max-w-xl">
                Distilled with mountain rosemary and high-altitude French lavender flowers.
                Saponified slowly over forty-two days to deliver a calming, resinous lather for morning and twilight rituals.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  disabled={added}
                  className="inline-flex items-center gap-2 rounded-full bg-[#13201c] px-7 py-3.5 text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#faf8f5] transition-all hover:bg-[#253f37] hover:shadow-md"
                >
                  {added ? (
                    <>
                      <Check size={13} />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <span>Shop Edition — $32</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setModalProduct(seasonalProduct)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#13201c]/15 bg-white/80 px-6 py-3.5 text-[10.5px] font-medium tracking-[0.22em] uppercase text-[#13201c] transition-all hover:bg-white"
                >
                  View Notes
                </button>
              </div>
            </div>

            {/* Right Contained Visual (Contained, Not Huge!) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full max-w-md overflow-hidden rounded-2xl shadow-xl border border-[#13201c]/10 bg-[#ece5d8]">
                <Photo
                  src={img.seasonal}
                  alt="Seasonal soap harvest edition"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3.5 right-3.5 rounded-full bg-[#13201c]/80 px-3 py-1 text-[8.5px] font-sans tracking-[0.2em] uppercase text-[#faf8f5] backdrop-blur-sm">
                  Batch 042
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper Deckle Bottom Border */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 w-full bg-[#faf8f5]"
        style={{
          clipPath:
            "polygon(0 75%, 3% 15%, 6% 85%, 9% 20%, 12% 80%, 16% 15%, 20% 90%, 24% 25%, 28% 85%, 32% 20%, 36% 80%, 40% 15%, 44% 90%, 48% 25%, 52% 85%, 56% 20%, 60% 80%, 64% 15%, 68% 90%, 72% 25%, 76% 85%, 80% 20%, 84% 80%, 88% 15%, 92% 90%, 96% 20%, 100% 75%, 100% 100%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}
