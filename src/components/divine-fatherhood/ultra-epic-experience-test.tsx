'use client'

import Image from 'next/image'
import { Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function UltraEpicExperience() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main.png"
          alt="Divine Fatherhood Hero"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center space-y-8 px-4">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-df-gold/20 to-yellow-400/20 border border-df-gold/40 text-df-gold px-8 py-4 rounded-full font-bold text-lg backdrop-blur-xl">
          <Crown className="h-6 w-6" />
          Sammy "MrSixPack" Williams • Delaware • Father of 2 (Soon)
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tight leading-none">
          <span className="bg-gradient-to-r from-df-gold via-yellow-300 to-df-gold bg-clip-text text-transparent">
            CROWNED WITH PURPOSE
          </span>
        </h1>
        
        <div className="text-2xl md:text-4xl text-df-gold/90 font-bold mb-8">
          The Divine Evolution Begins
        </div>
        
        <p className="text-xl md:text-3xl text-df-white/95 max-w-5xl mx-auto leading-relaxed font-medium">
          I thought I was building an empire for myself. God revealed I was being built for HIS empire.
        </p>
        
        <Button
          size="lg"
          className="bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold text-black hover:from-yellow-400 hover:to-df-gold text-xl px-12 py-6 rounded-3xl font-black shadow-2xl shadow-df-gold/50 transform hover:scale-110 transition-all duration-500"
        >
          <Crown className="h-6 w-6 mr-4" />
          WITNESS THE TRANSFORMATION
        </Button>
      </div>
    </div>
  )
}