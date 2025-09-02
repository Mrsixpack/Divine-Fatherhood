'use client'

import { useEffect } from 'react'
import { 
  Hero, 
  Card, 
  YouTubeGrid, 
  NewsletterForm,
  Testimonial,
  PersonalStory
} from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'
import { Crown } from 'lucide-react'


export default function HomePage() {
  useEffect(() => {
    trackEvent('view_home')
  }, [])

  return (
    <>
      {/* Hero Section - CROWNED WITH PURPOSE */}
      <Hero 
        title="CROWNED WITH PURPOSE"
        subtitle="From Mr. Sixpack Empire to Divine Fatherhood. God didn't make me build an empire for myself - He was building me for HIS empire. Discover your divine calling through Faith • Fitness • Fatherhood."
        ctaPrimary={{ 
          text: "Discover Your Divine Calling", 
          href: "/divine-calling",
          variant: "goldSolid"
        }}
        ctaSecondary={{ 
          text: "Watch My Evolution Story", 
          href: "https://youtube.com/@HANDLE",
          variant: "goldOutline"
        }}
        badge="Sammy 'MrSixPack' • Delaware • Expecting Father of 2"
      />

      {/* Personal Story Section - Dynamic with Your Photos */}
      <PersonalStory />

      {/* Framework Section */}
      <section className="df-section">
        <div className="df-container">
          <div className="max-w-3xl mx-auto">
            <Card 
              title="DADDY STRENGTH DIFFERENT"
              copy="Faith as foundation. Fitness as discipline. Fatherhood as legacy. When fathers discover they're crowned with purpose, generations change."
              icon="Crown"
            />
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="df-section bg-white/5">
        <div className="df-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="df-heading df-h2 df-crown-glow mb-8">
              The Divine Evolution
            </h2>
            <div className="space-y-8">
              <div className="bg-df-bg/60 border border-df-gold/20 rounded-2xl p-8">
                <h3 className="df-heading text-xl text-df-gold mb-4">Mr. Sixpack Empire</h3>
                <p className="df-body text-df-white/80">
                  "I was building an empire for myself. Focused on personal achievement, aesthetics, and individual success. 
                  The grind was real, but something was missing."
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="h-px bg-df-gold w-16"></div>
                <Crown className="h-8 w-8 text-df-gold mx-4" />
                <div className="h-px bg-df-gold w-16"></div>
              </div>
              
              <div className="bg-df-gold/10 border-2 border-df-gold rounded-2xl p-8">
                <h3 className="df-heading text-xl text-df-gold mb-4">Divine Fatherhood</h3>
                <p className="df-body text-df-white/90 mb-4">
                  "Fatherhood changed everything. Especially with my second son coming in 2 months, God revealed: 
                  I wasn't building an empire for myself - He was building me for HIS empire."
                </p>
                <p className="df-emphasis text-df-gold">
                  "Purpose Over Pressure. Legacy Over Likes. Kingdom Over Empire."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Grid */}
      <YouTubeGrid 
        channelId={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUTUBE_CHANNEL_ID"}
        playlists={["Divine Calling Series", "Daddy Strength Diaries", "Faith & Fitness"]}
        cta={{ 
          text: "Subscribe to the Movement", 
          href: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@HANDLE",
          variant: "goldSolid"
        }}
      />

      {/* Four Pillars Section */}
      <section className="df-section">
        <div className="df-container">
          <div className="text-center mb-16">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              The Four Pillars of Divine Fatherhood
            </h2>
            <p className="df-body text-df-white/80 max-w-2xl mx-auto">
              Faith as foundation. Fitness as discipline. Fatherhood as legacy. Purpose as calling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card 
              title="Faith Integration"
              copy="Spiritual growth, divine purpose discovery, prayer as power. Foundation for everything else."
              icon="Heart"
            />
            
            <Card 
              title="Fitness Foundation"
              copy="Daddy strength different. Training for purpose, not ego. Physical discipline builds spiritual discipline."
              icon="Dumbbell"
            />
            
            <Card 
              title="Fatherhood Excellence"
              copy="Legacy building, raising world-changers, intentional parenting. Your children are arrows shot into the future."
              icon="Crown"
            />
            
            <Card 
              title="Purpose Discovery"
              copy="Divine calling revealed through fatherhood. From empire building to kingdom building. Crowned with purpose."
              icon="Compass"
            />
          </div>
        </div>
      </section>

      {/* Service Tiers Section */}
      <section className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-16">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              Your Path to Purpose
            </h2>
            <p className="df-body text-df-white/80 max-w-2xl mx-auto">
              Choose your level of commitment to discovering divine calling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card 
              title="Divine Dad Playbook"
              copy="$47 - Digital guide to discovering divine purpose through fitness, faith, and fatherhood. Start here."
              icon="Download"
              cta={{ 
                text: "Get the Playbook", 
                href: "/playbook",
                variant: "goldSolid"
              }}
            />
            
            <Card 
              title="Divine Fatherhood Circle"
              copy="$97/month - Brotherhood community, weekly calls, accountability, spiritual growth with like-minded fathers."
              icon="Users"
              cta={{ 
                text: "Join the Brotherhood", 
                href: "/circle",
                variant: "goldOutline"
              }}
            />
          </div>
          
          <div className="text-center mt-12">
            <Card 
              title="1:1 Purpose Discovery Intensive"
              copy="$997 - 30-day intensive with Sammy. Discover your divine calling, build your legacy blueprint, transform your fatherhood."
              icon="Crown"
              cta={{ 
                text: "Apply for Intensive", 
                href: "/intensive",
                variant: "goldSolid"
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-12">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              Kingdom Testimonies
            </h2>
            <p className="df-body text-df-white/80 mb-8 max-w-2xl mx-auto">
              When fathers discover they're crowned with purpose, everything changes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Testimonial 
              quote="I thought I was just getting stronger. Turns out God was building me for my divine calling. My children see the difference."
              author="Darius K."
              role="Father of 2 • Divine Fatherhood Circle"
            />
            
            <Testimonial 
              quote="DADDY STRENGTH DIFFERENT hit me deep. I'm not just raising kids - I'm raising world-changers. The legacy starts with me."
              author="Marcus J."
              role="Single Father • Purpose Discovery Graduate"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <NewsletterForm 
        title="Ready to discover your divine calling?"
        subtitle="Join 5,000+ fathers walking in purpose. Get the FREE 'Crowned Father' starter guide and weekly kingdom wisdom."
        placeholder="Enter your email to get started"
        buttonText="Crown Me With Purpose"
      />
    </>
  )
}