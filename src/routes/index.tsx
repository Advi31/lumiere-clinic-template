import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Stats } from "@/components/landing/Stats";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Services } from "@/components/landing/Services";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Results } from "@/components/landing/Results";
import { Process } from "@/components/landing/Process";
import { Pricing } from "@/components/landing/Pricing";
import { LeadForm } from "@/components/landing/LeadForm";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child [&_a.btn]:reveal-child [&_button.btn]:reveal-child"><Stats /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child"><Trust /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child [&_a.btn]:reveal-child"><WhyChooseUs /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child [&_a.btn]:reveal-child"><Services /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child [&_figure]:reveal-child [&_a.btn]:reveal-child"><BeforeAfter /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child"><Results /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child"><Process /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child [&_a.btn]:reveal-child"><Pricing /></div>
        <div className="reveal"><LeadForm /></div>
        <div className="reveal [&_h2]:reveal-child [&_p]:reveal-child [&_a.btn]:reveal-child"><FinalCTA /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </div>
  );
}
