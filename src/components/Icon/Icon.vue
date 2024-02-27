<template>
  <i 
    class="hz-icon"
    :class="{[`hz-icon--${type}`]: type}"
    :style="customStyles"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { omit } from 'lodash-es'
import { computed } from 'vue';
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'HzIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()
// 过滤自定义的两个属性
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>