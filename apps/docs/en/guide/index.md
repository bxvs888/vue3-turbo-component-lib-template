# Quick Start

## Introduction

mylib-template is a Vue3-based component library and utility template project, including the following parts:

- UI Component Library: Provides commonly used UI components
- Utility Functions: Provides commonly used utility functions
- Hooks: Provides reusable composition functions

## Installation

Install using package manager:

::: code-group

```bash [npm]
npm install @mylib/ui @mylib/utils @mylib/hooks
```

```bash [yarn]
yarn add @mylib/ui @mylib/utils @mylib/hooks
```

```bash [pnpm]
pnpm add @mylib/ui @mylib/utils @mylib/hooks
```

```bash [bun]
bun add @mylib/ui @mylib/utils @mylib/hooks
```

:::

## Usage

### UI Components

```ts
// Global import
import { createApp } from 'vue';
import UI from '@mylib/ui';
import '@mylib/ui/style.css';
const app = createApp(App);
app.use(UI);
// You also need to add the following configuration in tsconfig.json to get type hints:
// "types": ["@mylib/ui/global.d.ts"]

// On-demand import
import { Button } from '@mylib/ui';
import '@mylib/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### Utility Functions

```ts
import { isString } from '@mylib/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@mylib/hooks';
const { count, increment, decrement } = useCounter();
```
