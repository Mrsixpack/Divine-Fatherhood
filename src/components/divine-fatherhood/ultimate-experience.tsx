'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Crown, Zap, Heart, Trophy, Target, Flame, Star, ArrowRight, Play, Users, Shield, Sparkles, Lock, Unlock, CheckCircle, TrendingUp, Rocket, Diamond, Gift, Book, UserPlus, Eye, Brain, Mic, Volume2, Headphones, Cpu } from 'lucide-react'

// AI-Powered Personalization Engine
class PersonalizationEngine {
  private userData: {
    scrollDepth: number
    timeOnPage: number
    interactions: string[]
    mouseMovements: number
    preferredContent: string[]
    urgencyLevel: 'low' | 'medium' | 'high'
  }

  constructor() {
    this.userData = {
      scrollDepth: 0,
      timeOnPage: 0,
      interactions: [],
      mouseMovements: 0,
      preferredContent: [],
      urgencyLevel: 'low'
    }
  }

  trackEngagement(action: string) {
    this.userData.interactions.push(action)
    this.userData.timeOnPage = Date.now()
    
    // AI decision making
    if (this.userData.interactions.length > 10) {
      this.userData.urgencyLevel = 'high'
    } else if (this.userData.interactions.length > 5) {
      this.userData.urgencyLevel = 'medium'
    }
  }

  getPersonalizedMessage(): string {
    const messages = {
      low: "Discover your divine purpose...",
      medium: "Your transformation awaits - are you ready?",
      high: "🔥 Your calling is clear - claim your crown NOW!"
    }
    return messages[this.userData.urgencyLevel]
  }

  getPersonalizedPricing(): { original: number, discount: number, urgency: string } {
    switch(this.userData.urgencyLevel) {
      case 'high':
        return { original: 47, discount: 27, urgency: "Limited time - 43% off!" }
      case 'medium':
        return { original: 47, discount: 37, urgency: "Special offer - 21% off!" }
      default:
        return { original: 47, discount: 47, urgency: "" }
    }
  }
}

// Advanced Biometric Engagement Tracker
const BiometricTracker = ({ onEngagementChange }: { onEngagementChange: (level: number) => void }) => {
  const [engagementLevel, setEngagementLevel] = useState(0)
  
  useEffect(() => {
    let mouseMoveCount = 0
    let scrollCount = 0
    let clickCount = 0
    
    const trackMouse = () => {
      mouseMoveCount++
      if (mouseMoveCount > 50) setEngagementLevel(prev => Math.min(prev + 1, 100))
    }
    
    const trackScroll = () => {
      scrollCount++
      if (scrollCount > 10) setEngagementLevel(prev => Math.min(prev + 2, 100))
    }
    
    const trackClick = () => {
      clickCount++
      setEngagementLevel(prev => Math.min(prev + 5, 100))
    }
    
    document.addEventListener('mousemove', trackMouse)
    document.addEventListener('scroll', trackScroll)
    document.addEventListener('click', trackClick)
    
    return () => {
      document.removeEventListener('mousemove', trackMouse)
      document.removeEventListener('scroll', trackScroll)
      document.removeEventListener('click', trackClick)
    }
  }, [])
  
  useEffect(() => {
    onEngagementChange(engagementLevel)
  }, [engagementLevel, onEngagementChange])
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black/80 backdrop-blur-xl rounded-full p-4 border border-orange-500/30">
        <div className="flex items-center gap-3">
          <Brain className={`w-6 h-6 ${engagementLevel > 70 ? 'text-green-400 animate-pulse' : engagementLevel > 40 ? 'text-orange-400' : 'text-gray-400'}`} />
          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-green-400 transition-all duration-500 ease-out"
              style={{ width: `${engagementLevel}%` }}
            />
          </div>
          <span className="text-white font-bold text-sm">{engagementLevel}%</span>
        </div>
      </div>
    </div>
  )
}

// AI Voice Assistant Component
const AIVoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false)
  const [aiResponse, setAiResponse] = useState("")
  const [isActive, setIsActive] = useState(false)
  
  const responses = {
    "tell me about divine fatherhood": "Divine Fatherhood is Sammy's transformation from Mr Sixpack Empire to purpose-driven fatherhood. It's about becoming a king who raises kings and queens.",
    "what services do you offer": "We have three tiers: The Divine Dad Playbook for $47, the Divine Fatherhood Circle for $97/month, and the 1:1 Purpose Intensive for $997.",
    "how do i start": "Start with the Divine Dad Playbook - it's your foundation for discovering divine purpose through fitness, faith, and fatherhood.",
    "who is sammy": "Sammy is a father of 2 who transformed from building an ego-driven empire to creating a purpose-driven kingdom for his family's legacy."
  }
  
  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerCommand.includes(key.split(' ')[0])) {
        setAiResponse(response)
        // Text-to-speech simulation
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(response)
          utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Male')) || null
          speechSynthesis.speak(utterance)
        }
        break
      }
    }
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl rounded-3xl p-6 border border-orange-500/30 max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-white font-medium">AI Assistant</span>
            <Cpu className="w-5 h-5 text-orange-400" />
          </div>
          
          {aiResponse && (
            <p className="text-white/90 text-sm leading-relaxed mb-4">{aiResponse}</p>
          )}
          
          <button
            onClick={() => setIsListening(!isListening)}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              {isListening ? <Volume2 className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              {isListening ? 'Listening...' : 'Ask AI About Divine Fatherhood'}
            </span>
          </button>
        </div>
      </div>
      
      <button
        onClick={() => setIsActive(!isActive)}
        className="mt-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 hover:scale-110 transition-all duration-300"
      >
        <Headphones className="w-8 h-8 text-white" />
      </button>
    </div>
  )
}

