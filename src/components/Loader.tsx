import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Loader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduce) {
      onDone();
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => onDone(), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf8f5]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -24,
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center px-6 text-center select-none"
      >
        {/* Delicate Apothecary Seal */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#13201c]/15"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="text-[#13201c]/80"
          >
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            <circle
              cx="13.5"
              cy="17"
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="19"
              cy="13.5"
              r="4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />
          </svg>
        </motion.div>

        <p className="font-serif text-[18px] md:text-[20px] tracking-[0.28em] text-[#13201c] uppercase font-light">
          The Bubble Soap
        </p>
        <p className="mt-2 text-[9px] tracking-[0.42em] text-[#8a7356] uppercase font-sans">
          Atelier Botanique · Devonshire
        </p>

        {/* Ultra-thin hairline progress line */}
        <div className="mt-8 h-[1px] w-24 overflow-hidden bg-[#13201c]/10">
          <motion.div
            className="h-full bg-[#13201c]/70"
            initial={{ width: "0%" }}
            animate={{ width: phase >= 1 ? (phase >= 2 ? "100%" : "65%") : "20%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <motion.p
          className="mt-6 text-[8.5px] tracking-[0.32em] text-[#9c958a] uppercase font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          Slow Saponification · 42-Day Cure
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
