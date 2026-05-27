export type Industry =
  | "Trades"
  | "Auto"
  | "Wellness"
  | "Professional"
  | "Hospitality";

/**
 * Specific industry tags used by the /examples filter chips. Each example may
 * carry several tags (e.g. a roofer is also a contractor).
 */
export type ExampleTag =
  | "Roofers"
  | "Electricians"
  | "Contractors"
  | "Auto Detailers"
  | "Dentists"
  | "Law Firms"
  | "Wellness"
  | "Hospitality";

export type ExampleBusiness = {
  slug: string;
  name: string;
  industry: Industry;
  tags: ExampleTag[];
  tagline: string;
  pitch: string;
  features: string[];
  palette: {
    name: string;
    surface: string;
    surfaceDeep: string;
    ink: string;
    accent: string;
    accentSoft: string;
  };
  domain: string;
};

export const EXAMPLES: ExampleBusiness[] = [
  {
    slug: "summit-ridge-roofing",
    name: "Summit Ridge Roofing",
    industry: "Trades",
    tags: ["Roofers", "Contractors"],
    tagline: "Built for storm-damage calls and quote requests.",
    pitch:
      "Concept site for a residential roofer. The hero leads with a phone number; the homepage answers the three questions a homeowner asks during a storm.",
    features: [
      "Storm damage hotline above the fold",
      "Free roof inspection quote form",
      "Reviews and before-and-after gallery",
      "Service area map",
    ],
    palette: {
      name: "Slate Roof",
      surface: "#0b1b33",
      surfaceDeep: "#06122a",
      ink: "#faf7f2",
      accent: "#ff7a3d",
      accentSoft: "#fbe4cf",
    },
    domain: "summitridgeroofing.com",
  },
  {
    slug: "pinemark-electrical",
    name: "Pinemark Electrical",
    industry: "Trades",
    tags: ["Electricians", "Contractors"],
    tagline: "Residential electrician with same-day scheduling.",
    pitch:
      "Concept site for a residential electrician. Three service entry points (panel upgrades, EV chargers, generator install) lead directly to a quote form.",
    features: [
      "Three service entry points on homepage",
      "Click-to-call mobile header",
      "Same-day estimate request",
      "Licensed and bonded badges",
    ],
    palette: {
      name: "Switchplate Brass",
      surface: "#fcf8ef",
      surfaceDeep: "#f1e7cf",
      ink: "#23211a",
      accent: "#b88a2e",
      accentSoft: "#f5e7c3",
    },
    domain: "pinemarkelectrical.com",
  },
  {
    slug: "hartlands-detailing",
    name: "Hartland's Auto Detailing",
    industry: "Auto",
    tags: ["Auto Detailers"],
    tagline: "Mobile detailing with online booking.",
    pitch:
      "Concept site for a mobile detailer. Three packages, clear pricing, and a Cal.com-style booking flow as the primary CTA.",
    features: [
      "Three packages with transparent pricing",
      "Online booking calendar",
      "Photo gallery of recent work",
      "Service area ZIP lookup",
    ],
    palette: {
      name: "Garage Floor",
      surface: "#0d0e10",
      surfaceDeep: "#06070a",
      ink: "#f0f0ee",
      accent: "#22d3ee",
      accentSoft: "#cffafe",
    },
    domain: "hartlandsdetailing.com",
  },
  {
    slug: "fielder-locks",
    name: "Fielder Locks and Security",
    industry: "Auto",
    tags: ["Contractors"],
    tagline: "24/7 emergency locksmith for cars and homes.",
    pitch:
      "Concept site for a locksmith. Designed for someone reading on their phone outside a locked car at midnight.",
    features: [
      "Big tap-to-call button, always visible",
      "Emergency vs scheduled service split",
      "Live coverage area map",
      "Photo IDs and insurance shown by default",
    ],
    palette: {
      name: "Steel Pin",
      surface: "#fcfbf7",
      surfaceDeep: "#ece6d6",
      ink: "#1a1d22",
      accent: "#c5363f",
      accentSoft: "#f6dcde",
    },
    domain: "fielderlocks.com",
  },
  {
    slug: "kettle-hill-vet",
    name: "Kettle Hill Veterinary",
    industry: "Wellness",
    tags: ["Wellness"],
    tagline: "Family vet practice with online intake.",
    pitch:
      "Concept site for a small vet practice. Friendly but precise. New-patient intake on the homepage; everyday clients can find vaccines, refills, and appointment scheduling in two taps.",
    features: [
      "New patient intake form",
      "Refill request portal link",
      "Staff bios and practice hours",
      "Emergency vs routine appointment paths",
    ],
    palette: {
      name: "Meadow Sage",
      surface: "#f3f6f0",
      surfaceDeep: "#dde7d3",
      ink: "#22302a",
      accent: "#3b7d63",
      accentSoft: "#c8e0cd",
    },
    domain: "kettlehillvet.com",
  },
  {
    slug: "lumen-dental",
    name: "Lumen Dental Studio",
    industry: "Wellness",
    tags: ["Dentists", "Wellness"],
    tagline: "Boutique dental practice with clean booking.",
    pitch:
      "Concept site for a high-end dental practice. Editorial photography placeholder, clean booking, and a calm visual register that signals craft.",
    features: [
      "Procedure pages with pricing transparency",
      "Online booking widget",
      "Before-and-after smile gallery (concept)",
      "New patient packet PDF",
    ],
    palette: {
      name: "Porcelain",
      surface: "#fbfbfd",
      surfaceDeep: "#e8ecf4",
      ink: "#1f2a44",
      accent: "#1b73a3",
      accentSoft: "#dbeefa",
    },
    domain: "lumendental.com",
  },
  {
    slug: "rivermark-law",
    name: "Rivermark Law",
    industry: "Professional",
    tags: ["Law Firms"],
    tagline: "Solo estate planning attorney.",
    pitch:
      "Concept site for a solo law practice. Authority-forward design: a clear practice area page tree, a confidential intake form, and a calm, deliberate visual register.",
    features: [
      "Practice area page tree",
      "Confidential intake form",
      "Attorney bio and credentials",
      "Free 15-minute consultation request",
    ],
    palette: {
      name: "Library Oak",
      surface: "#faf7f2",
      surfaceDeep: "#ece4d3",
      ink: "#1a1f2c",
      accent: "#7c4422",
      accentSoft: "#f0e2d2",
    },
    domain: "rivermarklaw.com",
  },
  {
    slug: "northcap-accounting",
    name: "Northcap Accounting",
    industry: "Professional",
    tags: [],
    tagline: "Small business CPA with package pricing.",
    pitch:
      "Concept site for a small business accountant. Transparent monthly bookkeeping packages, clear pricing, structured intake.",
    features: [
      "Three monthly bookkeeping packages",
      "Tax-season vs year-round split",
      "Secure document intake",
      "Free fit-call request",
    ],
    palette: {
      name: "Ledger",
      surface: "#0e1525",
      surfaceDeep: "#070b15",
      ink: "#eef2ff",
      accent: "#a8b4dc",
      accentSoft: "#dde2f3",
    },
    domain: "northcapcpa.com",
  },
  {
    slug: "thornhill-bistro",
    name: "Thornhill Bistro",
    industry: "Hospitality",
    tags: ["Hospitality"],
    tagline: "Neighborhood restaurant with reservations and menu.",
    pitch:
      "Concept site for a neighborhood bistro. Menu, reservations, and hours are the entire site, in the right order, on a phone, fast.",
    features: [
      "Reservation widget above the fold",
      "Photo-led menu cards",
      "Private events form",
      "Map and parking notes",
    ],
    palette: {
      name: "Bistro Cream",
      surface: "#fcf6ea",
      surfaceDeep: "#f1e2c2",
      ink: "#2d1c10",
      accent: "#8a3e22",
      accentSoft: "#f3d9c4",
    },
    domain: "thornhillbistro.com",
  },
];

export const ALL_INDUSTRIES: Industry[] = [
  "Trades",
  "Auto",
  "Wellness",
  "Professional",
  "Hospitality",
];

/** Filter chips shown on /examples, in display order. */
export const EXAMPLE_FILTER_TAGS: ExampleTag[] = [
  "Roofers",
  "Electricians",
  "Contractors",
  "Auto Detailers",
  "Dentists",
  "Law Firms",
  "Wellness",
  "Hospitality",
];
