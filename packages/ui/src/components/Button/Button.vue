<template>
  <button
    class="v-button"
    :class="[
      type ? `v-button--${type}` : '',
      size ? `v-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ButtonProps, ButtonEmits } from './Button.types';

defineOptions({
  name: 'VButton'
});

const props = withDefaults(defineProps<ButtonProps>(), {
  type: undefined,
  size: 'medium',
  disabled: false,
  plain: false,
  round: false
});

const emit = defineEmits<ButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style src="./Button.scss"></style>
