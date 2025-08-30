'use client'

import { Button } from '@/components/ui/button'
import { type YouTubeGridProps } from '@/types'
import { Play, Youtube } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import Image from 'next/image'

// Mock YouTube videos - replace with real YouTube API integration
const mockVideos = [
  {
    id: '1',
    title: 'Daddy Strength Different: Morning Crown Ritual',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '8:42',
    views: '12K',
    publishedAt: '3 days ago'
  },
  {
    id: '2', 
    title: 'Train for Purpose, Not Ego: Full Workout',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '15:30',
    views: '8.5K',
    publishedAt: '1 week ago'
  },
  {
    id: '3',
    title: 'Father-Son Workout: Building Legacy Together',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '12:15',
    views: '15K',
    publishedAt: '2 weeks ago'
  },
  {
    id: '4',
    title: 'Faith and Fitness: Prayer Before Lifting',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '6:20',
    views: '9.2K',
    publishedAt: '3 weeks ago'
  },
  {
    id: '5',
    title: 'Crowned with Purpose: My Story',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '18:45',
    views: '25K',
    publishedAt: '1 month ago'
  },
  {
    id: '6',
    title: 'Divine Dad Playbook: 7 Rituals Preview',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '10:30',
    views: '18K',
    publishedAt: '1 month ago'
  }
]

export function YouTubeGrid({ channelId, playlists, cta }: YouTubeGridProps) {
  const handleVideoClick = (videoId: string, videoTitle: string) => {
    trackEvent('view_youtube_hub', { 
      video_id: videoId,
      video_title: videoTitle 
    })
  }

  const handleSubscribeClick = () => {
    if (cta) {
      trackEvent('click_subscribe_youtube', { 
        text: cta.text,
        href: cta.href 
      })
    }
  }

  return (
    <section className="df-section">
      <div className="df-container">
        <div className="text-center mb-12">
          <h2 className="df-heading df-h2 df-crown-glow mb-4">
            Latest Videos
          </h2>
          <p className="df-body-lg text-df-white/90">
            New content weekly. Retention and ritual over hype.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockVideos.map((video) => (
            <div 
              key={video.id}
              className="group cursor-pointer"
              onClick={() => handleVideoClick(video.id, video.title)}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-df-gold text-df-bg rounded-full p-3">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <h3 className="font-semibold text-df-white mb-2 group-hover:text-df-gold transition-colors line-clamp-2">
                {video.title}
              </h3>
              
              <p className="text-sm text-df-white/60">
                {video.views} views • {video.publishedAt}
              </p>
            </div>
          ))}
        </div>
        
        {cta && (
          <div className="text-center">
            <Button
              size="xl"
              variant="goldSolid"
              onClick={handleSubscribeClick}
              asChild
            >
              <a href={cta.href} target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 mr-2" />
                {cta.text}
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}