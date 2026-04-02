// queries/posts.js  
import {sanityFetch} from '../lib/sanity.client'

const postFields = `
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  authors[] -> {
  "authorPhoto":photo.asset->url,
    _id,
    name,
    role,
    "slug": slug.current,
     
    bio
  },
  publishedDate,
  "mainImage": coverImage.asset->url,
  excerpt,
  "content":body,
  category->{title},
  featured,
  readingTime,
  relatedPosts[]-> {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedDate
  },
  seoMeta {
    metaTitle,
    metaDescription,
    "ogImage": ogImage.asset->url,
    keywords,
    noIndex
  }
`
const trancatedPostFields = `
  _id,
  title,
  "slug": slug.current,
  authors[] -> {
    name,
  },
  "mainImage": coverImage.asset->url,
  excerpt,
  "content":body,
  category->{title},
  featured,
 
`

export async function getAllPosts(preview = false) {
  const query = `*[_type == "post"] | order(publishedDate desc, _createdAt desc) {
    ${trancatedPostFields}
  }`
  return sanityFetch(query, {}, preview)
}

export async function getPaginatedPosts(page = 1, limit = 12, preview = false) {
  const offset = (page - 1) * limit
  const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [$offset...$end] {
      ${postFields}
    },
    "total": count(*[_type == "post"])
  }`
  return sanityFetch(query, {offset, end: offset + limit}, preview)
}

export async function getPostBySlug(slug: string, preview = false) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }`
  return sanityFetch(query, {slug}, preview)
}

export async function getFeaturedPosts(limit = 3, preview = false) {
  const query = `*[_type == "post" && featured == true] | order(_createdAt desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": coverImage.asset->url,
    publishedDate,
    "author": authors[0]->{
      name,
      "image": photo.asset->url
    },
    "category": category->{
      title,
      "slug": slug.current
    },
    readingTime,
    _createdAt
  }`
  return sanityFetch(query, {limit}, preview)
}

export async function getPostsByCategory(categorySlug: string, preview = false) {
  const query = `*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedDate desc) {
    ${postFields}
  }`
  return sanityFetch(query, {categorySlug}, preview)
}

export async function getPostsByTag(tag: string, preview = false) {
  const query = `*[_type == "post" && $tag in tags] | order(publishedDate desc) {
    ${postFields}
  }`
  return sanityFetch(query, {tag}, preview)
}

export async function getRecentPosts(limit = 5, preview = false) {
  const query = `*[_type == "post"] | order(publishedDate desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedDate,
    categories[]-> {
      title,
      "slug": slug.current
    }
  }`
  return sanityFetch(query, {limit}, preview)
}

export async function getAllPostSlugs() {
  const query = `*[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`
  return sanityFetch(query)
}

export async function getAllTags(preview = false) {
  const query = `array::unique(*[_type == "post"].tags[])`
  return sanityFetch(query, {}, preview)
}

export async function searchPosts(searchTerm: string, preview = false) {
  const query = `*[_type == "post" && (
    title match $searchTerm ||
    excerpt match $searchTerm ||
    pt::text(content) match $searchTerm
  )] | order(publishedDate desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedDate
  }`
  return sanityFetch(query, {searchTerm: `*${searchTerm}*`}, preview)
}

// ─── Category Queries ─────────────────────────────────────────────────────────

export async function getAllCategories(preview = false) {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }`
  return sanityFetch(query, {}, preview)
}

export async function getCategoryBySlug(slug: string, preview = false) {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "posts": *[_type == "post" && references(^._id)] | order(publishedDate desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "mainImage": mainImage.asset->url,
      publishedDate
    }
  }`
  return sanityFetch(query, {slug}, preview)
}

export async function getAllCategorySlugs() {
  const query = `*[_type == "category" && defined(slug.current)] {
    "slug": slug.current
  }`
  return sanityFetch(query)
}
