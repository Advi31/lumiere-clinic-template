const steps = [
  { n: "01", title: "Private Consultation", desc: "A 45-minute discovery with a senior clinician. No pressure, only clarity." },
  { n: "02", title: "Bespoke Protocol", desc: "We design a phased plan tailored to your skin, anatomy and lifestyle." },
  { n: "03", title: "Signature Treatment", desc: "Performed in our suites with FDA-cleared technology and white-glove care." },
  { n: "04", title: "Lifelong Aftercare", desc: "Quarterly reviews and at-home protocols to protect your investment." },
];

export function Process() {
  return (
    <section className="section bg-gradient-dark text-primary-foreground">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-5 h-display">From hello to glow — in four simple steps.</h2>
          </div>
          <a href="#book" className="btn btn-gold self-start">Begin Step 1 — Free →</a>
        </div>
        <ol className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-ink p-10 lg:p-12">
              <span className="font-display text-5xl text-gradient-gold font-medium">{s.n}</span>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
