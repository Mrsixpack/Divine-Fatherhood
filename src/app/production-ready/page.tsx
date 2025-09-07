'use client'

import { useState, useEffect, useCallback } from 'react'
import { UltimateExperience } from '@/components/divine-fatherhood/ultimate-experience'
import { EnhancedVisualStoryExperience } from '@/components/divine-fatherhood/enhanced-visual-story'
import { 
  ExitIntentPopup,
  CountdownTimer,
  SocialProofWidget,
  ScarcityIndicator,
  LiveActivityFeed,
  PersonalizedRecommendations
} from '@/components/divine-fatherhood/conversion-optimizers'
import { 
  Card, 
  YouTubeGrid, 
  NewsletterForm,
  Testimonial
} from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'
import { Crown, Zap, Heart, Trophy, Target, Flame, Star, ArrowRight, Play, Users, Shield, Sparkles, Lock, Unlock, CheckCircle, TrendingUp, Rocket, Diamond, Gift, Book, UserPlus, Eye, Brain, Mic, Volume2, Headphones, Cpu } from 'lucide-react'

export default function ProductionReadyHomepage() {
  const [userBehavior, setUserBehavior] = useState({
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0
  })
  
  const [startTime] = useState(Date.now())
  const [showFullExperience, setShowFullExperience] = useState(false)
  
  // Track user behavior for AI personalization
  useEffect(() => {
    const trackScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollDepth = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0
      
      setUserBehavior(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollDepth)
      }))
      
      // Auto-activate full experience after good engagement
      if (scrollDepth > 30 && !showFullExperience) {
        setShowFullExperience(true)
      }
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
    trackEvent('view_production_homepage')
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      clearInterval(timeInterval)
      window.removeEventListener('scroll', trackScroll)
      document.removeEventListener('click', trackInteraction)
      document.removeEventListener('mousemove', trackInteraction)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [startTime, showFullExperience])
  
  // Calculate offer end time (24 hours from now)
  const offerEndTime = new Date()
  offerEndTime.setHours(offerEndTime.getHours() + 24)
  
  return (
    <div className="relative min-h-screen">
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Main Ultimate Experience - Always Active */}
      <UltimateExperience />
      
      {/* Enhanced Visual Story Experience - Loads after engagement */}
      {showFullExperience && (
        <div className="relative">
          <div className="py-20 text-center bg-gradient-to-r from-orange-500/10 to-red-600/10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-full mb-8 animate-pulse">
                🚀 FULL EXPERIENCE UNLOCKED - You're Engaged!
              </div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
                THE COMPLETE TRANSFORMATION JOURNEY
              </h2>
              <p className="text-2xl text-white/80">
                Experience the full visual story with all interactive features
              </p>
            </div>
          </div>
          <EnhancedVisualStoryExperience />
        </div>
      )}
      
      {/* Service Tiers Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
              YOUR PATH TO PURPOSE
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12">
              Choose your level of commitment to discovering divine calling.
            </p>
            
            {/* Dynamic Pricing Based on Engagement */}
            {userBehavior.interactions > 10 && (
              <div className="bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 max-w-2xl mx-auto mb-12">
                <div className="text-red-400 font-bold text-xl mb-4 animate-pulse">
                  🔥 HIGH ENGAGEMENT DETECTED - SPECIAL PRICING ACTIVATED!
                </div>
                <div className="text-lg text-white/90">
                  AI Analysis shows you're ready for transformation - Premium discounts unlocked!
                </div>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Divine Dad Playbook */}
            <Card 
              title="Divine Dad Playbook"
              copy={`${userBehavior.interactions > 10 ? '$47 $27 - LIMITED TIME!' : '$47'} - Digital guide to discovering divine purpose through fitness, faith, and fatherhood. Start here.`}
              icon="Download"
              cta={{ 
                text: userBehavior.interactions > 10 ? "🔥 GET 43% OFF NOW!" : "Get the Playbook", 
                href: "/playbook",
                variant: "goldSolid"
              }}
            />
            
            {/* Divine Fatherhood Circle */}
            <Card 
              title="Divine Fatherhood Circle"
              copy={`${userBehavior.interactions > 15 ? '$97 $67/month - SPECIAL RATE!' : '$97/month'} - Brotherhood community, weekly calls, accountability, spiritual growth with like-minded fathers.`}
              icon="Users"
              cta={{ 
                text: userBehavior.interactions > 15 ? "🚀 JOIN WITH DISCOUNT!" : "Join the Brotherhood", 
                href: "/circle",
                variant: userBehavior.interactions > 15 ? "goldSolid" : "goldOutline"
              }}
            />
          </div>
          
          <div className="text-center">
            <Card 
              title="1:1 Purpose Discovery Intensive"
              copy={`${userBehavior.interactions > 20 ? '$997 $497 - EXCLUSIVE OFFER!' : '$997'} - 30-day intensive with Sammy. Discover your divine calling, build your legacy blueprint, transform your fatherhood.`}
              icon="Crown"
              cta={{ 
                text: userBehavior.interactions > 20 ? "💎 CLAIM 50% SAVINGS!" : "Apply for Intensive", 
                href: "/intensive",
                variant: "goldSolid"
              }}
            />
          </div>
        </div>
      </section>
      
      {/* Floating Conversion Widgets */}
      <div className="fixed bottom-4 left-4 z-40 space-y-4 max-w-xs">
        <LiveActivityFeed />
        <SocialProofWidget />
      </div>
      
      {/* Floating Analytics & Recommendations */}
      {userBehavior.interactions > 5 && (
        <div className="fixed top-20 right-4 z-40 space-y-4 max-w-sm">
          <PersonalizedRecommendations userBehavior={userBehavior} />
        </div>
      )}
      
      {/* Conversion Optimization Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          {userBehavior.timeOnPage > 60 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Countdown Timer */}
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">⏰ Limited Time</h3>
                <CountdownTimer endTime={offerEndTime} />
              </div>
              
              {/* Scarcity Indicator */}
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">🔥 Availability</h3>
                <ScarcityIndicator totalSpots={50} takenSpots={Math.min(37 + Math.floor(userBehavior.interactions / 2), 47)} />
              </div>
            </div>
          )}
          
          {/* Real-Time Engagement Display */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">🤖 AI Engagement Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-3xl font-black text-green-400 mb-2">
                  {userBehavior.scrollDepth.toFixed(0)}%
                </div>
                <div className="text-white/80 text-sm">Content Engagement</div>
                <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-500"
                    style={{ width: `${Math.min(userBehavior.scrollDepth, 100)}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-3xl font-black text-orange-400 mb-2">
                  {Math.floor(userBehavior.timeOnPage)}s
                </div>
                <div className="text-white/80 text-sm">Time Investment</div>
                <div className="text-xs text-orange-300 mt-1">
                  {userBehavior.timeOnPage > 180 ? '💎 Premium Interest' : 
                   userBehavior.timeOnPage > 120 ? '🔥 High Engagement' : 
                   userBehavior.timeOnPage > 60 ? '⚡ Good Interest' : 
                   '👀 Discovering'}
                </div>
              </div>
              
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-3xl font-black text-purple-400 mb-2">
                  {userBehavior.interactions}
                </div>
                <div className="text-white/80 text-sm">Interactions</div>
                <div className="text-xs text-purple-300 mt-1">
                  {userBehavior.interactions > 25 ? '🚀 Power User' :
                   userBehavior.interactions > 15 ? '💎 Highly Engaged' :
                   userBehavior.interactions > 8 ? '🎯 Active User' :
                   '🌱 Explorer'}
                </div>
              </div>
            </div>
            
            {/* AI Recommendation */}
            <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
              <p className="text-white/90 text-sm">
                <strong>🤖 AI Recommendation:</strong> {
                  userBehavior.scrollDepth > 80 && userBehavior.interactions > 20 && userBehavior.timeOnPage > 180
                    ? "🚀 PERFECT MATCH: You're ready for the 1:1 Intensive! Your engagement shows serious commitment to transformation."
                    : userBehavior.scrollDepth > 60 && userBehavior.interactions > 12 && userBehavior.timeOnPage > 120
                    ? "⭐ GREAT FIT: The Divine Circle community aligns perfectly with your exploration level and engagement."
                    : userBehavior.scrollDepth > 40 && (userBehavior.interactions > 6 || userBehavior.timeOnPage > 90)
                    ? "📚 PERFECT START: The Divine Dad Playbook matches your current interest level - ideal foundation!"
                    : userBehavior.interactions > 3 || userBehavior.timeOnPage > 30
                    ? "👋 BUILDING CONNECTION: Continue exploring! Your engagement is growing - special offers will unlock soon."
                    : "🔍 WELCOME: Explore the transformation journey! Each interaction reveals more personalized recommendations."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* YouTube Grid Section */}
      <section className="py-20 px-6 bg-white/5">
        <YouTubeGrid 
          channelId={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUTUBE_CHANNEL_ID"}
          playlists={["Divine Calling Series", "Daddy Strength Diaries", "Faith & Fitness"]}
          cta={{ 
            text: "Subscribe to the Movement", 
            href: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@divinefatherhood",
            variant: "goldSolid"
          }}
        />
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto">
          <NewsletterForm 
            title="Join the Divine Father Movement"
            subtitle="Get weekly insights, workout tips, and spiritual guidance delivered to your inbox"
            placeholder="Enter your email to start your journey"
            buttonText={userBehavior.interactions > 10 ? "🔥 JOIN & GET FREE BONUS!" : "Join the Movement"}
          />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-white/80">
              Real fathers, real transformations, real purpose
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="Sammy helped me realize I wasn't just working out - I was training for the most important role of my life. My daughter now sees a king, not just a dad who goes to the gym."
              author="Marcus Johnson"
              role="Father of 2, Detroit"
              avatar="/images/testimonials/marcus.jpg"
            />
            <Testimonial 
              quote="The Circle brotherhood changed everything. I found my divine purpose and accountability partners who actually understand the struggle of being a godly father in today's world."
              author="James Rodriguez"
              role="Father of 3, Atlanta"
              avatar="/images/testimonials/james.jpg"
            />
            <Testimonial 
              quote="The Intensive with Sammy was life-changing. I went from building an empire for myself to building a kingdom for my family's legacy. Best investment I've ever made."
              author="David Thompson"
              role="Father of 1, Chicago"
              avatar="/images/testimonials/david.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}