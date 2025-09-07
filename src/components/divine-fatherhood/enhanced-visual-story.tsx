'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Crown, Zap, Heart, Trophy, Target, Flame, Star, ArrowRight, Play, Users, Shield, Sparkles, Lock, Unlock, CheckCircle, TrendingUp, Rocket, Diamond, Gift, Book, UserPlus } from 'lucide-react'

// Enhanced Particle System
const EnhancedParticleSystem = ({ trigger, count = 20, type = 'crown' }: {
  trigger: boolean
  count?: number
  type?: 'crown' | 'star' | 'fire' | 'diamond'
}) => {
  useEffect(() => {
    if (!trigger) return
    
    const particles: HTMLElement[] = []
    const symbols = {
      crown: '👑',
      star: '⭐',
      fire: '🔥', 
      diamond: '💎'
    }
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      particle.innerHTML = symbols[type]
      particle.style.cssText = `
        position: fixed;
        font-size: ${1.5 + Math.random()}rem;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight + 50}px;
        animation: particleFloat ${2 + Math.random() * 2}s ease-out forwards;
      `
      document.body.appendChild(particle)
      particles.push(particle)
      
      setTimeout(() => particle.remove(), 4000)
    }
    
    return () => particles.forEach(p => p.remove())
  }, [trigger, count, type])
  
  return null
}

// Magnetic Button Component  
const MagneticButton = ({ children, onClick, className = '', intensity = 20 }: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  intensity?: number
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) / intensity
    const deltaY = (e.clientY - centerY) / intensity
    
    setPosition({ x: deltaX, y: deltaY })
  }
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }
  
  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </button>
  )
}

