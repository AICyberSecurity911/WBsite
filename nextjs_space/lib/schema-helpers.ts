// Schema.org helper functions for SEO/AEO/AGO

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QuantumLeap AI",
    "url": "https://quantumleap-io-55l56u.abacusai.app",
    "logo": "https://quantumleap-io-55l56u.abacusai.app/logo.png",
    "description": "Custom AI solutions for SMBs: intelligent automation, cyber intelligence, background checks, and business transformation services.",
    "founder": {
      "@type": "Person",
      "name": "Paras Khurana"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export function createServiceSchema(service: {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "provider": {
      "@type": "Organization",
      "name": service.provider || "QuantumLeap AI"
    },
    "areaServed": service.areaServed || "US"
  }
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}
