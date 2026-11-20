import { motion } from "framer-motion";

export function ScrollIndicator() {
  const scrollToWork = () => {
    const el = document.querySelector("#work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-16 right-8 z-30 hidden xl:flex flex-col items-center gap-4 cursor-pointer group"
      onClick={scrollToWork}
      role="button"
      tabIndex={0}
      aria-label="Scroll down to Selected Work"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") scrollToWork();
      }}
    >
      <span className="label-xs text-xs text-muted-foreground/80 tracking-[0.25em] [writing-mode:vertical-rl] transition-colors group-hover:text-primary">
        SCROLL DOWN
      </span>
      <span className="relative block h-16 w-px bg-white/15 overflow-hidden">
        <span className="animate-line-run absolute inset-0 block bg-primary shadow-[0_0_8px_var(--primary)]" />
      </span>
      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/20">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
    </motion.div>
  );
}
