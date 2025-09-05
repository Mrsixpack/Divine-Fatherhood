'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Crown, Play, ArrowDown, Heart, Dumbbell, Users, Target, Trophy, Shield, Building, ChevronDown, Star, Zap, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function UltraEpicExperience() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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
      badge: 'BABY #2 ARRIVING IN 2 MONTHS',
      content: 'With our second son on the way, the calling becomes CRYSTAL CLEAR. This isn\'t just about being a father — it\'s about being DIVINELY APPOINTED to raise world-changers.',
      points: [
        { text: 'Legacy Over Likes', icon: Trophy, color: 'from-gold-400 to-yellow-500' },
        { text: 'Kingdom Over Empire', icon: Crown, color: 'from-purple-400 to-pink-400' },
        { text: 'Purpose Over Pressure', icon: Target, color: 'from-blue-400 to-cyan-400' }
      ],
      quote: '"The moment I learned we were having another son, I knew God was calling me to something BIGGER."'
    },
    {
      id: 'evolution',
      title: 'THE EVOLUTION YOU DIDN\'T SEE COMING',
      subtitle: 'Beyond Physical → SPIRITUAL TRANSFORMATION',
      image: '/images/story/evolution-didnt-see.png',
      content: 'This wasn\'t just muscle building. This was CHARACTER BUILDING. From chasing aesthetics to building AUTHENTIC strength that serves a higher purpose.',
      pillars: [
        { 
          icon: 'MIND', 
          label: 'Renewed Thinking',
          desc: 'From ego-driven to purpose-driven mindset',
          color: 'bg-gradient-to-br from-blue-500 to-purple-600'
        },
        { 
          icon: 'BODY', 
          label: 'Purposeful Strength',
          desc: 'Training to serve and protect family',
          color: 'bg-gradient-to-br from-red-500 to-orange-500'
        },
        { 
          icon: 'SPIRIT', 
          label: 'Divine Calling',
          desc: 'Connected to God\'s plan for fatherhood',
          color: 'bg-gradient-to-br from-yellow-400 to-orange-400'
        }
      ],
      transformation: {
        before: 'Building for ME',
        after: 'Building for HIS KINGDOM'
      }
    },
    {
      id: 'matters',
      title: 'WHAT REALLY MATTERS',
      subtitle: 'LEGACY IS ETERNAL',
      image: '/images/story/what-matters.png',
      content: 'Social media likes disappear. LEGACY LIVES FOREVER. I stopped chasing temporary validation and started building something that will outlast me.',
      values: [
        { 
          icon: Trophy, 
          label: 'Generational Impact',
          desc: 'Building wealth, wisdom, and character for generations',
          metric: '100+ Years'
        },
        { 
          icon: Crown, 
          label: 'Character Over Clout',
          desc: 'Integrity matters more than Instagram followers',
          metric: 'Priceless'
        },
        { 
          icon: Heart, 
          label: 'Values Over Vanity',
          desc: 'Teaching principles that create strong leaders',
          metric: 'Infinite ROI'
        }
      ],
      revelation: '"I realized I was collecting followers when I should have been raising LEADERS."'
    },
    {
      id: 'calling',
      title: 'GOD REVEALED MY TRUE CALLING',
      subtitle: 'THROUGH THE BLESSING OF FATHERHOOD',
      image: '/images/story/god-revealed-calling.png',
      content: '"I wasn\'t building an empire for myself — He was building me for HIS empire."',
      trinity: [
        { 
          icon: Heart, 
          title: 'FAITH', 
          desc: 'Foundation of Everything',
          detail: 'Prayer isn\'t just talking to God - it\'s receiving divine strategy for raising kings and queens.'
        },
        { 
          icon: Dumbbell, 
          title: 'FITNESS', 
          desc: 'Discipline Engine',
          detail: 'Physical strength builds mental toughness. Mental toughness builds character. Character builds legacy.'
        },
        { 
          icon: Users, 
          title: 'FATHERHOOD', 
          desc: 'Ultimate Mission',
          detail: 'Every decision I make today echoes in eternity through my children and their children.'
        }
      ],
      divine_moment: 'The night I prayed and asked God: "What kind of father do you need me to be?" - Everything changed.'
    },
    {
      id: 'shift',
      title: 'THE MINDSET SHIFT',
      subtitle: 'FROM PRESSURE TO PURPOSE',
      image: '/images/story/mindset-shift.png',
      content: 'I realized I had been building under PRESSURE when I should have been building with PURPOSE.',
      comparison: {
        before: {
          title: 'PRESSURE MINDSET',
          items: ['Validation-seeking behavior', 'Ego-driven decisions', 'External metrics obsession', 'Comparison addiction'],
          color: 'from-red-600 to-red-800',
          emotion: 'Anxiety • Stress • Burnout'
        },
        after: {
          title: 'PURPOSE MINDSET', 
          items: ['Legacy-focused actions', 'Service-oriented heart', 'Internal fulfillment focus', 'Kingdom building vision'],
          color: 'from-green-500 to-emerald-600',
          emotion: 'Peace • Joy • Fulfillment'
        }
      },
      breakthrough: '"The moment I stopped asking \'Am I good enough?\' and started asking \'How can I serve?\' - everything shifted."'
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
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

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

  // Advanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const newSection = Math.round(scrollY / windowHeight)
      
      if (newSection !== currentSection && newSection >= 0 && newSection < 7) {
        setCurrentSection(newSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, isScrolling])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-df-gold border-t-transparent rounded-full animate-spin mb-8"></div>
          <div className="text-df-gold text-2xl font-bold animate-pulse">DIVINE FATHERHOOD</div>
          <div className="text-df-white/60 text-sm mt-2">Preparing Your Journey...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      {/* Ultra Advanced Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-black/20 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-df-gold via-yellow-400 to-df-gold transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Advanced Navigation Dots */}
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

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
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
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Full-Page Immersive Background */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover object-center w-full h-full transition-transform duration-700"
              style={{
                transform: `scale(${1.1 + Math.abs(mousePosition.x) * 0.03}) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)`
              }}
              priority={index === 0}
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
            {/* Animated overlay */}
            <div 
              className="absolute inset-0 bg-gradient-radial from-df-gold/10 via-transparent to-transparent transition-opacity duration-1000"
              style={{
                opacity: index === currentSection ? 0.6 : 0.2
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 w-full px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              
              {/* HERO SECTION - SPACIOUS & PREMIUM */}
              {index === 0 && (
                <div className="text-center space-y-24 animate-fade-in py-20">
                  {section.badge && (
                    <div className="premium-glass inline-flex items-center gap-4 text-df-gold px-12 py-6 font-semibold text-lg tracking-wide">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-df-gold to-yellow-400 animate-pulse"></div>
                      <span className="premium-body">{section.badge}</span>
                    </div>
                  )}
                  
                  <div className="mb-20">
                    <h1 className="ultra-sleek text-7xl md:text-9xl lg:text-[12rem] text-white mb-8">
                      <span className="bg-gradient-to-r from-df-gold via-yellow-300 to-df-gold bg-clip-text text-transparent" style={{animation: 'premiumGlow 4s ease-in-out infinite'}}>
                        {section.title}
                      </span>
                    </h1>
                  </div>
                  
                  <div className="mb-16">
                    <div className="premium-heading text-3xl md:text-5xl lg:text-6xl text-df-gold/95 font-semibold tracking-tight" style={{animation: 'premiumBreathe 6s ease-in-out infinite'}}>
                      {section.subtitle}
                    </div>
                  </div>
                  
                  <div className="mb-20">
                    <p className="premium-body text-xl md:text-2xl lg:text-3xl text-df-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                      {section.content}
                    </p>
                  </div>
                  
                  {/* Premium CTA Buttons */}
                  <div className="mb-32">
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                      <button
                        onClick={nextSection}
                        className="premium-button text-lg px-12 py-4 font-medium tracking-wide"
                      >
                        {section.cta}
                      </button>
                      
                      <button className="premium-glass border border-df-gold/30 text-df-gold hover:border-df-gold/60 text-lg px-10 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:scale-105">
                        Watch Transformation
                      </button>
                    </div>
                  </div>

                  {/* Clean Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {section.stats?.map((stat, i) => (
                      <div key={i} className="text-center group cursor-pointer">
                        <div className="premium-card p-8 hover:scale-105 transition-all duration-300">
                          <stat.icon className="h-6 w-6 text-df-gold mx-auto mb-6" />
                          <div className="text-3xl font-bold text-df-gold mb-4">{stat.number}</div>
                          <div className="text-base text-df-white/70 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STORY SECTIONS - CLEAN & SPACIOUS */}
              {index > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center py-20">
                  <div className={`space-y-16 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    {section.badge && (
                      <div className="premium-glass inline-flex items-center gap-4 text-emerald-400 px-12 py-6 font-medium text-xl tracking-wide">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 animate-pulse"></div>
                        <span className="premium-body">{section.badge}</span>
                      </div>
                    )}
                    
                    <div className="space-y-12">
                      <h2 className="ultra-sleek text-5xl md:text-7xl lg:text-8xl text-df-gold" style={{animation: 'premiumGlow 3s ease-in-out infinite'}}>
                        {section.title}
                      </h2>
                      
                      {section.subtitle && (
                        <h3 className="premium-heading text-2xl md:text-4xl lg:text-5xl text-df-white/95 font-medium tracking-tight">
                          {section.subtitle}
                        </h3>
                      )}
                      
                      <p className="premium-body text-xl md:text-2xl lg:text-3xl text-df-white/90 leading-relaxed font-light max-w-3xl">
                        {section.content}
                      </p>
                    </div>

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

                    {/* Enhanced Pillars, Values, Trinity, etc. */}
                    {section.pillars && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {section.pillars.map((pillar, i) => (
                          <div key={i} className={`text-center ${pillar.color} rounded-2xl p-8 backdrop-blur-xl border border-white/20 hover:scale-110 transition-all duration-500 shadow-2xl cursor-pointer group`}>
                            <div className="text-3xl font-black text-white mb-3 group-hover:animate-pulse">{pillar.icon}</div>
                            <div className="text-white font-bold text-lg mb-2">{pillar.label}</div>
                            <div className="text-white/80 text-sm">{pillar.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Enhanced Values */}
                    {section.values && (
                      <div className="space-y-6">
                        {section.values.map((value, i) => (
                          <div key={i} className="bg-gradient-to-r from-df-gold/10 to-yellow-400/10 border border-df-gold/30 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-500 shadow-xl group cursor-pointer">
                            <div className="flex items-start gap-6">
                              <value.icon className="h-10 w-10 text-df-gold flex-shrink-0 group-hover:animate-bounce" />
                              <div className="flex-1">
                                <h4 className="text-df-gold font-black text-xl mb-2">{value.label}</h4>
                                <p className="text-df-white/90 text-lg mb-3">{value.desc}</p>
                                <div className="text-df-gold/80 font-bold">{value.metric}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Enhanced Roles - DADDY STRENGTH DIFFERENT */}
                    {section.roles && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                        {section.roles.map((role, i) => (
                          <div key={i} className="premium-card text-center group cursor-pointer p-12">
                            <div className="premium-glass w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                              <role.icon className="h-10 w-10 text-df-gold" />
                            </div>
                            <h4 className="premium-heading text-df-gold text-2xl mb-4 tracking-wide">{role.title}</h4>
                            <p className="premium-body text-df-white/90 text-lg font-medium mb-4">{role.desc}</p>
                            <p className="premium-body text-df-white/70 text-base mb-6 leading-relaxed">{role.detail}</p>
                            <div className="premium-glass text-df-gold font-medium text-sm tracking-wide px-6 py-3 inline-block">
                              {role.power}
                            </div>
                          </div>
                        ))}
                      </div>
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

                  {/* Immersive Image Side */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} relative`}>
                    <div className="relative group h-[80vh] w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-df-gold/30 to-yellow-400/30 rounded-2xl blur-2xl scale-105 group-hover:scale-110 transition-all duration-500"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/40 border border-df-gold/30 transform group-hover:scale-[1.02] transition-all duration-500 h-full">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover object-center"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-df-gold/5 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Next Section Ultra Indicator */}
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