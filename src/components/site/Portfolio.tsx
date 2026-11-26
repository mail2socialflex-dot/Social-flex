import { ArrowUpRight, Image as ImageIcon, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ActionButton, Reveal, SectionLabel, TiltCard } from "./primitives";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/data/portfolioData";

const ease = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [paused, setPaused] = useState<Record<string, boolean>>({});

  const toggleVideo = (id: string) => {
    const el = videoRefs.current[id];
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPaused((s) => ({ ...s, [id]: false }));
    } else {
      el.pause();
      setPaused((s) => ({ ...s, [id]: true }));
    }
  };

  return (
    <section id="work" className="relative grain border-y border-border py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16 lg:px-10">
        {/* Header Column */}
        <div className="flex flex-col justify-between">
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[1.08] flex flex-col gap-2 sm:gap-3">
                <span className="block">Selected</span>
                <span className="block text-primary">Work<span className="inline-block ml-[0.15em] text-primary">.</span></span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <SectionLabel>Recent Projects</SectionLabel>
              <p className="mt-6 max-w-md text-sm sm:text-base leading-[1.75] sm:leading-[1.8] text-muted-foreground">
                A showcase of strategic branding, digital campaigns, and high-impact visual media tailored for ambitious brands.
              </p>
              <div className="mt-8">
                <ActionButton as="a" href="#contact" variant="outline">
                  View All Work
                </ActionButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid gap-8 sm:grid-cols-2"
        >
          {PORTFOLIO_PROJECTS.map((project: PortfolioProject, index: number) => {
            const hasVisual = Boolean(project.image || project.video);

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease },
                  },
                }}
                className="group relative"
              >
                <TiltCard maxTilt={5}>
                  <a
                    href={project.link || "#contact"}
                    data-cursor="VIEW"
                    aria-label={`${project.title} — ${project.category}`}
                    className="block rounded-2xl border border-border bg-rich/60 p-2 outline-none backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_12px_40px_-15px_color-mix(in_oklab,var(--primary)_20%,transparent)] focus-visible:ring-2 focus-visible:ring-primary"
                  >
                  {/* Thumbnail area */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-obsidian">
                    {project.video ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[project.id] = el;
                        }}
                        src={project.video}
                        poster={project.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      /* Sleek, neutral agency placeholder canvas */
                      <div className="relative h-full w-full bg-gradient-to-br from-obsidian via-rich to-obsidian p-6 flex flex-col justify-between overflow-hidden">
                        {/* Background radial highlight */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-45"
                          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
                        />

                        {/* Top info badge */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-obsidian/80 px-3 py-1 label-xs text-[10px] text-muted-foreground backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {project.tag || project.category}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground/60">{project.year || "2026"}</span>
                        </div>

                        {/* Center Watermark & Placeholder Icon */}
                        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                          <span className="font-display text-5xl sm:text-6xl font-bold tracking-normal text-foreground/10 transition-colors duration-500 group-hover:text-primary/20">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-1 flex items-center gap-1.5 text-[10px] label-xs tracking-widest text-muted-foreground/40 transition-colors duration-500 group-hover:text-muted-foreground/80">
                            <ImageIcon className="h-3 w-3 text-primary/70" />
                            PROJECT PLACEHOLDER
                          </span>
                        </div>

                        {/* Bottom Accent Bar */}
                        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border/30">
                          <span className="text-[10px] label-xs text-muted-foreground/60 uppercase">
                            SOCIAL FLEX STUDIO
                          </span>
                          <span className="h-1 w-8 rounded-full bg-primary/40 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                        </div>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                    />

                    {/* Arrow Button */}
                    <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-obsidian/80 text-foreground backdrop-blur-sm transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-4 pt-5 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="label-xs text-primary">{project.category}</span>
                      {project.year && (
                        <span className="text-xs text-muted-foreground/60 font-mono">{project.year}</span>
                      )}
                    </div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold uppercase leading-[1.3] tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="mt-2 text-sm leading-[1.75] text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    )}
                  </div>
                </a>
                </TiltCard>

                {/* Video Play/Pause button if video exists */}
                {project.video && (
                  <button
                    type="button"
                    onClick={() => toggleVideo(project.id)}
                    aria-pressed={paused[project.id] ? true : false}
                    aria-label={paused[project.id] ? `Play ${project.title}` : `Pause ${project.title}`}
                    className="absolute left-6 top-6 z-20 grid h-10 w-10 place-items-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm outline-none transition-all duration-300 hover:bg-primary hover:shadow-[0_0_15px_var(--primary)]"
                  >
                    {paused[project.id] ? (
                      <Play aria-hidden className="h-4 w-4 fill-current" />
                    ) : (
                      <Pause aria-hidden className="h-4 w-4 fill-current" />
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
