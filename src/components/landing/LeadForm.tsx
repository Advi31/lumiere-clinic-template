import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Clock } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20).regex(/^[+\d\s()-]+$/, "Invalid characters"),
});

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, phone });
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false); setName(""); setPhone("");
      toast.success("We'll call you within 1 hour to confirm your slot.");
    }, 800);
  };

  return (
    <section
      id="book"
      className="section bg-background scroll-mt-24 pb-[clamp(5rem,12vw,7rem)] max-md:!pt-[max(6rem,env(safe-area-inset-top))] max-md:!pb-[max(8rem,env(safe-area-inset-bottom))]"
    >
      <div className="container-luxe max-w-6xl">
        {/* Desktop: single unified card. Mobile/Tablet: text + separate form card stacked. */}
        <div className="lg:relative lg:rounded-[2.5rem] lg-bg-gradient-dark lg:text-primary-foreground lg:px-16 lg:py-20 xl:px-20 lg:overflow-hidden lg:shadow-luxe lg:isolate">
          <div className="pointer-events-none hidden lg:block absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-gold opacity-25 blur-3xl -z-10" />
          <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 xl:gap-20 items-center">
            {/* TEXT BLOCK */}
            <div className="text-foreground lg:text-primary-foreground max-lg:text-center max-lg:px-1 lg:max-w-xl lg:pr-2 min-w-0">
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 text-xs">
                <Clock className="h-3.5 w-3.5 text-gold" />
                Only 7 slots left this week
              </div>
              <h2 className="mt-6 sm:mt-8 h-display leading-[1.05]">
                Book your <span className="text-gradient-gold italic font-normal">free</span> consultation today.
              </h2>
              <p className="mt-6 sm:mt-8 text-foreground/70 lg:text-primary-foreground/70 text-[16px] sm:text-[17px] leading-relaxed max-w-md lg:max-w-lg max-lg:mx-auto">
                Leave your details — our concierge calls back within the hour.
                Walk out with a clear plan, transparent pricing, and your
                exclusive 20% offer secured.
              </p>
              <ul className="mt-8 sm:mt-10 space-y-3 text-sm text-foreground/80 lg:text-primary-foreground/80 max-lg:inline-block max-lg:text-left">
                <li>— Personalised skin diagnostic (worth $250)</li>
                <li>— Private tour of our flagship clinic</li>
                <li>— 20% off your first program — this week only</li>
                <li>— Zero pressure. Zero obligation.</li>
              </ul>
            </div>

            {/* FORM CARD — separate premium card on mobile/tablet, embedded on desktop */}
            <form
              onSubmit={submit}
              className="relative isolate space-y-7 mt-12 sm:mt-14 lg:mt-0 min-w-0 w-full
                         rounded-[1.75rem] sm:rounded-3xl p-7 sm:p-10
                         bg-gradient-dark text-primary-foreground shadow-luxe overflow-hidden
                         lg:bg-transparent lg:shadow-none lg:overflow-visible lg:rounded-3xl lg:p-10 lg:glass-dark"
            >
              <div className="pointer-events-none lg:hidden absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-gold opacity-20 blur-3xl -z-10" />
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Name</label>
                <input
                  value={name} onChange={(e) => setName(e.target.value)} maxLength={80}
                  placeholder="Your full name"
                  className="mt-3 w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-base placeholder:text-primary-foreground/30 transition-all duration-300 focus:[box-shadow:0_4px_20px_-8px_oklch(0.78_0.10_75/0.6)]"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Phone</label>
                <input
                  value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} inputMode="tel"
                  placeholder="+1 (555) 000-0000"
                  className="mt-3 w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-base placeholder:text-primary-foreground/30 transition-all duration-300 focus:[box-shadow:0_4px_20px_-8px_oklch(0.78_0.10_75/0.6)]"
                />
              </div>
              <button type="submit" disabled={loading} className="btn btn-gold w-full mt-2 disabled:opacity-60">
                {loading ? "Securing your slot…" : "Claim My Free Consultation →"}
              </button>
              <p className="text-[11px] text-primary-foreground/45 text-center">
                We protect your data. By submitting you agree to be contacted by Lumière.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
