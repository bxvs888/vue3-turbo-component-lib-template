<template>
  <div class="v-modal" v-if="open">
    <div class="v-modal__overlay" @click="close"></div>
    <div class="v-modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalProps, ModalEmits } from './Modal.types';

defineOptions({
  name: 'VModal',
});

defineProps<ModalProps>();

const open = defineModel<boolean>('open');

const emit = defineEmits<ModalEmits>();

const close = () => {
  emit('close');
  open.value = false;
};
</script>

<style src="./Modal.scss"></style>
