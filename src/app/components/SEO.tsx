import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({
  title = 'Noorast — Property Intelligence & Architectural Design. London.',
  description = 'Noorast is a property intelligence consultancy and architectural design practice in London. We establish what is possible on your property before design begins — planning constraints, legal position, spatial capacity, financial reality.',
  keywords = 'property intelligence UK, pre-architecture research London, extension feasibility homeowner, planning constraint check, what can I build on my property, extension cost calculator UK, permitted development rules 2026, architectural design London, residential design consultancy',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.noorast.co.uk" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="geo.region" content="GB-LND" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Noorast Group Limited",
        "description": "Property intelligence consultancy and architectural design practice in London",
        "url": "https://www.noorast.co.uk",
        "address": { "@type": "PostalAddress", "addressLocality": "London", "addressCountry": "GB" },
        "areaServed": [
          { "@type": "City", "name": "London" },
          { "@type": "AdministrativeArea", "name": "Greater London" }
        ],
        "knowsAbout": [
          "Property Intelligence", "Permitted Development", "Planning Constraints",
          "Residential Architecture", "Extension Feasibility", "Building Regulations"
        ]
      })}</script>
    </Helmet>
  );
}
