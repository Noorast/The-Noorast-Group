import { useState } from 'react';
import { SEO } from '../components/SEO';

const LONDON_POSTCODES = ['E', 'EC', 'N', 'NW', 'SE', 'SW', 'W', 'WC', 'BR', 'CR', 'DA', 'EN', 'HA', 'IG', 'KT', 'RM', 'SM', 'TW', 'UB', 'WD'];

function isLondon(postcode: string): boolean {
  return LONDON_POSTCODES.some(p => postcode.toUpperCase().startsWith(p));
}

function formatGBP(n: number): string {
  return '£' + Math.round(n / 100) * 100 === n
    ? '£' + n.toLocaleString()
    : '£' + Math.round(n).toLocaleString();
}

function range(low: number, high: number, london = false) {
  const mult = london ? 1.3 : 1;
  return `${formatGBP(low * mult)}–${formatGBP(high * mult)}`;
}

export function FeeCalculator() {
  const [form, setForm] = useState({
    projectType: '',
    size: '',
    spec: '',
    postcode: '',
    stage: '',
  });
  const [result, setResult] = useState<any>(null);

  const set = (k: string, v: string) => {
    setForm(p => ({ ...p, [k]: v }));
    setResult(null);
  };

  const calculate = () => {
    const london = isLondon(form.postcode);
    const mult = london ? 1.3 : 1;
    const size = parseFloat(form.size) || 30;

    const rates: Record<string, [number, number]> = {
      basic: [1400, 1800],
      standard: [1800, 2500],
      high: [2500, 3500],
      premium: [3500, 5000],
    };
    const [low, high] = rates[form.spec] || rates.standard;

    const constructionLow = Math.round(low * size * mult);
    const constructionHigh = Math.round(high * size * mult);
    const constructionMid = Math.round((constructionLow + constructionHigh) / 2);

    // Professional fees
    const archPct = form.stage === 'planning' ? 0.06 : form.stage === 'full' ? 0.12 : 0.09;
    const archLow = Math.round(constructionLow * archPct);
    const archHigh = Math.round(constructionHigh * archPct);

    const structLow = Math.round(constructionLow * 0.025);
    const structHigh = Math.round(constructionHigh * 0.025);

    const planningFee = form.projectType === 'extension' || form.projectType === 'loft' ? 258 : 528;

    const buildingControlLow = 800;
    const buildingControlHigh = 1800;

    const partyWall = form.projectType === 'extension' ? '£700–1,500 (if applicable)' : 'Not typically required';

    const totalProfLow = archLow + structLow + planningFee + buildingControlLow;
    const totalProfHigh = archHigh + structHigh + planningFee + buildingControlHigh;

    const grandLow = constructionLow + totalProfLow;
    const grandHigh = constructionHigh + totalProfHigh;
    const contingencyLow = Math.round(constructionLow * 0.1);
    const contingencyHigh = Math.round(constructionHigh * 0.15);

    setResult({
      london, size, spec: form.spec,
      constructionLow, constructionHigh,
      archLow, archHigh, structLow, structHigh,
      planningFee, buildingControlLow, buildingControlHigh,
      partyWall, totalProfLow, totalProfHigh,
      grandLow, grandHigh, contingencyLow, contingencyHigh,
      ratePerSqm: `${formatGBP(low * mult)}–${formatGBP(high * mult)}`,
    });
  };

  const ready = form.projectType && form.size && form.spec && form.stage;

  return (
    <div>
      <SEO title="Fee Calculator — Noorast" description="Estimate construction and professional fees for UK residential extensions and loft conversions." />

      <section className="max-w-[1440px] mx-auto px-6 py-24 md:px-12 lg:px-16 md:py-28 border-b border-border/40">
        <div className="max-w-2xl">
          <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground mb-6">Planning & Cost</div>
          <h1 className="mb-6 leading-[1.03]">Fee Calculator</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Indicative construction and professional fee estimates for UK residential projects. Based on 2024/25 benchmark rates.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Form */}
          <div className="space-y-8">
            {[
              {
                key: 'projectType', label: 'Project type',
                options: [
                  { v: 'extension', l: 'Single-storey extension' },
                  { v: 'double', l: 'Double-storey extension' },
                  { v: 'loft', l: 'Loft conversion' },
                  { v: 'renovation', l: 'Whole-house renovation' },
                ],
              },
              {
                key: 'spec', label: 'Specification level',
                options: [
                  { v: 'basic', l: 'Basic — developer quality finishes' },
                  { v: 'standard', l: 'Standard — good quality throughout' },
                  { v: 'high', l: 'High spec — premium finishes, bespoke joinery' },
                  { v: 'premium', l: 'Premium — architect-designed, exceptional quality' },
                ],
              },
              {
                key: 'stage', label: 'Services required',
                options: [
                  { v: 'planning', l: 'Planning application only (Stages 0–3)' },
                  { v: 'partial', l: 'Planning + Building Regulations (Stages 0–4)' },
                  { v: 'full', l: 'Full service (Stages 0–4 + contractor coordination)' },
                ],
              },
            ].map(field => (
              <div key={field.key}>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">{field.label}</label>
                <div className="grid grid-cols-1 gap-2">
                  {field.options.map(opt => (
                    <label key={opt.v} className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all ${(form as any)[field.key] === opt.v ? 'border-foreground bg-muted/10' : 'border-border/50 hover:border-foreground/30'}`}>
                      <input type="radio" name={field.key} value={opt.v} checked={(form as any)[field.key] === opt.v} onChange={() => set(field.key, opt.v)} className="accent-foreground" />
                      <span className="text-sm text-foreground font-light">{opt.l}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">Floor area (m²)</label>
                <input
                  type="number" value={form.size} onChange={e => set('size', e.target.value)}
                  placeholder="e.g. 30"
                  className="w-full border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/30"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">Postcode (optional)</label>
                <input
                  type="text" value={form.postcode} onChange={e => set('postcode', e.target.value)}
                  placeholder="e.g. SW1A or M1"
                  className="w-full border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/30"
                />
                <p className="text-[10px] text-muted-foreground mt-1">London rates are ~30% higher</p>
              </div>
            </div>

            <button
              onClick={calculate} disabled={!ready}
              className="w-full py-4 bg-foreground text-background text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/85 transition-colors disabled:opacity-30 cursor-pointer border-none"
            >
              Calculate estimates
            </button>
          </div>

          {/* Results */}
          <div>
            {!result ? (
              <div className="border border-border/30 p-10 text-center">
                <p className="text-sm text-muted-foreground font-light">Complete the form to see cost estimates</p>
              </div>
            ) : (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>

                {result.london && (
                  <div className="mb-5 px-4 py-2.5 border border-border/50 bg-muted/10 text-xs text-muted-foreground">
                    London location detected — rates include ~30% regional uplift
                  </div>
                )}

                {/* Construction */}
                <div className="mb-8">
                  <div className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground mb-4 font-medium pb-3 border-b border-border/40">Construction cost</div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm text-muted-foreground font-light">{result.size}m² at {result.ratePerSqm}/m²</span>
                    <span className="text-2xl font-light text-foreground">
                      {formatGBP(result.constructionLow)}–{formatGBP(result.constructionHigh)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Contingency (10–15%): {formatGBP(result.contingencyLow)}–{formatGBP(result.contingencyHigh)}</p>
                </div>

                {/* Professional fees */}
                <div className="mb-8">
                  <div className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground mb-4 font-medium pb-3 border-b border-border/40">Professional fees</div>
                  <div className="space-y-0">
                    {[
                      { label: 'Architect', val: `${formatGBP(result.archLow)}–${formatGBP(result.archHigh)}` },
                      { label: 'Structural engineer', val: `${formatGBP(result.structLow)}–${formatGBP(result.structHigh)}` },
                      { label: 'Planning application fee', val: formatGBP(result.planningFee) },
                      { label: 'Building control', val: `${formatGBP(result.buildingControlLow)}–${formatGBP(result.buildingControlHigh)}` },
                      { label: 'Party wall surveyor', val: result.partyWall },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between py-3 border-b border-border/30">
                        <span className="text-sm text-muted-foreground font-light">{row.label}</span>
                        <span className="text-sm text-foreground font-light">{row.val}</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-3 font-medium">
                      <span className="text-sm text-foreground">Total professional fees</span>
                      <span className="text-sm text-foreground">{formatGBP(result.totalProfLow)}–{formatGBP(result.totalProfHigh)}</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="p-6 border border-foreground/20 bg-muted/10">
                  <div className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Estimated total project cost</div>
                  <div className="text-3xl font-light text-foreground mb-2">
                    {formatGBP(result.grandLow)}–{formatGBP(result.grandHigh)}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Excluding VAT (20% on extensions). Contingency not included. All figures are indicative benchmarks for budgeting purposes — actual costs depend on site conditions, specification, and contractor.</p>
                </div>

                {/* Toolkit upsell CTA */}
                <div className="mt-6 pt-6 border-t border-border/40 bg-muted/10 p-6">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Before you commission anyone</p>
                  <p className="text-sm text-foreground font-light leading-relaxed mb-2">
                    You now know the headline number. But this estimate doesn't tell you whether your permitted development rights are intact, what covenants are on your title register, or whether similar projects have been refused by your council.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                    The Intelligence Toolkit covers all of that — 12 sections of structured intelligence before you spend a penny on professional fees.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/toolkit" className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-[10px] tracking-[0.12em] uppercase hover:bg-foreground/85 transition-colors" style={{ textDecoration: 'none' }}>
                      Get the Toolkit — £97 + VAT →
                    </a>
                    <a href="/toolkit/property-passport" className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/30 text-foreground text-[10px] tracking-[0.12em] uppercase hover:border-foreground transition-colors" style={{ textDecoration: 'none' }}>
                      Try free first
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
