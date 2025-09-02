'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Crown, Heart, Dumbbell, Users } from 'lucide-react'

export function PersonalStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="df-section bg-gradient-to-b from-df-bg via-df-bg/95 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-df-gold/10 via-transparent to-df-gold/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(207, 175, 77, 0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
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
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6 bg-df-gold/10 border border-df-gold/30 rounded-full px-8 py-3"
            >
              <Crown className="h-6 w-6 text-df-gold" />
              <span className="df-emphasis text-df-gold">The Evolution Story</span>
            </motion.div>
            
            <h2 className="df-heading df-h1 df-crown-glow mb-6">
              From Mr. Sixpack Empire
              <br />
              <span className="text-df-gold">to Divine Fatherhood</span>
            </h2>
            
            <p className="df-body text-df-white/80 max-w-3xl mx-auto text-lg">
              This isn't just another transformation story. This is about discovering that God didn't make me 
              build an empire for myself - He was building me for HIS empire.
            </p>
          </motion.div>

          {/* Main Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-df-bg/60 border-l-4 border-df-gold/50 p-6 rounded-r-xl"
                >
                  <h3 className="df-heading text-xl text-df-gold mb-3 flex items-center gap-2">
                    <Dumbbell className="h-5 w-5" />
                    The Mr. Sixpack Era
                  </h3>
                  <p className="df-body text-df-white/90 mb-4">
                    Building an empire focused on aesthetics, personal achievement, and individual success. 
                    The grind was real, the results were visible, but something deeper was missing.
                  </p>
                  <p className="df-emphasis text-df-gold/80">
                    "I was building for myself, not understanding God's bigger plan."
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center py-6"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="h-px bg-gradient-to-r from-transparent to-df-gold w-16"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Crown className="h-8 w-8 text-df-gold drop-shadow-lg" />
                    </motion.div>
                    <motion.div 
                      className="h-px bg-gradient-to-l from-transparent to-df-gold w-16"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-df-gold/20 to-df-gold/5 border-2 border-df-gold/30 p-6 rounded-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-df-gold via-white to-df-gold"></div>
                  
                  <h3 className="df-heading text-xl text-df-gold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Divine Fatherhood Awakening
                  </h3>
                  <p className="df-body text-df-white/95 mb-4">
                    Becoming a father - especially with our second son coming in 2 months - changed everything. 
                    God revealed that I wasn't building an empire for myself. He was building me for HIS empire.
                  </p>
                  <div className="space-y-2">
                    <p className="df-emphasis text-df-gold">
                      "Purpose Over Pressure"
                    </p>
                    <p className="df-emphasis text-df-gold">
                      "Legacy Over Likes"
                    </p>
                    <p className="df-emphasis text-df-gold text-lg font-bold">
                      "Kingdom Over Empire"
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Visual Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Transformation Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-df-gold/20 border border-df-gold/30"
              >
                <Image
                  src="/images/transformation-story.png"
                  alt="Sammy's transformation from Mr. Sixpack to Divine Fatherhood"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -right-4 bg-df-gold text-black px-6 py-4 rounded-2xl font-bold shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-black">5000+</div>
                  <div className="text-sm">Fathers Impacted</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -left-4 bg-white text-black px-6 py-4 rounded-2xl font-bold shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-black">2</div>
                  <div className="text-sm">Sons (Expecting)</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-r from-df-gold/10 via-df-gold/20 to-df-gold/10 border border-df-gold/40 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-df-gold/5 via-transparent to-df-gold/5"></div>
              
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h3 className="df-heading df-h2 text-df-gold mb-6">My Divine Mission</h3>
                <p className="df-body text-df-white/95 text-xl mb-6 leading-relaxed">
                  To help fathers discover they're not just raising kids - they're raising world-changers. 
                  To show them that when they're crowned with purpose, entire generations transform.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="df-emphasis text-df-gold text-2xl font-bold"
                >
                  "Daddy Strength Different"
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Three Pillars Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Heart, title: "Faith", desc: "Foundation for everything", delay: 0.2 },
              { icon: Dumbbell, title: "Fitness", desc: "Daddy strength different", delay: 0.4 },
              { icon: Users, title: "Fatherhood", desc: "Legacy building", delay: 0.6 }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pillar.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-df-gold/20 border-2 border-df-gold/40 rounded-full mb-4 group-hover:bg-df-gold/30 transition-colors"
                >
                  <pillar.icon className="h-8 w-8 text-df-gold" />
                </motion.div>
                <h4 className="df-heading text-lg text-df-gold mb-2">{pillar.title}</h4>
                <p className="df-body text-df-white/70 text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}