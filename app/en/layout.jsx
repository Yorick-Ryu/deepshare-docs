import '../globals.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { LanguageSwitcher } from '../_components/language-switcher'

export const metadata = {
  metadataBase: new URL('https://docs.deepshare.app'),
  title: {
    default: 'DeepShare Docs - Export AI Chats to Word | Copy Formulas | Screenshots',
    template: '%s | DeepShare'
  },
  description: 'DeepShare - One-click export beautifully formatted Word documents from DeepSeek, ChatGPT, Gemini, and other AI chats. Copy formulas from AI conversations. Free open-source browser extension.',
  keywords: ['DeepShare', 'ChatGPT to Word', 'DeepSeek to Word', 'Gemini to Word', 'Deep Research export Word', 'AI chat export', 'copy formula', 'LaTeX', 'export Word', 'browser extension'],
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
    locale: 'en_US',
    url: 'https://docs.deepshare.app/en',
    title: 'DeepShare Docs - Export AI Chats to Word | Copy Formulas | Screenshots',
    description: 'One-click export beautifully formatted Word documents from DeepSeek, ChatGPT, Gemini, and other AI chats. Copy formulas from AI conversations.',
    siteName: 'DeepShare',
    images: ['https://docs.deepshare.app/images/cover.png'],
  },
  alternates: {
    canonical: '/en/',
    languages: {
      'en-US': '/en/',
      'zh-CN': '/',
      'x-default': '/',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepShare Docs',
    description: 'Export AI Chats to Word | Copy Formulas | Screenshots',
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
  <Banner storageKey="deepshare-banner-en">
    <a href="/en/usage/gemini-deep-research-to-word">
      🎉 DeepShare now supports exporting Gemini Deep Research to Word!
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

export default async function EnLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://docs.deepshare.app/#organization',
        name: 'DeepShare',
        url: 'https://docs.deepshare.app/en/',
        logo: 'https://docs.deepshare.app/images/deepshare-icon.svg',
        email: 'contact@deepshare.app',
        sameAs: [
          'https://ds.rick216.cn/index-en',
          'https://www.deepshare.app/converter-en',
          'https://github.com/Yorick-Ryu/deep-share',
          'https://chromewebstore.google.com/detail/omnaecaamcabmnbjnpjpecoaalfgidop',
          'https://microsoftedge.microsoft.com/addons/detail/deepshare/pdccjnppfegekpnhfljbngammgfbcofm',
          'https://addons.mozilla.org/firefox/addon/deepshare/'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://docs.deepshare.app/#website',
        url: 'https://docs.deepshare.app/en/',
        name: 'DeepShare Docs',
        inLanguage: 'en-US',
        description: 'Official DeepShare documentation for exporting AI chats to Word, copying AI formulas, capturing DeepSeek long screenshots, converting Markdown to Word, and installing the browser extension.',
        publisher: {
          '@id': 'https://docs.deepshare.app/#organization'
        }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://docs.deepshare.app/#software',
        name: 'DeepShare',
        url: 'https://docs.deepshare.app/en/',
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
        description: 'DeepShare is a browser extension for converting AI chats from DeepSeek, ChatGPT, Gemini, Doubao, Kimi, Yuanbao, and other AI platforms into Word documents, with formula copying and DeepSeek long screenshots.',
        featureList: [
          'Export AI chats to Word',
          'Export DeepSeek chats to Word and long screenshots',
          'Convert content from ChatGPT, Gemini, Doubao, Kimi, Yuanbao, Qwen, and other AI platforms to Word',
          'Copy formulas from AI chats as LaTeX or MathML',
          'Convert Markdown and pasted AI responses into Word documents'
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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap('/en')}
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
