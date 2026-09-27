import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schemaType?: 'Organization' | 'Service' | 'Article' | 'LocalBusiness';
  schemaData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'NovaRise Digital — Digital Growth. Designed to Perform.',
  description = 'NovaRise Digital is a full-service digital marketing and creative agency helping ambitious brands attract the right audience and turn attention into measurable business results.',
  canonicalUrl = window.location.href,
  schemaType = 'Organization',
  schemaData
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Meta Description update
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Schema JSON-LD Injection
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const defaultOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'MarketingAgency',
      'name': 'NovaRise Digital',
      'url': 'https://novarisedigital.com',
      'logo': 'https://novarisedigital.com/logo.png',
      'description': description,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Jaipur',
        'addressRegion': 'Rajasthan',
        'addressCountry': 'India'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91 98765 43210',
        'contactType': 'customer service',
        'email': 'hello@novarisedigital.com'
      },
      'sameAs': [
        'https://linkedin.com/company/novarisedigital',
        'https://instagram.com/novarisedigital',
        'https://facebook.com/novarisedigital',
        'https://x.com/novarisedigital',
        'https://youtube.com/novarisedigital'
      ]
    };

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData || defaultOrganizationSchema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, schemaType, schemaData]);

  return null;
};
