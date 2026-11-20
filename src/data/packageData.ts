export interface ServiceItem {
  no: string;
  name: string;
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
  addOns?: string[];
  coreDeliverables?: string[];
}

export const PACKAGE_CATEGORIES: PackageCategoryData[] = [
  {
    id: "personal-branding",
    title: "Personal Branding",
    shortTitle: "Personal Brand",
    tagline: "CURATED DELIVERABLES",
    subtitle: "Flexible services. Customised solutions. Personal brand growth.",
    items: [
      {
        no: "01",
        name: "Reel Creation & Editing",
        badge: "HIGH ENGAGEMENT",
        note: "Customized for reel duration, editing complexity, and visual animations. Shooting support available.",
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
        badge: "VISUAL ASSETS",
        note: "Tailored to your aesthetic style, creative formats, and brand requirements.",
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
        badge: "POPULAR RETAINER",
        isPopular: true,
        note: "Dedicated end-to-end profile care with scheduled posting and active page monitoring.",
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
        badge: "OPTIONAL STRATEGY",
        isOptional: true,
        note: "Strategic roadmap for leaders and founders looking to build industry authority.",
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
      "Services can be selected individually or bundled as a cohesive monthly retainer.",
      "Custom deliverables scaled to your publishing frequency and brand goals.",
      "Dedicated creative strategist and video editors assigned to your profile.",
      "Scope and deliverables confirmed prior to project kickoff.",
    ],
  },
  {
    id: "brand-creation",
    title: "Brand Creation",
    shortTitle: "Brand Creation",
    tagline: "BRAND IDENTITY & RETENTION",
    subtitle: "Build a distinctive brand identity that captures attention and creates impact.",
    items: [
      {
        no: "01",
        name: "Social Media Brand Setup & Optimisation",
        badge: "BRAND FOUNDATION",
        note: "Complete digital storefront setup ensuring strong initial market positioning.",
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
        badge: "VIRAL IMPACT",
        note: "From creative concepts to high-end post-production. On-location shoot support available.",
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
        badge: "CREATIVE ENGINE",
        note: "Bespoke social posters, product highlights, and announcements.",
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
        badge: "MOST POPULAR",
        isPopular: true,
        note: "Daily consistency, active scheduling, and maintaining polished brand aesthetic.",
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
        badge: "OPTIONAL STRATEGY",
        isOptional: true,
        note: "Holistic marketing architecture, competitor benchmarking, and growth playbooks.",
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
      "Services can be selected individually or bundled into full-service agency retainers.",
      "Custom production packages structured to match your monthly campaign targets.",
      "Production timeline, deliverables, and revision rounds agreed upon before kickoff.",
      "Advertising budgets, if required, are managed with dedicated ad account setups.",
    ],
  },
  {
    id: "seo-visibility",
    title: "SEO & Google Visibility",
    shortTitle: "SEO & Google",
    tagline: "WEBSITE & LOCAL DOMINANCE",
    subtitle: "Website optimization, SEO strategies, and Google Business Profile optimization to improve your online visibility.",
    items: [
      {
        no: "01",
        name: "Google Visibility",
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
        badge: "RECOMMENDED",
        isPopular: true,
        note: "Complete package: Integrated Website + Google Business Profile SEO.",
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
        badge: "FULL DOMINANCE",
        note: "Full-scale SEO + ongoing content marketing + authority link building.",
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
      "Initial Comprehensive SEO Audit",
      "Google Business Profile Setup & Verification",
      "Website Architecture & Speed SEO Audit",
      "Targeted SEO Content & Blog Articles",
      "Custom Technical SEO & Schema Fixes",
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
        badge: "ESSENTIAL ENGINE",
        note: "Targeted campaigns focused on testing audience responses and building momentum.",
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
        badge: "MOST POPULAR",
        isPopular: true,
        note: "Multi-campaign architecture engineered for qualified inbound leads and direct WhatsApp chats.",
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
        badge: "MAX SCALE",
        note: "Comprehensive full-funnel performance marketing for aggressive growth.",
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
