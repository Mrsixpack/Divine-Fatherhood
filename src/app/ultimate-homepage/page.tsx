'use client'

import { useState, useEffect } from 'react'
import { UltimateExperience } from '@/components/divine-fatherhood/ultimate-experience'
import { 
  ExitIntentPopup,
  CountdownTimer,
  SocialProofWidget,
  ScarcityIndicator,
  LiveActivityFeed,
  PersonalizedRecommendations
} from '@/components/divine-fatherhood/conversion-optimizers'
import { trackEvent } from '@/lib/utils'

export default function UltimateHomepage() {
  const [userBehavior, setUserBehavior] = useState({
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0
  })
  
  const [startTime] = useState(Date.now())
  
  // Track user behavior for AI personalization
  useEffect(() => {
    const trackScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollDepth = (scrolled / maxScroll) * 100
      
      setUserBehavior(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollDepth)
      }))
    }
    
    const trackInteraction = () => {
      setUserBehavior(prev => ({
        ...prev,
        interactions: prev.interactions + 1
      }))
    }
    
    // Update time on page every second
    const timeInterval = setInterval(() => {
      setUserBehavior(prev => ({
        ...prev,
        timeOnPage: (Date.now() - startTime) / 1000
      }))
    }, 1000)
    
    window.addEventListener('scroll', trackScroll)
    document.addEventListener('click', trackInteraction)
    document.addEventListener('mousemove', trackInteraction)
    
    // Track page view
    trackEvent('view_ultimate_homepage')
    
    return () => {
      clearInterval(timeInterval)
      window.removeEventListener('scroll', trackScroll)
      document.removeEventListener('click', trackInteraction)
      document.removeEventListener('mousemove', trackInteraction)
    }
  }, [startTime])
  
  // Calculate offer end time (24 hours from now)
  const offerEndTime = new Date()
  offerEndTime.setHours(offerEndTime.getHours() + 24)
  
  return (
    <div className="relative min-h-screen">
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Main Ultimate Experience */}
      <UltimateExperience />
      
      {/* Floating Conversion Widgets */}
      <div className="fixed bottom-4 left-4 z-40 space-y-4 max-w-xs">
        <LiveActivityFeed />
        <SocialProofWidget />
      </div>
      
      {/* Conversion Optimization Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
              🚀 13/10 CONVERSION OPTIMIZATION ACTIVE
            </h2>
            <p className="text-2xl text-white/80">
              Experience the most advanced fatherhood transformation platform ever created
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Countdown Timer */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">⏰ Limited Time Offer</h3>
              <CountdownTimer endTime={offerEndTime} />
            </div>
            
            {/* Scarcity Indicator */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">🔥 Availability Status</h3>
              <ScarcityIndicator totalSpots={50} takenSpots={42} />
            </div>
          </div>
          
          {/* AI Personalized Recommendations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">🤖 AI-Powered Recommendations</h3>
            <PersonalizedRecommendations userBehavior={userBehavior} />
          </div>
          
          {/* User Behavior Analytics Display */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">📊 Real-Time Engagement Analytics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-3xl font-black text-green-400 mb-2">
                  {userBehavior.scrollDepth.toFixed(0)}%
                </div>
                <div className="text-white/80">Scroll Depth</div>
                <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-500"
                    style={{ width: `${userBehavior.scrollDepth}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-3xl font-black text-orange-400 mb-2">
                  {Math.floor(userBehavior.timeOnPage)}s
                </div>
                <div className="text-white/80">Time on Page</div>
                <div className="text-sm text-orange-300 mt-1">
                  {userBehavior.timeOnPage > 120 ? '🔥 Highly Engaged' : 
                   userBehavior.timeOnPage > 60 ? '⚡ Good Engagement' : 
                   '👀 Building Interest'}
                </div>
              </div>
              
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-3xl font-black text-purple-400 mb-2">
                  {userBehavior.interactions}
                </div>
                <div className="text-white/80">Interactions</div>
                <div className="text-sm text-purple-300 mt-1">
                  {userBehavior.interactions > 20 ? '💎 Power User' :
                   userBehavior.interactions > 10 ? '🎯 Engaged' :
                   '🌱 Exploring'}
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
              <p className="text-white/90">
                <strong>AI Analysis:</strong> {
                  userBehavior.scrollDepth > 80 && userBehavior.interactions > 15 
                    ? "🚀 You're ready for our premium offerings! Perfect match for the Intensive program."
                    : userBehavior.scrollDepth > 50 && userBehavior.interactions > 8
                    ? "⭐ Great engagement! The Divine Circle community would be perfect for you."
                    : userBehavior.scrollDepth > 25 || userBehavior.interactions > 3
                    ? "📚 Solid interest detected! The Divine Dad Playbook is your perfect starting point."
                    : "👋 Welcome! Continue exploring to unlock personalized recommendations."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultimate Features Showcase */}
      <section className="py-32 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12">
            🏆 WHAT MAKES THIS 13/10
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Personalization */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">AI Personalization Engine</h3>
              <p className="text-white/80">Real-time behavior analysis adapts content, pricing, and recommendations to your engagement level.</p>
            </div>
            
            {/* Biometric Tracking */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Biometric Engagement</h3>
              <p className="text-white/80">Advanced mouse tracking, scroll depth analysis, and interaction patterns predict your readiness to transform.</p>
            </div>
            
            {/* Voice AI */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">🎙️</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Voice AI Assistant</h3>
              <p className="text-white/80">Ask questions about Divine Fatherhood and receive intelligent, personalized responses with text-to-speech.</p>
            </div>
            
            {/* Predictive Analytics */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Predictive Analytics</h3>
              <p className="text-white/80">ML algorithms analyze your behavior to predict conversion probability and recommend optimal next actions.</p>
            </div>
            
            {/* Dynamic Physics */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Advanced Particle Physics</h3>
              <p className="text-white/80">Real-time particle systems respond to your mouse movements and engagement level for ultimate immersion.</p>
            </div>
            
            {/* Social Proof */}
            <div className="bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Live Social Proof</h3>
              <p className="text-white/80">Real-time activity feeds, scarcity indicators, and dynamic testimonials create irresistible social momentum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Metadata handled in layout.tsx