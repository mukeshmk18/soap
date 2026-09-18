export type ProductCategory = "all" | "face" | "body" | "soap" | "gift";

export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;
  ingredients: string[];
  price: number;
  category: Exclude<ProductCategory, "all">;
  image: string;
  hoverImage: string;
  featured?: boolean;
  notes?: {
    top: string;
    heart: string;
    base: string;
  };
  cureWeeks?: number;
  weight?: string;
  skinType?: string;
  batch?: string;
  harvest?: string;
};

export const img = {
  hero: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=2000&q=80",
  heroProduct: "https://images.unsplash.com/photo-1542038335240-86aea625b913?auto=format&fit=crop&w=1400&q=80",
  botanicalBars: "https://images.unsplash.com/photo-1672736810221-611f53c1fc47?auto=format&fit=crop&w=1400&q=80",
  herbal: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1400&q=80",
  sensitive: "https://images.unsplash.com/photo-1645622892695-d34014b2f5f4?auto=format&fit=crop&w=1400&q=80",
  seasonal: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
  story: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
  editorial1: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?auto=format&fit=crop&w=1400&q=80",
  editorial2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80",
  editorial3: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
  editorial4: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1400&q=80",
  olive: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
  shea: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
  coconut: "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=900&q=80",
  lavender: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=900&q=80",
  calendula: "https://images.unsplash.com/photo-1468327768560-75b45c03b37f?auto=format&fit=crop&w=900&q=80",
  oat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80",
  rosemary: "https://images.unsplash.com/photo-1515586000433-45406d8e667b?auto=format&fit=crop&w=900&q=80",
  aloe: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80",
  journal1: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
  journal2: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
  journal3: "https://images.unsplash.com/photo-1466692476866-aef6bf36f18d?auto=format&fit=crop&w=1400&q=80",
  ig1: "https://images.unsplash.com/photo-1542038335240-86aea625b913?auto=format&fit=crop&w=900&q=80",
  ig2: "https://images.unsplash.com/photo-1542038335240-86aea625b913?auto=format&fit=crop&w=900&q=80",
  ig3: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
  ig4: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
  ig5: "https://images.unsplash.com/photo-1672736810221-611f53c1fc47?auto=format&fit=crop&w=900&q=80",
  ig6: "https://images.unsplash.com/photo-1645622892695-d34014b2f5f4?auto=format&fit=crop&w=900&q=80",
};

