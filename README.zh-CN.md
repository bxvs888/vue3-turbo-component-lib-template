[English](./README.md) | **简体中文**

<h1 align="center">Vue3 Turbo Component Library Template 🚀</h1>

<p align="center">
  快速构建属于你的企业级 Vue 3 组件库，基于最新技术栈的 Monorepo 模板
</p>

<p align="center">
  <a href="https://github.com/huangmingfu/vue3-turbo-component-lib-template/stargazers">
    <img src="https://img.shields.io/github/stars/huangmingfu/vue3-turbo-component-lib-template" alt="GitHub stars">
  </a>
  <a href="https://github.com/huangmingfu/vue3-turbo-component-lib-template/issues">
    <img src="https://img.shields.io/github/issues/huangmingfu/vue3-turbo-component-lib-template" alt="GitHub issues">
  </a>
  <a href="https://github.com/huangmingfu/vue3-turbo-component-lib-template/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/huangmingfu/vue3-turbo-component-lib-template" alt="GitHub">
  </a>
  <a href="https://github.com/huangmingfu/vue3-turbo-component-lib-template/network/members">
    <img src="https://img.shields.io/github/forks/huangmingfu/vue3-turbo-component-lib-template" alt="GitHub forks">
  </a>
</p>

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-42b883?style=flat-square&logo=vue.js&logoColor=white)](https://v3.vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-%23000000?style=flat-square&logo=turborepo&logoColor=white)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-%23F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License](https://img.shields.io/github/license/huangmingfu/vue3-turbo-component-lib-template?style=flat-square)](LICENSE)

这是一个基于 `Turborepo + Vue 3.5 + TypeScript` 的现代化组件库模板，采用 Monorepo 架构管理多个包，预配置了完整的代码规范和开发工具链。该模板旨在帮助开发者专注于组件开发，而无需处理繁琐的底层配置，快速构建属于自己的企业级组件库。

## ✨ 核心特性

- 🚀 **最新技术栈** - 基于 Vue 3.5 + TypeScript 5+，享受最新特性
- 📦 **Monorepo 架构** - 使用 Turborepo 管理多个包，提升代码复用率
- 🚫 **强制 pnpm** - 解决幽灵依赖问题，节省磁盘空间，提升安装速度
- 🎨 **完整规范配置** - 集成 ESLint、Prettier、Stylelint、Commitlint 等代码规范
- 📚 **文档支持** - 使用 VitePress 构建文档，支持国际化语言切换
- 🔥 **按需引入** - 支持 Tree Shaking，减小最终打包体积
- 🎯 **完整类型提示** - 全面的 TypeScript 类型定义，提升开发体验
- 🛠️ **丰富工具集** - 内置常用 Hooks、工具函数和指令
- 🔄 **热更新支持** - 开发时实时预览，提升开发效率
- 🔧 **一键重命名** - 快速将 @mylib 替换为你的自定义包名
- ⚡️ **多种构建方式** - 支持 Gulp 统一构建或各包独立构建
- 📝 **版本管理** - 使用 Changeset 管理多包版本和发布流程

## 📁 项目结构

```
├── apps/
│   └── docs/           # 组件库文档，基于 VitePress
├── packages/
│   ├── ui/             # UI 组件库
│   ├── hooks/          # 自定义 Hooks
│   ├── directives/     # 自定义指令
│   ├── utils/          # 工具函数库
│   └── lint-configs/   # 代码规范配置
├── playground/         # 组件演示环境
├── build/              # 统一构建脚本
└── scripts/            # 辅助脚本
```

## 🚀 快速开始

```bash
# 1. 克隆项目模板
git clone https://github.com/huangmingfu/vue3-turbo-component-lib-template.git

# 2. 安装依赖
pnpm install

# 3. 启动开发环境
pnpm dev

# 4. 构建项目
pnpm build
```

### 安装组件库到你的项目

```bash
# 将 @mylib 替换为你自己的包名
pnpm add @mylib/ui @mylib/utils @mylib/hooks @mylib/directives

# 示例安装
pnpm add @hmflib/ui @hmflib/utils @hmflib/hooks @hmflib/directives
```

## 🧰 开发命令

```bash
# 开发相关
pnpm dev              # 启动所有包的开发环境
pnpm dev:docs         # 启动文档应用
pnpm dev:play         # 启动演练场

# 构建相关
pnpm build            # 构建所有包
pnpm build:docs       # 构建文档应用
pnpm build:gulp       # 使用 gulp 统一打包

# 测试相关
pnpm test             # 测试所有包
pnpm test:ui          # 测试 UI 包
pnpm test:coverage    # 测试所有包的覆盖率

# 代码质量
pnpm lint:all         # 检查所有代码规范
pnpm deps:check       # 检查依赖更新
pnpm deps:update      # 更新所有依赖

# 其他
pnpm clean            # 清理构建产物
pnpm rename-pkg       # 一键重命名包名
pnpm generate:component # 生成新组件
```

## 🎯 为什么选择这个模板？

### 相比其他组件库模板的优势：

1. **技术前沿** - 基于最新版本的 Vue 3.5 和 TypeScript 5+，始终与技术发展同步
2. **开箱即用** - 预配置完整的开发工具链，无需额外配置即可开始开发
3. **灵活架构** - Monorepo 结构便于管理多个包，同时保持各模块的独立性
4. **企业级规范** - 集成完整的代码规范和提交规范，保证代码质量
5. **文档完善** - 内置文档系统，支持国际化，便于组件文档编写
6. **多种构建方式** - 支持统一构建和独立构建，适应不同团队需求
7. **易于定制** - 提供一键重命名脚本，快速定制为自己的组件库

## 📸 效果预览

### 文档系统

> 支持国际化语言切换

![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202412291431548.png)
![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411271629728.png)
![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411271629672.png)

### 演练场

> 实时预览和测试组件

![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411271630381.png)
![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411271631563.png)

## 🔧 技术栈

- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集，提供类型安全
- [Turborepo](https://turbo.build/repo) - 高性能的 Monorepo 构建系统
- [VitePress](https://vitepress.dev/) - 基于 Vite 的静态站点生成器
- [Vite](https://vitejs.dev/) - 新一代前端构建工具
- [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器
- [ESLint](https://eslint.org/) - JavaScript/TypeScript 代码质量检查工具
- [Prettier](https://prettier.io/) - 代码格式化工具
- [Stylelint](https://stylelint.io/) - CSS/SCSS/Less 代码检查工具
- [Commitlint](https://commitlint.js.org/) - 提交信息规范检查工具
- [husky](https://typicode.github.io/husky/) - Git 提交钩子管理工具
- [lint-staged](https://github.com/lint-staged/lint-staged) - 对 Git 暂存文件进行 lint 检查
- [Changesets](https://github.com/changesets/changesets) - 版本管理和发布工具

## 📚 相关链接

> 部分代码和结构设计参考了 [Vben5](https://github.com/vbenjs/vue-vben-admin)

- [Vue 3 官方文档](https://vuejs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Turborepo 官方文档](https://turbo.build/repo)
- [VitePress 官方文档](https://vitepress.dev/)
- [Vben Admin](https://github.com/vbenjs/vue-vben-admin)

## ❓ 常见问题

### 1. 为什么推荐使用 pnpm？

pnpm 相比 npm 和 yarn 有以下优势：

- 解决了幽灵依赖和幻影依赖问题
- 节省大量磁盘空间
- 安装速度更快
- 保证 node_modules 结构的一致性

### 2. 如何自定义包名？

项目默认使用 `@mylib` 作为包名前缀，你可以通过以下命令一键替换：

```bash
# 将 @mylib 替换为你的自定义包名，例如 @yourname
pnpm rename-pkg "@mylib" "@yourname"
```

### 3. 如何生成新组件？

使用内置脚本可以快速生成新组件：

```bash
pnpm generate:component
```

### 4. 遇到命令执行失败怎么办？

如果遇到 `rm -rf` 或其他 shell 命令执行失败的问题，请使用 Git Bash 终端运行命令。  
![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202412251542234.png)

如果 `pnpm run dev` 运行失败，请先执行构建命令：

```bash
pnpm run build
pnpm run dev
```

## 🤝 贡献指南

欢迎任何形式的贡献！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

[MIT](LICENSE)

---

⭐ 如果你喜欢这个项目，请给它一个 star！你的支持是我们持续改进的动力！
