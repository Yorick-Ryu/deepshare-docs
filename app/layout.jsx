import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: {
    default: 'DeepShare 文档 - AI对话导出Word | 公式复制 | 对话截图',
    template: '%s | DeepShare'
  },
  description: 'DeepShare - 一键从DeepSeek、ChatGPT、豆包等AI对话导出排版精美的Word文档，复制其中的公式；支持DeepSeek对话长截图。免费开源浏览器插件。',
  keywords: ['DeepShare', 'DeepSeek', 'ChatGPT转Word', 'DeepSeek转Word', 'AI对话导出', '公式复制', 'LaTeX', 'Word导出', '截图分享', '浏览器插件'],
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
    url: 'https://docs.ds.rick216.cn',
    title: 'DeepShare 文档 - AI对话导出Word | 公式复制 | 对话截图',
    description: '一键从DeepSeek、ChatGPT等AI对话导出排版精美的Word文档，复制其中的公式；支持DeepSeek对话长截图。',
    siteName: 'DeepShare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepShare 文档',
    description: 'AI对话导出Word | 公式复制 | 对话截图',
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
 
const banner = <Banner storageKey="deepshare-banner">🎉 DeepShare 现已支持 Word 文档一键导出功能！</Banner>
const navbar = (
  <Navbar
    logo={
      <>
        <img src="/images/deepshare-icon.svg" alt="Logo" width={40} height={40}/>
        <span style={{ marginLeft: '.4em', fontWeight: 800, fontSize: '1.2em' }}>
          DeepShare
        </span>
      </>
    }
    projectLink="https://github.com/Yorick-Ryu/deep-share"
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © DeepShare.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="zh"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Yorick-Ryu/deep-share"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}