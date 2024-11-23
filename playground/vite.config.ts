import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4444,
  },
  optimizeDeps: {
    include: ['vue', 'ant-design-vue', '@mylib/utils', '@mylib/ui', '@mylib/hooks'],
  },
});
