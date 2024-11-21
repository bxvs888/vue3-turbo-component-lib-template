import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import type { Component } from 'vue';
import '@vue3-lib/ui/dist/style.css';
import './styles/main.scss';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    import('@vue3-lib/ui').then((module: Record<string, Component>) => {
      Object.entries(module).forEach(([name, component]) => {
        if (name !== 'default') {
          app.component(name, component);
        }
      });
    });
  }
} satisfies Theme;
