import DefaultTheme from 'vitepress/theme';
import Demo from '../components/Demo.vue';
import '@mylib/ui/dist/styles/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo);
  },
};
