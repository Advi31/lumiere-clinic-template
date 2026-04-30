import { Award, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

const items = [
  { icon: Award, title: "Board-Certified Artistry", desc: "Physicians with 15+ years of clinical aesthetic mastery." },
  { icon: ShieldCheck, title: "Medical-Grade Safety", desc: "FDA-cleared technology and protocols audited to international standards." },
  { icon: Sparkles, title: "Bespoke Protocols", desc: "Each plan is sculpted to your skin, anatomy, and lifestyle." },
  { icon: HeartHandshake, title: "Quiet, Honest Counsel", desc: "We'll tell you when to wait, when to skip, when less is more." },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-background">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Lumière</p>
            <h2 className="mt-5 h-display">Trusted by 12,400+ clients who refuse to compromise.</h2>
          </div>
          <a href="#book" className="btn btn-primary self-start">Book My Consultation →</a>
        </div>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl p-10 bg-card border border-border/60 hover:shadow-luxe hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-11 w-11 rounded-2xl bg-gradient-gold flex items-center justify-center">
                <it.icon className="h-5 w-5 text-ink" />
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
