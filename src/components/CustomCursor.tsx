import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("custom-cursor");
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") ?? "");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [reduce]);

  if (!visible) return null;

  const expanded = Boolean(label);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[120] mix-blend-difference"
      animate={{
        x: pos.x,
        y: pos.y,
        width: expanded ? 88 : 8,
        height: expanded ? 88 : 8,
      }}
      transition={{ type: "tween", duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{ translateX: "-50%", translateY: "-50%" }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#faf8f5] shadow-sm">
        {expanded && (
          <span className="text-[9px] font-sans font-medium tracking-[0.24em] text-[#13201c] uppercase">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
