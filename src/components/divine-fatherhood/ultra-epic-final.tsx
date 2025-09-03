'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Crown, Play, Heart, Zap, Flame, ChevronDown, Star } from 'lucide-react'

export function UltraEpicExperience() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const sections = [
    {
      id: 'hero',
      title: 'CROWNED WITH PURPOSE',
      subtitle: 'The Divine Evolution Begins',
      image: '/images/hero-main.png',
      badge: 'Sammy "MrSixPack" Williams • Delaware • Father of 2 (Soon)',
      content: 'I thought I was building an empire for myself. God revealed I was being built for HIS empire.',
      stats: [
        { number: '5,000+', label: 'Fathers Crowned' },
        { number: '100%', label: 'Authentic' },
        { number: '24/7', label: 'Kingdom Access' },
        { number: '∞', label: 'Divine Purpose' }
      ]
    },
    {
      id: 'announcement',
      title: 'FATHER OF 2 COMING SOON',
      subtitle: 'THE REAL REASON EVERYTHING CHANGED',
      image: '/images/story/real-reason-changed.png',
      content: 'With our second son on the way, the calling becomes CRYSTAL CLEAR. This isn\'t just about being a father — it\'s about being DIVINELY APPOINTED to raise world-changers.',
      quote: '"The moment I learned we were having another son, I knew God was calling me to something BIGGER."'
    },
    {
      id: 'strength',
      title: 'DADDY STRENGTH DIFFERENT',
      subtitle: 'STRENGTH WITH PURPOSE',
      image: '/images/story/daddy-strength.png',
      content: 'This isn\'t just physical strength. This is STRENGTH WITH PURPOSE. Strength to protect, provide, and lead by example.',
      finalMessage: 'When fathers discover they\'re not just dads but KINGS raising future KINGS and QUEENS - everything changes.',
      finalCta: true
    }
  ]

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1)
      const nextSectionElement = document.getElementById(sections[currentSection + 1].id)
      if (nextSectionElement) {
        nextSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-24 h-24 border-4 border-df-gold border-t-transparent rounded-full animate-spin mb-8"></div>
          <div className="text-df-gold text-4xl font-bold animate-pulse mb-4">🔥 DIVINE FATHERHOOD 🔥</div>
          <div className="text-df-white/60 text-xl">Preparing your ULTRA EPIC experience...</div>
          <div className="text-df-gold/80 text-lg mt-4">From 7/10 to 10/10 - LET'S GOOOO! 🚀</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden scroll-smooth">
      {/* Ultra Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-3 bg-black/20 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => setCurrentSection(index)}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
                index === currentSection 
                  ? 'bg-df-gold border-df-gold shadow-2xl shadow-df-gold/50 scale-150' 
                  : 'bg-transparent border-df-gold/40 hover:border-df-gold hover:scale-125'
              }`}
            />
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/90 border border-df-gold/30 rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <div className="text-df-gold text-sm font-bold">{section.title}</div>
            </div>
          </div>
        ))}
      </div>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/95"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
            
            {/* HERO SECTION */}
            {index === 0 && (
              <div className="text-center space-y-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-df-gold/20 to-yellow-400/20 border border-df-gold/40 text-df-gold px-8 py-4 rounded-full font-bold text-lg backdrop-blur-xl shadow-2xl">
                  <Crown className="h-6 w-6 animate-pulse" />
                  {section.badge}
                </div>
                
                <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-df-gold via-yellow-300 to-df-gold bg-clip-text text-transparent drop-shadow-2xl">
                    {section.title}
                  </span>
                </h1>
                
                <div className="text-3xl md:text-5xl text-df-gold/90 font-bold mb-8 animate-bounce">
                  {section.subtitle}
                </div>
                
                <p className="text-2xl md:text-4xl text-df-white/95 max-w-6xl mx-auto leading-relaxed font-medium">
                  {section.content}
                </p>
                
                {/* Epic Buttons */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-20">
                  <button
                    onClick={nextSection}
                    className="bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold text-black hover:from-yellow-400 hover:to-df-gold text-2xl px-20 py-8 rounded-3xl font-black shadow-2xl shadow-df-gold/50 transform hover:scale-110 transition-all duration-500 border-4 border-yellow-400/50 flex items-center gap-4"
                  >
                    <Crown className="h-8 w-8" />
                    WITNESS THE TRANSFORMATION
                    <Zap className="h-8 w-8" />
                  </button>
                </div>

                {/* Ultra Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
                  {section.stats?.map((stat, i) => (
                    <div key={i} className="text-center group cursor-pointer">
                      <div className="bg-gradient-to-br from-df-gold/20 to-yellow-400/20 border border-df-gold/30 rounded-2xl p-8 backdrop-blur-xl hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-df-gold/30">
                        <Star className="h-10 w-10 text-df-gold mx-auto mb-4 group-hover:animate-spin" />
                        <div className="text-5xl font-black text-df-gold mb-3 group-hover:text-yellow-300 transition-colors duration-300">{stat.number}</div>
                        <div className="text-lg text-df-white/80 font-bold">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STORY SECTIONS */}
            {index > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <h2 className="text-6xl md:text-8xl font-black text-df-gold leading-tight drop-shadow-2xl">
                    {section.title}
                  </h2>
                  
                  <h3 className="text-3xl md:text-4xl text-df-white/95 font-bold">
                    {section.subtitle}
                  </h3>
                  
                  <p className="text-2xl md:text-3xl text-df-white/95 leading-relaxed font-medium">
                    {section.content}
                  </p>

                  {section.quote && (
                    <blockquote className="text-3xl md:text-4xl italic text-df-gold/95 font-bold border-l-4 border-df-gold pl-8 bg-gradient-to-r from-df-gold/10 to-transparent p-8 rounded-r-3xl">
                      {section.quote}
                    </blockquote>
                  )}

                  {section.finalCta && (
                    <div className="text-center mt-20">
                      <p className="text-3xl md:text-4xl text-df-white/95 font-bold italic mb-8">
                        {section.finalMessage}
                      </p>
                      <button 
                        className="bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold text-black hover:from-yellow-400 hover:to-df-gold text-4xl px-24 py-12 rounded-3xl font-black shadow-2xl shadow-df-gold/50 transform hover:scale-125 transition-all duration-500 border-4 border-yellow-400/50 flex items-center gap-6 mx-auto"
                      >
                        <Crown className="h-12 w-12" />
                        CROWN ME WITH PURPOSE
                        <Flame className="h-12 w-12" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-df-gold/30 to-yellow-400/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-all duration-700"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-df-gold/40 border-4 border-df-gold/30 transform group-hover:scale-105 transition-all duration-700">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Section Indicator */}
          {index < sections.length - 1 && (
            <button
              onClick={nextSection}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-df-gold hover:text-yellow-300 transition-all duration-500 animate-bounce group"
            >
              <div className="text-center bg-black/70 backdrop-blur-xl border border-df-gold/40 rounded-2xl px-8 py-6 hover:bg-df-gold/20 transition-all duration-300">
                <div className="text-lg mb-3 font-bold uppercase tracking-wider">CONTINUE EPIC STORY</div>
                <ChevronDown className="h-12 w-12 mx-auto group-hover:animate-pulse" />
              </div>
            </button>
          )}
        </section>
      ))}
    </div>
  )
}