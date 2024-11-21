import { defineConfig } from 'rollup';
import vuePlugin from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
      exports: 'named',
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: false,
      exports: 'named',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  external: ['vue', /^vue(\/.+|$)/, '@vue/runtime-core', '@vue/shared'],
  plugins: [
    vuePlugin({
      include: [/\.vue$/]
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts', '.vue'],
      preferBuiltins: true
    }),
    commonjs({
      extensions: ['.js', '.ts']
    }),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: false,
      declaration: true,
      declarationDir: './dist/types',
      rootDir: 'src',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['node_modules', 'dist']
    }),
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      minimize: true,
      sourceMap: false
    })
  ]
});
