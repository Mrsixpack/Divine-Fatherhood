'use client'

import Link from 'next/link'
import { Crown, Youtube, Instagram, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { text: 'About', href: '/about' },
    { text: 'YouTube', href: '/youtube' },
    { text: 'Coaching', href: '/coaching' },
    { text: 'Products', href: '/products' },
    { text: 'Podcast', href: '/podcast' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { 
      platform: 'YouTube',
      href: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@HANDLE',
      icon: Youtube 
    },
    { 
      platform: 'Instagram',
      href: 'https://instagram.com/mrsixpack',
      icon: Instagram 
    },
    { 
      platform: 'Email',
      href: 'mailto:hello@divinefatherhood.com',
      icon: Mail 
    },
  ]

  const legalLinks = [
    { text: 'Privacy', href: '/legal/privacy' },
    { text: 'Terms', href: '/legal/terms' },
  ]

  return (
    <footer className="bg-df-bg border-t border-df-gold/20 py-16">
      <div className="df-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-montserrat font-bold text-2xl text-df-gold mb-4"
            >
              <Crown className="h-8 w-8" />
              Divine Fatherhood
            </Link>
            
            <p className="text-df-white/90 mb-4 max-w-md">
              Crowned with Purpose
            </p>
            
            <p className="text-df-white/70 text-sm max-w-md">
              Building stronger fathers, shaping better futures. 
              Train for purpose, not ego.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-df-gold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-df-white/70 hover:text-df-gold transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-df-gold mb-4">Connect</h3>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target={social.platform !== 'Email' ? '_blank' : undefined}
                    rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="text-df-white/70 hover:text-df-gold transition-colors"
                    aria-label={social.platform}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <div key={link.text}>
                  <Link
                    href={link.href}
                    className="text-df-white/70 hover:text-df-gold transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-df-gold/20 pt-8 text-center">
          <p className="text-df-white/60 text-sm">
            © {currentYear} Divine Fatherhood. All rights reserved. Created by MrSixPack.
          </p>
        </div>
      </div>
    </footer>
  )
}