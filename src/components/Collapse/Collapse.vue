<template>
  <div class="hz-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import type { NameType, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'HzCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
const handleItemClick = (name: NameType) => {
  const index = activeNames.value.indexOf(name)
  if (index > -1) {
    // 存在，要删除，即 CollapseItem 要隐藏
    activeNames.value.splice(index, 1)
  } else {
    // 不存在，要添加，即 CollapseItem 展示
    activeNames.value.push(name)
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>