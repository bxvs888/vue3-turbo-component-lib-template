const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const path = require('path');

const packages = ['hooks', 'directives', 'utils'];
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
