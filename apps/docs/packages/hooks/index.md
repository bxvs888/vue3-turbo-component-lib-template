# Hooks

## useCounter

> 计数器 Hook。

```ts
<script setup>
import { useCounter } from '@mylib/hooks'

const { count, increment, decrement } = useCounter()
</script>

<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>
```
