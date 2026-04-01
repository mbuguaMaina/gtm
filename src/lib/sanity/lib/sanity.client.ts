// lib/sanity.client.js
import {createClient} from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
 
 
/**
 * Sanity Client Configuration
 * Used for fetching data from your Sanity dataset
 */
export const client = createClient({
  projectId:   'ndqldedz',
  dataset:   'production',
  apiVersion: '2027-01-01',
  useCdn:true
  
})

 
export const previewClient = createClient({
  projectId:   'ndqldedz',
  dataset:   'production',
  apiVersion: '2027-01-01',
  useCdn: false, // Don't use CDN for preview
  perspective: 'previewDrafts',
})

/**
 * Get the appropriate client based on preview mode
 */
export const getClient = (preview = false) => {
  return preview ? previewClient : client
}
 
const builder = createImageUrlBuilder(client)
 
export function urlFor(source:any) {
  return builder.image(source)
}

 
export function getImageUrl(image:any, options:any = {}) {
  const {
    width = 800,
    height = null,
    quality = 80,
    fit = 'max',
    format = 'webp',
  } = options

  if (!image?.asset?._ref) return null

  let builder = urlFor(image).format(format).quality(quality).fit(fit)

  if (width) builder = builder.width(width)
  if (height) builder = builder.height(height)

  return builder.url()
}

/**
 * Get image dimensions
 */
export function getImageDimensions(image:any) {
  if (!image?.asset?._ref) return null

  const dimensions = image.asset._ref.split('-')[2]
  const [width, height] = dimensions.split('x')

  return {
    width: parseInt(width, 10),
    height: parseInt(height, 10),
    aspectRatio: parseInt(width, 10) / parseInt(height, 10),
  }
}

/**
 * Fetch data with error handling
 */
export async function sanityFetch(query:any, params:any = {}, preview = false) {
  const selectedClient = getClient(preview)

  try {
    const data = await selectedClient.fetch(query, params)
    return {data, error: null}
  } catch (error: any) {
    
    return {data: null, error: error.message}
  }
}

export default client
