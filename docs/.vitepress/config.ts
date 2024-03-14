import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath } from 'url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "H Element",
  description: "A Vue3 UI Framework",
  base: '/hz-element/',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
        md.use(containerPreview)
        md.use(componentPreview)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Component', link: '/component/button' }
    ],

    sidebar: [
      {
        text: 'Components List',
        items: [
          { text: 'Button 按钮', link: '/component/button' },
          { text: 'Collapse 折叠面板', link: '/component/collapse' },
          { text: 'Tooltip 文字提示', link: '/component/tooltip' },
          { text: 'Dropdown 下拉菜单', link: '/component/dropdown' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hezhen20/hz-element' }
    ]
  }
})
