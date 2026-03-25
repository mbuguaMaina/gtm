// queries/caseStudies.js
import {sanityFetch} from '../lib/sanity.client'

const caseStudyFields = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  client {
    name,
    industry,
    "logo": logo.asset->url
  },
  excerpt,
  challenge,
  solution,
  results,
  publishedDate,
  featured,
  coverImage
`

export async function getAllCaseStudies(preview = false) {
  const query = `*[_type == "caseStudy"] | order(publishedDate desc, _createdAt desc) {
    ${caseStudyFields}
  }`
  return sanityFetch(query, {}, preview)
}

export async function getCaseStudyBySlug(slug: string, preview = false) {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    ${caseStudyFields}
  }`
  return sanityFetch(query, {slug}, preview)
}

export async function getFeaturedCaseStudies(limit = 3, preview = false) {
  const query = `*[_type == "caseStudy" && featured == true] | order(publishedDate desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "thumbnail": thumbnail.asset->url,
    client {
      name,
      industry
    },
    technologies[]
  }`
  return sanityFetch(query, {limit}, preview)
}

export async function getCaseStudyCards(preview = false) {
  const query = `*[_type == "caseStudy"] | order(publishedDate desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "thumbnail": thumbnail.asset->url,
    client {
      name,
      industry,
      "logo": logo.asset->url
    },
    technologies[]
  }`
  return sanityFetch(query, {}, preview)
}

export async function getAllCaseStudySlugs() {
  const query = `*[_type == "caseStudy" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`
  return sanityFetch(query)
}

export async function getCaseStudiesByIndustry(industry: string, preview = false) {
  const query = `*[_type == "caseStudy" && client.industry == $industry] | order(publishedDate desc) {
    ${caseStudyFields}
  }`
  return sanityFetch(query, {industry}, preview)
}

export async function getCaseStudiesByTechnology(technology: string, preview = false) {
  const query = `*[_type == "caseStudy" && $technology in technologies] | order(publishedDate desc) {
    ${caseStudyFields}
  }`
  return sanityFetch(query, {technology}, preview)
}

export async function getCaseStudiesByService(serviceId: string, preview = false) {
  const query = `*[_type == "caseStudy" && relatedService._ref == $serviceId] | order(publishedDate desc) {
    ${caseStudyFields}
  }`
  return sanityFetch(query, {serviceId}, preview)
}

export async function getRelatedCaseStudies(caseStudyId: string, limit = 3, preview = false) {
  const query = `*[_type == "caseStudy" && _id != $caseStudyId] | order(publishedDate desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "thumbnail": thumbnail.asset->url,
    client {
      name
    }
  }`
  return sanityFetch(query, {caseStudyId, limit}, preview)
}

export async function getAllIndustries(preview = false) {
  const query = `array::unique(*[_type == "caseStudy"].client.industry)`
  return sanityFetch(query, {}, preview)
}
