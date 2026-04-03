# DeepShare 文档

这是 [DeepShare](https://github.com/Yorick-Ryu/deep-share) 的官方文档网站。

## 关于 DeepShare

DeepShare 是一款专为 AI 用户设计的轻量级浏览器插件，一键复制 DeepSeek、ChatGPT、豆包等AI对话的公式，导出排版精美的Word文档，支持 DeepSeek 长对话截图分享。

## 主要功能

- 📄 **导出为Word文档** - 将 AI 回答一键转换为排版精美的Word文档
- 🔢 **公式复制** - 点击任意数学公式即可复制其LaTeX代码
- 📸 **AI对话长截图** - 轻松截取完整对话内容（DeepSeek专属）
- 🎨 **自定义水印** - 添加个性化水印
- 🆓 **完全免费** - 大部分功能永久免费，无广告

## 技术栈

本文档网站使用以下技术构建：

- [Next.js](https://nextjs.org/) - React 框架
- [Nextra](https://nextra.site/) - 文档主题
- [MDX](https://mdxjs.com/) - Markdown + JSX

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看文档。

### 构建

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 文档结构

```
app/
├── page.mdx              # 首页
├── features/
│   └── page.mdx          # 功能介绍
├── installation/
│   └── page.mdx          # 安装指南
├── usage/
│   └── page.mdx          # 使用教程
├── pricing/
│   └── page.mdx          # 购买与定价
├── faq/
│   └── page.mdx          # 常见问题
├── privacy/
│   └── page.mdx          # 隐私政策
├── terms/
│   └── page.mdx          # 使用条款
├── layout.jsx            # 布局配置
└── _meta.json            # 导航配置
```

## 贡献

欢迎提交 Pull Request 来改进文档！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 相关链接

- [DeepShare 主页](https://ds.rick216.cn/)
- [GitHub 仓库](https://github.com/Yorick-Ryu/deep-share)
- [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/deepshare/pdccjnppfegekpnhfljbngammgfbcofm)
- [Chrome 商店](https://chromewebstore.google.com/detail/omnaecaamcabmnbjnpjpecoaalfgidop)
- [Firefox 商店](https://addons.mozilla.org/firefox/addon/deepshare/)
- [在线转换器](https://ds.rick216.cn/converter.html)

## 许可证

本文档采用 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) 许可证。

## 联系我们

- 📧 邮箱：yoricker@foxmail.com
- 💬 微信：yorick_cn（备注：ds）
- 🐛 GitHub Issues: [提交问题](https://github.com/Yorick-Ryu/deep-share/issues)

---

© 2025 DeepShare. All rights reserved.

