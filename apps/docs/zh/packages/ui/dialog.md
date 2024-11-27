# Dialog 弹窗

基础的弹窗组件。

## 基础用法

<demo vue="ui/dialog/basic.vue" />

| 属性 | 说明               | 类型    | 默认值 |
| ---- | ------------------ | ------- | ------ |
| open | 控制弹窗的显示状态 | boolean | false  |

## 事件

| 事件名 | 说明             |
| ------ | ---------------- |
| close  | 当弹窗关闭时触发 |

## 样式

弹窗可以使用以下类名进行样式定制：

- `.v-dialog`: 主弹窗容器。
- `.v-dialog__overlay`: 背景遮罩。
- `.v-dialog__content`: 弹窗内容区域。

## 代码示例

```vue
<template>
  <VDialog v-model:open="open">
    <div>弹窗内容</div>
  </VDialog>
  <a-button @click="open = true">打开弹窗</a-button>
</template>

<script setup lang="ts">
import { VDialog } from '@mylib/ui';
import { ref } from 'vue';
const open = ref(false);
</script>
```
