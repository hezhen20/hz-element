<template>
 <button
    ref="_ref"
    class="hz-button"
    :class="{
      [`hz-button--${type}`]: type,
      [`hz-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
 >
  <span>
    <slot />
  </span>
 </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

defineOptions({
  name: 'HzButton'
})

const _ref = ref<HTMLButtonElement>()

// 暴露组件实例
defineExpose({
  ref: _ref
})
</script>

<style scoped>
</style>