import { useState } from "react";
import { Check, Sparkles, Package } from "lucide-react";
import { useStore } from "../store";

export function CuratedPlansSection() {
  const { setCartOpen, addToCart } = useStore();
  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [addedPlan, setAddedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Starter Ritual",
      badge: "ESSENTIAL CARE",
      price: 32,
      cadence: "Monthly Delivery",
      barsCount: "2 Botanical Cured Bars",
      description: "Perfect for a calm, singular daily morning cleansing ritual.",
      features: [
        "2 Hand-Cut Cold-Process Bars",
        "Unbleached organic cotton pouch",
        "Free standard delivery",
        "Skip, pause or cancel anytime",
      ],
      featured: false,
    },
    {
      id: "regular",
      name: "Regular Sanctuary",
      badge: "MOST POPULAR",
      price: 58,
      cadence: "Every 2 Months",
      barsCount: "4 Seasonal Cured Bars",
      description: "Our most beloved plan. Timed perfectly with our seasonal batches.",
      features: [
        "4 Seasonal Artisan Bars",
        "Rotating guest botanical sample",
        "15% Privileged Patron saving",
        "Priority batch reservation",
        "Complimentary tracked shipping",
      ],
      featured: true,
    },
    {
      id: "platinum",
      name: "Platinum Curator",
      badge: "BEST VALUE",
      price: 82,
      cadence: "Every 3 Months",
      barsCount: "6 Bars + Botanical Balm",
      description: "The complete studio assortment for entire households.",
      features: [
        "6 Full-Size Botanical Bars",
        "Full 180ml Raw Shea Body Balm",
        "20% Archival Patron saving",
        "Embossed keepsake wooden box",
        "Complimentary express delivery",
      ],
      featured: false,
    },
  ];

  const handleSelectPlan = (plan: typeof plans[0]) => {
    setSelectedPlan(plan.id);
    addToCart({
      id: `plan-${plan.id}`,
      name: `Subscription: ${plan.name}`,
      short: `${plan.barsCount} · ${plan.cadence}`,
      description: plan.description,
      ingredients: ["Tuscan Olive Oil", "Raw Shea Butter", "Wild Botanicals"],
      price: plan.price,
      category: "soap",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
    });
    setAddedPlan(plan.id);
    setTimeout(() => {
      setAddedPlan(null);
      setCartOpen(true);
    }, 600);
  };

  return (
    <section className="relative bg-[#faf8f5] py-20 md:py-28 text-[#13201c]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Header: Matching the GIF */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a7356]">
            Unhurried Subscriptions
          </span>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#13201c]">
            You Choose a Plan, We Send You Soaps!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6e675e] font-light">
            Freshly cured bars dispatched directly from our Devon pine racks straight to your door.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((p) => {
            const isSelected = selectedPlan === p.id;
            const isAdded = addedPlan === p.id;

            return (
              <div
                key={p.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-500 ${
                  p.featured
                    ? "bg-[#13201c] text-[#faf8f5] shadow-2xl md:-translate-y-3 border-2 border-[#b39b7d]/60"
                    : "bg-white text-[#13201c] shadow-md border border-[#13201c]/10 hover:border-[#13201c]/25"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#b39b7d] px-4 py-1 text-[9px] font-semibold tracking-[0.22em] uppercase text-[#13201c] shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[9px] font-semibold tracking-[0.22em] uppercase ${
                        p.featured ? "text-[#b39b7d]" : "text-[#8a7356]"
                      }`}
                    >
                      {p.badge}
                    </span>
                    <span
                      className={`text-[9px] font-medium tracking-[0.16em] uppercase ${
                        p.featured ? "text-[#faf8f5]/60" : "text-[#6e675e]"
                      }`}
                    >
                      {p.cadence}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-light">
                    {p.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-light">
                      ${p.price}
                    </span>
                    <span
                      className={`text-xs ${
                        p.featured ? "text-[#faf8f5]/60" : "text-[#6e675e]"
                      }`}
                    >
                      / delivery
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-xs font-light ${
                      p.featured ? "text-[#faf8f5]/75" : "text-[#6e675e]"
                    }`}
                  >
                    {p.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2.5 pt-6 border-t border-current/10">
                    {p.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs">
                        <Check
                          size={14}
                          className={`shrink-0 mt-0.5 ${
                            p.featured ? "text-[#b39b7d]" : "text-[#678478]"
                          }`}
                        />
                        <span className={p.featured ? "text-[#faf8f5]/90" : "text-[#2b2824]"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPlan(p)}
                    className={`w-full rounded-full py-3.5 text-[10.5px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-sm ${
                      p.featured
                        ? isAdded
                          ? "bg-[#678478] text-white"
                          : "bg-[#b39b7d] text-[#13201c] hover:bg-white"
                        : isAdded
                        ? "bg-[#678478] text-white"
                        : "bg-[#13201c] text-[#faf8f5] hover:bg-[#253f37]"
                    }`}
                  >
                    {isAdded ? "Plan Selected ✓" : "Choose This Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
