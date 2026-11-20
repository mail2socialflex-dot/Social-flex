import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import socialFlexMascot from "@/assets/social-flex-mascot.png";

export function HeroMascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetRot = 0;
    let currentRot = 0;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = e.clientX / innerWidth - 0.5;
      const normY = e.clientY / innerHeight - 0.5;

      targetX = -normX * 32;
      targetY = -normY * 20;
      targetRot = -normX * 4;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      currentRot += (targetRot - currentRot) * 0.08;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) rotate(${currentRot.toFixed(2)}deg)`;
      }

      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center select-none">
      {/* Soft, Refined Red Ambient Studio Backlight (Prevents heavy red spill on mascot) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[130px]"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
        }}
      />

      {/* Mouse Parallax Wrapper (Direct DOM transform for 60fps performance) */}
      <div ref={parallaxRef} className="relative w-full flex justify-center will-change-transform">
        {/* Floating Idle Animation Loop */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.8, 0, -0.8, 0],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[480px] xl:max-w-[540px]"
        >
          {/* Main Mascot Character (Neutral material lighting + subtle red rim shadow) */}
          <img
            src={socialFlexMascot}
            alt="Social Flex Mascot — TV head character"
            loading="eager"
            decoding="async"
            width={503}
            height={1162}
            className="h-auto w-full object-contain transform-gpu"
            style={{
              filter:
                "drop-shadow(0 25px 45px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 18px color-mix(in oklab, var(--primary) 22%, transparent))",
            }}
          />

          {/* TV Screen Subtle Glow Pulse */}
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
            className="pointer-events-none absolute left-[32%] top-[14%] h-[24%] w-[36%] rounded-2xl bg-primary/35 blur-xl mix-blend-screen"
          />

          {/* Ground Shadow Breathing */}
          <motion.div
            animate={{
              scale: [1, 0.88, 1],
              opacity: [0.4, 0.22, 0.4],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
            className="pointer-events-none absolute -bottom-4 left-1/2 h-5 w-4/5 -translate-x-1/2 rounded-full bg-black/85 blur-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
