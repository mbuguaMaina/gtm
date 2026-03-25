// queries/settings.js
import {sanityFetch} from '../lib/sanity.client'

export async function getSiteSettings(preview = false) {
  const query = `*[_type == "siteSettings"][0] {
    _id,
    siteName,
    tagline,
    "logo": logo.asset->url,
    "logoDark": logoDark.asset->url,
    "favicon": favicon.asset->url,
    contactInfo {
      email,
      phone,
      address,
      officeHours
    },
    socialLinks {
      facebook,
      twitter,
      linkedin,
      instagram,
      youtube,
      github
    },
    navigation {
      mainMenu[] {
        title,
        link,
        submenu[] {
          title,
          link
        }
      },
      footerMenu[] {
        title,
        links[] {
          title,
          link
        }
      }
    },
    footer {
      copyrightText,
      links[] {
        title,
        url
      },
      showSocialLinks,
      newsletterEnabled,
      newsletterTitle,
      newsletterSubtitle
    },
    seoDefaults {
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset->url,
      keywords[]
    },
    analytics {
      googleAnalyticsId,
      facebookPixelId,
      linkedInInsightTag
    },
    scripts {
      headerScripts,
      bodyScripts
    }
  }`
  return sanityFetch(query, {}, preview)
}

export async function getContactInfo(preview = false) {
  const query = `*[_type == "siteSettings"][0].contactInfo`
  return sanityFetch(query, {}, preview)
}

export async function getSocialLinks(preview = false) {
  const query = `*[_type == "siteSettings"][0].socialLinks`
  return sanityFetch(query, {}, preview)
}

export async function getNavigation(preview = false) {
  const query = `*[_type == "siteSettings"][0].navigation`
  return sanityFetch(query, {}, preview)
}

export async function getFooterConfig(preview = false) {
  const query = `*[_type == "siteSettings"][0] {
    footer,
    socialLinks,
    contactInfo {
      email,
      phone
    }
  }`
  return sanityFetch(query, {}, preview)
}

export async function getSeoDefaults(preview = false) {
  const query = `*[_type == "siteSettings"][0].seoDefaults`
  return sanityFetch(query, {}, preview)
}

export async function getAnalytics(preview = false) {
  const query = `*[_type == "siteSettings"][0].analytics`
  return sanityFetch(query, {}, preview)
}
