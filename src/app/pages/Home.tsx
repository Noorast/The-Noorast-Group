import heroImage from '../../assets/7a0b078181e2beafc5cb9b6f72678896e6381750.png';
import projectImage from '../../assets/e947385c703c8e3c623a4d1f62c7deeba551bd6e.png';
import modernExtensionImage from '../../assets/e58b5efe29e6b030b0baff045b305e756b3d587b.png';
import rearImage from '../../assets/d349c2e1b0a0adb43813b52e67d9047ecc52f575.png';
import { Link } from 'react-router';
import { SEO } from '@/app/components/SEO';
import { useEffect, useRef, useState } from 'react';

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1600;
        const start = Date.now();
        const tick = () => {
          const p = Math.min(1, (Date.now() - start) / dur);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{val.toLocaleString('en-GB')}{suffix}</span>;
}

export function Home() {
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
      <SEO />

      {/* ── HERO — full viewport image, no borders, no padding ── */}
      <section className="w-full overflow-hidden" style={{ maxHeight: '92vh' }}>
        <img
          src={heroImage}
          alt="Contemporary residential architecture — Noorast"
          className="w-full object-cover block img-reveal visible"
          style={{ maxHeight: '92vh', objectPosition: 'center 40%' }}
        />
      </section>

      {/* ── IDENTITY STRIP ───────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between py-5 border-b border-border/20">
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/60">London, United Kingdom</span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/60">Property Intelligence · Architectural Design</span>
      </div>

      {/* ── DECLARATION ──────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="max-w-5xl">
          <h1 className="reveal mb-10">
            The work begins<br className="hidden md:block" /> before the architect arrives.
          </h1>
          <div className="reveal flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.75' }} className="text-muted-foreground max-w-lg">
              Property intelligence and architectural design for UK homeowners. We establish what is possible on your property before a single professional fee is paid.
            </p>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link to="/toolkit/property-passport"
                className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors whitespace-nowrap">
                Start the Passport — Free →
              </Link>
              <Link to="/toolkit"
                className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors whitespace-nowrap">
                View the Toolkit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS ──────────────────────────────────────────── */}
      <section className="border-t border-b border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { n: 17600, suffix: '', prefix: '', label: 'Planning refusals in England each year' },
              { n: 3000, suffix: '+', prefix: '£', label: 'Cost of a refused application, wasted' },
              { n: 21440, suffix: '', prefix: '£', label: 'Median homeowner spend on residential works' },
              { n: 97, suffix: '', prefix: '£', label: 'Cost of the Intelligence Toolkit' },
            ].map(item => (
              <div key={item.label} className="reveal">
                <div className="font-light text-foreground mb-3 tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1' }}>
                  <Counter to={item.n} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <p className="text-[11px] tracking-wide text-muted-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE COVENANT STORY — editorial, no box ────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-10">
              A real project. A real cost.
            </div>
            <h2 className="mb-10">
              &ldquo;Did you check the covenants<br className="hidden md:block" /> on your title?&rdquo;
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-muted-foreground mb-6">
              A covenant from 1968 prohibited any structure within 2 metres of the south-east boundary. The extension extended to within 1 metre. Their solicitor called three days before the build was due to start.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-muted-foreground mb-12">
              Covenant release payment. Legal fees. Contract hold and remobilisation. Four months' additional rent and storage. Total avoidable cost: <strong className="text-foreground font-medium">£19,100</strong>. The title register was available from gov.uk for £3. Section 04 of the Property Passport surfaces this in twenty minutes.
            </p>
            <Link to="/toolkit"
              className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors">
              View the Intelligence Toolkit →
            </Link>
          </div>
          <div className="lg:col-span-5 reveal overflow-hidden">
            <img src={projectImage} alt="Residential extension — London" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* ── THE TWO THINGS ───────────────────────────────────── */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-32">

            <div className="reveal">
              <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-10">01</div>
              <h2 className="mb-8">Intelligence.</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-muted-foreground mb-10">
                Structured research tools that establish what is possible on a specific property — planning constraints, legal position, site conditions, financial reality — before any professional is commissioned. Available to any UK homeowner.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  ['Property Passport', 'Free', '/toolkit/property-passport'],
                  ['Planning Intelligence Report', '£9 + VAT', '/planning-report'],
                  ['Intelligence Toolkit', '£97 + VAT', '/toolkit'],
                ].map(([name, price, path]) => (
                  <Link key={path} to={path}
                    className="flex items-baseline justify-between gap-4 border-b border-border/20 pb-4 group"
                    style={{ textDecoration: 'none' }}>
                    <span className="text-sm text-foreground group-hover:text-muted-foreground transition-colors">{name}</span>
                    <span className="text-[11px] text-muted-foreground/60 flex-shrink-0">{price}</span>
                  </Link>
                ))}
              </div>
              <Link to="/toolkit"
                className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors">
                All intelligence products →
              </Link>
            </div>

            <div className="reveal md:border-l border-border/20 md:pl-20 lg:pl-32">
              <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-10">02</div>
              <h2 className="mb-8">Design.</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-muted-foreground mb-10">
                Architectural design services for homeowners who want Noorast to carry their intelligence through to planning submission and Building Regulations. RIBA Stages 1–4. Residential only. London and the South East.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  ['Planning Applications', 'Stage 3', '/services/planning-application-management'],
                  ['Concept & Spatial Design', 'Stage 2', '/services/concept-spatial-design'],
                  ['Technical Design', 'Stage 4', '/services/technical-design-building-regulations'],
                ].map(([name, stage, path]) => (
                  <Link key={path} to={path}
                    className="flex items-baseline justify-between gap-4 border-b border-border/20 pb-4 group"
                    style={{ textDecoration: 'none' }}>
                    <span className="text-sm text-foreground group-hover:text-muted-foreground transition-colors">{name}</span>
                    <span className="text-[11px] text-muted-foreground/60 flex-shrink-0">{stage}</span>
                  </Link>
                ))}
              </div>
              <Link to="/contact"
                className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors">
                Book a discovery call →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────── */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-8 md:pt-32">
          <div className="flex items-baseline justify-between mb-16">
            <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50">Selected work</div>
            <Link to="/project"
              className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border/40 pb-px hover:border-foreground/40">
              All projects →
            </Link>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[
              { img: heroImage, label: 'London, 2025', type: 'Rear extension — Victorian terrace' },
              { img: modernExtensionImage, label: 'South East, 2025', type: 'Side extension — Semi-detached' },
              { img: rearImage, label: 'London, 2024', type: 'Loft conversion — Victorian semi' },
              { img: projectImage, label: 'Surrey, 2024', type: 'New build — Rural setting' },
            ].map((p, i) => (
              <Link key={i} to="/project" className="group block overflow-hidden" style={{ textDecoration: 'none' }}>
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.type}
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                </div>
                <div className="pt-4 pb-10 flex items-baseline justify-between">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50">{p.label}</span>
                  <span className="text-xs text-muted-foreground">{p.type}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HOMEOWNERS SAY ──────────────────────────────── */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-32 md:pt-36 md:pb-40">
          <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-20">What homeowners say</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-16 lg:gap-x-24">
            {[
              {
                quote: "Our architect said it was the most considered brief she had ever received. We knew our planning history, legal constraints, and real budget before the first meeting.",
                name: "Sarah & James Whitmore",
                project: "Victorian terrace renovation, South London",
              },
              {
                quote: "It surfaced a flood zone designation and an Article 4 direction we had no idea existed. Both would have fundamentally changed our design approach.",
                name: "David Okafor",
                project: "New build project, Surrey",
              },
              {
                quote: "The investment was trivial compared to what it saved. We went into every architect meeting with a document that answered every question before it was asked.",
                name: "Fiona & Thomas Brennan",
                project: "Listed building conversion, Kent",
              },
            ].map(t => (
              <div key={t.name} className="reveal">
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-foreground font-light mb-8 border-t border-border/20 pt-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs font-medium text-foreground mb-1">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-36">
          <div className="max-w-3xl reveal">
            <h2 className="mb-10">
              Start with what you know.<br className="hidden md:block" /> Build on it.
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-muted-foreground mb-12 max-w-xl">
              The Property Passport is free. Twelve sections. Saves automatically. Four to six hours to complete. By the time you're done, you'll have a document worth bringing to any professional meeting.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link to="/toolkit/property-passport"
                className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors">
                Start the Property Passport — Free →
              </Link>
              <Link to="/contact"
                className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors">
                Discuss a project →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
