import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
export default defineConfig({
  // 输入文件
  input: 'src/index.ts',
  // 输出配置
  output: [
    {
      // CommonJS 格式输出
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      // ES 模块格式输出
      file: 'dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      // 指定 tsconfig 文件
      tsconfig: './tsconfig.json',
    }),
  ],
});
