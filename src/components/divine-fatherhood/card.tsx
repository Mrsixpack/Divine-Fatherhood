'use client'

import { Button } from '@/components/ui/button'
import { type CardProps } from '@/types'
import { Dumbbell, Users, Download, Crown, Heart, Compass, Leaf, Sun, Moon, Mic, Pen, Phone, Mail } from 'lucide-react'

const iconMap = {
  Dumbbell,
  Users,
  Download,
  Crown,
  Heart,
  Compass,
  Leaf,
  Sun,
  Moon,
  Mic,
  Pen,
  Phone,
  Mail,
}

export function Card({ title, copy, icon, cta }: CardProps) {
  // Get icon component from map
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] : null

  return (
    <div className="df-card group">
      {IconComponent && (
        <div className="mb-6">
          <IconComponent className="h-12 w-12 text-df-gold mx-auto group-hover:animate-pulse" />
        </div>
      )}
      
      <h3 className="df-heading text-xl md:text-2xl text-df-gold mb-4 text-center">
        {title}
      </h3>
      
      <p className="df-body text-df-white/90 text-center mb-6">
        {copy}
      </p>
      
      {cta && (
        <div className="text-center">
          <Button
            variant={cta.variant || 'goldOutline'}
            asChild
          >
            <a href={cta.href}>
              {cta.text}
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}