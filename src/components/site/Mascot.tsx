import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import socialFlexMascot from "@/assets/social-flex-mascot.png";
import { cn } from "@/lib/utils";

interface MascotProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  interactive?: boolean;
  glow?: boolean;
  priority?: boolean;
}

export function Mascot({
  className,
  size = "md",
  interactive = true,
  glow = true,
  priority = false,
}: MascotProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const parallaxX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
    }

    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  const sizeClasses = {
    sm: "w-36 sm:w-48 lg:w-56",
    md: "w-48 sm:w-64 lg:w-80",
    lg: "w-56 sm:w-72 lg:w-[380px] xl:w-[440px]",
    xl: "w-64 sm:w-[400px] lg:w-[500px]",
    custom: "",
  };

  return (
    <motion.div
      style={{
        x: interactive && !reducedMotion ? parallaxX : 0,
        y: interactive && !reducedMotion ? parallaxY : 0,
      }}
      className={cn("relative inline-block select-none pointer-events-none", sizeClasses[size], className)}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 70%, transparent), transparent 70%)",
          }}
        />
      )}

      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                y: [0, -10, 0],
                scale: [1, 1.015, 1],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full"
      >
        <img
          src={socialFlexMascot}
          alt="Social Flex Mascot"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={503}
          height={1162}
          className="h-auto w-full object-contain filter drop-shadow-[0_15px_30px_rgba(229,9,20,0.3)] transform-gpu"
        />

        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  scale: [1, 0.88, 1],
                  opacity: [0.35, 0.2, 0.35],
                }
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
          className="pointer-events-none absolute -bottom-2 left-1/2 h-3.5 w-3/4 -translate-x-1/2 rounded-full bg-black/60 blur-md"
        />
      </motion.div>
    </motion.div>
  );
}
