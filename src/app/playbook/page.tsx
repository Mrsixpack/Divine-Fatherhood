'use client'

import { motion } from 'framer-motion'
import { Crown, ArrowLeft, CheckCircle, Download, Star } from 'lucide-react'
import Link from 'next/link'

export default function PlaybookPage() {
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
            <Crown className="w-16 h-16 text-gold-400 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              THE <span className="text-gold-400">PLAYBOOK</span>
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Your digital foundation for discovering divine purpose through fitness, faith, and fatherhood.
            </p>
            <div className="text-4xl font-light text-gold-400 mb-8">$47</div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 text-gold-400">WHAT'S INCLUDED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Divine Purpose Discovery Framework",
              "30-Day Transformation Challenge", 
              "Father Fitness Blueprint",
              "Spiritual Growth Guide",
              "Accountability Tools",
              "Kingdom Building Strategies"
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

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-gold-400/10 to-gold-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Ready to Begin Your Journey?</h3>
          <p className="text-xl text-white/70 mb-8">Download instantly and start your transformation today.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide inline-flex items-center space-x-3"
          >
            <Download className="w-5 h-5" />
            <span>GET THE PLAYBOOK - $47</span>
          </motion.button>
        </div>
      </section>
    </div>
  )
}