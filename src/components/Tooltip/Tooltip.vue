<template>
  <div
    ref="popperContainerNode"
    class="hz-tooltip"
    v-on="outerEvents">
    <div
      class="hz-tooltip__trigger"
      ref="triggerNode"
      v-on="events"
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
import { reactive, ref, watch } from 'vue';
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import type { TooltipProps, TooltipEmits } from './types'
import useClickOutside from '../..//hooks/useClickOutside'

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: Instance | null = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})

// click event
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}

// hover event
const hoverOpen = () => {
  isOpen.value = true
  emits('visible-change', true)
}
const hoverClose = () => {
  isOpen.value = false
  emits('visible-change', false)
}

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value) {
    hoverClose()
  }
})

// add events to DOM
const attachEvents = () => {
  if (props.trigger === 'click') {
    events['click'] = togglePopper
  } else if (props.trigger === 'hover') {
    events['mouseenter'] = hoverOpen
    outerEvents['mouseleave'] = hoverClose
  }
}
attachEvents()
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    // 先清空再赋值
    events = {}
    outerEvents = {}
    attachEvents()
  }
})

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