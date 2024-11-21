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

<style scoped lang="scss">
.v-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  transition: all 0.3s;

  &--primary {
    background-color: var(--v-primary-color, #646cff);
    color: white;
  }

  &--success {
    background-color: var(--v-success-color, #67c23a);
    color: white;
  }

  &--warning {
    background-color: var(--v-warning-color, #e6a23c);
    color: white;
  }

  &--danger {
    background-color: var(--v-danger-color, #f56c6c);
    color: white;
  }

  &--medium {
    padding: 8px 16px;
    font-size: 14px;
  }

  &--small {
    padding: 6px 12px;
    font-size: 12px;
  }

  &--large {
    padding: 12px 20px;
    font-size: 16px;
  }

  &.is-plain {
    background-color: transparent;
    border-color: currentColor;
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
