import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Navigation, Footer } from '@/components/divine-fatherhood'
import { Analytics } from '@/components/analytics'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Divine Fatherhood | Crowned with Purpose',
  description: 'Faith, Fitness, Fatherhood. MrSixPack helps fathers train for purpose, not ego.',
  keywords: 'Divine Fatherhood,Daddy Strength,Faith and Fitness,Black Fathers,Purpose over Pressure',
  authors: [{ name: 'MrSixPack' }],
  creator: 'MrSixPack',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://divinefatherhood.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Divine Fatherhood',
    title: 'Divine Fatherhood | Crowned with Purpose',
    description: 'Faith, Fitness, Fatherhood. MrSixPack helps fathers train for purpose, not ego.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Divine Fatherhood - Crown over kettlebell in black and gold',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divine Fatherhood | Crowned with Purpose',
    description: 'Faith, Fitness, Fatherhood. MrSixPack helps fathers train for purpose, not ego.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        
        {/* DNS prefetch for faster loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-df-gold focus:text-df-bg focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        
        <Navigation />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}