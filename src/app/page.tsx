'use client'

import { useState, useEffect } from 'react'
import { Crown, Play, ArrowRight, CheckCircle, Star, Instagram, Youtube, Twitter, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ChallengeOptin from '@/components/lead-magnet/challenge-optin'

export default function PremiumVisualHomepage() {
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
          <Link href="/playbook">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-6 py-2 rounded-full text-sm tracking-wide"
            >
              BEGIN JOURNEY
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section - With Glowing Crown Background */}
      <section 
        data-section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.15) 0%, black 70%)`
        }}
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://page.gensparksite.com/v1/base64_upload/d5e93a103d57cdc6dcafd6650a060f24')`
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Divine Fatherhood Logo */}
            <div className="mb-12">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/a20a906b9b22ff96dcfa6d1ad49c05ac"
                alt="Divine Fatherhood - Crowned with Purpose"
                className="w-full max-w-3xl mx-auto h-auto"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Transform from building an empire to establishing a kingdom. 
              Your children deserve to see a king, not just a father.
            </p>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Lead Magnet Hero Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-gray-900/50 relative">
        <div className="max-w-4xl mx-auto">
          <ChallengeOptin variant="hero" />
        </div>
        
        {/* Social Proof Banner */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gold-400 mb-1">10,247</div>
                <div className="text-sm text-white/70">Fathers Transformed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400 mb-1">4.9★</div>
                <div className="text-sm text-white/70">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400 mb-1">14 Days</div>
                <div className="text-sm text-white/70">To Find Purpose</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400 mb-1">100%</div>
                <div className="text-sm text-white/70">Free Challenge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story Section */}
      <section 
        id="story"
        data-section
        className="py-32 px-8 bg-gradient-to-b from-black to-gray-900/50"
      >
        <div className="max-w-6xl mx-auto">
          {/* Evolution Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/05f9ad47d10c5daf77806165d1674d98"
              alt="Evolution from Empire to Kingdom"
              className="w-full max-w-4xl mx-auto h-auto rounded-2xl"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                GOD REVEALED MY
                <br />
                <span className="text-gold-400">TRUE CALLING</span>
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                I built an empire focused on myself. Six-pack abs, business success, external validation. 
                But when I became a father, I realized my children didn't need to see an emperor—they needed to see a king.
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                "I wasn't building an empire for myself. God was building me for HIS empire."
              </p>
              <div className="flex items-center space-x-4 text-gold-400 mb-8">
                <CheckCircle className="w-5 h-5" />
                <span className="font-light">Sammy, MrSixPack Empire Founder</span>
              </div>
              
              {/* Sammy's Gym Photo */}
              <div className="mt-8">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/21e7e3a133f51b5e47c7f22da7db38c2"
                  alt="Sammy in the gym - Building physical and spiritual strength"
                  className="w-full max-w-md rounded-2xl shadow-2xl border border-gold-400/20"
                />
                <p className="text-sm text-white/60 text-center mt-3 italic">
                  "Physical strength builds character. Spiritual strength builds kings."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Divine Calling Visual */}
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/27d5595eeb861404e3999bebae1308fd"
                alt="God Revealed My True Calling"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
              <button className="absolute bottom-6 left-6 text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center space-x-2">
                <Play className="w-6 h-6" />
                <span className="text-lg font-light">WATCH MY STORY</span>
              </button>
            </motion.div>
          </div>

          {/* Three Stage Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-light text-center mb-12 text-gold-400">THE TRANSFORMATION JOURNEY</h3>
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/9e2da55aee07e21758a1a730f2714c55"
              alt="The Struggle, The Awakening, The Kingdom"
              className="w-full max-w-5xl mx-auto h-auto rounded-2xl"
            />
          </motion.div>

          {/* Meet Sammy Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-r from-gold-400/5 to-transparent rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light mb-6 text-gold-400">MEET YOUR GUIDE</h3>
                <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                  I'm Sammy, and I've walked this exact journey. From building the MrSixPack Empire focused on 
                  personal achievement to discovering my divine calling as a father and kingdom builder.
                </p>
                <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                  My transformation wasn't just physical - it was spiritual, emotional, and purposeful. 
                  Now I help fathers like you discover that same divine calling and build legacies that matter.
                </p>
                <div className="flex items-center space-x-4 text-gold-400">
                  <Crown className="w-6 h-6" />
                  <span>Father. Coach. Kingdom Builder.</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/21e7e3a133f51b5e47c7f22da7db38c2"
                  alt="Sammy - Your Divine Fatherhood Guide"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-3 rounded-full font-medium">
                  Ready to Guide You
                </div>
              </div>
            </div>
          </motion.div>

          {/* Father & Child Moments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/80b3f63c999bc53e62569a37f153b524"
                alt="Father and Child in Prayer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-light text-white mb-2">SPIRITUAL FOUNDATION</h4>
                <p className="text-white/80 text-sm">Building faith together</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/d593130642048a63eb02521b75e7c926"
                alt="Father and Child Exercising"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-light text-white mb-2">FITNESS BONDING</h4>
                <p className="text-white/80 text-sm">Strength through connection</p>
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
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto mb-8">
              Three levels of transformation. Choose your commitment to discovering divine calling.
            </p>
            
            {/* Social Proof & Urgency */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gold-400" />
                <span>1,247 fathers started this month</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gold-400 fill-current" />
                <span>4.9/5 transformation success rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Real dads, real results</span>
              </div>
            </div>
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
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Digital foundation for discovering divine purpose through fitness, faith, and fatherhood.
                </p>
                <div className="mb-4">
                  <div className="text-3xl font-light text-gold-400 mb-2">$47</div>
                  <div className="text-sm text-green-400 font-medium">✓ Instant Download • 2,341 fathers started this week</div>
                </div>
                <Link href="/playbook">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-transparent border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-black font-medium py-3 rounded-full transition-all duration-300"
                  >
                    BEGIN HERE
                  </motion.button>
                </Link>
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
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Brotherhood community with weekly calls, accountability, and spiritual growth.
                </p>
                <div className="mb-4">
                  <div className="text-3xl font-light text-gold-400 mb-2">$97<span className="text-base text-white/50">/month</span></div>
                  <div className="text-sm text-gold-400 font-medium">🔥 847 active kingdom builders • Next call tomorrow</div>
                </div>
                <Link href="/circle">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gold-400/20 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black font-medium py-3 rounded-full transition-all duration-300"
                  >
                    JOIN BROTHERHOOD
                  </motion.button>
                </Link>
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
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  30-day transformation with Sammy. Discover calling, build legacy blueprint.
                </p>
                <div className="mb-4">
                  <div className="text-3xl font-light text-gold-400 mb-2">$997</div>
                  <div className="text-sm text-red-400 font-medium">⚡ Only 3 spots left this month • Next cohort March 15th</div>
                </div>
                <Link href="/intensive">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium py-3 rounded-full transition-all duration-300"
                  >
                    APPLY NOW
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section - Testimonials with Professional Image */}
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
                role: "Father of 2, Detroit"
              },
              {
                quote: "I found accountability partners who understand godly fatherhood in today's world.",
                author: "James Rodriguez", 
                role: "Father of 3, Atlanta"
              },
              {
                quote: "From building empire to building kingdom. Best investment I've ever made.",
                author: "David Thompson",
                role: "Father of 1, Chicago"
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
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
                <div className="text-gold-400 mb-4 text-2xl">"</div>
                <p className="text-white/80 font-light leading-relaxed mb-6 text-lg">
                  {testimonial.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Success Story with Sammy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-gold-400/10 to-gold-600/5 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-8 text-center"
          >
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/e1ba558eed59955723e463e1b6fca0f3"
              alt="Sammy - Divine Fatherhood Founder"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gold-400/50"
            />
            <blockquote className="text-xl text-white/90 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
              "I wasn't building an empire for myself - God was building me for HIS empire. 
              When I realized my children needed to see a king, not just a dad who goes to the gym, everything changed.
              This transformation is what I want to share with every father ready to be crowned with purpose."
            </blockquote>
            <div className="text-gold-400 font-medium">- Sammy, Founder of Divine Fatherhood</div>
            <div className="text-white/60 text-sm mt-2">MrSixPack Empire → Divine Fatherhood</div>
          </motion.div>
        </div>

        {/* Second Lead Magnet - Kingdom Builder Challenge */}
        <div className="max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-light mb-4">
              READY TO START YOUR <span className="text-gold-400">TRANSFORMATION?</span>
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join thousands of fathers who've discovered their divine purpose through our proven 14-day challenge.
            </p>
          </motion.div>
          <ChallengeOptin variant="hero" className="max-w-3xl mx-auto" />
        </div>
      </section>

      {/* Final CTA with Brand Visual */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/968341fb0d47976b1991f78e87418745"
              alt="Discover Your Divine Purpose - Divine Fatherhood"
              className="w-full max-w-4xl mx-auto h-auto mb-8"
            />
            <p className="text-lg text-white/70 font-light mb-8 max-w-2xl mx-auto">
              Join 10,000+ fathers discovering their divine purpose and building kingdoms, not empires.
            </p>
            <Link href="/playbook">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide"
              >
                START YOUR TRANSFORMATION
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-black border-t border-gold-500/20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <img 
            src="https://page.gensparksite.com/v1/base64_upload/72d9659e89fef8f66a856718c6ca97f8"
            alt="Divine Fatherhood Footer"
            className="w-full max-w-4xl mx-auto h-auto mb-8"
          />
          
          {/* Social Media Links */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <a 
              href="https://instagram.com/mrsixpackempire" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gold-400 hover:text-gold-300 transition-colors group"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-light">Follow @mrsixpackempire</span>
            </a>
            <a 
              href="https://youtube.com/@divinefatherhood" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Youtube className="w-6 h-6" />
              <span className="font-light">YouTube</span>
            </a>
            <a 
              href="https://twitter.com/mrsixpackempire" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Twitter className="w-6 h-6" />
              <span className="font-light">Twitter</span>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            © 2025 Divine Fatherhood. All Rights Reserved. | Building Stronger Fathers, Shaping Better Futures
          </div>
        </div>
      </footer>
    </div>
  )
}