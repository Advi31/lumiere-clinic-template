import { Sparkles, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-skin.jpg";

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip parallax on touch / coarse-pointer devices for smoother scroll
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-gold opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-soft opacity-30 blur-3xl" />

      <div className="container-luxe relative grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-light tracking-wide text-foreground/70 opacity-90">
            <Sparkles className="h-3.5 w-3.5 text-gold/80" />
            Trusted by 12,400+ clients worldwide
          </div>

          <h1 className="mt-6 sm:mt-8 h-display text-balance">
            The skin you've always wanted —{" "}
            <span className="text-gradient-gold italic font-normal">quietly</span> revealed.
          </h1>

          <p className="mt-6 sm:mt-8 lede">
            Clear, radiant skin. Renewed confidence. Naturally beautiful results
            — never overdone. Bespoke protocols designed by board-certified
            experts, with visible change in as little as 4 weeks.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-3">
            <a href="#book" className="btn btn-primary">Book My Free Skin Consultation →</a>
            <a href="#transformations" className="btn btn-ghost">See real transformations</a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground text-center sm:text-left">
            No obligation · 30-min private session · Limited slots this week
          </p>

          <div className="mt-12 sm:mt-14 flex items-center justify-center sm:justify-start gap-5">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full bg-gradient-gold border-2 border-background" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-sm font-semibold">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">From 2,400+ verified reviews</p>
            </div>
          </div>
        </div>

        <div className="relative animate-float-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe ring-1 ring-gold/10">
            <img
              ref={imgRef}
              src={heroImg}
              alt="Radiant glowing skin — Lumière Clinic signature result"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold-soft/10 via-transparent to-transparent mix-blend-soft-light" />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-gold opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
