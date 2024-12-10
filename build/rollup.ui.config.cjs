// 导入必要的 Rollup 插件和工具
const { rollup } = require('rollup');
const vuePlugin = require('@vitejs/plugin-vue'); // Vue 单文件组件编译插件
const esbuild = require('rollup-plugin-esbuild').default; // 快速的 JavaScript/TypeScript 转译器
const { nodeResolve } = require('@rollup/plugin-node-resolve'); // 解析 node_modules 中的模块
const scss = require('rollup-plugin-scss'); // 编译 SCSS 文件
const dts = require('rollup-plugin-dts').default; // 生成 TypeScript 声明文件
const path = require('path'); // Node.js 路径模块
const alias = require('@rollup/plugin-alias'); // 创建导入别名
const fs = require('fs'); // 文件系统
const json = require('@rollup/plugin-json'); // 处理 JSON 文件

// 解析文件路径的辅助函数
const resolveFile = (...args) => path.resolve(__dirname, ...args);
// const UI_ROOT = resolveFile('../packages/ui');

// 确保目录存在
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// 通用插件配置
const getPlugins = (format) => {
  const outputDir = resolveFile(`dist/ui/${format === 'esm' ? 'es' : 'lib'}`);
  ensureDir(outputDir);

  return [
    alias({
      entries: [{ find: '~/_utils', replacement: resolveFile('../packages/ui/src/_utils') }],
    }),
    json({
      preferConst: true,
    }),
    vuePlugin({
      include: [/\.vue$/],
      target: 'esnext',
    }),
    nodeResolve({
      extensions: ['.ts', '.tsx', '.vue', '.js', '.scss'],
      moduleDirectories: ['node_modules', 'src'],
    }),
    esbuild({
      tsconfig: resolveFile('./tsconfig.json'),
      jsx: 'preserve',
    }),
    scss({ fileName: 'style.css' }),
  ];
};

// 类型声明配置
const dtsConfig = {
  input: resolveFile('../packages/ui/src/index.ts'),
  output: {
    file: resolveFile('dist/ui/es/index.d.ts'),
    format: 'es',
  },
  external: [/\.scss$/, 'vue'],
  plugins: [
    alias({
      entries: [{ find: '~/_utils', replacement: resolveFile('../packages/ui/src/_utils') }],
    }),
    dts(),
    json({
      preferConst: true,
    }),
  ],
};

// 构建配置
const buildConfig = (format) => ({
  input: resolveFile('../packages/ui/src/index.ts'),
  output: {
    file: resolveFile(`dist/ui/${format === 'esm' ? 'es/index.mjs' : 'lib/index.js'}`),
    format,
    exports: 'named',
  },
  external: ['vue'],
  plugins: getPlugins(format),
});

async function bundleUI() {
  // 清理之前的构建文件
  const distDir = resolveFile('dist/ui');
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
  }

  const configs = [
    buildConfig('esm'), // ESM 配置
    buildConfig('cjs'), // CommonJS 配置
    dtsConfig, // 类型声明配置
  ];

  for (const config of configs) {
    const bundle = await rollup(config);
    await bundle.write(config.output);
    await bundle.close();
  }
}

module.exports = bundleUI;
