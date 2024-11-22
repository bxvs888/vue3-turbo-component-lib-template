import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '组件库模板文档',
  description: '一个基于 Vue3 的组件库和工具集',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '其他', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/guide/index' },
          { text: '安装', link: '/guide/install' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huangmingfu/vue3-turbo-component-lib-template' }
    ]
  }
});