export const products: Product[] = [
  {
    id: "calendula-oat",
    name: "Calendula & Oat Bar",
    short: "A quiet cleanse for easily unsettled, delicate skin.",
    description:
      "Cold-processed with colloidal oats and wild-harvested calendula petals. A low-foam, mineral-rich bar that leaves the lipid barrier calm, supple, and intact — the formulation we return to after wind, altitude, and winter.",
    ingredients: ["Tuscan Olive Oil", "Raw Shea Butter", "Colloidal Oat", "Calendula Petals"],
    price: 28,
    category: "soap",
    image: img.sensitive,
    hoverImage: img.calendula,
    featured: true,
    notes: {
      top: "Sweet Chamomile",
      heart: "Warm Golden Oat",
      base: "Raw Honeycomb",
    },
    cureWeeks: 6,
    weight: "145g · 5.1 oz",
    skinType: "Reactive & Delicate",
    batch: "No. 042",
    harvest: "Provence & Devon",
  },
  {
    id: "wild-rosemary",
    name: "Wild Rosemary Cleansing Bar",
    short: "Herbaceous clarity and resinous dawn botanical oils.",
    description:
      "Mountain rosemary and crushed olive leaf, saponified slowly over forty-two days for a dense, mineral-green bar. Bright without sharpness — crafted for those who desire scents resembling a wet morning garden, not a perfume.",
    ingredients: ["Cold-Pressed Olive Oil", "Virgin Coconut Oil", "Wild Rosemary", "Olive Leaf"],
    price: 32,
    category: "soap",
    image: img.botanicalBars,
    hoverImage: img.rosemary,
    featured: true,
    notes: {
      top: "Crushed Rosemary Leaf",
      heart: "Sweet Thyme",
      base: "Damp Pine Bark",
    },
    cureWeeks: 6,
    weight: "150g · 5.3 oz",
    skinType: "Balanced & Combination",
    batch: "No. 039",
    harvest: "Peloponnese, Greece",
  },
  {
    id: "evening-lavender",
    name: "Evening Lavender Ritual",
    short: "A slower, comforting lather for the twilight hour.",
    description:
      "High-altitude French lavender distilled in small copper stills, folded into a dense shea batter and air-cured for seven weeks. Powdery, dry florals with a silken glide that restores calm to tired skin.",
    ingredients: ["Organic Shea Butter", "True Lavender", "Coconut Oil", "Devon Spring Water"],
    price: 34,
    category: "soap",
    image: img.hero,
    hoverImage: img.lavender,
    featured: true,
    notes: {
      top: "French Lavender Buds",
      heart: "Clary Sage",
      base: "Warm Cedar Smoke",
    },
    cureWeeks: 7,
    weight: "145g · 5.1 oz",
    skinType: "All Skin Types",
    batch: "No. 044",
    harvest: "Haute-Provence",
  },
  {
    id: "olive-leaf-face",
    name: "Olive Leaf Face Cleanser",
    short: "A milky emulsion for unhurried morning washing.",
    description:
      "A non-foaming emulsion centered around stone-crushed extra-virgin olive oil and antioxidant-rich olive leaf extract. Rinses clean with warm water, leaving skin supple, rested, and deeply hydrated.",
    ingredients: ["Estate Olive Oil", "Aloe Leaf Juice", "Wild Olive Leaf", "Plant Glycerin"],
    price: 48,
    category: "face",
    image: img.olive,
    hoverImage: img.editorial2,
    featured: true,
    notes: {
      top: "Green Leaf",
      heart: "Bitter Neroli",
      base: "Pressed Olive Pulp",
    },
    cureWeeks: 4,
    weight: "200ml · 6.8 fl oz",
    skinType: "Dry, Normal & Mature",
    batch: "No. 018",
    harvest: "Andalucía, Spain",
  },
  {
    id: "shea-body-balm",
    name: "Shea Body Balm",
    short: "A dense, unfragranced botanical moisture seal.",
    description:
      "Hand-whipped unrefined shea butter and cold-pressed botanical seed oils. Left intentionally unscented to celebrate the warm, faintly nutty aroma of raw African karite butter. Melts quietly into warm skin.",
    ingredients: ["Unrefined Shea Butter", "Cold-Pressed Coconut Oil", "Jojoba", "Natural Tocopherol"],
    price: 42,
    category: "body",
    image: img.shea,
    hoverImage: img.editorial1,
    notes: {
      top: "Raw Shea Kernel",
      heart: "Sweet Almond",
      base: "Warm Earth",
    },
    weight: "180ml · 6.1 oz",
    skinType: "Dry & Sun-Exposed",
    batch: "No. 027",
    harvest: "Northern Ghana",
  },
  {
    id: "aloe-serum-bar",
    name: "Aloe Restore Serum Bar",
    short: "Concentrated solid facial nectar with soothing oat.",
    description:
      "Cast into a compact solid facial disk so that water is only introduced at the moment of ritual application. Cold-pressed aloe, colloidal oat, and botanical ceramides calm flushed or wind-chapped skin.",
    ingredients: ["Pure Aloe Vera Gel", "Fine Oat Lipid", "Nilotica Shea", "Rosemary Extract"],
    price: 38,
    category: "face",
    image: img.aloe,
    hoverImage: img.sensitive,
    notes: {
      top: "Cool Aloe Sap",
      heart: "Crushed Oat Grass",
      base: "Subtle Herbaceous Balm",
    },
    cureWeeks: 5,
    weight: "95g · 3.3 oz",
    skinType: "Sensitive & Reactive",
    batch: "No. 014",
    harvest: "Canary Islands",
  },
  {
    id: "coastal-sage",
    name: "Coastal Sage Gift Set",
    short: "Three artisanal bars, unbleached linen, handwritten card.",
    description:
      "A seasonal trio: Wild Rosemary, Evening Lavender, and Calendula & Oat, enveloped in raw linen with an embossed studio seal. The ritual set we dispatch when physical presence is absent but care is abundant.",
    ingredients: ["Extra-Virgin Olive Oil", "Shea Butter", "Coastal Sage", "French Lavender"],
    price: 86,
    category: "gift",
    image: img.seasonal,
    hoverImage: img.ig1,
    notes: {
      top: "Wild Sage Brush",
      heart: "Sea Lavender",
      base: "Weathered Driftwood",
    },
    cureWeeks: 6,
    weight: "3 × 145g Bars",
    skinType: "Complete Gift Set",
    batch: "Edition 012",
    harvest: "Coastal Devon",
  },
  {
    id: "quiet-morning",
    name: "Quiet Morning Ritual Set",
    short: "Cleanser, botanical bar, and whipped balm.",
    description:
      "Our Olive Leaf Face Cleanser, Calendula & Oat Bar, and pocket Shea Body Balm assembled in unbleached linen. Created as a mindful morning ritual for tranquil bathrooms and weekend escapes.",
    ingredients: ["Stone-Milled Olive Oil", "Colloidal Oat", "Shea Butter", "Aloe Vera"],
    price: 72,
    category: "gift",
    image: img.heroProduct,
    hoverImage: img.ig4,
    notes: {
      top: "Morning Dew",
      heart: "Quiet Chamomile",
      base: "Raw Linen",
    },
    cureWeeks: 6,
    weight: "Trio Ritual Set",
    skinType: "All Skin Types",
    batch: "Edition 008",
    harvest: "Provence & Devon",
  },
  {
    id: "chamomile-milk",
    name: "Chamomile Milk Bar",
    short: "Creamy plant milk and gentle Roman chamomile.",
    description:
      "Stone-ground oat milk and chamomile blossoms, poured into raw wooden moulds and hand-beveled. Formulated for the most sensitive complexions, children, and those who avoid essential oils.",
    ingredients: ["Oat Kernel Milk", "Roman Chamomile", "Olive Oil", "Cocoa Butter"],
    price: 26,
    category: "soap",
    image: img.editorial1,
    hoverImage: img.oat,
    notes: {
      top: "Gentle Chamomile Petal",
      heart: "Warm Oat Cream",
      base: "Subtle Raw Cocoa",
    },
    cureWeeks: 6,
    weight: "140g · 4.9 oz",
    skinType: "Infant & Ultra-Sensitive",
    batch: "No. 051",
    harvest: "Suffolk, UK",
  },
  {
    id: "vetiver-smoke",
    name: "Vetiver & Smoked Clay",
    short: "Mineral earth, Haitian root, and evening wood smoke.",
    description:
      "Deep Haitian vetiver root and activated volcanic clay. An grounding evening bar with a low, contemplative scent reminiscent of cedar closets, rainy loam, and warm stone.",
    ingredients: ["Olive Oil", "Organic Vetiver", "Coconut Oil", "French Green Clay"],
    price: 36,
    category: "soap",
    image: img.ig1,
    hoverImage: img.story,
    notes: {
      top: "Smoked Bergamot",
      heart: "Haitian Vetiver Root",
      base: "Charred Cedar & Earth",
    },
    cureWeeks: 8,
    weight: "155g · 5.5 oz",
    skinType: "Oily & Balanced",
    batch: "No. 031",
    harvest: "Les Cayes, Haiti",
  },
  {
    id: "rosehip-oil",
    name: "Rosehip Botanical Nectar",
    short: "Single-estate cold pressed virgin rosehip seed oil.",
    description:
      "Cold-pressed from wild Andean rosehip seeds and decanted into violet glass bottles. Two drops pressed gently into damp skin restores elasticity, natural luminosity, and barrier resilience.",
    ingredients: ["Wild Rosehip Seed Oil", "Organic Rosemary CO2 Extract"],
    price: 54,
    category: "body",
    image: img.editorial4,
    hoverImage: img.journal2,
    notes: {
      top: "Tart Wild Rosehip",
      heart: "Faint Nutty Amber",
      base: "Warm Botanical Seed",
    },
    weight: "50ml · 1.7 fl oz",
    skinType: "Dehydrated & Dull Skin",
    batch: "No. 009",
    harvest: "Patagonia, Chile",
  },
  {
    id: "clay-honey",
    name: "Clay & Raw Honey Bar",
    short: "A weekly facial reset in dense solid form.",
    description:
      "Kaolin clay, wildflower honey, and golden calendula oil tempered into a concentrated facial bar. Warm between damp palms to build a velvety cream mask, leave for two minutes, and rinse with tepid water.",
    ingredients: ["Cornish Kaolin Clay", "Raw Meadow Honey", "Calendula Oil", "Golden Jojoba"],
    price: 40,
    category: "face",
    image: img.botanicalBars,
    hoverImage: img.calendula,
    notes: {
      top: "Sweet Wild Meadow",
      heart: "Raw Comb Honey",
      base: "Mineral Porcelain Clay",
    },
    cureWeeks: 6,
    weight: "110g · 3.9 oz",
    skinType: "Congested & Dull Skin",
    batch: "No. 022",
    harvest: "Cornwall & Devon",
  },
];

