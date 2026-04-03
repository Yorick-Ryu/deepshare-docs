import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
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

export default async function ZhLayout({ children }) {
  return (
    <Layout
        banner={banner}
        navbar={navbar}
        pageMap={await getPageMap()}
        docsRepositoryBase="https://github.com/Yorick-Ryu/deepshare-docs/tree/main/"
        footer={footer}
      >
        {children}
      </Layout>
  )
}