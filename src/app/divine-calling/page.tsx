'use client'

import { useEffect } from 'react'
import { Crown, Heart, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'

export default function DivineCallingPage() {
  useEffect(() => {
    trackEvent('view_divine_calling')
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="df-hero">
        <div className="df-container">
          <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-df-bg/80 text-df-gold px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-df-gold/30">
              <Crown className="h-4 w-4" />
              Divine Purpose Revealed
            </div>
            
            <h1 className="df-heading df-h1 df-crown-glow leading-none mb-6">
              Discover Your Divine Calling
            </h1>
            
            <p className="df-body-lg text-df-white/90 mb-8 max-w-2xl mx-auto">
              From Mr. Sixpack Empire to Divine Fatherhood. God revealed I wasn't building an empire for myself - 
              He was building me for HIS empire. Your fitness journey, struggles, and fatherhood experience 
              are all preparation for your divine calling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                variant="goldSolid"
                asChild
              >
                <a href="#assessment">
                  Take the Divine Purpose Assessment
                </a>
              </Button>
              
              <Button
                size="xl"
                variant="goldOutline"
                asChild
              >
                <a href="https://youtube.com/@DivineFatherhood">
                  Watch Evolution Story
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="assessment" className="df-section bg-white/5">
        <div className="df-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="df-heading df-h2 df-crown-glow mb-8">
              Divine Purpose Assessment
            </h2>
            <p className="df-body text-df-white/80 mb-12">
              Discover how God is preparing you for your divine calling through your current journey.
            </p>

            {/* Simple Assessment Form */}
            <form className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-8 space-y-6">
              <div className="text-left">
                <label className="block text-df-white font-semibold mb-2">
                  What's your current biggest struggle as a father?
                </label>
                <select className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white">
                  <option>Time management between work, family, and self-care</option>
                  <option>Feeling disconnected from my purpose</option>
                  <option>Balancing personal goals with family responsibilities</option>
                  <option>Lack of energy and motivation</option>
                  <option>Not being the role model I want to be</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-df-white font-semibold mb-2">
                  How would you describe your current fitness journey?
                </label>
                <select className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white">
                  <option>Inconsistent - start and stop frequently</option>
                  <option>Motivated but lack direction</option>
                  <option>Training hard but missing the deeper purpose</option>
                  <option>Haven't started but want to</option>
                  <option>Solid routine but want more meaning</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-df-white font-semibold mb-2">
                  What does "divine purpose" mean to you?
                </label>
                <select className="w-full p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white">
                  <option>Using my talents to serve God and family</option>
                  <option>Being the father God designed me to be</option>
                  <option>Building a legacy beyond myself</option>
                  <option>Not sure, but I know there's more</option>
                  <option>Making a generational impact</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-df-white font-semibold mb-2">
                  Your Name & Email
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="p-3 rounded-lg bg-df-bg border border-df-gold/30 text-df-white placeholder-df-white/60"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="xl"
                variant="goldSolid"
                className="w-full"
              >
                Get My Divine Purpose Assessment
              </Button>

              <p className="text-sm text-df-white/60">
                You'll receive your personalized assessment + the FREE "Crowned Father" starter guide
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Four Signs Section */}
      <section className="df-section">
        <div className="df-container">
          <div className="text-center mb-16">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              4 Signs God Is Preparing You For Divine Purpose
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card 
              title="You're Feeling Restless"
              copy="The success you've achieved doesn't feel like enough. You know there's more, but you can't put your finger on it."
              icon="Heart"
            />
            
            <Card 
              title="Your Journey Has Been Unique"
              copy="The struggles, setbacks, and victories you've experienced are preparing you for something bigger."
              icon="Target"
            />
            
            <Card 
              title="Fatherhood Changed Everything"
              copy="Becoming a father awakened something in you. You feel the weight of responsibility and legacy."
              icon="Crown"
            />
            
            <Card 
              title="You Want To Impact Others"
              copy="You feel called to help other fathers, to be part of something bigger than personal achievement."
              icon="Users"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="df-section bg-df-gold/10">
        <div className="df-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="df-heading df-h2 text-df-gold mb-6">
              Ready To Walk In Your Divine Calling?
            </h2>
            <p className="df-body text-df-white/90 mb-8">
              Join the Divine Fatherhood Circle - a brotherhood of fathers discovering purpose through faith, fitness, and intentional fatherhood.
            </p>
            
            <Button
              size="xl"
              variant="goldSolid"
              asChild
            >
              <a href="/circle">
                Join The Brotherhood ($97/month)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}