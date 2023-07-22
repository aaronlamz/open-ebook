import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qiankun",
  description: "微前端实践指南",
  base: '/open-course/qiankun/',
  outDir: './.vitepress/dist/qiankun',
  head: [['link', { rel: 'icon', href: '/open-course/qiankun/qiankun.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/qiankun.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/setup/introduction.md' }
    ],
    sidebar: [
      {
        text: '基础入门',
        items: [
          { text: '简介', link: '/setup/introduction.md' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aaronlamz/open-course' }
    ]
  }
})
