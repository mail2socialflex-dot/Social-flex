import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { HeroMascot } from "./HeroMascot";
import { ScrollIndicator } from "./ScrollIndicator";
import { ActionButton, Magnetic } from "./primitives";
import { WhatsAppCTAButton } from "./WhatsAppCTA";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#050505] pt-20 lg:pt-22 min-h-screen flex items-center">
      {/* Background Environment */}
      <HeroBackground />

      {/* 12-Column Responsive Grid Hero Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-12 items-center gap-6 px-5 lg:gap-12 lg:px-10 py-6 lg:py-0">
        {/* LEFT CONTENT (7 Columns Desktop, 12 Columns Mobile) */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          {/* Top Row: Eyebrow + Headline (with Mobile Mascot on the Right Side) */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 label-xs text-xs tracking-[0.16em] text-muted-foreground/90 uppercase backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  WE MAKE
                </span>
              </motion.div>

              {/* Main Display Headline: BRANDS MATTER. */}
              <h1 className="mt-4 sm:mt-6 flex flex-col gap-1 sm:gap-2 display text-[clamp(46px,7.5vw,136px)] leading-[0.98] tracking-[0.012em] font-normal uppercase select-none">
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    className="block text-[#F5F5F5]"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.85, delay: 0.2, ease }}
                  >
                    BRANDS
                  </motion.span>
                </span>
                <span className="block overflow-hidden pt-0.5">
                  <motion.span
                    className="block text-primary"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.85, delay: 0.35, ease }}
                    style={{
                      textShadow: "0 0 65px color-mix(in oklab, var(--primary) 50%, transparent)",
                    }}
                  >
                    MATTER<span className="inline-block ml-[0.15em]">.</span>
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* MOBILE ONLY: Mascot positioned on the RIGHT side of the first page */}
            <div className="md:hidden shrink-0 w-[125px] sm:w-[160px] pt-1">
              <HeroMascot />
            </div>
          </div>

          {/* Secondary Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease }}
            className="mt-7 font-sans text-xl font-bold leading-[1.35] tracking-tight text-foreground sm:text-2xl"
          >
            Strategy. Creativity. Content. Digital.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-[1.8] text-muted-foreground tracking-normal"
          >
            We combine strategy, creativity and technology to build brands that people
            remember — not just brands people see.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72, ease }}
            className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary Red Pill Button */}
            <ActionButton href="#work" as="a" variant="solid" className="h-[52px] px-8 text-xs">
              EXPLORE OUR WORK
            </ActionButton>

            {/* WhatsApp Business CTA */}
            <WhatsAppCTAButton />

            {/* Secondary Circular Play Button */}
            <Magnetic>
              <a href="#about" className="group flex items-center gap-3.5 outline-none">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/5 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_var(--primary)]">
                  <Play className="h-4 w-4 fill-primary text-primary transition-colors group-hover:fill-primary-foreground group-hover:text-primary-foreground" />
                </span>
                <span className="label-xs text-xs text-foreground transition-colors group-hover:text-primary">
                  OUR STORY
                </span>
              </a>
            </Magnetic>
          </motion.div>

          {/* Key Agency Proof Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.85, ease }}
            className="mt-11 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/10 pt-6"
          >
            <div>
              <p className="display text-2xl sm:text-3xl font-bold text-foreground">100+</p>
              <p className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider mt-0.5">
                Campaign Projects
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/10" />
            <div>
              <p className="display text-2xl sm:text-3xl font-bold text-primary">10M+</p>
              <p className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider mt-0.5">
                Organic Views
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/10" />
            <div>
              <p className="display text-2xl sm:text-3xl font-bold text-foreground">98%</p>
              <p className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider mt-0.5">
                Client Retention
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL: Interactive Mascot Scene (Desktop / Tablet) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="hidden md:flex md:col-span-5 items-center justify-center lg:justify-end relative py-4 lg:py-0"
        >
          <HeroMascot />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <ScrollIndicator />
    </section>
  );
}
