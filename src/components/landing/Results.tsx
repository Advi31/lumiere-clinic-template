const result1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 768 1024'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23fbf4e8'/%3E%3Cstop offset='.55' stop-color='%23d7bb78'/%3E%3Cstop offset='1' stop-color='%231c1714'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='768' height='1024' fill='url(%23g)'/%3E%3Ccircle cx='384' cy='318' r='128' fill='%23fff8ec' opacity='.38'/%3E%3C/svg%3E";
const result2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 768 1024'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='1' y1='0' x2='0' y2='1'%3E%3Cstop stop-color='%23fff8ec'/%3E%3Cstop offset='.5' stop-color='%23cfae67'/%3E%3Cstop offset='1' stop-color='%23191412'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='768' height='1024' fill='url(%23g)'/%3E%3Cellipse cx='434' cy='322' rx='138' ry='154' fill='%23fff6e5' opacity='.32'/%3E%3C/svg%3E";

const cases = [
  { img: result1, metric: "8 wks", label: "Signature programme", title: "The Glow Protocol", desc: "A bespoke regimen to refine tone, calm pigmentation and restore a quiet, natural radiance." },
  { img: result2, metric: "90 days", label: "Clinical programme", title: "Timeless Renewal", desc: "Advanced firming and luminosity treatments designed for visible, refined results — never overdone." },
];

export function Results() {
  return (
    <section id="results" className="section bg-background">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow">Signature Treatments</p>
          <h2 className="mt-5 h-display">Programmes designed around you.</h2>
          <p className="mt-6 lede">A curated selection of our most-requested protocols — each tailored, clinically led, and quietly transformative.</p>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {cases.map((c) => (
            <article key={c.title} className="card-lift relative rounded-[2rem] overflow-hidden shadow-luxe group">
              <img src={c.img} alt={c.title} className="h-[560px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute top-6 left-6 glass rounded-2xl px-5 py-3.5">
                <p className="text-2xl font-display font-semibold text-gradient-gold leading-none">{c.metric}</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/80">{c.label}</p>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-10 text-primary-foreground">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/80 max-w-md leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
