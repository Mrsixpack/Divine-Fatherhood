'use client'

import { useEffect } from 'react'
import { Crown, Download, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'

export default function PlaybookPage() {
  useEffect(() => {
    trackEvent('view_playbook')
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="df-hero">
        <div className="df-container">
          <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-df-bg/80 text-df-gold px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-df-gold/30">
              <Download className="h-4 w-4" />
              Digital Playbook • $47
            </div>
            
            <h1 className="df-heading df-h1 df-crown-glow leading-none mb-6">
              The Divine Dad Playbook
            </h1>
            
            <p className="df-body-lg text-df-white/90 mb-8 max-w-2xl mx-auto">
              The complete guide to discovering your divine purpose through fitness, faith, and fatherhood. 
              Transform from empire-building to kingdom-building. Purpose over pressure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                variant="goldSolid"
                asChild
              >
                <a href="#purchase">
                  Get The Playbook - $47
                </a>
              </Button>
              
              <Button
                size="xl"
                variant="goldOutline"
                asChild
              >
                <a href="#preview">
                  Preview Contents
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-4 text-df-white/80">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-5 w-5 fill-df-gold text-df-gold" />
                ))}
              </div>
              <span>500+ fathers already transforming</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section id="preview" className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-16">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              What's Inside The Playbook
            </h2>
            <p className="df-body text-df-white/80 max-w-2xl mx-auto">
              70+ pages of practical strategies, spiritual insights, and actionable frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-6">
              <h3 className="df-heading text-xl text-df-gold mb-4">Chapter 1: The Divine Evolution</h3>
              <ul className="space-y-2 text-df-white/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>From Empire to Kingdom mindset shift</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Recognizing divine preparation in your journey</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>The fatherhood awakening process</span>
                </li>
              </ul>
            </div>

            <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-6">
              <h3 className="df-heading text-xl text-df-gold mb-4">Chapter 2: Faith As Foundation</h3>
              <ul className="space-y-2 text-df-white/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Morning spiritual disciplines for busy dads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Prayer as power, not just routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Integrating faith with fitness goals</span>
                </li>
              </ul>
            </div>

            <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-6">
              <h3 className="df-heading text-xl text-df-gold mb-4">Chapter 3: Fitness As Discipline</h3>
              <ul className="space-y-2 text-df-white/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>20-minute "Daddy Strength" workouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Training for purpose, not ego</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Nutrition strategies for busy fathers</span>
                </li>
              </ul>
            </div>

            <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-6">
              <h3 className="df-heading text-xl text-df-gold mb-4">Chapter 4: Fatherhood As Legacy</h3>
              <ul className="space-y-2 text-df-white/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Raising world-changers, not just kids</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Intentional parenting frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Building generational impact</span>
                </li>
              </ul>
            </div>

            <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-6">
              <h3 className="df-heading text-xl text-df-gold mb-4">Chapter 5: Purpose Discovery</h3>
              <ul className="space-y-2 text-df-white/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Divine calling assessment framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Turning struggles into strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Kingdom impact strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-df-gold/10 border-2 border-df-gold rounded-2xl p-6">
              <h3 className="df-heading text-xl text-df-gold mb-4">BONUS: Implementation Tools</h3>
              <ul className="space-y-2 text-df-white/90">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>30-day transformation tracker</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Family fitness activity guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-df-gold mt-0.5 flex-shrink-0" />
                  <span>Scripture-based motivation cards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="df-section">
        <div className="df-container">
          <div className="text-center mb-12">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              What Fathers Are Saying
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-df-gold/10 border-l-4 border-df-gold rounded-r-2xl p-8">
              <p className="df-body text-df-white/90 mb-4">
                "This playbook changed everything. I went from just 'working out' to training with divine purpose. 
                My kids see the difference in their dad."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-df-gold">Marcus T.</div>
                  <div className="text-sm text-df-white/70">Father of 3 • Atlanta, GA</div>
                </div>
              </div>
            </div>

            <div className="bg-df-gold/10 border-l-4 border-df-gold rounded-r-2xl p-8">
              <p className="df-body text-df-white/90 mb-4">
                "Finally, a fitness approach that integrates my faith. The 20-minute workouts fit my schedule, 
                but the purpose framework transformed my mindset."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-df-gold">David K.</div>
                  <div className="text-sm text-df-white/70">Father of 2 • Houston, TX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="df-section bg-df-gold/10">
        <div className="df-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="df-heading df-h2 text-df-gold mb-6">
              Transform Your Fatherhood Journey Today
            </h2>
            
            <div className="bg-df-bg/60 border-2 border-df-gold rounded-2xl p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-df-gold mb-2">$47</div>
                <div className="text-df-white/80">One-time payment • Instant access</div>
              </div>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-df-gold" />
                  <span>70+ page digital playbook</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-df-gold" />
                  <span>5 comprehensive chapters + bonus tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-df-gold" />
                  <span>30-day transformation tracker</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-df-gold" />
                  <span>Family fitness activity guide</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-df-gold" />
                  <span>Lifetime access + updates</span>
                </li>
              </ul>

              <Button
                size="xl"
                variant="goldSolid"
                className="w-full mb-4"
                asChild
              >
                <a href="https://buy.stripe.com/PLACEHOLDER">
                  Get Instant Access - $47
                </a>
              </Button>

              <p className="text-sm text-df-white/60">
                30-day money-back guarantee • Secure payment
              </p>
            </div>

            <div className="text-center">
              <p className="df-body text-df-white/80 mb-4">
                Ready for more support on your journey?
              </p>
              <Button
                variant="goldOutline"
                asChild
              >
                <a href="/circle">
                  Join the Divine Fatherhood Circle
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}