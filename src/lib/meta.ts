import { SEO } from "./config.js"

type CreateMetaProps = {
  title: string
  description: string
  path?: string
  image?: string
  keywords: string[]

  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: {
      url: string
      width?: number
      height?: number
      alt?: string
    }[]
    locale?: string
    type?: string
  }

  twitter?: {
    card?: string
    title?: string
    description?: string
    images?: string[]
    creator?: string
  }

  robots?: {
    index?: boolean
    follow?: boolean
  }

  alternates?: {
    canonical?: string
  }

  [key: string]: any
}

export function createMeta<T extends CreateMetaProps>({
  title,
  description,
  path = "",
  image = "/og.jpg",
  keywords,
  ...rest
}: T) {
  const url = SEO.siteUrl + path

  return {
    title,
    description,
    url,
    image: SEO.siteUrl + image,
    keywords: keywords.join(", "),
    ...rest,
  }
}