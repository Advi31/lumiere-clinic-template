import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Treatments", href: "#services" },
  { label: "Results", href: "#transformations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="container-luxe">
        <div className={`flex items-center justify-between rounded-full px-6 sm:px-8 py-3 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
          <a href="#" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-display text-ink font-bold">L</span>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">Lumière</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/65 hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#book" className="btn btn-primary !py-2.5 !px-5 !text-sm !min-h-0 max-md:!hidden">
            Book Consultation
          </a>

          <button className="md:hidden p-2 -mr-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-6 shadow-soft animate-float-up">
            <nav className="flex flex-col gap-5">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground/80">
                  {l.label}
                </a>
              ))}
              <a href="#book" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">
                Book Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
