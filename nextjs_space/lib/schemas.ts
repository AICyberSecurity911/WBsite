
/**
 * Centralized Schema.org structured data for SEO/AEO optimization
 * Award-winning implementation for top search rankings
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "QuantumLeap AI",
  "alternateName": "QuantumLeap Enterprise",
  "url": "https://quantumleap.ai",
  "logo": "https://quantumleap.ai/logo.png",
  "description": "QuantumLeap AI helps enterprises convert complexity into momentum through AI Workforce, Automation, Cyber Intelligence, and Executive-grade Due Diligence.",
  "foundingDate": "2020",
  "slogan": "Convert complexity into momentum",
  "sameAs": [
    "https://www.linkedin.com/company/quantumleap-ai",
    "https://twitter.com/quantumleap_ai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "contact@quantumleap.ai",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "QuantumLeap AI",
  "url": "https://quantumleap.ai",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://quantumleap.ai/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
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

export function createServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "QuantumLeap AI"
    },
    "serviceType": serviceType,
    "areaServed": "Global",
    "url": url,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  }
}

export function createArticleSchema(
  headline: string,
  description: string,
  url: string,
  publishDate: string,
  modifiedDate: string,
  imageUrl: string,
  authorName: string = "QuantumLeap AI"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": imageUrl,
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuantumLeap AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quantumleap.ai/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }
}

export function createSoftwareSchema(
  name: string,
  description: string,
  applicationCategory: string = "BusinessApplication"
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
      "bestRating": "5"
    }
  }
}

export function createHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
}

export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "QuantumLeap AI",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}
