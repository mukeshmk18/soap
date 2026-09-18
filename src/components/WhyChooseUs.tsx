import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Heart, Leaf, Shield, Wind, CheckCircle2 } from "lucide-react";
import { img } from "../data/content";
import { Photo } from "./Photo";

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  const leftFeatures = [
    {
      icon: <Sparkles size={18} className="text-[#678478]" />,
      title: "Hand-Made in Batches",
      desc: "Poured by hand in wooden pine moulds, never mass-produced by industrial machinery.",
    },
    {
      icon: <Leaf size={18} className="text-[#678478]" />,
      title: "100% Bio & Organic",
      desc: "Rich Tuscan virgin olive oil, raw unrefined shea, and certified wild-harvested herbs.",
    },
    {
      icon: <Heart size={18} className="text-[#678478]" />,
      title: "Zero Harmful Synthetics",
      desc: "Completely free of artificial colorants, phthalates, synthetic foaming agents, and SLS.",
    },
  ];

  const rightFeatures = [
    {
      icon: <Wind size={18} className="text-[#678478]" />,
      title: "Cold-Process Saponification",
      desc: "Cured at ambient room temperature for 42 days, locking in precious organic glycerin.",
    },
    {
      icon: <Shield size={18} className="text-[#678478]" />,
      title: "Vegan & Palm-Oil Free",
      desc: "100% ethical plant-based oils. Certified cruelty-free with zero rainforest impact.",
    },
    {
      icon: <CheckCircle2 size={18} className="text-[#678478]" />,
      title: "For All Skin Types",
      desc: "Gentle, non-stripping formulas tailored for delicate, reactive, and dry complexions.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative bg-[#faf8f5] py-20 md:py-28 text-[#13201c]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Section Title: Crisp and Punchy */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a7356]">
            The Botanical Difference
          </span>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#13201c]">
            Why Choose Our Soaps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6e675e] font-light">
            Traditional cold-process techniques meet certified organic purity. No shortcuts, no compromises.
          </p>
        </div>

        {/* 3-Column Feature Layout Matching the Reference GIF */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (3 Features) */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10">
            {leftFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 text-left p-4 rounded-xl hover:bg-white/60 transition-colors border border-transparent hover:border-[#13201c]/6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#678478]/10 text-[#678478]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#13201c]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e675e] font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column (Crisp Contained Soap Visual) */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl bg-[#ece5d8] shadow-[0_20px_48px_rgba(19,32,28,0.1)] border border-[#13201c]/10"
            >
              <Photo
                src={img.botanicalBars}
                alt="Handcrafted organic soap bars"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13201c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-center text-white">
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#b39b7d]">
                  Atelier Batch No. 042
                </span>
                <p className="font-serif text-lg italic text-[#faf8f5]">
                  Poured & Cured in Devon
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (3 Features) */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10">
            {rightFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 text-left p-4 rounded-xl hover:bg-white/60 transition-colors border border-transparent hover:border-[#13201c]/6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#678478]/10 text-[#678478]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#13201c]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e675e] font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
