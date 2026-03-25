import { sanityFetch } from "../lib/sanity.client"
const projectFields = `
  _id,
  _createdAt,
  _updatedAt,
  title,
  type,
  "coverImage": coverImage.asset->url,
  shortDescription,
  opensource,
  featured,
 "link": links
 
`
export async function getAllProjects(preview = false) {
  const query = `*[_type == "project"] | order(_createdAt asc) {
    ${projectFields}
  }`
  return sanityFetch(query, {}, preview)
}