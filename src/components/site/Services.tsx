import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Crown,
  Globe,
  Info,
  Megaphone,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { ActionButton, Reveal, SectionLabel } from "./primitives";
import { PACKAGE_CATEGORIES } from "@/data/packageData";
import { WhatsAppIcon } from "./WhatsAppCTA";

/* ---------------- SECTION 1 DATA: SERVICES ---------------- */
type ServiceCategory = {
  no: string;
  id: string;
  title: string;
  tagline: string;
  Icon: typeof Target;
  items: string[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    no: "01",
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    tagline: "Strategic campaigns & audience engagement built to drive real brand growth.",
    Icon: Megaphone,
    items: [
      "Social Media Management",
      "Content Strategy",
      "Campaign Management",
      "Audience Engagement",
      "Analytics & Insights",
    ],
  },
  {
    no: "02",
    id: "content-creative",
    title: "CONTENT & CREATIVE",
    tagline: "High-converting visual assets and cinematic video built to capture attention.",
    Icon: Clapperboard,
    items: [
      "Brand Videos",
      "Photography",
      "Reels",
      "Graphic Design",
      "Festival Creatives",
      "Product Content",
      "Video Editing",
    ],
  },
  {
    no: "03",
    id: "personal-branding",
    title: "PERSONAL BRANDING",
    tagline: "Positioning leaders and founders as trusted authorities in their industry.",
    Icon: Crown,
    items: [
      "Brand Strategy",
      "Professional Shoots",
      "Page Management",
      "Content Planning",
      "Video & Reels",
    ],
  },
];

/* ---------------- SECTION 2 DATA: VIDEO TYPES ---------------- */
type VideoType = {
  id: string;
  title: string;
  tag: string;
  description: string;
  highlights: string;
};

const VIDEO_TYPES: VideoType[] = [
  {
    id: "reels",
    title: "Reels",
    tag: "SHORT-FORM VIRALITY",
    description: "Short, punchy vertical videos engineered to captivate feeds, hook viewers instantly, and trigger platform algorithms.",
    highlights: "Hook-driven pacing • Dynamic cuts • High retention",
  },
  {
    id: "long-form",
    title: "Long Form",
    tag: "CINEMATIC STORYTELLING",
    description: "In-depth video content that communicates brand depth, educates your audience, and builds unshakable authority.",
    highlights: "High production value • Narrative structure • Deep engagement",
  },
  {
    id: "ai-reel",
    title: "AI Reel + Voiceover",
    tag: "AI-POWERED SPEED",
    description: "High-converting short-form reels backed by realistic AI voice synthesis, smart captions, and rapid iteration.",
    highlights: "Crystal-clear voiceovers • Rapid delivery • Scalable production",
  },
  {
    id: "ai-long-form",
    title: "AI Long Form + Voiceover",
    tag: "SCALABLE PRODUCTION",
    description: "Comprehensive long-form video production streamlined with intelligent AI audio workflows and precise narration.",
    highlights: "Structured scripts • AI voice integration • High efficiency",
  },
  {
    id: "vlogs",
    title: "Vlogs",
    tag: "AUTHENTIC CONNECTION",
    description: "Behind-the-scenes, human-first video content that builds raw authenticity and personal rapport with your community.",
    highlights: "Relatable storytelling • Community trust • Human presence",
  },
];

const CATEGORY_TABS = [
  { id: "personal-branding", label: "Personal Branding", icon: Crown },
  { id: "brand-creation", label: "Brand Creation", icon: Sparkles },
  { id: "seo-visibility", label: "SEO & Google Visibility", icon: Globe },
  { id: "meta-ads", label: "Meta Ads & Performance", icon: TrendingUp },
] as const;

