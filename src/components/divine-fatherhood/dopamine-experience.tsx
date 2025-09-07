'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Crown, Play, Zap, Flame, Star, Trophy, Heart, Target, Shield, Users, ArrowRight, ChevronDown, Sparkles, Rocket } from 'lucide-react'

// Dopamine-inducing utility functions
const useMouseParallax = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
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
  
  return mousePosition
}

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(Math.min(scrolled / maxScroll, 1))
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return scrollProgress
}

// Addictive Counter Component
const DopamineCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    let startTime: number
    const startValue = 0
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth acceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(startValue + (end - startValue) * easeOut))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])
  
  return (
    <div ref={ref} className="relative">
      <span className="font-black text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text animate-pulse">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      {isVisible && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl animate-pulse"></div>
      )}
    </div>
  )
}

// Magnetic Button Component
const MagneticButton = ({ children, onClick, className = '', variant = 'primary' }: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * 0.2
    const deltaY = (e.clientY - centerY) * 0.2
    
    setPosition({ x: deltaX, y: deltaY })
  }, [])
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }
  
  const baseStyles = variant === 'primary' 
    ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl shadow-orange-500/50'
    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-2xl shadow-purple-500/50'
  
  return (
    <button
      ref={buttonRef}
      className={`
        relative overflow-hidden font-black uppercase tracking-wider
        transform transition-all duration-300 ease-out
        hover:scale-110 active:scale-95
        ${baseStyles}
        ${className}
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.1 : 1})`,
        borderRadius: '20px',
        padding: '20px 40px',
        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
      </div>
      
      {/* Particles on hover */}
      {isHovered && [...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
            animationDelay: `${i * 100}ms`
          }}
        />
      ))}
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </button>
  )
}

// Floating Particles System
const FloatingParticles = ({ count = 30 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div 
            className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60 blur-sm"
            style={{
              filter: `blur(${Math.random() * 2}px)`,
              transform: `scale(${0.3 + Math.random() * 0.7})`
            }}
          />
        </div>
      ))}
    </div>
  )
}

// Dopamine Progress Bar
const DopamineProgressBar = () => {
  const progress = useScrollProgress()
  const [milestones] = useState([0.2, 0.4, 0.6, 0.8, 1.0])
  
  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-black/20 z-50 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-300 ease-out relative overflow-hidden"
        style={{ width: `${progress * 100}%` }}
      >
        {/* Shimmer effect on progress bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        
        {/* Milestone celebrations */}
        {milestones.map((milestone, i) => (
          progress >= milestone && (
            <div
              key={i}
              className="absolute right-0 top-0 h-full w-8 bg-white/30 animate-pulse"
              style={{ animationDuration: '0.5s', animationIterationCount: '3' }}
            />
          )
        ))}
      </div>
      
      {/* Progress percentage */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400 font-black text-sm">
        {Math.round(progress * 100)}%
      </div>
    </div>
  )
}

export function DopamineExperience() {
  const mousePosition = useMouseParallax()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  
  // Smooth loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])
  
  // Loading screen with dopamine hits
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="text-center relative z-10">
          {/* Spinning crown */}
          <div className="relative mb-8">
            <Crown className="h-20 w-20 text-yellow-400 mx-auto animate-spin" />
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          {/* Animated text */}
          <div className="space-y-4">
            <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              DIVINE FATHERHOOD
            </div>
            <div className="text-white/80 text-lg animate-bounce">
              Preparing Something ADDICTIVE...
            </div>
            
            {/* Loading bar */}
            <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      {/* Dopamine Progress Bar */}
      <DopamineProgressBar />
      
      {/* Floating Particles */}
      <FloatingParticles count={40} />
      
      {/* Hero Section - MAXIMUM DOPAMINE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.png"
            alt="Divine Fatherhood"
            fill
            className="object-cover"
            style={{
              transform: `scale(${1.1 + Math.abs(mousePosition.x) * 0.05}) translate(${mousePosition.x * 10}px, ${mousePosition.y * 5}px)`
            }}
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
          
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          {/* Badge with dopamine hit */}
          <div className="mb-12 animate-slide-down">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-xl border border-yellow-400/30 rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 font-medium text-lg">Sammy "MrSixPack" Williams • Father of 2 (Soon) • Delaware</span>
            </div>
          </div>
          
          {/* MASSIVE Hero Title */}
          <div className="mb-16 animate-scale-up">
            <h1 
              className="font-black leading-none mb-8"
              style={{
                fontSize: 'clamp(3rem, 12vw, 8rem)',
                letterSpacing: '-0.05em',
                background: 'linear-gradient(45deg, #FCD34D, #F97316, #EF4444, #FCD34D)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              CROWNED
              <br />
              WITH
              <br />
              <span className="relative">
                PURPOSE
                {/* Glowing underline */}
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500 blur-sm animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Subtitle with animation */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-4xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed">
              From Building an Empire for{' '}
              <span className="text-yellow-400 font-black animate-pulse">ME</span>
              {' '}→ Being Built for{' '}
              <span className="text-orange-500 font-black animate-pulse">HIS EMPIRE</span>
            </p>
          </div>
          
          {/* CTA Buttons with magnetic effect */}
          <div className="mb-20 animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '1s' }}>
            <MagneticButton variant="primary">
              <Rocket className="w-6 h-6" />
              WITNESS THE TRANSFORMATION
              <Sparkles className="w-6 h-6" />
            </MagneticButton>
            
            <MagneticButton variant="secondary">
              <Crown className="w-6 h-6" />
              CROWN ME WITH PURPOSE
            </MagneticButton>
          </div>
          
          {/* Addictive Stats Counter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            {[
              { icon: Crown, label: 'Fathers Crowned', count: 5000, suffix: '+' },
              { icon: Heart, label: 'Authentic Journey', count: 100, suffix: '%' },
              { icon: Star, label: 'Kingdom Access', count: 24, suffix: '/7' },
              { icon: Zap, label: 'Divine Purpose', count: 1, prefix: '∞' }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6 hover:border-yellow-400/60 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:animate-spin" />
                  <div className="text-3xl font-black mb-2">
                    <DopamineCounter 
                      end={stat.count} 
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator with dopamine hit */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-xl border border-yellow-400/30 rounded-full p-4">
            <ChevronDown className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Placeholder for more sections */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            🔥 MORE DOPAMINE-INDUCING SECTIONS COMING...
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Share your updated brand story and I'll make it IRRESISTIBLE! 
          </p>
          
          <MagneticButton>
            <Flame className="w-6 h-6" />
            LET'S BUILD SOMETHING ADDICTIVE
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}