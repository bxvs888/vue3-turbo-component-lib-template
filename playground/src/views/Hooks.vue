<template>
  <div class="hooks-demo">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane v-for="item in renderCmp" :key="item.index" :tab="item.name" />
    </a-tabs>
    <component :is="renderCmp[activeKey]?.component" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeKey = ref(0);

const components = import.meta.glob('./components/Hooks/**.vue', {
  eager: true,
  import: 'default',
});

const renderCmp = Object.entries(components).map(([path, component], index) => {
  const name = path.match(/[^/]+(?=\.vue$)/)?.[0] || 'error';
  return {
    name,
    component,
    index,
  };
});
</script>
