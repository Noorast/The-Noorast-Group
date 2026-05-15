import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, User } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../lib/auth';
import { AuthModal } from './AuthModal';

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolkitOpen, setToolkitOpen] = useState(false);
  const [designOpen, setDesignOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  const [authModal, setAuthModal] = useState<'signin' | 'signup' | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <header className="sticky top-0 z-50 transition-all duration-300" style={{ background: 'var(--background)', borderBottom: scrolled ? '1px solid rgba(40,30,20,0.07)' : 'none' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-24">

            {/* Wordmark */}
            <Link to="/" className="text-foreground hover:opacity-70 transition-opacity" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: "15px", letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 400 }}>NOORAST</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">

              {/* Toolkit dropdown */}
              <div className="relative"
                onMouseEnter={() => setToolkitOpen(true)}
                onMouseLeave={() => setToolkitOpen(false)}>
                <Link to="/toolkit"
                  className={`text-[10px] tracking-[0.15em] uppercase transition-colors flex items-center gap-1.5 ${isActive('/toolkit') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`} style={{ outline: 'none', boxShadow: 'none', border: 'none' }}>
                  Toolkit
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </Link>
                {toolkitOpen && (
                  <div className="absolute top-full left-0 pt-3 w-64 z-50">
                    <div className="bg-background shadow-[0_8px_32px_rgba(0,0,0,0.06)]" style={{ borderTop: "0.5px solid rgba(0,0,0,0.06)" }}>
                      {[
                        { path: '/toolkit/property-passport', label: 'Property Passport', note: 'Free' },
                        { path: '/fee-calculator', label: 'Fee Calculator', note: 'Free' },
                        { path: '/planning-report', label: 'Planning Intelligence Report', note: '£9' },
                        { path: '/toolkit', label: 'Intelligence Toolkit', note: '£97' },
                        { path: '/pre-purchase', label: 'Pre-Purchase Report', note: '£197' },
                      ].map(item => (
                        <Link key={item.path} to={item.path}
                          className="flex items-center justify-between px-5 py-3.5 text-xs border-b border-border/[0.06] last:border-0 text-muted-foreground hover:text-foreground transition-colors">
                          <span>{item.label}</span>
                          <span className="text-muted-foreground/50">{item.note}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Design Services dropdown */}
              <div className="relative"
                onMouseEnter={() => setDesignOpen(true)}
                onMouseLeave={() => setDesignOpen(false)}>
                <Link to="/services"
                  className={`text-[10px] tracking-[0.15em] uppercase transition-colors flex items-center gap-1.5 ${isActive('/services') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  Design Services
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </Link>
                {designOpen && (
                  <div className="absolute top-full left-0 pt-3 w-72 z-50">
                    <div className="bg-background shadow-[0_8px_32px_rgba(0,0,0,0.06)]" style={{ borderTop: "0.5px solid rgba(0,0,0,0.06)" }}>
                      {[
                        { path: '/services', label: 'All services', note: '' },
                        { path: '/services/pre-architecture-feasibility', label: 'Feasibility Assessment', note: 'Stage 0' },
                        { path: '/services/planning-application-management', label: 'Planning Applications', note: 'Stage 3' },
                        { path: '/services/concept-spatial-design', label: 'Concept Design', note: 'Stage 2' },
                        { path: '/services/technical-design-building-regulations', label: 'Technical Design', note: 'Stage 4' },
                        { path: '/services/planning-appeal-review', label: 'Planning Appeal', note: '' },
                      ].map(item => (
                        <Link key={item.path} to={item.path}
                          className="flex items-center justify-between px-5 py-3.5 text-xs border-b border-border/[0.06] last:border-0 text-muted-foreground hover:text-foreground transition-colors">
                          <span>{item.label}</span>
                          {item.note && <span className="text-muted-foreground/50">{item.note}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/project"
                className={`text-[10px] tracking-[0.15em] uppercase transition-colors ${isActive('/project') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Projects
              </Link>

              <Link to="/contact"
                className={`text-[10px] tracking-[0.15em] uppercase transition-colors ${isActive('/contact') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Contact
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {user ? (
                <Link to="/account"
                  className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  style={{ textDecoration: 'none' }}>
                  <User size={12} /> Account
                </Link>
              ) : (
                <button
                  onClick={() => setAuthModal('signin')}
                  className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer">
                  <User size={12} /> Sign in
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-foreground bg-transparent border-none cursor-pointer p-1"
                aria-label="Menu">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {authModal && <AuthModal defaultMode={authModal} onClose={() => setAuthModal(null)} />}

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-8 pt-4 border-t border-border">
              <div className="space-y-8">
                <div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Toolkit</div>
                  <div className="space-y-3">
                    {[
                      ['/toolkit/property-passport', 'Property Passport', 'Free'],
                      ['/fee-calculator', 'Fee Calculator', 'Free'],
                      ['/planning-report', 'Planning Intelligence Report', '£9'],
                      ['/toolkit', 'Intelligence Toolkit', '£97'],
                      ['/pre-purchase', 'Pre-Purchase Report', '£197'],
                    ].map(([path, label, note]) => (
                      <Link key={path} to={path}
                        className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span>{label}</span>
                        <span className="text-xs text-muted-foreground/50">{note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Design Services</div>
                  <div className="space-y-3">
                    {[
                      ['/services', 'All services'],
                      ['/services/planning-application-management', 'Planning Applications'],
                      ['/services/concept-spatial-design', 'Concept Design'],
                      ['/services/technical-design-building-regulations', 'Technical Design'],
                      ['/services/planning-appeal-review', 'Planning Appeal'],
                    ].map(([path, label]) => (
                      <Link key={path} to={path}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    ['/project', 'Projects'],
                    ['/practice', 'About Noorast'],
                    ['/contact', 'Contact'],
                  ].map(([path, label]) => (
                    <Link key={path} to={path}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/40">
                  {user ? (
                    <Link to="/account" className="text-sm text-muted-foreground flex items-center gap-2">
                      <User size={13} /> Account
                    </Link>
                  ) : (
                    <button onClick={() => { setAuthModal('signin'); }}
                      className="text-sm text-muted-foreground flex items-center gap-2 bg-transparent border-none cursor-pointer p-0">
                      <User size={13} /> Sign in
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

            <footer className="border-t border-border/15 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10 md:pt-28 md:pb-12">

          {/* Large wordmark — the brand anchors the footer */}
          <div className="mb-20 md:mb-28">
            <Link to="/" className="inline-block" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1 }}
                style={{ color: "rgba(40,30,20,0.07)" }} className="hover:opacity-[0.14] transition-opacity duration-500">
                NOORAST
              </span>
            </Link>
          </div>

          {/* Two columns only — not four */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">

            <div className="md:col-span-1">
              <p style={{ fontSize: '0.75rem' }} className="text-muted-foreground leading-relaxed mb-5 max-w-xs">
                Property intelligence and architectural design. London.
              </p>
              <a href="mailto:design@noorast.co.uk"
                style={{ fontSize: '0.75rem' }}
                className="text-foreground hover:text-muted-foreground transition-colors border-b border-foreground/20 pb-px">
                design@noorast.co.uk
              </a>
            </div>

            <div>
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em' }}
                className="uppercase text-muted-foreground/40 mb-5">Intelligence</p>
              <div className="space-y-3">
                {[
                  ['/toolkit/property-passport', 'Property Passport', 'Free'],
                  ['/planning-report', 'Planning Report', '£9'],
                  ['/toolkit', 'Intelligence Toolkit', '£97'],
                  ['/pre-purchase', 'Pre-Purchase Report', '£197'],
                  ['/fee-calculator', 'Fee Calculator', 'Free'],
                ].map(([href, label, price]) => (
                  <div key={href} className="flex items-baseline justify-between">
                    <Link to={href} style={{ fontSize: '0.75rem' }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      style={{ textDecoration: 'none', fontSize: '0.75rem' }}>
                      {label}
                    </Link>
                    <span style={{ fontSize: '0.625rem' }} className="text-muted-foreground/35">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em' }}
                className="uppercase text-muted-foreground/40 mb-5">Design Services</p>
              <div className="space-y-3 mb-8">
                {[
                  ['/services/planning-application-management', 'Planning Applications'],
                  ['/services/concept-spatial-design', 'Concept Design'],
                  ['/services/technical-design-building-regulations', 'Technical Design'],
                  ['/services/planning-appeal-review', 'Planning Appeal'],
                ].map(([href, label]) => (
                  <Link key={href} to={href} style={{ fontSize: '0.75rem', textDecoration: 'none', display: 'block' }}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em' }}
                className="uppercase text-muted-foreground/40 mb-5">Studio</p>
              <div className="space-y-3">
                {[
                  ['/work', 'Work'],
                  ['/studio', 'Studio'],
                  ['/contact', 'Contact'],
                ].map(([href, label]) => (
                  <Link key={href} to={href} style={{ fontSize: '0.75rem', textDecoration: 'none', display: 'block' }}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-border/15 flex flex-col md:flex-row justify-between gap-4">
            <p style={{ fontSize: '0.625rem', letterSpacing: '0.04em' }}
              className="text-muted-foreground/30">
              © {new Date().getFullYear()} Noorast Group Limited. Registered in England and Wales.<br className="md:hidden" /> Not a registered architects&apos; practice under the Architects Act 1997.
            </p>
            <nav className="flex items-center gap-6">
              {[['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/cookies', 'Cookies']].map(([href, label]) => (
                <Link key={href} to={href}
                  style={{ fontSize: '0.625rem', letterSpacing: '0.08em', textDecoration: 'none' }}
                  className="text-muted-foreground/30 hover:text-foreground transition-colors uppercase">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </footer>
    </div>
  );
}
