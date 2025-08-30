'use client'

import { Button } from '@/components/ui/button'
import { type HeroProps } from '@/types'
import { Crown } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

export function Hero({ 
  title, 
  subtitle, 
  ctaPrimary, 
  ctaSecondary, 
  badge 
}: HeroProps) {
  const handlePrimaryClick = () => {
    if (ctaPrimary) {
      trackEvent('click_cta_playbook', { 
        text: ctaPrimary.text,
        href: ctaPrimary.href 
      })
    }
  }

  const handleSecondaryClick = () => {
    if (ctaSecondary) {
      trackEvent('click_subscribe_youtube', { 
        text: ctaSecondary.text,
        href: ctaSecondary.href 
      })
    }
  }

  return (
    <section className="df-hero">
      <div className="df-container">
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-df-bg/80 text-df-gold px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-df-gold/30">
              <Crown className="h-4 w-4" />
              {badge}
            </div>
          )}
          
          <h1 className="df-heading df-h1 df-crown-glow leading-none mb-6">
            {title}
          </h1>
          
          <p className="df-body-lg text-df-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {ctaPrimary && (
              <Button
                size="xl"
                variant="goldSolid"
                onClick={handlePrimaryClick}
                asChild
              >
                <a href={ctaPrimary.href}>
                  {ctaPrimary.text}
                </a>
              </Button>
            )}
            
            {ctaSecondary && (
              <Button
                size="xl"
                variant="goldOutline"
                onClick={handleSecondaryClick}
                asChild
              >
                <a href={ctaSecondary.href}>
                  {ctaSecondary.text}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}