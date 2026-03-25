// utils/seo.js

/**
 * Generate SEO metadata from Sanity data
 * @param {Object} page - Page data with SEO fields
 * @param {Object} siteSettings - Global site settings
 * @returns {Object} SEO metadata object
 */
export function generateSeoMetadata(page: any, siteSettings: any) {
  const defaultSeo = siteSettings?.defaultSeo || {}
  const pageSeo = page?.seo || {}

  // Use page-specific SEO or fall back to defaults
  const title = pageSeo.metaTitle || page?.title || defaultSeo.metaTitle || siteSettings?.siteTitle
  const description = pageSeo.metaDescription || page?.excerpt || defaultSeo.metaDescription
  const ogImage = pageSeo.ogImage || page?.mainImage?.url || defaultSeo.ogImage
  const keywords = pageSeo.keywords || defaultSeo.keywords || []
  const noIndex = pageSeo.noIndex || defaultSeo.noIndex || false

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{url: ogImage}] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    keywords: keywords.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
  }
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema(siteSettings: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteSettings?.siteTitle,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: siteSettings?.logo,
    description: siteSettings?.siteTagline,
    email: siteSettings?.companyEmail,
    telephone: siteSettings?.companyPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteSettings?.companyAddress,
    },
    sameAs: Object.values(siteSettings?.socialMedia || {}).filter(Boolean),
  }
}

/**
 * Generate JSON-LD structured data for blog post
 */
export function generateBlogPostSchema(post: any, siteSettings: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage?.url,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteSettings?.siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: siteSettings?.logo,
      },
    },
  }
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate review schema
 */
export function generateReviewSchema(testimonial: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.clientName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    reviewBody: testimonial.quote,
  }
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ggmtechnologies.co.ke'
  return `${baseUrl}/${slug}`
}
