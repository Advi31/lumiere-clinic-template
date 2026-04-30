import { Sparkles, Droplets, Sun, Syringe, Wand2, HeartPulse } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Signature Glow Facial", desc: "Custom multi-step facial to restore radiance and even tone." },
  { icon: Droplets, title: "Hydra Infusion Therapy", desc: "Deep hydration with nutrient-rich serums for plumper skin." },
  { icon: Sun, title: "Laser Skin Renewal", desc: "Medical-grade laser to refine texture, fade pigmentation and scars." },
  { icon: Syringe, title: "Aesthetic Injectables", desc: "Subtle, natural enhancements by board-certified doctors." },
  { icon: Wand2, title: "Anti-Aging Program", desc: "Personalised 90-day protocol combining clinic and at-home care." },
  { icon: HeartPulse, title: "Wellness & Longevity", desc: "IV therapy, biomarker testing and longevity coaching." },
];

export function Services() {
  return (
    <section id="services" className="section bg-secondary/40">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow">Treatments</p>
          <h2 className="mt-5 h-display">
            Real results. <em className="text-gradient-gold not-italic font-normal">No regrets.</em>
          </h2>
          <p className="mt-6 lede">
            From subtle glow-ups to full transformations — every protocol is
            tailored to your skin, your goals, your timeline.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl p-10 bg-card border border-border/60 hover:shadow-luxe hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-11 w-11 rounded-2xl bg-gradient-gold flex items-center justify-center">
                <s.icon className="h-5 w-5 text-ink" />
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#book" className="btn btn-primary">Find My Perfect Treatment →</a>
          <p className="mt-4 text-xs text-muted-foreground">Free consultation · No obligation · Same-week availability</p>
        </div>
      </div>
    </section>
  );
}
