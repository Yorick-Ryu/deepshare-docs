import '../globals.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { LanguageSwitcher } from '../_components/language-switcher'

export const metadata = {
  metadataBase: new URL('https://docs.deepshare.app'),
  title: {
    default: 'DeepShare 文档 - AI对话导出Word | 公式复制 | 对话截图',
    template: '%s | DeepShare'
  },
  description: 'DeepShare - 一键从DeepSeek、ChatGPT、Gemini、豆包等AI对话导出排版精美的Word文档，复制其中的公式；支持DeepSeek对话长截图。免费开源浏览器插件。',
  keywords: ['DeepShare', 'ChatGPT转Word', 'DeepSeek转Word', 'Gemini转Word',  'Deep Research导出Word', '豆包转Word', 'AI对话导出', '公式复制', 'LaTeX', '导出Word', '浏览器插件'],
  authors: [{ name: 'DeepShare Team' }],
  creator: 'DeepShare',
  publisher: 'DeepShare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://docs.deepshare.app',
    title: 'DeepShare 文档 - AI对话导出Word | 公式复制 | 对话截图',
    description: '一键从DeepSeek、ChatGPT、Gemini、豆包等AI对话导出排版精美的Word文档，复制其中的公式；支持DeepSeek对话长截图。',
    siteName: 'DeepShare',
    images: ['https://docs.deepshare.app/images/cover.png'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en-US': '/en/',
      'x-default': '/',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepShare 文档',
    description: 'AI对话导出Word | 公式复制 | 对话截图',
    images: ['https://docs.deepshare.app/images/cover.png'],
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
}

const banner = (
  <Banner storageKey="deepshare-banner">
    <a href="/usage/gemini-deep-research-to-word">
      🎉 DeepShare现已支持Gemini Deep Research导出Word文档！
    </a>
  </Banner>
)
const navbar = (
  <Navbar
    logo={
      <>
        <img src="/images/deepshare-icon.svg" alt="Logo" width={40} height={40} fetchPriority="high" />
        <span style={{ marginLeft: '.4em', fontWeight: 800, fontSize: '1.2em' }}>
          DeepShare
        </span>
      </>
    }
    projectLink="https://github.com/Yorick-Ryu/deep-share"
  >
    <LanguageSwitcher />
  </Navbar>
)
const footer = <Footer>MIT {new Date().getFullYear()} © DeepShare.</Footer>

export default async function ZhLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://docs.deepshare.app/#organization',
        name: 'DeepShare',
        url: 'https://docs.deepshare.app/',
        logo: 'https://docs.deepshare.app/images/deepshare-icon.svg',
        email: 'contact@deepshare.app',
        sameAs: [
          'https://ds.rick216.cn/',
          'https://www.deepshare.app/converter',
          'https://github.com/Yorick-Ryu/deep-share',
          'https://chromewebstore.google.com/detail/omnaecaamcabmnbjnpjpecoaalfgidop',
          'https://microsoftedge.microsoft.com/addons/detail/deepshare/pdccjnppfegekpnhfljbngammgfbcofm',
          'https://addons.mozilla.org/firefox/addon/deepshare/'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://docs.deepshare.app/#website',
        url: 'https://docs.deepshare.app/',
        name: 'DeepShare 文档',
        inLanguage: 'zh-CN',
        description: 'DeepShare 官方文档，提供 AI 对话导出 Word、AI 公式复制、DeepSeek 长截图、Markdown 转 Word 和浏览器插件安装教程。',
        publisher: {
          '@id': 'https://docs.deepshare.app/#organization'
        }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://docs.deepshare.app/#software',
        name: 'DeepShare',
        url: 'https://docs.deepshare.app/',
        operatingSystem: 'Windows, macOS, Linux, ChromeOS',
        applicationCategory: 'BrowserExtension',
        applicationSubCategory: 'AI chat export tool',
        browserRequirements: 'Chrome, Microsoft Edge, Firefox, Quark Browser, or another Chromium-compatible browser',
        isAccessibleForFree: true,
        downloadUrl: [
          'https://microsoftedge.microsoft.com/addons/detail/deepshare/pdccjnppfegekpnhfljbngammgfbcofm',
          'https://chromewebstore.google.com/detail/omnaecaamcabmnbjnpjpecoaalfgidop',
          'https://addons.mozilla.org/firefox/addon/deepshare/'
        ],
        description: 'DeepShare 是浏览器插件，可将 DeepSeek、ChatGPT、Gemini、豆包、Kimi、元宝等 AI 对话转换为 Word 文档，并支持公式复制和 DeepSeek 长截图。',
        featureList: [
          'AI 对话导出 Word',
          'DeepSeek 对话导出 Word 和长截图',
          'ChatGPT、Gemini、豆包、Kimi、元宝、千问等平台内容转 Word',
          'AI 对话公式复制为 LaTeX 或 MathML',
          'Markdown 和 AI 回答内容转换为 Word 文档'
        ],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        publisher: {
          '@id': 'https://docs.deepshare.app/#organization'
        }
      }
    ]
  };

  return (
    <html lang="zh" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Yorick-Ryu/deepshare-docs/tree/main/"
          footer={footer}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </Layout>
      </body>
    </html>
  )
}
