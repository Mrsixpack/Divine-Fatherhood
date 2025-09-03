'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Crown, ArrowDown, Heart, Dumbbell, Users, Target, Trophy, Shield, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function StoryJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-df-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-df-gold/20 via-transparent to-transparent"></div>
      </div>

      <div className="df-container relative">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20 pt-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6 bg-df-gold/10 border border-df-gold/30 rounded-full px-8 py-3"
            >
              <Crown className="h-6 w-6 text-df-gold" />
              <span className="df-emphasis text-df-gold">God's Plan Revealed</span>
            </motion.div>
            
            <h2 className="df-heading df-h1 df-crown-glow mb-6">
              Father of 2 Coming Soon
              <br />
              <span className="text-df-gold">The Real Reason Everything Changed</span>
            </h2>
            
            <p className="df-body text-df-white/80 max-w-3xl mx-auto text-lg">
              With our second child coming, the calling becomes even clearer. This isn't just about being a father — 
              it's about being <span className="text-df-gold font-bold">divinely appointed</span> to raise world-changers.
            </p>
          </motion.div>

          {/* Story Timeline */}
          <div className="space-y-32">
            
            {/* Story Section 1: The Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30"
                >
                  <Image
                    src="/images/story/real-reason-changed.png"
                    alt="The real reason everything changed - Baby #2 coming"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-6"
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-df-gold text-black px-6 py-2 rounded-full font-bold"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart className="h-5 w-5" />
                  BABY #2 COMING!
                </motion.div>
                
                <h3 className="df-heading df-h2 text-df-gold">
                  The Real Reason Everything Changed
                </h3>
                
                <p className="df-body text-df-white/90 text-lg">
                  With our second son on the way in 2 months, the calling becomes even clearer. 
                  This isn't just about being a father — it's about being <span className="text-df-gold font-bold">divinely appointed</span> to raise world-changers.
                </p>
                
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Crown className="h-5 w-5 text-df-gold" />
                    <span className="df-emphasis text-df-gold">Legacy Over Likes</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Target className="h-5 w-5 text-df-gold" />
                    <span className="df-emphasis text-df-gold">Kingdom Over Empire</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Heart className="h-5 w-5 text-df-gold" />
                    <span className="df-emphasis text-df-gold">Purpose Over Pressure</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Transition Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-df-gold/20 border-2 border-df-gold rounded-full"
              >
                <ArrowDown className="h-8 w-8 text-df-gold" />
              </motion.div>
            </motion.div>

            {/* Story Section 2: The Evolution You Didn't See Coming */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="df-heading df-h2 text-df-gold">
                  The Evolution You Didn't See Coming
                </h3>
                
                <p className="df-body text-df-white/90 text-lg">
                  This wasn't just a physical transformation. This was a complete 
                  <span className="text-df-gold font-bold"> spiritual evolution</span>. 
                  From building muscle to building character.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center bg-df-bg/60 border border-df-gold/20 rounded-xl p-6"
                  >
                    <Dumbbell className="h-8 w-8 text-df-gold mx-auto mb-2" />
                    <h4 className="df-heading text-df-gold text-sm">MIND</h4>
                    <p className="text-df-white/70 text-xs">Renewed thinking</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center bg-df-bg/60 border border-df-gold/20 rounded-xl p-6"
                  >
                    <Heart className="h-8 w-8 text-df-gold mx-auto mb-2" />
                    <h4 className="df-heading text-df-gold text-sm">BODY</h4>
                    <p className="text-df-white/70 text-xs">Purposeful strength</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center bg-df-bg/60 border border-df-gold/20 rounded-xl p-6"
                  >
                    <Crown className="h-8 w-8 text-df-gold mx-auto mb-2" />
                    <h4 className="df-heading text-df-gold text-sm">SPIRIT</h4>
                    <p className="text-df-white/70 text-xs">Divine calling</p>
                  </motion.div>
                </div>
              </motion.div>
              
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30"
                >
                  <Image
                    src="/images/story/evolution-didnt-see.png"
                    alt="The evolution you didn't see coming - spiritual transformation"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-df-gold/20 border-2 border-df-gold rounded-full"
              >
                <Crown className="h-8 w-8 text-df-gold" />
              </motion.div>
            </motion.div>

            {/* Story Section 3: What Really Matters */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30"
                >
                  <Image
                    src="/images/story/what-matters.png"
                    alt="What really matters - legacy is eternal"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-6"
              >
                <h3 className="df-heading df-h2 text-df-gold">
                  What Really Matters
                </h3>
                
                <p className="df-body text-df-white/90 text-lg">
                  Social media likes are temporary. <span className="text-df-gold font-bold">Legacy is eternal.</span> I 
                  stopped chasing momentary validation and started building something that would outlast me.
                </p>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3 bg-df-gold/10 border border-df-gold/30 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Trophy className="h-6 w-6 text-df-gold flex-shrink-0" />
                    <span className="text-df-white/90">Generational impact</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 bg-df-gold/10 border border-df-gold/30 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Crown className="h-6 w-6 text-df-gold flex-shrink-0" />
                    <span className="text-df-white/90">Character Over Clout</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 bg-df-gold/10 border border-df-gold/30 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Heart className="h-6 w-6 text-df-gold flex-shrink-0" />
                    <span className="text-df-white/90">Values Over Vanity</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-df-gold/20 border-2 border-df-gold rounded-full"
              >
                <ArrowDown className="h-8 w-8 text-df-gold" />
              </motion.div>
            </motion.div>

            {/* Story Section 4: God Revealed My True Calling */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="df-heading df-h2 text-df-gold">
                  God Revealed My True Calling
                </h3>
                
                <p className="df-body text-df-white/90 text-lg italic">
                  "I wasn't building an empire for myself — He was building me for <span className="text-df-gold font-bold">HIS empire.</span>"
                </p>
                
                <p className="df-body text-df-white/90">
                  Through fatherhood, God showed me the bigger picture. Every workout, every struggle, 
                  every moment was preparation for this divine calling.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-df-bg/60 border border-df-gold/20 rounded-lg p-4"
                  >
                    <Heart className="h-6 w-6 text-df-gold mx-auto mb-2" />
                    <h4 className="df-heading text-df-gold text-sm">Faith</h4>
                    <p className="text-df-white/70 text-xs">Foundation</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-df-bg/60 border border-df-gold/20 rounded-lg p-4"
                  >
                    <Dumbbell className="h-6 w-6 text-df-gold mx-auto mb-2" />
                    <h4 className="df-heading text-df-gold text-sm">Fitness</h4>
                    <p className="text-df-white/70 text-xs">Discipline</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-df-bg/60 border border-df-gold/20 rounded-lg p-4"
                  >
                    <Users className="h-6 w-6 text-df-gold mx-auto mb-2" />
                    <h4 className="df-heading text-df-gold text-sm">Fatherhood</h4>
                    <p className="text-df-white/70 text-xs">Legacy</p>
                  </motion.div>
                </div>
              </motion.div>
              
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30"
                >
                  <Image
                    src="/images/story/god-revealed-calling.png"
                    alt="God revealed my true calling through fatherhood"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-df-gold/20 border-2 border-df-gold rounded-full"
              >
                <Crown className="h-8 w-8 text-df-gold" />
              </motion.div>
            </motion.div>

            {/* Story Section 5: The Mindset Shift */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30"
                >
                  <Image
                    src="/images/story/mindset-shift.png"
                    alt="The mindset shift - Purpose over Pressure"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-6"
              >
                <h3 className="df-heading df-h2 text-df-gold">
                  The Mindset Shift
                </h3>
                
                <p className="df-body text-df-white/90 text-lg">
                  I realized I had been building under <span className="text-red-400 font-bold">pressure</span> when I 
                  should have been building with <span className="text-df-gold font-bold">purpose</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-red-900/20 border border-red-500/30 rounded-lg p-6"
                  >
                    <h4 className="df-heading text-red-400 text-lg mb-3">BEFORE: Pressure</h4>
                    <ul className="space-y-2 text-df-white/80 text-sm">
                      <li>• Validation-seeking</li>
                      <li>• Ego-driven</li>
                      <li>• External metrics</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-df-gold/20 border border-df-gold/30 rounded-lg p-6"
                  >
                    <h4 className="df-heading text-df-gold text-lg mb-3">NOW: Purpose</h4>
                    <ul className="space-y-2 text-df-white/80 text-sm">
                      <li>• Legacy-focused</li>
                      <li>• Service-oriented</li>
                      <li>• Internal fulfillment</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Final Section: Daddy Strength Different */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-16 pb-20"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30 max-w-4xl mx-auto"
                >
                  <Image
                    src="/images/story/daddy-strength.png"
                    alt="Daddy Strength Different - strength with purpose"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto space-y-8"
              >
                <h3 className="df-heading df-h1 text-df-gold">
                  Daddy Strength Different
                </h3>
                
                <p className="df-body text-df-white/90 text-xl">
                  This isn't just physical strength. This is <span className="text-df-gold font-bold">strength with purpose</span>. 
                  Strength to protect, provide, and lead by example.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-df-gold/10 border border-df-gold/30 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-df-gold/20 border border-df-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-df-gold" />
                    </div>
                    <h4 className="df-heading text-df-gold text-lg mb-3">PROTECTOR</h4>
                    <p className="df-body text-df-white/80">Shield my family</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-df-gold/10 border border-df-gold/30 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-df-gold/20 border border-df-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-df-gold" />
                    </div>
                    <h4 className="df-heading text-df-gold text-lg mb-3">PROVIDER</h4>
                    <p className="df-body text-df-white/80">Build their future</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-df-gold/10 border border-df-gold/30 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-df-gold/20 border border-df-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="h-8 w-8 text-df-gold" />
                    </div>
                    <h4 className="df-heading text-df-gold text-lg mb-3">KING</h4>
                    <p className="df-body text-df-white/80">Lead with love</p>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <Button 
                    size="lg" 
                    className="bg-df-gold text-black hover:bg-df-gold/90 text-lg px-12 py-6 rounded-2xl font-bold"
                  >
                    <Crown className="h-5 w-5 mr-2" />
                    Discover Your Divine Calling
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}