import { AddictiveBrandStory } from '@/components/divine-fatherhood/addictive-brand-story'

export default function BrandStoryPage() {
  return <AddictiveBrandStory />
}

export const metadata = {
  title: 'Building Stronger Fathers, Shaping Better Futures | Divine Fatherhood',
  description: 'The authentic journey from clouded vision to crystal clear purpose. Culturally relevant fitness and fatherhood guidance for African-American fathers.',
  openGraph: {
    title: 'Building Stronger Fathers, Shaping Better Futures',
    description: 'From "My vision was clouded" to "Finally, someone who gets it" - The transformation story that changes everything.',
    images: ['/images/hero-main.png'],
  },
}