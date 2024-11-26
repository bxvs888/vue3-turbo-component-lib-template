import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, '../packages/ui/src'),
      'mylib/ui': resolve(__dirname, '../packages/ui/src'),
    },
  },
  server: {
    port: 4444,
  },
  optimizeDeps: {
    include: ['vue', 'ant-design-vue'],
  },
});
