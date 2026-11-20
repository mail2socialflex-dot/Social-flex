import { Globe, Rocket, Smile, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CountUp, Reveal } from "./primitives";

const STATS: { to: number; label: string; Icon: LucideIcon }[] = [
  { to: 50, label: "Happy Clients", Icon: Smile },
  { to: 100, label: "Projects Completed", Icon: Rocket },
  { to: 2, label: "Years of Experience", Icon: Trophy },
  { to: 20, label: "Industries Served", Icon: Globe },
];

export function Stats() {
  return (
    <section className="grain bg-rich py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-12 px-5 lg:grid-cols-4 lg:px-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="flex items-center gap-4 lg:justify-center lg:border-l lg:border-border lg:px-6 lg:first:border-l-0">
              <s.Icon className="h-9 w-9 shrink-0 text-primary sm:h-12 sm:w-12" strokeWidth={1.1} />
              <div className="min-w-0">
                <p className="display text-4xl text-primary sm:text-5xl">
                  <CountUp to={s.to} />
                </p>
                <p className="mt-1 truncate text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
