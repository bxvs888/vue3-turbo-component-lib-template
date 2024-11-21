<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${type}`,
      `ui-button--${size}`,
      { 'ui-button--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.ui-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.ui-button--primary {
  background-color: #1a73e8;
  color: white;
}

.ui-button--secondary {
  background-color: #f1f3f4;
  color: #1a73e8;
}

.ui-button--text {
  background-color: transparent;
  color: #1a73e8;
}

.ui-button--small {
  padding: 6px 12px;
  font-size: 14px;
}

.ui-button--medium {
  padding: 8px 16px;
  font-size: 16px;
}

.ui-button--large {
  padding: 12px 24px;
  font-size: 18px;
}

.ui-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-button:hover:not(.ui-button--disabled) {
  opacity: 0.9;
}
</style> 