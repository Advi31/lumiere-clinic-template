import { Star } from "lucide-react";

const logos = ["VOGUE", "ELLE", "HARPER'S", "FORBES", "TATLER", "GQ"];

const reviews = [
  {
    name: "Olivia M.",
    role: "Verified Client",
    text: "I stopped using filters after this. My skin finally looks natural and confident — quietly radiant, every single day.",
  },
  {
    name: "Amelia K.",
    role: "Verified Client",
    text: "Felt like stepping into a five-star experience. The results speak quietly but powerfully — my skin has never looked more like itself.",
  },
  {
    name: "Sophia R.",
    role: "Verified Client",
    text: "Considered, honest, never pushy. I walk into meetings without foundation now — and that confidence is worth everything.",
  },
];

export function Trust() {
  return (
    <section className="section bg-background">
      <div className="container-luxe">
        <p className="text-center eyebrow text-muted-foreground" style={{ color: "var(--muted-foreground)" }}>
          As featured in
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-5 opacity-50">
          {logos.map((l) => (
            <span key={l} className="font-display text-xl tracking-[0.2em] text-foreground">
              {l}
            </span>
          ))}
        </div>

        <div className="mt-28 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl p-10 bg-card border border-border/60 flex flex-col"
            >
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-6 text-foreground/85 leading-relaxed text-[15px] flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold" />
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#book" className="btn btn-primary">Join 12,400+ Happy Clients →</a>
        </div>
      </div>
    </section>
  );
}