// Progress Ring Component
const ProgressRing = ({ progress, size = 60, strokeWidth = 4, color = 'orange' }: {
  progress: number
  size?: number
  strokeWidth?: number
  color?: string
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference
  
  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`text-${color}-500 transition-all duration-500 ease-in-out`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-${color}-400 font-bold text-sm`}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  )
}

// Service Tier Card with Progressive Unlock
const ServiceTierCard = ({ 
  tier, 
  unlocked, 
  onUnlock, 
  delay = 0 
}: {
  tier: {
    id: string
    title: string
    price: string
    description: string
    features: string[]
    cta: string
    href: string
    icon: React.ReactNode
    color: string
    unlockMessage: string
  }
  unlocked: boolean
  onUnlock: () => void
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])
  
  const handleUnlock = () => {
    if (!unlocked) {
      setParticles(true)
      setTimeout(() => setParticles(false), 100)
      onUnlock()
    }
  }
  
  return (
    <div 
      ref={ref}
      className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <EnhancedParticleSystem trigger={particles} type="star" count={15} />
      
      <div className={`relative group cursor-pointer ${unlocked ? '' : 'pointer-events-none'}`}>
        <div className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
          unlocked 
            ? `bg-gradient-to-br ${tier.color} border-orange-400 shadow-2xl shadow-orange-500/30`
            : 'bg-gray-800/50 border-gray-600 grayscale'
        }`}>
          
          {/* Lock Overlay */}
          {!unlocked && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex items-center justify-center">
              <div className="text-center">
                <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg font-medium mb-6">{tier.unlockMessage}</p>
                <MagneticButton
                  onClick={handleUnlock}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Unlock className="w-5 h-5" />
                    UNLOCK NOW
                  </span>
                </MagneticButton>
              </div>
            </div>
          )}
          
          <div className="p-8 relative z-10">
            {/* Icon & Title */}
            <div className="text-center mb-6">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                unlocked ? 'bg-white/20' : 'bg-gray-700'
              }`}>
                {tier.icon}
              </div>
              <h3 className={`text-2xl font-black mb-2 ${
                unlocked ? 'text-white' : 'text-gray-400'
              }`}>
                {tier.title}
              </h3>
              <div className={`text-4xl font-black mb-4 ${
                unlocked ? 'text-orange-300' : 'text-gray-500'
              }`}>
                {tier.price}
              </div>
            </div>
            
            {/* Description */}
            <p className={`text-center mb-6 leading-relaxed ${
              unlocked ? 'text-white/90' : 'text-gray-500'
            }`}>
              {tier.description}
            </p>
            
            {/* Features */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                    unlocked ? 'text-orange-400' : 'text-gray-600'
                  }`} />
                  <span className={unlocked ? 'text-white/90' : 'text-gray-500'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            {unlocked && (
              <div className="text-center">
                <MagneticButton className="w-full group">
                  <a 
                    href={tier.href}
                    className="block w-full bg-white text-black font-black py-4 px-8 rounded-xl transform group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                      <Rocket className="w-5 h-5" />
                      {tier.cta}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                </MagneticButton>
              </div>
            )}
          </div>
          
          {/* Animated Border */}
          {unlocked && (
            <div className="absolute inset-0 rounded-3xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-75 animate-pulse"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-black to-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Enhanced Visual Story Cards
const VisualStoryCard = ({ 
  image, 
  title, 
  subtitle, 
  message, 
  interactive = false, 
  delay = 0,
  onReveal 
}: {
  image: string
  title: string
  subtitle?: string
  message: string
  interactive?: boolean
  delay?: number
  onReveal?: () => void
}) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [crownCount, setCrownCount] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsVisible(true)
          setTimeout(() => {
            setIsRevealed(true)
            onReveal?.()
          }, 500)
        }, delay)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay, onReveal])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }
  
  const handleCrownDrop = () => {
    setCrownCount(prev => prev + 1)
    // Create enhanced floating crown animation with multiple particles
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const crown = document.createElement('div')
        crown.innerHTML = ['👑', '⭐', '🔥', '💎'][Math.floor(Math.random() * 4)]
        crown.style.cssText = `
          position: fixed;
          font-size: ${1.5 + Math.random()}rem;
          pointer-events: none;
          z-index: 9999;
          left: ${Math.random() * window.innerWidth}px;
          top: ${window.innerHeight}px;
          animation: crownFloat ${2 + Math.random()}s ease-out forwards;
        `
        document.body.appendChild(crown)
        setTimeout(() => crown.remove(), 4000)
      }, i * 100)
    }
  }
  
  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="relative group cursor-pointer overflow-hidden rounded-3xl transform hover:scale-[1.02] transition-all duration-500">
        {/* Main Visual */}
        <div className="relative aspect-square bg-gradient-to-br from-black to-gray-900 border border-orange-500/30 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-700 ${
              isRevealed ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
            quality={100}
          />
          
          {/* Interactive Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-black text-orange-400 mb-2">{title}</h3>
              {subtitle && (
                <p className="text-lg text-white/90 font-medium mb-4">{subtitle}</p>
              )}
              <p className="text-white/80 leading-relaxed">{message}</p>
              
              {interactive && (
                <div className="mt-6">
                  <MagneticButton
                    onClick={handleCrownDrop}
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-black px-8 py-4 rounded-xl shadow-2xl shadow-orange-500/50 relative overflow-hidden group w-full"
                    intensity={15}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Crown className="w-6 h-6 animate-bounce" />
                      DROP CROWNS ({crownCount})
                      <Sparkles className="w-6 h-6 animate-spin" />
                    </span>
                    {crownCount > 0 && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm animate-pulse">
                        {crownCount}
                      </div>
                    )}
                  </MagneticButton>
                </div>
              )}
            </div>
          </div>
          
          {/* Enhanced floating particles with mouse tracking */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute transition-all duration-300 ease-out"
                style={{
                  left: `${15 + i * 5}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
                }}
              >
                <div className={`w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 animate-pulse ${
                  i % 4 === 0 ? 'bg-orange-400' :
                  i % 4 === 1 ? 'bg-red-400' :
                  i % 4 === 2 ? 'bg-yellow-400' : 'bg-pink-400'
                }`}
                style={{
                  animationDelay: `${i * 150}ms`,
                  animationDuration: `${1 + Math.random()}s`
                }}
                />
              </div>
            ))}
            
            {/* Magnetic light effect */}
            <div 
              className="absolute w-32 h-32 bg-gradient-radial from-orange-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
              style={{
                left: `${mousePosition.x}%`,
                top: `${mousePosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Evolution Timeline Component (keeping original)
const EvolutionTimeline = () => {
  const [activeStep, setActiveStep] = useState(0)
  
  const evolutionSteps = [
    {
      title: "MR SIXPACK EMPIRE",
      subtitle: "Building for ME",
      description: "Ego-driven, aesthetics-focused, validation-seeking",
      color: "from-gray-600 to-gray-800",
      visual: "https://page.gensparksite.com/v1/base64_upload/3cd6075688dbce3d032c33af40fcae24"
    },
    {
      title: "THE AWAKENING", 
      subtitle: "God's Plan Revealed",
      description: "Fatherhood crystallized my purpose - I wasn't building an empire for myself",
      color: "from-orange-500 to-red-600",
      visual: "https://page.gensparksite.com/v1/base64_upload/307805c150bb89c43a12d7b41ba3ba2c"
    },
    {
      title: "PURPOSE OVER PRESSURE",
      subtitle: "The Mindset Shift", 
      description: "From validation-seeking to legacy-building, from pressure to purpose",
      color: "from-blue-500 to-purple-600",
      visual: "https://page.gensparksite.com/v1/base64_upload/a514ac5c239c31ff549312eebae37361"
    },
    {
      title: "DIVINE FATHERHOOD",
      subtitle: "Crowned with Purpose",
      description: "Building stronger fathers, shaping better futures - strength with purpose",
      color: "from-green-500 to-emerald-600", 
      visual: "https://page.gensparksite.com/v1/base64_upload/9a395b08660c5562b3f50064ffe89503"
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % evolutionSteps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [evolutionSteps.length])
  
  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="flex justify-between mb-20 relative">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-gray-600 via-orange-500 to-green-500 rounded-full"></div>
        {evolutionSteps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`relative z-10 w-20 h-20 rounded-full border-4 transition-all duration-500 transform ${
              index === activeStep 
                ? 'scale-125 bg-gradient-to-r from-orange-400 to-red-500 border-white shadow-2xl shadow-orange-500/50' 
                : 'scale-100 bg-gray-700 border-gray-500 hover:scale-110'
            }`}
          >
            {index === 0 && <Target className={`w-10 h-10 mx-auto ${index === activeStep ? 'text-white' : 'text-gray-400'}`} />}
            {index === 1 && <Zap className={`w-10 h-10 mx-auto ${index === activeStep ? 'text-white' : 'text-gray-400'}`} />}
            {index === 2 && <Heart className={`w-10 h-10 mx-auto ${index === activeStep ? 'text-white' : 'text-gray-400'}`} />}
            {index === 3 && <Crown className={`w-10 h-10 mx-auto ${index === activeStep ? 'text-white' : 'text-gray-400'}`} />}
          </button>
        ))}
      </div>
      
      {/* Active Step Display */}
      <div className="relative min-h-[500px]">
        {evolutionSteps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 transform ${
              index === activeStep 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Side */}
              <div>
                <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-12 relative overflow-hidden`}>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-black text-white mb-4">{step.title}</h3>
                    <h4 className="text-2xl italic text-white/90 mb-6 font-medium">{step.subtitle}</h4>
                    <p className="text-xl text-white/80 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Visual Side */}
              <div className="relative">
                <div className="aspect-square relative group">
                  <Image
                    src={step.visual}
                    alt={step.title}
                    fill
                    className="object-cover rounded-3xl border-4 border-orange-500/30 transform group-hover:scale-[1.02] transition-all duration-500"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Announcement Section (keeping original)
const MajorAnnouncement = () => {
  const [isRevealed, setIsRevealed] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1000)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isRevealed ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          {/* Major Announcement */}
          <div className="mb-16">
            <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-lg px-8 py-4 rounded-full mb-8 animate-pulse">
              🚨 MAJOR ANNOUNCEMENT 🚨
            </div>
            
            <Image
              src="https://page.gensparksite.com/v1/base64_upload/18ece6306ea4ded9f5c43a8e435e940a"
              alt="The Evolution is Here"
              width={600}
              height={600}
              className="mx-auto rounded-3xl border-4 border-orange-500/50 shadow-2xl shadow-orange-500/30 mb-12"
              quality={100}
            />
            
            <h2 className="text-6xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
              THE EVOLUTION IS HERE
            </h2>
          </div>
          
          {/* Father of 2 Announcement */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-16 mb-16">
            <Image
              src="https://page.gensparksite.com/v1/base64_upload/db7a36e7445acdd0ce84f791321d79bc"
              alt="Father of 2 Coming Soon"
              width={500}
              height={500}
              className="mx-auto rounded-2xl mb-8"
              quality={100}
            />
            
            <h3 className="text-4xl font-black text-orange-400 mb-6">FATHER OF 2 COMING SOON</h3>
            <p className="text-2xl text-white/90 italic mb-8">"GOD'S PLAN REVEALED"</p>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              With our second son on the way, the calling becomes CRYSTAL CLEAR. This isn't just about being a father — 
              it's about being DIVINELY APPOINTED to raise world-changers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EnhancedVisualStoryExperience() {
  const [currentStory, setCurrentStory] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)
  const [unlockedServices, setUnlockedServices] = useState<Set<string>>(new Set())
  const [totalProgress, setTotalProgress] = useState(0)
  
  const serviceTiers = [
    {
      id: 'playbook',
      title: 'Divine Dad Playbook',
      price: '$47',
      description: 'Start your journey with the foundational guide to discovering divine purpose through fitness, faith, and fatherhood.',
      features: [
        '50+ page digital guide',
        'Divine purpose discovery framework', 
        'Daddy strength workout templates',
        'Faith-based mindset shifts',
        'Legacy planning worksheets'
      ],
      cta: 'GET THE PLAYBOOK',
      href: '/playbook',
      icon: <Book className="w-10 h-10 text-orange-400" />,
      color: 'from-orange-500/20 to-red-600/20',
      unlockMessage: 'Complete the visual journey to unlock this foundation'
    },
    {
      id: 'circle',
      title: 'Divine Fatherhood Circle',
      price: '$97/mo',
      description: 'Join the brotherhood. Weekly accountability, spiritual growth, and community with like-minded fathers walking in purpose.',
      features: [
        'Weekly group coaching calls',
        'Private brotherhood community',
        'Monthly workout programs',
        'Spiritual accountability partners',
        'Direct access to Sammy'
      ],
      cta: 'JOIN THE BROTHERHOOD',
      href: '/circle',
      icon: <Users className="w-10 h-10 text-orange-400" />,
      color: 'from-blue-500/20 to-purple-600/20',
      unlockMessage: 'Unlock the Playbook first to join the Circle'
    },
    {
      id: 'intensive',
      title: '1:1 Purpose Intensive',
      price: '$997',
      description: 'Transform your fatherhood in 30 days. Work directly with Sammy to discover your divine calling and build your legacy blueprint.',
      features: [
        '30-day intensive program',
        'Weekly 1:1 calls with Sammy',
        'Personalized legacy blueprint',
        'Custom workout & nutrition plan',
        'Spiritual direction & coaching'
      ],
      cta: 'APPLY FOR INTENSIVE',
      href: '/intensive',
      icon: <Diamond className="w-10 h-10 text-orange-400" />,
      color: 'from-green-500/20 to-emerald-600/20',
      unlockMessage: 'Complete Circle journey to unlock this premium experience'
    }
  ]
  
  const handleServiceUnlock = (serviceId: string) => {
    setUnlockedServices(prev => new Set([...prev, serviceId]))
    
    // Progressive unlock logic
    if (serviceId === 'playbook' && !unlockedServices.has('circle')) {
      setTimeout(() => {
        setUnlockedServices(prev => new Set([...prev, 'circle']))
      }, 2000)
    }
    if (serviceId === 'circle' && unlockedServices.has('playbook') && !unlockedServices.has('intensive')) {
      setTimeout(() => {
        setUnlockedServices(prev => new Set([...prev, 'intensive']))
      }, 2000)
    }
  }
  
  useEffect(() => {
    const newProgress = (unlockedServices.size / serviceTiers.length) * 100
    setTotalProgress(newProgress)
  }, [unlockedServices, serviceTiers.length])
  
  const visualStories = [
    {
      image: "https://page.gensparksite.com/v1/base64_upload/3dde35a07cd165916c6be2a37081d1f0",
      title: "FATHER. PROTECTOR. KING.",
      subtitle: "Strength with Purpose",
      message: "This isn't just physical strength. This is STRENGTH WITH PURPOSE. Strength to protect, provide, and lead by example for the next generation."
    },
    {
      image: "https://page.gensparksite.com/v1/base64_upload/85e5017a2c162a89e1bee8349b16bd17", 
      title: "LEGACY OVER LIKES",
      subtitle: "What Really Matters",
      message: "Social media likes disappear. LEGACY LIVES FOREVER. I stopped chasing temporary validation and started building something that will outlast me."
    },
    {
      image: "https://page.gensparksite.com/v1/base64_upload/9ac01c16d203a95347e184a50ade3a3f",
      title: "DADDY STRENGTH DIFFERENT", 
      subtitle: "A New Kind of Power",
      message: "When fathers discover they're not just dads but KINGS raising future KINGS and QUEENS - everything changes. This strength serves a higher purpose."
    },
    {
      image: "https://page.gensparksite.com/v1/base64_upload/c6aa1a6cb49f57aca6c66b1102a2ba6c",
      title: "READY TO DISCOVER YOUR DIVINE PURPOSE?",
      subtitle: "Join the Brotherhood", 
      message: "Your journey from empire to kingdom starts now. Every father has the potential to be crowned with purpose.",
      interactive: true
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStoryProgress(prev => {
        const newProgress = prev + 1
        if (newProgress >= 100) {
          setCurrentStory(current => (current + 1) % visualStories.length)
          return 0
        }
        return newProgress
      })
    }, 50)
    
    return () => clearInterval(interval)
  }, [visualStories.length])
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes crownFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes particleFloat {
          0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1); 
            opacity: 1; 
          }
          50% {
            transform: translateY(-50vh) translateX(100px) rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
          100% { 
            transform: translateY(-100vh) translateX(200px) rotate(360deg) scale(0.5); 
            opacity: 0; 
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-6xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
            THE ENHANCED TRANSFORMATION
          </h1>
          <p className="text-2xl text-white/80 max-w-4xl mx-auto">
            From <span className="text-gray-400">Mr Sixpack Empire</span> to <span className="text-orange-400 font-bold">Divine Fatherhood</span>
            <br />
            Experience the evolution with next-level interactions
          </p>
        </div>
        
        {/* Evolution Timeline */}
        <EvolutionTimeline />
      </section>
      
      {/* Visual Stories Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">
              THE <span className="text-orange-400">VISUAL</span> JOURNEY
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              Each image tells a story. Each story builds the kingdom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {visualStories.map((story, index) => (
              <VisualStoryCard
                key={index}
                image={story.image}
                title={story.title}
                subtitle={story.subtitle}
                message={story.message}
                interactive={story.interactive}
                delay={index * 300}
                onReveal={() => {
                  console.log(`Story ${index + 1} revealed`)
                  if (index === visualStories.length - 1) {
                    // Auto-unlock first service when all stories are viewed
                    setTimeout(() => handleServiceUnlock('playbook'), 1000)
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Major Announcement */}
      <MajorAnnouncement />
      
      {/* Service Tiers - Progressive Unlock System */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-orange-900/5 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                YOUR TRANSFORMATION JOURNEY
              </h2>
              <ProgressRing progress={totalProgress} size={80} />
            </div>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Each step unlocks the next level of your divine purpose.
            </p>
            
            {totalProgress > 0 && (
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold animate-pulse">
                🎉 {unlockedServices.size} of {serviceTiers.length} Services Unlocked!
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceTiers.map((tier, index) => (
              <ServiceTierCard
                key={tier.id}
                tier={tier}
                unlocked={unlockedServices.has(tier.id) || index === 0}
                onUnlock={() => handleServiceUnlock(tier.id)}
                delay={index * 200}
              />
            ))}
          </div>
          
          {/* Progressive Unlock Guide */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-orange-400 mb-6">
                🔓 UNLOCK YOUR DIVINE PATH
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Foundation</h4>
                  <p className="text-white/80">Start with the Playbook - your divine purpose guide</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    unlockedServices.has('playbook') ? 'bg-blue-500' : 'bg-gray-600'
                  }`}>
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Brotherhood</h4>
                  <p className="text-white/80">Join the Circle for community & growth</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    unlockedServices.has('circle') ? 'bg-green-500' : 'bg-gray-600'
                  }`}>
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Mastery</h4>
                  <p className="text-white/80">Intensive 1:1 coaching for transformation</p>
                </div>
              </div>
              
              <p className="text-lg text-white/90 italic">
                "Every king was once a beginner. Start where you are, unlock as you grow."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-12">
            BEGIN YOUR REIGN
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <MagneticButton 
              className="group bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-2xl px-16 py-8 rounded-2xl shadow-2xl shadow-orange-500/50 relative overflow-hidden"
              intensity={25}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-4">
                <Crown className="w-8 h-8 animate-bounce" />
                CROWN ME WITH PURPOSE
                <ArrowRight className="w-8 h-8" />
              </span>
            </MagneticButton>
          </div>
          
          <div className="mt-16 text-orange-400 font-medium text-lg animate-pulse">
            ✨ From Empire to Kingdom. From Pressure to Purpose. ✨
          </div>
        </div>
      </section>
    </div>
  )
}