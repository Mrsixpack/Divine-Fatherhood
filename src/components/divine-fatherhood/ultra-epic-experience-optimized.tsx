'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { Crown, Play, Heart, Dumbbell, Users, Target, Trophy, Shield, Building, ChevronDown, Star, Zap, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function UltraEpicExperience() {
  const [currentSection, setCurrentSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  const sections = [
    {
      id: 'hero',
      title: 'CROWNED WITH PURPOSE',
      subtitle: 'The Divine Evolution Begins',
      image: '/images/hero-main.png',
      badge: 'Sammy "MrSixPack" Williams • Delaware • Father of 2 (Soon)',
      content: 'I thought I was building an empire for myself. God revealed I was being built for HIS empire.',
      cta: 'WITNESS THE TRANSFORMATION',
      stats: [
        { number: '5,000+', label: 'Fathers Crowned', icon: Crown },
        { number: '100%', label: 'Authentic', icon: Heart },
        { number: '24/7', label: 'Kingdom Access', icon: Star },
        { number: '∞', label: 'Divine Purpose', icon: Zap }
      ]
    },
    {
      id: 'announcement',
      title: 'FATHER OF 2 COMING SOON',
      subtitle: 'THE REAL REASON EVERYTHING CHANGED',
      image: '/images/story/real-reason-changed.png',
      badge: '🍼 BABY #2 ARRIVING IN 2 MONTHS',
      content: 'With our second son on the way, the calling becomes CRYSTAL CLEAR. This isn\'t just about being a father — it\'s about being DIVINELY APPOINTED to raise world-changers.',
      points: [
        { text: 'Legacy Over Likes', icon: Trophy, color: 'from-gold-400 to-yellow-500' },
        { text: 'Kingdom Over Empire', icon: Crown, color: 'from-purple-400 to-pink-400' },
        { text: 'Purpose Over Pressure', icon: Target, color: 'from-blue-400 to-cyan-400' }
      ],
      quote: '"The moment I learned we were having another son, I knew God was calling me to something BIGGER."'
    },
    {
      id: 'strength',
      title: 'DADDY STRENGTH DIFFERENT',
      subtitle: 'STRENGTH WITH PURPOSE',
      image: '/images/story/daddy-strength.png',
      content: 'This isn\'t just physical strength. This is STRENGTH WITH PURPOSE. Strength to protect, provide, and lead by example.',
      roles: [
        { 
          icon: Shield, 
          title: 'PROTECTOR', 
          desc: 'Shield My Family',
          detail: 'Physical, emotional, and spiritual protection for those I love most',
          power: 'Fierce Love'
        },
        { 
          icon: Building, 
          title: 'PROVIDER', 
          desc: 'Build Their Future',
          detail: 'Creating generational wealth, opportunities, and foundations for success',
          power: 'Strategic Vision'
        },
        { 
          icon: Crown, 
          title: 'KING', 
          desc: 'Lead With Love',
          detail: 'Modeling the character, integrity, and leadership my children need to see',
          power: 'Authentic Authority'
        }
      ],
      finalMessage: 'When fathers discover they\'re not just dads but KINGS raising future KINGS and QUEENS - everything changes.',
      finalCta: true
    }
  ]

  // Mouse parallax effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = useCallback((index: number) => {
    setCurrentSection(index)
    const section = document.getElementById(sections[index].id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [sections])

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1)
    }
  }, [currentSection, sections.length, scrollToSection])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-df-gold border-t-transparent rounded-full animate-spin mb-8"></div>
          <div className="text-df-gold text-3xl font-bold animate-pulse">🔥 DIVINE FATHERHOOD 🔥</div>
          <div className="text-df-white/60 text-lg mt-4">Preparing your ULTRA EPIC experience...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      {/* Ultra Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-black/20 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-500 relative overflow-hidden ${
                index === currentSection 
                  ? 'bg-df-gold border-df-gold shadow-2xl shadow-df-gold/50 scale-150' 
                  : 'bg-transparent border-df-gold/40 hover:border-df-gold hover:scale-125'
              }`}
            >
              {index === currentSection && (
                <div className="absolute inset-0 bg-gradient-to-r from-df-gold to-yellow-400 animate-pulse"></div>
              )}
            </button>
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/90 border border-df-gold/30 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <div className="text-df-gold text-xs font-bold">{section.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-df-gold/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover object-center transition-transform duration-700"
              style={{
                transform: `scale(${1 + Math.abs(mousePosition.x) * 0.03}) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)`
              }}
              priority={index === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
            <div 
              className="absolute inset-0 bg-gradient-radial from-df-gold/10 via-transparent to-transparent transition-opacity duration-1000"
              style={{
                opacity: index === currentSection ? 0.6 : 0.2
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
            
            {/* HERO SECTION */}
            {index === 0 && (
              <div className="text-center space-y-12 animate-fade-in">
                {section.badge && (
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-df-gold/20 to-yellow-400/20 border border-df-gold/40 text-df-gold px-8 py-4 rounded-full font-bold text-lg backdrop-blur-xl shadow-2xl shadow-df-gold/20">
                    <Crown className="h-6 w-6 animate-pulse" />
                    {section.badge}
                  </div>
                )}
                
                <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-df-gold via-yellow-300 to-df-gold bg-clip-text text-transparent animate-pulse text-shimmer drop-shadow-2xl">
                    {section.title}
                  </span>
                </h1>
                
                <div className="text-2xl md:text-4xl text-df-gold/90 font-bold mb-8 animate-float">
                  {section.subtitle}
                </div>
                
                <p className="text-xl md:text-3xl text-df-white/95 max-w-5xl mx-auto leading-relaxed font-medium">
                  {section.content}
                </p>
                
                {/* Epic CTA */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-16">
                  <Button
                    size="xl"
                    className="bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold text-black hover:from-yellow-400 hover:to-df-gold text-2xl px-16 py-8 rounded-3xl font-black shadow-2xl shadow-df-gold/50 transform hover:scale-110 transition-all duration-500 border-2 border-yellow-400/50"
                    onClick={nextSection}
                  >
                    <Crown className="h-8 w-8 mr-4" />
                    {section.cta}
                    <Zap className="h-8 w-8 ml-4" />
                  </Button>
                  
                  <Button
                    size="xl"
                    className="bg-transparent border-3 border-df-gold text-df-gold hover:bg-df-gold hover:text-black text-xl px-12 py-6 rounded-3xl font-bold transform hover:scale-110 transition-all duration-500 backdrop-blur-xl"
                  >
                    <Play className="h-6 w-6 mr-3" />
                    Watch Transformation
                  </Button>
                </div>

                {/* Ultra Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
                  {section.stats?.map((stat, i) => (
                    <div key={i} className="text-center group cursor-pointer">
                      <div className="bg-gradient-to-br from-df-gold/20 to-yellow-400/20 border border-df-gold/30 rounded-2xl p-6 backdrop-blur-xl hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-df-gold/30">
                        <stat.icon className="h-8 w-8 text-df-gold mx-auto mb-3 group-hover:animate-bounce" />
                        <div className="text-4xl font-black text-df-gold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{stat.number}</div>
                        <div className="text-sm text-df-white/80 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STORY SECTIONS */}
            {index > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={`space-y-10 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  {section.badge && (
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/40 text-emerald-400 px-8 py-4 rounded-full font-black text-xl backdrop-blur-xl shadow-xl">
                      <Heart className="h-6 w-6 animate-pulse" />
                      {section.badge}
                    </div>
                  )}
                  
                  <h2 className="text-5xl md:text-7xl font-black text-df-gold leading-tight drop-shadow-2xl">
                    {section.title}
                  </h2>
                  
                  {section.subtitle && (
                    <h3 className="text-2xl md:text-3xl text-df-white/95 font-bold">
                      {section.subtitle}
                    </h3>
                  )}
                  
                  <p className="text-xl md:text-2xl text-df-white/95 leading-relaxed font-medium">
                    {section.content}
                  </p>

                  {/* Enhanced Points */}
                  {section.points && (
                    <div className="space-y-6">
                      {section.points.map((point, i) => (
                        <div key={i} className="group cursor-pointer">
                          <div className={`flex items-center gap-4 bg-gradient-to-r ${point.color} bg-opacity-20 border border-df-gold/30 rounded-2xl p-6 backdrop-blur-xl hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}>
                            <point.icon className="h-8 w-8 text-df-gold flex-shrink-0 group-hover:animate-spin" />
                            <span className="text-df-gold font-black text-xl">{point.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  {section.quote && (
                    <blockquote className="text-2xl md:text-3xl italic text-df-gold/95 font-bold border-l-4 border-df-gold pl-6 bg-gradient-to-r from-df-gold/10 to-transparent p-6 rounded-r-2xl">
                      {section.quote}
                    </blockquote>
                  )}

                  {/* Final CTA */}
                  {section.finalCta && (
                    <div className="text-center mt-16">
                      <div className="mb-8">
                        <p className="text-2xl md:text-3xl text-df-white/95 font-bold italic mb-6">
                          {section.finalMessage}
                        </p>
                      </div>
                      <Button 
                        size="xl" 
                        className="bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold text-black hover:from-yellow-400 hover:to-df-gold text-3xl px-20 py-10 rounded-3xl font-black shadow-2xl shadow-df-gold/50 transform hover:scale-125 transition-all duration-500 border-4 border-yellow-400/50"
                      >
                        <Crown className="h-10 w-10 mr-4" />
                        CROWN ME WITH PURPOSE
                        <Flame className="h-10 w-10 ml-4" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Enhanced Image Side */}
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-df-gold/30 to-yellow-400/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-all duration-700"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-df-gold/40 border-2 border-df-gold/30 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={700}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Section Indicator */}
          {index < sections.length - 1 && (
            <button
              onClick={nextSection}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-df-gold/80 hover:text-df-gold transition-all duration-500 animate-bounce group"
            >
              <div className="text-center bg-black/50 backdrop-blur-xl border border-df-gold/30 rounded-2xl px-6 py-4 hover:bg-df-gold/10 transition-all duration-300">
                <div className="text-sm mb-2 font-bold uppercase tracking-wider group-hover:text-yellow-300">CONTINUE EPIC STORY</div>
                <ChevronDown className="h-10 w-10 mx-auto group-hover:animate-pulse" />
              </div>
            </button>
          )}
        </section>
      ))}
    </div>
  )
}