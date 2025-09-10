'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown, Download, Clock, Users, Shield, CheckCircle, Star, ArrowRight, Gift, Target, Zap, BookOpen, Calendar } from 'lucide-react'

interface ChallengeOptinProps {
  variant?: 'hero' | 'inline' | 'sidebar'
  className?: string
}

export default function ChallengeOptin({ variant = 'inline', className = '' }: ChallengeOptinProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-br from-gold-400/20 to-gold-600/10 backdrop-blur-xl border border-gold-500/30 rounded-3xl p-8 ${className}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="w-8 h-8 text-gold-400" />
            <span className="text-gold-400 font-medium text-lg">FREE COMMAND CORNER GUIDE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            THE 20‑MINUTE <span className="text-gold-400">COMMAND CORNER</span>
          </h2>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Build physical strength and spiritual discipline in just 20 minutes. The complete faith-based fitness system for busy fathers.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Value Stack */}
              <div className="bg-gradient-to-r from-white/5 to-gold-500/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-light text-gold-300 mb-4 text-center">Your Complete Command Corner System ($197 Value)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90 font-medium block">20-Minute Full Body Workouts</span>
                        <span className="text-white/60 text-xs">Progressive 4-week training program</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90 font-medium block">Faith-Based Nutrition Plan</span>
                        <span className="text-white/60 text-xs">Honor your body as God's temple</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90 font-medium block">Daily Habit Tracker</span>
                        <span className="text-white/60 text-xs">Build discipline & spiritual strength</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90 font-medium block">Scripture & Reflection Guide</span>
                        <span className="text-white/60 text-xs">Connect fitness with faith daily</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90 font-medium block">Printable Workout Cards</span>
                        <span className="text-white/60 text-xs">Take your training anywhere</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90 font-medium block">Father's Strength Journal</span>
                        <span className="text-white/60 text-xs">Track progress & victories</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for instant access..."
                  required
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-gold-400/50 transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium rounded-full flex items-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>GET COMMAND CORNER</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Social Proof & Urgency */}
              <div className="flex items-center justify-between text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>8,247 fathers downloaded this week</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Instant digital download</span>
                </div>
              </div>

              {/* Risk Reversal */}
              <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
                <Shield className="w-4 h-4" />
                <span>No spam. Unsubscribe anytime. Your email is safe with us.</span>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gold-400 mb-4">Your Command Corner Awaits!</h3>
              <p className="text-white/80 mb-6">
                Check your email for your complete Command Corner system. 
                Your 20-minute transformation journey starts now.
              </p>
              <div className="bg-gradient-to-r from-white/10 to-transparent p-4 rounded-xl">
                <p className="text-sm text-white/70">
                  💪 <strong>Get Started:</strong> Print your workout cards and set up your Command Corner space today!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Inline variant for use throughout the site
  return (
    <div className={`bg-gradient-to-r from-gold-400/10 to-gold-600/5 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <Target className="w-6 h-6 text-gold-400" />
        <h3 className="text-xl font-light">Get Command Corner Guide</h3>
      </div>
      
      <p className="text-white/80 mb-4">
        20-minute faith-based fitness system. Build strength in body and spirit.
      </p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email..."
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-gold-400/50"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium py-3 rounded-full flex items-center justify-center space-x-2"
          >
            <span>Get Free Guide</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>
      ) : (
        <div className="text-center py-4">
          <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-green-400 font-medium">Check your email!</p>
        </div>
      )}

      <div className="flex items-center justify-center space-x-4 text-xs text-white/60 mt-4">
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 fill-current" />
          <span>4.9/5 rating</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-3 h-3" />
          <span>8K+ downloads</span>
        </div>
      </div>
    </div>
  )
}

export { ChallengeOptin }