// 引入vue模版的eslint
// vue文件解析器
import vueParser from 'vue-eslint-parser';

import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';
// ts-eslint解析器，使 eslint 可以解析 ts 语法
import tseslint from 'typescript-eslint';

export default tseslint.config({
  ignores: ['node_modules', 'dist', 'dist*'],
  files: ['**/**/*.ts', '**/**/*.tsx', '**/**/*.vue'],
  // tseslint.config添加了extends扁平函数，直接用。否则是eslint9.0版本是没有extends的
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
  ],
  plugins: {
    prettier,
  },
  languageOptions: {
    parser: vueParser, // 使用vue解析器，这个可以识别vue文件
    parserOptions: {
      parser: tseslint.parser, // 在vue文件上使用ts解析器
      sourceType: 'module',
      ecmaVersion: 2020,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    // Prettier 错误提示
    'prettier/prettier': 'error',
    // 允许使用转义字符
    'no-useless-escape': 0,
    // 允许未定义的变量（通常用于全局变量）
    'no-undef': 0,
    // 允许在 setup 中解构 props
    'vue/no-setup-props-destructure': 0,
    // setup 中的变量检查
    'vue/script-setup-uses-vars': 1,
    // 允许使用保留的组件名
    'vue/no-reserved-component-names': 0,
    // TypeScript 相关规则
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    // Vue 自定义事件名称规则
    'vue/custom-event-name-casing': 0,
    // 允许在定义前使用变量
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    // TypeScript 注释相关规则
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 未使用变量的规则
    '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
    // 函数括号前的空格规则
    'space-before-function-paren': 0,

    // Vue 模板相关规则
    'vue/attributes-order': 0,
    'vue/one-component-per-file': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-default-prop': 0,
    'vue/require-explicit-emits': 0,
    // HTML 标签自闭合规则
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'always', // 空元素总是自闭合
          normal: 'never', // 普通元素不自闭合
          component: 'always', // 组件总是自闭合
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 允许单个单词的组件名
    'vue/multi-word-component-names': 0,
    // 允许使用 v-html
    'vue/no-v-html': 0,
    // transition 组件内的 toggle 规则
    'vue/require-toggle-inside-transition': 0,
    // 允许使用空对象类型 {}
    '@typescript-eslint/no-empty-object-type': 0,
  },
});
