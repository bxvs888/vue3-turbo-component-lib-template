import DefaultTheme from 'vitepress/theme';
import type { App } from 'vue';
import { install } from '@vue3-lib/ui';
import '@vue3-lib/ui/dist/styles/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    install(app);
  }
};
