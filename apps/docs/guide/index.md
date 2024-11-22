# 快速开始

## 介绍

Vue3 Library 是一个基于 Vue3 的组件库和工具集，包含以下几个部分：

- UI 组件库：提供常用的 UI 组件
- 工具函数：提供常用的工具函数
- Hooks：提供可复用的组合式函数

## 安装

使用包管理器安装：

## 使用

### UI 组件

```ts
import { createApp } from 'vue';
import UI from '@vue3-lib/ui';
import '@vue3-lib/ui/dist/styles/index.css';
const app = createApp(App);
app.use(UI);
```

### 工具函数

```ts
import { isString } from '@vue3-lib/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@vue3-lib/hooks';
const { count, increment, decrement } = useCounter();
```
