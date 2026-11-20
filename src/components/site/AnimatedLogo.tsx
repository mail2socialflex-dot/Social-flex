import { motion } from "framer-motion";
import logoMark from "@/assets/social-flex-logo-main.webp";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  className?: string;
  imgClassName?: string;
  delay?: number;
  /** Play the cinematic reveal on mount (hero). Otherwise just hover motion. */
  reveal?: boolean;
};

export function AnimatedLogo({ className, imgClassName, delay = 0, reveal = false }: Props) {
  return (
    <motion.span
      className={cn("group relative inline-block overflow-hidden", className)}
      initial={reveal ? { opacity: 0, y: 14, filter: "blur(10px)" } : false}
      {...(reveal ? { animate: { opacity: 1, y: 0, filter: "blur(0px)" } } : {})}
      transition={{ duration: 1, delay, ease }}
      whileHover="hover"
    >
      <motion.img
        src={logoMark}
        alt="Social Flex logo"
        className={cn("h-10 w-auto object-contain", imgClassName)}
        variants={{ hover: { scale: 1.04, filter: "brightness(1.15)" } }}
        transition={{ duration: 0.45, ease }}
      />

      {/* red glow pulse */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        variants={{ hover: { opacity: 0.45 } }}
        transition={{ duration: 0.5, ease }}
      />

      {/* cinematic light sweep */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, white 55%, transparent), transparent)",
          mixBlendMode: "overlay",
        }}
        initial={{ x: "-40%", opacity: 0 }}
        {...(reveal ? { animate: { x: ["-40%", "320%"], opacity: [0, 1, 0] } } : {})}
        variants={{ hover: { x: ["-40%", "320%"], opacity: [0, 1, 0] } }}
        transition={{ duration: 1.1, delay: reveal ? delay + 0.5 : 0, ease }}
      />
    </motion.span>
  );
}
