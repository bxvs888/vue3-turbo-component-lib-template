**English** | [简体中文](./README.zh-CN.md)

# Vue3 Component Library Template

This is a modern component library template based on `Turborepo + Vue 3.5 + TypeScript`, using Monorepo architecture to manage multiple packages. It includes project specification configurations for ESLint, Prettier, Stylelint, Commitlint + Husky + Lint-Staged, and TypeScript. This template provides a complete development environment, allowing developers to focus on component development without worrying about the complexity of underlying configurations.

## ✨ Features

- 📦 Based on Monorepo architecture for better code reuse and version management
- 🚀 Using Turbo + Vue 3.5 + TypeScript, enjoy the latest technology features
- 🎨 Integrated complete code specification configuration to ensure code quality
- 📚 Using VitePress to build documentation, supporting enhanced Markdown syntax
- 🔥 Component library supports on-demand import to reduce bundle size
- 🎯 Complete type hints to improve development experience
- 🛠️ Rich utility functions and Hooks to improve development efficiency
- 🔄 Support hot updates to enhance development experience
- ⚡️ Based on Vite build, ultimate development experience
- 🚚 ESM and CJS products

## 📦 Project Structure

The project uses Monorepo architecture and mainly contains the following parts:

- `packages/lint-configs`: Contains all configuration-related packages, such as ESLint, Prettier, Stylelint, Commitlint, and TypeScript configurations. These configuration packages ensure code style consistency and high quality.
- `packages/hooks`: Contains all custom Hooks packages.
- `packages/utils`: Contains all utility function packages.
- `packages/ui`: Contains all UI component packages.
- `apps/docs`: Documentation application, built with Vitepress, providing detailed component library documentation and usage guides.
- `playground`: Playground for testing and demonstrating component examples, built with Vite.

Additionally, the project includes automated scripts and continuous integration configurations to support efficient development processes and quality assurance.

## 🚀 Quick Start

```bash
pnpm install @mylib/ui @mylib/utils @mylib/hooks
```

### document

![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241135445.png) ![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241135191.png) ![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241136925.png)

### playground

![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241136535.png) ![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241136209.png)

## Related Links

> Some code and structure design references [Vben5](https://github.com/vbenjs/vue-vben-admin)

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Turborepo](https://turbo.build/repo)
- [Vitepress](https://vitepress.dev/)
- [Vite](https://vitejs.dev/)
- [Vben-admin](https://github.com/vbenjs/vue-vben-admin)

## Contributing Guide

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[MIT](LICENSE)
