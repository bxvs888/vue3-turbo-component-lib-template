<template>
  <input type="text" v-focus value="123" />
</template>

<script setup lang="ts">
import { vFocus } from '@mylib/directives';
</script>

<style scoped>
input {
  all: revert;
}
</style>
