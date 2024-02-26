<template>
  <div class="hz-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import type { NameType } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'HzCollapse'
})
const activeNames = ref<NameType[]>([])
const handleItemClick = (name: NameType) => {
  const index = activeNames.value.indexOf(name)
  if (index > -1) {
    // 存在，要删除，即 CollapseItem 要隐藏
    activeNames.value.splice(index, 1)
  } else {
    // 不存在，要添加，即 CollapseItem 展示
    activeNames.value.push(name)
  }
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>