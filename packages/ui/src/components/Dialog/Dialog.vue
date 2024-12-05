<template>
  <dialog class="v-dialog" v-if="open">
    <div class="v-dialog__overlay" @click="close"></div>
    <div class="v-dialog__content">
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { DialogProps, DialogEmits } from './Dialog.types';

defineOptions({
  name: 'VDialog',
});

defineProps<DialogProps>();

const open = defineModel<boolean>('open');

const emit = defineEmits<DialogEmits>();

const close = () => {
  emit('close');
  open.value = false;
};
</script>

<style lang="scss">
@use './Dialog.scss' as *;
</style>
