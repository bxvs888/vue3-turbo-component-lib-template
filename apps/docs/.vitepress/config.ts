import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Vue3 组件库",
    description: "基于 Vue 3 的组件库",
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/' },
            { text: '组件', link: '/components/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '介绍',
                    items: [
                        { text: '快速开始', link: '/guide/' }
                    ]
                }
            ],
            '/components/': [
                {
                    text: '基础组件',
                    items: [
                        { text: 'Button 按钮', link: '/components/button' }
                    ]
                }
            ]
        }
    }
}) 