import { SEO } from "./config.js"

export function createMeta({
  title,
  description,
  path = "",
  image = "/og.jpg",
  keywords 
}:{
  title: string,
  description: string,
  path?: string,
  image?: string,
  keywords: string[]
}) {
  const url = SEO.siteUrl + path

  return {
    title,
    description,
    url,
    image: SEO.siteUrl + image,
    keywords: keywords.join(", ")
  }
}