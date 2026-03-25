// queries/team.js
import {sanityFetch} from '../lib/sanity.client'

const teamMemberFields = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  name,
  "slug": slug.current,
  role,
  department,
  "image": image.asset->url,
  bio,
  expertise[],
  email,
  phone,
  socialLinks {
    linkedin,
    twitter,
    github,
    website
  },
  order,
  featured
`

export async function getAllTeamMembers(preview = false) {
  const query = `*[_type == "teamMember"] | order(order asc, name asc) {
    ${teamMemberFields}
  }`
  return sanityFetch(query, {}, preview)
}

export async function getTeamMemberBySlug(slug: string, preview = false) {
  const query = `*[_type == "teamMember" && slug.current == $slug][0] {
    ${teamMemberFields},
    "caseStudies": *[_type == "caseStudy" && references(^._id)] {
      _id,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url
    }
  }`
  return sanityFetch(query, {slug}, preview)
}

export async function getFeaturedTeamMembers(preview = false) {
  const query = `*[_type == "teamMember" && featured == true] | order(order asc) {
    ${teamMemberFields}
  }`
  return sanityFetch(query, {}, preview)
}

export async function getTeamCards(preview = false) {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    department,
    "slug": slug.current,
    "image": image.asset->url,
    expertise[]
  }`
  return sanityFetch(query, {}, preview)
}

export async function getAllTeamMemberSlugs() {
  const query = `*[_type == "teamMember" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`
  return sanityFetch(query)
}

export async function getTeamMembersByDepartment(department: string, preview = false) {
  const query = `*[_type == "teamMember" && department == $department] | order(order asc) {
    ${teamMemberFields}
  }`
  return sanityFetch(query, {department}, preview)
}

export async function getAllDepartments(preview = false) {
  const query = `array::unique(*[_type == "teamMember"].department)`
  return sanityFetch(query, {}, preview)
}

// ─── Testimonial Queries ──────────────────────────────────────────────────────

const testimonialFields = `
  _id,
  _type,
  _createdAt,
  clientName,
  clientRole,
  company,
  "photo": photo.asset->url,
  quote,
  rating,
  featured,
  relatedCaseStudy-> {
    _id,
    title,
    "slug": slug.current
  },
  relatedService-> {
    _id,
    title,
    "slug": slug.current
  }
`

export async function getAllTestimonials(preview = false) {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    ${testimonialFields}
  }`
  return sanityFetch(query, {}, preview)
}

export async function getFeaturedTestimonials(limit = 3, preview = false) {
  const query = `*[_type == "testimonial" && featured == true] | order(_createdAt desc) [0...$limit] {
    ${testimonialFields}
  }`
  return sanityFetch(query, {limit}, preview)
}

export async function getTestimonialsByCaseStudy(caseStudyId: string, preview = false) {
  const query = `*[_type == "testimonial" && relatedCaseStudy._ref == $caseStudyId] {
    ${testimonialFields}
  }`
  return sanityFetch(query, {caseStudyId}, preview)
}

export async function getTestimonialsByService(serviceId: string, preview = false) {
  const query = `*[_type == "testimonial" && relatedService._ref == $serviceId] {
    ${testimonialFields}
  }`
  return sanityFetch(query, {serviceId}, preview)
}

export async function getTestimonialsByRating(minRating = 4, preview = false) {
  const query = `*[_type == "testimonial" && rating >= $minRating] | order(rating desc, _createdAt desc) {
    ${testimonialFields}
  }`
  return sanityFetch(query, {minRating}, preview)
}
