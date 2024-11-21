import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vue3 Component Library',
  description: 'A Vue3 Component Library',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [{ text: 'Button', link: '/components/button' }]
        }
      ]
    }
  },
  vite: {
    ssr: {
      noExternal: ['@vue3-lib/ui']
    },
    resolve: {
      dedupe: ['vue']
    },
    optimizeDeps: {
      exclude: ['@vue3-lib/ui']
    }
  }
});
