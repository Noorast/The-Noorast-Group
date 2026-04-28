import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { STRIPE_TOOLKIT_LINK } from '../../config/stripe';
import { useAuth } from '../../lib/auth';
import { SEO } from '../components/SEO';

const features = [
  {
    group: 'The Passport',
    rows: [
      { label: 'Property Passport — 12 structured sections', free: true, paid: true },
      { label: 'Pre-architecture checklist — 60+ tasks', free: true, paid: true },
      { label: 'Auto-saves to browser', free: true, paid: true },
      { label: 'Cloud sync across all devices', free: false, paid: true },
    ],
  },
  {
    group: 'Planning Intelligence',
    rows: [
      { label: 'Planning constraint lookup', free: '1 query', paid: true },
      { label: 'Planning intelligence engine', free: '3 queries', paid: true },
      { label: 'Intelligence memory across sessions', free: false, paid: true },
      { label: 'Permitted development analysis', free: false, paid: true },
      { label: '240 UK local authorities covered', free: false, paid: true },
    ],
  },
  {
    group: 'Output',
    rows: [
      { label: '200-page Design Intelligence workbook', free: false, paid: true },
      { label: 'PDF export of completed Passport', free: false, paid: true },
      { label: 'Design brief generator', free: false, paid: true },
      { label: 'Architect-ready documentation pack', free: false, paid: true },
    ],
  },
];

