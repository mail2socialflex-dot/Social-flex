import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "./AnimatedLogo";
import { Magnetic } from "./primitives";
import { WhatsAppIcon, WHATSAPP_URL } from "./WhatsAppCTA";

const LINKS = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 h-20 lg:h-22 flex items-center border-b border-white/10",
          scrolled
            ? "bg-[#050505]/85 shadow-[0_10px_40px_-20px_var(--primary)] backdrop-blur-xl border-white/10"
            : "bg-[#050505]/60 backdrop-blur-md border-white/8",
        )}
      >
        <nav className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-3 lg:px-10">
          {/* LEFT: Logo */}
          <a href="#home" className="flex min-w-0 items-center" aria-label="Social Flex home">
            <AnimatedLogo imgClassName="h-10 shrink-0 lg:h-12" />
          </a>

          {/* CENTER: Navigation Links */}
          <ul className="hidden items-center justify-center gap-8 lg:flex">
            {LINKS.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "relative text-xs font-semibold uppercase tracking-[0.14em] py-2 px-1 transition-colors duration-300",
                      "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                      isActive
                        ? "text-primary font-bold after:scale-x-100 drop-shadow-[0_0_8px_var(--primary)]"
                        : "text-muted-foreground/80 hover:text-foreground",
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* RIGHT: Contact CTA */}
          <div className="flex items-center justify-end gap-3 lg:gap-4">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              aria-label="Open quick navigation (Command+K)"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <span>⌘K</span>
            </button>
            <Magnetic className="hidden lg:inline-block">
              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 py-1.5 pl-5 pr-1.5 label-xs transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_30%,transparent)]"
              >
                Let's Talk
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-primary-bright group-hover:shadow-[0_0_15px_var(--primary)]">
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </span>
              </a>
            </Magnetic>

            {/* Mobile Hamburger Button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-foreground transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-foreground transition-all duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 grain bg-[#050505] px-6 pt-28 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display block border-b border-white/10 py-4 text-4xl text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 label-xs text-primary-foreground shadow-[0_0_25px_var(--primary)]"
              >
                Let's Talk <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-6 py-4 label-xs font-semibold text-emerald-300 shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
