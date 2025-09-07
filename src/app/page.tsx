'use client'

import { useState, useEffect } from 'react'
import { Crown, Play, ArrowRight, CheckCircle, Star, Instagram, Youtube, Twitter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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

        <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
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
            
            <Link href="/playbook">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium px-12 py-4 rounded-full text-lg tracking-wide inline-flex items-center space-x-3"
              >
                <span>DISCOVER YOUR CALLING</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
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
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  Brotherhood community with weekly calls, accountability, and spiritual growth.
                </p>
                <div className="text-3xl font-light text-gold-400 mb-6">$97<span className="text-base text-white/50">/month</span></div>
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
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  30-day transformation with Sammy. Discover calling, build legacy blueprint.
                </p>
                <div className="text-3xl font-light text-gold-400 mb-6">$997</div>
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

          {/* Featured Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-gold-400/10 to-gold-600/5 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-8 text-center"
          >
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/901ddc3d58a6472d87a657763ab2facd"
              alt="Success Story"
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-gold-400/30"
            />
            <blockquote className="text-xl text-white/90 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
              "Joining Divine Fatherhood was the turning point in my life. I went from chasing success for myself 
              to building a legacy for my children. My wife sees a different man, my kids see their hero."
            </blockquote>
            <div className="text-gold-400 font-medium">- Antonio Williams, Father of 3</div>
          </motion.div>
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