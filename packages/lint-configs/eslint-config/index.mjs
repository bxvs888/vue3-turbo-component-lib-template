// 导入 eslint 配置定义工具
import { defineConfig } from 'eslint-define-config';

/** @type {import("eslint").Config} */
export default defineConfig({
  // 指定环境
  env: {
    browser: true, // 浏览器环境
    es2021: true, // ES2021 特性
    node: true, // Node.js 环境
  },
  // 继承的配置
  extends: [
    'eslint:recommended', // ESLint 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    'plugin:vue/vue3-recommended', // Vue3 推荐规则
    'prettier', // Prettier 规则，需要放在最后以覆盖之前的格式化规则
  ],
  // 指定解析器
  parser: 'vue-eslint-parser', // 用于解析 .vue 文件
  // 解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser', // TypeScript 解析器
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module', // 使用 ES 模块
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
  },
  // 具体规则配置
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭组件名必须多单词的限制
  },
});
