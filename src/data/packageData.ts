export interface ServiceItem {
  no: string;
  name: string;
  price: string;
  unit?: string;
  badge?: string;
  note?: string;
  isPopular?: boolean;
  isOptional?: boolean;
  deliverables: string[];
}

export interface PackageCategoryData {
  id: "personal-branding" | "brand-creation" | "seo-visibility" | "meta-ads";
  title: string;
  shortTitle: string;
  tagline: string;
  subtitle: string;
  items: ServiceItem[];
  terms?: string[];
  addOns?: { service: string; price: string }[];
  coreDeliverables?: string[];
}

export const PACKAGE_CATEGORIES: PackageCategoryData[] = [
  {
    id: "personal-branding",
    title: "Personal Branding",
    shortTitle: "Personal Brand",
    tagline: "SERVICE & PRICING",
    subtitle: "Flexible services. Customised solutions. Personal brand growth.",
    items: [
      {
        no: "01",
        name: "Reel Creation & Editing",
        price: "Starting at ₹1,699",
        unit: "/ Reel",
        badge: "HIGH ENGAGEMENT",
        note: "Final pricing depends on reel duration, editing complexity and production requirements. Shooting, if required, quoted separately.",
        deliverables: [
          "Professional reel editing",
          "Transitions, effects and animations",
          "Text overlays and subtitles",
          "Music and sound synchronisation",
        ],
      },
      {
        no: "02",
        name: "Creative Design & Photography",
        price: "Starting at ₹599",
        unit: "/ Creative",
        note: "Pricing varies based on design complexity, creative format and additional requirements.",
        deliverables: [
          "Personal branding posters",
          "Promotional creatives",
          "Photo-based designs",
          "Informational and announcement posts",
        ],
      },
      {
        no: "03",
        name: "Instagram Page Management",
        price: "₹1,999",
        unit: "/ Month",
        badge: "POPULAR RETAINER",
        isPopular: true,
        note: "Content creation and design charges are billed separately. Monthly posting limits will be agreed upon.",
        deliverables: [
          "Instagram profile and bio optimisation",
          "Content scheduling and publishing",
          "Caption and hashtag support",
          "Basic page monitoring",
        ],
      },
      {
        no: "04",
        name: "Personal Branding Strategy",
        price: "₹9,999",
        unit: "/ Month",
        badge: "OPTIONAL STRATEGY",
        isOptional: true,
        note: "This is an optional strategic service and can be skipped if not required.",
        deliverables: [
          "Personal brand positioning",
          "Target audience research",
          "Content pillars and strategy",
          "Monthly content calendar",
          "Competitor analysis",
          "Brand growth strategy",
          "Performance review and recommendations",
        ],
      },
    ],
    terms: [
      "All prices are starting prices unless specified.",
      "Services can be selected individually.",
      "Additional requirements will be quoted separately.",
      "Advertising budget, if required, is not included.",
      "Final pricing will be confirmed before project commencement.",
    ],
  },
  {
    id: "brand-creation",
    title: "Brand Creation",
    shortTitle: "Brand Creation",
    tagline: "SERVICE & PRICING",
    subtitle: "Build a distinctive brand identity that captures attention and creates impact.",
    items: [
      {
        no: "01",
        name: "Social Media Brand Setup & Optimisation",
        price: "₹2,999",
        unit: "One-time",
        badge: "BRAND FOUNDATION",
        deliverables: [
          "Social media profile setup and optimisation",
          "Bio and profile positioning",
          "Brand presentation and visual consistency",
          "Initial social media branding direction",
        ],
      },
      {
        no: "02",
        name: "Reel Creation & Content Production",
        price: "Starting at ₹2,500",
        unit: "/ Reel",
        badge: "VIRAL IMPACT",
        note: "Final pricing depends on reel duration, content requirements, production and editing complexity. Shooting quoted separately.",
        deliverables: [
          "Creative reel concepts",
          "Content planning and scripting",
          "Professional video editing",
          "Transitions, effects and animations",
          "Music and sound synchronisation",
        ],
      },
      {
        no: "03",
        name: "Creative Design & Photography",
        price: "Starting at ₹599",
        unit: "/ Creative",
        note: "Pricing varies depending on the creative concept, design complexity and production requirements.",
        deliverables: [
          "Brand promotional posters",
          "Product showcase creatives",
          "Photo-based designs",
          "Informational and announcement posts",
          "Brand-focused visual content",
        ],
      },
      {
        no: "04",
        name: "Social Media Page Management",
        price: "₹3,000",
        unit: "/ Month",
        badge: "MOST POPULAR",
        isPopular: true,
        note: "Content creation and creative design charges billed separately. Monthly posting limits agreed upon.",
        deliverables: [
          "Social media account management",
          "Content scheduling and publishing",
          "Caption and hashtag support",
          "Profile monitoring",
          "Brand consistency management",
        ],
      },
      {
        no: "05",
        name: "Branding & Marketing Strategy",
        price: "₹9,999",
        unit: "/ Month",
        badge: "OPTIONAL STRATEGY",
        isOptional: true,
        note: "Optional strategic service. Clients can skip it if they do not require ongoing strategy.",
        deliverables: [
          "Brand positioning and identity strategy",
          "Target audience research",
          "Competitor analysis",
          "Content pillars and strategy",
          "Monthly content calendar",
          "Brand awareness and growth strategy",
          "Performance review and recommendations",
        ],
      },
    ],
    terms: [
      "All prices are starting prices unless specified.",
      "Services can be selected individually.",
      "Additional requirements will be quoted separately.",
      "Advertising budget, if required, is not included.",
      "Final pricing will be confirmed before project commencement.",
    ],
  },
  {
    id: "seo-visibility",
    title: "SEO & Google Visibility",
    shortTitle: "SEO & Google",
    tagline: "WEBSITE & LOCAL OPTIMISATION",
    subtitle: "Website optimization, SEO strategies, and Google Business Profile optimization to improve your online visibility.",
    items: [
      {
        no: "01",
        name: "Google Visibility",
        price: "₹4,999",
        unit: "/ Month",
        badge: "LOCAL PROFILE ONLY",
        note: "Google Business Profile only. Ideal for local storefronts and service businesses.",
        deliverables: [
          "Google Business Profile optimisation",
          "Local keyword research and targeting",
          "Google Business weekly updates & posts",
          "Review management & response guidelines",
          "Monthly local visibility reporting",
        ],
      },
      {
        no: "02",
        name: "Local SEO Growth",
        price: "₹9,999",
        unit: "/ Month",
        badge: "RECOMMENDED",
        isPopular: true,
        note: "Complete package: Website + Google Business SEO.",
        deliverables: [
          "Website SEO optimisation",
          "Local keyword research and targeting",
          "Google Business Profile complete management",
          "On-page SEO improvements & meta tags",
          "Technical SEO monitoring & error checks",
          "Google Business updates & review management",
          "Monthly performance reporting",
        ],
      },
      {
        no: "03",
        name: "Advanced SEO",
        price: "₹17,999",
        unit: "/ Month",
        badge: "FULL DOMINANCE",
        note: "Full SEO + content marketing + link building for competitive niches.",
        deliverables: [
          "Comprehensive website technical SEO optimisation",
          "High-intent local & regional keyword targeting",
          "Google Business Profile dominance strategy",
          "On-page content enhancements & internal linking",
          "Content creation & targeted SEO blog strategy",
          "High-quality link building outreach",
          "Review management & conversion tracking",
          "In-depth monthly ROI & ranking performance report",
        ],
      },
    ],
    coreDeliverables: [
      "Website SEO optimisation",
      "Local keyword research and targeting",
      "Google Business Profile optimisation",
      "On-page SEO improvements",
      "Technical SEO monitoring",
      "Google Business updates",
      "Review management",
      "Monthly performance reporting",
    ],
    addOns: [
      { service: "Initial SEO Audit", price: "₹3,000" },
      { service: "Google Business Setup", price: "₹2,500" },
      { service: "Website SEO Audit", price: "₹3,500" },
      { service: "Additional SEO Blog", price: "₹1,000 – ₹1,500" },
      { service: "Website Technical Fixes", price: "Quoted separately" },
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads & Performance Marketing",
    shortTitle: "Meta Ads",
    tagline: "DATA-DRIVEN ROI CAMPAIGNS",
    subtitle: "Eye-catching ad creatives and data-driven, optimized campaigns designed to reach your goals.",
    items: [
      {
        no: "01",
        name: "Meta Ads Starter",
        price: "₹6,999",
        unit: "/ Month",
        badge: "MANAGEMENT FEE",
        note: "Management fee · Ad budget extra.",
        deliverables: [
          "1–2 campaign setups",
          "Audience research and targeting",
          "Up to 3 high-converting ad creatives",
          "Campaign monitoring and daily optimisation",
          "Ad copy and CTA strategy",
          "Monthly performance report",
        ],
      },
      {
        no: "02",
        name: "Meta Ads Growth",
        price: "₹9,999",
        unit: "/ Month",
        badge: "MOST POPULAR",
        isPopular: true,
        note: "Management fee · Ad budget extra.",
        deliverables: [
          "Up to 3 active campaign setups",
          "Up to 5 custom ad creatives",
          "Lead generation and WhatsApp campaigns",
          "A/B testing and retargeting audiences",
          "Weekly optimisation and adjustments",
          "Monthly performance & lead analysis report",
        ],
      },
      {
        no: "03",
        name: "Performance Marketing Pro",
        price: "₹14,999",
        unit: "/ Month",
        badge: "MAX SCALE",
        note: "Management fee · Ad budget extra.",
        deliverables: [
          "Multiple campaign strategies (Funnel architecture)",
          "Up to 8 custom ad creatives",
          "Advanced audience targeting & lookalikes",
          "Retargeting and conversion optimisation",
          "Creative performance testing & iterations",
          "Weekly optimisation and custom reporting",
        ],
      },
    ],
  },
];
