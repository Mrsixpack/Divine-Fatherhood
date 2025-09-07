'use client'

import { motion } from 'framer-motion'
import { Crown, ArrowLeft, CheckCircle, Users, Star } from 'lucide-react'
import Link from 'next/link'

export default function CirclePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:text-gold-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-light">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-gold-400" />
            <span className="text-xl font-light tracking-wider">DIVINE FATHERHOOD</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-gold-400/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Crown className="w-12 h-12 text-gold-400" />
              <Crown className="w-8 h-8 text-gold-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              THE <span className="text-gold-400">CIRCLE</span>
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Brotherhood community with weekly calls, accountability, and spiritual growth among like-minded fathers.
            </p>
            <div className="text-4xl font-light text-gold-400 mb-8">$97<span className="text-xl text-white/50">/month</span></div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 text-gold-400">BROTHERHOOD BENEFITS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Weekly Live Group Calls with Sammy",
              "Private Brotherhood Community Access", 
              "Monthly Challenges & Accountability",
              "Exclusive Father Resources Library",
              "Direct Access to Sammy for Questions",
              "Kingdom Builder Mastermind Sessions",
              "Spiritual Growth Workshops",
              "Business & Legacy Building Guidance"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-gradient-to-r from-white/5 to-transparent p-6 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0" />
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-gradient-to-r from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-center mb-12">What Brotherhood Members Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                ))}
              </div>
              <p className="text-white/80 mb-4">"The Circle changed everything. Finally found brothers who understand the struggle of being a godly father in today's world."</p>
              <div className="text-gold-400">- Marcus J.</div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                ))}
              </div>
              <p className="text-white/80 mb-4">"Weekly calls with Sammy keep me accountable. My family sees the difference in my leadership."</p>
              <div className="text-gold-400">- David T.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-gold-400/10 to-gold-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Ready to Join the Brotherhood?</h3>
          <p className="text-xl text-white/70 mb-8">Start your membership today and connect with kingdom-building fathers.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide inline-flex items-center space-x-3"
          >
            <Users className="w-5 h-5" />
            <span>JOIN THE CIRCLE - $97/month</span>
          </motion.button>
        </div>
      </section>
    </div>
  )
}