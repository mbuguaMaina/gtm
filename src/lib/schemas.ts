export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "@id": "https://www.ggmtechnologies.ac.ke/#organization",
    "name": "GGM Technologies",
    "url": "https://www.ggmtechnologies.ac.ke",
    "logo": "https://www.ggmtechnologies.ac.ke/logo.png",
    "description": "GGM Technologies is a digital marketing and technology agency specializing in SEO, branding, website development, and digital growth strategies.",
    "email": "info@ggmtechnologies.ac.ke",
    "telephone": "+254700412990",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://www.facebook.com/ggmtechnologies",
      "https://www.instagram.com/ggmtechnologies",
      "https://www.linkedin.com/company/ggmtechnologies"
    ]
  }
}

export function WebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ggmtechnologies.ac.ke/#website",
    "url": "https://www.ggmtechnologies.ac.ke",
    "name": "GGM Technologies",
    "publisher": {
      "@id": "https://www.ggmtechnologies.ac.ke/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.ggmtechnologies.ac.ke/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}
export function WebPageSchema({
  title,
  description,
  url
}:{
  title: string,
  description: string,
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://www.ggmtechnologies.ac.ke/#website"
    },
    "about": {
      "@id": "https://www.ggmtechnologies.ac.ke/#organization"
    }
  }
}
export function BreadcrumbSchema(items: any[] = []) {
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

export function ServiceSchema({
  name,
  description,
  url
}:{
    name:string,
    description:string,
    url:string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@id": "https://www.ggmtechnologies.ac.ke/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  }
}

export function FAQSchema(faqs:any[] = []) {
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

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified
}:{
    title:string,
    description:string,
    url:string,
    image:string,
    datePublished:string,
    dateModified:string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "GGM Technologies"
    },
    "publisher": {
      "@id": "https://www.ggmtechnologies.ac.ke/#organization"
    },
    "mainEntityOfPage": url
  }
}


