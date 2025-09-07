'use client'

import { useState, useEffect } from 'react'
import { X, Clock, Users, TrendingUp, Zap, Gift, AlertCircle } from 'lucide-react'

// Exit Intent Popup
export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }
    
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])
  
  if (!isVisible) return null
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 max-w-md mx-4 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-orange-400"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h3 className="text-2xl font-black text-orange-400 mb-4">WAIT! Don't Leave Empty Handed</h3>
          <p className="text-white/90 mb-6">Get the first 3 chapters of the Divine Dad Playbook FREE before you go!</p>
          
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:scale-105 transition-all">
              🎁 YES! Give Me Free Chapters
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="w-full text-gray-400 hover:text-white transition-colors"
            >
              No thanks, I'll pass on free value
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Countdown Timer
export const CountdownTimer = ({ endTime }: { endTime: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endTime.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(distance / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [endTime])
  
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-xl text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="font-bold">LIMITED TIME OFFER</span>
      </div>
      <div className="flex justify-center gap-4">
        <div className="bg-black/30 rounded-lg p-2 min-w-[60px]">
          <div className="text-2xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs">HOURS</div>
        </div>
        <div className="bg-black/30 rounded-lg p-2 min-w-[60px]">
          <div className="text-2xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs">MINS</div>
        </div>
        <div className="bg-black/30 rounded-lg p-2 min-w-[60px]">
          <div className="text-2xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-xs">SECS</div>
        </div>
      </div>
    </div>
  )
}

// Social Proof Widget
export const SocialProofWidget = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    { name: "Marcus J.", city: "Detroit", quote: "This Playbook changed my entire approach to fatherhood. I'm not just working out anymore - I'm building a legacy." },
    { name: "James R.", city: "Atlanta", quote: "The Circle brotherhood is exactly what I needed. Accountability, purpose, and real men walking the same path." },
    { name: "David L.", city: "Chicago", quote: "The Intensive with Sammy was life-changing. I discovered my divine calling and my kids see the difference." },
    { name: "Kevin M.", city: "Houston", quote: "From empire to kingdom - this transformation is real. My wife says I'm a completely different father and husband." }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  return (
    <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Users className="w-6 h-6 text-orange-400" />
        <span className="text-orange-400 font-bold">What Fathers Are Saying</span>
      </div>
      
      <div className="transition-all duration-500">
        <p className="text-white/90 italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-400 font-bold">
            - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].city}
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">⭐</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentTestimonial(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentTestimonial ? 'bg-orange-400' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Scarcity Indicator
export const ScarcityIndicator = ({ totalSpots = 50, takenSpots = 37 }: { totalSpots?: number, takenSpots?: number }) => {
  const percentage = (takenSpots / totalSpots) * 100
  
  return (
    <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-500/30 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
        <span className="text-red-400 font-bold">LIMITED AVAILABILITY</span>
      </div>
      
      <div className="flex justify-between text-white mb-2">
        <span>Spots Remaining:</span>
        <span className="font-bold text-red-400">{totalSpots - takenSpots}/{totalSpots}</span>
      </div>
      
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-red-500 transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <p className="text-orange-300 text-sm mt-2 text-center">
        {percentage > 80 ? '🔥 Almost Full - Secure Your Spot Now!' : 
         percentage > 60 ? '⚡ Filling Fast - Limited Time Remaining' :
         '✨ Join the Growing Community of Divine Fathers'}
      </p>
    </div>
  )
}

// Live Activity Feed
export const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([
    { id: 1, action: "joined Divine Circle", name: "Marcus", location: "Detroit", time: "2 min ago", active: true },
    { id: 2, action: "downloaded Playbook", name: "James", location: "Atlanta", time: "5 min ago", active: false },
    { id: 3, action: "started Intensive", name: "David", location: "Chicago", time: "8 min ago", active: false }
  ])
  
  useEffect(() => {
    const interval = setInterval(() => {
      const names = ["Marcus", "James", "David", "Kevin", "Antonio", "Michael", "Christopher", "Daniel"]
      const locations = ["Detroit", "Atlanta", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "Dallas"]
      const actions = ["joined Divine Circle", "downloaded Playbook", "started Intensive", "unlocked Purpose", "claimed crown"]
      
      const newActivity = {
        id: Date.now(),
        action: actions[Math.floor(Math.random() * actions.length)],
        name: names[Math.floor(Math.random() * names.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        time: "Just now",
        active: true
      }
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4).map(a => ({ ...a, active: false }))])
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-orange-500/30">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        <span className="text-green-400 font-bold text-sm">LIVE ACTIVITY</span>
      </div>
      
      <div className="space-y-2">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className={`text-xs transition-all duration-500 ${activity.active ? 'text-green-300 animate-pulse' : 'text-gray-400'}`}
          >
            <span className="font-medium">{activity.name}</span> {activity.action} from {activity.location}
            <span className="text-orange-400 ml-2">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Personalized Recommendation Engine
export const PersonalizedRecommendations = ({ userBehavior }: { 
  userBehavior: { 
    scrollDepth: number
    timeOnPage: number
    interactions: number
  } 
}) => {
  const getRecommendation = () => {
    if (userBehavior.interactions > 10 && userBehavior.timeOnPage > 300) {
      return {
        title: "Perfect Match: 1:1 Intensive",
        description: "Based on your engagement, you're ready for premium transformation",
        price: "$997 $497",
        cta: "Claim Your Spot",
        urgency: "Only 3 spots left this month"
      }
    } else if (userBehavior.interactions > 5 && userBehavior.scrollDepth > 70) {
      return {
        title: "Recommended: Divine Circle",
        description: "Your exploration shows you value community and growth", 
        price: "$97/month",
        cta: "Join the Brotherhood", 
        urgency: "New cohort starts Monday"
      }
    } else {
      return {
        title: "Perfect Start: Divine Dad Playbook",
        description: "Begin your transformation with the foundation guide",
        price: "$47 $27",
        cta: "Get The Playbook",
        urgency: "Limited time discount"
      }
    }
  }
  
  const recommendation = getRecommendation()
  
  return (
    <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-purple-400" />
        <span className="text-purple-400 font-bold">AI Recommendation</span>
      </div>
      
      <h3 className="text-xl font-black text-white mb-2">{recommendation.title}</h3>
      <p className="text-white/80 mb-4">{recommendation.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-black text-green-400">{recommendation.price}</span>
        <span className="text-orange-400 text-sm animate-pulse">{recommendation.urgency}</span>
      </div>
      
      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all">
        {recommendation.cta}
      </button>
    </div>
  )
}