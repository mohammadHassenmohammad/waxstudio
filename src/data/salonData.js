export const SALON_INFO = {
  name: "THE WAX STUDIO",
  subtitle: "PREMIUM UNISEX SALON",
  tagline: "YOUR LOOK. YOUR STATEMENT.",
  mission: "Where high-fashion hair architecture meets authentic European dermo-cosmetics and master bridal couture.",
  phones: [
    { display: "8833550184", raw: "918833550184", tel: "+918833550184" },
    { display: "9346308188", raw: "919346308188", tel: "+919346308188" }
  ],
  address: {
    line1: "2nd Floor, 82-2-2, Chivukula Complex",
    line2: "Vidyut Nagar Colony, A.V.Appa Rao Road",
    city: "Rajahmundry",
    district: "East Godavari",
    state: "Andhra Pradesh",
    pincode: "533103",
    full: "2nd Floor, 82-2-2, Chivukula Complex, Vidyut Nagar Colony, A.V.Appa Rao Road, Rajahmundry, East Godavari, A.P. - 533103"
  },
  hours: "10:00 AM – 8:30 PM (Daily)",
  policies: [
    "All haircuts are inclusive of detailed consultation, luxury hair wash, and blowdry finishing.",
    "Kids haircut is applicable for children aged 10 and below.",
    "For hygiene standards, hair services are avoided when lice or nits are found.",
    "A 24-hour patch test is recommended for first-time color clients.",
    "Makeups starting before 10:00 AM or after 5:30 PM attract convenience surcharges as per studio policy."
  ],
  brandsUsed: [
    "CASMARA Spain",
    "Jeannot Ceuticals Barcelona",
    "Hydrafacial MD",
    "Olaplex",
    "System Professional (Wella)",
    "Beauty Garage Professional",
    "Sebastian Professional",
    "Label.m London",
    "Dermalogica",
    "Comfort Zone"
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Featured Highlights", icon: "Sparkles" },
  { id: "hair", label: "Hair & Scalp Alchemy", icon: "Scissors" },
  { id: "casmara", label: "Dermo-Cosmetics & Facials", icon: "ShieldCheck" },
  { id: "mens", label: "Gentlemen's Grooming", icon: "UserCheck" },
  { id: "womens", label: "Women's Rituals", icon: "Heart" },
  { id: "nails", label: "Nail Couture", icon: "Palette" },
  { id: "bridal", label: "Bridal Studio", icon: "Crown" }
];

export const SALON_SERVICES = [
  // --- HAIR TEXTURES, BOND MULTIPLIERS & SCALP ALCHEMY ---
  {
    id: "hair-olaplex-treatment",
    category: "hair",
    name: "Olaplex Di-Sulfide Bond Multiplier",
    tagline: "Patented Cellular Bond Repair & Breakage Prevention",
    price: "₹4,500 onwards",
    originalPrice: null,
    badge: "Global Gold Standard",
    description: "Permanently restores broken disulfide bonds, drastically reduces breakage during color services, and restores virgin hair elasticity.",
    includes: ["No. 1 Bond Multiplier", "No. 2 Bond Perfector", "Strength & Elasticity Boost", "Colour Protection Shield"],
    image: "/images/olaplex_cover.png"
  },
  {
    id: "hair-system-express-alchemy",
    category: "hair",
    name: "System Professional Express Alchemy",
    tagline: "Instant Molecular Hair Transformation",
    price: "₹2,500 onwards",
    badge: "Wella Alchemy",
    description: "Targeted fast-action infusion designed to revive hair fiber vitality, luminosity, and ultra-silky softness.",
    includes: ["LipidCode™ Diagnosis", "Alchemy Emulsion Infusion", "Instant Conditioning", "Gloss Blowout"],
    image: "/images/system_pro_cover.png"
  },
  {
    id: "hair-system-intense-alchemy",
    category: "hair",
    name: "System Professional Intense Alchemy",
    tagline: "Deep Regenerative Capillary Reconstruction",
    price: "₹2,500 onwards",
    badge: "Deep Repair",
    description: "Intense multi-layer restorative treatment customized with System Professional concentrates to reverse deep fiber damage.",
    includes: ["Custom Alchemy Blend", "Micro-Vapor Penetration", "Intensive Mask Seal", "Luxeoil Finishing"],
    image: "/images/system_pro_cover.png"
  },
  {
    id: "hair-system-liquid-hair",
    category: "hair",
    name: "Keratin Restore — Liquid Hair Treatment",
    tagline: "Molecular Keratin & Amino Acid Refilling",
    price: "₹3,500 onwards",
    badge: "Molecular Keratin",
    description: "Advanced bio-identical liquid keratin infusion that deeply reconstructs damaged hair architecture from core to cuticle.",
    includes: ["Hydrolyzed Keratin Fill", "Essential Amino Acids", "Thermal Bonding Activation", "Cuticle Mirror Seal"],
    image: "/images/system_pro_cover.png"
  },
  {
    id: "hair-system-anti-dandruff",
    category: "hair",
    name: "System Professional Anti-Dandruff Scalp Care",
    tagline: "Dermacalm Purifying Scalp Therapy",
    price: "₹3,500 onwards",
    badge: "Scalp Health",
    description: "Clinical zinc pyrithione balance complex soothing scalp irritation, eliminating stubborn flakes, and balancing sebum.",
    includes: ["Dermacalm Scalp Cleanse", "Zinc Balance Infusion", "Anti-Fungal Therapy", "Soothing Scalp Massage"],
    image: "/images/system_pro_cover.png"
  },
  {
    id: "hair-system-anti-hairfall",
    category: "hair",
    name: "System Professional Anti-Hairfall Therapy",
    tagline: "Follicle Energizing & Root Anchoring Protocol",
    price: "₹3,500 onwards",
    badge: "Root Strength",
    description: "Caffeine, biotin, and lauric acid energy serum scientifically proven to strengthen root anchoring and reduce hair thinning.",
    includes: ["Energy Scalp Diagnosis", "Follicle Stimulation", "Biotin-Caffeine Complex", "Density Vitalizer"],
    image: "/images/system_pro_cover.png"
  },
  {
    id: "hair-bg-shea-butter",
    category: "hair",
    name: "Beauty Garage Shea Butter Retention Treatment",
    tagline: "Pure West African Ghana Shea-Nut Hair Butter",
    price: "₹4,500 onwards",
    badge: "Organic Luxury",
    description: "Formulated with 50-year aged pure African Shea nuts to deeply nourish, repair, and revitalize dry, frizzy, and damaged hair.",
    includes: ["Pure Shea Butter Infusion", "Silicon Cap Thermal Steam", "Root-to-Tip Hydration", "Frizz Immunity Seal"],
    image: "/images/beauty_garage_cover.png"
  },
  {
    id: "hair-bg-scalp-sense",
    category: "hair",
    name: "Beauty Garage Scalp Sense Treatment",
    tagline: "Bio-Ferment Dandruff & Sebum Defense",
    price: "₹3,500 onwards",
    badge: "Scalp Detox",
    description: "Bio-ferment formulation removing dead skin cells, controlling excess sebum, calming itchy scalp, and promoting new growth.",
    includes: ["Bio-Ferment Scalp Peeling", "Sebum Regulation", "Anti-Breakage Protection", "Hydra Soothe Rinse"],
    image: "/images/beauty_garage_cover.png"
  },
  {
    id: "hair-nanoplastia",
    category: "hair",
    name: "Nanoplastia Hair Treatment",
    tagline: "Ultimate Capillary Reconstruction & Mirror Gloss",
    price: "₹7,999",
    originalPrice: null,
    lengthTag: "ANY LENGTH",
    badge: "Signature",
    description: "Deep organic amino acid infusion delivering flawless straightness, total frizz elimination, and high-gloss vitality.",
    includes: ["Personal Hair Analysis", "Deep Clarifying Wash", "Nanoplastia Infusion", "Thermal Sealing & Styling"],
    image: "/images/page_5.png"
  },
  {
    id: "hair-botox",
    category: "hair",
    name: "Hair Botox Treatment",
    tagline: "Cellular Rejuvenation for Porous Hair",
    price: "₹6,999",
    originalPrice: null,
    lengthTag: "ANY LENGTH",
    badge: "Popular",
    description: "Anti-aging conditioning protocol that fills broken hair fibers, restores elasticity, and delivers supreme silkiness.",
    includes: ["Frizz Elimination", "Fiber Keratin Fill", "Deep Moisture Seal", "Blowout"],
    image: "/images/editorial/editorial_hair_texture.jpg"
  },
  {
    id: "hair-keratin",
    category: "hair",
    name: "Keratin Complex Treatment",
    tagline: "Long-Lasting Humidity & Frizz Armor",
    price: "₹5,999",
    originalPrice: null,
    lengthTag: "ANY LENGTH",
    badge: "Classic",
    description: "High-grade protein locking service that smooths unruly textures while retaining natural movement and body.",
    includes: ["Protein Enriched", "Thermal Protection", "3+ Month Manageability"],
    image: "/images/page_5.png"
  },
  {
    id: "hair-smoothening",
    category: "hair",
    name: "Hair Smoothening / Straightening",
    tagline: "Sleek, Pin-Straight Silk Transformation",
    price: "₹4,999",
    originalPrice: "₹8,000",
    discount: "38% OFF",
    lengthTag: "ANY LENGTH",
    badge: "Special Offer",
    description: "Transform coarse, frizzy curls into poker-straight, silky smooth tresses with premium nourishing straighteners.",
    includes: ["Texture Assessment", "Straightening Emulsion", "Neutralizing Gloss", "Finish Blowdry"],
    image: "/images/page_6.png"
  },
  {
    id: "hair-global-highlights",
    category: "hair",
    name: "Global Hair Color + Highlights Combo",
    tagline: "Dimensional Fashion Coloring for Women",
    price: "₹4,999",
    originalPrice: "₹8,000",
    discount: "38% OFF",
    badge: "Female Combo",
    description: "Full head rich base color paired with bespoke placement highlights tailored to compliment skin tone.",
    includes: ["Custom Shade Matching", "Global Color Base", "Balayage / Foil Highlights", "Color Lock Rinse"],
    image: "/images/page_7.png"
  },
  {
    id: "hair-spa-offer",
    category: "hair",
    name: "Seasonal Hair Spa Package",
    tagline: "Scalp Health & Moisture Recovery",
    price: "Pay 2 Get 1 FREE",
    badge: "Special Promo",
    description: "Intense moisture and anti-frizz scalp therapy. Purchase 2 hair spa sessions and enjoy 1 complimentary session.",
    includes: ["Scalp Stimulation Massage", "Deep Masque Infusion", "Micro-Mist Steam", "Rinse & Serum Seal"],
    image: "/images/page_3.png"
  },

  // --- CASMARA SPAIN, JEANNOT BARCELONA & HYDRAFACIAL CLINICAL DERMO-COSMETICS ---
  {
    id: "hydrafacial-signature",
    category: "casmara",
    name: "Clinical Hydrafacial MD",
    tagline: "Vortex-Fusion Deep Cleansing & Antioxidant Infusion",
    price: "₹5,500 onwards",
    badge: "Med-Spa Glow",
    description: "Non-invasive clinical facial delivering immediate deep pore extraction, intense hydration, improved skin texture, and zero downtime.",
    includes: ["Vortex Deep Extraction", "Hydra-Peel Exfoliation", "Antioxidant & Peptide Infusion", "Immediate Radiance"],
    image: "/images/hydrafacial_cover.png"
  },
  {
    id: "hydrafacial-jeannot",
    category: "casmara",
    name: "Hydrafacial with Jeannot Ceuticals",
    tagline: "Clinical Hydro-Exfoliation + Barcelona Actives",
    price: "₹7,500 onwards",
    badge: "Spanish Science",
    description: "Synergistic clinical facial combining Hydrafacial vortex extraction with premium Jeannot Barcelona active concentrates.",
    includes: ["Hydrafacial Deep Cleanse", "Jeannot Actives Infusion", "Targeted Skin Rejuvenation", "Hydra Soothing Seal"],
    image: "/images/hydrafacial_cover.png"
  },
  {
    id: "hydrafacial-jeannot-mask",
    category: "casmara",
    name: "Hydrafacial + Jeannot + Peel-Up Mask",
    tagline: "Full Clinical Hydro-Dermabrasion & Peel-Up Cryo Seal",
    price: "₹8,500 onwards",
    badge: "Advanced Clinical",
    description: "Complete treatment combining Hydrafacial technology, Jeannot Barcelona botanical serums, and a cooling firming Peel-Up Mask.",
    includes: ["Hydrafacial Vortex Tech", "Jeannot Triple-Action Actives", "Complete Peel-Up Mask", "Radiance Boosting Serum"],
    image: "/images/hydrafacial_cover.png"
  },
  {
    id: "hydrafacial-casmara",
    category: "casmara",
    name: "Hydrafacial with CASMARA Spain Products",
    tagline: "Clinical Hydro-Fusion with Spanish Monodose Actives",
    price: "₹10,500 onwards",
    badge: "Ultra Luxury",
    description: "Supreme clinical skin treatment uniting Hydrafacial deep hydro-dermabrasion with world-renowned CASMARA monodose phases.",
    includes: ["Hydrafacial MD Extractions", "CASMARA Monodose Phases 1-5", "Cellular Oxygenation", "Bio-Lipid Replenishment"],
    image: "/images/hydrafacial_cover.png"
  },
  {
    id: "hydrafacial-casmara-mask",
    category: "casmara",
    name: "Hydrafacial + CASMARA + Algae Peel-Off Mask",
    tagline: "The Pinnacle of Clinical & Spanish Dermo-Cosmetics",
    price: "₹11,500 onwards",
    badge: "Flagship Facial",
    description: "Our most comprehensive medical-grade facial. Combines full Hydrafacial technology, CASMARA 6-phase dermo-cosmetics, and the iconic Algae Peel-Off Mask.",
    includes: [
      "Hydrafacial Deep Vortex Suction",
      "Full CASMARA Monodose System",
      "Original Algae Peel-Off Mask (Eye & Lip Coverage)",
      "Cryo Drainage & Cellular Glow"
    ],
    image: "/images/casmara_3.png"
  },
  {
    id: "jeannot-instant-glow",
    category: "casmara",
    name: "Jeannot Instant Glow Vitamin C Programme",
    tagline: "Vitamin C, AHA, Orange Water & Pink Grapefruit",
    price: "₹6,500 / ₹7,500 with Mask",
    badge: "Vitamin C Glow",
    description: "Barcelona brightening programme loaded with active Vitamin C, AHAs, White Peony, and Betaine to illuminate skin and banish fatigue.",
    includes: ["Vitamin C Multi-Phase Cleanse", "Enzymatic AHA Peel", "White Peony Radiance Booster", "Optional Cryo Mask"],
    image: "/images/jeannot_cover.png"
  },
  {
    id: "jeannot-brilliance-white",
    category: "casmara",
    name: "Jeannot Brilliance White Detox Programme",
    tagline: "Vitamin B3, Ginseng, Bamboo & Punarnava Detox",
    price: "₹6,500 / ₹7,500 with Mask",
    badge: "Whitening Detox",
    description: "Targeted pigment correction and environmental detox therapy evening skin tone and erasing sun-induced blemishes.",
    includes: ["B3 Niacinamide Detox", "Ginseng & Bamboo Purify", "Melanin Balancing Serum", "Optional Cryo Mask"],
    image: "/images/jeannot_cover.png"
  },
  {
    id: "jeannot-infinite-youth",
    category: "casmara",
    name: "Jeannot Infinite Youth Pro-Collagen Programme",
    tagline: "Plant Stem Cells, Hyaluronic Acid & Ribose Firming",
    price: "₹6,500 / ₹7,500 with Mask",
    badge: "Pro-Collagen",
    description: "High-potency cellular firming treatment stimulating deep collagen synthesis, plumping fine lines, and restoring facial contours.",
    includes: ["Plant Stem Cell Infusion", "Hyaluronic Acid Plumping", "Soya & Vitamin E Shield", "Optional Cryo Mask"],
    image: "/images/jeannot_cover.png"
  },
  {
    id: "jeannot-hydra-boost",
    category: "casmara",
    name: "Jeannot Hydra Boost Advanced Soothing",
    tagline: "Green Caviar, Seaweed, a-Bisabolol & White Mushroom",
    price: "₹6,500 / ₹7,500 with Mask",
    badge: "Deep Hydration",
    description: "Intense hydration and calming therapy for sensitive, dehydrated skin utilizing oceanic green caviar and bio-actives.",
    includes: ["Green Caviar Moisture Drench", "Seaweed Bio-Minerals", "a-Bisabolol Calming", "Optional Cryo Mask"],
    image: "/images/jeannot_cover.png"
  },
  {
    id: "casmara-facial-full",
    category: "casmara",
    name: "Full Facial CASMARA Treatment",
    tagline: "Cosmética Sin Límites • Master Dermo-Cosmetic",
    price: "₹10,500",
    badge: "Ultra Luxury",
    description: "The gold standard in Spanish dermo-cosmetics. Complete 6-phase monodose protocol combating wrinkles, sagging, and skin dullness.",
    includes: [
      "Phases 1 to 6 Monodose Treatment",
      "RGnerin / Infinity / Skin Sensations / Goji Targeted Active Infusions",
      "AgeDefense Pro&Prebiotic 360° Anti-Aging",
      "Original Algae Peel-Off Facial Mask (Covers Eyelids & Lips)"
    ],
    image: "/images/casmara_3.png"
  },
  {
    id: "casmara-peel-up",
    category: "casmara",
    name: "CASMARA Original Peel-Up Mask",
    tagline: "World Pioneer Algae Peel-Off Mask",
    price: "₹2,500",
    badge: "Exclusive",
    description: "High-tech algae extract reducing skin surface temperature by 6°C for immediate cellular drainage, firming, and blemish reduction.",
    includes: ["Deep Pore Cleanse", "Targeted Active Concentrate", "Full Algae Peel-Off Mask", "Protective Seal"],
    image: "/images/casmara_4.png"
  },

  // --- GENTLEMEN'S GROOMING ---
  {
    id: "mens-signature-combo",
    category: "mens",
    name: "Men's Signature 5-in-1 Combo",
    tagline: "Complete Gentlemen's Executive Overhaul",
    price: "₹3,499",
    badge: "All-in-One",
    description: "Complete grooming suite covering hair, beard, scalp, de-tan, and facial luminosity for a crisp, polished presence.",
    includes: [
      "Designer Haircut",
      "Precision Shave / Beard Trim",
      "Hair Spa or Pedicure",
      "Face De-Tan Therapy",
      "Skin Brightening Facial"
    ],
    image: "/images/page_8.png"
  },
  {
    id: "mens-grooming-3999",
    category: "mens",
    name: "Men's Advanced Care Combo",
    tagline: "Scalp Defense & Tan Removal",
    price: "₹3,999",
    badge: "Targeted Care",
    description: "Formulated to eliminate stubborn dandruff, strengthen hair follicles, and erase sun pigmentation.",
    includes: [
      "Precision Haircut",
      "Beard Design & Line-up",
      "Anti-Dandruff Spa or Anti-Hairfall Treatment",
      "Advanced Tan Removal Facial"
    ],
    image: "/images/editorial/editorial_grooming.jpg"
  },
  {
    id: "mens-luxury-5999",
    category: "mens",
    name: "Men's Royal Grooming Experience",
    tagline: "Sublime Double Peel & Wella Scalp Therapy",
    price: "₹5,999",
    badge: "Elite Grooming",
    description: "Indulgent executive care combining chemical exfoliating peels with hands, feet, and hair revival.",
    includes: [
      "Advance Haircut & Styling",
      "Beard Design & Hot Towel",
      "Anti Hair Fall / Wella Hair Spa",
      "Full Hands Polish",
      "Luxury Pedicure",
      "Sublime Double Peel with Algae Biphasic Mask"
    ],
    image: "/images/page_9.png"
  },
  {
    id: "mens-pre-bridal-4999",
    category: "mens",
    name: "Pre-Bridal Groom Package",
    tagline: "Wedding-Ready Royal Radiance",
    price: "₹4,999",
    originalPrice: "₹7,000",
    discount: "Save ₹2,001",
    badge: "Groom Essential",
    description: "Tailored grooming package for grooms preparing for engagements, wedding festivities, and high-definition photography.",
    includes: [
      "Anti-Pollution Facial",
      "Face De-Tan Therapy",
      "Hands De-Tan Ritual",
      "Haircut & Beard Shave",
      "Restorative Hairspa",
      "Manicure & Pedicure"
    ],
    image: "/images/page_10.png"
  },
  {
    id: "mens-pre-bridegroom-premium",
    category: "mens",
    name: "Pre-Bridegroom Package — Premium",
    tagline: "Seasoul / Gold / Diamond Protocol",
    price: "₹7,500",
    badge: "Pre-Wedding",
    description: "Seven-step ceremony preparation featuring luxury facial formulations, 60-min spa, and color highlights.",
    includes: [
      "Seasoul / Gold / Diamond Facial",
      "Premium Shave & Beard Shape Up",
      "Deluxe Manicure & Deluxe Pedicure",
      "60 Mins Body Spa or Hair Spa",
      "Global Hair Colour or Cap Highlights",
      "Senior Stylist Haircut & Blowdry Styling"
    ],
    image: "/images/page_23.png"
  },
  {
    id: "mens-pre-bridegroom-luxury",
    category: "mens",
    name: "Pre-Bridegroom Package — Luxury",
    tagline: "Dermalogica / Comfort Zone Elite Care",
    price: "₹10,500",
    badge: "Platinum Groom",
    description: "The ultimate pre-wedding ritual featuring Dermalogica skincare, luxury body polish, and top stylist hair artistry.",
    includes: [
      "Dermalogica / Comfort Zone Facial",
      "Luxury Shave & Beard Design",
      "Luxury Manicure & Pedicure",
      "Luxury Body Polish or Protein Hair Treatment",
      "Global Colour or 30 Mins Hair Spa",
      "Top Stylist Haircut & Editorial Styling"
    ],
    image: "/images/page_23.png"
  },

  // --- WOMEN'S SKIN & BODY RITUALS ---
  {
    id: "womens-body-polishing",
    category: "womens",
    name: "Full Body Polishing & Glow Ritual",
    tagline: "Wrap, Aromatherapy Massage & Body Pack",
    price: "₹4,999",
    originalPrice: "₹8,000",
    discount: "38% OFF",
    badge: "Sensory Spa",
    description: "Complete sensory body revival that polishes away dead cells, stimulates blood flow, and leaves skin silk-smooth.",
    includes: [
      "Mineral Body Scrub Exfoliation",
      "Thermal Body Wrap Detox",
      "Relaxing Massage",
      "Hydrating Skin Pack Seal"
    ],
    image: "/images/page_11.png"
  },
  {
    id: "womens-advance-pedi-facial",
    category: "womens",
    name: "Advance Pedicure + Advance Facial Combo",
    tagline: "Includes Full Face & Neck De-Tan",
    price: "₹4,599*",
    badge: "Best Value",
    description: "Targeted rejuvenation to clarify sun-exposed skin while pampering tired feet with a luxury pedicure.",
    includes: [
      "Advance Clarifying Facial",
      "Face & Neck De-Tan Mask",
      "Luxury Foot Scrub & Pedicure",
      "Hydrating Foot Massage"
    ],
    image: "/images/page_12.png"
  },
  {
    id: "womens-facials-pay2get1",
    category: "womens",
    name: "Premium De-Tan Facials Series",
    tagline: "Get Rid of Unwanted Pigmentation",
    price: "Pay 2 Get 1 FREE",
    badge: "Multi-Session",
    description: "Multi-session skin brightening and sun defense protocol. Buy 2 sessions and receive 1 complimentary session.",
    includes: ["Antioxidant Cleansing", "Enzymatic De-Tan Scrub", "Deep Pore Extractions", "Brightening Cream Mask"],
    image: "/images/page_13.png"
  },

  // --- NAIL COUTURE & ART ---
  {
    id: "nails-gel-extensions",
    category: "nails",
    name: "Sculpted Gel Nail Extensions",
    tagline: "Flawless Length & Mirror Glass Top",
    price: "₹1,599",
    originalPrice: "₹3,000",
    discount: "47% OFF",
    badge: "Popular",
    description: "Full set of hard gel extensions custom shaped to your desired silhouette (almond, coffin, square, or stiletto).",
    includes: ["Cuticle Treatment", "Gel Extension Sculpting", "UV LED Curing", "High Gloss Top Coat"],
    image: "/images/editorial/editorial_nails.jpg"
  },
  {
    id: "nails-gel-polish",
    category: "nails",
    name: "Gel Nail Polish + Dry Manicure",
    tagline: "Zero-Chip Color Lasting 3+ Weeks",
    price: "₹799",
    originalPrice: "₹1,200",
    discount: "33% OFF",
    badge: "Express Glam",
    description: "Precision dry cuticle prep followed by saturated premium gel polish cured for high durability.",
    includes: ["Nail Buff & Shape", "Dry Cuticle Care", "2 Gel Polish Coats", "Cuticle Oil"],
    image: "/images/page_19.png"
  },
  {
    id: "nails-extensions-catalogue",
    category: "nails",
    name: "Bespoke 3D & Crystal Nail Art",
    tagline: "35% OFF on Complete Nail Services",
    price: "Starts from ₹3,200",
    badge: "35% OFF",
    description: "Bridal encapsulation, Swarovski crystal placement, chrome powder, and bespoke French gradient designs.",
    includes: ["Nail Art Consultation", "Full Extension Set", "3D Crystal Detailing", "Long-Lasting Seal"],
    image: "/images/page_17.png"
  },

  // --- BRIDAL STUDIO & MAKEUP ---
  {
    id: "bridal-pre-bride-5999",
    category: "bridal",
    name: "Bridal Pre-Bride 7-Service Package",
    tagline: "Complete Head-to-Toe Bridal Radiance",
    price: "₹5,999",
    badge: "Bridal Value",
    description: "Comprehensive pre-wedding salon package ensuring head-to-toe glow before ceremonial makeup.",
    includes: [
      "Haircut",
      "Hair Spa",
      "Advance Facial",
      "Full Body Bleaching",
      "Luxury Pedicure & Manicure",
      "Face & Neck De-Tan",
      "Under Eye Treatment"
    ],
    image: "/images/page_14.png"
  },
  {
    id: "bridal-pre-bride-7999",
    category: "bridal",
    name: "Pre-Bridal Luxury Transformation",
    tagline: "Includes Cartridge Bodywaxing & Polishing",
    price: "₹7,999",
    originalPrice: "₹15,000",
    discount: "47% OFF",
    badge: "Most Requested",
    description: "Flawless bridal preparation featuring gentle cartridge waxing, invigorating body polish, and gold standard facial care.",
    includes: [
      "Luxury Facial",
      "Body De-Tan Therapy",
      "Cartridge Full Body Wax",
      "Manicure & Pedicure",
      "Hairspa + Haircut",
      "Body Polishing",
      "Eyebrows & Upper Lip Threading"
    ],
    image: "/images/page_15.png"
  },
  {
    id: "bridal-party-9999",
    category: "bridal",
    name: "Party & Occasion Complete Glam",
    tagline: "Hairdo, Makeup & Saree Draping",
    price: "₹9,999",
    badge: "Event Package",
    description: "Complete reception and special occasion package for brides, bridesmaids, and event guests.",
    includes: [
      "Radiance Facial",
      "Manicure & Pedicure",
      "Full Arms Waxing",
      "Designer Hairdo Styling",
      "Event Makeup",
      "Traditional Saree Draping"
    ],
    image: "/images/page_16.png"
  },
  {
    id: "bridal-pkg-premium-9000",
    category: "bridal",
    name: "Pre-Bridal Package — Premium",
    tagline: "Seasoul / Gold / Diamond Skincare",
    price: "₹9,000",
    badge: "Royal Bride",
    description: "Luxury bridal ritual featuring gold/diamond facial, 60-min spa, full body waxing, and blowdry styling.",
    includes: [
      "Seasoul / Gold / Diamond Facial",
      "Full Body Waxing (Premium)",
      "Eyebrows & Upper Lip Threading",
      "Deluxe Manicure & Deluxe Pedicure",
      "Body Spa or Hair Spa (60 Mins)",
      "Senior Stylist Haircut & Blowdry"
    ],
    image: "/images/page_23.png"
  },
  {
    id: "bridal-pkg-luxury-12000",
    category: "bridal",
    name: "Pre-Bridal Package — Luxury",
    tagline: "Dermalogica / Comfort Zone Elite Care",
    price: "₹12,000",
    badge: "Platinum Bride",
    description: "The peak of luxury pre-wedding care with Dermalogica clinical facial, luxury body polish, and top stylist styling.",
    includes: [
      "Dermalogica / Comfort Zone Facial",
      "Full Body Waxing (Premium)",
      "Complete Threading",
      "Luxury Manicure & Pedicure",
      "Luxury Body Polish or Hair Spa (30 Mins)",
      "Top Stylist Haircut & Blowdry"
    ],
    image: "/images/page_23.png"
  },
  {
    id: "makeup-senior-artist",
    category: "bridal",
    name: "Makeup by Senior Artist",
    tagline: "Bridal, Reception or Special Occasion",
    price: "₹15,000 + GST",
    badge: "Senior Artist",
    description: "High-definition event makeup crafted with premium long-wear cosmetics for camera-perfect beauty.",
    includes: [
      "HD Event Makeup",
      "Custom Hair Styling",
      "Outfit / Saree Draping",
      "Regular False Eyelashes",
      "Nail Paint Change"
    ],
    image: "/images/editorial/editorial_bridal.jpg"
  },
  {
    id: "makeup-pg-signature",
    category: "bridal",
    name: "PG Signature Studio Makeup",
    tagline: "Flagship Couture Makeup Artistry",
    price: "₹19,500 + GST",
    badge: "Signature Tier",
    description: "Our highest level of bridal artistry. Includes Airbrushing with zero extra surcharge, mink/silk lashes, and aesthetic lenses.",
    includes: [
      "Signature HD / Airbrush Makeup (No Extra Surcharge)",
      "Sculpted Bridal Hair Architecture",
      "Precision Saree / Lehenga Draping",
      "Mink / Silk False Eyelashes",
      "Coloured Non-Powered Lenses",
      "Nail Paint Change"
    ],
    image: "/images/page_22.png"
  }
];

export const BRIDAL_ALACARTE_MENU = [
  { service: "Elegant Bride (Hair, Makeup & Saree Draping)", price: "₹11,000" },
  { service: "High-Definition Bridal (Hair, Makeup & Saree Draping)", price: "₹15,000" },
  { service: "Airbrush Bridal (Hair, Makeup & Saree Draping)", price: "₹19,500" },
  { service: "Groom Classic (Hair & Makeup)", price: "₹4,500" },
  { service: "Groom High-Definition (Hair & Makeup)", price: "₹6,500" },
  { service: "Groom Airbrush (Hair & Makeup)", price: "₹8,000" },
  { service: "Bridesmaids Hair & Makeup", price: "₹6,500" },
  { service: "Bridesmaids Saree Draping", price: "₹600" },
  { service: "Bridal Eye Makeup Only", price: "₹1,000" },
  { service: "Mini Makeup", price: "₹2,203" },
  { service: "Simple Makeup", price: "₹3,850" },
  { service: "Simple Hairdo", price: "₹1,650" },
  { service: "Advanced Hairdo", price: "₹2,750" },
  { service: "Hair Extensions", price: "By Consultation" },
  { service: "Outdoor Service (Within City)", price: "₹2,000" },
  { service: "Outdoor Service (Out of Station)", price: "₹5,000" },
  { service: "Venue Makeup — Rajahmundry (RJY)", price: "₹30,000 + GST" },
  { service: "Venue Makeup — Outstation / Overseas", price: "₹50,000 + GST" }
];

export const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: "High-Fashion Hair Architecture",
    category: "Hair",
    image: "/images/editorial/editorial_hero.jpg",
    aspect: "tall",
    description: "Precision texture sculpting & cinematic gloss"
  },
  {
    id: 2,
    title: "CASMARA European Skin Revival",
    category: "Skincare",
    image: "/images/casmara_1.png",
    aspect: "wide",
    description: "Spanish Algae Peel-Off mask dermo-cosmetics"
  },
  {
    id: 3,
    title: "Royal Indian Bridal Artistry",
    category: "Bridal",
    image: "/images/page_22.png",
    aspect: "tall",
    description: "PG Signature bridal makeup & lehenga draping"
  },
  {
    id: 4,
    title: "Precision Beard & Executive Fade",
    category: "Grooming",
    image: "/images/editorial/editorial_grooming.jpg",
    aspect: "square",
    description: "Gentlemen's bespoke grooming and detan care"
  },
  {
    id: 5,
    title: "Nanoplastia Mirror Silk Strands",
    category: "Hair",
    image: "/images/page_5.png",
    aspect: "wide",
    description: "Zero frizz organic restructuring treatment"
  },
  {
    id: 6,
    title: "Bespoke Jewel Gel Extensions",
    category: "Nails",
    image: "/images/editorial/editorial_nails.jpg",
    aspect: "square",
    description: "Sculpted gel architecture & luxury art"
  },
  {
    id: 7,
    title: "Traditional South Ceremonial Elegance",
    category: "Bridal",
    image: "/images/page_20.png",
    aspect: "tall",
    description: "Bridal studio saree draping & gold accents"
  },
  {
    id: 8,
    title: "Vibrant Global Hair & Balayage",
    category: "Hair",
    image: "/images/page_7.png",
    aspect: "wide",
    description: "Rich chromatic base and sunlit highlights"
  }
];
