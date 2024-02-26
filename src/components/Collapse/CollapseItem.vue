<template>
  <div class="hz-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="hz-collapse-item__header" :id="`item-header-${name}`">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="hz-collapse-item__content" :id="`item-content-${name}`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CollapseItemProps } from './types'

defineOptions({
  name: 'HzCollapseItem'
})
defineProps<CollapseItemProps>()
</script>