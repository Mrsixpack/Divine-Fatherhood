'use client'

import { Button } from '@/components/ui/button'
import { type PricingTierProps } from '@/types'
import { Check, Star } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

export function PricingTier({ 
  name, 
  price, 
  features, 
  cta, 
  popular = false 
}: PricingTierProps) {
  const handleCtaClick = () => {
    trackEvent('start_checkout_program', { 
      program: name,
      price: price,
      cta_text: cta.text 
    })
  }

  return (
    <div className={`df-pricing ${popular ? 'ring-2 ring-df-gold' : ''} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-df-gold text-df-bg px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="h-4 w-4" />
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="pt-4">
        <h3 className="df-heading text-xl md:text-2xl text-df-gold mb-2 text-center">
          {name}
        </h3>
        
        <div className="text-center mb-8">
          <span className="text-4xl md:text-5xl font-bold text-df-white">
            {price}
          </span>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
              <span className="text-df-white/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="text-center">
          <Button
            size="lg"
            variant={popular ? 'goldSolid' : 'goldOutline'}
            onClick={handleCtaClick}
            className="w-full"
            asChild
          >
            <a href={cta.href}>
              {cta.text}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}