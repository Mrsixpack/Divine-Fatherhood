/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration for Vercel deployment
  experimental: {
    forceSwcTransforms: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['page.gensparksite.com'],
  },
}

module.exports = nextConfig