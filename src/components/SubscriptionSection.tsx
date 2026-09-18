import { useState } from "react";
import { ArrowRight, Check, PackageOpen } from "lucide-react";
import { MagneticButton } from "./Reveal";
import { Reveal } from "./Reveal";

const plans = [
  {
    id: "monthly",
    name: "The Monthly Cadence",
    cadence: "Dispatched every 4 weeks",
    save: "Atelier Privilege · 10% Saving",
    price: 32,
    bars: "2 Botanical Cured Bars",
    note: "Tailored for solitary daily morning rituals.",
  },
  {
    id: "bimonthly",
    name: "The Seasonal Harvest",
    cadence: "Dispatched every 8 weeks",
    save: "The Studio Choice · 15% Saving",
    price: 58,
    bars: "4 Botanical Bars + Seasonal Gift",
    note: "Curated seasonal bars timed with botanical harvests.",
    popular: true,
  },
  {
    id: "quarterly",
    name: "The Solstice House",
    cadence: "Dispatched every 12 weeks",
    save: "Archival Patron · 20% Saving",
    price: 82,
    bars: "6 Seasonal Bars + Full Face Balm",
    note: "For full households and unhurried slow bathing.",
  },
];

export function SubscriptionSection() {
  const [active, setActive] = useState("bimonthly");

  return (
    <section className="relative bg-[#f0eae1] text-[#13201c] section-pad overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-[#8a7356]">The Atelier Subscription</p>
          <h2 className="mt-4 display text-4xl sm:text-5xl md:text-6xl font-light">
            Never interrupt
            <br />
            <em className="italic font-light text-[#6e675e]">your daily sanctuary.</em>
          </h2>
          <p className="mt-6 text-xs sm:text-sm leading-relaxed text-[#6e675e] font-light">
            Delivered directly from our Devonshire drying racks. Skip, pause, or customize your scented selections before each seasonal dispatch.
          </p>
        </Reveal>

        {/* Subscription Plan Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const on = active === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                className={`relative flex flex-col justify-between p-8 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                  on
                    ? "bg-[#13201c] text-[#faf8f5] border-[#13201c] shadow-[0_20px_48px_rgba(19,32,28,0.15)] scale-[1.02]"
                    : "bg-[#faf8f5] text-[#13201c] border-[#13201c]/10 hover:border-[#13201c]/25 hover:bg-[#ece5d8]"
                }`}
              >
                {p.popular && (
                  <span
                    className={`absolute -top-3 right-6 px-3 py-0.5 text-[8px] font-sans tracking-[0.24em] uppercase border ${
                      on
                        ? "bg-[#b39b7d] text-[#13201c] border-[#b39b7d] font-semibold"
                        : "bg-[#13201c] text-[#faf8f5] border-[#13201c]"
                    }`}
                  >
                    Curator’s Choice
                  </span>
                )}

                <div>
                  <p
                    className={`text-[9.5px] tracking-[0.24em] uppercase font-sans ${
                      on ? "text-[#b39b7d]" : "text-[#8a7356]"
                    }`}
                  >
                    {p.save}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-light leading-snug">
                    {p.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-xs font-light ${
                      on ? "text-[#faf8f5]/70" : "text-[#6e675e]"
                    }`}
                  >
                    {p.cadence}
                  </p>

                  {/* Price */}
                  <div className="mt-8 flex items-baseline">
                    <span className="font-serif text-4xl sm:text-5xl font-light">
                      ${p.price}
                    </span>
                    <span
                      className={`ml-1.5 text-sm font-light ${
                        on ? "text-[#faf8f5]/60" : "text-[#9c958a]"
                      }`}
                    >
                      / dispatch
                    </span>
                  </div>

                  {/* Inclusion Details */}
                  <div
                    className={`mt-6 pt-5 border-t space-y-2 text-xs font-light ${
                      on ? "border-[#faf8f5]/15 text-[#faf8f5]/85" : "border-[#13201c]/8 text-[#2b2824]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Check size={13} className={on ? "text-[#b39b7d]" : "text-[#678478]"} />
                      <span>{p.bars}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={13} className={on ? "text-[#b39b7d]" : "text-[#678478]"} />
                      <span>Unbleached Linen Wrap & Seal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={13} className={on ? "text-[#b39b7d]" : "text-[#678478]"} />
                      <span>Complimentary Carbon-Neutral Courier</span>
                    </div>
                  </div>
                </div>

                <p
                  className={`mt-8 text-[11px] italic font-serif ${
                    on ? "text-[#faf8f5]/60" : "text-[#9c958a]"
                  }`}
                >
                  {p.note}
                </p>
              </button>
            );
          })}
        </div>

        {/* CTA & Reassurance */}
        <Reveal className="mt-14 flex flex-col items-center gap-4">
          <MagneticButton className="group inline-flex items-center gap-3.5 bg-[#13201c] px-9 py-4 text-[10.5px] tracking-[0.26em] text-[#faf8f5] uppercase font-medium shadow-[0_12px_28px_rgba(19,32,28,0.12)] hover:bg-[#0b1512]">
            <span>Begin With {plans.find((p) => p.id === active)?.name}</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1.5"
            />
          </MagneticButton>

          <div className="flex items-center gap-2 text-[9px] tracking-[0.24em] text-[#9c958a] uppercase">
            <PackageOpen size={12} />
            <span>Cancel, pause, or switch formulas at any moment</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
