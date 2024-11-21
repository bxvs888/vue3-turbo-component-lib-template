import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vue3 Component Library',
  description: 'A Vue 3 Component Library with TypeScript',
  base: '/',
  outDir: '.vitepress/dist',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/packages/ui/' },
      {
        text: '工具包',
        items: [
          { text: 'UI 组件库', link: '/packages/ui/' },
          { text: '工具函数库', link: '/packages/utils/' },
          {
            text: 'TypeScript 配置',
            link: '/packages/typescript-config/'
          },
          { text: 'ESLint 配置', link: '/packages/eslint-config/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '主题', link: '/guide/theme' }
          ]
        }
      ],
      '/packages/': [
        {
          text: '组件库',
          items: [{ text: '组件总览', link: '/packages/ui/' }]
        },
        {
          text: '工具包',
          items: [
            { text: '工具函数库', link: '/packages/utils/' },
            {
              text: 'TypeScript 配置',
              link: '/packages/typescript-config/'
            },
            {
              text: 'ESLint 配置',
              link: '/packages/eslint-config/'
            }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/your-repo' }]
  }
});
