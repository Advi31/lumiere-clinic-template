import { Check } from "lucide-react";

const tiers = [
  { name: "Discovery", price: "$149", desc: "Perfect first visit to experience the Lumière standard.",
    features: ["60-min Signature Facial", "Skin diagnostic scan", "Personalised home protocol", "Complimentary tea ceremony"],
    cta: "Book Discovery", featured: false, badge: "" },
  { name: "Signature", price: "$890", desc: "Our most-loved 4-week transformation program.",
    features: ["4 in-clinic treatments", "Hydra Infusion Therapy", "LED light therapy", "Dedicated skin coach", "Premium take-home kit"],
    cta: "Claim Signature", featured: true, badge: "Most Loved" },
  { name: "Renewal 90", price: "$2,400", desc: "Comprehensive 90-day clinical anti-aging protocol.",
    features: ["8 advanced treatments", "Laser & injectable plan", "Quarterly biomarker review", "VIP priority booking", "Annual maintenance"],
    cta: "Apply for Renewal", featured: false, badge: "" },
];

export function Pricing() {
  return (
    <section id="pricing" className="section bg-gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold-soft opacity-25 blur-3xl" />
      <div className="container-luxe relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">April Offer · Ends Soon</p>
          <h2 className="mt-5 h-display">Save 20% on your first program.</h2>
          <p className="mt-6 lede mx-auto">
            Transparent pricing. No hidden fees. Lock in this month's rate
            before the April intake closes.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card-lift relative rounded-3xl p-8 sm:p-10 flex flex-col ${
                t.featured
                  ? "bg-gradient-dark text-primary-foreground shadow-luxe lg:scale-[1.03] border border-gold/30 ring-1 ring-gold/40"
                  : "bg-card border border-border/60 hover:shadow-luxe"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-ink text-[10px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full">
                  {t.badge}
                </span>
              )}
              <p className={`text-[11px] uppercase tracking-[0.28em] ${t.featured ? "text-gold" : "text-muted-foreground"}`}>{t.name}</p>
              <p className="mt-6 font-display text-6xl font-medium tracking-tight">{t.price}</p>
              <p className={`mt-4 text-sm ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-10 space-y-4 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-gold" : "text-foreground/60"}`} />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-10 btn w-full ${t.featured ? "btn-gold" : "btn-primary"}`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          🔒 Risk-free · Flexible payment plans available · Refundable consultation deposit
        </p>
      </div>
    </section>
  );
}
