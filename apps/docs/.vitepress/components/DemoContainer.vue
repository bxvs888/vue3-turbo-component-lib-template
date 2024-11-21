<template>
  <div class="demo-container">
    <div class="demo-content">
      <slot></slot>
    </div>
    <div v-if="sourceCode" class="demo-source">
      <div class="source-code">
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

<style scoped>
.demo-container {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.demo-content {
  padding: 24px;
}

.demo-source {
  border-top: 1px solid var(--vp-c-divider);
}

.source-actions {
  padding: 8px;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
}

.source-actions button {
  font-size: 14px;
  color: var(--vp-c-brand);
  cursor: pointer;
  background: none;
  border: none;
}

.source-code {
  display: none;
  padding: 16px;
  overflow: auto;
  background-color: var(--vp-code-block-bg);
}

.source-code:global(.show) {
  display: block;
}
</style>
