import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const cases = [
  { before: before1, after: after1, label: "Pigmentation Correction · 8 weeks" },
  { before: before2, after: after2, label: "Anti-Aging Protocol · 12 weeks" },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(p);
  };

  return (
    <figure>
      <div
        ref={ref}
        className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe select-none cursor-ew-resize touch-pan-none"
        onPointerDown={(e) => {
          drag.current = true;
          (e.target as Element).setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          move(e.clientX);
        }}
        onPointerUp={() => (drag.current = false)}
        onPointerCancel={() => (drag.current = false)}
      >
        <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>
        <span className="absolute top-5 left-5 glass-dark text-primary-foreground text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">Before</span>
        <span className="absolute top-5 right-5 glass text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">After</span>
        <div className="absolute top-0 bottom-0 w-px bg-white/90" style={{ left: `${pos}%` }}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-luxe flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
            style={{ boxShadow: drag.current ? "0 0 0 8px oklch(0.78 0.10 75 / 0.25), 0 0 40px oklch(0.78 0.10 75 / 0.5)" : undefined }}
          >
            <MoveHorizontal className="h-5 w-5 text-ink" />
          </div>
        </div>
      </div>
      <figcaption className="mt-6 text-sm text-muted-foreground text-center">{label}</figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <section id="transformations" className="section bg-secondary/40">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Real Transformations</p>
          <h2 className="mt-5 h-display">This could be you in 8 weeks.</h2>
          <p className="mt-6 lede mx-auto">
            Untouched, unfiltered. Drag the slider to see the results our
            clients are quietly obsessing over.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {cases.map((c, i) => <Slider key={i} {...c} />)}
        </div>

        <div className="mt-16 text-center">
          <a href="#book" className="btn btn-gold">Start My Transformation →</a>
          <p className="mt-4 text-xs text-muted-foreground">Limited April intake · Only 7 consultation slots remain</p>
        </div>
      </div>
    </section>
  );
}
