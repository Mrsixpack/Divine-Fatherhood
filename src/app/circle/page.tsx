'use client'

import { useEffect } from 'react'
import { Crown, Users, Calendar, Video, MessageCircle, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'

export default function CirclePage() {
  useEffect(() => {
    trackEvent('view_circle')
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="df-hero">
        <div className="df-container">
          <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-df-bg/80 text-df-gold px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-df-gold/30">
              <Users className="h-4 w-4" />
              Monthly Brotherhood • $97/month
            </div>
            
            <h1 className="df-heading df-h1 df-crown-glow leading-none mb-6">
              Divine Fatherhood Circle
            </h1>
            
            <p className="df-body-lg text-df-white/90 mb-8 max-w-2xl mx-auto">
              Where Fatherhood is Brotherhood. Join 200+ fathers walking in divine purpose through 
              weekly calls, accountability, and spiritual growth. This is where transformation happens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                variant="goldSolid"
                asChild
              >
                <a href="#apply">
                  Apply for the Brotherhood
                </a>
              </Button>
              
              <Button
                size="xl"
                variant="goldOutline"
                asChild
              >
                <a href="#testimonials">
                  Hear From Members
                </a>
              </Button>
            </div>

            {/* Next Cohort Info */}
            <div className="mt-8 bg-df-gold/10 border border-df-gold/30 rounded-2xl p-4">
              <p className="text-df-gold font-semibold">Next Cohort Starts: February 3rd, 2025</p>
              <p className="text-df-white/80 text-sm">25 spots available • Applications close January 27th</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-16">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              What You Get In The Circle
            </h2>
            <p className="df-body text-df-white/80 max-w-2xl mx-auto">
              This isn't just a program - it's a brotherhood committed to walking in divine purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card 
              title="Weekly Live Calls"
              copy="Every Wednesday 8PM EST. Group coaching, accountability, and brotherhood connection with Sammy and other fathers."
              icon="Video"
            />
            
            <Card 
              title="Private Community"
              copy="24/7 access to our private group. Daily motivation, workout check-ins, prayer requests, and real brotherhood support."
              icon="MessageCircle"
            />
            
            <Card 
              title="Monthly Challenges"
              copy="Faith-based fitness challenges, scripture memorization, family activities, and purposeful goal-setting with the brotherhood."
              icon="Target"
            />
            
            <Card 
              title="Workout Programs"
              copy="New 'Daddy Strength' workout programs monthly. 20-30 minute sessions designed for busy fathers with divine purpose."
              icon="Crown"
            />
            
            <Card 
              title="Spiritual Growth"
              copy="Weekly devotionals, faith integration strategies, and masculine spirituality discussions. Grow as a man of God."
              icon="Heart"
            />
            
            <Card 
              title="Family Integration"
              copy="Strategies for involving your family in your journey. Workout with kids activities and faith-based parenting guidance."
              icon="Users"
            />
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="df-section">
        <div className="df-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="df-heading df-h2 df-crown-glow mb-4">
                Your Weekly Brotherhood Schedule
              </h2>
            </div>
            
            <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                <div className="text-center p-4 rounded-lg bg-df-gold/10">
                  <div className="font-bold text-df-gold mb-2">MON</div>
                  <div className="text-sm text-df-white/80">
                    Daddy Strength Monday
                    <br />
                    <span className="text-df-gold">Workout + Motivation</span>
                  </div>
                </div>
                
                <div className="text-center p-4 rounded-lg">
                  <div className="font-bold text-df-white/60 mb-2">TUE</div>
                  <div className="text-sm text-df-white/60">Personal Training</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-df-gold/20">
                  <div className="font-bold text-df-gold mb-2">WED</div>
                  <div className="text-sm text-df-white/90">
                    Live Brotherhood Call
                    <br />
                    <span className="text-df-gold">8PM EST • 60 min</span>
                  </div>
                </div>
                
                <div className="text-center p-4 rounded-lg">
                  <div className="font-bold text-df-white/60 mb-2">THU</div>
                  <div className="text-sm text-df-white/60">Personal Training</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-df-gold/10">
                  <div className="font-bold text-df-gold mb-2">FRI</div>
                  <div className="text-sm text-df-white/80">
                    Faith & Fitness Friday
                    <br />
                    <span className="text-df-gold">Spiritual Integration</span>
                  </div>
                </div>
                
                <div className="text-center p-4 rounded-lg">
                  <div className="font-bold text-df-white/60 mb-2">SAT</div>
                  <div className="text-sm text-df-white/60">Family Time</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-df-gold/10">
                  <div className="font-bold text-df-gold mb-2">SUN</div>
                  <div className="text-sm text-df-white/80">
                    Sunday Reflection
                    <br />
                    <span className="text-df-gold">Weekly Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-12">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              Brotherhood Testimonies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-df-gold/10 border-l-4 border-df-gold rounded-r-2xl p-8">
              <p className="df-body text-df-white/90 mb-6">
                "The Circle changed my entire approach to fatherhood. Having brothers who understand the 
                struggle and hold me accountable has been transformational. My wife sees the difference, 
                my kids see the difference, and I feel like I'm finally walking in purpose."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-df-gold">Jerome W.</div>
                  <div className="text-sm text-df-white/70">Father of 2 • Circle Member Since Launch</div>
                </div>
              </div>
            </div>

            <div className="bg-df-gold/10 border-l-4 border-df-gold rounded-r-2xl p-8">
              <p className="df-body text-df-white/90 mb-6">
                "I was skeptical about online community, but this brotherhood is real. The weekly calls 
                keep me focused, the workouts fit my schedule, and the spiritual growth aspect addresses 
                what I was missing in other fitness programs."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-df-gold">Michael R.</div>
                  <div className="text-sm text-df-white/70">Father of 3 • Houston, TX</div>
                </div>
              </div>
            </div>

            <div className="bg-df-gold/10 border-l-4 border-df-gold rounded-r-2xl p-8">
              <p className="df-body text-df-white/90 mb-6">
                "Sammy doesn't just coach fitness - he mentors fatherhood. The way he integrates faith, 
                fitness, and family is exactly what I needed. My oldest son now works out with me because 
                he sees daddy's strength is different."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-df-gold">Kevin L.</div>
                  <div className="text-sm text-df-white/70">Father of 4 • Atlanta, GA</div>
                </div>
              </div>
            </div>

            <div className="bg-df-gold/10 border-l-4 border-df-gold rounded-r-2xl p-8">
              <p className="df-body text-df-white/90 mb-6">
                "This isn't just about getting in shape - it's about becoming the father God designed me to be. 
                The accountability, the brotherhood, the spiritual growth - it all works together. 
                Worth every penny and more."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-df-gold">Anthony M.</div>
                  <div className="text-sm text-df-white/70">Father of 1 • Delaware</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="df-section bg-df-gold/10">
        <div className="df-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="df-heading df-h2 text-df-gold mb-4">
                Apply for the Brotherhood
              </h2>
              <p className="df-body text-df-white/80">
                This is an investment in your divine calling. We only accept fathers who are serious about transformation.
              </p>
            </div>

            <div className="bg-df-bg/60 border-2 border-df-gold rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-df-gold mb-2">$97/month</div>
                <div className="text-df-white/80">Cancel anytime • Next cohort starts Feb 3rd</div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                    required
                  />
                </div>

                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                  required
                />

                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                  required
                />

                <div>
                  <label className="block text-df-white font-semibold mb-2">
                    How many children do you have?
                  </label>
                  <select className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white">
                    <option>Expecting first child</option>
                    <option>1 child</option>
                    <option>2 children</option>
                    <option>3 children</option>
                    <option>4+ children</option>
                  </select>
                </div>

                <div>
                  <label className="block text-df-white font-semibold mb-2">
                    What's your biggest struggle as a father right now?
                  </label>
                  <textarea 
                    className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                    rows={3}
                    placeholder="Be honest - this helps us serve you better..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-df-white font-semibold mb-2">
                    Why do you want to join the Divine Fatherhood Circle?
                  </label>
                  <textarea 
                    className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                    rows={3}
                    placeholder="What are you hoping to achieve?"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  variant="goldSolid"
                  className="w-full"
                >
                  Submit Application
                </Button>

                <p className="text-sm text-df-white/60 text-center">
                  You'll hear back within 24-48 hours. We review every application personally.
                </p>
              </form>
            </div>

            <div className="text-center mt-8">
              <p className="df-body text-df-white/80 mb-4">
                Questions about the Circle?
              </p>
              <Button
                variant="goldOutline"
                asChild
              >
                <a href="mailto:sammy@divinefatherhood.com">
                  Email Sammy Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}