// queries/services.js
import {sanityFetch} from '../lib/sanity.client'

const serviceFields = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  description,
  "icon": icon.asset->url,
  "featuredImage": featuredImage.asset->url,
  features[] {
    title,
    description,
    "icon": icon.asset->url
  },
  technologies[],
  pricing {
    model,
    startingPrice,
    currency
  },
  cta {
    text,
    link,
    style
  },
  relatedCaseStudies[]-> {
    _id,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url
  },
  seoMeta {
    metaTitle,
    metaDescription,
    "ogImage": ogImage.asset->url,
    keywords,
    noIndex
  }
`

export async function getAllServices(preview = false) {
  const query = `*[_type == "service"] | order(order asc, _createdAt desc) {
    ${serviceFields}
  }`
  return sanityFetch(query, {}, preview)
}

export async function getServiceBySlug(slug: string, preview = false) {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    ${serviceFields}
  }`
  return sanityFetch(query, {slug}, preview)
}

export async function getFeaturedServices(limit = 3, preview = false) {
  const query = `*[_type == "service" && featured == true] | order(order asc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "icon": icon.asset->url,
    "featuredImage": featuredImage.asset->url
  }`
  return sanityFetch(query, {limit}, preview)
}

export async function getServiceCards(preview = false) {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "icon": icon.asset->url,
    technologies[]
  }`
  return sanityFetch(query, {}, preview)
}

export async function getAllServiceSlugs() {
  const query = `*[_type == "service" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`
  return sanityFetch(query)
}

export async function getServicesByTechnology(technology: string, preview = false) {
  const query = `*[_type == "service" && $technology in technologies] | order(order asc) {
    ${serviceFields}
  }`
  return sanityFetch(query, {technology}, preview)
}

export async function getRelatedServices(serviceId: string, limit = 3, preview = false) {
  const query = `*[_type == "service" && _id != $serviceId] | order(order asc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "icon": icon.asset->url
  }`
  return sanityFetch(query, {serviceId, limit}, preview)
}
