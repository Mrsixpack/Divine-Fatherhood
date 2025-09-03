'use client'

import { Button } from '@/components/ui/button'
import { type HeroProps } from '@/types'
import { Crown, Play } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-df-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main.png"
          alt="Divine Fatherhood - Crowned with Purpose"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-df-gold/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="df-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {badge && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-df-bg/80 text-df-gold px-6 py-3 rounded-full font-semibold border border-df-gold/30 backdrop-blur-sm"
              >
                <Crown className="h-5 w-5" />
                {badge}
              </motion.div>
            )}
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="df-heading df-h1 df-crown-glow leading-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="df-body-lg text-df-white/90 max-w-xl mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              {ctaPrimary && (
                <Button
                  size="xl"
                  variant="goldSolid"
                  onClick={handlePrimaryClick}
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={ctaPrimary.href}>
                    <Crown className="h-5 w-5 mr-2" />
                    {ctaPrimary.text}
                  </a>
                </Button>
              )}
              
              {ctaSecondary && (
                <Button
                  size="xl"
                  variant="goldOutline"
                  onClick={handleSecondaryClick}
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={ctaSecondary.href}>
                    <Play className="h-5 w-5 mr-2" />
                    {ctaSecondary.text}
                  </a>
                </Button>
              )}
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 mt-12 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-df-gold">5,000+</div>
                <div className="text-xs text-df-white/60">Fathers Crowned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-df-gold">100%</div>
                <div className="text-xs text-df-white/60">Free Guide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-df-gold">24/7</div>
                <div className="text-xs text-df-white/60">Kingdom Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-df-gold">∞</div>
                <div className="text-xs text-df-white/60">Divine Purpose</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Side - Logo/Brand */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0] 
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-df-gold/20 rounded-full blur-3xl scale-150"></div>
              
              {/* Main logo/crown visual would go here if you have a separate logo */}
              <div className="relative text-center bg-df-gold/5 border border-df-gold/30 rounded-3xl p-12 backdrop-blur-sm">
                <Crown className="h-24 w-24 text-df-gold mx-auto mb-4" />
                <div className="df-heading text-2xl text-df-gold">DIVINE</div>
                <div className="df-heading text-2xl text-df-gold">FATHERHOOD</div>
                <div className="text-df-gold/80 text-sm mt-2">CROWNED WITH PURPOSE</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-df-gold/60 text-center"
        >
          <div className="text-xs mb-2">DISCOVER THE STORY</div>
          <div className="w-px h-8 bg-df-gold/40 mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}