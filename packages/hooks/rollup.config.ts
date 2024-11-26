// 导入 TypeScript 插件
import typescript from '@rollup/plugin-typescript';
// 导入 Node 解析插件
import { nodeResolve } from '@rollup/plugin-node-resolve';

// 导出 Rollup 配置
export default {
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
  // 插件配置
  plugins: [
    // 解析 Node 模块
    nodeResolve(),
    // TypeScript 插件配置
    typescript({
      // 指定 tsconfig 文件
      tsconfig: './tsconfig.json',
    }),
  ],
  // 排除外部依赖，避免重复打包
  external: ['vue'],
};