// Dynamic Social Proof Engine
const SocialProofEngine = ({ engagementLevel }: { engagementLevel: number }) => {
  const [currentProof, setCurrentProof] = useState(0)
  const [showUrgency, setShowUrgency] = useState(false)
  
  const socialProofs = [
    { icon: "👑", text: "Marcus just unlocked Divine Purpose in Detroit", time: "2 min ago" },
    { icon: "🔥", text: "James joined the Circle from Atlanta", time: "5 min ago" },
    { icon: "💎", text: "David started his Intensive in Chicago", time: "8 min ago" },
    { icon: "⭐", text: "Kevin downloaded the Playbook in Houston", time: "12 min ago" },
    { icon: "🚀", text: "Antonio transformed his fatherhood in Phoenix", time: "15 min ago" }
  ]
  
  useEffect(() => {
    if (engagementLevel > 50) {
      setShowUrgency(true)
      const interval = setInterval(() => {
        setCurrentProof(prev => (prev + 1) % socialProofs.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [engagementLevel, socialProofs.length])
  
  if (!showUrgency) return null
  
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-4 border border-orange-500/30 max-w-xs animate-slideInLeft">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-bounce">{socialProofs[currentProof].icon}</span>
          <div>
            <p className="text-white font-medium text-sm">{socialProofs[currentProof].text}</p>
            <p className="text-orange-400 text-xs">{socialProofs[currentProof].time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Advanced Particle Physics System
const AdvancedParticleSystem = ({ intensity = 1, type = 'crown' }: {
  intensity?: number
  type?: 'crown' | 'star' | 'fire' | 'diamond' | 'energy'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
      color: string
    }> = []
    
    const colors = {
      crown: ['#FFA500', '#FF6B35', '#F7931E'],
      star: ['#FFD700', '#FFA500', '#FFFF00'],
      fire: ['#FF4500', '#FF6B35', '#FF8C00'],
      diamond: ['#00FFFF', '#87CEEB', '#ADD8E6'],
      energy: ['#00FF00', '#32CD32', '#98FB98']
    }
    
    const createParticle = (x: number, y: number) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4 * intensity,
        vy: (Math.random() - 0.5) * 4 * intensity,
        life: 0,
        maxLife: 60 + Math.random() * 60,
        size: 2 + Math.random() * 4,
        color: colors[type][Math.floor(Math.random() * colors[type].length)]
      })
    }
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Create particles on mouse move
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++
        
        const alpha = 1 - (particle.life / particle.maxLife)
        ctx.globalAlpha = alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1)
        }
      })
      
      // Random particle generation
      if (Math.random() < 0.1 * intensity) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      }
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.3 * intensity) {
        createParticle(e.clientX, e.clientY)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [intensity, type])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  )
}

// Predictive Analytics Dashboard
const PredictiveAnalytics = ({ engagementLevel }: { engagementLevel: number }) => {
  const [predictions, setPredictions] = useState({
    conversionProbability: 0,
    recommendedAction: '',
    urgencyLevel: 'low'
  })
  
  useEffect(() => {
    // AI prediction algorithm
    const conversionProb = Math.min(engagementLevel * 1.2, 95)
    let action = ''
    let urgency = 'low'
    
    if (conversionProb > 80) {
      action = 'Show premium offer with discount'
      urgency = 'high'
    } else if (conversionProb > 60) {
      action = 'Present Circle membership benefits'
      urgency = 'medium'
    } else if (conversionProb > 30) {
      action = 'Offer free Playbook sample'
      urgency = 'medium'
    } else {
      action = 'Continue engagement building'
      urgency = 'low'
    }
    
    setPredictions({
      conversionProbability: conversionProb,
      recommendedAction: action,
      urgencyLevel: urgency
    })
  }, [engagementLevel])
  
  return (
    <div className="fixed top-4 left-4 z-40">
      <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-orange-500/30 max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-orange-400" />
          <span className="text-white font-bold text-sm">AI Analytics</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300 text-xs">Conversion Probability:</span>
            <span className="text-green-400 font-bold text-xs">{predictions.conversionProbability.toFixed(1)}%</span>
          </div>
          
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 transition-all duration-1000"
              style={{ width: `${predictions.conversionProbability}%` }}
            />
          </div>
          
          <p className="text-orange-300 text-xs mt-2">
            {predictions.recommendedAction}
          </p>
        </div>
      </div>
    </div>
  )
}

