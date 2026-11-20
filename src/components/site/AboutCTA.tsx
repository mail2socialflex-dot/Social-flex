import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { ActionButton, Reveal } from "./primitives";
import { WhatsAppCTAButton } from "./WhatsAppCTA";

export function AboutCTA() {
  return (
    <section id="about" className="relative grain overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[520px] opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 lg:grid-cols-2 lg:px-10">
        {/* polaroid collage */}
        <Reveal>
          <div className="relative mx-auto flex max-w-md items-end justify-center pb-20 sm:pb-24">
            <figure className="w-[52%] -rotate-6 rounded-sm bg-foreground p-2 pb-8 shadow-[var(--shadow-cine)]">
              <img
                src={about1}
                alt="Creative team collaborating in a studio"
                loading="lazy"
                width={800}
                height={900}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <figure className="-ml-8 w-[56%] rotate-3 rounded-sm bg-foreground p-2 pb-8 shadow-[var(--shadow-cine)]">
              <img
                src={about2}
                alt="Designer standing in a photo studio"
                loading="lazy"
                width={800}
                height={900}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>

            <span className="absolute bottom-0 right-2 font-hand text-3xl leading-snug text-foreground sm:right-6 sm:text-4xl">
              Let's create
              <br />
              together
            </span>
            <svg
              aria-hidden
              viewBox="0 0 80 60"
              className="absolute bottom-4 left-6 h-12 w-14 text-primary sm:left-10 sm:h-14 sm:w-16"
            >
              <path
                d="M5 5 C 30 30, 40 45, 70 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M70 50 L58 46 M70 50 L64 38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.08] flex flex-col gap-2 sm:gap-3">
            <span className="block">Have A Story</span>
            <span className="block text-primary">Worth Telling?</span>
          </h2>
          <p className="mt-6 max-w-md text-sm sm:text-base leading-[1.75] sm:leading-[1.8] text-muted-foreground">
            Let's turn your ideas into something people remember. We're just a message away.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ActionButton as="a" href="#contact">
              Let's Talk
            </ActionButton>
            <WhatsAppCTAButton size="sm" />
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:mail2socialflex@gmail.com"
              className="group flex items-center gap-4 rounded-xl glass-panel px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--glow-red)]"
            >
              <Mail className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="min-w-0">
                <p className="label-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">mail2socialflex@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:801550204"
              className="group flex items-center gap-4 rounded-xl glass-panel px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--glow-red)]"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="min-w-0">
                <p className="label-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">801550204</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/socialflex.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl glass-panel px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--glow-red)]"
            >
              <Instagram className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="min-w-0">
                <p className="label-xs text-muted-foreground">Instagram</p>
                <p className="text-sm font-medium text-foreground">@socialflex.in</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/share/1CFB93LRsq/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl glass-panel px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--glow-red)]"
            >
              <Facebook className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="min-w-0">
                <p className="label-xs text-muted-foreground">Facebook</p>
                <p className="text-sm font-medium text-foreground">Social Flex</p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
