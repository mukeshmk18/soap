import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { products } from "../data/content";
import { useStore } from "../store";

export function HarbourHero() {
  const reduce = useReducedMotion();
  const { setModalProduct } = useStore();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const openProduct = (id: string) => {
    const item = products.find((p) => p.id === id);
    if (item) setModalProduct(item);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 min-h-[640px] md:min-h-[760px] flex items-center justify-center bg-[#c9baa9]">
      {/* 1. Realistic Rustic Wood Table Background with Planks & Natural Grain */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Base Light Timber Surface Color */}
        <div className="absolute inset-0 bg-[#d8ccbf]" />

        {/* High-Resolution Wood Plank Texture Overlay */}
        <div
          className="absolute inset-0 opacity-85 mix-blend-multiply bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=2400&q=80')",
          }}
        />

        {/* Horizontal Plank Seams (Rustic Board Lines) */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-30">
          <div className="h-px w-full bg-[#3d2b1f] shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
          <div className="h-px w-full bg-[#3d2b1f] shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
          <div className="h-px w-full bg-[#3d2b1f] shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
          <div className="h-px w-full bg-[#3d2b1f] shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
        </div>

        {/* Subtle Warm Atmospheric Daylight Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(45,35,25,0.25)_100%)]" />
      </div>

      {/* 2. Flat-Lay Artisan Products Arranged Physically on the Wood Table */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* ================= TOP LEFT ================= */}

        {/* A. DETOX FACIAL BAR - Kraft Paper Box with Circular Cutout */}
        <div
          className="pointer-events-auto absolute top-6 left-4 sm:top-10 sm:left-8 md:top-14 md:left-14 w-[110px] sm:w-[135px] md:w-[155px] aspect-[4/5] rounded-[3px] bg-[#c7a47e] p-2.5 sm:p-3 shadow-[0_18px_32px_rgba(35,22,12,0.38)] border border-[#a8825c] flex flex-col items-center justify-between transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(135deg, #d3b28d 0%, #ba956e 100%)",
            boxShadow: "0 20px 35px -5px rgba(35,22,12,0.42), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
          onClick={() => openProduct("detox-facial-bar")}
        >
          <div className="text-center w-full">
            <p className="font-script text-[17px] sm:text-[21px] text-[#422e1f] leading-none">The Harbour</p>
            <p className="text-[7.5px] sm:text-[9px] font-bold tracking-[0.24em] uppercase text-[#382618] mt-1">
              DETOX
            </p>
            <p className="text-[6.5px] sm:text-[7.5px] tracking-[0.2em] uppercase text-[#5a4230]">
              FACIAL BAR
            </p>
          </div>

          {/* Die-Cut Cutout Showing Charcoal Swirl Soap Texture */}
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)] border border-[#7a5839]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1607006314592-805175b28dbb?auto=format&fit=crop&w=300&q=80')",
                backgroundColor: "#2c302e",
              }}
            />
          </div>

          <div className="text-center">
            <p className="text-[6px] sm:text-[7px] tracking-[0.28em] uppercase text-[#422e1f] font-semibold">
              VEGAN SOAP
            </p>
          </div>
        </div>

        {/* B. SAGE & SEA SALT CUT BAR (Top Center-Left) */}
        <div
          className="pointer-events-auto absolute top-4 left-[34%] sm:top-8 sm:left-[30%] md:top-12 md:left-[27%] w-[95px] sm:w-[115px] md:w-[130px] aspect-[4/5] rounded-[2px] shadow-[0_20px_35px_rgba(35,22,12,0.36)] overflow-hidden transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundColor: "#e8ede4",
            backgroundImage: "linear-gradient(140deg, #f4f5f0 20%, #8ca192 65%, #465d50 100%)",
            boxShadow: "0 22px 38px -6px rgba(35,22,12,0.4), inset 0 0 10px rgba(0,0,0,0.08)",
          }}
        >
          {/* Natural Marbled Soap Surface Pattern */}
          <div
            className="w-full h-full opacity-60 mix-blend-overlay bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=400&q=80')",
            }}
          />
        </div>

        {/* C. CEDARWOOD & SAGE CONDITIONER BAR (Parchment Sachet, Top Center) */}
        <div
          className="pointer-events-auto hidden md:flex absolute top-10 left-[45%] w-[130px] aspect-[3.8/5] rounded-[3px] bg-[#fbf9f4] p-3 shadow-[0_18px_30px_rgba(35,22,12,0.32)] border border-[#ded5c6] flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,238,226,0.9))",
          }}
        >
          <div className="w-full border border-dashed border-[#b8a994] p-2 bg-[#fdfbf7]">
            <p className="font-script text-[17px] text-[#4d3a2b] leading-none">The Harbour</p>
            <p className="text-[7.5px] font-bold tracking-[0.2em] uppercase text-[#3d2b1f] mt-1">
              CEDARWOOD & SAGE
            </p>
            <p className="text-[6.5px] tracking-[0.18em] uppercase text-[#735c47] mt-0.5">
              CONDITIONER BAR
            </p>
          </div>
        </div>

        {/* ================= TOP RIGHT ================= */}

        {/* D. BOTANICAL GREEN SOAP BAR on SISAL LOOFAH REST */}
        <div className="pointer-events-auto absolute top-5 right-4 sm:top-8 sm:right-8 md:top-12 md:right-16 flex flex-col items-center">
          {/* Sisal Fiber Mat Base */}
          <div
            className="w-[125px] sm:w-[155px] md:w-[175px] h-[105px] sm:h-[125px] md:h-[140px] rounded-lg shadow-[0_18px_30px_rgba(35,22,12,0.35)] p-2 flex items-center justify-center"
            style={{
              backgroundColor: "#cbb69c",
              backgroundImage:
                "repeating-linear-gradient(45deg, #bfa88c 0, #bfa88c 2px, #d4c1a8 2px, #d4c1a8 6px)",
            }}
          >
            {/* The Cut Botanical Dark Olive Soap Bar */}
            <div
              className="w-[90%] h-[85%] rounded-[2px] shadow-[0_8px_16px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform duration-300 hover:scale-[1.04] cursor-pointer"
              style={{
                backgroundColor: "#2e483e",
                backgroundImage: "linear-gradient(135deg, #3f5d50 0%, #1f362c 100%)",
              }}
            >
              <span className="font-script text-[15px] sm:text-[18px] text-white/40 italic">
                Harbour
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM LEFT ================= */}

        {/* E. LEMONGRASS & LAVENDER - Kraft Paper Box */}
        <div
          className="pointer-events-auto absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-12 w-[115px] sm:w-[140px] md:w-[160px] aspect-[4/5] rounded-[3px] bg-[#c7a47e] p-2.5 sm:p-3 shadow-[0_20px_35px_rgba(35,22,12,0.42)] border border-[#a8825c] flex flex-col items-center justify-between transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(135deg, #d3b28d 0%, #ba956e 100%)",
            boxShadow: "0 22px 38px -5px rgba(35,22,12,0.45)",
          }}
          onClick={() => openProduct("lemongrass-lavender")}
        >
          <div className="text-center w-full">
            <p className="font-script text-[17px] sm:text-[21px] text-[#422e1f] leading-none">The Harbour</p>
            <p className="text-[7px] sm:text-[8px] font-bold tracking-[0.2em] uppercase text-[#382618] mt-1">
              LEMONGRASS & LAVENDER
            </p>
            <p className="text-[6px] sm:text-[7px] tracking-[0.16em] uppercase text-[#634833]">
              GOATS MILK SOAP
            </p>
          </div>

          {/* Die-Cut Oval Window with Amber Citrus Soap Texture */}
          <div className="relative w-12 h-7 sm:w-16 sm:h-9 rounded-full overflow-hidden shadow-[inset_0_3px_6px_rgba(0,0,0,0.55)] border border-[#7a5839]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=300&q=80')",
                backgroundColor: "#d6a456",
              }}
            />
          </div>

          <div className="text-center">
            <p className="text-[6px] sm:text-[7px] tracking-[0.24em] text-[#422e1f] font-semibold">
              120g
            </p>
          </div>
        </div>

        {/* F. NETTLE & HORSETAIL SHAMPOO BAR (Parchment Sachet, Bottom Mid-Left) */}
        <div
          className="pointer-events-auto hidden sm:flex absolute bottom-5 left-[23%] md:left-[21%] w-[115px] md:w-[135px] aspect-[3.8/5] rounded-[3px] bg-[#fbf9f4] p-2.5 shadow-[0_18px_30px_rgba(35,22,12,0.32)] border border-[#ded5c6] flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,238,226,0.9))",
          }}
        >
          <div className="w-full border border-dashed border-[#b8a994] p-1.5 sm:p-2 bg-[#fdfbf7]">
            <p className="font-script text-[15px] sm:text-[18px] text-[#4d3a2b] leading-none">The Harbour</p>
            <p className="text-[6.5px] sm:text-[7.5px] font-bold tracking-[0.2em] uppercase text-[#3d2b1f] mt-1">
              NETTLE & HORSETAIL
            </p>
            <p className="text-[6px] tracking-[0.18em] uppercase text-[#735c47] mt-0.5">
              SHAMPOO BAR
            </p>
          </div>
        </div>

        {/* G. NATURAL HONEY CUT BAR (Bottom Center-Left) */}
        <div
          className="pointer-events-auto hidden md:block absolute -bottom-4 left-[34%] w-[105px] aspect-[4/5] rounded-[2px] shadow-[0_20px_35px_rgba(35,22,12,0.38)] overflow-hidden transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundColor: "#d7b483",
            backgroundImage: "linear-gradient(140deg, #ecd6b2 0%, #b8915b 100%)",
          }}
        >
          <span className="absolute bottom-3 left-3 font-script text-[14px] text-[#5e4121]/50">
            The Harbour
          </span>
        </div>

        {/* ================= BOTTOM CENTER ================= */}

        {/* H. ROUND SOLID SHAMPOO PUCKS with TWINE STRING */}
        <div className="pointer-events-auto absolute bottom-2 left-[48%] -translate-x-1/2 sm:bottom-4 md:bottom-6 flex items-center gap-3">
          {/* Round Puck 1 with Twine Cord */}
          <div className="relative flex flex-col items-center">
            {/* Jute Rope Loop */}
            <div className="w-3 h-5 border-2 border-[#8c7456] rounded-t-full -mb-1 z-10" />
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full shadow-[0_16px_28px_rgba(35,22,12,0.4)] flex items-center justify-center text-center transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
              style={{
                backgroundColor: "#b5c2af",
                backgroundImage: "radial-gradient(circle at 35% 35%, #d6e0d2, #83957d)",
              }}
            >
              <span className="font-script text-[11px] sm:text-[13px] text-[#2c3828]">Harbour</span>
            </div>
          </div>

          {/* Round Puck 2 (Shea Butter Puck) */}
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-[0_14px_24px_rgba(35,22,12,0.35)] transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
            style={{
              backgroundColor: "#ece5d8",
              backgroundImage: "radial-gradient(circle at 35% 35%, #faf8f5, #cfc4b2)",
            }}
          />
        </div>

        {/* ================= BOTTOM RIGHT ================= */}

        {/* I. SANDALWOOD & LIME - Kraft Paper Box */}
        <div
          className="pointer-events-auto absolute bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-12 w-[115px] sm:w-[140px] md:w-[160px] aspect-[4/5] rounded-[3px] bg-[#c7a47e] p-2.5 sm:p-3 shadow-[0_22px_38px_rgba(35,22,12,0.42)] border border-[#a8825c] flex flex-col items-center justify-between transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(135deg, #d3b28d 0%, #ba956e 100%)",
          }}
          onClick={() => openProduct("sandalwood-lime")}
        >
          <div className="text-center w-full">
            <p className="font-script text-[17px] sm:text-[21px] text-[#422e1f] leading-none">The Harbour</p>
            <p className="text-[7px] sm:text-[8px] font-bold tracking-[0.2em] uppercase text-[#382618] mt-1">
              SANDALWOOD & LIME
            </p>
            <p className="text-[6px] sm:text-[7px] tracking-[0.16em] uppercase text-[#634833]">
              GOATS MILK SOAP
            </p>
          </div>

          {/* Die-Cut Oval Window showing Lime/Green Soap */}
          <div className="relative w-12 h-7 sm:w-16 sm:h-9 rounded-full overflow-hidden shadow-[inset_0_3px_6px_rgba(0,0,0,0.55)] border border-[#7a5839]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1672736810221-611f53c1fc47?auto=format&fit=crop&w=300&q=80')",
                backgroundColor: "#2c483a",
              }}
            />
          </div>

          <div className="text-center">
            <p className="text-[6px] sm:text-[7px] tracking-[0.24em] text-[#422e1f] font-semibold">
              120g
            </p>
          </div>
        </div>

        {/* J. DUAL-TONE SPLIT BAR & FOLDED WAFFLE LINEN (Far Right) */}
        <div className="pointer-events-auto hidden lg:flex absolute top-[36%] -right-2 items-center gap-3">
          {/* Sliced Two-Tone Soap Bar */}
          <div
            className="w-[75px] h-[130px] rounded-[2px] shadow-[0_20px_35px_rgba(35,22,12,0.38)] overflow-hidden flex"
            style={{
              boxShadow: "0 20px 35px -5px rgba(35,22,12,0.45)",
            }}
          >
            <div className="w-1/2 h-full bg-[#829283]" />
            <div className="w-1/2 h-full bg-[#a89aa6]" />
          </div>

          {/* Folded Cream Waffle Linen Towel */}
          <div
            className="w-[90px] h-[160px] rounded-l-lg shadow-[0_18px_30px_rgba(35,22,12,0.3)] opacity-95"
            style={{
              backgroundColor: "#f5eee4",
              backgroundImage:
                "radial-gradient(#d4c8b8 1px, transparent 1px), radial-gradient(#d4c8b8 1px, #f5eee4 1px)",
              backgroundSize: "8px 8px",
              backgroundPosition: "0 0, 4px 4px",
            }}
          />
        </div>
      </div>

      {/* 3. CENTER HERO HEADLINE & ACTIONS (MATCHING REFERENCE EXACTLY) */}
      <div className="relative z-20 mx-auto max-w-2xl px-6 text-center">
        {/* Soft Ambient Text Scrim for Enhanced Contrast Over Timber & Soaps */}
        <div className="relative p-6 sm:p-8 rounded-2xl">
          {/* Prominent White Headline */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
          >
            The Harbour
            <br />
            Natural Soaps
          </motion.h1>

          {/* Narrative Archipelago Brand Subtitle */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white font-normal max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]"
          >
            An archipelago somewhere in the Atlantic houses a small organisation
            with a passion for healthy natural products.
          </motion.p>

          {/* Two Earthy Caramel CTA Buttons (Matching Reference) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-[3px] bg-[#b77d4c] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-white shadow-[0_8px_20px_rgba(50,30,15,0.35)] transition-all duration-300 hover:bg-[#9e673a] hover:shadow-[0_12px_28px_rgba(50,30,15,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Buy Products
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection("subscription-plans")}
              className="inline-flex items-center justify-center rounded-[3px] bg-[#b77d4c] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-white shadow-[0_8px_20px_rgba(50,30,15,0.35)] transition-all duration-300 hover:bg-[#9e673a] hover:shadow-[0_12px_28px_rgba(50,30,15,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Subscribe Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