function Cell({ value, col }: { value: boolean | string; col: 'free' | 'paid' }) {
  const isPaid = col === 'paid';

  if (value === true) return (
    <span className={isPaid ? 'text-foreground' : 'text-muted-foreground/40'}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );

  if (value === false) return (
    <span className="text-muted-foreground/20">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3.5 7H10.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    </span>
  );

  // Limited string value
  if (col === 'free') return <span className="text-[10px] text-muted-foreground/50">{value as string}</span>;
  return (
    <span className="text-foreground">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export function Toolkit() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [banner, setBanner] = useState<string | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get('success')) setBanner('Payment confirmed. Check your email for access instructions.');
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
        title="Intelligence Toolkit — Noorast"
        description="The structured pre-architecture intelligence workbook for UK homeowners. £97 + VAT, lifetime access."
      />

      {isAdmin && (
        <div className="max-w-[1440px] mx-auto px-6 py-2 md:px-12 bg-foreground">
          <p className="text-[9px] text-background/60 text-center tracking-[0.2em] uppercase">Admin — all features active</p>
        </div>
      )}

      {banner && (
        <div className="max-w-[1440px] mx-auto px-6 py-4 md:px-12 border-b border-border/20">
          <p className="text-sm text-center text-foreground">{banner}</p>
        </div>
      )}

      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="max-w-4xl">
          <h1 className="reveal mb-10">
            Understand your property<br className="hidden md:block" /> before you spend on it.
          </h1>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="reveal text-muted-foreground max-w-2xl">
            Most homeowners discover the covenant, the flood zone, the Article 4 Direction after paying £3,000–£6,000 in design fees. The Property Passport finds them first.
          </p>
        </div>
      </section>

      {/* Comparison — typographic, no heavy borders */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-28 md:pb-36">

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_100px_120px] md:grid-cols-[1fr_130px_160px] border-b border-border/30 pb-4 mb-0">
          <div />
          <div className="text-center">
            <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Free</div>
            <div className="text-xl font-light text-muted-foreground/50">£0</div>
          </div>
          <div className="text-center">
            <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Toolkit</div>
            <div className="text-xl font-light text-foreground">£97 <span className="text-xs font-normal text-muted-foreground">+VAT</span></div>
          </div>
        </div>

        {features.map(group => (
          <div key={group.group}>
            {/* Group label */}
            <div className="grid grid-cols-[1fr_100px_120px] md:grid-cols-[1fr_130px_160px] border-b border-border/20 py-5">
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">{group.group}</div>
              <div />
              <div />
            </div>
            {/* Feature rows */}
            {group.rows.map(row => (
              <div key={row.label}
                className="grid grid-cols-[1fr_100px_120px] md:grid-cols-[1fr_130px_160px] border-b border-border/20 py-4 items-center">
                <span className={`text-sm ${row.free === false ? 'text-muted-foreground/50' : 'text-foreground'}`}>
                  {row.label}
                </span>
                <div className="flex justify-center">
                  <Cell value={row.free} col="free" />
                </div>
                <div className="flex justify-center">
                  <Cell value={row.paid} col="paid" />
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* CTA row */}
        <div className="grid grid-cols-[1fr_100px_120px] md:grid-cols-[1fr_130px_160px] pt-10 gap-4">
          <div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              14-day money-back guarantee. If the toolkit doesn't give you at least £500 of value, full refund.
            </p>
          </div>
          <div className="flex items-start justify-center pt-1">
            <button
              onClick={() => navigate('/toolkit/property-passport')}
              className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors whitespace-nowrap bg-transparent border-0 border-b cursor-pointer p-0">
              Start free →
            </button>
          </div>
          <div className="flex items-start justify-center pt-1">
            <button
              onClick={() => { window.location.href = STRIPE_TOOLKIT_LINK; }}
              className="text-[9px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors whitespace-nowrap bg-transparent border-0 border-b cursor-pointer p-0">
              Get Toolkit — £97 →
            </button>
          </div>
        </div>
      </section>

      {/* Three columns of reasoning — no boxes */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {[
              {
                n: '01',
                title: 'The free tool',
                body: 'Twelve sections, sixty tasks, three planning queries. Saves to your browser. Genuinely useful. What it doesn\'t include: the 200-page workbook, unlimited planning intelligence, cloud sync, or PDF export for your architect.',
              },
              {
                n: '02',
                title: 'The £97 toolkit',
                body: 'The median UK homeowner spends £21,440 on residential works. Paying £97 to establish what\'s possible on your specific property — before a single professional fee — is not optional. One refused planning application costs £3,000–£6,000.',
              },
              {
                n: '03',
                title: 'The methodology',
                body: 'The intelligence draws from government planning data, Land Registry records, local authority decision histories, and building regulations. It is not generic advice. The Passport structures it into twelve sections calibrated to UK residential conditions.',
              },
            ].map(item => (
              <div key={item.n} className="reveal">
                <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-8">{item.n}</div>
                <h3 className="mb-5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — no borders */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-36">
          <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-20">What homeowners say</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-16 lg:gap-x-24">
            {[
              {
                quote: "Our architect said it was the most considered brief she had ever received. We knew our planning constraints and real budget before the first meeting.",
                name: "Sarah & James Whitmore",
                project: "Victorian terrace, South London",
              },
              {
                quote: "It surfaced a flood zone designation and an Article 4 direction we had no idea about. Both would have fundamentally affected our design approach.",
                name: "David Okafor",
                project: "New build, Surrey",
              },
              {
                quote: "We went into every architect meeting with a document that answered every question before it was asked. Worth every penny.",
                name: "Fiona & Thomas Brennan",
                project: "Listed conversion, Kent",
              },
            ].map(t => (
              <div key={t.name} className="reveal border-t border-border/20 pt-8">
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }} className="text-foreground font-light mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs font-medium text-foreground mb-1">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 sections — clean grid */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-36">
          <div className="max-w-2xl mb-20 reveal">
            <h2 className="mb-6">Twelve sections</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each section surfaces something most homeowners discover too late, at too great a cost.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {[
              { n: '01', title: 'Property Details', desc: 'Address, tenure, construction, listing' },
              { n: '02', title: 'Planning History', desc: 'Applications, decisions, conditions' },
              { n: '03', title: 'Planning Policy', desc: 'Local plan, conservation, Article 4' },
              { n: '04', title: 'Legal Constraints', desc: 'Title, covenants, easements' },
              { n: '05', title: 'Site Conditions', desc: 'Drainage, utilities, trees' },
              { n: '06', title: 'Environmental', desc: 'Flood risk, ecology, contamination' },
              { n: '07', title: 'Spatial Record', desc: 'Areas, heights, structure type' },
              { n: '08', title: 'Boundary Record', desc: 'Ownership, party walls, rights' },
              { n: '09', title: 'Circulation', desc: 'Movement, inefficiencies' },
              { n: '10', title: 'Preliminary Brief', desc: 'Requirements, budget, programme' },
              { n: '11', title: 'Constraint Register', desc: 'Consolidated actions required' },
              { n: '12', title: 'Supporting Documents', desc: 'What you have and what you need' },
            ].map(s => (
              <div key={s.n} className="reveal border-t border-border/20 pt-6">
                <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/30 mb-3">{s.n}</div>
                <div className="text-sm font-medium text-foreground mb-2">{s.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-24 pt-12 border-t border-border/20 flex flex-wrap gap-8 items-center justify-between reveal">
            <p className="text-sm text-muted-foreground max-w-xl">
              Every section blank when you walk into an architect's office is time and money they charge you to fill in.
            </p>
            <div className="flex flex-wrap gap-8">
              <button
                onClick={() => navigate('/toolkit/property-passport')}
                className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border/40 pb-px hover:text-foreground hover:border-foreground/40 transition-colors bg-transparent border-0 border-b cursor-pointer p-0">
                Start free →
              </button>
              <button
                onClick={() => { window.location.href = STRIPE_TOOLKIT_LINK; }}
                className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors bg-transparent border-0 border-b cursor-pointer p-0">
                Get the Toolkit — £97 + VAT →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
