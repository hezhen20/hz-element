<template>
  <div class="hz-tooltip">
    <div
      class="hz-tooltip__trigger"
      ref="triggerNode"
      @click="togglePopper"
    >
      <slot />
    </div>
    <div
      v-if="isOpen"
      class="hz-tooltip__popper"
      ref="popperNode"
    >
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import type { TooltipProps, TooltipEmits } from './types'
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom'
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
let popperInstance: Instance | null = null

const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}

watch(isOpen, (newVal) => {
  if (newVal && triggerNode.value && popperNode.value) {
    popperInstance = createPopper(triggerNode.value, popperNode.value, {
      placement: props.placement
    })
  } else {
    popperInstance?.destroy()
  }
}, { flush: 'post'}) // DOM 节点生成后再 watch
</script>