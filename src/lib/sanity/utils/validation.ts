// utils/validation.js
/**
 * Validation and sanitization utilities
 */

/**
 * Validate email address
 */
export function isValidEmail(email:string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number
 */
export function isValidPhone(phone:string) {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

/**
 * Validate URL
 */
export function isValidUrl(url:string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate slug format
 */
export function isValidSlug(slug:string) {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
  return slugRegex.test(slug)
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html:string) {
  if (typeof window === 'undefined') {
    // Server-side: basic sanitization
    return html
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
  }

  // Client-side: use DOMPurify if available
  const div = document.createElement('div')
  div.textContent = html
  return div.innerHTML
}

/**
 * Validate Sanity document structure
 */
export function validateDocument(document: any, requiredFields = []) {
  const errors = []

  // Check required fields
  requiredFields.forEach((field) => {
    if (!document[field]) {
      errors.push(`Missing required field: ${field}`)
    }
  })

  // Check _type
  if (!document._type) {
    errors.push('Missing _type field')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Validate image object
 */
export function validateImage(image: any) {
  if (!image) return {isValid: false, error: 'Image is required'}

  if (!image.asset || !image.asset._ref) {
    return {isValid: false, error: 'Invalid image asset'}
  }

  if (!image.alt) {
    return {isValid: false, error: 'Image alt text is required'}
  }

  return {isValid: true}
}

/**
 * Validate SEO data
 */
export function validateSeo(seo: any) {
  const warnings: string[] = []

  if (!seo) return {isValid: true, warnings}

  if (seo.metaTitle && seo.metaTitle.length > 60) {
    warnings.push('Meta title should be under 60 characters')
  }

  if (seo.metaDescription && seo.metaDescription.length > 160) {
    warnings.push('Meta description should be under 160 characters')
  }

  if (!seo.metaTitle && !seo.metaDescription) {
    warnings.push('No SEO metadata provided')
  }

  return {
    isValid: true,
    warnings,
  }
}

/**
 * Validate link object
 */
export function validateLink(link: any) {
  if (!link) return {isValid: false, error: 'Link is required'}

  if (link.linkType === 'internal' && !link.internalLink) {
    return {isValid: false, error: 'Internal link reference is missing'}
  }

  if (link.linkType === 'external') {
    if (!link.externalUrl) {
      return {isValid: false, error: 'External URL is missing'}
    }
    if (!isValidUrl(link.externalUrl)) {
      return {isValid: false, error: 'Invalid external URL'}
    }
  }

  return {isValid: true}
}

/**
 * Sanitize search query
 */
export function sanitizeSearchQuery(query:string) {
  return query
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 100) // Limit length
}

/**
 * Validate pagination parameters
 */
export function validatePagination(page: string, limit: string) {
  const errors = []

  const pageNum = parseInt(page)
  const limitNum = parseInt(limit)

  if (isNaN(pageNum) || pageNum < 1) {
    errors.push('Page must be a positive integer')
  }

  if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
    errors.push('Limit must be between 1 and 100')
  }

  return {
    isValid: errors.length === 0,
    errors,
    page: Math.max(1, pageNum || 1),
    limit: Math.min(100, Math.max(1, limitNum || 10)),
  }
}

/**
 * Validate form data
 */
export function validateContactForm(data: { name?: string; email?: string; message?: string; phone?: string }) {
  const errors: { [key: string]: string } = {}

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Valid email is required'
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Invalid phone number'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate file upload
 */
export function validateFileUpload(file: File, options:any = {}) {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB
    allowedTypes = ['image/jpeg', 'image/png', 'image/webp'],
  } = options

  if (!file) {
    return {isValid: false, error: 'No file provided'}
  }

  if (file.size > maxSize) {
    return {
      isValid: false,
      error: `File size exceeds ${maxSize / 1024 / 1024}MB`,
    }
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File type ${file.type} not allowed`,
    }
  }

  return {isValid: true}
}

/**
 * Rate limiting validator
 */
export class RateLimiter {
  maxRequests: number
  windowMs: number
  requests: Map<string, number[]>

  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests
    this.windowMs = windowMs
    this.requests = new Map()
  }

  isAllowed(identifier: string) {
    const now = Date.now()
    const userRequests = this.requests.get(identifier) || []

    // Filter out old requests
    const validRequests = userRequests.filter(
      (timestamp) => now - timestamp < this.windowMs
    )

    if (validRequests.length >= this.maxRequests) {
      return {
        allowed: false,
        retryAfter: this.windowMs - (now - validRequests[0]),
      }
    }

    // Add current request
    validRequests.push(now)
    this.requests.set(identifier, validRequests)

    return {allowed: true}
  }

  reset(identifier: string) {
    this.requests.delete(identifier)
  }
}

/**
 * Sanitize portable text
 */
export function sanitizePortableText(blocks: any[]) {
  if (!Array.isArray(blocks)) return []

  return blocks.map((block) => {
    if (block._type === 'block') {
      // Sanitize text content
      return {
        ...block,
        children: block.children?.map((child: any) => ({
          ...child,
          text: child.text || '',
        })),
      }
    }
    return block
  })
}
