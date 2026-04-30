import { Mail, MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-primary-foreground pt-28 pb-12">
      <div className="container-luxe">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-display text-ink font-bold">L</span>
              </div>
              <span className="font-display text-lg font-semibold">Lumière</span>
            </div>
            <p className="mt-6 text-primary-foreground/55 text-sm max-w-sm leading-relaxed">
              A modern aesthetic clinic dedicated to the science of radiance.
              Quiet luxury. Clinical excellence.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold mb-5">Visit</p>
            <div className="space-y-3 text-sm text-primary-foreground/65">
              <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />128 Madison Avenue<br/>New York, NY 10016</p>
              <p className="flex items-center gap-2.5"><Phone className="h-4 w-4" />+1 (212) 555-0188</p>
              <p className="flex items-center gap-2.5"><Mail className="h-4 w-4" />hello@lumiereclinic.com</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold mb-5">Hours</p>
            <div className="space-y-2 text-sm text-primary-foreground/65">
              <p>Mon — Fri · 9am – 8pm</p>
              <p>Saturday · 10am – 6pm</p>
              <p>Sunday · By appointment</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 mt-6 text-sm hover:text-gold transition">
              <Instagram className="h-4 w-4" /> @lumiereclinic
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/45">
          <p>© 2026 Lumière Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-foreground transition">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
