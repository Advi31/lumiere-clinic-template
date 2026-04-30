const stats = [
  { v: "12,400+", l: "Treatments Delivered" },
  { v: "4.9", l: "Average Rating" },
  { v: "98%", l: "Would Refer a Friend" },
  { v: "15+", l: "Years of Excellence" },
];

const badges = ["JCI Accredited", "FDA-Cleared Tech", "ISO 9001", "Allergan Diamond"];

export function Stats() {
  return (
    <section className="py-24 sm:py-28 bg-background border-y border-border/60">
      <div className="container-luxe">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl sm:text-6xl font-medium text-gradient-gold leading-none tracking-tight">
                {s.v}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-10 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <span className="eyebrow">Certified by</span>
          {badges.map((b) => (
            <span key={b} className="text-sm text-foreground/60">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
