# Quick Start

## Introduction

mylib-template is a component library and toolkit template project based on Vue3, consisting of the following parts:

- UI Component Library: Provides commonly used UI components
- Utility Functions: Offers common utility functions
- Hooks: Provides reusable composable functions
- Directives: Offers commonly used directives

## Installation

Install using a package manager:

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

## Usage

### UI Components

```ts
// Global import
import { createApp } from 'vue';
import UI from '@mylib/ui';
import '@mylib/ui/style.css';
const app = createApp(App);
app.use(UI);
// Additionally, add the following configuration to tsconfig.json for type hints:
// "types": ["@mylib/ui/global.d.ts"]

// Import on demand
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

### Directives

```ts
import { vFocus } from '@mylib/directives';
// Global import
app.directive('focus', vFocus);

// Import on demand
import { vFocus } from '@mylib/directives';
app.directive('focus', vFocus);
```
