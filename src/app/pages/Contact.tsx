import { SEO } from '../components/SEO';
import { Link } from 'react-router';
import { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <SEO
        title="Contact — Noorast"
        description="Discuss a residential project with Noorast. Design commission enquiries and toolkit questions welcome."
      />

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="reveal">Let's talk about your project.</h1>
        </div>
      </section>

      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">

            <div className="lg:col-span-5 reveal">
              <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-10">Design services</div>
              <h2 className="mb-8">Discovery call</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Twenty minutes. Your project. Whether it's the right fit. No sales pitch — if we're not right for your project, we'll say so and suggest who is.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-12">
                All design commissions begin with a letter of appointment, signed before any work begins.
              </p>
              <a href="mailto:design@noorast.co.uk?subject=Discovery call"
                className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors">
                design@noorast.co.uk →
              </a>
            </div>

            <div className="lg:col-span-7 reveal">
              <div className="space-y-10">
                <div className="border-t border-border/20 pt-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-3">What to include</div>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p>Property address and type</p>
                    <p>What you want to build</p>
                    <p>Where you are in the process</p>
                    <p>Approximate budget if you have one</p>
                  </div>
                </div>
                <div className="border-t border-border/20 pt-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-3">Response</div>
                  <p className="text-sm text-muted-foreground">Within two working days.</p>
                </div>
                <div className="border-t border-border/20 pt-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-3">Location</div>
                  <p className="text-sm text-muted-foreground">London, United Kingdom<br />[INSERT_REGISTERED_OFFICE_ADDRESS]</p>
                </div>
                <div className="border-t border-border/20 pt-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-4">Not ready to appoint?</div>
                  <div className="space-y-4">
                    {[
                      ['/toolkit/property-passport', 'Property Passport', 'Free'],
                      ['/fee-calculator', 'Fee Calculator', 'Free'],
                      ['/planning-report', 'Planning Intelligence Report', '£9 + VAT'],
                      ['/toolkit', 'Intelligence Toolkit', '£97 + VAT'],
                    ].map(([path, label, price]) => (
                      <Link key={path} to={path}
                        className="flex items-baseline justify-between text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/20 pb-3"
                        style={{ textDecoration: 'none' }}>
                        <span>{label}</span>
                        <span className="text-xs text-muted-foreground/50">{price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
