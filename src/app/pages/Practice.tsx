import { SEO } from '../components/SEO';
import { Link } from 'react-router';
import heroImage from '../../assets/7a0b078181e2beafc5cb9b6f72678896e6381750.png';
import { useEffect } from 'react';

export function Practice() {
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
        title="Studio — Noorast"
        description="Noorast is a property intelligence consultancy and architectural design practice. London. Residential only."
      />

      {/* Full-bleed image */}
      <section className="w-full overflow-hidden" style={{ maxHeight: '70vh' }}>
        <img
          src={heroImage}
          alt="Noorast — Property intelligence and architectural design"
          className="w-full object-cover block"
          style={{ maxHeight: '70vh', objectPosition: 'center 40%' }}
        />
      </section>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between py-4 border-b border-border/20">
        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">London, United Kingdom</span>
        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">Est. 2025</span>
      </div>

      {/* The statement — three sentences */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl reveal">
          <h1 className="mb-12">
            Architecture is a precise discipline.<br className="hidden md:block" /> We treat it as one.
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }} className="text-muted-foreground max-w-2xl">
            Noorast is a property intelligence consultancy and architectural design practice in London. We work exclusively on residential projects — extensions, loft conversions, and new homes. We begin before others do.
          </p>
        </div>
      </section>

      {/* Four positions */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">

            <div className="reveal">
              <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-10">The methodology</div>
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The standard residential project sequence is wrong. An idea forms. An architect is appointed. The constraints are discovered — at the architect's hourly rate. The design is revised. A planning application is submitted. The decision arrives.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Noorast sequence begins earlier. We establish the constraints first — from public data that is already available and costs nothing to access. Title register. Planning history. Article 4 Directions. Flood zones. Covenants. Permitted development status. Then design begins within a fully understood reality.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The result: a better brief, lower professional fees, more accurate designs, and planning applications that reflect what the local authority will actually approve.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-10">The position</div>
              <div className="space-y-8">
                {[
                  {
                    label: 'Scope',
                    text: 'Residential only. Extensions, loft conversions, and new homes in the United Kingdom. We do not take on commercial, mixed-use, or higher-risk buildings under the Building Safety Act 2022.',
                  },
                  {
                    label: 'Legal status',
                    text: 'Noorast Group Limited operates as an architectural design consultancy. We are not a registered architects\' practice under the Architects Act 1997. We do not employ ARB-registered architects. Where a project requires registration, we say so.',
                  },
                  {
                    label: 'Location',
                    text: 'London, United Kingdom. Design services focused on Greater London and the South East. Intelligence products available to UK homeowners nationwide.',
                  },
                ].map(item => (
                  <div key={item.label} className="border-t border-border/20 pt-6">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-3">{item.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-wrap items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground max-w-sm">
            The intelligence products are available to any UK homeowner. Design services by appointment.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link to="/toolkit"
              className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors">
              View the Toolkit →
            </Link>
            <Link to="/contact"
              className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors">
              Discuss a project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
