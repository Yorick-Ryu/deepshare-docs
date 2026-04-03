import 'nextra-theme-docs/style.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
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
        <img src="/images/deepshare-icon.svg" alt="Logo" width={40} height={40} />
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
    '@type': 'SoftwareApplication',
    name: 'DeepShare',
    operatingSystem: 'Windows, macOS, Linux, ChromeOS',
    applicationCategory: 'BrowserExtension',
    description: 'One-click export beautifully formatted Word documents from DeepSeek, ChatGPT, Gemini, and other AI chats.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
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
