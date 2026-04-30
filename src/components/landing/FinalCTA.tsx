export function FinalCTA() {
  return (
    <section className="section bg-background">
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Your Turn</p>
          <h2 className="mt-5 h-display">
            Ready to see the
            <br />
            <span className="text-gradient-gold italic font-normal">difference</span> yourself?
          </h2>
          <p className="mt-6 lede mx-auto">
            Book your consultation today and start your transformation.
          </p>

          <div className="mt-12 flex justify-center">
            <a href="#book" className="btn btn-primary">
              Book My Consultation Now →
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold mr-2 align-middle animate-pulse" />
            Only 5 slots available this week
          </p>
        </div>
      </div>
    </section>
  );
}