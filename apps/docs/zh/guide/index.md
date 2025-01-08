# 快速开始

## 介绍

mylib-template 是一个基于 Vue3 的组件库和工具集模板项目，包含以下几个部分：

- UI 组件库：提供常用的 UI 组件
- 工具函数：提供常用的工具函数
- Hooks：提供可复用的组合式函数
- Directives：提供常用的指令

## 安装

使用包管理器安装：

::: code-group

```bash [npm]
npm install @mylib/ui @mylib/utils @mylib/hooks @mylib/directives
```

```bash [yarn]
yarn add @mylib/ui @mylib/utils @mylib/hooks @mylib/directives
```

```bash [pnpm]
pnpm add @mylib/ui @mylib/utils @mylib/hooks @mylib/directives
```

```bash [bun]
bun add @mylib/ui @mylib/utils @mylib/hooks @mylib/directives
```

:::

## 使用

### UI 组件

```ts
// 全局引入
import { createApp } from 'vue';
import UI from '@mylib/ui';
import '@mylib/ui/style.css';
const app = createApp(App);
app.use(UI);
//  tsconfig.json 还需要添加以下配置以获得类型提示：
//  "types": ["@mylib/ui/global.d.ts"]

// 按需引入
import { Button } from '@mylib/ui';
import '@mylib/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### 工具函数

```ts
import { isString } from '@mylib/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@mylib/hooks';
const { count, increment, decrement } = useCounter();
```

### 指令

```ts
import { vFocus } from '@mylib/directives';
// 全局引入
app.directive('focus', vFocus);

// 按需引入
import { vFocus } from '@mylib/directives';
app.directive('focus', vFocus);
```
