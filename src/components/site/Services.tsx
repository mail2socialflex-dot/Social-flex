import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Crown,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { ActionButton, Reveal, SectionLabel } from "./primitives";

/* ---------------- 4 CORE SERVICES & PACKAGES ---------------- */
type CoreService = {
  no: string;
  id: string;
  title: string;
  description: string;
  Icon: typeof Crown;
  included: string[];
  ctaText: string;
};

const CORE_SERVICES: CoreService[] = [
  {
    no: "SERVICE 01",
    id: "personal-branding",
    title: "PERSONAL BRANDING",
    description: "Build your personal identity and establish a powerful digital presence.",
    Icon: Crown,
    included: [
      "Reel Creation & Editing",
      "Creative Design & Photography",
      "Instagram Page Management",
      "Personal Branding Strategy",
    ],
    ctaText: "LET'S BUILD YOUR BRAND →",
  },
  {
    no: "SERVICE 02",
    id: "brand-creation",
    title: "BRAND CREATION",
    description: "Create a distinctive brand identity that captures attention and builds recognition.",
    Icon: Sparkles,
    included: [
      "Social Media Setup & Optimisation",
      "Brand Identity & Visual Design",
      "Reel & Content Production",
      "Social Media Management",
      "Branding & Marketing Strategy",
    ],
    ctaText: "CREATE YOUR IDENTITY →",
  },
  {
    no: "SERVICE 03",
    id: "seo-visibility",
    title: "SEO & GOOGLE VISIBILITY",
    description: "Improve your search presence and help customers discover your business.",
    Icon: Globe,
    included: [
      "Website SEO Optimisation",
      "Local Keyword Research",
      "Google Business Profile Management",
      "On-Page & Technical SEO",
      "Review Management",
      "Performance Reporting",
    ],
    ctaText: "BOOST YOUR VISIBILITY →",
  },
  {
    no: "SERVICE 04",
    id: "meta-ads",
    title: "META ADS & PERFORMANCE MARKETING",
    description: "Reach the right audience, generate quality leads and accelerate business growth.",
    Icon: TrendingUp,
    included: [
      "Meta Ads Campaign Management",
      "Audience Research & Targeting",
      "Lead Generation & WhatsApp Ads",
      "Ad Creative Development",
      "A/B Testing & Retargeting",
      "Campaign Optimisation & Reporting",
    ],
    ctaText: "SCALE YOUR BUSINESS →",
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
    description:
      "Short, punchy vertical videos engineered to captivate feeds, hook viewers instantly, and trigger platform algorithms.",
    highlights: "Hook-driven pacing • Dynamic cuts • High retention",
  },
  {
    id: "long-form",
    title: "Long Form",
    tag: "CINEMATIC STORYTELLING",
    description:
      "In-depth video content that communicates brand depth, educates your audience, and builds unshakable authority.",
    highlights: "High production value • Narrative structure • Deep engagement",
  },
  {
    id: "ai-reel",
    title: "AI Reel + Voiceover",
    tag: "AI-POWERED SPEED",
    description:
      "High-converting short-form reels backed by realistic AI voice synthesis, smart captions, and rapid iteration.",
    highlights: "Crystal-clear voiceovers • Rapid delivery • Scalable production",
  },
  {
    id: "ai-long-form",
    title: "AI Long Form + Voiceover",
    tag: "SCALABLE PRODUCTION",
    description:
      "Comprehensive long-form video production streamlined with intelligent AI audio workflows and precise narration.",
    highlights: "Structured scripts • AI voice integration • High efficiency",
  },
  {
    id: "vlogs",
    title: "Vlogs",
    tag: "AUTHENTIC CONNECTION",
    description:
      "Behind-the-scenes, human-first video content that builds raw authenticity and personal rapport with your community.",
    highlights: "Relatable storytelling • Community trust • Human presence",
  },
];

