<template>
 <button
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
 >
  <span>
    <slot />
  </span>
 </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'

defineProps<ButtonProps>()
defineOptions({
  name: 'HzButton'
})
</script>

<style scoped>
</style>