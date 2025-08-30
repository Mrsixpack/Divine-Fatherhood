'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { newsletterFormSchema, type NewsletterFormData } from '@/lib/schemas'
import { type NewsletterFormProps } from '@/types'
import { trackEvent } from '@/lib/utils'
import { Crown, CheckCircle } from 'lucide-react'

export function NewsletterForm({ 
  title, 
  subtitle, 
  placeholder, 
  buttonText,
  onSubmit 
}: NewsletterFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    },
  })

  const handleSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true)
    
    try {
      // Track the submission event
      trackEvent('submit_newsletter', { email: data.email })
      
      // Call the provided onSubmit handler or default API call
      if (onSubmit) {
        await onSubmit(data.email)
      } else {
        // Default newsletter API call
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        
        if (!response.ok) {
          throw new Error('Subscription failed')
        }
      }
      
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      // You could add toast notification here
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="df-newsletter">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-df-gold mx-auto mb-6" />
          <h2 className="df-heading text-2xl md:text-3xl text-df-gold mb-4">
            Check Your Email!
          </h2>
          <p className="df-body text-df-white/90">
            We've sent the Divine Dad Playbook to your inbox. 
            Check your email (and spam folder) for the download link.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="df-newsletter">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Crown className="h-12 w-12 text-df-gold mx-auto mb-4" />
          <h2 className="df-heading text-2xl md:text-3xl text-df-gold mb-4">
            {title}
          </h2>
          <p className="df-body text-df-white/90">
            {subtitle}
          </p>
        </div>
        
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      type="email"
                      {...field}
                      className="h-12 text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              type="submit"
              variant="goldSolid"
              size="lg"
              disabled={isLoading}
              className="h-12 px-8"
            >
              {isLoading ? 'Sending...' : buttonText}
            </Button>
          </form>
        </Form>
        
        <p className="text-sm text-df-white/60 text-center mt-4">
          No spam. Unsubscribe anytime. Created by MrSixPack.
        </p>
      </div>
    </section>
  )
}