export function Services() {
  const [activeVideo, setActiveVideo] = useState<string>("reels");

  return (
    <section id="services" className="relative grain overflow-hidden py-20 lg:py-32">
      {/* Background glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[900px] -translate-x-1/2 opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1440px] px-5 lg:px-10 space-y-28 lg:space-y-36">
        {/* ============================================================ */}
        {/* SECTION 1 — OUR SERVICES & PACKAGES                           */}
        {/* ============================================================ */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/60">
            <Reveal>
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="mt-4 display text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98]">
                OUR <span className="text-primary">SERVICES.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base sm:text-lg leading-[1.65] text-muted-foreground">
                Complete digital solutions designed to build, position and grow your brand.
              </p>
            </Reveal>
          </div>

          {/* 4 Core Service Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {CORE_SERVICES.map((srv, idx) => (
              <Reveal key={srv.id} delay={idx * 0.1}>
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
                    {/* Header: Icon & Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_var(--primary)]">
                        <srv.Icon className="h-6 w-6" />
                      </div>
                      <span className="font-cond text-xs font-bold tracking-widest text-muted-foreground/70">
                        {srv.no}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-6 font-cond text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight text-foreground min-h-[3.2rem]">
                      {srv.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-[1.7] text-muted-foreground min-h-[3rem]">
                      {srv.description}
                    </p>

                    {/* What's Included */}
                    <div className="mt-6 border-t border-border/60 pt-6">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                        What's Included
                      </span>
                      <ul className="space-y-3">
                        {srv.included.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium leading-snug"
                          >
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/20 text-primary mt-0.5">
                              <Check className="h-2.5 w-2.5" />
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
                      className="group/btn relative flex h-12 w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_var(--primary)]"
                    >
                      <span>{srv.ctaText}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2 — CINEMATIC VIDEO PRODUCTION (FORMATS)              */}
        {/* ============================================================ */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/60">
            <Reveal>
              <SectionLabel>Video Production</SectionLabel>
              <h2 className="mt-4 display text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.98]">
                CINEMATIC <span className="text-primary">VIDEO.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm sm:text-base leading-[1.7] text-muted-foreground">
                From high-speed viral reels to high-production brand films, we shoot and
                edit for maximum viewer retention.
              </p>
            </Reveal>
          </div>

          {/* Interactive Video Switcher Container */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Vertical Nav List */}
            <div className="flex flex-col gap-2.5 lg:col-span-5">
              {VIDEO_TYPES.map((vt) => {
                const isActive = activeVideo === vt.id;
                return (
                  <button
                    key={vt.id}
                    onClick={() => setActiveVideo(vt.id)}
                    className={
                      "group relative flex flex-col items-start rounded-xl p-5 text-left transition-all duration-300 " +
                      (isActive
                        ? "bg-rich border-2 border-primary shadow-[0_0_30px_-5px_var(--primary)]"
                        : "border border-border/60 bg-rich/40 hover:border-primary/40 hover:bg-rich/80")
                    }
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-cond text-lg font-bold tracking-wide text-foreground">
                        {vt.title}
                      </span>
                      <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 font-cond text-[10px] font-bold uppercase tracking-wider text-primary">
                        {vt.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-[1.65] text-muted-foreground line-clamp-2">
                      {vt.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Showcase Card */}
            <div className="lg:col-span-7">
              {VIDEO_TYPES.map((vt) => {
                if (vt.id !== activeVideo) return null;
                return (
                  <Reveal key={vt.id}>
                    <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-rich via-rich/95 to-primary/10 p-8 sm:p-10 shadow-[0_0_50px_-20px_var(--primary)] backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-border/60 pb-6">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                            <Clapperboard className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="font-cond text-xs font-bold tracking-widest text-primary uppercase">
                              {vt.tag}
                            </span>
                            <h3 className="font-cond text-2xl sm:text-3xl font-bold uppercase tracking-wide text-foreground">
                              {vt.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <p className="mt-6 text-sm sm:text-base leading-[1.8] text-muted-foreground">
                        {vt.description}
                      </p>

                      <div className="mt-8 rounded-xl border border-border/80 bg-rich/60 p-5">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
                          Core Focus
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
