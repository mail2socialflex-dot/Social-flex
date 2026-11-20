const ITEMS = [
  "Branding",
  "Digital Marketing",
  "Content Creation",
  "Creative Design",
  "Personal Branding",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-border bg-rich py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <li key={`${k}-${i}`} className="flex items-center">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] px-8 text-foreground/90">{item}</span>
                <span className="text-primary text-sm">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
