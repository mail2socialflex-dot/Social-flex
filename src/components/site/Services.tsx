import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Crown,
  Megaphone,
  Sparkles,
  Target,
} from "lucide-react";
import { ActionButton, Reveal, SectionLabel } from "./primitives";

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

/* ---------------- SECTION 3 DATA: PACKAGES ---------------- */
type PackagePlan = {
  no: string;
  name: string;
  badge?: string;
  description?: string;
  isCustom?: boolean;
  features: string[];
  ctaText: string;
};

const PACKAGES: PackagePlan[] = [
  {
    no: "01",
    name: "STARTER",
    description: "Essential content engine for brands ready to build a consistent digital footprint.",
    features: [
      "8 Reels / Month",
      "10 Creatives",
      "Page Handling",
    ],
    ctaText: "CHOOSE STARTER",
  },
  {
    no: "02",
    name: "GROWTH",
    badge: "MOST POPULAR",
    description: "Accelerated production output designed to dominate your niche and scale rapidly.",
    features: [
      "12 Reels / Month",
      "15 Creatives",
      "Page Handling",
      "Content Creation",
    ],
    ctaText: "CHOOSE GROWTH",
  },
  {
    no: "03",
    name: "CUSTOM",
    badge: "TAILORED SOLUTION",
    isCustom: true,
    description: "Built around your brand, goals and content requirements.",
    features: [
      "Tailored Reel & Video Output",
      "Custom Graphic & Campaign Assets",
      "Dedicated Creative Strategist",
      "End-to-End Page & Channel Management",
    ],
    ctaText: "LET'S BUILD YOUR PACKAGE →",
  },
];

export function Services() {
  const [activeVideo, setActiveVideo] = useState<string>("reels");
  const [expandedCard, setExpandedCard] = useState<Record<string, boolean>>({});

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
        {/* SECTION 3 — MONTHLY PACKAGES                                  */}
        {/* ============================================================ */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <SectionLabel>Content Retainers</SectionLabel>
              <h2 className="mt-4 display text-[clamp(2.8rem,6vw,5rem)] leading-[0.98]">
                MONTHLY <span className="text-primary">PACKAGES</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-[1.75] text-muted-foreground">
                Predictable, high-caliber content output designed for sustained momentum.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {PACKAGES.map((pkg, idx) => (
              <Reveal key={pkg.name} delay={idx * 0.1}>
                <div
                  className={"relative h-full rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 " + (
                    pkg.badge && pkg.badge.includes("POPULAR")
                      ? "border-2 border-primary bg-gradient-to-b from-rich via-rich/95 to-primary/10 shadow-[0_0_50px_-15px_var(--primary)]"
                      : "border border-border/80 bg-rich/70 hover:border-primary/60 hover:shadow-[0_20px_50px_-25px_var(--primary)]"
                  )}
                >
                  {/* Package Top Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-cond text-xs font-bold tracking-widest text-muted-foreground/60">
                        PACKAGE {pkg.no}
                      </span>
                      {pkg.badge && (
                        <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cond text-3xl font-bold uppercase tracking-wide text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                      {pkg.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-8 pt-6 border-t border-border/60">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                        What's Included
                      </span>
                      <ul className="space-y-3.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="mt-10 pt-6 border-t border-border/40">
                    <ActionButton
                      as="a"
                      href="#contact"
                      variant={pkg.isCustom || (pkg.badge && pkg.badge.includes("POPULAR")) ? "solid" : "outline"}
                      className="w-full justify-center"
                    >
                      {pkg.ctaText}
                    </ActionButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
