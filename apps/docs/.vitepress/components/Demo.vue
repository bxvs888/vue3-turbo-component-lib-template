<template>
  <div class="demo-container">
    <div class="demo-wrapper">
      <div class="demo-component">
        <slot></slot>
      </div>
    </div>
    <div class="demo-actions">
      <button class="demo-actions-button" @click="toggleCode">
        {{ expanded ? '收起代码' : '显示代码' }}
      </button>
    </div>
    <div class="demo-code" :class="{ expanded }">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref(false);
const toggleCode = () => {
  expanded.value = !expanded.value;
};
</script>

<style scoped>
.demo-container {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.demo-wrapper {
  padding: 24px;
}

.demo-actions {
  display: flex;
  justify-content: center;
  padding: 8px;
  border-top: 1px solid var(--vp-c-divider);
}

.demo-actions-button {
  color: var(--vp-c-brand);
  cursor: pointer;
  background: transparent;
  border: none;
}

.demo-code {
  max-height: 0;
  overflow: hidden;
  border-top: 1px solid var(--vp-c-divider);
  transition: max-height 0.3s ease-out;
}

.demo-code.expanded {
  max-height: 1000px;
}
</style>
