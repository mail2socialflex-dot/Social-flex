import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Magnetic wrapper ---------------- */
export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("inline-block will-change-transform transition-transform duration-300 ease-out", className)}
    >
      {children}
    </span>
  );
}

/* ---------------- 3D Tilt Card with Dynamic Specular Lighting ---------------- */
export function TiltCard({
  children,
  className,
  maxTilt = 6,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - py) * (maxTilt * 2);

    el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;

    if (sheenRef.current) {
      sheenRef.current.style.opacity = "1";
      sheenRef.current.style.background = `radial-gradient(420px circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%)`;
    }
  };

  const reset = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    if (sheenRef.current) {
      sheenRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "relative will-change-transform transition-transform duration-300 ease-out",
        className,
      )}
    >
      <div
        ref={sheenRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}

/* ---------------- Buttons ---------------- */
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | "a";
  href?: string;
  variant?: "solid" | "outline";
  children: ReactNode;
};

export function ActionButton({
  children,
  className,
  variant = "solid",
  href,
  as = "button",
  ...rest
}: BtnProps) {
  const base = cn(
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300",
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary-bright hover:shadow-[0_0_40px_-6px_var(--primary)]"
      : "border border-border text-foreground hover:border-primary hover:text-primary",
    className,
  );

  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  return (
    <Magnetic>
      {as === "a" || href ? (
        <a href={href} className={base}>
          {inner}
        </a>
      ) : (
        <button className={base} {...rest}>
          {inner}
        </button>
      )}
    </Magnetic>
  );
}

/* ---------------- Section heading label ---------------- */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="label-xs text-primary">
      <span className="text-muted-foreground">[</span> {children}{" "}
      <span className="text-muted-foreground">]</span>
    </p>
  );
}

/* ---------------- Count up ---------------- */
export function CountUp({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
