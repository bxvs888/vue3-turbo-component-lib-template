<template>
  <div class="demo-container">
    <div class="demo-content">
      <slot></slot>
    </div>
    <div v-if="sourceCode" class="demo-source">
      <div class="source-code" :class="{ show: showCode }">
        <slot name="source"></slot>
      </div>
      <div class="source-actions">
        <button @click="toggleCode">
          {{ showCode ? '隐藏代码' : '显示代码' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showCode = ref(false);
const sourceCode = ref(false);

const toggleCode = () => {
  showCode.value = !showCode.value;
};
</script>

<style lang="scss" scoped>
// 样式已移至 main.scss
</style>
