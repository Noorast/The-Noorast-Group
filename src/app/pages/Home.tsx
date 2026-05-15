import heroImage from '../../assets/7a0b078181e2beafc5cb9b6f72678896e6381750.png';
import projectImage from '../../assets/e947385c703c8e3c623a4d1f62c7deeba551bd6e.png';
import modernImage from '../../assets/e58b5efe29e6b030b0baff045b305e756b3d587b.png';
import rearImage from '../../assets/d349c2e1b0a0adb43813b52e67d9047ecc52f575.png';
import veniceImage from '../../assets/fd485c30db969be36e00beb80f2ac31e3eea017e.png';
import { Link } from 'react-router';
import { SEO } from '@/app/components/SEO';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <SEO />

      {/* ── HERO — full bleed, 90vh ──────────────────────── */}
      <section className="w-full overflow-hidden" style={{ height: '90vh', minHeight: 480 }}>
        <img
          src={heroImage}
          alt="Noorast — Property Intelligence & Architectural Design"
          className="w-full h-full object-cover block"
          style={{ objectPosition: 'center 38%' }}
        />
      </section>

      {/* ── STATEMENT ─────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12">
          <div className="lg:col-span-8 reveal">
            <h1 style={{ letterSpacing: '-0.03em', lineHeight: 1.02 }}>
              The work begins<br />
              before the architect<br />
              arrives.
            </h1>
          </div>
          <div className="lg:col-span-4 reveal" style={{ transitionDelay: '0.15s' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
              Property intelligence and architectural design for UK homeowners. What is possible on your property — established before a single professional fee is paid.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <Link to="/toolkit/property-passport" style={{ textDecoration: 'none', fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--foreground)', borderBottom: '1px solid rgba(40,30,20,0.2)', paddingBottom: '2px', width: 'fit-content' }}>
                Start the Passport — Free →
              </Link>
              <Link to="/services" style={{ textDecoration: 'none', fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-foreground)', borderBottom: '1px solid rgba(40,30,20,0.1)', paddingBottom: '2px', width: 'fit-content' }}>
                Design Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE COVENANT — editorial prose, no box ────────── */}
      <section style={{ borderTop: '1px solid rgba(40,30,20,0.08)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            <div className="lg:col-span-6 reveal">
              <p style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.5, marginBottom: '3.5rem' }}>
                A real project. An avoidable cost.
              </p>
              <h2 style={{ letterSpacing: '-0.025em', marginBottom: '2.5rem' }}>
                &ldquo;Did you check the covenants on your title?&rdquo;
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: '1.25rem' }}>
                A covenant from 1968 prohibited any structure within 2 metres of the south-east boundary. The extension extended to within 1 metre. The solicitor called three days before works were due to begin.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
                Covenant release. Legal fees. Remobilisation. Four months' additional rent and storage. Total: <strong style={{ color: 'var(--foreground)', fontWeight: 400 }}>£19,100</strong>. The title register was available for £3. Section 04 of the Property Passport surfaces it in twenty minutes.
              </p>
              <Link to="/toolkit" style={{ textDecoration: 'none', fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--foreground)', borderBottom: '1px solid rgba(40,30,20,0.2)', paddingBottom: '2px' }}>
                View the Intelligence Toolkit →
              </Link>
            </div>

            <div className="lg:col-span-6 reveal lg:pt-20" style={{ transitionDelay: '0.2s' }}>
              <img src={rearImage} alt="Residential extension — London"
                className="w-full block"
                style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.4, marginTop: '0.875rem' }}>
                London · Victorian terrace · Rear extension
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ─────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(40,30,20,0.08)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-4 md:pt-28">
          <div className="flex items-baseline justify-between mb-10">
            <p style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.45 }}>
              Selected work
            </p>
            <Link to="/work" style={{ textDecoration: 'none', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.6 }}>
              All projects →
            </Link>
          </div>
        </div>

        {/* Full-width primary */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-0.5">
          <Link to="/work" className="block group" style={{ textDecoration: 'none' }}>
            <div className="overflow-hidden reveal">
              <img src={heroImage} alt="London, 2025 — Rear extension"
                className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                style={{ aspectRatio: '21/9', objectFit: 'cover', objectPosition: 'center 38%' }} />
            </div>
            <div className="flex items-baseline justify-between pt-4 pb-12">
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.45 }}>London · 2025</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>Rear extension — Victorian terrace</span>
            </div>
          </Link>
        </div>

        {/* Asymmetric row */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0.5 md:gap-1">
            <Link to="/work" className="group block md:col-span-7 reveal" style={{ textDecoration: 'none' }}>
              <div className="overflow-hidden">
                <img src={modernImage} alt="South East, 2025 — Side extension"
                  className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
              <div className="flex items-baseline justify-between pt-4 pb-12">
                <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.45 }}>South East · 2025</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>Side extension — Semi-detached</span>
              </div>
            </Link>
            <div className="md:col-span-5 flex flex-col gap-1">
              {[
                { img: projectImage, loc: 'Surrey · 2024', type: 'New build' },
                { img: veniceImage, loc: 'Venice · 2024', type: 'Residential masterplan' },
              ].map((p, i) => (
                <Link key={i} to="/work" className="group block reveal" style={{ textDecoration: 'none', transitionDelay: `${i * 0.1}s` }}>
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.type}
                      className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                      style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                  </div>
                  <div className="flex items-baseline justify-between pt-4 pb-10">
                    <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.45 }}>{p.loc}</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{p.type}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SINGLE TESTIMONIAL — large, definitive ────────── */}
      <section style={{ borderTop: '1px solid rgba(40,30,20,0.08)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-40 reveal">
          <p style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted-foreground)', opacity: 0.4, marginBottom: '3rem' }}>
            Client experience
          </p>
          <blockquote style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.875rem)', fontWeight: 300, lineHeight: 1.55, letterSpacing: '-0.015em', color: 'var(--foreground)', maxWidth: '48rem', marginBottom: '2.5rem' }}>
            &ldquo;Our architect said it was the most considered brief she had ever received from a homeowner. We knew our planning constraints, legal position, and real budget before the first meeting.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: 24, height: 1, background: 'rgba(40,30,20,0.2)', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--foreground)' }}>Sarah & James Whitmore</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '0.2rem' }}>Victorian terrace renovation, South London</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSE ─────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(40,30,20,0.08)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="max-w-2xl reveal">
            <h2 style={{ letterSpacing: '-0.025em', marginBottom: '2rem' }}>
              Start with what you know.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: '2.5rem', maxWidth: '34rem' }}>
              The Property Passport is free. Twelve sections. Saves automatically. A document worth bringing to any professional meeting.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
              <Link to="/toolkit/property-passport" style={{ textDecoration: 'none', fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--foreground)', borderBottom: '1px solid rgba(40,30,20,0.2)', paddingBottom: '2px' }}>
                Start the Property Passport — Free →
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-foreground)', borderBottom: '1px solid rgba(40,30,20,0.1)', paddingBottom: '2px' }}>
                Discuss a project →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