// Main Ultimate Experience Component
export function UltimateExperience() {
  const [engagementLevel, setEngagementLevel] = useState(0)
  const [personalizationEngine] = useState(new PersonalizationEngine())
  const [currentExperience, setCurrentExperience] = useState('discovery')
  const [aiPersonalization, setAiPersonalization] = useState({
    message: "Discover your divine purpose...",
    pricing: { original: 47, discount: 47, urgency: "" }
  })
  
  const handleEngagementChange = useCallback((level: number) => {
    setEngagementLevel(level)
    personalizationEngine.trackEngagement(`engagement_${level}`)
    
    // Update AI personalization based on engagement
    setAiPersonalization({
      message: personalizationEngine.getPersonalizedMessage(),
      pricing: personalizationEngine.getPersonalizedPricing()
    })
    
    // Dynamically change experience based on engagement
    if (level > 80) {
      setCurrentExperience('high_intent')
    } else if (level > 50) {
      setCurrentExperience('medium_intent')
    } else {
      setCurrentExperience('discovery')
    }
  }, [personalizationEngine])
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Advanced Particle System */}
      <AdvancedParticleSystem 
        intensity={engagementLevel / 50} 
        type={engagementLevel > 70 ? 'energy' : engagementLevel > 40 ? 'fire' : 'crown'} 
      />
      
      {/* Biometric Engagement Tracker */}
      <BiometricTracker onEngagementChange={handleEngagementChange} />
      
      {/* Predictive Analytics Dashboard */}
      <PredictiveAnalytics engagementLevel={engagementLevel} />
      
      {/* Social Proof Engine */}
      <SocialProofEngine engagementLevel={engagementLevel} />
      
      {/* AI Voice Assistant */}
      <AIVoiceAssistant />
      
      {/* Dynamic Content Based on Engagement Level */}
      <div className="relative z-20 pt-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* AI-Personalized Hero */}
          <div className="mb-20">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-6 py-3 rounded-full mb-8 animate-pulse">
              🤖 AI-Powered Experience Active
            </div>
            
            <h1 className="text-7xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8 animate-gradient">
              {currentExperience === 'high_intent' ? 'CLAIM YOUR CROWN NOW' : 
               currentExperience === 'medium_intent' ? 'YOUR CALLING AWAITS' : 
               'DISCOVER DIVINE FATHERHOOD'}
            </h1>
            
            <p className="text-3xl text-white/90 mb-12 animate-fadeIn">
              {aiPersonalization.message}
            </p>
            
            {/* Dynamic Pricing Based on Engagement */}
            {aiPersonalization.pricing.urgency && (
              <div className="bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 max-w-2xl mx-auto mb-12">
                <div className="text-red-400 font-bold text-xl mb-4 animate-pulse">
                  ⚡ {aiPersonalization.pricing.urgency}
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-4xl text-gray-400 line-through">${aiPersonalization.pricing.original}</span>
                  <span className="text-6xl font-black text-green-400">${aiPersonalization.pricing.discount}</span>
                </div>
              </div>
            )}
            
            {/* Engagement-Based CTA */}
            <div className="space-y-6">
              {engagementLevel > 80 ? (
                <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-3xl px-20 py-8 rounded-2xl shadow-2xl shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-pulse">
                  <span className="flex items-center gap-4">
                    <Diamond className="w-10 h-10 animate-spin" />
                    CLAIM INTENSIVE NOW - 83% OFF!
                    <Rocket className="w-10 h-10" />
                  </span>
                </button>
              ) : engagementLevel > 50 ? (
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-black text-2xl px-16 py-6 rounded-2xl shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Users className="w-8 h-8" />
                    JOIN THE BROTHERHOOD
                    <ArrowRight className="w-8 h-8" />
                  </span>
                </button>
              ) : (
                <button className="group bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-xl px-12 py-5 rounded-2xl shadow-2xl shadow-orange-500/50 hover:scale-110 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Book className="w-7 h-7" />
                    GET THE PLAYBOOK
                    <Star className="w-7 h-7" />
                  </span>
                </button>
              )}
            </div>
          </div>
          
          {/* Engagement Level Indicator */}
          <div className="text-center mb-20">
            <div className="inline-block bg-black/80 backdrop-blur-xl rounded-full p-6 border border-orange-500/30">
              <div className="flex items-center gap-4">
                <Brain className={`w-8 h-8 ${engagementLevel > 70 ? 'text-green-400 animate-pulse' : 'text-orange-400'}`} />
                <div>
                  <p className="text-white font-bold">AI Engagement Analysis</p>
                  <p className="text-orange-400 text-sm">
                    {engagementLevel > 80 ? 'Highly Engaged - Premium Offers Active' :
                     engagementLevel > 50 ? 'Engaged - Community Ready' :
                     engagementLevel > 20 ? 'Interested - Building Connection' :
                     'Discovering - Welcome!'}
                  </p>
                </div>
                <div className="text-3xl font-bold text-green-400">{engagementLevel}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}