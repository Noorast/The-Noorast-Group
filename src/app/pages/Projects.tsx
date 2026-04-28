import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import projectImage from '../../assets/e947385c703c8e3c623a4d1f62c7deeba551bd6e.png';
import rearExtensionImage from '../../assets/d349c2e1b0a0adb43813b52e67d9047ecc52f575.png';
import veniceImage from '../../assets/fd485c30db969be36e00beb80f2ac31e3eea017e.png';
import modernExtensionImage from '../../assets/e58b5efe29e6b030b0baff045b305e756b3d587b.png';
import { useEffect } from 'react';

const projects = [
  {
    slug: 'victorian-semi-detached-rear-extension',
    image: projectImage,
    location: 'London',
    year: '2025',
    type: 'Rear extension',
    detail: 'Victorian semi-detached · Conservation area · 38m²',
    alt: 'Victorian semi-detached rear extension, London',
  },
  {
    slug: 'victorian-terrace-extension',
    image: rearExtensionImage,
    location: 'London',
    year: '2025',
    type: 'Rear extension',
    detail: 'Victorian terrace · Conservation area · 45m²',
    alt: 'Victorian terrace rear extension, London',
  },
  {
    slug: 'contemporary-concrete-extension',
    image: modernExtensionImage,
    location: 'South East',
    year: '2024',
    type: 'Side and rear extension',
    detail: 'Edwardian semi · Board-marked concrete · 62m²',
    alt: 'Contemporary concrete extension, South East England',
  },
  {
    slug: 'masterplan-venice-housing',
    image: veniceImage,
    location: 'Venice',
    year: '2024',
    type: 'Residential masterplan',
    detail: 'Heritage context · Waterfront · Mixed residential',
    alt: 'Residential masterplan, Venice',
  },
];

export function Projects() {
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
        title="Work — Noorast"
        description="Selected residential projects by Noorast — extensions, loft conversions, and new homes in London and the South East."
      />

      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h1>Work</h1>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm text-muted-foreground max-w-sm lg:ml-auto">
              Residential design in the United Kingdom. Extensions, loft conversions, and new homes. Every project begins with the Property Passport.
            </p>
          </div>
        </div>
      </section>

      {/* Project grid — full width, no containers */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Featured — large */}
        <Link to={`/project/${projects[0].slug}`}
          className="group block mb-2 reveal"
          style={{ textDecoration: 'none' }}>
          <div className="overflow-hidden w-full">
            <img
              src={projects[0].image}
              alt={projects[0].alt}
              className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              style={{ aspectRatio: '16/7', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="flex items-baseline justify-between pt-5 pb-14">
            <div className="flex items-baseline gap-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">{projects[0].location} · {projects[0].year}</span>
              <span className="text-sm text-foreground">{projects[0].type}</span>
            </div>
            <span className="text-xs text-muted-foreground/50 hidden md:block">{projects[0].detail}</span>
          </div>
        </Link>

        {/* Two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
          {projects.slice(1, 3).map(p => (
            <Link key={p.slug} to={`/project/${p.slug}`}
              className="group block reveal"
              style={{ textDecoration: 'none' }}>
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="flex items-baseline justify-between pt-5 pb-14">
                <div className="flex items-baseline gap-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">{p.location} · {p.year}</span>
                  <span className="text-sm text-foreground">{p.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Last single */}
        <Link to={`/project/${projects[3].slug}`}
          className="group block reveal"
          style={{ textDecoration: 'none' }}>
          <div className="overflow-hidden">
            <img
              src={projects[3].image}
              alt={projects[3].alt}
              className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              style={{ aspectRatio: '16/7', objectFit: 'cover' }}
            />
          </div>
          <div className="flex items-baseline justify-between pt-5 pb-20">
            <div className="flex items-baseline gap-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">{projects[3].location} · {projects[3].year}</span>
              <span className="text-sm text-foreground">{projects[3].type}</span>
            </div>
            <span className="text-xs text-muted-foreground/50 hidden md:block">{projects[3].detail}</span>
          </div>
        </Link>
      </div>

      {/* Closing */}
      <section className="border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-wrap items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground max-w-md">
            Every Noorast project begins with the Property Passport — establishing planning constraints, legal position, and financial reality before design begins.
          </p>
          <Link to="/contact"
            className="text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/40 pb-px hover:border-foreground transition-colors whitespace-nowrap">
            Discuss a project →
          </Link>
        </div>
      </section>
    </div>
  );
}
