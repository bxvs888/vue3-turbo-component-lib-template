<template>
  <a-space>
    <!-- 全局引入，node_modules -->
    <VButton>按钮</VButton>
    <VButton type="primary">按钮</VButton>
    <VButton type="success">按钮</VButton>
    <VButton type="warning">按钮</VButton>
    <VButton type="danger">按钮</VButton>
    <VButton type="info">按钮</VButton>
  </a-space>
</template>

<script setup lang="ts">
// import { VButton } from 'mylib/ui'; // 本地调试
import { VButton } from '@mylib/ui'; // 从node_modules/@mylib/ui/dist/es里面引入
// 导出类型测试
// import type { ButtonProps } from '@mylib/ui';
// const buttonProps: ButtonProps = {
//   type: 'primary',
// };
</script>
