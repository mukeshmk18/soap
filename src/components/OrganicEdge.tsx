export function OrganicEdge({ invert = false }: { invert?: boolean }) {
  return (
    <div
      className={`pointer-events-none relative z-[1] -mb-px h-10 w-full overflow-hidden md:h-14 ${
        invert ? "bg-[#faf8f5] text-[#13201c]" : "bg-transparent text-[#faf8f5]"
      }`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 18c80 14 160-12 240-8s160 22 240 16 160-24 240-18 160 20 240 14 160-18 240-8 140 16 240 8v34H0V18z"
        />
      </svg>
    </div>
  );
}
