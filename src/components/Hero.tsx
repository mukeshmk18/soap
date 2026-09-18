import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { img } from "../data/content";
import { MagneticButton } from "./Reveal";
import { Photo } from "./Photo";
import { OrganicEdge } from "./OrganicEdge";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 110]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.05]);
  const copyY = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#13201c] text-[#faf8f5]">
      {/* Background Photography with Slow Atmospheric Motion */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y, scale }}>
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Photo
            src={img.hero}
            alt="Hand-cut botanical soap bars curing quietly in natural studio morning light"
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.88] contrast-[1.02]"
          />
        </motion.div>
        {/* Multilayered Luxury Tint: Vignette + Deep Cypress Tone */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(19,32,28,0.92)_0%,rgba(19,32,28,0.45)_50%,rgba(19,32,28,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,32,28,0.15)_0%,rgba(19,32,28,0.65)_100%)]" />
      </motion.div>

      {/* Main Hero Container */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 md:px-12 md:pb-24 lg:px-16"
        style={reduce ? undefined : { y: copyY }}
      >
        <div className="max-w-3xl">
          {/* Subtle Atelier Eyebrow */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#b39b7d]" />
            <p className="eyebrow text-[#faf8f5]/75 tracking-[0.34em]">
              Atelier Botanique · Coimbatore
            </p>
          </motion.div>

          {/* Grand Clean Headline */}
          <h1 className="mt-6 display text-[38px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.94] text-[#faf8f5] tracking-[-0.03em] font-light">
            {["Formulas for skin", "that remembers nature."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? "italic font-serif font-light text-[#ece5d8]" : ""}`}
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.14, duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Simple, Minimalist Action Buttons */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-5 sm:gap-8"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/shop">
              <MagneticButton className="group inline-flex items-center gap-3.5 bg-[#faf8f5] px-8 py-4 text-[10.5px] tracking-[0.28em] text-[#13201c] uppercase font-medium transition-all duration-500 hover:bg-[#ece5d8] shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                Explore Collection
                <ArrowRight
                  size={14}
                  className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                />
              </MagneticButton>
            </Link>
            <Link
              to="/story"
              className="link-underline text-[10.5px] tracking-[0.28em] text-[#faf8f5]/85 uppercase font-medium hover:text-[#faf8f5]"
            >
              The Studio Philosophy
            </Link>
          </motion.div>
        </div>

        {/* Quiet Bottom Hallmarks Strip */}
        <motion.div
          className="mt-20 hidden items-center justify-between border-t border-[#faf8f5]/10 pt-5 text-[9px] tracking-[0.32em] text-[#faf8f5]/45 uppercase md:flex"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2 }}
        >
          <span>Cold-Process Saponification</span>
          <span>Scroll to Discover Rituals</span>
          <span>100% Biodegradable</span>
        </motion.div>
      </motion.div>

      {/* Organic Curved Edge to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-[#faf8f5]">
        <OrganicEdge />
      </div>
    </section>
  );
}
