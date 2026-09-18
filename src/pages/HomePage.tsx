import { Hero } from "../components/Hero";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { DarkCatalogSection } from "../components/DarkCatalogSection";
import { SeasonalBanner } from "../components/SeasonalBanner";
import { CuratedPlansSection } from "../components/CuratedPlansSection";
import { PressRibbon } from "../components/PressRibbon";

export function HomePage() {
  return (
    <div className="bg-[#faf8f5]">
      {/* 1. Atmospheric Botanical Hero (Matching Reference Screenshot) */}
      <Hero />

      {/* 2. 3-Column "Why Choose Us" Feature with Central Soap Visual */}
      <WhyChooseUs />

      {/* 3. Signature Dark Catalog Section with Deckle Edge & Category Filter Tabs */}
      <DarkCatalogSection />

      {/* 4. Seasonal Spotlight Promotional Banner with Deckle Borders */}
      <SeasonalBanner />

      {/* 5. Curated 3-Tier Subscription Plans ("You Choose a Plan, We Send You Soaps!") */}
      <CuratedPlansSection />

      {/* 6. Compact Press Accolades & Instagram Photo Ribbon */}
      <PressRibbon />
    </div>
  );
}
