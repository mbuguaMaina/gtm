// types/sanity.types.ts

/**
 * Base Sanity document interface
 */
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt?: string
  _updatedAt?: string
  _rev?: string
}

/**
 * Image asset
 */
export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
    url?: string
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

/**
 * SEO fields
 */
export interface SEO {
  metaTitle?: string
  metaDescription?: string
  ogImage?: string
  keywords?: string[]
  noIndex?: boolean
}

/**
 * Link object
 */
export interface Link {
  linkType: 'internal' | 'external'
  internalLink?: string
  externalUrl?: string
  text?: string
  openInNewTab?: boolean
}

/**
 * Hero section
 */
export interface Hero {
  heading: string
  subheading?: string
  backgroundImage?: string
  ctaButton?: Link
  secondaryButton?: Link
  overlayOpacity?: number
}

/**
 * Block content (Portable Text)
 */
export type BlockContent = any[] // Use @portabletext/types for full typing

/**
 * Page document
 */
export interface Page extends SanityDocument {
  _type: 'page'
  title: string
  slug: string
  hero?: Hero
  content?: BlockContent
  showInNavigation?: boolean
  navigationOrder?: number
  isHomePage?: boolean
  seo?: SEO
}

/**
 * Blog Post document
 */
export interface Post extends SanityDocument {
  _type: 'post'
  title: string
  slug: string
  author?: TeamMember
  publishedAt: string
  mainImage?: {
    url: string
    alt: string
    dimensions?: {
      width: number
      height: number
      aspectRatio: number
    }
  }
  excerpt?: string
  body?: BlockContent
  categories?: string[]
  tags?: string[]
  featured?: boolean
  relatedPosts?: Post[]
  seo?: SEO
}

/**
 * Service feature
 */
export interface ServiceFeature {
  title: string
  description?: string
}

/**
 * Service document
 */
export interface Service extends SanityDocument {
  _type: 'service'
  title: string
  slug: string
  shortDescription: string
  icon?: string
  featuredImage?: {
    url: string
    alt: string
  }
  description?: BlockContent
  features?: ServiceFeature[]
  technologies?: string[]
  order?: number
  featured?: boolean
  relatedProjects?: Project[]
  seo?: SEO
}

/**
 * Project document
 */
export interface Project extends SanityDocument {
  _type: 'project'
  title: string
  slug: string
  client?: string
  projectType?: string
  shortDescription: string
  featuredImage?: {
    url: string
    alt: string
  }
  gallery?: Array<{
    url: string
    alt: string
    caption?: string
  }>
  overview?: BlockContent
  challenge?: BlockContent
  solution?: BlockContent
  results?: BlockContent
  technologies?: string[]
  relatedService?: Service
  projectUrl?: string
  completionDate?: string
  featured?: boolean
  testimonial?: Testimonial
  seo?: SEO
}

/**
 * Social media links
 */
export interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
}

/**
 * Team Member document
 */
export interface TeamMember extends SanityDocument {
  _type: 'teamMember'
  name: string
  slug: string
  role: string
  image?: {
    url: string
    alt: string
  }
  bio?: BlockContent
  shortBio?: string
  email?: string
  phone?: string
  socialLinks?: SocialLinks
  specialties?: string[]
  order?: number
  showOnWebsite?: boolean
}

/**
 * Testimonial document
 */
export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  clientName: string
  clientRole?: string
  company?: string
  clientPhoto?: {
    url: string
    alt?: string
  }
  quote: string
  rating?: number
  relatedProject?: Project
  relatedService?: Service
  featured?: boolean
  showOnWebsite?: boolean
  date?: string
}

/**
 * Footer link section
 */
export interface FooterLinkSection {
  title: string
  links: Link[]
}

/**
 * Site Settings document
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  siteTitle: string
  siteTagline?: string
  logo?: string
  logoAlt?: string
  favicon?: string
  companyEmail?: string
  companyPhone?: string
  companyAddress?: string
  officeHours?: string
  socialMedia?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
    youtube?: string
  }
  footerText?: string
  footerLinks?: FooterLinkSection[]
  defaultSeo?: SEO
  googleAnalyticsId?: string
  facebookPixelId?: string
}

/**
 * API Response types
 */
export interface SanityResponse<T> {
  data: T | null
  error: string | null
}

export interface PaginatedResponse<T> {
  posts: T[]
  total: number
}
