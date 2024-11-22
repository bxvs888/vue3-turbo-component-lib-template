# 组件库模板

这是一个基于 `Turborepo + Vue 3 + TypeScript` 的现代化组件库模板，采用 Monorepo 架构来管理多个包，涵盖了 ESLint、Prettier、Stylelint、Commitlint + Husky + Lint-Staged 和 TypeScript 的项目规范配置。此模板提供了一套完整的开发环境，旨在让开发者能够专注于组件的开发，而无需担心底层配置的复杂性。

## 📦 项目结构

项目采用 Monorepo 架构，主要包含以下部分：

- `packages/lint-configs`：包含所有配置相关的包，例如 ESLint、Prettier、Stylelint、Commitlint 和 TypeScript 配置。这些配置包确保代码风格的一致性和高质量。
- `packages/hooks`：包含所有自定义 Hooks 的包。
- `packages/utils`：包含所有工具函数的包。
- `packages/ui`：包含所有 UI 组件的包。
- `apps/docs`：文档应用，使用 Vitepress 构建，提供详尽的组件库文档和使用指南。
- `playground`：演练场，用于测试和演示组件的示例应用，使用 Vite 构建。

此外，项目还包括自动化脚本和持续集成配置，以支持高效的开发流程和质量保证。

## 相关链接

> 部分代码和结构设计参考了[Vben5](https://github.com/vbenjs/vue-vben-admin)

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Turborepo](https://turbo.build/repo)
- [Vitepress](https://vitepress.dev/)
- [Vite](https://vitejs.dev/)
- [Vben-admin](https://github.com/vbenjs/vue-vben-admin)

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## License

[MIT](LICENSE)
