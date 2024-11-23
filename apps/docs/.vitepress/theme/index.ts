import DefaultTheme from 'vitepress/theme';
import '@mylib/ui/dist/styles/index.css';
import { useGlobalComp } from './useGlobalComp';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    useGlobalComp(app);
  },
};
