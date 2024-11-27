import { defineConfig } from 'vitepress';

export const en = defineConfig({
  lang: 'en-US',
  title: 'Component Library Template Documentation',
  description: 'A Vue3-based Component Library and Utility Collection',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Others', link: '/markdown-examples' },
      { text: 'Blog', link: 'https://huangmingfu.github.io/my-blog' },
    ],
    sidebar: [
      {
        text: 'Quick Start',
        items: [{ text: 'Introduction', link: 'en/guide/index' }],
      },
      {
        text: 'Components (@mylib/ui)',
        items: [
          { text: 'Button', link: 'en/packages/ui/button' },
          { text: 'Dialog', link: 'en/packages/ui/dialog' },
        ],
      },
      {
        text: 'Hooks (@mylib/hooks)',
        items: [{ text: 'useCounter', link: 'en/packages/hooks/useCounter' }],
      },
      {
        text: 'Directives (@mylib/directives)',
        items: [{ text: 'vFocus', link: 'en/packages/directives/vFocus' }],
      },
      {
        text: 'Utilities (@mylib/utils)',
        items: [{ text: 'String Utils', link: 'en/packages/utils/string' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huangmingfu/vue3-turbo-component-lib-template' },
    ],
  },
});
