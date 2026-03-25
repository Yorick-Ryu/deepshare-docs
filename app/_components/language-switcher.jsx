'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

  function handleChange(e) {
    const lang = e.target.value
    if (lang === 'en') {
      const enPath = '/en' + (pathname === '/' ? '' : pathname)
      router.push(enPath)
    } else {
      const zhPath = pathname.replace(/^\/en/, '') || '/'
      router.push(zhPath)
    }
  }

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <Globe
        size={14}
        strokeWidth={1.5}
        style={{ position: 'absolute', left: '0.5rem', pointerEvents: 'none', opacity: 0.8 }}
      />
      <select
        value={isEnglish ? 'en' : 'zh'}
        onChange={handleChange}
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          opacity: 0.8,
          background: 'transparent',
          border: '1px solid currentColor',
          borderRadius: '0.375rem',
          padding: '0.25rem 0.5rem 0.25rem 1.75rem',
          cursor: 'pointer',
          color: 'inherit',
          appearance: 'none',
        }}
      >
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}
