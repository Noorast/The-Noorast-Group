import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import { useEffect } from 'react';

export function Services() {
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
        title="Services — Noorast"
        description="Property intelligence products and architectural design services for UK homeowners. Planning analysis, legal constraints, spatial intelligence — before you commission anyone."
      />

      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h1>Services</h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-muted-foreground max-w-sm">
              Intelligence products before design begins. Architectural design services when you're ready to build.
            </p>
          </div>
        </div>
      </section>

      {/* ── 01 INTELLIGENCE ──────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mb-20 reveal">
          <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-6">01 — Intelligence products</div>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Structured research tools that establish what is possible on a specific property before any professional is commissioned. Available to any UK homeowner.
          </p>
        </div>

        {[
          {
            path: '/toolkit/property-passport',
            price: 'Free',
            title: 'Property Passport',
            desc: 'Twelve-section structured analysis covering planning policy, legal constraints, site conditions, spatial record, and financial modelling. Saves automatically. The intelligence your architect would otherwise charge you to gather.',
          },
          {
            path: '/fee-calculator',
            price: 'Free',
            title: 'Fee Calculator',
            desc: 'The real all-in number — construction, architect fees, VAT at 20%, structural engineer, party wall surveyor, planning fee, contingency. Not the headline m² rate. The actual number, line by line.',
          },
          {
            path: '/planning-report',
            price: '£9 + VAT',
            title: 'Planning Intelligence Report',
            desc: 'Approval probability for your specific property and project type. The five nearest comparable decisions. The most common refusal reasons at your council in the past three years. A concrete action plan.',
          },
          {
            path: '/toolkit',
            price: '£97 + VAT',
            title: 'Intelligence Toolkit',
            desc: 'The complete pre-architecture intelligence workbook. Two hundred pages. Full planning intelligence engine with cross-session memory. Cloud sync across devices. PDF export of your completed Passport. Lifetime access. Fourteen-day money-back guarantee.',
            featured: true,
          },
          {
            path: '/pre-purchase',
            price: '£197 + VAT',
            title: 'Pre-Purchase Extension Report',
            desc: 'For homeowners buying a property specifically to extend. Title register analysis, planning history, permitted development status, Article 4 — established before exchange of contracts, when you can still act on the findings.',
          },
          {
            path: '/contact',
            price: '£97 add-on',
            title: 'Written Passport Review',
            desc: 'Submit your completed Property Passport. Receive a written risk and opportunity report within 48 hours — constraints identified, planning route recommended, next steps specified. Async. Delivered to your timeline.',
          },
        ].map(item => (
          <Link key={item.path} to={item.path}
            className="group border-t border-border/20 py-8 flex flex-wrap md:flex-nowrap gap-6 md:gap-16 items-start reveal block"
            style={{ textDecoration: 'none' }}>
            <div className="w-full md:w-28 flex-shrink-0">
              <span className={`text-[10px] tracking-[0.1em] uppercase ${item.featured ? 'text-foreground' : 'text-muted-foreground/60'}`}>
                {item.price}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 group-hover:text-muted-foreground transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
            <div className="flex-shrink-0 self-center">
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/30 group-hover:text-foreground transition-colors">→</span>
            </div>
          </Link>
        ))}

        <div className="border-t border-border/20" />
      </section>

      {/* ── 02 DESIGN SERVICES ───────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-20 md:pt-32 md:pb-28 border-t border-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 reveal">
            <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-6">02 — Design services</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Architectural design services for homeowners who want Noorast to carry their intelligence through to planning submission and Building Regulations. RIBA Stages 1–4. Residential. London and the South East.
            </p>
            <p className="text-[10px] text-muted-foreground/40 leading-relaxed">
              Noorast Group Limited is an architectural design consultancy. We are not a registered architects' practice under the Architects Act 1997. Where registration is required, we say so.
            </p>
          </div>
          <div className="lg:col-span-7 lg:pl-16 reveal">
            <div className="border-t border-border/20 pt-10 mb-8">
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-4">Discuss your project</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We offer a free 20-minute discovery call for homeowners ready to commission design work. No sales pressure — if we're not the right fit, we'll tell you and suggest who is.
              </p>
              <Link to="/contact"
                className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors">
                Book a discovery call — Free →
              </Link>
            </div>
          </div>
        </div>

        {[
          {
            path: '/services/pre-architecture-feasibility',
            stage: 'Stage 0–1',
            title: 'Feasibility Assessment',
            desc: 'Constraint mapping, planning history, permitted development assessment, and brief development. Establishes what the project can be before committing resources to design.',
          },
          {
            path: '/services/planning-application-management',
            stage: 'Stage 3',
            title: 'Planning Application Management',
            desc: 'End-to-end management from planning drawings through submission, officer liaison, and decision. Includes one round of revisions within the same application.',
          },
          {
            path: '/services/concept-spatial-design',
            stage: 'Stage 2',
            title: 'Concept & Spatial Design',
            desc: 'The first design response to the brief. Plans, sections, massing, and planning strategy established at a scale that shows how the project will feel to inhabit.',
          },
          {
            path: '/services/residential-extension-loft-conversion',
            stage: 'Stage 2–3',
            title: 'Extension & Loft Conversion',
            desc: 'Considered residential design from permitted development to full planning applications.',
          },
          {
            path: '/services/technical-design-building-regulations',
            stage: 'Stage 4',
            title: 'Technical Design',
            desc: 'Complete construction drawings, materials specification, and Building Regulations submission. The document a contractor builds from.',
          },
          {
            path: '/services/planning-appeal-review',
            stage: 'Post-decision',
            title: 'Planning Refusal Review',
            desc: 'A refused application is a document with specific reasons. We read it, establish whether the reasoning is sound, and prepare grounds of appeal or a redesign strategy.',
          },
        ].map(s => (
          <Link key={s.path} to={s.path}
            className="group border-t border-border/20 py-8 flex flex-wrap md:flex-nowrap gap-6 md:gap-16 items-start reveal block"
            style={{ textDecoration: 'none' }}>
            <div className="w-full md:w-28 flex-shrink-0">
              <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/60">{s.stage}</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 group-hover:text-muted-foreground transition-colors duration-300">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            <div className="flex-shrink-0 self-center">
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/30 group-hover:text-foreground transition-colors">→</span>
            </div>
          </Link>
        ))}

        <div className="border-t border-border/20 pt-12 mt-4 flex flex-wrap items-center justify-between gap-8 reveal">
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Homeowners who complete the Property Passport before commissioning Noorast for design work move faster, cost less, and produce better outcomes.
          </p>
          <Link to="/contact"
            className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors">
            Discuss a commission →
          </Link>
        </div>
      </section>
    </div>
  );
}
