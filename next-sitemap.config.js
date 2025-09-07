/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mrsixpackempire.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/production-ready', '/ultimate-homepage', '/brand-story', '/dopamine'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.mrsixpackempire.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority based on page importance
    const priorities = {
      '/': 1.0,
      '/visual-story': 0.9,
      '/ultimate': 0.9,
      '/playbook': 0.8,
      '/circle': 0.8,
      '/divine-calling': 0.7,
    }
    
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorities[path] || 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}