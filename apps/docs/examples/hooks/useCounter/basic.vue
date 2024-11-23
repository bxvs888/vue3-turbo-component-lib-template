<template>
  <div class="demo">
    <button @click="decrement">decrement</button>
    <span>{{ count }}</span>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup>
import { useCounter } from '@mylib/hooks';

const { count, increment, decrement } = useCounter();
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
}
</style>