export const collections = [
  {
    id: "botanical",
    title: "Botanical Bars",
    subtitle: "Everyday cold-process cleansing bars cured for six weeks in Devon.",
    provenance: "Batch 042 · 42 Days Cure",
    image: img.botanicalBars,
  },
  {
    id: "herbal",
    title: "Herbal Rituals",
    subtitle: "Resinous mountain herbs, distilled botanical essences, and balanced clays.",
    provenance: "Small Batch Distillations",
    image: img.herbal,
  },
  {
    id: "sensitive",
    title: "Sensitive & Fragrance-Free",
    subtitle: "Calming colloidal oats, pure chamomile milk, and quiet unperfumed formulas.",
    provenance: "Dermatologically Considered",
    image: img.sensitive,
  },
  {
    id: "seasonal",
    title: "Seasonal Harvest Editions",
    subtitle: "Limited handcrafted releases inspired by wild flora, solstices, and local blooms.",
    provenance: "Limited to 350 Units",
    image: img.seasonal,
  },
];

export const ingredients = [
  {
    name: "Tuscan Olive Oil",
    origin: "Lucca, Italy",
    process: "First Cold Pressing",
    description: "The golden backbone of every cure. Saponifies slowly to yield an exceptionally gentle bar with high squalene retention.",
    image: img.olive,
  },
  {
    name: "Wild Shea Butter",
    origin: "Tamale, Ghana",
    process: "Unrefined Hand-Whipped",
    description: "Ethically foraged from wild karite trees. Leaves an unhurried lipid envelope on the skin that shields against drying air.",
    image: img.shea,
  },
  {
    name: "Raw Coconut Oil",
    origin: "Sri Lanka",
    process: "Wet-Milled Centrifuge",
    description: "Formulated in measured restraint (under 18%) to produce a creamy, velvet lather without stripping sensitive skin.",
    image: img.coconut,
  },
  {
    name: "True Lavender",
    origin: "Sault, Provence",
    process: "Copper Alembic Steam Distilled",
    description: "Cultivated at 1,100m elevation. Dry, herbaceous, and peaceful — absent of any synthetic sweetness.",
    image: img.lavender,
  },
  {
    name: "Wild Calendula",
    origin: "Devonshire Meadows",
    process: "Solar Infused in Olive Oil",
    description: "Whole golden petals slow-steeped in summer sun for forty days before being hand-folded into saponifying batter.",
    image: img.calendula,
  },
  {
    name: "Colloidal Oat",
    origin: "Aberdeenshire, Scotland",
    process: "Stone-Ground Micronized",
    description: "Beta-glucan rich oats milled into microscopic powder that coats sensitized skin in a protective botanical cocoon.",
    image: img.oat,
  },
  {
    name: "Wild Rosemary",
    origin: "Peloponnese, Greece",
    process: "Sun-Dried & Crushed",
    description: "Wild coastal herb bursting with rosmarinic acid. Awakens the senses with crisp Mediterranean resin.",
    image: img.rosemary,
  },
  {
    name: "Inner-Leaf Aloe",
    origin: "Lanzarote, Canary Islands",
    process: "Cold Hand-Filleted",
    description: "Pure gel harvested from mature five-year leaves. Cool, quenching, and immediately recognized by human skin cells.",
    image: img.aloe,
  },
];

