'use client'

import { motion } from 'framer-motion'
import { Crown, ArrowLeft, CheckCircle, Sparkles, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function IntensivePage() {
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
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-gold-400/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Crown className="w-12 h-12 text-gold-400" />
              <Crown className="w-10 h-10 text-gold-500" />
              <Crown className="w-8 h-8 text-gold-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              THE <span className="text-gold-400">INTENSIVE</span>
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              30-day transformation intensive with Sammy. Discover your divine calling and build your legacy blueprint.
            </p>
            <div className="text-4xl font-light text-gold-400 mb-4">$997</div>
            <div className="text-lg text-white/60">Limited to 10 fathers per cohort</div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 text-gold-400">INTENSIVE TRANSFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              "4 Weekly 1-on-1 Coaching Calls with Sammy",
              "Personalized Divine Purpose Assessment", 
              "Custom Legacy Blueprint Creation",
              "Daily Accountability & Check-ins",
              "Complete Spiritual Growth Framework",
              "Business & Kingdom Building Strategy",
              "Family Leadership Transformation Plan",
              "Lifetime Access to All Resources"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-gradient-to-r from-gold-400/10 to-transparent p-6 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0" />
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* 30-Day Journey */}
          <div className="bg-gradient-to-r from-gold-400/10 to-gold-600/5 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-center mb-8 text-gold-400">YOUR 30-DAY JOURNEY</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { week: "Week 1", focus: "Foundation", desc: "Spiritual assessment & divine purpose discovery" },
                { week: "Week 2", focus: "Clarity", desc: "Legacy blueprint creation & family vision" },
                { week: "Week 3", focus: "Action", desc: "Implementation strategy & daily practices" },
                { week: "Week 4", focus: "Kingdom", desc: "Launch your transformed fatherhood journey" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-medium text-gold-400 mb-2">{phase.week}</h4>
                  <h5 className="text-white font-light mb-2">{phase.focus}</h5>
                  <p className="text-white/70 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-8 bg-gradient-to-r from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <h3 className="text-2xl font-light mb-6">KINGDOM GUARANTEE</h3>
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            If you don't experience a complete transformation in your fatherhood and discover your divine purpose 
            within 30 days, we'll refund every penny. That's how confident we are in this process.
          </p>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 px-8 bg-gradient-to-r from-gold-400/10 to-gold-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Ready for Complete Transformation?</h3>
          <p className="text-xl text-white/70 mb-8">Apply now for the next cohort. Limited spots available.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide inline-flex items-center space-x-3"
          >
            <Calendar className="w-5 h-5" />
            <span>APPLY FOR INTENSIVE - $997</span>
          </motion.button>
          <p className="text-sm text-white/60 mt-4">Next cohort starts in 14 days</p>
        </div>
      </section>
    </div>
  )
}