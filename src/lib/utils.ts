import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

// Analytics helper
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Plausible Analytics
  if (typeof window !== 'undefined' && 'plausible' in window) {
    (window as any).plausible(eventName, { props: properties })
  }

  // Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', eventName, properties)
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', eventName, properties)
  }
}