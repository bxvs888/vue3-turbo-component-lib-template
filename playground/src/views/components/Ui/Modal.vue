<template>
  <a-space>
    <VModal v-model:open="open"> 2222 </VModal>
    <a-button @click="open = true"> 弹窗 </a-button>
  </a-space>
</template>

<script setup lang="ts">
import { VModal } from 'mylib/ui';
import { ref } from 'vue';
console.log(VModal);
const open = ref(false);
</script>
