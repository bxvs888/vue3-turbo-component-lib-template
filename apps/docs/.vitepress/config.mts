import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '组件库模板文档',
  description: '一个基于 Vue3 的组件库和工具集',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: '其他', link: '/markdown-examples' },
      { text: '博客', link: 'https://huangmingfu.github.io/my-blog' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [{ text: '介绍', link: '/guide/index' }],
      },
      {
        text: '组件',
        items: [{ text: 'Button 按钮', link: '/packages/ui/button' }],
      },
      {
        text: '工具函数',
        items: [{ text: '字符串工具', link: '/packages/utils/string' }],
      },
      {
        text: 'Hooks',
        items: [{ text: 'useCounter 计数器', link: '/packages/hooks/useCounter' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huangmingfu/vue3-turbo-component-lib-template' },
    ],
  },
});
