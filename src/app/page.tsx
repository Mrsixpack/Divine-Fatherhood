'use client'

import { useEffect } from 'react'
import { 
  Hero, 
  Card, 
  YouTubeGrid, 
  NewsletterForm,
  Testimonial 
} from '@/components/divine-fatherhood'
import { trackEvent } from '@/lib/utils'


export default function HomePage() {
  useEffect(() => {
    trackEvent('view_home')
  }, [])

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="Daddy Strength Different"
        subtitle="Train for purpose, not ego. Pray • Lift • Lead."
        ctaPrimary={{ 
          text: "Get the Divine Dad Playbook", 
          href: "/playbook",
          variant: "goldSolid"
        }}
        ctaSecondary={{ 
          text: "Watch on YouTube", 
          href: "/youtube",
          variant: "goldOutline"
        }}
        badge="MrSixPack • Divine Fatherhood"
      />

      {/* Framework Section */}
      <section className="df-section">
        <div className="df-container">
          <div className="max-w-3xl mx-auto">
            <Card 
              title="The Framework"
              copy="Three moves that turn workouts into legacy: Pray. Lift. Lead."
              icon="Dumbbell"
            />
          </div>
        </div>
      </section>

      {/* YouTube Grid */}
      <YouTubeGrid 
        channelId={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUTUBE_CHANNEL_ID"}
        playlists={["Featured", "Daddy Strength Diaries"]}
        cta={{ 
          text: "Subscribe", 
          href: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@HANDLE",
          variant: "goldSolid"
        }}
      />

      {/* Feature Cards */}
      <section className="df-section">
        <div className="df-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card 
              title="Join the Circle"
              copy="Weekly calls. Ritual systems. Accountability. Coach: MrSixPack."
              icon="Users"
              cta={{ 
                text: "Apply for Coaching", 
                href: "/coaching",
                variant: "goldOutline"
              }}
            />
            
            <Card 
              title="Digital Products"
              copy="Simple tools that ship results. Workout plans, meal templates, and accountability systems."
              icon="Download"
              cta={{ 
                text: "Shop Products", 
                href: "/products",
                variant: "goldOutline"
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
              What Fathers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Testimonial 
              quote="Purpose turned my gym time into father time."
              author="Darius K."
              role="Father of 2"
            />
            
            <Testimonial 
              quote="Finally found a program that builds character, not just muscle."
              author="Marcus J."
              role="Single Father"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <NewsletterForm 
        title="Lead your home with purpose"
        subtitle="Get the 7 Rituals Playbook. Free."
        placeholder="Enter your email"
        buttonText="Send me the Playbook"
      />
    </>
  )
}