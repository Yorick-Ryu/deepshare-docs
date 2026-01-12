import { Cards } from 'nextra/components'
import meta from '../usage/_meta.js'

// 根据页面 ID 自动分配图标
function getIconForPage(pageId, icons) {
  // Word 导出功能
  if (pageId.includes('to-word')) {
    return icons.DocumentIcon
  }
  // Markdown 导出功能
  if (pageId.includes('to-md')) {
    return icons.MarkdownIcon
  }
  // 图片导出功能
  if (pageId.includes('to-image')) {
    return icons.PictureIcon
  }
  // 公式相关
  if (pageId.includes('formula')) {
    return icons.InformationCircleIcon
  }
  // 模版和样式相关
  if (pageId.includes('template') || pageId.includes('remove-')) {
    return icons.BrushIcon
  }
  // MCP 服务器
  if (pageId.includes('mcp')) {
    return icons.LightningIcon
  }
  // Claude Skill
  if (pageId.includes('claude-skill')) {
    return icons.StarsIcon
  }
  // 默认图标
  return icons.InformationCircleIcon
}

export function OverviewPage({ filePath, icons }) {
  // 从文件路径推断当前目录
  const currentDir = filePath.split('/').slice(0, -1).join('/')
  const sectionName = currentDir.split('/').pop()
  
  // 动态生成页面列表
  const pages = Object.entries(meta)
    .filter(([key]) => key !== 'index') // 排除索引页面本身
    .map(([id, title]) => ({
      id,
      title,
      icon: getIconForPage(id, icons),
      href: `/${sectionName}/${id}`
    }))

  return (
    <Cards>
      {pages.map((page) => {
        const Icon = page.icon
        return (
          <Cards.Card
            key={page.id}
            icon={<Icon />}
            title={page.title}
            href={page.href}
          />
        )
      })}
    </Cards>
  )
}
