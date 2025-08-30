// Divine Fatherhood TypeScript Interfaces

export interface CTAButton {
  text: string
  href: string
  variant?: 'goldSolid' | 'goldOutline' | 'ghostDf'
}

export interface HeroProps {
  title: string
  subtitle: string
  ctaPrimary?: CTAButton
  ctaSecondary?: CTAButton
  badge?: string
}

export interface CardProps {
  title: string
  copy: string
  icon?: string
  cta?: CTAButton
}

export interface TestimonialProps {
  quote: string
  author: string
  role: string
  avatar?: string
}

export interface PricingTierProps {
  name: string
  price: string
  features: string[]
  cta: CTAButton
  popular?: boolean
}

export interface NewsletterFormProps {
  title: string
  subtitle: string
  placeholder: string
  buttonText: string
  onSubmit?: (email: string) => void
}

export interface YouTubeGridProps {
  channelId: string
  playlists?: string[]
  cta?: CTAButton
}

export interface ProgramSyllabusProps {
  weeks: number
  modules: string[]
}

export interface FooterProps {
  links: Array<{
    text: string
    href: string
  }>
  socials: Array<{
    platform: string
    href: string
    icon: string
  }>
  legal: Array<{
    text: string
    href: string
  }>
}

// Content Models
export interface Post {
  title: string
  slug: string
  excerpt: string
  coverImage?: string
  tags: string[]
  publishedAt: string
  bodyMdx: string
  seoTitle?: string
  seoDescription?: string
}

export interface Product {
  title: string
  slug: string
  priceUsd: number
  shortBenefit: string
  features: string[]
  coverImage?: string
  checkoutUrl: string
  seoTitle?: string
  seoDescription?: string
}

export interface Program {
  title: string
  slug: string
  priceUsd: number
  format: string
  startDate?: string
  deliverables: string[]
  syllabus: string[]
  testimonials: TestimonialProps[]
  checkoutUrl: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar?: string
}

// Analytics Events
export type AnalyticsEvent =
  | 'view_home'
  | 'click_cta_playbook'
  | 'submit_newsletter'
  | 'view_youtube_hub'
  | 'click_subscribe_youtube'
  | 'view_coaching'
  | 'start_checkout_program'
  | 'purchase_program'
  | 'view_products'
  | 'purchase_product'

export interface AnalyticsEventData {
  event: AnalyticsEvent
  properties?: Record<string, any>
}

// SEO Types
export interface PageSEO {
  title: string
  description: string
  keywords: string
  ogImage?: string
  canonicalUrl?: string
  structuredData?: any[]
}

// Environment Variables
export interface EnvConfig {
  YOUTUBE_HANDLE: string
  YOUTUBE_CHANNEL_ID: string
  NEWSLETTER_KEY: string
  PLAUSIBLE_DOMAIN: string
  GA4_MEASUREMENT_ID?: string
  CHECKOUT_URL_INTENSIVE: string
  CHECKOUT_URL_CIRCLE: string
  CALENDLY_URL: string
}

// Form Schemas
export interface NewsletterFormData {
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}