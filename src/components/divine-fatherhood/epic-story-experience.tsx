'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Crown, Play, ArrowDown, Heart, Dumbbell, Users, Target, Trophy, Shield, Building, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EpicStoryExperience() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const sections = [
    {
      id: 'hero',
      title: 'CROWNED WITH PURPOSE',
      subtitle: 'The Divine Evolution from Mr. Sixpack Empire to Divine Fatherhood',
      image: '/images/hero-main.png',
      badge: 'Sammy "MrSixPack" Williams • Delaware • Father of 2 (Soon)',
      content: 'I thought I was building an empire for myself. God revealed I was being built for HIS empire.',
      cta: 'DISCOVER THE STORY'
    },
    {
      id: 'announcement',
      title: 'FATHER OF 2 COMING SOON',
      subtitle: 'The Real Reason Everything Changed',
      image: '/images/story/real-reason-changed.png',
      badge: 'BABY #2 COMING IN 2 MONTHS',
      content: 'With our second son on the way, the calling becomes crystal clear. This isn\'t just about being a father — it\'s about being divinely appointed to raise world-changers.',
      points: ['Legacy Over Likes', 'Kingdom Over Empire', 'Purpose Over Pressure']
    },
    {
      id: 'evolution',
      title: 'THE EVOLUTION YOU DIDN\'T SEE COMING',
      subtitle: 'From Building Muscle to Building Character',
      image: '/images/story/evolution-didnt-see.png',
      content: 'This wasn\'t just a physical transformation. This was a complete spiritual evolution. From building muscle to building character.',
      pillars: [
        { icon: 'Mind', label: 'Renewed Thinking' },
        { icon: 'Body', label: 'Purposeful Strength' },
        { icon: 'Spirit', label: 'Divine Calling' }
      ]
    },
    {
      id: 'matters',
      title: 'WHAT REALLY MATTERS',
      subtitle: 'Legacy is Eternal',
      image: '/images/story/what-matters.png',
      content: 'Social media likes are temporary. Legacy is eternal. I stopped chasing momentary validation and started building something that would outlast me.',
      values: [
        { icon: Trophy, label: 'Generational Impact' },
        { icon: Crown, label: 'Character Over Clout' },
        { icon: Heart, label: 'Values Over Vanity' }
      ]
    },
    {
      id: 'calling',
      title: 'GOD REVEALED MY TRUE CALLING',
      subtitle: 'Through Fatherhood',
      image: '/images/story/god-revealed-calling.png',
      content: '"I wasn\'t building an empire for myself — He was building me for HIS empire."',
      trinity: [
        { icon: Heart, title: 'Faith', desc: 'Foundation' },
        { icon: Dumbbell, title: 'Fitness', desc: 'Discipline' },
        { icon: Users, title: 'Fatherhood', desc: 'Legacy' }
      ]
    },
    {
      id: 'shift',
      title: 'THE MINDSET SHIFT',
      subtitle: 'Purpose Over Pressure',
      image: '/images/story/mindset-shift.png',
      content: 'I realized I had been building under pressure when I should have been building with purpose.',
      comparison: {
        before: ['Validation-seeking', 'Ego-driven', 'External metrics'],
        after: ['Legacy-focused', 'Service-oriented', 'Internal fulfillment']
      }
    },
    {
      id: 'strength',
      title: 'DADDY STRENGTH DIFFERENT',
      subtitle: 'Strength with Purpose',
      image: '/images/story/daddy-strength.png',
      content: 'This isn\'t just physical strength. This is strength with PURPOSE. Strength to protect, provide, and lead by example.',
      roles: [
        { icon: Shield, title: 'PROTECTOR', desc: 'Shield my family' },
        { icon: Building, title: 'PROVIDER', desc: 'Build their future' },
        { icon: Crown, title: 'KING', desc: 'Lead with love' }
      ],
      finalCta: true
    }
  ]

  const scrollToSection = (index: number) => {
    if (isScrolling) return
    setIsScrolling(true)
    setCurrentSection(index)
    
    const section = document.getElementById(sections[index].id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    setTimeout(() => setIsScrolling(false), 1000)
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const newSection = Math.round(scrollY / windowHeight)
      
      if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
        setCurrentSection(newSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, isScrolling])

  return (
    <div className="relative">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-df-gold to-yellow-400 transition-all duration-500"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSection 
                ? 'bg-df-gold border-df-gold shadow-lg shadow-df-gold/50' 
                : 'bg-transparent border-df-gold/40 hover:border-df-gold'
            }`}
          />
        ))}
      </div>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
            )}
          </div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 z-10 opacity-20">
            <div 
              className="absolute inset-0 bg-gradient-radial from-df-gold/20 via-transparent to-transparent"
              style={{
                animation: `pulse ${3 + index * 0.5}s ease-in-out infinite alternate`
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 df-container w-full">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Section */}
              {index === 0 && (
                <div className="text-center space-y-8 animate-fade-in">
                  {section.badge && (
                    <div className="inline-flex items-center gap-2 bg-df-bg/80 text-df-gold px-6 py-3 rounded-full font-semibold border border-df-gold/30 backdrop-blur-sm">
                      <Crown className="h-5 w-5" />
                      {section.badge}
                    </div>
                  )}
                  
                  <h1 className="df-heading text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold bg-clip-text text-transparent">
                      {section.title}
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-df-white/90 max-w-4xl mx-auto leading-relaxed">
                    {section.subtitle}
                  </p>
                  
                  <p className="text-lg md:text-xl text-df-gold/90 max-w-3xl mx-auto font-medium italic">
                    {section.content}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                    <Button
                      size="xl"
                      className="bg-df-gold text-black hover:bg-yellow-400 text-lg px-12 py-6 rounded-2xl font-bold shadow-2xl shadow-df-gold/30 transform hover:scale-105 transition-all duration-300"
                      onClick={nextSection}
                    >
                      <Crown className="h-6 w-6 mr-3" />
                      {section.cta}
                    </Button>
                    
                    <Button
                      size="xl"
                      variant="outline"
                      className="border-2 border-df-gold text-df-gold hover:bg-df-gold hover:text-black text-lg px-12 py-6 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300"
                    >
                      <Play className="h-6 w-6 mr-3" />
                      Watch My Story
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
                    {[
                      { number: '5,000+', label: 'Fathers Crowned' },
                      { number: '100%', label: 'Free Guide' },
                      { number: '24/7', label: 'Kingdom Access' },
                      { number: '∞', label: 'Divine Purpose' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-df-gold mb-2">{stat.number}</div>
                        <div className="text-sm text-df-white/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Story Sections */}
              {index > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className={`space-y-8 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    {section.badge && (
                      <div className="inline-flex items-center gap-2 bg-df-gold text-black px-6 py-3 rounded-full font-bold text-lg">
                        <Heart className="h-5 w-5" />
                        {section.badge}
                      </div>
                    )}
                    
                    <h2 className="text-4xl md:text-5xl font-black text-df-gold leading-tight">
                      {section.title}
                    </h2>
                    
                    {section.subtitle && (
                      <h3 className="text-xl md:text-2xl text-df-white/90 font-semibold">
                        {section.subtitle}
                      </h3>
                    )}
                    
                    <p className="text-lg md:text-xl text-df-white/90 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Points */}
                    {section.points && (
                      <div className="space-y-4">
                        {section.points.map((point, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Crown className="h-6 w-6 text-df-gold flex-shrink-0" />
                            <span className="text-df-gold font-bold text-lg">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Pillars */}
                    {section.pillars && (
                      <div className="grid grid-cols-3 gap-6">
                        {section.pillars.map((pillar, i) => (
                          <div key={i} className="text-center bg-df-bg/60 border border-df-gold/20 rounded-xl p-6">
                            <div className="text-df-gold font-bold mb-2">{pillar.icon}</div>
                            <div className="text-df-white/70 text-sm">{pillar.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Values */}
                    {section.values && (
                      <div className="space-y-4">
                        {section.values.map((value, i) => (
                          <div key={i} className="flex items-center gap-4 bg-df-gold/10 border border-df-gold/30 rounded-lg p-4">
                            <value.icon className="h-6 w-6 text-df-gold flex-shrink-0" />
                            <span className="text-df-white/90 font-medium">{value.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Trinity */}
                    {section.trinity && (
                      <div className="grid grid-cols-3 gap-4">
                        {section.trinity.map((item, i) => (
                          <div key={i} className="text-center bg-df-bg/60 border border-df-gold/20 rounded-lg p-4">
                            <item.icon className="h-8 w-8 text-df-gold mx-auto mb-2" />
                            <div className="text-df-gold font-bold text-sm">{item.title}</div>
                            <div className="text-df-white/70 text-xs">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Comparison */}
                    {section.comparison && (
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                          <h4 className="text-red-400 font-bold text-lg mb-3">BEFORE: Pressure</h4>
                          <ul className="space-y-2 text-df-white/80">
                            {section.comparison.before.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-df-gold/20 border border-df-gold/30 rounded-lg p-6">
                          <h4 className="text-df-gold font-bold text-lg mb-3">NOW: Purpose</h4>
                          <ul className="space-y-2 text-df-white/80">
                            {section.comparison.after.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Roles */}
                    {section.roles && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {section.roles.map((role, i) => (
                          <div key={i} className="text-center bg-df-gold/10 border border-df-gold/30 rounded-xl p-8 hover:bg-df-gold/20 transition-all duration-300 group cursor-pointer">
                            <div className="w-16 h-16 bg-df-gold/20 border border-df-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-df-gold group-hover:text-black transition-all duration-300">
                              <role.icon className="h-8 w-8" />
                            </div>
                            <h4 className="text-df-gold font-bold text-lg mb-2">{role.title}</h4>
                            <p className="text-df-white/80">{role.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Final CTA */}
                    {section.finalCta && (
                      <div className="text-center mt-12">
                        <Button 
                          size="xl" 
                          className="bg-df-gold text-black hover:bg-yellow-400 text-xl px-16 py-8 rounded-2xl font-black shadow-2xl shadow-df-gold/50 transform hover:scale-110 transition-all duration-300"
                        >
                          <Crown className="h-6 w-6 mr-3" />
                          CROWN ME WITH PURPOSE
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-df-gold/20 rounded-3xl blur-3xl scale-110"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/30 border border-df-gold/30 transform hover:scale-105 transition-all duration-500">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Next Section Indicator */}
          {index < sections.length - 1 && (
            <button
              onClick={nextSection}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-df-gold/80 hover:text-df-gold transition-all duration-300 animate-bounce"
            >
              <div className="text-center">
                <div className="text-xs mb-2 font-semibold">CONTINUE STORY</div>
                <ChevronDown className="h-8 w-8 mx-auto" />
              </div>
            </button>
          )}
        </section>
      ))}
    </div>
  )
}