// 导入必要的插件
const typescript = require('@rollup/plugin-typescript'); // TypeScript 编译插件
const babel = require('@rollup/plugin-babel'); // Babel 转换插件
const { terser } = require('rollup-plugin-terser'); // 代码压缩插件
const { nodeResolve } = require('@rollup/plugin-node-resolve'); // 解析 node_modules 中的模块
const path = require('path'); // Node.js 路径模块

// 定义需要打包的包列表
const packages = ['hooks', 'directives', 'utils'];

// 解析文件路径的辅助函数
const resolveFile = (...args) => path.resolve(__dirname, ...args);

/**
 *
 * @param {*} pkg // 包名
 * @param {*} options.babel // 是否将现代 JavaScript 代码转换为向后兼容的版本
 * @param {*} options.minify // 是否压缩
 * @param {*} options.format // 输出格式
 * @returns {Array} Plugins
 */
const createPlugins = (pkg, options = {}) =>
  [
    nodeResolve({
      extensions: ['.ts', '.js'],
      moduleDirectories: ['node_modules', 'src'],
    }),
    typescript({
      ...(options.format === 'esm' && {
        tsconfig: resolveFile(`./tsconfig.json`),
        declarationDir: resolveFile(`dist/${pkg}/es`),
        include: [
          resolveFile(`../packages/${pkg}/src/**/*.ts`),
          resolveFile(`../packages/${pkg}/src/**/*.d.ts`),
        ],
      }),
      ...(options.format === 'cjs' && { declaration: false }),
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-typescript', options.babel && '@babel/preset-env'].filter(Boolean),
      extensions: ['.js', '.ts'],
    }),
    options.minify && terser(),
  ].filter(Boolean);

const createConfig = (pkg) => {
  const input = resolveFile(`../packages/${pkg}/src/index.ts`);
  const external = ['vue'];
  return [
    // ESM 配置
    {
      input,
      output: {
        file: resolveFile(`dist/${pkg}/es/index.mjs`),
        format: 'esm',
        exports: 'named',
      },
      external,
      plugins: createPlugins(pkg, { format: 'esm', babel: false, minify: false }),
    },
    // CommonJS 配置
    {
      input,
      output: {
        file: resolveFile(`dist/${pkg}/lib/index.js`),
        format: 'cjs',
        exports: 'named',
      },
      external,
      plugins: createPlugins(pkg, { format: 'cjs', babel: false, minify: false }),
    },
  ];
};

// 为每个包创建配置
module.exports = packages.flatMap(createConfig);
