<template>
  <div class="hz-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import type { NameType, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'HzCollapse'
})


const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>(props.modelValue)

watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one acitve item') 
}

const handleItemClick = (name: NameType) => {
  let _activeNames = [...activeNames.value ]
  if (props.accordion) {
    _activeNames = [ activeNames.value[0] === name ? '' : name ]
    activeNames.value = _activeNames
  } else {
    const index = _activeNames.indexOf(name)
    if (index > -1) {
      // 存在，要删除，即 CollapseItem 要隐藏
      _activeNames.splice(index, 1)
    } else {
      // 不存在，要添加，即 CollapseItem 展示
      _activeNames.push(name)
    }
    activeNames.value = _activeNames
  }
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>