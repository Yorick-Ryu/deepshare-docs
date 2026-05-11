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

const siteUrl = 'https://docs.deepshare.app'

const withTrailingSlash = (path) => {
  if (path === '/') return '/'
  return path.endsWith('/') ? path : `${path}/`
}

const withoutTrailingSlash = (path) => {
  if (path === '/') return '/'
  return path.endsWith('/') ? path.slice(0, -1) : path
}

const languageAlternatesFor = (path) => {
  const normalizedPath = withoutTrailingSlash(path)
  const isEnglishPath = normalizedPath === '/en' || normalizedPath.startsWith('/en/')
  const zhPath = isEnglishPath
    ? normalizedPath.replace(/^\/en/, '') || '/'
    : normalizedPath
  const enPath = zhPath === '/' ? '/en' : `/en${zhPath}`

  return [
    {
      href: `${siteUrl}${withTrailingSlash(zhPath)}`,
      hreflang: 'zh-CN',
      hrefIsAbsolute: true,
    },
    {
      href: `${siteUrl}${withTrailingSlash(enPath)}`,
      hreflang: 'en-US',
      hrefIsAbsolute: true,
    },
    {
      href: `${siteUrl}${withTrailingSlash(zhPath)}`,
      hreflang: 'x-default',
      hrefIsAbsolute: true,
    },
  ]
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'out',
  generateIndexSitemap: false,
  exclude: ['/icon.svg'],
  transform: async (config, path) => {
    const normalizedPath = withoutTrailingSlash(path)
    const isHome = normalizedPath === '/' || normalizedPath === '/en'
    const isCore = [
      '/platforms',
      '/en/platforms',
      '/installation',
      '/en/installation',
      '/usage',
      '/en/usage',
      '/pricing',
      '/en/pricing',
    ].includes(normalizedPath)
    const isUsagePage = normalizedPath.includes('/usage/')

    return {
      loc: path,
      changefreq: isHome || isCore ? 'weekly' : 'monthly',
      priority: isHome ? 1.0 : isCore ? 0.8 : isUsagePage ? 0.7 : 0.5,
      lastmod: new Date().toISOString(),
      alternateRefs: languageAlternatesFor(path),
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
