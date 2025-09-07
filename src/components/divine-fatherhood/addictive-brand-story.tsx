'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Crown, Dumbbell, Heart, Users, Target, Shield, Zap, Flame, Star, Trophy, Clock, DollarSign, Home, Briefcase, Play, ArrowRight, CheckCircle, AlertTriangle, TrendingUp, Coffee, Moon, Sun } from 'lucide-react'

// Dopamine-inducing counter with cultural messaging
const CulturalCounter = ({ end, label, culturalContext, duration = 2000 }: {
  end: number
  label: string
  culturalContext: string
  duration?: number
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(end * easeOut))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])
  
  return (
    <div ref={ref} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500">
      <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden">
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        
        <div className="relative z-10">
          <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
            {count.toLocaleString()}%
          </div>
          <div className="text-orange-300 font-bold text-lg mb-2">{label}</div>
          <div className="text-white/80 text-sm">{culturalContext}</div>
        </div>
        
        {/* Floating particles on hover */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 200}ms`
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Pain Point Reveal Component (addictive problem-solution format)
const PainPointReveal = ({ icon: Icon, problem, impact, solution, delay = 0 }: {
  icon: any
  problem: string
  impact: string
  solution: string
  delay?: number
}) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay)
        setTimeout(() => setIsRevealed(true), delay + 1000)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])
  
  return (
    <div ref={ref} className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 hover:border-red-400/60 transition-all duration-500 group cursor-pointer relative overflow-hidden">
        
        {/* Problem State */}
        <div className={`transition-all duration-700 ${isRevealed ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}>
          <div className="flex items-start gap-6">
            <div className="bg-red-500/20 p-4 rounded-full">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-black text-red-400 mb-3">THE STRUGGLE IS REAL</h3>
              <p className="text-white/90 text-lg mb-4 leading-relaxed">{problem}</p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-medium">💔 Impact: {impact}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Solution State */}
        <div className={`absolute inset-0 p-8 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
          <div className="flex items-start gap-6">
            <div className="bg-green-500/20 p-4 rounded-full">
              <Icon className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-black text-green-400 mb-3">THE BREAKTHROUGH</h3>
              <p className="text-white/90 text-lg leading-relaxed">{solution}</p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-300 font-medium">✨ This changes EVERYTHING</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-4 right-4">
          <div className={`w-12 h-2 bg-gray-700 rounded-full overflow-hidden`}>
            <div className={`h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-700 ${isRevealed ? 'w-full' : 'w-0'}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Transformation Timeline Component
const TransformationTimeline = () => {
  const [activePhase, setActivePhase] = useState(0)
  
  const phases = [
    {
      phase: "The Awakening",
      subtitle: "\"My vision was clouded by distractions\"",
      description: "Growing up envisioning greatness, but overwhelmed by adulthood pressures, relationships, and societal expectations.",
      emotion: "Confusion",
      color: "from-gray-600 to-gray-800",
      icon: AlertTriangle
    },
    {
      phase: "The Transformation", 
      subtitle: "\"Fatherhood didn't just challenge me—it TRANSFORMED me\"",
      description: "Becoming a husband and father crystallized my purpose. Fitness became my anchor—discipline in training taught discipline in life.",
      emotion: "Determination",
      color: "from-orange-500 to-red-600",
      icon: Flame
    },
    {
      phase: "The Revelation",
      subtitle: "\"Finally, someone who gets it\"",
      description: "Realized other fathers faced the same struggles. Started sharing my journey and discovered an underserved community hungry for authentic guidance.",
      emotion: "Purpose",
      color: "from-blue-500 to-purple-600", 
      icon: Zap
    },
    {
      phase: "The Mission",
      subtitle: "\"Building Stronger Fathers, Shaping Better Futures\"",
      description: "Now empowering young African-American fathers with culturally relevant mentorship, innovative AI tools, and practical solutions.",
      emotion: "Impact",
      color: "from-green-500 to-emerald-600",
      icon: Crown
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [phases.length])
  
  return (
    <div className="relative">
      {/* Timeline */}
      <div className="flex justify-between mb-16 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-orange-500 to-green-500 rounded-full"></div>
        {phases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setActivePhase(index)}
            className={`relative z-10 w-16 h-16 rounded-full border-4 transition-all duration-500 transform ${
              index === activePhase 
                ? 'scale-125 bg-gradient-to-r from-orange-400 to-red-500 border-white shadow-2xl shadow-orange-500/50' 
                : 'scale-100 bg-gray-700 border-gray-500 hover:scale-110'
            }`}
          >
            <phase.icon className={`w-8 h-8 mx-auto ${index === activePhase ? 'text-white' : 'text-gray-400'}`} />
          </button>
        ))}
      </div>
      
      {/* Active Phase Display */}
      <div className="relative min-h-[300px]">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 transform ${
              index === activePhase 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className={`bg-gradient-to-br ${phase.color} rounded-3xl p-12 text-center relative overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
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
              
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white mb-4">{phase.phase}</h3>
                <blockquote className="text-2xl italic text-white/90 mb-6 font-medium">
                  {phase.subtitle}
                </blockquote>
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
                  {phase.description}
                </p>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-white font-bold">Emotion: {phase.emotion}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AddictiveBrandStory() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }
    
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(Math.min(scrolled / maxScroll, 1))
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
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
              className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60 blur-sm"
              style={{
                filter: `blur(${Math.random() * 2}px)`,
                transform: `scale(${0.3 + Math.random() * 0.7})`
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.png"
            alt="Building Stronger Fathers"
            fill
            className="object-cover"
            style={{
              transform: `scale(${1.1 + Math.abs(mousePosition.x) * 0.05}) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)`
            }}
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-xl border border-orange-500/30 rounded-full px-8 py-4 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-bold text-lg">African-American Fathers • Ages 25-40 • $50K-$100K</span>
            </div>
            
            <h1 
              className="font-black leading-none mb-8"
              style={{
                fontSize: 'clamp(3rem, 12vw, 7rem)',
                letterSpacing: '-0.05em',
                background: 'linear-gradient(45deg, #FB923C, #EF4444, #DC2626, #FB923C)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              BUILDING STRONGER
              <br />
              <span className="text-white">FATHERS</span>
              <br />
              SHAPING BETTER
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">FUTURES</span>
            </h1>
          </div>
          
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-4xl text-white/90 font-medium max-w-5xl mx-auto leading-relaxed mb-8">
              From <span className="text-red-400 font-black">"My vision was clouded by distractions"</span>
              <br />
              To <span className="text-green-400 font-black">"Finally, someone who gets it"</span>
            </p>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              The culturally relevant fitness and fatherhood guidance you've been searching for.
            </p>
          </div>
          
          {/* Cultural Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <CulturalCounter 
              end={73} 
              label="Feel Isolated in Journey"
              culturalContext="African-American fathers lacking culturally relevant guidance"
            />
            <CulturalCounter 
              end={89} 
              label="Struggle with Time"
              culturalContext="Balancing family, career, and personal wellness"
            />
            <CulturalCounter 
              end={94} 
              label="Want Better for Kids"
              culturalContext="Breaking generational patterns of health neglect"
            />
          </div>
        </div>
      </section>
      
      {/* Transformation Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              THE JOURNEY
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              Watch the transformation unfold from confusion to clarity, from struggle to strength
            </p>
          </div>
          
          <TransformationTimeline />
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">
              THE <span className="text-red-400">STRUGGLES</span> ARE REAL
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              But so are the <span className="text-green-400 font-bold">SOLUTIONS</span>
            </p>
            <div className="text-lg text-orange-400 font-medium">
              ⚡ Watch each problem transform into breakthrough ⚡
            </div>
          </div>
          
          <div className="space-y-12">
            <PainPointReveal
              icon={Clock}
              problem="Struggling to fit workouts into already packed schedules between work demands and family responsibilities"
              impact="Inconsistent training, frustration, abandoned fitness goals"
              solution="Time-efficient 20-minute workout protocols designed for home, early morning routines before family wakes"
              delay={0}
            />
            
            <PainPointReveal
              icon={Users}
              problem="Feeling isolated in their journey as fitness-minded fathers with limited examples in media"
              impact="Uncertainty about balance, missing peer support during challenges"
              solution="Brotherhood building, shared experiences, virtual and in-person community events with fathers who look like you"
              delay={500}
            />
            
            <PainPointReveal
              icon={Target}
              problem="All-or-nothing thinking about fitness and fatherhood creating perfectionism paralysis"
              impact="Giving up when perfect adherence isn't possible, harsh self-judgment"
              solution="Progress-focused mindset, recovery strategies after setbacks, 'done is better than perfect' philosophy"
              delay={1000}
            />
            
            <PainPointReveal
              icon={DollarSign}
              problem="Concerns about investing in personal wellness when family financial goals exist"
              impact="Hesitation to commit to fitness programs, delayed health investments"
              solution="Cost-effective fitness solutions, framing health as family investment, productivity enhancement benefits"
              delay={1500}
            />
          </div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-500/5"></div>
            <div className="relative z-10">
              <Crown className="w-20 h-20 text-orange-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-4xl font-black text-white mb-8">OUR MISSION</h2>
              <blockquote className="text-2xl italic text-white/90 leading-relaxed mb-8">
                "To empower young African-American fathers to lead lives filled with purpose, strength, and genuine joy. Through culturally resonant storytelling, innovative AI-driven content, and actionable mentorship, we're not just building better bodies—we're helping build better lives, one father at a time."
              </blockquote>
              <div className="text-orange-400 font-bold text-xl">
                — Samuel "MrSixPack" Ouko
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
            JOIN THE BROTHERHOOD
          </h2>
          <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Your next chapter begins now. The strength of a father becomes the foundation of a family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-xl px-12 py-6 rounded-2xl transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-orange-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-4">
                <Crown className="w-8 h-8" />
                START MY TRANSFORMATION
                <ArrowRight className="w-8 h-8" />
              </span>
            </button>
            
            <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white font-black text-xl px-12 py-6 rounded-2xl border border-orange-500/30 hover:border-orange-400/60 transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-4">
                <Play className="w-8 h-8" />
                WATCH THE STORY
              </span>
            </button>
          </div>
          
          <div className="mt-12 text-orange-400 font-medium">
            ✨ Build yourself. Build your legacy. ✨
          </div>
        </div>
      </section>
    </div>
  )
}