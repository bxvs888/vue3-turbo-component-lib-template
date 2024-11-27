import DefaultTheme from 'vitepress/theme';
// 引入UI库的样式
import '@mylib/ui/style.css';
import { useGlobalComp } from './useGlobalComp';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    useGlobalComp(app);
  },
};