export const stories = [
  {
    index: "01",
    chapter: "CHAPTER I",
    title: "The Slower Method.\nCured Forty-Two Days.",
    copy: "We refuse steam kettles, chemical accelerators, and palm oil binders. Each bar is poured at room temperature into wooden moulds and cured on Devon pine racks for six weeks while excess water evaporates and natural vegetable glycerin stabilizes.",
    image: img.editorial1,
  },
  {
    index: "02",
    chapter: "CHAPTER II",
    title: "Lipids The Human Body\nAlready Understands.",
    copy: "Our skin recognized cold-pressed olive oil, raw shea, and crushed oat flour thousands of years before synthetic surfactants were engineered. We print our full harvest origins directly on each unbleached linen band.",
    image: img.olive,
  },
  {
    index: "03",
    chapter: "CHAPTER III",
    title: "Real Botanicals,\nNot Perfume Synthetics.",
    copy: "If a plant cannot be felt, observed, and valued by the dermis, it does not enter our formulas. We distill our herbs in small alembic stills and steep whole calendula blossoms in summer sun.",
    image: img.lavender,
  },
  {
    index: "04",
    chapter: "CHAPTER IV",
    title: "Packaging That\nReturns To Soil.",
    copy: "We utilize unbleached FSC cotton papers, vegetable-based soy inks, and pure organic twine. No plastic films, no glossy varnishes. Every wrap decomposes into garden compost in under forty days.",
    image: img.editorial3,
  },
];

