'use client'

import { useEffect } from 'react'
import { UltraEpicExperience } from '@/components/divine-fatherhood/ultra-epic-experience'
import { 
  Card, 
  YouTubeGrid, 
  NewsletterForm,
  Testimonial
} from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'

export default function HomePage() {
  useEffect(() => {
    trackEvent('view_home')
    
    // Smooth scroll behavior for the epic experience
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <>
      {/* 🔥 ULTRA EPIC 10/10 CINEMATIC MASTERPIECE EXPERIENCE 🔥 */}
      <UltraEpicExperience />

      {/* YouTube Grid */}
      <section className="df-section">
        <YouTubeGrid 
          channelId={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUTUBE_CHANNEL_ID"}
          playlists={["Divine Calling Series", "Daddy Strength Diaries", "Faith & Fitness"]}
          cta={{ 
            text: "Subscribe to the Movement", 
            href: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@divinefatherhood",
            variant: "goldSolid"
          }}
        />
      </section>

      {/* The Divine Trinity Section */}
      <section className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-16">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              The Divine Trinity
            </h2>
            <p className="df-body text-df-white/80 max-w-3xl mx-auto">
              Three foundations that transformed my life from chasing likes to building legacy. 
              When these align, ordinary fathers become extraordinary kings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card 
              title="Faith Foundation"
              copy="Prayer isn't just talking to God - it's receiving battle plans. Every morning I ask: 'What kind of king do my sons need me to be today?' The answer guides everything."
              icon="Heart"
            />
            
            <Card 
              title="Fitness Discipline"
              copy="The gym isn't just for abs anymore. It's where I build the physical strength to carry my family and the mental toughness to lead them. Daddy strength hits different."
              icon="Dumbbell"
            />
            
            <Card 
              title="Fatherhood Legacy"
              copy="I'm not raising kids - I'm raising future world-changers. Every decision I make today echoes in their tomorrow. That's the weight and honor of divine fatherhood."
              icon="Crown"
            />
          </div>
        </div>
      </section>

      {/* Service Tiers Section */}
      <section className="df-section">
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

      {/* Transformation Testimonies */}
      <section className="df-section bg-white/5">
        <div className="df-container">
          <div className="text-center mb-12">
            <h2 className="df-heading df-h2 df-crown-glow mb-4">
              Fathers Finding Their Crown
            </h2>
            <p className="df-body text-df-white/80 mb-8 max-w-2xl mx-auto">
              Real men. Real transformations. Real legacy being built one father at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Testimonial 
              quote="Sammy helped me realize I wasn't just working out - I was training for the most important role of my life. My daughter now sees a king, not just a dad who goes to the gym."
              author="Carlos R."
              role="Father of 1 • Following the Journey"
            />
            
            <Testimonial 
              quote="'Daddy Strength Different' changed my whole perspective. I stopped chasing PRs and started building character. My boys are watching everything I do differently now."
              author="Mike T."
              role="Father of 2 • Divine Fatherhood Follower"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <NewsletterForm 
        title="Ready to walk in your divine purpose?"
        subtitle="Join the movement of fathers discovering they're not just dads - they're kings raising world-changers. Get weekly wisdom, real talk, and the blueprint for building legacy."
        placeholder="Enter your email to start your evolution"
        buttonText="Crown Me With Purpose"
      />
    </>
  )
}