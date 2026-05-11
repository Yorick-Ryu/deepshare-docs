const aiAndSearchCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'PerplexityBot',
  'Applebot',
  'Bytespider',
  'Bingbot',
  'Googlebot',
  'Baiduspider',
  'Sogou web spider',
  '360Spider',
  'YisouSpider',
]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://docs.deepshare.app',
  generateRobotsTxt: true,
  outDir: 'out',
  generateIndexSitemap: false,
  exclude: ['/icon.svg'],
  transform: async (config, path) => {
    const isHome = path === '/' || path === '/en/'
    const isCore = [
      '/platforms/',
      '/en/platforms/',
      '/installation/',
      '/en/installation/',
      '/usage/',
      '/en/usage/',
      '/pricing/',
      '/en/pricing/',
    ].includes(path)

    return {
      loc: path,
      changefreq: isHome || isCore ? 'weekly' : 'monthly',
      priority: isHome ? 1.0 : isCore ? 0.8 : path.includes('/usage/') ? 0.7 : 0.5,
      lastmod: new Date().toISOString(),
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: ['https://docs.deepshare.app/sitemap.xml'],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...aiAndSearchCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
  },
}
