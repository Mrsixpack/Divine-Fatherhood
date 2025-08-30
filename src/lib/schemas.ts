import { z } from 'zod'

// Newsletter Form Schema
export const newsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// YouTube Video Schema
export const youtubeVideoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string().url(),
  publishedAt: z.string(),
  duration: z.string().optional(),
  viewCount: z.number().optional(),
})

export type YouTubeVideo = z.infer<typeof youtubeVideoSchema>

// Coaching Application Schema
export const coachingApplicationSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .optional(),
  program: z.enum(['circle', 'intensive']),
  goals: z
    .string()
    .min(20, 'Please share more about your goals (at least 20 characters)')
    .max(500, 'Goals must be less than 500 characters'),
  experience: z
    .string()
    .min(20, 'Please share more about your experience (at least 20 characters)')
    .max(500, 'Experience must be less than 500 characters'),
  commitment: z.boolean().refine(val => val === true, {
    message: 'You must commit to the program requirements',
  }),
})

export type CoachingApplicationData = z.infer<typeof coachingApplicationSchema>