export const testimonials = [
  {
    quote:
      "The Bubble Soap achieves what few skincare houses manage: it turns the utilitarian act of bathing into an unhurried, monastic ritual. The Calendula & Oat bar is an quiet masterpiece.",
    name: "British Vogue",
    location: "Beauty & Wellness Issue",
    attribution: "Editorial Review",
  },
  {
    quote:
      "Everything about this atelier feels deeply considered. The tactile linen paper, the raw beveled soap edges, and scents that recall damp Provençal gardens rather than department stores.",
    name: "Kinfolk Gallery",
    location: "Studio Feature",
    attribution: "Design & Living",
  },
  {
    quote:
      "After twenty years of reactive dermatitis, this is the only cleansing bar that leaves my skin settled, cool, and comfortable without a film. I travel with it everywhere.",
    name: "Dr. Geneviève Laurent",
    location: "Paris, France",
    attribution: "Patron Since 2021",
  },
  {
    quote:
      "We furnish our guest retreats with the Coastal Sage and Lavender sets. Guests routinely inquire where the soaps were commissioned before asking about anything else.",
    name: "Lord & Lady Kensington",
    location: "Cotswolds Sanctuary",
    attribution: "Private Retreats",
  },
];

export const articles = [
  {
    slug: "cold-process",
    volume: "VOL. IV · ESSAY 01",
    title: "The Alchemy of Cold-Process Saponification",
    dek: "Why patience is the essential ingredient, and what happens to botanical oils during forty-two days of pine-rack curing.",
    image: img.journal1,
    read: "7 min",
    date: "Autumn Harvest",
  },
  {
    slug: "botanical-oils",
    volume: "VOL. IV · ESSAY 02",
    title: "An Anatomy of Ancestral Lipids",
    dek: "A comparative study of Mediterranean olive, African karite, and cold-pressed botanical seeds skin instinctively trusts.",
    image: img.journal2,
    read: "6 min",
    date: "Late Summer",
  },
  {
    slug: "slower-ritual",
    volume: "VOL. IV · ESSAY 03",
    title: "In Praise of the Unhurried Bath",
    dek: "Fewer bottles. Cooler water. Reclaiming the quiet fifteen minutes at twilight from digital notifications.",
    image: img.journal3,
    read: "5 min",
    date: "Midsummer",
  },
];

export const instagram = [
  { src: img.ig1, caption: "Devon studio · Tuesday morning cure rack" },
  { src: img.ig2, caption: "Solar infusion · Devon calendula & virgin olive" },
  { src: img.ig3, caption: "Cold-press rosehip · Unfiltered nectar" },
  { src: img.ig4, caption: "Quiet Morning ritual set · Unbleached linen wrap" },
  { src: img.ig5, caption: "Chamomile milk cut · Forty-two days of rest" },
  { src: img.ig6, caption: "Kaolin & raw honey · Hand-beveled bars" },
];
