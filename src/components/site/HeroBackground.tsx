import { motion, useScroll, useTransform } from "framer-motion";
import heroStudio from "@/assets/hero-studio.jpg";
import heroCamera from "@/assets/hero-camera.jpg";
import heroStairs from "@/assets/hero-stairs.jpg";

export function HeroBackground() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Primary Red Atmosphere Lighting Orbs (Balanced studio ambiance) */}
      <div
        aria-hidden
        className="animate-float-orb absolute -right-32 top-10 h-[600px] w-[600px] rounded-full opacity-35 blur-[160px]"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 68%)" }}
      />
      <div
        aria-hidden
        className="absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-30 blur-[150px]"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute left-1/3 top-1/2 h-[400px] w-[400px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
      />

      {/* Layered Studio Environment Imagery */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-25 mix-blend-screen">
        {/* Studio Camera Layer */}
        <div className="absolute right-[5%] top-[12%] h-[400px] w-[340px] overflow-hidden rounded-3xl border border-white/10 blur-[1px] opacity-70">
          <img
            src={heroCamera}
            alt=""
            className="h-full w-full object-cover filter grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
        </div>

        {/* Studio Room Layer */}
        <div className="absolute right-[28%] top-[24%] h-[320px] w-[300px] overflow-hidden rounded-3xl border border-white/10 blur-[2px] opacity-50">
          <img
            src={heroStudio}
            alt=""
            className="h-full w-full object-cover filter grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />
        </div>

        {/* Red Lit Stairs Layer */}
        <div className="absolute right-[12%] bottom-[10%] h-[280px] w-[260px] overflow-hidden rounded-3xl border border-white/10 blur-[1.5px] opacity-60">
          <img
            src={heroStairs}
            alt=""
            className="h-full w-full object-cover filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
        </div>
      </motion.div>

      {/* Grid Pattern & Grain Overlay */}
      <div className="dot-grid absolute inset-0 opacity-25" />
      <div className="grain absolute inset-0 opacity-40" />

      {/* Cinematic Vignette Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.75) 85%, rgba(5,5,5,1) 100%)",
        }}
      />

      {/* Bottom Fade Transition */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
    </motion.div>
  );
}
