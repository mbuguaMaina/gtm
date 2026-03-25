// utils/cache.js

/**
 * In-memory cache with TTL (Time To Live)
 */
class MemoryCache {
  cache: Map<string, {value: any; expiresAt: number}>
  defaultTTL: number
  constructor(defaultTTL = 3600000) {
    // Default 1 hour
    this.cache = new Map()
    this.defaultTTL = defaultTTL
  }

  /**
   * Generate cache key from query and params
   */
  generateKey(query: string, params = {}) {
    const paramsString = JSON.stringify(params)
    return `${query}:${paramsString}`
  }

  /**
   * Set cache entry
   */
  set(key: string, value: any, ttl = this.defaultTTL) {
    const expiresAt = Date.now() + ttl
    this.cache.set(key, {value, expiresAt})
  }

  /**
   * Get cache entry
   */
  get(key: string) {
    const entry = this.cache.get(key)

    if (!entry) return null

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return entry.value
  }

  /**
   * Check if key exists and is valid
   */
  has(key: string) {
    return this.get(key) !== null
  }

  /**
   * Delete cache entry
   */
  delete(key: string) {
    this.cache.delete(key)
  }

  /**
   * Clear all cache
   */
  clear() {
    this.cache.clear()
  }

  /**
   * Clean expired entries
   */
  cleanup() {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key)
      }
    }
  }

  /**
   * Get cache stats
   */
  stats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    }
  }
}

// Global cache instance
const cache = new MemoryCache()

// Cleanup expired entries every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => cache.cleanup(), 5 * 60 * 1000)
}

/**
 * Cached fetch function
 */
export async function cachedFetch(fetcher: () => Promise<{data?: any; error?: any}>, key: string, ttl: number) {
  // Check cache first
  const cached = cache.get(key)
  if (cached) {
    return {data: cached, fromCache: true}
  }

  // Fetch fresh data
  const {data, error} = await fetcher()

  if (data && !error) {
    cache.set(key, data, ttl)
  }

  return {data, error, fromCache: false}
}

/**
 * Cache tags for invalidation
 */
class CacheTagManager {
  tags: Map<string, Set<string>>
  constructor() {
    this.tags = new Map() // tag -> Set of cache keys
  }

  /**
   * Add tags to a cache key
   */
  addTags(key: string, tags: string[]) {

    tags.forEach((tag : any  ) => {
      if (!this.tags.has(tag)) {
        this.tags.set(tag, new Set())
      }
      this.tags.get(tag)?.add(key)
    })
  }

  /**
   * Invalidate all keys with a specific tag
   */
  invalidate(tag:any) {
    const keys = this.tags.get(tag)
    if (keys) {
      keys.forEach((key) => cache.delete(key))
      this.tags.delete(tag)
    }
  }

  /**
   * Invalidate multiple tags
   */
  invalidateTags(tags: string[]) {
    tags.forEach((tag) => this.invalidate(tag))
  }
}

const tagManager = new CacheTagManager()

/**
 * Cached fetch with tags
 */
export async function cachedFetchWithTags(fetcher: () => Promise<{data?: any; error?: any}>, key: string, tags = [], ttl: number) {
  const result = await cachedFetch(fetcher, key, ttl)

  if (result.data && !result.fromCache) {
    tagManager.addTags(key, tags)
  }

  return result
}

/**
 * Invalidate cache by tags
 */
export function invalidateCacheTags(tags: string | string[]) {
  tagManager.invalidateTags(Array.isArray(tags) ? tags : [tags])
}

/**
 * Next.js revalidation helper
 */
export function getRevalidateConfig(type: string) {
  const configs:any = {
    page: 3600, // 1 hour
    post: 1800, // 30 minutes
    service: 7200, // 2 hours
    project: 3600, // 1 hour
    settings: 86400, // 24 hours
  }

  return configs[type] || 3600
}

/**
 * Stale-While-Revalidate cache
 */
export async function staleWhileRevalidate(
  fetcher: () => Promise<{data?: any; error?: any}>,
  key: string,
  {staleTime = 60000, revalidateTime = 300000} = {}
) {
  const entry = cache.cache.get(key)
  const now = Date.now()

  // If no cache, fetch fresh
  if (!entry) {
    const {data} = await fetcher()
    if (data) {
      cache.set(key, data, revalidateTime)
    }
    return {data, stale: false}
  }

  const age = now - (entry.expiresAt - revalidateTime)

  // If stale, return cached but revalidate in background
  if (age > staleTime) {
    // Return stale data immediately
    const staleData = entry.value

    // Revalidate in background
    fetcher().then(({data}) => {
      if (data) {
        cache.set(key, data, revalidateTime)
      }
    })

    return {data: staleData, stale: true}
  }

  // Fresh cache
  return {data: entry.value, stale: false}
}

/**
 * Cache utilities for API routes
 */
export function getCacheHeaders(maxAge = 3600) {
  return {
    'Cache-Control': `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge * 2}`,
  }
}

/**
 * Conditional cache (only cache successful responses)
 */
export async function conditionalCache(fetcher: () => Promise<{data?: any; error?: any}>, key: string, condition: (data: any) => boolean, ttl: number) {
  const {data, error} = await fetcher()

  if (data && !error && condition(data)) {
    cache.set(key, data, ttl)
  }

  return {data, error}
}

export {cache, tagManager}
export default cache
