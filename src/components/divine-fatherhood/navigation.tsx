'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Crown, Menu, X } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

const navigationItems = [
  { name: 'About', href: '/about' },
  { name: 'YouTube', href: '/youtube' },
  { name: 'Coaching', href: '/coaching' },
  { name: 'Products', href: '/products' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handlePlaybookClick = () => {
    trackEvent('click_cta_playbook', { 
      source: 'navigation',
      text: 'Get Playbook' 
    })
  }

  return (
    <nav className="df-nav">
      <div className="df-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-montserrat font-bold text-xl text-df-gold hover:text-df-gold-1 transition-colors"
          >
            <Crown className="h-6 w-6" />
            Divine Fatherhood
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-df-white hover:text-df-gold transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            <Button
              variant="goldSolid"
              size="sm"
              onClick={handlePlaybookClick}
              asChild
            >
              <Link href="/playbook">
                Get Playbook
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-df-white hover:text-df-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-df-gold/20">
            <div className="flex flex-col gap-4 pt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-df-white hover:text-df-gold transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Button
                variant="goldSolid"
                size="sm"
                onClick={() => {
                  handlePlaybookClick()
                  setIsOpen(false)
                }}
                className="mt-2 self-start"
                asChild
              >
                <Link href="/playbook">
                  Get Playbook
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}