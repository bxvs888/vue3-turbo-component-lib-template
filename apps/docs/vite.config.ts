import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/docs'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import ".vitepress/theme/styles/variables.scss";`
      }
    }
  }
});