export function Services() {
  const [activeVideo, setActiveVideo] = useState<string>("reels");
  const [expandedCard, setExpandedCard] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("personal-branding");

  const toggleMobileExpand = (id: string) => {
    setExpandedCard((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="services" className="relative grain overflow-hidden py-20 lg:py-32">
      {/* Background glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[900px] -translate-x-1/2 opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1440px] px-5 lg:px-10 space-y-28 lg:space-y-40">
        
        {/* ============================================================ */}
        {/* SECTION 1 — WHAT WE DO (SERVICES)                             */}
        {/* ============================================================ */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/60">
            <Reveal>
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="mt-4 display text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98]">
                WHAT WE <span className="text-primary">DO.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm sm:text-base leading-[1.7] text-muted-foreground">
                We combine strategy, cinematic production, and digital marketing to build
                brands people remember — not just brands people see.
              </p>
            </Reveal>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat, idx) => {
              const isExpanded = !!expandedCard[cat.id];
              return (
                <Reveal key={cat.id} delay={idx * 0.1}>
                  <article className="group relative flex flex-col justify-between h-full rounded-2xl border border-border/80 bg-rich/80 p-7 sm:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_20px_60px_-20px_var(--primary)]">
                    {/* Hover Red Gradient Overlay */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(100% 70% at 50% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 75%)",
                      }}
                    />

                    <div className="relative z-10">
                      {/* Card Header */}
                      <div className="flex items-center justify-between">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_var(--primary)]">
                          <cat.Icon className="h-6 w-6" />
                        </div>
                        <span className="font-cond text-sm font-bold tracking-widest text-muted-foreground/60">
                          {cat.no}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="mt-8 font-sans text-xl sm:text-2xl font-bold uppercase tracking-normal leading-[1.3] text-foreground">
                        {cat.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                        {cat.tagline}
                      </p>

                      {/* Mobile Expand Toggle Button */}
                      <button
                        type="button"
                        onClick={() => toggleMobileExpand(cat.id)}
                        className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary sm:hidden"
                      >
                        {isExpanded ? "Show Less" : "View Services (" + cat.items.length + ")"}
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>

                      {/* Services List */}
                      <div className={"mt-6 border-t border-border/60 pt-6 transition-all " + (isExpanded ? "block" : "hidden sm:block")}>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/90 mb-4">
                          Key Offerings
                        </span>
                        <ul className="space-y-3">
                          {cat.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                                <Check className="h-3 w-3" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="relative z-10 mt-8 pt-6 border-t border-border/40">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                      >
                        Inquire For {cat.title.split(" ")[0]}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>


        {/* ============================================================ */}
        {/* SECTION 2 — VIDEO. BUILT FOR ATTENTION.                        */}
        {/* ============================================================ */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <SectionLabel>Format Specialization</SectionLabel>
              <h2 className="mt-4 display text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.98]">
                VIDEO. <span className="text-primary">BUILT FOR ATTENTION.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-[1.75] text-muted-foreground">
                We craft specialized video formats designed to break scroll fatigue and retain viewer focus.
              </p>
            </Reveal>
          </div>

          {/* Interactive Format Selector / List */}
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:gap-8 items-stretch">
            {/* Format Buttons List */}
            <div className="space-y-3">
              {VIDEO_TYPES.map((vt, i) => {
                const isActive = activeVideo === vt.id;
                return (
                  <Reveal key={vt.id} delay={i * 0.06}>
                    <button
                      type="button"
                      onClick={() => setActiveVideo(vt.id)}
                      onMouseEnter={() => setActiveVideo(vt.id)}
                      className={"w-full text-left rounded-xl p-5 sm:p-6 transition-all duration-300 flex items-center justify-between border " + (
                        isActive
                          ? "border-primary bg-primary/10 shadow-[0_0_30px_-10px_var(--primary)]"
                          : "border-border/60 bg-rich/60 hover:border-primary/50 hover:bg-rich"
                      )}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={"grid h-10 w-10 shrink-0 place-items-center rounded-lg font-cond text-base font-bold transition-colors " + (
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-border/60 text-muted-foreground"
                          )}
                        >
                          0{i + 1}
                        </span>
                        <div>
                          <span className="block font-cond text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
                            {vt.title}
                          </span>
                          <span className="text-[11px] font-bold tracking-widest text-primary/80 uppercase">
                            {vt.tag}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        className={"h-5 w-5 transition-all duration-300 " + (
                          isActive ? "text-primary translate-x-1" : "text-muted-foreground opacity-40"
                        )}
                      />
                    </button>
                  </Reveal>
                );
              })}
            </div>

            {/* Active Format Detail Card */}
            <div className="relative">
              {VIDEO_TYPES.map((vt) => {
                if (vt.id !== activeVideo) return null;
                return (
                  <Reveal key={vt.id} className="h-full">
                    <div className="h-full rounded-2xl border border-primary/50 bg-gradient-to-br from-rich via-rich/90 to-primary/10 p-8 sm:p-10 flex flex-col justify-between shadow-[0_0_50px_-20px_var(--primary)] backdrop-blur-md">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 label-xs text-primary mb-6">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>{vt.tag}</span>
                        </div>
                        <h3 className="display text-3xl sm:text-4xl text-foreground uppercase">
                          {vt.title}
                        </h3>
                        <p className="mt-5 text-base sm:text-lg leading-[1.75] text-muted-foreground">
                          {vt.description}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-primary/20">
                        <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                          Production Highlights
                        </span>
                        <p className="font-cond text-sm sm:text-base font-bold tracking-wide text-foreground">
                          {vt.highlights}
                        </p>
                        <div className="mt-8">
                          <ActionButton as="a" href="#contact">
                            Produce {vt.title}
                          </ActionButton>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>


        {/* ============================================================ */}
        {/* SECTION 3 — PACKAGES & PRICING                                */}
        {/* ============================================================ */}
        <div id="packages">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <SectionLabel>Pricing & Retainers</SectionLabel>
              <h2 className="mt-4 display text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.98]">
                SERVICE & <span className="text-primary">PRICING</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-[1.75] text-muted-foreground">
                Flexible services, customised solutions, and predictable high-caliber output built for sustained brand momentum.
              </p>
            </Reveal>

            {/* Category Switcher Tabs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {CATEGORY_TABS.map((tab) => {
                const isSelected = selectedCategory === tab.id;
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={
                      "group relative flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 " +
                      (isSelected
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_var(--primary)]"
                        : "border border-border/80 bg-rich/60 text-muted-foreground hover:border-primary/50 hover:text-foreground")
                    }
                  >
                    <TabIcon className={"h-4 w-4 transition-transform duration-300 " + (isSelected ? "scale-110" : "group-hover:scale-110")} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Display */}
          {(() => {
            const activeCategory = (PACKAGE_CATEGORIES.find((c) => c.id === selectedCategory) ||
              PACKAGE_CATEGORIES[0]) as (typeof PACKAGE_CATEGORIES)[number];

            return (
              <div className="mt-14 space-y-12">
                {/* Category Header Banner */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="font-cond text-xs font-bold tracking-[0.2em] text-primary uppercase">
                      {activeCategory.tagline}
                    </span>
                    <h3 className="mt-1 font-cond text-2xl sm:text-3xl font-bold uppercase tracking-wide text-foreground">
                      {activeCategory.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                      {activeCategory.items.length} Options Available
                    </span>
                  </div>
                </div>

                {/* Cards Grid */}
                <div
                  className={
                    "grid gap-6 items-stretch " +
                    (activeCategory.items.length === 4
                      ? "sm:grid-cols-2 lg:grid-cols-4"
                      : activeCategory.items.length === 5
                      ? "sm:grid-cols-2 lg:grid-cols-3"
                      : "md:grid-cols-3")
                  }
                >
                  {activeCategory.items.map((item, idx) => (
                    <Reveal key={item.name} delay={idx * 0.08}>
                      <div
                        className={
                          "relative h-full rounded-2xl p-7 backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 " +
                          (item.isPopular
                            ? "border-2 border-primary bg-gradient-to-b from-rich via-rich/95 to-primary/10 shadow-[0_0_50px_-15px_var(--primary)]"
                            : item.isOptional
                            ? "border border-primary/40 bg-rich/60 hover:border-primary hover:shadow-[0_20px_50px_-25px_var(--primary)]"
                            : "border border-border/80 bg-rich/70 hover:border-primary/60 hover:shadow-[0_20px_50px_-25px_var(--primary)]")
                        }
                      >
                        {/* Top: No + Badge */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-cond text-xs font-bold tracking-widest text-muted-foreground/60">
                              {item.no}
                            </span>
                            {item.badge && (
                              <span
                                className={
                                  "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider " +
                                  (item.isPopular
                                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_var(--primary)]"
                                    : "border border-primary/40 bg-primary/10 text-primary")
                                }
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h4 className="font-cond text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground leading-tight min-h-[3rem]">
                            {item.name}
                          </h4>

                          {/* Price Display */}
                          <div className="mt-4 pb-4 border-b border-border/50">
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                              <span className="font-cond text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                                {item.price}
                              </span>
                              {item.unit && (
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                  {item.unit}
                                </span>
                              )}
                            </div>
                            {item.note && (
                              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80 italic">
                                {item.note}
                              </p>
                            )}
                          </div>

                          {/* Deliverables List */}
                          <div className="mt-5">
                            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                              What's Included
                            </span>
                            <ul className="space-y-2.5">
                              {item.deliverables.map((del, dIdx) => (
                                <li
                                  key={dIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-foreground/90 leading-snug"
                                >
                                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/20 text-primary mt-0.5">
                                    <Check className="h-2.5 w-2.5" />
                                  </span>
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="mt-8 pt-5 border-t border-border/40 flex flex-col gap-2.5">
                          <a
                            href={`https://wa.me/917092280024?text=${encodeURIComponent(
                              `Hi Social Flex! I'm interested in the ${item.name} (${activeCategory.title}) package. Can we discuss?`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.35)]"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5" />
                            <span>Inquire on WhatsApp</span>
                          </a>
                          <a
                            href="#contact"
                            className="flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-border/70 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                          >
                            <span>Book via Form</span>
                            <ArrowRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* SEO Deliverables & Additional Services (if present) */}
                {activeCategory.coreDeliverables && (
                  <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-rich via-rich/95 to-primary/10 p-7 sm:p-9 shadow-[0_0_40px_-20px_var(--primary)]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-cond text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
                          Our Deliverables: Based On Packaging
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Engineered for search engine supremacy and consistent organic traffic.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {activeCategory.coreDeliverables.map((del, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-xs font-medium text-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add-ons / Additional Charges Table (if present) */}
                {activeCategory.addOns && (
                  <div className="rounded-2xl border border-white/10 bg-rich/60 p-7 sm:p-9 backdrop-blur-md">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                      <div>
                        <span className="font-cond text-xs font-bold tracking-[0.2em] text-primary uppercase">
                          A La Carte & Upgrades
                        </span>
                        <h4 className="font-cond text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
                          Additional Services & Charges
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Customise your setup with tailored add-on modules.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {activeCategory.addOns.map((add, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-center justify-between rounded-xl border border-border/70 bg-rich/80 px-5 py-4 transition-all duration-300 hover:border-primary/50"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-foreground">
                            {add.service}
                          </span>
                          <span className="font-cond text-sm font-bold text-primary pl-2">
                            {add.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terms & Conditions Box */}
                {activeCategory.terms && (
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Info className="h-4 w-4 text-primary" />
                      <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                        Terms & Conditions
                      </h4>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground leading-relaxed">
                      {activeCategory.terms.map((term, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })()}
        </div>


        {/* ============================================================ */}
        {/* FINAL CTA — HAVE A PROJECT IN MIND?                           */}
        {/* ============================================================ */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-r from-rich via-rich/90 to-primary/20 p-10 sm:p-16 text-center shadow-[0_0_80px_-30px_var(--primary)]">
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-20 blur-3xl"
              style={{ background: "var(--crimson)" }}
            />
            <SectionLabel>Let's Work Together</SectionLabel>
            <h2 className="mt-4 display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.98] text-foreground uppercase">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base leading-[1.75] text-muted-foreground">
              Ready to elevate your brand with high-impact strategy, video production, and digital marketing?
            </p>
            <div className="mt-8 flex justify-center">
              <ActionButton as="a" href="#contact" variant="solid" className="px-10 py-5 text-sm">
                LET'S TALK
              </ActionButton>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
