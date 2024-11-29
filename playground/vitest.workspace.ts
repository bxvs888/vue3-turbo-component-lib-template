import { defineWorkspace } from 'vitest/config';

/**
 * @see https://cn.vitest.dev/guide/
 */
export default defineWorkspace([
  {
    test: {
      name: '@mylib/utils', // 测试名称
      root: './src/views/Utils/__test__', // 测试根目录
    },
  },
]);
