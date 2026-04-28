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
      <header className={`sticky top-0 z-50 bg-background transition-all duration-300 ${scrolled ? 'border-b border-border/40' : ''}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Wordmark */}
            <Link to="/" className="text-foreground hover:opacity-70 transition-opacity" style={{ textDecoration: 'none' }}>
              <span className="text-[13px] tracking-[0.35em] uppercase font-normal">NOORAST</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">

              {/* Toolkit dropdown */}
              <div className="relative"
                onMouseEnter={() => setToolkitOpen(true)}
                onMouseLeave={() => setToolkitOpen(false)}>
                <Link to="/toolkit"
                  className={`text-[10px] tracking-[0.15em] uppercase transition-colors flex items-center gap-1.5 ${isActive('/toolkit') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  Toolkit
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </Link>
                {toolkitOpen && (
                  <div className="absolute top-full left-0 pt-3 w-64 z-50">
                    <div className="bg-background border border-border shadow-sm">
                      {[
                        { path: '/toolkit/property-passport', label: 'Property Passport', note: 'Free' },
                        { path: '/fee-calculator', label: 'Fee Calculator', note: 'Free' },
                        { path: '/planning-report', label: 'Planning Intelligence Report', note: '£9' },
                        { path: '/toolkit', label: 'Intelligence Toolkit', note: '£97' },
                        { path: '/pre-purchase', label: 'Pre-Purchase Report', note: '£197' },
                      ].map(item => (
                        <Link key={item.path} to={item.path}
                          className="flex items-center justify-between px-5 py-3 text-xs border-b border-border/30 last:border-0 text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors">
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
                  className={`text-xs tracking-[0.1em] uppercase transition-colors flex items-center gap-1.5 ${isActive('/services') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  Design Services
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </Link>
                {designOpen && (
                  <div className="absolute top-full left-0 pt-3 w-72 z-50">
                    <div className="bg-background border border-border shadow-sm">
                      {[
                        { path: '/services', label: 'All services', note: '' },
                        { path: '/services/pre-architecture-feasibility', label: 'Feasibility Assessment', note: 'Stage 0' },
                        { path: '/services/planning-application-management', label: 'Planning Applications', note: 'Stage 3' },
                        { path: '/services/concept-spatial-design', label: 'Concept Design', note: 'Stage 2' },
                        { path: '/services/technical-design-building-regulations', label: 'Technical Design', note: 'Stage 4' },
                        { path: '/services/planning-appeal-review', label: 'Planning Appeal', note: '' },
                      ].map(item => (
                        <Link key={item.path} to={item.path}
                          className="flex items-center justify-between px-5 py-3 text-xs border-b border-border/30 last:border-0 text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors">
                          <span>{item.label}</span>
                          {item.note && <span className="text-muted-foreground/50">{item.note}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/project"
                className={`text-xs tracking-[0.1em] uppercase transition-colors ${isActive('/project') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Projects
              </Link>

              <Link to="/contact"
                className={`text-xs tracking-[0.1em] uppercase transition-colors ${isActive('/contact') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
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

      <footer className="border-t border-border/40 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-12 lg:px-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            <div className="md:col-span-1">
              <div className="text-xs tracking-[0.25em] uppercase font-light mb-5">Noorast</div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                Property intelligence. Architectural design. London.
              </p>
              <a href="mailto:design@noorast.co.uk" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                design@noorast.co.uk
              </a>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Intelligence</div>
              <div className="space-y-2.5">
                {[
                  ['/toolkit/property-passport', 'Property Passport — Free'],
                  ['/fee-calculator', 'Fee Calculator — Free'],
                  ['/planning-report', 'Planning Report — £9'],
                  ['/toolkit', 'Intelligence Toolkit — £97'],
                  ['/pre-purchase', 'Pre-Purchase Report — £197'],
                ].map(([href, label]) => (
                  <div key={href}>
                    <Link to={href} className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ textDecoration: 'none' }}>
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Design Services</div>
              <div className="space-y-2.5">
                {[
                  ['/services/pre-architecture-feasibility', 'Feasibility'],
                  ['/services/planning-application-management', 'Planning Applications'],
                  ['/services/concept-spatial-design', 'Concept Design'],
                  ['/services/technical-design-building-regulations', 'Technical Design'],
                  ['/services/tender-contractor-coordination', 'Contractor Coordination'],
                  ['/services/planning-appeal-review', 'Planning Appeal'],
                ].map(([href, label]) => (
                  <div key={href}>
                    <Link to={href} className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ textDecoration: 'none' }}>
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Company</div>
              <div className="space-y-2.5 mb-6">
                {[
                  ['/work', 'Work'],
                  ['/studio', 'Studio'],
                  ['/contact', 'Contact'],
                  ['/contact', 'Contact'],
                ].map(([href, label]) => (
                  <div key={href}>
                    <Link to={href} className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ textDecoration: 'none' }}>
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Location</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                [INSERT_REGISTERED_OFFICE_ADDRESS]<br />
                London, United Kingdom
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[10px] text-muted-foreground/40 tracking-wide">
              © {new Date().getFullYear()} Noorast Group Limited. Registered in England and Wales. Architectural design consultancy — not a registered architects' practice under the Architects Act 1997.
            </p>
            <nav className="flex items-center gap-6">
              {[['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/cookies', 'Cookies']].map(([href, label]) => (
                <Link key={href} to={href}
                  className="text-[10px] text-muted-foreground/40 hover:text-foreground transition-colors tracking-wide"
                  style={{ textDecoration: 'none' }}>
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
