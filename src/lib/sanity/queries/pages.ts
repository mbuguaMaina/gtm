// queries/pages.js
import {sanityFetch} from '../lib/sanity.client'

/**
 * Common page fields projection
 */
const pageFields = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  content,
  seoMeta {
    metaTitle,
    metaDescription,
    "ogImage": ogImage.asset->url,
    keywords,
    noIndex
  }
`

/**
 * Get Home Page (singleton)
 */
export async function getHomePage(preview = false) {
  const query = `*[_type == "homePage"][0] {
    ${pageFields},
    hero {
      heading,
      subheading,
      "backgroundImage": backgroundImage.asset->url,
      cta {
        text,
        link,
        style
      }
    },
    sections[] {
      _type,
      _key,
      ...
    }
  }`
  return sanityFetch(query, {}, preview)
}

/**
 * Get About Page (singleton)
 */
export async function getAboutPage(preview = false) {
  const query = `*[_type == "aboutPage"][0] {
    ${pageFields},
    mission,
    vision,
    values[] {
      title,
      description,
      "icon": icon.asset->url
    },
    team[]-> {
      _id,
      name,
      role,
      "image": image.asset->url
    }
  }`
  return sanityFetch(query, {}, preview)
}

/**
 * Get Contact Page (singleton)
 */
export async function getContactPage(preview = false) {
  const query = `*[_type == "contactPage"][0] {
    ${pageFields},
    contactInfo {
      email,
      phone,
      address,
      officeHours
    },
    locations[] {
      name,
      address,
      phone,
      email,
      coordinates {
        lat,
        lng
      }
    },
    socialLinks {
      facebook,
      twitter,
      linkedin,
      instagram
    }
  }`
  return sanityFetch(query, {}, preview)
}

/**
 * Get page by type (generic)
 */
export async function getPageByType(pageType: string, preview = false) {
  const query = `*[_type == $pageType][0] {
    ${pageFields}
  }`
  return sanityFetch(query, {pageType}, preview)
}
