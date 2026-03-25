import 'nextra-theme-docs/style.css'

export default function RootLayout({ children }) {
  return (
    <html
      // Fallback lang; overridden by locale-specific layouts' metadata
      lang="zh"
      dir="ltr"
      suppressHydrationWarning
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
