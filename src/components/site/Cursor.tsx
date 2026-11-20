import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);

    let rx = -100;
    let ry = -100;
    let tx = -100;
    let ty = -100;
    let initialized = false;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      if (!initialized) {
        rx = tx;
        ry = ty;
        initialized = true;
        setVisible(true);
      }

      if (dot.current) {
        dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        "a, button, input, textarea, select, [data-cursor], [role='button']"
      );

      if (activeRef.current !== isInteractive) {
        activeRef.current = isInteractive;
        setActive(isInteractive);
      }
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    const render = () => {
      if (initialized) {
        rx += (tx - rx) * 0.25;
        ry += (ty - ry) * 0.25;

        if (ring.current) {
          const isAct = activeRef.current;
          ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${isAct ? 1.5 : 1})`;
        }
      }
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Center dot */}
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-foreground transition-opacity duration-300"
        style={{
          opacity: visible && dot.current?.style.transform ? 1 : 0,
          willChange: "transform",
        }}
      />
      {/* Outer red glowing ring */}
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 h-10 w-10 rounded-full border border-primary/70 transition-[opacity,border-color] duration-300"
        style={{
          boxShadow: "0 0 28px -4px var(--primary)",
          opacity: visible && ring.current?.style.transform ? (active ? 1 : 0.5) : 0,
          willChange: "transform",
        }}
      />
    </div>
  );
}
