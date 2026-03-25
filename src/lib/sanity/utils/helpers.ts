// utils/helpers.js

/**
 * Format date to readable string
 */
export function formatDate(date:Date, format = 'long') {
  if (!date) return ''
  
  const d = new Date(date)
  
  const formats:any = {
    short: {month: 'short', day: 'numeric', year: 'numeric'},
    long: {month: 'long', day: 'numeric', year: 'numeric'},
    full: {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'},
  }
  
  return d.toLocaleDateString('en-US', formats[format] || formats.long)
}

/**
 * Get relative time (e.g., "2 days ago")
 */
export function getRelativeTime(date:Date) {
  if (!date) return ''
  
  const now:number = new Date().getTime()
  const past:number = new Date(date).getTime()
  const diffInSeconds = Math.floor((now - past) / 1000)
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  }
  
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds)
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`
    }
  }
  
  return 'just now'
}

/**
 * Resolve internal or external link
 */
export function resolveLink(link: any) {
  if (!link) return null
  
  if (link.linkType === 'internal') {
    return `/${link.internalLink}`
  }
  
  return link.externalUrl
}

/**
 * Check if link is external
 */
export function isExternalLink(url: string) {
  if (!url) return false
  return url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel')
}

/**
 * Truncate text at word boundary
 */
export function truncateText(text: string, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return truncated.substring(0, lastSpace) + '...'
}

/**
 * Slugify text (convert to URL-friendly format)
 */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Group items by a key
 */
export function groupBy(items: any[], key: string) {
  return items.reduce((result, item) => {
    const group = item[key]
    if (!result[group]) {
      result[group] = []
    }
    result[group].push(item)
    return result
  }, {})
}

/**
 * Paginate array
 */
export function paginate(items: any[], page = 1, perPage = 10) {
  const offset = (page - 1) * perPage
  const paginatedItems = items.slice(offset, offset + perPage)
  const totalPages = Math.ceil(items.length / perPage)
  
  return {
    items: paginatedItems,
    currentPage: page,
    totalPages,
    totalItems: items.length,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  }
}

/**
 * Remove duplicates from array
 */
export function unique(array: any[]) {
  return [...new Set(array)]
}

/**
 * Sort items by date
 */
export function sortByDate(items: any[], key = 'publishedAt', order = 'desc') {
  return [...items].sort((a, b) => {
    const dateA:number = new Date(a[key]).getTime()
    const dateB:number = new Date(b[key]).getTime()

    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}

/**
 * Generate random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Debounce function
 */
export function debounce(func:any, wait = 300) {
  let timeout:any 
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Check if value is empty
 */
export function isEmpty(value: any) {
  if (value == null) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * Calculate percentage
 */
export function percentage(value: number, total: number) {
  if (!total) return 0
  return Math.round((value / total) * 100)
}

/**
 * Clamp number between min and max
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
