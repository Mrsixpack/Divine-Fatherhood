'use client'

import { useState, useEffect } from 'react'
import { Crown, Play, ArrowRight, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MinimalLuxuryPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSection, setCurrentSection] = useState(0)

  // Subtle mouse tracking for premium interactions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight 
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      const scrollY = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        const top = element.offsetTop
        const bottom = top + element.offsetHeight

        if (scrollY >= top && scrollY <= bottom) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Minimal Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-gold-400" />
            <span className="text-xl font-light tracking-wider">DIVINE FATHERHOOD</span>
          </div>
          <div className="hidden md:flex items-center space-x-12 text-sm font-light tracking-wide">
            <a href="#story" className="hover:text-gold-400 transition-colors">THE STORY</a>
            <a href="#purpose" className="hover:text-gold-400 transition-colors">PURPOSE</a>
            <a href="#legacy" className="hover:text-gold-400 transition-colors">LEGACY</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-6 py-2 rounded-full text-sm tracking-wide"
          >
            BEGIN JOURNEY
          </motion.button>
        </div>
      </nav>

      {/* Hero Section - Ultra Clean */}
      <section 
        data-section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.1) 0%, black 70%)`
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Crown className="w-16 h-16 text-gold-400 mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-8">
              CROWNED
              <br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent font-extralight">
                WITH PURPOSE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Transform from building an empire to establishing a kingdom. 
              Your children deserve to see a king, not just a father.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide inline-flex items-center space-x-3"
            >
              <span>DISCOVER YOUR CALLING</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Story Section - Minimal Storytelling */}
      <section 
        id="story"
        data-section
        className="py-32 px-8 bg-gradient-to-b from-black to-gray-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                FROM EMPIRE TO
                <br />
                <span className="text-gold-400">KINGDOM</span>
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                I built an empire focused on myself. Six-pack abs, business success, external validation. 
                But when I became a father, I realized my children didn't need to see an emperor—they needed to see a king.
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                A king builds for legacy. A king serves his kingdom. A king understands his divine purpose 
                extends beyond his own achievements to the generations he influences.
              </p>
              <div className="flex items-center space-x-4 text-gold-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-light">Sammy, MrSixPack Empire Founder</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold-400/10 to-gold-600/5 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Crown className="w-24 h-24 text-gold-400 mx-auto mb-6" />
                  <div className="text-2xl font-light text-white/90">
                    "THE REAL REASON<br />FATHERHOOD<br />CHANGED EVERYTHING"
                  </div>
                  <button className="mt-6 text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-light">WATCH STORY</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Section - Clean Service Presentation */}
      <section 
        id="purpose"
        data-section
        className="py-32 px-8 bg-gradient-to-b from-gray-900/50 to-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              YOUR <span className="text-gold-400">PATH TO PURPOSE</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Three levels of transformation. Choose your commitment to discovering divine calling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Playbook */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gold-400/5 to-transparent backdrop-blur-xl border border-gold-500/20 rounded-2xl p-8 h-full hover:border-gold-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold-500/10">
                <Crown className="w-12 h-12 text-gold-400 mb-6" />
                <h3 className="text-2xl font-light mb-4">THE PLAYBOOK</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  Digital foundation for discovering divine purpose through fitness, faith, and fatherhood.
                </p>
                <div className="text-3xl font-light text-gold-400 mb-6">$47</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-transparent border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-black font-medium py-3 rounded-full transition-all duration-300"
                >
                  BEGIN HERE
                </motion.button>
              </div>
            </motion.div>

            {/* The Circle */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gold-400/10 to-transparent backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8 h-full hover:border-gold-400/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold-500/20">
                <div className="flex items-center space-x-2 mb-6">
                  <Crown className="w-12 h-12 text-gold-400" />
                  <Crown className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-2xl font-light mb-4">THE CIRCLE</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  Brotherhood community with weekly calls, accountability, and spiritual growth.
                </p>
                <div className="text-3xl font-light text-gold-400 mb-6">$97<span className="text-base text-white/50">/month</span></div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gold-400/20 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black font-medium py-3 rounded-full transition-all duration-300"
                >
                  JOIN BROTHERHOOD
                </motion.button>
              </div>
            </motion.div>

            {/* The Intensive */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/10 backdrop-blur-xl border border-gold-400/50 rounded-2xl p-8 h-full hover:border-gold-400 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold-500/30">
                <div className="flex items-center space-x-2 mb-6">
                  <Crown className="w-12 h-12 text-gold-400" />
                  <Crown className="w-10 h-10 text-gold-500" />
                  <Crown className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-2xl font-light mb-4">THE INTENSIVE</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  30-day transformation with Sammy. Discover calling, build legacy blueprint.
                </p>
                <div className="text-3xl font-light text-gold-400 mb-6">$997</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium py-3 rounded-full transition-all duration-300"
                >
                  APPLY NOW
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section - Minimal Testimonials */}
      <section 
        id="legacy"
        data-section
        className="py-32 px-8 bg-gradient-to-b from-black to-gray-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              KINGDOM <span className="text-gold-400">BUILDERS</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Fathers who transformed from building empires to establishing kingdoms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter now sees a king, not just a dad who goes to the gym.",
                author: "Marcus Johnson",
                role: "Father of 2"
              },
              {
                quote: "I found accountability partners who understand godly fatherhood.",
                author: "James Rodriguez", 
                role: "Father of 3"
              },
              {
                quote: "From building empire to building kingdom. Best investment ever.",
                author: "David Thompson",
                role: "Father of 1"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <div className="text-gold-400 mb-4">"</div>
                <p className="text-white/80 font-light leading-relaxed mb-6 text-lg">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA Footer */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-16 h-16 text-gold-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            READY TO BE <span className="text-gold-400">CROWNED?</span>
          </h2>
          <p className="text-lg text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Join the movement of fathers discovering their divine purpose and building kingdoms, not empires.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide"
          >
            START YOUR JOURNEY
          </motion.button>
        </div>
      </section>
    </div>
  )
}