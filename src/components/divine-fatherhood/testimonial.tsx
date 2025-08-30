'use client'

import { type TestimonialProps } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  const initials = author
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()

  return (
    <div className="df-testimonial">
      <blockquote className="text-lg md:text-xl font-medium text-df-white/90 mb-6 pl-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-df-gold">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback className="bg-df-gold text-df-bg font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <div className="font-semibold text-df-gold df-emphasis text-sm">
            {author}
          </div>
          <div className="text-sm text-df-white/70">
            {role}
          </div>
        </div>
      </div>
    </div>
  )
}

