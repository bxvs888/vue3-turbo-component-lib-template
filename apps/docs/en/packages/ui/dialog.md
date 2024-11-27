# Dialog

Basic dialog component.

## Basic Usage

<demo vue="ui/dialog/basic.vue" />

| Property | Description                           | Type    | Default |
| -------- | ------------------------------------- | ------- | ------- |
| open     | Controls the visibility of the dialog | boolean | false   |

## Events

| Event Name | Description                         |
| ---------- | ----------------------------------- |
| close      | Triggered when the dialog is closed |

## Styles

The dialog can be styled using the following class names:

- `.v-dialog`: Main dialog container.
- `.v-dialog__overlay`: Background overlay.
- `.v-dialog__content`: Dialog content area.

## Code Example

```vue
<template>
  <VDialog v-model:open="open">
    <div>Dialog content</div>
  </VDialog>
  <a-button @click="open = true">Open Dialog</a-button>
</template>

<script setup lang="ts">
import { VDialog } from '@mylib/ui';
import { ref } from 'vue';
const open = ref(false);
</script>
```
