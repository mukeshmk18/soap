export function BrandMark({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  const color = light ? "text-[#faf8f5]" : "text-[#13201c]";
  const subColor = light ? "text-[#faf8f5]/65" : "text-[#13201c]/55";

  return (
    <span className={`inline-flex items-center gap-3.5 transition-all duration-500 select-none ${color}`}>
      {/* Refined Apothecary Seal */}
      <span className="relative flex items-center justify-center">
        <svg
          width={compact ? 20 : 24}
          height={compact ? 20 : 24}
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:rotate-45"
        >
          {/* Delicate outer circle with thin dash */}
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.85"
            strokeDasharray="1.5 2"
            opacity="0.5"
          />
          {/* Inner botanical bubble motif */}
          <circle
            cx="13.5"
            cy="17.5"
            r="6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.85"
          />
          <circle
            cx="19.5"
            cy="13.5"
            r="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.85"
          />
          <circle
            cx="16"
            cy="16"
            r="1"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      </span>

      {/* Typographic Logotype */}
      <span className="flex flex-col tracking-wider">
        <span
          className={`font-serif tracking-[0.24em] font-medium uppercase leading-tight ${
            compact ? "text-[12px] md:text-[13px]" : "text-[14px] md:text-[15px]"
          }`}
        >
          The Bubble Soap
        </span>
        <span
          className={`font-sans tracking-[0.34em] uppercase font-normal ${subColor} ${
            compact ? "text-[7.5px]" : "text-[8.5px]"
          }`}
        >
          Atelier Botanique · Devon
        </span>
      </span>
    </span>
  );
}
