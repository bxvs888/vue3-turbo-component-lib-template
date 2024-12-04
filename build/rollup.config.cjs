const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const path = require('path');

const packages = ['hooks', 'directives', 'utils'];
const resolveFile = (...args) => path.resolve(__dirname, ...args);

const createPlugins = (pkg, isESM = false) => [
  nodeResolve({
    extensions: ['.ts', '.js'],
    moduleDirectories: ['node_modules', 'src'],
  }),
  typescript({
    ...(isESM && {
      tsconfig: resolveFile(`./tsconfig.json`),
      declarationDir: resolveFile(`dist/${pkg}/es`),
      include: [
        resolveFile(`../packages/${pkg}/src/**/*.ts`),
        resolveFile(`../packages/${pkg}/src/**/*.d.ts`),
      ],
    }),
    ...(!isESM && { declaration: false }),
  }),
  babel({
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    extensions: ['.js', '.ts'],
  }),
  terser(),
];

const createConfig = (pkg) => {
  const input = resolveFile(`../packages/${pkg}/src/index.ts`);
  const external = ['vue'];

  return [
    // ESM 配置
    {
      input,
      output: {
        file: resolveFile(`dist/${pkg}/es/index.mjs`),
        format: 'es',
        exports: 'named',
      },
      external,
      plugins: createPlugins(pkg, true),
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
      plugins: createPlugins(pkg, false),
    },
  ];
};

// 为每个包创建配置
module.exports = packages.flatMap(createConfig);
